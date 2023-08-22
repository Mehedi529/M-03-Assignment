function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
      console.log("Object is empty");
      return;
    }
    else{

      for (let props in obj) {
        console.log(props + ":" + obj[props]);
      }
    }

  }
  
  let obj = {
    name: "ABC",
    age: 20,
    email: "abc@gmail.com",
    city: "Dhaka",
    country: "Bangladesh"
  };

  
  printObjectProperties(obj);

  