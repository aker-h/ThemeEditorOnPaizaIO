let editableThemeRoot, editableTheme;

const PROMISE = new Promise((resolve) => {
    resolve();
});

const defaultThemes = [
    '.ace-chrome',
    '.ace-clouds',
    '.ace-crimson-editor',
    '.ace-dawn',
    '.ace-dreamweaver ',
    '.ace-eclipse',
    '.ace-katzenmilch',
    '.ace-kuroir',
    '.ace-github',
    '.ace-solarized-light',
    '.ace-tm',
    '.ace-tomorrow',
    '.ace-xcode',
    '.ace-ambiance',
    '.ace-chaos',
    '.ace-clouds-midnight',
    '.ace-cobalt',
    '.ace-idle-fingers',
    '.ace-kr-theme',
    '.ace-merbivore',
    '.ace-merbivore-soft',
    '.ace-mono-industrial',
    '.ace-monokai',
    '.ace-pastel-on-dark',
    '.ace-solarized-dark',
    '.ace-terminal-theme',
    '.ace-tomorrow-night',
    '.ace-tomorrow-night-blue',
    '.ace-tomorrow-night-bright',
    '.ace-tomorrow-night-eighties ',
    '.ace-twilight',
    '.ace-vibrant-ink'
];

function insertStyleNodeToHead () {
    editableThemeRoot = document.createElement('style');
    editableThemeRoot.setAttribute('id', 'editableThemeRoot');
    editableThemeRoot.innerHTML = 
    `:root {
        --ace_boolean: #cc7832;
        --ace_comment: #808080;
        --ace_function: #a9b7c6;
        --ace_identifier: #a9b7c6;
        --ace_keyword: #cc7832;
        --ace_language: #cc7832;
        --ace_numeric: #6897bb;
        --ace_operator: #a9b7c6;
        --ace_string: #6a8759;
        --ace_support: #a9b7c6;
        --other_text: #a9b7c6;

        --leftPainBG: #313335;
        --columnNumber: #a4a3a3;
        --background: #2b2b2b;
        --activeColumn: #323232;
    }`;
    document.head.appendChild(editableThemeRoot);

    editableTheme = document.createElement('style');
    editableTheme.setAttribute('id', 'editableTheme');
    document.head.appendChild(editableTheme);
};

function colorCodeSync (argProperty) {
    let property = new Property(argProperty);

    class Root {
        constructor () {
            this.values = [];
        }

        addValue (value) {
            this.values.push(value);
        }

        getValues () {
            let rootInnerHTML = ':root{\n';

            for (let value of this.values) {
                rootInnerHTML += `    ${value};\n`;
            }

            rootInnerHTML += '}'

            return rootInnerHTML;
        }
    };

    let root = new Root();

    class Theme {
        constructor () {
            this.values = [];
        }

        addValue (value) {
            this.values.push(value);
            console.log(this.getValues());
        }

        getValues () {
            let themeInnerHTML = '';

            for (let value of this.values) {
                themeInnerHTML += `${value}\n\n`;
            }

            return themeInnerHTML;
        }
    }

    let theme = new Theme();

    if (property.checkNotNullAbout('boolean')) {
        root.addValue(`--ace_boolean: ${property.getBoolean()}`);
        
        let selector = '.ace_line .ace_boolean';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_line .ace_boolean`;
        }

        theme.addValue(`${selector} {\n    color: var(--ace_boolean) !important\n}`);
    }

    if (property.checkNotNullAbout('comment')) {
        root.addValue(`--ace_comment: ${property.getComment()}`);
        
        let selector = '.ace_line .ace_comment';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_line .ace_comment`;
        }

        theme.addValue(`${selector} {\n    color: var(--ace_comment) !important\n}`);
    }

    if (property.checkNotNullAbout('function')) {
        root.addValue(`--ace_function: ${property.getFunction()}`);
        
        let selector = '.ace_line .ace_function';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_line .ace_function`;
        }

        theme.addValue(`${selector} {\n    color: var(--ace_function) !important\n}`);
    }

    if (property.checkNotNullAbout('identifier')) {
        root.addValue(`--ace_identifier: ${property.getIdentifier()}`);
        
        let selector = '.ace_line .ace_identifier';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_line .ace_identifier`;
        }

        theme.addValue(`${selector} {\n    color: var(--ace_identifier) !important\n}`);
    }

    if (property.checkNotNullAbout('keyword')) {
        root.addValue(`--ace_keyword: ${property.getKeyword()}`);
        
        let selector = '.ace_line .ace_keyword';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_line .ace_keyword`;
        }

        theme.addValue(`${selector} {\n    color: var(--ace_keyword) !important\n}`);
    }

    if (property.checkNotNullAbout('language')) {
        root.addValue(`--ace_language: ${property.getLanguage()}`);
        
        let selector = '.ace_line .ace_language';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_line .ace_language`;
        }

        theme.addValue(`${selector} {\n    color: var(--ace_language) !important\n}`);
    }

    if (property.checkNotNullAbout('numeric')) {
        root.addValue(`--ace_numeric: ${property.getNumeric()}`);
        
        let selector = '.ace_line .ace_numeric';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_line .ace_numeric`;
        }

        theme.addValue(`${selector} {\n    color: var(--ace_numeric) !important\n}`);
    }

    if (property.checkNotNullAbout('operator')) {
        root.addValue(`--ace_operator: ${property.getOperator()}`);
        
        let selector = '.ace_line .ace_operatorc';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_line .ace_operator`;
        }

        theme.addValue(`${selector} {\n    color: var(--ace_operator) !important\n}`);
    }

    if (property.checkNotNullAbout('string')) {
        root.addValue(`--ace_string: ${property.getString()}`);
        
        let selector = '.ace_line .ace_string';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_line .ace_string`;
        }

        theme.addValue(`${selector} {\n    color: var(--ace_string) !important\n}`);
    }

    if (property.checkNotNullAbout('support')) {
        root.addValue(`--ace_support: ${property.getSupport()}`);
        
        let selector = '.ace_line .ace_support';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_line .ace_support`;
        }

        theme.addValue(`${selector} {\n    color: var(--ace_support) !important\n}`);
    }

    if (property.checkNotNullAbout('other')) {
        root.addValue(`--other_text: ${property.getOther()}`);

        selector = '';
        
        for (let defaultTheme of defaultThemes) {
            selector += `${defaultTheme}, `
        }

        let temp = `${selector} {\n    color: var(--other_text) !important\n}`;

        theme.addValue(temp.replace(',  {', ' {'));
    }

    if (property.checkNotNullAbout('leftPainBG')) {
        root.addValue(`--leftPainBG: ${property.getLeftPainBg()}`);

        let selector = '.ace_gutter';
        for (let defaultTheme of defaultThemes) {
            selector += `,${defaultTheme} .ace_gutter`
        }

        theme.addValue(`${selector} {\n    background: var(--leftPainBG) !important\n}`);

    }

    if (property.checkNotNullAbout('columnNumber')) {
        root.addValue(`--columnNumber: ${property.getColumnNumber()}`);

        let selector = '.ace_gutter';
        for (let defaultTheme of defaultThemes) {
            selector += `,${defaultTheme} .ace_gutter`
        }

        theme.addValue(`${selector} {\n    color: var(--columnNumber) !important\n}`);

    }

    if (property.checkNotNullAbout('background')) {
        root.addValue(`--background: ${property.getBackground()}`);

        let selector = '';
        
        for (let defaultTheme of defaultThemes) {
            selector += `${defaultTheme}, `
        }

        let temp = `${selector} {\n    background: var(--background) !important\n}`;

        theme.addValue(temp.replace(',  {', ' {'));
    }

    if (property.checkNotNullAbout('activeColumn')) {
        root.addValue(`--activeColumn: ${property.getActiveColumn()}`);

        let selector = '.ace_marker-layer .ace_active-line';

        for (let defaultTheme of defaultThemes) {
            selector += `, ${defaultTheme} .ace_marker-layer .ace_active-line`;
        }

        theme.addValue(`${selector} {\n    background: var(--activeColumn) !important;\n}`);
    }

    editableThemeRoot.innerHTML = root.getValues();
    editableTheme.innerHTML = theme.getValues();
}

