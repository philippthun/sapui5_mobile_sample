sap.ui.jsview("views.Details", {

	getControllerName: function() {
		return "views.Details";
	},

	createContent: function(oController) {
		var oList = new sap.m.List();
		oList.addItem(new sap.m.CustomListItem({
			content: [new sap.m.Image({
				src: "{artworkUrl100}"
			})]
		}));
		oList.addItem(new sap.m.StandardListItem({
			title: "Number of Episodes",
			description: "{trackCount}"
		}));
		oList.addItem(new sap.m.StandardListItem({
			title: "Date of Release",
			description: {
				path: "releaseDate",
				type: new sap.ui.model.type.Date({
					source: {
						pattern: "yyyy-MM-dd'T'HH:mm:ss'Z'"
					}
				})
			}
		}));
		oList.addItem(new sap.m.CustomListItem({
			content: [new sap.ui.core.HTML({
				content: {
					path: "longDescription",
					formatter: function(sValue) {
						return "<span>" + sValue + "</span>";
					}
				}
			})]
		}));
		oList.addItem(new sap.m.CustomListItem({
			content: [new sap.m.Image({
				src: "Available_on_iTunes_Badge_US-UK_110x40_0824.png"
			})]
		}));
		return new sap.m.Page({
			title: "{collectionName}",
			showNavButton: true,
			navButtonPress: [oController.onNavButtonPressed, oController],
			content: [oList]
		});
	}

});
