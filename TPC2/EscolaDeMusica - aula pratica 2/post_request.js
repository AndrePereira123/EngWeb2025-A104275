const axios = require('axios');

axios.post('http://localhost:3000/instrumentos',
    {
        "id": "123",
        "#text":"Grafonola"
    })
    .then(resp => {
        console.log(resp.data)
    })
    .catch(error => {
        console.log(error);
    });  
