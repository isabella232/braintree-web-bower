!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).paypal=e()}}(function(){var e;return function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var p=new Error("Cannot find module '"+s+"'");throw p.code="MODULE_NOT_FOUND",p}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return i(n?n:t)},u,u.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,n,r){(function(t){"use strict";!function(i,o){"object"==typeof r&&"undefined"!=typeof n?n.exports=o("undefined"==typeof t?i:t):"function"==typeof e&&e.amd?e([],function(){return o(i)}):i.framebus=o(i)}(this,function(e){function t(e){return null==e?!1:null==e.Window?!1:e.constructor!==e.Window?!1:(b.push(e),!0)}function n(e){var t,n={};for(t in g)g.hasOwnProperty(t)&&(n[t]=g[t]);return n._origin=e||"*",n}function r(e){var t,n,r=s(this);return a(e)?!1:a(r)?!1:(n=Array.prototype.slice.call(arguments,1),t=c(e,n,r),t===!1?!1:(_(A.top||A.self,t,r),!0))}function i(e,t){var n=s(this);return E(e,t,n)?!1:(P[n]=P[n]||{},P[n][e]=P[n][e]||[],P[n][e].push(t),!0)}function o(e,t){var n,r,i=s(this);if(E(e,t,i))return!1;if(r=P[i]&&P[i][e],!r)return!1;for(n=0;n<r.length;n++)if(r[n]===t)return r.splice(n,1),!0;return!1}function s(e){return e&&e._origin||"*"}function a(e){return"string"!=typeof e}function c(e,t,n){var r=!1,i={event:e,origin:n},o=t[t.length-1];"function"==typeof o&&(i.reply=m(o,n),t=t.slice(0,-1)),i.args=t;try{r=v+JSON.stringify(i)}catch(s){throw new Error("Could not stringify event: "+s.message)}return r}function p(e){var t,n,r,i;if(e.data.slice(0,v.length)!==v)return!1;try{t=JSON.parse(e.data.slice(v.length))}catch(o){return!1}return null!=t.reply&&(n=e.origin,r=e.source,i=t.reply,t.reply=function(e){var t=c(i,[e],n);return t===!1?!1:void r.postMessage(t,n)},t.args.push(t.reply)),t}function u(t){A||(A=t||e,A.addEventListener?A.addEventListener("message",f,!1):A.attachEvent?A.attachEvent("onmessage",f):null===A.onmessage?A.onmessage=f:A=null)}function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}function f(e){var t;a(e.data)||(t=p(e),t&&(d("*",t.event,t.args,e),d(e.origin,t.event,t.args,e),y(e.data,t.origin,e.source)))}function d(e,t,n,r){var i;if(P[e]&&P[e][t])for(i=0;i<P[e][t].length;i++)P[e][t][i].apply(r,n)}function h(e){return e.top!==e?!1:null==e.opener?!1:e.opener===e?!1:e.opener.closed===!0?!1:!0}function _(e,t,n){var r;try{for(e.postMessage(t,n),h(e)&&_(e.opener.top,t,n),r=0;r<e.frames.length;r++)_(e.frames[r],t,n)}catch(i){}}function y(e,t,n){var r,i;for(r=b.length-1;r>=0;r--)i=b[r],i.closed===!0?b=b.slice(r,1):n!==i&&_(i.top,e,t)}function m(e,t){function n(i,o){e(i,o),g.target(t).unsubscribe(r,n)}var r=l();return g.target(t).subscribe(r,n),r}function E(e,t,n){return a(e)?!0:"function"!=typeof t?!0:a(n)?!0:!1}var A,g,b=[],P={},v="/*framebus*/";return u(),g={target:n,include:t,publish:r,pub:r,trigger:r,emit:r,subscribe:i,sub:i,on:i,unsubscribe:o,unsub:o,off:o}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),i=e("./lib/default-attributes"),o=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),n=o({},i,e);return n.style&&"string"!=typeof n.style&&(o(t.style,n.style),delete n.style),r(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":3,"./lib/default-attributes":4,"./lib/set-attributes":5}],3:[function(e,t,n){"use strict";t.exports=function(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}},{}],4:[function(e,t,n){"use strict";t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],5:[function(e,t,n){"use strict";t.exports=function(e,t){var n;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],null==n?e.removeAttribute(r):e.setAttribute(r,n))}},{}],6:[function(e,t,n){"use strict";function r(e,t){var n,r=t?o(t):{},a=i(e.authorization).attrs,c=o(e.analyticsMetadata);r.braintreeLibraryVersion=s.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,a.tokenizationKey?r.tokenizationKey=a.tokenizationKey:r.authorizationFingerprint=a.authorizationFingerprint,r}var i=e("./create-authorization-data"),o=e("./json-clone"),s=e("./constants");t.exports=r},{"./constants":14,"./create-authorization-data":17,"./json-clone":32}],7:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function i(e,t,n){var i=e.getConfiguration(),a=e._request,c=r(Date.now()),p=i.gatewayConfiguration.analytics.url,u={analytics:[{kind:o.ANALYTICS_PREFIX+t,timestamp:c}]};a({url:p,method:"post",data:s(i,u),timeout:o.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var o=e("./constants"),s=e("./add-metadata");t.exports={sendEvent:i}},{"./add-metadata":6,"./constants":14}],8:[function(e,t,n){"use strict";function r(e){var t,n,r;for(t=1;t<arguments.length;t++){n=arguments[t];for(r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}var i="function"==typeof Object.assign?Object.assign:r;t.exports={assign:i,_assign:r}},{}],9:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var i=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=i(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),t.exports=r},{"./enumerate":19}],10:[function(e,t,n){(function(e){"use strict";function n(t){return t=t||e.navigator.userAgent,t.indexOf("Opera Mini")>-1}function r(t){return t=t||e.navigator.userAgent,c(t)&&t.indexOf("Firefox")>-1}function i(t){return t=t||e.navigator.userAgent,-1!==t.indexOf("MSIE")?parseInt(t.replace(/.*MSIE ([0-9]+)\..*/,"$1"),10):/Trident.*rv:11/.test(t)?11:null}function o(e){return e=e||navigator.userAgent,-1!==e.indexOf("MSIE 9")}function s(t){return t=t||e.location.protocol,"https:"===t}function a(t){return t=t||e.navigator.userAgent,/iPhone|iPod|iPad/i.test(t)}function c(t){return t=t||e.navigator.userAgent,/Android/.test(t)}function p(t){var n,r;return t=t||e.navigator.userAgent,(n=t.match(/CriOS\/(\d+)\./))?(r=parseInt(n[1],10),h>r):!1}function u(t){return t=t||e.navigator.userAgent,!(f(t)||d(t)||n(t)||p(t))}function l(e){return/\bGSA\b/.test(e)}function f(t){return t=t||e.navigator.userAgent,a(t)?l(t)?!0:/.+AppleWebKit(?!.*Safari)/.test(t):!1}function d(t){var r=/Version\/[\d\.]+/;return t=t||e.navigator.userAgent,c(t)?r.test(t)&&!n(t):!1}var h=48;t.exports={isOperaMini:n,isAndroidFirefox:r,getIEVersion:i,isIe9:o,isHTTPS:s,isIos:a,isAndroid:c,isUnsupportedIosChrome:p,supportsPopups:u}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],11:[function(e,t,n){"use strict";function r(e,t){var n,r,o=document.createElement("a");return o.href=t,r="https:"===o.protocol?o.host.replace(/:443$/,""):"http:"===o.protocol?o.host.replace(/:80$/,""):o.host,n=o.protocol+"//"+r,n===e?!0:(o.href=e,i(e))}var i=e("../is-whitelisted-domain");t.exports={checkOrigin:r}},{"../is-whitelisted-domain":31}],12:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":19}],13:[function(e,t,n){"use strict";function r(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new a({type:a.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var i=e("framebus"),o=e("./events"),s=e("./check-origin").checkOrigin,a=e("../braintree-error");r.prototype.on=function(e,t){var n,r,o=t,a=this;this._isDestroyed||(this.merchantUrl&&(o=function(){s(this.origin,a.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=o,this._log("on",r),i.on.apply(i,r),this._listeners.push({eventName:e,handler:o,originalHandler:t}))},r.prototype.emit=function(e){var t;this._isDestroyed||(t=Array.prototype.slice.call(arguments),t[0]=this._namespaceEvent(e),this._log("emit",t),i.emit.apply(i,t))},r.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),i.off.apply(i,t))},r.prototype.off=function(e,t){var n,r,i=t;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===t&&(i=r.handler);this._offDirect(e,i)}},r.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},r.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},r.events=o,t.exports=r},{"../braintree-error":9,"./check-origin":11,"./events":12,framebus:1}],14:[function(e,t,n){"use strict";var r="3.12.0",i="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:i,BRAINTREE_LIBRARY_VERSION:"braintree/"+i+"/"+r}},{}],15:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("./errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:i.METHOD_CALLED_AFTER_TEARDOWN.type,code:i.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"./braintree-error":9,"./errors":20}],16:[function(e,t,n){"use strict";function r(e,t){return e instanceof i?e:new i({type:t.type,code:t.code,message:t.message,details:{originalError:e}})}var i=e("./braintree-error");t.exports=r},{"./braintree-error":9}],17:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function i(e){var t=e.split("_"),n=t[0],r=t.slice(2).join("_");return{merchantId:r,environment:n}}function o(e){var t,n,o={attrs:{},configUrl:""};return r(e)?(n=i(e),o.attrs.tokenizationKey=e,o.configUrl=a[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(s(e)),o.attrs.authorizationFingerprint=t.authorizationFingerprint,o.configUrl=t.configUrl),o}var s=e("../lib/polyfill").atob,a={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=o},{"../lib/polyfill":35}],18:[function(e,t,n){"use strict";t.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],19:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],20:[function(e,t,n){"use strict";var r=e("./braintree-error");t.exports={CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INVALID_OPTION:{type:r.types.MERCHANT,code:"INVALID_OPTION"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":9}],21:[function(e,t,n){(function(n){"use strict";function r(){}function i(e){if(!e)throw new Error("Valid configuration is required");if(m.forEach(function(t){if(!e.hasOwnProperty(t))throw new Error("A valid frame "+t+" must be provided")}),!/^[\w_]+$/.test(e.name))throw new Error("A valid frame name must be provided")}function o(e){i(e),this._serviceId=d().replace(/-/g,""),this._options={name:e.name+"_"+this._serviceId,dispatchFrameUrl:e.dispatchFrameUrl,openFrameUrl:e.openFrameUrl,height:e.height,width:e.width},this.state=e.state,this._bus=new p({channel:this._serviceId}),this._setBusEvents()}var s=e("./strategies/popup"),a=e("./strategies/popup-bridge"),c=e("./strategies/modal"),p=e("../../bus"),u=e("../shared/events"),l=e("../shared/errors"),f=e("../shared/constants"),d=e("../../uuid"),h=e("iframer"),_=e("../../braintree-error"),y=e("../../browser-detection"),m=["name","dispatchFrameUrl","openFrameUrl"];o.prototype.initialize=function(e){var t=function(){e(),this._bus.off(u.DISPATCH_FRAME_READY,t)}.bind(this);this._bus.on(u.DISPATCH_FRAME_READY,t),this._writeDispatchFrame()},o.prototype._writeDispatchFrame=function(){var e=f.DISPATCH_FRAME_NAME+"_"+this._serviceId,t=this._options.dispatchFrameUrl;this._dispatchFrame=h({name:e,src:t,"class":f.DISPATCH_FRAME_CLASS,height:0,width:0,style:{position:"absolute",left:"-9999px"}}),document.body.appendChild(this._dispatchFrame)},o.prototype._setBusEvents=function(){this._bus.on(u.DISPATCH_FRAME_REPORT,function(e,t){this._onCompleteCallback&&this._onCompleteCallback.call(null,e.err,e.payload),this._frame.close(),this._onCompleteCallback=null,t&&t()}.bind(this)),this._bus.on(p.events.CONFIGURATION_REQUEST,function(e){e(this.state)}.bind(this))},o.prototype.open=function(e){return this._frame=this._getFrameForEnvironment(),this._frame.initialize(e),this._frame instanceof a?void 0:(this._onCompleteCallback=e,this._frame.open(),this.isFrameClosed()?(this._cleanupFrame(),void(e&&e(new _(l.FRAME_SERVICE_FRAME_OPEN_FAILED)))):void this._pollForPopupClose())},o.prototype.redirect=function(e){this._frame&&!this.isFrameClosed()&&this._frame.redirect(e)},o.prototype.close=function(){this.isFrameClosed()||this._frame.close()},o.prototype.focus=function(){this.isFrameClosed()||this._frame.focus()},o.prototype.createHandler=function(e){return e=e||{},{close:function(){e.beforeClose&&e.beforeClose(),this.close()}.bind(this),focus:function(){e.beforeFocus&&e.beforeFocus(),this.focus()}.bind(this)}},o.prototype.createNoopHandler=function(){return{close:r,focus:r}},o.prototype.teardown=function(){this.close(),this._dispatchFrame.parentNode.removeChild(this._dispatchFrame),this._dispatchFrame=null,this._cleanupFrame()},o.prototype.isFrameClosed=function(){return null==this._frame||this._frame.closed},o.prototype._cleanupFrame=function(){this._frame=null,clearInterval(this._popupInterval),this._popupInterval=null},o.prototype._pollForPopupClose=function(){return this._popupInterval=setInterval(function(){this.isFrameClosed()&&(this._cleanupFrame(),this._onCompleteCallback&&this._onCompleteCallback(new _(l.FRAME_SERVICE_FRAME_CLOSED)))}.bind(this),f.POPUP_POLL_INTERVAL),this._popupInterval},o.prototype._getFrameForEnvironment=function(){var e=y.supportsPopups(),t=Boolean(n.popupBridge);return e?new s(this._options):t?new a(this._options):new c(this._options)},t.exports=o}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../braintree-error":9,"../../browser-detection":10,"../../bus":13,"../../uuid":39,"../shared/constants":28,"../shared/errors":29,"../shared/events":30,"./strategies/modal":23,"./strategies/popup":26,"./strategies/popup-bridge":24,iframer:2}],22:[function(e,t,n){"use strict";var r=e("./frame-service");t.exports={create:function(e,t){var n=new r(e);n.initialize(function(){t(n)})}}},{"./frame-service":21}],23:[function(e,t,n){"use strict";function r(){}function i(e){this.closed=null,this._frame=null,this._options=e||{},this._container=this._options.container||document.body}var o=e("iframer"),s=e("../../../assign").assign,a=e("../../../browser-detection"),c={position:"fixed",top:0,left:0,bottom:0,padding:0,margin:0,border:0,outline:"none",zIndex:20001,background:"#FFFFFF"};i.prototype.initialize=r,i.prototype.open=function(){var e={src:this._options.openFrameUrl,name:this._options.name,scrolling:"yes",height:"100%",width:"100%",style:s({},c)};a.isIos()?(e.style.position="absolute",this._el=document.createElement("div"),this._frame=o(e),this._el.appendChild(this._frame)):this._el=this._frame=o(e),this.closed=!1,this._container.appendChild(this._el)},i.prototype.focus=r,i.prototype.close=function(){this._container.removeChild(this._el),this._frame=null,this.closed=!0},i.prototype.redirect=function(e){this._frame.src=e},t.exports=i},{"../../../assign":8,"../../../browser-detection":10,iframer:2}],24:[function(e,t,n){(function(n){"use strict";function r(){}function i(e){this.closed=null,this._options=e}var o=e("../../../braintree-error"),s=e("../../shared/errors");i.prototype.initialize=function(e){var t=this;n.popupBridge.onComplete=function(n,r){var i=!r&&!n;return t.closed=!0,n||i?void e(new o(s.FRAME_SERVICE_FRAME_CLOSED)):void e(null,r)}},i.prototype.open=function(e){var t;e=e||{},t=e.openFrameUrl||this._options.openFrameUrl,this.closed=!1,n.popupBridge.open(t)},i.prototype.focus=r,i.prototype.close=r,i.prototype.redirect=function(e){this.open({openFrameUrl:e})},t.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../braintree-error":9,"../../shared/errors":29}],25:[function(e,t,n){"use strict";var r=e("../../../shared/constants"),i=e("./position");t.exports=function(e){var t=e.height||r.DEFAULT_POPUP_HEIGHT,n=e.width||r.DEFAULT_POPUP_WIDTH;return[r.POPUP_BASE_OPTIONS,"height="+t,"width="+n,"top="+i.top(t),"left="+i.left(n)].join(",")}},{"../../../shared/constants":28,"./position":27}],26:[function(e,t,n){(function(n){"use strict";function r(){}function i(e){this.closed=null,this._frame=null,this._options=e||{},this.open()}var o=e("./compose-options");i.prototype.initialize=r,i.prototype.open=function(){this._frame=n.open(this._options.openFrameUrl,this._options.name,o(this._options)),this.closed=!1},i.prototype.focus=function(){this._frame.focus()},i.prototype.close=function(){this.closed||(this.closed=!0,this._frame.close())},i.prototype.redirect=function(e){this._frame.location.href=e},t.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./compose-options":25}],27:[function(e,t,n){(function(e){"use strict";function n(t){var n=e.outerHeight||document.documentElement.clientHeight,r=null==e.screenY?e.screenTop:e.screenY;return i(n,t,r)}function r(t){var n=e.outerWidth||document.documentElement.clientWidth,r=null==e.screenX?e.screenLeft:e.screenX;return i(n,t,r)}function i(e,t,n){return(e-t)/2+n}t.exports={top:n,left:r,center:i}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],28:[function(e,t,n){"use strict";t.exports={DISPATCH_FRAME_NAME:"dispatch",DISPATCH_FRAME_CLASS:"braintree-dispatch-frame",POPUP_BASE_OPTIONS:"resizable,scrollbars",DEFAULT_POPUP_WIDTH:450,DEFAULT_POPUP_HEIGHT:535,POPUP_POLL_INTERVAL:100,POPUP_CLOSE_TIMEOUT:100}},{}],29:[function(e,t,n){"use strict";var r=e("../../braintree-error");t.exports={FRAME_SERVICE_FRAME_CLOSED:{type:r.types.INTERNAL,code:"FRAME_SERVICE_FRAME_CLOSED",message:"Frame closed before tokenization could occur."},FRAME_SERVICE_FRAME_OPEN_FAILED:{type:r.types.INTERNAL,code:"FRAME_SERVICE_FRAME_OPEN_FAILED",message:"Frame failed to open."}}},{"../../braintree-error":9}],30:[function(e,t,n){"use strict";var r=e("../../enumerate");t.exports=r(["DISPATCH_FRAME_READY","DISPATCH_FRAME_REPORT"],"frameService:")},{"../../enumerate":19}],31:[function(e,t,n){"use strict";function r(e){return e.split(".").slice(-2).join(".")}function i(e){var t;return e=e.toLowerCase(),/^https:/.test(e)?(o=o||document.createElement("a"),o.href=e,t=r(o.hostname),s.hasOwnProperty(t)):!1}var o,s={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=i},{}],32:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],33:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],34:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],35:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,i,o,s,a,c,p=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l="";if(!p.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do i=u.indexOf(e.charAt(c++)),o=u.indexOf(e.charAt(c++)),s=u.indexOf(e.charAt(c++)),a=u.indexOf(e.charAt(c++)),t=(63&i)<<2|o>>4&3,n=(15&o)<<4|s>>2&15,r=(3&s)<<6|63&a,l+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(c<e.length);return l}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:function(t){return r.call(e,t)},_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],36:[function(e,t,n){(function(e){"use strict";function n(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&"[object Array]"===Object.prototype.toString.call(e)||!1}function i(t){var n,r;return t=t||e.location.href,/\?/.test(t)?(n=t.replace(/#.*$/,"").replace(/^.*\?/,"").split("&"),r=n.reduce(function(e,t){var n=t.split("="),r=decodeURIComponent(n[0]),i=decodeURIComponent(n[1]);return e[r]=i,e},{})):{}}function o(e,t){var n,i,s,a=[];for(s in e)e.hasOwnProperty(s)&&(i=e[s],n=t?r(e)?t+"[]":t+"["+s+"]":s,"object"==typeof i?a.push(o(i,n)):a.push(encodeURIComponent(n)+"="+encodeURIComponent(i)));return a.join("&")}function s(e,t){return e=e||"",null!=t&&"object"==typeof t&&n(t)&&(e+=-1===e.indexOf("?")?"?":"",e+=-1!==e.indexOf("=")?"&":"",e+=o(t)),e}t.exports={parse:i,stringify:o,queryify:s}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],37:[function(e,t,n){"use strict";var r=e("./braintree-error"),i=e("./errors");t.exports=function(e,t){if("function"!=typeof e)throw new r({type:i.CALLBACK_REQUIRED.type,code:i.CALLBACK_REQUIRED.code,message:t+" must include a callback function."})}},{"./braintree-error":9,"./errors":20}],38:[function(e,t,n){"use strict";function r(e){return e?"":".min"}t.exports=r},{}],39:[function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}t.exports=r},{}],40:[function(e,t,n){(function(n){"use strict";function r(e){this._client=e.client,this._assetsUrl=e.client.getConfiguration().gatewayConfiguration.paypal.assetsUrl+"/web/"+p,this._isDebug=e.client.getConfiguration().isDebug,this._loadingFrameUrl=this._assetsUrl+"/html/paypal-landing-frame"+a(this._isDebug)+".html",this._authorizationInProgress=!1}var i=e("../../lib/frame-service/external"),o=e("../../lib/braintree-error"),s=e("../../lib/convert-to-braintree-error"),a=e("../../lib/use-min"),c=e("../../lib/once"),p="3.12.0",u=e("../shared/constants"),l=e("../../lib/constants").INTEGRATION_TIMEOUT_MS,f=e("../../lib/analytics"),d=e("../../lib/throw-if-no-callback"),h=e("../../lib/methods"),_=e("../../lib/deferred"),y=e("../shared/errors"),m=e("../../lib/convert-methods-to-error"),E=e("../../lib/querystring");r.prototype._initialize=function(e){var t=this._client,n=setTimeout(function(){f.sendEvent(t,"paypal.load.timed-out")},l);i.create({name:u.LANDING_FRAME_NAME,dispatchFrameUrl:this._assetsUrl+"/html/dispatch-frame"+a(this._isDebug)+".html",openFrameUrl:this._loadingFrameUrl},function(r){this._frameService=r,clearTimeout(n),f.sendEvent(t,"paypal.load.succeeded"),e()}.bind(this))},r.prototype.tokenize=function(e,t){var r=this._client;return d(t,"tokenize"),t=c(_(t)),e&&u.FLOW_ENDPOINTS.hasOwnProperty(e.flow)?(this._authorizationInProgress?(f.sendEvent(r,"paypal.tokenization.error.already-opened"),t(new o(y.PAYPAL_TOKENIZATION_REQUEST_ACTIVE))):(this._authorizationInProgress=!0,n.popupBridge||f.sendEvent(r,"paypal.tokenization.opened"),e.offerCredit===!0&&"checkout"===e.flow&&f.sendEvent(r,"paypal.credit.offered"),this._navigateFrameToAuth(e,t),this._frameService.open(this._createFrameServiceCallback(e,t))),this._frameService.createHandler({beforeClose:function(){f.sendEvent(r,"paypal.tokenization.closed.by-merchant")}})):(t(new o(y.PAYPAL_FLOW_OPTION_REQUIRED)),this._frameService.createNoopHandler())},r.prototype._createFrameServiceCallback=function(e,t){var r=this._client;return n.popupBridge?function(n,i){var s=i&&i.path&&"/cancel"===i.path.substring(0,7);this._authorizationInProgress=!1,n||s?(f.sendEvent(r,"paypal.tokenization.closed-popupbridge.by-user"),t(new o(y.PAYPAL_POPUP_CLOSED))):i&&this._tokenizePayPal(e,i.queryItems,t)}.bind(this):function(n,i){this._authorizationInProgress=!1,n?"FRAME_SERVICE_FRAME_CLOSED"===n.code?(f.sendEvent(r,"paypal.tokenization.closed.by-user"),t(new o(y.PAYPAL_POPUP_CLOSED))):"FRAME_SERVICE_FRAME_OPEN_FAILED"===n.code&&t(new o(y.PAYPAL_POPUP_OPEN_FAILED)):i&&this._tokenizePayPal(e,i,t)}.bind(this)},r.prototype._tokenizePayPal=function(e,t,r){var i,o=this._client;n.popupBridge||this._frameService.redirect(this._loadingFrameUrl),o.request({endpoint:"payment_methods/paypal_accounts",method:"post",data:this._formatTokenizeData(e,t)},function(e,t){e?(n.popupBridge?f.sendEvent(o,"paypal.tokenization.failed-popupbridge"):f.sendEvent(o,"paypal.tokenization.failed"),r(s(e,{type:y.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,code:y.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,message:y.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message}))):(i=this._formatTokenizePayload(t),n.popupBridge?f.sendEvent(o,"paypal.tokenization.success-popupbridge"):f.sendEvent(o,"paypal.tokenization.success"),i.creditFinancingOffered&&f.sendEvent(o,"paypal.credit.accepted"),r(null,i)),this._frameService.close()}.bind(this))},r.prototype._formatTokenizePayload=function(e){var t,n={};return e.paypalAccounts&&(n=e.paypalAccounts[0]),t={nonce:n.nonce,details:{},type:n.type},n.details&&n.details.payerInfo&&(t.details=n.details.payerInfo),n.details&&n.details.creditFinancingOffered&&(t.creditFinancingOffered=n.details.creditFinancingOffered),t},r.prototype._formatTokenizeData=function(e,t){var n=this._client.getConfiguration(),r=n.gatewayConfiguration,i="TOKENIZATION_KEY"===n.authorizationType,o={paypalAccount:{correlationId:t.ba_token||t.token,options:{validate:"vault"===e.flow&&!i}}};return t.ba_token?o.paypalAccount.billingAgreementToken=t.ba_token:(o.paypalAccount.paymentToken=t.paymentId,o.paypalAccount.payerId=t.PayerID,o.paypalAccount.unilateral=r.paypal.unvettedMerchant,e.hasOwnProperty("intent")&&(o.paypalAccount.intent=e.intent)),o},r.prototype._navigateFrameToAuth=function(e,t){var r=this._client,i="paypal_hermes/"+u.FLOW_ENDPOINTS[e.flow];r.request({endpoint:i,method:"post",data:this._formatPaymentResourceData(e)},function(i,a,c){var p;i?(t(422===c?new o({type:y.PAYPAL_INVALID_PAYMENT_OPTION.type,code:y.PAYPAL_INVALID_PAYMENT_OPTION.code,message:y.PAYPAL_INVALID_PAYMENT_OPTION.message,details:{originalError:i}}):s(i,{type:y.PAYPAL_FLOW_FAILED.type,code:y.PAYPAL_FLOW_FAILED.code,message:y.PAYPAL_FLOW_FAILED.message})),this._frameService.close(),this._authorizationInProgress=!1):(p="checkout"===e.flow?a.paymentResource.redirectUrl:a.agreementSetup.approvalUrl,"commit"===e.useraction&&(p=E.queryify(p,{useraction:"commit"})),n.popupBridge&&f.sendEvent(r,"paypal.tokenization.opened-popupbridge"),this._frameService.redirect(p))}.bind(this))},r.prototype._formatPaymentResourceData=function(e){var t,r=this._client.getConfiguration().gatewayConfiguration,i=this._frameService._serviceId,o={returnUrl:r.paypal.assetsUrl+"/web/"+p+"/html/paypal-redirect-frame"+a(this._isDebug)+".html?channel="+i,cancelUrl:r.paypal.assetsUrl+"/web/"+p+"/html/paypal-cancel-frame"+a(this._isDebug)+".html?channel="+i,experienceProfile:{brandName:e.displayName||r.paypal.displayName,localeCode:e.locale,noShipping:(!e.enableShippingAddress).toString(),addressOverride:e.shippingAddressEditable===!1,landingPageType:e.landingPageType}};if(n.popupBridge&&"function"==typeof n.popupBridge.getReturnUrlPrefix&&(o.returnUrl=n.popupBridge.getReturnUrlPrefix()+"return",o.cancelUrl=n.popupBridge.getReturnUrlPrefix()+"cancel"),"checkout"===e.flow){o.amount=e.amount,o.currencyIsoCode=e.currency,o.offerPaypalCredit=e.offerCredit===!0,e.hasOwnProperty("intent")&&(o.intent=e.intent);for(t in e.shippingAddressOverride)e.shippingAddressOverride.hasOwnProperty(t)&&(o[t]=e.shippingAddressOverride[t])}else o.shippingAddress=e.shippingAddressOverride,e.billingAgreementDescription&&(o.description=e.billingAgreementDescription);return o},r.prototype.teardown=function(e){this._frameService.teardown(),m(this,h(r.prototype)),f.sendEvent(this._client,"paypal.teardown-completed"),"function"==typeof e&&(e=_(e))()},t.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../lib/analytics":7,"../../lib/braintree-error":9,"../../lib/constants":14,"../../lib/convert-methods-to-error":15,"../../lib/convert-to-braintree-error":16,"../../lib/deferred":18,"../../lib/frame-service/external":22,"../../lib/methods":33,"../../lib/once":34,"../../lib/querystring":36,"../../lib/throw-if-no-callback":37,"../../lib/use-min":38,"../shared/constants":42,"../shared/errors":43}],41:[function(e,t,n){"use strict";function r(e,t){var n,r,i;return p(t,"create"),t=a(t),null==e.client?void t(new s({type:l.INSTANTIATION_OPTION_REQUIRED.type,code:l.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating PayPal."})):(n=e.client.getConfiguration(),i=n.analyticsMetadata.sdkVersion,i!==f?void t(new s({type:l.INCOMPATIBLE_VERSIONS.type,code:l.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+i+") and PayPal (version "+f+") components must be from the same SDK version."})):n.gatewayConfiguration.paypalEnabled!==!0?void t(new s(c.PAYPAL_NOT_ENABLED)):(o.sendEvent(e.client,"paypal.initialized"),r=new u(e),void r._initialize(function(){t(null,r)})))}function i(){return!0}var o=e("../lib/analytics"),s=e("../lib/braintree-error"),a=e("../lib/deferred"),c=e("./shared/errors"),p=e("../lib/throw-if-no-callback"),u=e("./external/paypal"),l=e("../lib/errors"),f="3.12.0";t.exports={create:r,isSupported:i,VERSION:f}},{"../lib/analytics":7,"../lib/braintree-error":9,"../lib/deferred":18,"../lib/errors":20,"../lib/throw-if-no-callback":37,"./external/paypal":40,"./shared/errors":43}],42:[function(e,t,n){"use strict";t.exports={LANDING_FRAME_NAME:"braintreepaypallanding",FLOW_ENDPOINTS:{checkout:"create_payment_resource",vault:"setup_billing_agreement"}}},{}],43:[function(e,t,n){"use strict";var r=e("../../lib/braintree-error");t.exports={PAYPAL_NOT_ENABLED:{type:r.types.MERCHANT,code:"PAYPAL_NOT_ENABLED",message:"PayPal is not enabled for this merchant."},PAYPAL_TOKENIZATION_REQUEST_ACTIVE:{type:r.types.MERCHANT,code:"PAYPAL_TOKENIZATION_REQUEST_ACTIVE",message:"Another tokenization request is active."},PAYPAL_ACCOUNT_TOKENIZATION_FAILED:{type:r.types.NETWORK,code:"PAYPAL_ACCOUNT_TOKENIZATION_FAILED",message:"Could not tokenize user's PayPal account."},PAYPAL_FLOW_FAILED:{type:r.types.NETWORK,code:"PAYPAL_FLOW_FAILED",message:"Could not initialize PayPal flow."},PAYPAL_FLOW_OPTION_REQUIRED:{type:r.types.MERCHANT,
code:"PAYPAL_FLOW_OPTION_REQUIRED",message:"PayPal flow property is invalid or missing."},PAYPAL_BROWSER_NOT_SUPPORTED:{type:r.types.CUSTOMER,code:"PAYPAL_BROWSER_NOT_SUPPORTED",message:"Browser is not supported."},PAYPAL_POPUP_OPEN_FAILED:{type:r.types.MERCHANT,code:"PAYPAL_POPUP_OPEN_FAILED",message:"PayPal popup failed to open, make sure to tokenize in response to a user action."},PAYPAL_POPUP_CLOSED:{type:r.types.CUSTOMER,code:"PAYPAL_POPUP_CLOSED",message:"Customer closed PayPal popup before authorizing."},PAYPAL_INVALID_PAYMENT_OPTION:{type:r.types.MERCHANT,code:"PAYPAL_INVALID_PAYMENT_OPTION",message:"PayPal payment options are invalid."}}},{"../../lib/braintree-error":9}]},{},[41])(41)});