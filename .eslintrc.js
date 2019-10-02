module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": [ "eslint:recommended", "plugin:node/recommended" ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "node/exports-style": ["error", "module.exports"],
        "node/prefer-global/buffer": ["error", "always"],
        "no-console": "off",
        "node/prefer-global/console": ["error", "always"],
        "node/no-extraneous-require": "off",
        "node/prefer-global/process": ["error", "always"],
        "node/prefer-global/url-search-params": ["error", "always"],
        "node/prefer-global/url": ["error", "always"],
        "node/no-unsupported-features/es-syntax": ["error", {
          "version": "10.0",
          "ignores": []
        }],
        "node/no-deprecated-api": ["error", {
          "version": ">=10.0",
          "ignoreModuleItems": [],
          "ignoreGlobalItems": []
        }]
    },
    "globals": {
      "assert": true,
      "expect": true
    }
};
