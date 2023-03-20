const admins = {
  "In Kim": "123",
  "Leon Lee": "456",
  "Michelle Guo": "789",
};

let countCheck = 0;

const formSubmit = document.querySelector("#formSubmit");

const checkAdmin = (event) => {
  const givenUsername = document.querySelector("#username").value;
  const givenPassword = document.querySelector("#password").value;
  console.log(givenUsername);
  console.log(givenPassword);

  Object.keys(admins).forEach((curItem) => {
    if (curItem === givenUsername) {
      if (admins[curItem] === givenPassword) {
        console.log("test2");
        document.querySelector(".login-success").style.display = "block";
        countCheck = 1;
      }
    }
  });
  if (countCheck != 1) {
    document.querySelector(".login-success").style.display = "none";
    alert("Login failed, you are not an admin!");
  }
  countCheck = 0;
};

formSubmit.addEventListener("click", checkAdmin);
