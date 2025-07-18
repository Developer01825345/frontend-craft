const obj = {
    firstName : "first",
    lastName : "last",
    age : 100,
    testFunc: function(){
        console.log("anonymous");
    }
}

obj.firstName = "kinjal";
obj.phone = 123456789;
obj.testFunc();

console.log(obj);
delete obj.age; // To delete object property.
console.log(obj);

console.log(Boolean(10 > 9));

