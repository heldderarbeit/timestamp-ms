'use strict';

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function TimeStringHandler () {
	
    this.parseTime = function (req, res) {
	    
        var timestr = req.params.timestr;
        
        // assume it's not a timestring
        var natural = null;
	var unix = new Date(timestr).getTime() / 1000;
		
	    // is a natural language date
	    if (unix) natural = timestr; 
		
	    if (!isNaN(timestr)) {
		
	        // is a unix timestamp
		unix = Math.floor(timestr);
		var date = new Date(timestr*1000);
	        natural = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();		
	    }
	    
        res.send({ 'unix': unix, 'natural': natural });
    };
}

module.exports = TimeStringHandler;
