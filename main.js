const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", baseURL + type + "/");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
    }
  };
}

//Render it to the document
function writeToDocument(type) {
  let el = document.getElementById("data");
  //Created empty string to display 10 items only and to clear every time a button is clicked.
  el.innerHTML = "";
  getData(type, function(data) {
    data = data.results;

    data.forEach(function(item) {
      el.innerHTML += "<p>" + item.name + "</p>";
    })
    
  })
}