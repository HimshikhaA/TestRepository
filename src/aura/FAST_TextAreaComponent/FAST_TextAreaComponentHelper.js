/**
 * Created by cedrickithima on 30/10/2017.
 */
({
    doInit: function(component, event, helper){

        var customLabelID = component.get("v.customLabelID");
        var labelReference = $A.getReference("$Label.c." + customLabelID);
        component.set("v.inputLabel", labelReference);

    },
    updateInitialValues : function(component, event, helper) {

        var initialValue = component.get("v.initialValue");
        if(initialValue){
            component.set("v.inputValue", initialValue);
        }

    },
    fireInputEvent : function(component, event, helper) {
        var inputName = component.get("v.inputName");
        var inputLabel = component.get("v.inputLabel");
        var inputValue = component.get("v.inputValue");
        var initialValue = component.get("v.initialValue");

        var compEvent = component.getEvent("fastInputEvent");
        compEvent.setParams({
            "inputName" : inputName,
            "inputValue" : inputValue,
            "inputLabel" : inputLabel,
            "initialValue" : initialValue
        });

        compEvent.fire();
    }
})