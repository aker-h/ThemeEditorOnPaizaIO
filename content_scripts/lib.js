const PROMISE = new Promise((resolve) => {
    resolve();
});

function insertStyleNodeToHead () {
    let style = document.createElement('style');
    style.setAttribute('id', 'editableTheme');
    document.head.appendChild(style);
};