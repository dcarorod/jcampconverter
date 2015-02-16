'use strict';

var profiler = require('v8-profiler');
var fs = require('fs');

var convert = require('./jcamp')('indometacin/hmbc.dx');

profiler.startProfiling('jcamp');
convert();
var profile = profiler.stopProfiling('jcamp');

fs.writeFileSync('./jcamp.cpuprofile', JSON.stringify(profile));
