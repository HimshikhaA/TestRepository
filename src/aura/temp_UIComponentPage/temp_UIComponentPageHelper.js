/**
 * Created by cedricsolvo on 28/09/2017.
 */
({
    menuItemClicked: function(component, event, helper){

        var pageView = event.getParam("menuItem");
        var menuLocation = event.getParam("menuLocation");

        if(menuLocation === "uiComponentPage"){
            component.set("v.pageView", pageView);
        }

    }
})