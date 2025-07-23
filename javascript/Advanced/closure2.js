function greetUser(greeting)
{
    return {
        getUser(name) {
            console.log(`Hello ${name}, Good ${greeting}`);
        }
    }
}

const greet = greetUser("Good Morning!");
greet.getUser("Developer");
