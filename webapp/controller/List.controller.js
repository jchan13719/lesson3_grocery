sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent) {
        "use strict";

        return Controller.extend("grocery.controller.List", {
            onInit: function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteList").attachPatternMatched(this.onRouteMatched, this)
            },
            onRouteMatched:function(oEvent){
                debugger
                let welcome="Welcome "
                let name=oEvent.getParameter("arguments").name
                let newMessage=welcome+name+ "!"
                this.getView().byId("nameLabel").setProperty("text",newMessage)
            }
        });
    });
