const admins = {
  "In Kim": "123",
  "Leon Lee": "456",
  "Michelle Guo": "789",
};

let countCheck = 0;

const formSubmit = document.querySelector("#formSubmit");
const reviewSubmit = document.querySelector("#reviewSubmit");

const checkAdmin = () => {
  const givenUsername = document.querySelector("#username").value;
  const givenPassword = document.querySelector("#password").value;
  console.log(givenUsername);
  console.log(givenPassword);

  Object.keys(admins).forEach((curItem) => {
    if (curItem === givenUsername) {
      if (admins[curItem] === givenPassword) {
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

const reviewSubmitted = () => {
  const givenUser = document.querySelector("#user").value;
  const givenReview = document.querySelector("#review").value;

  const curDiv = document.createElement("div");
  const curUser = document.createElement("h3");
  const curReview = document.createElement("p");

  curUser.innerHTML = givenUser;
  curReview.innerHTML = givenReview;

  curDiv.classList.add("reviews");
  document.querySelector(".main").appendChild(curDiv);
  
  const allReviews = document.querySelectorAll(".reviews");
  const rand = document.querySelector(".footer");
  const lastReview = allReviews[allReviews.length - 1];
  lastReview.appendChild(curUser);
  lastReview.appendChild(curReview);  
}

if (formSubmit != null) {
  formSubmit.addEventListener("click", checkAdmin);
}
if (reviewSubmit != null) {
  reviewSubmit.addEventListener("click", reviewSubmitted);
}
