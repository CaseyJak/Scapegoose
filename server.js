let cheerio = require ("cheerio");
let axios = require ("axios");
let express = require("express");

let app = express();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(express.static("public"));

axios.get("https://www.nytimes.com/").then(function(res) {

    let $ = cheerio.load(response.data);


});


app.listen(300, function(){
    console.log("app is listening on port: 3000");
})