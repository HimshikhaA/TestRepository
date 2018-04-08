/**
 * Created by cedrickithima on 30/10/2017.
 */
({
    handleInputEvent: function(component, event, helper){

        var inputName = event.getParam("inputName");
        var inputValue = event.getParam("inputValue");

        component.set(inputName, inputValue);

    },
    handleFormEvent: function(component, event, helper){

        var inputName = event.getParam("inputName");
        var formValues = event.getParam("formValues");

        var displayFormValues = [];

        var arr1 = Object.keys(formValues);
        var arr2 = Object.values(formValues);

        for(var prop in arr1){

            var name = arr1[prop];
            var value = arr2[prop];

            displayFormValues.push(
                { "name": name,
                  "value": value
                }
            );
        }

        component.set("v.formName", inputName);
        component.set("v.formValues", formValues);
        component.set("v.displayFormValues", displayFormValues);

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