
var ciphertext = ["E","H","Q","L","C","K","U","I","L","M","K","P","N","T","R","M","H","K","I","I","I","D","D","G","Q","F","E","D","V","L","X","F","V","Y","C","P","W","L","J","Y","Q","J","V","Z","R","S","L","P","N","T","X","Z","Z","P","V","G","V","Y","W","Z","I","Y","Q","Z","H","G","E","W","V","Y","X","S","W","N","Q","H","D","G","A","T","S","D","I","Y","V","N","L","Q","R","T","J","A","Q","N","Z","P","N","T","Z","M","D","X","U","T","D","H","R","O","V","Y","M","D","V","K","O","C","E","B","I","K","V","T","Q","V","L","P","J","Y","M","D","V","K","U","I","L","Y","J","P","A","F","Q","K","M","V","A","T","T","Q","M","E","E","W","Z","Y","M","Y","C","T","R","M","C","K","K","H","V","Y","D","K","D","Y","Q","S","S","W","Z","T","D","D","D","K","V","D","L","R","X","K","N","Y","D","D","Q","M","A","L","Q","S","L","L","P","T","R","K","P","K","P","B","V","Y","T","P","K","J","C","D","D","T","J","T","K","G","M","D","V","Q","F","Q","P","O","V","B","R","U","I","Y","V","N","Q","G","E","O","V","N","Y","D","D","L","Z","P","R","M","X","L","C","Y","J","Y","X","S","W","N","Q","X","S","F","V","P","V","Y","L","L","Z","T","Q","Y","D","S","A","T","U","H","H","Y","V","N","Q","R","E","J","V","U","E","X","D","X","K","L","V","Y","D","M","Q","N","Q","V","I","K"]

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