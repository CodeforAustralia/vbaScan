webpackJsonp([1,2],{119:function(t,e){},120:function(t,e){},121:function(t,e){},122:function(t,e){},123:function(t,e){},124:function(t,e){},126:function(t,e,n){n(124);var o=n(6)(n(78),n(135),"data-v-fe886be2",null);t.exports=o.exports},127:function(t,e,n){n(119);var o=n(6)(n(79),n(130),"data-v-1bef8c2c",null);t.exports=o.exports},128:function(t,e,n){n(121);var o=n(6)(n(80),n(132),null,null);t.exports=o.exports},129:function(t,e,n){n(122);var o=n(6)(n(82),n(133),"data-v-d42173cc",null);t.exports=o.exports},130:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-whiteframe",{staticClass:"card",attrs:{"md-elevation":"1"}},[n("div",{staticClass:"media"},[t.item.thumbnailUrl?n("img",{attrs:{src:t.item.thumbnailUrl}}):n("img",{staticClass:"emoji",attrs:{src:"https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg",alt:"emoji"}})]),t._v(" "),n("div",{staticClass:"content"},[n("img",{staticClass:"emoji",attrs:{src:"https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg",alt:"emoji"}}),t._v(" "),n("p",{staticClass:"truncate"},[t._v(t._s(t.item.commonNme))]),t._v(" "),n("md-icon",{staticClass:"md-primary",attrs:{id:t.item.taxonId},nativeOn:{click:function(e){t.toggleRightSidenavCard(e)}}},[t._v("info")])],1)])},staticRenderFns:[]}},131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("md-whiteframe",{staticClass:"main-toolbar",attrs:{"md-elevation":"1","md-theme":"primary"}},[n("md-toolbar",{staticClass:"main-toolbar"},[n("img",{attrs:{id:"logo",src:"https://www.wildlife.vic.gov.au/__data/assets/git_bridge/0015/177/deploy/mysource_files/logo-copy.svg",alt:"DELWP logo"}}),t._v(" "),n("md-layout",{staticClass:"toolbar-icons"},[this.$store.state.records.length?n("md-button",{staticClass:"md-icon-button",nativeOn:{click:function(e){t.switchView()}}},[t.listView?n("md-icon",[t._v("view_module")]):n("md-icon",[t._v("view_list")])],1):t._e(),t._v(" "),n("md-button",[n("md-icon",{attrs:{id:"menu-icon"}},[t._v("menu")])],1)],1)],1)],1),t._v(" "),this.$store.state.progress?n("md-progress",{staticClass:"md-accent",attrs:{"md-indeterminate":""}}):t._e(),t._v(" "),n("hello")],1)},staticRenderFns:[]}},132:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-layout",{staticClass:"listFilter"},[n("md-layout",{attrs:{id:"itemType"}},[n("p",[t._v(t._s(t.itemType))])]),t._v(" "),n("md-layout",{attrs:{"md-align":"end"}},[n("div",{staticClass:"field-group"},[n("md-input-container",[n("label",{attrs:{for:"filter"}},[t._v("Sort by…")]),t._v(" "),n("md-select",{attrs:{name:"filter",id:"filter"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("md-option",{attrs:{value:"records"}},[t._v("Records")]),t._v(" "),n("md-option",{attrs:{value:"species"}},[t._v("Species")]),t._v(" "),n("md-option",{attrs:{value:"distance"}},[t._v("Distance")]),t._v(" "),n("md-option",{attrs:{value:"count"}},[t._v("Count")])],1)],1)],1)])],1)},staticRenderFns:[]}},133:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("listFilter"),t._v(" "),this.$store.state.listView&&this.$store.getters.records.length?n("md-list",{staticClass:"list"},t._l(t.items,function(t){return n("listItem",{key:t.taxonId,attrs:{record:t}})})):n("md-layout",{staticClass:"card-layout"},t._l(t.items,function(t){return n("gridListItem",{key:t.taxonId,attrs:{item:t}})}))],1)},staticRenderFns:[]}},134:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-list-item",{staticClass:"md-list-item"},[n("md-avatar",[t.thumbnail?n("img",{attrs:{src:t.thumbnail}}):n("img",{staticClass:"emoji",attrs:{src:"https://emojione.com/wp-content/uploads/assets/emojis/1f43e.svg",alt:"emoji"}})]),t._v(" "),n("div",{staticClass:"md-list-text-container"},[n("span",[t._v(t._s(t.record.commonNme))]),t._v(" "),n("span",[t._v(t._s(t.record.scientificDisplayNme))]),t._v(" "),t.record.totalCountInt?n("p",[t._v("Total count : "+t._s(t.record.totalCountInt))]):t._e()]),t._v(" "),n("md-button",{staticClass:"md-icon-button md-list-action",attrs:{id:t.record.taxonId},nativeOn:{click:function(e){t.toggleRightSidenav(e)}}},[n("md-icon",{staticClass:"md-primary"},[t._v("info")])],1),t._v(" "),n("md-divider",{staticClass:"md-inset"})],1)},staticRenderFns:[]}},135:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[this.$store.state.records.length?n("recordTable"):n("div",{staticClass:"intro"},[n("h1",[t._v("Welcome to Bio scan")]),t._v(" "),t._m(0),t._v(" "),n("md-layout",{attrs:{"md-align":"center"}},[this.$store.state.token?n("md-button",{staticClass:"md-raised",attrs:{disabled:!1,id:"browse-button"},nativeOn:{click:function(e){t.browse(e)}}},[n("md-icon",[t._v("place")]),t._v("  \n        Browse\n      ")],1):t._e()],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Explore the recorded species nearby.\n    You can set the size of the search area and download the results.\n    Records are provided by the "),n("a",{attrs:{href:"https://vba.dse.vic.gov.au/vba/"}},[t._v("Victorian Biodiversity Atlas")])])}]}},139:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(11),r=n(54),s=n.n(r),i=n(52),c=(n.n(i),n(53)),a=n.n(c),u=n(51);o.default.config.productionTip=!1,o.default.use(s.a),o.default.material.registerTheme("default",{primary:{color:"purple",hue:900},accent:{color:"teal",hue:"A700"},warn:"red",background:{color:"grey",hue:300}}),o.default.material.setCurrentTheme("default"),new o.default({el:"#app",store:u.a,template:"<App/>",components:{App:a.a}})},50:function(t,e,n){n(123);var o=n(6)(n(81),n(134),null,null);t.exports=o.exports},51:function(t,e,n){"use strict";var o=n(11),r=n(137),s=n(75),i=n(74),c=n(76);o.default.use(r.a);var a={records:[],museumSpecies:[],token:null,position:null,listView:!0,filter:"records",progress:!1};e.a=new r.a.Store({state:a,actions:i,getters:s,mutations:c})},52:function(t,e){},53:function(t,e,n){n(120);var o=n(6)(n(77),n(131),null,null);t.exports=o.exports},72:function(t,e,n){"use strict";var o=n(28),r=n.n(o);n.d(e,"a",function(){return s});var s=function(t){return r.a.get("https://collections.museumvictoria.com.au/api/search",{params:{query:t,recordtype:"species"}}).then(function(t){return t.data[0]}).catch(function(t){return console.log(t.message)})}},73:function(t,e,n){"use strict";var o=n(28),r=n.n(o);n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i});var s=function(){return r.a.get("https://vbapi.herokuapp.com/auth/guest").then(function(t){return t.data.jwt}).catch(function(t){return console.log(t.message)})},i=function(t,e){return r.a.get("https://vbapi.herokuapp.com/search/point",{headers:{"x-access-token":e},params:t}).then(function(t){return t.data.records}).catch(function(t){return console.log(t.message)})}},74:function(t,e,n){"use strict";function o(t){return t.reduce(function(t,e){return 0===e.totalCountInt?t:(t.findIndex(function(t){return t.taxonId===e.taxonId})===-1&&t.push(e),t)},[])}Object.defineProperty(e,"__esModule",{value:!0});var r=n(84),s=n.n(r),i=n(34),c=n.n(i),a=n(73),u=n(72);n.d(e,"fetchToken",function(){return l}),n.d(e,"fetchRecordsByLocation",function(){return d}),n.d(e,"hydrateSpecies",function(){return f}),n.d(e,"getPosition",function(){return m}),n.d(e,"switchView",function(){return p}),n.d(e,"updateFilter",function(){return v}),n.d(e,"switchProgress",function(){return h});var l=function(t){var e=t.commit;n.i(a.a)().then(function(t){console.log("response body : ",t),e("SET_TOKEN",t)})},d=function(t){var e=t.commit,r=t.state,s=r.token,i={lat:r.position.lat,long:r.position.long,rad:250};return n.i(a.b)(i,s).then(function(t){e("SET_RECORDS",t),o(t).forEach(function(t){n.i(u.a)(t.scientificDisplayNme).then(function(n){var o=c()({},n,{vbaTaxonId:t.taxonId});console.log(o),e("ADD_MUSEUM_SPECIES",o)})})})},f=function(t,e){var o=t.commit;n.i(u.a)(e).then(function(t){return o("ADD_MUSEUM_SPECIES",t)})},m=function(t){var e=t.commit;return new s.a(function(t,e){t({accu:"12",lat:"-37.809610",long:"144.972052"})}).then(function(t){return e("SET_POSITION",t)}).catch(function(t){return console.log(t)})},p=function(t){(0,t.commit)("SWITCH_VIEW")},v=function(t,e){(0,t.commit)("UPDATE_FILTER",e)},h=function(t){(0,t.commit)("SWITCH_PROGRESS")}},75:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(85),r=n.n(o),s=n(34),i=n.n(s);n.d(e,"records",function(){return c}),n.d(e,"museumSpecie",function(){return a}),n.d(e,"token",function(){return u}),n.d(e,"species",function(){return l});var c=function(t){return t.records},a=function(t){return function(e){return!!t.museumSpecies.length&&t.museumSpecies.find(function(t){return t.vbaTaxonId===e})}},u=function(t){return t.token},l=function(t){return t.records.reduce(function(t,e){var n=i()({},{commonNme:e.commonNme,scientificDisplayNme:e.scientificDisplayNme,taxonId:e.taxonId,totalCountInt:Object.prototype.hasOwnProperty.call(e,"totalCountInt")?e.totalCountInt:null});if(0===n.totalCountInt)return t;var o=t.findIndex(function(t){return t.taxonId===n.taxonId});return o>-1?(n.totalCountInt+=t[o].totalCountInt,[].concat(r()(t.slice(0,o)),[n],r()(t.slice(o+1)))):[].concat(r()(t),[n])},[])}},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(11);n.d(e,"SET_TOKEN",function(){return r}),n.d(e,"SET_RECORDS",function(){return s}),n.d(e,"SET_POSITION",function(){return i}),n.d(e,"SWITCH_VIEW",function(){return c}),n.d(e,"UPDATE_FILTER",function(){return a}),n.d(e,"SWITCH_PROGRESS",function(){return u}),n.d(e,"ADD_MUSEUM_SPECIES",function(){return l});var r=function(t,e){o.default.set(t,"token",e)},s=function(t,e){o.default.set(t,"records",e)},i=function(t,e){o.default.set(t,"position",e)},c=function(t){return o.default.set(t,"listView",!t.listView)},a=function(t,e){o.default.set(t,"filter",e)},u=function(t){o.default.set(t,"progress",!t.progress)},l=function(t,e){t.museumSpecies.push(e)}},77:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(126),r=n.n(o);e.default={name:"app",components:{Hello:r.a},computed:{listView:function(){return this.$store.state.listView}},methods:{switchView:function(){this.$store.dispatch("switchView")}}}},78:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(129),r=n.n(o);e.default={name:"hello",components:{recordTable:r.a},computed:{records:function(){return this.$store.getters.records.length},token:function(){return this.$store.state.token?"ready":"waiting..."},position:function(){return this.$store.state.position},species:function(){return this.$store.getters.species}},methods:{fetchToken:function(){this.$store.dispatch("fetchToken")},fetchRecords:function(){this.$store.dispatch("fetchRecordsByLocation")},getPosition:function(){this.$store.dispatch("getPosition")},browse:function(){var t=this;this.$store.dispatch("switchProgress"),this.$store.dispatch("getPosition").then(function(){return t.$store.dispatch("fetchRecordsByLocation")}).then(function(){return t.$store.dispatch("switchProgress")})}},mounted:function(){this.fetchToken()}}},79:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["item"],methods:{}}},80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(50),r=n.n(o);e.default={data:function(){return{filter:""}},components:{listItem:r.a},computed:{itemType:function(){switch(this.filter){case"species":return"↑ Species";case"distance":return"↑ Distance";case"count":return"↓ Count";default:return"↑ Records"}}},watch:{filter:function(t){console.log("filter changed to "+t),this.$store.dispatch("updateFilter",t)}}}},81:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["record"],methods:{toggleRightSidenav:function(){var t=parseInt(event.currentTarget.id,10);this.$emit("infoPanel",t)}},computed:{thumbnail:function(){var t=this.$store.getters.museumSpecie(this.record.taxonId);if(console.log(t),!t)return!1;try{return t.media[0].small.uri}catch(t){return console.log(t),!1}}}}},82:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(50),r=n.n(o),s=n(127),i=n.n(s),c=n(128),a=n.n(c);e.default={components:{listItem:r.a,gridListItem:i.a,listFilter:a.a},computed:{items:function(){switch(this.$store.state.filter){case"species":return this.$store.getters.species;case"distance":return this.$store.getters.distance;case"count":return this.$store.getters.count;default:return this.$store.getters.records}}}}}},[139]);
//# sourceMappingURL=app.0c308056445f003f9d53.js.map