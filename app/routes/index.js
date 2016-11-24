'use strict';

var path = process.cwd();
var TimeStringHandler = require(path + '/app/controllers/timeStringHandler.server.js');

module.exports = function (app) {
    
    var timeStringHandler = new TimeStringHandler();
    
    app.route('/')
        .get(function (req, res) {
            res.render('index.pug');
        });
        
    app.route('/:timestr')
        .get(timeStringHandler.parseTime);
        
};