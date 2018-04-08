/**
 * Created by cedrickithima on 12/10/2017.
 */
({
    menuItemClicked: function(component, event, helper){
        var menuItem = event.getParam("menuItem");
        var menuLocation = event.getParam("menuLocation");

        component.set("v.menuNameClicked", menuItem);
        component.set("v.menuLocationClicked", menuLocation);
        component.set("v.showBtnEvent", true);

    },
    handleInputEvent: function(component, event, helper){

        var inputName = event.getParam("inputName");
        var inputValue = event.getParam("inputValue");

        component.set(inputName, inputValue);

    },
})