const admins = {
  "In Kim": "123",
  "Leon Lee": "456",
  "Michelle Guo": "789",
};

let countCheck = 0;

const formSubmit = document.querySelector("#formSubmit");
const reviewSubmit = document.querySelector("#reviewSubmit");
const changeSubmit = document.querySelector("#changeSubmit");

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
        alert("Login Success. Welcome Admin!");
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

  document.querySelector(".review").appendChild(curDiv);
  
  const allReviews = document.querySelectorAll(".reviews");
  const lastReview = allReviews[allReviews.length - 1];
  lastReview.appendChild(curUser);
  lastReview.appendChild(curReview);
};

const changeOrder = () => {
  console.log("hi");
  order = document
    .getElementById("image-order")
    .value;

  localStorage.setItem("pushToEnd", order);

  window.location.href = "./index.html";
};

if (formSubmit != null) {
  formSubmit.addEventListener("click", checkAdmin);
}

if (reviewSubmit != null) {
  reviewSubmit.addEventListener("click", reviewSubmitted);
}

if (changeSubmit != null) {
  changeSubmit.addEventListener("click", changeOrder);
}

window.addEventListener("load", () => {
  if (
    window.location.pathname ===
    "/C:/Users/inkim/Documents/UTSC%202022/CSCB20/A2/src/html/index.html"
  ) {
    let container = document.querySelector(".weeklyPicks-inside4");
    console.log(localStorage.getItem("pushToEnd"));
    let saved = container.children[localStorage.getItem("pushToEnd")]
    console.log(saved);
    container.removeChild(saved);
    container.appendChild(saved);
    localStorage.removeItem("pushToEnd");
  }
});
