(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{FsYY:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"module__head",style:"background-image:url("+t.moduleHeadInfo.imgUrl+")"},[s("h6",{staticClass:"module__title"},[t._v(t._s(t.moduleHeadInfo.name))]),t._t("moduleUpdateTime")],2),t._t("moduleDes")],2)},i=[],n={name:"PubModuleHead",props:{moduleHeadInfo:{type:Object,default:function(){return{}}}}},a=n,r=(s("xlSM"),s("KHd+")),c=Object(r["a"])(a,o,i,!1,null,"f6d09188",null);e["a"]=c.exports},Iaca:function(t,e,s){},"NS/1":function(t,e,s){"use strict";var o=s("g6SS"),i=s.n(o);i.a},PxLW:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"music_list"},t._l(t.musicList,function(e,o){return s("li",{key:o,staticClass:"music_list__item main_border_bottom"},[s("div",{staticClass:"music_list__info",on:{click:function(s){t.wantPlay(e)}}},[t._t("index",null,{data:o}),s("div",{staticClass:"music_list__name"},[t._v(t._s(e.filename))])],2),s("button",{staticClass:"music_list__download"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-download"}})])])])}))},i=[],n={name:"AppMusicList",props:{musicList:{type:Array,default:function(){return[]}}},methods:{wantPlay:function(t){this.$store.commit("player/wantPlay",{music:t,musicList:this.$props.musicList})}}},a=n,r=(s("VvY7"),s("KHd+")),c=Object(r["a"])(a,o,i,!1,null,"39bf58b4",null);e["a"]=c.exports},"SX/J":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"song_list_info"},[s("PubModuleHead",{attrs:{"module-head-info":t.getModuleHeadInfo}},[s("PubModuleDes",{attrs:{slot:"moduleDes",description:t.getModuleHeadInfo.intro},slot:"moduleDes"})],1),s("AppMusicList",{attrs:{"music-list":t.getMusicList}})],1)},i=[],n=(s("pIFo"),s("KKXr"),s("yT7P")),a=(s("VRzm"),s("FsYY")),r=s("rDV7"),c=s("PxLW"),l=s("vDqi"),u=s.n(l),d=s("pHQ6"),f=s("eToF"),p=s("L2JU"),m=s("rmb2"),_={name:"SongListInfo",mixins:[f["a"]],components:{PubModuleHead:a["a"],AppMusicList:c["a"],PubModuleDes:r["a"]},computed:Object(n["a"])({},Object(p["d"])("song",["songListInfo"]),{getModuleHeadInfo:function(){var t=this.songListInfo.info.list;return{imgUrl:Object(m["a"])(t.imgurl),name:t.specialname,intro:t.intro}},getMusicList:function(){return this.songListInfo.songs.list.info}}),created:function(){var t=this.$route.path.split("/").pop();this.setLoadingExcludeHeader(),this.startLoading(),this.getSongListInfo(t)},methods:Object(n["a"])({},Object(p["c"])(["replaceProperty"]),{getSongListInfo:function(t){var e=this;u.a.get(d["a"].songListInfo.replace(/songListId?/i,t)).then(function(t){var s=t.data,o={info:s.info,songs:s.list};e.replaceProperty({paths:"song.songListInfo",data:o}),e.stopLoading()}).catch(function(t){alert(t)})}})},h=_,g=(s("Tlko"),s("KHd+")),v=Object(g["a"])(h,o,i,!1,null,"6b3b638f",null);e["default"]=v.exports},Tlko:function(t,e,s){"use strict";var o=s("Iaca"),i=s.n(o);i.a},TnS2:function(t,e,s){},VvY7:function(t,e,s){"use strict";var o=s("vVRU"),i=s.n(o);i.a},eToF:function(t,e,s){"use strict";var o=s("yT7P"),i=s("L2JU");e["a"]={updated:function(){this.stopLoading()},methods:Object(o["a"])({},Object(i["c"])(["replaceProperty"]),{startLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!0})},stopLoading:function(){this.replaceProperty({paths:"loading.isShow",data:!1})},setLoadingExcludeHeader:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_header"})},setLoadingExcludeNav:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_nav"})},setLoadingExcludeModuleTitle:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_module_title"})},setLoadingExcludeSearchForm:function(){this.replaceProperty({paths:"loading.sizeClassName",data:"loading--exclude_search_form"})}})}},g6SS:function(t,e,s){},rDV7:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.showMore?"module_info__intro module_info__intro--more main_box_shadow":"module_info__intro main_box_shadow"},[s("p",{staticClass:"module_info__text"},[t._v(t._s(t.description))]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"module_info__button",on:{click:function(e){t.showMore=!t.showMore}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-circle-arrow-up"}})])]),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.showMore,expression:"!showMore"}],staticClass:"module_info__button",on:{click:function(e){t.showMore=!t.showMore}}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-circle-arrow-down"}})])])])},i=[],n={name:"PubModuleDes",props:{description:{type:String,default:function(){return""}}},data:function(){return{showMore:!1}},methods:{}},a=n,r=(s("NS/1"),s("KHd+")),c=Object(r["a"])(a,o,i,!1,null,"3d821978",null);e["a"]=c.exports},vVRU:function(t,e,s){},xlSM:function(t,e,s){"use strict";var o=s("TnS2"),i=s.n(o);i.a}}]);
//# sourceMappingURL=SongListInfo.dd32393a.js.map