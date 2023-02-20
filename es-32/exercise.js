function printName(name) {
    console.log(name);
  }
  
  function sayHelloName(callback) {
    console.log("Hello");
    callback("emre");
  }
  
  setTimeout(sayHelloName,1000,printName);
  