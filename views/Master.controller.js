sap.ui.controller("views.Master", {

	onInit: function() {
		var sUrl = "https://itunes.apple.com/search?term=star+trek&media=tvShow&entity=tvSeason&attribute=tvSeasonTerm&callback=?";
		var oModel = new sap.ui.model.json.JSONModel(sUrl);
		sap.ui.getCore().setModel(oModel);
	},

	showDetails: function(oEvent) {
		var oApp = this.getView().getParent();
		var sBindingPath = oEvent.getSource().getBindingContext().getPath();
		oApp.getPage("DetailsView").bindElement(sBindingPath);
		oApp.to("DetailsView");
	}

});
