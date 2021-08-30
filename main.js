/*XMLHttpRequest object is an inbuilt obj that JS provides to allow us to consume APIs. This gives us the method to open connections, to send connections and to close connections */

/* Created a new instance of the XMLHttpRequest obkect. 
XML stands for Extensible Markup Language which is similar to HTML in the way it structures its data, and it's a precursor to JSON. 
*/
let xhr = new XMLHttpRequest();

//Open a connection:

/* Method below to have the xhr.open method, and the first argument that we parse in is "GET". There are several other methods like POST to communicate with the server. 
We want to retrieve data from the SW API, we use GET.

The second argument is the URL that we want to retrieve. i.e. making a request to the SW API and use xhr to get the request.
*/
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");

xhr.send();

//Listener waiting for the state to change
xhr.onreadystatechange = function() {

  // readyState == 4 means the operation has been completed.
  // then we look at status. Status == 200 means everything is ok
  if(this.readyState == 4 && this.status == 200) {

    //once everything is ok, we then use JS to get ID from the DOM & change the inner HTML to the response from the xhr object
    document.getElementById("data").innerHTML = this.responseText;
  }
};