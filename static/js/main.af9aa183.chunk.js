(this["webpackJsonpone-post"]=this["webpackJsonpone-post"]||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},23:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(3),a={DATA:"DATA"},i=a.DATA,s=function(e){return e[i].code},u="CODE",d=function(e){return{type:u,payload:e}},p=function(e,t){return Object.assign({},e,t)},l={code:null},h=function(e){return function(t,n){t(d(e));var o=new Headers;o.append("Content-Type","application/x-www-form-urlencoded"),o.append("Cookie","csrftoken=Bf4BIN3poundd3ew4hHsCAyTbCGP89ef; rur=FTW");var c=new URLSearchParams;c.append("client_id","1576420319199590"),c.append("client_secret","f1633dbb351aac66a73d763e06497079"),c.append("grant_type","authorization_code"),c.append("redirect_uri","https://volokhovoleg.github.io/"),c.append("code",e),fetch("https://api.instagram.com/oauth/access_token",{method:"POST",headers:o,body:c,redirect:"follow"}).then((function(e){console.log(e);var t=e=JSON.stringify(e),n=t.access_token,o=t.user_id;fetch("https://graph.instagram.com/".concat(o,"?fields=id,username,media_type,media_url&access_token=").concat(n)).then((function(e){console.log(e)}))})).catch((function(e){return console.log("error",e)}))}},f=Object(r.b)((function(e){return{code:s(e)}}),(function(e){return{setCode:function(t){e(h(t))}}}))((function(e){var t=e.setCode;e.code;return Object(o.useEffect)((function(){new URLSearchParams(window.location.search).has("code")&&t(new URLSearchParams(window.location.search).get("code"))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){fetch("https://api.instagram.com/oauth/authorize?client_id=1576420319199590&redirect_uri=https://volokhovoleg.github.io/&scope=user_profile,user_media&response_type=code").then((function(e){window.open(e.url)})).catch((function(e){throw e}))},type:"button"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u044b"))})),m=n(2),w=n.n(m),b=n(1),g=n(9),_=Object(b.combineReducers)(Object(g.a)({},a.DATA,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return p(e,{code:t.payload})}return e}))),y=n(10),v=n(11),O=Object(b.createStore)(_,Object(y.composeWithDevTools)(Object(b.applyMiddleware)(v.a.withExtraArgument())));w.a.render(c.a.createElement(r.a,{store:O},c.a.createElement(f,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.af9aa183.chunk.js.map