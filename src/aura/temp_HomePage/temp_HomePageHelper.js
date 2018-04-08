/**
 * Created by cedrickithima on 03/10/2017.
 */
({
    menuItemClicked: function(component, event, helper){

        var selectedItem = event.currentTarget;
        var itemId = selectedItem.dataset.itemId;

        var compEvent = component.getEvent("menuItemClicked");
        compEvent.setParams({
            "itemId" : itemId,
            "itemValue" : itemId
        });
        compEvent.fire();

    },
})