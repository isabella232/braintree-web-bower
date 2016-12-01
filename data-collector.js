!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(e.braintree||(e.braintree={})).dataCollector=t()}}(function(){var t;return function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return i(n?n:e)},u,u.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){"use strict";var r=t("../lib/error");e.exports={DATA_COLLECTOR_KOUNT_NOT_ENABLED:{type:r.types.MERCHANT,code:"DATA_COLLECTOR_KOUNT_NOT_ENABLED",message:"Kount is not enabled for this merchant."},DATA_COLLECTOR_KOUNT_ERROR:{type:r.types.MERCHANT,code:"DATA_COLLECTOR_KOUNT_ERROR"},DATA_COLLECTOR_PAYPAL_NOT_ENABLED:{type:r.types.MERCHANT,code:"DATA_COLLECTOR_PAYPAL_NOT_ENABLED",message:"PayPal is not enabled for this merchant."},DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS:{type:r.types.MERCHANT,code:"DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS",message:"Data Collector must be created with Kount and/or PayPal."}}},{"../lib/error":10}],2:[function(t,e,n){"use strict";function r(){return new i}function i(){this.sessionId=o(),this._beaconId=s(this.sessionId),this._parameterBlock=a(this.sessionId,this._beaconId),this._thirdPartyBlock=c()}function o(){var t,e="";for(t=0;32>t;t++)e+=Math.floor(16*Math.random()).toString(16);return e}function s(t){var e=(new Date).getTime()/1e3;return"https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p="+t+"&t="+e+"&a=14"}function a(t,e){var n=document.body.appendChild(document.createElement("script"));return n.type="application/json",n.setAttribute("fncls","fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"),n.text=JSON.stringify({f:t,s:"BRAINTREE_SIGNIN",b:e}),n}function c(){function t(){n._l()}var e,n,r="https://www.paypalobjects.com/webstatic/r/fb/",i=document.createElement("iframe");i.src="about:blank",i.title="",i.role="presentation",(i.frameElement||i).style.cssText="width: 0; height: 0; border: 0; position: absolute; z-index: -999",document.body.appendChild(i);try{n=i.contentWindow.document}catch(o){e=document.domain,i.src='javascript:var d=document.open();d.domain="'+e+'";void(0);',n=i.contentWindow.document}return n.open()._l=function(){var t=this.createElement("script");e&&(this.domain=e),t.id="js-iframe-async",t.src=r+"fb-all-prod.pp.min.js",this.body.appendChild(t)},i.addEventListener?i.addEventListener("load",t,!1):i.attachEvent?i.attachEvent("onload",t):n.write('<body onload="document._l();">'),n.close(),i}i.prototype.teardown=function(){this._thirdPartyBlock.parentNode.removeChild(this._thirdPartyBlock)},e.exports={setup:r}},{}],3:[function(t,e,n){"use strict";function r(t,e){function n(t){var e;for(e=0;e<g.length;e++)g[e].teardown();h(y,a(y)),t&&(t=u(t))()}var r,p,m,y,v,E,g=[];if(c(e,"create"),e=u(e),null==t.client)return void e(new s({type:l.INSTANTIATION_OPTION_REQUIRED.type,code:l.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating Data Collector."}));if(v=t.client.getConfiguration(),E=v.analyticsMetadata.sdkVersion,E!==d)return void e(new s({type:l.INCOMPATIBLE_VERSIONS.type,code:l.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+E+") and Data Collector (version "+d+") components must be from the same SDK version."}));if(t.kount===!0){if(!v.gatewayConfiguration.kount)return void e(new s(f.DATA_COLLECTOR_KOUNT_NOT_ENABLED));try{p=i.setup({environment:v.gatewayConfiguration.environment,merchantId:v.gatewayConfiguration.kount.kountMerchantId})}catch(w){return void e(new s({type:f.DATA_COLLECTOR_KOUNT_ERROR.type,code:f.DATA_COLLECTOR_KOUNT_ERROR.code,message:w.message}))}r=p.deviceData,g.push(p)}else r={};if(t.paypal===!0){if(v.gatewayConfiguration.paypalEnabled!==!0)return void e(new s(f.DATA_COLLECTOR_PAYPAL_NOT_ENABLED));m=o.setup(),r.correlation_id=m.sessionId,g.push(m)}return 0===g.length?void e(new s(f.DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS)):(y={deviceData:JSON.stringify(r),teardown:n},void e(null,y))}var i=t("./kount"),o=t("./fraudnet"),s=t("../lib/error"),a=t("../lib/methods"),c=t("../lib/throw-if-no-callback"),h=t("../lib/convert-methods-to-error"),u=t("../lib/deferred"),d="3.6.1",l=t("../errors"),f=t("./errors");e.exports={create:r,VERSION:d}},{"../errors":6,"../lib/convert-methods-to-error":7,"../lib/deferred":8,"../lib/error":10,"../lib/methods":11,"../lib/throw-if-no-callback":12,"./errors":1,"./fraudnet":2,"./kount":4}],4:[function(t,e,n){"use strict";function r(t){var e=null!=t?t:{};return new i(e)}function i(t){o.random.startCollectors(),this._currentEnvironment=this._initializeEnvironment(t),this._deviceSessionId=this._generateDeviceSessionId(),this.deviceData=this._getDeviceData(),this._iframe=this._setupIFrame()}var o=t("./vendor/sjcl"),s="https://assets.qa.braintreepayments.com/data",a="braintreeDataFrame",c={development:s,qa:s,sandbox:"https://assets.braintreegateway.com/sandbox/data",production:"https://assets.braintreegateway.com/data"};i.prototype.teardown=function(){o.random.stopCollectors(),this._removeIframe()},i.prototype._removeIframe=function(){this._iframe.parentNode.removeChild(this._iframe)},i.prototype._getDeviceData=function(){return{device_session_id:this._deviceSessionId,fraud_merchant_id:this._currentEnvironment.id}},i.prototype._generateDeviceSessionId=function(){var t,e;return t=o.random.randomWords(4,0),e=o.codec.hex.fromBits(t)},i.prototype._setupIFrame=function(){var t,e=this,n=document.getElementById(a);return null!=n?n:(t="?m="+this._currentEnvironment.id+"&s="+this._deviceSessionId,n=document.createElement("iframe"),n.width=1,n.id=a,n.height=1,n.frameBorder=0,n.scrolling="no",document.body.appendChild(n),setTimeout(function(){n.src=e._currentEnvironment.url+"/logo.htm"+t,n.innerHTML='<img src="'+e._currentEnvironment.url+"/logo.gif"+t+'" />'},10),n)},i.prototype._initializeEnvironment=function(t){var e=c[t.environment];if(null==e)throw new Error(t.environment+" is not a valid environment for kount.environment");return{url:e,name:t.environment,id:t.merchantId}},e.exports={setup:r,Kount:i,environmentUrls:c}},{"./vendor/sjcl":5}],5:[function(e,n,r){"use strict";function i(t,e,n){if(4!==e.length)throw new d.exception.invalid("invalid aes block size");var r=t.b[n],i=e[0]^r[0],o=e[n?3:1]^r[1],s=e[2]^r[2];e=e[n?1:3]^r[3];var a,c,h,u,l=r.length/4-2,f=4,p=[0,0,0,0];a=t.l[n],t=a[0];var m=a[1],y=a[2],v=a[3],E=a[4];for(u=0;l>u;u++)a=t[i>>>24]^m[o>>16&255]^y[s>>8&255]^v[255&e]^r[f],c=t[o>>>24]^m[s>>16&255]^y[e>>8&255]^v[255&i]^r[f+1],h=t[s>>>24]^m[e>>16&255]^y[i>>8&255]^v[255&o]^r[f+2],e=t[e>>>24]^m[i>>16&255]^y[o>>8&255]^v[255&s]^r[f+3],f+=4,i=a,o=c,s=h;for(u=0;4>u;u++)p[n?3&-u:u]=E[i>>>24]<<24^E[o>>16&255]<<16^E[s>>8&255]<<8^E[255&e]^r[f++],a=i,i=o,o=s,s=e,e=a;return p}function o(t,e){var n,r,i,o=t.u,s=t.b,a=o[0],c=o[1],h=o[2],u=o[3],d=o[4],l=o[5],f=o[6],p=o[7];for(n=0;64>n;n++)16>n?r=e[n]:(r=e[n+1&15],i=e[n+14&15],r=e[15&n]=(r>>>7^r>>>18^r>>>3^r<<25^r<<14)+(i>>>17^i>>>19^i>>>10^i<<15^i<<13)+e[15&n]+e[n+9&15]|0),r=r+p+(d>>>6^d>>>11^d>>>25^d<<26^d<<21^d<<7)+(f^d&(l^f))+s[n],p=f,f=l,l=d,d=u+r|0,u=h,h=c,c=a,a=r+(c&h^u&(c^h))+(c>>>2^c>>>13^c>>>22^c<<30^c<<19^c<<10)|0;o[0]=o[0]+a|0,o[1]=o[1]+c|0,o[2]=o[2]+h|0,o[3]=o[3]+u|0,o[4]=o[4]+d|0,o[5]=o[5]+l|0,o[6]=o[6]+f|0,o[7]=o[7]+p|0}function s(t,e){var n,r=d.random.B[t],i=[];for(n in r)r.hasOwnProperty(n)&&i.push(r[n]);for(n=0;n<i.length;n++)i[n](e)}function a(t,e){"undefined"!=typeof window&&window.performance&&"function"==typeof window.performance.now?t.addEntropy(window.performance.now(),e,"loadtime"):t.addEntropy((new Date).valueOf(),e,"loadtime")}function c(t){t.b=h(t).concat(h(t)),t.C=new d.cipher.aes(t.b)}function h(t){for(var e=0;4>e&&(t.g[e]=t.g[e]+1|0,!t.g[e]);e++);return t.C.encrypt(t.g)}function u(t,e){return function(){e.apply(t,arguments)}}var d={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(t){this.toString=function(){return"CORRUPT: "+this.message},this.message=t},invalid:function(t){this.toString=function(){return"INVALID: "+this.message},this.message=t},bug:function(t){this.toString=function(){return"BUG: "+this.message},this.message=t},notReady:function(t){this.toString=function(){return"NOT READY: "+this.message},this.message=t}}};d.cipher.aes=function(t){this.l[0][0][0]||this.G();var e,n,r,i,o=this.l[0][4],s=this.l[1];e=t.length;var a=1;if(4!==e&&6!==e&&8!==e)throw new d.exception.invalid("invalid aes key size");for(this.b=[r=t.slice(0),i=[]],t=e;4*e+28>t;t++)n=r[t-1],(0===t%e||8===e&&4===t%e)&&(n=o[n>>>24]<<24^o[n>>16&255]<<16^o[n>>8&255]<<8^o[255&n],0===t%e&&(n=n<<8^n>>>24^a<<24,a=a<<1^283*(a>>7))),r[t]=r[t-e]^n;for(e=0;t;e++,t--)n=r[3&e?t:t-4],i[e]=4>=t||4>e?n:s[0][o[n>>>24]]^s[1][o[n>>16&255]]^s[2][o[n>>8&255]]^s[3][o[255&n]]},d.cipher.aes.prototype={encrypt:function(t){return i(this,t,0)},decrypt:function(t){return i(this,t,1)},l:[[[],[],[],[],[]],[[],[],[],[],[]]],G:function(){var t,e,n,r,i,o,s,a=this.l[0],c=this.l[1],h=a[4],u=c[4],d=[],l=[];for(t=0;256>t;t++)l[(d[t]=t<<1^283*(t>>7))^t]=t;for(e=n=0;!h[e];e^=r||1,n=l[n]||1)for(o=n^n<<1^n<<2^n<<3^n<<4,o=o>>8^255&o^99,h[e]=o,u[o]=e,i=d[t=d[r=d[e]]],s=16843009*i^65537*t^257*r^16843008*e,i=257*d[o]^16843008*o,t=0;4>t;t++)a[t][e]=i=i<<24^i>>>8,c[t][o]=s=s<<24^s>>>8;for(t=0;5>t;t++)a[t]=a[t].slice(0),c[t]=c[t].slice(0)}},d.bitArray={bitSlice:function(t,e,n){return t=d.bitArray.M(t.slice(e/32),32-(31&e)).slice(1),void 0===n?t:d.bitArray.clamp(t,n-e)},extract:function(t,e,n){var r=Math.floor(-e-n&31);return(-32&(e+n-1^e)?t[e/32|0]<<32-r^t[e/32+1|0]>>>r:t[e/32|0]>>>r)&(1<<n)-1},concat:function(t,e){if(0===t.length||0===e.length)return t.concat(e);var n=t[t.length-1],r=d.bitArray.getPartial(n);return 32===r?t.concat(e):d.bitArray.M(e,r,0|n,t.slice(0,t.length-1))},bitLength:function(t){var e=t.length;return 0===e?0:32*(e-1)+d.bitArray.getPartial(t[e-1])},clamp:function(t,e){if(32*t.length<e)return t;t=t.slice(0,Math.ceil(e/32));var n=t.length;return e=31&e,n>0&&e&&(t[n-1]=d.bitArray.partial(e,t[n-1]&2147483648>>e-1,1)),t},partial:function(t,e,n){return 32===t?e:(n?0|e:e<<32-t)+1099511627776*t},getPartial:function(t){return Math.round(t/1099511627776)||32},equal:function(t,e){if(d.bitArray.bitLength(t)!==d.bitArray.bitLength(e))return!1;var n,r=0;for(n=0;n<t.length;n++)r|=t[n]^e[n];return 0===r},M:function(t,e,n,r){var i;for(i=0,void 0===r&&(r=[]);e>=32;e-=32)r.push(n),n=0;if(0===e)return r.concat(t);for(i=0;i<t.length;i++)r.push(n|t[i]>>>e),n=t[i]<<32-e;return i=t.length?t[t.length-1]:0,t=d.bitArray.getPartial(i),r.push(d.bitArray.partial(e+t&31,e+t>32?n:r.pop(),1)),r},Y:function(t,e){return[t[0]^e[0],t[1]^e[1],t[2]^e[2],t[3]^e[3]]},byteswapM:function(t){var e,n;for(e=0;e<t.length;++e)n=t[e],t[e]=n>>>24|n>>>8&65280|(65280&n)<<8|n<<24;return t}},d.codec.utf8String={fromBits:function(t){var e,n,r="",i=d.bitArray.bitLength(t);for(e=0;i/8>e;e++)0===(3&e)&&(n=t[e/4]),r+=String.fromCharCode(n>>>24),n<<=8;return decodeURIComponent(escape(r))},toBits:function(t){t=unescape(encodeURIComponent(t));var e,n=[],r=0;for(e=0;e<t.length;e++)r=r<<8|t.charCodeAt(e),3===(3&e)&&(n.push(r),r=0);return 3&e&&n.push(d.bitArray.partial(8*(3&e),r)),n}},d.codec.hex={fromBits:function(t){var e,n="";for(e=0;e<t.length;e++)n+=((0|t[e])+0xf00000000000).toString(16).substr(4);return n.substr(0,d.bitArray.bitLength(t)/4)},toBits:function(t){var e,n,r=[];for(t=t.replace(/\s|0x/g,""),n=t.length,t+="00000000",e=0;e<t.length;e+=8)r.push(0^parseInt(t.substr(e,8),16));return d.bitArray.clamp(r,4*n)}},d.hash.sha256=function(t){this.b[0]||this.G(),t?(this.u=t.u.slice(0),this.o=t.o.slice(0),this.h=t.h):this.reset()},d.hash.sha256.hash=function(t){return(new d.hash.sha256).update(t).finalize()},d.hash.sha256.prototype={blockSize:512,reset:function(){return this.u=this.K.slice(0),this.o=[],this.h=0,this},update:function(t){"string"==typeof t&&(t=d.codec.utf8String.toBits(t));var e,n=this.o=d.bitArray.concat(this.o,t);if(e=this.h,t=this.h=e+d.bitArray.bitLength(t),t>9007199254740991)throw new d.exception.invalid("Cannot hash more than 2^53 - 1 bits");if("undefined"!=typeof Uint32Array){var r=new Uint32Array(n),i=0;for(e=512+e-(512+e&511);t>=e;e+=512)o(this,r.subarray(16*i,16*(i+1))),i+=1;n.splice(0,16*i)}else for(e=512+e-(512+e&511);t>=e;e+=512)o(this,n.splice(0,16));return this},finalize:function(){var t,e=this.o,n=this.u,e=d.bitArray.concat(e,[d.bitArray.partial(1,1)]);for(t=e.length+2;15&t;t++)e.push(0);for(e.push(Math.floor(this.h/4294967296)),e.push(0|this.h);e.length;)o(this,e.splice(0,16));return this.reset(),n},K:[],b:[],G:function(){function t(t){return 4294967296*(t-Math.floor(t))|0}for(var e,n,r=0,i=2;64>r;i++){for(n=!0,e=2;i>=e*e;e++)if(0===i%e){n=!1;break}n&&(8>r&&(this.K[r]=t(Math.pow(i,.5))),this.b[r]=t(Math.pow(i,1/3)),r++)}}},d.prng=function(t){this.c=[new d.hash.sha256],this.i=[0],this.H=0,this.v={},this.F=0,this.J={},this.L=this.f=this.j=this.T=0,this.b=[0,0,0,0,0,0,0,0],this.g=[0,0,0,0],this.C=void 0,this.D=t,this.s=!1,this.B={progress:{},seeded:{}},this.m=this.S=0,this.w=1,this.A=2,this.O=65536,this.I=[0,48,64,96,128,192,256,384,512,768,1024],this.P=3e4,this.N=80},d.prng.prototype={randomWords:function(t,e){var n,r=[];n=this.isReady(e);var i;if(n===this.m)throw new d.exception.notReady("generator isn't seeded");if(n&this.A){n=!(n&this.w),i=[];var o,s=0;for(this.L=i[0]=(new Date).valueOf()+this.P,o=0;16>o;o++)i.push(4294967296*Math.random()|0);for(o=0;o<this.c.length&&(i=i.concat(this.c[o].finalize()),s+=this.i[o],this.i[o]=0,n||!(this.H&1<<o));o++);for(this.H>=1<<this.c.length&&(this.c.push(new d.hash.sha256),this.i.push(0)),this.f-=s,s>this.j&&(this.j=s),this.H++,this.b=d.hash.sha256.hash(this.b.concat(i)),this.C=new d.cipher.aes(this.b),n=0;4>n&&(this.g[n]=this.g[n]+1|0,!this.g[n]);n++);}for(n=0;t>n;n+=4)0===(n+1)%this.O&&c(this),i=h(this),r.push(i[0],i[1],i[2],i[3]);return c(this),r.slice(0,t)},setDefaultParanoia:function(t,e){if(0===t&&"Setting paranoia=0 will ruin your security; use it only for testing"!==e)throw new d.exception.invalid("Setting paranoia=0 will ruin your security; use it only for testing");this.D=t},addEntropy:function(t,e,n){n=n||"user";var r,i,o=(new Date).valueOf(),a=this.v[n],c=this.isReady(),h=0;switch(r=this.J[n],void 0===r&&(r=this.J[n]=this.T++),void 0===a&&(a=this.v[n]=0),this.v[n]=(this.v[n]+1)%this.c.length,typeof t){case"number":void 0===e&&(e=1),this.c[a].update([r,this.F++,1,e,o,1,0|t]);break;case"object":if(n=Object.prototype.toString.call(t),"[object Uint32Array]"===n){for(i=[],n=0;n<t.length;n++)i.push(t[n]);t=i}else for("[object Array]"!==n&&(h=1),n=0;n<t.length&&!h;n++)"number"!=typeof t[n]&&(h=1);if(!h){if(void 0===e)for(n=e=0;n<t.length;n++)for(i=t[n];i>0;)e++,i>>>=1;this.c[a].update([r,this.F++,2,e,o,t.length].concat(t))}break;case"string":void 0===e&&(e=t.length),this.c[a].update([r,this.F++,3,e,o,t.length]),this.c[a].update(t);break;default:h=1}if(h)throw new d.exception.bug("random: addEntropy only supports number, array of numbers or string");this.i[a]+=e,this.f+=e,c===this.m&&(this.isReady()!==this.m&&s("seeded",Math.max(this.j,this.f)),s("progress",this.getProgress()))},isReady:function(t){return t=this.I[void 0!==t?t:this.D],this.j&&this.j>=t?this.i[0]>this.N&&(new Date).valueOf()>this.L?this.A|this.w:this.w:this.f>=t?this.A|this.m:this.m},getProgress:function(t){return t=this.I[t?t:this.D],this.j>=t?1:this.f>t?1:this.f/t},startCollectors:function(){if(!this.s){if(this.a={loadTimeCollector:u(this,this.V),mouseCollector:u(this,this.W),keyboardCollector:u(this,this.U),accelerometerCollector:u(this,this.R),touchCollector:u(this,this.X)},window.addEventListener)window.addEventListener("load",this.a.loadTimeCollector,!1),window.addEventListener("mousemove",this.a.mouseCollector,!1),window.addEventListener("keypress",this.a.keyboardCollector,!1),window.addEventListener("devicemotion",this.a.accelerometerCollector,!1),window.addEventListener("touchmove",this.a.touchCollector,!1);else{if(!document.attachEvent)throw new d.exception.bug("can't attach event");document.attachEvent("onload",this.a.loadTimeCollector),document.attachEvent("onmousemove",this.a.mouseCollector),document.attachEvent("keypress",this.a.keyboardCollector)}this.s=!0}},stopCollectors:function(){this.s&&(window.removeEventListener?(window.removeEventListener("load",this.a.loadTimeCollector,!1),window.removeEventListener("mousemove",this.a.mouseCollector,!1),window.removeEventListener("keypress",this.a.keyboardCollector,!1),window.removeEventListener("devicemotion",this.a.accelerometerCollector,!1),window.removeEventListener("touchmove",this.a.touchCollector,!1)):document.detachEvent&&(document.detachEvent("onload",this.a.loadTimeCollector),document.detachEvent("onmousemove",this.a.mouseCollector),document.detachEvent("keypress",this.a.keyboardCollector)),this.s=!1)},addEventListener:function(t,e){this.B[t][this.S++]=e},removeEventListener:function(t,e){var n,r,i=this.B[t],o=[];for(r in i)i.hasOwnProperty(r)&&i[r]===e&&o.push(r);for(n=0;n<o.length;n++)r=o[n],delete i[r]},U:function(){a(this,1)},W:function(t){var e,n;try{e=t.x||t.clientX||t.offsetX||0,n=t.y||t.clientY||t.offsetY||0}catch(r){n=e=0}0!=e&&0!=n&&this.addEntropy([e,n],2,"mouse"),a(this,0)},X:function(t){t=t.touches[0]||t.changedTouches[0],this.addEntropy([t.pageX||t.clientX,t.pageY||t.clientY],1,"touch"),a(this,0)},V:function(){a(this,2)},R:function(t){if(t=t.accelerationIncludingGravity.x||t.accelerationIncludingGravity.y||t.accelerationIncludingGravity.z,window.orientation){var e=window.orientation;"number"==typeof e&&this.addEntropy(e,1,"accelerometer")}t&&this.addEntropy(t,2,"accelerometer"),a(this,0)}},d.random=new d.prng(6);t:try{var l,f,p,m;if(m="undefined"!=typeof n&&n.exports){var y;try{y=e("crypto")}catch(v){y=null}m=f=y}if(m&&f.randomBytes)l=f.randomBytes(128),l=new Uint32Array(new Uint8Array(l).buffer),d.random.addEntropy(l,1024,"crypto['randomBytes']");else if("undefined"!=typeof window&&"undefined"!=typeof Uint32Array){if(p=new Uint32Array(32),window.crypto&&window.crypto.getRandomValues)window.crypto.getRandomValues(p);else{if(!window.msCrypto||!window.msCrypto.getRandomValues)break t;window.msCrypto.getRandomValues(p)}d.random.addEntropy(p,1024,"crypto['getRandomValues']")}}catch(v){"undefined"!=typeof window&&window.console&&(console.log("There was an error collecting entropy from the browser:"),console.log(v))}"undefined"!=typeof n&&n.exports&&(n.exports=d),"function"==typeof t&&t([],function(){return d})},{crypto:void 0}],6:[function(t,e,n){"use strict";var r=t("./lib/error");e.exports={CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./lib/error":10}],7:[function(t,e,n){"use strict";var r=t("./error"),i=t("../errors");e.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new r({type:i.METHOD_CALLED_AFTER_TEARDOWN.type,code:i.METHOD_CALLED_AFTER_TEARDOWN.code,message:e+" cannot be called after teardown."})}})}},{"../errors":6,"./error":10}],8:[function(t,e,n){"use strict";e.exports=function(t){return function(){var e=arguments;setTimeout(function(){t.apply(null,e)},1)}}},{}],9:[function(t,e,n){"use strict";function r(t,e){return e=null==e?"":e,t.reduce(function(t,n){return t[n]=e+n,t},{})}e.exports=r},{}],10:[function(t,e,n){"use strict";function r(t){if(!r.types.hasOwnProperty(t.type))throw new Error(t.type+" is not a valid type.");if(!t.code)throw new Error("Error code required.");if(!t.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=t.code,this.message=t.message,this.type=t.type,this.details=t.details}var i=t("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),e.exports=r},{"./enumerate":9}],11:[function(t,e,n){"use strict";e.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],12:[function(t,e,n){"use strict";var r=t("./error"),i=t("../errors");e.exports=function(t,e){if("function"!=typeof t)throw new r({type:i.CALLBACK_REQUIRED.type,code:i.CALLBACK_REQUIRED.code,message:e+" must include a callback function."})}},{"../errors":6,"./error":10}]},{},[3])(3)});
