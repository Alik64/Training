#!/bin/bash
#Pass "Shell is fun" (3 arguments) to the script as an array and print the length of the array.
args=("$@")
echo ${args[0]} ${args[1]} ${args[2]}
echo "The length of array is $#"
