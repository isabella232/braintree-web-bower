!function(e){var t;"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):((t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).braintree||(t.braintree={})).vaultManager=e()}(function(){return function i(s,a,c){function u(t,e){if(!a[t]){if(!s[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=a[t]={exports:{}};s[t][0].call(o.exports,function(e){return u(s[t][1][e]||e)},o,o.exports,i,s,a,c)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.PromiseGlobal=void 0;var o=n(e("promise-polyfill")),i="undefined"!=typeof Promise?Promise:o.default;r.PromiseGlobal=i},{"promise-polyfill":9}],2:[function(e,t,r){"use strict";var s=e("./lib/promise"),a={};function n(r){var e,t=JSON.stringify(r);if(!r.forceScriptReload&&(e=a[t]))return e;var n=document.createElement("script"),o=r.dataAttributes||{},i=r.container||document.head;return n.src=r.src,n.id=r.id||"",n.async=!0,r.crossorigin&&n.setAttribute("crossorigin",""+r.crossorigin),Object.keys(o).forEach(function(e){n.setAttribute("data-"+e,""+o[e])}),e=new s.PromiseGlobal(function(e,t){n.addEventListener("load",function(){e(n)}),n.addEventListener("error",function(){t(new Error(r.src+" failed to load."))}),n.addEventListener("abort",function(){t(new Error(r.src+" has aborted."))}),i.appendChild(n)}),a[t]=e}n.clearCache=function(){a={}},t.exports=n},{"./lib/promise":1}],3:[function(e,t,r){t.exports=e("./dist/load-script")},{"./dist/load-script":2}],4:[function(e,t,r){"use strict";var n="undefined"!=typeof Promise?Promise:null,o=(i.defaultOnResolve=function(e){return i.Promise.resolve(e)},i.defaultOnReject=function(e){return i.Promise.reject(e)},i.setPromise=function(e){i.Promise=e},i.shouldCatchExceptions=function(e){return e.hasOwnProperty("suppressUnhandledPromiseMessage")?Boolean(e.suppressUnhandledPromiseMessage):Boolean(i.suppressUnhandledPromiseMessage)},i.all=function(e){return i.Promise.all(e)},i.allSettled=function(e){return i.Promise.allSettled(e)},i.race=function(e){return i.Promise.race(e)},i.reject=function(e){return i.Promise.reject(e)},i.resolve=function(e){return i.Promise.resolve(e)},i.prototype.then=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return(e=this._promise).then.apply(e,t)},i.prototype.catch=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return(e=this._promise).catch.apply(e,t)},i.prototype.resolve=function(e){var t=this;return this.isFulfilled||(this._setResolved(),i.Promise.resolve().then(function(){return t._onResolve(e)}).then(function(e){t._resolveFunction(e)}).catch(function(e){t._resetState(),t.reject(e)})),this},i.prototype.reject=function(e){var t=this;return this.isFulfilled||(this._setRejected(),i.Promise.resolve().then(function(){return t._onReject(e)}).then(function(e){t._setResolved(),t._resolveFunction(e)}).catch(function(e){return t._rejectFunction(e)})),this},i.prototype._resetState=function(){this.isFulfilled=!1,this.isResolved=!1,this.isRejected=!1},i.prototype._setResolved=function(){this.isFulfilled=!0,this.isResolved=!0,this.isRejected=!1},i.prototype._setRejected=function(){this.isFulfilled=!0,this.isResolved=!1,this.isRejected=!0},i.Promise=n,i);function i(e){var r=this;"function"!=typeof e?(this._promise=new i.Promise(function(e,t){r._resolveFunction=e,r._rejectFunction=t}),e=e||{},this._onResolve=e.onResolve||i.defaultOnResolve,this._onReject=e.onReject||i.defaultOnReject,i.shouldCatchExceptions(e)&&this._promise.catch(function(){}),this._resetState()):this._promise=new i.Promise(e)}t.exports=o},{}],5:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.deferred=function(r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];setTimeout(function(){try{r.apply(void 0,e)}catch(e){console.log("Error in callback function"),console.log(e)}},1)}}},{}],6:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.once=function(r){var n=!1;return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n||(n=!0,r.apply(void 0,e))}}},{}],7:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.promiseOrCallback=function(e,t){if(!t)return e;e.then(function(e){return t(null,e)}).catch(function(e){return t(e)})}},{}],8:[function(e,t,r){"use strict";var o=e("./lib/deferred"),i=e("./lib/once"),s=e("./lib/promise-or-callback");function n(n){return function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return"function"==typeof t[t.length-1]&&(e=t.pop(),e=i.once(o.deferred(e))),s.promiseOrCallback(n.apply(this,t),e)}}n.wrapPrototype=function(o,e){void 0===e&&(e={});var i=e.ignoreMethods||[],s=!0===e.transformPrivateMethods;return Object.getOwnPropertyNames(o.prototype).filter(function(e){var t="constructor"!==e&&"function"==typeof o.prototype[e],r=-1===i.indexOf(e),n=s||"_"!==e.charAt(0);return t&&n&&r}).forEach(function(e){var t=o.prototype[e];o.prototype[e]=n(t)}),o},t.exports=n},{"./lib/deferred":5,"./lib/once":6,"./lib/promise-or-callback":7}],9:[function(e,t,r){"use strict";var n=setTimeout;function c(e){return Boolean(e&&void 0!==e.length)}function o(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function s(r,n){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,i._immediateFn(function(){var e,t=1===r._state?n.onFulfilled:n.onRejected;if(null!==t){try{e=t(r._value)}catch(e){return void u(n.promise,e)}a(n.promise,e)}else(1===r._state?a:u)(n.promise,r._value)})):r._deferreds.push(n)}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof r)return void d((n=r,o=e,function(){n.apply(o,arguments)}),t)}t._state=1,t._value=e,l(t)}catch(e){u(t,e)}var n,o}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,r=e._deferreds.length;t<r;t++)s(e,e._deferreds[t]);e._deferreds=null}function f(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function d(e,t){var r=!1;try{e(function(e){r||(r=!0,a(t,e))},function(e){r||(r=!0,u(t,e))})}catch(e){if(r)return;r=!0,u(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var r=new this.constructor(o);return s(this,new f(e,t,r)),r},i.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){return r.reject(e)})})},i.all=function(t){return new i(function(o,i){if(!c(t))return i(new TypeError("Promise.all accepts an array"));var s=Array.prototype.slice.call(t);if(0===s.length)return o([]);var a=s.length;for(var e=0;e<s.length;e++)!function t(r,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void n.call(e,function(e){t(r,e)},i)}s[r]=e,0==--a&&o(s)}catch(e){i(e)}}(e,s[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(r){return new i(function(e,t){t(r)})},i.race=function(o){return new i(function(e,t){if(!c(o))return t(new TypeError("Promise.race accepts an array"));for(var r=0,n=o.length;r<n;r++)i.resolve(o[r]).then(e,t)})},i._immediateFn="function"==typeof setImmediate?function(e){setImmediate(e)}:function(e){n(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=i},{}],10:[function(e,t,r){"use strict";var s=e("./create-authorization-data"),a=e("./json-clone"),c=e("./constants");t.exports=function(e,t){var r,n=t?a(t):{},o=s(e.authorization).attrs,i=a(e.analyticsMetadata);for(r in n.braintreeLibraryVersion=c.BRAINTREE_LIBRARY_VERSION,n._meta)n._meta.hasOwnProperty(r)&&(i[r]=n._meta[r]);return n._meta=i,o.tokenizationKey?n.tokenizationKey=o.tokenizationKey:n.authorizationFingerprint=o.authorizationFingerprint,n}},{"./constants":15,"./create-authorization-data":18,"./json-clone":22}],11:[function(e,t,r){"use strict";var n=e("./promise"),u=e("./constants"),l=e("./add-metadata");t.exports={sendEvent:function(e,s,a){var c=Date.now();return n.resolve(e).then(function(e){var t=Date.now(),r=e.getConfiguration(),n=e._request,o=r.gatewayConfiguration.analytics.url,i={analytics:[{kind:u.ANALYTICS_PREFIX+s,isAsync:Math.floor(t/1e3)!==Math.floor(c/1e3),timestamp:c}]};n({url:o,method:"post",data:l(r,i),timeout:u.ANALYTICS_REQUEST_TIMEOUT_MS},a)})}}},{"./add-metadata":10,"./constants":15,"./promise":24}],12:[function(e,t,r){"use strict";var n=e("@braintree/asset-loader/load-script");t.exports={loadScript:n}},{"@braintree/asset-loader/load-script":3}],13:[function(e,t,r){"use strict";var o=e("./braintree-error"),i=e("./promise"),s=e("./errors");t.exports={verify:function(e){var t,r,n;return e?(n=e.name,t=e.client,r=e.authorization,t||r?r||"3.64.2"===t.getVersion()?i.resolve():i.reject(new o({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+t.getVersion()+") and "+n+" (version 3.64.2) components must be from the same SDK version."})):i.reject(new o({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+n+"."}))):i.reject(new o({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}}},{"./braintree-error":14,"./errors":21,"./promise":24}],14:[function(e,t,r){"use strict";var n=e("./enumerate");function o(e){if(!o.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}o.prototype=Object.create(Error.prototype),(o.prototype.constructor=o).types=n(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),o.findRootError=function(e){return e instanceof o&&e.details&&e.details.originalError?o.findRootError(e.details.originalError):e},t.exports=o},{"./enumerate":20}],15:[function(e,t,r){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,ASSETS_URLS:{production:"https://assets.braintreegateway.com",sandbox:"https://assets.braintreegateway.com"},CLIENT_API_URLS:{production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},FRAUDNET_SOURCE:"BRAINTREE_SIGNIN",FRAUDNET_FNCLS:"fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",FRAUDNET_URL:"https://c.paypal.com/da/r/fb.js",GRAPHQL_URLS:{production:"https://payments.braintree-api.com/graphql",sandbox:"https://payments.sandbox.braintree-api.com/graphql"},INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.64.2",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.64.2"}},{}],16:[function(e,t,r){"use strict";var n=e("./braintree-error"),o=e("./errors");t.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new n({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:e+" cannot be called after teardown."})}})}},{"./braintree-error":14,"./errors":21}],17:[function(e,t,r){"use strict";var n=e("./constants").ASSETS_URLS;t.exports={create:function(e){return n.production}}},{"./constants":15}],18:[function(e,t,r){"use strict";var s=e("../lib/vendor/polyfill").atob,a=e("../lib/constants").CLIENT_API_URLS;t.exports=function(e){var t,r,n,o,i={attrs:{},configUrl:""};return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)?(n=e.split("_"),o=n[0],r={merchantId:n.slice(2).join("_"),environment:o},i.environment=r.environment,i.attrs.tokenizationKey=e,i.configUrl=a[r.environment]+"/merchants/"+r.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),i.environment=t.environment,i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl,i.graphQL=t.graphQL),i}},{"../lib/constants":15,"../lib/vendor/polyfill":25}],19:[function(e,t,r){"use strict";var n=e("./braintree-error"),o=e("./promise"),i=e("./assets"),s=e("./errors"),a="3.64.2";t.exports={create:function(e){var t=o.resolve();return e.client?o.resolve(e.client):(window.braintree&&window.braintree.client||(t=i.loadScript({src:e.assetsUrl+"/web/"+a+"/js/client.min.js"}).catch(function(e){return o.reject(new n({type:s.CLIENT_SCRIPT_FAILED_TO_LOAD.type,code:s.CLIENT_SCRIPT_FAILED_TO_LOAD.code,message:s.CLIENT_SCRIPT_FAILED_TO_LOAD.message,details:{originalError:e}}))})),t.then(function(){return window.braintree.client.VERSION!==a?o.reject(new n({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+window.braintree.client.VERSION+") and "+e.name+" (version "+a+") components must be from the same SDK version."})):window.braintree.client.create({authorization:e.authorization,debug:e.debug})}))}}},{"./assets":12,"./braintree-error":14,"./errors":21,"./promise":24}],20:[function(e,t,r){"use strict";t.exports=function(e,r){return r=null==r?"":r,e.reduce(function(e,t){return e[t]=r+t,e},{})}},{}],21:[function(e,t,r){"use strict";var n=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:n.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},INSTANTIATION_OPTION_REQUIRED:{type:n.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:n.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},CLIENT_SCRIPT_FAILED_TO_LOAD:{type:n.types.NETWORK,code:"CLIENT_SCRIPT_FAILED_TO_LOAD",message:"Braintree client script could not be loaded."},METHOD_CALLED_AFTER_TEARDOWN:{type:n.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"}}},{"./braintree-error":14}],22:[function(e,t,r){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],23:[function(e,t,r){"use strict";t.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],24:[function(e,t,r){"use strict";var n=e("promise-polyfill"),o=e("@braintree/extended-promise"),i="undefined"!=typeof Promise?Promise:n;o.suppressUnhandledPromiseMessage=!0,o.setPromise(i),t.exports=i},{"@braintree/extended-promise":4,"promise-polyfill":9}],25:[function(e,t,r){"use strict";var n="function"==typeof atob?window.atob:o;function o(e){var t,r,n,o,i,s,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="";if(!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");for(s=0;t=(63&a.indexOf(e.charAt(s++)))<<2|(o=a.indexOf(e.charAt(s++)))>>4&3,r=(15&o)<<4|(i=a.indexOf(e.charAt(s++)))>>2&15,n=(3&i)<<6|63&a.indexOf(e.charAt(s++)),c+=String.fromCharCode(t)+(r?String.fromCharCode(r):"")+(n?String.fromCharCode(n):""),s<e.length;);return c}t.exports={atob:function(e){return n.call(window,e)},_atob:o}},{}],26:[function(e,t,r){"use strict";var n=e("../lib/braintree-error");t.exports={VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN:{type:n.types.MERCHANT,code:"VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN",message:"A client token with a customer id must be used to delete a payment method nonce."},VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND:{type:n.types.MERCHANT,code:"VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND"},VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR:{type:n.types.UNKNOWN,code:"VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR"}}},{"../lib/braintree-error":14}],27:[function(e,t,r){"use strict";var n=e("../lib/basic-component-verification"),o=e("../lib/create-deferred-client"),i=e("../lib/create-assets-url"),s=e("./vault-manager"),a=e("@braintree/wrap-promise");t.exports={create:a(function(e){var t="Vault Manager";return n.verify({name:t,client:e.client,authorization:e.authorization}).then(function(){return new s({createPromise:o.create({authorization:e.authorization,client:e.client,debug:e.debug,assetsUrl:i.create(e.authorization),name:t})})})}),VERSION:"3.64.2"}},{"../lib/basic-component-verification":13,"../lib/create-assets-url":17,"../lib/create-deferred-client":19,"./vault-manager":28,"@braintree/wrap-promise":8}],28:[function(e,t,r){"use strict";var i=e("../lib/analytics"),s=e("../lib/braintree-error"),a=e("./errors"),n=e("../lib/convert-methods-to-error"),o=e("../lib/methods"),c=e("../lib/promise"),u=e("@braintree/wrap-promise");function l(e){this._createPromise=e.createPromise}function f(e){var t={nonce:e.nonce,default:e.default,details:e.details,hasSubscription:e.hasSubscription,type:e.type};return e.description&&(t.description=e.description),e.binData&&(t.binData=e.binData),t}l.prototype.fetchPaymentMethods=function(e){var t=!0===(e=e||{}).defaultFirst?1:0;return this._createPromise.then(function(e){return e.request({endpoint:"payment_methods",method:"get",data:{defaultFirst:t}})}).then(function(e){return i.sendEvent(this._createPromise,"vault-manager.fetch-payment-methods.succeeded"),e.paymentMethods.map(f)}.bind(this))},l.prototype.deletePaymentMethod=function(o){return this._createPromise.then(function(n){return"CLIENT_TOKEN"===n.getConfiguration().authorizationType?n.request({api:"graphQLApi",data:{query:"mutation DeletePaymentMethodFromSingleUseToken($input: DeletePaymentMethodFromSingleUseTokenInput!) {  deletePaymentMethodFromSingleUseToken(input: $input) {    clientMutationId  }}",variables:{input:{singleUseTokenId:o}},operationName:"DeletePaymentMethodFromSingleUseToken"}}).then(function(){i.sendEvent(n,"vault-manager.delete-payment-method.succeeded")}).catch(function(e){var t,r=e.details.originalError;return i.sendEvent(n,"vault-manager.delete-payment-method.failed"),r[0]&&"NOT_FOUND"===r[0].extensions.errorClass&&(t=new s({type:a.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.type,code:a.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.code,message:"A payment method for payment method nonce `"+o+"` could not be found.",details:{originalError:r}})),t=t||new s({type:a.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.type,code:a.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.code,message:"An unknown error occured when attempting to delete the payment method assocaited with the payment method nonce `"+o+"`.",details:{originalError:r}}),c.reject(t)}):c.reject(new s(a.VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN))})},l.prototype.teardown=function(){return n(this,o(l.prototype)),c.resolve()},t.exports=u.wrapPrototype(l)},{"../lib/analytics":11,"../lib/braintree-error":14,"../lib/convert-methods-to-error":16,"../lib/methods":23,"../lib/promise":24,"./errors":26,"@braintree/wrap-promise":8}]},{},[27])(27)});