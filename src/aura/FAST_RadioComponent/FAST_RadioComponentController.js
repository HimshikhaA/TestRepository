/**
 * Created by cedrickithima on 15/01/2018.
 */
({
    doInit: function(component, event, helper){
        helper.doInit(component, event, helper);
    },
    handleInputEvent: function(component, event, helper){
        helper.fireInputEvent(component, event, helper);
    },
    handleDisableChange: function(component, event, helper){
        helper.handleDisableChange(component, event, helper);
    },
    handleRequiredChange: function(component, event, helper){
        helper.handleRequiredChange(component, event, helper);
    }
})