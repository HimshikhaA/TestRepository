({
    enableEdit : function(component, event, helper){
        document.getElementById('editSection').setAttribute('style', 'display:block;');
        document.getElementById('displaySection').setAttribute('style', 'display:none;');
    },
    disableEdit : function(component, event, helper){
        document.getElementById('editSection').setAttribute('style', 'display:none;');
        document.getElementById('displaySection').setAttribute('style', 'display:block;');
    },
    updateRecord : function(component, event, helper) {
        component.set("v.fieldValueTemp", component.find("updatedValue").get("v.value"));
        helper.editField(component, event, helper);
     }
})