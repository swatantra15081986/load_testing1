var fs = require('fs');
var dir = 'acs-2/outbound/outbound_report';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
