/**
 * Created by cedrickithima on 04/10/2017.
 */
({
    menuItemClicked: function(component, event, helper){

        var pageView = event.getParam("menuItem");
        var menuLocation = event.getParam("menuLocation");

        if(menuLocation === "formsPage"){
            component.set("v.pageView", pageView);
        }

    }
})