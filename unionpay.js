!function(e){var t;"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):((t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).braintree||(t.braintree={})).unionpay=e()}(function(){return function o(s,a,c){function u(t,e){if(!a[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=a[t]={exports:{}};s[t][0].call(i.exports,function(e){return u(s[t][1][e]||e)},i,i.exports,o,s,a,c)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.PromiseGlobal=void 0;var i=r(e("promise-polyfill")),o="undefined"!=typeof Promise?Promise:i.default;n.PromiseGlobal=o},{"promise-polyfill":29}],2:[function(e,t,n){"use strict";var s=e("./lib/promise"),a={};function r(n){var e,t=JSON.stringify(n);if(!n.forceScriptReload&&(e=a[t]))return e;var r=document.createElement("script"),i=n.dataAttributes||{},o=n.container||document.head;return r.src=n.src,r.id=n.id||"",r.async=!0,n.crossorigin&&r.setAttribute("crossorigin",""+n.crossorigin),Object.keys(i).forEach(function(e){r.setAttribute("data-"+e,""+i[e])}),e=new s.PromiseGlobal(function(e,t){r.addEventListener("load",function(){e(r)}),r.addEventListener("error",function(){t(new Error(n.src+" failed to load."))}),r.addEventListener("abort",function(){t(new Error(n.src+" has aborted."))}),o.appendChild(r)}),a[t]=e}r.clearCache=function(){a={}},t.exports=r},{"./lib/promise":1}],3:[function(e,t,n){t.exports=e("./dist/load-script")},{"./dist/load-script":2}],4:[function(e,t,n){"use strict";var r="undefined"!=typeof Promise?Promise:null,i=(o.defaultOnResolve=function(e){return o.Promise.resolve(e)},o.defaultOnReject=function(e){return o.Promise.reject(e)},o.setPromise=function(e){o.Promise=e},o.shouldCatchExceptions=function(e){return e.hasOwnProperty("suppressUnhandledPromiseMessage")?Boolean(e.suppressUnhandledPromiseMessage):Boolean(o.suppressUnhandledPromiseMessage)},o.all=function(e){return o.Promise.all(e)},o.allSettled=function(e){return o.Promise.allSettled(e)},o.race=function(e){return o.Promise.race(e)},o.reject=function(e){return o.Promise.reject(e)},o.resolve=function(e){return o.Promise.resolve(e)},o.prototype.then=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(e=this._promise).then.apply(e,t)},o.prototype.catch=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return(e=this._promise).catch.apply(e,t)},o.prototype.resolve=function(e){var t=this;return this.isFulfilled||(this._setResolved(),o.Promise.resolve().then(function(){return t._onResolve(e)}).then(function(e){t._resolveFunction(e)}).catch(function(e){t._resetState(),t.reject(e)})),this},o.prototype.reject=function(e){var t=this;return this.isFulfilled||(this._setRejected(),o.Promise.resolve().then(function(){return t._onReject(e)}).then(function(e){t._setResolved(),t._resolveFunction(e)}).catch(function(e){return t._rejectFunction(e)})),this},o.prototype._resetState=function(){this.isFulfilled=!1,this.isResolved=!1,this.isRejected=!1},o.prototype._setResolved=function(){this.isFulfilled=!0,this.isResolved=!0,this.isRejected=!1},o.prototype._setRejected=function(){this.isFulfilled=!0,this.isResolved=!1,this.isRejected=!0},o.Promise=r,o);function o(e){var n=this;"function"!=typeof e?(this._promise=new o.Promise(function(e,t){n._resolveFunction=e,n._rejectFunction=t}),e=e||{},this._onResolve=e.onResolve||o.defaultOnResolve,this._onReject=e.onReject||o.defaultOnReject,o.shouldCatchExceptions(e)&&this._promise.catch(function(){}),this._resetState()):this._promise=new o.Promise(e)}t.exports=i},{}],5:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),i=e("./lib/default-attributes"),o=e("./lib/assign");t.exports=function(e){void 0===e&&(e={});var t=document.createElement("iframe"),n=o.assign({},i.defaultAttributes,e);return n.style&&"string"!=typeof n.style&&(o.assign(t.style,n.style),delete n.style),r.setAttributes(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":6,"./lib/default-attributes":7,"./lib/set-attributes":8}],6:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.assign=void 0,n.assign=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return e.forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(e){n[e]=t[e]})}),n}},{}],7:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.defaultAttributes=void 0,n.defaultAttributes={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],8:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.setAttributes=void 0,n.setAttributes=function(e,t){for(var n in t){var r;t.hasOwnProperty(n)&&(null==(r=t[n])?e.removeAttribute(n):e.setAttribute(n,r))}}},{}],9:[function(e,t,n){"use strict";t.exports=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}},{}],10:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.deferred=function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];setTimeout(function(){try{n.apply(void 0,e)}catch(e){console.log("Error in callback function"),console.log(e)}},1)}}},{}],11:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.once=function(n){var r=!1;return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r||(r=!0,n.apply(void 0,e))}}},{}],12:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.promiseOrCallback=function(e,t){if(!t)return e;e.then(function(e){return t(null,e)}).catch(function(e){return t(e)})}},{}],13:[function(e,t,n){"use strict";var i=e("./lib/deferred"),o=e("./lib/once"),s=e("./lib/promise-or-callback");function r(r){return function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return"function"==typeof t[t.length-1]&&(e=t.pop(),e=o.once(i.deferred(e))),s.promiseOrCallback(r.apply(this,t),e)}}r.wrapPrototype=function(i,e){void 0===e&&(e={});var o=e.ignoreMethods||[],s=!0===e.transformPrivateMethods;return Object.getOwnPropertyNames(i.prototype).filter(function(e){var t="constructor"!==e&&"function"==typeof i.prototype[e],n=-1===o.indexOf(e),r=s||"_"!==e.charAt(0);return t&&r&&n}).forEach(function(e){var t=i.prototype[e];i.prototype[e]=r(t)}),i},t.exports=r},{"./lib/deferred":10,"./lib/once":11,"./lib/promise-or-callback":12}],14:[function(e,t,n){"use strict";var o=e("./lib/is-not-string"),s=e("./lib/subscription-args-invalid"),a=e("./lib/broadcast"),c=e("./lib/package-payload"),u=e("./lib/constants");function r(e){void 0===e&&(e="*"),this.origin=e}t.exports=(r.prototype.include=function(e){return null!=e&&(null!=e.Window&&(e.constructor===e.Window&&(u.childWindows.push(e),!0)))},r.prototype.target=function(e){return void 0===e&&(e="*"),new r(e)},r.prototype.emit=function(e,t,n){var r=this.origin;if(o.isntString(e))return!1;if(o.isntString(r))return!1;"function"==typeof t&&(n=t,t=void 0);var i=c.packagePayload(e,r,t,n);return!!i&&(a.broadcast(window.top||window.self,i,r),!0)},r.prototype.on=function(e,t){var n=this.origin;return!s.subscriptionArgsInvalid(e,t,n)&&(u.subscribers[n]=u.subscribers[n]||{},u.subscribers[n][e]=u.subscribers[n][e]||[],u.subscribers[n][e].push(t),!0)},r.prototype.off=function(e,t){var n=this.origin;if(s.subscriptionArgsInvalid(e,t,n))return!1;var r=u.subscribers[n]&&u.subscribers[n][e];if(!r)return!1;for(var i=0;i<r.length;i++)if(r[i]===t)return r.splice(i,1),!0;return!1},r)},{"./lib/broadcast":18,"./lib/constants":19,"./lib/is-not-string":22,"./lib/package-payload":24,"./lib/subscription-args-invalid":26}],15:[function(e,t,n){"use strict";var r=e("./lib/attach"),i=new(e("./framebus"));r.attach(),t.exports=i},{"./framebus":14,"./lib/attach":16}],16:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.detach=n.attach=void 0;var r=e("./message"),i=!1;n.attach=function(){i||"undefined"==typeof window||(i=!0,window.addEventListener("message",r.onmessage,!1))},n.detach=function(){i=!1,window.removeEventListener("message",r.onmessage,!1)}},{"./message":23}],17:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.broadcastToChildWindows=void 0;var o=e("./broadcast"),s=e("./constants");n.broadcastToChildWindows=function(e,t,n){for(var r=s.childWindows.length-1;0<=r;r--){var i=s.childWindows[r];i.closed?s.childWindows.splice(r,1):n!==i&&o.broadcast(i.top,e,t)}}},{"./broadcast":18,"./constants":19}],18:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.broadcast=void 0;var s=e("./has-opener");n.broadcast=function e(t,n,r){var i,o=0;try{for(t.postMessage(n,r),s.hasOpener(t)&&e(t.opener.top,n,r);i=t.frames[o];)e(i,n,r),o++}catch(e){}}},{"./has-opener":21}],19:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.subscribers=n.childWindows=n.prefix=void 0,n.prefix="/*framebus*/",n.childWindows=[],n.subscribers={}},{}],20:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.dispatch=void 0;var a=e("./constants");n.dispatch=function(e,t,n,r,i){if(a.subscribers[e]&&a.subscribers[e][t]){var o=[];n&&o.push(n),r&&o.push(r);for(var s=0;s<a.subscribers[e][t].length;s++)a.subscribers[e][t][s].apply(i,o)}}},{"./constants":19}],21:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.hasOpener=void 0,n.hasOpener=function(e){return e.top===e&&(null!=e.opener&&(e.opener!==e&&!0!==e.opener.closed))}},{}],22:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isntString=void 0,n.isntString=function(e){return"string"!=typeof e}},{}],23:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.onmessage=void 0;var i=e("./is-not-string"),o=e("./unpack-payload"),s=e("./dispatch"),a=e("./broadcast-to-child-windows");n.onmessage=function(e){var t,n,r;i.isntString(e.data)||(t=o.unpackPayload(e))&&(n=t.eventData,r=t.reply,s.dispatch("*",t.event,n,r,e),s.dispatch(e.origin,t.event,n,r,e),a.broadcastToChildWindows(e.data,t.origin,e.source))}},{"./broadcast-to-child-windows":17,"./dispatch":20,"./is-not-string":22,"./unpack-payload":27}],24:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.packagePayload=void 0;var s=e("./subscribe-replier"),a=e("./constants");n.packagePayload=function(e,t,n,r){var i,o={event:e,origin:t};"function"==typeof r&&(o.reply=s.subscribeReplier(r,t)),o.eventData=n;try{i=a.prefix+JSON.stringify(o)}catch(e){throw new Error("Could not stringify event: "+e.message)}return i}},{"./constants":19,"./subscribe-replier":25}],25:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.subscribeReplier=void 0;var s=e("../framebus"),a=e("./uuid");n.subscribeReplier=function(r,i){var o=a.uuid();return(new s).target(i).on(o,function e(t,n){r(t,n),(new s).target(i).off(o,e)}),o}},{"../framebus":14,"./uuid":28}],26:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.subscriptionArgsInvalid=void 0;var r=e("./is-not-string");n.subscriptionArgsInvalid=function(e,t,n){return!!r.isntString(e)||("function"!=typeof t||r.isntString(n))}},{"./is-not-string":22}],27:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.unpackPayload=void 0;var o=e("./constants"),s=e("./package-payload");n.unpackPayload=function(e){var t,n,r,i;if(e.data.slice(0,o.prefix.length)!==o.prefix)return!1;try{t=JSON.parse(e.data.slice(o.prefix.length))}catch(e){return!1}return t.reply&&(n=e.origin,r=e.source,i=t.reply,t.reply=function(e){var t;!r||(t=s.packagePayload(i,n,e))&&r.postMessage(t,n)}),t}},{"./constants":19,"./package-payload":24}],28:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.uuid=void 0,n.uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}},{}],29:[function(e,t,n){"use strict";var r=setTimeout;function c(e){return Boolean(e&&void 0!==e.length)}function i(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function s(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,o._immediateFn(function(){var e,t=1===n._state?r.onFulfilled:r.onRejected;if(null!==t){try{e=t(n._value)}catch(e){return void u(r.promise,e)}a(r.promise,e)}else(1===n._state?a:u)(r.promise,n._value)})):n._deferreds.push(r)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof o)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void p((r=n,i=e,function(){r.apply(i,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){u(t,e)}var r,i}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return;n=!0,u(t,e)}}o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(i);return s(this,new d(e,t,n)),n},o.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})},o.all=function(t){return new o(function(i,o){if(!c(t))return o(new TypeError("Promise.all accepts an array"));var s=Array.prototype.slice.call(t);if(0===s.length)return i([]);var a=s.length;for(var e=0;e<s.length;e++)!function t(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if("function"==typeof r)return void r.call(e,function(e){t(n,e)},o)}s[n]=e,0==--a&&i(s)}catch(e){o(e)}}(e,s[e])})},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(n){return new o(function(e,t){t(n)})},o.race=function(i){return new o(function(e,t){if(!c(i))return t(new TypeError("Promise.race accepts an array"));for(var n=0,r=i.length;n<r;n++)o.resolve(i[n]).then(e,t)})},o._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){r(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=o},{}],30:[function(e,t,n){"use strict";var s=e("./create-authorization-data"),a=e("./json-clone"),c=e("./constants");t.exports=function(e,t){var n,r=t?a(t):{},i=s(e.authorization).attrs,o=a(e.analyticsMetadata);for(n in r.braintreeLibraryVersion=c.BRAINTREE_LIBRARY_VERSION,r._meta)r._meta.hasOwnProperty(n)&&(o[n]=r._meta[n]);return r._meta=o,i.tokenizationKey?r.tokenizationKey=i.tokenizationKey:r.authorizationFingerprint=i.authorizationFingerprint,r}},{"./constants":38,"./create-authorization-data":41,"./json-clone":46}],31:[function(e,t,n){"use strict";var r=e("./promise"),u=e("./constants"),l=e("./add-metadata");t.exports={sendEvent:function(e,s,a){var c=Date.now();return r.resolve(e).then(function(e){var t=Date.now(),n=e.getConfiguration(),r=e._request,i=n.gatewayConfiguration.analytics.url,o={analytics:[{kind:u.ANALYTICS_PREFIX+s,isAsync:Math.floor(t/1e3)!==Math.floor(c/1e3),timestamp:c}]};r({url:i,method:"post",data:l(n,o),timeout:u.ANALYTICS_REQUEST_TIMEOUT_MS},a)})}}},{"./add-metadata":30,"./constants":38,"./promise":48}],32:[function(e,t,n){"use strict";var r=e("@braintree/asset-loader/load-script");t.exports={loadScript:r}},{"@braintree/asset-loader/load-script":3}],33:[function(e,t,n){"use strict";var i=e("./braintree-error"),o=e("./promise"),s=e("./errors");t.exports={verify:function(e){var t,n,r;return e?(r=e.name,t=e.client,n=e.authorization,t||n?n||"3.65.0"===t.getVersion()?o.resolve():o.reject(new i({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+t.getVersion()+") and "+r+" (version 3.65.0) components must be from the same SDK version."})):o.reject(new i({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+r+"."}))):o.reject(new i({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}}},{"./braintree-error":34,"./errors":44,"./promise":48}],34:[function(e,t,n){"use strict";var r=e("./enumerate");function i(e){if(!i.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}i.prototype=Object.create(Error.prototype),(i.prototype.constructor=i).types=r(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),i.findRootError=function(e){return e instanceof i&&e.details&&e.details.originalError?i.findRootError(e.details.originalError):e},t.exports=i},{"./enumerate":43}],35:[function(e,t,n){"use strict";var i=e("../is-verified-domain");t.exports={checkOrigin:function(e,t){var n,r=document.createElement("a");return r.href=t,n="https:"===r.protocol?r.host.replace(/:443$/,""):"http:"===r.protocol?r.host.replace(/:80$/,""):r.host,r.protocol+"//"+n===e||(r.href=e,i(e))}}},{"../is-verified-domain":45}],36:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":43}],37:[function(e,t,n){"use strict";var s=e("framebus"),r=e("./events"),a=e("./check-origin").checkOrigin,i=e("../braintree-error");function o(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new i({type:i.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}o.prototype.on=function(e,t){var n,r,i=t,o=this;this._isDestroyed||(this.merchantUrl&&(i=function(){a(this.origin,o.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),(r=Array.prototype.slice.call(arguments))[0]=n,r[1]=i,this._log("on",r),s.on.apply(s,r),this._listeners.push({eventName:e,handler:i,originalHandler:t}))},o.prototype.emit=function(e){var t;this._isDestroyed||((t=Array.prototype.slice.call(arguments))[0]=this._namespaceEvent(e),this._log("emit",t),s.emit.apply(s,t))},o.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),s.off.apply(s,t))},o.prototype.off=function(e,t){var n,r,i=t;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)(r=this._listeners[n]).originalHandler===t&&(i=r.handler);this._offDirect(e,i)}},o.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},o.prototype.teardown=function(){for(var e,t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},o.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},o.events=r,t.exports=o},{"../braintree-error":34,"./check-origin":35,"./events":36,framebus:15}],38:[function(e,t,n){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,ASSETS_URLS:{production:"https://assets.braintreegateway.com",sandbox:"https://assets.braintreegateway.com"},CLIENT_API_URLS:{production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},FRAUDNET_SOURCE:"BRAINTREE_SIGNIN",FRAUDNET_FNCLS:"fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",FRAUDNET_URL:"https://c.paypal.com/da/r/fb.js",GRAPHQL_URLS:{production:"https://payments.braintree-api.com/graphql",sandbox:"https://payments.sandbox.braintree-api.com/graphql"},INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.65.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.65.0"}},{}],39:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("./errors");t.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new r({type:i.METHOD_CALLED_AFTER_TEARDOWN.type,code:i.METHOD_CALLED_AFTER_TEARDOWN.code,message:e+" cannot be called after teardown."})}})}},{"./braintree-error":34,"./errors":44}],40:[function(e,t,n){"use strict";var r=e("./constants").ASSETS_URLS;t.exports={create:function(e){return r.production}}},{"./constants":38}],41:[function(e,t,n){"use strict";var s=e("../lib/vendor/polyfill").atob,a=e("../lib/constants").CLIENT_API_URLS;t.exports=function(e){var t,n,r,i,o={attrs:{},configUrl:""};return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)?(r=e.split("_"),i=r[0],n={merchantId:r.slice(2).join("_"),environment:i},o.environment=n.environment,o.attrs.tokenizationKey=e,o.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),o.environment=t.environment,o.attrs.authorizationFingerprint=t.authorizationFingerprint,o.configUrl=t.configUrl,o.graphQL=t.graphQL),o}},{"../lib/constants":38,"../lib/vendor/polyfill":50}],42:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("./promise"),o=e("./assets"),s=e("./errors"),a="3.65.0";t.exports={create:function(e){var t=i.resolve();return e.client?i.resolve(e.client):(window.braintree&&window.braintree.client||(t=o.loadScript({src:e.assetsUrl+"/web/"+a+"/js/client.min.js"}).catch(function(e){return i.reject(new r({type:s.CLIENT_SCRIPT_FAILED_TO_LOAD.type,code:s.CLIENT_SCRIPT_FAILED_TO_LOAD.code,message:s.CLIENT_SCRIPT_FAILED_TO_LOAD.message,details:{originalError:e}}))})),t.then(function(){return window.braintree.client.VERSION!==a?i.reject(new r({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+window.braintree.client.VERSION+") and "+e.name+" (version "+a+") components must be from the same SDK version."})):window.braintree.client.create({authorization:e.authorization,debug:e.debug})}))}}},{"./assets":32,"./braintree-error":34,"./errors":44,"./promise":48}],43:[function(e,t,n){"use strict";t.exports=function(e,n){return n=null==n?"":n,e.reduce(function(e,t){return e[t]=n+t,e},{})}},{}],44:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},CLIENT_SCRIPT_FAILED_TO_LOAD:{type:r.types.NETWORK,code:"CLIENT_SCRIPT_FAILED_TO_LOAD",message:"Braintree client script could not be loaded."},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"}}},{"./braintree-error":34}],45:[function(e,t,n){"use strict";var r,i={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=function(e){var t;return e=e.toLowerCase(),!!/^https:/.test(e)&&((r=r||document.createElement("a")).href=e,t=r.hostname.split(".").slice(-2).join("."),i.hasOwnProperty(t))}},{}],46:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],47:[function(e,t,n){"use strict";t.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],48:[function(e,t,n){"use strict";var r=e("promise-polyfill"),i=e("@braintree/extended-promise"),o="undefined"!=typeof Promise?Promise:r;i.suppressUnhandledPromiseMessage=!0,i.setPromise(o),t.exports=o},{"@braintree/extended-promise":4,"promise-polyfill":29}],49:[function(e,t,n){"use strict";t.exports=function(e){return e?"":".min"}},{}],50:[function(e,t,n){"use strict";var r="function"==typeof atob?window.atob:i;function i(e){var t,n,r,i,o,s,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="";if(!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");for(s=0;t=(63&a.indexOf(e.charAt(s++)))<<2|(i=a.indexOf(e.charAt(s++)))>>4&3,n=(15&i)<<4|(o=a.indexOf(e.charAt(s++)))>>2&15,r=(3&o)<<6|63&a.indexOf(e.charAt(s++)),c+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):""),s<e.length;);return c}t.exports={atob:function(e){return r.call(window,e)},_atob:i}},{}],51:[function(e,t,n){"use strict";var r=e("./shared/unionpay"),i=e("../lib/basic-component-verification"),o=e("../lib/braintree-error"),s=e("../lib/create-deferred-client"),a=e("../lib/create-assets-url"),c=e("../lib/analytics"),u=e("./shared/errors"),l=e("../lib/promise"),d=e("@braintree/wrap-promise");t.exports={create:d(function(n){var e="UnionPay";return i.verify({name:e,client:n.client,authorization:n.authorization}).then(function(){return s.create({authorization:n.authorization,client:n.client,debug:n.debug,assetsUrl:a.create(n.authorization),name:e})}).then(function(e){var t=e.getConfiguration();return n.client=e,t.gatewayConfiguration.unionPay&&!0===t.gatewayConfiguration.unionPay.enabled?(c.sendEvent(n.client,"unionpay.initialized"),new r(n)):l.reject(new o(u.UNIONPAY_NOT_ENABLED))})}),VERSION:"3.65.0"}},{"../lib/analytics":31,"../lib/basic-component-verification":33,"../lib/braintree-error":34,"../lib/create-assets-url":40,"../lib/create-deferred-client":42,"../lib/promise":48,"./shared/errors":53,"./shared/unionpay":54,"@braintree/wrap-promise":13}],52:[function(e,t,n){"use strict";var r=e("../../lib/enumerate");t.exports={events:r(["HOSTED_FIELDS_FETCH_CAPABILITIES","HOSTED_FIELDS_ENROLL","HOSTED_FIELDS_TOKENIZE"],"union-pay:"),HOSTED_FIELDS_FRAME_NAME:"braintreeunionpayhostedfields"}},{"../../lib/enumerate":43}],53:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={UNIONPAY_NOT_ENABLED:{type:r.types.MERCHANT,code:"UNIONPAY_NOT_ENABLED",message:"UnionPay is not enabled for this merchant."},UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID:{type:r.types.MERCHANT,code:"UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID",message:"Found an invalid Hosted Fields instance. Please use a valid Hosted Fields instance."},UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED:{type:r.types.MERCHANT,code:"UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED",message:"Could not find the Hosted Fields instance."},UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED:{type:r.types.MERCHANT,code:"UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED",message:"A card or a Hosted Fields instance is required. Please supply a card or a Hosted Fields instance."},UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES:{type:r.types.MERCHANT,code:"UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES",message:"Please supply either a card or a Hosted Fields instance, not both."},UNIONPAY_EXPIRATION_DATE_INCOMPLETE:{type:r.types.MERCHANT,code:"UNIONPAY_EXPIRATION_DATE_INCOMPLETE",message:"You must supply expiration month and year or neither."},UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID:{type:r.types.CUSTOMER,code:"UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID",message:"Enrollment failed due to user input error."},UNIONPAY_ENROLLMENT_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_ENROLLMENT_NETWORK_ERROR",message:"Could not enroll UnionPay card."},UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR",message:"Could not fetch card capabilities."},UNIONPAY_TOKENIZATION_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_TOKENIZATION_NETWORK_ERROR",message:"A tokenization network error occurred."},UNIONPAY_MISSING_MOBILE_PHONE_DATA:{type:r.types.MERCHANT,code:"UNIONPAY_MISSING_MOBILE_PHONE_DATA",message:"A `mobile` with `countryCode` and `number` is required."},UNIONPAY_FAILED_TOKENIZATION:{type:r.types.CUSTOMER,code:"UNIONPAY_FAILED_TOKENIZATION",message:"The supplied card data failed tokenization."}}},{"../../lib/braintree-error":34}],54:[function(e,t,n){"use strict";var a=e("../../lib/analytics"),c=e("../../lib/braintree-error"),o=e("../../lib/bus"),s=e("./constants"),u=e("../../lib/use-min"),r=e("../../lib/convert-methods-to-error"),l=e("./errors"),d=s.events,p=e("@braintree/iframer"),i=e("../../lib/methods"),f=e("@braintree/uuid"),_=e("../../lib/promise"),h=e("@braintree/wrap-promise");function E(e){this._options=e}E.prototype.fetchCapabilities=function(e){var r=this,n=this._options.client,t=e.card?e.card.number:null,i=e.hostedFields;return t&&i?_.reject(new c(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)):t?n.request({method:"get",endpoint:"payment_methods/credit_cards/capabilities",data:{_meta:{source:"unionpay"},creditCard:{number:t}}}).then(function(e){return a.sendEvent(n,"unionpay.capabilities-received"),e}).catch(function(e){var t=e.details&&e.details.httpStatus;return a.sendEvent(n,"unionpay.capabilities-failed"),403===t?_.reject(e):_.reject(new c({type:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.type,code:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.code,message:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.message,details:{originalError:e}}))}):i?i._bus?r._initializeHostedFields().then(function(){return new _(function(t,n){r._bus.emit(d.HOSTED_FIELDS_FETCH_CAPABILITIES,{hostedFields:i},function(e){e.err?n(new c(e.err)):t(e.payload)})})}):_.reject(new c(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID)):_.reject(new c(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))},E.prototype.enroll=function(e){var t,r=this,i=this._options.client,n=e.card,o=e.mobile,s=e.hostedFields;if(!o)return _.reject(new c(l.UNIONPAY_MISSING_MOBILE_PHONE_DATA));if(s)return s._bus?n?_.reject(new c(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)):new _(function(t,n){r._initializeHostedFields().then(function(){r._bus.emit(d.HOSTED_FIELDS_ENROLL,{hostedFields:s,mobile:o},function(e){e.err?n(new c(e.err)):t(e.payload)})})}):_.reject(new c(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID));if(n&&n.number){if(t={_meta:{source:"unionpay"},unionPayEnrollment:{number:n.number,mobileCountryCode:o.countryCode,mobileNumber:o.number}},n.expirationDate)t.unionPayEnrollment.expirationDate=n.expirationDate;else if(n.expirationMonth||n.expirationYear){if(!n.expirationMonth||!n.expirationYear)return _.reject(new c(l.UNIONPAY_EXPIRATION_DATE_INCOMPLETE));t.unionPayEnrollment.expirationYear=n.expirationYear,t.unionPayEnrollment.expirationMonth=n.expirationMonth}return i.request({method:"post",endpoint:"union_pay_enrollments",data:t}).then(function(e){return a.sendEvent(i,"unionpay.enrollment-succeeded"),{enrollmentId:e.unionPayEnrollmentId,smsCodeRequired:e.smsCodeRequired}}).catch(function(e){var t,n=e.details&&e.details.httpStatus;return 403===n?t=e:n<500?(t=new c(l.UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID)).details={originalError:e}:(t=new c(l.UNIONPAY_ENROLLMENT_NETWORK_ERROR)).details={originalError:e},a.sendEvent(i,"unionpay.enrollment-failed"),_.reject(t)})}return _.reject(new c(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))},E.prototype.tokenize=function(e){var t,r=this,i=this._options.client,n=e.card,o=e.hostedFields;return n&&o?_.reject(new c(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)):n?(t={_meta:{source:"unionpay"},creditCard:{number:e.card.number,options:{unionPayEnrollment:{id:e.enrollmentId}}}},e.smsCode&&(t.creditCard.options.unionPayEnrollment.smsCode=e.smsCode),n.expirationDate?t.creditCard.expirationDate=n.expirationDate:n.expirationMonth&&n.expirationYear&&(t.creditCard.expirationYear=n.expirationYear,t.creditCard.expirationMonth=n.expirationMonth),e.card.cvv&&(t.creditCard.cvv=e.card.cvv),i.request({method:"post",endpoint:"payment_methods/credit_cards",data:t}).then(function(e){var t=e.creditCards[0];return delete t.consumed,delete t.threeDSecureInfo,a.sendEvent(i,"unionpay.nonce-received"),t}).catch(function(e){var t,n=e.details&&e.details.httpStatus;return a.sendEvent(i,"unionpay.nonce-failed"),403===n?t=e:n<500?(t=new c(l.UNIONPAY_FAILED_TOKENIZATION)).details={originalError:e}:(t=new c(l.UNIONPAY_TOKENIZATION_NETWORK_ERROR)).details={originalError:e},_.reject(t)})):o?o._bus?new _(function(t,n){r._initializeHostedFields().then(function(){r._bus.emit(d.HOSTED_FIELDS_TOKENIZE,e,function(e){e.err?n(new c(e.err)):t(e.payload)})})}):_.reject(new c(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID)):_.reject(new c(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))},E.prototype.teardown=function(){return this._bus&&(this._hostedFieldsFrame.parentNode.removeChild(this._hostedFieldsFrame),this._bus.teardown()),r(this,i(E.prototype)),_.resolve()},E.prototype._initializeHostedFields=function(){var e,n,r=f(),i=this;return this._hostedFieldsInitializePromise||(this._hostedFieldsInitializePromise=new _(function(t){e=i._options.client.getConfiguration().gatewayConfiguration.assetsUrl,n=i._options.client.getConfiguration().isDebug,i._bus=new o({channel:r,merchantUrl:location.href}),i._hostedFieldsFrame=p({name:s.HOSTED_FIELDS_FRAME_NAME+"_"+r,src:e+"/web/3.65.0/html/unionpay-hosted-fields-frame"+u(n)+".html",height:0,width:0}),i._bus.on(o.events.CONFIGURATION_REQUEST,function(e){e(i._options.client),t()}),document.body.appendChild(i._hostedFieldsFrame)})),this._hostedFieldsInitializePromise},t.exports=h.wrapPrototype(E)},{"../../lib/analytics":31,"../../lib/braintree-error":34,"../../lib/bus":37,"../../lib/convert-methods-to-error":39,"../../lib/methods":47,"../../lib/promise":48,"../../lib/use-min":49,"./constants":52,"./errors":53,"@braintree/iframer":5,"@braintree/uuid":9,"@braintree/wrap-promise":13}]},{},[51])(51)});