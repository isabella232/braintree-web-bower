!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).paypalCheckout=e()}}(function(){return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return o(n||e)},u,u.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],2:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],3:[function(e,t,n){"use strict";function r(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}t.exports=r},{}],4:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments);return"function"==typeof n[n.length-1]&&(t=n.pop(),t=i(o(t))),a(e.apply(this,n),t)}}var o=e("./lib/deferred"),i=e("./lib/once"),a=e("./lib/promise-or-callback");r.wrapPrototype=function(e,t){var n,o,i;return t=t||{},o=t.ignoreMethods||[],i=!0===t.transformPrivateMethods,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,r="constructor"!==t&&"function"==typeof e.prototype[t],a=-1===o.indexOf(t);return n=!!i||"_"!==t.charAt(0),r&&n&&a}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=r(n)}),e},t.exports=r},{"./lib/deferred":1,"./lib/once":2,"./lib/promise-or-callback":3}],5:[function(e,t,n){"use strict";function r(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,l._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?a:s)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}a(t.promise,r)})}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof l)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void u(o(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&l._immediateFn(function(){e._handled||l._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t]);e._deferreds=null}function p(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function u(e,t){var n=!1;try{e(function(e){n||(n=!0,a(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}function l(e){if(!(this instanceof l))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}var f=setTimeout,d=l.prototype;d.catch=function(e){return this.then(null,e)},d.then=function(e,t){var n=new this.constructor(r);return i(this,new p(e,t,n)),n},l.all=function(e){return new l(function(t,n){function r(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){r(e,t)},n)}o[e]=a,0==--i&&t(o)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return t([]);for(var i=o.length,a=0;a<o.length;a++)r(a,o[a])})},l.resolve=function(e){return e&&"object"==typeof e&&e.constructor===l?e:new l(function(t){t(e)})},l.reject=function(e){return new l(function(t,n){n(e)})},l.race=function(e){return new l(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},l._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){f(e,0)},l._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=l},{}],6:[function(e,t,n){"use strict";function r(e,t){var n,r=t?i(t):{},s=o(e.authorization).attrs,c=i(e.analyticsMetadata);r.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,s.tokenizationKey?r.tokenizationKey=s.tokenizationKey:r.authorizationFingerprint=s.authorizationFingerprint,r}var o=e("./create-authorization-data"),i=e("./json-clone"),a=e("./constants");t.exports=r},{"./constants":10,"./create-authorization-data":13,"./json-clone":16}],7:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function o(e,t,n){var o=e.getConfiguration(),s=e._request,c=r(Date.now()),p=o.gatewayConfiguration.analytics.url,u={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:c}]};s({url:p,method:"post",data:a(o,u),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),a=e("./add-metadata");t.exports={sendEvent:o}},{"./add-metadata":6,"./constants":10}],8:[function(e,t,n){"use strict";function r(e){var t,n,r;return e?(r=e.name,null==(t=e.client)?i.reject(new o({type:a.INSTANTIATION_OPTION_REQUIRED.type,code:a.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+r+"."})):(n=t.getVersion(),n!==s?i.reject(new o({type:a.INCOMPATIBLE_VERSIONS.type,code:a.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and "+r+" (version "+s+") components must be from the same SDK version."})):i.resolve())):i.reject(new o({type:a.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:a.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}var o=e("./braintree-error"),i=e("./promise"),a=e("./errors"),s="3.28.1";t.exports={verify:r}},{"./braintree-error":9,"./errors":15,"./promise":18}],9:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":14}],10:[function(e,t,n){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.28.1",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.28.1"}},{}],11:[function(e,t,n){"use strict";var r=e("./braintree-error"),o=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":9,"./errors":15}],12:[function(e,t,n){"use strict";function r(e,t){return e instanceof o?e:new o({type:t.type,code:t.code,message:t.message,details:{originalError:e}})}var o=e("./braintree-error");t.exports=r},{"./braintree-error":9}],13:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),n=t[0];return{merchantId:t.slice(2).join("_"),environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return r(e)?(n=o(e),i.attrs.tokenizationKey=e,i.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var a=e("../lib/vendor/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/vendor/polyfill":19}],14:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],15:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":9}],16:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],17:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],18:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":5}],19:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,o,i,a,s,c,p=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l="";if(!p.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do{o=u.indexOf(e.charAt(c++)),i=u.indexOf(e.charAt(c++)),a=u.indexOf(e.charAt(c++)),s=u.indexOf(e.charAt(c++)),t=(63&o)<<2|i>>4&3,n=(15&i)<<4|a>>2&15,r=(3&a)<<6|63&s,l+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"")}while(c<e.length);return l}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],20:[function(e,t,n){"use strict";var r=e("../lib/braintree-error");t.exports={PAYPAL_NOT_ENABLED:{type:r.types.MERCHANT,code:"PAYPAL_NOT_ENABLED",message:"PayPal is not enabled for this merchant."},PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED:{type:r.types.MERCHANT,code:"PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED",message:"A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developers.braintreepayments.com/guides/paypal/testing-go-live/#linked-paypal-testing for details on linking your PayPal sandbox with Braintree."},PAYPAL_TOKENIZATION_REQUEST_ACTIVE:{type:r.types.MERCHANT,code:"PAYPAL_TOKENIZATION_REQUEST_ACTIVE",message:"Another tokenization request is active."},PAYPAL_ACCOUNT_TOKENIZATION_FAILED:{type:r.types.NETWORK,code:"PAYPAL_ACCOUNT_TOKENIZATION_FAILED",message:"Could not tokenize user's PayPal account."},PAYPAL_FLOW_FAILED:{type:r.types.NETWORK,code:"PAYPAL_FLOW_FAILED",message:"Could not initialize PayPal flow."},PAYPAL_FLOW_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"PAYPAL_FLOW_OPTION_REQUIRED",message:"PayPal flow property is invalid or missing."},PAYPAL_POPUP_OPEN_FAILED:{type:r.types.MERCHANT,code:"PAYPAL_POPUP_OPEN_FAILED",message:"PayPal popup failed to open, make sure to tokenize in response to a user action."},PAYPAL_POPUP_CLOSED:{type:r.types.CUSTOMER,code:"PAYPAL_POPUP_CLOSED",message:"Customer closed PayPal popup before authorizing."},PAYPAL_INVALID_PAYMENT_OPTION:{type:r.types.MERCHANT,code:"PAYPAL_INVALID_PAYMENT_OPTION",message:"PayPal payment options are invalid."}}},{"../lib/braintree-error":9}],21:[function(e,t,n){"use strict";function r(e){return s.verify({name:"PayPal Checkout",client:e.client}).then(function(){var t=e.client.getConfiguration();return t.gatewayConfiguration.paypalEnabled?t.gatewayConfiguration.paypal.clientId?(a.sendEvent(e.client,"paypal-checkout.initialized"),new l(e)):p.reject(new i(c.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED)):p.reject(new i(c.PAYPAL_NOT_ENABLED))})}function o(){return!0}var i=e("../lib/braintree-error"),a=e("../lib/analytics"),s=e("../lib/basic-component-verification"),c=e("./errors"),p=e("../lib/promise"),u=e("@braintree/wrap-promise"),l=e("./paypal-checkout");t.exports={create:u(r),isSupported:o,VERSION:"3.28.1"}},{"../lib/analytics":7,"../lib/basic-component-verification":8,"../lib/braintree-error":9,"../lib/promise":18,"./errors":20,"./paypal-checkout":22,"@braintree/wrap-promise":4}],22:[function(e,t,n){"use strict";function r(e){this._client=e.client}var o=e("../lib/analytics"),i=e("../lib/promise"),a=e("@braintree/wrap-promise"),s=e("../lib/braintree-error"),c=e("../lib/convert-to-braintree-error"),p=e("./errors"),u=e("../paypal/shared/constants"),l=e("../lib/methods"),f=e("../lib/convert-methods-to-error");r.prototype.createPayment=function(e){var t;return e&&u.FLOW_ENDPOINTS.hasOwnProperty(e.flow)?(t="paypal_hermes/"+u.FLOW_ENDPOINTS[e.flow],o.sendEvent(this._client,"paypal-checkout.createPayment"),!0===e.offerCredit&&o.sendEvent(this._client,"paypal-checkout.credit.offered"),this._client.request({endpoint:t,method:"post",data:this._formatPaymentResourceData(e)}).then(function(t){return"checkout"===e.flow?t.paymentResource.paymentToken:t.agreementSetup.tokenId}).catch(function(e){return 422===(e.details&&e.details.httpStatus)?i.reject(new s({type:p.PAYPAL_INVALID_PAYMENT_OPTION.type,code:p.PAYPAL_INVALID_PAYMENT_OPTION.code,message:p.PAYPAL_INVALID_PAYMENT_OPTION.message,details:{originalError:e}})):i.reject(c(e,{type:p.PAYPAL_FLOW_FAILED.type,code:p.PAYPAL_FLOW_FAILED.code,message:p.PAYPAL_FLOW_FAILED.message}))})):i.reject(new s(p.PAYPAL_FLOW_OPTION_REQUIRED))},r.prototype.tokenizePayment=function(e){var t,n=this,r=this._client,a={flow:e.billingToken?"vault":"checkout",intent:e.intent},s={ecToken:e.paymentToken,billingToken:e.billingToken,payerId:e.payerID,paymentId:e.paymentID};return o.sendEvent(r,"paypal-checkout.tokenization.started"),r.request({endpoint:"payment_methods/paypal_accounts",method:"post",data:n._formatTokenizeData(a,s)}).then(function(e){return t=n._formatTokenizePayload(e),o.sendEvent(r,"paypal-checkout.tokenization.success"),t.creditFinancingOffered&&o.sendEvent(r,"paypal-checkout.credit.accepted"),t}).catch(function(e){return o.sendEvent(r,"paypal-checkout.tokenization.failed"),i.reject(c(e,{type:p.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,code:p.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,message:p.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message}))})},r.prototype._formatPaymentResourceData=function(e){var t,n=this._client.getConfiguration().gatewayConfiguration,r={returnUrl:"x",cancelUrl:"x",offerPaypalCredit:!0===e.offerCredit,experienceProfile:{brandName:e.displayName||n.paypal.displayName,localeCode:e.locale,noShipping:(!e.enableShippingAddress).toString(),addressOverride:!1===e.shippingAddressEditable,landingPageType:e.landingPageType}};if("checkout"===e.flow){r.amount=e.amount,r.currencyIsoCode=e.currency,e.hasOwnProperty("intent")&&(r.intent=e.intent);for(t in e.shippingAddressOverride)e.shippingAddressOverride.hasOwnProperty(t)&&(r[t]=e.shippingAddressOverride[t])}else r.shippingAddress=e.shippingAddressOverride,e.billingAgreementDescription&&(r.description=e.billingAgreementDescription);return r},r.prototype._formatTokenizeData=function(e,t){var n=this._client.getConfiguration(),r=n.gatewayConfiguration,o="TOKENIZATION_KEY"===n.authorizationType,i={paypalAccount:{correlationId:t.billingToken||t.ecToken,options:{validate:"vault"===e.flow&&!o}}};return t.billingToken?i.paypalAccount.billingAgreementToken=t.billingToken:(i.paypalAccount.paymentToken=t.paymentId,i.paypalAccount.payerId=t.payerId,i.paypalAccount.unilateral=r.paypal.unvettedMerchant,e.intent&&(i.paypalAccount.intent=e.intent)),i},r.prototype._formatTokenizePayload=function(e){var t,n={};return e.paypalAccounts&&(n=e.paypalAccounts[0]),t={nonce:n.nonce,details:{},type:n.type},n.details&&n.details.payerInfo&&(t.details=n.details.payerInfo),n.details&&n.details.creditFinancingOffered&&(t.creditFinancingOffered=n.details.creditFinancingOffered),t},r.prototype.teardown=function(){return f(this,l(r.prototype)),i.resolve()},t.exports=a.wrapPrototype(r)},{"../lib/analytics":7,"../lib/braintree-error":9,"../lib/convert-methods-to-error":11,"../lib/convert-to-braintree-error":12,"../lib/methods":17,"../lib/promise":18,"../paypal/shared/constants":23,"./errors":20,"@braintree/wrap-promise":4}],23:[function(e,t,n){"use strict";t.exports={LANDING_FRAME_NAME:"braintreepaypallanding",FLOW_ENDPOINTS:{checkout:"create_payment_resource",vault:"setup_billing_agreement"}}},{}]},{},[21])(21)});