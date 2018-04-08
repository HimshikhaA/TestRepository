/**
 * Created by cedrickithima on 25/01/2018.
 */
({
    doInit: function(component, event, helper){

        var customLabelID = component.get("v.customLabelID");

        if(customLabelID){
            var labelReference = $A.getReference("$Label.c." + customLabelID);
            component.set("v.label", labelReference);
        }

    },
})