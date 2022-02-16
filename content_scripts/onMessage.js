chrome.runtime.onMessage.addListener ((message, sender, callback) => {
    console.log(message.text);

    switch (message.text) {
        case 'temporaryColorCodeSync':
            colorCodeSync (message.property);
            break;
        default:
            console.log('Caught unkown message form background.');
            console.log(message);
    }
});