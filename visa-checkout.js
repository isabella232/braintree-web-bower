!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).visaCheckout=e()}}(function(){return function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(o)return o(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(e){var n=t[a][1][e];return i(n?n:e)},d,d.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"use strict";function r(e,t){var n,r=t?o(t):{},s=i(e.authorization).attrs,c=o(e.analyticsMetadata);r.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,s.tokenizationKey?r.tokenizationKey=s.tokenizationKey:r.authorizationFingerprint=s.authorizationFingerprint,r}var i=e("./create-authorization-data"),o=e("./json-clone"),a=e("./constants");t.exports=r},{"./constants":4,"./create-authorization-data":5,"./json-clone":9}],2:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function i(e,t,n){var i=e.getConfiguration(),s=e._request,c=r(Date.now()),u=i.gatewayConfiguration.analytics.url,d={analytics:[{kind:o.ANALYTICS_PREFIX+t,timestamp:c}]};s({url:u,method:"post",data:a(i,d),timeout:o.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var o=e("./constants"),a=e("./add-metadata");t.exports={sendEvent:i}},{"./add-metadata":1,"./constants":4}],3:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var i=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),t.exports=r},{"./enumerate":7}],4:[function(e,t,n){"use strict";var r="3.12.0",i="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:i,BRAINTREE_LIBRARY_VERSION:"braintree/"+i+"/"+r}},{}],5:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function i(e){var t=e.split("_"),n=t[0],r=t.slice(2).join("_");return{merchantId:r,environment:n}}function o(e){var t,n,o={attrs:{},configUrl:""};return r(e)?(n=i(e),o.attrs.tokenizationKey=e,o.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),o.attrs.authorizationFingerprint=t.authorizationFingerprint,o.configUrl=t.configUrl),o}var a=e("../lib/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=o},{"../lib/polyfill":10}],6:[function(e,t,n){"use strict";t.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],7:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],8:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":3}],9:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],10:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,i,o,a,s,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do i=d.indexOf(e.charAt(c++)),o=d.indexOf(e.charAt(c++)),a=d.indexOf(e.charAt(c++)),s=d.indexOf(e.charAt(c++)),t=(63&i)<<2|o>>4&3,n=(15&o)<<4|a>>2&15,r=(3&a)<<6|63&s,l+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(c<e.length);return l}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("./errors");t.exports=function(e,t){if("function"!=typeof e)throw new r({type:i.CALLBACK_REQUIRED.type,code:i.CALLBACK_REQUIRED.code,message:t+" must include a callback function."})}},{"./braintree-error":3,"./errors":8}],12:[function(e,t,n){"use strict";var r=e("../lib/braintree-error");t.exports={VISA_CHECKOUT_NOT_ENABLED:{type:r.types.MERCHANT,code:"VISA_CHECKOUT_NOT_ENABLED",message:"Visa Checkout is not enabled for this merchant."},VISA_CHECKOUT_INIT_OPTIONS_REQUIRED:{type:r.types.MERCHANT,code:"VISA_CHECKOUT_INIT_OPTIONS_REQUIRED",message:"initOptions requires an object."},VISA_CHECKOUT_PAYMENT_REQUIRED:{type:r.types.MERCHANT,code:"VISA_CHECKOUT_PAYMENT_REQUIRED",message:"tokenize requires callid, encKey, and encPaymentData."},VISA_CHECKOUT_TOKENIZATION:{type:r.types.NETWORK,code:"VISA_CHECKOUT_TOKENIZATION",message:"A network error occurred when processing the Visa Checkout payment."}}},{"../lib/braintree-error":3}],13:[function(e,t,n){"use strict";function r(e,t){var n;return l(t,"create"),t=s(t),null==e.client?void t(new i({type:c.INSTANTIATION_OPTION_REQUIRED.type,code:c.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating Visa Checkout."})):(n=e.client.getConfiguration().analyticsMetadata.sdkVersion,n!==d?void t(new i({type:c.INCOMPATIBLE_VERSIONS.type,code:c.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and Visa Checkout (version "+d+") components must be from the same SDK version."})):e.client.getConfiguration().gatewayConfiguration.visaCheckout?(a.sendEvent(e.client,"visacheckout.initialized"),void t(null,new o(e))):void t(new i(u.VISA_CHECKOUT_NOT_ENABLED)))}var i=e("../lib/braintree-error"),o=e("./visa-checkout"),a=e("../lib/analytics"),s=e("../lib/deferred"),c=e("../lib/errors"),u=e("./errors"),d="3.12.0",l=e("../lib/throw-if-no-callback");t.exports={create:r,VERSION:d}},{"../lib/analytics":2,"../lib/braintree-error":3,"../lib/deferred":6,"../lib/errors":8,"../lib/throw-if-no-callback":11,"./errors":12,"./visa-checkout":14}],14:[function(e,t,n){"use strict";function r(e){this._client=e.client}function i(e){return e.reduce(function(e,t){return l.hasOwnProperty(t)?e.concat(l[t]):e},[])}var o=e("../lib/braintree-error"),a=e("../lib/analytics"),s=e("../lib/deferred"),c=e("./errors"),u=e("../lib/json-clone"),d=e("../lib/throw-if-no-callback"),l={Visa:"VISA",MasterCard:"MASTERCARD",Discover:"DISCOVER","American Express":"AMEX"};r.prototype.createInitOptions=function(e){var t,n=this._client.getConfiguration().gatewayConfiguration,r=n.visaCheckout;if(!e)throw new o(c.VISA_CHECKOUT_INIT_OPTIONS_REQUIRED);return t=u(e),t.apikey=t.apikey||r.apikey,t.externalClientId=t.externalClientId||r.externalClientId,t.settings=t.settings||{},t.settings.dataLevel="FULL",t.settings.payment=t.settings.payment||{},t.settings.payment.cardBrands||(t.settings.payment.cardBrands=i(n.visaCheckout.supportedCardTypes)),t},r.prototype.tokenize=function(e,t){return d(t,"tokenize"),t=s(t),e.callid&&e.encKey&&e.encPaymentData?void this._client.request({method:"post",endpoint:"payment_methods/visa_checkout_cards",data:{_meta:{source:"visa-checkout"},visaCheckoutCard:{callId:e.callid,encryptedPaymentData:e.encPaymentData,encryptedKey:e.encKey}}},function(e,n){e?(t(new o({type:c.VISA_CHECKOUT_TOKENIZATION.type,code:c.VISA_CHECKOUT_TOKENIZATION.code,message:c.VISA_CHECKOUT_TOKENIZATION.message,details:{originalError:e}})),a.sendEvent(this._client,"visacheckout.tokenize.failed")):(t(null,n.visaCheckoutCards[0]),a.sendEvent(this._client,"visacheckout.tokenize.succeeded"))}.bind(this)):void t(new o(c.VISA_CHECKOUT_PAYMENT_REQUIRED))},t.exports=r},{"../lib/analytics":2,"../lib/braintree-error":3,"../lib/deferred":6,"../lib/json-clone":9,"../lib/throw-if-no-callback":11,"./errors":12}]},{},[13])(13)});