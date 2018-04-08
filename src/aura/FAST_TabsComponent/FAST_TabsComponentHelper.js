/**
 * Created by cedrickithima on 10/11/2017.
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
        var allTabs = component.get("v.allTabs");

        for(var i in allTabs){

            var tabId = allTabs[i];

            if(clickedTabId === tabId){
                helper.showTab(component, event, helper, tabId);
            } else {
                helper.hideTab(component, event, helper, tabId);
            }

        }

    },
    showTab: function(component, event, helper, tabId){

        var activeTabContent = tabId+'Tab';

        var tab =  document.getElementById(tabId);
        var tabContent = document.getElementById(activeTabContent);

        $A.util.addClass(tab, 'slds-is-active');
        $A.util.removeClass(tabContent, 'slds-hide');

    },
    hideTab: function(component, event, helper, tabId){

        var activeTabContent = tabId+'Tab';

        var tab =  document.getElementById(tabId);
        var tabContent = document.getElementById(activeTabContent);

        $A.util.removeClass(tab, 'slds-is-active');
        $A.util.addClass(tabContent, 'slds-hide');

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