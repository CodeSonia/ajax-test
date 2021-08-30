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
  getData(type, function(data) {
    console.dir(data);
    document.getElementById("data").innerHTML = data.results;
  })
}