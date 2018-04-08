/**
 * Created by cedrickithima on 24/01/2018.
 */
({
    doInit: function(component, event, helper){

        var staticResource = component.get("v.staticResource");
        var pathToFile = component.get("v.pathToFile");

        var resourceVar = '$Resource.'+ staticResource;

        var imgSrc = $A.get(resourceVar) + pathToFile;
        component.set("v.imgSrc", imgSrc);

        var customLabelID = component.get("v.altTextCustomLabelID");

        if(customLabelID){
            var labelReference = $A.getReference("$Label.c." + customLabelID);
            component.set("v.altText", labelReference);
        }


    },
})