# web-Calculator

I wanted to learn how math expressions parsers worked and basic html + javascript, so I did a small project that uses all of it.

See the page for the project in [this link](https://gabrielpazinatto.github.io/web-Calculator/).

## About the calculator

The project consists in three files: index.html, parser.js and index.js. index.html contains the UI for the calculator, while index.js implements functionalities for all the buttons and parser.js adds the function that processes the expression.

The buttons in the UI simply change the input field, adding and removing characters, then, the input is tokenized and reordered using the _shunting yard algorithm_, that transforms the expression's format into the _reverse polish notation_. Then, another simple algorithm is used to calculate the result.

## The Shunting Yard Algorithm and RPN

The algorithm consists on the following steps:

```pseudo
1.  While there are tokens to be read:
2.        Read a token
3.        If it's a number add it to queue
4.        If it's an operator
5.               While there's an operator on the top of the stack with greater precedence:
6.                       Pop operators from the stack onto the output queue
7.               Push the current operator onto the stack
8.        If it's a left bracket push it onto the stack
9.        If it's a right bracket 
10.            While there's not a left bracket at the top of the stack:
11.                     Pop operators from the stack onto the output queue.
12.             Pop the left bracket from the stack and discard it
13. While there are operators on the stack, pop them to the queue
```

* This pseudocode was taken from [this](https://brilliant.org/wiki/shunting-yard-algorithm/) site.

### Examples

<center>

| Infix notation | Reverse Polish Notation |
|:---:|:---:|
|2 / (2 * 4 - 3) | 2 2 4 * 3 - /|
|2 + 2 - 3|2 2 + 3 -|
|10 + 6 / 2 | 10 6 2 / +|

</center>

### Processing the RPN expression

```pseudo
RPNqueue <= list of tokens in RPN
OperandStack <= []

1. While the queue is not empty:
2.      Takes a token from the queue (popleft)
3.      if the token is a literal:
4.              pushes it to the OperandStack      
5.      if the token is an operator:
6.              do the corresponding operation with the 2 operands in the top of the OperandStack.              
7.              push the result to the OperandStack

8. Return the remaining item in the stack. 
```
