console.log(null > 0); //false, because null is empty value
console.log(null == 0); //false, because null is empty value
console.log(null >= 0); //true, here it has convert null to number

// Note: It is because an equality check (==) and comparisons (>.<.>=,<=) work differently. Comparisons convert null to a number, treating it as 0.
// That's why null>=0 returns true, and null>0 returns false