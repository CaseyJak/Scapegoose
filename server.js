let cheerio = require("cheerio");
let axios = require("axios");

let express = require("express");

let db = require("./models");

let PORT = 3000;

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/scrape", function (req, res) {
    axios.get("https://www.nytimes.com/").then(function (res) {

        let $ = cheerio.load(response.data);

        $("article h2").each(function (i, element) {
            result.title = $(this)
                .children("a")
                .text();
            result.link = $(this)
                .children("a")
                .attr("href");
            // trying to add summary use li to get
            // result.summary = $(this)
            //     .children("a")
            //     .

            db.Article.create(result)
                .then(function (dbArticle) {
                    console.log(dbArticle);
                })
                .catch(function (err) {
                    return res.json(err);
                });
        })
    });
});



app.listen(300, function () {
    console.log("app is listening on port: 3000");
})