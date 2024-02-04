/*
Operator	    Description
    +	        Addition
    -	        Subtraction
    *	        Multiplication
    **      	Exponentiation (ES2016)
    /	        Division
    %	        Modulus (Division Remainder)
    ++      	Increment
    --      	Decrement

Operator	Example	    Same As
    =	    x = y	    x = y
    +=	    x += y     	x = x + y
    -=	    x -= y     	x = x - y
    *=	    x *= y     	x = x * y
    /=	    x /= y     	x = x / y
    %=	    x %= y     	x = x % y
    **= 	x **= y	    x = x ** y

Operator	    Description
    ==	        equal to
    ===     	equal value and equal type
    !=	        not equal
    !==     	not equal value or not equal type
    >	        greater than
    <	        less than
    >=	        greater than or equal to
    <=	        less than or equal to
    ?	        ternary operator

Operator	    Description
    &&	        logical and
    ||	        logical or
    !	        logical not

Operator	        Description
typeof	            Returns the type of a variable
instanceof	        Returns true if an object is an instance of an object type

Operator	Description	                    Example	        Same as	            Result	        Decimal
    &	        AND	                        5 & 1	        0101 & 0001     	0001	        1
    |	        OR	                        5 | 1	        0101 | 0001	        0101	        5
    ~	        NOT	                        ~ 5	            ~0101	            1010	        10
    ^	        XOR	                        5 ^ 1	        0101 ^ 0001	        0100	        4
    <<	        left shift	                5 << 1	        0101 << 1	        1010	        10
    >>	        right shift	                5 >> 1	        0101 >> 1	        0010	        2
    >>>	        unsigned right shift	    5 >>> 1	        0101 >>> 1	        0010	        2

*/

let x = 5;
let z = x ** 2; //x to the power 2

console.log(2 === 2);
console.log(2 !== 2);

let a = "7";
let b = "50";
let c = a < b; //checks alphabetically