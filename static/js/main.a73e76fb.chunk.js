(this["webpackJsonpone-post"]=this["webpackJsonpone-post"]||[]).push([[0],{22:function(e,t,n){e.exports=n(50)},50:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(4),a={DATA:"DATA"},i=a.DATA,u=function(e){return e[i].code},s="NAME",p={setData:function(e){return{type:s,payload:e}}},d=function(e,t){return Object.assign({},e,t)},h={code:null},l={setCode:function(e){return function(t,n){return t(p.setCode(e))}}},f=n(18),m=n.n(f),b=function(){var e=m.a.create({baseURL:"https://api.instagram.com/oauth/authorize?client_id=1576420319199590&redirect_uri=https://volokhovoleg.github.io/&scope=user_profile,user_media&response_type=code",timeout:5e3});return e.interceptors.response.use((function(e){return e}),(function(e){throw e})),e},w=(b(),Object(c.b)((function(e){return{data:u(e)}}),(function(e){return{setCode:function(){e(l.setData())}}}))((function(e){var t=e.setCode;return Object(o.useEffect)((function(){var e=function(){return new URLSearchParams(window.location.search).has("code")&&t(new URLSearchParams(window.location.search).get("code"))};return e(),function(){return e()}})),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){fetch("https://api.instagram.com/oauth/authorize?client_id=1576420319199590&redirect_uri=https://volokhovoleg.github.io/&scope=user_profile,user_media&response_type=code").then((function(e){window.open(e.url)})).catch((function(e){throw e}))},type:"button"},"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u044b"))}))),g=n(3),v=n.n(g),A=n(2),_=n(19),y=Object(A.combineReducers)(Object(_.a)({},a.DATA,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return d(e,{code:t.payload})}return e}))),j=n(20),E=n(21),O=b(),D=Object(A.createStore)(y,Object(j.composeWithDevTools)(Object(A.applyMiddleware)(E.a.withExtraArgument(O))));v.a.render(r.a.createElement(c.a,{store:D},r.a.createElement(w,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a73e76fb.chunk.js.map