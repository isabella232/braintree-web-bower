!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).masterpass=e()}}(function(){var e;return function t(e,n,r){function o(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return o(n?n:t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,n,r){(function(t){"use strict";!function(o,i){"object"==typeof r&&"undefined"!=typeof n?n.exports=i("undefined"==typeof t?o:t):"function"==typeof e&&e.amd?e([],function(){return i(o)}):o.framebus=i(o)}(this,function(e){function t(e){return null==e?!1:null==e.Window?!1:e.constructor!==e.Window?!1:(v.push(e),!0)}function n(e){var t,n={};for(t in g)g.hasOwnProperty(t)&&(n[t]=g[t]);return n._origin=e||"*",n}function r(e){var t,n,r=s(this);return a(e)?!1:a(r)?!1:(n=Array.prototype.slice.call(arguments,1),t=c(e,n,r),t===!1?!1:(h(A.top||A.self,t,r),!0))}function o(e,t){var n=s(this);return y(e,t,n)?!1:(b[n]=b[n]||{},b[n][e]=b[n][e]||[],b[n][e].push(t),!0)}function i(e,t){var n,r,o=s(this);if(y(e,t,o))return!1;if(r=b[o]&&b[o][e],!r)return!1;for(n=0;n<r.length;n++)if(r[n]===t)return r.splice(n,1),!0;return!1}function s(e){return e&&e._origin||"*"}function a(e){return"string"!=typeof e}function c(e,t,n){var r=!1,o={event:e,origin:n},i=t[t.length-1];"function"==typeof i&&(o.reply=E(i,n),t=t.slice(0,-1)),o.args=t;try{r=S+JSON.stringify(o)}catch(s){throw new Error("Could not stringify event: "+s.message)}return r}function u(e){var t,n,r,o;if(e.data.slice(0,S.length)!==S)return!1;try{t=JSON.parse(e.data.slice(S.length))}catch(i){return!1}return null!=t.reply&&(n=e.origin,r=e.source,o=t.reply,t.reply=function(e){var t=c(o,[e],n);return t===!1?!1:void r.postMessage(t,n)},t.args.push(t.reply)),t}function l(t){A||(A=t||e,A.addEventListener?A.addEventListener("message",f,!1):A.attachEvent?A.attachEvent("onmessage",f):null===A.onmessage?A.onmessage=f:A=null)}function p(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}function f(e){var t;a(e.data)||(t=u(e),t&&(d("*",t.event,t.args,e),d(e.origin,t.event,t.args,e),m(e.data,t.origin,e.source)))}function d(e,t,n,r){var o;if(b[e]&&b[e][t])for(o=0;o<b[e][t].length;o++)b[e][t][o].apply(r,n)}function _(e){return e.top!==e?!1:null==e.opener?!1:e.opener===e?!1:e.opener.closed===!0?!1:!0}function h(e,t,n){var r;try{for(e.postMessage(t,n),_(e)&&h(e.opener.top,t,n),r=0;r<e.frames.length;r++)h(e.frames[r],t,n)}catch(o){}}function m(e,t,n){var r,o;for(r=v.length-1;r>=0;r--)o=v[r],o.closed===!0?v=v.slice(r,1):n!==o&&h(o.top,e,t)}function E(e,t){function n(o,i){e(o,i),g.target(t).unsubscribe(r,n)}var r=p();return g.target(t).subscribe(r,n),r}function y(e,t,n){return a(e)?!0:"function"!=typeof t?!0:a(n)?!0:!1}var A,g,v=[],b={},S="/*framebus*/";return l(),g={target:n,include:t,publish:r,pub:r,trigger:r,emit:r,subscribe:o,sub:o,on:o,unsubscribe:i,unsub:i,off:i}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),o=e("./lib/default-attributes"),i=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),n=i({},o,e);return n.style&&"string"!=typeof n.style&&(i(t.style,n.style),delete n.style),r(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":3,"./lib/default-attributes":4,"./lib/set-attributes":5}],3:[function(e,t,n){"use strict";t.exports=function(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}},{}],4:[function(e,t,n){"use strict";t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],5:[function(e,t,n){"use strict";t.exports=function(e,t){var n;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],null==n?e.removeAttribute(r):e.setAttribute(r,n))}},{}],6:[function(e,t,n){!function(e){function n(){}function r(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function i(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:a)(t.promise,e._value);var r;try{r=n(e._value)}catch(o){return void a(t.promise,o)}s(t.promise,r)}))}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l(r(n,t),e)}e._state=1,e._value=t,c(e)}catch(i){a(e,i)}}function a(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)i(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(r){if(n)return;n=!0,a(t,r)}}var p=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var r=new this.constructor(n);return i(this,new u(e,t,r)),r},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(i,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(e){r(i,e)},n)}t[i]=s,0===--o&&e(t)}catch(c){n(c)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)r(i,t[i])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,o=e.length;o>r;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){p(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof t&&t.exports?t.exports=o:e.Promise||(e.Promise=o)}(this)},{}],7:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],8:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],9:[function(e,t,n){"use strict";function r(e,t){return t?void e.then(function(e){t(null,e)})["catch"](function(e){t(e)}):e}t.exports=r},{}],10:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments),r=n[n.length-1];return"function"==typeof r&&(t=n.pop(),t=i(o(t))),s(e.apply(this,n),t)}}var o=e("./lib/deferred"),i=e("./lib/once"),s=e("./lib/promise-or-callback");t.exports=r},{"./lib/deferred":7,"./lib/once":8,"./lib/promise-or-callback":9}],11:[function(e,t,n){"use strict";function r(e,t){var n,r=t?i(t):{},a=o(e.authorization).attrs,c=i(e.analyticsMetadata);r.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,a.tokenizationKey?r.tokenizationKey=a.tokenizationKey:r.authorizationFingerprint=a.authorizationFingerprint,r}var o=e("./create-authorization-data"),i=e("./json-clone"),s=e("./constants");t.exports=r},{"./constants":19,"./create-authorization-data":22,"./json-clone":36}],12:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function o(e,t,n){var o=e.getConfiguration(),a=e._request,c=r(Date.now()),u=o.gatewayConfiguration.analytics.url,l={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:c}]};a({url:u,method:"post",data:s(o,l),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:o}},{"./add-metadata":11,"./constants":19}],13:[function(e,t,n){"use strict";function r(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}var o="function"==typeof Object.assign?Object.assign:r;t.exports={assign:o,_assign:r}},{}],14:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),t.exports=r},{"./enumerate":23}],15:[function(e,t,n){(function(e){"use strict";function n(t){return t=t||e.navigator.userAgent,t.indexOf("Opera Mini")>-1}function r(t){return t=t||e.navigator.userAgent,c(t)&&t.indexOf("Firefox")>-1}function o(t){return t=t||e.navigator.userAgent,-1!==t.indexOf("MSIE")?parseInt(t.replace(/.*MSIE ([0-9]+)\..*/,"$1"),10):/Trident.*rv:11/.test(t)?11:null}function i(e){return e=e||navigator.userAgent,-1!==e.indexOf("MSIE 9")}function s(t){return t=t||e.location.protocol,"https:"===t}function a(t){return t=t||e.navigator.userAgent,/iPhone|iPod|iPad/i.test(t)}function c(t){return t=t||e.navigator.userAgent,/Android/.test(t)}function u(t){var n,r;return t=t||e.navigator.userAgent,(n=t.match(/CriOS\/(\d+)\./))?(r=parseInt(n[1],10),_>r):!1}function l(t){return t=t||e.navigator.userAgent,!(f(t)||d(t)||n(t)||u(t))}function p(e){return/\bGSA\b/.test(e)}function f(t){return t=t||e.navigator.userAgent,a(t)?p(t)?!0:/.+AppleWebKit(?!.*Safari)/.test(t):!1}function d(t){var r=/Version\/[\d\.]+/;return t=t||e.navigator.userAgent,c(t)?r.test(t)&&!n(t):!1}var _=48;t.exports={isOperaMini:n,isAndroidFirefox:r,getIEVersion:o,isIe9:i,isHTTPS:s,isIos:a,isAndroid:c,isUnsupportedIosChrome:u,supportsPopups:l}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],16:[function(e,t,n){"use strict";function r(e,t){var n,r,i=document.createElement("a");return i.href=t,r="https:"===i.protocol?i.host.replace(/:443$/,""):"http:"===i.protocol?i.host.replace(/:80$/,""):i.host,n=i.protocol+"//"+r,n===e?!0:(i.href=e,o(e))}var o=e("../is-whitelisted-domain");t.exports={checkOrigin:r}},{"../is-whitelisted-domain":35}],17:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":23}],18:[function(e,t,n){"use strict";function r(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new a({type:a.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var o=e("framebus"),i=e("./events"),s=e("./check-origin").checkOrigin,a=e("../braintree-error");r.prototype.on=function(e,t){var n,r,i=t,a=this;this._isDestroyed||(this.merchantUrl&&(i=function(){s(this.origin,a.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=i,this._log("on",r),o.on.apply(o,r),this._listeners.push({eventName:e,handler:i,originalHandler:t}))},r.prototype.emit=function(e){var t;this._isDestroyed||(t=Array.prototype.slice.call(arguments),t[0]=this._namespaceEvent(e),this._log("emit",t),o.emit.apply(o,t))},r.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),o.off.apply(o,t))},r.prototype.off=function(e,t){var n,r,o=t;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===t&&(o=r.handler);this._offDirect(e,o)}},r.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},r.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},r.events=i,t.exports=r},{"../braintree-error":14,"./check-origin":16,"./events":17,framebus:1}],19:[function(e,t,n){"use strict";var r="3.12.0",o="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:o,BRAINTREE_LIBRARY_VERSION:"braintree/"+o+"/"+r}},{}],20:[function(e,t,n){"use strict";var r=e("./braintree-error"),o=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":14,"./errors":24}],21:[function(e,t,n){"use strict";function r(e,t){return e instanceof o?e:new o({type:t.type,code:t.code,message:t.message,details:{originalError:e}})}var o=e("./braintree-error");t.exports=r},{"./braintree-error":14}],22:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),n=t[0],r=t.slice(2).join("_");return{merchantId:r,environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return r(e)?(n=o(e),i.attrs.tokenizationKey=e,i.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var s=e("../lib/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/polyfill":38}],23:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],24:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":14}],25:[function(e,t,n){(function(n){"use strict";function r(){}function o(e){if(!e)throw new Error("Valid configuration is required");if(E.forEach(function(t){if(!e.hasOwnProperty(t))throw new Error("A valid frame "+t+" must be provided")}),!/^[\w_]+$/.test(e.name))throw new Error("A valid frame name must be provided")}function i(e){o(e),this._serviceId=d().replace(/-/g,""),this._options={name:e.name+"_"+this._serviceId,dispatchFrameUrl:e.dispatchFrameUrl,openFrameUrl:e.openFrameUrl,height:e.height,width:e.width},this.state=e.state,this._bus=new u({channel:this._serviceId}),this._setBusEvents()}var s=e("./strategies/popup"),a=e("./strategies/popup-bridge"),c=e("./strategies/modal"),u=e("../../bus"),l=e("../shared/events"),p=e("../shared/errors"),f=e("../shared/constants"),d=e("../../uuid"),_=e("iframer"),h=e("../../braintree-error"),m=e("../../browser-detection"),E=["name","dispatchFrameUrl","openFrameUrl"];i.prototype.initialize=function(e){var t=function(){e(),this._bus.off(l.DISPATCH_FRAME_READY,t)}.bind(this);this._bus.on(l.DISPATCH_FRAME_READY,t),this._writeDispatchFrame()},i.prototype._writeDispatchFrame=function(){var e=f.DISPATCH_FRAME_NAME+"_"+this._serviceId,t=this._options.dispatchFrameUrl;this._dispatchFrame=_({name:e,src:t,"class":f.DISPATCH_FRAME_CLASS,height:0,width:0,style:{position:"absolute",left:"-9999px"}}),document.body.appendChild(this._dispatchFrame)},i.prototype._setBusEvents=function(){this._bus.on(l.DISPATCH_FRAME_REPORT,function(e,t){this._onCompleteCallback&&this._onCompleteCallback.call(null,e.err,e.payload),this._frame.close(),this._onCompleteCallback=null,t&&t()}.bind(this)),this._bus.on(u.events.CONFIGURATION_REQUEST,function(e){e(this.state)}.bind(this))},i.prototype.open=function(e){return this._frame=this._getFrameForEnvironment(),this._frame.initialize(e),this._frame instanceof a?void 0:(this._onCompleteCallback=e,this._frame.open(),this.isFrameClosed()?(this._cleanupFrame(),void(e&&e(new h(p.FRAME_SERVICE_FRAME_OPEN_FAILED)))):void this._pollForPopupClose())},i.prototype.redirect=function(e){this._frame&&!this.isFrameClosed()&&this._frame.redirect(e)},i.prototype.close=function(){this.isFrameClosed()||this._frame.close()},i.prototype.focus=function(){this.isFrameClosed()||this._frame.focus()},i.prototype.createHandler=function(e){return e=e||{},{close:function(){e.beforeClose&&e.beforeClose(),this.close()}.bind(this),focus:function(){e.beforeFocus&&e.beforeFocus(),this.focus()}.bind(this)}},i.prototype.createNoopHandler=function(){return{close:r,focus:r}},i.prototype.teardown=function(){this.close(),this._dispatchFrame.parentNode.removeChild(this._dispatchFrame),this._dispatchFrame=null,this._cleanupFrame()},i.prototype.isFrameClosed=function(){return null==this._frame||this._frame.closed},i.prototype._cleanupFrame=function(){this._frame=null,clearInterval(this._popupInterval),this._popupInterval=null},i.prototype._pollForPopupClose=function(){return this._popupInterval=setInterval(function(){this.isFrameClosed()&&(this._cleanupFrame(),this._onCompleteCallback&&this._onCompleteCallback(new h(p.FRAME_SERVICE_FRAME_CLOSED)))}.bind(this),f.POPUP_POLL_INTERVAL),this._popupInterval},i.prototype._getFrameForEnvironment=function(){var e=m.supportsPopups(),t=Boolean(n.popupBridge);return e?new s(this._options):t?new a(this._options):new c(this._options)},t.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../braintree-error":14,"../../browser-detection":15,"../../bus":18,"../../uuid":40,"../shared/constants":32,"../shared/errors":33,"../shared/events":34,"./strategies/modal":27,"./strategies/popup":30,"./strategies/popup-bridge":28,iframer:2}],26:[function(e,t,n){"use strict";var r=e("./frame-service");t.exports={create:function(e,t){var n=new r(e);n.initialize(function(){t(n)})}}},{"./frame-service":25}],27:[function(e,t,n){"use strict";function r(){}function o(e){this.closed=null,this._frame=null,this._options=e||{},this._container=this._options.container||document.body}var i=e("iframer"),s=e("../../../assign").assign,a=e("../../../browser-detection"),c={position:"fixed",top:0,left:0,bottom:0,padding:0,margin:0,border:0,outline:"none",zIndex:20001,background:"#FFFFFF"};o.prototype.initialize=r,o.prototype.open=function(){var e={src:this._options.openFrameUrl,name:this._options.name,scrolling:"yes",height:"100%",width:"100%",style:s({},c)};a.isIos()?(e.style.position="absolute",this._el=document.createElement("div"),this._frame=i(e),this._el.appendChild(this._frame)):this._el=this._frame=i(e),this.closed=!1,this._container.appendChild(this._el)},o.prototype.focus=r,o.prototype.close=function(){this._container.removeChild(this._el),this._frame=null,this.closed=!0},o.prototype.redirect=function(e){this._frame.src=e},t.exports=o},{"../../../assign":13,"../../../browser-detection":15,iframer:2}],28:[function(e,t,n){(function(n){"use strict";function r(){}function o(e){this.closed=null,this._options=e}var i=e("../../../braintree-error"),s=e("../../shared/errors");o.prototype.initialize=function(e){var t=this;n.popupBridge.onComplete=function(n,r){var o=!r&&!n;return t.closed=!0,n||o?void e(new i(s.FRAME_SERVICE_FRAME_CLOSED)):void e(null,r)}},o.prototype.open=function(e){var t;e=e||{},t=e.openFrameUrl||this._options.openFrameUrl,this.closed=!1,n.popupBridge.open(t)},o.prototype.focus=r,o.prototype.close=r,o.prototype.redirect=function(e){this.open({openFrameUrl:e})},t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../braintree-error":14,"../../shared/errors":33}],29:[function(e,t,n){"use strict";var r=e("../../../shared/constants"),o=e("./position");t.exports=function(e){var t=e.height||r.DEFAULT_POPUP_HEIGHT,n=e.width||r.DEFAULT_POPUP_WIDTH;return[r.POPUP_BASE_OPTIONS,"height="+t,"width="+n,"top="+o.top(t),"left="+o.left(n)].join(",")}},{"../../../shared/constants":32,"./position":31}],30:[function(e,t,n){(function(n){"use strict";function r(){}function o(e){this.closed=null,this._frame=null,this._options=e||{},this.open()}var i=e("./compose-options");o.prototype.initialize=r,o.prototype.open=function(){this._frame=n.open(this._options.openFrameUrl,this._options.name,i(this._options)),this.closed=!1},o.prototype.focus=function(){this._frame.focus()},o.prototype.close=function(){this.closed||(this.closed=!0,this._frame.close())},o.prototype.redirect=function(e){this._frame.location.href=e},t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./compose-options":29}],31:[function(e,t,n){(function(e){"use strict";function n(t){var n=e.outerHeight||document.documentElement.clientHeight,r=null==e.screenY?e.screenTop:e.screenY;return o(n,t,r)}function r(t){var n=e.outerWidth||document.documentElement.clientWidth,r=null==e.screenX?e.screenLeft:e.screenX;return o(n,t,r)}function o(e,t,n){return(e-t)/2+n}t.exports={top:n,left:r,center:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],32:[function(e,t,n){"use strict";t.exports={DISPATCH_FRAME_NAME:"dispatch",DISPATCH_FRAME_CLASS:"braintree-dispatch-frame",POPUP_BASE_OPTIONS:"resizable,scrollbars",DEFAULT_POPUP_WIDTH:450,DEFAULT_POPUP_HEIGHT:535,POPUP_POLL_INTERVAL:100,POPUP_CLOSE_TIMEOUT:100}},{}],33:[function(e,t,n){"use strict";var r=e("../../braintree-error");t.exports={FRAME_SERVICE_FRAME_CLOSED:{type:r.types.INTERNAL,code:"FRAME_SERVICE_FRAME_CLOSED",message:"Frame closed before tokenization could occur."},FRAME_SERVICE_FRAME_OPEN_FAILED:{type:r.types.INTERNAL,code:"FRAME_SERVICE_FRAME_OPEN_FAILED",message:"Frame failed to open."}}},{"../../braintree-error":14}],34:[function(e,t,n){"use strict";var r=e("../../enumerate");t.exports=r(["DISPATCH_FRAME_READY","DISPATCH_FRAME_REPORT"],"frameService:")},{"../../enumerate":23}],35:[function(e,t,n){"use strict";function r(e){return e.split(".").slice(-2).join(".")}function o(e){var t;return e=e.toLowerCase(),/^https:/.test(e)?(i=i||document.createElement("a"),i.href=e,t=r(i.hostname),s.hasOwnProperty(t)):!1}var i,s={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=o},{}],36:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],37:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],38:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,o,i,s,a,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",p="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do o=l.indexOf(e.charAt(c++)),i=l.indexOf(e.charAt(c++)),s=l.indexOf(e.charAt(c++)),a=l.indexOf(e.charAt(c++)),t=(63&o)<<2|i>>4&3,n=(15&i)<<4|s>>2&15,r=(3&s)<<6|63&a,p+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(c<e.length);return p}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],39:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":6}],40:[function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}t.exports=r},{}],41:[function(e,t,n){(function(n){"use strict";function r(e){var t=e.client.getConfiguration();this._client=e.client,this._assetsUrl=t.gatewayConfiguration.assetsUrl+"/web/"+u,this._isDebug=t.isDebug,this._authInProgress=!1,n.popupBridge&&"function"==typeof n.popupBridge.getReturnUrlPrefix?this._callbackUrl=n.popupBridge.getReturnUrlPrefix()+"return":this._callbackUrl=this._assetsUrl+"/html/masterpass-redirect-frame"+(this._isDebug?"":".min")+".html"}function o(e){var t,n;for(t=0;t<h.REQUIRED_OPTIONS_FOR_TOKENIZE.length;t++)if(n=h.REQUIRED_OPTIONS_FOR_TOKENIZE[t],!e.hasOwnProperty(n))return!0;return!1}var i=e("../../lib/promise"),s=e("../../lib/frame-service/external"),a=e("../../lib/braintree-error"),c=e("../shared/errors"),u="3.12.0",l=e("../../lib/methods"),p=e("wrap-promise"),f=e("../../lib/analytics"),d=e("../../lib/convert-methods-to-error"),_=e("../../lib/convert-to-braintree-error"),h=e("../shared/constants"),m=e("../../lib/constants").INTEGRATION_TIMEOUT_MS;r.prototype._initialize=function(){var e=this;return new i(function(t){var n=setTimeout(function(){f.sendEvent(e._client,"masterpass.load.timed-out")},m);s.create({name:h.LANDING_FRAME_NAME,height:h.POPUP_HEIGHT,width:h.POPUP_WIDTH,dispatchFrameUrl:e._assetsUrl+"/html/dispatch-frame"+(e._isDebug?"":".min")+".html",openFrameUrl:e._assetsUrl+"/html/masterpass-landing-frame"+(e._isDebug?"":".min")+".html"},function(r){e._frameService=r,clearTimeout(n),f.sendEvent(e._client,"masterpass.load.succeeded"),t(e)})})},r.prototype.tokenize=p(function(e){var t=this;return!e||o(e)?i.reject(new a(c.MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION)):t._authInProgress?i.reject(new a(c.MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS)):new i(function(n,r){t._navigateFrameToLoadingPage(e,r),t._frameService.open(t._createFrameOpenHandler(n,r))})}),r.prototype._navigateFrameToLoadingPage=function(e,t){this._authInProgress=!0,this._client.request({method:"post",endpoint:"masterpass/request_token",data:{requestToken:{originUrl:n.location.protocol+"//"+n.location.hostname,subtotal:e.subtotal,currencyCode:e.currencyCode,callbackUrl:this._callbackUrl}}}).then(function(t){var n,r=this._assetsUrl+"/html/masterpass-loading-frame"+(this._isDebug?"":".min")+".html?",o=this._client.getConfiguration().gatewayConfiguration,i=e.config||{};n={environment:o.environment,requestToken:t.requestToken,callbackUrl:this._callbackUrl,merchantCheckoutId:o.masterpass.merchantCheckoutId,allowedCardTypes:o.masterpass.supportedNetworks},Object.keys(i).forEach(function(e){"function"!=typeof i[e]&&(n[e]=i[e])}),r+=Object.keys(n).map(function(e){return e+"="+n[e]}).join("&"),this._frameService.redirect(r)}.bind(this))["catch"](function(e){var n=e.details&&e.details.httpStatus;this._closeWindow(),t(422===n?_(e,c.MASTERPASS_INVALID_PAYMENT_OPTION):_(e,c.MASTERPASS_FLOW_FAILED))}.bind(this))},r.prototype._createFrameOpenHandler=function(e,t){var r=this;return n.popupBridge?function(n,o){return r._authInProgress=!1,n?(f.sendEvent(r._client,"masterpass.tokenization.closed-popupbridge.by-user"),void t(_(n,c.MASTERPASS_POPUP_CLOSED))):o.queryItems?void r._tokenizeMasterpass(o.queryItems).then(e)["catch"](t):(f.sendEvent(r._client,"masterpass.tokenization.failed-popupbridge"),void t(new a(c.MASTERPASS_FLOW_FAILED)))}:function(n,o){return n?(r._authInProgress=!1,"FRAME_SERVICE_FRAME_CLOSED"===n.code?(f.sendEvent(r._client,"masterpass.tokenization.closed.by-user"),void t(new a(c.MASTERPASS_POPUP_CLOSED))):"FRAME_SERVICE_FRAME_OPEN_FAILED"===n.code?(f.sendEvent(r._client,"masterpass.tokenization.failed.to-open"),void t(new a(c.MASTERPASS_POPUP_OPEN_FAILED))):(f.sendEvent(r._client,"masterpass.tokenization.failed"),r._closeWindow(),void t(_(n,c.MASTERPASS_FLOW_FAILED)))):void r._tokenizeMasterpass(o).then(e)["catch"](t)}},r.prototype._tokenizeMasterpass=function(e){var t=this;return"success"!==e.mpstatus?(f.sendEvent(t._client,"masterpass.tokenization.closed.by-user"),t._closeWindow(),i.reject(new a(c.MASTERPASS_POPUP_CLOSED))):t._client.request({endpoint:"payment_methods/masterpass_cards",method:"post",data:{masterpassCard:{checkoutResourceUrl:e.checkout_resource_url,requestToken:e.oauth_token,verifierToken:e.oauth_verifier}}}).then(function(e){return t._closeWindow(),n.popupBridge?f.sendEvent(t._client,"masterpass.tokenization.success-popupbridge"):f.sendEvent(t._client,"masterpass.tokenization.success"),e.masterpassCards[0]})["catch"](function(e){return t._closeWindow(),n.popupBridge?f.sendEvent(t._client,"masterpass.tokenization.failed-popupbridge"):f.sendEvent(t._client,"masterpass.tokenization.failed"),i.reject(_(e,c.MASTERPASS_ACCOUNT_TOKENIZATION_FAILED))})},r.prototype._closeWindow=function(){this._authInProgress=!1,this._frameService.close()},r.prototype.teardown=p(function(){var e=this;return new i(function(t){e._frameService.teardown(),d(e,l(r.prototype)),f.sendEvent(e._client,"masterpass.teardown-completed"),t()})}),t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../lib/analytics":12,"../../lib/braintree-error":14,"../../lib/constants":19,"../../lib/convert-methods-to-error":20,"../../lib/convert-to-braintree-error":21,"../../lib/frame-service/external":26,"../../lib/methods":37,"../../lib/promise":39,"../shared/constants":43,"../shared/errors":44,"wrap-promise":10}],42:[function(e,t,n){(function(n){"use strict";function r(e){var t,n,r;return null==e.client?p.reject(new i({type:l.INSTANTIATION_OPTION_REQUIRED.type,code:l.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating Masterpass."})):(n=e.client.getConfiguration().analyticsMetadata.sdkVersion,n!==c?p.reject(new i({type:l.INCOMPATIBLE_VERSIONS.type,code:l.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and Masterpass (version "+c+") components must be from the same SDK version."})):o()?(r=e.client.getConfiguration().gatewayConfiguration,r.masterpass?(t=new a(e),t._initialize()):p.reject(new i(u.MASTERPASS_NOT_ENABLED))):p.reject(new i(u.MASTERPASS_BROWSER_NOT_SUPPORTED)))}function o(){return Boolean(n.popupBridge||s.supportsPopups())}var i=e("../lib/braintree-error"),s=e("../lib/browser-detection"),a=e("./external/masterpass"),c="3.12.0",u=e("./shared/errors"),l=e("../lib/errors"),p=e("../lib/promise"),f=e("wrap-promise");t.exports={create:f(r),isSupported:o,VERSION:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/braintree-error":14,"../lib/browser-detection":15,"../lib/errors":24,"../lib/promise":39,"./external/masterpass":41,"./shared/errors":44,"wrap-promise":10}],43:[function(e,t,n){"use strict";t.exports={LANDING_FRAME_NAME:"braintreemasterpasslanding",POPUP_WIDTH:450,POPUP_HEIGHT:660,REQUIRED_OPTIONS_FOR_TOKENIZE:["subtotal","currencyCode"]
}},{}],44:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={MASTERPASS_BROWSER_NOT_SUPPORTED:{type:r.types.CUSTOMER,code:"MASTERPASS_BROWSER_NOT_SUPPORTED",message:"Browser is not supported."},MASTERPASS_NOT_ENABLED:{type:r.types.MERCHANT,code:"MASTERPASS_NOT_ENABLED",message:"Masterpass is not enabled for this merchant."},MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION:{type:r.types.MERCHANT,code:"MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION",message:"Missing required option for tokenize."},MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS:{type:r.types.MERCHANT,code:"MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS",message:"Masterpass tokenization is already in progress."},MASTERPASS_ACCOUNT_TOKENIZATION_FAILED:{type:r.types.NETWORK,code:"MASTERPASS_ACCOUNT_TOKENIZATION_FAILED",message:"Could not tokenize user's Masterpass account."},MASTERPASS_POPUP_OPEN_FAILED:{type:r.types.MERCHANT,code:"MASTERPASS_POPUP_OPEN_FAILED",message:"Masterpass popup failed to open. Make sure to tokenize in response to a user action, such as a click."},MASTERPASS_POPUP_CLOSED:{type:r.types.CUSTOMER,code:"MASTERPASS_POPUP_CLOSED",message:"Customer closed Masterpass popup before authorizing."},MASTERPASS_INVALID_PAYMENT_OPTION:{type:r.types.MERCHANT,code:"MASTERPASS_INVALID_PAYMENT_OPTION",message:"Masterpass payment options are invalid."},MASTERPASS_FLOW_FAILED:{type:r.types.NETWORK,code:"MASTERPASS_FLOW_FAILED",message:"Could not initialize Masterpass flow."}}},{"../../lib/braintree-error":14}]},{},[42])(42)});