const admins = {
  "In Kim": "123",
  "Leon Lee": "456",
  "Michelle Guo": "789",
};

const formSubmit = document.querySelector("#formSubmit");

const checkAdmin = (event) => {
  event.preventDefault();

  const givenUsername = document.querySelector("#username");
  const givenPassword = document.querySelector("#password");

  Object.keys().forEach((curItem) => {
    if (curItem === givenUsername) {
      if (admins[curItem] === givenPassword) {
        document.querySelector(".login-failed").style.display = "none";
        document.querySelector(".login-failed").style.display = "block";
        return;
      }
    }
  });
  document.querySelector(".login-failed").style.display = "block";
  document.querySelector(".login-failed").style.display = "none";
};

formSubmit.addEventListener("click", checkAdmin);
