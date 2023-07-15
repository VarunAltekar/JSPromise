let func1 = (call_two) => {
    console.log("func1 completed. call func2");
    call_two();
};

let func2 = () => {
    console.log("func2 completed."); 
};

func1(func2);