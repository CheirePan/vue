(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{KF4M:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"singer_category"},t._l(t.singerCategories,function(e,i){return a("ul",{key:i,staticClass:"singer_category__list main_border"},t._l(e.data,function(e,i){return a("li",{key:"1"+i,staticClass:"singer_category__item main_border_bottom"},[a("router-link",{staticClass:"singer_category__link",attrs:{to:e.path}},[a("div",{staticClass:"singer_category__title"},[t._v(t._s(e.classname))]),a("button",{staticClass:"singer_category_btn"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])],1)}))}))},s=[],n=(a("dRSK"),a("yT7P")),r=a("vDqi"),o=a.n(r),c=a("pHQ6"),d=a("L2JU"),l=a("eToF"),g={name:"SingerCategory",mixins:[l["a"]],computed:Object(n["a"])({},Object(d["d"])("singer",["singerCategories"])),created:function(){0===this.singerCategories.length&&(this.setLoadingExcludeNav(),this.startLoading(),this.getSingerCategories())},methods:Object(n["a"])({},Object(d["c"])(["replaceProperty"]),{getSingerCategories:function(){var t=this;o.a.get(c["a"].singerCategory).then(function(e){var a=e.data,i=a.list.reduce(function(t,e){e.path="/singer/list/"+e.classid;var a=t.find(function(t){return t.category===e.classname.substring(0,2)});return a?a.data.push(e):t.push({category:e.classname.substring(0,2),data:[e]}),t},[]);t.replaceProperty({paths:"singer.singerCategories",data:i}),t.stopLoading()})}})},u=g,p=(a("kUqD"),a("KHd+")),h=Object(p["a"])(u,i,s,!1,null,"2eab802c",null);e["default"]=h.exports},dRSK:function(t,e,a){"use strict";var i=a("XKFU"),s=a("CkkT")(5),n="find",r=!0;n in[]&&Array(1)[n](function(){r=!1}),i(i.P+i.F*r,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},eToF:function(t,e,a){"use strict";var i=a("yT7P"),s=a("L2JU");e["a"]={updated:function(){this.stopLoading()},methods:Object(i["a"])({},Object(s["c"])(["replaceProperty"]),{startLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!0})},stopLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!1})},setLoadingExcludeHeader:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_header"})},setLoadingExcludeNav:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_nav"})},setLoadingExcludeModuleTitle:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_module_title"})},setLoadingExcludeSearchForm:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_search_form"})}})}},kUqD:function(t,e,a){"use strict";var i=a("z4E8"),s=a.n(i);s.a},z4E8:function(t,e,a){}}]);
//# sourceMappingURL=SingerCategory.e2bd1944.js.map