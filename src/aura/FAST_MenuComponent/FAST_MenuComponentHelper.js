/**
 * Created by cedrickithima on 03/10/2017.
 */
({
    doInit: function(component, event, helper){

        var menuValues = component.get("v.menuValues");
        var menuValuesType = component.get("v.menuValuesType");

        if(menuValuesType === 'staticResource'){
            var mainMenuJson = $A.get('$Resource.FASTDefaultJSON') + menuValues;
            function getJSON(url) {
                var resp ;
                var xmlHttp ;

                resp  = '' ;
                xmlHttp = new XMLHttpRequest();

                if(xmlHttp != null)
                {
                    xmlHttp.open( "GET", url, false );
                    xmlHttp.send( null );
                    resp = xmlHttp.responseText;
                }

                return resp ;
            };

            var mainMenu = getJSON(mainMenuJson) ;
            var menuItems = JSON.parse(mainMenu);

            component.set("v.menuItems", menuItems);
        }

    },
    menuItemClicked: function(component, event, helper){

        var selectedItem = event.currentTarget;
        var itemId = selectedItem.id;
        var menuLocation = component.get("v.menuLocation");

        component.set("v.currentSelectedItem", selectedItem);

        var compEvent = component.getEvent("menuItemClicked");
        compEvent.setParams({
            "menuItem" : itemId,
            "menuLocation" : menuLocation
        });
        compEvent.fire();

    },
    handleMenuItemClicked: function(component, event, helper){
        var currentSelected = component.get("v.currentSelectedItem");
        var previousSelected = component.get("v.previousSelectedItem");

        $A.util.addClass(currentSelected, 'active');

        if(currentSelected != previousSelected){

            $A.util.removeClass(previousSelected, 'active');
            component.set("v.previousSelectedItem", currentSelected);

        }

    },

})