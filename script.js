var submitButton = document.getElementById("submit")
var headerName = document.getElementById("name")
var messagesButton = document.getElementById("messagesbutton")
var messagesId = document.getElementById("messagesp")


submitButton.addEventListener("click", (event) => {
    var name = document.getElementById("searchTxt").value.toLowerCase();
    if (name == "keisya") {
        headerName.innerHTML = "Full name please, there are a lot of keisya in this world and this is only for the one that special to Hasyim.";
      } else if (name == "keisya bilqis alhena" || name == "a") {
        scrollToNextSection();
      } else {
        headerName.innerHTML = "You're not welcome";
      }
    
  });

  function scrollToNextSection() {
    var nextSection = document.getElementById("hero");
    nextSection.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    document.body.style.overflowY = "scroll";
    document.documentElement.style.overflowY = "auto";

};



messagesButton.addEventListener("click", ubahSize);

function ubahSize() {
  messagesId.style.fontSize = "5em";
  messagesId.style.fontFamily = "'Caveat Brush', cursive";
  messagesId.style.marginBottom = "1em"
};