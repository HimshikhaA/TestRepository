/**
 * Created by cedrickithima on 02/11/2017.
 */
({
    doInit: function(component, event, helper){

        var formParameterType = component.get("v.formParameterType");

        if(formParameterType === 'staticResource'){

            var staticResource = component.get("v.staticResource");
            var pathToFile = component.get("v.pathToFile");

            var resourceVar = '$Resource.'+ staticResource;

            var paramsJson = $A.get(resourceVar) + pathToFile;
            function getJSON(url) {
                var resp ;
                var xmlHttp ;

                resp  = '' ;
                xmlHttp = new XMLHttpRequest();

                if(xmlHttp != null)
                {
                    xmlHttp.open( "GET", url, false );
                    xmlHttp.send( null );
                    resp = xmlHttp.responseText;
                }

                return resp ;
            };

            var paramsValues = getJSON(paramsJson) ;
            var params = JSON.parse(paramsValues);

            component.set("v.formParameters", params);
        }

    },
    fireInputEvent : function(component, event, helper) {
        var formEmbedType = component.get("v.formEmbedType");
        var formName = component.get("v.formName");
        var formTitle = component.get("v.formTitle");
        var formSection = component.get("v.formSection");
        var formValues = component.get("v.formValues");


        if(formEmbedType){
            if(formEmbedType === "modal"){
                var compEvent = component.getEvent("fastModalFormEvent");
            }

        } else {
            compEvent = component.getEvent("fastFormEvent");
        }

        compEvent.setParams({
            "inputName" : formName,
            "formValues" : formValues,
            "formSection" : formSection,
            "formTitle": formTitle
        });

        compEvent.fire();
    },
    handleInputEvent: function(component, event, helper){

        var inputName = event.getParam("inputName");
        var inputValue = event.getParam("inputValue");
        var inputLabel = event.getParam("inputLabel");
        var initialValue = event.getParam("initialValue");
       // event.stopPropagation();


        var formValues = component.get("v.formValues");

        formValues[inputName] = {
            "field":inputName,
            "label":inputLabel,
            "value":inputValue,
            "initialValue": initialValue
        };

        helper.fireInputEvent(component, event, helper);

    },

})