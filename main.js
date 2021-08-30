/*XMLHttpRequest object is an inbuilt obj that JS provides to allow us to consume APIs. This gives us the method to open connections, to send connections and to close connections */
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    document.getElementById("data").innerHTML = this.responseText;
  }
};

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");

xhr.send();