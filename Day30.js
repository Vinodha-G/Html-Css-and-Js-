//normal storage that print on o/p

function webStorage(){
console.log("Hello");
}
webStorage();

//Local Storage -- setitem
function webStorage1(){
    window.localStorage.setItem("username","vinodha");
    window.localStorage.setItem("number","7889798");
    window.localStorage.setItem("email","vinodhaannapoorani@gmail.com");
     
}
webStorage1();
//Local Storage -- getitem
function webStorage2(){
    let username=window.localStorage.getItem("username");
    let number=window.localStorage.getItem("number");
    let email=window.localStorage.getItem("email");
    console.log(username);
    console.log(number);
   console.log(email);
}
webStorage2();

// remove data
function removeData(){
    window.localStorage.removeItem("username");
}
removeData();

// clear whole data
function clearData(){
    window.localStorage.clear();
}
clearData();

//to find length of stored data

function lengthOfData(){
     let length=window.localStorage.length;
     console.log("length of the stored data",length)
}


storedData();
function webStorage3(){
    window.sessionStorage.setItem("username1","vinodha");
    window.sessionStorage.setItem("number1","7889798");
    window.sessionStorage.setItem("email1","vinodhaannapoorani@gmail.com");
     
}
webStorage3();

// to make the stored data to display in console through html <p> tag using its id
function storedData(){
    let user_name=window.localStorage.getItem("username");
    let ptag=document.getElementById("text");
    ptag.textContent=user_name;
    console.log(ptag)
}

function bringStoredData(){

    fetch("https://api.sampleapis.com/futurama/info")
.then(res=>res.json())
.then((res)=>{
    console.log("res",res)
    window.sessionStorage.setItem("info",JSON.stringify(res));
})
    
}

function fetchData(){
    fetch("https://api.sampleapis.com/futurama/info")
    .then(res=>res.json())
    .then((res)=>{
        console.log("it will print the data in json form",res)

        let information=window.localStorage.getItem("info",JSON.stringify(res));
        console.log("stingified data",information);

        //parse

        let parse=JSON.parse(information);
        console.log("parsed data",parse)
    })
}

function fetchData2(){
    // Fetch data from the API
fetch("https://api.sampleapis.com/futurama/info")
.then(res => res.json()) // Convert response to JavaScript object
.then((res) => {
    console.log("API response:", res);
    
    // Convert the response object to a JSON string and store it in sessionStorage
    window.sessionStorage.setItem("info", JSON.stringify(res));
    
    // Retrieve the stored data (which is now a JSON string) from sessionStorage
    let storedInfo = window.sessionStorage.getItem("info");
    
    // Parse the JSON string back into a JavaScript object
    if (storedInfo) {
        let infoObj = JSON.parse(storedInfo);
        console.log("Parsed info from sessionStorage:", infoObj);
    } else {
        console.log("No info found in sessionStorage.");
    }
})
.catch(error => console.error("Error fetching data:", error));

}

///geolocation

function location1(){
    window.navigator.geolocation.getCurrentPosition(success,failure)
}
function success(parameters){
    console.log("sucess",parameters)
}
function failure(parameters){
    console.log("failure",parameters)
}


// fetch(`52bff7b497d8b7acda68481aae76abd8`)

function webStroages(){
    window.navigator.geolocation.getCurrentPosition(success,failure)
}
function success(params){
    console.log("success",params)
    let apiKey = "52bff7b497d8b7acda68481aae76abd8"
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${params.coords.latitude}&lon=${params.coords.longitude}&units=metric&appid=${apiKey}`)
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res);
    })
}
function failure(params){
    console.log ("failure",params)
}

webStroages();

//drag and drop,

function drag(parameters1){
    console.log("drag",parameters1)
}
function drop(parameters2){
    console.log("drop",parameters2)
    let imageTag=document.getElementById("imagetag")
    parameters2.target.appendChild(imageTag);
}
function allowDrop(parameters3){
parameters3.preventDefault();
}

//query

$("#jquery1")[0].textContent="hello!"