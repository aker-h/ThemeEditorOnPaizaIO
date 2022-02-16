class ColorCode {
    constructor (value) {
        value = `#${value}`;
        value = value.toLowerCase();
        while (value.indexOf('##') !== -1) {
            value = value.replaceAll('##', '#');
        }

        value = value.substring(0, 7);

        let reg = /[0-9a-fA-f]{6}/;

        if (value.match(reg)) {
            this.value = value;
        } else {
            this.value = 'null';
        }
    }

    getName () {
        return 'ColorCode';
    }

    isNotNull () {
        if (this.value !== 'null') {
            return true;
        }
        return false;
    }

    toString () {
        return this.value;
    }

    getColorCode () {
        return this.value;
    }
};

class Property {
    constructor (property = null) {
        if (property !== null) {
            this._boolean = new ColorCode(property._boolean.value);
            this._comment = new ColorCode(property._comment.value);
            this._function = new ColorCode(property._function.value);
            this._identifier = new ColorCode(property._identifier.value);
            this._keyword = new ColorCode(property._keyword.value);
            this._language = new ColorCode(property._language.value);
            this._numeric = new ColorCode(property._numeric.value);
            this._operator = new ColorCode(property._operator.value);
            this._string = new ColorCode(property._string.value);
            this._support = new ColorCode(property._support.value);
            this._other = new ColorCode(property._other.value);
            this._leftPainBG = new ColorCode(property._leftPainBG.value);
            this._columnNumber = new ColorCode(property._columnNumber.value);
            this._background = new ColorCode(property._background.value);
            this._activeColumn = new ColorCode(property._activeColumn.value);
        }
    }

    equals (object) {
        let argType = typeof object;

        if (argType !== 'Property') {
            return false;
        }

        if (this.toString() === object.toString()) {
            return true;
        }

        return false;
    }

    getName () {
        return 'Property';
    }

    checkNotNullAbout (key) {
        switch (key) {
            case 'boolean':
                return (this._boolean.value !== 'null');
            case 'comment':
                return (this._comment.value !== 'null');
            case 'function':
                return (this._function.value !== 'null');
            case 'identifier':
                return (this._identifier.value !== 'null');
            case 'keyword':
                return (this._keyword.value !== 'null');
            case 'language':
                return (this._language.value !== 'null');
            case 'numeric':
                return (this._numeric.value !== 'null');
            case 'operator':
                return (this._operator.value !== 'null');
            case 'string':
                return (this._string.value !== 'null');
            case 'support':
                return (this._support.value !== 'null');
            case 'other':
                return (this._other.value !== 'null');
            case 'leftPainBG':
                return (this._leftPainBG.value !== 'null');
            case 'columnNumber':
                return (this._columnNumber.value !== 'null');
            case 'background':
                return (this._background.value !== 'null');
            case 'activeColumn':
                return (this._activeColumn.value !== 'null');
            default:
                return false;
        }
    }

    updatedFrom (currentProperty) {
        if (currentProperty.getName() !== 'Property') {
            throw `error: incompatible types: ${currentProperty.getName()} cannot be converted to Property`;
        }

        if (this.toString() !== currentProperty.toString()) {
            return true;
        } else {
            return false;
        }
    }

    toString () {
        let result = 
`{
    boolean: "${this._boolean}",
    comment: "${this._comment}",
    funtion: "${this._function}",
    identifier: "${this._identifier}",
    keyword: "${this._keyword}",
    language: "${this._language}",
    numeric: "${this._numeric}",
    operator: "${this._operator}",
    string: "${this._string}",
    support: "${this._support}",
    other: ${this._other},
    leftPainBG: "${this._leftPainBG}",
    columnNumber: "${this._columnNumber}",
    background: "${this._background}",
    activeColumn: "${this._activeColumn}"
}`;

        return result;
    }

    setBoolean (ccBoolean) {this._boolean = ccBoolean;}
    setComment (ccComment) {this._comment = ccComment;}
    setFunction (ccFunction) {this._function = ccFunction;}
    setIdentifier (ccIdentifier) {this._identifier = ccIdentifier;}
    setKeyword (ccKeyword) {this._keyword = ccKeyword;}
    setLanguage (ccLanguage) {this._language = ccLanguage;}
    setNumeric (ccNumeric) {this._numeric = ccNumeric;}
    setOperator (ccOperator) {this._operator = ccOperator;}
    setString (ccString) {this._string = ccString;}
    setSupport (ccSupport) {this._support = ccSupport;}
    setOther (ccOther) {this._other = ccOther;}
    setLeftPaingBG (ccLeftPainBG) {this._leftPainBG = ccLeftPainBG;}
    setColumnNumber (ccColumnNumber) {this._columnNumber = ccColumnNumber;}
    setBackground (ccBackground) {this._background = ccBackground;}
    setActiveColumn (ccActiveColumn) {this._activeColumn = ccActiveColumn;}

    getBoolean () {return this._boolean.value;}
    getComment () {return this._comment.value;}
    getFunction () {return this._function.value;}
    getIdentifier () {return this._identifier.value;}
    getKeyword () {return this._keyword.value;}
    getLanguage () {return this._language.value;}
    getNumeric () {return this._numeric.value;}
    getOperator () {return this._operator.value;}
    getString () {return this._string.value;}
    getSupport () {return this._support.value;}
    getOther () {return this._other.value;}
    getLeftPainBg () {return this._leftPainBG.value;}
    getColumnNumber () {return this._columnNumber.value;}
    getBackground () {return this._background.value;}
    getActiveColumn () {return this._activeColumn.value;}
};

function readPropertyFromStorage () {
    return new Promise ((resolve) => {
        chrome.storage.local.get((items) => {
            let property = items.property;
    
            console.log(property);
    
            resolve(new Property(property));
        });
    });   
};