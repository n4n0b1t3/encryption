function addListeners(){
	var button_count = document.getElementById('button_count');
	
	if(window.addEventListener) {
		button_count.addEventListener("click", callback("count"), false);
	}
}


String.prototype.cleanup = function() {
   return this.toUpperCase().replace(/[^a-zA-Z]+/g, "");
}

/*
to-do: position
*/


function callback(action){
	var cipherText_long = "JBDYZCLNHSIAORDOSSMUMBVRBPCEZSRRTAPFBHYESURVFAVSPAVAEJZCFHYAUWMECSVNUIINJBXOWSIIOAPMJBUEWSISJBTEXVVNFJVRZCLFFSCLJYVCSWKIDWQIOURNZCEEISKOMRDEKIJTSSDENPVRUVRTBZCTISGEPDCEJBKHJGNOSZUHBJVNUVRDUVVAEJRNUOXETHYAUMFUWSYAEVVDJRETTOPAOMDOSSSUUKVVFOCWBMJBFSEUOIJUBZCYDCDMVBZCBHZVFWEASSJESJVDXOPAORZUORVRTHFOEHYAUVVMFOETBUIEBHUEBZDOSSKHBBKHBHZNDCESFELEOQVINWECMWEEEHFRFGVRWSRLMXLDHAVNUGRHBPZTUVRTIOJOQSEEEIGMBBPCVFZOVGEAUIIETHFMFOEDBZJONOUENSKHFJZCUWDOGBFTBTVWWSKESOEBPFVSUVVACBFRNOCMJBUITELIDYKOESKEDHRNEOKTBQYIUGVLGHFTIWJQVOCIUMNHFBZTBDGEBFJIOOEOSARLQSISPBRNEGFIUQRMFOSOVHKHBHZNDCCLFUVIXOJUOXLSUZPADQLSFRFFCSZNHOGOMWKIDWRNCSTAVGVIXOJPSWMYUCKHFGVCSSKGSWVFTCWWJZUUOYEOXBDEOAFSUCWTISTOOTZDFBTETKVRFIESPIXHUTIERIVNUZPIIOMEGSZGOSUSMSVPQFVODQLPBHZOOCIAICJTJZVLFJZTZKYEOWIEBZZZFRSYTCDEVBDITHRKBPCETWXNUVRTBBZNUWDAUSIEWSCAUWFNXOJQVWMESWEGPBKHFVFRJNFNGCITISZNUWDAUSIEWSCAUWFNTCWYPIEGNSEOSOKLFOJTUVVTFFDSJBNHJQYTISPEYDIETGKHFARRFIJUBZCYQZRGJOIITHZCBBUMBFIEEPPOCJZOVGJUQDIETGZOOGIETSIVJBXJVRXMFBKSJGRMBHKESCWIOTZNJHVHPDVIBAJTJZCAMWKTMSRFSOZDPTDITGZNHGFMFHYIOUZFJTFRHSKTIOKATAPFBHYESGEOCPZSIZPSVUXETHVDBBUITBFBCWJHMMIEQSRTBGVNTSFFUVVFVBUANSETBZUEDSECJSJITDRRDSCLFRFUUIEERIRLMMRTCWITI";
	
	var cipherText = "JBDYZCLNHSIAORDOSSMUMBVRBPCEZSRRTAPFBHYESURVFAVSPAVAEJZCFHYAUWMECSVNUIINJBXOWSIIOAPMJBUEWSISJBTEXVVNFJVRZCLFFSCLJYVCSWKIDWQIOURNZCEEISKOMRDEKIJTSSDENPVRUVRTBZCTISGEPDCEJBKHJGNOSZUHBJVNUVRDUVVAEJRNUOXETHYAUMFUWSYAEVVDJRETTOPAOMDOSSSUUKVVFOCWBMJBFSEUOIJUBZCYDCDMVBZCBHZVFWEASSJESJVDXOPAORZUORVRTHFOEHYAUVVMFO";
	
	var output_text = document.getElementById('output');
	var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";			

	return function(){
		var message = Array.from(document.getElementById('message').value.cleanup());
		
		if(action == "count"){
			var coincidences = new Array();
			var test = 0;
			for(var i = 0; i < cipherText.length -4; i++){
				
				var substring = cipherText.substring(i, i+4);
				var regex = new RegExp(substring, 'g');
				var count = 0;
				var positions = [];
				while((match = regex.exec(cipherText)) != null) {
					count ++;
					test++;
					console.log(count);
					console.log("test: " + test + ", match: " + match);
					positions.push(match.index);
				}
				if (count > 2){
					console.log({sequence:substring, positions:positions})
				}
				//cipherText = cipherText.substring(1, cipherText.length);
			}
			//console.log(coincidences);
		}
		
		//output_text.innerHTML = output.join("");
	}
}


	
//var count = (cipherText.match(/JBD/g) || []).length;
/*
var copy = ciphertext.slice();
copy.unshift("#");
var result = Array();

ciphertext.forEach(count_coincidents);

function count_coincidents(item, index){
	copy.unshift("#");
	var found_coincidents = ciphertext.filter((element, i) => element == copy[i]).length;
	console.log("[" + index + "]" + item + ":" + found_coincidents + ";");
	result.push([index, found_coincidents]);
}
console.log(result);
*/
window.onload = addListeners;