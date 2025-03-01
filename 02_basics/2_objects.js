//singleton :- objects crated form constructor are called singleton objects 

//objects literals 
const jsUser = {
    name : "Aditya",
    roll : 20 ,
    age : 25,
    location :"mumbai" ,
    lastlogin : ["Mon" , "Sat"],

    hobby : "cricket", "fav_hobby ":"gaming "
}

console.log(jsUser.name , jsUser.age);
console.log(jsUser.lastlogin[1]);
//to access fav hobby 
console.log(jsUser["fav_hobby "])
