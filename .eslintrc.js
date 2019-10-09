module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "plugins": ["vue"],
    "settings": {
        "html/html-extensions": [".html", ".vue", ".php", ".twig"]
    },
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "experimentalObjectRestSpread": true
        }
    },
    "globals": {
        "ajax": true,
        "axios": true,
        "Tether": true,
        "Promise": true,
        "d3": true
    },
    "extends": ["eslint:recommended", "plugin:vue/recommended"],
    "rules": {
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "linebreak-style": ["error", "windows"],
        "semi": ["error", "always"],
        "comma-dangle": ["warn", {
            "arrays": "ignore",
            "objects": "ignore",
            "imports": "ignore",
            "exports": "ignore",
            "functions": "never"
        }],
        "no-control-regex": "off",
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "no-console": ["error", { "allow": ["warn", "error"] }],
        "no-alert": "error",
        "no-dupe-args": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error"
    }
}