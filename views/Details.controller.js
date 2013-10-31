sap.ui.controller("views.Details", {

	onNavButtonPressed: function() {
		var oApp = this.getView().getParent();
		oApp.back();
	}

});
