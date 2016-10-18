this.Journeys = new Mongo.Collection("journeys");

this.Journeys.userCanInsert = function(userId, doc) {
	return true;
};

this.Journeys.userCanUpdate = function(userId, doc) {
	return true;
};

this.Journeys.userCanRemove = function(userId, doc) {
	return true;
};
