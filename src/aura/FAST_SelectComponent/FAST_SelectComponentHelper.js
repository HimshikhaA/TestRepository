/**
 * Created by cedrickithima on 04/10/2017.
 */
({
    doInit: function(component, event, helper){
        
        var initialValue = component.get("v.initialValue");
        var customLabelID = component.get("v.customLabelID");

        if(initialValue){
            component.set("v.inputValue", initialValue);
        }

        var labelReference = $A.getReference("$Label.c." + customLabelID);

        var labelLink = '$Label.c.' + customLabelID;
        var label = $A.get(labelLink);

        component.set("v.selectLabel", label);

    },
    fireInputEvent : function(component, event, helper) {
        var inputName = component.get("v.selectName");
        var inputValue = component.get("v.selectValue");
        var inputLabel = component.get("v.selectLabel");

        var compEvent = component.getEvent("fastInputEvent");
        compEvent.setParams({
            "inputName" : inputName,
            "inputValue" : inputValue,
            "inputLabel" : inputLabel
        });

        compEvent.fire();
    }
})