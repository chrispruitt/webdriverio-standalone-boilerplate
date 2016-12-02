var selectElem = require('../../util/ElementSelector');

describe('Facebook login page', function() {

	// Screen shots are only taken on error.
	// TODO: Gotta figure out how to take a screen shot on a chia assertion failure as well.
	it('should fail this test and take a screen shot', function() {
		browser.url('http://www.facebook.com');
		browser.setValue(selectElem.byName('email'), 'exception@someemail.co');
		browser.setValue(selectElem.byName('password'), 'somepassword');
		browser.getTitle().should.be.equal('wrong title to fail test on purpose');
	});

	it('should fail log in ', function() {
		browser.url('http://www.facebook.com');
		browser.setValue(selectElem.byName('email'), 'success@someemail.co');
		browser.setValue(selectElem.byName('pass'), 'somepassword');
		browser.getTitle().should.be.equal('Facebook - Log In or Sign Up');
	});
});