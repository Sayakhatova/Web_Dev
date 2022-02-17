function sumInput(){
    let numbers = [];

    while(true){
        let num = prompt('Enter number', 0);

        if(value == '' || value == null){
            break;
        }

        num.push(+value);
    }

    let sum = 0;
    for(let i of numbers){
        sum += number;
    }

    return sum;
}