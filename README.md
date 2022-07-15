
*** THE PROBLEM TO SOLVE ***

An array of integers (called nums) is provided, an integer target is also provided.
We are to write a function that takes the array of integers (in this case, nums) as input and then returns an array with two elements whose sum equals the target.

For example:

Input:
nums = [2, 7, 11, 15]
target = 9

Output:
[2, 7]

Explanation:
Because 2 + 7 == 9, we return [2, 7]

Requirement:
The solution is to be written in either Javascript or PHP.



***  PROJECT FOLDER STRUCTURE  ***

This project contains a root folder which then contains a sub-directory (js - which also contains default.js file), an index.html file and a README.md file.

The folder structure looks like this:

root
|- js
|   |- default.js
|
|- index.html
|- README.md

You can run index.html directly on the browser. The default.js file in the js sub-directory is used inside the index.html file using <script> tag.

NOTED:
* Once you run the index.html file on your browser
* open your developer tool and get to the console.
* Once in the console, you will see the output of the script (default.js).


*** DEFAULT.JS ***
The default.js file is a javascript file used to solve the problem above.

In the script file, we have a function ( targetOperandsArray() ).

This function is built to take an array as an input. Thus, it has a few checks (in form of conditionals) to ensure that the right type is passed to it.
In situations where a value that isn't an array is passed as the argument, it returns a message to let us know this.

Basically, the function takes an array as input and then scans the elements of the array.
It scans the elements of the array to find if any two elements of the array can add up to the target.
Once two elements whose sum equals target is found, it returns an array of such elements, otherwise, it returns a message to let us know this.


I have used comments to explain parts of the program to ensure easy of understanding.
Feel free to reach out to me if you need more clarification.