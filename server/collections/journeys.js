Journeys.allow({
	insert: function (userId, doc) {
		return Journeys.userCanInsert(userId, doc);
	},

	update: function (userId, doc, fields, modifier) {
		return Journeys.userCanUpdate(userId, doc);
	},

	remove: function (userId, doc) {
		return Journeys.userCanRemove(userId, doc);
	}
});

Journeys.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;
	doc.modifiedAt = doc.createdAt;
	doc.modifiedBy = doc.createdBy;

	
	if(!doc.createdBy) doc.createdBy = userId;
});

Journeys.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Journeys.before.upsert(function(userId, selector, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	/*BEFORE_UPSERT_CODE*/
});

Journeys.before.remove(function(userId, doc) {
	
});

Journeys.after.insert(function(userId, doc) {
	
});

Journeys.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Journeys.after.remove(function(userId, doc) {
	
});
