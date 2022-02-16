let currentProperty;

$(document).ready(async () => {
    currentProperty = await readPropertyFromStorage();

    console.log(currentProperty.toString());

    initializeInputs(currentProperty);

    addinputListenerToInputField();

    addClickListenerToBottomButtons();
});