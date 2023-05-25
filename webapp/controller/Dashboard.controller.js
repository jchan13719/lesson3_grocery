sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UIComponent) {
        "use strict";

        return Controller.extend("grocery.controller.Dashboard", {
            // onInit: function () {
            //     alert("onInit")
            // },
            // onBeforeRendering: function () {
            //     alert("onBeforeRendering")
            // },
            // onAfterRendering: function () {
            //     alert("onAfterRendering")
            // },
            // onExit: function () {
            //     alert("onExit")
            // },
            setNewName:function(){
                //************Input Property************
                let currName=this.getView().byId("nameInput").getValue();
                let currNameLength=currName.length;

                 let buttonReference=this.getView().byId("nameSubmit");
                //Case 1: Accept if there are input characters
                //Case 2: Reject if there are no input characters
                if(currNameLength>0){
                    buttonReference.setProperty("text", "Accept");
                    buttonReference.setProperty("type", "Accept");
                    buttonReference.setProperty("icon", "sap-icon://accept");
                    buttonReference.setProperty("enabled", true);
                }
                else{
                    buttonReference.setProperty("text", "Reject")
                    buttonReference.setProperty("type", "Reject");
                    buttonReference.setProperty("icon", "sap-icon://decline")
                    buttonReference.setProperty("enabled", false)
                }
            },
            onButtonClick:function(){
                let currName=this.getView().byId("nameInput").getValue();
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("RouteList", {
                    name: currName
                });
            }


        });
    });
