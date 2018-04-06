
model.User.email.events.validate = function(email) {
	var err, emailRegexStr, isValid;
	//Check the email to see if it's valid.
	if (this.email !== null) {
		emailRegexStr = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		isValid = emailRegexStr.test(this.email);
		if (!isValid) {
			return {error: 1, errorMessage: "Email is invalid."};
		}
	}
    else {
        return {error: 0}; //Same as no error
    } 
};
model.User.password.events.set = function(value) {
	this.HA1Key = directory.computeHA1(this.ID, value);
};


model.User.password.onGet = function() {
	return "*****";
};
model.User.password.onSet = function(value) {
	this.HA1Key = directory.computeHA1(this.ID, value);
};
model.User.events.save = function(event) {
	this.userID = directory.current.User.ID;
};
model.User.events.restrict = function(event) {
return ds.Todo.query("userID == 1", directory.currentUser.ID);
};