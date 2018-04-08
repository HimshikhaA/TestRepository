/**
 * Created by cedrickithima on 08/11/2017.
 */
({
    handleInputEvent: function(component, event, helper){

        var inputName = event.getParam("inputName");
        var inputValue = event.getParam("inputValue");

        component.set(inputName, inputValue);

    },
    handleFormEvent: function(component, event, helper){

        var formName = event.getParam("inputName");
        var formValues = event.getParam("formValues");
        var multiStepFormValues = component.get("v.multiStepFormValues");

        var keyValues = [];

        var arr1 = Object.keys(formValues);
        var arr2 = Object.values(formValues);

        for(var prop in arr1){

            var name = arr1[prop];
            var value = arr2[prop];

            keyValues.push(
                { "name": name,
                    "value": value
                }
            );
        }

        multiStepFormValues[formName] = keyValues;

        component.set("v.multiStepFormValues", multiStepFormValues);
        var displayValues = JSON.stringify(multiStepFormValues, null, '\t');
        component.set("v.displayFormValues", displayValues );

    },
    handleBtnClick: function(component, event, helper){
        var btnName = event.getParam("itemName");
        var btnValue = event.getParam("itemValue");
        var btnOnclickAction = event.getParam("itemOnclickAction");

        component.set("v.btnNameClicked", btnName);
        component.set("v.btnValueClicked", btnValue);
        component.set("v.btnOnClickActionClicked", btnOnclickAction);
        component.set("v.showBtnEvent", true);

    },
})