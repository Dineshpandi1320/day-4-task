var obj1 ={name:"person1",age:5};
var  obj2={age:5,name:"person1"};
JSON.stringify(obj1) === JSON.stringify(obj2);
var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);

//output
//is object equaltrue

// country name, region , sub region,population

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{
    var data = request.response
    var result=JSON.parse(data);
    for(var obj of result)
    {
        console.log(obj.name,obj.region,obj.subregion,obj.population)
    }
}


//country flags

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function()
{
    var data = request.response
    var result=JSON.parse(data);
    for(var obj of result)
    {
        console.log(obj.flags.png)
    }
}
