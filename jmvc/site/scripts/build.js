//steal/js jmvc/site/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/styles',function(){
	steal.build('jmvc/site/scripts/build.html',{to: 'jmvc/site'});
});
