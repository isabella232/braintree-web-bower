!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).ideal=e()}}(function(){var e;return function t(e,n,r){function o(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return o(n?n:t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/Android/.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";var r=e("./is-edge"),o=e("./is-samsung");t.exports=function(e){return e=e||navigator.userAgent,!(-1===e.indexOf("Chrome")&&-1===e.indexOf("CriOS")||r(e)||o(e))}},{"./is-edge":3,"./is-samsung":8}],3:[function(e,t,n){"use strict";t.exports=function(e){return e=e||navigator.userAgent,-1!==e.indexOf("Edge/")}},{}],4:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/FxiOS/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],5:[function(e,t,n){(function(n){"use strict";function r(e){return/\bGSA\b/.test(e)}var o=e("./is-ios");t.exports=function(e){return e=e||n.navigator.userAgent,o(e)?r(e)?!0:/.+AppleWebKit(?!.*Safari)/.test(e):!1}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ios":7}],6:[function(e,t,n){(function(n){"use strict";var r=e("./is-ios-webview");t.exports=function(e,t){return t="undefined"!=typeof t?t:n.statusbar.visible,r(e)&&t}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ios-webview":5}],7:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/iPhone|iPod|iPad/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],8:[function(e,t,n){(function(e){"use strict";t.exports=function(t){return t=t||e.navigator.userAgent,/SamsungBrowser/i.test(t)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,n){(function(n){"use strict";function r(e){var t,r;return e=e||n.navigator.userAgent,(t=e.match(/CriOS\/(\d+)\./))?(r=parseInt(t[1],10),a>r):!1}function o(e){return e=e||n.navigator.userAgent,e.indexOf("Opera Mini")>-1}function i(e){var t=/Version\/[\d\.]+/;return e=e||n.navigator.userAgent,u(e)?t.test(e)&&!o(e):!1}function s(e){return!f(e)&&!p(e)&&/samsung/i.test(e)}var a=48,u=e("./is-android"),c=e("./is-ios-firefox"),l=e("./is-ios-webview"),f=e("./is-chrome"),p=e("./is-samsung");t.exports=function(e){return e=e||n.navigator.userAgent,!(l(e)||c(e)||i(e)||o(e)||r(e)||s(e))}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-android":1,"./is-chrome":2,"./is-ios-firefox":4,"./is-ios-webview":5,"./is-samsung":8}],10:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),o=e("./lib/default-attributes"),i=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),n=i({},o,e);return n.style&&"string"!=typeof n.style&&(i(t.style,n.style),delete n.style),r(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":11,"./lib/default-attributes":12,"./lib/set-attributes":13}],11:[function(e,t,n){"use strict";t.exports=function(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}},{}],12:[function(e,t,n){"use strict";t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],13:[function(e,t,n){"use strict";t.exports=function(e,t){var n;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],null==n?e.removeAttribute(r):e.setAttribute(r,n))}},{}],14:[function(e,t,n){"use strict";function r(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}t.exports=r},{}],15:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],16:[function(e,t,n){"use strict";function r(e,t){return t?void e.then(function(e){t(null,e)})["catch"](function(e){t(e)}):e}t.exports=r},{}],17:[function(e,t,n){"use strict";function r(e){return function(){var t,n=Array.prototype.slice.call(arguments),r=n[n.length-1];return"function"==typeof r&&(t=n.pop(),t=i(o(t))),s(e.apply(this,n),t)}}var o=e("./lib/deferred"),i=e("./lib/once"),s=e("./lib/promise-or-callback");r.wrapPrototype=function(e,t){var n,o,i;return t=t||{},o=t.ignoreMethods||[],i=t.transformPrivateMethods===!0,n=Object.getOwnPropertyNames(e.prototype).filter(function(t){var n,r="constructor"!==t&&"function"==typeof e.prototype[t],s=-1===o.indexOf(t);return n=i?!0:"_"!==t.charAt(0),r&&n&&s}),n.forEach(function(t){var n=e.prototype[t];e.prototype[t]=r(n)}),e},t.exports=r},{"./lib/deferred":14,"./lib/once":15,"./lib/promise-or-callback":16}],18:[function(t,n,r){(function(t){"use strict";!function(o,i){"object"==typeof r&&"undefined"!=typeof n?n.exports=i("undefined"==typeof t?o:t):"function"==typeof e&&e.amd?e([],function(){return i(o)}):o.framebus=i(o)}(this,function(e){function t(e){return null==e?!1:null==e.Window?!1:e.constructor!==e.Window?!1:(g.push(e),!0)}function n(e){var t,n={};for(t in A)A.hasOwnProperty(t)&&(n[t]=A[t]);return n._origin=e||"*",n}function r(e){var t,n,r=s(this);return a(e)?!1:a(r)?!1:(n=Array.prototype.slice.call(arguments,1),t=u(e,n,r),t===!1?!1:(h(b.top||b.self,t,r),!0))}function o(e,t){var n=s(this);return y(e,t,n)?!1:(v[n]=v[n]||{},v[n][e]=v[n][e]||[],v[n][e].push(t),!0)}function i(e,t){var n,r,o=s(this);if(y(e,t,o))return!1;if(r=v[o]&&v[o][e],!r)return!1;for(n=0;n<r.length;n++)if(r[n]===t)return r.splice(n,1),!0;return!1}function s(e){return e&&e._origin||"*"}function a(e){return"string"!=typeof e}function u(e,t,n){var r=!1,o={event:e,origin:n},i=t[t.length-1];"function"==typeof i&&(o.reply=m(i,n),t=t.slice(0,-1)),o.args=t;try{r=I+JSON.stringify(o)}catch(s){throw new Error("Could not stringify event: "+s.message)}return r}function c(e){var t,n,r,o;if(e.data.slice(0,I.length)!==I)return!1;try{t=JSON.parse(e.data.slice(I.length))}catch(i){return!1}return null!=t.reply&&(n=e.origin,r=e.source,o=t.reply,t.reply=function(e){var t=u(o,[e],n);return t===!1?!1:void r.postMessage(t,n)},t.args.push(t.reply)),t}function l(t){b||(b=t||e,b.addEventListener?b.addEventListener("message",p,!1):b.attachEvent?b.attachEvent("onmessage",p):null===b.onmessage?b.onmessage=p:b=null)}function f(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}function p(e){var t;a(e.data)||(t=c(e),t&&(d("*",t.event,t.args,e),d(e.origin,t.event,t.args,e),E(e.data,t.origin,e.source)))}function d(e,t,n,r){var o;if(v[e]&&v[e][t])for(o=0;o<v[e][t].length;o++)v[e][t][o].apply(r,n)}function _(e){return e.top!==e?!1:null==e.opener?!1:e.opener===e?!1:e.opener.closed===!0?!1:!0}function h(e,t,n){var r;try{for(e.postMessage(t,n),_(e)&&h(e.opener.top,t,n),r=0;r<e.frames.length;r++)h(e.frames[r],t,n)}catch(o){}}function E(e,t,n){var r,o;for(r=g.length-1;r>=0;r--)o=g[r],o.closed===!0?g=g.slice(r,1):n!==o&&h(o.top,e,t)}function m(e,t){function n(o,i){e(o,i),A.target(t).unsubscribe(r,n)}var r=f();return A.target(t).subscribe(r,n),r}function y(e,t,n){return a(e)?!0:"function"!=typeof t?!0:a(n)?!0:!1}var b,A,g=[],v={},I="/*framebus*/";return l(),A={target:n,include:t,publish:r,pub:r,trigger:r,emit:r,subscribe:o,sub:o,on:o,unsubscribe:i,unsub:i,off:i}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],19:[function(e,t,n){!function(e){function n(){}function r(e,t){return function(){e.apply(t,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function i(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:a)(t.promise,e._value);var r;try{r=n(e._value)}catch(o){return void a(t.promise,o)}s(t.promise,r)}))}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void l(r(n,t),e)}e._state=1,e._value=t,u(e)}catch(i){a(e,i)}}function a(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;n>t;t++)i(e,e._deferreds[t]);e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,a(t,e))})}catch(r){if(n)return;n=!0,a(t,r)}}var f=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var r=new this.constructor(n);return i(this,new c(e,t,r)),r},o.all=function(e){var t=Array.prototype.slice.call(e);return new o(function(e,n){function r(i,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(e){r(i,e)},n)}t[i]=s,0===--o&&e(t)}catch(u){n(u)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)r(i,t[i])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){for(var r=0,o=e.length;o>r;r++)e[r].then(t,n)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){f(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof t&&t.exports?t.exports=o:e.Promise||(e.Promise=o)}(this)},{}],20:[function(e,t,n){"use strict";t.exports={MAX_TRANSACTION_STATUS_POLLING_RETRIES:5,POLL_RETRY_TIME:1e4,REQUIRED_OPTIONS_FOR_START_PAYMENT:["orderId","amount","currency"]}},{}],21:[function(e,t,n){"use strict";function r(e){var t=e.client.getConfiguration();this._client=e.client,this._assetsUrl=t.gatewayConfiguration.ideal.assetsUrl+"/web/"+f,this._isDebug=t.isDebug,this._idealPaymentStatus={authInProgress:!1,id:"",status:""}}function o(e,t){return e&&"FRAME_SERVICE_FRAME_CLOSED"!==e.code?!1:"COMPLETE"===t||"PENDING"===t}function i(e){var t,n;for(t=0;t<A.REQUIRED_OPTIONS_FOR_START_PAYMENT.length;t++)if(n=A.REQUIRED_OPTIONS_FOR_START_PAYMENT[t],!e.hasOwnProperty(n))return!0;return!1}var s=e("../../lib/promise"),a=e("../../lib/frame-service/external"),u=e("../../lib/braintree-error"),c=e("../../lib/convert-to-braintree-error"),l=e("../shared/errors"),f="3.22.0",p=e("../../lib/constants").INTEGRATION_TIMEOUT_MS,d=e("../../lib/methods"),_=e("@braintree/wrap-promise"),h=e("../../lib/convert-methods-to-error"),E=e("../../lib/analytics"),m=e("../../lib/use-min"),y=e("../../lib/once"),b=e("../../lib/deferred"),A=e("./constants"),g=e("../shared/events");r.prototype._initialize=function(){var e=this,t=setTimeout(function(){E.sendEvent(e._client,"ideal.load.timed-out")},p);return this._client.request({api:"braintreeApi",method:"get",endpoint:"issuers/ideal"}).then(function(n){return new s(function(r){a.create({name:"braintreeideallanding",height:550,width:500,dispatchFrameUrl:e._assetsUrl+"/html/dispatch-frame"+m(e._isDebug)+".html",openFrameUrl:e._assetsUrl+"/html/ideal-issuers-frame"+m(e._isDebug)+".html",state:{bankData:n.data}},function(n){e._frameService=n,clearTimeout(t),E.sendEvent(e._client,"ideal.load.succeeded"),e._frameService._bus.on(g.BANK_CHOSEN,e._createBankChosenHandler()),e._frameService._bus.on(g.REDIRECT_PAGE_REACHED,e._createRedirectPageReachedHandler()),r(e)})})})},r.prototype.startPayment=_(function(e){var t=this;return new s(function(n,r){return!e||i(e)?void r(new u(l.IDEAL_START_PAYMENT_MISSING_REQUIRED_OPTION)):t._idealPaymentStatus.authInProgress?(E.sendEvent(t._client,"ideal.start-payment.error.already-opened"),void r(new u(l.IDEAL_PAYMENT_ALREADY_IN_PROGRESS))):(t._idealPaymentStatus.authInProgress=!0,E.sendEvent(t._client,"ideal.start-payment.opened"),t._startPaymentCallback=t._createStartPaymentCallback(n,r),t._startPaymentOptions=e,void t._frameService.open({state:{locale:e.locale}},t._startPaymentCallback))})}),r.prototype.closeWindow=function(){this._idealPaymentStatus.authInProgress&&E.sendEvent(this._client,"ideal.start-payment.closed.by-merchant"),this._frameService.close()},r.prototype.focusWindow=function(){this._frameService.focus()},r.prototype._createRedirectPageReachedHandler=function(){var e=this;return function(){e._pollForCompleteTransactionStatus(0)}},r.prototype._createStartPaymentCallback=function(e,t){var n=this;return function(r){var i=n._idealPaymentStatus.id,s=n._idealPaymentStatus.status;if(n._idealPaymentStatus.authInProgress=!1,delete n._idealPaymentStatus.id,delete n._idealPaymentStatus.status,n._frameService.close(),o(r,s))return E.sendEvent(n._client,"ideal.start-payment.success-"+s.toLowerCase()),void e({nonce:i,type:"IdealPayment",details:{id:i,status:s}});if(r){if("FRAME_SERVICE_FRAME_CLOSED"===r.code)return E.sendEvent(n._client,"ideal.start-payment.closed.by-user"),void t(new u(l.IDEAL_WINDOW_CLOSED));if("FRAME_SERVICE_FRAME_OPEN_FAILED"===r.code)return void t(new u(l.IDEAL_WINDOW_OPEN_FAILED));E.sendEvent(n._client,"ideal.start-payment.failed"),t(c(r,l.IDEAL_START_PAYMENT_FAILED))}else t(new u(l.IDEAL_START_PAYMENT_UNEXPECTED_STATUS))}},r.prototype._createBankChosenHandler=function(){var e=this;return function(t){var n,r=e._startPaymentOptions;n="function"==typeof r.onPaymentStart?y(b(r.onPaymentStart)):function(){},e._client.request({api:"braintreeApi",method:"post",data:{route_id:e._client.getConfiguration().gatewayConfiguration.ideal.routeId,issuer:t.issuingBankId,order_id:r.orderId,amount:r.amount,currency:r.currency,descriptor:r.descriptor,redirect_url:e._assetsUrl+"/html/ideal-redirect-frame.html"},endpoint:"ideal-payments"}).then(function(t){n({id:t.data.id,status:t.data.status}),e._idealPaymentStatus.id=t.data.id,e._idealPaymentStatus.status=t.data.status,e._frameService.redirect(t.data.approval_url)})["catch"](function(t){e._idealPaymentStatus.authInProgress=!1,e._startPaymentCallback(t)})}},r.prototype._pollForCompleteTransactionStatus=function(e){var t=this;return this._idealPaymentStatus.id?void this._client.request({api:"braintreeApi",method:"get",endpoint:"ideal-payments/"+this._idealPaymentStatus.id+"/status"}).then(function(n){t._idealPaymentStatus.status=n.data.status,"PENDING"===n.data.status&&e<A.MAX_TRANSACTION_STATUS_POLLING_RETRIES?setTimeout(function(){t._pollForCompleteTransactionStatus(e+1)},A.POLL_RETRY_TIME):"COMPLETE"===n.data.status||"PENDING"===n.data.status?t._startPaymentCallback():t._startPaymentCallback(new u({code:l.IDEAL_PAYMENT_NOT_COMPLETE_OR_PENDING.code,type:l.IDEAL_PAYMENT_NOT_COMPLETE_OR_PENDING.type,message:"Transaction is not complete. It has a status of: "+n.data.status}))})["catch"](t._startPaymentCallback):void this._startPaymentCallback(l.IDEAL_PAYMENT_ALREADY_IN_PROGRESS)},r.prototype.teardown=_(function(){var e=this;return e._frameService.teardown(),h(e,d(r.prototype)),E.sendEvent(e._client,"ideal.teardown-completed"),s.resolve()}),t.exports=r},{"../../lib/analytics":27,"../../lib/braintree-error":29,"../../lib/constants":33,"../../lib/convert-methods-to-error":34,"../../lib/convert-to-braintree-error":35,"../../lib/deferred":37,"../../lib/frame-service/external":41,"../../lib/methods":53,"../../lib/once":54,"../../lib/promise":56,"../../lib/use-min":57,"../shared/errors":24,"../shared/events":25,"./constants":20,"@braintree/wrap-promise":17}],22:[function(e,t,n){"use strict";function r(e){var t,n,r;return null==e.client?f.reject(new o({type:c.INSTANTIATION_OPTION_REQUIRED.type,code:c.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating iDEAL."})):(n=e.client.getVersion(),n!==a?f.reject(new o({type:c.INCOMPATIBLE_VERSIONS.type,code:c.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n+") and iDEAL (version "+a+") components must be from the same SDK version."})):i.supportsPopups()?(r=e.client.getConfiguration().gatewayConfiguration,r.braintreeApi?r.ideal?(l.sendEvent(e.client,"ideal.initialization"),t=new s(e),t._initialize()):f.reject(new o(u.IDEAL_NOT_ENABLED)):f.reject(new o(c.BRAINTREE_API_ACCESS_RESTRICTED))):f.reject(new o(u.IDEAL_BROWSER_NOT_SUPPORTED)))}var o=e("../lib/braintree-error"),i=e("./shared/browser-detection"),s=e("./external/ideal"),a="3.22.0",u=e("./shared/errors"),c=e("../lib/errors"),l=e("../lib/analytics"),f=e("../lib/promise"),p=e("@braintree/wrap-promise");t.exports={create:p(r),VERSION:a}},{"../lib/analytics":27,"../lib/braintree-error":29,"../lib/errors":39,"../lib/promise":56,"./external/ideal":21,"./shared/browser-detection":23,"./shared/errors":24,"@braintree/wrap-promise":17}],23:[function(e,t,n){"use strict";t.exports={supportsPopups:e("@braintree/browser-detection/supports-popups")}},{"@braintree/browser-detection/supports-popups":9}],24:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={IDEAL_BROWSER_NOT_SUPPORTED:{type:r.types.CUSTOMER,code:"IDEAL_BROWSER_NOT_SUPPORTED",message:"Browser is not supported."},IDEAL_NOT_ENABLED:{type:r.types.MERCHANT,code:"IDEAL_NOT_ENABLED",message:"iDEAL is not enabled for this merchant."},IDEAL_PAYMENT_ALREADY_IN_PROGRESS:{type:r.types.MERCHANT,code:"IDEAL_PAYMENT_ALREADY_IN_PROGRESS",message:"iDEAL payment is already in progress."},IDEAL_PAYMENT_NOT_COMPLETE_OR_PENDING:{code:"IDEAL_PAYMENT_NOT_COMPLETE_OR_PENDING",type:r.types.CUSTOMER},IDEAL_WINDOW_CLOSED:{type:r.types.CUSTOMER,code:"IDEAL_WINDOW_CLOSED",message:"Customer closed iDEAL window before authorizing."},IDEAL_WINDOW_OPEN_FAILED:{type:r.types.MERCHANT,code:"IDEAL_WINDOW_OPEN_FAILED",message:"iDEAL window failed to open; make sure startPayment was called in response to a user action."},IDEAL_START_PAYMENT_FAILED:{type:r.types.NETWORK,code:"IDEAL_START_PAYMENT_FAILED",message:"iDEAL startPayment failed."},IDEAL_START_PAYMENT_UNEXPECTED_STATUS:{type:r.types.INTERNAL,code:"IDEAL_START_PAYMENT_UNEXPECTED_STATUS",message:"iDEAL startPayment returned an unexpected status without an error."},IDEAL_START_PAYMENT_MISSING_REQUIRED_OPTION:{type:r.types.MERCHANT,code:"IDEAL_START_PAYMENT_MISSING_REQUIRED_OPTION",message:"Missing required option for startPayment."}}},{"../../lib/braintree-error":29}],25:[function(e,t,n){"use strict";var r=e("../../lib/enumerate");t.exports=r(["BANK_CHOSEN","REDIRECT_PAGE_REACHED"],"ideal:")},{"../../lib/enumerate":38}],26:[function(e,t,n){"use strict";function r(e,t){var n,r=t?i(t):{},a=o(e.authorization).attrs,u=i(e.analyticsMetadata);r.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(u[n]=r._meta[n]);return r._meta=u,a.tokenizationKey?r.tokenizationKey=a.tokenizationKey:r.authorizationFingerprint=a.authorizationFingerprint,r}var o=e("./create-authorization-data"),i=e("./json-clone"),s=e("./constants");t.exports=r},{"./constants":33,"./create-authorization-data":36,"./json-clone":52}],27:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function o(e,t,n){var o=e.getConfiguration(),a=e._request,u=r(Date.now()),c=o.gatewayConfiguration.analytics.url,l={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:u}]};a({url:c,method:"post",data:s(o,l),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:o}},{"./add-metadata":26,"./constants":33}],28:[function(e,t,n){"use strict";function r(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}var o="function"==typeof Object.assign?Object.assign:r;t.exports={assign:o,_assign:r}},{}],29:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),r.findRootError=function(e){return e instanceof r&&e.details&&e.details.originalError?r.findRootError(e.details.originalError):e},t.exports=r},{"./enumerate":38}],30:[function(e,t,n){"use strict";function r(e,t){var n,r,i=document.createElement("a");return i.href=t,r="https:"===i.protocol?i.host.replace(/:443$/,""):"http:"===i.protocol?i.host.replace(/:80$/,""):i.host,n=i.protocol+"//"+r,n===e?!0:(i.href=e,o(e))}var o=e("../is-whitelisted-domain");t.exports={checkOrigin:r}},{"../is-whitelisted-domain":51}],31:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":38}],32:[function(e,t,n){"use strict";function r(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new a({type:a.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var o=e("framebus"),i=e("./events"),s=e("./check-origin").checkOrigin,a=e("../braintree-error");r.prototype.on=function(e,t){var n,r,i=t,a=this;this._isDestroyed||(this.merchantUrl&&(i=function(){s(this.origin,a.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=i,this._log("on",r),o.on.apply(o,r),this._listeners.push({eventName:e,handler:i,originalHandler:t}))},r.prototype.emit=function(e){var t;this._isDestroyed||(t=Array.prototype.slice.call(arguments),t[0]=this._namespaceEvent(e),this._log("emit",t),o.emit.apply(o,t))},r.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),o.off.apply(o,t))},r.prototype.off=function(e,t){var n,r,o=t;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===t&&(o=r.handler);this._offDirect(e,o)}},r.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},r.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},r.events=i,t.exports=r},{"../braintree-error":29,"./check-origin":30,"./events":31,framebus:18}],33:[function(e,t,n){"use strict";var r="3.22.0",o="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:o,BRAINTREE_LIBRARY_VERSION:"braintree/"+o+"/"+r}},{}],34:[function(e,t,n){"use strict";var r=e("./braintree-error"),o=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":29,"./errors":39}],35:[function(e,t,n){"use strict";function r(e,t){return e instanceof o?e:new o({type:t.type,code:t.code,message:t.message,details:{originalError:e}})}var o=e("./braintree-error");t.exports=r},{"./braintree-error":29}],36:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),n=t[0],r=t.slice(2).join("_");return{merchantId:r,environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return r(e)?(n=o(e),i.attrs.tokenizationKey=e,i.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var s=e("../lib/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/polyfill":55}],37:[function(e,t,n){"use strict";t.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],38:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],39:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":29}],40:[function(e,t,n){(function(n){"use strict";function r(){}function o(e){if(!e)throw new Error("Valid configuration is required");if(y.forEach(function(t){if(!e.hasOwnProperty(t))throw new Error("A valid frame "+t+" must be provided")}),!/^[\w_]+$/.test(e.name))throw new Error("A valid frame name must be provided")}function i(e){o(e),this._serviceId=d().replace(/-/g,""),this._options={name:e.name+"_"+this._serviceId,dispatchFrameUrl:e.dispatchFrameUrl,openFrameUrl:e.openFrameUrl,height:e.height,width:e.width,top:e.top,left:e.left},this.state=e.state||{},this._bus=new c({channel:this._serviceId}),this._setBusEvents()}var s=e("./strategies/popup"),a=e("./strategies/popup-bridge"),u=e("./strategies/modal"),c=e("../../bus"),l=e("../shared/events"),f=e("../shared/errors"),p=e("../shared/constants"),d=e("../../uuid"),_=e("@braintree/iframer"),h=e("../../braintree-error"),E=e("../shared/browser-detection"),m=e("./../../assign").assign,y=["name","dispatchFrameUrl","openFrameUrl"];i.prototype.initialize=function(e){var t=function(){e(),this._bus.off(l.DISPATCH_FRAME_READY,t)}.bind(this);this._bus.on(l.DISPATCH_FRAME_READY,t),this._writeDispatchFrame()},i.prototype._writeDispatchFrame=function(){var e=p.DISPATCH_FRAME_NAME+"_"+this._serviceId,t=this._options.dispatchFrameUrl;this._dispatchFrame=_({name:e,src:t,"class":p.DISPATCH_FRAME_CLASS,height:0,width:0,style:{position:"absolute",left:"-9999px"}}),document.body.appendChild(this._dispatchFrame)},i.prototype._setBusEvents=function(){this._bus.on(l.DISPATCH_FRAME_REPORT,function(e,t){this._onCompleteCallback&&this._onCompleteCallback.call(null,e.err,e.payload),this._frame.close(),this._onCompleteCallback=null,t&&t()}.bind(this)),this._bus.on(c.events.CONFIGURATION_REQUEST,function(e){e(this.state)}.bind(this))},i.prototype.open=function(e,t){return e=e||{},this._frame=this._getFrameForEnvironment(e),this._frame.initialize(t),this._frame instanceof a?void 0:(m(this.state,e.state),this._onCompleteCallback=t,this._frame.open(),this.isFrameClosed()?(this._cleanupFrame(),void(t&&t(new h(f.FRAME_SERVICE_FRAME_OPEN_FAILED)))):void this._pollForPopupClose())},i.prototype.redirect=function(e){this._frame&&!this.isFrameClosed()&&this._frame.redirect(e)},i.prototype.close=function(){this.isFrameClosed()||this._frame.close()},i.prototype.focus=function(){this.isFrameClosed()||this._frame.focus()},i.prototype.createHandler=function(e){return e=e||{},{close:function(){e.beforeClose&&e.beforeClose(),this.close()}.bind(this),focus:function(){e.beforeFocus&&e.beforeFocus(),this.focus()}.bind(this)}},i.prototype.createNoopHandler=function(){return{close:r,focus:r}},i.prototype.teardown=function(){this.close(),this._dispatchFrame.parentNode.removeChild(this._dispatchFrame),this._dispatchFrame=null,this._cleanupFrame()},i.prototype.isFrameClosed=function(){return null==this._frame||this._frame.isClosed()},i.prototype._cleanupFrame=function(){this._frame=null,clearInterval(this._popupInterval),this._popupInterval=null},i.prototype._pollForPopupClose=function(){return this._popupInterval=setInterval(function(){this.isFrameClosed()&&(this._cleanupFrame(),this._onCompleteCallback&&this._onCompleteCallback(new h(f.FRAME_SERVICE_FRAME_CLOSED)))}.bind(this),p.POPUP_POLL_INTERVAL),this._popupInterval},i.prototype._getFrameForEnvironment=function(e){var t=E.supportsPopups(),r=Boolean(n.popupBridge),o=m({},this._options,e);return t?new s(o):r?new a(o):new u(o)},t.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../braintree-error":29,"../../bus":32,"../../uuid":58,"../shared/browser-detection":47,"../shared/constants":48,"../shared/errors":49,"../shared/events":50,"./../../assign":28,"./strategies/modal":42,"./strategies/popup":45,"./strategies/popup-bridge":43,"@braintree/iframer":10}],41:[function(e,t,n){"use strict";var r=e("./frame-service");t.exports={create:function(e,t){var n=new r(e);n.initialize(function(){t(n)})}}},{"./frame-service":40}],42:[function(e,t,n){(function(n){"use strict";function r(){}function o(e){this._closed=null,this._frame=null,this._options=e||{},this._container=this._options.container||document.body}var i=e("@braintree/iframer"),s=e("../../../assign").assign,a=e("../../shared/browser-detection"),u={position:"fixed",top:0,left:0,bottom:0,padding:0,margin:0,border:0,outline:"none",zIndex:20001,background:"#FFFFFF"};o.prototype.initialize=r,o.prototype.open=function(){var e={src:this._options.openFrameUrl,name:this._options.name,scrolling:"yes",height:"100%",width:"100%",style:s({},u)};a.isIos()?(a.isIosWKWebview()&&(this._lockScrolling(),e.style={}),this._el=document.createElement("div"),s(this._el.style,u,{height:"100%",width:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"}),this._frame=i(e),this._el.appendChild(this._frame)):this._el=this._frame=i(e),this._closed=!1,this._container.appendChild(this._el)},o.prototype.focus=r,o.prototype.close=function(){this._container.removeChild(this._el),this._frame=null,this._closed=!0,a.isIosWKWebview()&&this._unlockScrolling()},o.prototype.isClosed=function(){return Boolean(this._closed)},o.prototype.redirect=function(e){this._frame.src=e},o.prototype._unlockScrolling=function(){document.body.style.overflow=this._savedBodyProperties.overflowStyle,document.body.style.position=this._savedBodyProperties.positionStyle,n.scrollTo(this._savedBodyProperties.left,this._savedBodyProperties.top),delete this._savedBodyProperties},o.prototype._lockScrolling=function(){var e=document.documentElement;this._savedBodyProperties={left:(n.pageXOffset||e.scrollLeft)-(e.clientLeft||0),top:(n.pageYOffset||e.scrollTop)-(e.clientTop||0),overflowStyle:document.body.style.overflow,positionStyle:document.body.style.position
},document.body.style.overflow="hidden",document.body.style.position="fixed",n.scrollTo(0,0)},t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../assign":28,"../../shared/browser-detection":47,"@braintree/iframer":10}],43:[function(e,t,n){(function(n){"use strict";function r(){}function o(e){this._closed=null,this._options=e}var i=e("../../../braintree-error"),s=e("../../shared/errors");o.prototype.initialize=function(e){var t=this;n.popupBridge.onComplete=function(n,r){var o=!r&&!n;return t._closed=!0,n||o?void e(new i(s.FRAME_SERVICE_FRAME_CLOSED)):void e(null,r)}},o.prototype.open=function(e){var t;e=e||{},t=e.openFrameUrl||this._options.openFrameUrl,this._closed=!1,n.popupBridge.open(t)},o.prototype.focus=r,o.prototype.close=r,o.prototype.isClosed=function(){return Boolean(this._closed)},o.prototype.redirect=function(e){this.open({openFrameUrl:e})},t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../braintree-error":29,"../../shared/errors":49}],44:[function(e,t,n){"use strict";function r(e,t,n){return"undefined"!=typeof t?t:i[e](n)}var o=e("../../../shared/constants"),i=e("./position");t.exports=function(e){var t=e.height||o.DEFAULT_POPUP_HEIGHT,n=e.width||o.DEFAULT_POPUP_WIDTH,i=r("top",e.top,t),s=r("left",e.left,n);return[o.POPUP_BASE_OPTIONS,"height="+t,"width="+n,"top="+i,"left="+s].join(",")}},{"../../../shared/constants":48,"./position":46}],45:[function(e,t,n){(function(n){"use strict";function r(){}function o(e){this._frame=null,this._options=e||{},this.open()}var i=e("./compose-options");o.prototype.initialize=r,o.prototype.open=function(){this._frame=n.open(this._options.openFrameUrl,this._options.name,i(this._options))},o.prototype.focus=function(){this._frame.focus()},o.prototype.close=function(){this._frame.close()},o.prototype.isClosed=function(){return this._frame&&Boolean(this._frame.closed)},o.prototype.redirect=function(e){this._frame.location.href=e},t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./compose-options":44}],46:[function(e,t,n){(function(e){"use strict";function n(t){var n=e.outerHeight||document.documentElement.clientHeight,r=null==e.screenY?e.screenTop:e.screenY;return o(n,t,r)}function r(t){var n=e.outerWidth||document.documentElement.clientWidth,r=null==e.screenX?e.screenLeft:e.screenX;return o(n,t,r)}function o(e,t,n){return(e-t)/2+n}t.exports={top:n,left:r,center:o}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],47:[function(e,t,n){"use strict";t.exports={isIos:e("@braintree/browser-detection/is-ios"),isIosWKWebview:e("@braintree/browser-detection/is-ios-wkwebview"),supportsPopups:e("@braintree/browser-detection/supports-popups")}},{"@braintree/browser-detection/is-ios":7,"@braintree/browser-detection/is-ios-wkwebview":6,"@braintree/browser-detection/supports-popups":9}],48:[function(e,t,n){"use strict";t.exports={DISPATCH_FRAME_NAME:"dispatch",DISPATCH_FRAME_CLASS:"braintree-dispatch-frame",POPUP_BASE_OPTIONS:"resizable,scrollbars",DEFAULT_POPUP_WIDTH:450,DEFAULT_POPUP_HEIGHT:535,POPUP_POLL_INTERVAL:100,POPUP_CLOSE_TIMEOUT:100}},{}],49:[function(e,t,n){"use strict";var r=e("../../braintree-error");t.exports={FRAME_SERVICE_FRAME_CLOSED:{type:r.types.INTERNAL,code:"FRAME_SERVICE_FRAME_CLOSED",message:"Frame closed before tokenization could occur."},FRAME_SERVICE_FRAME_OPEN_FAILED:{type:r.types.INTERNAL,code:"FRAME_SERVICE_FRAME_OPEN_FAILED",message:"Frame failed to open."}}},{"../../braintree-error":29}],50:[function(e,t,n){"use strict";var r=e("../../enumerate");t.exports=r(["DISPATCH_FRAME_READY","DISPATCH_FRAME_REPORT"],"frameService:")},{"../../enumerate":38}],51:[function(e,t,n){"use strict";function r(e){return e.split(".").slice(-2).join(".")}function o(e){var t;return e=e.toLowerCase(),/^https:/.test(e)?(i=i||document.createElement("a"),i.href=e,t=r(i.hostname),s.hasOwnProperty(t)):!1}var i,s={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=o},{}],52:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],53:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],54:[function(e,t,n){arguments[4][15][0].apply(n,arguments)},{dup:15}],55:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,o,i,s,a,u,c=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f="";if(!c.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");u=0;do o=l.indexOf(e.charAt(u++)),i=l.indexOf(e.charAt(u++)),s=l.indexOf(e.charAt(u++)),a=l.indexOf(e.charAt(u++)),t=(63&o)<<2|i>>4&3,n=(15&i)<<4|s>>2&15,r=(3&s)<<6|63&a,f+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(u<e.length);return f}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],56:[function(e,t,n){(function(n){"use strict";var r=n.Promise||e("promise-polyfill");t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":19}],57:[function(e,t,n){"use strict";function r(e){return e?"":".min"}t.exports=r},{}],58:[function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}t.exports=r},{}]},{},[22])(22)});