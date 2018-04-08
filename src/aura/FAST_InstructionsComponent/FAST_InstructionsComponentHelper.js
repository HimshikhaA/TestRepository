/**
 * Created by cedrickithima on 16/01/2018.
 */
({
    doInit: function(component, event, helper){


        var customLabelID = component.get("v.customLabelID");
        var labelReference = $A.getReference("$Label.c." + customLabelID);
        component.set("v.text", labelReference);

    },
})