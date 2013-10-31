sap.ui.jsview("views.Master", {

	getControllerName: function() {
		return "views.Master";
	},

	createContent: function(oController) {
		var oList = new sap.m.List();
		oList.bindItems("/results", new sap.m.StandardListItem({
			title: "{collectionName}",
			icon: "{artworkUrl60}",
			type: sap.m.ListType.Active,
			press: [oController.showDetails, oController]
		}));
		return new sap.m.Page({
			title: "Star Trek: TV Seasons",
			content: [oList]
		});
	}

});
