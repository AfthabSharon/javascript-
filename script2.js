console.log("window : ",window);

console.log("Hello world");

console.log("this",this);


let obj = {
    name : "Harry",
    printThis : function () {
        console.log("This from obj : ", this);
    }
}

console.log("name : ", obj.name);
 console.log(obj.printThis);
 obj.printThis();







 let person = {
    firstName : "John" ,
    lastName : "Doe",
    age : 32
 }

 function greet(message, message1) {
    console.log("message : ", message);
    console.log("message1 : ", message1);


    console.log("firstName : ", this.firstName);
 }

 //greet("Hello");

// calls function
//  greet.call(persone,"Hello", "Hai");
// greet.apply(person, ["Hello","Hai"]);


// Function not called instead returns a new function with this binded
console.log(greet.bind(person,"Hello", "Hai"));

let bindedFunction = greet.bind(person,"Hello", "Hai");
bindedFunction();




// Product 

let obje = {
    name:"milk",
    printThis : function () {
        console.log("This obje.name")
        console.log("This",this)
    }

}
console.log(obje.name)
console.log(obje.printThis())


// Peoduct 1

let objec = {
    namee:"messi",
    printThis : function () {
        console.log("This objec.name")
        console.log("This",this)
    } 

}
console.log(objec.namee)
console.log(objec.printThis())