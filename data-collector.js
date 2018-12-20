!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;((e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).braintree||(e.braintree={})).dataCollector=t()}}(function(){return function o(s,a,c){function u(e,t){if(!a[e]){if(!s[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(h)return h(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var i=a[e]={exports:{}};s[e][0].call(i.exports,function(t){return u(s[e][1][t]||t)},i,i.exports,o,s,a,c)}return a[e].exports}for(var h="function"==typeof require&&require,t=0;t<c.length;t++)u(c[t]);return u}({1:[function(n,r,t){(function(t){"use strict";var e=n("promise-polyfill");r.exports=t.Promise||e}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":7}],2:[function(t,e,n){"use strict";var s=t("./lib/promise"),a={};function r(n){var e,r,i,t,o=JSON.stringify(n);return!n.forceScriptReload&&(t=a[o])?t:(i=document.createElement("script"),e=n.dataAttributes||{},r=n.container||document.head,i.src=n.src,i.id=n.id,i.async=!0,Object.keys(e).forEach(function(t){i.setAttribute("data-"+t,e[t])}),t=new s(function(t,e){i.addEventListener("load",function(){t(i)}),i.addEventListener("error",function(){e(new Error(n.src+" failed to load."))}),i.addEventListener("abort",function(){e(new Error(n.src+" has aborted."))}),r.appendChild(i)}),a[o]=t)}r.clearCache=function(){a={}},e.exports=r},{"./lib/promise":1}],3:[function(t,e,n){"use strict";e.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],4:[function(t,e,n){"use strict";e.exports=function(t){var e=!1;return function(){e||(e=!0,t.apply(null,arguments))}}},{}],5:[function(t,e,n){"use strict";e.exports=function(t,e){if(!e)return t;t.then(function(t){e(null,t)}).catch(function(t){e(t)})}},{}],6:[function(t,e,n){"use strict";var r=t("./lib/deferred"),i=t("./lib/once"),o=t("./lib/promise-or-callback");function a(n){return function(){var t,e=Array.prototype.slice.call(arguments);return"function"==typeof e[e.length-1]&&(t=e.pop(),t=i(r(t))),o(n.apply(this,e),t)}}a.wrapPrototype=function(i,t){var o,s;return o=(t=t||{}).ignoreMethods||[],s=!0===t.transformPrivateMethods,Object.getOwnPropertyNames(i.prototype).filter(function(t){var e,n="constructor"!==t&&"function"==typeof i.prototype[t],r=-1===o.indexOf(t);return e=!!s||"_"!==t.charAt(0),n&&e&&r}).forEach(function(t){var e=i.prototype[t];i.prototype[t]=a(e)}),i},e.exports=a},{"./lib/deferred":3,"./lib/once":4,"./lib/promise-or-callback":5}],7:[function(t,e,n){"use strict";var r=setTimeout;function i(){}function o(t){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(t,this)}function s(n,r){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,o._immediateFn(function(){var t=1===n._state?r.onFulfilled:r.onRejected;if(null!==t){var e;try{e=t(n._value)}catch(t){return void c(r.promise,t)}a(r.promise,e)}else(1===n._state?a:c)(r.promise,n._value)})):n._deferreds.push(r)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void l((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){c(e,t)}var r,i}function c(t,e){t._state=2,t._value=e,u(t)}function u(t){2===t._state&&0===t._deferreds.length&&o._immediateFn(function(){t._handled||o._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)s(t,t._deferreds[e]);t._deferreds=null}function h(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function l(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var n=new this.constructor(i);return s(this,new h(t,e,n)),n},o.prototype.finally=function(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})},o.all=function(e){return new o(function(r,i){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(e);if(0===o.length)return r([]);var s=o.length;function a(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){a(e,t)},i)}o[e]=t,0==--s&&r(o)}catch(t){i(t)}}for(var t=0;t<o.length;t++)a(t,o[t])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(n){return new o(function(t,e){e(n)})},o.race=function(i){return new o(function(t,e){for(var n=0,r=i.length;n<r;n++)i[n].then(t,e)})},o._immediateFn="function"==typeof setImmediate&&function(t){setImmediate(t)}||function(t){r(t,0)},o._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.exports=o},{}],8:[function(t,e,n){"use strict";var r=t("../lib/braintree-error");e.exports={DATA_COLLECTOR_KOUNT_NOT_ENABLED:{type:r.types.MERCHANT,code:"DATA_COLLECTOR_KOUNT_NOT_ENABLED",message:"Kount is not enabled for this merchant."},DATA_COLLECTOR_KOUNT_ERROR:{type:r.types.MERCHANT,code:"DATA_COLLECTOR_KOUNT_ERROR"},DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS:{type:r.types.MERCHANT,code:"DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS",message:"Data Collector must be created with Kount and/or PayPal."}}},{"../lib/braintree-error":15}],9:[function(t,e,n){"use strict";var i=t("../lib/constants").FRAUDNET_FNCLS,o=t("../lib/constants").FRAUDNET_SOURCE,s=t("../lib/constants").FRAUDNET_URL,a=t("../lib/assets").loadScript;function r(){var t,e;this.sessionId=function(){var t,e="";for(t=0;t<32;t++)e+=Math.floor(16*Math.random()).toString(16);return e}(),this._beaconId=(t=this.sessionId,e=(new Date).getTime()/1e3,"https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p="+t+"&t="+e+"&a=14")}r.prototype.initialize=function(){var t,e,n,r=this;return this._parameterBlock=(t=this.sessionId,e=this._beaconId,(n=document.body.appendChild(document.createElement("script"))).type="application/json",n.setAttribute("fncls",i),n.text=JSON.stringify({f:t,s:o,b:e}),n),a({src:s}).then(function(t){return r._thirdPartyBlock=t,r}).catch(function(){return null})},r.prototype.teardown=function(){var t=document.querySelector('iframe[title="ppfniframe"]');t&&t.parentNode.removeChild(t),(t=document.querySelector('iframe[title="pbf"]'))&&t.parentNode.removeChild(t),this._parameterBlock&&this._parameterBlock.parentNode.removeChild(this._parameterBlock),this._thirdPartyBlock&&this._thirdPartyBlock.parentNode.removeChild(this._thirdPartyBlock)},e.exports={setup:function(){return(new r).initialize()}}},{"../lib/assets":13,"../lib/constants":17}],10:[function(t,e,n){"use strict";var a=t("./kount"),c=t("./fraudnet"),u=t("../lib/braintree-error"),h=t("../lib/basic-component-verification"),l=t("../lib/create-deferred-client"),f=t("../lib/create-assets-url"),d=t("../lib/methods"),p=t("../lib/convert-methods-to-error"),m=t("../lib/promise"),y=t("@braintree/wrap-promise"),v=t("./errors");e.exports={create:y(function(r){var i,t="Data Collector",o={},s=[];return h.verify({name:t,client:r.client,authorization:r.authorization}).then(function(){return l.create({authorization:r.authorization,client:r.client,debug:r.debug,assetsUrl:f.create(r.authorization),name:t})}).then(function(t){var e,n=t.getConfiguration();if(!0===r.kount){if(!n.gatewayConfiguration.kount)return m.reject(new u(v.DATA_COLLECTOR_KOUNT_NOT_ENABLED));try{e=a.setup({environment:n.gatewayConfiguration.environment,merchantId:n.gatewayConfiguration.kount.kountMerchantId})}catch(t){return m.reject(new u({type:v.DATA_COLLECTOR_KOUNT_ERROR.type,code:v.DATA_COLLECTOR_KOUNT_ERROR.code,message:t.message}))}i=e.deviceData,s.push(e)}else i={};return m.resolve()}).then(function(){return!0!==r.paypal?m.resolve():c.setup().then(function(t){t&&(i.correlation_id=t.sessionId,s.push(t))})}).then(function(){return 0===s.length?m.reject(new u(v.DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS)):(o.deviceData=JSON.stringify(i),o.rawDeviceData=i,o.teardown=(e=o,n=s,y(function(){return new m(function(t){n.forEach(function(t){t&&t.teardown()}),p(e,d(e)),t()})})),o);var e,n})}),VERSION:"3.41.0"}},{"../lib/basic-component-verification":14,"../lib/braintree-error":15,"../lib/convert-methods-to-error":18,"../lib/create-assets-url":19,"../lib/create-deferred-client":20,"../lib/methods":23,"../lib/promise":24,"./errors":8,"./fraudnet":9,"./kount":11,"@braintree/wrap-promise":6}],11:[function(t,e,n){"use strict";var r=t("./vendor/sjcl"),i=t("../lib/camel-case-to-snake-case"),o="https://assets.qa.braintreepayments.com/data",s={development:o,qa:o,sandbox:"https://assets.braintreegateway.com/sandbox/data",production:"https://assets.braintreegateway.com/data"},a={};function c(t){var e=c.getCachedDeviceData(t.merchantId);if(e)return this.deviceData=e,void(this._isCached=!0);this._currentEnvironment=this._initializeEnvironment(t),r.random.startCollectors(),this._deviceSessionId=this._generateDeviceSessionId(),this.deviceData=this._getDeviceData(),c.setCachedDeviceData(t.merchantId,this.deviceData),this._iframe=this._setupIFrame()}c.getCachedDeviceData=function(t){return a[t]},c.setCachedDeviceData=function(t,e){a[t]=e},c.prototype.teardown=function(){this._isCached||(r.random.stopCollectors(),this._removeIframe())},c.prototype._removeIframe=function(){this._iframe.parentNode.removeChild(this._iframe)},c.prototype._getDeviceData=function(){return i({deviceSessionId:this._deviceSessionId,fraudMerchantId:this._currentEnvironment.id})},c.prototype._generateDeviceSessionId=function(){var t;return t=r.random.randomWords(4,0),r.codec.hex.fromBits(t)},c.prototype._setupIFrame=function(){var t,e,n=this;return t="?m="+this._currentEnvironment.id+"&s="+this._deviceSessionId,(e=document.createElement("iframe")).width=1,e.id="braintreeDataFrame-"+this._deviceSessionId,e.height=1,e.frameBorder=0,e.scrolling="no",e.style.position="fixed",e.style.left="-999999px",e.style.top="-999999px",document.body.appendChild(e),setTimeout(function(){e.src=n._currentEnvironment.url+"/logo.htm"+t,e.innerHTML='<img src="'+n._currentEnvironment.url+"/logo.gif"+t+'" />'},10),e},c.prototype._initializeEnvironment=function(t){var e=s[t.environment];if(null==e)throw new Error(t.environment+" is not a valid environment for kount.environment");return{url:e,name:t.environment,id:t.merchantId}},e.exports={setup:function(t){return new c(null!=t?t:{})},Kount:c,environmentUrls:s}},{"../lib/camel-case-to-snake-case":16,"./vendor/sjcl":12}],12:[function(t,e,n){"use strict";var E={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};function r(t,e,n){if(4!==e.length)throw new E.exception.invalid("invalid aes block size");var r=t.b[n],i=e[0]^r[0],o=e[n?3:1]^r[1],s=e[2]^r[2];e=e[n?1:3]^r[3];var a,c,u,h,l=r.length/4-2,f=4,d=[0,0,0,0];t=(a=t.l[n])[0];var p=a[1],m=a[2],y=a[3],v=a[4];for(h=0;h<l;h++)a=t[i>>>24]^p[o>>16&255]^m[s>>8&255]^y[255&e]^r[f],c=t[o>>>24]^p[s>>16&255]^m[e>>8&255]^y[255&i]^r[f+1],u=t[s>>>24]^p[e>>16&255]^m[i>>8&255]^y[255&o]^r[f+2],e=t[e>>>24]^p[i>>16&255]^m[o>>8&255]^y[255&s]^r[f+3],f+=4,i=a,o=c,s=u;for(h=0;h<4;h++)d[n?3&-h:h]=v[i>>>24]<<24^v[o>>16&255]<<16^v[s>>8&255]<<8^v[255&e]^r[f++],a=i,i=o,o=s,s=e,e=a;return d}function o(t,e){var n,r,i,o=t.u,s=t.b,a=o[0],c=o[1],u=o[2],h=o[3],l=o[4],f=o[5],d=o[6],p=o[7];for(n=0;n<64;n++)n<16?r=e[n]:(r=e[n+1&15],i=e[n+14&15],r=e[15&n]=(r>>>7^r>>>18^r>>>3^r<<25^r<<14)+(i>>>17^i>>>19^i>>>10^i<<15^i<<13)+e[15&n]+e[n+9&15]|0),r=r+p+(l>>>6^l>>>11^l>>>25^l<<26^l<<21^l<<7)+(d^l&(f^d))+s[n],p=d,d=f,f=l,l=h+r|0,h=u,u=c,a=r+((c=a)&u^h&(c^u))+(c>>>2^c>>>13^c>>>22^c<<30^c<<19^c<<10)|0;o[0]=o[0]+a|0,o[1]=o[1]+c|0,o[2]=o[2]+u|0,o[3]=o[3]+h|0,o[4]=o[4]+l|0,o[5]=o[5]+f|0,o[6]=o[6]+d|0,o[7]=o[7]+p|0}function u(t,e){var n,r=E.random.B[t],i=[];for(n in r)r.hasOwnProperty(n)&&i.push(r[n]);for(n=0;n<i.length;n++)i[n](e)}function i(t,e){"undefined"!=typeof window&&window.performance&&"function"==typeof window.performance.now?t.addEntropy(window.performance.now(),e,"loadtime"):t.addEntropy((new Date).valueOf(),e,"loadtime")}function a(t){t.b=c(t).concat(c(t)),t.C=new E.cipher.aes(t.b)}function c(t){for(var e=0;e<4&&(t.g[e]=t.g[e]+1|0,!t.g[e]);e++);return t.C.encrypt(t.g)}function s(t,e){return function(){e.apply(t,arguments)}}E.cipher.aes=function(t){this.l[0][0][0]||this.G();var e,n,r,i,o=this.l[0][4],s=this.l[1],a=1;if(4!==(e=t.length)&&6!==e&&8!==e)throw new E.exception.invalid("invalid aes key size");for(this.b=[r=t.slice(0),i=[]],t=e;t<4*e+28;t++)n=r[t-1],(0==t%e||8===e&&4==t%e)&&(n=o[n>>>24]<<24^o[n>>16&255]<<16^o[n>>8&255]<<8^o[255&n],0==t%e&&(n=n<<8^n>>>24^a<<24,a=a<<1^283*(a>>7))),r[t]=r[t-e]^n;for(e=0;t;e++,t--)n=r[3&e?t:t-4],i[e]=t<=4||e<4?n:s[0][o[n>>>24]]^s[1][o[n>>16&255]]^s[2][o[n>>8&255]]^s[3][o[255&n]]},E.cipher.aes.prototype={encrypt:function(t){return r(this,t,0)},decrypt:function(t){return r(this,t,1)},l:[[[],[],[],[],[]],[[],[],[],[],[]]],G:function(){var t,e,n,r,i,o,s,a=this.l[0],c=this.l[1],u=a[4],h=c[4],l=[],f=[];for(t=0;t<256;t++)f[(l[t]=t<<1^283*(t>>7))^t]=t;for(e=n=0;!u[e];e^=r||1,n=f[n]||1)for(o=(o=n^n<<1^n<<2^n<<3^n<<4)>>8^255&o^99,s=16843009*(i=l[t=l[r=l[h[u[e]=o]=e]]])^65537*t^257*r^16843008*e,i=257*l[o]^16843008*o,t=0;t<4;t++)a[t][e]=i=i<<24^i>>>8,c[t][o]=s=s<<24^s>>>8;for(t=0;t<5;t++)a[t]=a[t].slice(0),c[t]=c[t].slice(0)}},E.bitArray={bitSlice:function(t,e,n){return t=E.bitArray.M(t.slice(e/32),32-(31&e)).slice(1),void 0===n?t:E.bitArray.clamp(t,n-e)},extract:function(t,e,n){var r=Math.floor(-e-n&31);return(-32&(e+n-1^e)?t[e/32|0]<<32-r^t[e/32+1|0]>>>r:t[e/32|0]>>>r)&(1<<n)-1},concat:function(t,e){if(0===t.length||0===e.length)return t.concat(e);var n=t[t.length-1],r=E.bitArray.getPartial(n);return 32===r?t.concat(e):E.bitArray.M(e,r,0|n,t.slice(0,t.length-1))},bitLength:function(t){var e=t.length;return 0===e?0:32*(e-1)+E.bitArray.getPartial(t[e-1])},clamp:function(t,e){if(32*t.length<e)return t;var n=(t=t.slice(0,Math.ceil(e/32))).length;return e&=31,0<n&&e&&(t[n-1]=E.bitArray.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial:function(t,e,n){return 32===t?e:(n?0|e:e<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,e){if(E.bitArray.bitLength(t)!==E.bitArray.bitLength(e))return!1;var n,r=0;for(n=0;n<t.length;n++)r|=t[n]^e[n];return 0===r},M:function(t,e,n,r){var i;for(void(i=0)===r&&(r=[]);32<=e;e-=32)r.push(n),n=0;if(0===e)return r.concat(t);for(i=0;i<t.length;i++)r.push(n|t[i]>>>e),n=t[i]<<32-e;return i=t.length?t[t.length-1]:0,t=E.bitArray.getPartial(i),r.push(E.bitArray.partial(e+t&31,32<e+t?n:r.pop(),1)),r},Y:function(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]},byteswapM:function(t){var e,n;for(e=0;e<t.length;++e)n=t[e],t[e]=n>>>24|n>>>8&65280|(65280&n)<<8|n<<24;return t}},E.codec.utf8String={fromBits:function(t){var e,n,r="",i=E.bitArray.bitLength(t);for(e=0;e<i/8;e++)0==(3&e)&&(n=t[e/4]),r+=String.fromCharCode(n>>>8>>>8>>>8),n<<=8;return decodeURIComponent(escape(r))},toBits:function(t){t=unescape(encodeURIComponent(t));var e,n=[],r=0;for(e=0;e<t.length;e++)r=r<<8|t.charCodeAt(e),3==(3&e)&&(n.push(r),r=0);return 3&e&&n.push(E.bitArray.partial(8*(3&e),r)),n}},E.codec.hex={fromBits:function(t){var e,n="";for(e=0;e<t.length;e++)n+=(0xf00000000000+(0|t[e])).toString(16).substr(4);return n.substr(0,E.bitArray.bitLength(t)/4)},toBits:function(t){var e,n,r=[];for(n=(t=t.replace(/\s|0x/g,"")).length,t+="00000000",e=0;e<t.length;e+=8)r.push(0^parseInt(t.substr(e,8),16));return E.bitArray.clamp(r,4*n)}},E.hash.sha256=function(t){this.b[0]||this.G(),t?(this.u=t.u.slice(0),this.o=t.o.slice(0),this.h=t.h):this.reset()},E.hash.sha256.hash=function(t){return(new E.hash.sha256).update(t).finalize()},E.hash.sha256.prototype={blockSize:512,reset:function(){return this.u=this.K.slice(0),this.o=[],this.h=0,this},update:function(t){"string"==typeof t&&(t=E.codec.utf8String.toBits(t));var e,n=this.o=E.bitArray.concat(this.o,t);if(e=this.h,9007199254740991<(t=this.h=e+E.bitArray.bitLength(t)))throw new E.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!=typeof Uint32Array){var r=new Uint32Array(n),i=0;for(e=512+e-(512+e&511);e<=t;e+=512)o(this,r.subarray(16*i,16*(i+1))),i+=1;n.splice(0,16*i)}else for(e=512+e-(512+e&511);e<=t;e+=512)o(this,n.splice(0,16));return this},finalize:function(){var t,e=this.o,n=this.u;for(t=(e=E.bitArray.concat(e,[E.bitArray.partial(1,1)])).length+2;15&t;t++)e.push(0);for(e.push(Math.floor(this.h/4294967296)),e.push(0|this.h);e.length;)o(this,e.splice(0,16));return this.reset(),n},K:[],b:[],G:function(){function t(t){return 4294967296*(t-Math.floor(t))|0}for(var e,n,r=0,i=2;r<64;i++){for(n=!0,e=2;e*e<=i;e++)if(0==i%e){n=!1;break}n&&(r<8&&(this.K[r]=t(Math.pow(i,.5))),this.b[r]=t(Math.pow(i,1/3)),r++)}}},E.prng=function(t){this.c=[new E.hash.sha256],this.i=[0],this.H=0,this.v={},this.F=0,this.J={},this.L=this.f=this.j=this.T=0,this.b=[0,0,0,0,0,0,0,0],this.g=[0,0,0,0],this.C=void 0,this.D=t,this.s=!1,this.B={progress:{},seeded:{}},this.m=this.S=0,this.w=1,this.A=2,this.O=65536,this.I=[0,48,64,96,128,192,256,384,512,768,1024],this.P=3e4,this.N=80},E.prng.prototype={randomWords:function(t,e){var n,r,i=[];if((n=this.isReady(e))===this.m)throw new E.exception.notReady("generator isn't seeded");if(n&this.A){n=!(n&this.w),r=[];var o,s=0;for(this.L=r[0]=(new Date).valueOf()+this.P,o=0;o<16;o++)r.push(4294967296*Math.random()|0);for(o=0;o<this.c.length&&(r=r.concat(this.c[o].finalize()),s+=this.i[o],this.i[o]=0,n||!(this.H&1<<o));o++);for(this.H>=1<<this.c.length&&(this.c.push(new E.hash.sha256),this.i.push(0)),this.f-=s,s>this.j&&(this.j=s),this.H++,this.b=E.hash.sha256.hash(this.b.concat(r)),this.C=new E.cipher.aes(this.b),n=0;n<4&&(this.g[n]=this.g[n]+1|0,!this.g[n]);n++);}for(n=0;n<t;n+=4)0==(n+1)%this.O&&a(this),r=c(this),i.push(r[0],r[1],r[2],r[3]);return a(this),i.slice(0,t)},setDefaultParanoia:function(t,e){if(0===t&&"Setting paranoia=0 will ruin your security; use it only for testing"!==e)throw new E.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");this.D=t},addEntropy:function(t,e,n){n=n||"user";var r,i,o=(new Date).valueOf(),s=this.v[n],a=this.isReady(),c=0;switch(void 0===(r=this.J[n])&&(r=this.J[n]=this.T++),void 0===s&&(s=this.v[n]=0),this.v[n]=(this.v[n]+1)%this.c.length,typeof t){case"number":void 0===e&&(e=1),this.c[s].update([r,this.F++,1,e,o,1,0|t]);break;case"object":if("[object Uint32Array]"===(n=Object.prototype.toString.call(t))){for(i=[],n=0;n<t.length;n++)i.push(t[n]);t=i}else for("[object Array]"!==n&&(c=1),n=0;n<t.length&&!c;n++)"number"!=typeof t[n]&&(c=1);if(!c){if(void 0===e)for(n=e=0;n<t.length;n++)for(i=t[n];0<i;)e++,i>>>=1;this.c[s].update([r,this.F++,2,e,o,t.length].concat(t))}break;case"string":void 0===e&&(e=t.length),this.c[s].update([r,this.F++,3,e,o,t.length]),this.c[s].update(t);break;default:c=1}if(c)throw new E.exception.bug("random: addEntropy only supports number, array of numbers or string");this.i[s]+=e,this.f+=e,a===this.m&&(this.isReady()!==this.m&&u("seeded",Math.max(this.j,this.f)),u("progress",this.getProgress()))},isReady:function(t){return t=this.I[void 0!==t?t:this.D],this.j&&this.j>=t?this.i[0]>this.N&&(new Date).valueOf()>this.L?this.A|this.w:this.w:this.f>=t?this.A|this.m:this.m},getProgress:function(t){return t=this.I[t||this.D],this.j>=t?1:this.f>t?1:this.f/t},startCollectors:function(){if(!this.s){if(this.a={loadTimeCollector:s(this,this.V),mouseCollector:s(this,this.W),keyboardCollector:s(this,this.U),accelerometerCollector:s(this,this.R),touchCollector:s(this,this.X)},window.addEventListener)window.addEventListener("load",this.a.loadTimeCollector,!1),window.addEventListener("mousemove",this.a.mouseCollector,!1),window.addEventListener("keypress",this.a.keyboardCollector,!1),window.addEventListener("devicemotion",this.a.accelerometerCollector,!1),window.addEventListener("touchmove",this.a.touchCollector,!1);else{if(!document.attachEvent)throw new E.exception.bug("can't attach event");document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector)}this.s=!0}},stopCollectors:function(){this.s&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,!1),window.removeEventListener("mousemove",this.a.mouseCollector,!1),window.removeEventListener("keypress",this.a.keyboardCollector,!1),window.removeEventListener("devicemotion",this.a.accelerometerCollector,!1),window.removeEventListener("touchmove",this.a.touchCollector,!1)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.s=!1)},addEventListener:function(t,e){this.B[t][this.S++]=e},removeEventListener:function(t,e){var n,r,i=this.B[t],o=[];for(r in i)i.hasOwnProperty(r)&&i[r]===e&&o.push(r);for(n=0;n<o.length;n++)delete i[r=o[n]]},U:function(){i(this,1)},W:function(t){var e,n;try{e=t.x||t.clientX||t.offsetX||0,n=t.y||t.clientY||t.offsetY||0}catch(t){n=e=0}0!=e&&0!=n&&this.addEntropy([e,n],2,"mouse"),i(this,0)},X:function(t){t=t.touches[0]||t.changedTouches[0],this.addEntropy([t.pageX||t.clientX,t.pageY||t.clientY],1,"touch"),i(this,0)},V:function(){i(this,2)},R:function(t){if(t=t.accelerationIncludingGravity.x||t.accelerationIncludingGravity.y||t.accelerationIncludingGravity.z,window.orientation){var e=window.orientation;"number"==typeof e&&this.addEntropy(e,1,"accelerometer")}t&&this.addEntropy(t,2,"accelerometer"),i(this,0)}},E.random=new E.prng(6);t:try{var h,l,f,d;if(d=void 0!==e&&e.exports){var p;try{p=t("crypto")}catch(t){p=null}d=l=p}if(d&&l.randomBytes)h=l.randomBytes(128),h=new Uint32Array(new Uint8Array(h).buffer),E.random.addEntropy(h,1024,"crypto['randomBytes']");else if("undefined"!=typeof window&&"undefined"!=typeof Uint32Array){if(f=new Uint32Array(32),window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(f);else{if(!window.msCrypto||!window.msCrypto.getRandomValues)break t;window.msCrypto.getRandomValues(f)}E.random.addEntropy(f,1024,"crypto['getRandomValues']")}}catch(t){"undefined"!=typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(t))}void 0!==e&&e.exports&&(e.exports=E)},{crypto:void 0}],13:[function(t,e,n){"use strict";var r=t("@braintree/asset-loader/load-script");e.exports={loadScript:r}},{"@braintree/asset-loader/load-script":2}],14:[function(t,e,n){"use strict";var i=t("./braintree-error"),o=t("./promise"),s=t("./errors");e.exports={verify:function(t){var e,n,r;return t?(r=t.name,e=t.client,n=t.authorization,null==e&&null==n?o.reject(new i({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating "+r+"."})):n||"3.41.0"===e.getVersion()?o.resolve():o.reject(new i({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+e.getVersion()+") and "+r+" (version 3.41.0) components must be from the same SDK version."}))):o.reject(new i({type:s.INVALID_USE_OF_INTERNAL_FUNCTION.type,code:s.INVALID_USE_OF_INTERNAL_FUNCTION.code,message:"Options must be passed to basicComponentVerification function."}))}}},{"./braintree-error":15,"./errors":22,"./promise":24}],15:[function(t,e,n){"use strict";var r=t("./enumerate");function i(t){if(!i.types.hasOwnProperty(t.type))throw new Error(t.type+" is not a valid type.");if(!t.code)throw new Error("Error code required.");if(!t.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=t.code,this.message=t.message,this.type=t.type,this.details=t.details}((i.prototype=Object.create(Error.prototype)).constructor=i).types=r(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),i.findRootError=function(t){return t instanceof i&&t.details&&t.details.originalError?i.findRootError(t.details.originalError):t},e.exports=i},{"./enumerate":21}],16:[function(t,e,n){"use strict";e.exports=function(n){return Object.keys(n).reduce(function(t,e){return t[e.replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1_$2").toLowerCase()]=n[e],t},{})}},{}],17:[function(t,e,n){"use strict";e.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,ASSETS_URLS:{production:"https://assets.braintreegateway.com",sandbox:"https://assets.braintreegateway.com"},CLIENT_API_URLS:{production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},FRAUDNET_SOURCE:"BRAINTREE_SIGNIN",FRAUDNET_FNCLS:"fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",FRAUDNET_URL:"https://c.paypal.com/da/r/fb.js",GRAPHQL_URLS:{production:"https://payments.braintree-api.com/graphql",sandbox:"https://payments.sandbox.braintree-api.com/graphql"},INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.41.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.41.0"}},{}],18:[function(t,e,n){"use strict";var r=t("./braintree-error"),i=t("./errors");e.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:i.METHOD_CALLED_AFTER_TEARDOWN.type,code:i.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":15,"./errors":22}],19:[function(t,e,n){"use strict";var r=t("./constants").ASSETS_URLS;e.exports={create:function(t){return r.production}}},{"./constants":17}],20:[function(t,e,n){(function(n){"use strict";var r=t("./braintree-error"),i=t("./promise"),o=t("./assets"),s=t("./errors"),a="3.41.0";e.exports={create:function(t){var e=i.resolve();return t.client?i.resolve(t.client):(n.braintree&&n.braintree.client||(e=o.loadScript({src:t.assetsUrl+"/web/"+a+"/js/client.min.js"}).catch(function(t){return i.reject(new r({type:s.CLIENT_SCRIPT_FAILED_TO_LOAD.type,code:s.CLIENT_SCRIPT_FAILED_TO_LOAD.code,message:s.CLIENT_SCRIPT_FAILED_TO_LOAD.message,details:{originalError:t}}))})),e.then(function(){return n.braintree.client.VERSION!==a?i.reject(new r({type:s.INCOMPATIBLE_VERSIONS.type,code:s.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+n.braintree.client.VERSION+") and "+t.name+" (version "+a+") components must be from the same SDK version."})):n.braintree.client.create({authorization:t.authorization,debug:t.debug})}))}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./assets":13,"./braintree-error":15,"./errors":22,"./promise":24}],21:[function(t,e,n){"use strict";e.exports=function(t,n){return n=null==n?"":n,t.reduce(function(t,e){return t[e]=n+e,t},{})}},{}],22:[function(t,e,n){"use strict";var r=t("./braintree-error");e.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:r.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},CLIENT_SCRIPT_FAILED_TO_LOAD:{type:r.types.NETWORK,code:"CLIENT_SCRIPT_FAILED_TO_LOAD",message:"Braintree client script could not be loaded."},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":15}],23:[function(t,e,n){"use strict";e.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],24:[function(n,r,t){(function(t){"use strict";var e=t.Promise||n("promise-polyfill");r.exports=e}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":7}]},{},[10])(10)});