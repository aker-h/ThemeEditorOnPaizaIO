function addinputListenerToInputField () {
    $(document).on('keyup', (e) => {
        let newProperty = genelateProperty();

        if (newProperty.updatedFrom(currentProperty)) {
            console.log(newProperty.toString());
            currentProperty = newProperty;

            let message = {
                text: 'temporaryColorCodeSync',
                property: currentProperty
            };

            sendMessage2ActiveTab(message);
        }
    });
};

function genelateProperty () {
    let ccBoolean = new ColorCode($('#inputBoolean').val()),
        ccComment = new ColorCode($('#inputComment').val()),
        ccFunction = new ColorCode($('#inputFunction').val()),
        ccIdentifier = new ColorCode($('#inputIdentifier').val()),
        ccKeyword = new ColorCode($('#inputKeyword').val()),
        ccLanguage = new ColorCode($('#inputLanguage').val()),
        ccNumeric = new ColorCode($('#inputNumeric').val()),
        ccOperator = new ColorCode($('#inputOperator').val()),
        ccString = new ColorCode($('#inputString').val()),
        ccSupport = new ColorCode($('#inputSupport').val()),
        ccOther = new ColorCode($('#inputOther').val()),
        ccLeftPainBG = new ColorCode($('#inputLeftPainBG').val()),
        ccColumnNumber = new ColorCode($('#inputColumnNumber').val()),
        ccBackground = new ColorCode($('#inputBackground').val()),
        ccActiveColumn = new ColorCode($('#inputActiveColumn').val());

    let property = new Property();

    property.setBoolean(ccBoolean);
    property.setComment(ccComment);
    property.setFunction(ccFunction);
    property.setIdentifier(ccIdentifier);
    property.setKeyword(ccKeyword);
    property.setLanguage(ccLanguage);
    property.setNumeric(ccNumeric);
    property.setOperator(ccOperator);
    property.setString(ccString);
    property.setSupport(ccSupport);
    property.setOther(ccOther);
    property.setLeftPaingBG(ccLeftPainBG);
    property.setColumnNumber(ccColumnNumber);
    property.setBackground(ccBackground);
    property.setActiveColumn(ccActiveColumn);

    return property;
};

const sendMessage2ActiveTab = (message) => {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let activeTab = tabs[0];
        let tabId = activeTab.id;

        console.log(`activeTabId: ${tabId}\nmessage: ${message.text}`);

        chrome.tabs.sendMessage(tabId, message, null);
    })
};