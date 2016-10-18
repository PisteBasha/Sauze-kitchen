var pageSession = new ReactiveDict();

Template.JourneysInsert.rendered = function() {
	
};

Template.JourneysInsert.events({
	
});

Template.JourneysInsert.helpers({
	
});

Template.JourneysInsertInsertForm.rendered = function() {
	

	pageSession.set("journeysInsertInsertFormInfoMessage", "");
	pageSession.set("journeysInsertInsertFormErrorMessage", "");

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

Template.JourneysInsertInsertForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("journeysInsertInsertFormInfoMessage", "");
		pageSession.set("journeysInsertInsertFormErrorMessage", "");

		var self = this;

		function submitAction(msg) {
			var journeysInsertInsertFormMode = "insert";
			if(!t.find("#form-cancel-button")) {
				switch(journeysInsertInsertFormMode) {
					case "insert": {
						$(e.target)[0].reset();
					}; break;

					case "update": {
						var message = msg || "Saved.";
						pageSession.set("journeysInsertInsertFormInfoMessage", message);
					}; break;
				}
			}

			Router.go("journeys", {});
		}

		function errorAction(msg) {
			msg = msg || "";
			var message = msg.message || msg || "Error.";
			pageSession.set("journeysInsertInsertFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				newId = Journeys.insert(values, function(e) { if(e) errorAction(e); else submitAction(); });
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

Template.JourneysInsertInsertForm.helpers({
	"infoMessage": function() {
		return pageSession.get("journeysInsertInsertFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("journeysInsertInsertFormErrorMessage");
	}
	
});
