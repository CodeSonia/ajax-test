let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

xhr.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
  }
};

// setTimeout function takes 2 parameters. The first is a callback function. The second is the milliseconds to wait for the function to do its thing. 

//Get our code to wait on execution
setTimeout(function() {
  console.log(data);
}, 500);

