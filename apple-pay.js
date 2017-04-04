!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).applePay=e()}}(function(){return function e(t,r,n){function i(a,s){if(!r[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var l=r[a]={exports:{}};t[a][0].call(l.exports,function(e){var r=t[a][1][e];return i(r?r:e)},l,l.exports,e,t,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(e,t,r){(function(r){"use strict";function n(e){this._client=e.client,Object.defineProperty(this,"merchantIdentifier",{value:this._client.getConfiguration().gatewayConfiguration.applePayWeb.merchantIdentifier,configurable:!1,writable:!1})}var i=e("../lib/braintree-error"),o=e("../lib/analytics"),a=e("../lib/deferred"),s=e("../lib/errors"),c=e("./errors");n.prototype.createPaymentRequest=function(e){var t=this._client.getConfiguration().gatewayConfiguration.applePayWeb,r={countryCode:t.countryCode,currencyCode:t.currencyCode,merchantCapabilities:t.merchantCapabilities||["supports3DS"],supportedNetworks:t.supportedNetworks.map(function(e){return"mastercard"===e?"masterCard":e})};return Object.assign({},r,e)},n.prototype.performValidation=function(e,t){var n;if("function"!=typeof t)throw new i({type:s.CALLBACK_REQUIRED.type,code:s.CALLBACK_REQUIRED.code,message:"performValidation requires a callback."});return t=a(t),e&&e.validationURL?(n={validationUrl:e.validationURL,domainName:e.domainName||r.location.hostname,merchantIdentifier:e.merchantIdentifier||this.merchantIdentifier},null!=e.displayName&&(n.displayName=e.displayName),void this._client.request({method:"post",endpoint:"apple_pay_web/sessions",data:{_meta:{source:"apple-pay"},applePayWebSession:n}},function(e,r){e?(t("CLIENT_REQUEST_ERROR"===e.code?new i({type:c.APPLE_PAY_MERCHANT_VALIDATION_FAILED.type,code:c.APPLE_PAY_MERCHANT_VALIDATION_FAILED.code,message:c.APPLE_PAY_MERCHANT_VALIDATION_FAILED.message,details:{originalError:e.details.originalError}}):new i({type:c.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.type,code:c.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.code,message:c.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.message,details:{originalError:e}})),o.sendEvent(this._client,"applepay.performValidation.failed")):(t(null,r),o.sendEvent(this._client,"applepay.performValidation.succeeded"))}.bind(this))):void t(new i(c.APPLE_PAY_VALIDATION_URL_REQUIRED))},n.prototype.tokenize=function(e,t){if("function"!=typeof t)throw new i({type:s.CALLBACK_REQUIRED.type,code:s.CALLBACK_REQUIRED.code,message:"tokenize requires a callback."});return t=a(t),e.token?void this._client.request({method:"post",endpoint:"payment_methods/apple_payment_tokens",data:{_meta:{source:"apple-pay"},applePaymentToken:Object.assign({},e.token,{paymentData:btoa(JSON.stringify(e.token.paymentData))})}},function(e,r){e?(t(new i({type:c.APPLE_PAY_TOKENIZATION.type,code:c.APPLE_PAY_TOKENIZATION.code,message:c.APPLE_PAY_TOKENIZATION.message,details:{originalError:e}})),o.sendEvent(this._client,"applepay.tokenize.failed")):(t(null,r.applePayCards[0]),o.sendEvent(this._client,"applepay.tokenize.succeeded"))}.bind(this)):void t(new i(c.APPLE_PAY_PAYMENT_TOKEN_REQUIRED))},t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/analytics":5,"../lib/braintree-error":6,"../lib/deferred":9,"../lib/errors":11,"./errors":2}],2:[function(e,t,r){"use strict";var n=e("../lib/braintree-error");t.exports={APPLE_PAY_NOT_ENABLED:{type:n.types.MERCHANT,code:"APPLE_PAY_NOT_ENABLED",message:"Apple Pay is not enabled for this merchant."},APPLE_PAY_VALIDATION_URL_REQUIRED:{type:n.types.MERCHANT,code:"APPLE_PAY_VALIDATION_URL_REQUIRED",message:"performValidation must be called with a validationURL."},APPLE_PAY_MERCHANT_VALIDATION_NETWORK:{type:n.types.NETWORK,code:"APPLE_PAY_MERCHANT_VALIDATION_NETWORK",message:"A network error occurred when validating the Apple Pay merchant."},APPLE_PAY_MERCHANT_VALIDATION_FAILED:{type:n.types.MERCHANT,code:"APPLE_PAY_MERCHANT_VALIDATION_FAILED",message:"Make sure you have registered your domain name in the Braintree Control Panel."},APPLE_PAY_PAYMENT_TOKEN_REQUIRED:{type:n.types.MERCHANT,code:"APPLE_PAY_PAYMENT_TOKEN_REQUIRED",message:"tokenize must be called with a payment token."},APPLE_PAY_TOKENIZATION:{type:n.types.NETWORK,code:"APPLE_PAY_TOKENIZATION",message:"A network error occurred when processing the Apple Pay payment."}}},{"../lib/braintree-error":6}],3:[function(e,t,r){"use strict";function n(e,t){var r;return p(t,"create"),t=s(t),null==e.client?void t(new i({type:c.INSTANTIATION_OPTION_REQUIRED.type,code:c.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating Apple Pay."})):(r=e.client.getConfiguration().analyticsMetadata.sdkVersion,r!==d?void t(new i({type:c.INCOMPATIBLE_VERSIONS.type,code:c.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+r+") and Apple Pay (version "+d+") components must be from the same SDK version."})):e.client.getConfiguration().gatewayConfiguration.applePayWeb?(a.sendEvent(e.client,"applepay.initialized"),void t(null,new o(e))):void t(new i(l.APPLE_PAY_NOT_ENABLED)))}var i=e("../lib/braintree-error"),o=e("./apple-pay"),a=e("../lib/analytics"),s=e("../lib/deferred"),c=e("../lib/errors"),p=e("../lib/throw-if-no-callback"),l=e("./errors"),d="3.12.0";t.exports={create:n,VERSION:d}},{"../lib/analytics":5,"../lib/braintree-error":6,"../lib/deferred":9,"../lib/errors":11,"../lib/throw-if-no-callback":14,"./apple-pay":1,"./errors":2}],4:[function(e,t,r){"use strict";function n(e,t){var r,n=t?o(t):{},s=i(e.authorization).attrs,c=o(e.analyticsMetadata);n.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(r in n._meta)n._meta.hasOwnProperty(r)&&(c[r]=n._meta[r]);return n._meta=c,s.tokenizationKey?n.tokenizationKey=s.tokenizationKey:n.authorizationFingerprint=s.authorizationFingerprint,n}var i=e("./create-authorization-data"),o=e("./json-clone"),a=e("./constants");t.exports=n},{"./constants":7,"./create-authorization-data":8,"./json-clone":12}],5:[function(e,t,r){"use strict";function n(e){return Math.floor(e/1e3)}function i(e,t,r){var i=e.getConfiguration(),s=e._request,c=n(Date.now()),p=i.gatewayConfiguration.analytics.url,l={analytics:[{kind:o.ANALYTICS_PREFIX+t,timestamp:c}]};s({url:p,method:"post",data:a(i,l),timeout:o.ANALYTICS_REQUEST_TIMEOUT_MS},r)}var o=e("./constants"),a=e("./add-metadata");t.exports={sendEvent:i}},{"./add-metadata":4,"./constants":7}],6:[function(e,t,r){"use strict";function n(e){if(!n.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var i=e("./enumerate");n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),t.exports=n},{"./enumerate":10}],7:[function(e,t,r){"use strict";var n="3.12.0",i="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:n,INTEGRATION:"custom",SOURCE:"client",PLATFORM:i,BRAINTREE_LIBRARY_VERSION:"braintree/"+i+"/"+n}},{}],8:[function(e,t,r){"use strict";function n(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function i(e){var t=e.split("_"),r=t[0],n=t.slice(2).join("_");return{merchantId:n,environment:r}}function o(e){var t,r,o={attrs:{},configUrl:""};return n(e)?(r=i(e),o.attrs.tokenizationKey=e,o.configUrl=s[r.environment]+"/merchants/"+r.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),o.attrs.authorizationFingerprint=t.authorizationFingerprint,o.configUrl=t.configUrl),o}var a=e("../lib/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=o},{"../lib/polyfill":13}],9:[function(e,t,r){"use strict";t.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],10:[function(e,t,r){"use strict";function n(e,t){return t=null==t?"":t,e.reduce(function(e,r){return e[r]=t+r,e},{})}t.exports=n},{}],11:[function(e,t,r){"use strict";var n=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:n.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:n.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:n.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:n.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:n.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:n.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":6}],12:[function(e,t,r){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],13:[function(e,t,r){(function(e){"use strict";function r(e){var t,r,n,i,o,a,s,c,p=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="";if(!p.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do i=l.indexOf(e.charAt(c++)),o=l.indexOf(e.charAt(c++)),a=l.indexOf(e.charAt(c++)),s=l.indexOf(e.charAt(c++)),t=(63&i)<<2|o>>4&3,r=(15&o)<<4|a>>2&15,n=(3&a)<<6|63&s,d+=String.fromCharCode(t)+(r?String.fromCharCode(r):"")+(n?String.fromCharCode(n):"");while(c<e.length);return d}var n="function"==typeof e.atob?e.atob:r;t.exports={atob:function(t){return n.call(e,t)},_atob:r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(e,t,r){"use strict";var n=e("./braintree-error"),i=e("./errors");t.exports=function(e,t){if("function"!=typeof e)throw new n({type:i.CALLBACK_REQUIRED.type,code:i.CALLBACK_REQUIRED.code,message:t+" must include a callback function."})}},{"./braintree-error":6,"./errors":11}]},{},[3])(3)});