/**
 * Created by cedrickithima on 08/11/2017.
 */
({
    doInit: function(component, event, helper){

        var parametersSrc = component.get("v.formParametersSrc");

        var paramsJson = $A.get('$Resource.FASTDefaultJSON') + parametersSrc;
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

        component.set("v.dynamicContentParameters", params);

    },
    closeModal : function(component, event, helper) {
        component.set("v.showModal", false);
    },
    fireInputEvent : function(component, event, helper) {
        var formName = component.get("v.formName");
        var formSection = component.get("v.formSection");
        var formValues = component.get("v.formValues");

        var compEvent = component.getEvent("fastFormEvent");


        compEvent.setParams({
            "inputName" : formName,
            "formValues" : formValues,
            "formSection" : formSection
        });

        compEvent.fire();
    },
    handleInputEvent: function(component, event, helper){

        var inputName = event.getParam("inputName");
        var inputValue = event.getParam("inputValue");
        event.stopPropagation();


        var formValues = component.get("v.formValues");

        formValues[inputName] = inputValue;

        helper.fireInputEvent(component, event, helper);

    },
})