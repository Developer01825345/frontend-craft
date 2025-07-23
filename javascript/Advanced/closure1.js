function createCounter()
{
    let counter = 0;
    
    return {
        increment()
        {
            counter += 1;
            console.log(counter);
            return counter;
        },
        reset()
        {
            counter = 0;
            console.log(`Counter reset to ${counter}.`);
            return counter;
        }
    };
}

const counter = createCounter();

for(let i=0; i<5; i++)
{
    counter.increment();
}

counter.reset();

counter.increment();