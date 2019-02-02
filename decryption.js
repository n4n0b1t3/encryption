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
	// var cipherText = "JBDYZCLNHJBDOR";
	var cipherText = document.getElementById("message").value.cleanup();
	
	
	return function(){
		var sequenceArray = [];
		var k = 3; //keylength
		var count = 0;
		for(var pos=0; pos<cipherText.length-k; pos++){
			var sequence = cipherText.substring(pos, pos+k);
			let obj = sequenceArray.find(obj => obj.sequence == sequence);
			
			if(obj){
				obj.positions.push(pos);
			}else{
				sequenceArray.push({sequence:sequence, positions:[pos]});
			}
		}
		//.filter(obj => obj.positions > 3)
		var gt4coinc = sequenceArray.filter(obj => obj.positions.length > 3);
		gt4coinc.forEach(printObj);
		
		//get all numbers
		var num = [];
		gt4coinc.forEach(obj => num.push(obj.positions));
		//console.log("num : " + num);
		num = num.flat();
		var gcds = [];
		for(i=0; i<num.length-1; i++){
			gcds.push(gcd(num[i],num[i+1]));
		}
		console.log("gcds: " + gcds);
		
		
	}
}

function printObj(item, index){
	console.log(JSON.stringify(item));
}

//greatest common divisor
function gcd(a,b){
	//console.log("ab:" + a + "," + b);
	if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
}

	

function old_callback(action){
	// var cipherText = "JBDYZCLNHJBDOR";
	var cipherText = document.getElementById("message").value.cleanup();
	
	
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
		console.log(ary.filter((s,p) => p.length > 12));
	}
}

window.onload = addListeners;