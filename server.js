const express = require("express");
const bodyParser = require('body-parser')

const app = express();

app.set("port", process.env.PORT || 8080);
app.set("api-port", process.env.APIPORT || 3005);

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Express only serves static assets in production
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }
// app.use(express.static("client/build"));


app.listen(app.get("port"), () => {
console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

//
// app.listen(app.get("api-port"), () => {
// console.log(`Find the server at: http://localhost:${app.get("api-port")}/`); // eslint-disable-line no-console
// });

const temporaryStorage = {
    pushups: {description: 'pushing up and down from the ground'},
    situps: {description: 'crunching abs'},
    pullups: {description: 'pulling yourself up from a bar'}
}

app.get('/exercises/:exerciseSlug', urlencodedParser, (req, res) => {
    res.json(temporaryStorage[req.params.exerciseSlug])
})
//
