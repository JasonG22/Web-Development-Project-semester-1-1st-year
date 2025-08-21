//Change backround colour
function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
    let imageMode = document.getElementById("mode");
    imageMode.src = "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg";
    
  }
  // Change back to Default backround
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
    let imageMode = document.getElementById("mode");
    imageMode.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/800px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg";
  }
//Link to League of Legends download
  document.getElementById('redirectButton').addEventListener('click', function() {
    // Redirect to the League of Legends signup page
    window.location.href = 'https://signup.leagueoflegends.com/en-gb/signup/redownload';
  });

  //For Enter name on index page
  function messageOutput(){
    const name = document.getElementById('userName').value;
    document.getElementById("message").textContent = "Welcome to the website " + name ;
    
  }

  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  