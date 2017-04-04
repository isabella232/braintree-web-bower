!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).usBankAccount=e()}}(function(){return function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var _=n[a]={exports:{}};t[a][0].call(_.exports,function(e){var n=t[a][1][e];return r(n?n:e)},_,_.exports,e,t,n,o)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,n){"use strict";function o(e,t){var n,o=t?i(t):{},s=r(e.authorization).attrs,c=i(e.analyticsMetadata);o.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in o._meta)o._meta.hasOwnProperty(n)&&(c[n]=o._meta[n]);return o._meta=c,s.tokenizationKey?o.tokenizationKey=s.tokenizationKey:o.authorizationFingerprint=s.authorizationFingerprint,o}var r=e("./create-authorization-data"),i=e("./json-clone"),a=e("./constants");t.exports=o},{"./constants":5,"./create-authorization-data":7,"./json-clone":11}],2:[function(e,t,n){"use strict";function o(e){return Math.floor(e/1e3)}function r(e,t,n){var r=e.getConfiguration(),s=e._request,c=o(Date.now()),u=r.gatewayConfiguration.analytics.url,_={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:c}]};s({url:u,method:"post",data:a(r,_),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),a=e("./add-metadata");t.exports={sendEvent:r}},{"./add-metadata":1,"./constants":5}],3:[function(e,t,n){"use strict";function o(e){if(!o.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var r=e("./enumerate");o.prototype=Object.create(Error.prototype),o.prototype.constructor=o,o.types=r(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),t.exports=o},{"./enumerate":9}],4:[function(e,t,n){"use strict";function o(e){return e.replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1_$2").toLowerCase()}t.exports=function(e){return Object.keys(e).reduce(function(t,n){var r=o(n);return t[r]=e[n],t},{})}},{}],5:[function(e,t,n){"use strict";var o="3.12.0",r="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:o,INTEGRATION:"custom",SOURCE:"client",PLATFORM:r,BRAINTREE_LIBRARY_VERSION:"braintree/"+r+"/"+o}},{}],6:[function(e,t,n){"use strict";var o=e("./braintree-error"),r=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new o({type:r.METHOD_CALLED_AFTER_TEARDOWN.type,code:r.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":3,"./errors":10}],7:[function(e,t,n){"use strict";function o(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function r(e){var t=e.split("_"),n=t[0],o=t.slice(2).join("_");return{merchantId:o,environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return o(e)?(n=r(e),i.attrs.tokenizationKey=e,i.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var a=e("../lib/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/polyfill":14}],8:[function(e,t,n){"use strict";t.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],9:[function(e,t,n){"use strict";function o(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=o},{}],10:[function(e,t,n){"use strict";var o=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:o.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:o.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:o.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:o.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:o.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:o.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":3}],11:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],12:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],13:[function(e,t,n){"use strict";function o(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=o},{}],14:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,o,r,i,a,s,c,u=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="";if(!u.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do r=_.indexOf(e.charAt(c++)),i=_.indexOf(e.charAt(c++)),a=_.indexOf(e.charAt(c++)),s=_.indexOf(e.charAt(c++)),t=(63&r)<<2|i>>4&3,n=(15&i)<<4|a>>2&15,o=(3&a)<<6|63&s,d+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(o?String.fromCharCode(o):"");while(c<e.length);return d}var o="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return o.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,n){"use strict";var o=e("./braintree-error"),r=e("./errors");t.exports=function(e,t){if("function"!=typeof e)throw new o({type:r.CALLBACK_REQUIRED.type,code:r.CALLBACK_REQUIRED.code,message:t+" must include a callback function."})}},{"./braintree-error":3,"./errors":10}],16:[function(e,t,n){"use strict";t.exports={REQUIRED_BANK_DETAILS:["routingNumber","accountNumber","accountType","accountHolderName","billingAddress"],PLAID_LINK_JS:"https://cdn.plaid.com/link/v2/stable/link-initialize.js"}},{}],17:[function(e,t,n){"use strict";var o=e("../lib/braintree-error");t.exports={US_BANK_ACCOUNT_OPTION_REQUIRED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_OPTION_REQUIRED"},US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS"},US_BANK_ACCOUNT_LOGIN_LOAD_FAILED:{type:o.types.NETWORK,code:"US_BANK_ACCOUNT_LOGIN_LOAD_FAILED",message:"Bank login flow failed to load."},US_BANK_ACCOUNT_LOGIN_CLOSED:{type:o.types.CUSTOMER,code:"US_BANK_ACCOUNT_LOGIN_CLOSED",message:"Customer closed bank login flow before authorizing."},US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE",message:"Another bank login tokenization request is active."},US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR:{type:o.types.NETWORK,code:"US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR",message:"A tokenization network error occurred."},US_BANK_ACCOUNT_FAILED_TOKENIZATION:{type:o.types.CUSTOMER,code:"US_BANK_ACCOUNT_FAILED_TOKENIZATION",message:"The supplied data failed tokenization."},US_BANK_ACCOUNT_NOT_ENABLED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_NOT_ENABLED",message:"US bank account is not enabled."},US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED:{type:o.types.MERCHANT,code:"US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED",message:"Bank login is not enabled."}}},{"../lib/braintree-error":3}],18:[function(e,t,n){"use strict";function o(e,t){var n,o,d;return c(t,"create"),t=s(t),null==e.client?void t(new r({type:_.INSTANTIATION_OPTION_REQUIRED.type,code:_.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating US Bank Account."})):(n=e.client.getConfiguration().analyticsMetadata.sdkVersion,n!==u?void t(new r({type:_.INCOMPATIBLE_VERSIONS.type,code:_.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and US Bank Account (version "+u+") components must be from the same SDK version."})):(o=e.client.getConfiguration().gatewayConfiguration.braintreeApi)?(d=e.client.getConfiguration().gatewayConfiguration.usBankAccount)?void t(null,new a(e)):void t(new r(i.US_BANK_ACCOUNT_NOT_ENABLED)):void t(new r(_.BRAINTREE_API_ACCESS_RESTRICTED)))}var r=e("../lib/braintree-error"),i=e("./errors"),a=e("./us-bank-account"),s=e("../lib/deferred"),c=e("../lib/throw-if-no-callback"),u="3.12.0",_=e("../lib/errors");t.exports={create:o,VERSION:u}},{"../lib/braintree-error":3,"../lib/deferred":8,"../lib/errors":10,"../lib/throw-if-no-callback":15,"./errors":17,"./us-bank-account":19}],19:[function(e,t,n){(function(n){"use strict";function o(e){this._client=e.client,this._isTokenizingBankLogin=!1,d.sendEvent(this._client,"usbankaccount.initialized")}function r(e,t){var n;return n=new s(401===t?_.BRAINTREE_API_ACCESS_RESTRICTED:500>t?u.US_BANK_ACCOUNT_FAILED_TOKENIZATION:u.US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR),n.details={originalError:e},n}function i(e){return{nonce:e.data.id,details:{},description:e.data.description,type:e.data.type}}function a(e,t){function o(){var e=this.readyState;e&&"loaded"!==e&&"complete"!==e||(i(),t(null,n.Plaid))}function r(){e.parentNode.removeChild(e),t(new s(u.US_BANK_ACCOUNT_LOGIN_LOAD_FAILED))}function i(){e.removeEventListener("error",r),e.removeEventListener("load",o),e.removeEventListener("readystatechange",o)}e.addEventListener("error",r),e.addEventListener("load",o),e.addEventListener("readystatechange",o)}var s=e("../lib/braintree-error"),c=e("./constants"),u=e("./errors"),_=e("../lib/errors"),d=e("../lib/analytics"),l=e("../lib/deferred"),N=e("../lib/once"),A=e("../lib/convert-methods-to-error"),E=e("../lib/methods"),p=e("../lib/throw-if-no-callback"),T=e("../lib/camel-case-to-snake-case");o.prototype.tokenize=function(e,t){return p(t,"tokenize"),e=e||{},t=l(t),e.mandateText?void(e.bankDetails&&e.bankLogin?t(new s({type:u.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.type,code:u.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.code,message:"tokenize must be called with bankDetails or bankLogin, not both."})):e.bankDetails?this._tokenizeBankDetails(e,t):e.bankLogin?this._tokenizeBankLogin(e,t):t(new s({type:u.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:u.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"tokenize must be called with bankDetails or bankLogin."}))):void t(new s({type:u.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:u.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"mandateText property is required."}))},o.prototype._tokenizeBankDetails=function(e,t){var n,o,a=this._client,_=e.bankDetails;for(n=0;n<c.REQUIRED_BANK_DETAILS.length;n++)if(o=c.REQUIRED_BANK_DETAILS[n],!_[o])return void t(new s({type:u.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:u.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"bankDetails."+o+" property is required."}));a.request({method:"POST",endpoint:"tokens",api:"braintreeApi",data:T({type:"us_bank_account",routingNumber:_.routingNumber,accountNumber:_.accountNumber,accountHolderName:_.accountHolderName,accountType:_.accountType,billingAddress:T(_.billingAddress),achMandate:{text:e.mandateText}})},function(e,n,o){var s;return e?(s=r(e,o),d.sendEvent(a,"usbankaccount.bankdetails.tokenization.failed"),void t(s)):(d.sendEvent(a,"usbankaccount.bankdetails.tokenization.succeeded"),void t(null,i(n)))})},o.prototype._tokenizeBankLogin=function(e,t){var n=this,o=this._client,a=o.getConfiguration().gatewayConfiguration,c="production"===a.environment,_=a.usBankAccount.plaid;return e.bankLogin.displayName?_?this._isTokenizingBankLogin?void t(new s(u.US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE)):(this._isTokenizingBankLogin=!0,void this._loadPlaid(function(a,l){return a?void t(a):(l.create({clientName:e.bankLogin.displayName,env:c?"production":"tartan",key:c?_.publicKey:"test_key",product:"auth",selectAccount:!0,onExit:function(){n._isTokenizingBankLogin=!1,d.sendEvent(o,"usbankaccount.banklogin.tokenization.closed.by-user"),t(new s(u.US_BANK_ACCOUNT_LOGIN_CLOSED))},onSuccess:function(a,s){o.request({method:"POST",endpoint:"tokens",api:"braintreeApi",data:T({type:"plaid_public_token",publicToken:a,accountId:s.account_id,achMandate:{text:e.mandateText}})},function(e,a,s){var c;return n._isTokenizingBankLogin=!1,e?(c=r(e,s),d.sendEvent(o,"usbankaccount.banklogin.tokenization.failed"),void t(c)):(d.sendEvent(o,"usbankaccount.banklogin.tokenization.succeeded"),void t(null,i(a)))})}}).open(),void d.sendEvent(o,"usbankaccount.banklogin.tokenization.started"))})):void t(new s(u.US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED)):void t(new s({type:u.US_BANK_ACCOUNT_OPTION_REQUIRED.type,code:u.US_BANK_ACCOUNT_OPTION_REQUIRED.code,message:"displayName property is required when using bankLogin."}))},o.prototype._loadPlaid=function(e){var t,o;return e=N(e),n.Plaid?void e(null,n.Plaid):(t=document.querySelector('script[src="'+c.PLAID_LINK_JS+'"]'),void(t?a(t,e):(o=document.createElement("script"),o.src=c.PLAID_LINK_JS,o.async=!0,a(o,e),document.body.appendChild(o),this._plaidScript=o)))},o.prototype.teardown=function(e){this._plaidScript&&document.body.removeChild(this._plaidScript),A(this,E(o.prototype)),e&&(e=l(e))()},t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/analytics":2,"../lib/braintree-error":3,"../lib/camel-case-to-snake-case":4,"../lib/convert-methods-to-error":6,"../lib/deferred":8,"../lib/errors":10,"../lib/methods":12,"../lib/once":13,"../lib/throw-if-no-callback":15,"./constants":16,"./errors":17}]},{},[18])(18)});