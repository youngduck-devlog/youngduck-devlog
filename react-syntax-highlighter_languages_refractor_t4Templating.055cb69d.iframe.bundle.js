"use strict";(self.webpackChunkyd_blog=self.webpackChunkyd_blog||[]).push([[2279],{"./node_modules/refractor/lang/t4-templating.js":module=>{function t4Templating(Prism){!function(Prism){function createBlock(prefix,inside,contentAlias){return{pattern:RegExp("<#"+prefix+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+prefix+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside,alias:contentAlias}}}}Prism.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function createT4(insideLang){var grammar=Prism.languages[insideLang],className="language-"+insideLang;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:createBlock("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:createBlock("=",grammar,className),"class-feature":createBlock("\\+",grammar,className),standard:createBlock("",grammar,className)}}}}})}(Prism)}module.exports=t4Templating,t4Templating.displayName="t4Templating",t4Templating.aliases=[]}}]);