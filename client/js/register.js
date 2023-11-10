let registerbtn= document.getElementsByClassName('.box .btn');

registerButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const boxId = button.closest('.box').id;
      const email = localStorage.getItem('email');
      handleLogin(email,boxId)
      console.log('Box ID:', boxId);
    })
});


const handleLogin = async (email, eventId) => {
  try {
    let response = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ email,  eventId }),
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
  const eventId= boxId
  console.log(useremail, password,eventId);
  handleLogin(useremail, password, eventId);
});