var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

console.log(1111);
xhr.open("GET", "http://localhost:7000/api/songs", true);
xhr.responseType = "json";

xhr.onload = function() {
  console.log(2222);
  var data = this.response;
  console.log(data);
};
