"use strict";(self.webpackChunkyd_blog=self.webpackChunkyd_blog||[]).push([[7351,3950],{"./node_modules/refractor/lang/json.js":module=>{function json(Prism){Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json}module.exports=json,json.displayName="json",json.aliases=["webmanifest"]},"./node_modules/refractor/lang/json5.js":(module,__unused_webpack_exports,__webpack_require__)=>{var refractorJson=__webpack_require__("./node_modules/refractor/lang/json.js");function json5(Prism){Prism.register(refractorJson),function(Prism){var string=/("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;Prism.languages.json5=Prism.languages.extend("json",{property:[{pattern:RegExp(string.source+"(?=\\s*:)"),greedy:!0},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,alias:"unquoted"}],string:{pattern:string,greedy:!0},number:/[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/})}(Prism)}module.exports=json5,json5.displayName="json5",json5.aliases=[]}}]);