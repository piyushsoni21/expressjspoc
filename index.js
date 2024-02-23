const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// const middleWareTest = (req, res, next) => {
//   console.log(req);
//next();
// };

app.use(express.static(path.join(__dirname, "public")));

app.use('/b', require(path.join(__dirname, 'routes/blog.js')))
//app.use(middleWareTest)

// app.get("/hello/:name", (req, res) => {
//   res.send('Hello World! .' + req.params.name);
// });

// app.get("/about", (req, res) => {
//    res.send('About Section')
//   res.sendFile(path.join(__dirname, "index.html"));
//    res.status(200)
//   res.json({"name" : "piyush"})
// });

app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
});
