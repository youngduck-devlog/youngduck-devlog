"use strict";(self.webpackChunkyd_blog=self.webpackChunkyd_blog||[]).push([[8141],{"./node_modules/refractor/lang/naniscript.js":module=>{function naniscript(Prism){!function(Prism){var expressionDef=/\{[^\r\n\[\]{}]*\}/,params={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:expressionDef,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};function getTextContent(token){return"string"==typeof token?token:Array.isArray(token)?token.map(getTextContent).join(""):getTextContent(token.content)}Prism.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:expressionDef,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:params}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:expressionDef,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:params},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},Prism.languages.nani=Prism.languages.naniscript,Prism.hooks.add("after-tokenize",(function(env){env.tokens.forEach((function(token){if("string"!=typeof token&&"generic-text"===token.type){var content=getTextContent(token);(function isBracketsBalanced(input){for(var brackets="[]{}",stack=[],i=0;i<input.length;i++){var bracket=input[i],bracketsIndex=brackets.indexOf(bracket);if(-1!==bracketsIndex)if(bracketsIndex%2==0)stack.push(bracketsIndex+1);else if(stack.pop()!==bracketsIndex)return!1}return 0===stack.length})(content)||(token.type="bad-line",token.content=content)}}))}))}(Prism)}module.exports=naniscript,naniscript.displayName="naniscript",naniscript.aliases=[]}}]);