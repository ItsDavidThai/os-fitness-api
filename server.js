const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3004);
app.set("api-port", process.env.APIPORT || 3005);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(express.static("client/build"));


app.listen(app.get("port"), () => {
console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});


app.listen(app.get("api-port"), () => {
console.log(`Find the server at: http://localhost:${app.get("api-port")}/`); // eslint-disable-line no-console
});


app.get('/exercises', (req, res) => {
    res.json('hello')
})