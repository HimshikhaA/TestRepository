/**
 * Created by cedrickithima on 15/01/2018.
 */
({
    doInit: function(component, event, helper){

        var initialValue = component.get("v.initialValue");
        var customLabelID = component.get("v.customLabelID");

        if(initialValue){
            component.set("v.inputValue", initialValue);
        }

        var labelReference = $A.getReference("$Label.c." + customLabelID);
        component.set("v.inputLabel", labelReference);

    },
    fireInputEvent : function(component, event, helper) {
        var inputName = component.get("v.inputName");
        var inputLabel = component.get("v.inputLabel");
        var inputValue = component.get("v.inputValue");

        var compEvent = component.getEvent("fastInputEvent");
        compEvent.setParams({
            "inputName" : inputName,
            "inputValue" : inputValue,
            "inputLabel" : inputLabel
        });

        compEvent.fire();

    },
    handleDisableChange: function(component, event, helper){

        var value = component.get("v.inputDisabled");
        var inputName = component.get("v.inputName");

        if(value){
            component.find(inputName).set("v.disabled", true);
        } else {
            component.find(inputName).set("v.disabled", false);
        }

    },
    handleRequiredChange: function(component, event, helper){

        var value = component.get("v.inputRequired");
        var inputName = component.get("v.inputName");

        if(value){
            component.find(inputName).set("v.inputRequired", true);
        } else {
            component.find(inputName).set("v.inputRequired", false);
        }

    }
})