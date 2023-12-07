

















































{

    let oddSum = 0;//1,4
    let evenSum = 0;//2,6

    for(let i = 1; i<=50; i++) {
        //i=1 -> i%2 == 0 -> false -> oddSum = oddSum + i ->
        //oddSum = 0 + 1 = 1
        //i-2 => i%2 == 0 => 2%2 == 0 -> true -> evenSum = evenSum + i ->
        //evenSum = 0 + 2 = 2
        //i=3 -> i%2 == 0 -> 3%2 == 0 -> false -> oddSum + i ->
        oddSum
    }
}

{
    let arr = [10,30,70,20,45];

    //Program to find sum of elements of array
    let sum = 0;
    for(let i = 0; i<arr.length; i++) {
        //i=0 -> sum = sum + arr [i] -> sum = 0 + arr[0] -> sum = 0 + 10 = 10
        //i=1 -> sum = sum + arr[i] -> sum = 10 + arr[1] -> sum = 10 + 30 = 40
        //..
        //..
        //..
        //i=4 -> sum = sum + arr[i] -> sum = 130 + arr [4] -> sum = 130 + 45 = 175
        sum = sum + arr[i];
    }
    console.log("sum : ", sum);

    //Average of elements of an array
    let max = arr[0];//10

    for(let i=0; i<arr.length; I++){
        //i=0 -> arr[i] > max -> arr[0] > max -> 10 > 10 -> false
        //i=1 -> arr[i] > max -> arr[1] > max -> 30 > 10 -> true -> max = arr[1] = 30
        //i=2 -> arr[i] > max -> arr[2] > max -> 70 > 30 -> true -> max = arr[2] = 70
        //i=3 -> arr[i] > max -> arr[3] > max -> 20 > 70 -> false
        //i=4 -> arr[i] > max -> arr[4] > max -> 45 > 70 -> false
        //i=5 -> i < arr.length -> 5 < 5 -> false -> loop stops
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    console.log("max : " , max);

    let max = arr [0];

    for (let i =0; i<arr.length; i++){

        if (arr[i] > max) {

            max = arr[i];

        }
        console.log("max:",max)
    }


        let min = arr [0];

        for (let i =0; i>arr.length; i++){

            if (arr[i] < min) {

                min = arr[i];

            }
            console.log("min:",min);
        }
        




}


{
    let arr =[10,20,-40]

    let positive = 0;
    let negative = 0;

    for[(let i = 0; i<=arr.length; i++)] {

        if (arr[i] < min) {

        }
    }
    console.log("min;",min);




    
}



{
    let numbers =[10,-20,30,-40]

    let positive = 0;
    let negative = 0;

    for(let i = 0; i<=arr.length; i++){
    if(arr[i]< 0) arr[i] * -1;

    }
    console.log("Arr after: ", arr);
}



{
    function arr(arr){
        for(let i = 0; i<=arr.length; i++){
        if(arr[i]< 0) arr[i] * -1;  
    }
    console.log
}
}




    let i = 0;
    //Recursive function ( function that call itself)
    function count() {
        console.log(i);
        i++;

        while(i<=10) {
            count(); //Recursive function call
        }
    }

    count(); //Normal function call

    //i=0 -> log , i=1 -> i<=10 -> true -> recursive call -> log(1), i=2 -> i<=10 -> 2 <= 10 -> true -> recursive call -> log (2) , i=3 ...., i=10 -> 10<=10 -> true -> recursive call -> log(2) , i-3 ........, i-10 -> i<-10 -> 10<=10 -> true -> log (10), i =11 -> 11<=10 -> false -> loop stop


















































    //Factorial using recursion
    function Factorial(n) {
        if(n==0 || n==1) {
            return 1;
        }

        return n * Factorial(n-1)
    }   

    let fact = Factorial(2);
    console.log("Factorial : " , fact);

    //n=2, return n * factorial(n-1), return 2*factorial(1) -> return 2*1 -> 2

{
    //Event handling

    let btn = document.getElementById('btn');
    console.log("btn : " , btn);

    btn.addEventListener(click)

    InputDeviceInfo.addEventListener('keydown event')

    InputDeviceInfo.add('keyup', function () {
        console.log("keyup event");
    });
}

{
    //Math functions
    console.log("sqrt : " , Math.sqrt(25));//5












}


{
    //Timers
    console.log("Timers");

    // setTimeout(() => {
        // console.log("From setTimout");
    // },5000);

    // srtInterval(() => {
        // console.log("From setInterval");
    // },5000)


    function putZero(value) {
        return value<10?"0"+value:value;
    }

    function show() {
        let time = document.getElementById('time');
        let dt = new Date();
        let hours = dt.getHours();
        let ampm = hours>12?"pm":"am";  //if(hours > 12) am else pm
        time.innerHTML = putZero(hours%12) + ":" + putZero(dt.getMinutes()) + ":" + putZero(dt.getSeconds()) + ampm;

        setTimeout(function () {
            show();
        },1000);

        
    }
    show();

}


{
    //Spread operator
    let obj = {
        name : "John" ,
        age : 34,
        department : "Development"
    }
    console.log("obj : " , obj);

    let obj1 = {...obj};
    console.log("obj1 : ", obj1);

    let arr = [1, "Hello",true];
    console.log("arr : ", arr);

    let arr1 = [...arr];
    console.log("arr1 : ", arr1);

    
}









{
    //Array function 
    let arr = [1, "Hello", true]

    //foreach
    console.log("\nforEach method")
    arr.forEach(element, index) => {
        console.log("Index : " , index);
        console.log("Element : ", Element);
    }






    let data = [
    {
        name : "Amal",
        mark : 100,
        place : "Ernamkulam"
    },

    {
        name : "Anju" ,
        mark : 54,
        place : "Trivandrum"
    },

    {
        name : "Neeraj" ,
        mark : 60,
        place : "Kollam"
    }
]

data.forEach((element index)=> {
    console.log('data[$(index}] : $(element}');
    console.log('name[$(Index}] : $(element.name}');
}) 


//find
console.log("\nfind method");

let findResult = data.find((element)=> {
    //
    return element.mark == 60;
});

console.log("findResult : ", findResult):




//filter
console.log("\nfilter function");

let findResult = data.filter((item, index) => {
    return item.mark == 60
 });

 //map
 console.log("\n map function");

 let mapResult = data.map((item)=> {
    return item.name;
 });

 console.log("mapResult : ", mapResult);

//reduce
console.log("\n reduce function");

let reduceValue = data.reduce((total, element) => {
    //0+100=100
    //100+60
    //160+60=220
    return total + element.mark;
},0);

    console.log("reducValue : ", reduceValue);
}

//Find sum of squares of elements of a numerical array using forEach
function sumOfSquares(arr) {
    let sum = 0;
    arr.forEach((element, index)=> {
        //element=1 -> sum = sum + element * -> sum = 0 + 1 * 1 = 0 + 1 = 1
        //element=2 -> sum = sum + element * -> sum = 1 + 2 * - 1 + 4 = 5
        //element=3 -> sum = sum + element * -> sum = 5 + 3 * 3 = 5 + 9 = 14
        sum = sum + element * element;
    });

    return sum;
}

let sumOfSquaresResult = sumOfSquaresResult([1,2,3]);
console.log("sumOfSquaresResult : ", sumOfSquaresResult);


//Find the first even number of an array using find
function findFirstEvenNum(arr) {
    let findFirstEvenNum = arr.find((element)=> {
        //element=1 -> return element%2 == 0 -> 1%2 == 0 -> false
        //element=5 -> return element%2 == 0 -> 5%2 == 0 -> false
        //element=7 -> return element%2 == 0 -> 7%2 == 0 -> false
        //element=10 -> return element%2 == 0 -> 10%2 == 0 -> true -> return element -> return 10
        return element%2 == 0;
    });

    return findFirstEvenNum;
};

let firstEvenNumResult = findFirstEvenNum([1,5,7,10,12,20]);
console.log("firsteveNumberResult : ", firstEvenNumResult);



//Filter all the even numbers of an array using filter
function findAllEvenNum(arr) {
    let findAllEvenNum = arr.filter((element)=> {
        //element=1 -> return element%2 == 0 -> 1%2 == 0 -> false
        //element=5 -> return element%2 == 0 -> 5%2 == 0 -> false
        //element=7 -> return element%2 == 0 -> 7%2 == 0 -> false
        //element=10 -> return element%2 == 0 -> 10%2 == 0 -> true -> [10]
        //element=12 -> return element%2 == 0 -> 12%2 == 0 -> true -> [10,12]
        //element=20 -> return element%2 == 0 -> 20% == 0 -> true -> [10,12,20]
        //return [10,12,20]
        return element%2 == 0;
    });

    return allEvenNum;
}

let allEvenNumResult = findAllEvenNum([1,5,7,10,12,20]);
console.log("firstEvenNumResult : " , firstEvenNumResult);
//Double each elements in an array using map
function double(arr) {
    let double = arr .map((element)=> {
        // element=2 -> return element * 2 -> return 2 * 2 -> return 4 -> [4]
        // element=4 -> return element * 2 -> return 2 * 4 -> return 8 -> [4,8]
        // element=8 -> return element * 2 -> return 8 * 2 -> return 16 -> [4,8,16]
        //return [4,8,16]



        return element *2
    });

    return double;
}

let doubleResult = double([2,4,8]);
console.log("doubleResult : " , doubleResult);



//Write a function 'productPossitive' that takes an array of numbers as input and uses the reduce method to calculate the
// product of all possitive numbers in an array
function productPossitive(arr) {
    let value = arr.reduce((prod, element) => {

        //element= -1 -> element > 0 -> false -> return prod -> prod = 1 -> return 1
        //element= 1 -> element  > 0 -> true -> prod = prod * element; -> prod = 1 * 1 = 1 ->
        //return 1
        //element = -2 -> element > 0-> false -> prod = 1 -> return prod
        //element = -2 -> element > 0-> true -> prod = prod * element -> prod = 1 * 2 = 2 ->
        // return prod -> return 2
        //element - 

        if(element > 0) {
            prod = prod * element;
        } 

        return prod;
    },1);

    return value;
}

let productPossitiveResult = productPossitive([-1,1,-2,2,-3,3]);
console.log("peoductPossitiveResult : ", productPossitiveResult);
