var submitButton = document.getElementById("submit")
var headerName = document.getElementById("name")


submitButton.addEventListener("click", (event) => {
    var name = document.getElementById("searchTxt").value;
    if (name == "keisya") {
        headerName.innerHTML = "Full name please, there are a lot of keisya in this world and this is only for the one that special to Hasyim.";
      } else if (name == "keisya bilqis alhena") {
        window.location.href = "/secreto.html";
      } else {
        headerName.innerHTML = "You're not welcome";
      }
    
  });