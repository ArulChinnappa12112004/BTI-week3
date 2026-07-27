let places = new Map();
places.set(560085,"Bangalore-1");
places.set(560086,"Bangalore-2");
places.set(560087,"Bangalore-3");
places.set(560095,"Bangalore-4");

console.log(places);
if(places.has(560085)== true){
    let place = places.get(560085);
    console.log(place);
}else{
    console.log("Key does not exit");
}
let place = places.get(560085);
console.log(place);

places.set(560095,"Chennai");
let done = places.delete(10101);
if(done == true){
    console.log("Key exist and deleted");

}else{
    console.log("Key doesnt exit:")
}

for(let element of places){
    console.log("-->",element);
}

console.log();
for(let {key,value} of places){
    console.log("Key :",key,"Value :",value);
}

for(let key of places.keys()){
    console.log(key);
}