var pageSession = new ReactiveDict();

Template.JourneysEdit.rendered = function() {
	
};

Template.JourneysEdit.events({
	
});

Template.JourneysEdit.helpers({
	
});

Template.JourneysEditEditForm.rendered = function() {
	

	pageSession.set("journeysEditEditFormInfoMessage", "");
	pageSession.set("journeysEditEditFormErrorMessage", "");

	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format");

		if(format) {
			format = format.toLowerCase();
		}
		else {
			format = "mm/dd/yyyy";
		}

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[type='file']").fileinput();
	$("select[data-role='tagsinput']").tagsinput();
	$(".bootstrap-tagsinput").addClass("form-control");
	$("input[autofocus]").focus();
};

Template.JourneysEditEditForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("journeysEditEditFormInfoMessage", "");
		pageSession.set("journeysEditEditFormErrorMessage", "");

		var self = this;

		function submitAction(msg) {
			var journeysEditEditFormMode = "update";
			if(!t.find("#form-cancel-button")) {
				switch(journeysEditEditFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("journeysEditEditFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("journeys", {});
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("journeysEditEditFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				Journeys.update({ _id: t.data.journey._id }, { $set: values }, function(e) { if(e) errorAction(e); else submitAction(); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("journeys", {});
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		/*CLOSE_REDIRECT*/
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		/*BACK_REDIRECT*/
	}

	
});

Template.JourneysEditEditForm.helpers({
	"infoMessage": function() {
		return pageSession.get("journeysEditEditFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("journeysEditEditFormErrorMessage");
	}
	
});