function test () {
    let value = '';

    //テキスト
    (() => {
        const syntaxes = [
            '.ace_boolean',
            '.ace_comment',
            '.ace_function',
            '.ace_identifier',
            '.ace_keyword',
            '.ace_language',
            '.ace_numeric',
            '.ace_operator',
            '.ace_string',
            '.ace_support',
        ];

        for (let syntax of syntaxes) {
            let selector = `.ace_line ${syntax}`;

            for (let defaultTheme of defaultThemes) {
                selector += `, ${defaultTheme} .ace_line ${syntax}`;
            }

            let tempColor = `color: var(--${syntax.replace('.', '')}) !important`;

            value += ` ${selector} {${tempColor}}`;
        }
    })();

    // その他
    (() => {
        const words = [
            'leftPainBG',
            'columnNumber',
            'background',
            'activeColumn'
        ];

       //レフトペイン
        value += (() => {
            let selector = '.ace_gutter';
            for (let defaultTheme of defaultThemes) {
                selector += `,${defaultTheme} .ace_gutter`
            }

            return `${selector} {background: var(--leftPainBG) !important; color: var(--columnNumber) !important}`;
        })();

        //エディター背景
        value += (() => {
            let selector = '';
            for (let defaultTheme of defaultThemes) {
                selector += `${defaultTheme}, `
            }

            let temp = `${selector} {background: var(--background) !important; color: var(--other_text) !important}`;

            return temp.replace(',  {', ' {');
        })();

        //選択行
        value += (() => {
            let selector = '.ace_gutter-active-line';
            for (let defaultTheme of defaultThemes) {
                selector += `, ${defaultTheme} .ace_gutter-active-line`;
            }

            return ` ${selector} {background: var(--activeColumn) !important;}`;
        })();

        value += (() => {
            let selector = '.ace_marker-layer .ace_active-line';
            for (let defaultTheme of defaultThemes) {
                selector += `, ${defaultTheme} .ace_marker-layer .ace_active-line`;
            }

            return ` ${selector} {background: var(--activeColumn) !important;}`;
        })();
        // value += (() => {
        //     let selector = '.ace_marker-layer .ace_selection';
        //     for (let defaultTheme of defaultThemes) {
        //         selector += `,${defaultTheme} .ace_marker-layer .ace_selection`
        //     }

        //     return `${selector} {background: var(--selectedColumn) !important; opacity: 0.75}`;
        // })();
    })();

    console.log(value);

    document.getElementById('editableTheme').innerHTML = value.replace('important', '');
};