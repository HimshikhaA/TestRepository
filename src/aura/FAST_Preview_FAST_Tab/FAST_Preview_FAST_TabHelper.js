/**
 * Created by cedrickithima on 08/11/2017.
 */
({
    handleInputEvent: function(component, event, helper){

        var inputName = event.getParam("inputName");
        var inputValue = event.getParam("inputValue");

        component.set(inputName, inputValue);

    }
})