let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
  }
};

// setTimeout functiom
setTimeout(function() {
  console.log(data);
}, 500);

