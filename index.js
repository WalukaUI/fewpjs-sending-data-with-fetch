const fileMatch = require("file-match");

// Add your code here

let formData={
    name: "Steve",
    email: "steve@steve.com"
}

let submitData = {
    method: "POST",
    headers: {
      "content-Type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch("http://localhost:3000/users", submitData)
