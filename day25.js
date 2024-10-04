let array=[
    {
        id:7876,
        name:"manoj",
        fullname:"manojsivakumar"

    },
    {
        id:7876876,
        name:"manoj979",
        fullname:"manojsi789vakumar"

    },
    {
        id:7877886,
        name:"manoj766",
        fullname:"manojsiva897kumar"

    },

]
// it will return the position
for(let position in array){
    console.log(position)
}
// it will return the item in the array
for(let position of array){
    console.log(position)
}
let i=0
while(i<array.length){
    console.log("yuy");
    i++;
}

do{
    console.log("gewgg")
}while(i==1){
    console.log("fruyyu")
    // break;
}

function calculateAge( firstNo,secondNo){
    let Age=firstNo+secondNo;
    // while passing parameters it better to give return value.
    console.log("Normal print of age",Age);
    return Age;

}
console.log(calculateAge(8,6));

const calculateNum2=(firstNo,secondNo)=>{let age= firstNo+secondNo;
    return age;
}
let calculateAge1=calculateNum2(7,6);
console.log("by using ES6 =>",calculateAge1);

console.log("Called directly by passing parameters and printing it",calculateNum2(68,6));
//dom
document.getElementById("text").textContent="hii!";


function functionName(changingtext){
    let pElement=document.getElementById("2a");
    let changedText=pElement.textContent=changingtext;
    console.log(changedText);
}
let number=0;
function changingNumber(){
    let pElement=document.getElementById("3a");
       pElement.textContent=number;
       console.log(pElement.textContent);
       number++;
}

console.log(document.getElementById("1a"));  

let index=0;
function changeText(info){

   let pElement=document.getElementById("1a");
   pElement.textContent=info+" "+index;
   console.log(pElement.textContent)
   index++;
}


for(let product of array){
    let listElement = document.createElement("div");
    let imgElement = document.createElement("img");
    let textElement = document.createElement("p");
    imgElement.src = product.images[0];
    textElement.textContent=product.title;
    listElement.className="box";
    listElement.appendChild(imgElement);
    listElement.appendChild(textElement);
    document.body.appendChild(listElement);
}
