!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).unionpay=e()}}(function(){var e;return function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return i(n?n:t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),i=e("./lib/default-attributes"),o=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),n=o({},i,e);return n.style&&"string"!=typeof n.style&&(o(t.style,n.style),delete n.style),r(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":2,"./lib/default-attributes":3,"./lib/set-attributes":4}],2:[function(e,t,n){"use strict";t.exports=function(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}},{}],3:[function(e,t,n){"use strict";t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],4:[function(e,t,n){"use strict";t.exports=function(e,t){var n;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],null==n?e.removeAttribute(r):e.setAttribute(r,n))}},{}],5:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],6:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],7:[function(e,t,n){"use strict";function r(e,t){return t?void e.then(function(e){t(null,e)})["catch"](function(e){t(e)}):e}t.exports=r},{}],8:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments),r=n[n.length-1];return"function"==typeof r&&(t=n.pop(),t=o(i(t))),s(e.apply(this,n),t)}}var i=e("./lib/deferred"),o=e("./lib/once"),s=e("./lib/promise-or-callback");r.wrapPrototype=function(e,t){var n,i,o;return t=t||{},i=t.ignoreMethods||[],o=t.transformPrivateMethods===!0,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,r="constructor"!==t&&"function"==typeof e.prototype[t],s=-1===i.indexOf(t);return n=o?!0:"_"!==t.charAt(0),r&&n&&s}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=r(n)}),e},t.exports=r},{"./lib/deferred":5,"./lib/once":6,"./lib/promise-or-callback":7}],9:[function(t,n,r){(function(t){"use strict";!function(i,o){"object"==typeof r&&"undefined"!=typeof n?n.exports=o("undefined"==typeof t?i:t):"function"==typeof e&&e.amd?e([],function(){return o(i)}):i.framebus=o(i)}(this,function(e){function t(e){return null==e?!1:null==e.Window?!1:e.constructor!==e.Window?!1:(A.push(e),!0)}function n(e){var t,n={};for(t in m)m.hasOwnProperty(t)&&(n[t]=m[t]);return n._origin=e||"*",n}function r(e){var t,n,r=s(this);return a(e)?!1:a(r)?!1:(n=Array.prototype.slice.call(arguments,1),t=c(e,n,r),t===!1?!1:(E(y.top||y.self,t,r),!0))}function i(e,t){var n=s(this);return I(e,t,n)?!1:(O[n]=O[n]||{},O[n][e]=O[n][e]||[],O[n][e].push(t),!0)}function o(e,t){var n,r,i=s(this);if(I(e,t,i))return!1;if(r=O[i]&&O[i][e],!r)return!1;for(n=0;n<r.length;n++)if(r[n]===t)return r.splice(n,1),!0;return!1}function s(e){return e&&e._origin||"*"}function a(e){return"string"!=typeof e}function c(e,t,n){var r=!1,i={event:e,origin:n},o=t[t.length-1];"function"==typeof o&&(i.reply=h(o,n),t=t.slice(0,-1)),i.args=t;try{r=T+JSON.stringify(i)}catch(s){throw new Error("Could not stringify event: "+s.message)}return r}function u(e){var t,n,r,i;if(e.data.slice(0,T.length)!==T)return!1;try{t=JSON.parse(e.data.slice(T.length))}catch(o){return!1}return null!=t.reply&&(n=e.origin,r=e.source,i=t.reply,t.reply=function(e){var t=c(i,[e],n);return t===!1?!1:void r.postMessage(t,n)},t.args.push(t.reply)),t}function l(t){y||(y=t||e,y.addEventListener?y.addEventListener("message",d,!1):y.attachEvent?y.attachEvent("onmessage",d):null===y.onmessage?y.onmessage=d:y=null)}function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}function d(e){var t;a(e.data)||(t=u(e),t&&(p("*",t.event,t.args,e),p(e.origin,t.event,t.args,e),N(e.data,t.origin,e.source)))}function p(e,t,n,r){var i;if(O[e]&&O[e][t])for(i=0;i<O[e][t].length;i++)O[e][t][i].apply(r,n)}function _(e){return e.top!==e?!1:null==e.opener?!1:e.opener===e?!1:e.opener.closed===!0?!1:!0}function E(e,t,n){var r;try{for(e.postMessage(t,n),_(e)&&E(e.opener.top,t,n),r=0;r<e.frames.length;r++)E(e.frames[r],t,n)}catch(i){}}function N(e,t,n){var r,i;for(r=A.length-1;r>=0;r--)i=A[r],i.closed===!0?A=A.slice(r,1):n!==i&&E(i.top,e,t)}function h(e,t){function n(i,o){e(i,o),m.target(t).unsubscribe(r,n)}var r=f();return m.target(t).subscribe(r,n),r}function I(e,t,n){return a(e)?!0:"function"!=typeof t?!0:a(n)?!0:!1}var y,m,A=[],O={},T="/*framebus*/";return l(),m={target:n,include:t,publish:r,pub:r,trigger:r,emit:r,subscribe:i,sub:i,on:i,unsubscribe:o,unsub:o,off:o}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){!function(e){function n(){}function r(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function o(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:a)(t.promise,e._value);var r;try{r=n(e._value)}catch(i){return void a(t.promise,i)}s(t.promise,r)}))}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l(r(n,t),e)}e._state=1,e._value=t,c(e)}catch(o){a(e,o)}}function a(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)o(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(r){if(n)return;n=!0,a(t,r)}}var f=setTimeout;i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var r=new this.constructor(n);return o(this,new u(e,t,r)),r},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(o,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(e){r(o,e)},n)}t[o]=s,0===--i&&e(t)}catch(c){n(c)}}if(0===t.length)return e([]);for(var i=t.length,o=0;o<t.length;o++)r(o,t[o])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){f(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},"undefined"!=typeof t&&t.exports?t.exports=i:e.Promise||(e.Promise=i)}(this)},{}],11:[function(e,t,n){"use strict";function r(e,t){var n,r=t?o(t):{},a=i(e.authorization).attrs,c=o(e.analyticsMetadata);r.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,a.tokenizationKey?r.tokenizationKey=a.tokenizationKey:r.authorizationFingerprint=a.authorizationFingerprint,r}var i=e("./create-authorization-data"),o=e("./json-clone"),s=e("./constants");t.exports=r},{"./constants":18,"./create-authorization-data":20,"./json-clone":24}],12:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function i(e,t,n){var i=e.getConfiguration(),a=e._request,c=r(Date.now()),u=i.gatewayConfiguration.analytics.url,l={analytics:[{kind:o.ANALYTICS_PREFIX+t,timestamp:c}]};a({url:u,method:"post",data:s(i,l),timeout:o.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var o=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:i}},{"./add-metadata":11,"./constants":18}],13:[function(e,t,n){"use strict";function r(e){var t,n,r;return e?(r=e.name,t=e.client,null==t?o.reject(new i({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+r+"."})):(n=t.getVersion(),n!==a?o.reject(new i({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and "+r+" (version "+a+") components must be from the same SDK version."})):o.resolve())):o.reject(new i({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}var i=e("./braintree-error"),o=e("./promise"),s=e("./errors"),a="3.26.0";t.exports={verify:r}},{"./braintree-error":14,"./errors":22,"./promise":26}],14:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var i=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":21}],15:[function(e,t,n){"use strict";function r(e,t){var n,r,o=document.createElement("a");return o.href=t,r="https:"===o.protocol?o.host.replace(/:443$/,""):"http:"===o.protocol?o.host.replace(/:80$/,""):o.host,n=o.protocol+"//"+r,n===e?!0:(o.href=e,i(e))}var i=e("../is-whitelisted-domain");t.exports={checkOrigin:r}},{"../is-whitelisted-domain":23}],16:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":21}],17:[function(e,t,n){"use strict";function r(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new a({type:a.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var i=e("framebus"),o=e("./events"),s=e("./check-origin").checkOrigin,a=e("../braintree-error");r.prototype.on=function(e,t){var n,r,o=t,a=this;this._isDestroyed||(this.merchantUrl&&(o=function(){s(this.origin,a.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=o,this._log("on",r),i.on.apply(i,r),this._listeners.push({eventName:e,handler:o,originalHandler:t}))},r.prototype.emit=function(e){var t;this._isDestroyed||(t=Array.prototype.slice.call(arguments),t[0]=this._namespaceEvent(e),this._log("emit",t),i.emit.apply(i,t))},r.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),i.off.apply(i,t))},r.prototype.off=function(e,t){var n,r,i=t;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===t&&(i=r.handler);this._offDirect(e,i)}},r.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},r.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},r.events=o,t.exports=r},{"../braintree-error":14,"./check-origin":15,"./events":16,framebus:9}],18:[function(e,t,n){"use strict";var r="3.26.0",i="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:i,BRAINTREE_LIBRARY_VERSION:"braintree/"+i+"/"+r}},{}],19:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:i.METHOD_CALLED_AFTER_TEARDOWN.type,code:i.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":14,"./errors":22}],20:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function i(e){var t=e.split("_"),n=t[0],r=t.slice(2).join("_");return{merchantId:r,environment:n}}function o(e){var t,n,o={attrs:{},configUrl:""};return r(e)?(n=i(e),o.attrs.tokenizationKey=e,o.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),o.attrs.authorizationFingerprint=t.authorizationFingerprint,o.configUrl=t.configUrl),o}var s=e("../lib/vendor/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=o},{"../lib/vendor/polyfill":28}],21:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],22:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":14}],23:[function(e,t,n){"use strict";function r(e){return e.split(".").slice(-2).join(".")}function i(e){var t;return e=e.toLowerCase(),/^https:/.test(e)?(o=o||document.createElement("a"),o.href=e,t=r(o.hostname),s.hasOwnProperty(t)):!1}var o,s={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=i},{}],24:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],25:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],26:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":10}],27:[function(e,t,n){"use strict";function r(e){return e?"":".min"}t.exports=r},{}],28:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,i,o,s,a,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do i=l.indexOf(e.charAt(c++)),o=l.indexOf(e.charAt(c++)),s=l.indexOf(e.charAt(c++)),a=l.indexOf(e.charAt(c++)),t=(63&i)<<2|o>>4&3,n=(15&o)<<4|s>>2&15,r=(3&s)<<6|63&a,f+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(c<e.length);return f}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],29:[function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}t.exports=r},{}],30:[function(e,t,n){"use strict";function r(e){return o.verify({name:"UnionPay",client:e.client}).then(function(){var t=e.client.getConfiguration();return t.gatewayConfiguration.unionPay&&t.gatewayConfiguration.unionPay.enabled===!0?(a.sendEvent(e.client,"unionpay.initialized"),new i(e)):l.reject(new s(c.UNIONPAY_NOT_ENABLED))})}var i=e("./shared/unionpay"),o=e("../lib/basic-component-verification"),s=e("../lib/braintree-error"),a=e("../lib/analytics"),c=e("./shared/errors"),u="3.26.0",l=e("../lib/promise"),f=e("@braintree/wrap-promise");t.exports={create:f(r),VERSION:u}},{"../lib/analytics":12,"../lib/basic-component-verification":13,"../lib/braintree-error":14,"../lib/promise":26,"./shared/errors":32,"./shared/unionpay":33,"@braintree/wrap-promise":8}],31:[function(e,t,n){"use strict";var r=e("../../lib/enumerate");t.exports={events:r(["HOSTED_FIELDS_FETCH_CAPABILITIES","HOSTED_FIELDS_ENROLL","HOSTED_FIELDS_TOKENIZE"],"union-pay:"),HOSTED_FIELDS_FRAME_NAME:"braintreeunionpayhostedfields"}},{"../../lib/enumerate":21}],32:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={UNIONPAY_NOT_ENABLED:{type:r.types.MERCHANT,code:"UNIONPAY_NOT_ENABLED",message:"UnionPay is not enabled for this merchant."},UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID:{type:r.types.MERCHANT,code:"UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID",message:"Found an invalid Hosted Fields instance. Please use a valid Hosted Fields instance."},UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED:{type:r.types.MERCHANT,code:"UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED",message:"Could not find the Hosted Fields instance."},UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED:{type:r.types.MERCHANT,code:"UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED",message:"A card or a Hosted Fields instance is required. Please supply a card or a Hosted Fields instance."},UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES:{type:r.types.MERCHANT,code:"UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES",message:"Please supply either a card or a Hosted Fields instance, not both."},UNIONPAY_EXPIRATION_DATE_INCOMPLETE:{type:r.types.MERCHANT,code:"UNIONPAY_EXPIRATION_DATE_INCOMPLETE",message:"You must supply expiration month and year or neither."},UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID:{type:r.types.CUSTOMER,code:"UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID",message:"Enrollment failed due to user input error."},UNIONPAY_ENROLLMENT_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_ENROLLMENT_NETWORK_ERROR",message:"Could not enroll UnionPay card."},UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR",message:"Could not fetch card capabilities."},UNIONPAY_TOKENIZATION_NETWORK_ERROR:{type:r.types.NETWORK,code:"UNIONPAY_TOKENIZATION_NETWORK_ERROR",message:"A tokenization network error occurred."},UNIONPAY_MISSING_MOBILE_PHONE_DATA:{type:r.types.MERCHANT,code:"UNIONPAY_MISSING_MOBILE_PHONE_DATA",message:"A `mobile` with `countryCode` and `number` is required."},UNIONPAY_FAILED_TOKENIZATION:{type:r.types.CUSTOMER,code:"UNIONPAY_FAILED_TOKENIZATION",message:"The supplied card data failed tokenization."}}},{"../../lib/braintree-error":14}],33:[function(e,t,n){"use strict";function r(e){this._options=e}var i=e("../../lib/analytics"),o=e("../../lib/braintree-error"),s=e("../../lib/bus"),a=e("./constants"),c=e("../../lib/use-min"),u=e("../../lib/convert-methods-to-error"),l=e("./errors"),f=a.events,d=e("@braintree/iframer"),p=e("../../lib/methods"),_="3.26.0",E=e("../../lib/vendor/uuid"),N=e("../../lib/promise"),h=e("@braintree/wrap-promise");r.prototype.fetchCapabilities=function(e){var t=this,n=this._options.client,r=e.card?e.card.number:null,s=e.hostedFields;return r&&s?N.reject(new o(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)):r?n.request({method:"get",endpoint:"payment_methods/credit_cards/capabilities",data:{_meta:{source:"unionpay"},creditCard:{number:r}}}).then(function(e){return i.sendEvent(n,"unionpay.capabilities-received"),e})["catch"](function(e){var t=e.details&&e.details.httpStatus;return i.sendEvent(n,"unionpay.capabilities-failed"),403===t?N.reject(e):N.reject(new o({type:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.type,code:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.code,message:l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.message,details:{originalError:e}}))}):s?s._bus?new N(function(e,n){t._initializeHostedFields(function(){t._bus.emit(f.HOSTED_FIELDS_FETCH_CAPABILITIES,{hostedFields:s},function(t){return t.err?void n(new o(t.err)):void e(t.payload)})})}):N.reject(new o(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID)):N.reject(new o(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))},r.prototype.enroll=function(e){var t,n=this,r=this._options.client,s=e.card,a=e.mobile,c=e.hostedFields;if(!a)return N.reject(new o(l.UNIONPAY_MISSING_MOBILE_PHONE_DATA));if(c)return c._bus?s?N.reject(new o(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)):new N(function(e,t){n._initializeHostedFields(function(){n._bus.emit(f.HOSTED_FIELDS_ENROLL,{hostedFields:c,mobile:a},function(n){return n.err?void t(new o(n.err)):void e(n.payload)})})}):N.reject(new o(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID));if(s&&s.number){if(t={_meta:{source:"unionpay"},unionPayEnrollment:{number:s.number,mobileCountryCode:a.countryCode,mobileNumber:a.number}},s.expirationDate)t.unionPayEnrollment.expirationDate=s.expirationDate;else if(s.expirationMonth||s.expirationYear){if(!s.expirationMonth||!s.expirationYear)return N.reject(new o(l.UNIONPAY_EXPIRATION_DATE_INCOMPLETE));t.unionPayEnrollment.expirationYear=s.expirationYear,t.unionPayEnrollment.expirationMonth=s.expirationMonth}return r.request({method:"post",endpoint:"union_pay_enrollments",data:t}).then(function(e){return i.sendEvent(r,"unionpay.enrollment-succeeded"),{enrollmentId:e.unionPayEnrollmentId,smsCodeRequired:e.smsCodeRequired}})["catch"](function(e){var t,n=e.details&&e.details.httpStatus;return 403===n?t=e:500>n?(t=new o(l.UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID),t.details={originalError:e}):(t=new o(l.UNIONPAY_ENROLLMENT_NETWORK_ERROR),t.details={originalError:e}),i.sendEvent(r,"unionpay.enrollment-failed"),N.reject(t)})}return N.reject(new o(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))},r.prototype.tokenize=function(e){var t,n=this,r=this._options.client,s=e.card,a=e.hostedFields;return s&&a?N.reject(new o(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES)):s?(t={_meta:{source:"unionpay"},creditCard:{number:e.card.number,options:{unionPayEnrollment:{id:e.enrollmentId}}}},e.smsCode&&(t.creditCard.options.unionPayEnrollment.smsCode=e.smsCode),s.expirationDate?t.creditCard.expirationDate=s.expirationDate:s.expirationMonth&&s.expirationYear&&(t.creditCard.expirationYear=s.expirationYear,t.creditCard.expirationMonth=s.expirationMonth),e.card.cvv&&(t.creditCard.cvv=e.card.cvv),r.request({method:"post",endpoint:"payment_methods/credit_cards",data:t}).then(function(e){var t=e.creditCards[0];return delete t.consumed,delete t.threeDSecureInfo,i.sendEvent(r,"unionpay.nonce-received"),t})["catch"](function(e){var t,n=e.details&&e.details.httpStatus;return i.sendEvent(r,"unionpay.nonce-failed"),403===n?t=e:500>n?(t=new o(l.UNIONPAY_FAILED_TOKENIZATION),t.details={originalError:e}):(t=new o(l.UNIONPAY_TOKENIZATION_NETWORK_ERROR),t.details={originalError:e}),N.reject(t)})):a?a._bus?new N(function(t,r){n._initializeHostedFields(function(){n._bus.emit(f.HOSTED_FIELDS_TOKENIZE,e,function(e){return e.err?void r(new o(e.err)):void t(e.payload)})})}):N.reject(new o(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID)):N.reject(new o(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED))},r.prototype.teardown=function(){return this._bus&&(this._hostedFieldsFrame.parentNode.removeChild(this._hostedFieldsFrame),this._bus.teardown()),u(this,p(r.prototype)),N.resolve()},r.prototype._initializeHostedFields=function(e){var t,n,r=E();return this._bus?void e():(t=this._options.client.getConfiguration().gatewayConfiguration.assetsUrl,n=this._options.client.getConfiguration().isDebug,this._bus=new s({channel:r,merchantUrl:location.href}),this._hostedFieldsFrame=d({name:a.HOSTED_FIELDS_FRAME_NAME+"_"+r,src:t+"/web/"+_+"/html/unionpay-hosted-fields-frame"+c(n)+".html",height:0,width:0}),this._bus.on(s.events.CONFIGURATION_REQUEST,function(t){t(this._options.client),e()}.bind(this)),void document.body.appendChild(this._hostedFieldsFrame))},t.exports=h.wrapPrototype(r)},{"../../lib/analytics":12,"../../lib/braintree-error":14,"../../lib/bus":17,"../../lib/convert-methods-to-error":19,"../../lib/methods":25,"../../lib/promise":26,"../../lib/use-min":27,"../../lib/vendor/uuid":29,"./constants":31,"./errors":32,"@braintree/iframer":1,"@braintree/wrap-promise":8}]},{},[30])(30)});