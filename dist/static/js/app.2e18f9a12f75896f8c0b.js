webpackJsonp([1,2],Array(50).concat([function(t,e,n){"use strict";var i=n(12),s=n(170),r=n(76),a=n(75),o=n(77);i.default.use(s.a);var c={records:[],species:[],speciesData:{},selectedSpecie:void 0,token:void 0,position:{acc:void 0,lat:void 0,long:void 0},listView:!0,filter:"scientificName",progress:!1,searchRadius:250};e.a=new s.a.Store({state:c,actions:a,getters:r,mutations:o})},function(t,e){},function(t,e,n){n(132);var i=n(1)(n(78),n(158),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=n(13),s=n.n(i);n.d(e,"a",function(){return r});var r=function(t){var e=t;return s.a.get("https://bie.ala.org.au/ws/search.json",{params:{q:t.scientificName}}).then(function(t){return t.data.searchResults.results.find(function(t){return t.scientificName===e.scientificName||t.commonName===e.commonName})}).catch(function(t){return console.log(t.message)})}},function(t,e,n){"use strict";var i=n(13),s=n.n(i);n.d(e,"a",function(){return r});var r=function(t){var e=t;return s.a.get("https://vicflora.rbg.vic.gov.au/api/images",{params:{"filter[species]":t.scientificName}}).then(function(t){return t.data.data!==[]&&t.data.data.filter(function(t){return t.scientificName===e.scientificName})}).catch(function(t){return console.log(t.message)})}},function(t,e,n){"use strict";var i=n(13),s=n.n(i);n.d(e,"a",function(){return r});var r=function(t){var e=t;return s.a.get("https://collections.museumvictoria.com.au/api/search",{params:{query:t.scientificName,recordtype:"species"}}).then(function(t){return t.data.find(function(t){return t.taxonomy.taxonName===e.scientificName||t.taxonomy.commonName===e.commonName})}).catch(function(t){return console.log(t.message)})}},function(t,e,n){"use strict";var i=n(14),s=n.n(i),r=n(13),a=n.n(r);n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return u});var o=function(){return a.a.get("http://localhost:3000/auth/guest").then(function(t){return t.data.jwt}).catch(function(t){return console.log(t.message)})},c=function(t,e){return a.a.get("http://localhost:3000/search/point",{headers:{"x-access-token":e},params:t}).then(function(t){return t.data.records}).catch(function(t){return console.log(t.message)})},u=function(t,e){return a.a.get("http://localhost:3000/search/point",{headers:{"x-access-token":e},params:s()({},t,{detail:!0})}).then(function(t){return t.data.records}).catch(function(t){return console.log(t.message)})}},function(t,e,n){"use strict";function i(t){return t.reduce(function(t,e){return 0===e.totalCountInt?t:(t.findIndex(function(t){return t.taxonId===e.taxonId})===-1&&t.push(e),t)},[])}Object.defineProperty(e,"__esModule",{value:!0});var s=n(92),r=n.n(s),a=n(74),o=n(73),c=n(71),u=n(72);n.d(e,"clearRecords",function(){return d}),n.d(e,"fetchToken",function(){return l}),n.d(e,"searchRecords",function(){return m}),n.d(e,"fetchRecordsByLocation",function(){return f}),n.d(e,"hydrateSpecies",function(){return p}),n.d(e,"getPosition",function(){return h}),n.d(e,"switchView",function(){return v}),n.d(e,"updateFilter",function(){return _}),n.d(e,"switchProgress",function(){return g}),n.d(e,"setSpecieDetail",function(){return b});var d=function(t){(0,t.commit)("CLEAR_RECORDS")},l=function(t){var e=t.commit;n.i(a.a)().then(function(t){console.log("response body : ",t),e("SET_TOKEN",t)})},m=function(t){var e=t.commit,i=t.state,s=i.token,r={lat:i.position.lat,long:i.position.long,rad:i.searchRadius};n.i(a.b)(r,s).then(function(t){e("SET_SPECIES",t),t.forEach(function(t){var i={scientificName:t.scientificDisplayNme,commonName:t.commonNme};n.i(o.a)(i).then(function(s){return s?e("ADD_SPECIE_DATA",{taxonId:t.taxonId,data:s,vbaData:t}):n.i(u.a)(i).then(function(s){return s.length>0?e("ADD_SPECIE_DATA",{taxonId:t.taxonId,data:s,vbaData:t}):n.i(c.a)(i).then(function(n){return n?e("ADD_SPECIE_DATA",{taxonId:t.taxonId,data:n,vbaData:t}):e("ADD_SPECIE_DATA",{taxonId:t.taxonId,data:{commonName:t.commonNme,name:t.scientificDisplayNme},vbaData:t})})})})})}),n.i(a.c)(r,s).then(function(t){e("SET_RECORDS",t)})},f=function(t){var e=t.commit,s=t.state,r=s.token,d={lat:s.position.lat,long:s.position.long,rad:s.searchRadius};return n.i(a.c)(d,r).then(function(t){e("SET_RECORDS",t),i(t).forEach(function(t){var i={scientificName:t.scientificDisplayNme,commonName:t.commonNme};n.i(o.a)(i).then(function(s){return s?e("ADD_SPECIE_DATA",{taxonId:t.taxonId,data:s,vbaData:t}):n.i(u.a)(i).then(function(s){return s.length>0?e("ADD_SPECIE_DATA",{taxonId:t.taxonId,data:s,vbaData:t}):n.i(c.a)(i).then(function(n){return n?e("ADD_SPECIE_DATA",{taxonId:t.taxonId,data:n,vbaData:t}):e("ADD_SPECIE_DATA",{taxonId:t.taxonId,data:{commonName:t.commonNme,name:t.scientificDisplayNme},vbaData:t})})})})})})},p=function(t,e){var i=t.commit;n.i(o.a)(e).then(function(t){t&&i("ADD_MUSEUM_SPECIES",t)})},h=function(t){var e=t.commit;return new r.a(function(t,e){t({accu:"12",lat:"-38.793254",long:"143.559937"})}).then(function(t){return e("SET_POSITION",t)}).catch(function(t){return console.log(t)})},v=function(t){(0,t.commit)("SWITCH_VIEW")},_=function(t,e){(0,t.commit)("UPDATE_FILTER",e)},g=function(t){(0,t.commit)("SWITCH_PROGRESS")},b=function(t,e){(0,t.commit)("UPDATE_SPECIE_DETAIL",e)}},function(t,e,n){"use strict";function i(t){var e=[/L/,/P\s*L/,/cr/,/cr\s*dbt/,/cr\s*L/,/dd\s*L/,/en\s*/,/en\s*I/,/en\s*L/,/en\s*L\s*#/,/ex\s*L/,/k\s*\*/,/k\s*L/,/nt\s*L/,/r/,/r\s*#/,/r\s*D/,/r\s*L/,/r\s*N/,/r\s*X/,/rx\s*L/,/vu\s*/,/vu\s*#/,/vu\s*D/,/vu\s*L/,/vu\s*X/,/CR\s*cr\s*L/,/CR\s*dd\s*L/],n=t.trim();return"*"===n?"Not native":e.some(function(t){return n.search(t)!==-1})?"Threatened":null}Object.defineProperty(e,"__esModule",{value:!0});var s=n(94),r=n.n(s),a=n(14),o=n.n(a);n.d(e,"records",function(){return d}),n.d(e,"selectedSpecieData",function(){return l}),n.d(e,"specieMedia",function(){return m}),n.d(e,"token",function(){return f}),n.d(e,"species",function(){return p}),n.d(e,"Oldspecies",function(){return h});var c=function(t){return t*Math.PI/180},u=function(t,e,n,i){var s=c(n-t),r=c(i-e),a=c(t),o=c(n),u=Math.sin(s/2)*Math.sin(s/2)+Math.sin(r/2)*Math.sin(r/2)*Math.cos(a)*Math.cos(o);return 2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u))*6371},d=function(t){var e=t.records,n=t.position.lat,i=t.position.long;return e.map(function(t){var e=t.latitudeddNum,s=t.longitudeddNum,r=u(n,i,e,s);return o()({},t,{distance:r})})},l=function(t){var e=t.selectedSpecie;return!!e&&t.speciesData[e]},m=function(t){return function(e){var n=t.speciesData[e];return n?n.media:null}},f=function(t){return t.token},p=function(t){return t.species.reduce(function(t,e){var n=o()({},{commonNme:e.commonNme,commonNmeSynonym:e.commonNmeSynonym,lastRecord:e.lastRecord,primaryCd:e.primaryCde,scientificDisplayNme:e.scientificDisplayNme,scientificNme:e.scientificNme,scientificNmeSynonym:e.scientificNmeSynonym,shortName:e.shortName,taxonId:e.taxonId,conservationStatus:i(e.conservationStatus),countOfSightings:Object.prototype.hasOwnProperty.call(e,"countOfSightings")?e.countOfSightings:null});return 0===n.countOfSightings?t:[].concat(r()(t),[n])})},h=function(t){return t.records.reduce(function(t,e){var n=o()({},{commonNme:e.commonNme,scientificDisplayNme:e.scientificDisplayNme,taxonId:e.taxonId,conservationStatus:i(e.conservationStatus),totalCountInt:Object.prototype.hasOwnProperty.call(e,"totalCountInt")?e.totalCountInt:null});if(0===n.totalCountInt)return t;var s=t.findIndex(function(t){return t.taxonId===n.taxonId});return s>-1?(n.totalCountInt+=t[s].totalCountInt,[].concat(r()(t.slice(0,s)),[n],r()(t.slice(s+1)))):[].concat(r()(t),[n])},[])}},function(t,e,n){"use strict";function i(t){return t||null}Object.defineProperty(e,"__esModule",{value:!0});var s=n(93),r=n.n(s),a=n(14),o=n.n(a),c=n(12);n.d(e,"SET_TOKEN",function(){return u}),n.d(e,"SET_SPECIES",function(){return d}),n.d(e,"SET_RECORDS",function(){return l}),n.d(e,"SET_POSITION",function(){return m}),n.d(e,"SET_RADIUS",function(){return f}),n.d(e,"CLEAR_RECORDS",function(){return p}),n.d(e,"SWITCH_VIEW",function(){return h}),n.d(e,"UPDATE_FILTER",function(){return v}),n.d(e,"SWITCH_PROGRESS",function(){return _}),n.d(e,"ADD_SPECIE_DATA",function(){return g}),n.d(e,"UPDATE_SPECIE_DETAIL",function(){return b});var u=function(t,e){c.default.set(t,"token",e)},d=function(t,e){c.default.set(t,"species",e)},l=function(t,e){c.default.set(t,"records",e)},m=function(t,e){c.default.set(t,"position",e)},f=function(t,e){c.default.set(t,"searchRadius",e)},p=function(t){c.default.set(t,"records",[])},h=function(t){return c.default.set(t,"listView",!t.listView)},v=function(t,e){c.default.set(t,"filter",e)},_=function(t){c.default.set(t,"progress",!t.progress)},g=function(t,e){var n=e.taxonId,s=e.data,a=e.vbaData;if(Object.prototype.hasOwnProperty.call(s,"taxonomy")){var u=["hazards","animalType","animalSubType","colours","maximumSize","habitats","media","diet","dietCategories","habitat","distribution","biology","generalDescription","briefId","licence","endemicity","commercial","conservationStatuses","authors","taxonomy","whenActive","whereToLook"].reduce(function(t,e){return o()({},t,r()({},e,s[e]))},{taxonomy:{commonName:a.scientificDisplayNme,taxonName:a.commonNme}});return c.default.set(t.speciesData,n,u)}var d={taxonomy:{family:i(s.family),kingdom:i(s.kingdom),commonName:i(a.scientificDisplayNme),taxonName:i(a.commonNme)}};return s.imageUrl?(d.media=[{large:{uri:s.largeImageUrl?s.largeImageUrl.replace(/http:\/\//,"https://"):null},medium:{uri:s.imageUrl?s.imageUrl.replace(/http:\/\//,"https://"):null},small:{uri:s.thumbnailUrl?s.thumbnailUrl.replace(/http:\/\//,"https://"):null},thumbnail:{uri:s.thumbnailUrl?s.thumbnailUrl.replace(/http:\/\//,"https://"):null},author:s.author,source:s.infoSourceName}],c.default.set(t.speciesData,n,d)):(d.media=[],Array.isArray(s)?(s.forEach(function(t){d.media.push({thumbnail:{uri:t.accessPoints.data.find(function(t){return"thumbnail"===t.variant}).accessURI},medium:{uri:t.accessPoints.data.find(function(t){return"preview"===t.variant}).accessURI},licence:t.license,author:t.creator,rights:t.rights})}),c.default.set(t.speciesData,n,d)):c.default.set(t.speciesData,n,d))},b=function(t,e){c.default.set(t,"selectedSpecie",e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(146),s=n.n(i),r=n(153),a=n.n(r);e.default={name:"app",components:{Hello:s.a,sidePanel:a.a},computed:{listView:function(){return this.$store.state.listView}},methods:{switchView:function(){this.$store.dispatch("switchView")},refresh:function(){var t=this;this.$store.dispatch("clearRecords"),this.$store.dispatch("switchProgress"),this.$store.dispatch("fetchRecordsByLocation").then(function(){return t.$store.dispatch("switchProgress")})},toggleRightSidenav:function(){this.$refs.rightSidenav.toggleRightSidenav()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(152),s=n.n(i),r=n(154),a=n.n(r);e.default={name:"hello",components:{recordTable:s.a,specieDetail:a.a},computed:{currentComponent:function(){return this.$store.getters.selectedSpecieData?"specieDetail":this.$store.state.records.length?"recordTable":null},selectedSpecie:function(){return console.log("___",this.$store.getters.selectedSpecieData),this.$store.getters.selectedSpecieData},records:function(){return this.$store.getters.records.length},token:function(){return this.$store.state.token?"ready":"waiting..."},position:function(){return this.$store.state.position},species:function(){return this.$store.getters.species}},methods:{fetchToken:function(){this.$store.dispatch("fetchToken")},fetchRecords:function(){},getPosition:function(){this.$store.dispatch("getPosition")},browse:function(){var t=this;this.$store.dispatch("switchProgress"),this.$store.dispatch("getPosition").then(function(){return t.$store.dispatch("searchRecords")}).then(function(){return t.$store.dispatch("switchProgress")})}},beforeMount:function(){this.fetchToken()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{commonName:{type:String,default:function(){return this.scientificName||""}},scientificName:{type:String,default:function(){return""}},taxonId:{type:Number,default:function(){}}},methods:{},computed:{thumbnail:function(){var t=this.$store.getters.specieMedia(this.taxonId);return!!t&&(Object.prototype.hasOwnProperty.call(t[0],"small")?t[0].small.uri:!!Object.prototype.hasOwnProperty.call(t[0],"thumbnail")&&t[0].thumbnail.uri)},backgroundImage:function(){var t=this.thumbnail;if(t){return{background:"url("+t+") center center no-repeat,linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0) 100%),url("+t+") no-repeat",backgroundSize:"contain, contain, cover"}}return{background:"url(https://raw.githubusercontent.com/Ranks/emojione/2.2.7/assets/png_128x128/1f43e.png)top center no-repeat"}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{specie:this.$store.getters.selectedSpecieData,selectedImg:0}},computed:{media:function t(){var t=this.specie.media;return t?t:null},currentImage:function(){console.log(this.selectedImg,this.media[this.selectedImg]);var t=this.media[this.selectedImg];return Object.prototype.hasOwnProperty.call(t,"small")?t.small.uri:t.thumbnail.uri},credit:function(){var t=this.media[this.selectedImg];return{by:t.author||t.creators[0].replace("Photographer: ","")}}},methods:{next:function(){this.selectedImg<this.media.length-1&&(this.selectedImg+=1)},previous:function(){console.log(this.media.length),this.selectedImg>0&&(this.selectedImg-=1)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{filter:""}},components:{},computed:{itemType:function(){switch(this.filter){case"species":return"↑ Species";case"distance":return"↑ Distance";case"count":return"↓ Count";default:return"↑ Species"}}},watch:{filter:function(t){console.log("filter changed to "+t),this.$store.dispatch("updateFilter",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(151),s=n.n(i);e.default={components:{recordListItem:s.a},computed:{records:function(){var t=this.$store.state.selectedSpecie;return this.$store.getters.records.filter(function(e){return e.taxonId===t})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{observerName:{type:String,default:function(){return"John Doe"}},method:{type:String,default:function(){return"Seen"}},startDate:{type:Number,default:function(){return 0}},count:{type:Number,default:function(){return 0}},accuracy:{type:Number,default:function(){return 10}},projectId:{type:Number,default:function(){return 1234}},distance:{type:Number,default:function(){return.4567}}},computed:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(149),s=n.n(i),r=n(155),a=n.n(r);e.default={components:{listFilter:s.a,specieList:a.a},computed:{currentComponent:function(){if(!this.$store.getters.records.length)return null;switch(this.$store.state.filter){default:return"specieList"}}},methods:{selectSpecie:function(t){console.log(t),this.$store.dispatch("setSpecieDetail",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"sidePanel",data:function(){return{radius:251}},computed:{searchRadius:{get:function(){return this.$store.state.searchRadius},set:function(t){this.$store.commit("SET_RADIUS",t)}},position:function(){return{lat:this.$store.state.position.lat,long:this.$store.state.position.long}},numberOfRecord:function(){return this.$store.state.records.length}},methods:{toggleRightSidenav:function(){this.$refs.rightSidenav.toggle()},closeRightSidenav:function(){this.$refs.rightSidenav.close()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(148),s=n.n(i),r=n(150),a=n.n(r);e.default={components:{imgSlider:s.a,recordList:a.a},data:function(){return{specie:this.$store.getters.selectedSpecieData}},computed:{description:function(){return this.specie.generalDescription}},methods:{close:function(){console.log("closing details page"),this.$store.dispatch("setSpecieDetail",null)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),s=n.n(i),r=n(156),a=n.n(r),o=n(147),c=n.n(o);e.default={data:function(){return{currentPage:1,itemsPerPage:8,resultCount:0}},components:{specieListItem:a.a,gridListItem:c.a},computed:{items:function(){switch(this.$store.state.filter){case"commonName":return this.paginate(this.byCommonName());case"scientificName":return this.paginate(this.byScientificName());case"distance":return this.paginate(this.byDistance());case"flora":return this.paginate(this.byFlora());case"fauna":return this.paginate(this.byFauna());default:return this.paginate(this.byScientificName())}},totalPages:function(){return Math.ceil(this.resultCount/this.itemsPerPage)}},methods:{paginate:function(t){this.resultCount=t.length;var e=(this.currentPage-1)*this.itemsPerPage;return console.log("index: ",e),t.slice(e,e+this.itemsPerPage)},setPage:function(t){console.log("current page "+this.currentPage+" | pageNumber "+t),this.currentPage=t,console.log(this.currentPage)},byScientificName:function(){return this.$store.getters.species.sort(function(t,e){var n=t.scientificDisplayNme.toLowerCase(),i=e.scientificDisplayNme.toLowerCase();return n<i?-1:n>i?1:0})||[]},byCommonName:function(){return this.$store.getters.species.sort(function(t,e){var n=t.commonNme.toLowerCase(),i=e.commonNme.toLowerCase();return n<i?-1:n>i?1:0})||[]},byFlora:function(){return this.$store.getters.species.filter(function(t){return"Flora"===t.primaryCd})},byFauna:function(){return this.$store.getters.species.filter(function(t){return"Flora"!==t.primaryCd})},byDistance:function(){var t=this;return this.$store.getters.species.map(function(e){var n=e.taxonId,i=t.$store.getters.records.filter(function(t){return t.taxonId===n}),r=i.sort(function(t,e){return t.distance-e.distance})[0];return s()({},e,{closestRecordDistance:r.distance})}).sort(function(t,e){return t.closestRecordDistance-e.closestRecordDistance})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{commonName:{type:String,default:function(){return""}},conservationStatus:{type:String,default:function(){return!1}},scientificName:{type:String,default:function(){return""}},taxonId:{type:Number,default:function(){}}},methods:{selectSpecie:function(){var t=this.taxonId;this.$store.dispatch("setSpecieDetail",t)}},computed:{thumbnail:function(){var t=this.$store.getters.specieMedia(this.taxonId);return!(!t||!t.length)&&(Object.prototype.hasOwnProperty.call(t[0],"small")?t[0].small.uri:!!Object.prototype.hasOwnProperty.call(t[0],"thumbnail")&&t[0].thumbnail.uri)},obs:function(){var t=this.taxonId;return this.$store.getters.records.reduce(function(e,n){return n.taxonId===t?e+1:e},0)},lastObs:function(){var t=this.taxonId,e=this.$store.getters.records.reduce(function(e,n){return n.taxonId===t&&e.push(n),e},[]),n=e.sort(function(t,e){return e.surveyStartSdt-t.surveyStartSdt});return new Date(n[0].surveyStartSdt).getFullYear()}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(138),n(137);var i=n(1)(n(79),n(163),"data-v-56bf39ef",null);t.exports=i.exports},function(t,e,n){n(142);var i=n(1)(n(80),n(166),"data-v-6a212e0a",null);t.exports=i.exports},function(t,e,n){n(144);var i=n(1)(n(81),n(168),"data-v-ac4f477e",null);t.exports=i.exports},function(t,e,n){n(131),n(130);var i=n(1)(n(82),n(157),"data-v-0d9dd8c9",null);t.exports=i.exports},function(t,e,n){n(135);var i=n(1)(n(83),n(161),"data-v-2871cb22",null);t.exports=i.exports},function(t,e,n){n(134);var i=n(1)(n(84),n(160),"data-v-26a093d5",null);t.exports=i.exports},function(t,e,n){n(143);var i=n(1)(n(85),n(167),"data-v-8a51640c",null);t.exports=i.exports},function(t,e,n){n(136);var i=n(1)(n(86),n(162),"data-v-365fc7ac",null);t.exports=i.exports},function(t,e,n){n(141),n(140);var i=n(1)(n(87),n(165),"data-v-61d6ac9b",null);t.exports=i.exports},function(t,e,n){n(139);var i=n(1)(n(88),n(164),"data-v-5c4b3ae8",null);t.exports=i.exports},function(t,e,n){n(133);var i=n(1)(n(89),n(159),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-layout",{staticClass:"listFilter"},[n("md-layout",{attrs:{id:"itemType"}},[n("p",[t._v(t._s(t.itemType))])]),t._v(" "),n("md-layout",{attrs:{"md-align":"end"}},[n("div",{staticClass:"filterSelector"},[n("md-input-container",[n("label",{attrs:{for:"filter"}},[t._v("Sort by…")]),t._v(" "),n("md-select",{attrs:{name:"filter",id:"filter"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}},[n("div",{attrs:{id:"dropdown-options"}},[n("md-option",{attrs:{value:"commonName"}},[t._v("Common name")]),t._v(" "),n("md-option",{attrs:{value:"scientificName"}},[t._v("Scientific name")]),t._v(" "),n("md-option",{attrs:{value:"flora"}},[t._v("Flora")]),t._v(" "),n("md-option",{attrs:{value:"fauna"}},[t._v("Fauna")]),t._v(" "),n("md-option",{attrs:{value:"distance"}},[t._v("Distance")])],1)])],1)],1)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("md-whiteframe",{staticClass:"main-toolbar",attrs:{"md-elevation":"1","md-theme":"primary"}},[n("md-toolbar",{staticClass:"main-toolbar"},[n("img",{attrs:{id:"logo",src:"https://www.wildlife.vic.gov.au/__data/assets/git_bridge/0015/177/deploy/mysource_files/logo-copy.svg",alt:"DELWP logo"}}),t._v(" "),n("md-layout",{staticClass:"toolbar-icons"},[this.$store.state.records.length&&this.$store.state.token?n("md-button",{nativeOn:{click:function(e){t.refresh()}}},[n("md-icon",[t._v("refresh")])],1):t._e(),t._v(" "),this.$store.state.records.length?n("md-button",{staticClass:"md-icon-button",nativeOn:{click:function(e){t.switchView()}}},[this.$store.state.selectedSpecie?t._e():n("div",[t.listView?n("md-icon",[t._v("view_module")]):n("md-icon",[t._v("view_list")])],1)]):t._e(),t._v(" "),n("md-button",{nativeOn:{click:function(e){t.toggleRightSidenav(e)}}},[n("md-icon",{attrs:{id:"menu-icon"}},[t._v("menu")])],1)],1)],1)],1),t._v(" "),this.$store.state.progress?n("md-progress",{staticClass:"md-accent",attrs:{"md-indeterminate":""}}):t._e(),t._v(" "),n("hello"),t._v(" "),n("sidePanel",{ref:"rightSidenav"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-list-item",{staticClass:"md-list-item",nativeOn:{click:function(e){t.selectSpecie(t.taxonId)}}},[n("md-avatar",[t.thumbnail?n("img",{attrs:{src:t.thumbnail}}):n("img",{staticClass:"emoji",attrs:{src:"https://raw.githubusercontent.com/Ranks/emojione/2.2.7/assets/png_128x128/1f43e.png",alt:"emoji"}})]),t._v(" "),n("div",{staticClass:"md-list-text-container"},[n("div",[n("div",{staticClass:"taxonomy"},[n("div",{staticClass:"top-row"},[n("p",[t._v(t._s(t.commonName))]),t._v(" "),t.conservationStatus?n("p",{staticClass:"status"},[t._v(t._s(t.conservationStatus))]):t._e()]),t._v(" "),n("p",[t._v(t._s(t.scientificName))])])]),t._v(" "),n("div",{staticClass:"observation"},[n("p",[t._v(t._s(t.obs)+" Observation"+t._s(t.obs>1?"s":""))]),n("p"),n("p",[t._v("Last from "+t._s(t.lastObs))])])]),t._v(" "),n("md-divider",{staticClass:"md-inset"})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-whiteframe",[n("div",{staticClass:"row"},[n("p",[t._v("Observer :")]),t._v(" "),n("p",[t._v(t._s(t.observerName))])]),t._v(" "),n("div",{staticClass:"row"},[n("p",[t._v("Method :")]),t._v(" "),n("p",[t._v(t._s(t.method))])]),t._v(" "),n("div",{staticClass:"row"},[n("p",[t._v("Date :")]),t._v(" "),n("p",[t._v(t._s(new Date(t.startDate).toDateString()))])]),t._v(" "),t.count?n("div",{staticClass:"row"},[n("p",[t._v("Count :")]),t._v(" "),n("p",[t._v(t._s(t.count))])]):t._e(),t._v(" "),n("div",{staticClass:"row"},[n("p",[t._v("Accuracy :")]),t._v(" "),n("p",[t._v(t._s(t.accuracy)+" m")])]),t._v(" "),n("div",{staticClass:"row"},[n("p",[t._v("Project Id :")]),t._v(" "),n("p",[t._v(t._s(t.projectId))])]),t._v(" "),n("div",{staticClass:"row"},[n("p",[t._v("Distance :")]),t._v(" "),n("p",[t._v(t._s((1e3*t.distance).toFixed())+" m")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("md-list",{staticClass:"list"},t._l(t.records,function(t){return n("recordListItem",{attrs:{observerName:t.observerFullName,method:t.samplingMethodCde,startDate:t.surveyStartSdt,count:t.totalCountInt,accuracy:t.latLongAccuracyddNum,projectId:t.projectId,distance:t.distance}})}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-sidenav",{ref:"rightSidenav",staticClass:"md-right md-fixed"},[n("md-toolbar",[n("div",{staticClass:"md-toolbar-container"},[n("h3",{staticClass:"md-title"},[t._v("Settings")])])]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("form",{attrs:{action:""}},[n("label",{attrs:{for:"weight"}},[t._v("Search radius : "+t._s(t.searchRadius)+" m")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRadius,expression:"searchRadius"}],attrs:{type:"range",id:"weight",min:"50",max:"1500",step:"50"},domProps:{value:t.searchRadius},on:{__r:function(e){t.searchRadius=e.target.value}}})]),t._v(" "),n("p",[t._v("Location : ")]),t._v(" "),n("p",[t._v("Latitude : "+t._s(t.position.lat))]),t._v(" "),n("p",[t._v("Longitude : "+t._s(t.position.long))]),t._v(" "),n("p",[t._v("Record found at location : "+t._s(t.numberOfRecord))]),t._v(" "),n("br"),t._v(" "),n("md-button",{staticClass:"md-raised md-accent",nativeOn:{click:function(e){t.closeRightSidenav(e)}}},[t._v("Close")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[this.$store.state.records.length?t._e():n("div",{staticClass:"intro"},[n("h1",[t._v("Welcome to Bio scan")]),t._v(" "),t._m(0),t._v(" "),n("md-layout",{attrs:{"md-align":"center"}},[n("md-button",{staticClass:"md-raised",attrs:{disabled:!this.$store.state.token,id:"browse-button"},nativeOn:{click:function(e){t.browse(e)}}},[n("md-icon",[t._v("place")]),t._v("  \n        Browse\n      ")],1)],1)],1),t._v(" "),n("transition",{attrs:{name:"component-fade",mode:"out-in"}},[n(t.currentComponent,{tag:"component"})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Explore the recorded species nearby.\n    You can set the size of the search area and download the results.\n    Records are provided by the "),n("a",{attrs:{href:"https://vba.dse.vic.gov.au/vba/"}},[t._v("Victorian Biodiversity Atlas")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[this.$store.state.listView?n("md-list",{staticClass:"list"},[t._l(t.items,function(t){return[n("specieListItem",{key:t.scientificDisplayNme,attrs:{commonName:t.commonNme,conservationStatus:t.conservationStatus,scientificName:t.scientificDisplayNme,taxonId:t.taxonId}})]})],2):n("div",{staticClass:"gridview"},t._l(t.items,function(t){return n("gridListItem",{key:t.scientificDisplayNme,attrs:{commonName:t.commonNme,scientificName:t.scientificDisplayNme,taxonId:t.taxonId}})})),t._v(" "),n("ul",{staticClass:"pagination"},t._l(t.totalPages,function(e){return Math.abs(e-t.currentPage)<2||e==t.totalPages||1==e?n("li",[n("md-button",{class:{current:t.currentPage===e,last:e==t.totalPages&&Math.abs(e-t.currentPage)>2,first:1==e&&Math.abs(e-t.currentPage)>2},attrs:{href:"#"},nativeOn:{click:function(n){t.setPage(e)}}},[t._v(t._s(e))])],1):t._e()}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("div",{staticClass:"taxonomy"},[n("md-button",{nativeOn:{click:function(e){t.close(e)}}},[n("md-icon",[t._v("arrow_back")])],1),t._v(" "),n("div",{staticClass:"names"},[n("h1",[t._v(t._s(t.specie.taxonomy.commonName))]),t._v(" "),n("h2",[t._v(t._s(t.specie.taxonomy.taxonName))])])],1),t._v(" "),t.specie.media?n("imgSlider"):t._e(),t._v(" "),n("div",{staticClass:"description"},[t.description?[n("h3",[t._v("Description :")]),t._v(" "),n("p",[t._v(t._s(t.description))])]:t._e()],2),t._v(" "),[n("md-list",{attrs:{id:"data-list"}},[t.specie.habitat?n("md-list-item",[n("span",[t._v("Habitat")]),t._v(" "),n("md-list-expand",[n("p",[t._v(t._s(t.specie.habitat))])])],1):t._e(),t._v(" "),t.specie.biology?n("md-list-item",[n("span",[t._v("Biology")]),t._v(" "),n("md-list-expand",[n("p",[t._v(t._s(t.specie.biology))])])],1):t._e(),t._v(" "),t.specie.distribution?n("md-list-item",[n("span",[t._v("Distribution")]),t._v(" "),n("md-list-expand",[n("p",[t._v(t._s(t.specie.distribution))])])],1):t._e()],1)],t._v(" "),n("h3",{staticClass:"margin-left"},[t._v("Observation : ")]),t._v(" "),n("recordList")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-whiteframe",{staticClass:"card",attrs:{"md-elevation":"1"}},[n("div",{staticClass:"card-content",style:t.backgroundImage},[n("p",{staticClass:"specie-name truncate"},[t._v(t._s(t.commonName))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("listFilter"),t._v(" "),n(t.currentComponent,{tag:"component"}),t._v(" "),this.$store.getters.species.length>10?n("p",[t._v(t._s(this.$store.getters.species.length)+" specie found, showing 8 per page.")]):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"images"},[n("md-button",{staticClass:"nav-button",class:{hidden:!this.selectedImg>0},nativeOn:{click:function(e){t.previous(e)}}},[n("md-icon",[t._v("navigate_before")])],1),t._v(" "),n("img",{attrs:{src:t.currentImage}}),t._v(" "),n("md-button",{staticClass:"nav-button",class:{hidden:this.selectedImg>=this.media.length-1},nativeOn:{click:function(e){t.next(e)}}},[n("md-icon",[t._v("navigate_next")])],1)],1),t._v(" "),t.credit.by?n("div",{staticClass:"credit"},[n("p",[t._v("Author: "+t._s(t.credit.by))])]):t._e()])},staticRenderFns:[]}},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(12),s=n(53),r=n.n(s),a=n(51),o=(n.n(a),n(52)),c=n.n(o),u=n(50);i.default.config.productionTip=!1,i.default.use(r.a),i.default.material.registerTheme("default",{primary:{color:"purple",hue:900},accent:{color:"teal",hue:"A700"},warn:"red",background:{color:"grey",hue:300}}),i.default.material.setCurrentTheme("default"),new i.default({el:"#app",store:u.a,template:"<App/>",components:{App:c.a}})}]),[172]);
//# sourceMappingURL=app.2e18f9a12f75896f8c0b.js.map