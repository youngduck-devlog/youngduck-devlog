"use strict";(self.webpackChunkyd_blog=self.webpackChunkyd_blog||[]).push([[4916],{"./node_modules/refractor/lang/lisp.js":module=>{function lisp(Prism){!function(Prism){function simple_form(name){return RegExp(/(\()/.source+"(?:"+name+")"+/(?=[\s\)])/.source)}function primitive(pattern){return RegExp(/([\s([])/.source+"(?:"+pattern+")"+/(?=[\s)])/.source)}var symbol=/(?!\d)[-+*/~!@$%^=<>{}\w]+/.source,marker="&"+symbol,par="(\\()",nestedPar=/(?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\))*\))*\))*/.source,language={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+symbol+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+symbol),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+symbol),alias:"property"},splice:{pattern:RegExp(",@?"+symbol),alias:["symbol","variable"]},keyword:[{pattern:RegExp("(\\()(?:and|(?:cl-)?letf|cl-loop|cond|cons|error|if|(?:lexical-)?let\\*?|message|not|null|or|provide|require|setq|unless|use-package|when|while)(?=\\s)"),lookbehind:!0},{pattern:RegExp("(\\()(?:append|by|collect|concat|do|finally|for|in|return)(?=\\s)"),lookbehind:!0}],declare:{pattern:simple_form(/declare/.source),lookbehind:!0,alias:"keyword"},interactive:{pattern:simple_form(/interactive/.source),lookbehind:!0,alias:"keyword"},boolean:{pattern:primitive(/nil|t/.source),lookbehind:!0},number:{pattern:primitive(/[-+]?\d+(?:\.\d*)?/.source),lookbehind:!0},defvar:{pattern:RegExp("(\\()def(?:const|custom|group|var)\\s+"+symbol),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(symbol)}},defun:{pattern:RegExp(par+/(?:cl-)?(?:defmacro|defun\*?)\s+/.source+symbol+/\s+\(/.source+nestedPar+/\)/.source),lookbehind:!0,greedy:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+symbol),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp("(\\()lambda\\s+\\(\\s*(?:&?"+symbol+"(?:\\s+&?"+symbol+")*\\s*)?\\)"),lookbehind:!0,greedy:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(par+symbol),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},arg={"lisp-marker":RegExp(marker),varform:{pattern:RegExp(/\(/.source+symbol+/\s+(?=\S)/.source+nestedPar+/\)/.source),inside:language},argument:{pattern:RegExp(/(^|[\s(])/.source+symbol),lookbehind:!0,alias:"variable"},rest:language},forms="\\S+(?:\\s+\\S+)*",arglist={pattern:RegExp(par+nestedPar+"(?=\\))"),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:body|rest)\\s+"+forms),inside:arg},"other-marker-vars":{pattern:RegExp("&(?:aux|optional)\\s+"+forms),inside:arg},keys:{pattern:RegExp("&key\\s+"+forms+"(?:\\s+&allow-other-keys)?"),inside:arg},argument:{pattern:RegExp(symbol),alias:"variable"},punctuation:/[()]/}};language.lambda.inside.arguments=arglist,language.defun.inside.arguments=Prism.util.clone(arglist),language.defun.inside.arguments.inside.sublist=arglist,Prism.languages.lisp=language,Prism.languages.elisp=language,Prism.languages.emacs=language,Prism.languages["emacs-lisp"]=language}(Prism)}module.exports=lisp,lisp.displayName="lisp",lisp.aliases=[]}}]);