!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).venmo=e()}}(function(){return function(){function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){return o(t[s][1][e]||e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}return e}()({1:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/Android/.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";var r=e("./is-edge"),o=e("./is-samsung");t.exports=function(e){return e=e||navigator.userAgent,!(-1===e.indexOf("Chrome")&&-1===e.indexOf("CriOS")||r(e)||o(e))}},{"./is-edge":3,"./is-samsung":8}],3:[function(e,t,n){"use strict";t.exports=function(e){return e=e||navigator.userAgent,-1!==e.indexOf("Edge/")}},{}],4:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/FxiOS/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],5:[function(e,t,n){"use strict";function r(e){return e.match(i)}var o=e("./is-ios"),i=/webkit/i;t.exports=function(e){return e=e||navigator.userAgent,o(e)&&r(e)&&-1===e.indexOf("CriOS")}},{"./is-ios":6}],6:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/iPhone|iPod|iPad/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],7:[function(e,t,n){(function(n){"use strict";var r=e("./is-ios-firefox");t.exports=function(e){return e=e||n.navigator.userAgent,r(e)||/iPhone|iPod|iPad|Mobile|Tablet/i.test(e)&&/Firefox/i.test(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ios-firefox":4}],8:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/SamsungBrowser/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],10:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],11:[function(e,t,n){"use strict";function r(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}t.exports=r},{}],12:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments);return"function"==typeof n[n.length-1]&&(t=n.pop(),t=i(o(t))),s(e.apply(this,n),t)}}var o=e("./lib/deferred"),i=e("./lib/once"),s=e("./lib/promise-or-callback");r.wrapPrototype=function(e,t){var n,o,i;return t=t||{},o=t.ignoreMethods||[],i=!0===t.transformPrivateMethods,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,r="constructor"!==t&&"function"==typeof e.prototype[t],s=-1===o.indexOf(t);return n=!!i||"_"!==t.charAt(0),r&&n&&s}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=r(n)}),e},t.exports=r},{"./lib/deferred":9,"./lib/once":10,"./lib/promise-or-callback":11}],13:[function(e,t,n){"use strict";function r(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function s(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?a:c)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void c(t.promise,e)}a(t.promise,r)})}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void l(o(n,t),e)}e._state=1,e._value=t,u(e)}catch(t){c(e,t)}}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}var d=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return s(this,new f(e,t,n)),n},i.all=function(e){return new i(function(t,n){function r(e,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){r(e,t)},n)}o[e]=s,0==--i&&t(o)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);for(var i=o.length,s=0;s<o.length;s++)r(s,o[s])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){d(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=i},{}],14:[function(e,t,n){"use strict";function r(e,t){var n,r=t?i(t):{},a=o(e.authorization).attrs,c=i(e.analyticsMetadata);r.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,a.tokenizationKey?r.tokenizationKey=a.tokenizationKey:r.authorizationFingerprint=a.authorizationFingerprint,r}var o=e("./create-authorization-data"),i=e("./json-clone"),s=e("./constants");t.exports=r},{"./constants":18,"./create-authorization-data":20,"./json-clone":23}],15:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function o(e,t,n){var o=e.getConfiguration(),a=e._request,c=r(Date.now()),u=o.gatewayConfiguration.analytics.url,f={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:c}]};a({url:u,method:"post",data:s(o,f),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:o}},{"./add-metadata":14,"./constants":18}],16:[function(e,t,n){"use strict";function r(e){var t,n,r;return e?(r=e.name,null==(t=e.client)?i.reject(new o({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+r+"."})):(n=t.getVersion(),n!==a?i.reject(new o({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and "+r+" (version "+a+") components must be from the same SDK version."})):i.resolve())):i.reject(new o({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}var o=e("./braintree-error"),i=e("./promise"),s=e("./errors"),a="3.33.0";t.exports={verify:r}},{"./braintree-error":17,"./errors":22,"./promise":25}],17:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":21}],18:[function(e,t,n){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.33.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.33.0"}},{}],19:[function(e,t,n){"use strict";var r=e("./braintree-error"),o=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":17,"./errors":22}],20:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),n=t[0];return{merchantId:t.slice(2).join("_"),environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return r(e)?(n=o(e),i.attrs.tokenizationKey=e,i.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl,i.graphQLUrl=t.graphQLUrl),i}var s=e("../lib/vendor/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/vendor/polyfill":27}],21:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],22:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":17}],23:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],24:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],25:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":13}],26:[function(e,t,n){(function(e){"use strict";function n(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&"[object Array]"===Object.prototype.toString.call(e)||!1}function o(t){var n;return t=t||e.location.href,/\?/.test(t)?(n=t.replace(/#.*$/,"").replace(/^.*\?/,"").split("&"),n.reduce(function(e,t){var n=t.split("="),r=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);return e[r]=o,e},{})):{}}function i(e,t){var n,o,s,a=[];for(s in e)e.hasOwnProperty(s)&&(o=e[s],n=t?r(e)?t+"[]":t+"["+s+"]":s,"object"==typeof o?a.push(i(o,n)):a.push(encodeURIComponent(n)+"="+encodeURIComponent(o)));return a.join("&")}function s(e,t){return e=e||"",null!=t&&"object"==typeof t&&n(t)&&(e+=-1===e.indexOf("?")?"?":"",e+=-1!==e.indexOf("=")?"&":"",e+=i(t)),e}t.exports={parse:o,stringify:i,queryify:s}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],27:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,o,i,s,a,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do{o=f.indexOf(e.charAt(c++)),i=f.indexOf(e.charAt(c++)),s=f.indexOf(e.charAt(c++)),a=f.indexOf(e.charAt(c++)),t=(63&o)<<2|i>>4&3,n=(15&i)<<4|s>>2&15,r=(3&s)<<6|63&a,l+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"")}while(c<e.length);return l}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],28:[function(e,t,n){"use strict";function r(e){return s.verify({name:"Venmo",client:e.client}).then(function(){var t;return e.client.getConfiguration().gatewayConfiguration.payWithVenmo?(t=new f(e),i.sendEvent(e.client,"venmo.initialized"),t._initialize()):l.reject(new u(a.VENMO_NOT_ENABLED))})}function o(e){return d.isBrowserSupported(e)}var i=e("../lib/analytics"),s=e("../lib/basic-component-verification"),a=e("./shared/errors"),c=e("@braintree/wrap-promise"),u=e("../lib/braintree-error"),f=e("./venmo"),l=e("../lib/promise"),d=e("./shared/supports-venmo");t.exports={create:c(r),isBrowserSupported:o,VERSION:"3.33.0"}},{"../lib/analytics":15,"../lib/basic-component-verification":16,"../lib/braintree-error":17,"../lib/promise":25,"./shared/errors":31,"./shared/supports-venmo":32,"./venmo":33,"@braintree/wrap-promise":12}],29:[function(e,t,n){"use strict";var r=e("@braintree/browser-detection/is-android"),o=e("@braintree/browser-detection/is-chrome"),i=e("@braintree/browser-detection/is-ios"),s=e("@braintree/browser-detection/is-ios-safari"),a=e("@braintree/browser-detection/is-samsung"),c=e("@braintree/browser-detection/is-mobile-firefox");t.exports={isAndroid:r,isChrome:o,isIos:i,isIosSafari:s,isSamsungBrowser:a,isMobileFirefox:c}},{"@braintree/browser-detection/is-android":1,"@braintree/browser-detection/is-chrome":2,"@braintree/browser-detection/is-ios":6,"@braintree/browser-detection/is-ios-safari":5,"@braintree/browser-detection/is-mobile-firefox":7,"@braintree/browser-detection/is-samsung":8}],30:[function(e,t,n){"use strict";t.exports={DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY:500,PROCESS_RESULTS_DELAY:1e3,VENMO_OPEN_URL:"https://venmo.com/braintree/checkout"}},{}],31:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={VENMO_NOT_ENABLED:{type:r.types.MERCHANT,code:"VENMO_NOT_ENABLED",message:"Venmo is not enabled for this merchant."},VENMO_TOKENIZATION_REQUEST_ACTIVE:{type:r.types.MERCHANT,code:"VENMO_TOKENIZATION_REQUEST_ACTIVE",message:"Another tokenization request is active."},VENMO_APP_FAILED:{type:r.types.UNKNOWN,code:"VENMO_APP_FAILED",message:"Venmo app encountered a problem."},VENMO_APP_CANCELED:{type:r.types.CUSTOMER,code:"VENMO_APP_CANCELED",message:"Venmo app authorization was canceled."},VENMO_CANCELED:{type:r.types.CUSTOMER,code:"VENMO_CANCELED",message:"User canceled Venmo authorization, or Venmo app is not available."}}},{"../../lib/braintree-error":17}],32:[function(e,t,n){"use strict";function r(e){var t=o.isAndroid()&&o.isChrome(),n=o.isIos()&&o.isChrome(),r=o.isIosSafari()||t,i=n||o.isSamsungBrowser()||o.isMobileFirefox();return e=e||{allowNewBrowserTab:!0},r||e.allowNewBrowserTab&&i}var o=e("./browser-detection");t.exports={isBrowserSupported:r}},{"./browser-detection":29}],33:[function(e,t,n){(function(n){"use strict";function r(e){var t;this._client=e.client,t=this._client.getConfiguration(),this._isDebug=t.isDebug,this._assetsUrl=t.gatewayConfiguration.assetsUrl+"/web/"+m,this._allowNewBrowserTab=!1!==e.allowNewBrowserTab,this._profileId=e.profileId}function o(){return n.location.hash.substring(1).split("&").reduce(function(e,t){var n=t.split("="),r=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);return e[r]=o,e},{})}function i(){"function"==typeof n.history.replaceState&&history.pushState({},"",n.location.href.slice(0,n.location.href.indexOf("#")))}function s(e,t){return{nonce:t?t.nonce:e.paymentMethodNonce,type:"VenmoAccount",details:{username:e.username}}}function a(){var e;return void 0!==n.document.hidden?e="visibilitychange":void 0!==n.document.msHidden?e="msvisibilitychange":void 0!==n.document.webkitHidden&&(e="webkitvisibilitychange"),e}var c=e("../lib/analytics"),u=e("./shared/supports-venmo"),f=e("./shared/constants"),l=e("./shared/errors"),d=e("../lib/querystring"),p=e("../lib/methods"),h=e("../lib/convert-methods-to-error"),_=e("@braintree/wrap-promise"),E=e("../lib/braintree-error"),y=e("../lib/promise"),m="3.33.0";r.prototype._initialize=function(){var e=n.location.href.replace(n.location.hash,""),t=d.parse(n.location.href),r=this._client.getConfiguration(),o=r.gatewayConfiguration.payWithVenmo,i=this._client.getConfiguration().analyticsMetadata,s={_meta:{version:i.sdkVersion,integration:i.integration,platform:i.platform,sessionId:i.sessionId}};return t["x-success"]=e+"#venmoSuccess=1",t["x-cancel"]=e+"#venmoCancel=1",t["x-error"]=e+"#venmoError=1",t.ua=n.navigator.userAgent,t.braintree_merchant_id=this._profileId||o.merchantId,t.braintree_access_token=o.accessToken,t.braintree_environment=o.environment,t.braintree_sdk_data=btoa(JSON.stringify(s)),this._url=f.VENMO_OPEN_URL+"?"+d.stringify(t),y.resolve(this)},r.prototype.isBrowserSupported=function(){return u.isBrowserSupported({allowNewBrowserTab:this._allowNewBrowserTab})},r.prototype.hasTokenizationResult=function(){var e=o();return void 0!==(e.venmoSuccess||e.venmoError||e.venmoCancel)},r.prototype.tokenize=function(){var e=this;return!0===this._tokenizationInProgress?y.reject(new E(l.VENMO_TOKENIZATION_REQUEST_ACTIVE)):this.hasTokenizationResult()?this._processResults():new y(function(t,r){e._tokenizationInProgress=!0,e._previousHash=n.location.hash,n.open(e._url),e._visibilityChangeListener=function(){n.document.hidden||(e._tokenizationInProgress=!1,setTimeout(function(){e._processResults().then(t).catch(r).then(function(){n.location.hash=e._previousHash,e._removeVisibilityEventListener(),delete e._visibilityChangeListener})},f.PROCESS_RESULTS_DELAY))},setTimeout(function(){n.document.addEventListener(a(),e._visibilityChangeListener)},f.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY)})},r.prototype.teardown=function(){return this._removeVisibilityEventListener(),h(this,p(r.prototype)),y.resolve()},r.prototype._removeVisibilityEventListener=function(){n.document.removeEventListener(a(),this._visibilityChangeListener)},r.prototype._processResults=function(){var e=this,t=o();return new y(function(n,r){t.venmoSuccess?(c.sendEvent(e._client,"venmo.appswitch.handle.success"),n(s(t))):t.venmoError?(c.sendEvent(e._client,"venmo.appswitch.handle.error"),r(new E({type:l.VENMO_APP_FAILED.type,code:l.VENMO_APP_FAILED.code,message:l.VENMO_APP_FAILED.message,details:{originalError:{message:decodeURIComponent(t.errorMessage),code:t.errorCode}}}))):t.venmoCancel?(c.sendEvent(e._client,"venmo.appswitch.handle.cancel"),r(new E(l.VENMO_APP_CANCELED))):(c.sendEvent(e._client,"venmo.appswitch.cancel-or-unavailable"),r(new E(l.VENMO_CANCELED))),i()})},t.exports=_.wrapPrototype(r)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/analytics":15,"../lib/braintree-error":17,"../lib/convert-methods-to-error":19,"../lib/methods":24,"../lib/promise":25,"../lib/querystring":26,"./shared/constants":30,"./shared/errors":31,"./shared/supports-venmo":32,"@braintree/wrap-promise":12}]},{},[28])(28)});