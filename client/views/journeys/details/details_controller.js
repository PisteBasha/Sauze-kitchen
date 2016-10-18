this.JourneysDetailsController = RouteController.extend({
	template: "JourneysDetails",
	

	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("loading"); }
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
		

		var subs = [
			Meteor.subscribe("journey", this.params.journeyId)
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {
		

		var data = {
			params: this.params || {},
			journey: Journeys.findOne({_id:this.params.journeyId}, {})
		};
		

		

		return data;
	},

	onAfterAction: function() {
		
	}
});