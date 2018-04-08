/**
 * Created by cedrickithima on 04/10/2017.
 */
({
    doInit: function(component, event, helper){

        var dynamicParamsLocation = component.get("v.dynamicContentParamsLocation");
        var dynamicParamsJson = $A.get('$Resource.FASTDefaultJSON') + dynamicParamsLocation;
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

        var dynamicParams = getJSON(dynamicParamsJson) ;
        var dynamicContentParameters = JSON.parse(dynamicParams);

        component.set("v.dynamicContentParameters", dynamicContentParameters);
        helper.createComponent(component, event, helper);
    },
    createComponent : function(component, event, helper){

        var dynamicContent = component.get("v.dynamicContent");
        var dynamicContentParameters = component.get("v.dynamicContentParameters");

        $A.createComponent(
            dynamicContent,dynamicContentParameters[0],
            function(dynContent, status, errorMessage){
                //Add the new button to the body array
                if (status === "SUCCESS") {
                    var body = component.get("v.body");
                    body.push(dynContent);
                    component.set("v.body", body);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                else if (status === "ERROR") {
                    console.log("Error: " + errorMessage);
                    // Show error message
                }
            }
        );
    },

})