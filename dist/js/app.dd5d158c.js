(function(e){function t(t){for(var r,a,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)a=o[p],n[a]&&d.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],r=!0,a=1;a<s.length;a++){var o=s[a];0!==n[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=s[0]))}return e}var r={},a={app:0},n={app:0},i=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-3873e1f0":"8ee9d3bd","chunk-dacc3cd0":"f1f94585"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(e){var t=[],s={"chunk-3873e1f0":1,"chunk-dacc3cd0":1};a[e]?t.push(a[e]):0!==a[e]&&s[e]&&t.push(a[e]=new Promise(function(t,s){for(var r="css/"+({}[e]||e)+"."+{"chunk-3873e1f0":"9962c65d","chunk-dacc3cd0":"d51b7677"}[e]+".css",n=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===r||p===n))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],p=l.getAttribute("data-href");if(p===r||p===n)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var r=t&&t.target&&t.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete a[e],u.parentNode.removeChild(u),s(i)},u.href=n;var f=document.getElementsByTagName("head")[0];f.appendChild(u)}).then(function(){a[e]=0}));var r=n[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,s){r=n[e]=[t,s]});t.push(r[2]=i);var l,p=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e),l=function(t){d.onerror=d.onload=null,clearTimeout(u);var s=n[e];if(0!==s){if(s){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,s[1](i)}n[e]=void 0}};var u=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,p.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(s,r,function(t){return e[t]}.bind(null,r));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/OpenAPI-Viewer/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=p;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0a96":function(e,t,s){},1:function(e,t){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,s){"use strict";s.r(t);s("0fb7"),s("450d");var r=s("f529"),a=s.n(r),n=(s("be4f"),s("896a")),i=s.n(n),o=(s("5e32"),s("6721")),c=s.n(o),l=(s("6611"),s("e772")),p=s.n(l),d=(s("e612"),s("dd87")),u=s.n(d),f=(s("075a"),s("72aa")),m=s.n(f),h=(s("1f1a"),s("4e4b")),v=s.n(h),g=(s("e960"),s("b35b")),y=s.n(g),w=(s("10cb"),s("f3ad")),b=s.n(w),x=(s("1951"),s("eedf")),S=s.n(x),_=s("2b0e"),k=s("8c4f"),C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sw-app-shell",attrs:{id:"sw-app-shell"}},[s("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"sw-main-container"},[s("div",{ref:"headerContainer",staticClass:"sw-app-header-container"},[s("div",{staticClass:"sw-row",staticStyle:{padding:"16px 4px 8px 4px"}},[s("div",{staticStyle:{width:"200px",display:"flex","align-items":"center"}},[s("mrin-logo",{staticStyle:{height:"36px",width:"36px","margin-left":"5px"}}),s("div",{staticStyle:{"font-size":"24px",color:"orange",margin:"2px 8px"}},[e._v(" MrinDoc ")])],1),s("div",{staticStyle:{margin:"2px 8px"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.specUrl,expression:"specUrl"}],ref:"specUrl",staticClass:"sw-dark sw-medium",staticStyle:{width:"400px","margin-right":"5px"},attrs:{type:"text",placeholder:"Spec URL"},domProps:{value:e.specUrl},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onExplore(t):null},input:function(t){t.target.composing||(e.specUrl=t.target.value)}}}),s("el-button",{staticStyle:{width:"105px"},attrs:{type:"primary",size:"medium"},on:{click:e.onExplore}},[e._v("EXPLORE")])],1),s("div",{staticStyle:{flex:"1"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchVal,expression:"searchVal"}],staticClass:"sw-medium sw-dark",staticStyle:{width:"150px","margin-right":"20px"},attrs:{type:"text",placeholder:"Search"},domProps:{value:e.searchVal},on:{keyup:e.onSearchKeyUp,input:function(t){t.target.composing||(e.searchVal=t.target.value)}}})]),e.isSpecLoaded?s("div",{staticClass:"sw-row",staticStyle:{"min-height":"26px",padding:"8px 4px","background-color":"#444"}},[s("el-switch",{staticClass:"sw-dark",staticStyle:{width:"200px",margin:"0 3px"},attrs:{"active-text":"Developer Mode"},on:{change:function(t){e.$store.commit("isDevMode",e.isDevMode)}},model:{value:e.isDevMode,callback:function(t){e.isDevMode=t},expression:"isDevMode"}}),e.isDevMode?s("el-select",{staticClass:"sw-dark",staticStyle:{width:"400px","margin-right":"5px"},attrs:{size:"medium",placeholder:"Select API Server","popper-class":"sw-dark sw-double-height-options"},on:{change:function(t){e.$store.commit("selectedApiServer",e.selectedApiServer)}},model:{value:e.selectedApiServer,callback:function(t){e.selectedApiServer=t},expression:"selectedApiServer"}},e._l(e.parsedSpec.servers,function(t){return s("el-option",{key:t.url,attrs:{label:t.url,value:t.url}},[s("div",{staticStyle:{display:"flex","flex-direction":"column"}},[s("span",[e._v(e._s(t.url))]),s("span",{staticStyle:{color:"#8492a6","font-size":"12px","line-height":"12px"}},[e._v(e._s(t.description)+" ")])])])}),1):e._e(),s("div",{staticStyle:{flex:"1"}}),s("el-switch",{staticClass:"sw-dark",staticStyle:{width:"200px",margin:"0 3px"},attrs:{"active-text":"Expand All"},on:{change:e.onExpandAll},model:{value:e.expandAll,callback:function(t){e.expandAll=t},expression:"expandAll"}})],1):e._e()]),e.isSpecLoaded?s("div",{ref:"pageContainer",staticClass:"sw-page-container"},[e.parsedSpec.info?s("div",{staticClass:"sw-doc-info"},[s("div",{staticClass:"sw-doc-title"},[e._v("\n            "+e._s(e.parsedSpec.info.title)+" \n            "),e.parsedSpec.info.version?s("span",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[e._v("  "+e._s(e.parsedSpec.info.version))]):e._e()]),e.parsedSpec.info.description?s("div",{staticClass:"sw-gray-small-text"},[e._v(" "+e._s(e.parsedSpec.info.description)+" ")]):e._e(),e.parsedSpec.info.license&&e.parsedSpec.info.license.name?s("div",{staticStyle:{"font-size":"12px",margin:"8px 0 0 0"}},[e._v(" \n            "+e._s(e.parsedSpec.info.license.name)+" \n            "),e.parsedSpec.info.license.url?s("a",{attrs:{href:e.parsedSpec.info.license.url}},[e._v(" "+e._s(e.parsedSpec.info.license.url))]):e._e()]):e._e()]):e._e(),e._l(e.parsedSpec.tags,function(t){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"tag.show"}],key:t.name,staticClass:"sw-tag-container"},[s("div",{staticClass:"sw-tag-title"},[e._v(e._s(t.name))]),s("end-point",{attrs:{paths:t.paths,parameters:t.parameters}})],1)})],2):e._e()])])},A=[],O=(s("a481"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.paths,function(t,r){return t.show?s("div",{key:r,class:"sw-endpoint-wrapper "+t.method+" "+(t.expanded?"sw-expanded":"sw-collapsed")},[s("div",{class:"sw-endpoint-head "+t.method+" "+(t.expanded?"sw-expanded":"sw-collapsed"),on:{click:function(e){t.expanded=!t.expanded}}},[s("div",{class:"sw-method "+t.method},[e._v(" "+e._s(t.method)+" ")]),s("div",{class:"sw-path "+(t.depricated?" sw-depricated":"")},[e._v(" "+e._s(t.path)+" ")]),t.depricated?s("span",{staticStyle:{"font-size":"12px","text-transform":"uppercase","font-weight":"bold",color:"orangered",margin:"2px 0 0 5px"}},[e._v(" Depricated ")]):e._e(),s("div",{staticStyle:{"min-width":"60px",flex:"1"}}),s("div",{staticClass:"sw-end-point-descr"},[e._v(" "+e._s(t.summary)+" ")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.expanded,expression:"fullPath.expanded"}],class:"sw-endpoint-body "+t.method},[t.summary||t.description?s("div",{staticClass:"sw-end-point-summary"},[s("div",{staticClass:"sw-end-point-title"},[e._v(e._s(t.summary))]),t.summary!==t.description?s("div",{staticClass:"sw-end-point-descr"},[e._v(e._s(t.description))]):e._e()]):e._e(),s("div",{class:"sw-req-resp-container "+e.layoutClass},[s("request-parameters",{staticClass:"sw-request",attrs:{method:t.method,url:t.path,parameters:t.parameters,requestBody:t.requestBody}}),s("response-types",{staticClass:"sw-response",attrs:{responses:t.responses}})],1)])]):e._e()}))}),P=[],E={props:{paths:{type:Array,required:!0,default:function(){return[]}}},data:function(){return{layoutClass:"sw-row",activeNames:[]}},components:{RequestParameters:()=>s.e("chunk-dacc3cd0").then(s.bind(null,"b2da")),ResponseTypes:()=>s.e("chunk-3873e1f0").then(s.bind(null,"1bbf"))}},j=E,M=(s("bcd0"),s("2877")),D=Object(M["a"])(j,O,P,!1,null,"5fb79f73",null);D.options.__file="EndPoint.vue";var U=D.exports,T=s("b279"),z=s("a789"),$=s.n(z),L=s("9f5f"),q=s.n(L);function I(e){return q.a.convertUrl(e,{}).then(function(e){console.info("%c Convertion to OpenAPI 3.0 - Success !!! ","color:cornflowerblue");let t=new $.a;return t.validate(e.openapi,{validate:{spec:!1,schema:!1}})}).then(function(e){console.info("%c OpenAPI 3.0 Dereferencing - Success !!! ","color:cornflowerblue");let t=["get","put","post","delete","patch","options","head"],s=[],r=0;for(let o in e.paths){let a={summary:e.paths[o].summary,description:e.paths[o].description,servers:e.paths[o].servers?e.paths[o].servers:[],parameters:e.paths[o].parameters?e.paths[o].parameters:[]};t.forEach(function(t){let n,i;if(e.paths[o][t]){let c=e.paths[o][t];if(c.tags)i=c.tags[0];else{let e=o.indexOf("/",1);-1===e?e=o.length-1:e-=1,i=o.substr(1,e)}n=s.find(e=>e.name==i),n||(n={show:!0,name:i,paths:[]},s.push(n));let l=c.summary?c.summary:"",p=c.description?c.description:"";if(!l&&p)if(p.length>100){let e=-1;e=p.indexOf("\n"),(-1===e||e>100)&&(e=p.indexOf(". ")),(-1===e||e>100)&&(e=p.indexOf(".")),l=-1===e||e>100?p:p.substr(0,e)}else l=p;n.paths.push({show:!0,expanded:!1,summary:l,method:t,description:c.description,path:o,operationId:c.operationId,requestBody:c.requestBody,parameters:c.parameters?a.parameters.concat(c.parameters):a.parameters,servers:c.servers?a.servers.concat(c.servers):a.servers,responses:c.responses,depricated:c.deprecated,security:c.security,commonSummary:a.summary,commonDescription:a.description}),r++}})}let a={},n=[];a=e.components?e.components.securitySchemes:{},n=e.servers;let i={info:e.info,tags:s,externalDocs:e.externalDocs,securitySchemes:a,servers:n,basePath:e.basePath,totalPathCount:r};return Promise.resolve(i)}).catch(function(e){console.error(e)})}var N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"1 0 511 512"}},[s("path",{attrs:{d:"M350.96 411.023C315.914 471.395 250.566 512 175.73 512S35.547 471.395.5 411.023c25.64-44.16 67.488-77.746 117.4-92.598 18.32-5.457 37.73-8.383 57.82-8.383 64.27 0 121.527 29.945 158.62 76.637a202.91 202.91 0 0 1 16.609 24.344zm0 0",fill:"#adc165"}}),s("path",{attrs:{d:"M334.352 386.68c-57.172 16.984-121.246 8.652-173.89-28.223-16.465-11.527-30.68-25.05-42.55-40.03 18.32-5.457 37.73-8.383 57.82-8.383 64.27 0 121.527 29.945 158.62 76.637zm77.172 32.18H85.195a7.84 7.84 0 0 1-7.84-7.84 7.84 7.84 0 0 1 7.84-7.836h326.328a7.84 7.84 0 0 1 7.84 7.84 7.84 7.84 0 0 1-7.84 7.836zm0 0",fill:"#99aa52"}}),s("path",{attrs:{d:"M374.32 337.773c-1.086 10.242-2.97 20.414-5.62 30.426-67.48 17.906-142.39.406-195.31-52.512-52.922-52.9-70.418-127.828-52.512-195.31 51.11-13.555 106.496-6.812 153.34 20.258 15 8.664 29.133 19.418 41.97 32.254 45.066 45.07 64.445 106.1 58.133 164.883zm0 0",fill:"#ffc73b"}}),s("path",{attrs:{d:"M374.32 337.773c-51.195-29.6-89.03-81.246-98.824-144.207-2.793-17.937-3.137-35.695-1.277-52.93 15 8.664 29.133 19.418 41.97 32.254 45.066 45.07 64.445 106.1 58.133 164.883zm37.203 81.086c-2.008 0-4.012-.762-5.543-2.293l-230.75-230.75a7.84 7.84 0 0 1 11.086-11.086l230.75 230.75c3.06 3.063 3.06 8.023 0 11.086-1.53 1.53-3.54 2.293-5.543 2.293zm0 0",fill:"#efb025"}}),s("path",{attrs:{d:"M310.543 175.23c0 74.84 40.605 140.184 100.98 175.234C471.895 315.418 512.5 250.07 512.5 175.23S471.898 35.047 411.523 0c-60.375 35.047-100.98 100.395-100.98 175.23zm0 0",fill:"#ff903e"}}),s("path",{attrs:{d:"M411.523 418.86a7.84 7.84 0 0 1-7.84-7.836V84.69c0-4.328 3.512-7.84 7.84-7.84s7.84 3.512 7.84 7.84v326.332a7.84 7.84 0 0 1-7.84 7.836zm0 0",fill:"#e87425"}})])])},B=[],V={props:{color:{type:String,default:"#333"}}},R=V,J=Object(M["a"])(R,N,B,!1,null,null,null);J.options.__file="Logo.vue";var K=J.exports,H=s("c0d6"),X={data:function(){return{specUrl:"https://raw.githubusercontent.com/APIs-guru/unofficial_openapi_specs/master/github.com/v3/swagger.yaml",searchVal:"",parsedSpec:{},isDevMode:!1,selectedApiServer:"",isSpecLoaded:!1,expandAll:!1,loading:!1}},methods:{onExplore(){let e=this;e.loading=!0,e.$nextTick(function(){I(e.specUrl).then(function(t){let s="";e.searchVal="",e.parsedSpec=t,(t.server&&0==t.server.length||!t.server)&&(s=e.specUrl.substring(0,e.specUrl.indexOf("/",e.specUrl.indexOf("//")+2)),t.basePath&&(s=s+"/"+t.basePath.replace(/^\/|\/$/g,""),e.parsedSpec.servers=[{url:s,description:"Auto generated Server URI"}])),e.isSpecLoaded=!0,e.isDevMode=!0,e.selectedApiServer=t.servers[0].url,H["a"].commit("isDevMode",!0),H["a"].commit("selectedApiServer",t.servers[0].url),setTimeout(()=>e.loading=!1,8*t.totalPathCount)}).catch(function(t){return e.loading=!1,e.$message({showClose:!0,message:"Oops, Error encountered while parsing the Spec",type:"error"}),console.error("Onoes! The API is invalid. "+t.message),!1})})},onSearchKeyUp:Object(T["a"])(function(e){var t=this;this.parsedSpec.tags.map(function(e){let s=0;for(let r=0;r<e.paths.length;r++)e.paths[r].path.toLowerCase().includes(t.searchVal.toLowerCase())?(e.paths[r].show=!0,s++):e.paths[r].show=!1;e.show=s>0})},500),onExpandAll(e){console.log("Expanded",e),this.parsedSpec.tags.map(function(t){t.paths.map(function(t){t.expanded=e})})}},mounted(){this.$refs.specUrl.focus()},components:{EndPoint:U,MrinLogo:K}},F=X,G=(s("9ef1"),Object(M["a"])(F,C,A,!1,null,"47274d52",null));G.options.__file="AppShell.vue";var Q=G.exports;_["default"].use(k["a"]);var W=new k["a"]({routes:[{path:"/",redirect:function(e){return"/home"}},{path:"/home",name:"AppShell",component:Q}]}),Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},Z=[],ee=(s("5c0b"),{}),te=Object(M["a"])(ee,Y,Z,!1,null,null,null);te.options.__file="App.vue";var se=te.exports;_["default"].config.productionTip=!1,_["default"].use(S.a),_["default"].use(b.a),_["default"].use(y.a),_["default"].use(v.a),_["default"].use(m.a),_["default"].use(u.a),_["default"].use(p.a),_["default"].use(c.a),_["default"].use(i.a.directive),_["default"].prototype.$message=a.a,_["default"].prototype.$loading=i.a.service;new _["default"]({router:W,store:H["a"],beforeCreate:function(){},render:e=>e(se)}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var r=s("5e27"),a=s.n(r);a.a},"5e27":function(e,t,s){},"9b00":function(e,t,s){},"9ef1":function(e,t,s){"use strict";var r=s("0a96"),a=s.n(r);a.a},b279:function(e,t,s){"use strict";s.d(t,"a",function(){return r}),s.d(t,"c",function(){return a}),s.d(t,"b",function(){return i});s("28a5"),s("3b2b"),s("ac6a");function r(e,t){var s=null;return function(){clearTimeout(s);var r=arguments,a=this;s=setTimeout(function(){e.apply(a,r)},t)}}function a(e,t){if("object"===e.type||e.properties)for(let s in e.properties){let r=Object.assign({},e.properties[s]);t[s]=a(r,{})}else{if("array"!==e.type&&!e.items)return n(e);{let s=Object.assign({},e.items);t=[a(s,{})]}}return t}function n(e){if(e.example)return e.example;if(0===Object.keys(e).length)return null;const t=e.format||e.type||(e.enum?"enum":null);switch(t){case"int32":case"int64":case"integer":return 0;case"float":case"double":case"number":return.5;case"string":return e.enum?e.enum[0]:e.pattern?rx(new RegExp(e.pattern)):"string";case"byte":return btoa("string");case"binary":return"binary";case"boolean":return!1;case"date":return new Date(0).toISOString().split("T")[0];case"date-time":return new Date(0).toISOString();case"password":return"password";case"enum":return e.enum[0];default:return e.nullable?null:(console.warn("Unknown schema value",e),"?")}}function i(e,t,s){if("object"===e.type||e.properties)for(let r in e.properties){let s=Object.assign({},e.properties[r]);if("object"===e.properties[r].type||e.properties[r].properties)t.push({label:{label:r,type:e.properties[r].type,descr:e.properties[r].description},children:i(s,[],r)});else if("array"===e.properties[r].type||e.properties[r].items){let a="";a=e.properties[r].items.properties?"array of objects":"array of "+e.properties[r].items.type,t.push({label:{label:"[ "+r+" ]",type:a,descr:e.properties[r].description},children:i(s,[],r)})}else{let s="";s=e.properties[r].enum?"Enum: "+e.properties[r].enum.join(" | "):e.properties[r].type,t.push({label:{label:r,type:s,descr:e.properties[r].description}})}}else if("array"===e.type){if("object"===e.items.type||e.items.properties){let t=Object.assign({},e.items);return i(t,[])}if("array"!==e.items.type)return;t.push({label:{label:"[ "+e.items.type+" ]",type:e.items.type,descr:e.items.description}})}else t.push({label:{label:s,type:e.type,descr:e.description}});return t}},bcd0:function(e,t,s){"use strict";var r=s("9b00"),a=s.n(r);a.a},c0d6:function(e,t,s){"use strict";var r=s("2b0e"),a=s("2f62");s("bfa9");r["default"].use(a["a"]);t["a"]=new a["a"].Store({state:{lang:"en",baseUrl:"",scheme:"http",isDevMode:!1,selectedApiServer:""},mutations:{lang(e,t){e.lang=t},baseUrl(e,t){e.baseUrl=t},scheme(e,t){e.scheme=t},isDevMode(e,t){e.isDevMode=t},selectedApiServer(e,t){e.selectedApiServer=t}},actions:{}})}});
//# sourceMappingURL=app.dd5d158c.js.map