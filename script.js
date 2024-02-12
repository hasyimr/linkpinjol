var submitButton = document.getElementById("submit")
var headerName = document.getElementById("name")
var messagesButton = document.getElementById("messagesbutton")
var messagesId = document.getElementById("messagesp")


submitButton.addEventListener("click", (event) => {
    var name = document.getElementById("searchTxt").value.toLowerCase();
    var header = document.getElementById("header")
    if (name == "keisya") {
        headerName.innerHTML = "Nama lengkap ya gais ya, ada banyak nama Keisya di dunia ini dan hanya ada satu yang special buat Hasyim mah";
      } else if (name == "keisya bilqis alhena") {
        scrollToNextSection();

      } else {
        headerName.innerHTML = `${name} siapa cok, kaga spesial elu buat gua`;
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