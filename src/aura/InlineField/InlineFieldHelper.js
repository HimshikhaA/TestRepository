({  
    
    editField : function(component, event, helper) {
        var action = component.get("c.updateObjectRecord");
        action.setParams({            
            "recordId":component.get("v.recordId"),
            "sObjectName":component.get("v.objectName"),
            "fieldAPIName":component.get("v.fieldAPI"),
            "fieldValue":component.get("v.fieldValueTemp")
         });
        action.setCallback(component, function(response) {
            if(component.isValid() && response.getState() === "SUCCESS") {
               sforce.one.navigateToSObject(component.get("v.recordId"));
            } else if(response.getState() === 'ERROR'){
                alert(response.getError()[0].message);
            }
        });
        $A.enqueueAction(action);
        
    }
})