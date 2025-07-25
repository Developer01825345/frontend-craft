//typed function
console.log(
(function(number1: number, number2: number, number3: number): number
{
    return number1 * number2 * number3;
})(2, 2, 3));

//typed function with optional parameter
console.log(
(function(string1: string, string2: string, string3?: string): string
{
    return `All the strings are here, ${string1}, ${string2}, ${string3}`;
})("str1", "str2"));