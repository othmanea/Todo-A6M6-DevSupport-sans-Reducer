ds.User.all()
// REMOVES all
// ds.User.remove();

//this should return true

directory.loginByPassword('jcm@jcm.be', '1234567')

//this should return false
//directory.loginByPassword('jerry@wakanda.io', '123')

// This should send you an error, email invalid
/*
debugger;
var jerry = new ds.User({
	fullName: "JCLMAQ",
	email: "jcm@jcm.be", 
	password: "1234567"
});

jerry.save();

*/