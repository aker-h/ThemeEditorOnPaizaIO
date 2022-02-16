chrome.runtime.onMessage.addListener (async (message, sender, callback) => {
    console.log(message.text);

    switch (message.text) {
        case 'temporaryColorCodeSync':
            colorCodeSync (message.property);
            break;
        case 'force read Storage':
            let property = await readPropertyFromStorage();

            colorCodeSync(property);
            break;
        default:
            console.log('Caught unkown message form background.');
            console.log(message);
    }
});