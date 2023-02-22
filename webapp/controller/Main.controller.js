sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("com.seidor.ns.sapui5crud1.controller.Main", {
            onInit: function () {

                var that = this;
                var odataModel = new sap.ui.model.odata.v2.ODataModel("/V2/(S(gpjcelaleuaxoofac1repdts))/OData/OData.svc/");
                odataModel.read("/Products", {
                    success: function (oData, oResponse) {
                        console.log("oData =>", oData);
                        MessageBox.success("Success");
                    },
                    error: function (oError) {
                        console.log("oError =>", oError);
                        MessageBox.error("Error");
                    }
                });
                this.getView().setModel(odataModel);

            }
        });
    });
