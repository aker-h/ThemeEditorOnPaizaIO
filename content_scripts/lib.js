const PROMISE = new Promise((resolve) => {
    resolve();
});

function insertStyleNodeToHead () {
    let editableThemeRoot = document.createElement('style');
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
        --selectedColumn: #323232;
    }`;
    document.head.appendChild(editableThemeRoot);

    let editableTheme = document.createElement('style');
    editableTheme.setAttribute('id', 'editableTheme');
    document.head.appendChild(editableTheme);
};

function test () {
    let value = '';

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
            'selectedColumn'
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

            return ` ${selector} {background: var(--selectedColumn) !important;}`;
        })();

        value += (() => {
            let selector = '.ace_marker-layer .ace_active-line';
            for (let defaultTheme of defaultThemes) {
                selector += `, ${defaultTheme} .ace_marker-layer .ace_active-line`;
            }

            return ` ${selector} {background: var(--selectedColumn) !important;}`;
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