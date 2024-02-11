var submitButton = document.getElementById("submit")
var headerName = document.getElementById("name")


submitButton.addEventListener("click", (event) => {
    var name = document.getElementById("searchTxt").value;
    if (name == "keisya") {
        headerName.innerHTML = "Full name please, there are a lot of keisya in this world and this is only for the one that special to Hasyim.";
      } else if (name == "keisya bilqis alhena") {
        scrollToNextSection();
      } else {
        headerName.innerHTML = "You're not welcome";
      }
    
  });

  function scrollToNextSection() {
    var nextSection = document.getElementById("hero");
    nextSection.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    document.body.style.overflowY = "scroll";
    document.documentElement.style.overflowY = "scroll";

}