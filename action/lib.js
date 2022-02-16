function addClickListenerToBottomButtons () {
    $('#buttonSave').on('click', (e) => {
        let property = genelateProperty();

        savePropertyToStorage(property);

        let message = {text: 'force read Storage'};

        sendMessage2AllTabs(message);
    });

    $('#buttonCancel').click(() => {});
};

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

function initializeInputs (property) {
    function fix (value) {
        return value.replace('null', '');
    };

    $('#inputBoolean').val(fix(property._boolean.value));
    $('#inputComment').val(fix(property._comment.value));
    $('#inputFunction').val(fix(property._function.value));
    $('#inputIdentifier').val(fix(property._identifier.value));
    $('#inputKeyword').val(fix(property._keyword.value));
    $('#inputLanguage').val(fix(property._language.value));
    $('#inputNumeric').val(fix(property._numeric.value));
    $('#inputOperator').val(fix(property._operator.value));
    $('#inputString').val(fix(property._string.value));
    $('#inputSupport').val(fix(property._support.value));
    $('#inputOther').val(fix(property._other.value));
    $('#inputLeftPaingBG').val(fix(property._leftPainBG.value));
    $('#inputColumnNumber').val(fix(property._columnNumber.value));
    $('#inputBackground').val(fix(property._background.value));
    $('#inputActiveColumn').val(fix(property._activeColumn.value));
};

function savePropertyToStorage (property) {
    return new Promise ((resolve) => {
        let defaults = {};

        defaults.property = property;

        chrome.storage.local.set(defaults, () => {
            console.log('Property was stored.');
            resolve();
        });
    });    
};

function sendMessage2ActiveTab (message) {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let activeTab = tabs[0];
        let tabId = activeTab.id;

        console.log(`activeTabId: ${tabId}\nmessage: ${message.text}`);

        chrome.tabs.sendMessage(tabId, message, null);
    })
};

function sendMessage2AllTabs (message) {
    chrome.tabs.query({}, tabs => {
        let targetTabIds = [];

        for (let tab of tabs) {
            let url = tab.url;
            if (url.indexOf('https://paiza.io/projects/') !== -1) {
                targetTabIds.push(tab.id); 
            }
        }

        for (let targetTabId of targetTabIds) {
            chrome.tabs.sendMessage(targetTabId, message, null);
        }
    });
};