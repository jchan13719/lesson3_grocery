sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    'sap/ui/model/json/JSONModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent,JSONModel) {
        "use strict";

        return Controller.extend("grocery.controller.List", {
            onInit: function () {
                //Router
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteList").attachPatternMatched(this.onRouteMatched, this)
                //Set a new JSON model for grocery Items
                var groceryModel = new JSONModel("/model/groceryItems.json");
			    this.getView().setModel(groceryModel);
                //Set list busy until data is loaded
                // this.getView().byId("groceryList").setBusy(true)
            },
            onRouteMatched:function(oEvent){
                debugger
                let welcome="Welcome "
                let name=oEvent.getParameter("arguments").name
                let newMessage=welcome+name+ "!"
                this.getView().byId("nameLabel").setProperty("text",newMessage)
            },
            startLoadNewChunk:function(){
                this.getView().byId("groceryList").setBusy(true)
            },
            endLoadNewChunk:function(){
                this.getView().byId("groceryList").setBusy(false)
            }
        });
    });
