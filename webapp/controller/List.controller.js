sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("grocery.controller.List", {
            onInit: function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.getRoute("RouteDashboard").attachPatternMatched(this.onRouteMatched, this)
            },
            onRouteMatched:function(oEvent){
                let name=oEvent.getParameter("arguments").name
                this.getView().by
            }
        });
    });
