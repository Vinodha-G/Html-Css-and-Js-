function getAllproducts() {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => {
            for (let product of res.products) {
                console.log(product);
                // this is parent tag
                let parentDivTag = document.createElement("div");
                parentDivTag.className = "card-container";

                //this is child tag
                let imageTag = document.createElement("img");
                imageTag.src = product.images[0];
                imageTag.className = "card-image"
                imageTag.alt = "mascara"

                let titleTag = document.createElement("h3");
                titleTag.textContent = product.title;

                let describitionTag = document.createElement("h5");
                describitionTag.textContent = product.description;

                let priceTag = document.createElement("p");
                priceTag.textContent = product.price;

                //push to parent tag
                parentDivTag.appendChild(imageTag);
                parentDivTag.appendChild(titleTag);
                parentDivTag.appendChild(describitionTag);
                parentDivTag.appendChild(priceTag);

                //final tag
                document.body.appendChild(parentDivTag);
            }
        });
}
getAllproducts();

let queryselector=document.querySelectorAll("p");
console.log(queryselector);

//old method

// let data=new XMLHttpRequest();
// data.onreadystatechange=function(){
//     console.log(data.responseText);
// };
// data.open("GET","https://dummyjson.com/products",true);
// data.send();

