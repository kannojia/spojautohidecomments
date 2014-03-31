self.port.on('hideComments', function(url) {
	//alert(url);
	var elem = document.getElementById('comments_sh');
	//console.log(elem.innerHTML);
	//toggleComments();
	elem = elem.parentNode;
	simulateClick(elem);

});

function simulateClick(a) {
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, unsafeWindow,
    0, 0, 0, 0, 0, false, false, false, false, 0, null);
  a.dispatchEvent(evt);      
}