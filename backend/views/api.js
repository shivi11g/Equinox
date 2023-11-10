const sgnBtn = document.getElementById('sgnBtn')
const lgnBtn = document.getElementById('lgnBtn')
// const loginform = document.getElementById('loginform')

lgnBtn.addEventListener('click',async ()=>{
    console.log("hi")
    window.open("/login.html", "_blank");
    // await fetch("http://localhost:3000/signup")
    // backend api call url - http://localhost:3000/signup
}) 

const loginform = document.getElementById('loginform');

loginform.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username);
    console.log(password);

    // Create a JSON object with form data
    const formData = {
      username: username,
      password: password
    };
    const jsonData = JSON.stringify(formData);

    // Print JSON data in the console
    console.log("JSON Data:", jsonData);

    // Make the fetch request here, inside the event listener
    fetch('http://localhost:5501/login.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData // Pass the JSON data in the body of the request
    })
    .then(response => response.json())
    .then(data => {
      console.log('Response from server:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});


