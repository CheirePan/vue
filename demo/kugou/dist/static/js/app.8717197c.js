(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==s[o]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={12:0},s={12:0},r=[];function o(t){return c.p+"static/js/"+({0:"PlayerMax",1:"Search",2:"SingerInfo",3:"SingerList",4:"SongListInfo",5:"RankInfo",6:"SingerCategory",7:"SongList",8:"RankList",9:"NewSong",10:"Main"}[t]||t)+"."+{0:"f1ccbc45",1:"12ebf659",2:"5d8f2eb7",3:"e7792376",4:"dd32393a",5:"a16e6532",6:"e2bd1944",7:"3af56ca0",8:"90058167",9:"623f0c5b",10:"d03f27a3"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,10:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var a="static/css/"+({0:"PlayerMax",1:"Search",2:"SingerInfo",3:"SingerList",4:"SongListInfo",5:"RankInfo",6:"SingerCategory",7:"SongList",8:"RankList",9:"NewSong",10:"Main"}[t]||t)+"."+{0:"34037138",1:"c9fd6684",2:"a9c25e92",3:"b05f681f",4:"8d673e96",5:"613646c4",6:"f3dea493",7:"c3c563cc",8:"9023993a",9:"9151353f",10:"4f6ffc68"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var o=s[r],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===a||l===i))return e()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],l=o.getAttribute("data-href");if(l===a||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.request=a,n(s)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){i[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=r);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t),l=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,n[1](r)}s[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://cdn.jsdelivr.net/gh/xianshenglu/vue@master/demo/kugou/dist/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;r.push([11,11]),n()})({"/Q5G":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"play_button",on:{click:t.togglePlay}},[n("svg",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading&&t.isPlaying,expression:"!isLoading&&isPlaying"}],staticClass:"icon play_button__pause",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-pause"}})]),n("svg",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"icon play_button__loading",attrs:{"aria-hidden":"true"},on:{click:function(t){t.stopPropagation()}}},[n("use",{attrs:{"xlink:href":"#icon-loading-white"}})]),n("svg",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading&&!t.isPlaying,expression:"!isLoading&&!isPlaying"}],staticClass:"icon play_button__play",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-play"}})])])},i=[],s=n("yT7P"),r=n("L2JU"),o={name:"PlayButton",computed:Object(s["a"])({},Object(r["d"])("player",["isPlaying","isLoading"])),methods:{togglePlay:function(){this.$store.commit("player/togglePlay",void 0,{root:!0})}}},c=o,l=(n("XPY3"),n("KHd+")),u=Object(l["a"])(c,a,i,!1,null,"758b0f17",null);e["a"]=u.exports},"/psH":function(t,e,n){"use strict";var a=n("h1ze"),i=n.n(a);i.a},11:function(t,e,n){t.exports=n("Vtdi")},"3xKy":function(t,e,n){"use strict";var a=n("CdDZ"),i=n.n(a);i.a},"4OHh":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"next_button",on:{click:t.next}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-next"}})])])},i=[],s={name:"nextButton",methods:{next:function(){this.$store.commit("player/next")}}},r=s,o=(n("/psH"),n("KHd+")),c=Object(o["a"])(r,a,i,!1,null,"10088b0c",null);e["a"]=c.exports},"4rId":function(t,e,n){"use strict";var a={namespaced:!0,state:{isShow:!1,sizeClassName:""}};e["a"]=a},"6Z6i":function(t,e,n){"use strict";var a=n("daYX"),i=n.n(a);i.a},"6rlZ":function(t,e,n){"use strict";n("VRzm");var a={namespaced:!0,state:{searchRecArr:[],searchRes:{info:[]},keyword:"",isSearchRecShow:!1,isSearchResShow:!1}};e["a"]=a},"7r53":function(t,e,n){"use strict";var a=n("Fdcc"),i=n.n(a);i.a},"8w1d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"player__btn_prev",on:{click:t.prev}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-previous"}})])])},i=[],s={name:"PrevButton",methods:{prev:function(){this.$store.commit("player/prev")}}},r=s,o=(n("3xKy"),n("KHd+")),c=Object(o["a"])(r,a,i,!1,null,"307ce5a1",null);e["a"]=c.exports},ABLq:function(t,e,n){"use strict";var a=n("XKVI"),i=n.n(a);i.a},CdDZ:function(t,e,n){},DRUL:function(t,e,n){t.exports=n.p+"static/img/logo__text.d488aa15.png"},Fdcc:function(t,e,n){},G5f9:function(t,e,n){},J1ts:function(t,e,n){},Jpsf:function(t,e,n){"use strict";var a=n("G5f9"),i=n.n(a);i.a},MhW3:function(t,e,n){},OhDf:function(t,e,n){},Q2AE:function(t,e,n){"use strict";(function(t){n("KKXr"),n("VRzm");var a=n("Kw5r"),i=n("L2JU"),s=n("lvTa"),r=n("4rId"),o=n("iHz1"),c=n("k5rF"),l=n("lTOK"),u=n("TNGv"),d=n("6rlZ"),p=n("dE6Z"),h=n("hFdO");a["a"].use(i["a"]);var f=new i["a"].Store({modules:{device:s["a"],loading:r["a"],player:o["a"],rank:c["a"],singer:l["a"],song:u["a"],newSong:p["a"],search:d["a"],images:h["a"]},strict:t&&!1,mutations:{replaceProperty:function(t,e){var n=e.paths,a=e.data;if("string"===typeof n){n=n.split(".");var i=n.slice(0,-1).reduce(function(t,e){return t[e]},t);i[n.pop()]=a}}}});window.store=f,e["a"]=f}).call(this,n("Q2Ig"))},TNGv:function(t,e,n){"use strict";n("vDqi"),n("pHQ6");var a={namespaced:!0,state:{songList:[],songListInfo:{info:{list:{}},songs:{list:{info:[]}}}}};e["a"]=a},TuJu:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var a=n("Kw5r"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"app",staticClass:"app",attrs:{id:"app"}},[n("AppLoading"),n("AppHeader",{staticClass:"app__header"}),n("router-view",{staticClass:"app__cont"}),n("audio",{ref:"audioEl",staticClass:"hidden",attrs:{src:t.song?t.song.play_url:"",loop:""},on:{canplay:function(e){t.togglePlay(!0)}}}),n("PlayerMed",{directives:[{name:"show",rawName:"v-show",value:t.isPlayerMedShow&&"/player/max"!==t.$route.path,expression:"isPlayerMedShow&&$route.path!=='/player/max'"}],class:t.isPlayerMedSmall?"app__player app__player--min":"app__player app__player--med"})],1)},s=[],r=n("yT7P"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("button",{staticClass:"header__back",on:{click:t.goBack}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])]),n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"header__logo",attrs:{src:t.logo__text}})]),n("router-link",{staticClass:"header__search_btn",attrs:{to:"/search/index"},nativeOn:{click:function(e){t.bus.$emit("searchBtnClicked")}}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-search"}})])])],1)},c=[],l=n("L2JU"),u=n("nc4g"),d={name:"AppHeader",data:function(){return{bus:u["a"]}},computed:Object(r["a"])({},Object(l["d"])("images",["logo__text"]),Object(l["d"])("player",["curPlayerId"])),methods:Object(r["a"])({},Object(l["c"])("player",["togglePlayers"]),{goBack:function(){1!==this.curPlayerId?history.go(-1):this.togglePlayers(1)}})},p=d,h=(n("6Z6i"),n("KHd+")),f=Object(h["a"])(p,o,c,!1,null,"6bba1bb3",null),g=f.exports,m=n("zgcK"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.className},[n("svg",{staticClass:"icon loading__svg",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-loading"}})])])},y=[],b={name:"AppLoading",computed:Object(r["a"])({},Object(l["d"])("loading",["isShow","sizeClassName"]),{className:function(){var t=this.isShow?"loading":"loading loading--fade_out";return t+" "+this.sizeClassName}})},w=b,x=(n("ABLq"),Object(h["a"])(w,v,y,!1,null,"2bc5f602",null)),C=x.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.music?n("section",{staticClass:"player"},[n("router-link",{staticClass:"player__link",attrs:{to:{name:"PlayerMax",params:{fromPlayerMed:1},query:{musicHash:t.music.hash}}}},[n("img",{class:t.isPlayerMedSmall?"player__singer_img player__singer_img--player_min":"player__singer_img",attrs:{src:t.singerImg?t.singerImg:t.logo__theme,alt:""}}),n("div",{staticClass:"player__song_info"},[n("div",{staticClass:"player__song_name"},[t._v(t._s(t.songName))]),n("div",{staticClass:"player__singer_name"},[t._v(t._s(t.singerName))])])]),n("div",{staticClass:"player__buttons"},[n("PrevButton",{staticClass:"player__btn_prev"}),n("PlayButton",{staticClass:"player__btn_status"}),n("NextButton",{staticClass:"play__btn_next"})],1)],1):t._e()},A=[],P=n("/Q5G"),k=n("4OHh"),L=n("8w1d"),E={name:"PlayerMed",components:{PlayButton:P["a"],NextButton:k["a"],PrevButton:L["a"]},computed:Object(r["a"])({},Object(l["d"])("images",["logo__theme"]),Object(l["d"])("player",["music","song","isPlayerMedSmall"]),Object(l["b"])("player",["songName","singerName","singerImg"])),methods:Object(r["a"])({},Object(l["c"])("player",["togglePlayers"]))},O=E,I=(n("qB6M"),Object(h["a"])(O,S,A,!1,null,"fd6cda66",null)),j=I.exports,N={name:"App",components:{AppLoading:C,AppHeader:g,AppNav:m["a"],PlayerMed:j},mounted:function(){document.documentElement.style.setProperty("--vh",this.vh/100+"px"),this.findAudioEl(this.$refs.audioEl)},computed:Object(r["a"])({},Object(l["d"])("player",{isPlayerMedShow:"isPlayerMedShow",isPlayerMedSmall:"isPlayerMedSmall",music:"music",song:"song"}),Object(l["d"])("device",{vh:"vh"})),methods:Object(r["a"])({},Object(l["c"])("player",{findAudioEl:"findAudioEl",togglePlay:"togglePlay"}))},M=N,H=(n("7r53"),Object(h["a"])(M,i,s,!1,null,"8b493210",null)),K=H.exports,J=n("jE9Z"),R=n("Q2AE"),T=function(){return n.e(10).then(n.bind(null,"JhTm"))},Z=function(){return n.e(9).then(n.bind(null,"eRml"))},G=function(){return n.e(8).then(n.bind(null,"bTpC"))},D=function(){return n.e(7).then(n.bind(null,"SGk6"))},B=function(){return n.e(6).then(n.bind(null,"KF4M"))},V=function(){return n.e(5).then(n.bind(null,"1L/F"))},U=function(){return n.e(4).then(n.bind(null,"SX/J"))},Y=function(){return n.e(3).then(n.bind(null,"JSdV"))},q=function(){return n.e(2).then(n.bind(null,"r8ZQ"))},_=function(){return n.e(1).then(n.bind(null,"LZAx"))},Q=function(){return n.e(0).then(n.bind(null,"Avi0"))};a["a"].use(J["a"]);var X=new J["a"]({routes:[{path:"/",component:T,children:[{path:"/",component:Z},{path:"/rank/list",component:G},{path:"/song/list",component:D},{path:"/singer/category",component:B}]},{path:"/rank/info/:id",component:V},{path:"/song/list/:id",component:U},{path:"/singer/list/:id",component:Y},{path:"/singer/info/:id",component:q},{path:"/search/index",component:_},{path:"/player/max",component:Q,name:"PlayerMax"}]});X.beforeEach(function(t,e,n){R["a"].commit("replaceProperty",{paths:"loading.isShow",data:!1}),n()});var z=X;function W(t){var e=t.target;e.tagName&&"img"===e.tagName.toLowerCase()&&(e.src=R["a"].state.images.logo__theme)}function F(){R["a"].commit("replaceProperty",{paths:"player.isPlayerMedSmall",data:!0})}function $(){R["a"].commit("replaceProperty",{paths:"player.isPlayerMedShow",data:window.innerHeight>.8*R["a"].state.device.vMax&&R["a"].state.player.music})}function tt(t){var e=300,n=Date.now(),a=.1*window.innerWidth,i=.4*window.innerWidth,s=t.touches[0].clientX,r=t.touches[0].clientY;function o(t){window.removeEventListener("touchend",o,!0);var c=t.changedTouches[0].clientX,l=t.changedTouches[0].clientY,u=Math.abs(c-s),d=Math.abs(l-r);if(!(d>u)){var p=c-s<0,h=Date.now(),f=h-n>e,g=f&&u>i,m=!f&&u>a,v=z.options.routes[0].children.map(function(t){return t.path}),y=v.indexOf(z.currentRoute.path);if(y>=0&&(g||m)){var b=p?y+1:y-1,w=v[b];if(void 0===w)return;z.push(w)}}}window.addEventListener("touchend",o,!0)}window.addEventListener("error",W,!0),window.addEventListener("scroll",F,!0),window.addEventListener("resize",$,!0),window.addEventListener("touchstart",tt);n("TuJu"),n("MhW3"),n("OhDf");a["a"].config.productionTip=!1,a["a"].prototype.window=window,new a["a"]({router:z,store:R["a"],render:function(t){return t(K)}}).$mount("#app")},XKVI:function(t,e,n){},XPY3:function(t,e,n){"use strict";var a=n("J1ts"),i=n.n(a);i.a},dE6Z:function(t,e,n){"use strict";n("VRzm"),n("vDqi"),n("pHQ6");var a={namespaced:!0,state:{newSongs:[],sliderData:[]}};e["a"]=a},dZl1:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABpCAYAAAA5gg06AAAMTUlEQVR42u1d63cV1RUfl1/81g9dq39BV9vVhy2tIi1YLVqghACKVB4WCIIVq7VoqthlBcWKVq1C0ABBTMgLQhISEggPQwgQAkQTzIMQ82ihWFrbD/1k5s7crNP9u3Bh5tx7c+eeOTNzLp0PvyEk9+6zZ//mnLPP3vuc0b715n+f/famsTECC6EMot9YN/LCbbfc+jXCV7Xv0C9DqIlvrhtZA6JCktRG9OvPdy4LSVIdG6Nfat+lH0KojZCkrCCpgH4IoTRCkrKBpO/RJYTaCEkKSQohhaTb6RJCbWi3b6YfQiiNkKRsIOn7dAmhNkKSQpLkY0ZxlK3ca7K1Hxls65kIazivs9YRnXVe1ln3P0avo+OSzo4O6aymJ8IKThlszSGTLdljsruLspCkH7w3xlTGvR9EWX6Tycq7IqyLiBj5z6grDBNaiLxNRBzIvmuL2vcPKEnSRDLc0/tNVt8XYUP/HnVNzHg4/89RtrMzwpZUm2zC+yFJjnrNWyeM2HDlxMD43MEBne3ujrASMvQWGv7ePmnE/t3eEYn9/sig7lhe29/02LA4UbHepU2gS9C4Z/sY29hmsAv/Sm3AfvpbHfWs9UcNtqgqGvtOJm1M3RFlj9aa7I1Wg+3v19ngOD3047/r7MUjBruzMHjbTAiapB/S8AJj9FxJbiyQVkZzEeYO2Qabsm2MraYhtbon9ZB6nBySZTWmAiSRoYLArNIoO/RZckfg7KWrT/LkIn90+Tl5jO9QT8b8lEyf4k8ibEpRMHYCNDzNfuOZA2ZSg5y+qMc8OcwJQeiFIfSN4wbrS6Hb/F3RQPTylaRJW8fYjo8jCQYYoGENxsHfgzACj/to/irtTNRz8ItR9hKtz3wn6Ud08QO48cNJhreG8xGWszPK/NIjEywlt/zMxUSd4Tmit/ulhy8kIUoA99Z6o5isX20x2B2FY0oSFAfmIjgvPFF7yL1Hz/eHJBjJQ8woicYcAX59s5S8Jq/blomXyfUf5rxALAliRHnctnZHYZR5BaxNTnE9CMPHnDKTedmuV/hto8E++8JOVFU3hj5v2/WMpMnbEl1sEDa9ODsJiiOPRoB+btGNCIenJN1JF9mYSKg4Zx/HO2gVP7PEZF605zewuOZ71NUIhTfteUIS0gjWG+ihOWhexc1BUByr9xuxiHr8HkHawt2mRyTReCoTD1XanzJ4cXASZLejArC2sz6M7TSc/3S7/HY0THqyMGlrlH00aJ+H1pObLbMNlYD7rT+vJ8xPstuRShLGZavC9X06JdWiNy1JAOJ+nZctSUUaORZXmXJJghFlYDop22uJZiP+lbPTZLLkq4ynG+0PJ0YT9DJZ8rW7IEwCCs/YvblXaPEnS7YX+CVN8nm16ZFTajqSV9dnH/ZWH5B3/xoYdwtEFawJO4SAJhe5l4sUQbps6nIyZKZy3zsdcZSpRS3Ew7udyZ9bbneY2v6qsx9vc2+DSbJIKmi33/TvmwwpyjX2py88QVRDNvFxgjKVvYUbTRChUIKkn9GNWHND7RT2mSzpCXJCklNZMLgTeaIEAZiDrb2p6YIuhyR0STf4I7dw/cNhg7mVGUfvlfQGdSLnvg+jrGXYIUH0OXxeVOcSLg/10C7TtR1ck2TNEfVTj0LPkkWSE4Omk7GA5pQzl5wRhKHQrc5YuFtlbjzlXqb2E7qIAtFsa2gE9Wtu5PFIZ1RU/Yz3fYRpnPTGOEGy9IbTcD3qf0l3Lc8VSS8324e6x+pMaTcKA7shac0hIxCCgLdO2Ie8h3e5s4uGSV4UNb03nhgYBHErN/KsWLE3PUlvkzGSfRcEOa1gTSXDDRBxsLax4ZjhSp6G9YwIpmy3T+xIfonKSgZHJJ1MbPN9h2sgAGTK1Pm6bQhdn99op7ZXdyVPm3JNaKZYwA1HqCwVlZUMCMw6Icn6nZJO5wS9cEiuvjxQA2FN1biRJUzS89yQghCKzJsEAekMjeSbigQBr7fa7TOn3PSfpE2n7EZBaCgokpwShOF5UZXpOUHAE/vsIw3+L0zS3TS3iKDy0xuG+ZS6s6icVDhwIf3aZiV5k6+2GI4JWoxNZJL1TAUkP63tryVPWFSWMEnWIhNsLwmCpAcqnK2D/CYIuHdHNGFRK0wS3GYRWEu1EKYXlZMKTkja6WCYA0GPEEGy9XMC676oD2ktJipHmCRrNrLyXET6DcrayYcFdhAEAdZwVIULG2n30O46EfRdsT8lonJSQQZB2HskW69MgP1NcV320mgjKkcKSR90qEnSO23qkFTTK66Lhn2qIrCOt+jKonKS4fF6UwpJmNdk6pUpTl/UpdhImCTrlpDaXjVJAiArKJLOfW4fbYRJQv5HBM1Dui0DKSonGZ45kH7tc8xhEg/e3XyKQsvUzwmQ2bXuxd1MJQaisoRJwhhrrfOWeYPvtqV3rV+jyPJZh8k8EJpT6i9J/GIWYSLfSdp2NmIrCJxe4i9Jj1OYxUmPC4qopxrtJD3b5IKkqde6ZqZA1NuqBLYuisrisfVsepJW7bvanhNC4yilHXuydEwH9HRr21hQi8rSplLRhQh+zU3uL1FsSlQWj6aB9MMYihvjny/typAoSXqOB6tOA1RBdH+xuCwNlTEimEGbka3lS3AxRWXxcEIS/53WEeeHQ22g+UGWrqmAU1Xi7aFYx40szc2Xj1h2UOAoM1k36MTg/HdyyzIjCqVoXhG0kEufI1vsiqT76SKKAi6nhHImN/LiSGdgnGWX7HvYKum0+ATIp8lchr48/sSlT37T4M4urkhaydUhIBHoB0kYDlN9N6/G+UIYhOZJerCssO7RQnUvEqKuSML+GlFMK7Zv/8fP00rE5QELqtIbGcenjSdjbbOREVEo+nejsxWPVNv1x1ztVqbmVsBmrlgfhwm6kYehIZ1hcfhFOjl8en88YC6bUy6HJH7Hhlt7SCEJk6T1EIqGft1zkkCAE1llXf4SNbvMXuYmY2SJkTTt2rDlBtYQEcqOUTMnKsvJUAWSnMrLxONDoNiNHf5y0q77m3QKpgz7amDaLVbU2WvCscVEVNam9vRP/3NUkuVU3tyKzIgqpzlERO/Z5fb0DXoUfifDvhpibjKwj9uF/dxBQ0hOgQOSEBfLROaj1LP7MnDNoUOmehd1RLjCE4PJsq00klBLYJ2bsOLGGJ2pHNTFgYTxgN7hhdw4QGqmD4E1LYGjsTG/SSMJPrws8FsdiyhQKlO+iphJ4bGjQ3rCETYy29AQg5OFByqjsUJJqxORf9BkMttQDXzEfj8lQGW3ockW+GKSc4UW7bk5icIDOMwdi/2ravn3qv2CLrKxu9v+dLVSwu3BCvntBAnMQ3ycEOezetGWJyTNLU88zhPxNkSqbwaCULLcyb03A/kjr9rTZtK2di+wtDpxOyQ2U+WWetOeX1iYZKM0HAdsbfGqTW0mjOYRfkc1CAPc4X041WpOhXdteolltUas6MZ2XCkRhiyxl+1qXt8YFrWDHFHN146DySaCVu1LfNEJ6uGX1Biet63hgCOvgV2BfI/CnlL0ND/ad4v1LZEE/RE8XVbjj/6aXzcKQvg5Cqt0hGByy9QkB0WVe3oS437wVpH38ksPbRZd/MKKvUbSE+tx06vqDeanLuMBzs36o5Gk711CKmZepb/6aLPoKfYT82ku4s+GixdYIouJxaDfOlnxFJ2s1TyUqB/et4Qav9wAdNKCMsaG1kjC+drxl3YgWbecep2f+uSTg3M4xauC4NE92WgE9uBoeDKCAt6j15DieDP0LCyA11ESEHXVXrWPBGL7xeQ6wFnAiZgPVgZno9ygSYoDbvqJcRJzeHUPApcYbp4gVxgLR5F2MJegjAuHB2IBOjzOK+OQH8ujdZEK9lGCJGA2AcfIJJsPkr1GDrvoasjzQuHhn49H6KiASKzgEYTj39eORWIHMSEZhwU0NnQNpnnTJkgDOU82qEHOdZJm01OpGuCuw4lI9fo22YAXBzIxD6poDyVJimMerVNQmFLVrdsOVJIBZI4RFIXDMLdCXRsoTxKPlXUGe52GNpzfgALJTy6P2vI5yYAFMwjB53dQ5vgVKgHGXJNN961hEs5mwPNC7d9yMjzia5hPgMeIUKQUcGpKtt9j1pP0/wANaYMQakPDpBlCbYQkhSSFkEISvJ8QaiMkKStIonVGCLURkpQNJGHFHkJhVBhfhiSpjeiMdy8sDklSGDmFl/Nvu+XWr/wPlWthAiNdIRQAAAAASUVORK5CYII="},daYX:function(t,e,n){},"dv/L":function(t,e){t.exports="data:image/png;base64,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"},h1ze:function(t,e,n){},hFdO:function(t,e,n){"use strict";var a=n("DRUL"),i=n.n(a),s=n("dv/L"),r=n.n(s),o=n("dZl1"),c=n.n(o),l={namespaced:!0,state:{logo__text:i.a,logo__grey:r.a,logo__theme:c.a}};e["a"]=l},iHz1:function(t,e,n){"use strict";n("xfY5"),n("pIFo"),n("KKXr"),n("INYr"),n("VRzm");var a=n("vDqi"),i=n.n(a),s=n("pHQ6"),r=n("Q2AE"),o=n("rmb2");function c(t){return null===t.song?-1:t.musicList.findIndex(function(e){return e.hash===t.song.hash})}var l={namespaced:!0,state:{musicList:[],music:null,song:null,lyrics:"",audioEl:null,isLoading:!1,isPlaying:!1,isPlayerMedShow:!1,isPlayerMedSmall:!1},getters:{curMusicIndex:c,singerImg:function(t){if(null!==t.song&&t.song.img)return Object(o["a"])(t.song.img,400)},singerName:function(t){return t.music&&t.music.filename.split("-")[0].trim()},songName:function(t){return t.music&&t.music.filename.split("-")[1].trim()},lyricItems:function(t){var e=t.lyrics.split(/\n/);return e.pop(),e.map(function(t){var e=t.replace("[","").split("]"),n=e[0],a=n.split(":")[0],i=n.split(":")[1].split(".")[0],s=n.split(":")[1].split(".")[1];return{millisecond:60*a*1e3+1e3*i+Number(s),text:e[1].trim().replace(/(男[:：]\s*)|(女[:：]\s*)/,"")}})}},mutations:{findAudioEl:function(t,e){t.audioEl=e},wantPlay:function(t,e){var n=e.music,a=e.musicList,i=void 0===a?t.musicList:a;t.music&&n.hash===t.music.hash||(t.music=n,t.isLoading=!0,t.isPlayerMedSmall=!1,window.innerHeight>.8*r["a"].state.device.vMax&&(t.isPlayerMedShow=!0),r["a"].dispatch("player/fetchMusic",{musicHash:n.hash,musicList:i}))},togglePlay:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!t.isPlaying;if(e){t.isLoading=!1;var n=t.audioEl.play();"undefined"!==typeof n&&n.then(function(){t.isPlaying=!0}).catch(function(){t.audioEl.pause(),t.isPlaying=!1})}else t.audioEl.pause(),t.isPlaying=!1},next:function(t){var e=c(t);e<0||(e=e===t.musicList.length-1?-1:e,r["a"].commit("player/wantPlay",{music:t.musicList[e+1]}))},prev:function(t){var e=c(t);e<0||(e=0===e?t.musicList.length:e,r["a"].commit("player/wantPlay",{music:t.musicList[e-1]}))},togglePlayers:function(t,e){switch(e){case 0:t.curPlayerId=1;break;case 1:t.curPlayerId=0;break}}},actions:{fetchMusic:function(t,e){var n=t.commit,a=e.musicHash,r=e.musicList;i.a.get(s["a"].songLyric+a).then(function(t){var e=t.data.data;r=0===r.length?[e]:r,n("replaceProperty",{paths:"player.musicList",data:r},{root:!0}),n("replaceProperty",{paths:"player.lyrics",data:e.lyrics},{root:!0}),n("replaceProperty",{paths:"player.song",data:e},{root:!0})})}}};e["a"]=l},k5rF:function(t,e,n){"use strict";n("VRzm"),n("vDqi"),n("pHQ6");var a={namespaced:!0,state:{rankList:[],rankInfo:{info:{},songs:{timestamp:Date.now(),list:[]}}}};e["a"]=a},lTOK:function(t,e,n){"use strict";n("VRzm"),n("vDqi"),n("pHQ6");var a={namespaced:!0,state:{singerCategories:[],singerInfo:{info:{},data:[]},singerList:{info:{},data:[]}}};e["a"]=a},lvTa:function(t,e,n){"use strict";var a={namespaced:!0,state:{vh:document.documentElement.clientHeight,vMax:Math.max(document.documentElement.clientHeight,document.documentElement.clientWidth)}};e["a"]=a},nc4g:function(t,e,n){"use strict";var a=n("Kw5r");e["a"]=new a["a"]},pHQ6:function(t,e,n){"use strict";n("xpiv"),n("rGqo");var a="https://bird.ioliu.cn/v1?url=",i="http://m.kugou.com",s={newSong:i+"/?json=true",rankList:i+"/rank/list&json=true",rankInfo:i+"/rank/info/?page=1&json=true&rankid=",songList:i+"/plist/index&json=true",songListInfo:i+"/plist/list/songListId?json=true",singerCategory:i+"/singer/class&json=true",singerList:i+"/singer/list/singerListId?json=true",singerInfo:i+"/singer/info/singerId&json=true",songInfo:i+"/app/i/getSongInfo.php?cmd=playInfo&hash=",songLyric:"http://www.kugou.com/yy/index.php?r=play/getdata&hash=",hotSearch:"http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30",searchResult:"http://mobilecdn.kugou.com/api/v3/search/song?format=json&page=1&pagesize=20&showtype=1&keyword="};Reflect.ownKeys(s).forEach(function(t){s[t]=a+s[t]}),e["a"]=s},qB6M:function(t,e,n){"use strict";var a=n("s6IE"),i=n.n(a);i.a},rmb2:function(t,e,n){"use strict";n("pIFo");var a="400";function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return t.replace(/\{\s*size\s*\}/,e)}n.d(e,"a",function(){return i})},s6IE:function(t,e,n){},zgcK:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nav"},[n("nav",{staticClass:"nav__box"},t._l(t.navs,function(e,a){return n("router-link",{key:a,staticClass:"nav__link",attrs:{to:e.path,"exact-active-class":"nav__link--active"}},[t._v(t._s(e.text))])})),n("div",{staticClass:"nav__underline",style:"transform:translateX("+100*t.activeIndex+"%)"})])},i=[],s=(n("INYr"),{name:"AppNav",data:function(){return{navs:[{text:"新歌",name:"new",path:"/"},{text:"排行",name:"rank",path:"/rank/list"},{text:"歌单",name:"song",path:"/song/list"},{text:"歌手",name:"singer",path:"/singer/category"}]}},computed:{activeIndex:function(){var t=this;return this.navs.findIndex(function(e){return e.path===t.$route.path})}}}),r=s,o=(n("Jpsf"),n("KHd+")),c=Object(o["a"])(r,a,i,!1,null,"ea89aba8",null);e["a"]=c.exports}});
//# sourceMappingURL=app.8717197c.js.map