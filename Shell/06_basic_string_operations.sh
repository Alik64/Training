#!/bin/bash

BUFFETT="Life is like a snowball. The important thing is finding wet snow and a really long hill."
# write your code here
ISAY="Life is like a snowball. The important thing is finding wet snow and a really long hill."
ISAY=${ISAY[@]/snow/foot}
ISAY=${ISAY[@]// snow/}
ISAY=${ISAY[@]/finding/getting}
POS=`expr index "$ISAY" 'w'`
ISAY=${ISAY::$POS+2}










# Test code - do not modify
echo "Warren Buffett said:"
echo $BUFFETT
echo "and I say:"
echo $ISAY
