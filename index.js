//const fileMatch = require("file-match");

// Add your code here



function submitData(name,email){
  
let subData = {
  method: "POST",
  headers: {
    "content-Type": "application/json",
    "accept": "application/json"
  },
  body: JSON.stringify({
    name,
    email
  })
};
  return fetch("http://localhost:3000/users",subData )

.then(response => response.json())
.then(object=> document.body.innerHTML=object['id'])
.catch(error => document.body.innerHTML=error.message )

}
  
