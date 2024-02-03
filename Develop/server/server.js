const express = require('express');
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.static('../client/dist'));
const frontendPath = path.join(__dirname, "../client/dist");

app.use(express.static(frontendPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require('./routes/htmlRoutes')(app);
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
