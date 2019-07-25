!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;((t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).braintree||(t.braintree={})).client=e()}}(function(){return function i(a,s,u){function c(t,e){if(!s[t]){if(!a[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(d)return d(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=s[t]={exports:{}};a[t][0].call(o.exports,function(e){return c(a[t][1][e]||e)},o,o.exports,i,a,s,u)}return s[t].exports}for(var d="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(r,n,e){(function(e){"use strict";var t=r("promise-polyfill");n.exports=e.Promise||t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":10}],2:[function(e,t,r){"use strict";var a=e("./lib/promise"),s={};function n(r){var t,n,o,e,i=JSON.stringify(r);return!r.forceScriptReload&&(e=s[i])?e:(o=document.createElement("script"),t=r.dataAttributes||{},n=r.container||document.head,o.src=r.src,o.id=r.id,o.async=!0,r.crossorigin&&o.setAttribute("crossorigin",r.crossorigin),Object.keys(t).forEach(function(e){o.setAttribute("data-"+e,t[e])}),e=new a(function(e,t){o.addEventListener("load",function(){e(o)}),o.addEventListener("error",function(){t(new Error(r.src+" failed to load."))}),o.addEventListener("abort",function(){t(new Error(r.src+" has aborted."))}),n.appendChild(o)}),s[i]=e)}n.clearCache=function(){s={}},t.exports=n},{"./lib/promise":1}],3:[function(e,n,t){(function(t){"use strict";var r=e("./is-ie11");n.exports=function(e){return-1!==(e=e||t.navigator.userAgent).indexOf("MSIE")||r(e)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./is-ie11":4}],4:[function(e,t,r){"use strict";t.exports=function(e){return-1!==(e=e||navigator.userAgent).indexOf("Trident/7")}},{}],5:[function(e,t,r){"use strict";t.exports=function(e){return-1!==(e=e||navigator.userAgent).indexOf("MSIE 9")}},{}],6:[function(e,t,r){"use strict";t.exports=function(t){return function(){var e=arguments;setTimeout(function(){try{t.apply(null,e)}catch(e){console.log("Error in callback function"),console.log(e)}},1)}}},{}],7:[function(e,t,r){"use strict";t.exports=function(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}},{}],8:[function(e,t,r){"use strict";t.exports=function(e,t){if(!t)return e;e.then(function(e){t(null,e)}).catch(function(e){t(e)})}},{}],9:[function(e,t,r){"use strict";var n=e("./lib/deferred"),o=e("./lib/once"),i=e("./lib/promise-or-callback");function s(r){return function(){var e,t=Array.prototype.slice.call(arguments);return"function"==typeof t[t.length-1]&&(e=t.pop(),e=o(n(e))),i(r.apply(this,t),e)}}s.wrapPrototype=function(o,e){var i,a;return i=(e=e||{}).ignoreMethods||[],a=!0===e.transformPrivateMethods,Object.getOwnPropertyNames(o.prototype).filter(function(e){var t,r="constructor"!==e&&"function"==typeof o.prototype[e],n=-1===i.indexOf(e);return t=a||"_"!==e.charAt(0),r&&t&&n}).forEach(function(e){var t=o.prototype[e];o.prototype[e]=s(t)}),o},t.exports=s},{"./lib/deferred":6,"./lib/once":7,"./lib/promise-or-callback":8}],10:[function(e,t,r){"use strict";var n=setTimeout;function u(e){return Boolean(e&&void 0!==e.length)}function o(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function a(r,n){for(;3===r._state;)r=r._value;0!==r._state?(r._handled=!0,i._immediateFn(function(){var e=1===r._state?n.onFulfilled:n.onRejected;if(null!==e){var t;try{t=e(r._value)}catch(e){return void c(n.promise,e)}s(n.promise,t)}else(1===r._state?s:c)(n.promise,r._value)})):r._deferreds.push(n)}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if(e instanceof i)return t._state=3,t._value=e,void d(t);if("function"==typeof r)return void l(function(e,t){return function(){e.apply(t,arguments)}}(r,e),t)}t._state=1,t._value=e,d(t)}catch(e){c(t,e)}}function c(e,t){e._state=2,e._value=t,d(e)}function d(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,r=e._deferreds.length;t<r;t++)a(e,e._deferreds[t]);e._deferreds=null}function p(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function l(e,t){var r=!1;try{e(function(e){r||(r=!0,s(t,e))},function(e){r||(r=!0,c(t,e))})}catch(e){if(r)return;r=!0,c(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var r=new this.constructor(o);return a(this,new p(e,t,r)),r},i.prototype.finally=function(t){var r=this.constructor;return this.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){return r.reject(e)})})},i.all=function(t){return new i(function(n,o){if(!u(t))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(t);if(0===i.length)return n([]);var a=i.length;function s(t,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var r=e.then;if("function"==typeof r)return void r.call(e,function(e){s(t,e)},o)}i[t]=e,0==--a&&n(i)}catch(e){o(e)}}for(var e=0;e<i.length;e++)s(e,i[e])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(r){return new i(function(e,t){t(r)})},i.race=function(o){return new i(function(e,t){if(!u(o))return t(new TypeError("Promise.race accepts an array"));for(var r=0,n=o.length;r<n;r++)i.resolve(o[r]).then(e,t)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){n(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=i},{}],11:[function(e,t,r){"use strict";var n=e("@braintree/browser-detection/is-ie"),o=e("@braintree/browser-detection/is-ie9");t.exports={isIe:n,isIe9:o}},{"@braintree/browser-detection/is-ie":3,"@braintree/browser-detection/is-ie9":5}],12:[function(e,t,r){"use strict";var o=e("./constants").BRAINTREE_VERSION,n=e("./request/graphql"),i=e("./request"),a=e("../lib/is-verified-domain"),d=e("../lib/braintree-error"),p=e("../lib/convert-to-braintree-error"),s=e("./get-configuration").getConfiguration,l=e("../lib/add-metadata"),u=e("../lib/promise"),c=e("@braintree/wrap-promise"),f=e("../lib/once"),h=e("../lib/deferred"),y=e("../lib/assign").assign,g=e("../lib/analytics"),E=e("./errors"),I=e("../lib/constants").VERSION,_=e("../lib/constants").GRAPHQL_URLS,m=e("../lib/methods"),T=e("../lib/convert-methods-to-error"),N=e("../lib/assets"),A=e("../lib/constants").FRAUDNET_FNCLS,b=e("../lib/constants").FRAUDNET_SOURCE,C=e("../lib/constants").FRAUDNET_URL,R={};function v(e){var t,r;if(e=e||{},t=JSON.stringify(e),!(r=e.gatewayConfiguration))throw new d(E.CLIENT_MISSING_GATEWAY_CONFIGURATION);["assetsUrl","clientApiUrl","configUrl"].forEach(function(e){if(e in r&&!a(r[e]))throw new d({type:E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,code:E.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,message:e+" property is on an invalid domain."})}),this.getConfiguration=function(){return JSON.parse(t)},this._request=i,this._configuration=this.getConfiguration(),this._clientApiBaseUrl=r.clientApiUrl+"/v1/",r.graphQL&&(this._graphQL=new n({graphQL:r.graphQL}))}v.initialize=function(t){var r,e=R[t.authorization];return e?(g.sendEvent(e,"custom.client.load.cached"),e):(e=s(t).then(function(e){return t.debug&&(e.isDebug=!0),r=new v(e)}),R[t.authorization]=e,g.sendEvent(e,"custom.client.load.initialized"),e.then(function(e){return g.sendEvent(r,"custom.client.load.succeeded"),e}).catch(function(e){return delete R[t.authorization],u.reject(e)}))},v.clearCache=function(){R={}},v.prototype._findOrCreateFraudnetJSON=function(e){var t,r,n,o,i=document.querySelector('script[fncls="'+A+'"]');i||((i=document.body.appendChild(document.createElement("script"))).type="application/json",i.setAttribute("fncls",A)),t=this.getConfiguration(),r={rda_tenant:"bt_card",mid:t.gatewayConfiguration.merchantId},(n=t.authorizationFingerprint)&&n.split("&").forEach(function(e){var t=e.split("=");"customer_id"===t[0]&&1<t.length&&(r.cid=t[1])}),o={f:e.substr(0,32),fp:r,bu:!1,s:b},i.text=JSON.stringify(o)},v.prototype.request=function(n,r){var c=this,e=new u(function(i,a){var e,s,t,r,u=Boolean("payment_methods/credit_cards"===n.endpoint&&c.getConfiguration().gatewayConfiguration.creditCards.collectDeviceData);if("graphQLApi"!==n.api&&(n.method?n.endpoint||(e="options.endpoint"):e="options.method"),e)throw new d({type:E.CLIENT_OPTION_REQUIRED.type,code:E.CLIENT_OPTION_REQUIRED.code,message:e+" is required when making a request."});if(s="api"in n?n.api:"clientApi",r={method:n.method,graphQL:c._graphQL,timeout:n.timeout,metadata:c._configuration.analyticsMetadata},"clientApi"===s)t=c._clientApiBaseUrl,r.data=l(c._configuration,n.data);else{if("graphQLApi"!==s)throw new d({type:E.CLIENT_OPTION_INVALID.type,code:E.CLIENT_OPTION_INVALID.code,message:"options.api is invalid."});t=_[c._configuration.gatewayConfiguration.environment],n.endpoint="",r.method="post",r.data=y({clientSdkMetadata:{source:c._configuration.analyticsMetadata.source,integration:c._configuration.analyticsMetadata.integration,sessionId:c._configuration.analyticsMetadata.sessionId}},n.data),r.headers=function(e){return{Authorization:"Bearer "+(e.authorizationFingerprint||e.authorization),"Braintree-Version":o}}(c._configuration)}r.url=t+n.endpoint,r.sendAnalyticsEvent=function(e){g.sendEvent(c,e)},c._request(r,function(e,t,r){var n,o;(o=function(e,t){var r;-1===e?r=new d(E.CLIENT_REQUEST_TIMEOUT):403===e?r=new d(E.CLIENT_AUTHORIZATION_INSUFFICIENT):429===e?r=new d(E.CLIENT_RATE_LIMITED):500<=e?r=new d(E.CLIENT_GATEWAY_NETWORK):(e<200||400<=e)&&(r=p(t,{type:E.CLIENT_REQUEST_ERROR.type,code:E.CLIENT_REQUEST_ERROR.code,message:E.CLIENT_REQUEST_ERROR.message}));if(r)return r.details=r.details||{},r.details.httpStatus=e,r}(r,e))?a(o):"graphQLApi"===s&&t.errors?a(p(t.errors,{type:E.CLIENT_GRAPHQL_REQUEST_ERROR.type,code:E.CLIENT_GRAPHQL_REQUEST_ERROR.code,message:E.CLIENT_GRAPHQL_REQUEST_ERROR.message})):(n=y({_httpStatus:r},t),u&&n.creditCards&&0<n.creditCards.length&&(c._findOrCreateFraudnetJSON(n.creditCards[0].nonce),N.loadScript({src:C,forceScriptReload:!0})),i(n))})});return"function"==typeof r?(r=f(h(r)),void e.then(function(e){r(null,e,e._httpStatus)}).catch(function(e){var t=e&&e.details&&e.details.httpStatus;r(e,null,t)})):e},v.prototype.toJSON=function(){return this.getConfiguration()},v.prototype.getVersion=function(){return I},v.prototype.teardown=c(function(){return delete R[this.getConfiguration().authorization],T(this,m(v.prototype)),u.resolve()}),t.exports=v},{"../lib/add-metadata":33,"../lib/analytics":34,"../lib/assets":35,"../lib/assign":36,"../lib/braintree-error":37,"../lib/constants":38,"../lib/convert-methods-to-error":39,"../lib/convert-to-braintree-error":40,"../lib/deferred":42,"../lib/is-verified-domain":46,"../lib/methods":48,"../lib/once":49,"../lib/promise":50,"./constants":13,"./errors":14,"./get-configuration":15,"./request":27,"./request/graphql":25,"@braintree/wrap-promise":9}],13:[function(e,t,r){"use strict";t.exports={BRAINTREE_VERSION:"2018-05-10"}},{}],14:[function(e,t,r){"use strict";var n=e("../lib/braintree-error");t.exports={CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN:{type:n.types.MERCHANT,code:"CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN"},CLIENT_OPTION_REQUIRED:{type:n.types.MERCHANT,code:"CLIENT_OPTION_REQUIRED"},CLIENT_OPTION_INVALID:{type:n.types.MERCHANT,code:"CLIENT_OPTION_INVALID"},CLIENT_MISSING_GATEWAY_CONFIGURATION:{type:n.types.INTERNAL,code:"CLIENT_MISSING_GATEWAY_CONFIGURATION",message:"Missing gatewayConfiguration."},CLIENT_INVALID_AUTHORIZATION:{type:n.types.MERCHANT,code:"CLIENT_INVALID_AUTHORIZATION",message:"Authorization is invalid. Make sure your client token or tokenization key is valid."},CLIENT_GATEWAY_NETWORK:{type:n.types.NETWORK,code:"CLIENT_GATEWAY_NETWORK",message:"Cannot contact the gateway at this time."},CLIENT_REQUEST_TIMEOUT:{type:n.types.NETWORK,code:"CLIENT_REQUEST_TIMEOUT",message:"Request timed out waiting for a reply."},CLIENT_REQUEST_ERROR:{type:n.types.NETWORK,code:"CLIENT_REQUEST_ERROR",message:"There was a problem with your request."},CLIENT_GRAPHQL_REQUEST_ERROR:{type:n.types.NETWORK,code:"CLIENT_GRAPHQL_REQUEST_ERROR",message:"There was a problem with your request."},CLIENT_RATE_LIMITED:{type:n.types.MERCHANT,code:"CLIENT_RATE_LIMITED",message:"You are being rate-limited; please try again in a few minutes."},CLIENT_AUTHORIZATION_INSUFFICIENT:{type:n.types.MERCHANT,code:"CLIENT_AUTHORIZATION_INSUFFICIENT",message:"The authorization used has insufficient privileges."}}},{"../lib/braintree-error":37}],15:[function(r,n,e){(function(d){"use strict";var p=r("../lib/braintree-error"),e=r("../lib/promise"),t=r("@braintree/wrap-promise"),l=r("./request"),f=r("../lib/vendor/uuid"),h=r("../lib/constants"),y=r("../lib/create-authorization-data"),g=r("./errors"),E=r("./request/graphql"),I=r("../lib/is-date-string-before-or-on"),_=r("./constants").BRAINTREE_VERSION;n.exports={getConfiguration:t(function(c){return new e(function(o,i){var a,e,s,t,r,n=f(),u={merchantAppId:d.location.host,platform:h.PLATFORM,sdkVersion:h.VERSION,source:h.SOURCE,integration:h.INTEGRATION,integrationType:h.INTEGRATION,sessionId:n};try{e=y(c.authorization)}catch(e){return void i(new p(g.CLIENT_INVALID_AUTHORIZATION))}s=e.attrs,t=e.configUrl,s._meta=u,s.braintreeLibraryVersion=h.BRAINTREE_LIBRARY_VERSION,s.configVersion="3",r={url:t,method:"GET",data:s},s.authorizationFingerprint&&e.graphQL&&(I(e.graphQL.date,_)&&(r.graphQL=new E({graphQL:{url:e.graphQL.url,features:["configuration"]}})),r.metadata=u),l(r,function(e,t,r){var n;if(e)return n=403===r?g.CLIENT_AUTHORIZATION_INSUFFICIENT:g.CLIENT_GATEWAY_NETWORK,void i(new p({type:n.type,code:n.code,message:n.message,details:{originalError:e}}));a={authorization:c.authorization,authorizationType:s.tokenizationKey?"TOKENIZATION_KEY":"CLIENT_TOKEN",authorizationFingerprint:s.authorizationFingerprint,analyticsMetadata:u,gatewayConfiguration:t},o(a)})})})}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/braintree-error":37,"../lib/constants":38,"../lib/create-authorization-data":41,"../lib/is-date-string-before-or-on":45,"../lib/promise":50,"../lib/vendor/uuid":53,"./constants":13,"./errors":14,"./request":27,"./request/graphql":25,"@braintree/wrap-promise":9}],16:[function(e,t,r){"use strict";var n=e("../lib/braintree-error"),o=e("./client"),i=e("../lib/promise"),a=e("@braintree/wrap-promise"),s=e("../lib/errors");t.exports={create:a(function(e){return e.authorization?o.initialize(e):i.reject(new n({type:s.INSTANTIATION_OPTION_REQUIRED.type,code:s.INSTANTIATION_OPTION_REQUIRED.code,message:"options.authorization is required when instantiating a client."}))}),VERSION:"3.49.0"}},{"../lib/braintree-error":37,"../lib/errors":44,"../lib/promise":50,"./client":12,"@braintree/wrap-promise":9}],17:[function(e,t,r){"use strict";var g=e("../../lib/querystring"),E=e("../browser-detection"),I=e("../../lib/assign").assign,_=e("./prep-body"),m=e("./parse-body"),T=e("./xhr"),N=T.isAvailable,A=e("./graphql/request"),b=e("./default-request"),C=1,R=408;function v(t,r,n){var e,o,i,a,s,u,c,d=t.url,p=t.graphQL,l=t.timeout,f=T.getRequestObject(),h=n,y=Boolean(p&&p.isGraphQLRequest(d,t.data));t.headers=I({"Content-Type":"application/json"},t.headers),d=(i=y?new A(t):new b(t)).getUrl(),a=i.getBody(),s=i.getMethod(),u=i.getHeaders(),"GET"===s&&(d=g.queryify(d,a),a=null),N?f.onreadystatechange=function(){if(4===f.readyState){if(0===f.status&&y)return delete t.graphQL,void v(t,r,n);if(c=m(f.responseText),o=i.adaptResponseBody(c),400<=(e=i.determineStatus(f.status,c))||e<200){if(y&&function(e){var t=!e.data&&e.errors&&e.errors[0]&&e.errors[0].extensions&&e.errors[0].extensions.errorClass;return"UNKNOWN"===t||"INTERNAL"===t}(c))return delete t.graphQL,void v(t,r,n);if(r<C&&function(e){return(!e||e===R)&&E.isIe()}(e))return void v(t,++r,n);h(o||"error",null,e||500)}else h(null,o,e)}}:(t.headers&&(d=g.queryify(d,u)),f.onload=function(){h(null,m(f.responseText),f.status)},f.onerror=function(){h("error",null,500)},f.onprogress=function(){},f.ontimeout=function(){h("timeout",null,-1)});try{f.open(s,d,!0)}catch(e){if(!y)throw e;return delete t.graphQL,void v(t,r,n)}f.timeout=l,N&&Object.keys(u).forEach(function(e){f.setRequestHeader(e,u[e])});try{f.send(_(s,a))}catch(e){}}t.exports={request:function(e,t){v(e,0,t)}}},{"../../lib/assign":36,"../../lib/querystring":51,"../browser-detection":11,"./default-request":18,"./graphql/request":26,"./parse-body":30,"./prep-body":31,"./xhr":32}],18:[function(e,t,r){"use strict";function n(e){this._url=e.url,this._data=e.data,this._method=e.method,this._headers=e.headers}n.prototype.getUrl=function(){return this._url},n.prototype.getBody=function(){return this._data},n.prototype.getMethod=function(){return this._method},n.prototype.getHeaders=function(){return this._headers},n.prototype.adaptResponseBody=function(e){return e},n.prototype.determineStatus=function(e){return e},t.exports=n},{}],19:[function(e,t,r){(function(e){"use strict";t.exports=function(){return e.navigator.userAgent}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],20:[function(e,t,r){"use strict";var n=e("./error"),o=e("../../../../lib/assign").assign,i={creditCard:{AMERICAN_EXPRESS:"American Express",DISCOVER:"Discover",INTERNATIONAL_MAESTRO:"Maestro",JCB:"JCB",MASTERCARD:"MasterCard",SOLO:"Solo",UK_MAESTRO:"UK Maestro",UNION_PAY:"UnionPay",VISA:"Visa"},applePayWeb:{VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"amex"},visaCheckout:{VISA:"Visa",MASTERCARD:"MasterCard",DISCOVER:"Discover",AMERICAN_EXPRESS:"American Express"},googlePay:{VISA:"visa",MASTERCARD:"mastercard",DISCOVER:"discover",AMERICAN_EXPRESS:"amex"},masterpass:{VISA:"visa",MASTERCARD:"master",DISCOVER:"discover",AMERICAN_EXPRESS:"amex",DINERS:"diners",INTERNATIONAL_MAESTRO:"maestro",JCB:"jcb"}};function a(e,r){return e.reduce(function(e,t){return r.hasOwnProperty(t)?e.concat(r[t]):e},[])}t.exports=function(e,t){return e.data&&!e.errors?function(e,t){var r,n=e.data.clientConfiguration;r={environment:n.environment.toLowerCase(),clientApiUrl:n.clientApiUrl,assetsUrl:n.assetsUrl,analytics:{url:n.analyticsUrl},merchantId:n.merchantId,venmo:"off"},n.supportedFeatures&&(r.graphQL={url:t._graphQL._config.url,features:n.supportedFeatures.map(function(e){return e.toLowerCase()})});n.braintreeApi&&(r.braintreeApi=n.braintreeApi);n.applePayWeb&&(r.applePayWeb=n.applePayWeb,r.applePayWeb.supportedNetworks=a(n.applePayWeb.supportedCardBrands,i.applePayWeb),delete r.applePayWeb.supportedCardBrands);n.ideal&&(r.ideal=n.ideal);n.kount&&(r.kount={kountMerchantId:n.kount.merchantId});n.creditCard?(r.challenges=n.creditCard.challenges.map(function(e){return e.toLowerCase()}),r.creditCards={supportedCardTypes:a(n.creditCard.supportedCardBrands,i.creditCard)},r.threeDSecureEnabled=n.creditCard.threeDSecureEnabled,r.threeDSecure=n.creditCard.threeDSecure):(r.challenges=[],r.creditCards={supportedCardTypes:[]},r.threeDSecureEnabled=!1);n.googlePay&&(r.androidPay={displayName:n.googlePay.displayName,enabled:!0,environment:n.googlePay.environment.toLowerCase(),googleAuthorizationFingerprint:n.googlePay.googleAuthorization,supportedNetworks:a(n.googlePay.supportedCardBrands,i.googlePay)});n.venmo&&(r.payWithVenmo={merchantId:n.venmo.merchantId,accessToken:n.venmo.accessToken,environment:n.venmo.environment.toLowerCase()});n.paypal?(r.paypalEnabled=!0,r.paypal=o({},n.paypal),r.paypal.currencyIsoCode=r.paypal.currencyCode,r.paypal.environment=r.paypal.environment.toLowerCase(),delete r.paypal.currencyCode):r.paypalEnabled=!1;n.unionPay&&(r.unionPay={enabled:!0,merchantAccountId:n.unionPay.merchantAccountId});n.visaCheckout&&(r.visaCheckout={apikey:n.visaCheckout.apiKey,externalClientId:n.visaCheckout.externalClientId,supportedCardTypes:a(n.visaCheckout.supportedCardBrands,i.visaCheckout)});n.masterpass&&(r.masterpass={merchantCheckoutId:n.masterpass.merchantCheckoutId,supportedNetworks:a(n.masterpass.supportedCardBrands,i.masterpass)});n.usBankAccount&&(r.usBankAccount={routeId:n.usBankAccount.routeId,plaid:{publicKey:n.usBankAccount.plaidPublicKey}});return r}(e,t):n(e)}},{"../../../../lib/assign":36,"./error":22}],21:[function(e,t,r){"use strict";var n=e("./error"),i={AMERICAN_EXPRESS:"American Express",DINERS:"Discover",DISCOVER:"Discover",INTERNATIONAL_MAESTRO:"Maestro",JCB:"JCB",MASTERCARD:"MasterCard",UK_MAESTRO:"Maestro",UNION_PAY:"Union Pay",VISA:"Visa"},a={YES:"Yes",NO:"No",UNKNOWN:"Unknown"};t.exports=function(e){return e.data&&!e.errors?function(e){var t=e.data.tokenizeCreditCard,r=t.creditCard,n=r.last4?r.last4.substr(2,4):"",o=r.binData;o&&(["commercial","debit","durbinRegulated","healthcare","payroll","prepaid"].forEach(function(e){o[e]?o[e]=a[o[e]]:o[e]="Unknown"}),["issuingBank","countryOfIssuance","productId"].forEach(function(e){o[e]||(o[e]="Unknown")}));return{creditCards:[{binData:o,consumed:!1,description:n?"ending in "+n:"",nonce:t.token,details:{bin:r.bin||"",cardType:i[r.brandCode]||"Unknown",lastFour:r.last4||"",lastTwo:n},type:"CreditCard",threeDSecureInfo:null}]}}(e):n(e)}},{"./error":22}],22:[function(e,t,r){"use strict";t.exports=function(e){var t=e.errors&&e.errors[0]&&e.errors[0].extensions&&e.errors[0].extensions.errorClass;return"VALIDATION"===t?function(e){var t=function(e){var t=[];return e.forEach(function(e){!function e(t,r,n){var o;var i=r.extensions.legacyCode;var a=t[0];if(1===t.length)return void n.push({code:i,field:a,message:r.message});n.forEach(function(e){e.field===a&&(o=e)});o||(o={field:a,fieldErrors:[]},n.push(o));e(t.slice(1),r,o.fieldErrors)}(e.extensions.inputPath.slice(1),e,t)}),t}(e.errors);return{error:{message:function(e){var t=e[0].field;return{creditCard:"Credit card is invalid"}[t]}(t)},fieldErrors:t}}(e):t?function(e){return{error:{message:e.errors[0].message},fieldErrors:[]}}(e):{error:{message:"There was a problem serving your request"},fieldErrors:[]}}},{}],23:[function(e,t,r){"use strict";t.exports=function(){return{query:"query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       privacyUrl       userAgreementUrl       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment     }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }",operationName:"ClientConfiguration"}}},{}],24:[function(e,t,r){"use strict";var s=e("../../../../lib/assign").assign;function n(e){var t=e.creditCard,r=t&&t.billingAddress,n=t&&t.expirationDate,o=t&&(t.expirationMonth||n&&n.split("/")[0].trim()),i=t&&(t.expirationYear||n&&n.split("/")[1].trim()),a={input:{creditCard:{number:t&&t.number,expirationMonth:o,expirationYear:i,cvv:t&&t.cvv,cardholderName:t&&t.cardholderName},options:{}}};return r&&(a.input.creditCard.billingAddress=r),a.input=function(e,t){var r;e.creditCard&&e.creditCard.options&&"boolean"==typeof e.creditCard.options.validate?r=e.creditCard.options.validate:e.authorizationFingerprint&&e.tokenizationKey||e.authorizationFingerprint?r=!0:e.tokenizationKey&&(r=!1);"boolean"==typeof r&&(t.options=s({validate:r},t.options));return t}(e,a.input),a}t.exports=function(e){return{query:"mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }",variables:n(e),operationName:"TokenizeCreditCard"}}},{"../../../../lib/assign":36}],25:[function(e,t,r){"use strict";var o=e("../../browser-detection"),i={tokenize_credit_cards:"payment_methods/credit_cards",configuration:"configuration"},a=["creditCard.options.unionPayEnrollment"];function n(e){this._config=e.graphQL}n.prototype.getGraphQLEndpoint=function(){return this._config.url},n.prototype.isGraphQLRequest=function(e,t){var r,n=this.getClientApiPath(e);return!(!this._isGraphQLEnabled()||!n||o.isIe9())&&(r=this._config.features.some(function(e){return i[e]===n}),!function(t){return a.some(function(e){return void 0!==e.split(".").reduce(function(e,t){return e&&e[t]},t)})}(t)&&r)},n.prototype.getClientApiPath=function(e){var t,r=e.split("/client_api/v1/");return 1<r.length&&(t=r[1].split("?")[0]),t},n.prototype._isGraphQLEnabled=function(){return Boolean(this._config)},t.exports=n},{"../../browser-detection":11}],26:[function(e,t,r){"use strict";var n=e("../../constants").BRAINTREE_VERSION,o=e("../../../lib/assign").assign,i=e("./generators/credit-card-tokenization"),a=e("./adapters/credit-card-tokenization"),s=e("./generators/configuration"),u=e("./adapters/configuration"),c={"payment_methods/credit_cards":i,configuration:s},d={"payment_methods/credit_cards":a,configuration:u};function p(e){var t=e.graphQL.getClientApiPath(e.url);this._graphQL=e.graphQL,this._data=e.data,this._method=e.method,this._headers=e.headers,this._clientSdkMetadata={source:e.metadata.source,integration:e.metadata.integration,sessionId:e.metadata.sessionId},this._sendAnalyticsEvent=e.sendAnalyticsEvent||Function.prototype,this._generator=c[t],this._adapter=d[t],this._sendAnalyticsEvent("graphql.init")}function l(e){return-1===e.indexOf("_")?e:e.toLowerCase().replace(/(\_\w)/g,function(e){return e[1].toUpperCase()})}p.prototype.getUrl=function(){return this._graphQL.getGraphQLEndpoint()},p.prototype.getBody=function(){var e=function r(n){var o={};Object.keys(n).forEach(function(e){var t=l(e);"object"==typeof n[e]?o[t]=r(n[e]):"number"==typeof n[e]?o[t]=String(n[e]):o[t]=n[e]});return o}(this._data),t=this._generator(e),r=o({clientSdkMetadata:this._clientSdkMetadata},t);return JSON.stringify(r)},p.prototype.getMethod=function(){return"POST"},p.prototype.getHeaders=function(){var e;return e={Authorization:"Bearer "+(this._data.authorizationFingerprint?(this._sendAnalyticsEvent("graphql.authorization-fingerprint"),this._data.authorizationFingerprint):(this._sendAnalyticsEvent("graphql.tokenization-key"),this._data.tokenizationKey)),"Braintree-Version":n},o({},this._headers,e)},p.prototype.adaptResponseBody=function(e){return this._adapter(e,this)},p.prototype.determineStatus=function(e,t){var r,n;return r=200===e?(n=t.errors&&t.errors[0]&&t.errors[0].extensions&&t.errors[0].extensions.errorClass,t.data&&!t.errors?200:"VALIDATION"===n?422:"AUTHORIZATION"===n?403:"AUTHENTICATION"===n?401:function(e,t){return!e&&t.errors[0].message}(n,t)?403:500):e||500,this._sendAnalyticsEvent("graphql.status."+e),this._sendAnalyticsEvent("graphql.determinedStatus."+r),r},t.exports=p},{"../../../lib/assign":36,"../../constants":13,"./adapters/configuration":20,"./adapters/credit-card-tokenization":21,"./generators/configuration":23,"./generators/credit-card-tokenization":24}],27:[function(e,t,r){"use strict";var n,o=e("../../lib/once"),i=e("./jsonp-driver"),a=e("./ajax-driver"),s=e("./get-user-agent"),u=e("./is-http");t.exports=function(e,t){t=o(t||Function.prototype),e.method=(e.method||"GET").toUpperCase(),e.timeout=null==e.timeout?6e4:e.timeout,e.data=e.data||{},null==n&&(n=!(u()&&/MSIE\s(8|9)/.test(s()))),n?a.request(e,t):i.request(e,t)}},{"../../lib/once":49,"./ajax-driver":17,"./get-user-agent":19,"./is-http":28,"./jsonp-driver":29}],28:[function(e,t,r){(function(e){"use strict";t.exports=function(){return"http:"===e.location.protocol}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],29:[function(e,t,r){(function(u){"use strict";var c,d=e("../../lib/vendor/uuid"),p=e("../../lib/querystring"),l={};function f(t){try{delete u[t]}catch(e){u[t]=null}}t.exports={request:function(e,t){var r,n="callback_json_"+d().replace(/-/g,""),o=e.url,i=e.data,a=e.method,s=e.timeout;o=p.queryify(o,i),function(o,i,a){u[a]=function(e){var t=e.status||500,r=null,n=null;delete e.status,400<=t||t<200?r=e:n=e,f(a),function(e){e&&e.parentNode&&e.parentNode.removeChild(e)}(o),clearTimeout(l[a]),i(r,n,t)}}(r=function(e,t){var r=document.createElement("script"),n=!1;return r.src=e,r.async=!0,r.onerror=function(){u[t]({message:"error",status:500})},r.onload=r.onreadystatechange=function(){n||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(n=!0,r.onload=r.onreadystatechange=null)},r}(o=p.queryify(o,{_method:a,callback:n}),n),t,n),function(e,t){l[t]=setTimeout(function(){l[t]=null,u[t]({error:"timeout",status:-1}),u[t]=function(){f(t)}},e)}(s,n),(c=c||document.getElementsByTagName("head")[0]).appendChild(r)}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../lib/querystring":51,"../../lib/vendor/uuid":53}],30:[function(e,t,r){"use strict";t.exports=function(e){try{e=JSON.parse(e)}catch(e){}return e}},{}],31:[function(e,t,r){"use strict";t.exports=function(e,t){if("string"!=typeof e)throw new Error("Method must be a string");return"get"!==e.toLowerCase()&&null!=t&&(t="string"==typeof t?t:JSON.stringify(t)),t}},{}],32:[function(e,r,t){(function(e){"use strict";var t=e.XMLHttpRequest&&"withCredentials"in new e.XMLHttpRequest;r.exports={isAvailable:t,getRequestObject:function(){return t?new e.XMLHttpRequest:new e.XDomainRequest}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],33:[function(e,t,r){"use strict";var a=e("./create-authorization-data"),s=e("./json-clone"),u=e("./constants");t.exports=function(e,t){var r,n=t?s(t):{},o=a(e.authorization).attrs,i=s(e.analyticsMetadata);for(r in n.braintreeLibraryVersion=u.BRAINTREE_LIBRARY_VERSION,n._meta)n._meta.hasOwnProperty(r)&&(i[r]=n._meta[r]);return n._meta=i,o.tokenizationKey?n.tokenizationKey=o.tokenizationKey:n.authorizationFingerprint=o.authorizationFingerprint,n}},{"./constants":38,"./create-authorization-data":41,"./json-clone":47}],34:[function(e,t,r){"use strict";var n=e("./promise"),c=e("./constants"),d=e("./add-metadata");t.exports={sendEvent:function(e,a,s){var u=Date.now();return n.resolve(e).then(function(e){var t=Date.now(),r=e.getConfiguration(),n=e._request,o=r.gatewayConfiguration.analytics.url,i={analytics:[{kind:c.ANALYTICS_PREFIX+a,isAsync:Math.floor(t/1e3)!==Math.floor(u/1e3),timestamp:u}]};n({url:o,method:"post",data:d(r,i),timeout:c.ANALYTICS_REQUEST_TIMEOUT_MS},s)})}}},{"./add-metadata":33,"./constants":38,"./promise":50}],35:[function(e,t,r){"use strict";var n=e("@braintree/asset-loader/load-script");t.exports={loadScript:n}},{"@braintree/asset-loader/load-script":2}],36:[function(e,t,r){"use strict";var n="function"==typeof Object.assign?Object.assign:o;function o(e){var t,r,n;for(t=1;t<arguments.length;t++)for(n in r=arguments[t])r.hasOwnProperty(n)&&(e[n]=r[n]);return e}t.exports={assign:n,_assign:o}},{}],37:[function(e,t,r){"use strict";var n=e("./enumerate");function o(e){if(!o.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}((o.prototype=Object.create(Error.prototype)).constructor=o).types=n(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),o.findRootError=function(e){return e instanceof o&&e.details&&e.details.originalError?o.findRootError(e.details.originalError):e},t.exports=o},{"./enumerate":43}],38:[function(e,t,r){"use strict";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,ASSETS_URLS:{production:"https://assets.braintreegateway.com",sandbox:"https://assets.braintreegateway.com"},CLIENT_API_URLS:{production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"},FRAUDNET_SOURCE:"BRAINTREE_SIGNIN",FRAUDNET_FNCLS:"fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",FRAUDNET_URL:"https://c.paypal.com/da/r/fb.js",GRAPHQL_URLS:{production:"https://payments.braintree-api.com/graphql",sandbox:"https://payments.sandbox.braintree-api.com/graphql"},INTEGRATION_TIMEOUT_MS:6e4,VERSION:"3.49.0",INTEGRATION:"custom",SOURCE:"client",PLATFORM:"web",BRAINTREE_LIBRARY_VERSION:"braintree/web/3.49.0"}},{}],39:[function(e,t,r){"use strict";var n=e("./braintree-error"),o=e("./errors");t.exports=function(t,e){e.forEach(function(e){t[e]=function(){throw new n({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:e+" cannot be called after teardown."})}})}},{"./braintree-error":37,"./errors":44}],40:[function(e,t,r){"use strict";var n=e("./braintree-error");t.exports=function(e,t){return e instanceof n?e:new n({type:t.type,code:t.code,message:t.message,details:{originalError:e}})}},{"./braintree-error":37}],41:[function(e,t,r){"use strict";var o=e("../lib/vendor/polyfill").atob,i=e("../lib/constants").CLIENT_API_URLS;t.exports=function(e){var t,r,n={attrs:{},configUrl:""};return!function(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}(e)?(t=JSON.parse(o(e)),n.environment=t.environment,n.attrs.authorizationFingerprint=t.authorizationFingerprint,n.configUrl=t.configUrl,n.graphQL=t.graphQL):(r=function(e){var t=e.split("_"),r=t[0];return{merchantId:t.slice(2).join("_"),environment:r}}(e),n.environment=r.environment,n.attrs.tokenizationKey=e,n.configUrl=i[r.environment]+"/merchants/"+r.merchantId+"/client_api/v1/configuration"),n}},{"../lib/constants":38,"../lib/vendor/polyfill":52}],42:[function(e,t,r){"use strict";t.exports=function(t){return function(){var e=arguments;setTimeout(function(){t.apply(null,e)},1)}}},{}],43:[function(e,t,r){"use strict";t.exports=function(e,r){return r=null==r?"":r,e.reduce(function(e,t){return e[t]=r+t,e},{})}},{}],44:[function(e,t,r){"use strict";var n=e("./braintree-error");t.exports={INVALID_USE_OF_INTERNAL_FUNCTION:{type:n.types.INTERNAL,code:"INVALID_USE_OF_INTERNAL_FUNCTION"},INSTANTIATION_OPTION_REQUIRED:{type:n.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:n.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},CLIENT_SCRIPT_FAILED_TO_LOAD:{type:n.types.NETWORK,code:"CLIENT_SCRIPT_FAILED_TO_LOAD",message:"Braintree client script could not be loaded."},METHOD_CALLED_AFTER_TEARDOWN:{type:n.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"}}},{"./braintree-error":37}],45:[function(e,t,r){"use strict";function n(e){var t=e.split("-");return new Date(t[0],t[1],t[2])}t.exports=function(e,t){return n(e)<=n(t)}},{}],46:[function(e,t,r){"use strict";var n,o={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1,"braintree-api.com":1};t.exports=function(e){var t;return e=e.toLowerCase(),!!/^https:/.test(e)&&((n=n||document.createElement("a")).href=e,t=function(e){return e.split(".").slice(-2).join(".")}(n.hostname),o.hasOwnProperty(t))}},{}],47:[function(e,t,r){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],48:[function(e,t,r){"use strict";t.exports=function(t){return Object.keys(t).filter(function(e){return"function"==typeof t[e]})}},{}],49:[function(e,t,r){arguments[4][7][0].apply(r,arguments)},{dup:7}],50:[function(r,n,e){(function(e){"use strict";var t=e.Promise||r("promise-polyfill");n.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"promise-polyfill":10}],51:[function(e,r,t){(function(t){"use strict";function s(e,t){var r,n,o,i,a=[];for(o in e)e.hasOwnProperty(o)&&(n=e[o],r=t?(i=e)&&"object"==typeof i&&"number"==typeof i.length&&"[object Array]"===Object.prototype.toString.call(i)?t+"[]":t+"["+o+"]":o,"object"==typeof n?a.push(s(n,r)):a.push(encodeURIComponent(r)+"="+encodeURIComponent(n)));return a.join("&")}r.exports={parse:function(e){return e=e||t.location.href,/\?/.test(e)?e.replace(/#.*$/,"").replace(/^.*\?/,"").split("&").reduce(function(e,t){var r=t.split("="),n=decodeURIComponent(r[0]),o=decodeURIComponent(r[1]);return e[n]=o,e},{}):{}},stringify:s,queryify:function(e,t){return e=e||"",null!=t&&"object"==typeof t&&function(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}(t)&&(e+=-1===e.indexOf("?")?"?":"",e+=-1!==e.indexOf("=")?"&":"",e+=s(t)),e}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],52:[function(e,n,t){(function(t){"use strict";var r="function"==typeof t.atob?t.atob:e;function e(e){var t,r,n,o,i,a,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u="";if(!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");for(a=0;t=(63&s.indexOf(e.charAt(a++)))<<2|(o=s.indexOf(e.charAt(a++)))>>4&3,r=(15&o)<<4|(i=s.indexOf(e.charAt(a++)))>>2&15,n=(3&i)<<6|63&s.indexOf(e.charAt(a++)),u+=String.fromCharCode(t)+(r?String.fromCharCode(r):"")+(n?String.fromCharCode(n):""),a<e.length;);return u}n.exports={atob:function(e){return r.call(t,e)},_atob:e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],53:[function(e,t,r){"use strict";t.exports=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})}},{}]},{},[16])(16)});