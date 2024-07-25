const axios = require('axios');

const getToken = async () => {

    const data = {
        "companyName": "TEXSWIRL",
        "clientID": "a487b0e5-035d-4918-93a0-fb15ca0be7f5",
        "clientSecret": "bXxhVJFdKJKPpoeP",
        "ownerName": "Vishwas",
        "ownerEmail": "b22it135l@kitsw.ac.in",
        "rollNo": "b22it135l"
    }
    try {
        const response = await axios.post('http://20.244.56.144/test/auth',data);
        return response.data.access_token;
    } catch (err) {
        console.log(err);
    }

}

module.exports = getToken;