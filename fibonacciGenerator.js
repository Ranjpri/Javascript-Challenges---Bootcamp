var output = [];
function fibonacci(n){
    var firstNum = 0;
    var secondNum = 1;
    var temp = 0;
        
    for( var i = 1; i <= n; i++)
    {
        if(i == 1)
        {
           output.push(firstNum);        
        }
        if(i == 2)
        {
            output.push(secondNum);
        }
        else if(i > 2)
        {
            temp = firstNum;
            firstNum = secondNum;        
            secondNum = temp+secondNum;
        
            output.push(secondNum);
        }    
    }
    console.log(output);

}
fibonacci(10);