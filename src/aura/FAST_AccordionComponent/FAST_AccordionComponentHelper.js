/**
 * Created by cedrickithima on 08/11/2017.
 */
({
    doInit: function(component, event, helper){

        var parametersSrc = component.get("v.parametersSrc");

        if(parametersSrc){
            var paramsJson = $A.get('$Resource.FASTDefaultJSON') + parametersSrc;
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

            var paramsValues = getJSON(paramsJson) ;
            var params = JSON.parse(paramsValues);

            component.set("v.tabParameters", params);
            helper.setAllTabs(component, event, helper);
        }

    },
    handleTabClickEvent: function(component, event, helper){

        var selectedItem = event.currentTarget;
        var clickedTabId = selectedItem.id;

        helper.toggleTab(component, event, helper, clickedTabId);

    },
    toggleTab: function(component, event, helper, tabId){

        var activeTabContent = tabId+'Tab';
        var activeTabDwnIcon = tabId+'DwnIcon';
        var activeTabSideIcon = tabId+'SideIcon';

        var tab =  document.getElementById(tabId);
        var tabContent = document.getElementById(activeTabContent);
        var downIcon =  document.getElementById(activeTabDwnIcon);
        var sideIcon = document.getElementById(activeTabSideIcon);

        $A.util.toggleClass(tab, 'slds-is-active');
        $A.util.toggleClass(downIcon, 'slds-hide');
        $A.util.toggleClass(sideIcon, 'slds-hide');
        $A.util.toggleClass(tabContent, 'slds-is-open');

    },
    setAllTabs: function(component, event, helper){

        var tabParameters = component.get("v.tabParameters");
        var allTabs = [];

        for(var i in tabParameters){
            allTabs.push(tabParameters[i].sectionView);
        }

        var activeTabID = allTabs[0];
        component.set("v.allTabs", allTabs);
        component.set("v.activeTabId", activeTabID);

    },
})