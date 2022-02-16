(async () => {
    insertStyleNodeToHead();

    let property = await readPropertyFromStorage();

    colorCodeSync(property);
    
    return PROMISE;
})();