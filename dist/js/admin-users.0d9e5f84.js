(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin-users"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},3467:function(t,e,r){},"841c":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("1d80"),o=r("129f"),s=r("14c3");n("search",1,(function(t,e,r){return[function(e){var r=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=a(t),l=String(this),c=i.lastIndex;o(c,0)||(i.lastIndex=0);var u=s(i,l);return o(i.lastIndex,c)||(i.lastIndex=c),null===u?-1:u.index}]}))},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),o=new k(n||[]);return i._invoke=T(t,r,o),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=l;var u="suspendedStart",d="suspendedYield",f="executing",m="completed",h={};function v(){}function p(){}function g(){}var y={};y[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(S([])));x&&x!==r&&n.call(x,i)&&(y=x);var _=g.prototype=v.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function I(t,e){function r(a,i,o,s){var l=c(t[a],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(d).then((function(t){u.value=t,o(u)}),(function(t){return r("throw",t,o,s)}))}s(l.arg)}var a;function i(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function T(t,e,r){var n=u;return function(a,i){if(n===f)throw new Error("Generator is already running");if(n===m){if("throw"===a)throw i;return O()}r.method=a,r.arg=i;while(1){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var l=c(t,e,r);if("normal"===l.type){if(n=r.done?m:d,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=m,r.method="throw",r.arg=l.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var a=c(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:O}}function O(){return{value:e,done:!0}}return p.prototype=_.constructor=g,g.constructor=p,g[s]=p.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(I.prototype),I.prototype[o]=function(){return this},t.AsyncIterator=I,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new I(l(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(_),_[s]="Generator",_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach($),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;$(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},a15b:function(t,e,r){"use strict";var n=r("23e7"),a=r("44ad"),i=r("fc6a"),o=r("a640"),s=[].join,l=a!=Object,c=o("join",",");n({target:"Array",proto:!0,forced:l||!c},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},c964:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7"),r("e6cf");function n(t,e,r,n,a,i,o){try{var s=t[i](o),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function s(t){n(o,a,i,s,l,"next",t)}function l(t){n(o,a,i,s,l,"throw",t)}s(void 0)}))}}},e10c:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-data-table",{staticClass:"elevation-1",attrs:{loading:t.dataTableLoading,"no-data-text":t.$t("dataTable.NO_DATA"),"no-results-text":t.$t("dataTable.NO_RESULTS"),headers:t.headers,items:t.items,options:t.pagination,"items-per-page":5,"server-items-length":t.totalItems,"footer-props":{"items-per-page-text":t.$t("dataTable.ROWS_PER_PAGE"),"items-per-page-options":[5,10,25]}},on:{"update:options":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md4:"","mt-3":"","pl-4":""}},[r("div",{staticClass:"text-left"},[r("v-toolbar-title",[t._v(t._s(t.$t("users.TITLE")))])],1)]),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"","px-3":""}},[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:t.$t("dataTable.SEARCH"),id:"search","single-line":"","hide-details":"",clearable:"","clear-icon":"mdi-close"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),r("v-flex",{attrs:{xs12:"",sm6:"",md4:"","text-xs-right":"","mb-2":"","mt-2":"","pr-2":""}},[r("ValidationObserver",{ref:"observer",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),t.submit()}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid;return[r("v-dialog",{attrs:{"max-width":"800px","content-class":"dlgNewEditItem"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[r("div",{staticClass:"text-right"},[r("v-btn",t._g({staticClass:"btnNewItem pr-4",attrs:{color:"secondary"}},n),[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-plus")]),t._v(" "+t._s(t.$t("dataTable.NEW_ITEM"))+" ")],1)],1)]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),r("v-card-text",[r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{wrap:""}},[t.editedItem._id?[r("v-flex",{attrs:{xs12:"",md4:""}},[r("label",{attrs:{for:"createdAt"}},[t._v(t._s(t.$t("common.CREATED")))]),r("div",{attrs:{name:"createdAt"}},[t._v(" "+t._s(t.getFormat(t.editedItem.createdAt))+" ")])]),r("v-flex",{attrs:{xs12:"",md4:""}},[r("label",{attrs:{for:"updatedAt"}},[t._v(t._s(t.$t("common.UPDATED")))]),r("div",{attrs:{name:"updatedAt"}},[t._v(" "+t._s(t.getFormat(t.editedItem.updatedAt))+" ")])]),r("v-flex",{attrs:{xs12:"",md4:""}},[r("label",{attrs:{for:"verified"}},[t._v(t._s(t.$t("users.headers.VERIFIED")))]),r("div",{attrs:{name:"verified"},domProps:{innerHTML:t._s(t.trueFalse(t.editedItem.verified))}})])]:t._e(),r("v-flex",{attrs:{xs12:"",md6:""}},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-text-field",{attrs:{id:"name",name:"name",label:t.$t("users.headers.NAME"),error:n.length>0,"error-messages":n[0],autocomplete:"off"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})]}}],null,!0)})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-text-field",{attrs:{id:"email",name:"email",type:"email",label:t.$t("users.headers.EMAIL"),error:n.length>0,"error-messages":n[0],autocomplete:"off"},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}})]}}],null,!0)})],1),t.editedItem._id?t._e():[r("v-flex",{attrs:{xs12:"",md6:""}},[r("ValidationProvider",{attrs:{rules:"required|min:5",vid:"password"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-text-field",{key:"password",ref:"password",attrs:{id:"password",name:"password",type:"password",label:t.$t("users.PASSWORD"),error:n.length>0,"error-messages":n[0],autocomplete:"off"},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}})]}}],null,!0)})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("ValidationProvider",{attrs:{rules:"required|min:5|confirmed:password"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-text-field",{key:"confirmPassword",attrs:{id:"confirmPassword",name:"confirmPassword",type:"password",label:t.$t("users.CONFIRM_PASSWORD"),error:n.length>0,"error-messages":n[0],autocomplete:"off"},model:{value:t.editedItem.confirmPassword,callback:function(e){t.$set(t.editedItem,"confirmPassword",e)},expression:"editedItem.confirmPassword"}})]}}],null,!0)})],1)],r("v-flex",{attrs:{xs12:"",md6:""}},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-select",{staticClass:"inputRole",attrs:{clearable:"",id:"role",name:"role",items:t.roles,"item-text":"name","item-value":"value",label:t.$t("users.headers.ROLE"),error:n.length>0,"error-messages":n[0]},model:{value:t.editedItem.role,callback:function(e){t.$set(t.editedItem,"role",e)},expression:"editedItem.role"}})]}}],null,!0)})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-autocomplete",{staticClass:"inputCity",attrs:{id:"city",name:"city",label:t.$t("users.headers.CITY"),"search-input":t.searchInput,items:t.allCities,clearable:"",error:n.length>0,"error-messages":n[0],autocomplete:"off"},on:{"update:searchInput":function(e){t.searchInput=e},"update:search-input":function(e){t.searchInput=e}},model:{value:t.editedItem.city,callback:function(e){t.$set(t.editedItem,"city",e)},expression:"editedItem.city"}})]}}],null,!0)})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-text-field",{attrs:{id:"country",name:"country",label:t.$t("users.headers.COUNTRY"),error:n.length>0,"error-messages":n[0],autocomplete:"off"},model:{value:t.editedItem.country,callback:function(e){t.$set(t.editedItem,"country",e)},expression:"editedItem.country"}})]}}],null,!0)})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("ValidationProvider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("v-text-field",{attrs:{id:"phone",name:"phone",type:"tel",label:t.$t("users.headers.PHONE"),error:n.length>0,"error-messages":n[0],autocomplete:"off"},model:{value:t.editedItem.phone,callback:function(e){t.$set(t.editedItem,"phone",e)},expression:"editedItem.phone"}})]}}],null,!0)})],1)],2)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticClass:"btnCancel",attrs:{color:"red lighten3",text:""},on:{click:t.close}},[t._v(t._s(t.$t("dataTable.CANCEL")))]),r("v-btn",{staticClass:"btnSave",attrs:{color:"green",text:"",disabled:n},on:{click:t.save}},[t._v(t._s(t.$t("dataTable.SAVE")))])],1)],1)],1)]}}])})],1)],1)]},proxy:!0},{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.name))]),r("td",[t._v(t._s(e.item.email))]),r("td",[t._v(t._s(t.roleName(e.item.role)))]),r("td",{domProps:{innerHTML:t._s(t.trueFalse(e.item.verified))}}),r("td",[t._v(t._s(e.item.city))]),r("td",[t._v(t._s(e.item.country))]),r("td",[t._v(t._s(e.item.phone))])]}},{key:"item._id",fn:function(e){var n=e.item;return[r("td",{staticClass:"fill-height px-0"},[r("v-layout",{staticClass:"justify-center"},[r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({staticClass:"mx-0",attrs:{id:"edit",icon:""},on:{click:function(e){return t.editItem(n)}}},a),[r("v-icon",[t._v("mdi-pencil")])],1)]}}],null,!0)},[r("span",[t._v(t._s(t.$t("dataTable.EDIT")))])]),r("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[r("v-btn",t._g({staticClass:"mx-0",attrs:{id:"delete",icon:""},on:{click:function(e){return t.deleteItem(n)}}},a),[r("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)},[r("span",[t._v(t._s(t.$t("dataTable.DELETE")))])])],1)],1)]}},{key:"item.createdAt",fn:function(e){var r=e.item;return[t._v(" "+t._s(t.getFormat(r.createdAt))+" ")]}},{key:"item.updatedAt",fn:function(e){var r=e.item;return[t._v(" "+t._s(t.getFormat(r.updatedAt))+" ")]}},{key:"footer.page-text",fn:function(e){var r=e.pageStart,n=e.pageStop,a=e.itemsLength;return[t._v(" "+t._s(r)+" - "+t._s(n)+" "+t._s(t.$t("dataTable.OF"))+" "+t._s(a)+" ")]}},{key:"no-data",fn:function(){return[t._v(t._s(t.$t("dataTable.NO_DATA")))]},proxy:!0},{key:"no-results",fn:function(){return[t._v(t._s(t.$t("dataTable.NO_RESULTS")))]},proxy:!0}])}),r("ErrorMessage"),r("SuccessMessage")],1)},a=[],i=(r("a15b"),r("b0c0"),r("ac1f"),r("841c"),r("f3f3")),o=(r("96cf"),r("c964")),s=r("2f62"),l=r("fa7d"),c={metaInfo:function(){return{title:this.$store.getters.appTitle,titleTemplate:"".concat(this.$t("users.TITLE")," - %s")}},data:function(){return{searchInput:"",dataTableLoading:!0,delayTimer:null,dialog:!1,search:"",pagination:{},editedItem:{},defaultItem:{},fieldsToSearch:["name","email","role","city","country","phone"]}},computed:{roles:function(){return[{name:this.$t("roles.ADMIN"),value:"admin"},{name:this.$t("roles.USER"),value:"user"}]},allCities:function(){return this.$store.state.cities.allCities},formTitle:function(){return this.editedItem._id?this.$t("dataTable.EDIT_ITEM"):this.$t("dataTable.NEW_ITEM")},headers:function(){return[{text:this.$i18n.t("dataTable.ACTIONS"),value:"_id",sortable:!1,width:100},{text:this.$i18n.t("users.headers.NAME"),align:"left",sortable:!0,value:"name"},{text:this.$i18n.t("users.headers.EMAIL"),align:"left",sortable:!0,value:"email"},{text:this.$i18n.t("users.headers.ROLE"),align:"left",sortable:!0,value:"role"},{text:this.$i18n.t("users.headers.VERIFIED"),align:"left",sortable:!0,value:"verified"},{text:this.$i18n.t("users.headers.CITY"),align:"left",sortable:!0,value:"city"},{text:this.$i18n.t("users.headers.COUNTRY"),align:"left",sortable:!0,value:"country"},{text:this.$i18n.t("users.headers.PHONE"),align:"left",sortable:!0,value:"phone"},{text:this.$i18n.t("common.CREATED"),align:"left",sortable:!0,value:"createdAt"},{text:this.$i18n.t("common.UPDATED"),align:"left",sortable:!0,value:"updatedAt"}]},items:function(){return this.$store.state.adminUsers.users},totalItems:function(){return this.$store.state.adminUsers.totalUsers}},watch:{dialog:function(t){return!!t||this.close()},pagination:{handler:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.dataTableLoading=!0,e.next=4,t.getUsers(Object(l["a"])(t.pagination,t.buildSearch()));case 4:t.dataTableLoading=!1,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.dataTableLoading=!1;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},deep:!0},search:function(){var t=this;clearTimeout(this.delayTimer),this.delayTimer=setTimeout((function(){t.doSearch()}),400)}},methods:Object(i["a"])({},Object(s["b"])(["getAllCities","getUsers","editUser","saveUser","deleteUser"]),{getFormat:function(t){return window.__localeId__=this.$store.getters.locale,Object(l["e"])(t,"iii, MMMM d yyyy, h:mm a")},roleName:function(t){return"admin"===t?this.$t("roles.ADMIN"):this.$t("roles.USER")},trueFalse:function(t){return t?'<i aria-hidden="true" class="v-icon mdi mdi-check green--text" style="font-size: 16px;"></i>':'<i aria-hidden="true" class="v-icon mdi mdi-close red--text" style="font-size: 16px;"></i>'},doSearch:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.dataTableLoading=!0,e.next=4,t.getUsers(Object(l["a"])(t.pagination,t.buildSearch()));case 4:t.dataTableLoading=!1,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.dataTableLoading=!1;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},buildSearch:function(){return this.search?{query:this.search,fields:this.fieldsToSearch.join(",")}:{}},editItem:function(t){this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$confirm(e.$t("common.DO_YOU_REALLY_WANT_TO_DELETE_THIS_ITEM"),{title:e.$t("common.WARNING"),buttonTrueText:e.$t("common.DELETE"),buttonFalseText:e.$t("common.CANCEL"),buttonTrueColor:"red lighten3",buttonFalseColor:"yellow"});case 3:if(n=r.sent,!n){r.next=11;break}return e.dataTableLoading=!0,r.next=8,e.deleteUser(t._id);case 8:return r.next=10,e.getUsers(Object(l["a"])(e.pagination,e.buildSearch()));case 10:e.dataTableLoading=!1;case 11:r.next=16;break;case 13:r.prev=13,r.t0=r["catch"](0),e.dataTableLoading=!1;case 16:case"end":return r.stop()}}),r,null,[[0,13]])})))()},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem)}),300)},save:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.dataTableLoading=!0,!t.editedItem._id){e.next=10;break}return e.next=5,t.editUser(t.editedItem);case 5:return e.next=7,t.getUsers(Object(l["a"])(t.pagination,t.buildSearch()));case 7:t.dataTableLoading=!1,e.next=15;break;case 10:return e.next=12,t.saveUser({name:t.editedItem.name,email:t.editedItem.email,password:t.editedItem.password,role:t.editedItem.role,phone:t.editedItem.phone,city:t.editedItem.city,country:t.editedItem.country});case 12:return e.next=14,t.getUsers(Object(l["a"])(t.pagination,t.buildSearch()));case 14:t.dataTableLoading=!1;case 15:return t.close(),e.abrupt("return");case 19:e.prev=19,e.t0=e["catch"](0),t.dataTableLoading=!1,t.close();case 23:case"end":return e.stop()}}),e,null,[[0,19]])})))()}}),mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getAllCities();case 2:case"end":return e.stop()}}),e)})))()}},u=c,d=(r("e954"),r("2877")),f=r("6544"),m=r.n(f),h=r("c6a6"),v=r("8336"),p=r("b0af"),g=r("99d9"),y=r("a523"),b=r("8fea"),x=r("169a"),_=r("0e8f"),w=r("132d"),I=r("a722"),T=r("b974"),E=r("2fa4"),L=r("8654"),$=r("2a7f"),k=r("3a2f"),S=Object(d["a"])(u,n,a,!1,null,null,null);e["default"]=S.exports;m()(S,{VAutocomplete:h["a"],VBtn:v["a"],VCard:p["a"],VCardActions:g["b"],VCardText:g["d"],VCardTitle:g["e"],VContainer:y["a"],VDataTable:b["a"],VDialog:x["a"],VFlex:_["a"],VIcon:w["a"],VLayout:I["a"],VSelect:T["a"],VSpacer:E["a"],VTextField:L["a"],VToolbarTitle:$["c"],VTooltip:k["a"]})},e954:function(t,e,r){"use strict";var n=r("3467"),a=r.n(n);a.a}}]);