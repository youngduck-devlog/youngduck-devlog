"use strict";(self.webpackChunkyd_blog=self.webpackChunkyd_blog||[]).push([[1695],{"./node_modules/refractor/lang/jsx.js":module=>{function jsx(Prism){!function(Prism){var javascript=Prism.util.clone(Prism.languages.javascript),space=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,braces=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,spread=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function re(source,flags){return source=source.replace(/<S>/g,(function(){return space})).replace(/<BRACES>/g,(function(){return braces})).replace(/<SPREAD>/g,(function(){return spread})),RegExp(source,flags)}spread=re(spread).source,Prism.languages.jsx=Prism.languages.extend("markup",javascript),Prism.languages.jsx.tag.pattern=re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),Prism.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,Prism.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,Prism.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,Prism.languages.jsx.tag.inside.comment=javascript.comment,Prism.languages.insertBefore("inside","attr-name",{spread:{pattern:re(/<SPREAD>/.source),inside:Prism.languages.jsx}},Prism.languages.jsx.tag),Prism.languages.insertBefore("inside","special-attr",{script:{pattern:re(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:Prism.languages.jsx}}},Prism.languages.jsx.tag);var stringifyToken=function(token){return token?"string"==typeof token?token:"string"==typeof token.content?token.content:token.content.map(stringifyToken).join(""):""},walkTokens=function(tokens){for(var openedTags=[],i=0;i<tokens.length;i++){var token=tokens[i],notTagNorBrace=!1;if("string"!=typeof token&&("tag"===token.type&&token.content[0]&&"tag"===token.content[0].type?"</"===token.content[0].content[0].content?openedTags.length>0&&openedTags[openedTags.length-1].tagName===stringifyToken(token.content[0].content[1])&&openedTags.pop():"/>"===token.content[token.content.length-1].content||openedTags.push({tagName:stringifyToken(token.content[0].content[1]),openedBraces:0}):openedTags.length>0&&"punctuation"===token.type&&"{"===token.content?openedTags[openedTags.length-1].openedBraces++:openedTags.length>0&&openedTags[openedTags.length-1].openedBraces>0&&"punctuation"===token.type&&"}"===token.content?openedTags[openedTags.length-1].openedBraces--:notTagNorBrace=!0),(notTagNorBrace||"string"==typeof token)&&openedTags.length>0&&0===openedTags[openedTags.length-1].openedBraces){var plainText=stringifyToken(token);i<tokens.length-1&&("string"==typeof tokens[i+1]||"plain-text"===tokens[i+1].type)&&(plainText+=stringifyToken(tokens[i+1]),tokens.splice(i+1,1)),i>0&&("string"==typeof tokens[i-1]||"plain-text"===tokens[i-1].type)&&(plainText=stringifyToken(tokens[i-1])+plainText,tokens.splice(i-1,1),i--),tokens[i]=new Prism.Token("plain-text",plainText,null,plainText)}token.content&&"string"!=typeof token.content&&walkTokens(token.content)}};Prism.hooks.add("after-tokenize",(function(env){"jsx"!==env.language&&"tsx"!==env.language||walkTokens(env.tokens)}))}(Prism)}module.exports=jsx,jsx.displayName="jsx",jsx.aliases=[]}}]);