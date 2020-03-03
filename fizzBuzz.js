var output = [];
var limit = prompt("Enter the number up to which to print fizzbuzz?");
var i = 1;
while(i <= limit)
{   
    i++;
    fizzBuzz();

}
function fizzBuzz(){
    
    var len = output.length;
    len = ++len;   
    var element = ''; 

    //Check for Fizz(3) , Buzz(5) or FizzBuzz(3&&5)
    if(len % 3 == 0) 
    {
        console.log("A:"+len);
        element += 'Fizz';
    }
    if(len % 5 == 0)
    {
         console.log("B:"+len);
        element += 'Buzz';
    }
    else if(element=='')
    {
         console.log("C:"+len);
        element = len;
    }
    output.push(element);
    console.log(output);
}