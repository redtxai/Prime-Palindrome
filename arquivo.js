var n = 2
var i = 5
var d = 0

while(i < 1000) {
	
	if (i%2 != 0 && i%3 != 0) {
		for (var j = 5; j <= i; j++) {
			if (i%j == 0) {
				d++
			}
		}
		if (d == 1 && isPalindromeCheck(i.toString())) {
			n = i
		}
		d = 0
	}
	i++
}

console.log(n)


function isPalindromeCheck (numero) {
	var isPalindrome = true
	for (var i = 0; i <= (numero.length-1); i++) {
		if (numero[i] != numero[(numero.length-1) - i])
			isPalindrome = false
	}
	return isPalindrome
}