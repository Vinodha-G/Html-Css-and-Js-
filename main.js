let myname="vino"

let x
let y
x=34
y=88
z=x+y
console.log(myname , z);
let userDetails=
{
    name:'vinodha',
    age:20,
    mobilenumber:7968785275

};
console.log(userDetails.age,userDetails.name,userDetails.mobilenumber);
console.log("typeof userdetails age=",typeof userDetails.age)
let array=[1.4,78]
console.log('print array',array.length)
let array1=[
    {
     name:"vinodh",
     age:23,
     id:7987
    },
    {
        name:"makanth",
        age:23,
        id:564
    },
    {
         name:"gogul",
         age:26,
         id:74556
    }
]
console.log(array1.length)
console.log("print array1",array1[2].age)
// arthimetic operators

let a,b;
a=89;
b=67;
console.log("addition of a and b",a+b);
console.log("subtraction of a in b",b-a);
console.log("multiplication of a and b=",a*b,"division =",a/b)
console.log("module=",a%b,"power of=",a**b)


//assingment operator
let c=25;
console.log("print c before assingment operator=",c)
c+=1;
console.log("print c after assingment operator addition=",c)
c-=5;
console.log("print c subtraction=",c)
c*=2;
console.log("print c multiplication=",c)
c/=2;
console.log("print c division=",c)

//comparison
let d=5;
console.log("print original value:",d)
console.log("Is original value is grater than zero",d>0);
console.log("Is original value is grater than zero",d>=4);
console.log("Is original value is grater than zero",d<4);
console.log("Is original value is grater than zero",d<=6);

//Equality
let e=34;
//Strict equality(Type+value)
console.log(e===34);
console.log(e==='34');
console.log(e===true);
//lose equality
console.log(e==34);
console.log(e=='34');
console.log(e==true);
//not equality
console.log(e!==34);
console.log(e!='23');
console.log(e!='34');

let primeuser=true;
let subscrption=false;
let moviepremium=primeuser&&subscrption;
console.log('view perimum movie',moviepremium);

let moviepremium1=primeuser||subscrption;
console.log("view non permium movies",moviepremium1)

let movielimit=!moviepremium;
console.log("movie is limited",movielimit)

//loop
let hour=7;
if(hour >= 6 && hour<12){
    console.log("Good morning");
}
else if(hour >= 12 && hour < 17){
    console.log("good afternoon");
}
else
{
  console.log("good evening")  
}

//ternary operator

let  permiumUser=true;
let userLoggedIn=false;
let coupon=true;


if(permiumUser||userLoggedIn){
   console.log("Is user logedin--> yes")
}
else if(permiumUser&&coupon){
console.log("is the user logedin and has coupon-->")
}
else{
    console.log("has coupon")
}

let viewmovie=permiumUser&&userLoggedIn&&coupon ?"yes":permiumUser||userLoggedIn ?"yes":"no";
console.log("Allow the person to watch movie->>",viewmovie)

let item=10;
switch(item){
    case 1:
        console.log("A")
        break;
    case 2:
        console.log("B")
        break;
    case 3:
        console.log("C")
        break;
    case 4:
        console.log("D")
        break;
    case 5:
        console.log("E")
        break;
    case 6:
        console.log("F")
        break;
    case 7:
        console.log("G")
        break;
    case 8:
        console.log("H")
        break;
    case 9:
        console.log("I")
        break;
    case 10:
        console.log("J")
        break;
        
        default:
            console.log("printed from default")
}
//global variable
let roomsAvailability,swimmingPool;
roomsAvailability=true;
swimmingPool=true;

function userCheckin ()

{
    if(roomsAvailability&&swimmingPool){
        console.log("User can checkin on any time")
    }
    else if(roomsAvailability||swimmingPool){
        console.log("call and ask details")
    }
     //local variable
    let prePaidForRoom=false;

    if(prePaidForRoom){
        console.log("Is the user prepaid for the room",prePaidForRoom)
    }
    else{
        console.log("This user didn't pay any money before")
    }
      
for (let i=0;i<10;i++){
    let innerLocalVariable=65;
    console.log("print i",i);
    console.log(innerLocalVariable);
}
//console.log(innerLocalVariable);

    }

userCheckin();

let arrayExample1=[1,2,3,4,5,5,6,7,8,9,10]
for(i=0;i<arrayExample1.length;i++){
    console.log(arrayExample1[i])
}

let arrayExample2=[
    {
        id:123345,
        fullname:"vinog"

    },
    {
        id:12334576,
        fullname:"vinodhg"

    },

    {
        id:123344565,
        fullname:"vinodhag"

    }

]
for(i=0;i<arrayExample2.length;i++){
    if (i==2){
        console.log("printing the value of id from index 2",arrayExample2[i].id)
    }
}

