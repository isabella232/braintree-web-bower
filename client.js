!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;((t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).braintree||(t.braintree={})).client=e()}}(function(){return function o(a,s,c){function u(t,e){if(!s[t]){if(!a[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(d)return d(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var i=s[t]={exports:{}};a[t][0].call(i.exports,function(e){return u(a[t][1][e]||e)},i,i.exports,o,a,s,c)}return s[t].exports}for(var d="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(r,n,e){(function(e){"use strict";var t=r("promise-polyfill");n.exports=e.Promise||t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":10}],2:[function(e,t,r){"use strict";var a=e("./lib/promise"),s={};function n(r){var t,n,i,e,o=JSON.stringify(r);return!r.forceScriptReload&&(e=s[o])?e:(i=document.createElement("script"),t=r.dataAttributes||{},n=r.container||document.head,i.src=r.src,i.id=r.id,i.async=!0,Object.keys(t).forEach(function(e){i.setAttribute("data-"+e,t[e])}),e=new a(function(e,t){i.addEventListener("load",function(){e(i)}),i.addEventListener("error",function(){t(new Error(r.src+" failed to load."))}),i.addEventListener("abort",function(){t(new Error(r.src+" has aborted."))}),n.appendChild(i)}),s[o]=e)}n.clearCache=function(){s={}},t.exports=n},{"./lib/promise":1}],3:[function(e,n,t){(function(t){"use strict";var r=e("./is-ie11");n.exports=function(e){return-1!==(e=e||t.navigator.userAgent).indexOf("MSIE")||r(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ie11":4}],4:[function(e,t,r){"use strict";t.exports=function(e){return-1!==(e=e||navigator.userAgent).indexOf("Trident/7")}},{}],5:[function(e,t,r){"use strict";t.exports=function(e){return-1!==(e=e||navigator.userAgent).indexOf("MSIE 9")}},{}],6:[function(e,t,r){"use strict";t.exports=function(t){return function(){var e=arguments;setTimeout(function(){t.apply(null,e)},1)}}},{}],7:[function(e,t,r){"use strict";t.exports=function(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}},{}],8:[function(e,t,r){"use strict";t.exports=function(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}},{}],9:[function(e,t,r){"use strict";var n=e("./lib/deferred"),i=e("./lib/once"),o=e("./lib/promise-or-callback");function s(r){return function(){var e,t=Array.prototype.slice.call(arguments);return"function"==typeof t[t.length-1]&&(e=t.pop(),e=i(n(e))),o(r.apply(this,t),e)}}s.wrapPrototype=function(i,e){var o,a;return o=(e=e||{}).ignoreMethods||[],a=!0===e.transformPrivateMethods,Object.getOwnPropertyNames(i.prototype).filter(function(e){var t,r="constructor"!==e&&"function"==typeof i.prototype[e],n=-1===o.indexOf(e);return t=!!a||"_"!==e.charAt(0),r&&t&&n}).forEach(function(e){var t=i.prototype[e];i.prototype[e]=s(t)}),i},t.exports=s},{"./lib/deferred":6,"./lib/once":7,"./lib/promise-or-callback":8}],10:[function(e,t,r){"use strict";var n=setTimeout;function i(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function a(r,n){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,o._immediateFn(function(){var e=1===r._state?n.onFulfilled:n.onRejected;if(null!==e){var t;try{t=e(r._value)}catch(e){return void c(n.promise,e)}s(n.promise,t)}else(1===r._state?s:c)(n.promise,r._value)})):r._deferreds.push(n)}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if(e instanceof o)return t._state=3,t._value=e,void u(t);if("function"==typeof r)return void p((n=r,i=e,function(){n.apply(i,arguments)}),t)}t._state=1,t._value=e,u(t)}catch(e){c(t,e)}var n,i}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,r=e._deferreds.length;t<r;t++)a(e,e._deferreds[t]);e._deferreds=null}function d(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function p(e,t){var r=!1;try{e(function(e){r||(r=!0,s(t,e))},function(e){r||(r=!0,c(t,e))})}catch(e){if(r)return;r=!0,c(t,e)}}o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var r=new this.constructor(i);return a(this,new d(e,t,r)),r},o.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){return r.reject(e)})})},o.all=function(t){return new o(function(n,i){if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(t);if(0===o.length)return n([]);var a=o.length;function s(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if("function"==typeof r)return void r.call(e,function(e){s(t,e)},i)}o[t]=e,0==--a&&n(o)}catch(e){i(e)}}for(var e=0;e<o.length;e++)s(e,o[e])})},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(r){return new o(function(e,t){t(r)})},o.race=function(i){return new o(function(e,t){for(var r=0,n=i.length;r<n;r++)i[r].then(e,t)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){n(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=o},{}],11:[function(e,t,r){"use strict";var n=e("@braintree/browser-detection/is-ie"),i=e("@braintree/browser-detection/is-ie9");t.exports={isIe:n,isIe9:i}},{"@braintree/browser-detection/is-ie":3,"@braintree/browser-detection/is-ie9":5}],12:[function(e,t,r){"use strict";var p=e("./constants").BRAINTREE_VERSION,i=e("./request/graphql"),o=e("./request"),a=e("../lib/is-verified-domain"),l=e("../lib/braintree-error"),f=e("../lib/convert-to-braintree-error"),h=e("../lib/create-authorization-data"),n=e("./get-configuration").getConfiguration,y=e("../lib/add-metadata"),s=e("../lib/promise"),c=e("@braintree/wrap-promise"),E=e("../lib/once"),g=e("../lib/deferred"),I=e("../lib/assign").assign,_=e("../lib/analytics"),A=e("./constants"),m=e("./errors"),T=e("../lib/errors"),u=e("../lib/constants").VERSION,N=e("../lib/constants").GRAPHQL_URLS,d=e("../lib/methods"),b=e("../lib/convert-methods-to-error"),R=e("../lib/assets"),C=e("../lib/constants").FRAUDNET_FNCLS,v=e("../lib/constants").FRAUDNET_SOURCE,O=e("../lib/constants").FRAUDNET_URL,w={};function S(e){var t,r,n;if(e=e||{},t=JSON.stringify(e),!(r=e.gatewayConfiguration))throw new l(m.CLIENT_MISSING_GATEWAY_CONFIGURATION);if(["assetsUrl","clientApiUrl","configUrl"].forEach(function(e){if(e in r&&!a(r[e]))throw new l({type:m.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,code:m.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,message:e+" property is on an invalid domain."})}),this.getConfiguration=function(){return JSON.parse(t)},this._request=o,this._configuration=this.getConfiguration(),this._clientApiBaseUrl=r.clientApiUrl+"/v1/",(n=r.braintreeApi)&&(this._braintreeApi={baseUrl:n.url+"/",accessToken:n.accessToken},!a(this._braintreeApi.baseUrl)))throw new l({type:m.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,code:m.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,message:"braintreeApi URL is on an invalid domain."});r.graphQL&&(this._graphQL=new i({graphQL:r.graphQL}))}S.initialize=function(t){var r,e=w[t.authorization];return e?(_.sendEvent(e,"custom.client.load.cached"),e):(e=n(t).then(function(e){return t.debug&&(e.isDebug=!0),r=new S(e)}),w[t.authorization]=e,_.sendEvent(e,"custom.client.load.initialized"),e.then(function(e){return _.sendEvent(r,"custom.client.load.succeeded"),e}).catch(function(e){return delete w[t.authorization],s.reject(e)}))},S.clearCache=function(){w={}},S.prototype._findOrCreateFraudnetJSON=function(e){var t,r,n,i,o=document.querySelector('script[fncls="'+C+'"]');o||((o=document.body.appendChild(document.createElement("script"))).type="application/json",o.setAttribute("fncls",C)),t=this.getConfiguration(),r={rda_tenant:"bt_card",mid:t.gatewayConfiguration.merchantId},(n=h(t.authorization).attrs.authorizationFingerprint)&&n.split("&").forEach(function(e){var t=e.split("=");"customer_id"===t[0]&&1<t.length&&(r.cid=t[1])}),i={f:e.substr(0,32),fp:r,bu:!1,s:v},o.text=JSON.stringify(i)},S.prototype.request=function(u,r){var d=this,e=new s(function(o,a){var e,s,t,r,n,i,c=Boolean("payment_methods/credit_cards"===u.endpoint&&d.getConfiguration().gatewayConfiguration.creditCards.collectDeviceData);if("graphQLApi"!==u.api&&(u.method?u.endpoint||(e="options.endpoint"):e="options.method"),e)throw new l({type:m.CLIENT_OPTION_REQUIRED.type,code:m.CLIENT_OPTION_REQUIRED.code,message:e+" is required when making a request."});if(s="api"in u?u.api:"clientApi",r={method:u.method,graphQL:d._graphQL,timeout:u.timeout,metadata:d._configuration.analyticsMetadata},"clientApi"===s)t=d._clientApiBaseUrl,r.data=y(d._configuration,u.data);else if("braintreeApi"===s){if(!d._braintreeApi)throw new l(T.BRAINTREE_API_ACCESS_RESTRICTED);t=d._braintreeApi.baseUrl,r.data=u.data,r.headers={"Braintree-Version":A.BRAINTREE_API_VERSION_HEADER,Authorization:"Bearer "+d._braintreeApi.accessToken}}else{if("graphQLApi"!==s)throw new l({type:m.CLIENT_OPTION_INVALID.type,code:m.CLIENT_OPTION_INVALID.code,message:"options.api is invalid."});t=N[d._configuration.gatewayConfiguration.environment],u.endpoint="",r.method="post",r.data=I({clientSdkMetadata:{source:d._configuration.analyticsMetadata.source,integration:d._configuration.analyticsMetadata.integration,sessionId:d._configuration.analyticsMetadata.sessionId}},u.data),r.headers=(n=d._configuration.authorization,{Authorization:"Bearer "+((i=h(n).attrs).authorizationFingerprint||i.tokenizationKey),"Braintree-Version":p})}r.url=t+u.endpoint,r.sendAnalyticsEvent=function(e){_.sendEvent(d,e)},d._request(r,function(e,t,r){var n,i;(i=function(e,t){var r;-1===e?r=new l(m.CLIENT_REQUEST_TIMEOUT):403===e?r=new l(m.CLIENT_AUTHORIZATION_INSUFFICIENT):429===e?r=new l(m.CLIENT_RATE_LIMITED):500<=e?r=new l(m.CLIENT_GATEWAY_NETWORK):(e<200||400<=e)&&(r=f(t,{type:m.CLIENT_REQUEST_ERROR.type,code:m.CLIENT_REQUEST_ERROR.code,message:m.CLIENT_REQUEST_ERROR.message}));if(r)return r.details=r.details||{},r.details.httpStatus=e,r}(r,e))?a(i):"graphQLApi"===s&&t.errors?a(f(t.errors,{type:m.CLIENT_GRAPHQL_REQUEST_ERROR.type,code:m.CLIENT_GRAPHQL_REQUEST_ERROR.code,message:m.CLIENT_GRAPHQL_REQUEST_ERROR.message})):(n=I({_httpStatus:r},t),c&&n.creditCards&&0<n.creditCards.length&&(d._findOrCreateFraudnetJSON(n.creditCards[0].nonce),R.loadScript({src:O,forceScriptReload:!0})),o(n))})});return"function"==typeof r?(r=E(g(r)),void e.then(function(e){r(null,e,e._httpStatus)}).catch(function(e){var t=e&&e.details&&e.details.httpStatus;r(e,null,t)})):e},S.prototype.toJSON=function(){return this.getConfiguration()},S.prototype.getVersion=function(){return u},S.prototype.teardown=c(function(){return delete w[this.getConfiguration().authorization],b(this,d(S.prototype)),s.resolve()}),t.exports=S},{"../lib/add-metadata":33,"../lib/analytics":34,"../lib/assets":35,"../lib/assign":36,"../lib/braintree-error":37,"../lib/constants":38,"../lib/convert-methods-to-error":39,"../lib/convert-to-braintree-error":40,"../lib/create-authorization-data":41,"../lib/deferred":42,"../lib/errors":44,"../lib/is-verified-domain":46,"../lib/methods":48,"../lib/once":49,"../lib/promise":50,"./constants":13,"./errors":14,"./get-configuration":15,"./request":27,"./request/graphql":25,"@braintree/wrap-promise":9}],13:[function(e,t,r){"use strict";t.exports={BRAINTREE_API_VERSION_HEADER:"2017-04-03",BRAINTREE_VERSION:"2018-05-10"}},{}],14:[function(e,t,r){"use strict";var n=e("../lib/braintree-error");t.exports={CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN:{type:n.types.MERCHANT,code:"CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN"},CLIENT_OPTION_REQUIRED:{type:n.types.MERCHANT,code:"CLIENT_OPTION_REQUIRED"},CLIENT_OPTION_INVALID:{type:n.types.MERCHANT,code:"CLIENT_OPTION_INVALID"},CLIENT_MISSING_GATEWAY_CONFIGURATION:{type:n.types.INTERNAL,code:"CLIENT_MISSING_GATEWAY_CONFIGURATION",message:"Missing gatewayConfiguration."},CLIENT_INVALID_AUTHORIZATION:{type:n.types.MERCHANT,code:"CLIENT_INVALID_AUTHORIZATION",message:"Authorization is invalid. Make sure your client token or tokenization key is valid."},CLIENT_GATEWAY_NETWORK:{type:n.types.NETWORK,code:"CLIENT_GATEWAY_NETWORK",message:"Cannot contact the gateway at this time."},CLIENT_REQUEST_TIMEOUT:{type:n.types.NETWORK,code:"CLIENT_REQUEST_TIMEOUT",message:"Request timed out waiting for a reply."},CLIENT_REQUEST_ERROR:{type:n.types.NETWORK,code:"CLIENT_REQUEST_ERROR",message:"There was a problem with your request."},CLIENT_GRAPHQL_REQUEST_ERROR:{type:n.types.NETWORK,code:"CLIENT_GRAPHQL_REQUEST_ERROR",message:"There was a problem with your request."},CLIENT_RATE_LIMITED:{type:n.types.MERCHANT,code:"CLIENT_RATE_LIMITED",message:"You are being rate-limited; please try again in a few minutes."},CLIENT_AUTHORIZATION_INSUFFICIENT:{type:n.types.MERCHANT,code:"CLIENT_AUTHORIZATION_INSUFFICIENT",message:"The authorization used has insufficient privileges."}}},{"../lib/braintree-error":37}],15:[function(r,n,e){(function(d){"use strict";var p=r("../lib/braintree-error"),e=r("../lib/promise"),t=r("@braintree/wrap-promise"),l=r("./request"),f=r("../lib/vendor/uuid"),h=r("../lib/constants"),y=r("../lib/create-authorization-data"),E=r("./errors"),g=r("./request/graphql"),I=r("../lib/is-date-string-before-or-on"),_=r("./constants").BRAINTREE_VERSION;n.exports={getConfiguration:t(function(u){return new e(function(i,o){var a,e,s,t,r,n=f(),c={merchantAppId:d.location.host,platform:h.PLATFORM,sdkVersion:h.VERSION,source:h.SOURCE,integration:h.INTEGRATION,integrationType:h.INTEGRATION,sessionId:n};try{e=y(u.authorization)}catch(e){return void o(new p(E.CLIENT_INVALID_AUTHORIZATION))}s=e.attrs,t=e.configUrl,s._meta=c,s.braintreeLibraryVersion=h.BRAINTREE_LIBRARY_VERSION,s.configVersion="3",r={url:t,method:"GET",data:s},s.authorizationFingerprint&&e.graphQL&&(I(e.graphQL.date,_)&&(r.graphQL=new g({graphQL:{url:e.graphQL.url,features:["configuration"]}})),r.metadata=c),l(r,function(e,t,r){var n;if(e)return n=403===r?E.CLIENT_AUTHORIZATION_INSUFFICIENT:E.CLIENT_GATEWAY_NETWORK,void o(new p({type:n.type,code:n.code,message:n.message,details:{originalError:e}}));a={authorization:u.authorization,authorizationType:s.tokenizationKey?"TOKENIZATION_KEY":"CLIENT_TOKEN",analyticsMetadata:c,gatewayConfiguration:t},i(a)})})})}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/braintree-error":37,"../lib/constants":38,"../lib/create-authorization-data":41,"../lib/is-date-string-before-or-on":45,"../lib/promise":50,"../lib/vendor/uuid":53,"./constants":13,"./errors":14,"./request":27,"./request/graphql":25,"@braintree/wrap-promise":9}],16:[function(e,t,r){"use strict";var n=e("../lib/braintree-error"),i=e("./client"),o=e("../lib/promise"),a=e("@braintree/wrap-promise"),s=e("../lib/errors");t.exports={create:a(function(e){return e.authorization?i.initialize(e):o.reject(new n({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.authorization is required when instantiating a client."}))}),VERSION:"3.44.2"}},{"../lib/braintree-error":37,"../lib/errors":44,"../lib/promise":50,"./client":12,"@braintree/wrap-promise":9}],17:[function(e,t,r){"use strict";var E=e("../../lib/querystring"),g=e("../browser-detection"),I=e("../../lib/assign").assign,_=e("./prep-body"),A=e("./parse-body"),m=e("./xhr"),T=m.isAvailable,N=e("./graphql/request"),b=e("./default-request"),R=1,C=408;function v(n,i,o){var a,s,c,e,t,r,u,d=n.url,p=n.graphQL,l=n.timeout,f=m.getRequestObject(),h=o,y=Boolean(p&&p.isGraphQLRequest(d,n.data));n.headers=I({"Content-Type":"application/json"},n.headers),d=(c=y?new N(n):new b(n)).getUrl(),e=c.getBody(),t=c.getMethod(),r=c.getHeaders(),"GET"===t&&(d=E.queryify(d,e),e=null),T?f.onreadystatechange=function(){if(4===f.readyState){if(0===f.status&&y)return delete n.graphQL,void v(n,i,o);if(u=A(f.responseText),s=c.adaptResponseBody(u),400<=(a=c.determineStatus(f.status,u))||a<200){if(y&&("UNKNOWN"===(r=!(t=u).data&&t.errors&&t.errors[0]&&t.errors[0].extensions&&t.errors[0].extensions.errorClass)||"INTERNAL"===r))return delete n.graphQL,void v(n,i,o);if(i<R&&((!(e=a)||e===C)&&g.isIe()))return void v(n,++i,o);h(s||"error",null,a||500)}else h(null,s,a);var e,t,r}}:(n.headers&&(d=E.queryify(d,r)),f.onload=function(){h(null,A(f.responseText),f.status)},f.onerror=function(){h("error",null,500)},f.onprogress=function(){},f.ontimeout=function(){h("timeout",null,-1)});try{f.open(t,d,!0)}catch(e){if(!y)throw e;return delete n.graphQL,void v(n,i,o)}f.timeout=l,T&&Object.keys(r).forEach(function(e){f.setRequestHeader(e,r[e])});try{f.send(_(t,e))}catch(e){}}t.exports={request:function(e,t){v(e,0,t)}}},{"../../lib/assign":36,"../../lib/querystring":51,"../browser-detection":11,"./default-request":18,"./graphql/request":26,"./parse-body":30,"./prep-body":31,"./xhr":32}],18:[function(e,t,r){"use strict";function n(e){this._url=e.url,this._data=e.data,this._method=e.method,this._headers=e.headers}n.prototype.getUrl=function(){return this._url},n.prototype.getBody=function(){return this._data},n.prototype.getMethod=function(){return this._method},n.prototype.getHeaders=function(){return this._headers},n.prototype.adaptResponseBody=function(e){return e},n.prototype.determineStatus=function(e){return e},t.exports=n},{}],19:[function(e,t,r){(function(e){"use strict";t.exports=function(){return e.navigator.userAgent}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],20:[function(e,t,r){"use strict";var a=e("./error"),s=e("../../../../lib/assign").assign,c={creditCard:{AMERICAN_EXPRESS:"American Express",DISCOVER:"Discover",INTERNATIONAL_MAESTRO:"Maestro",JCB:"JCB",MASTERCARD:"MasterCard",SOLO:"Solo",UK_MAESTRO:"UK Maestro",UNION_PAY:"UnionPay",VISA:"Visa"},applePayWeb:{VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"amex"},visaCheckout:{VISA:"Visa",MASTERCARD:"MasterCard",DISCOVER:"Discover",AMERICAN_EXPRESS:"American Express"},googlePay:{VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"amex"},masterpass:{VISA:"visa",MASTERCARD:"master",DISCOVER:"discover",AMERICAN_EXPRESS:"amex",DINERS:"diners",INTERNATIONAL_MAESTRO:"maestro",JCB:"jcb"}};function u(e,r){return e.reduce(function(e,t){return r.hasOwnProperty(t)?e.concat(r[t]):e},[])}t.exports=function(e,t){return e.data&&!e.errors?(r=e,n=t,o=r.data.clientConfiguration,i={environment:o.environment.toLowerCase(),clientApiUrl:o.clientApiUrl,assetsUrl:o.assetsUrl,analytics:{url:o.analyticsUrl},merchantId:o.merchantId,venmo:"off"},o.supportedFeatures&&(i.graphQL={url:n._graphQL._config.url,features:o.supportedFeatures.map(function(e){return e.toLowerCase()})}),o.braintreeApi&&(i.braintreeApi=o.braintreeApi),o.applePayWeb&&(i.applePayWeb=o.applePayWeb,i.applePayWeb.supportedNetworks=u(o.applePayWeb.supportedCardBrands,c.applePayWeb),delete i.applePayWeb.supportedCardBrands),o.ideal&&(i.ideal=o.ideal),o.kount&&(i.kount={kountMerchantId:o.kount.merchantId}),o.creditCard?(i.challenges=o.creditCard.challenges.map(function(e){return e.toLowerCase()}),i.creditCards={supportedCardTypes:u(o.creditCard.supportedCardBrands,c.creditCard)},i.threeDSecureEnabled=o.creditCard.threeDSecureEnabled):(i.challenges=[],i.creditCards={supportedCardTypes:[]},i.threeDSecureEnabled=!1),o.googlePay&&(i.androidPay={displayName:o.googlePay.displayName,enabled:!0,environment:o.googlePay.environment.toLowerCase(),googleAuthorizationFingerprint:o.googlePay.googleAuthorization,supportedNetworks:u(o.googlePay.supportedCardBrands,c.googlePay)}),o.venmo&&(i.payWithVenmo={merchantId:o.venmo.merchantId,accessToken:o.venmo.accessToken,environment:o.venmo.environment.toLowerCase()}),o.paypal?(i.paypalEnabled=!0,i.paypal=s({},o.paypal),i.paypal.currencyIsoCode=i.paypal.currencyCode,i.paypal.environment=i.paypal.environment.toLowerCase(),delete i.paypal.currencyCode):i.paypalEnabled=!1,o.unionPay&&(i.unionPay={enabled:!0,merchantAccountId:o.unionPay.merchantAccountId}),o.visaCheckout&&(i.visaCheckout={apikey:o.visaCheckout.apiKey,externalClientId:o.visaCheckout.externalClientId,supportedCardTypes:u(o.visaCheckout.supportedCardBrands,c.visaCheckout)}),o.masterpass&&(i.masterpass={merchantCheckoutId:o.masterpass.merchantCheckoutId,supportedNetworks:u(o.masterpass.supportedCardBrands,c.masterpass)}),o.usBankAccount&&(i.usBankAccount={routeId:o.usBankAccount.routeId,plaid:{publicKey:o.usBankAccount.plaidPublicKey}}),i):a(e);var r,n,i,o}},{"../../../../lib/assign":36,"./error":22}],21:[function(e,t,r){"use strict";var a=e("./error"),s={AMERICAN_EXPRESS:"American Express",DINERS:"Discover",DISCOVER:"Discover",INTERNATIONAL_MAESTRO:"Maestro",JCB:"JCB",MASTERCARD:"MasterCard",UK_MAESTRO:"Maestro",UNION_PAY:"Union Pay",VISA:"Visa"},c={YES:"Yes",NO:"No",UNKNOWN:"Unknown"};t.exports=function(e){return e.data&&!e.errors?(t=e,r=t.data.tokenizeCreditCard,n=r.creditCard,i=n.last4?n.last4.substr(2,4):"",o=n.binData,o&&(["commercial","debit","durbinRegulated","healthcare","payroll","prepaid"].forEach(function(e){o[e]?o[e]=c[o[e]]:o[e]="Unknown"}),["issuingBank","countryOfIssuance","productId"].forEach(function(e){o[e]||(o[e]="Unknown")})),{creditCards:[{binData:o,consumed:!1,description:i?"ending in "+i:"",nonce:r.token,details:{bin:n.bin||"",cardType:s[n.brandCode]||"Unknown",lastFour:n.last4||"",lastTwo:i},type:"CreditCard",threeDSecureInfo:null}]}):a(e);var t,r,n,i,o}},{"./error":22}],22:[function(e,t,r){"use strict";t.exports=function(e){var t,r,n,i,o,a,s=e.errors&&e.errors[0]&&e.errors[0].extensions&&e.errors[0].extensions.errorClass;return"VALIDATION"===s?(n=e.errors,i=[],n.forEach(function(e){!function e(t,r,n){var i,o=r.extensions.legacyCode,a=t[0];1!==t.length?(n.forEach(function(e){e.field===a&&(i=e)}),i||(i={field:a,fieldErrors:[]},n.push(i)),e(t.slice(1),r,i.fieldErrors)):n.push({code:o,field:a,message:r.message})}(e.extensions.inputPath.slice(1),e,i)}),t={error:{message:(o=r=i,a=o[0].field,{creditCard:"Credit card is invalid"}[a])},fieldErrors:r}):t=s?{error:{message:e.errors[0].message},fieldErrors:[]}:{error:{message:"There was a problem serving your request"},fieldErrors:[]},t}},{}],23:[function(e,t,r){"use strict";t.exports=function(){return{query:"query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       privacyUrl       userAgreementUrl       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment     }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }",operationName:"ClientConfiguration"}}},{}],24:[function(e,t,r){"use strict";var s=e("../../../../lib/assign").assign;function n(e){var t=e.creditCard,r=t&&t.billingAddress,n=t&&t.expirationDate,i=t&&(t.expirationMonth||n&&n.split("/")[0].trim()),o=t&&(t.expirationYear||n&&n.split("/")[1].trim()),a={input:{creditCard:{number:t&&t.number,expirationMonth:i,expirationYear:o,cvv:t&&t.cvv,cardholderName:t&&t.cardholderName},options:{}}};return r&&(a.input.creditCard.billingAddress=r),a.input=function(e,t){var r;e.creditCard&&e.creditCard.options&&"boolean"==typeof e.creditCard.options.validate?r=e.creditCard.options.validate:e.authorizationFingerprint&&e.tokenizationKey||e.authorizationFingerprint?r=!0:e.tokenizationKey&&(r=!1);"boolean"==typeof r&&(t.options=s({validate:r},t.options));return t}(e,a.input),a}t.exports=function(e){return{query:"mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }",variables:n(e),operationName:"TokenizeCreditCard"}}},{"../../../../lib/assign":36}],25:[function(e,t,r){"use strict";var o=e("../../browser-detection"),a={tokenize_credit_cards:"payment_methods/credit_cards",configuration:"configuration"},s=["creditCard.options.unionPayEnrollment"];function n(e){this._config=e.graphQL}n.prototype.getGraphQLEndpoint=function(){return this._config.url},n.prototype.isGraphQLRequest=function(e,t){var r,n,i=this.getClientApiPath(e);return!(!this._isGraphQLEnabled()||!i||o.isIe9())&&(r=this._config.features.some(function(e){return a[e]===i}),n=t,!s.some(function(e){var t=e.split(".").reduce(function(e,t){return e&&e[t]},n);return void 0!==t})&&r)},n.prototype.getClientApiPath=function(e){var t,r=e.split("/client_api/v1/");return 1<r.length&&(t=r[1].split("?")[0]),t},n.prototype._isGraphQLEnabled=function(){return Boolean(this._config)},t.exports=n},{"../../browser-detection":11}],26:[function(e,t,r){"use strict";var n=e("../../constants").BRAINTREE_VERSION,i=e("../../../lib/assign").assign,o=e("./generators/credit-card-tokenization"),a=e("./adapters/credit-card-tokenization"),s=e("./generators/configuration"),c=e("./adapters/configuration"),u={"payment_methods/credit_cards":o,configuration:s},d={"payment_methods/credit_cards":a,configuration:c};function p(e){var t=e.graphQL.getClientApiPath(e.url);this._graphQL=e.graphQL,this._data=e.data,this._method=e.method,this._headers=e.headers,this._clientSdkMetadata={source:e.metadata.source,integration:e.metadata.integration,sessionId:e.metadata.sessionId},this._sendAnalyticsEvent=e.sendAnalyticsEvent||Function.prototype,this._generator=u[t],this._adapter=d[t],this._sendAnalyticsEvent("graphql.init")}p.prototype.getUrl=function(){return this._graphQL.getGraphQLEndpoint()},p.prototype.getBody=function(){var e=function r(n){var i={};Object.keys(n).forEach(function(e){var t=function(e){if(-1===e.indexOf("_"))return e;return e.toLowerCase().replace(/(\_\w)/g,function(e){return e[1].toUpperCase()})}(e);"object"==typeof n[e]?i[t]=r(n[e]):"number"==typeof n[e]?i[t]=String(n[e]):i[t]=n[e]});return i}(this._data),t=this._generator(e),r=i({clientSdkMetadata:this._clientSdkMetadata},t);return JSON.stringify(r)},p.prototype.getMethod=function(){return"POST"},p.prototype.getHeaders=function(){var e,t;return this._data.authorizationFingerprint?(this._sendAnalyticsEvent("graphql.authorization-fingerprint"),e=this._data.authorizationFingerprint):(this._sendAnalyticsEvent("graphql.tokenization-key"),e=this._data.tokenizationKey),t={Authorization:"Bearer "+e,"Braintree-Version":n},i({},this._headers,t)},p.prototype.adaptResponseBody=function(e){return this._adapter(e,this)},p.prototype.determineStatus=function(e,t){var r,n,i;return 200===e?(n=t.errors&&t.errors[0]&&t.errors[0].extensions&&t.errors[0].extensions.errorClass,t.data&&!t.errors?r=200:"VALIDATION"===n?r=422:"AUTHORIZATION"===n?r=403:"AUTHENTICATION"===n?r=401:(i=t,r=!n&&i.errors[0].message?403:500)):r=e||500,this._sendAnalyticsEvent("graphql.status."+e),this._sendAnalyticsEvent("graphql.determinedStatus."+r),r},t.exports=p},{"../../../lib/assign":36,"../../constants":13,"./adapters/configuration":20,"./adapters/credit-card-tokenization":21,"./generators/configuration":23,"./generators/credit-card-tokenization":24}],27:[function(e,t,r){"use strict";var n,i=e("../../lib/once"),o=e("./jsonp-driver"),a=e("./ajax-driver"),s=e("./get-user-agent"),c=e("./is-http");t.exports=function(e,t){t=i(t||Function.prototype),e.method=(e.method||"GET").toUpperCase(),e.timeout=null==e.timeout?6e4:e.timeout,e.data=e.data||{},null==n&&(n=!(c()&&/MSIE\s(8|9)/.test(s()))),n?a.request(e,t):o.request(e,t)}},{"../../lib/once":49,"./ajax-driver":17,"./get-user-agent":19,"./is-http":28,"./jsonp-driver":29}],28:[function(e,t,r){(function(e){"use strict";t.exports=function(){return"http:"===e.location.protocol}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],29:[function(e,t,r){(function(g){"use strict";var I,_=e("../../lib/vendor/uuid"),A=e("../../lib/querystring"),m={};function T(t){try{delete g[t]}catch(e){g[t]=null}}t.exports={request:function(e,t){var r,n,i,o,a,s,c,u,d,p,l="callback_json_"+_().replace(/-/g,""),f=e.url,h=e.data,y=e.method,E=e.timeout;f=A.queryify(f,h),f=A.queryify(f,{_method:y,callback:l}),n=f,i=l,o=document.createElement("script"),a=!1,o.src=n,o.async=!0,o.onerror=function(){g[i]({message:"error",status:500})},o.onload=o.onreadystatechange=function(){a||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(a=!0,o.onload=o.onreadystatechange=null)},s=r=o,c=t,g[u=l]=function(e){var t,r=e.status||500,n=null,i=null;delete e.status,400<=r||r<200?n=e:i=e,T(u),(t=s)&&t.parentNode&&t.parentNode.removeChild(t),clearTimeout(m[u]),c(n,i,r)},d=E,m[p=l]=setTimeout(function(){m[p]=null,g[p]({error:"timeout",status:-1}),g[p]=function(){T(p)}},d),I||(I=document.getElementsByTagName("head")[0]),I.appendChild(r)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../lib/querystring":51,"../../lib/vendor/uuid":53}],30:[function(e,t,r){"use strict";t.exports=function(e){try{e=JSON.parse(e)}catch(e){}return e}},{}],31:[function(e,t,r){"use strict";t.exports=function(e,t){if("string"!=typeof e)throw new Error("Method must be a string");return"get"!==e.toLowerCase()&&null!=t&&(t="string"==typeof t?t:JSON.stringify(t)),t}},{}],32:[function(e,r,t){(function(e){"use strict";var t=e.XMLHttpRequest&&"withCredentials"in new e.XMLHttpRequest;r.exports={isAvailable:t,getRequestObject:function(){return t?new XMLHttpRequest:new XDomainRequest}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],33:[function(e,t,r){"use strict";var a=e("./create-authorization-data"),s=e("./json-clone"),c=e("./constants");t.exports=function(e,t){var r,n=t?s(t):{},i=a(e.authorization).attrs,o=s(e.analyticsMetadata);for(r in n.braintreeLibraryVersion=c.BRAINTREE_LIBRARY_VERSION,n._meta)n._meta.hasOwnProperty(r)&&(o[r]=n._meta[r]);return n._meta=o,i.tokenizationKey?n.tokenizationKey=i.tokenizationKey:n.authorizationFingerprint=i.authorizationFingerprint,n}},{"./constants":38,"./create-authorization-data":41,"./json-clone":47}],34:[function(e,t,r){"use strict";var n=e("./promise"),u=e("./constants"),d=e("./add-metadata");function p(e){return Math.floor(e/1e3)}t.exports={sendEvent:function(e,a,s){var c=p(Date.now());return n.resolve(e).then(function(e){var t=p(Date.now()),r=e.getConfiguration(),n=e._request,i=r.gatewayConfiguration.analytics.url,o={analytics:[{kind:u.ANALYTICS_PREFIX+a,isAsync:t!==c,timestamp:c}]};n({url:i,method:"post",data:d(r,o),timeout:u.ANALYTICS_REQUEST_TIMEOUT_MS},s)})}}},{"./add-metadata":33,"./constants":38,"./promise":50}],35:[function(e,t,r){"use strict";var n=e("@braintree/asset-loader/load-script");t.exports={loadScript:n}},{"@braintree/asset-loader/load-script":2}],36:[function(e,t,r){"use strict";var n="function"==typeof Object.assign?Object.assign:i;function i(e){var t,r,n;for(t=1;t<arguments.length;t++)for(n in r=arguments[t])r.hasOwnProperty(n)&&(e[n]=r[n]);return e}t.exports={assign:n,_assign:i}},{}],37:[function(e,t,r){"use strict";var n=e("./enumerate");function i(e){if(!i.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}((i.prototype=Object.create(Error.prototype)).constructor=i).types=n(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),i.findRootError=function(e){return e instanceof i&&e.details&&e.details.originalError?i.findRootError(e.details.originalError):e},t.exports=i},{"./enumerate":43}],38:[function(e,t,r){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,ASSETS_URLS:{production:"https://assets.braintreegateway.com",sandbox:"https://assets.braintreegateway.com"},CLIENT_API_URLS:{production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},FRAUDNET_SOURCE:"BRAINTREE_SIGNIN",FRAUDNET_FNCLS:"fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",FRAUDNET_URL:"https://c.paypal.com/da/r/fb.js",GRAPHQL_URLS:{production:"https://payments.braintree-api.com/graphql",sandbox:"https://payments.sandbox.braintree-api.com/graphql"},INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.44.2",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.44.2"}},{}],39:[function(e,t,r){"use strict";var n=e("./braintree-error"),i=e("./errors");t.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new n({type:i.METHOD_CALLED_AFTER_TEARDOWN.type,code:i.METHOD_CALLED_AFTER_TEARDOWN.code,message:e+" cannot be called after teardown."})}})}},{"./braintree-error":37,"./errors":44}],40:[function(e,t,r){"use strict";var n=e("./braintree-error");t.exports=function(e,t){return e instanceof n?e:new n({type:t.type,code:t.code,message:t.message,details:{originalError:e}})}},{"./braintree-error":37}],41:[function(e,t,r){"use strict";var a=e("../lib/vendor/polyfill").atob,s=e("../lib/constants").CLIENT_API_URLS;t.exports=function(e){var t,r,n,i,o={attrs:{},configUrl:""};return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)?(n=e.split("_"),i=n[0],r={merchantId:n.slice(2).join("_"),environment:i},o.environment=r.environment,o.attrs.tokenizationKey=e,o.configUrl=s[r.environment]+"/merchants/"+r.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),o.environment=t.environment,o.attrs.authorizationFingerprint=t.authorizationFingerprint,o.configUrl=t.configUrl,o.graphQL=t.graphQL),o}},{"../lib/constants":38,"../lib/vendor/polyfill":52}],42:[function(e,t,r){"use strict";t.exports=function(t){return function(){var e=arguments;setTimeout(function(){t.apply(null,e)},1)}}},{}],43:[function(e,t,r){"use strict";t.exports=function(e,r){return r=null==r?"":r,e.reduce(function(e,t){return e[t]=r+t,e},{})}},{}],44:[function(e,t,r){"use strict";var n=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:n.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},INSTANTIATION_OPTION_REQUIRED:{type:n.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:n.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},CLIENT_SCRIPT_FAILED_TO_LOAD:{type:n.types.NETWORK,code:"CLIENT_SCRIPT_FAILED_TO_LOAD",message:"Braintree client script could not be loaded."},METHOD_CALLED_AFTER_TEARDOWN:{type:n.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:n.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./braintree-error":37}],45:[function(e,t,r){"use strict";function n(e){var t=e.split("-");return new Date(t[0],t[1],t[2])}t.exports=function(e,t){return n(e)<=n(t)}},{}],46:[function(e,t,r){"use strict";var n,i={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=function(e){var t;return e=e.toLowerCase(),!!/^https:/.test(e)&&((n=n||document.createElement("a")).href=e,t=n.hostname.split(".").slice(-2).join("."),i.hasOwnProperty(t))}},{}],47:[function(e,t,r){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],48:[function(e,t,r){"use strict";t.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],49:[function(e,t,r){arguments[4][7][0].apply(r,arguments)},{dup:7}],50:[function(r,n,e){(function(e){"use strict";var t=e.Promise||r("promise-polyfill");n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":10}],51:[function(e,r,t){(function(t){"use strict";function s(e,t){var r,n,i,o,a=[];for(i in e)e.hasOwnProperty(i)&&(n=e[i],r=t?(o=e)&&"object"==typeof o&&"number"==typeof o.length&&"[object Array]"===Object.prototype.toString.call(o)?t+"[]":t+"["+i+"]":i,"object"==typeof n?a.push(s(n,r)):a.push(encodeURIComponent(r)+"="+encodeURIComponent(n)));return a.join("&")}r.exports={parse:function(e){return e=e||t.location.href,/\?/.test(e)?e.replace(/#.*$/,"").replace(/^.*\?/,"").split("&").reduce(function(e,t){var r=t.split("="),n=decodeURIComponent(r[0]),i=decodeURIComponent(r[1]);return e[n]=i,e},{}):{}},stringify:s,queryify:function(e,t){return e=e||"",null!=t&&"object"==typeof t&&function(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}(t)&&(e+=-1===e.indexOf("?")?"?":"",e+=-1!==e.indexOf("=")?"&":"",e+=s(t)),e}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],52:[function(e,n,t){(function(t){"use strict";var r="function"==typeof t.atob?t.atob:e;function e(e){var t,r,n,i,o,a,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",c="";if(!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");for(a=0;t=(63&s.indexOf(e.charAt(a++)))<<2|(i=s.indexOf(e.charAt(a++)))>>4&3,r=(15&i)<<4|(o=s.indexOf(e.charAt(a++)))>>2&15,n=(3&o)<<6|63&s.indexOf(e.charAt(a++)),c+=String.fromCharCode(t)+(r?String.fromCharCode(r):"")+(n?String.fromCharCode(n):""),a<e.length;);return c}n.exports={atob:function(e){return r.call(t,e)},_atob:e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],53:[function(e,t,r){"use strict";t.exports=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}},{}]},{},[16])(16)});