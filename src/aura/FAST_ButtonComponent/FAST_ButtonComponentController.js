/**
 * Created by cedricsolvo on 28/09/2017.
 */
({
    doInit: function(component, event, helper){
        helper.doInit(component, event, helper);
    },
    handleOnClick: function(component, event, helper){
        helper.fireClickEvent(component, event, helper);
    }
})