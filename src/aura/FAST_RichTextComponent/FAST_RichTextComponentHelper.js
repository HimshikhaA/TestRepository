/**
 * Created by cedrickithima on 30/10/2017.
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
    }
})