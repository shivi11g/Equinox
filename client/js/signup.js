const sbmtBtn = document.getElementById("button");

const handleLogin = async (name, email, password) => {
    let result = await fetch(
        'http://localhost:5000/signup', {
        method: "post",
        body: JSON.stringify({ name, email, password}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Data saved successfully");
    }
    else {
        alert("Issue");
    }
}

sbmtBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('name').value;
    const useremail = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(useremail,username,password)
    handleLogin(username, useremail, password);
})