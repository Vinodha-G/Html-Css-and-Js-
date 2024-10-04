const userdata=[
    {
      "userId": 1,
      "id": 1,
      "title": "Introduction to Artificial Intelligence",
      "body": "Learn the basics of Artificial Intelligence and its applications in various industries.",
      "link": "https://example.com/article1",
     
      "comment_count": 8
    },
    {
      "userId": 2,
      "id": 2,
      "title": "Web Development with React",
      "body": "Build modern web applications using React.js and explore its powerful features.",
      "link": "https://example.com/article2",
      
      "comment_count": 12
    },
    {
      "userId": 3,
      "id": 3,
      "title": "Data Science Fundamentals",
      "body": "Dive into the world of Data Science and discover how to analyze and interpret data.",
      "link": "https://example.com/article3",
      
      "comment_count": 5
    },
    {
      "userId": 4,
      "id": 4,
      "title": "Machine Learning Algorithms",
      "body": "Explore various Machine Learning algorithms and understand their workings.",
      "link": "https://example.com/article4",
      
      "comment_count": 17
    },
    {
      "userId": 5,
      "id": 5,
      "title": "Introduction to Blockchain",
      "body": "Learn about Blockchain technology, its use-cases, and how it ensures secure transactions.",
      "link": "https://example.com/article5",
     
      "comment_count": 3
    },
    {
      "userId": 6,
      "id": 6,
      "title": "iOS App Development",
      "body": "Get started with iOS app development using Swift and create feature-rich applications.",
      "link": "https://example.com/article6",
      
      
      "comment_count": 10
    },
    {
      "userId": 7,
      "id": 7,
      "title": "Python for Data Analysis",
      "body": "Utilize Python libraries like Pandas and NumPy for data manipulation and analysis.",
      "link": "https://example.com/article7",
      
      "comment_count": 15
    },
    {
      "userId": 8,
      "id": 8,
      "title": "Cybersecurity Best Practices",
      "body": "Learn essential cybersecurity practices to safeguard your digital assets.",
      "link": "https://example.com/article8",
      
      "comment_count": 6
    },
    {
      "userId": 9,
      "id": 9,
      "title": "Cloud Computing Essentials",
      "body": "Understand the fundamentals of Cloud Computing and its benefits for businesses.",
      "link": "https://example.com/article9",
     
      "comment_count": 9
    },
    {
      "userId": 10,
      "id": 10,
      "title": "Introduction to UX Design",
      "body": "Discover the principles of User Experience (UX) design and create intuitive user interfaces.",
      "link": "https://example.com/article10",
     
      "comment_count": 21
    }
  ]



for (let product of userdata) {
    let listElement = document.createElement("div"); 
    let listTitle = document.createElement("h3"); 
    
    let textElement = document.createElement("p");
    let linkElement=document.createElement("a");

    
    // imageElement.src = product.image[0];
    listTitle.textContent = product.title; 
    textElement.textContent = product.body; 
    linkElement.href = product.link; 
    linkElement.textContent = "Read more"; 


    
    listElement.className = "box";

    // listElement.appendChild(imageElement);
    listElement.appendChild(listTitle);
    listElement.appendChild(textElement);
    listElement.appendChild(linkElement);

    // let imageTag=document.createElement("img");
    // imageTag.src=product.images[0];
    // imageTag.className="card-image";
    // imageTag.alt="cadas";
   
    document.body.appendChild(listElement);
}