!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).usBankAccount=e()}}(function(){return function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return r(n||e)},l,l.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,n){"use strict";function o(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=o},{}],2:[function(e,t,n){"use strict";function o(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=o},{}],3:[function(e,t,n){"use strict";function o(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}t.exports=o},{}],4:[function(e,t,n){"use strict";function o(e){return function(){var t,n=Array.prototype.slice.call(arguments);return"function"==typeof n[n.length-1]&&(t=n.pop(),t=i(r(t))),a(e.apply(this,n),t)}}var r=e("./lib/deferred"),i=e("./lib/once"),a=e("./lib/promise-or-callback");o.wrapPrototype=function(e,t){var n,r,i;return t=t||{},r=t.ignoreMethods||[],i=!0===t.transformPrivateMethods,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,o="constructor"!==t&&"function"==typeof e.prototype[t],a=-1===r.indexOf(t);return n=!!i||"_"!==t.charAt(0),o&&n&&a}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=o(n)}),e},t.exports=o},{"./lib/deferred":1,"./lib/once":2,"./lib/promise-or-callback":3}],5:[function(e,t,n){"use strict";function o(){}function r(e,t){return function(){e.apply(t,arguments)}}function i(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,d._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?a:s)(t.promise,e._value);var o;try{o=n(e._value)}catch(e){return void s(t.promise,e)}a(t.promise,o)})}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof d)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l(r(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&d._immediateFn(function(){e._handled||d._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}function d(e){if(!(this instanceof d))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}var _=setTimeout,f=d.prototype;f.catch=function(e){return this.then(null,e)},f.then=function(e,t){var n=new this.constructor(o);return i(this,new u(e,t,n)),n},d.all=function(e){return new d(function(t,n){function o(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(e,t)},n)}r[e]=a,0==--i&&t(r)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);for(var i=r.length,a=0;a<r.length;a++)o(a,r[a])})},d.resolve=function(e){return e&&"object"==typeof e&&e.constructor===d?e:new d(function(t){t(e)})},d.reject=function(e){return new d(function(t,n){n(e)})},d.race=function(e){return new d(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},d._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){_(e,0)},d._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=d},{}],6:[function(e,t,n){"use strict";function o(e,t){var n,o=t?i(t):{},s=r(e.authorization).attrs,c=i(e.analyticsMetadata);o.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in o._meta)o._meta.hasOwnProperty(n)&&(c[n]=o._meta[n]);return o._meta=c,s.tokenizationKey?o.tokenizationKey=s.tokenizationKey:o.authorizationFingerprint=s.authorizationFingerprint,o}var r=e("./create-authorization-data"),i=e("./json-clone"),a=e("./constants");t.exports=o},{"./constants":11,"./create-authorization-data":13,"./json-clone":16}],7:[function(e,t,n){"use strict";function o(e){return Math.floor(e/1e3)}function r(e,t,n){var r=e.getConfiguration(),s=e._request,c=o(Date.now()),u=r.gatewayConfiguration.analytics.url,l={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:c}]};s({url:u,method:"post",data:a(r,l),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),a=e("./add-metadata");t.exports={sendEvent:r}},{"./add-metadata":6,"./constants":11}],8:[function(e,t,n){"use strict";function o(e){var t,n,o;return e?(o=e.name,null==(t=e.client)?i.reject(new r({type:a.INSTANTIATION_OPTION_REQUIRED.type,code:a.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+o+"."})):(n=t.getVersion(),n!==s?i.reject(new r({type:a.INCOMPATIBLE_VERSIONS.type,code:a.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and "+o+" (version "+s+") components must be from the same SDK version."})):i.resolve())):i.reject(new r({type:a.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:a.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}var r=e("./braintree-error"),i=e("./promise"),a=e("./errors"),s="3.28.1";t.exports={verify:o}},{"./braintree-error":9,"./errors":15,"./promise":19}],9:[function(e,t,n){"use strict";function o(e){if(!o.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var r=e("./enumerate");o.prototype=Object.create(Error.prototype),o.prototype.constructor=o,o.types=r(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),o.findRootError=function(e){return e instanceof o&&e.details&&e.details.originalError?o.findRootError(e.details.originalError):e},t.exports=o},{"./enumerate":14}],10:[function(e,t,n){"use strict";function o(e){return e.replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1_$2").toLowerCase()}t.exports=function(e){return Object.keys(e).reduce(function(t,n){return t[o(n)]=e[n],t},{})}},{}],11:[function(e,t,n){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.28.1",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.28.1"}},{}],12:[function(e,t,n){"use strict";var o=e("./braintree-error"),r=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new o({type:r.METHOD_CALLED_AFTER_TEARDOWN.type,code:r.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":9,"./errors":15}],13:[function(e,t,n){"use strict";function o(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function r(e){var t=e.split("_"),n=t[0];return{merchantId:t.slice(2).join("_"),environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return o(e)?(n=r(e),i.attrs.tokenizationKey=e,i.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var a=e("../lib/vendor/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/vendor/polyfill":20}],14:[function(e,t,n){"use strict";function o(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=o},{}],15:[function(e,t,n){"use strict";var o=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:o.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},CALLBACK_REQUIRED:{type:o.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:o.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:o.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:o.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:o.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:o.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":9}],16:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],17:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],18:[function(e,t,n){arguments[4][2][0].apply(n,arguments)},{dup:2}],19:[function(e,t,n){(function(n){"use strict";var o=n.Promise||e("promise-polyfill");t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":5}],20:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,o,r,i,a,s,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do{r=l.indexOf(e.charAt(c++)),i=l.indexOf(e.charAt(c++)),a=l.indexOf(e.charAt(c++)),s=l.indexOf(e.charAt(c++)),t=(63&r)<<2|i>>4&3,n=(15&i)<<4|a>>2&15,o=(3&a)<<6|63&s,d+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(o?String.fromCharCode(o):"")}while(c<e.length);return d}var o="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return o.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],21:[function(e,t,n){"use strict";t.exports={PLAID_LINK_JS:"https://cdn.plaid.com/link/v2/stable/link-initialize.js"}},{}],22:[function(e,t,n){"use strict";var o=e("../lib/braintree-error");t.exports={US_BANK_ACCOUNT_OPTION_REQUIRED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_OPTION_REQUIRED"},US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS"},US_BANK_ACCOUNT_LOGIN_LOAD_FAILED:{type:o.types.NETWORK,code:"US_BANK_ACCOUNT_LOGIN_LOAD_FAILED",message:"Bank login flow failed to load."},US_BANK_ACCOUNT_LOGIN_CLOSED:{type:o.types.CUSTOMER,code:"US_BANK_ACCOUNT_LOGIN_CLOSED",message:"Customer closed bank login flow before authorizing."},US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE",message:"Another bank login tokenization request is active."},US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR:{type:o.types.NETWORK,code:"US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR",message:"A tokenization network error occurred."},US_BANK_ACCOUNT_FAILED_TOKENIZATION:{type:o.types.CUSTOMER,code:"US_BANK_ACCOUNT_FAILED_TOKENIZATION",message:"The supplied data failed tokenization."},US_BANK_ACCOUNT_NOT_ENABLED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_NOT_ENABLED",message:"US bank account is not enabled."},US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED",message:"Bank login is not enabled."}}},{"../lib/braintree-error":9}],23:[function(e,t,n){"use strict";function o(e){return r.verify({name:"US Bank Account",client:e.client}).then(function(){var t;return e.client.getConfiguration().gatewayConfiguration.braintreeApi?(t=e.client.getConfiguration().gatewayConfiguration.usBankAccount,t?new s(e):u.reject(new i(a.US_BANK_ACCOUNT_NOT_ENABLED))):u.reject(new i(c.BRAINTREE_API_ACCESS_RESTRICTED))})}var r=e("../lib/basic-component-verification"),i=e("../lib/braintree-error"),a=e("./errors"),s=e("./us-bank-account"),c=e("../lib/errors"),u=e("../lib/promise"),l=e("@braintree/wrap-promise");t.exports={create:l(o),VERSION:"3.28.1"}},{"../lib/basic-component-verification":8,"../lib/braintree-error":9,"../lib/errors":15,"../lib/promise":19,"./errors":22,"./us-bank-account":24,"@braintree/wrap-promise":4}],24:[function(e,t,n){(function(n){"use strict";function o(e){this._client=e.client,this._isTokenizingBankLogin=!1,d.sendEvent(this._client,"usbankaccount.initialized")}function r(e){var t,n=e.details&&e.details.httpStatus;return t=new s(401===n?l.BRAINTREE_API_ACCESS_RESTRICTED:n<500?u.US_BANK_ACCOUNT_FAILED_TOKENIZATION:u.US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR),t.details={originalError:e},t}function i(e){return{nonce:e.data.id,details:{},description:e.data.description,type:e.data.type}}function a(e,t){function o(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(i(),t(null,n.Plaid))}function r(){e.parentNode.removeChild(e),t(new s(u.US_BANK_ACCOUNT_LOGIN_LOAD_FAILED))}function i(){e.removeEventListener("error",r),e.removeEventListener("load",o),e.removeEventListener("readystatechange",o)}e.addEventListener("error",r),e.addEventListener("load",o),e.addEventListener("readystatechange",o)}var s=e("../lib/braintree-error"),c=e("./constants"),u=e("./errors"),l=e("../lib/errors"),d=e("../lib/analytics"),_=e("../lib/once"),f=e("../lib/convert-methods-to-error"),p=e("../lib/methods"),N=e("../lib/camel-case-to-snake-case"),A=e("../lib/promise"),E=e("@braintree/wrap-promise");o.prototype.tokenize=function(e){return e=e||{},e.mandateText?e.bankDetails&&e.bankLogin?A.reject(new s({type:u.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.type,code:u.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.code,message:"tokenize must be called with bankDetails or bankLogin, not both."})):e.bankDetails?this._tokenizeBankDetails(e):e.bankLogin?this._tokenizeBankLogin(e):A.reject(new s({type:u.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:u.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"tokenize must be called with bankDetails or bankLogin."})):A.reject(new s({type:u.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:u.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"mandateText property is required."}))},o.prototype._tokenizeBankDetails=function(e){var t=this._client,n=e.bankDetails;return t.request({method:"POST",endpoint:"tokens",api:"braintreeApi",data:N({type:"us_bank_account",routingNumber:n.routingNumber,accountNumber:n.accountNumber,firstName:n.firstName,lastName:n.lastName,businessName:n.businessName,accountType:n.accountType,ownershipType:n.ownershipType,billingAddress:N(n.billingAddress||{}),achMandate:{text:e.mandateText}})}).then(function(e){return d.sendEvent(t,"usbankaccount.bankdetails.tokenization.succeeded"),A.resolve(i(e))}).catch(function(e){var n=r(e);return d.sendEvent(t,"usbankaccount.bankdetails.tokenization.failed"),A.reject(n)})},o.prototype._tokenizeBankLogin=function(e){var t=this,n=this._client,o=n.getConfiguration().gatewayConfiguration,a="production"===o.environment,c=o.usBankAccount.plaid;return e.bankLogin.displayName?c?this._isTokenizingBankLogin?A.reject(new s(u.US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE)):(this._isTokenizingBankLogin=!0,new A(function(o,l){t._loadPlaid(function(_,f){if(_)return void l(_);f.create({clientName:e.bankLogin.displayName,apiVersion:"v2",env:a?"production":"sandbox",key:c.publicKey,product:"auth",selectAccount:!0,onExit:function(){t._isTokenizingBankLogin=!1,d.sendEvent(n,"usbankaccount.banklogin.tokenization.closed.by-user"),l(new s(u.US_BANK_ACCOUNT_LOGIN_CLOSED))},onSuccess:function(s,c){n.request({method:"POST",endpoint:"tokens",api:"braintreeApi",data:N({type:"plaid_public_token",publicToken:s,accountId:a?c.account_id:"plaid_account_id",achMandate:{text:e.mandateText},ownershipType:e.bankLogin.ownershipType,firstName:e.bankLogin.firstName,lastName:e.bankLogin.lastName,businessName:e.bankLogin.businessName,billingAddress:N(e.bankLogin.billingAddress||{})})}).then(function(e){t._isTokenizingBankLogin=!1,d.sendEvent(n,"usbankaccount.banklogin.tokenization.succeeded"),o(i(e))}).catch(function(e){var o;t._isTokenizingBankLogin=!1,o=r(e),d.sendEvent(n,"usbankaccount.banklogin.tokenization.failed"),l(o)})}}).open(),d.sendEvent(n,"usbankaccount.banklogin.tokenization.started")})})):A.reject(new s(u.US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED)):A.reject(new s({type:u.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:u.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"displayName property is required when using bankLogin."}))},o.prototype._loadPlaid=function(e){var t,o;if(e=_(e),n.Plaid)return void e(null,n.Plaid);t=document.querySelector('script[src="'+c.PLAID_LINK_JS+'"]'),t?a(t,e):(o=document.createElement("script"),o.src=c.PLAID_LINK_JS,o.async=!0,a(o,e),document.body.appendChild(o),this._plaidScript=o)},o.prototype.teardown=function(){return this._plaidScript&&document.body.removeChild(this._plaidScript),f(this,p(o.prototype)),A.resolve()},t.exports=E.wrapPrototype(o)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/analytics":7,"../lib/braintree-error":9,"../lib/camel-case-to-snake-case":10,"../lib/convert-methods-to-error":12,"../lib/errors":15,"../lib/methods":17,"../lib/once":18,"../lib/promise":19,"./constants":21,"./errors":22,"@braintree/wrap-promise":4}]},{},[23])(23)});