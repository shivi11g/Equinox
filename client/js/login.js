const sbmtBtn = document.getElementById("lgnbutton");

const handleLogin = async (email, password) => {
  try {
    let response = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      let result = await response.json();
      alert("Logged in successfully");
      localStorage.setItem("email",email);
      localStorage.setItem('LoggedIn',true)
      window.open("./index.html")
      // You can add further logic here, such as redirecting to another page
    } else {
      alert("Invalid email or password");
    }
  }
  catch (error) {
    console.error("Error occurred:", error);
    alert("Error occurred while logging in");
  }
};

sbmtBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const useremail = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(useremail, password);
  handleLogin(useremail, password);
});
