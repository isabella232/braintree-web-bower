!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).visaCheckout=e()}}(function(){return function(){function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){return o(t[a][1][e]||e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}return e}()({1:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],2:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],3:[function(e,t,n){"use strict";function r(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}t.exports=r},{}],4:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments);return"function"==typeof n[n.length-1]&&(t=n.pop(),t=i(o(t))),a(e.apply(this,n),t)}}var o=e("./lib/deferred"),i=e("./lib/once"),a=e("./lib/promise-or-callback");r.wrapPrototype=function(e,t){var n,o,i;return t=t||{},o=t.ignoreMethods||[],i=!0===t.transformPrivateMethods,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,r="constructor"!==t&&"function"==typeof e.prototype[t],a=-1===o.indexOf(t);return n=!!i||"_"!==t.charAt(0),r&&n&&a}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=r(n)}),e},t.exports=r},{"./lib/deferred":1,"./lib/once":2,"./lib/promise-or-callback":3}],5:[function(e,t,n){"use strict";function r(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function a(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:c)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void c(t.promise,e)}s(t.promise,r)})}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void p(o(n,t),e)}e._state=1,e._value=t,u(e)}catch(t){c(e,t)}}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}var l=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return a(this,new f(e,t,n)),n},i.all=function(e){return new i(function(t,n){function r(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){r(e,t)},n)}o[e]=a,0==--i&&t(o)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);for(var i=o.length,a=0;a<o.length;a++)r(a,o[a])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){l(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=i},{}],6:[function(e,t,n){"use strict";function r(e,t){var n,r=t?i(t):{},s=o(e.authorization).attrs,c=i(e.analyticsMetadata);r.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,s.tokenizationKey?r.tokenizationKey=s.tokenizationKey:r.authorizationFingerprint=s.authorizationFingerprint,r}var o=e("./create-authorization-data"),i=e("./json-clone"),a=e("./constants");t.exports=r},{"./constants":10,"./create-authorization-data":12,"./json-clone":15}],7:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function o(e,t,n){var o=e.getConfiguration(),s=e._request,c=r(Date.now()),u=o.gatewayConfiguration.analytics.url,f={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:c}]};s({url:u,method:"post",data:a(o,f),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),a=e("./add-metadata");t.exports={sendEvent:o}},{"./add-metadata":6,"./constants":10}],8:[function(e,t,n){"use strict";function r(e){var t,n,r;return e?(r=e.name,null==(t=e.client)?i.reject(new o({type:a.INSTANTIATION_OPTION_REQUIRED.type,code:a.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+r+"."})):(n=t.getVersion(),n!==s?i.reject(new o({type:a.INCOMPATIBLE_VERSIONS.type,code:a.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and "+r+" (version "+s+") components must be from the same SDK version."})):i.resolve())):i.reject(new o({type:a.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:a.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}var o=e("./braintree-error"),i=e("./promise"),a=e("./errors"),s="3.32.0";t.exports={verify:r}},{"./braintree-error":9,"./errors":14,"./promise":17}],9:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":13}],10:[function(e,t,n){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.32.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.32.0"}},{}],11:[function(e,t,n){"use strict";var r=e("./braintree-error"),o=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":9,"./errors":14}],12:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),n=t[0];return{merchantId:t.slice(2).join("_"),environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return r(e)?(n=o(e),i.attrs.tokenizationKey=e,i.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var a=e("../lib/vendor/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/vendor/polyfill":18}],13:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],14:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":9}],15:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],16:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],17:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":5}],18:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,o,i,a,s,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",p="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do{o=f.indexOf(e.charAt(c++)),i=f.indexOf(e.charAt(c++)),a=f.indexOf(e.charAt(c++)),s=f.indexOf(e.charAt(c++)),t=(63&o)<<2|i>>4&3,n=(15&i)<<4|a>>2&15,r=(3&a)<<6|63&s,p+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"")}while(c<e.length);return p}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],19:[function(e,t,n){"use strict";var r=e("../lib/braintree-error");t.exports={VISA_CHECKOUT_NOT_ENABLED:{type:r.types.MERCHANT,code:"VISA_CHECKOUT_NOT_ENABLED",message:"Visa Checkout is not enabled for this merchant."},VISA_CHECKOUT_INIT_OPTIONS_REQUIRED:{type:r.types.MERCHANT,code:"VISA_CHECKOUT_INIT_OPTIONS_REQUIRED",message:"initOptions requires an object."},VISA_CHECKOUT_PAYMENT_REQUIRED:{type:r.types.MERCHANT,code:"VISA_CHECKOUT_PAYMENT_REQUIRED",message:"tokenize requires callid, encKey, and encPaymentData."},VISA_CHECKOUT_TOKENIZATION:{type:r.types.NETWORK,code:"VISA_CHECKOUT_TOKENIZATION",message:"A network error occurred when processing the Visa Checkout payment."}}},{"../lib/braintree-error":9}],20:[function(e,t,n){"use strict";function r(e){return o.verify({name:"Visa Checkout",client:e.client}).then(function(){return e.client.getConfiguration().gatewayConfiguration.visaCheckout?(s.sendEvent(e.client,"visacheckout.initialized"),new a(e)):u.reject(new i(c.VISA_CHECKOUT_NOT_ENABLED))})}var o=e("../lib/basic-component-verification"),i=e("../lib/braintree-error"),a=e("./visa-checkout"),s=e("../lib/analytics"),c=e("./errors"),u=e("../lib/promise"),f=e("@braintree/wrap-promise");t.exports={create:f(r),VERSION:"3.32.0"}},{"../lib/analytics":7,"../lib/basic-component-verification":8,"../lib/braintree-error":9,"../lib/promise":17,"./errors":19,"./visa-checkout":21,"@braintree/wrap-promise":4}],21:[function(e,t,n){"use strict";function r(e){this._client=e.client}function o(e){return e.reduce(function(e,t){return d.hasOwnProperty(t)?e.concat(d[t]):e},[])}var i=e("../lib/braintree-error"),a=e("../lib/analytics"),s=e("./errors"),c=e("../lib/json-clone"),u=e("../lib/methods"),f=e("../lib/convert-methods-to-error"),p=e("../lib/promise"),l=e("@braintree/wrap-promise"),d={Visa:"VISA",MasterCard:"MASTERCARD",Discover:"DISCOVER","American Express":"AMEX"};r.prototype.createInitOptions=function(e){var t,n=this._client.getConfiguration().gatewayConfiguration,r=n.visaCheckout;if(!e)throw new i(s.VISA_CHECKOUT_INIT_OPTIONS_REQUIRED);return t=c(e),t.apikey=t.apikey||r.apikey,t.externalClientId=t.externalClientId||r.externalClientId,t.settings=t.settings||{},t.settings.dataLevel="FULL",t.settings.payment=t.settings.payment||{},t.settings.payment.cardBrands||(t.settings.payment.cardBrands=o(n.visaCheckout.supportedCardTypes)),t},r.prototype.tokenize=function(e){var t=this;return e.callid&&e.encKey&&e.encPaymentData?this._client.request({method:"post",endpoint:"payment_methods/visa_checkout_cards",data:{_meta:{source:"visa-checkout"},visaCheckoutCard:{callId:e.callid,encryptedPaymentData:e.encPaymentData,encryptedKey:e.encKey}}}).then(function(e){return a.sendEvent(t._client,"visacheckout.tokenize.succeeded"),e.visaCheckoutCards[0]}).catch(function(e){return a.sendEvent(t._client,"visacheckout.tokenize.failed"),p.reject(new i({type:s.VISA_CHECKOUT_TOKENIZATION.type,code:s.VISA_CHECKOUT_TOKENIZATION.code,message:s.VISA_CHECKOUT_TOKENIZATION.message,details:{originalError:e}}))}):p.reject(new i(s.VISA_CHECKOUT_PAYMENT_REQUIRED))},r.prototype.teardown=function(){return f(this,u(r.prototype)),p.resolve()},t.exports=l.wrapPrototype(r)},{"../lib/analytics":7,"../lib/braintree-error":9,"../lib/convert-methods-to-error":11,"../lib/json-clone":15,"../lib/methods":16,"../lib/promise":17,"./errors":19,"@braintree/wrap-promise":4}]},{},[20])(20)});