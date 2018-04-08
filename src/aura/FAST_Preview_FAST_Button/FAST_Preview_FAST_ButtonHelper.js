/**
 * Created by cedrickithima on 04/10/2017.
 */
({
    handleBtnClick: function(component, event, helper){
        var btnName = event.getParam("itemName");
        var btnValue = event.getParam("itemValue");
        var btnOnclickAction = event.getParam("itemOnclickAction");

        component.set("v.btnNameClicked", btnName);
        component.set("v.btnValueClicked", btnValue);
        component.set("v.btnOnClickActionClicked", btnOnclickAction);
        component.set("v.showBtnEvent", true);

    },
    handleInputEvent: function(component, event, helper){

        var inputName = event.getParam("inputName");
        var inputValue = event.getParam("inputValue");

        component.set(inputName, inputValue);

    },
})