/**
 * Created by cedrickithima on 30/10/2017.
 */
({
    doInit: function(component, event, helper){
        helper.doInit(component, event, helper);
        helper.updateInitialValues(component, event, helper);
    },
    updateInitialValues: function(component, event, helper){
        helper.updateInitialValues(component, event, helper);
    },
    handleInputEvent: function(component, event, helper){
        helper.fireInputEvent(component, event, helper);
    }
})