const express = require("express");
const app = express();

const expressConfig = require("./config/expressConfig");

expressConfig(app);

app.listen(8080, () => {
	console.log(`App is listening at port 8080`);
});
