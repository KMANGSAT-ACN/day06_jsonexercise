sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "../model/formatter"            // .. represent webap, no need for extension
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
            formatter: formatter,

            onInit: function () {
                // Create new model
                var OAddressModel = new JSONModel({
                    "EID": "kenneth.b.l.mangsat",
                    "Enabled": true,
                    "Address": {
                        "Street": "Street no",
                        "City": "City",
                        "Zip": "Zip",
                        "Country": "PH"
                    },
                    "SalesAmount": 100,
                    "CurrencyCode": "PHP"
                });
                // add the model to view with myAddress as alias
                this.getView().setModel(OAddressModel, "myAddress");
            },

            onSelectedChange: function (oEvent) {

                // get context binding path in the selected row
                // of the list from view
                var oSelPath = oEvent.getSource().getSelectedItem().getBindingContextPath();

                // bind value to view, need specific w/ form
                this.getView().byId("simpleForm4").bindElement(
                    {
                        path: oSelPath,
                        model: "ProductsModel"  // same on the main model
                    }
                );
                
            }
        });
    });