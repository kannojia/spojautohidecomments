var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

tabs.on('ready', function(tab) {
  	var worker = tab.attach({
			contentScriptFile : data.url("autoHide.js")
	});

	worker.port.emit('hideComments', tabs.activeTab.url);
});


//console.log(tabs.activeTab.url)