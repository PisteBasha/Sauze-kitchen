Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

var freeRoutes = [
	"home",
	"journeys",
	"journeys.insert",
	"journeys.details",
	"journeys.edit"
];

Router.onBeforeAction(function() {
	// loading indicator here
	if(!this.ready()) {
		$("body").addClass("wait");
		this.render("loading");
	} else {
		$("body").removeClass("wait");
		this.next();
	}
});

Router.map(function () {

	this.route("home", {path: "/", controller: "HomeController"});
	this.route("journeys", {path: "/journeys", controller: "JourneysController"});
	this.route("journeys.insert", {path: "/journeys/insert", controller: "JourneysInsertController"});
	this.route("journeys.details", {path: "/journeys/details/:journeyId", controller: "JourneysDetailsController"});
	this.route("journeys.edit", {path: "/journeys/edit/:journeyId", controller: "JourneysEditController"});
});
