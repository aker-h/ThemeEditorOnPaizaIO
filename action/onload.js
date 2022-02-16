let currentProperty;

(() => {
    currentProperty = genelateProperty();

    console.log(currentProperty.toString());

    addinputListenerToInputField();
})();