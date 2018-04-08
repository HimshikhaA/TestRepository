/**
 * Created by cedrickithima on 11/10/2017.
 */
({
    menuItemClicked: function(component, event, helper){

        var pageView = event.getParam("menuItem");
        var menuLocation = event.getParam("menuLocation");

        if(menuLocation === "inputsPage"){
            component.set("v.pageView", pageView);
        }

    }
})