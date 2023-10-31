const encryptThis = require('./index.js');

test('encryptThis("Hello") deve retornar `72olle`', () => {
	expect(encryptThis("Hello")).toBe("72olle");
});

test('encryptThis("good") deve retornar `103doo`', () => {
	expect(encryptThis("good")).toBe('103doo');
});

test('encryptThis("hello world") deve retornar "104olle 119drlo"', () => {
	expect(encryptThis("hello world")).toBe("104olle 119drlo");
});

test('encryptThis("Receba nota") deve retornar "82acebe 110ato"', () => {
	expect(encryptThis("Receba nota")).toBe("82acebe 110ato");
});