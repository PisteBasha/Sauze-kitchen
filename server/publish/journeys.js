Meteor.publish("journeys", function() {
	return Journeys.find({}, {});
});

Meteor.publish("journeys_empty", function() {
	return Journeys.find({_id:null}, {});
});

Meteor.publish("journey", function(journeyId) {
	return Journeys.find({_id:journeyId}, {});
});

