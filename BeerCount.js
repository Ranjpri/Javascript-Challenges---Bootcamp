var totalBeers = 50;
var beers = totalBeers;

function beersOnTheWall(){
    while(beers >= 1)
    {
        if(beers - 1 == 0)
        {
        console.log(beers + " bottle of beer on the wall, "+beers+" bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.");
        }
        else
        {
        console.log(beers + " bottles of beer on the wall, "+beers+" bottles of beer.Take one down and pass it around, "+(beers-1)+" bottles of beer on the wall.");            
        }

        --beers;
        if(beers == 0)
        {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, "+(totalBeers)+" bottles of beer on the wall.");
        }
    }
}