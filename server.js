var express = require('express');
var path = require('path');
var app = express();


const PORT = process.env.PORT || 3000


require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});


