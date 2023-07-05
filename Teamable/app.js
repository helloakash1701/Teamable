function editProfile() {
    var element = document.getElementById("box");
    var element2 = document.getElementById("box1");
    element.style.display = "none";
    element2.style.display = "flex";
  }
  
  function saveProfile() {
    var input = document.getElementById("name");
    var inputValue = input.value;
    var destination = document.getElementById("nameu");
    destination.innerText = inputValue;

    var inputemail = document.getElementById("email");
    var inputEmailValue = inputemail.value;
    var destinationEmail = document.getElementById("emailu");
    destinationEmail.innerText = inputEmailValue;

    var inputInterest = document.getElementById("interest");
    var inputInterestValue = inputInterest.value;
    var destinationInterest = document.getElementById("interestu");
    destinationInterest.innerText = inputInterestValue;

    var username = document.getElementById("username")
    username.innerText ="Welcome " +  inputValue 
  
    var element = document.getElementById("box");
    var element2 = document.getElementById("box1");
    element.style.display = "flex";
    element2.style.display = "none";


  
    console.log(destination.innerText);
  }
  