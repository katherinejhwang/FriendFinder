var express = require('express');
var path = require('path');
var exp = express();

//If extended is false, you can not post "nested object"; if extended is true you can whatever you want.  In other words, when you have extended: true, when you post, you can see the nested object within the objects
exp.use(express.urlencoded({extended: true}));
exp.use(express.json());

require('./app/routing/apiRoutes')(app);
// require('./app/routing/htmlRoutes')(app);

var pathToPublic = path.join(__dirname + "/public");
exp.use(express.static(pathToPublic));


//heroku default language "process.env.PORT"
exp.listen(process.env.PORT || 3001, () => {
    console.log('express app listening on port 3001');
});



