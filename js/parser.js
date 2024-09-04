const literal = 'LITERAL';
const operator = 'OPERATOR';
const lBracket = 'L_BRACKET'; // '('
const rBracket = 'R_BRACKET'; // ')'

// TODO: add more operations
const operators = ['+', '-', '*', '/', '^', '%'];

// used to decide the order of operations
var precedences = {};
precedences = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '%': 2,
    '^': 3
};

// lambda functions for each operator
var operations = {};
operations = {
    '+': (a, b) => a+b,
    '-': (a, b) => a-b,
    '*': (a, b) => a*b,
    '/': (a, b) => a/b,
    '%': (a, b) => a%b,
    '^': (a, b) => a**b  
};

class Token{
    type;
    val;
    constructor(type, val){
        this.type = type;
        this.val = val;
    };
}

function tokenize(expr){
    //regex to get all values, operators and delimiters
    // (\d+(\.\d+)?) gets ints and floats
    // ([+\-*/^()]) gets the other operators
    const re = /(\d+(\.\d+)?)|([+\-*/^()%])/g;
    const tokens = expr.match(re);
    var tokenized = [];

    if(tokens == null){
        return null;
    }

    tokens.forEach(token => {
        if(operators.includes(token)){
            tokenized.push(new Token(operator, token));
        }
        else if(token == '('){
            tokenized.push(new Token(lBracket, token));
        }
        else if(token == ')'){
            tokenized.push(new Token(rBracket, token));
        }
        else{
            tokenized.push(new Token(literal, parseFloat(token)));
        }
    });

    return tokenized;
};

/*-------------------------------------
CONVERSTION TO REVERSE POLISH NOTATION

22 + 3 - 4 ==> + - 22 3 4;

Basically reorders the tokens based
on operator precedence, in a way that
it's easier to calculate the result.

uses an operator stack to store operators.
pushes literals to the output queue.
pop operators with higher precedence
from the operator stack before pushing
the other operators to the queue
when finding a ')', pops out all the
operators to the queue, until finds a 
'(' in the stack.
-------------------------------------*/
function convertToRPN(tokens){
    if(tokens == null){
        return null;
    }

    var opStack = [];
    var outQueue = [];

    while(tokens.length > 0){
        var token = tokens.shift();

        //pushes literals to the output queue
        if(token.type == literal){
            outQueue.push(token.val);
        }
            
        // pushes operators with higher precedence to the output before
        // operators with lower precedence
        else if(token.type == operator){
            while(opStack.length > 0 && precedences[opStack[opStack.length - 1]] > precedences[token.val]){
                outQueue.push(opStack.pop());
            };  
            opStack.push(token.val);
        }

        else if(token.val == '('){
            opStack.push(token.val);
        }

        // pops into the queue all the operators between brackets
        else if(token.val == ')'){
            while(opStack[opStack.length - 1] != '('){
                outQueue.push(opStack.pop());
            };
            opStack.pop();
        };
    };

    // pops the remaining operators (opStack might not be empty at this point)
    while(opStack.length > 0){
        outQueue.push(opStack.pop());
    };
    return outQueue;
};

//evaluates the rpn expression
function calculateRPN(rpn){
    if(rpn == null){
        return 0;
    }

    var operandStack = [];
   
    while(rpn.length > 0){
        let token = rpn.shift();
        //stacks the operands until finds an operator
        if(!operators.includes(token)){
            operandStack.push(token);
        }
        else{
            //puts the result of the operation at the top of the operand stack
            let operand1 = operandStack.pop();
            let operand2 = operandStack.pop();
            operandStack.push(operations[token](operand2, operand1));
        };
    };
    return operandStack[0];
};

export function calculate_expression(expr){
    console.log(result);
    return calculateRPN(convertToRPN(tokenize(expr)));
}



