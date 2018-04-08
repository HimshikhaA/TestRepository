/**
 * Created by cedrickithima on 08/11/2017.
 */
({
    doInit: function(component, event, helper){

        /*
        $Label.c.TQQ_SiteAddress
        $Label.c.TQQ_DescriptionOfTheProposal
        $Label.c.TQQ_Materials
        $Label.c.TQQ_SiteArea
        $Label.c.TQQ_ApplicantDetails
        $Label.c.TQQ_ExistingUse
        $Label.c.TQQ_App09Title
        $Label.c.TQQ_App04Title
        $Label.c.TQQ_ResidentialDwellingUnits
       $Label.c.TQQ_Houses
       $Label.c.TQQ_FlatsAndMaisonettes
       $Label.c.TQQ_LiveWorkUnits
       $Label.c.TQQ_ClusterFlats
       $Label.c.TQQ_ShelteredHousing
       $Label.c.TQQ_BedsiteStudios
       $Label.c.TQQ_UnknownType
        */

        var formParametersSrc = component.get("v.formParametersSrc");

        var paramsJson = $A.get('$Resource.FASTDefaultJSON') + formParametersSrc;
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

        var updatedParams = [];
        var formParams = [];

        for(var i in params){

            var customLabelID = params[i].sectionTitle__c;
            var labelLink = '$Label.c.' + customLabelID;

            var label = $A.get(labelLink);
            params[i].formLabel = label;

            updatedParams.push(params[i]);

            var formValues = {
                "formLabel": label,
                "formElement": params[i].formElement,
                "questionSet": params[i].questionSetID__c

            }
            formParams.push(formValues);

        }

        component.set("v.formParameters", updatedParams);

        helper.fireInputEvent(component, event, helper, formParams);

        helper.setAllTabs(component, event, helper, updatedParams);



    },
    fireInputEvent : function(component, event, helper, values) {

        var compEvent = component.getEvent("receivedFormValues");
        compEvent.setParams({
            "inputName" : 'formListValues',
            "inputValue" : values
        });

        compEvent.fire();
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
    setAllTabs: function(component, event, helper, formParameters){


        var allTabs = [];

        for(var i in formParameters){

            var customLabelID = formParameters[i].sectionTitle__c;
            var labelLink = '$Label.c.' + customLabelID;

            var label = $A.get(labelLink);
            formParameters[i].sectionName = label;

            allTabs.push(
                formParameters[i].sectionView__c
            );


        }

        component.set("v.allTabs", allTabs);


    },
})