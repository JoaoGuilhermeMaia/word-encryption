function encryptThis(message) {
	const allWords = message.split(' ');

	function encryptWord(word) {
		if (word.length === 0) return '';
		const firstChar = word.charCodeAt(0);
		const wordArray = word.split('');

		if (wordArray.length > 1) {
			[wordArray[1], wordArray[wordArray.length - 1]] = [wordArray[wordArray.length - 1], wordArray[1]];
		}

		return firstChar + wordArray.slice(1).join('');
	}

	const encryptedWords = allWords.map(encryptWord);
	return encryptedWords.join(' ');
}

console.log(encryptThis("Receba nota"));
module.exports = encryptThis;