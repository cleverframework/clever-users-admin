# clever-users-admin
Users Admin package for CLEVER V1.

```console
"browser": {
  "jquery": "./node_modules/jquery/dist/jquery.js",
  "foundation": "./node_modules/foundation-sites/js/foundation.js"
},
"browserify-shim": {
  "jquery": "$",
  "foundation": "foundation"
},
"browserify": {
  "transform": [
    "browserify-shim",
    "babelify"
  ]
},
```
