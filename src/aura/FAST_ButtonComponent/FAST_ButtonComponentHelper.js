/**
 * Created by cedricsolvo on 28/09/2017.
 */
({
    doInit: function(component, event, helper){

        var customLabelID = component.get("v.customLabelID");

        if(customLabelID){
            var labelReference = $A.getReference("$Label.c." + customLabelID);
            component.set("v.btnLabel", labelReference);
        }

    },
    fireClickEvent : function(component, event, helper) {
        var btnName = component.get("v.btnName");
        var btnValue = component.get("v.btnValue");
        var btnOnclickAction = component.get("v.btnOnclickAction");

        var compEvent = component.getEvent("fastBtnClicked");
        compEvent.setParams({
            "itemName" : btnName,
            "itemValue" : btnValue,
            "itemOnclickAction": btnOnclickAction
        });

        compEvent.fire();
    }
})