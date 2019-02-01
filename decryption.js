function addListeners(){
	var button_count = document.getElementById('button_count');
	
	if(window.addEventListener) {
		button_count.addEventListener("click", callback("count"), false);
	}
}


String.prototype.cleanup = function() {
   return this.toUpperCase().replace(/[^a-zA-Z]+/g, "");
}

function callback(action){
	var cipherText = "JBDYZCLNHJBDOR";

	return function(){
		var ary = {};
		var k = 3; //keylength
		var count = 0;
		for(var pos=0; pos<cipherText.length-k; pos++){
			var ss = cipherText.substring(pos, pos+k);
			if(ary[ss] == undefined){
				ary[ss]	= pos;
			}else{
				ary[ss] += "," + pos;
			}
		}
		console.log(ary);
	}
}

window.onload = addListeners;