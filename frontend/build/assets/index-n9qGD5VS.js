(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const p of g)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&u(v)}).observe(document,{childList:!0,subtree:!0});function i(g){const p={};return g.integrity&&(p.integrity=g.integrity),g.referrerPolicy&&(p.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?p.credentials="include":g.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(g){if(g.ep)return;g.ep=!0;const p=i(g);fetch(g.href,p)}})();function zp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var cs={exports:{}},ln={},ds={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function Mp(){if(rd)return ze;rd=1;var s=Symbol.for("react.element"),d=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),v=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),F=Symbol.iterator;function B(h){return h===null||typeof h!="object"?null:(h=F&&h[F]||h["@@iterator"],typeof h=="function"?h:null)}var re={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,j={};function w(h,I,ye){this.props=h,this.context=I,this.refs=j,this.updater=ye||re}w.prototype.isReactComponent={},w.prototype.setState=function(h,I){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,I,"setState")},w.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function C(){}C.prototype=w.prototype;function z(h,I,ye){this.props=h,this.context=I,this.refs=j,this.updater=ye||re}var H=z.prototype=new C;H.constructor=z,$(H,w.prototype),H.isPureReactComponent=!0;var X=Array.isArray,q=Object.prototype.hasOwnProperty,_={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function K(h,I,ye){var fe,U={},J=null,ce=null;if(I!=null)for(fe in I.ref!==void 0&&(ce=I.ref),I.key!==void 0&&(J=""+I.key),I)q.call(I,fe)&&!P.hasOwnProperty(fe)&&(U[fe]=I[fe]);var ke=arguments.length-2;if(ke===1)U.children=ye;else if(1<ke){for(var be=Array(ke),_e=0;_e<ke;_e++)be[_e]=arguments[_e+2];U.children=be}if(h&&h.defaultProps)for(fe in ke=h.defaultProps,ke)U[fe]===void 0&&(U[fe]=ke[fe]);return{$$typeof:s,type:h,key:J,ref:ce,props:U,_owner:_.current}}function D(h,I){return{$$typeof:s,type:h.type,key:I,ref:h.ref,props:h.props,_owner:h._owner}}function R(h){return typeof h=="object"&&h!==null&&h.$$typeof===s}function ee(h){var I={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(ye){return I[ye]})}var oe=/\/+/g;function ve(h,I){return typeof h=="object"&&h!==null&&h.key!=null?ee(""+h.key):I.toString(36)}function Ce(h,I,ye,fe,U){var J=typeof h;(J==="undefined"||J==="boolean")&&(h=null);var ce=!1;if(h===null)ce=!0;else switch(J){case"string":case"number":ce=!0;break;case"object":switch(h.$$typeof){case s:case d:ce=!0}}if(ce)return ce=h,U=U(ce),h=fe===""?"."+ve(ce,0):fe,X(U)?(ye="",h!=null&&(ye=h.replace(oe,"$&/")+"/"),Ce(U,I,ye,"",function(_e){return _e})):U!=null&&(R(U)&&(U=D(U,ye+(!U.key||ce&&ce.key===U.key?"":(""+U.key).replace(oe,"$&/")+"/")+h)),I.push(U)),1;if(ce=0,fe=fe===""?".":fe+":",X(h))for(var ke=0;ke<h.length;ke++){J=h[ke];var be=fe+ve(J,ke);ce+=Ce(J,I,ye,be,U)}else if(be=B(h),typeof be=="function")for(h=be.call(h),ke=0;!(J=h.next()).done;)J=J.value,be=fe+ve(J,ke++),ce+=Ce(J,I,ye,be,U);else if(J==="object")throw I=String(h),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return ce}function Te(h,I,ye){if(h==null)return h;var fe=[],U=0;return Ce(h,fe,"","",function(J){return I.call(ye,J,U++)}),fe}function Me(h){if(h._status===-1){var I=h._result;I=I(),I.then(function(ye){(h._status===0||h._status===-1)&&(h._status=1,h._result=ye)},function(ye){(h._status===0||h._status===-1)&&(h._status=2,h._result=ye)}),h._status===-1&&(h._status=0,h._result=I)}if(h._status===1)return h._result.default;throw h._result}var Se={current:null},G={transition:null},ie={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:G,ReactCurrentOwner:_};function te(){throw Error("act(...) is not supported in production builds of React.")}return ze.Children={map:Te,forEach:function(h,I,ye){Te(h,function(){I.apply(this,arguments)},ye)},count:function(h){var I=0;return Te(h,function(){I++}),I},toArray:function(h){return Te(h,function(I){return I})||[]},only:function(h){if(!R(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},ze.Component=w,ze.Fragment=i,ze.Profiler=g,ze.PureComponent=z,ze.StrictMode=u,ze.Suspense=k,ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,ze.act=te,ze.cloneElement=function(h,I,ye){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var fe=$({},h.props),U=h.key,J=h.ref,ce=h._owner;if(I!=null){if(I.ref!==void 0&&(J=I.ref,ce=_.current),I.key!==void 0&&(U=""+I.key),h.type&&h.type.defaultProps)var ke=h.type.defaultProps;for(be in I)q.call(I,be)&&!P.hasOwnProperty(be)&&(fe[be]=I[be]===void 0&&ke!==void 0?ke[be]:I[be])}var be=arguments.length-2;if(be===1)fe.children=ye;else if(1<be){ke=Array(be);for(var _e=0;_e<be;_e++)ke[_e]=arguments[_e+2];fe.children=ke}return{$$typeof:s,type:h.type,key:U,ref:J,props:fe,_owner:ce}},ze.createContext=function(h){return h={$$typeof:v,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:p,_context:h},h.Consumer=h},ze.createElement=K,ze.createFactory=function(h){var I=K.bind(null,h);return I.type=h,I},ze.createRef=function(){return{current:null}},ze.forwardRef=function(h){return{$$typeof:N,render:h}},ze.isValidElement=R,ze.lazy=function(h){return{$$typeof:A,_payload:{_status:-1,_result:h},_init:Me}},ze.memo=function(h,I){return{$$typeof:L,type:h,compare:I===void 0?null:I}},ze.startTransition=function(h){var I=G.transition;G.transition={};try{h()}finally{G.transition=I}},ze.unstable_act=te,ze.useCallback=function(h,I){return Se.current.useCallback(h,I)},ze.useContext=function(h){return Se.current.useContext(h)},ze.useDebugValue=function(){},ze.useDeferredValue=function(h){return Se.current.useDeferredValue(h)},ze.useEffect=function(h,I){return Se.current.useEffect(h,I)},ze.useId=function(){return Se.current.useId()},ze.useImperativeHandle=function(h,I,ye){return Se.current.useImperativeHandle(h,I,ye)},ze.useInsertionEffect=function(h,I){return Se.current.useInsertionEffect(h,I)},ze.useLayoutEffect=function(h,I){return Se.current.useLayoutEffect(h,I)},ze.useMemo=function(h,I){return Se.current.useMemo(h,I)},ze.useReducer=function(h,I,ye){return Se.current.useReducer(h,I,ye)},ze.useRef=function(h){return Se.current.useRef(h)},ze.useState=function(h){return Se.current.useState(h)},ze.useSyncExternalStore=function(h,I,ye){return Se.current.useSyncExternalStore(h,I,ye)},ze.useTransition=function(){return Se.current.useTransition()},ze.version="18.3.1",ze}var td;function gs(){return td||(td=1,ds.exports=Mp()),ds.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function _p(){if(od)return ln;od=1;var s=gs(),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,g=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function v(N,k,L){var A,F={},B=null,re=null;L!==void 0&&(B=""+L),k.key!==void 0&&(B=""+k.key),k.ref!==void 0&&(re=k.ref);for(A in k)u.call(k,A)&&!p.hasOwnProperty(A)&&(F[A]=k[A]);if(N&&N.defaultProps)for(A in k=N.defaultProps,k)F[A]===void 0&&(F[A]=k[A]);return{$$typeof:d,type:N,key:B,ref:re,props:F,_owner:g.current}}return ln.Fragment=i,ln.jsx=v,ln.jsxs=v,ln}var nd;function Op(){return nd||(nd=1,cs.exports=_p()),cs.exports}var t=Op(),bl={},us={exports:{}},Mr={},ps={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function Dp(){return ld||(ld=1,(function(s){function d(G,ie){var te=G.length;G.push(ie);e:for(;0<te;){var h=te-1>>>1,I=G[h];if(0<g(I,ie))G[h]=ie,G[te]=I,te=h;else break e}}function i(G){return G.length===0?null:G[0]}function u(G){if(G.length===0)return null;var ie=G[0],te=G.pop();if(te!==ie){G[0]=te;e:for(var h=0,I=G.length,ye=I>>>1;h<ye;){var fe=2*(h+1)-1,U=G[fe],J=fe+1,ce=G[J];if(0>g(U,te))J<I&&0>g(ce,U)?(G[h]=ce,G[J]=te,h=J):(G[h]=U,G[fe]=te,h=fe);else if(J<I&&0>g(ce,te))G[h]=ce,G[J]=te,h=J;else break e}}return ie}function g(G,ie){var te=G.sortIndex-ie.sortIndex;return te!==0?te:G.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var v=Date,N=v.now();s.unstable_now=function(){return v.now()-N}}var k=[],L=[],A=1,F=null,B=3,re=!1,$=!1,j=!1,w=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function H(G){for(var ie=i(L);ie!==null;){if(ie.callback===null)u(L);else if(ie.startTime<=G)u(L),ie.sortIndex=ie.expirationTime,d(k,ie);else break;ie=i(L)}}function X(G){if(j=!1,H(G),!$)if(i(k)!==null)$=!0,Me(q);else{var ie=i(L);ie!==null&&Se(X,ie.startTime-G)}}function q(G,ie){$=!1,j&&(j=!1,C(K),K=-1),re=!0;var te=B;try{for(H(ie),F=i(k);F!==null&&(!(F.expirationTime>ie)||G&&!ee());){var h=F.callback;if(typeof h=="function"){F.callback=null,B=F.priorityLevel;var I=h(F.expirationTime<=ie);ie=s.unstable_now(),typeof I=="function"?F.callback=I:F===i(k)&&u(k),H(ie)}else u(k);F=i(k)}if(F!==null)var ye=!0;else{var fe=i(L);fe!==null&&Se(X,fe.startTime-ie),ye=!1}return ye}finally{F=null,B=te,re=!1}}var _=!1,P=null,K=-1,D=5,R=-1;function ee(){return!(s.unstable_now()-R<D)}function oe(){if(P!==null){var G=s.unstable_now();R=G;var ie=!0;try{ie=P(!0,G)}finally{ie?ve():(_=!1,P=null)}}else _=!1}var ve;if(typeof z=="function")ve=function(){z(oe)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Te=Ce.port2;Ce.port1.onmessage=oe,ve=function(){Te.postMessage(null)}}else ve=function(){w(oe,0)};function Me(G){P=G,_||(_=!0,ve())}function Se(G,ie){K=w(function(){G(s.unstable_now())},ie)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){$||re||($=!0,Me(q))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return B},s.unstable_getFirstCallbackNode=function(){return i(k)},s.unstable_next=function(G){switch(B){case 1:case 2:case 3:var ie=3;break;default:ie=B}var te=B;B=ie;try{return G()}finally{B=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,ie){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var te=B;B=G;try{return ie()}finally{B=te}},s.unstable_scheduleCallback=function(G,ie,te){var h=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?h+te:h):te=h,G){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=te+I,G={id:A++,callback:ie,priorityLevel:G,startTime:te,expirationTime:I,sortIndex:-1},te>h?(G.sortIndex=te,d(L,G),i(k)===null&&G===i(L)&&(j?(C(K),K=-1):j=!0,Se(X,te-h))):(G.sortIndex=I,d(k,G),$||re||($=!0,Me(q))),G},s.unstable_shouldYield=ee,s.unstable_wrapCallback=function(G){var ie=B;return function(){var te=B;B=ie;try{return G.apply(this,arguments)}finally{B=te}}}})(hs)),hs}var ad;function Rp(){return ad||(ad=1,ps.exports=Dp()),ps.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function Ap(){if(sd)return Mr;sd=1;var s=gs(),d=Rp();function i(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,g={};function p(e,r){v(e,r),v(e+"Capture",r)}function v(e,r){for(g[e]=r,e=0;e<r.length;e++)u.add(r[e])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},F={};function B(e){return k.call(F,e)?!0:k.call(A,e)?!1:L.test(e)?F[e]=!0:(A[e]=!0,!1)}function re(e,r,o,n){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $(e,r,o,n){if(r===null||typeof r>"u"||re(e,r,o,n))return!0;if(n)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function j(e,r,o,n,l,a,c){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=o,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=c}var w={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){w[e]=new j(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];w[r]=new j(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){w[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){w[e]=new j(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){w[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){w[e]=new j(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){w[e]=new j(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){w[e]=new j(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){w[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)});var C=/[\-:]([a-z])/g;function z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(C,z);w[r]=new j(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(C,z);w[r]=new j(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(C,z);w[r]=new j(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){w[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)}),w.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){w[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)});function H(e,r,o,n){var l=w.hasOwnProperty(r)?w[r]:null;(l!==null?l.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&($(r,o,l,n)&&(o=null),n||l===null?B(r)&&(o===null?e.removeAttribute(r):e.setAttribute(r,""+o)):l.mustUseProperty?e[l.propertyName]=o===null?l.type===3?!1:"":o:(r=l.attributeName,n=l.attributeNamespace,o===null?e.removeAttribute(r):(l=l.type,o=l===3||l===4&&o===!0?"":""+o,n?e.setAttributeNS(n,r,o):e.setAttribute(r,o))))}var X=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),_=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),ee=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),Te=Symbol.for("react.memo"),Me=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),G=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,h;function I(e){if(h===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);h=r&&r[1]||""}return`
`+h+e}var ye=!1;function fe(e,r){if(!e||ye)return"";ye=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(M){var n=M}Reflect.construct(e,[],r)}else{try{r.call()}catch(M){n=M}e.call(r.prototype)}else{try{throw Error()}catch(M){n=M}e()}}catch(M){if(M&&n&&typeof M.stack=="string"){for(var l=M.stack.split(`
`),a=n.stack.split(`
`),c=l.length-1,f=a.length-1;1<=c&&0<=f&&l[c]!==a[f];)f--;for(;1<=c&&0<=f;c--,f--)if(l[c]!==a[f]){if(c!==1||f!==1)do if(c--,f--,0>f||l[c]!==a[f]){var y=`
`+l[c].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=c&&0<=f);break}}}finally{ye=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?I(e):""}function U(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=fe(e.type,!1),e;case 11:return e=fe(e.type.render,!1),e;case 1:return e=fe(e.type,!0),e;default:return""}}function J(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case _:return"Portal";case D:return"Profiler";case K:return"StrictMode";case ve:return"Suspense";case Ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ee:return(e.displayName||"Context")+".Consumer";case R:return(e._context.displayName||"Context")+".Provider";case oe:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Te:return r=e.displayName||null,r!==null?r:J(e.type)||"Memo";case Me:r=e._payload,e=e._init;try{return J(e(r))}catch{}}return null}function ce(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(r);case 8:return r===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ke(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function _e(e){var r=be(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,a=o.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(c){n=""+c,a.call(this,c)}}),Object.defineProperty(e,r,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function ar(e){e._valueTracker||(e._valueTracker=_e(e))}function Ir(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var o=r.getValue(),n="";return e&&(n=be(e)?e.checked?"true":"false":e.value),e=n,e!==o?(r.setValue(e),!0):!1}function jr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $e(e,r){var o=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Nr(e,r){var o=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;o=ke(r.value!=null?r.value:o),e._wrapperState={initialChecked:n,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function wr(e,r){r=r.checked,r!=null&&H(e,"checked",r,!1)}function Lr(e,r){wr(e,r);var o=ke(r.value),n=r.type;if(o!=null)n==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?Je(e,r.type,o):r.hasOwnProperty("defaultValue")&&Je(e,r.type,ke(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Ie(e,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,o||r===e.value||(e.value=r),e.defaultValue=r}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Je(e,r,o){(r!=="number"||jr(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Le=Array.isArray;function hr(e,r,o,n){if(e=e.options,r){r={};for(var l=0;l<o.length;l++)r["$"+o[l]]=!0;for(o=0;o<e.length;o++)l=r.hasOwnProperty("$"+e[o].value),e[o].selected!==l&&(e[o].selected=l),l&&n&&(e[o].defaultSelected=!0)}else{for(o=""+ke(o),r=null,l=0;l<e.length;l++){if(e[l].value===o){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function vr(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yr(e,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(i(92));if(Le(o)){if(1<o.length)throw Error(i(93));o=o[0]}r=o}r==null&&(r=""),o=r}e._wrapperState={initialValue:ke(o)}}function Pe(e,r){var o=ke(r.value),n=ke(r.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),r.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),n!=null&&(e.defaultValue=""+n)}function m(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function W(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?W(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var he,Ke=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,n,l){MSApp.execUnsafeLocalFunction(function(){return e(r,o,n,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(he=he||document.createElement("div"),he.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=he.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function E(e,r){if(r){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=r;return}}e.textContent=r}var de={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(de).forEach(function(e){De.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),de[r]=de[e]})});function xe(e,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||de.hasOwnProperty(e)&&de[e]?(""+r).trim():r+"px"}function O(e,r){e=e.style;for(var o in r)if(r.hasOwnProperty(o)){var n=o.indexOf("--")===0,l=xe(o,r[o],n);o==="float"&&(o="cssFloat"),n?e.setProperty(o,l):e[o]=l}}var ae=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ee(e,r){if(r){if(ae[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function He(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tr=null;function dr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,Cr=null,Vr=null;function pn(e){if(e=$o(e)){if(typeof _r!="function")throw Error(i(280));var r=e.stateNode;r&&(r=Rn(r),_r(e.stateNode,e.type,r))}}function Ae(e){Cr?Vr?Vr.push(e):Vr=[e]:Cr=e}function bs(){if(Cr){var e=Cr,r=Vr;if(Vr=Cr=null,pn(e),r)for(e=0;e<r.length;e++)pn(r[e])}}function ks(e,r){return e(r)}function js(){}var Sl=!1;function Ns(e,r,o){if(Sl)return e(r,o);Sl=!0;try{return ks(e,r,o)}finally{Sl=!1,(Cr!==null||Vr!==null)&&(js(),bs())}}function No(e,r){var o=e.stateNode;if(o===null)return null;var n=Rn(o);if(n===null)return null;o=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var Pl=!1;if(N)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Pl=!1}function Ad(e,r,o,n,l,a,c,f,y){var M=Array.prototype.slice.call(arguments,3);try{r.apply(o,M)}catch(V){this.onError(V)}}var Co=!1,hn=null,mn=!1,El=null,Fd={onError:function(e){Co=!0,hn=e}};function Id(e,r,o,n,l,a,c,f,y){Co=!1,hn=null,Ad.apply(Fd,arguments)}function Ld(e,r,o,n,l,a,c,f,y){if(Id.apply(this,arguments),Co){if(Co){var M=hn;Co=!1,hn=null}else throw Error(i(198));mn||(mn=!0,El=M)}}function Lt(e){var r=e,o=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(o=r.return),e=r.return;while(e)}return r.tag===3?o:null}function ws(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Cs(e){if(Lt(e)!==e)throw Error(i(188))}function Hd(e){var r=e.alternate;if(!r){if(r=Lt(e),r===null)throw Error(i(188));return r!==e?null:e}for(var o=e,n=r;;){var l=o.return;if(l===null)break;var a=l.alternate;if(a===null){if(n=l.return,n!==null){o=n;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===o)return Cs(l),e;if(a===n)return Cs(l),r;a=a.sibling}throw Error(i(188))}if(o.return!==n.return)o=l,n=a;else{for(var c=!1,f=l.child;f;){if(f===o){c=!0,o=l,n=a;break}if(f===n){c=!0,n=l,o=a;break}f=f.sibling}if(!c){for(f=a.child;f;){if(f===o){c=!0,o=a,n=l;break}if(f===n){c=!0,n=a,o=l;break}f=f.sibling}if(!c)throw Error(i(189))}}if(o.alternate!==n)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:r}function Ss(e){return e=Hd(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Ps(e);if(r!==null)return r;e=e.sibling}return null}var Es=d.unstable_scheduleCallback,Ts=d.unstable_cancelCallback,Ud=d.unstable_shouldYield,Bd=d.unstable_requestPaint,Ze=d.unstable_now,Wd=d.unstable_getCurrentPriorityLevel,Tl=d.unstable_ImmediatePriority,zs=d.unstable_UserBlockingPriority,fn=d.unstable_NormalPriority,$d=d.unstable_LowPriority,Ms=d.unstable_IdlePriority,gn=null,ot=null;function qd(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(gn,e,void 0,(e.current.flags&128)===128)}catch{}}var Qr=Math.clz32?Math.clz32:Qd,Yd=Math.log,Vd=Math.LN2;function Qd(e){return e>>>=0,e===0?32:31-(Yd(e)/Vd|0)|0}var xn=64,vn=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yn(e,r){var o=e.pendingLanes;if(o===0)return 0;var n=0,l=e.suspendedLanes,a=e.pingedLanes,c=o&268435455;if(c!==0){var f=c&~l;f!==0?n=So(f):(a&=c,a!==0&&(n=So(a)))}else c=o&~l,c!==0?n=So(c):a!==0&&(n=So(a));if(n===0)return 0;if(r!==0&&r!==n&&(r&l)===0&&(l=n&-n,a=r&-r,l>=a||l===16&&(a&4194240)!==0))return r;if((n&4)!==0&&(n|=o&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)o=31-Qr(r),l=1<<o,n|=e[o],r&=~l;return n}function Xd(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kd(e,r){for(var o=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-Qr(a),f=1<<c,y=l[c];y===-1?((f&o)===0||(f&n)!==0)&&(l[c]=Xd(f,r)):y<=r&&(e.expiredLanes|=f),a&=~f}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _s(){var e=xn;return xn<<=1,(xn&4194240)===0&&(xn=64),e}function Ml(e){for(var r=[],o=0;31>o;o++)r.push(e);return r}function Po(e,r,o){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Qr(r),e[r]=o}function Gd(e,r){var o=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<o;){var l=31-Qr(o),a=1<<l;r[l]=0,n[l]=-1,e[l]=-1,o&=~a}}function _l(e,r){var o=e.entangledLanes|=r;for(e=e.entanglements;o;){var n=31-Qr(o),l=1<<n;l&r|e[n]&r&&(e[n]|=r),o&=~l}}var Fe=0;function Os(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ds,Ol,Rs,As,Fs,Dl=!1,bn=[],yt=null,bt=null,kt=null,Eo=new Map,To=new Map,jt=[],Jd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Is(e,r){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Eo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(r.pointerId)}}function zo(e,r,o,n,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:o,eventSystemFlags:n,nativeEvent:a,targetContainers:[l]},r!==null&&(r=$o(r),r!==null&&Ol(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function Zd(e,r,o,n,l){switch(r){case"focusin":return yt=zo(yt,e,r,o,n,l),!0;case"dragenter":return bt=zo(bt,e,r,o,n,l),!0;case"mouseover":return kt=zo(kt,e,r,o,n,l),!0;case"pointerover":var a=l.pointerId;return Eo.set(a,zo(Eo.get(a)||null,e,r,o,n,l)),!0;case"gotpointercapture":return a=l.pointerId,To.set(a,zo(To.get(a)||null,e,r,o,n,l)),!0}return!1}function Ls(e){var r=Ht(e.target);if(r!==null){var o=Lt(r);if(o!==null){if(r=o.tag,r===13){if(r=ws(o),r!==null){e.blockedOn=r,Fs(e.priority,function(){Rs(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kn(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var o=Al(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var n=new o.constructor(o.type,o);tr=n,o.target.dispatchEvent(n),tr=null}else return r=$o(o),r!==null&&Ol(r),e.blockedOn=o,!1;r.shift()}return!0}function Hs(e,r,o){kn(e)&&o.delete(r)}function eu(){Dl=!1,yt!==null&&kn(yt)&&(yt=null),bt!==null&&kn(bt)&&(bt=null),kt!==null&&kn(kt)&&(kt=null),Eo.forEach(Hs),To.forEach(Hs)}function Mo(e,r){e.blockedOn===r&&(e.blockedOn=null,Dl||(Dl=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,eu)))}function _o(e){function r(l){return Mo(l,e)}if(0<bn.length){Mo(bn[0],e);for(var o=1;o<bn.length;o++){var n=bn[o];n.blockedOn===e&&(n.blockedOn=null)}}for(yt!==null&&Mo(yt,e),bt!==null&&Mo(bt,e),kt!==null&&Mo(kt,e),Eo.forEach(r),To.forEach(r),o=0;o<jt.length;o++)n=jt[o],n.blockedOn===e&&(n.blockedOn=null);for(;0<jt.length&&(o=jt[0],o.blockedOn===null);)Ls(o),o.blockedOn===null&&jt.shift()}var Zt=X.ReactCurrentBatchConfig,jn=!0;function ru(e,r,o,n){var l=Fe,a=Zt.transition;Zt.transition=null;try{Fe=1,Rl(e,r,o,n)}finally{Fe=l,Zt.transition=a}}function tu(e,r,o,n){var l=Fe,a=Zt.transition;Zt.transition=null;try{Fe=4,Rl(e,r,o,n)}finally{Fe=l,Zt.transition=a}}function Rl(e,r,o,n){if(jn){var l=Al(e,r,o,n);if(l===null)Zl(e,r,n,Nn,o),Is(e,n);else if(Zd(l,e,r,o,n))n.stopPropagation();else if(Is(e,n),r&4&&-1<Jd.indexOf(e)){for(;l!==null;){var a=$o(l);if(a!==null&&Ds(a),a=Al(e,r,o,n),a===null&&Zl(e,r,n,Nn,o),a===l)break;l=a}l!==null&&n.stopPropagation()}else Zl(e,r,n,null,o)}}var Nn=null;function Al(e,r,o,n){if(Nn=null,e=dr(n),e=Ht(e),e!==null)if(r=Lt(e),r===null)e=null;else if(o=r.tag,o===13){if(e=ws(r),e!==null)return e;e=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Nn=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wd()){case Tl:return 1;case zs:return 4;case fn:case $d:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var Nt=null,Fl=null,wn=null;function Bs(){if(wn)return wn;var e,r=Fl,o=r.length,n,l="value"in Nt?Nt.value:Nt.textContent,a=l.length;for(e=0;e<o&&r[e]===l[e];e++);var c=o-e;for(n=1;n<=c&&r[o-n]===l[a-n];n++);return wn=l.slice(e,1<n?1-n:void 0)}function Cn(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Ws(){return!1}function Or(e){function r(o,n,l,a,c){this._reactName=o,this._targetInst=l,this.type=n,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(o=e[f],this[f]=o?o(a):a[f]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Sn:Ws,this.isPropagationStopped=Ws,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),r}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Or(eo),Oo=te({},eo,{view:0,detail:0}),ou=Or(Oo),Ll,Hl,Do,Pn=te({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Do&&(Do&&e.type==="mousemove"?(Ll=e.screenX-Do.screenX,Hl=e.screenY-Do.screenY):Hl=Ll=0,Do=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),$s=Or(Pn),nu=te({},Pn,{dataTransfer:0}),lu=Or(nu),au=te({},Oo,{relatedTarget:0}),Ul=Or(au),su=te({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),iu=Or(su),cu=te({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),du=Or(cu),uu=te({},eo,{data:0}),qs=Or(uu),pu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=mu[e])?!!r[e]:!1}function Bl(){return fu}var gu=te({},Oo,{key:function(e){if(e.key){var r=pu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Cn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?Cn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xu=Or(gu),vu=te({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=Or(vu),yu=te({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),bu=Or(yu),ku=te({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ju=Or(ku),Nu=te({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wu=Or(Nu),Cu=[9,13,27,32],Wl=N&&"CompositionEvent"in window,Ro=null;N&&"documentMode"in document&&(Ro=document.documentMode);var Su=N&&"TextEvent"in window&&!Ro,Vs=N&&(!Wl||Ro&&8<Ro&&11>=Ro),Qs=" ",Xs=!1;function Ks(e,r){switch(e){case"keyup":return Cu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ro=!1;function Pu(e,r){switch(e){case"compositionend":return Gs(r);case"keypress":return r.which!==32?null:(Xs=!0,Qs);case"textInput":return e=r.data,e===Qs&&Xs?null:e;default:return null}}function Eu(e,r){if(ro)return e==="compositionend"||!Wl&&Ks(e,r)?(e=Bs(),wn=Fl=Nt=null,ro=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Vs&&r.locale!=="ko"?null:r.data;default:return null}}var Tu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Tu[e.type]:r==="textarea"}function Zs(e,r,o,n){Ae(n),r=_n(r,"onChange"),0<r.length&&(o=new Il("onChange","change",null,o,n),e.push({event:o,listeners:r}))}var Ao=null,Fo=null;function zu(e){xi(e,0)}function En(e){var r=ao(e);if(Ir(r))return e}function Mu(e,r){if(e==="change")return r}var ei=!1;if(N){var $l;if(N){var ql="oninput"in document;if(!ql){var ri=document.createElement("div");ri.setAttribute("oninput","return;"),ql=typeof ri.oninput=="function"}$l=ql}else $l=!1;ei=$l&&(!document.documentMode||9<document.documentMode)}function ti(){Ao&&(Ao.detachEvent("onpropertychange",oi),Fo=Ao=null)}function oi(e){if(e.propertyName==="value"&&En(Fo)){var r=[];Zs(r,Fo,e,dr(e)),Ns(zu,r)}}function _u(e,r,o){e==="focusin"?(ti(),Ao=r,Fo=o,Ao.attachEvent("onpropertychange",oi)):e==="focusout"&&ti()}function Ou(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return En(Fo)}function Du(e,r){if(e==="click")return En(r)}function Ru(e,r){if(e==="input"||e==="change")return En(r)}function Au(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Xr=typeof Object.is=="function"?Object.is:Au;function Io(e,r){if(Xr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var o=Object.keys(e),n=Object.keys(r);if(o.length!==n.length)return!1;for(n=0;n<o.length;n++){var l=o[n];if(!k.call(r,l)||!Xr(e[l],r[l]))return!1}return!0}function ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function li(e,r){var o=ni(e);e=0;for(var n;o;){if(o.nodeType===3){if(n=e+o.textContent.length,e<=r&&n>=r)return{node:o,offset:r-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ni(o)}}function ai(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ai(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function si(){for(var e=window,r=jr();r instanceof e.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)e=r.contentWindow;else break;r=jr(e.document)}return r}function Yl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Fu(e){var r=si(),o=e.focusedElem,n=e.selectionRange;if(r!==o&&o&&o.ownerDocument&&ai(o.ownerDocument.documentElement,o)){if(n!==null&&Yl(o)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(e,o.value.length);else if(e=(r=o.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=o.textContent.length,a=Math.min(n.start,l);n=n.end===void 0?a:Math.min(n.end,l),!e.extend&&a>n&&(l=n,n=a,a=l),l=li(o,a);var c=li(o,n);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),a>n?(e.addRange(r),e.extend(c.node,c.offset)):(r.setEnd(c.node,c.offset),e.addRange(r)))}}for(r=[],e=o;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)e=r[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Iu=N&&"documentMode"in document&&11>=document.documentMode,to=null,Vl=null,Lo=null,Ql=!1;function ii(e,r,o){var n=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ql||to==null||to!==jr(n)||(n=to,"selectionStart"in n&&Yl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Lo&&Io(Lo,n)||(Lo=n,n=_n(Vl,"onSelect"),0<n.length&&(r=new Il("onSelect","select",null,r,o),e.push({event:r,listeners:n}),r.target=to)))}function Tn(e,r){var o={};return o[e.toLowerCase()]=r.toLowerCase(),o["Webkit"+e]="webkit"+r,o["Moz"+e]="moz"+r,o}var oo={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Xl={},ci={};N&&(ci=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function zn(e){if(Xl[e])return Xl[e];if(!oo[e])return e;var r=oo[e],o;for(o in r)if(r.hasOwnProperty(o)&&o in ci)return Xl[e]=r[o];return e}var di=zn("animationend"),ui=zn("animationiteration"),pi=zn("animationstart"),hi=zn("transitionend"),mi=new Map,fi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,r){mi.set(e,r),p(r,[e])}for(var Kl=0;Kl<fi.length;Kl++){var Gl=fi[Kl],Lu=Gl.toLowerCase(),Hu=Gl[0].toUpperCase()+Gl.slice(1);wt(Lu,"on"+Hu)}wt(di,"onAnimationEnd"),wt(ui,"onAnimationIteration"),wt(pi,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(hi,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function gi(e,r,o){var n=e.type||"unknown-event";e.currentTarget=o,Ld(n,r,void 0,e),e.currentTarget=null}function xi(e,r){r=(r&4)!==0;for(var o=0;o<e.length;o++){var n=e[o],l=n.event;n=n.listeners;e:{var a=void 0;if(r)for(var c=n.length-1;0<=c;c--){var f=n[c],y=f.instance,M=f.currentTarget;if(f=f.listener,y!==a&&l.isPropagationStopped())break e;gi(l,f,M),a=y}else for(c=0;c<n.length;c++){if(f=n[c],y=f.instance,M=f.currentTarget,f=f.listener,y!==a&&l.isPropagationStopped())break e;gi(l,f,M),a=y}}}if(mn)throw e=El,mn=!1,El=null,e}function Be(e,r){var o=r[la];o===void 0&&(o=r[la]=new Set);var n=e+"__bubble";o.has(n)||(vi(r,e,2,!1),o.add(n))}function Jl(e,r,o){var n=0;r&&(n|=4),vi(o,e,n,r)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[Mn]){e[Mn]=!0,u.forEach(function(o){o!=="selectionchange"&&(Uu.has(o)||Jl(o,!1,e),Jl(o,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Mn]||(r[Mn]=!0,Jl("selectionchange",!1,r))}}function vi(e,r,o,n){switch(Us(r)){case 1:var l=ru;break;case 4:l=tu;break;default:l=Rl}o=l.bind(null,r,o,e),l=void 0,!Pl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(r,o,{capture:!0,passive:l}):e.addEventListener(r,o,!0):l!==void 0?e.addEventListener(r,o,{passive:l}):e.addEventListener(r,o,!1)}function Zl(e,r,o,n,l){var a=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var f=n.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(c===4)for(c=n.return;c!==null;){var y=c.tag;if((y===3||y===4)&&(y=c.stateNode.containerInfo,y===l||y.nodeType===8&&y.parentNode===l))return;c=c.return}for(;f!==null;){if(c=Ht(f),c===null)return;if(y=c.tag,y===5||y===6){n=a=c;continue e}f=f.parentNode}}n=n.return}Ns(function(){var M=a,V=dr(o),Q=[];e:{var Y=mi.get(e);if(Y!==void 0){var ne=Il,se=e;switch(e){case"keypress":if(Cn(o)===0)break e;case"keydown":case"keyup":ne=xu;break;case"focusin":se="focus",ne=Ul;break;case"focusout":se="blur",ne=Ul;break;case"beforeblur":case"afterblur":ne=Ul;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=lu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=bu;break;case di:case ui:case pi:ne=iu;break;case hi:ne=ju;break;case"scroll":ne=ou;break;case"wheel":ne=wu;break;case"copy":case"cut":case"paste":ne=du;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=Ys}var ue=(r&4)!==0,er=!ue&&e==="scroll",S=ue?Y!==null?Y+"Capture":null:Y;ue=[];for(var b=M,T;b!==null;){T=b;var Z=T.stateNode;if(T.tag===5&&Z!==null&&(T=Z,S!==null&&(Z=No(b,S),Z!=null&&ue.push(Bo(b,Z,T)))),er)break;b=b.return}0<ue.length&&(Y=new ne(Y,se,null,o,V),Q.push({event:Y,listeners:ue}))}}if((r&7)===0){e:{if(Y=e==="mouseover"||e==="pointerover",ne=e==="mouseout"||e==="pointerout",Y&&o!==tr&&(se=o.relatedTarget||o.fromElement)&&(Ht(se)||se[dt]))break e;if((ne||Y)&&(Y=V.window===V?V:(Y=V.ownerDocument)?Y.defaultView||Y.parentWindow:window,ne?(se=o.relatedTarget||o.toElement,ne=M,se=se?Ht(se):null,se!==null&&(er=Lt(se),se!==er||se.tag!==5&&se.tag!==6)&&(se=null)):(ne=null,se=M),ne!==se)){if(ue=$s,Z="onMouseLeave",S="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(ue=Ys,Z="onPointerLeave",S="onPointerEnter",b="pointer"),er=ne==null?Y:ao(ne),T=se==null?Y:ao(se),Y=new ue(Z,b+"leave",ne,o,V),Y.target=er,Y.relatedTarget=T,Z=null,Ht(V)===M&&(ue=new ue(S,b+"enter",se,o,V),ue.target=T,ue.relatedTarget=er,Z=ue),er=Z,ne&&se)r:{for(ue=ne,S=se,b=0,T=ue;T;T=no(T))b++;for(T=0,Z=S;Z;Z=no(Z))T++;for(;0<b-T;)ue=no(ue),b--;for(;0<T-b;)S=no(S),T--;for(;b--;){if(ue===S||S!==null&&ue===S.alternate)break r;ue=no(ue),S=no(S)}ue=null}else ue=null;ne!==null&&yi(Q,Y,ne,ue,!1),se!==null&&er!==null&&yi(Q,er,se,ue,!0)}}e:{if(Y=M?ao(M):window,ne=Y.nodeName&&Y.nodeName.toLowerCase(),ne==="select"||ne==="input"&&Y.type==="file")var pe=Mu;else if(Js(Y))if(ei)pe=Ru;else{pe=Ou;var je=_u}else(ne=Y.nodeName)&&ne.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(pe=Du);if(pe&&(pe=pe(e,M))){Zs(Q,pe,o,V);break e}je&&je(e,Y,M),e==="focusout"&&(je=Y._wrapperState)&&je.controlled&&Y.type==="number"&&Je(Y,"number",Y.value)}switch(je=M?ao(M):window,e){case"focusin":(Js(je)||je.contentEditable==="true")&&(to=je,Vl=M,Lo=null);break;case"focusout":Lo=Vl=to=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,ii(Q,o,V);break;case"selectionchange":if(Iu)break;case"keydown":case"keyup":ii(Q,o,V)}var Ne;if(Wl)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else ro?Ks(e,o)&&(we="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(we="onCompositionStart");we&&(Vs&&o.locale!=="ko"&&(ro||we!=="onCompositionStart"?we==="onCompositionEnd"&&ro&&(Ne=Bs()):(Nt=V,Fl="value"in Nt?Nt.value:Nt.textContent,ro=!0)),je=_n(M,we),0<je.length&&(we=new qs(we,e,null,o,V),Q.push({event:we,listeners:je}),Ne?we.data=Ne:(Ne=Gs(o),Ne!==null&&(we.data=Ne)))),(Ne=Su?Pu(e,o):Eu(e,o))&&(M=_n(M,"onBeforeInput"),0<M.length&&(V=new qs("onBeforeInput","beforeinput",null,o,V),Q.push({event:V,listeners:M}),V.data=Ne))}xi(Q,r)})}function Bo(e,r,o){return{instance:e,listener:r,currentTarget:o}}function _n(e,r){for(var o=r+"Capture",n=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=No(e,o),a!=null&&n.unshift(Bo(e,a,l)),a=No(e,r),a!=null&&n.push(Bo(e,a,l))),e=e.return}return n}function no(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yi(e,r,o,n,l){for(var a=r._reactName,c=[];o!==null&&o!==n;){var f=o,y=f.alternate,M=f.stateNode;if(y!==null&&y===n)break;f.tag===5&&M!==null&&(f=M,l?(y=No(o,a),y!=null&&c.unshift(Bo(o,y,f))):l||(y=No(o,a),y!=null&&c.push(Bo(o,y,f)))),o=o.return}c.length!==0&&e.push({event:r,listeners:c})}var Bu=/\r\n?/g,Wu=/\u0000|\uFFFD/g;function bi(e){return(typeof e=="string"?e:""+e).replace(Bu,`
`).replace(Wu,"")}function On(e,r,o){if(r=bi(r),bi(e)!==r&&o)throw Error(i(425))}function Dn(){}var ea=null,ra=null;function ta(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,$u=typeof clearTimeout=="function"?clearTimeout:void 0,ki=typeof Promise=="function"?Promise:void 0,qu=typeof queueMicrotask=="function"?queueMicrotask:typeof ki<"u"?function(e){return ki.resolve(null).then(e).catch(Yu)}:oa;function Yu(e){setTimeout(function(){throw e})}function na(e,r){var o=r,n=0;do{var l=o.nextSibling;if(e.removeChild(o),l&&l.nodeType===8)if(o=l.data,o==="/$"){if(n===0){e.removeChild(l),_o(r);return}n--}else o!=="$"&&o!=="$?"&&o!=="$!"||n++;o=l}while(o);_o(r)}function Ct(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function ji(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return e;r--}else o==="/$"&&r++}e=e.previousSibling}return null}var lo=Math.random().toString(36).slice(2),nt="__reactFiber$"+lo,Wo="__reactProps$"+lo,dt="__reactContainer$"+lo,la="__reactEvents$"+lo,Vu="__reactListeners$"+lo,Qu="__reactHandles$"+lo;function Ht(e){var r=e[nt];if(r)return r;for(var o=e.parentNode;o;){if(r=o[dt]||o[nt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(e=ji(e);e!==null;){if(o=e[nt])return o;e=ji(e)}return r}e=o,o=e.parentNode}return null}function $o(e){return e=e[nt]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ao(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Rn(e){return e[Wo]||null}var aa=[],so=-1;function St(e){return{current:e}}function We(e){0>so||(e.current=aa[so],aa[so]=null,so--)}function Ue(e,r){so++,aa[so]=e.current,e.current=r}var Pt={},mr=St(Pt),Sr=St(!1),Ut=Pt;function io(e,r){var o=e.type.contextTypes;if(!o)return Pt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in o)l[a]=r[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function Pr(e){return e=e.childContextTypes,e!=null}function An(){We(Sr),We(mr)}function Ni(e,r,o){if(mr.current!==Pt)throw Error(i(168));Ue(mr,r),Ue(Sr,o)}function wi(e,r,o){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return o;n=n.getChildContext();for(var l in n)if(!(l in r))throw Error(i(108,ce(e)||"Unknown",l));return te({},o,n)}function Fn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Ut=mr.current,Ue(mr,e),Ue(Sr,Sr.current),!0}function Ci(e,r,o){var n=e.stateNode;if(!n)throw Error(i(169));o?(e=wi(e,r,Ut),n.__reactInternalMemoizedMergedChildContext=e,We(Sr),We(mr),Ue(mr,e)):We(Sr),Ue(Sr,o)}var ut=null,In=!1,sa=!1;function Si(e){ut===null?ut=[e]:ut.push(e)}function Xu(e){In=!0,Si(e)}function Et(){if(!sa&&ut!==null){sa=!0;var e=0,r=Fe;try{var o=ut;for(Fe=1;e<o.length;e++){var n=o[e];do n=n(!0);while(n!==null)}ut=null,In=!1}catch(l){throw ut!==null&&(ut=ut.slice(e+1)),Es(Tl,Et),l}finally{Fe=r,sa=!1}}return null}var co=[],uo=0,Ln=null,Hn=0,Hr=[],Ur=0,Bt=null,pt=1,ht="";function Wt(e,r){co[uo++]=Hn,co[uo++]=Ln,Ln=e,Hn=r}function Pi(e,r,o){Hr[Ur++]=pt,Hr[Ur++]=ht,Hr[Ur++]=Bt,Bt=e;var n=pt;e=ht;var l=32-Qr(n)-1;n&=~(1<<l),o+=1;var a=32-Qr(r)+l;if(30<a){var c=l-l%5;a=(n&(1<<c)-1).toString(32),n>>=c,l-=c,pt=1<<32-Qr(r)+l|o<<l|n,ht=a+e}else pt=1<<a|o<<l|n,ht=e}function ia(e){e.return!==null&&(Wt(e,1),Pi(e,1,0))}function ca(e){for(;e===Ln;)Ln=co[--uo],co[uo]=null,Hn=co[--uo],co[uo]=null;for(;e===Bt;)Bt=Hr[--Ur],Hr[Ur]=null,ht=Hr[--Ur],Hr[Ur]=null,pt=Hr[--Ur],Hr[Ur]=null}var Dr=null,Rr=null,qe=!1,Kr=null;function Ei(e,r){var o=qr(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=e,r=e.deletions,r===null?(e.deletions=[o],e.flags|=16):r.push(o)}function Ti(e,r){switch(e.tag){case 5:var o=e.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Dr=e,Rr=Ct(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Dr=e,Rr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Bt!==null?{id:pt,overflow:ht}:null,e.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=qr(18,null,null,0),o.stateNode=r,o.return=e,e.child=o,Dr=e,Rr=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ua(e){if(qe){var r=Rr;if(r){var o=r;if(!Ti(e,r)){if(da(e))throw Error(i(418));r=Ct(o.nextSibling);var n=Dr;r&&Ti(e,r)?Ei(n,o):(e.flags=e.flags&-4097|2,qe=!1,Dr=e)}}else{if(da(e))throw Error(i(418));e.flags=e.flags&-4097|2,qe=!1,Dr=e}}}function zi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dr=e}function Un(e){if(e!==Dr)return!1;if(!qe)return zi(e),qe=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!ta(e.type,e.memoizedProps)),r&&(r=Rr)){if(da(e))throw Mi(),Error(i(418));for(;r;)Ei(e,r),r=Ct(r.nextSibling)}if(zi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(r===0){Rr=Ct(e.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}e=e.nextSibling}Rr=null}}else Rr=Dr?Ct(e.stateNode.nextSibling):null;return!0}function Mi(){for(var e=Rr;e;)e=Ct(e.nextSibling)}function po(){Rr=Dr=null,qe=!1}function pa(e){Kr===null?Kr=[e]:Kr.push(e)}var Ku=X.ReactCurrentBatchConfig;function qo(e,r,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var n=o.stateNode}if(!n)throw Error(i(147,e));var l=n,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(c){var f=l.refs;c===null?delete f[a]:f[a]=c},r._stringRef=a,r)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Bn(e,r){throw e=Object.prototype.toString.call(r),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function _i(e){var r=e._init;return r(e._payload)}function Oi(e){function r(S,b){if(e){var T=S.deletions;T===null?(S.deletions=[b],S.flags|=16):T.push(b)}}function o(S,b){if(!e)return null;for(;b!==null;)r(S,b),b=b.sibling;return null}function n(S,b){for(S=new Map;b!==null;)b.key!==null?S.set(b.key,b):S.set(b.index,b),b=b.sibling;return S}function l(S,b){return S=At(S,b),S.index=0,S.sibling=null,S}function a(S,b,T){return S.index=T,e?(T=S.alternate,T!==null?(T=T.index,T<b?(S.flags|=2,b):T):(S.flags|=2,b)):(S.flags|=1048576,b)}function c(S){return e&&S.alternate===null&&(S.flags|=2),S}function f(S,b,T,Z){return b===null||b.tag!==6?(b=os(T,S.mode,Z),b.return=S,b):(b=l(b,T),b.return=S,b)}function y(S,b,T,Z){var pe=T.type;return pe===P?V(S,b,T.props.children,Z,T.key):b!==null&&(b.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Me&&_i(pe)===b.type)?(Z=l(b,T.props),Z.ref=qo(S,b,T),Z.return=S,Z):(Z=pl(T.type,T.key,T.props,null,S.mode,Z),Z.ref=qo(S,b,T),Z.return=S,Z)}function M(S,b,T,Z){return b===null||b.tag!==4||b.stateNode.containerInfo!==T.containerInfo||b.stateNode.implementation!==T.implementation?(b=ns(T,S.mode,Z),b.return=S,b):(b=l(b,T.children||[]),b.return=S,b)}function V(S,b,T,Z,pe){return b===null||b.tag!==7?(b=Gt(T,S.mode,Z,pe),b.return=S,b):(b=l(b,T),b.return=S,b)}function Q(S,b,T){if(typeof b=="string"&&b!==""||typeof b=="number")return b=os(""+b,S.mode,T),b.return=S,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case q:return T=pl(b.type,b.key,b.props,null,S.mode,T),T.ref=qo(S,null,b),T.return=S,T;case _:return b=ns(b,S.mode,T),b.return=S,b;case Me:var Z=b._init;return Q(S,Z(b._payload),T)}if(Le(b)||ie(b))return b=Gt(b,S.mode,T,null),b.return=S,b;Bn(S,b)}return null}function Y(S,b,T,Z){var pe=b!==null?b.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return pe!==null?null:f(S,b,""+T,Z);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case q:return T.key===pe?y(S,b,T,Z):null;case _:return T.key===pe?M(S,b,T,Z):null;case Me:return pe=T._init,Y(S,b,pe(T._payload),Z)}if(Le(T)||ie(T))return pe!==null?null:V(S,b,T,Z,null);Bn(S,T)}return null}function ne(S,b,T,Z,pe){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return S=S.get(T)||null,f(b,S,""+Z,pe);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case q:return S=S.get(Z.key===null?T:Z.key)||null,y(b,S,Z,pe);case _:return S=S.get(Z.key===null?T:Z.key)||null,M(b,S,Z,pe);case Me:var je=Z._init;return ne(S,b,T,je(Z._payload),pe)}if(Le(Z)||ie(Z))return S=S.get(T)||null,V(b,S,Z,pe,null);Bn(b,Z)}return null}function se(S,b,T,Z){for(var pe=null,je=null,Ne=b,we=b=0,cr=null;Ne!==null&&we<T.length;we++){Ne.index>we?(cr=Ne,Ne=null):cr=Ne.sibling;var Re=Y(S,Ne,T[we],Z);if(Re===null){Ne===null&&(Ne=cr);break}e&&Ne&&Re.alternate===null&&r(S,Ne),b=a(Re,b,we),je===null?pe=Re:je.sibling=Re,je=Re,Ne=cr}if(we===T.length)return o(S,Ne),qe&&Wt(S,we),pe;if(Ne===null){for(;we<T.length;we++)Ne=Q(S,T[we],Z),Ne!==null&&(b=a(Ne,b,we),je===null?pe=Ne:je.sibling=Ne,je=Ne);return qe&&Wt(S,we),pe}for(Ne=n(S,Ne);we<T.length;we++)cr=ne(Ne,S,we,T[we],Z),cr!==null&&(e&&cr.alternate!==null&&Ne.delete(cr.key===null?we:cr.key),b=a(cr,b,we),je===null?pe=cr:je.sibling=cr,je=cr);return e&&Ne.forEach(function(Ft){return r(S,Ft)}),qe&&Wt(S,we),pe}function ue(S,b,T,Z){var pe=ie(T);if(typeof pe!="function")throw Error(i(150));if(T=pe.call(T),T==null)throw Error(i(151));for(var je=pe=null,Ne=b,we=b=0,cr=null,Re=T.next();Ne!==null&&!Re.done;we++,Re=T.next()){Ne.index>we?(cr=Ne,Ne=null):cr=Ne.sibling;var Ft=Y(S,Ne,Re.value,Z);if(Ft===null){Ne===null&&(Ne=cr);break}e&&Ne&&Ft.alternate===null&&r(S,Ne),b=a(Ft,b,we),je===null?pe=Ft:je.sibling=Ft,je=Ft,Ne=cr}if(Re.done)return o(S,Ne),qe&&Wt(S,we),pe;if(Ne===null){for(;!Re.done;we++,Re=T.next())Re=Q(S,Re.value,Z),Re!==null&&(b=a(Re,b,we),je===null?pe=Re:je.sibling=Re,je=Re);return qe&&Wt(S,we),pe}for(Ne=n(S,Ne);!Re.done;we++,Re=T.next())Re=ne(Ne,S,we,Re.value,Z),Re!==null&&(e&&Re.alternate!==null&&Ne.delete(Re.key===null?we:Re.key),b=a(Re,b,we),je===null?pe=Re:je.sibling=Re,je=Re);return e&&Ne.forEach(function(Tp){return r(S,Tp)}),qe&&Wt(S,we),pe}function er(S,b,T,Z){if(typeof T=="object"&&T!==null&&T.type===P&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case q:e:{for(var pe=T.key,je=b;je!==null;){if(je.key===pe){if(pe=T.type,pe===P){if(je.tag===7){o(S,je.sibling),b=l(je,T.props.children),b.return=S,S=b;break e}}else if(je.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===Me&&_i(pe)===je.type){o(S,je.sibling),b=l(je,T.props),b.ref=qo(S,je,T),b.return=S,S=b;break e}o(S,je);break}else r(S,je);je=je.sibling}T.type===P?(b=Gt(T.props.children,S.mode,Z,T.key),b.return=S,S=b):(Z=pl(T.type,T.key,T.props,null,S.mode,Z),Z.ref=qo(S,b,T),Z.return=S,S=Z)}return c(S);case _:e:{for(je=T.key;b!==null;){if(b.key===je)if(b.tag===4&&b.stateNode.containerInfo===T.containerInfo&&b.stateNode.implementation===T.implementation){o(S,b.sibling),b=l(b,T.children||[]),b.return=S,S=b;break e}else{o(S,b);break}else r(S,b);b=b.sibling}b=ns(T,S.mode,Z),b.return=S,S=b}return c(S);case Me:return je=T._init,er(S,b,je(T._payload),Z)}if(Le(T))return se(S,b,T,Z);if(ie(T))return ue(S,b,T,Z);Bn(S,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,b!==null&&b.tag===6?(o(S,b.sibling),b=l(b,T),b.return=S,S=b):(o(S,b),b=os(T,S.mode,Z),b.return=S,S=b),c(S)):o(S,b)}return er}var ho=Oi(!0),Di=Oi(!1),Wn=St(null),$n=null,mo=null,ha=null;function ma(){ha=mo=$n=null}function fa(e){var r=Wn.current;We(Wn),e._currentValue=r}function ga(e,r,o){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===o)break;e=e.return}}function fo(e,r){$n=e,ha=mo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Er=!0),e.firstContext=null)}function Br(e){var r=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:r,next:null},mo===null){if($n===null)throw Error(i(308));mo=e,$n.dependencies={lanes:0,firstContext:e}}else mo=mo.next=e;return r}var $t=null;function xa(e){$t===null?$t=[e]:$t.push(e)}function Ri(e,r,o,n){var l=r.interleaved;return l===null?(o.next=o,xa(r)):(o.next=l.next,l.next=o),r.interleaved=o,mt(e,n)}function mt(e,r){e.lanes|=r;var o=e.alternate;for(o!==null&&(o.lanes|=r),o=e,e=e.return;e!==null;)e.childLanes|=r,o=e.alternate,o!==null&&(o.childLanes|=r),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Tt=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ai(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function zt(e,r,o){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Oe&2)!==0){var l=n.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r,mt(e,o)}return l=n.interleaved,l===null?(r.next=r,xa(n)):(r.next=l.next,l.next=r),n.interleaved=r,mt(e,o)}function qn(e,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,o|=n,r.lanes=o,_l(e,o)}}function Fi(e,r){var o=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,o===n)){var l=null,a=null;if(o=o.firstBaseUpdate,o!==null){do{var c={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};a===null?l=a=c:a=a.next=c,o=o.next}while(o!==null);a===null?l=a=r:a=a.next=r}else l=a=r;o={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=r:e.next=r,o.lastBaseUpdate=r}function Yn(e,r,o,n){var l=e.updateQueue;Tt=!1;var a=l.firstBaseUpdate,c=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var y=f,M=y.next;y.next=null,c===null?a=M:c.next=M,c=y;var V=e.alternate;V!==null&&(V=V.updateQueue,f=V.lastBaseUpdate,f!==c&&(f===null?V.firstBaseUpdate=M:f.next=M,V.lastBaseUpdate=y))}if(a!==null){var Q=l.baseState;c=0,V=M=y=null,f=a;do{var Y=f.lane,ne=f.eventTime;if((n&Y)===Y){V!==null&&(V=V.next={eventTime:ne,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var se=e,ue=f;switch(Y=r,ne=o,ue.tag){case 1:if(se=ue.payload,typeof se=="function"){Q=se.call(ne,Q,Y);break e}Q=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ue.payload,Y=typeof se=="function"?se.call(ne,Q,Y):se,Y==null)break e;Q=te({},Q,Y);break e;case 2:Tt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,Y=l.effects,Y===null?l.effects=[f]:Y.push(f))}else ne={eventTime:ne,lane:Y,tag:f.tag,payload:f.payload,callback:f.callback,next:null},V===null?(M=V=ne,y=Q):V=V.next=ne,c|=Y;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;Y=f,f=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);if(V===null&&(y=Q),l.baseState=y,l.firstBaseUpdate=M,l.lastBaseUpdate=V,r=l.shared.interleaved,r!==null){l=r;do c|=l.lane,l=l.next;while(l!==r)}else a===null&&(l.shared.lanes=0);Vt|=c,e.lanes=c,e.memoizedState=Q}}function Ii(e,r,o){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],l=n.callback;if(l!==null){if(n.callback=null,n=o,typeof l!="function")throw Error(i(191,l));l.call(n)}}}var Yo={},lt=St(Yo),Vo=St(Yo),Qo=St(Yo);function qt(e){if(e===Yo)throw Error(i(174));return e}function ya(e,r){switch(Ue(Qo,r),Ue(Vo,e),Ue(lt,Yo),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:me(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=me(r,e)}We(lt),Ue(lt,r)}function go(){We(lt),We(Vo),We(Qo)}function Li(e){qt(Qo.current);var r=qt(lt.current),o=me(r,e.type);r!==o&&(Ue(Vo,e),Ue(lt,o))}function ba(e){Vo.current===e&&(We(lt),We(Vo))}var Qe=St(0);function Vn(e){for(var r=e;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ka=[];function ja(){for(var e=0;e<ka.length;e++)ka[e]._workInProgressVersionPrimary=null;ka.length=0}var Qn=X.ReactCurrentDispatcher,Na=X.ReactCurrentBatchConfig,Yt=0,Xe=null,or=null,sr=null,Xn=!1,Xo=!1,Ko=0,Gu=0;function fr(){throw Error(i(321))}function wa(e,r){if(r===null)return!1;for(var o=0;o<r.length&&o<e.length;o++)if(!Xr(e[o],r[o]))return!1;return!0}function Ca(e,r,o,n,l,a){if(Yt=a,Xe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qn.current=e===null||e.memoizedState===null?rp:tp,e=o(n,l),Xo){a=0;do{if(Xo=!1,Ko=0,25<=a)throw Error(i(301));a+=1,sr=or=null,r.updateQueue=null,Qn.current=op,e=o(n,l)}while(Xo)}if(Qn.current=Jn,r=or!==null&&or.next!==null,Yt=0,sr=or=Xe=null,Xn=!1,r)throw Error(i(300));return e}function Sa(){var e=Ko!==0;return Ko=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sr===null?Xe.memoizedState=sr=e:sr=sr.next=e,sr}function Wr(){if(or===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=or.next;var r=sr===null?Xe.memoizedState:sr.next;if(r!==null)sr=r,or=e;else{if(e===null)throw Error(i(310));or=e,e={memoizedState:or.memoizedState,baseState:or.baseState,baseQueue:or.baseQueue,queue:or.queue,next:null},sr===null?Xe.memoizedState=sr=e:sr=sr.next=e}return sr}function Go(e,r){return typeof r=="function"?r(e):r}function Pa(e){var r=Wr(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var n=or,l=n.baseQueue,a=o.pending;if(a!==null){if(l!==null){var c=l.next;l.next=a.next,a.next=c}n.baseQueue=l=a,o.pending=null}if(l!==null){a=l.next,n=n.baseState;var f=c=null,y=null,M=a;do{var V=M.lane;if((Yt&V)===V)y!==null&&(y=y.next={lane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),n=M.hasEagerState?M.eagerState:e(n,M.action);else{var Q={lane:V,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null};y===null?(f=y=Q,c=n):y=y.next=Q,Xe.lanes|=V,Vt|=V}M=M.next}while(M!==null&&M!==a);y===null?c=n:y.next=f,Xr(n,r.memoizedState)||(Er=!0),r.memoizedState=n,r.baseState=c,r.baseQueue=y,o.lastRenderedState=n}if(e=o.interleaved,e!==null){l=e;do a=l.lane,Xe.lanes|=a,Vt|=a,l=l.next;while(l!==e)}else l===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Ea(e){var r=Wr(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var n=o.dispatch,l=o.pending,a=r.memoizedState;if(l!==null){o.pending=null;var c=l=l.next;do a=e(a,c.action),c=c.next;while(c!==l);Xr(a,r.memoizedState)||(Er=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),o.lastRenderedState=a}return[a,n]}function Hi(){}function Ui(e,r){var o=Xe,n=Wr(),l=r(),a=!Xr(n.memoizedState,l);if(a&&(n.memoizedState=l,Er=!0),n=n.queue,Ta($i.bind(null,o,n,e),[e]),n.getSnapshot!==r||a||sr!==null&&sr.memoizedState.tag&1){if(o.flags|=2048,Jo(9,Wi.bind(null,o,n,l,r),void 0,null),ir===null)throw Error(i(349));(Yt&30)!==0||Bi(o,r,l)}return l}function Bi(e,r,o){e.flags|=16384,e={getSnapshot:r,value:o},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.stores=[e]):(o=r.stores,o===null?r.stores=[e]:o.push(e))}function Wi(e,r,o,n){r.value=o,r.getSnapshot=n,qi(r)&&Yi(e)}function $i(e,r,o){return o(function(){qi(r)&&Yi(e)})}function qi(e){var r=e.getSnapshot;e=e.value;try{var o=r();return!Xr(e,o)}catch{return!0}}function Yi(e){var r=mt(e,1);r!==null&&et(r,e,1,-1)}function Vi(e){var r=at();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},r.queue=e,e=e.dispatch=ep.bind(null,Xe,e),[r.memoizedState,e]}function Jo(e,r,o,n){return e={tag:e,create:r,destroy:o,deps:n,next:null},r=Xe.updateQueue,r===null?(r={lastEffect:null,stores:null},Xe.updateQueue=r,r.lastEffect=e.next=e):(o=r.lastEffect,o===null?r.lastEffect=e.next=e:(n=o.next,o.next=e,e.next=n,r.lastEffect=e)),e}function Qi(){return Wr().memoizedState}function Kn(e,r,o,n){var l=at();Xe.flags|=e,l.memoizedState=Jo(1|r,o,void 0,n===void 0?null:n)}function Gn(e,r,o,n){var l=Wr();n=n===void 0?null:n;var a=void 0;if(or!==null){var c=or.memoizedState;if(a=c.destroy,n!==null&&wa(n,c.deps)){l.memoizedState=Jo(r,o,a,n);return}}Xe.flags|=e,l.memoizedState=Jo(1|r,o,a,n)}function Xi(e,r){return Kn(8390656,8,e,r)}function Ta(e,r){return Gn(2048,8,e,r)}function Ki(e,r){return Gn(4,2,e,r)}function Gi(e,r){return Gn(4,4,e,r)}function Ji(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Zi(e,r,o){return o=o!=null?o.concat([e]):null,Gn(4,4,Ji.bind(null,r,e),o)}function za(){}function ec(e,r){var o=Wr();r=r===void 0?null:r;var n=o.memoizedState;return n!==null&&r!==null&&wa(r,n[1])?n[0]:(o.memoizedState=[e,r],e)}function rc(e,r){var o=Wr();r=r===void 0?null:r;var n=o.memoizedState;return n!==null&&r!==null&&wa(r,n[1])?n[0]:(e=e(),o.memoizedState=[e,r],e)}function tc(e,r,o){return(Yt&21)===0?(e.baseState&&(e.baseState=!1,Er=!0),e.memoizedState=o):(Xr(o,r)||(o=_s(),Xe.lanes|=o,Vt|=o,e.baseState=!0),r)}function Ju(e,r){var o=Fe;Fe=o!==0&&4>o?o:4,e(!0);var n=Na.transition;Na.transition={};try{e(!1),r()}finally{Fe=o,Na.transition=n}}function oc(){return Wr().memoizedState}function Zu(e,r,o){var n=Dt(e);if(o={lane:n,action:o,hasEagerState:!1,eagerState:null,next:null},nc(e))lc(r,o);else if(o=Ri(e,r,o,n),o!==null){var l=kr();et(o,e,n,l),ac(o,r,n)}}function ep(e,r,o){var n=Dt(e),l={lane:n,action:o,hasEagerState:!1,eagerState:null,next:null};if(nc(e))lc(r,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var c=r.lastRenderedState,f=a(c,o);if(l.hasEagerState=!0,l.eagerState=f,Xr(f,c)){var y=r.interleaved;y===null?(l.next=l,xa(r)):(l.next=y.next,y.next=l),r.interleaved=l;return}}catch{}finally{}o=Ri(e,r,l,n),o!==null&&(l=kr(),et(o,e,n,l),ac(o,r,n))}}function nc(e){var r=e.alternate;return e===Xe||r!==null&&r===Xe}function lc(e,r){Xo=Xn=!0;var o=e.pending;o===null?r.next=r:(r.next=o.next,o.next=r),e.pending=r}function ac(e,r,o){if((o&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,o|=n,r.lanes=o,_l(e,o)}}var Jn={readContext:Br,useCallback:fr,useContext:fr,useEffect:fr,useImperativeHandle:fr,useInsertionEffect:fr,useLayoutEffect:fr,useMemo:fr,useReducer:fr,useRef:fr,useState:fr,useDebugValue:fr,useDeferredValue:fr,useTransition:fr,useMutableSource:fr,useSyncExternalStore:fr,useId:fr,unstable_isNewReconciler:!1},rp={readContext:Br,useCallback:function(e,r){return at().memoizedState=[e,r===void 0?null:r],e},useContext:Br,useEffect:Xi,useImperativeHandle:function(e,r,o){return o=o!=null?o.concat([e]):null,Kn(4194308,4,Ji.bind(null,r,e),o)},useLayoutEffect:function(e,r){return Kn(4194308,4,e,r)},useInsertionEffect:function(e,r){return Kn(4,2,e,r)},useMemo:function(e,r){var o=at();return r=r===void 0?null:r,e=e(),o.memoizedState=[e,r],e},useReducer:function(e,r,o){var n=at();return r=o!==void 0?o(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Zu.bind(null,Xe,e),[n.memoizedState,e]},useRef:function(e){var r=at();return e={current:e},r.memoizedState=e},useState:Vi,useDebugValue:za,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Vi(!1),r=e[0];return e=Ju.bind(null,e[1]),at().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,o){var n=Xe,l=at();if(qe){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),ir===null)throw Error(i(349));(Yt&30)!==0||Bi(n,r,o)}l.memoizedState=o;var a={value:o,getSnapshot:r};return l.queue=a,Xi($i.bind(null,n,a,e),[e]),n.flags|=2048,Jo(9,Wi.bind(null,n,a,o,r),void 0,null),o},useId:function(){var e=at(),r=ir.identifierPrefix;if(qe){var o=ht,n=pt;o=(n&~(1<<32-Qr(n)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ko++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Gu++,r=":"+r+"r"+o.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},tp={readContext:Br,useCallback:ec,useContext:Br,useEffect:Ta,useImperativeHandle:Zi,useInsertionEffect:Ki,useLayoutEffect:Gi,useMemo:rc,useReducer:Pa,useRef:Qi,useState:function(){return Pa(Go)},useDebugValue:za,useDeferredValue:function(e){var r=Wr();return tc(r,or.memoizedState,e)},useTransition:function(){var e=Pa(Go)[0],r=Wr().memoizedState;return[e,r]},useMutableSource:Hi,useSyncExternalStore:Ui,useId:oc,unstable_isNewReconciler:!1},op={readContext:Br,useCallback:ec,useContext:Br,useEffect:Ta,useImperativeHandle:Zi,useInsertionEffect:Ki,useLayoutEffect:Gi,useMemo:rc,useReducer:Ea,useRef:Qi,useState:function(){return Ea(Go)},useDebugValue:za,useDeferredValue:function(e){var r=Wr();return or===null?r.memoizedState=e:tc(r,or.memoizedState,e)},useTransition:function(){var e=Ea(Go)[0],r=Wr().memoizedState;return[e,r]},useMutableSource:Hi,useSyncExternalStore:Ui,useId:oc,unstable_isNewReconciler:!1};function Gr(e,r){if(e&&e.defaultProps){r=te({},r),e=e.defaultProps;for(var o in e)r[o]===void 0&&(r[o]=e[o]);return r}return r}function Ma(e,r,o,n){r=e.memoizedState,o=o(n,r),o=o==null?r:te({},r,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Zn={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,r,o){e=e._reactInternals;var n=kr(),l=Dt(e),a=ft(n,l);a.payload=r,o!=null&&(a.callback=o),r=zt(e,a,l),r!==null&&(et(r,e,l,n),qn(r,e,l))},enqueueReplaceState:function(e,r,o){e=e._reactInternals;var n=kr(),l=Dt(e),a=ft(n,l);a.tag=1,a.payload=r,o!=null&&(a.callback=o),r=zt(e,a,l),r!==null&&(et(r,e,l,n),qn(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var o=kr(),n=Dt(e),l=ft(o,n);l.tag=2,r!=null&&(l.callback=r),r=zt(e,l,n),r!==null&&(et(r,e,n,o),qn(r,e,n))}};function sc(e,r,o,n,l,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,c):r.prototype&&r.prototype.isPureReactComponent?!Io(o,n)||!Io(l,a):!0}function ic(e,r,o){var n=!1,l=Pt,a=r.contextType;return typeof a=="object"&&a!==null?a=Br(a):(l=Pr(r)?Ut:mr.current,n=r.contextTypes,a=(n=n!=null)?io(e,l):Pt),r=new r(o,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Zn,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),r}function cc(e,r,o,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,n),r.state!==e&&Zn.enqueueReplaceState(r,r.state,null)}function _a(e,r,o,n){var l=e.stateNode;l.props=o,l.state=e.memoizedState,l.refs={},va(e);var a=r.contextType;typeof a=="object"&&a!==null?l.context=Br(a):(a=Pr(r)?Ut:mr.current,l.context=io(e,a)),l.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Ma(e,r,a,o),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Zn.enqueueReplaceState(l,l.state,null),Yn(e,o,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xo(e,r){try{var o="",n=r;do o+=U(n),n=n.return;while(n);var l=o}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:l,digest:null}}function Oa(e,r,o){return{value:e,source:null,stack:o??null,digest:r??null}}function Da(e,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var np=typeof WeakMap=="function"?WeakMap:Map;function dc(e,r,o){o=ft(-1,o),o.tag=3,o.payload={element:null};var n=r.value;return o.callback=function(){al||(al=!0,Xa=n),Da(e,r)},o}function uc(e,r,o){o=ft(-1,o),o.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=r.value;o.payload=function(){return n(l)},o.callback=function(){Da(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(o.callback=function(){Da(e,r),typeof n!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var c=r.stack;this.componentDidCatch(r.value,{componentStack:c!==null?c:""})}),o}function pc(e,r,o){var n=e.pingCache;if(n===null){n=e.pingCache=new np;var l=new Set;n.set(r,l)}else l=n.get(r),l===void 0&&(l=new Set,n.set(r,l));l.has(o)||(l.add(o),e=vp.bind(null,e,r,o),r.then(e,e))}function hc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function mc(e,r,o,n,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ft(-1,1),r.tag=2,zt(o,r,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var lp=X.ReactCurrentOwner,Er=!1;function br(e,r,o,n){r.child=e===null?Di(r,null,o,n):ho(r,e.child,o,n)}function fc(e,r,o,n,l){o=o.render;var a=r.ref;return fo(r,l),n=Ca(e,r,o,n,a,l),o=Sa(),e!==null&&!Er?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,gt(e,r,l)):(qe&&o&&ia(r),r.flags|=1,br(e,r,n,l),r.child)}function gc(e,r,o,n,l){if(e===null){var a=o.type;return typeof a=="function"&&!ts(a)&&a.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=a,xc(e,r,a,n,l)):(e=pl(o.type,null,n,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&l)===0){var c=a.memoizedProps;if(o=o.compare,o=o!==null?o:Io,o(c,n)&&e.ref===r.ref)return gt(e,r,l)}return r.flags|=1,e=At(a,n),e.ref=r.ref,e.return=r,r.child=e}function xc(e,r,o,n,l){if(e!==null){var a=e.memoizedProps;if(Io(a,n)&&e.ref===r.ref)if(Er=!1,r.pendingProps=n=a,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Er=!0);else return r.lanes=e.lanes,gt(e,r,l)}return Ra(e,r,o,n,l)}function vc(e,r,o){var n=r.pendingProps,l=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(yo,Ar),Ar|=o;else{if((o&1073741824)===0)return e=a!==null?a.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Ue(yo,Ar),Ar|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:o,Ue(yo,Ar),Ar|=n}else a!==null?(n=a.baseLanes|o,r.memoizedState=null):n=o,Ue(yo,Ar),Ar|=n;return br(e,r,l,o),r.child}function yc(e,r){var o=r.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Ra(e,r,o,n,l){var a=Pr(o)?Ut:mr.current;return a=io(r,a),fo(r,l),o=Ca(e,r,o,n,a,l),n=Sa(),e!==null&&!Er?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,gt(e,r,l)):(qe&&n&&ia(r),r.flags|=1,br(e,r,o,l),r.child)}function bc(e,r,o,n,l){if(Pr(o)){var a=!0;Fn(r)}else a=!1;if(fo(r,l),r.stateNode===null)rl(e,r),ic(r,o,n),_a(r,o,n,l),n=!0;else if(e===null){var c=r.stateNode,f=r.memoizedProps;c.props=f;var y=c.context,M=o.contextType;typeof M=="object"&&M!==null?M=Br(M):(M=Pr(o)?Ut:mr.current,M=io(r,M));var V=o.getDerivedStateFromProps,Q=typeof V=="function"||typeof c.getSnapshotBeforeUpdate=="function";Q||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==n||y!==M)&&cc(r,c,n,M),Tt=!1;var Y=r.memoizedState;c.state=Y,Yn(r,n,c,l),y=r.memoizedState,f!==n||Y!==y||Sr.current||Tt?(typeof V=="function"&&(Ma(r,o,V,n),y=r.memoizedState),(f=Tt||sc(r,o,f,n,Y,y,M))?(Q||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(r.flags|=4194308)):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=y),c.props=n,c.state=y,c.context=M,n=f):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{c=r.stateNode,Ai(e,r),f=r.memoizedProps,M=r.type===r.elementType?f:Gr(r.type,f),c.props=M,Q=r.pendingProps,Y=c.context,y=o.contextType,typeof y=="object"&&y!==null?y=Br(y):(y=Pr(o)?Ut:mr.current,y=io(r,y));var ne=o.getDerivedStateFromProps;(V=typeof ne=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==Q||Y!==y)&&cc(r,c,n,y),Tt=!1,Y=r.memoizedState,c.state=Y,Yn(r,n,c,l);var se=r.memoizedState;f!==Q||Y!==se||Sr.current||Tt?(typeof ne=="function"&&(Ma(r,o,ne,n),se=r.memoizedState),(M=Tt||sc(r,o,M,n,Y,se,y)||!1)?(V||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,se,y),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,se,y)),typeof c.componentDidUpdate=="function"&&(r.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=se),c.props=n,c.state=se,c.context=y,n=M):(typeof c.componentDidUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&Y===e.memoizedState||(r.flags|=1024),n=!1)}return Aa(e,r,o,n,a,l)}function Aa(e,r,o,n,l,a){yc(e,r);var c=(r.flags&128)!==0;if(!n&&!c)return l&&Ci(r,o,!1),gt(e,r,a);n=r.stateNode,lp.current=r;var f=c&&typeof o.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&c?(r.child=ho(r,e.child,null,a),r.child=ho(r,null,f,a)):br(e,r,f,a),r.memoizedState=n.state,l&&Ci(r,o,!0),r.child}function kc(e){var r=e.stateNode;r.pendingContext?Ni(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Ni(e,r.context,!1),ya(e,r.containerInfo)}function jc(e,r,o,n,l){return po(),pa(l),r.flags|=256,br(e,r,o,n),r.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Ia(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nc(e,r,o){var n=r.pendingProps,l=Qe.current,a=!1,c=(r.flags&128)!==0,f;if((f=c)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ue(Qe,l&1),e===null)return ua(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(c=n.children,e=n.fallback,a?(n=r.mode,a=r.child,c={mode:"hidden",children:c},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=hl(c,n,0,null),e=Gt(e,n,o,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=Ia(o),r.memoizedState=Fa,e):La(r,c));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return ap(e,r,c,n,f,l,o);if(a){a=n.fallback,c=r.mode,l=e.child,f=l.sibling;var y={mode:"hidden",children:n.children};return(c&1)===0&&r.child!==l?(n=r.child,n.childLanes=0,n.pendingProps=y,r.deletions=null):(n=At(l,y),n.subtreeFlags=l.subtreeFlags&14680064),f!==null?a=At(f,a):(a=Gt(a,c,o,null),a.flags|=2),a.return=r,n.return=r,n.sibling=a,r.child=n,n=a,a=r.child,c=e.child.memoizedState,c=c===null?Ia(o):{baseLanes:c.baseLanes|o,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~o,r.memoizedState=Fa,n}return a=e.child,e=a.sibling,n=At(a,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=o),n.return=r,n.sibling=null,e!==null&&(o=r.deletions,o===null?(r.deletions=[e],r.flags|=16):o.push(e)),r.child=n,r.memoizedState=null,n}function La(e,r){return r=hl({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function el(e,r,o,n){return n!==null&&pa(n),ho(r,e.child,null,o),e=La(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function ap(e,r,o,n,l,a,c){if(o)return r.flags&256?(r.flags&=-257,n=Oa(Error(i(422))),el(e,r,c,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=n.fallback,l=r.mode,n=hl({mode:"visible",children:n.children},l,0,null),a=Gt(a,l,c,null),a.flags|=2,n.return=r,a.return=r,n.sibling=a,r.child=n,(r.mode&1)!==0&&ho(r,e.child,null,c),r.child.memoizedState=Ia(c),r.memoizedState=Fa,a);if((r.mode&1)===0)return el(e,r,c,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var f=n.dgst;return n=f,a=Error(i(419)),n=Oa(a,n,void 0),el(e,r,c,n)}if(f=(c&e.childLanes)!==0,Er||f){if(n=ir,n!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(n.suspendedLanes|c))!==0?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,mt(e,l),et(n,e,l,-1))}return rs(),n=Oa(Error(i(421))),el(e,r,c,n)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=yp.bind(null,e),l._reactRetry=r,null):(e=a.treeContext,Rr=Ct(l.nextSibling),Dr=r,qe=!0,Kr=null,e!==null&&(Hr[Ur++]=pt,Hr[Ur++]=ht,Hr[Ur++]=Bt,pt=e.id,ht=e.overflow,Bt=r),r=La(r,n.children),r.flags|=4096,r)}function wc(e,r,o){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),ga(e.return,r,o)}function Ha(e,r,o,n,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:o,tailMode:l}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=o,a.tailMode=l)}function Cc(e,r,o){var n=r.pendingProps,l=n.revealOrder,a=n.tail;if(br(e,r,n.children,o),n=Qe.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,o,r);else if(e.tag===19)wc(e,o,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Ue(Qe,n),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(o=r.child,l=null;o!==null;)e=o.alternate,e!==null&&Vn(e)===null&&(l=o),o=o.sibling;o=l,o===null?(l=r.child,r.child=null):(l=o.sibling,o.sibling=null),Ha(r,!1,l,o,a);break;case"backwards":for(o=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&Vn(e)===null){r.child=l;break}e=l.sibling,l.sibling=o,o=l,l=e}Ha(r,!0,o,null,a);break;case"together":Ha(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function rl(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function gt(e,r,o){if(e!==null&&(r.dependencies=e.dependencies),Vt|=r.lanes,(o&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(i(153));if(r.child!==null){for(e=r.child,o=At(e,e.pendingProps),r.child=o,o.return=r;e.sibling!==null;)e=e.sibling,o=o.sibling=At(e,e.pendingProps),o.return=r;o.sibling=null}return r.child}function sp(e,r,o){switch(r.tag){case 3:kc(r),po();break;case 5:Li(r);break;case 1:Pr(r.type)&&Fn(r);break;case 4:ya(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,l=r.memoizedProps.value;Ue(Wn,n._currentValue),n._currentValue=l;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(Ue(Qe,Qe.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Nc(e,r,o):(Ue(Qe,Qe.current&1),e=gt(e,r,o),e!==null?e.sibling:null);Ue(Qe,Qe.current&1);break;case 19:if(n=(o&r.childLanes)!==0,(e.flags&128)!==0){if(n)return Cc(e,r,o);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ue(Qe,Qe.current),n)break;return null;case 22:case 23:return r.lanes=0,vc(e,r,o)}return gt(e,r,o)}var Sc,Ua,Pc,Ec;Sc=function(e,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ua=function(){},Pc=function(e,r,o,n){var l=e.memoizedProps;if(l!==n){e=r.stateNode,qt(lt.current);var a=null;switch(o){case"input":l=$e(e,l),n=$e(e,n),a=[];break;case"select":l=te({},l,{value:void 0}),n=te({},n,{value:void 0}),a=[];break;case"textarea":l=vr(e,l),n=vr(e,n),a=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Dn)}Ee(o,n);var c;o=null;for(M in l)if(!n.hasOwnProperty(M)&&l.hasOwnProperty(M)&&l[M]!=null)if(M==="style"){var f=l[M];for(c in f)f.hasOwnProperty(c)&&(o||(o={}),o[c]="")}else M!=="dangerouslySetInnerHTML"&&M!=="children"&&M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(g.hasOwnProperty(M)?a||(a=[]):(a=a||[]).push(M,null));for(M in n){var y=n[M];if(f=l?.[M],n.hasOwnProperty(M)&&y!==f&&(y!=null||f!=null))if(M==="style")if(f){for(c in f)!f.hasOwnProperty(c)||y&&y.hasOwnProperty(c)||(o||(o={}),o[c]="");for(c in y)y.hasOwnProperty(c)&&f[c]!==y[c]&&(o||(o={}),o[c]=y[c])}else o||(a||(a=[]),a.push(M,o)),o=y;else M==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,f=f?f.__html:void 0,y!=null&&f!==y&&(a=a||[]).push(M,y)):M==="children"?typeof y!="string"&&typeof y!="number"||(a=a||[]).push(M,""+y):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&(g.hasOwnProperty(M)?(y!=null&&M==="onScroll"&&Be("scroll",e),a||f===y||(a=[])):(a=a||[]).push(M,y))}o&&(a=a||[]).push("style",o);var M=a;(r.updateQueue=M)&&(r.flags|=4)}},Ec=function(e,r,o,n){o!==n&&(r.flags|=4)};function Zo(e,r){if(!qe)switch(e.tailMode){case"hidden":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var n=null;o!==null;)o.alternate!==null&&(n=o),o=o.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function gr(e){var r=e.alternate!==null&&e.alternate.child===e.child,o=0,n=0;if(r)for(var l=e.child;l!==null;)o|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)o|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=o,r}function ip(e,r,o){var n=r.pendingProps;switch(ca(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gr(r),null;case 1:return Pr(r.type)&&An(),gr(r),null;case 3:return n=r.stateNode,go(),We(Sr),We(mr),ja(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Un(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Kr!==null&&(Ja(Kr),Kr=null))),Ua(e,r),gr(r),null;case 5:ba(r);var l=qt(Qo.current);if(o=r.type,e!==null&&r.stateNode!=null)Pc(e,r,o,n,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(i(166));return gr(r),null}if(e=qt(lt.current),Un(r)){n=r.stateNode,o=r.type;var a=r.memoizedProps;switch(n[nt]=r,n[Wo]=a,e=(r.mode&1)!==0,o){case"dialog":Be("cancel",n),Be("close",n);break;case"iframe":case"object":case"embed":Be("load",n);break;case"video":case"audio":for(l=0;l<Ho.length;l++)Be(Ho[l],n);break;case"source":Be("error",n);break;case"img":case"image":case"link":Be("error",n),Be("load",n);break;case"details":Be("toggle",n);break;case"input":Nr(n,a),Be("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Be("invalid",n);break;case"textarea":yr(n,a),Be("invalid",n)}Ee(o,a),l=null;for(var c in a)if(a.hasOwnProperty(c)){var f=a[c];c==="children"?typeof f=="string"?n.textContent!==f&&(a.suppressHydrationWarning!==!0&&On(n.textContent,f,e),l=["children",f]):typeof f=="number"&&n.textContent!==""+f&&(a.suppressHydrationWarning!==!0&&On(n.textContent,f,e),l=["children",""+f]):g.hasOwnProperty(c)&&f!=null&&c==="onScroll"&&Be("scroll",n)}switch(o){case"input":ar(n),Ie(n,a,!0);break;case"textarea":ar(n),m(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Dn)}n=l,r.updateQueue=n,n!==null&&(r.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=W(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(o,{is:n.is}):(e=c.createElement(o),o==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,o),e[nt]=r,e[Wo]=n,Sc(e,r,!1,!1),r.stateNode=e;e:{switch(c=He(o,n),o){case"dialog":Be("cancel",e),Be("close",e),l=n;break;case"iframe":case"object":case"embed":Be("load",e),l=n;break;case"video":case"audio":for(l=0;l<Ho.length;l++)Be(Ho[l],e);l=n;break;case"source":Be("error",e),l=n;break;case"img":case"image":case"link":Be("error",e),Be("load",e),l=n;break;case"details":Be("toggle",e),l=n;break;case"input":Nr(e,n),l=$e(e,n),Be("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=te({},n,{value:void 0}),Be("invalid",e);break;case"textarea":yr(e,n),l=vr(e,n),Be("invalid",e);break;default:l=n}Ee(o,l),f=l;for(a in f)if(f.hasOwnProperty(a)){var y=f[a];a==="style"?O(e,y):a==="dangerouslySetInnerHTML"?(y=y?y.__html:void 0,y!=null&&Ke(e,y)):a==="children"?typeof y=="string"?(o!=="textarea"||y!=="")&&E(e,y):typeof y=="number"&&E(e,""+y):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(g.hasOwnProperty(a)?y!=null&&a==="onScroll"&&Be("scroll",e):y!=null&&H(e,a,y,c))}switch(o){case"input":ar(e),Ie(e,n,!1);break;case"textarea":ar(e),m(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ke(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?hr(e,!!n.multiple,a,!1):n.defaultValue!=null&&hr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Dn)}switch(o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return gr(r),null;case 6:if(e&&r.stateNode!=null)Ec(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(i(166));if(o=qt(Qo.current),qt(lt.current),Un(r)){if(n=r.stateNode,o=r.memoizedProps,n[nt]=r,(a=n.nodeValue!==o)&&(e=Dr,e!==null))switch(e.tag){case 3:On(n.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&On(n.nodeValue,o,(e.mode&1)!==0)}a&&(r.flags|=4)}else n=(o.nodeType===9?o:o.ownerDocument).createTextNode(n),n[nt]=r,r.stateNode=n}return gr(r),null;case 13:if(We(Qe),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(qe&&Rr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Mi(),po(),r.flags|=98560,a=!1;else if(a=Un(r),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[nt]=r}else po(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;gr(r),a=!1}else Kr!==null&&(Ja(Kr),Kr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Qe.current&1)!==0?nr===0&&(nr=3):rs())),r.updateQueue!==null&&(r.flags|=4),gr(r),null);case 4:return go(),Ua(e,r),e===null&&Uo(r.stateNode.containerInfo),gr(r),null;case 10:return fa(r.type._context),gr(r),null;case 17:return Pr(r.type)&&An(),gr(r),null;case 19:if(We(Qe),a=r.memoizedState,a===null)return gr(r),null;if(n=(r.flags&128)!==0,c=a.rendering,c===null)if(n)Zo(a,!1);else{if(nr!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(c=Vn(e),c!==null){for(r.flags|=128,Zo(a,!1),n=c.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=o,o=r.child;o!==null;)a=o,e=n,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Ue(Qe,Qe.current&1|2),r.child}e=e.sibling}a.tail!==null&&Ze()>bo&&(r.flags|=128,n=!0,Zo(a,!1),r.lanes=4194304)}else{if(!n)if(e=Vn(c),e!==null){if(r.flags|=128,n=!0,o=e.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Zo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!qe)return gr(r),null}else 2*Ze()-a.renderingStartTime>bo&&o!==1073741824&&(r.flags|=128,n=!0,Zo(a,!1),r.lanes=4194304);a.isBackwards?(c.sibling=r.child,r.child=c):(o=a.last,o!==null?o.sibling=c:r.child=c,a.last=c)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=Ze(),r.sibling=null,o=Qe.current,Ue(Qe,n?o&1|2:o&1),r):(gr(r),null);case 22:case 23:return es(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(Ar&1073741824)!==0&&(gr(r),r.subtreeFlags&6&&(r.flags|=8192)):gr(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function cp(e,r){switch(ca(r),r.tag){case 1:return Pr(r.type)&&An(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return go(),We(Sr),We(mr),ja(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return ba(r),null;case 13:if(We(Qe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(i(340));po()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return We(Qe),null;case 4:return go(),null;case 10:return fa(r.type._context),null;case 22:case 23:return es(),null;case 24:return null;default:return null}}var tl=!1,xr=!1,dp=typeof WeakSet=="function"?WeakSet:Set,le=null;function vo(e,r){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(n){Ge(e,r,n)}else o.current=null}function Ba(e,r,o){try{o()}catch(n){Ge(e,r,n)}}var Tc=!1;function up(e,r){if(ea=jn,e=si(),Yl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var l=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{o.nodeType,a.nodeType}catch{o=null;break e}var c=0,f=-1,y=-1,M=0,V=0,Q=e,Y=null;r:for(;;){for(var ne;Q!==o||l!==0&&Q.nodeType!==3||(f=c+l),Q!==a||n!==0&&Q.nodeType!==3||(y=c+n),Q.nodeType===3&&(c+=Q.nodeValue.length),(ne=Q.firstChild)!==null;)Y=Q,Q=ne;for(;;){if(Q===e)break r;if(Y===o&&++M===l&&(f=c),Y===a&&++V===n&&(y=c),(ne=Q.nextSibling)!==null)break;Q=Y,Y=Q.parentNode}Q=ne}o=f===-1||y===-1?null:{start:f,end:y}}else o=null}o=o||{start:0,end:0}}else o=null;for(ra={focusedElem:e,selectionRange:o},jn=!1,le=r;le!==null;)if(r=le,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,le=e;else for(;le!==null;){r=le;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var ue=se.memoizedProps,er=se.memoizedState,S=r.stateNode,b=S.getSnapshotBeforeUpdate(r.elementType===r.type?ue:Gr(r.type,ue),er);S.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var T=r.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(Z){Ge(r,r.return,Z)}if(e=r.sibling,e!==null){e.return=r.return,le=e;break}le=r.return}return se=Tc,Tc=!1,se}function en(e,r,o){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Ba(r,o,a)}l=l.next}while(l!==n)}}function ol(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var n=o.create;o.destroy=n()}o=o.next}while(o!==r)}}function Wa(e){var r=e.ref;if(r!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof r=="function"?r(e):r.current=e}}function zc(e){var r=e.alternate;r!==null&&(e.alternate=null,zc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[nt],delete r[Wo],delete r[la],delete r[Vu],delete r[Qu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mc(e){return e.tag===5||e.tag===3||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $a(e,r,o){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(e,r):o.insertBefore(e,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(e,o)):(r=o,r.appendChild(e)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Dn));else if(n!==4&&(e=e.child,e!==null))for($a(e,r,o),e=e.sibling;e!==null;)$a(e,r,o),e=e.sibling}function qa(e,r,o){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?o.insertBefore(e,r):o.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(qa(e,r,o),e=e.sibling;e!==null;)qa(e,r,o),e=e.sibling}var ur=null,Jr=!1;function Mt(e,r,o){for(o=o.child;o!==null;)Oc(e,r,o),o=o.sibling}function Oc(e,r,o){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(gn,o)}catch{}switch(o.tag){case 5:xr||vo(o,r);case 6:var n=ur,l=Jr;ur=null,Mt(e,r,o),ur=n,Jr=l,ur!==null&&(Jr?(e=ur,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):ur.removeChild(o.stateNode));break;case 18:ur!==null&&(Jr?(e=ur,o=o.stateNode,e.nodeType===8?na(e.parentNode,o):e.nodeType===1&&na(e,o),_o(e)):na(ur,o.stateNode));break;case 4:n=ur,l=Jr,ur=o.stateNode.containerInfo,Jr=!0,Mt(e,r,o),ur=n,Jr=l;break;case 0:case 11:case 14:case 15:if(!xr&&(n=o.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var a=l,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&Ba(o,r,c),l=l.next}while(l!==n)}Mt(e,r,o);break;case 1:if(!xr&&(vo(o,r),n=o.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=o.memoizedProps,n.state=o.memoizedState,n.componentWillUnmount()}catch(f){Ge(o,r,f)}Mt(e,r,o);break;case 21:Mt(e,r,o);break;case 22:o.mode&1?(xr=(n=xr)||o.memoizedState!==null,Mt(e,r,o),xr=n):Mt(e,r,o);break;default:Mt(e,r,o)}}function Dc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new dp),r.forEach(function(n){var l=bp.bind(null,e,n);o.has(n)||(o.add(n),n.then(l,l))})}}function Zr(e,r){var o=r.deletions;if(o!==null)for(var n=0;n<o.length;n++){var l=o[n];try{var a=e,c=r,f=c;e:for(;f!==null;){switch(f.tag){case 5:ur=f.stateNode,Jr=!1;break e;case 3:ur=f.stateNode.containerInfo,Jr=!0;break e;case 4:ur=f.stateNode.containerInfo,Jr=!0;break e}f=f.return}if(ur===null)throw Error(i(160));Oc(a,c,l),ur=null,Jr=!1;var y=l.alternate;y!==null&&(y.return=null),l.return=null}catch(M){Ge(l,r,M)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Rc(r,e),r=r.sibling}function Rc(e,r){var o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zr(r,e),st(e),n&4){try{en(3,e,e.return),ol(3,e)}catch(ue){Ge(e,e.return,ue)}try{en(5,e,e.return)}catch(ue){Ge(e,e.return,ue)}}break;case 1:Zr(r,e),st(e),n&512&&o!==null&&vo(o,o.return);break;case 5:if(Zr(r,e),st(e),n&512&&o!==null&&vo(o,o.return),e.flags&32){var l=e.stateNode;try{E(l,"")}catch(ue){Ge(e,e.return,ue)}}if(n&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,c=o!==null?o.memoizedProps:a,f=e.type,y=e.updateQueue;if(e.updateQueue=null,y!==null)try{f==="input"&&a.type==="radio"&&a.name!=null&&wr(l,a),He(f,c);var M=He(f,a);for(c=0;c<y.length;c+=2){var V=y[c],Q=y[c+1];V==="style"?O(l,Q):V==="dangerouslySetInnerHTML"?Ke(l,Q):V==="children"?E(l,Q):H(l,V,Q,M)}switch(f){case"input":Lr(l,a);break;case"textarea":Pe(l,a);break;case"select":var Y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var ne=a.value;ne!=null?hr(l,!!a.multiple,ne,!1):Y!==!!a.multiple&&(a.defaultValue!=null?hr(l,!!a.multiple,a.defaultValue,!0):hr(l,!!a.multiple,a.multiple?[]:"",!1))}l[Wo]=a}catch(ue){Ge(e,e.return,ue)}}break;case 6:if(Zr(r,e),st(e),n&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(ue){Ge(e,e.return,ue)}}break;case 3:if(Zr(r,e),st(e),n&4&&o!==null&&o.memoizedState.isDehydrated)try{_o(r.containerInfo)}catch(ue){Ge(e,e.return,ue)}break;case 4:Zr(r,e),st(e);break;case 13:Zr(r,e),st(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Qa=Ze())),n&4&&Dc(e);break;case 22:if(V=o!==null&&o.memoizedState!==null,e.mode&1?(xr=(M=xr)||V,Zr(r,e),xr=M):Zr(r,e),st(e),n&8192){if(M=e.memoizedState!==null,(e.stateNode.isHidden=M)&&!V&&(e.mode&1)!==0)for(le=e,V=e.child;V!==null;){for(Q=le=V;le!==null;){switch(Y=le,ne=Y.child,Y.tag){case 0:case 11:case 14:case 15:en(4,Y,Y.return);break;case 1:vo(Y,Y.return);var se=Y.stateNode;if(typeof se.componentWillUnmount=="function"){n=Y,o=Y.return;try{r=n,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(ue){Ge(n,o,ue)}}break;case 5:vo(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Ic(Q);continue}}ne!==null?(ne.return=Y,le=ne):Ic(Q)}V=V.sibling}e:for(V=null,Q=e;;){if(Q.tag===5){if(V===null){V=Q;try{l=Q.stateNode,M?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(f=Q.stateNode,y=Q.memoizedProps.style,c=y!=null&&y.hasOwnProperty("display")?y.display:null,f.style.display=xe("display",c))}catch(ue){Ge(e,e.return,ue)}}}else if(Q.tag===6){if(V===null)try{Q.stateNode.nodeValue=M?"":Q.memoizedProps}catch(ue){Ge(e,e.return,ue)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===e)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===e)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===e)break e;V===Q&&(V=null),Q=Q.return}V===Q&&(V=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Zr(r,e),st(e),n&4&&Dc(e);break;case 21:break;default:Zr(r,e),st(e)}}function st(e){var r=e.flags;if(r&2){try{e:{for(var o=e.return;o!==null;){if(Mc(o)){var n=o;break e}o=o.return}throw Error(i(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(E(l,""),n.flags&=-33);var a=_c(e);qa(e,a,l);break;case 3:case 4:var c=n.stateNode.containerInfo,f=_c(e);$a(e,f,c);break;default:throw Error(i(161))}}catch(y){Ge(e,e.return,y)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function pp(e,r,o){le=e,Ac(e)}function Ac(e,r,o){for(var n=(e.mode&1)!==0;le!==null;){var l=le,a=l.child;if(l.tag===22&&n){var c=l.memoizedState!==null||tl;if(!c){var f=l.alternate,y=f!==null&&f.memoizedState!==null||xr;f=tl;var M=xr;if(tl=c,(xr=y)&&!M)for(le=l;le!==null;)c=le,y=c.child,c.tag===22&&c.memoizedState!==null?Lc(l):y!==null?(y.return=c,le=y):Lc(l);for(;a!==null;)le=a,Ac(a),a=a.sibling;le=l,tl=f,xr=M}Fc(e)}else(l.subtreeFlags&8772)!==0&&a!==null?(a.return=l,le=a):Fc(e)}}function Fc(e){for(;le!==null;){var r=le;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:xr||ol(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!xr)if(o===null)n.componentDidMount();else{var l=r.elementType===r.type?o.memoizedProps:Gr(r.type,o.memoizedProps);n.componentDidUpdate(l,o.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Ii(r,a,n);break;case 3:var c=r.updateQueue;if(c!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ii(r,c,o)}break;case 5:var f=r.stateNode;if(o===null&&r.flags&4){o=f;var y=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":y.autoFocus&&o.focus();break;case"img":y.src&&(o.src=y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var M=r.alternate;if(M!==null){var V=M.memoizedState;if(V!==null){var Q=V.dehydrated;Q!==null&&_o(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}xr||r.flags&512&&Wa(r)}catch(Y){Ge(r,r.return,Y)}}if(r===e){le=null;break}if(o=r.sibling,o!==null){o.return=r.return,le=o;break}le=r.return}}function Ic(e){for(;le!==null;){var r=le;if(r===e){le=null;break}var o=r.sibling;if(o!==null){o.return=r.return,le=o;break}le=r.return}}function Lc(e){for(;le!==null;){var r=le;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ol(4,r)}catch(y){Ge(r,o,y)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var l=r.return;try{n.componentDidMount()}catch(y){Ge(r,l,y)}}var a=r.return;try{Wa(r)}catch(y){Ge(r,a,y)}break;case 5:var c=r.return;try{Wa(r)}catch(y){Ge(r,c,y)}}}catch(y){Ge(r,r.return,y)}if(r===e){le=null;break}var f=r.sibling;if(f!==null){f.return=r.return,le=f;break}le=r.return}}var hp=Math.ceil,nl=X.ReactCurrentDispatcher,Ya=X.ReactCurrentOwner,$r=X.ReactCurrentBatchConfig,Oe=0,ir=null,rr=null,pr=0,Ar=0,yo=St(0),nr=0,rn=null,Vt=0,ll=0,Va=0,tn=null,Tr=null,Qa=0,bo=1/0,xt=null,al=!1,Xa=null,_t=null,sl=!1,Ot=null,il=0,on=0,Ka=null,cl=-1,dl=0;function kr(){return(Oe&6)!==0?Ze():cl!==-1?cl:cl=Ze()}function Dt(e){return(e.mode&1)===0?1:(Oe&2)!==0&&pr!==0?pr&-pr:Ku.transition!==null?(dl===0&&(dl=_s()),dl):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e)}function et(e,r,o,n){if(50<on)throw on=0,Ka=null,Error(i(185));Po(e,o,n),((Oe&2)===0||e!==ir)&&(e===ir&&((Oe&2)===0&&(ll|=o),nr===4&&Rt(e,pr)),zr(e,n),o===1&&Oe===0&&(r.mode&1)===0&&(bo=Ze()+500,In&&Et()))}function zr(e,r){var o=e.callbackNode;Kd(e,r);var n=yn(e,e===ir?pr:0);if(n===0)o!==null&&Ts(o),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(o!=null&&Ts(o),r===1)e.tag===0?Xu(Uc.bind(null,e)):Si(Uc.bind(null,e)),qu(function(){(Oe&6)===0&&Et()}),o=null;else{switch(Os(n)){case 1:o=Tl;break;case 4:o=zs;break;case 16:o=fn;break;case 536870912:o=Ms;break;default:o=fn}o=Xc(o,Hc.bind(null,e))}e.callbackPriority=r,e.callbackNode=o}}function Hc(e,r){if(cl=-1,dl=0,(Oe&6)!==0)throw Error(i(327));var o=e.callbackNode;if(ko()&&e.callbackNode!==o)return null;var n=yn(e,e===ir?pr:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=ul(e,n);else{r=n;var l=Oe;Oe|=2;var a=Wc();(ir!==e||pr!==r)&&(xt=null,bo=Ze()+500,Xt(e,r));do try{gp();break}catch(f){Bc(e,f)}while(!0);ma(),nl.current=a,Oe=l,rr!==null?r=0:(ir=null,pr=0,r=nr)}if(r!==0){if(r===2&&(l=zl(e),l!==0&&(n=l,r=Ga(e,l))),r===1)throw o=rn,Xt(e,0),Rt(e,n),zr(e,Ze()),o;if(r===6)Rt(e,n);else{if(l=e.current.alternate,(n&30)===0&&!mp(l)&&(r=ul(e,n),r===2&&(a=zl(e),a!==0&&(n=a,r=Ga(e,a))),r===1))throw o=rn,Xt(e,0),Rt(e,n),zr(e,Ze()),o;switch(e.finishedWork=l,e.finishedLanes=n,r){case 0:case 1:throw Error(i(345));case 2:Kt(e,Tr,xt);break;case 3:if(Rt(e,n),(n&130023424)===n&&(r=Qa+500-Ze(),10<r)){if(yn(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){kr(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=oa(Kt.bind(null,e,Tr,xt),r);break}Kt(e,Tr,xt);break;case 4:if(Rt(e,n),(n&4194240)===n)break;for(r=e.eventTimes,l=-1;0<n;){var c=31-Qr(n);a=1<<c,c=r[c],c>l&&(l=c),n&=~a}if(n=l,n=Ze()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*hp(n/1960))-n,10<n){e.timeoutHandle=oa(Kt.bind(null,e,Tr,xt),n);break}Kt(e,Tr,xt);break;case 5:Kt(e,Tr,xt);break;default:throw Error(i(329))}}}return zr(e,Ze()),e.callbackNode===o?Hc.bind(null,e):null}function Ga(e,r){var o=tn;return e.current.memoizedState.isDehydrated&&(Xt(e,r).flags|=256),e=ul(e,r),e!==2&&(r=Tr,Tr=o,r!==null&&Ja(r)),e}function Ja(e){Tr===null?Tr=e:Tr.push.apply(Tr,e)}function mp(e){for(var r=e;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var n=0;n<o.length;n++){var l=o[n],a=l.getSnapshot;l=l.value;try{if(!Xr(a(),l))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Rt(e,r){for(r&=~Va,r&=~ll,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var o=31-Qr(r),n=1<<o;e[o]=-1,r&=~n}}function Uc(e){if((Oe&6)!==0)throw Error(i(327));ko();var r=yn(e,0);if((r&1)===0)return zr(e,Ze()),null;var o=ul(e,r);if(e.tag!==0&&o===2){var n=zl(e);n!==0&&(r=n,o=Ga(e,n))}if(o===1)throw o=rn,Xt(e,0),Rt(e,r),zr(e,Ze()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Kt(e,Tr,xt),zr(e,Ze()),null}function Za(e,r){var o=Oe;Oe|=1;try{return e(r)}finally{Oe=o,Oe===0&&(bo=Ze()+500,In&&Et())}}function Qt(e){Ot!==null&&Ot.tag===0&&(Oe&6)===0&&ko();var r=Oe;Oe|=1;var o=$r.transition,n=Fe;try{if($r.transition=null,Fe=1,e)return e()}finally{Fe=n,$r.transition=o,Oe=r,(Oe&6)===0&&Et()}}function es(){Ar=yo.current,We(yo)}function Xt(e,r){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,$u(o)),rr!==null)for(o=rr.return;o!==null;){var n=o;switch(ca(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&An();break;case 3:go(),We(Sr),We(mr),ja();break;case 5:ba(n);break;case 4:go();break;case 13:We(Qe);break;case 19:We(Qe);break;case 10:fa(n.type._context);break;case 22:case 23:es()}o=o.return}if(ir=e,rr=e=At(e.current,null),pr=Ar=r,nr=0,rn=null,Va=ll=Vt=0,Tr=tn=null,$t!==null){for(r=0;r<$t.length;r++)if(o=$t[r],n=o.interleaved,n!==null){o.interleaved=null;var l=n.next,a=o.pending;if(a!==null){var c=a.next;a.next=l,n.next=c}o.pending=n}$t=null}return e}function Bc(e,r){do{var o=rr;try{if(ma(),Qn.current=Jn,Xn){for(var n=Xe.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}Xn=!1}if(Yt=0,sr=or=Xe=null,Xo=!1,Ko=0,Ya.current=null,o===null||o.return===null){nr=1,rn=r,rr=null;break}e:{var a=e,c=o.return,f=o,y=r;if(r=pr,f.flags|=32768,y!==null&&typeof y=="object"&&typeof y.then=="function"){var M=y,V=f,Q=V.tag;if((V.mode&1)===0&&(Q===0||Q===11||Q===15)){var Y=V.alternate;Y?(V.updateQueue=Y.updateQueue,V.memoizedState=Y.memoizedState,V.lanes=Y.lanes):(V.updateQueue=null,V.memoizedState=null)}var ne=hc(c);if(ne!==null){ne.flags&=-257,mc(ne,c,f,a,r),ne.mode&1&&pc(a,M,r),r=ne,y=M;var se=r.updateQueue;if(se===null){var ue=new Set;ue.add(y),r.updateQueue=ue}else se.add(y);break e}else{if((r&1)===0){pc(a,M,r),rs();break e}y=Error(i(426))}}else if(qe&&f.mode&1){var er=hc(c);if(er!==null){(er.flags&65536)===0&&(er.flags|=256),mc(er,c,f,a,r),pa(xo(y,f));break e}}a=y=xo(y,f),nr!==4&&(nr=2),tn===null?tn=[a]:tn.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var S=dc(a,y,r);Fi(a,S);break e;case 1:f=y;var b=a.type,T=a.stateNode;if((a.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(_t===null||!_t.has(T)))){a.flags|=65536,r&=-r,a.lanes|=r;var Z=uc(a,f,r);Fi(a,Z);break e}}a=a.return}while(a!==null)}qc(o)}catch(pe){r=pe,rr===o&&o!==null&&(rr=o=o.return);continue}break}while(!0)}function Wc(){var e=nl.current;return nl.current=Jn,e===null?Jn:e}function rs(){(nr===0||nr===3||nr===2)&&(nr=4),ir===null||(Vt&268435455)===0&&(ll&268435455)===0||Rt(ir,pr)}function ul(e,r){var o=Oe;Oe|=2;var n=Wc();(ir!==e||pr!==r)&&(xt=null,Xt(e,r));do try{fp();break}catch(l){Bc(e,l)}while(!0);if(ma(),Oe=o,nl.current=n,rr!==null)throw Error(i(261));return ir=null,pr=0,nr}function fp(){for(;rr!==null;)$c(rr)}function gp(){for(;rr!==null&&!Ud();)$c(rr)}function $c(e){var r=Qc(e.alternate,e,Ar);e.memoizedProps=e.pendingProps,r===null?qc(e):rr=r,Ya.current=null}function qc(e){var r=e;do{var o=r.alternate;if(e=r.return,(r.flags&32768)===0){if(o=ip(o,r,Ar),o!==null){rr=o;return}}else{if(o=cp(o,r),o!==null){o.flags&=32767,rr=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nr=6,rr=null;return}}if(r=r.sibling,r!==null){rr=r;return}rr=r=e}while(r!==null);nr===0&&(nr=5)}function Kt(e,r,o){var n=Fe,l=$r.transition;try{$r.transition=null,Fe=1,xp(e,r,o,n)}finally{$r.transition=l,Fe=n}return null}function xp(e,r,o,n){do ko();while(Ot!==null);if((Oe&6)!==0)throw Error(i(327));o=e.finishedWork;var l=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=o.lanes|o.childLanes;if(Gd(e,a),e===ir&&(rr=ir=null,pr=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||sl||(sl=!0,Xc(fn,function(){return ko(),null})),a=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||a){a=$r.transition,$r.transition=null;var c=Fe;Fe=1;var f=Oe;Oe|=4,Ya.current=null,up(e,o),Rc(o,e),Fu(ra),jn=!!ea,ra=ea=null,e.current=o,pp(o),Bd(),Oe=f,Fe=c,$r.transition=a}else e.current=o;if(sl&&(sl=!1,Ot=e,il=l),a=e.pendingLanes,a===0&&(_t=null),qd(o.stateNode),zr(e,Ze()),r!==null)for(n=e.onRecoverableError,o=0;o<r.length;o++)l=r[o],n(l.value,{componentStack:l.stack,digest:l.digest});if(al)throw al=!1,e=Xa,Xa=null,e;return(il&1)!==0&&e.tag!==0&&ko(),a=e.pendingLanes,(a&1)!==0?e===Ka?on++:(on=0,Ka=e):on=0,Et(),null}function ko(){if(Ot!==null){var e=Os(il),r=$r.transition,o=Fe;try{if($r.transition=null,Fe=16>e?16:e,Ot===null)var n=!1;else{if(e=Ot,Ot=null,il=0,(Oe&6)!==0)throw Error(i(331));var l=Oe;for(Oe|=4,le=e.current;le!==null;){var a=le,c=a.child;if((le.flags&16)!==0){var f=a.deletions;if(f!==null){for(var y=0;y<f.length;y++){var M=f[y];for(le=M;le!==null;){var V=le;switch(V.tag){case 0:case 11:case 15:en(8,V,a)}var Q=V.child;if(Q!==null)Q.return=V,le=Q;else for(;le!==null;){V=le;var Y=V.sibling,ne=V.return;if(zc(V),V===M){le=null;break}if(Y!==null){Y.return=ne,le=Y;break}le=ne}}}var se=a.alternate;if(se!==null){var ue=se.child;if(ue!==null){se.child=null;do{var er=ue.sibling;ue.sibling=null,ue=er}while(ue!==null)}}le=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,le=c;else e:for(;le!==null;){if(a=le,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:en(9,a,a.return)}var S=a.sibling;if(S!==null){S.return=a.return,le=S;break e}le=a.return}}var b=e.current;for(le=b;le!==null;){c=le;var T=c.child;if((c.subtreeFlags&2064)!==0&&T!==null)T.return=c,le=T;else e:for(c=b;le!==null;){if(f=le,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:ol(9,f)}}catch(pe){Ge(f,f.return,pe)}if(f===c){le=null;break e}var Z=f.sibling;if(Z!==null){Z.return=f.return,le=Z;break e}le=f.return}}if(Oe=l,Et(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(gn,e)}catch{}n=!0}return n}finally{Fe=o,$r.transition=r}}return!1}function Yc(e,r,o){r=xo(o,r),r=dc(e,r,1),e=zt(e,r,1),r=kr(),e!==null&&(Po(e,1,r),zr(e,r))}function Ge(e,r,o){if(e.tag===3)Yc(e,e,o);else for(;r!==null;){if(r.tag===3){Yc(r,e,o);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_t===null||!_t.has(n))){e=xo(o,e),e=uc(r,e,1),r=zt(r,e,1),e=kr(),r!==null&&(Po(r,1,e),zr(r,e));break}}r=r.return}}function vp(e,r,o){var n=e.pingCache;n!==null&&n.delete(r),r=kr(),e.pingedLanes|=e.suspendedLanes&o,ir===e&&(pr&o)===o&&(nr===4||nr===3&&(pr&130023424)===pr&&500>Ze()-Qa?Xt(e,0):Va|=o),zr(e,r)}function Vc(e,r){r===0&&((e.mode&1)===0?r=1:(r=vn,vn<<=1,(vn&130023424)===0&&(vn=4194304)));var o=kr();e=mt(e,r),e!==null&&(Po(e,r,o),zr(e,o))}function yp(e){var r=e.memoizedState,o=0;r!==null&&(o=r.retryLane),Vc(e,o)}function bp(e,r){var o=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(o=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(i(314))}n!==null&&n.delete(r),Vc(e,o)}var Qc;Qc=function(e,r,o){if(e!==null)if(e.memoizedProps!==r.pendingProps||Sr.current)Er=!0;else{if((e.lanes&o)===0&&(r.flags&128)===0)return Er=!1,sp(e,r,o);Er=(e.flags&131072)!==0}else Er=!1,qe&&(r.flags&1048576)!==0&&Pi(r,Hn,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;rl(e,r),e=r.pendingProps;var l=io(r,mr.current);fo(r,o),l=Ca(null,r,n,e,l,o);var a=Sa();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Pr(n)?(a=!0,Fn(r)):a=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,va(r),l.updater=Zn,r.stateNode=l,l._reactInternals=r,_a(r,n,e,o),r=Aa(null,r,n,!0,a,o)):(r.tag=0,qe&&a&&ia(r),br(null,r,l,o),r=r.child),r;case 16:n=r.elementType;e:{switch(rl(e,r),e=r.pendingProps,l=n._init,n=l(n._payload),r.type=n,l=r.tag=jp(n),e=Gr(n,e),l){case 0:r=Ra(null,r,n,e,o);break e;case 1:r=bc(null,r,n,e,o);break e;case 11:r=fc(null,r,n,e,o);break e;case 14:r=gc(null,r,n,Gr(n.type,e),o);break e}throw Error(i(306,n,""))}return r;case 0:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),Ra(e,r,n,l,o);case 1:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),bc(e,r,n,l,o);case 3:e:{if(kc(r),e===null)throw Error(i(387));n=r.pendingProps,a=r.memoizedState,l=a.element,Ai(e,r),Yn(r,n,null,o);var c=r.memoizedState;if(n=c.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){l=xo(Error(i(423)),r),r=jc(e,r,n,o,l);break e}else if(n!==l){l=xo(Error(i(424)),r),r=jc(e,r,n,o,l);break e}else for(Rr=Ct(r.stateNode.containerInfo.firstChild),Dr=r,qe=!0,Kr=null,o=Di(r,null,n,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(po(),n===l){r=gt(e,r,o);break e}br(e,r,n,o)}r=r.child}return r;case 5:return Li(r),e===null&&ua(r),n=r.type,l=r.pendingProps,a=e!==null?e.memoizedProps:null,c=l.children,ta(n,l)?c=null:a!==null&&ta(n,a)&&(r.flags|=32),yc(e,r),br(e,r,c,o),r.child;case 6:return e===null&&ua(r),null;case 13:return Nc(e,r,o);case 4:return ya(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=ho(r,null,n,o):br(e,r,n,o),r.child;case 11:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),fc(e,r,n,l,o);case 7:return br(e,r,r.pendingProps,o),r.child;case 8:return br(e,r,r.pendingProps.children,o),r.child;case 12:return br(e,r,r.pendingProps.children,o),r.child;case 10:e:{if(n=r.type._context,l=r.pendingProps,a=r.memoizedProps,c=l.value,Ue(Wn,n._currentValue),n._currentValue=c,a!==null)if(Xr(a.value,c)){if(a.children===l.children&&!Sr.current){r=gt(e,r,o);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var f=a.dependencies;if(f!==null){c=a.child;for(var y=f.firstContext;y!==null;){if(y.context===n){if(a.tag===1){y=ft(-1,o&-o),y.tag=2;var M=a.updateQueue;if(M!==null){M=M.shared;var V=M.pending;V===null?y.next=y:(y.next=V.next,V.next=y),M.pending=y}}a.lanes|=o,y=a.alternate,y!==null&&(y.lanes|=o),ga(a.return,o,r),f.lanes|=o;break}y=y.next}}else if(a.tag===10)c=a.type===r.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(i(341));c.lanes|=o,f=c.alternate,f!==null&&(f.lanes|=o),ga(c,o,r),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===r){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}br(e,r,l.children,o),r=r.child}return r;case 9:return l=r.type,n=r.pendingProps.children,fo(r,o),l=Br(l),n=n(l),r.flags|=1,br(e,r,n,o),r.child;case 14:return n=r.type,l=Gr(n,r.pendingProps),l=Gr(n.type,l),gc(e,r,n,l,o);case 15:return xc(e,r,r.type,r.pendingProps,o);case 17:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),rl(e,r),r.tag=1,Pr(n)?(e=!0,Fn(r)):e=!1,fo(r,o),ic(r,n,l),_a(r,n,l,o),Aa(null,r,n,!0,e,o);case 19:return Cc(e,r,o);case 22:return vc(e,r,o)}throw Error(i(156,r.tag))};function Xc(e,r){return Es(e,r)}function kp(e,r,o,n){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qr(e,r,o,n){return new kp(e,r,o,n)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jp(e){if(typeof e=="function")return ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oe)return 11;if(e===Te)return 14}return 2}function At(e,r){var o=e.alternate;return o===null?(o=qr(e.tag,r,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=r,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,r=e.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function pl(e,r,o,n,l,a){var c=2;if(n=e,typeof e=="function")ts(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case P:return Gt(o.children,l,a,r);case K:c=8,l|=8;break;case D:return e=qr(12,o,r,l|2),e.elementType=D,e.lanes=a,e;case ve:return e=qr(13,o,r,l),e.elementType=ve,e.lanes=a,e;case Ce:return e=qr(19,o,r,l),e.elementType=Ce,e.lanes=a,e;case Se:return hl(o,l,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:c=10;break e;case ee:c=9;break e;case oe:c=11;break e;case Te:c=14;break e;case Me:c=16,n=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return r=qr(c,o,r,l),r.elementType=e,r.type=n,r.lanes=a,r}function Gt(e,r,o,n){return e=qr(7,e,n,r),e.lanes=o,e}function hl(e,r,o,n){return e=qr(22,e,n,r),e.elementType=Se,e.lanes=o,e.stateNode={isHidden:!1},e}function os(e,r,o){return e=qr(6,e,null,r),e.lanes=o,e}function ns(e,r,o){return r=qr(4,e.children!==null?e.children:[],e.key,r),r.lanes=o,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Np(e,r,o,n,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ls(e,r,o,n,l,a,c,f,y){return e=new Np(e,r,o,f,y),r===1?(r=1,a===!0&&(r|=8)):r=0,a=qr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(a),e}function wp(e,r,o){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:n==null?null:""+n,children:e,containerInfo:r,implementation:o}}function Kc(e){if(!e)return Pt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(i(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Pr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Pr(o))return wi(e,o,r)}return r}function Gc(e,r,o,n,l,a,c,f,y){return e=ls(o,n,!0,e,l,a,c,f,y),e.context=Kc(null),o=e.current,n=kr(),l=Dt(o),a=ft(n,l),a.callback=r??null,zt(o,a,l),e.current.lanes=l,Po(e,l,n),zr(e,n),e}function ml(e,r,o,n){var l=r.current,a=kr(),c=Dt(l);return o=Kc(o),r.context===null?r.context=o:r.pendingContext=o,r=ft(a,c),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=zt(l,r,c),e!==null&&(et(e,l,c,a),qn(e,l,c)),c}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jc(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<r?o:r}}function as(e,r){Jc(e,r),(e=e.alternate)&&Jc(e,r)}function Cp(){return null}var Zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ss(e){this._internalRoot=e}gl.prototype.render=ss.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(i(409));ml(e,r,null,null)},gl.prototype.unmount=ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Qt(function(){ml(null,e,null,null)}),r[dt]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var r=As();e={blockedOn:null,target:e,priority:r};for(var o=0;o<jt.length&&r!==0&&r<jt[o].priority;o++);jt.splice(o,0,e),o===0&&Ls(e)}};function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ed(){}function Sp(e,r,o,n,l){if(l){if(typeof n=="function"){var a=n;n=function(){var M=fl(c);a.call(M)}}var c=Gc(r,n,e,0,null,!1,!1,"",ed);return e._reactRootContainer=c,e[dt]=c.current,Uo(e.nodeType===8?e.parentNode:e),Qt(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var f=n;n=function(){var M=fl(y);f.call(M)}}var y=ls(e,0,!1,null,null,!1,!1,"",ed);return e._reactRootContainer=y,e[dt]=y.current,Uo(e.nodeType===8?e.parentNode:e),Qt(function(){ml(r,y,o,n)}),y}function vl(e,r,o,n,l){var a=o._reactRootContainer;if(a){var c=a;if(typeof l=="function"){var f=l;l=function(){var y=fl(c);f.call(y)}}ml(r,c,e,l)}else c=Sp(o,r,e,l,n);return fl(c)}Ds=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var o=So(r.pendingLanes);o!==0&&(_l(r,o|1),zr(r,Ze()),(Oe&6)===0&&(bo=Ze()+500,Et()))}break;case 13:Qt(function(){var n=mt(e,1);if(n!==null){var l=kr();et(n,e,1,l)}}),as(e,1)}},Ol=function(e){if(e.tag===13){var r=mt(e,134217728);if(r!==null){var o=kr();et(r,e,134217728,o)}as(e,134217728)}},Rs=function(e){if(e.tag===13){var r=Dt(e),o=mt(e,r);if(o!==null){var n=kr();et(o,e,r,n)}as(e,r)}},As=function(){return Fe},Fs=function(e,r){var o=Fe;try{return Fe=e,r()}finally{Fe=o}},_r=function(e,r,o){switch(r){case"input":if(Lr(e,o),r=o.name,o.type==="radio"&&r!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var n=o[r];if(n!==e&&n.form===e.form){var l=Rn(n);if(!l)throw Error(i(90));Ir(n),Lr(n,l)}}}break;case"textarea":Pe(e,o);break;case"select":r=o.value,r!=null&&hr(e,!!o.multiple,r,!1)}},ks=Za,js=Qt;var Pp={usingClientEntryPoint:!1,Events:[$o,ao,Rn,Ae,bs,Za]},nn={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ep={bundleType:nn.bundleType,version:nn.version,rendererPackageName:nn.rendererPackageName,rendererConfig:nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ss(e),e===null?null:e.stateNode},findFiberByHostInstance:nn.findFiberByHostInstance||Cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{gn=yl.inject(Ep),ot=yl}catch{}}return Mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp,Mr.createPortal=function(e,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!is(r))throw Error(i(200));return wp(e,r,null,o)},Mr.createRoot=function(e,r){if(!is(e))throw Error(i(299));var o=!1,n="",l=Zc;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=ls(e,1,!1,null,null,o,!1,n,l),e[dt]=r.current,Uo(e.nodeType===8?e.parentNode:e),new ss(r)},Mr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Ss(r),e=e===null?null:e.stateNode,e},Mr.flushSync=function(e){return Qt(e)},Mr.hydrate=function(e,r,o){if(!xl(r))throw Error(i(200));return vl(null,e,r,!0,o)},Mr.hydrateRoot=function(e,r,o){if(!is(e))throw Error(i(405));var n=o!=null&&o.hydratedSources||null,l=!1,a="",c=Zc;if(o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(a=o.identifierPrefix),o.onRecoverableError!==void 0&&(c=o.onRecoverableError)),r=Gc(r,null,e,1,o??null,l,!1,a,c),e[dt]=r.current,Uo(e),n)for(e=0;e<n.length;e++)o=n[e],l=o._getVersion,l=l(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,l]:r.mutableSourceEagerHydrationData.push(o,l);return new gl(r)},Mr.render=function(e,r,o){if(!xl(r))throw Error(i(200));return vl(null,e,r,!1,o)},Mr.unmountComponentAtNode=function(e){if(!xl(e))throw Error(i(40));return e._reactRootContainer?(Qt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1},Mr.unstable_batchedUpdates=Za,Mr.unstable_renderSubtreeIntoContainer=function(e,r,o,n){if(!xl(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return vl(e,r,o,!1,n)},Mr.version="18.3.1-next-f1338f8080-20240426",Mr}var id;function Fp(){if(id)return us.exports;id=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),us.exports=Ap(),us.exports}var cd;function Ip(){if(cd)return bl;cd=1;var s=Fp();return bl.createRoot=s.createRoot,bl.hydrateRoot=s.hydrateRoot,bl}var Lp=Ip(),x=gs();const Yr=zp(x),Jt="/assets/5ebff9a217654d307f5ff0e6abe952a2f7edba47-C_j6zY7W.png",Hp="/assets/f72178f30a0dde70a8d75f3484b9afe145cb6b4a-CDyQn-v-.png",Up="/assets/ce4e08efbf373b6ac47b975a612b62ba9dbdfad0-E6WWYkN1.png";function Bp({onCustomerCheckIn:s,onStaffLogin:d,onRevisit:i}){return t.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[t.jsx("div",{className:"hidden lg:flex absolute",style:{right:"0",top:"50%",transform:"translateY(-50%)",width:"45%",height:"85%",zIndex:5,alignItems:"center",justifyContent:"center"},children:t.jsx("img",{src:Hp,alt:"Eagle",className:"eagle-wings",style:{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",opacity:.35}})}),t.jsxs("nav",{className:"relative z-10 flex items-center justify-between px-6 sm:px-8 lg:px-12 py-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsx("span",{className:"text-lg sm:text-xl font-medium text-white",children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-6 sm:gap-8",children:[t.jsx("a",{href:"https://reliancesurfaces.com/shop/",target:"_blank",rel:"noopener noreferrer",className:"text-sm sm:text-base text-gray-400 transition-all duration-200 nav-link",children:"Slabs"}),t.jsx("button",{onClick:d,className:"text-sm sm:text-base text-gray-400 transition-all duration-200 nav-link",children:"Login"})]})]}),t.jsx("div",{className:"hidden sm:flex relative z-10 flex-col items-start justify-center px-8 lg:px-16 xl:px-24",style:{height:"calc(100vh - 100px)"},children:t.jsxs("div",{className:"max-w-2xl lg:max-w-3xl",children:[t.jsxs("h1",{className:"mb-6 text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-light",style:{color:"#FFFFFF",fontWeight:"300",lineHeight:"1.1"},children:["Welcome to"," ",t.jsx("span",{style:{color:"#D4A736"},children:"Reliance Surfaces"})]}),t.jsx("p",{className:"mb-12 text-lg md:text-xl lg:text-2xl italic",style:{color:"rgba(156, 163, 175, 0.9)",fontWeight:"300"},children:"Surfaces that tell a story"}),t.jsxs("div",{className:"flex flex-col sm:flex-row items-start gap-4 max-w-md",children:[t.jsx("button",{onClick:s,className:"w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"#D4A736",color:"#000000",border:"none",cursor:"pointer"},onMouseEnter:u=>{u.currentTarget.style.backgroundColor="#E5B946",u.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:u=>{u.currentTarget.style.backgroundColor="#D4A736",u.currentTarget.style.transform="translateY(0)"},children:"Check-In"}),t.jsx("button",{onClick:i,className:"w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"transparent",border:"1px solid #D4A736",color:"#D4A736",cursor:"pointer"},onMouseEnter:u=>{u.currentTarget.style.backgroundColor="rgba(212, 167, 54, 0.1)",u.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:u=>{u.currentTarget.style.backgroundColor="transparent",u.currentTarget.style.transform="translateY(0)"},children:"Revisiting"})]})]})}),t.jsxs("div",{className:"sm:hidden relative z-10 flex flex-col justify-between px-6",style:{height:"calc(100vh - 88px)"},children:[t.jsxs("div",{className:"flex flex-col pt-8 text-center",children:[t.jsx("h1",{className:"mb-2 text-5xl leading-tight font-light",style:{color:"#FFFFFF",fontWeight:"200",lineHeight:"1.1"},children:"Welcome"}),t.jsx("p",{className:"mb-6 text-2xl italic",style:{color:"rgba(156, 163, 175, 0.8)",fontWeight:"300",fontStyle:"italic"},children:"to"}),t.jsx("h2",{className:"mb-6 text-4xl leading-tight font-light",style:{color:"#D4A736",fontWeight:"300",lineHeight:"1.1"},children:"Reliance Surfaces"}),t.jsx("p",{className:"mb-8 text-base italic px-4",style:{color:"rgba(156, 163, 175, 0.9)",fontWeight:"300"},children:"Surfaces that tell a story"}),t.jsxs("div",{className:"flex flex-col gap-3 max-w-xs mx-auto w-full",children:[t.jsx("button",{onClick:s,className:"w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"#D4A736",color:"#000000",border:"none",cursor:"pointer"},children:"Check-In"}),t.jsx("button",{onClick:i,className:"w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"transparent",border:"1px solid #D4A736",color:"#D4A736",cursor:"pointer"},children:"Revisiting"})]})]}),t.jsx("div",{className:"flex justify-center items-center pb-16 pt-4",children:t.jsx("img",{src:Up,alt:"Eagle",className:"eagle-wings-mobile",style:{width:"85%",maxWidth:"360px",height:"auto",opacity:.4,filter:"brightness(0) saturate(100%) invert(63%) sepia(44%) saturate(443%) hue-rotate(1deg) brightness(93%) contrast(87%)"}})})]}),t.jsx("style",{children:`
        @keyframes wingFlap {
          0%, 100% {
            transform: scaleX(1) scaleY(1);
          }
          25% {
            transform: scaleX(1.03) scaleY(0.98);
          }
          50% {
            transform: scaleX(1.05) scaleY(0.97);
          }
          75% {
            transform: scaleX(1.03) scaleY(0.98);
          }
        }

        @keyframes wingFlapMobile {
          0%, 100% {
            transform: scaleX(1) scaleY(1);
          }
          25% {
            transform: scaleX(1.04) scaleY(0.97);
          }
          50% {
            transform: scaleX(1.06) scaleY(0.96);
          }
          75% {
            transform: scaleX(1.04) scaleY(0.97);
          }
        }

        @keyframes subtleGlow {
          0%, 100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.42;
          }
        }

        @keyframes subtleGlowMobile {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.5;
          }
        }

        .eagle-wings {
          animation: wingFlap 3.5s ease-in-out infinite, subtleGlow 3s ease-in-out infinite;
          transform-origin: center;
        }

        .eagle-wings-mobile {
          animation: wingFlapMobile 4s ease-in-out infinite, subtleGlowMobile 3s ease-in-out infinite;
          transform-origin: center;
        }

        .nav-link {
          position: relative;
          text-decoration: none;
          padding-bottom: 2px;
          outline: none;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #D4A736;
          transition: width 0.25s ease;
        }

        .nav-link:hover {
          color: #D4A736 !important;
        }

        .nav-link:hover::after {
          width: 100%;
        }

      `})]})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$p=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,i,u)=>u?u.toUpperCase():i.toLowerCase()),dd=s=>{const d=$p(s);return d.charAt(0).toUpperCase()+d.slice(1)},jd=(...s)=>s.filter((d,i,u)=>!!d&&d.trim()!==""&&u.indexOf(d)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=x.forwardRef(({color:s="currentColor",size:d=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:g="",children:p,iconNode:v,...N},k)=>x.createElement("svg",{ref:k,...qp,width:d,height:d,stroke:s,strokeWidth:u?Number(i)*24/Number(d):i,className:jd("lucide",g),...N},[...v.map(([L,A])=>x.createElement(L,A)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(s,d)=>{const i=x.forwardRef(({className:u,...g},p)=>x.createElement(Yp,{ref:p,iconNode:d,className:jd(`lucide-${Wp(dd(s))}`,`lucide-${s}`,u),...g}));return i.displayName=dd(s),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Qp=Ve("bell",Vp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Nd=Ve("check",Xp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],wd=Ve("chevron-down",Kp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Jp=Ve("chevron-left",Gp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],eh=Ve("chevron-right",Zp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Cd=Ve("chevron-up",rh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],xs=Ve("circle-check-big",th);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],nh=Ve("eye-off",oh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vs=Ve("eye",lh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Sd=Ve("funnel",ah);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ys=Ve("image",sh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],un=Ve("log-out",ih);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],dh=Ve("mail",ch);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"M5 12h14",key:"1ays0h"}]],Pd=Ve("minus",uh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],dn=Ve("plus",ph);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ed=Ve("rotate-ccw",hh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Td=Ve("search",mh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nl=Ve("star",fh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],xh=Ve("triangle-alert",gh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],yh=Ve("upload",vh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],kh=Ve("user-plus",bh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Nh=Ve("user",jh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],zd=Ve("users",wh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ct=Ve("x",Ch);function Sh({onNext:s,initialData:d}){const i=d?.firstName?[d.firstName,d.lastName].filter(Boolean).join(" "):"",[u,g]=x.useState(i),[p,v]=x.useState({street:d?.street||"",suiteUnit:d?.suiteUnit||"",city:d?.city||"",state:d?.state||"NJ",zip:d?.zip||"",country:d?.country||"USA",phones:d?.phones||[""],emails:d?.emails||[""]}),[N,k]=x.useState({}),L=x.useRef(null),A=x.useRef([]),F=x.useRef([]),B=[{code:"AL",name:"Alabama"},{code:"AK",name:"Alaska"},{code:"AZ",name:"Arizona"},{code:"AR",name:"Arkansas"},{code:"CA",name:"California"},{code:"CO",name:"Colorado"},{code:"CT",name:"Connecticut"},{code:"DE",name:"Delaware"},{code:"FL",name:"Florida"},{code:"GA",name:"Georgia"},{code:"HI",name:"Hawaii"},{code:"ID",name:"Idaho"},{code:"IL",name:"Illinois"},{code:"IN",name:"Indiana"},{code:"IA",name:"Iowa"},{code:"KS",name:"Kansas"},{code:"KY",name:"Kentucky"},{code:"LA",name:"Louisiana"},{code:"ME",name:"Maine"},{code:"MD",name:"Maryland"},{code:"MA",name:"Massachusetts"},{code:"MI",name:"Michigan"},{code:"MN",name:"Minnesota"},{code:"MS",name:"Mississippi"},{code:"MO",name:"Missouri"},{code:"MT",name:"Montana"},{code:"NE",name:"Nebraska"},{code:"NV",name:"Nevada"},{code:"NH",name:"New Hampshire"},{code:"NJ",name:"New Jersey"},{code:"NM",name:"New Mexico"},{code:"NY",name:"New York"},{code:"NC",name:"North Carolina"},{code:"ND",name:"North Dakota"},{code:"OH",name:"Ohio"},{code:"OK",name:"Oklahoma"},{code:"OR",name:"Oregon"},{code:"PA",name:"Pennsylvania"},{code:"RI",name:"Rhode Island"},{code:"SC",name:"South Carolina"},{code:"SD",name:"South Dakota"},{code:"TN",name:"Tennessee"},{code:"TX",name:"Texas"},{code:"UT",name:"Utah"},{code:"VT",name:"Vermont"},{code:"VA",name:"Virginia"},{code:"WA",name:"Washington"},{code:"WV",name:"West Virginia"},{code:"WI",name:"Wisconsin"},{code:"WY",name:"Wyoming"}],re=R=>{v(ee=>({...ee,state:R}))},$=R=>R.split(" ").map(ee=>ee.charAt(0).toUpperCase()+ee.slice(1).toLowerCase()).join(" "),j=R=>{setTimeout(()=>{R.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},300)},w=R=>R.replace(/\D/g,"").length===10,C=R=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(R),z=()=>{const R={};u.trim()||(R.fullName="Full name is required"),p.street.trim()||(R.street="Street address is required"),p.city.trim()||(R.city="City is required"),p.state.trim()||(R.state="State is required"),p.zip.trim()||(R.zip="ZIP code is required");const ee=p.phones.filter(ve=>ve.trim());ee.length===0?R.phone="At least one phone number is required":ee.every(w)||(R.phone="Phone numbers must be 10 digits");const oe=p.emails.filter(ve=>ve.trim());return oe.length===0?R.email="At least one email is required":oe.every(C)||(R.email="Email addresses must be valid"),k(R),Object.keys(R).length===0},H=R=>{if(R.preventDefault(),z()){const ee=u.trim().split(/\s+/),oe=ee[0]||"",ve=ee.slice(1).join(" ");s({firstName:oe,lastName:ve,...p,phones:p.phones.filter(Ce=>Ce.trim()).map(Ce=>Ce.replace(/\D/g,"")),emails:p.emails.filter(Ce=>Ce.trim())})}},X=()=>v(R=>({...R,phones:[...R.phones,""]})),q=R=>v(ee=>({...ee,phones:ee.phones.filter((oe,ve)=>ve!==R)})),_=(R,ee)=>v(oe=>{const ve=[...oe.phones];return ve[R]=ee,{...oe,phones:ve}}),P=()=>v(R=>({...R,emails:[...R.emails,""]})),K=R=>v(ee=>({...ee,emails:ee.emails.filter((oe,ve)=>ve!==R)})),D=(R,ee)=>v(oe=>{const ve=[...oe.emails];return ve[R]=ee,{...oe,emails:ve}});return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px 20px"},children:[t.jsx("h1",{className:"text-center mb-1 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 1: Your Details"}),t.jsx("p",{className:"text-center mb-6 text-sm",style:{color:"var(--color-text-gray)"},children:"Please provide your contact information"}),t.jsxs("form",{onSubmit:H,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Full Name *"}),t.jsx("input",{type:"text",value:u,onChange:R=>g(R.target.value),onBlur:R=>g($(R.target.value)),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.fullName?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"First and last name"}),N.fullName&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:N.fullName})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Street Address *"}),t.jsx("input",{type:"text",value:p.street,onChange:R=>v(ee=>({...ee,street:R.target.value})),onBlur:R=>v(ee=>({...ee,street:$(R.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.street?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"e.g. 123 Main St",ref:L}),N.street&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:N.street})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"City *"}),t.jsx("input",{type:"text",value:p.city,onChange:R=>v(ee=>({...ee,city:R.target.value})),onBlur:R=>v(ee=>({...ee,city:$(R.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.city?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"City"}),N.city&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:N.city})]}),t.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"State *"}),t.jsxs("select",{value:p.state,onChange:R=>re(R.target.value),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.state?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"Select"}),B.map(R=>t.jsx("option",{value:R.code,children:R.code},R.code))]}),N.state&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:N.state})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"ZIP *"}),t.jsx("input",{type:"text",value:p.zip,onChange:R=>v(ee=>({...ee,zip:R.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.zip?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"ZIP"}),N.zip&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:N.zip})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Country"}),t.jsxs("select",{value:p.country,onChange:R=>v(ee=>({...ee,country:R.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Phone Number(s) *"}),p.phones.map((R,ee)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{ref:oe=>A.current[ee]=oe,type:"tel",value:R,onChange:oe=>_(ee,oe.target.value),onFocus:oe=>j(oe.target),className:"flex-1 px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.phone&&ee===0?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Phone number"}),p.phones.length>1&&t.jsx("button",{type:"button",onClick:()=>q(ee),className:"px-3 py-2.5 rounded-lg flex-shrink-0",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:18})})]},ee)),N.phone&&t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-error)"},children:N.phone}),t.jsxs("button",{type:"button",onClick:X,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-gold)"},children:[t.jsx(dn,{size:18}),"Add Another Phone"]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Email Address(es) *"}),p.emails.map((R,ee)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{ref:oe=>F.current[ee]=oe,type:"email",value:R,onChange:oe=>D(ee,oe.target.value),onFocus:oe=>j(oe.target),className:"flex-1 px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.email&&ee===0?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Email address"}),p.emails.length>1&&t.jsx("button",{type:"button",onClick:()=>K(ee),className:"px-3 py-2.5 rounded-lg flex-shrink-0",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:18})})]},ee)),N.email&&t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-error)"},children:N.email}),t.jsxs("button",{type:"button",onClick:P,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-gold)"},children:[t.jsx(dn,{size:18}),"Add Another Email"]})]}),t.jsx("button",{type:"submit",className:"w-full py-3.5 rounded-lg text-sm font-medium mt-6",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})})}const Ph=["Fabricator","Contractor","Kitchen & Bath","Architect","Builder","Friends/Family","Other"];function Eh({onNext:s,onBack:d,initialData:i}){const[u,g]=x.useState(i?.referralSources?.map(C=>C.type)||[]),[p,v]=x.useState(i?.referralSources?.reduce((C,z)=>(C[z.type]={name:z.name||"",phone:z.phone||"",location:z.location||""},C),{})||{}),[N,k]=x.useState({}),[L,A]=x.useState(!1),F=C=>C.split(" ").map(z=>z.charAt(0).toUpperCase()+z.slice(1).toLowerCase()).join(" "),B=C=>{if(u.includes(C)){g(u.filter(X=>X!==C));const z={...p};delete z[C],v(z);const H={...N};delete H[C],k(H)}else g([...u,C]),A(!1)},re=(C,z,H)=>{if(v({...p,[C]:{...p[C],name:z==="name"?H:p[C]?.name||"",phone:z==="phone"?H:p[C]?.phone||"",location:z==="location"?H:p[C]?.location||""}}),N[C]){const X={...N};z==="name"&&delete X[C].name,z==="phone"&&(delete X[C].phone,delete X[C].phoneOrLocation),z==="location"&&delete X[C].phoneOrLocation,k(X)}},$=C=>{if(C.preventDefault(),u.length===0){A(!0);return}const z={};let H=!1;for(const q of u)if(z[q]={},p[q]?.name?.trim()||(z[q].name="Name is required",H=!0),q==="Fabricator"){const _=p[q]?.phone?.trim()||"",P=p[q]?.location?.trim();!_&&!P?(z[q].phoneOrLocation="Enter a phone number or location",H=!0):_&&!/^\d{10}$/.test(_)&&(z[q].phone="Phone number must be 10 digits",H=!0)}else{const _=p[q]?.phone?.trim()||"";_?/^\d{10}$/.test(_)||(z[q].phone="Phone number must be 10 digits",H=!0):(z[q].phone="Phone number is required",H=!0)}if(H){k(z);return}const X={referralSources:u.map(q=>({type:q,name:p[q]?.name,phone:p[q]?.phone,...q==="Fabricator"&&p[q]?.location?{location:p[q].location}:{}}))};s(X)},j={color:"#f87171",fontSize:"0.75rem",marginTop:"4px"},w="1px solid #f87171";return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 2: How Did You Hear About Us?"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg font-medium",style:{color:"var(--color-text-gray)"},children:"Select all that applies"}),t.jsxs("form",{onSubmit:$,className:"space-y-4 sm:space-y-6",children:[t.jsxs("div",{className:"space-y-4",children:[L&&t.jsx("p",{style:{...j,fontSize:"0.875rem"},children:"Please select at least one option"}),Ph.map(C=>t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-opacity-50 transition-colors",style:{backgroundColor:u.includes(C)?"var(--color-background)":"transparent",border:`1px solid ${u.includes(C)?"var(--color-gold)":"var(--color-border)"}`},children:[t.jsx("input",{type:"checkbox",checked:u.includes(C),onChange:()=>B(C),className:"w-5 h-5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:C})]}),u.includes(C)&&t.jsxs("div",{className:"ml-6 sm:ml-8 mt-3 space-y-3",children:[t.jsxs("div",{children:[t.jsx("input",{type:"text",value:p[C]?.name||"",onChange:z=>re(C,"name",F(z.target.value)),placeholder:C==="Fabricator"?"Fabricator's Shop Name (required)":"Name (required)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:N[C]?.name?w:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),N[C]?.name&&t.jsx("p",{style:j,children:N[C].name})]}),t.jsxs("div",{children:[t.jsx("input",{type:"tel",value:p[C]?.phone||"",onChange:z=>re(C,"phone",z.target.value),placeholder:C==="Fabricator"?"Phone (required if no location)":"Phone (required)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:N[C]?.phone||N[C]?.phoneOrLocation?w:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),N[C]?.phone&&t.jsx("p",{style:j,children:N[C].phone})]}),C==="Fabricator"&&t.jsxs("div",{children:[t.jsx("input",{type:"text",value:p[C]?.location||"",onChange:z=>re(C,"location",F(z.target.value)),placeholder:"Location (required if no phone)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:N[C]?.phoneOrLocation?w:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),N[C]?.phoneOrLocation&&t.jsx("p",{style:j,children:N[C].phoneOrLocation})]})]})]},C))]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue to Step 3"})]})]})]})})}function ud({onNext:s,onBack:d,initialData:i}){const[u,g]=x.useState(i?.adults||1),[p,v]=x.useState(i?.minors||0),N=k=>{k.preventDefault(),s({adults:u,minors:p})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-3 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Party Size"}),t.jsx("p",{className:"text-center mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please let us know who's visiting today"}),t.jsxs("form",{onSubmit:N,className:"space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx(zd,{size:28,style:{color:"var(--color-gold)"}}),t.jsx("h2",{className:"text-xl sm:text-2xl",style:{color:"var(--color-text-white)"},children:"How many adults are visiting?"})]}),t.jsxs("div",{className:"flex items-center justify-center gap-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("button",{type:"button",onClick:()=>g(Math.max(1,u-1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:u<=1?"var(--color-card)":"var(--color-gold)",color:u<=1?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:u<=1?"not-allowed":"pointer"},disabled:u<=1,children:"−"}),t.jsxs("div",{className:"text-center min-w-[120px]",children:[t.jsx("div",{className:"text-5xl font-light mb-2",style:{color:"var(--color-gold)"},children:u}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:u===1?"Adult":"Adults"})]}),t.jsx("button",{type:"button",onClick:()=>g(Math.min(10,u+1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:u>=10?"var(--color-card)":"var(--color-gold)",color:u>=10?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:u>=10?"not-allowed":"pointer"},disabled:u>=10,children:"+"})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx(Nh,{size:24,style:{color:"var(--color-gold)"}}),t.jsx("h2",{className:"text-xl sm:text-2xl",style:{color:"var(--color-text-white)"},children:"Number of minors"})]}),t.jsxs("div",{className:"flex items-center justify-center gap-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("button",{type:"button",onClick:()=>v(Math.max(0,p-1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:p<=0?"var(--color-card)":"var(--color-gold)",color:p<=0?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:p<=0?"not-allowed":"pointer"},disabled:p<=0,children:"−"}),t.jsxs("div",{className:"text-center min-w-[120px]",children:[t.jsx("div",{className:"text-5xl font-light mb-2",style:{color:"var(--color-gold)"},children:p}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:p===1?"Minor":"Minors"})]}),t.jsx("button",{type:"button",onClick:()=>v(Math.min(10,p+1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:p>=10?"var(--color-card)":"var(--color-gold)",color:p>=10?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:p>=10?"not-allowed":"pointer"},disabled:p>=10,children:"+"})]})]}),t.jsx("div",{className:"text-center p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)"},children:t.jsxs("p",{className:"text-base sm:text-lg",style:{color:"var(--color-text-white)"},children:["Total visitors: ",t.jsx("span",{style:{color:"var(--color-gold)",fontWeight:"600"},children:u+p})]})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function Th({isOpen:s,onConsent:d}){return s?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.75)",backdropFilter:"blur(4px)"},children:t.jsxs("div",{className:"w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)",padding:"32px"},children:[t.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-center mb-6",style:{color:"var(--color-gold)"},children:"Electronic Signature Consent"}),t.jsxs("div",{className:"space-y-5 mb-8",style:{color:"var(--color-text-white)",fontSize:"15px",lineHeight:"1.7"},children:[t.jsx("p",{children:"Before proceeding with the electronic waiver, please read and understand the following:"}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:'By clicking "I Consent" below, you agree to:'}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Sign this waiver electronically using your mouse, touchscreen, or trackpad"}),t.jsxs("li",{className:"pl-3",children:["Your electronic signature having the ",t.jsx("strong",{children:"same legal validity as a handwritten signature"})]}),t.jsx("li",{className:"pl-3",children:"This agreement being governed by New Jersey law and the federal Electronic Signatures in Global and National Commerce Act (ESIGN Act)"})]})]}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:"You have the right to:"}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Print or save this document for your records after signing"}),t.jsxs("li",{className:"pl-3",children:["Contact our office at ",t.jsx("strong",{children:"(908) 245-0888"})," or ",t.jsx("strong",{children:"info@reliancesurfaces.com"})," for assistance"]})]})]}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:"Technical Requirements:"}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Modern web browser (Chrome, Firefox, Safari, Edge, or similar)"}),t.jsx("li",{className:"pl-3",children:"Ability to view and save PDF documents"}),t.jsxs("li",{className:"pl-3",children:["For technical assistance, contact us at ",t.jsx("strong",{children:"(908) 245-0888"})]})]})]}),t.jsx("div",{className:"p-4 rounded-lg text-center font-medium",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)"},children:'By clicking "I Consent," you acknowledge that you have read and understand this disclosure, and you agree to conduct this transaction electronically.'})]}),t.jsx("div",{className:"flex justify-center mt-6",children:t.jsx("button",{onClick:d,className:"w-full sm:w-auto px-20 py-4 rounded-lg text-base font-medium transition-colors hover:opacity-90",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"I Consent to Electronic Signature"})}),t.jsx("p",{className:"mt-4 text-center text-xs",style:{color:"var(--color-text-gray)"},children:"This consent is required by federal ESIGN Act and New Jersey UETA to ensure you understand the legal implications of signing electronically."})]})}):null}const zh=`WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT

I am signing this Waiver and Release, Indemnity Agreement, and Informed Consent (hereinafter "Waiver & Release") in anticipation of my entering the warehouse of Reliance Granite and Marble Corporation ("Reliance" or "we" or "our" or "us") located at 50 Boright Avenue, Kenilworth, NJ 07033 ("Premises").

I understand that Reliance is located in a commercial area, and that the Premises contain a wholesale warehouse. Reliance is involved in receiving, handling, dispatching, storing, and selling natural stone tiles and slabs in various shapes, sizes, weights, colors, and thicknesses, which necessarily involves heavy traffic and activities in movement of workers, materials, material-handling equipment, including but not limited to, forklifts, overhead cranes, pallet lift jacks, pickups, trailers, flatbed trucks and other heavy and dangerous equipment. Stones are heavy and may have sharp or jagged surfaces and edges. The nature of this business and scope of operations involve use of tools, including but not limited to, crowbars, hammers, wood-cutting saws and steel cables. As a result, debris such as wood bark, nails, plastic sheets, broken boxes, and various additional sharp, heavy, slippery, etc. objects may lie on the floor of the Premises between cleaning cycles. Other equipment, such as steel ropes, cables, ladders, etc. may be leaning, hanging, and/or on the Premises floor in the normal course of work. As result of the foregoing, customers entering the Premises are required to wear hard hats and to be aware of and vigilant with respect to their surroundings. By signing below, I acknowledge that Reliance personnel provided me with a hard hat and gloves. I acknowledge that if I am not wearing a hard hat and/or gloves, it is because I have read the terms of this document and assumed all risks associated with entering the Premises without them, including but not limited to the following provisions, all of which apply regardless of whether I am wearing a hard hat, gloves, or other protective gear, garments, footwear, or equipment.

I understand that my presence on the Premises poses unique risks of injury, and even death, of which I am fully aware. I agree: (1) not to move around the premises alone/unattended and to ask for help/assistance with materials/products and moving about the Premises; (2) to be vigilant, careful, alert, and aware of ongoing activities and tripping hazards while walking in the Premises and between aisles; (3) to not use any mobile electronic devices in the Premises, including but not limited to talking on a mobile device, texting, emailing, internet searching, etc., as I understand that doing so will prevent me from being fully aware of my surroundings at all times; (4) that children under the age of 15 are strictly prohibited in the warehouse and will have to wait in the office; if such children are brought into the warehouse without our permission, the child(ren)'s parents, guardians, and/or caretakers are solely responsible for their safety; (5) to avoid moving into confined areas and areas with insufficient or dim lighting; (6) not to attempt to lift or move any stones, tiles or objects; (7) not to touch any machines, equipment, materials, etc. in the Premises; (7) to keep a safe distance of at least fifty (50) feet from any moving materials and equipment in the Premises; (8) to obey all rules and instructions explained to me by Reliance staff; and (9) to ask us questions and for any additional safety information.

My signature on this document evidences my understanding and agreement that any bodily injury, death, or loss of personal property, damages and expenses are my sole responsibility.

I further agree and understand that I have read this Waiver & Release carefully and I am aware that, by signing it, I will be waiving and releasing all claims for personal injuries and property damage that I sustain while on the Premises. I acknowledge that Reliance has made no warranty, express or implied, regarding the condition of the Premises or the materials or equipment thereat, or the physical or mental condition, competency or skills of any other person at the Premises or elsewhere.

I have had ample opportunity to review this document and ask questions about all of the risks presented herein. Notwithstanding these risks, both disclosed and undisclosed, I fully assume these risks and the inherently dangerous nature of the Premises, and it is with my full and complete knowledge of these risks that, to the full extent permitted by New Jersey law, I agree to hold harmless, release, defend, and indemnify Reliance and to waive and relinquish all claims, demands, costs, losses, expenses or compensation of whatever nature for any loss, damage or injuries to persons and property sustained by me, any children in my care, my heirs, personal representatives, successors, assigns, and all other persons I may have or which in the future may accrue to the above referenced individuals or entities against Reliance, its owners, officers, principals, agents, successors, assigns, heirs, employees, volunteers, and independent contractors.

This Waiver & Release covers any and all liability, claims, demands, causes of action, or damages of any kind related to, arising from, or in any way connected with or believed to be caused by: (a) Reliance or its employees; (b) any other individuals merely present at Premises; or (c) me at the Premises. This Waiver & Release covers any and all activities connected to or associated with my presence at the Premises, all without limitation. I further agree not to sue, claim against, attach the property of, or prosecute Reliance for any such injury, death, damages or losses, whether or not such injury or death was caused in whole or in part by my negligence, the negligence of Reliance, or the act or omission of any party whatsoever.

This contract shall be legally binding upon me, my spouse, my heirs, my estate, assigns, legal guardians, and my personal representatives. I agree that this Waiver & Release is intended to be as broad and inclusive as permitted by the laws of the State of New Jersey, and that if any portion of this Waiver & Release is held invalid, the other provisions shall continue in full legal force and effect. This Waiver & Release is in effect from the date of signing and shall remain in force as long as I am on the Premises, including any future visits to the Premises. The terms and provisions of this Waiver & Release and any dispute arising in connection with it shall be governed by and construed in accordance with New Jersey law.

I, as a parent/guardian/supervisor/caretaker of an individual 15 years of age or older, sign this Waiver & Release on behalf of said minor, understanding that this Waiver & Release shall be deemed binding to the fullest extent permitted by law with respect to said minor. The consent of one parent or legal guardian shall be deemed the consent of all persons legally responsible for this individual, even if only one such person signs this Waiver & Release.

I am not under the influence of any medication, alcohol, or controlled substance that would impair my judgment to enter into this Waiver & Release or comply with its terms while on the Premises.

Electronic signatures (e.g., via DocuSign, PDF, or their equivalents) of this document shall have the same force and effect as originals.

I HAVE READ THIS COVENANT NOT TO SUE, WAIVER, RELEASE, INFORMED CONSENT, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND HAVE SIGNED IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT, ASSURANCE OR GUARANTEE BEING MADE TO ME AND INTEND MY SIGNATURE TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF RELIANCE AND ALL PARTIES MENTIONED HEREIN TO THE GREATEST EXTENT ALLOWED BY LAW. THIS IS A RELEASE OF LIABILITY; DO NOT SIGN THIS DOCUMENT IF YOU DO NOT UNDERSTAND OR DO NOT AGREE WITH ITS TERMS.`;function pd({onNext:s,onBack:d,isMainVisitor:i=!0,initialData:u}){const[g,p]=x.useState(!u?.esignConsentTimestamp),[v,N]=x.useState(u?.esignConsentTimestamp),[k]=x.useState(()=>{if(u?.sessionId)return u.sessionId;let D=sessionStorage.getItem("checkInSessionId");return D||(D=crypto.randomUUID(),sessionStorage.setItem("checkInSessionId",D)),D}),[L]=x.useState(()=>u?.deviceInfo?u.deviceInfo:{userAgent:navigator.userAgent,screenWidth:window.screen.width,screenHeight:window.screen.height,deviceType:/Mobile|Tablet/i.test(navigator.userAgent)?"mobile":"desktop",timestamp:new Date().toISOString()}),[A,F]=x.useState(u?.agreed||!1),[B,re]=x.useState(u?.signature||""),[$,j]=x.useState(!1),[w,C]=x.useState(""),z=x.useRef(null);x.useEffect(()=>{const D=z.current;if(!D)return;const R=D.getContext("2d");if(R&&(D.width=D.offsetWidth*2,D.height=D.offsetHeight*2,R.scale(2,2),R.strokeStyle="#D4A736",R.lineWidth=2,R.lineCap="round",R.lineJoin="round",u?.signature)){const ee=new Image;ee.onload=()=>{R.drawImage(ee,0,0,D.offsetWidth,D.offsetHeight)},ee.src=u.signature}},[u]);const H=D=>{j(!0);const R=z.current;if(!R)return;const ee=R.getContext("2d");if(!ee)return;const oe=R.getBoundingClientRect(),ve=R.width/oe.width,Ce=R.height/oe.height,Te="touches"in D?D.touches[0].clientX:D.clientX,Me="touches"in D?D.touches[0].clientY:D.clientY,Se=(Te-oe.left)*ve/2,G=(Me-oe.top)*Ce/2;ee.beginPath(),ee.moveTo(Se,G)},X=D=>{if(!$)return;const R=z.current;if(!R)return;const ee=R.getContext("2d");if(!ee)return;const oe=R.getBoundingClientRect(),ve=R.width/oe.width,Ce=R.height/oe.height,Te="touches"in D?D.touches[0].clientX:D.clientX,Me="touches"in D?D.touches[0].clientY:D.clientY,Se=(Te-oe.left)*ve/2,G=(Me-oe.top)*Ce/2;ee.lineTo(Se,G),ee.stroke()},q=()=>{j(!1);const D=z.current;D&&re(D.toDataURL())},_=()=>{const D=z.current;if(!D)return;const R=D.getContext("2d");R&&(R.clearRect(0,0,D.width,D.height),re(""))},P=()=>{const D=new Date().toISOString();N(D),p(!1)},K=D=>{if(D.preventDefault(),C(""),!v){C("Electronic signature consent is required"),p(!0);return}if(!A){C("You must agree to the waiver to continue");return}if(!B){C("Please provide your signature");return}s({agreed:A,signature:B,esignConsentTimestamp:v,sessionId:k,deviceInfo:L})};return t.jsxs(t.Fragment,{children:[t.jsx(Th,{isOpen:g,onConsent:P}),t.jsx("div",{className:"min-h-screen flex items-start justify-center p-4 sm:p-6 pt-8 pb-10",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-3xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Waiver Agreement"}),t.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:i?"Please read and sign the waiver":"Please review and provide your signature"}),t.jsxs("form",{onSubmit:K,className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{className:"p-4 sm:p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",lineHeight:"1.6",fontSize:"13px"},children:t.jsx("div",{style:{whiteSpace:"pre-wrap"},children:zh})}),t.jsxs("label",{className:"flex items-start gap-3 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:A,onChange:D=>F(D.target.checked),className:"w-5 h-5 mt-0.5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:"I have read and agree to the terms of the waiver"})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex justify-between items-center mb-2",children:[t.jsx("label",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:"Signature *"}),t.jsx("button",{type:"button",onClick:_,className:"px-3 py-1 rounded text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),t.jsx("canvas",{ref:z,onMouseDown:H,onMouseMove:X,onMouseUp:q,onMouseLeave:q,onTouchStart:H,onTouchMove:X,onTouchEnd:q,className:"w-full rounded-lg cursor-crosshair touch-none",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",height:"220px"}}),t.jsx("p",{className:"mt-2 text-xs sm:text-sm",style:{color:"var(--color-text-gray)"},children:"Sign above with your mouse or finger"})]}),w&&t.jsx("p",{className:"text-center text-sm",style:{color:"var(--color-error)"},children:w}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})]})}function hd({onNext:s,onBack:d,visitorNumber:i,totalAdults:u,initialData:g,primaryVisitorName:p,takenNames:v}){const[N,k]=x.useState(""),[L,A]=x.useState(""),[F,B]=x.useState(""),[re,$]=x.useState(!1),j=x.useRef(null);x.useEffect(()=>{const _=j.current;if(!_)return;const P=_.getContext("2d");if(P)if(_.width=_.offsetWidth*2,_.height=_.offsetHeight*2,P.scale(2,2),P.strokeStyle="#D4A736",P.lineWidth=2,P.lineCap="round",P.lineJoin="round",P.clearRect(0,0,_.width,_.height),g){if(k(g.name),B(g.signature),g.signature){const K=new Image;K.onload=()=>{P.drawImage(K,0,0,_.offsetWidth,_.offsetHeight)},K.src=g.signature}}else k(""),B("")},[i,g]);const w=_=>_.split(" ").map(P=>P.charAt(0).toUpperCase()+P.slice(1).toLowerCase()).join(" "),C=_=>{$(!0);const P=j.current;if(!P)return;const K=P.getContext("2d");if(!K)return;const D=P.getBoundingClientRect(),R=P.width/D.width,ee=P.height/D.height,oe="touches"in _?_.touches[0].clientX:_.clientX,ve="touches"in _?_.touches[0].clientY:_.clientY,Ce=(oe-D.left)*R/2,Te=(ve-D.top)*ee/2;K.beginPath(),K.moveTo(Ce,Te)},z=_=>{if(!re)return;const P=j.current;if(!P)return;const K=P.getContext("2d");if(!K)return;const D=P.getBoundingClientRect(),R=P.width/D.width,ee=P.height/D.height,oe="touches"in _?_.touches[0].clientX:_.clientX,ve="touches"in _?_.touches[0].clientY:_.clientY,Ce=(oe-D.left)*R/2,Te=(ve-D.top)*ee/2;K.lineTo(Ce,Te),K.stroke()},H=()=>{$(!1);const _=j.current;_&&B(_.toDataURL())},X=()=>{const _=j.current;if(!_)return;const P=_.getContext("2d");P&&(P.clearRect(0,0,_.width,_.height),B(""))},q=_=>{if(_.preventDefault(),!N.trim()){alert("Please enter the visitor's name");return}const P=N.trim().toLowerCase();if([p,...v].map(D=>D.trim().toLowerCase()).includes(P)){A("It looks like you've entered your own name. Please enter the name of the additional visitor instead.");return}if(A(""),!F){alert("Please provide a signature");return}s({name:N.trim(),signature:F})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[t.jsx(kh,{size:32,style:{color:"var(--color-gold)"}}),t.jsxs("h1",{className:"text-center text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Additional Visitor ",i," of ",u]})]}),t.jsx("p",{className:"text-center mb-4 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please provide name and signature"}),t.jsx("div",{className:"flex items-start gap-3 mb-6 p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.15)",border:"1px solid var(--color-gold)"},children:t.jsxs("p",{className:"text-sm sm:text-base",style:{color:"var(--color-gold)"},children:["Please hand the device to ",t.jsxs("strong",{children:["Visitor ",i]})," to enter their information."]})}),t.jsxs("form",{onSubmit:q,className:"space-y-6",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:["Visitor ",i,"'s Full Name"]}),t.jsx("input",{type:"text",value:N,onChange:_=>{A(""),k(w(_.target.value))},placeholder:`Enter Visitor ${i}'s full name`,required:!0,className:"w-full px-4 py-3 rounded-lg text-base",style:{backgroundColor:"var(--color-background)",border:L?"1px solid #ef4444":"1px solid var(--color-border)",color:"var(--color-text-white)"}}),L&&t.jsx("p",{className:"text-sm mt-1",style:{color:"#ef4444"},children:L})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:"Signature"}),t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",height:"180px"},children:[t.jsx("canvas",{ref:j,className:"w-full h-full cursor-crosshair",style:{touchAction:"none"},onMouseDown:C,onMouseMove:z,onMouseUp:H,onMouseLeave:H,onTouchStart:C,onTouchMove:z,onTouchEnd:H,onTouchCancel:H}),!F&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",style:{color:"var(--color-text-gray)",fontSize:"16px"},children:"Sign here with your finger or mouse"})]}),t.jsx("button",{type:"button",onClick:X,className:"w-full py-2 rounded-lg text-sm transition-colors",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Clear Signature"})]}),t.jsx("div",{className:"text-center p-3 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)"},children:t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Collecting signatures: ",i," of ",u," adults"]})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function md({onNext:s,onBack:d,numberOfMinors:i}){const[u,g]=x.useState(Array(i).fill("")),p=k=>k.split(" ").map(L=>L.charAt(0).toUpperCase()+L.slice(1).toLowerCase()).join(" "),v=(k,L)=>{const A=[...u];A[k]=p(L),g(A)},N=k=>{k.preventDefault();for(let L=0;L<u.length;L++)if(!u[L].trim()){alert(`Please enter the name for Minor ${L+1}`);return}s(u.map(L=>L.trim()))};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[t.jsx(zd,{size:32,style:{color:"var(--color-gold)"}}),t.jsx("h1",{className:"text-center text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Minor Information"})]}),t.jsxs("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:["Please provide the name",i>1?"s":""," of ",i===1?"the":"all"," minor",i>1?"s":""," visiting"]}),t.jsxs("form",{onSubmit:N,className:"space-y-5",children:[t.jsx("div",{className:"space-y-4",children:u.map((k,L)=>t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:["Minor ",L+1," Full Name"]}),t.jsx("input",{type:"text",value:k,onChange:A=>v(L,A.target.value),placeholder:`Enter name of minor ${L+1}`,required:!0,className:"w-full px-4 py-3 rounded-lg text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]},L))}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid rgba(212, 167, 54, 0.3)"},children:t.jsx("p",{className:"text-sm text-center",style:{color:"var(--color-text-gray)"},children:"ℹ️ Signatures are not required for minors"})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Submit"})]})]})]})})}function Mh({customerName:s,hasMinors:d,onReturnHome:i}){const[u,g]=x.useState(15),p=x.useRef(i);return x.useEffect(()=>{p.current=i},[i]),x.useEffect(()=>{const v=setInterval(()=>{g(N=>N<=1?(clearInterval(v),setTimeout(()=>p.current(),0),0):N-1)},1e3);return()=>clearInterval(v)},[]),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("div",{className:"flex justify-center mb-6",children:t.jsx(xs,{size:80,style:{color:"var(--color-success)"}})}),t.jsxs("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:["Thank You, ",s,"!"]}),t.jsx("p",{className:"mb-6",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"Your check-in is complete. A member of our team will be with you shortly."}),d&&t.jsxs("div",{className:"flex items-start gap-3 mb-8 p-4 rounded-lg text-left",style:{backgroundColor:"rgba(234, 179, 8, 0.1)",border:"1px solid var(--color-gold)"},children:[t.jsx(xh,{size:24,style:{color:"var(--color-gold)",flexShrink:0,marginTop:"2px"}}),t.jsx("p",{style:{color:"var(--color-gold)",fontSize:"16px",fontWeight:500},children:"Caution: Children under 15 years old must stay in the waiting room."})]}),t.jsxs("p",{className:"mb-6",style:{color:"var(--color-text-gray)"},children:["Returning to home screen in ",t.jsx("span",{style:{color:"var(--color-gold)"},children:u})," seconds..."]}),t.jsx("button",{onClick:i,className:"px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return to Home"})]})})}function _h({onLogin:s}){const[d,i]=x.useState(""),[u,g]=x.useState(""),[p,v]=x.useState(!1),[N,k]=x.useState(""),[L,A]=x.useState(!1),F=async B=>{if(B.preventDefault(),k(""),!d.trim()){k("Username is required");return}if(!u.trim()){k("Password is required");return}if(d==="staff"&&u==="reliance")s(d,"staff");else if(d==="pricing"&&u==="reliance")s(d,"pricing");else if(d==="analysis"&&u==="reliance")s(d,"analysis");else if(d==="staff2"&&u==="reliance")s(d,"staff2");else if(["katia","sarah","diane","sneha","dheeraj","ben","om","guest"].includes(d.toLowerCase())&&u==="Reliance159")s(d.toLowerCase(),"staff2");else if(d==="rating"&&u==="Reliance33")s(d,"rating");else if(d===u&&d.replace(/\D/g,"").length===10){const re=d.replace(/\D/g,"");A(!0);try{const $=await fetch("/api/customer/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:re})}),j=await $.json();$.ok?s(d,"customer",{token:j.data.authToken,checkInId:j.data.checkInId,customerName:j.data.customerName}):k(j.error||"No check-in found for this phone number.")}catch{k("Login failed. Please check your connection and try again.")}finally{A(!1)}}else k("Invalid username or password")};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsxs("div",{className:"text-center mb-8",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-24 h-24 mx-auto mb-4 object-contain"}),t.jsx("h1",{style:{color:"var(--color-gold)"},children:"Reliance Surfaces"}),t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"Login"})]}),t.jsxs("form",{onSubmit:F,className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Username"}),t.jsx("input",{type:"text",value:d,onChange:B=>i(B.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter your username"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Password"}),t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:p?"text":"password",value:u,onChange:B=>g(B.target.value),className:"w-full px-4 py-3 rounded-lg pr-12",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter your password"}),t.jsx("button",{type:"button",onClick:()=>v(!p),className:"absolute right-3 top-1/2 -translate-y-1/2",style:{color:"var(--color-text-gray)"},children:p?t.jsx(nh,{size:20}):t.jsx(vs,{size:20})})]})]}),N&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239, 68, 68, 0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{className:"text-center",style:{color:"var(--color-error)"},children:N})}),t.jsx("button",{type:"submit",disabled:L,className:"w-full py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:L?.7:1},children:L?"Signing in…":"Sign In"})]})]})})}function fd(s,d){const[i,u]=x.useState(s);return x.useEffect(()=>{const g=setTimeout(()=>u(s),d);return()=>clearTimeout(g)},[s,d]),i}function lr(s,d){d===void 0&&(d={});var i=d.insertAt;if(s&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css",i==="top"&&u.firstChild?u.insertBefore(g,u.firstChild):u.appendChild(g),g.styleSheet?g.styleSheet.cssText=s:g.appendChild(document.createTextNode(s))}}lr(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var it=function(){return it=Object.assign||function(s){for(var d,i=1,u=arguments.length;i<u;i++)for(var g in d=arguments[i])Object.prototype.hasOwnProperty.call(d,g)&&(s[g]=d[g]);return s},it.apply(this,arguments)};function wl(s){return wl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},wl(s)}var Oh=/^\s+/,Dh=/\s+$/;function ge(s,d){if(d=d||{},(s=s||"")instanceof ge)return s;if(!(this instanceof ge))return new ge(s,d);var i=(function(u){var g={r:0,g:0,b:0},p=1,v=null,N=null,k=null,L=!1,A=!1;typeof u=="string"&&(u=(function($){$=$.replace(Oh,"").replace(Dh,"").toLowerCase();var j,w=!1;if(fs[$])$=fs[$],w=!0;else if($=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(j=rt.rgb.exec($))?{r:j[1],g:j[2],b:j[3]}:(j=rt.rgba.exec($))?{r:j[1],g:j[2],b:j[3],a:j[4]}:(j=rt.hsl.exec($))?{h:j[1],s:j[2],l:j[3]}:(j=rt.hsla.exec($))?{h:j[1],s:j[2],l:j[3],a:j[4]}:(j=rt.hsv.exec($))?{h:j[1],s:j[2],v:j[3]}:(j=rt.hsva.exec($))?{h:j[1],s:j[2],v:j[3],a:j[4]}:(j=rt.hex8.exec($))?{r:Fr(j[1]),g:Fr(j[2]),b:Fr(j[3]),a:kd(j[4]),format:w?"name":"hex8"}:(j=rt.hex6.exec($))?{r:Fr(j[1]),g:Fr(j[2]),b:Fr(j[3]),format:w?"name":"hex"}:(j=rt.hex4.exec($))?{r:Fr(j[1]+""+j[1]),g:Fr(j[2]+""+j[2]),b:Fr(j[3]+""+j[3]),a:kd(j[4]+""+j[4]),format:w?"name":"hex8"}:(j=rt.hex3.exec($))?{r:Fr(j[1]+""+j[1]),g:Fr(j[2]+""+j[2]),b:Fr(j[3]+""+j[3]),format:w?"name":"hex"}:!1})(u)),wl(u)=="object"&&(vt(u.r)&&vt(u.g)&&vt(u.b)?(F=u.r,B=u.g,re=u.b,g={r:255*Ye(F,255),g:255*Ye(B,255),b:255*Ye(re,255)},L=!0,A=String(u.r).substr(-1)==="%"?"prgb":"rgb"):vt(u.h)&&vt(u.s)&&vt(u.v)?(v=sn(u.s),N=sn(u.v),g=(function($,j,w){$=6*Ye($,360),j=Ye(j,100),w=Ye(w,100);var C=Math.floor($),z=$-C,H=w*(1-j),X=w*(1-z*j),q=w*(1-(1-z)*j),_=C%6,P=[w,X,H,H,q,w][_],K=[q,w,w,X,H,H][_],D=[H,H,q,w,w,X][_];return{r:255*P,g:255*K,b:255*D}})(u.h,v,N),L=!0,A="hsv"):vt(u.h)&&vt(u.s)&&vt(u.l)&&(v=sn(u.s),k=sn(u.l),g=(function($,j,w){var C,z,H;function X(P,K,D){return D<0&&(D+=1),D>1&&(D-=1),D<1/6?P+6*(K-P)*D:D<.5?K:D<2/3?P+(K-P)*(2/3-D)*6:P}if($=Ye($,360),j=Ye(j,100),w=Ye(w,100),j===0)C=z=H=w;else{var q=w<.5?w*(1+j):w+j-w*j,_=2*w-q;C=X(_,q,$+1/3),z=X(_,q,$),H=X(_,q,$-1/3)}return{r:255*C,g:255*z,b:255*H}})(u.h,v,k),L=!0,A="hsl"),u.hasOwnProperty("a")&&(p=u.a));var F,B,re;return p=Md(p),{ok:L,format:u.format||A,r:Math.min(255,Math.max(g.r,0)),g:Math.min(255,Math.max(g.g,0)),b:Math.min(255,Math.max(g.b,0)),a:p}})(s);this._originalInput=s,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=d.format||i.format,this._gradientType=d.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function gd(s,d,i){s=Ye(s,255),d=Ye(d,255),i=Ye(i,255);var u,g,p=Math.max(s,d,i),v=Math.min(s,d,i),N=(p+v)/2;if(p==v)u=g=0;else{var k=p-v;switch(g=N>.5?k/(2-p-v):k/(p+v),p){case s:u=(d-i)/k+(d<i?6:0);break;case d:u=(i-s)/k+2;break;case i:u=(s-d)/k+4}u/=6}return{h:u,s:g,l:N}}function xd(s,d,i){s=Ye(s,255),d=Ye(d,255),i=Ye(i,255);var u,g,p=Math.max(s,d,i),v=Math.min(s,d,i),N=p,k=p-v;if(g=p===0?0:k/p,p==v)u=0;else{switch(p){case s:u=(d-i)/k+(d<i?6:0);break;case d:u=(i-s)/k+2;break;case i:u=(s-d)/k+4}u/=6}return{h:u,s:g,v:N}}function vd(s,d,i,u){var g=[tt(Math.round(s).toString(16)),tt(Math.round(d).toString(16)),tt(Math.round(i).toString(16))];return u&&g[0].charAt(0)==g[0].charAt(1)&&g[1].charAt(0)==g[1].charAt(1)&&g[2].charAt(0)==g[2].charAt(1)?g[0].charAt(0)+g[1].charAt(0)+g[2].charAt(0):g.join("")}function yd(s,d,i,u){return[tt(_d(u)),tt(Math.round(s).toString(16)),tt(Math.round(d).toString(16)),tt(Math.round(i).toString(16))].join("")}function Rh(s,d){d=d===0?0:d||10;var i=ge(s).toHsl();return i.s-=d/100,i.s=Cl(i.s),ge(i)}function Ah(s,d){d=d===0?0:d||10;var i=ge(s).toHsl();return i.s+=d/100,i.s=Cl(i.s),ge(i)}function Fh(s){return ge(s).desaturate(100)}function Ih(s,d){d=d===0?0:d||10;var i=ge(s).toHsl();return i.l+=d/100,i.l=Cl(i.l),ge(i)}function Lh(s,d){d=d===0?0:d||10;var i=ge(s).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-d/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-d/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-d/100*255))),ge(i)}function Hh(s,d){d=d===0?0:d||10;var i=ge(s).toHsl();return i.l-=d/100,i.l=Cl(i.l),ge(i)}function Uh(s,d){var i=ge(s).toHsl(),u=(i.h+d)%360;return i.h=u<0?360+u:u,ge(i)}function Bh(s){var d=ge(s).toHsl();return d.h=(d.h+180)%360,ge(d)}function bd(s,d){if(isNaN(d)||d<=0)throw new Error("Argument to polyad must be a positive number");for(var i=ge(s).toHsl(),u=[ge(s)],g=360/d,p=1;p<d;p++)u.push(ge({h:(i.h+p*g)%360,s:i.s,l:i.l}));return u}function Wh(s){var d=ge(s).toHsl(),i=d.h;return[ge(s),ge({h:(i+72)%360,s:d.s,l:d.l}),ge({h:(i+216)%360,s:d.s,l:d.l})]}function $h(s,d,i){d=d||6,i=i||30;var u=ge(s).toHsl(),g=360/i,p=[ge(s)];for(u.h=(u.h-(g*d>>1)+720)%360;--d;)u.h=(u.h+g)%360,p.push(ge(u));return p}function qh(s,d){d=d||6;for(var i=ge(s).toHsv(),u=i.h,g=i.s,p=i.v,v=[],N=1/d;d--;)v.push(ge({h:u,s:g,v:p})),p=(p+N)%1;return v}ge.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var s=this.toRgb();return(299*s.r+587*s.g+114*s.b)/1e3},getLuminance:function(){var s,d,i,u=this.toRgb();return s=u.r/255,d=u.g/255,i=u.b/255,.2126*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.7152*(d<=.03928?d/12.92:Math.pow((d+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(s){return this._a=Md(s),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var s=xd(this._r,this._g,this._b);return{h:360*s.h,s:s.s,v:s.v,a:this._a}},toHsvString:function(){var s=xd(this._r,this._g,this._b),d=Math.round(360*s.h),i=Math.round(100*s.s),u=Math.round(100*s.v);return this._a==1?"hsv("+d+", "+i+"%, "+u+"%)":"hsva("+d+", "+i+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var s=gd(this._r,this._g,this._b);return{h:360*s.h,s:s.s,l:s.l,a:this._a}},toHslString:function(){var s=gd(this._r,this._g,this._b),d=Math.round(360*s.h),i=Math.round(100*s.s),u=Math.round(100*s.l);return this._a==1?"hsl("+d+", "+i+"%, "+u+"%)":"hsla("+d+", "+i+"%, "+u+"%, "+this._roundA+")"},toHex:function(s){return vd(this._r,this._g,this._b,s)},toHexString:function(s){return"#"+this.toHex(s)},toHex8:function(s){return(function(d,i,u,g,p){var v=[tt(Math.round(d).toString(16)),tt(Math.round(i).toString(16)),tt(Math.round(u).toString(16)),tt(_d(g))];return p&&v[0].charAt(0)==v[0].charAt(1)&&v[1].charAt(0)==v[1].charAt(1)&&v[2].charAt(0)==v[2].charAt(1)&&v[3].charAt(0)==v[3].charAt(1)?v[0].charAt(0)+v[1].charAt(0)+v[2].charAt(0)+v[3].charAt(0):v.join("")})(this._r,this._g,this._b,this._a,s)},toHex8String:function(s){return"#"+this.toHex8(s)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ye(this._r,255))+"%",g:Math.round(100*Ye(this._g,255))+"%",b:Math.round(100*Ye(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ye(this._r,255))+"%, "+Math.round(100*Ye(this._g,255))+"%, "+Math.round(100*Ye(this._b,255))+"%)":"rgba("+Math.round(100*Ye(this._r,255))+"%, "+Math.round(100*Ye(this._g,255))+"%, "+Math.round(100*Ye(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Yh[vd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(s){var d="#"+yd(this._r,this._g,this._b,this._a),i=d,u=this._gradientType?"GradientType = 1, ":"";if(s){var g=ge(s);i="#"+yd(g._r,g._g,g._b,g._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+d+",endColorstr="+i+")"},toString:function(s){var d=!!s;s=s||this._format;var i=!1,u=this._a<1&&this._a>=0;return d||!u||s!=="hex"&&s!=="hex6"&&s!=="hex3"&&s!=="hex4"&&s!=="hex8"&&s!=="name"?(s==="rgb"&&(i=this.toRgbString()),s==="prgb"&&(i=this.toPercentageRgbString()),s!=="hex"&&s!=="hex6"||(i=this.toHexString()),s==="hex3"&&(i=this.toHexString(!0)),s==="hex4"&&(i=this.toHex8String(!0)),s==="hex8"&&(i=this.toHex8String()),s==="name"&&(i=this.toName()),s==="hsl"&&(i=this.toHslString()),s==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):s==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ge(this.toString())},_applyModification:function(s,d){var i=s.apply(null,[this].concat([].slice.call(d)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(Ih,arguments)},brighten:function(){return this._applyModification(Lh,arguments)},darken:function(){return this._applyModification(Hh,arguments)},desaturate:function(){return this._applyModification(Rh,arguments)},saturate:function(){return this._applyModification(Ah,arguments)},greyscale:function(){return this._applyModification(Fh,arguments)},spin:function(){return this._applyModification(Uh,arguments)},_applyCombination:function(s,d){return s.apply(null,[this].concat([].slice.call(d)))},analogous:function(){return this._applyCombination($h,arguments)},complement:function(){return this._applyCombination(Bh,arguments)},monochromatic:function(){return this._applyCombination(qh,arguments)},splitcomplement:function(){return this._applyCombination(Wh,arguments)},triad:function(){return this._applyCombination(bd,[3])},tetrad:function(){return this._applyCombination(bd,[4])}},ge.fromRatio=function(s,d){if(wl(s)=="object"){var i={};for(var u in s)s.hasOwnProperty(u)&&(i[u]=u==="a"?s[u]:sn(s[u]));s=i}return ge(s,d)},ge.equals=function(s,d){return!(!s||!d)&&ge(s).toRgbString()==ge(d).toRgbString()},ge.random=function(){return ge.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ge.mix=function(s,d,i){i=i===0?0:i||50;var u=ge(s).toRgb(),g=ge(d).toRgb(),p=i/100;return ge({r:(g.r-u.r)*p+u.r,g:(g.g-u.g)*p+u.g,b:(g.b-u.b)*p+u.b,a:(g.a-u.a)*p+u.a})},ge.readability=function(s,d){var i=ge(s),u=ge(d);return(Math.max(i.getLuminance(),u.getLuminance())+.05)/(Math.min(i.getLuminance(),u.getLuminance())+.05)},ge.isReadable=function(s,d,i){var u,g,p=ge.readability(s,d);switch(g=!1,(u=(function(v){var N,k;return N=((v=v||{level:"AA",size:"small"}).level||"AA").toUpperCase(),k=(v.size||"small").toLowerCase(),N!=="AA"&&N!=="AAA"&&(N="AA"),k!=="small"&&k!=="large"&&(k="small"),{level:N,size:k}})(i)).level+u.size){case"AAsmall":case"AAAlarge":g=p>=4.5;break;case"AAlarge":g=p>=3;break;case"AAAsmall":g=p>=7}return g},ge.mostReadable=function(s,d,i){var u,g,p,v,N=null,k=0;g=(i=i||{}).includeFallbackColors,p=i.level,v=i.size;for(var L=0;L<d.length;L++)(u=ge.readability(s,d[L]))>k&&(k=u,N=ge(d[L]));return ge.isReadable(s,N,{level:p,size:v})||!g?N:(i.includeFallbackColors=!1,ge.mostReadable(s,["#fff","#000"],i))};var fs=ge.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Yh=ge.hexNames=(function(s){var d={};for(var i in s)s.hasOwnProperty(i)&&(d[s[i]]=i);return d})(fs);function Md(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function Ye(s,d){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(s)&&(s="100%");var i=(function(u){return typeof u=="string"&&u.indexOf("%")!=-1})(s);return s=Math.min(d,Math.max(0,parseFloat(s))),i&&(s=parseInt(s*d,10)/100),Math.abs(s-d)<1e-6?1:s%d/parseFloat(d)}function Cl(s){return Math.min(1,Math.max(0,s))}function Fr(s){return parseInt(s,16)}function tt(s){return s.length==1?"0"+s:""+s}function sn(s){return s<=1&&(s=100*s+"%"),s}function _d(s){return Math.round(255*parseFloat(s)).toString(16)}function kd(s){return Fr(s)/255}var It,kl,jl,rt=(kl="[\\s|\\(]+("+(It="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+It+")[,|\\s]+("+It+")\\s*\\)?",jl="[\\s|\\(]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")\\s*\\)?",{CSS_UNIT:new RegExp(It),rgb:new RegExp("rgb"+kl),rgba:new RegExp("rgba"+jl),hsl:new RegExp("hsl"+kl),hsla:new RegExp("hsla"+jl),hsv:new RegExp("hsv"+kl),hsva:new RegExp("hsva"+jl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function vt(s){return!!rt.CSS_UNIT.exec(s)}var Vh=function(s,d){var i=(typeof s=="string"?parseInt(s):s)||0;if(i>=-5&&i<=5){var u=i,g=parseFloat(d),p=g+u*(g/5)*-1;return(p==0||p<=Number.EPSILON)&&(p=.1),{animationPeriod:p+"s"}}return{animationPeriod:d}},Qh=function(s,d){var i=s||{},u="";switch(d){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var g={};if(i.fontSize){var p=i.fontSize;g=(function(v,N){var k={};for(var L in v)Object.prototype.hasOwnProperty.call(v,L)&&N.indexOf(L)<0&&(k[L]=v[L]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function"){var A=0;for(L=Object.getOwnPropertySymbols(v);A<L.length;A++)N.indexOf(L[A])<0&&Object.prototype.propertyIsEnumerable.call(v,L[A])&&(k[L[A]]=v[L[A]])}return k})(i,["fontSize"]),u=p}return{fontSize:u,styles:g}},Xh={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Kh=function(s){var d=s.className,i=s.text,u=s.textColor,g=s.staticText,p=s.style;return i?Yr.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(d||"").trim(),style:it(it(it({},g&&Xh),u&&{color:u,mixBlendMode:"unset"}),p&&p)},typeof i=="string"&&i.length?i:"loading"):null},Od="rgb(50, 205, 50)";function Gh(s,d){if(d===void 0&&(d=0),s.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function u(g,p){return p===void 0&&(p=0),i.push.apply(i,g),i.length<p&&u(i,p),i.slice(0,p)})(s,d)}lr(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ge(Od).toRgb();Array.from({length:4},(function(s,d){return"--atom-phase".concat(d+1,"-rgb")}));lr(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--commet-phase".concat(d+1,"-color")}));lr(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--OP-annulus-phase".concat(d+1,"-color")}));function ms(s){return s&&s.Math===Math&&s}lr(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);ms(typeof window=="object"&&window)||ms(typeof self=="object"&&self)||ms(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(s,d){return"--OP-dotted-phase".concat(d+1,"-color")}));lr(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--OP-spokes-phase".concat(d+1,"-color")}));lr(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},(function(s,d){return"--OP-annulus-dual-sectors-phase".concat(d+1,"-color")}));lr(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return["--OP-annulus-track-phase".concat(d+1,"-color"),"--OP-annulus-sector-phase".concat(d+1,"-color")]}));lr(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--four-square-phase".concat(d+1,"-color")}));lr(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--mosaic-phase".concat(d+1,"-color")}));lr(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--riple-phase".concat(d+1,"-color")}));lr(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--TD-pulsate-phase".concat(d+1,"-color")}));lr(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--TD-brick-stack-phase".concat(d+1,"-color")}));lr(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--TD-bob-phase".concat(d+1,"-color")}));lr(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--TD-bounce-phase".concat(d+1,"-color")}));lr(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--shape-phase".concat(d+1,"-color")}));lr(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--trophySpin-phase".concat(d+1,"-color")}));lr(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);var jo=Array.from({length:4},(function(s,d){return"--slab-phase".concat(d+1,"-color")})),Jh=function(s){var d,i=Qh(s?.style,s?.size),u=i.styles,g=i.fontSize,p=s?.easing,v=Vh(s?.speedPlus,"3s").animationPeriod,N=(function(k){var L={};if(k instanceof Array){for(var A=Gh(k,jo.length),F=0;F<A.length&&!(F>=4);F++)L[jo[F]]=A[F];return L}try{if(typeof k!="string")throw new Error("Color String expected");for(var B=0;B<jo.length;B++)L[jo[B]]=k}catch(re){for(re instanceof Error?console.warn("[".concat(re.message,']: Received "').concat(typeof k,'" instead with value, ').concat(JSON.stringify(k))):console.warn("".concat(JSON.stringify(k)," received in <Slab /> indicator cannot be processed. Using default instead!")),B=0;B<jo.length;B++)L[jo[B]]=Od}return L})((d=s?.color)!==null&&d!==void 0?d:"");return Yr.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",style:it(it(it(it(it({},g&&{fontSize:g}),v&&{"--rli-animation-duration-unitless":parseFloat(v)}),p&&{"--rli-animation-function":p}),N),u),role:"status","aria-live":"polite","aria-label":"Loading"},Yr.createElement("span",{className:"rli-d-i-b slab-indicator"},Yr.createElement("span",{className:"slabs-wrapper"},Yr.createElement("span",{className:"slab"}),Yr.createElement("span",{className:"slab"}),Yr.createElement("span",{className:"slab"}),Yr.createElement("span",{className:"slab"}))),Yr.createElement(Kh,{staticText:!0,text:s?.text,textColor:s?.textColor}))};lr(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},(function(s,d){return"--life-line-phase".concat(d+1,"-color")}));function cn({color:s="#ccb331",size:d="medium",text:i,fullScreen:u=!1}){const g=t.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[t.jsx(Jh,{color:s,size:d}),i&&t.jsx("p",{className:"text-sm animate-pulse",style:{color:"var(--color-text-gray, #aaa)"},children:i})]});return u?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.7)"},children:g}):t.jsx("div",{className:"flex items-center justify-center p-6",children:g})}function Zh({customer:s,onClose:d,onSubmit:i,onMarkAsHelped:u,onRevisit:g,staffUsername:p,isViewOnly:v,allCheckIns:N}){const[k,L]=x.useState(s.draft?.step||1),[A,F]=x.useState(s.draft?.editedCustomerData||{}),[B,re]=x.useState(()=>{const m=s.draft?.editedCustomerData?.firstName??s.firstName,W=s.draft?.editedCustomerData?.lastName??s.lastName;return[m,W].filter(Boolean).join(" ")}),$=m=>{re(m);const W=m.trim().split(/\s+/).filter(Boolean);F(me=>({...me,firstName:W[0]||m.trim(),lastName:W.slice(1).join(" ")}))},[j,w]=x.useState(s.draft?.selectedFabricator),[C,z]=x.useState(s.draft?.materials||[]),[H,X]=x.useState(s.currentlyHelpedBy||s.draft?.helpedBy||p),[q,_]=x.useState(s.draft?.selectionSheetNumber||""),[P,K]=x.useState(s.draft?.selectedFabricator?.companyName||""),[D,R]=x.useState(""),[ee,oe]=x.useState(!1),[ve,Ce]=x.useState(!1),Te=fd(P,300),Me=fd(D,300),[Se,G]=x.useState([]),[ie,te]=x.useState([]),[h,I]=x.useState(!1),[ye,fe]=x.useState(!1),[U,J]=x.useState(!1),[ce,ke]=x.useState([]),[be,_e]=x.useState(!1),[ar,Ir]=x.useState(!1),[jr,$e]=x.useState(null);x.useEffect(()=>{s.currentlyHelpedBy&&X(s.currentlyHelpedBy)},[s.currentlyHelpedBy]),x.useEffect(()=>{const m=s.phones?.[0];m&&(Ir(!0),fetch(`/api/images/customer/${encodeURIComponent(m)}`).then(W=>W.json()).then(W=>{W.success&&Array.isArray(W.data)&&ke(W.data.filter(me=>me.images.length>0))}).catch(()=>{}).finally(()=>Ir(!1)))},[s.phones]);const Nr=()=>({...s,...A});x.useEffect(()=>{if(Te.length<3){G([]);return}I(!0),fetch(`/api/accounts/search?q=${encodeURIComponent(Te)}`).then(m=>m.json()).then(m=>G(m.success?m.data:[])).catch(()=>G([])).finally(()=>I(!1))},[Te]),x.useEffect(()=>{if(Me.length<3){te([]);return}fe(!0),fetch(`/api/materials/search?q=${encodeURIComponent(Me)}`).then(m=>m.json()).then(m=>te(m.success?m.data:[])).catch(()=>te([])).finally(()=>fe(!1))},[Me]);const wr=()=>{if(s.status==="waiting"){const m={step:k,editedCustomerData:A,selectedFabricator:j,materials:C,helpedBy:H,selectionSheetNumber:q,isHold:C.some(W=>W.hold),isRevisit:s.draft?.isRevisit,previousMaterialsCount:s.draft?.previousMaterialsCount};i(s.id,m),fetch(`/api/check-ins/${s.id}/draft`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({draftStep:k,materials:C,fabricator:j||null,helpedBy:H,selectionSheetNumber:q})}).catch(W=>console.warn("Draft save failed:",W))}d()},Lr=m=>{w(m),K(m.companyName),oe(!1),m.salesPerson&&F(W=>({...W,salesPerson:m.salesPerson}))},Ie=m=>{K(m),oe(!0),j&&m.toLowerCase()!==j.companyName.toLowerCase()&&!j.companyName.toLowerCase().startsWith(m.toLowerCase())&&m.length>=3&&w(void 0)},Je=m=>{const W={id:Date.now().toString(),name:m,soldAs:"",size:{l:"",h:""},lot:"",location:"",quantity:1,finish:"Polished",hold:!1,slabNumbers:""};z([...C,W]),R(""),Ce(!1)},Le=(m,W,me)=>{z(C.map(he=>he.id===m?{...he,[W]:me}:he))},hr=m=>{z(C.filter(W=>W.id!==m))},vr=async()=>{if(k!==3||U)return;J(!0);const m={step:3,editedCustomerData:A,selectedFabricator:j,materials:C,helpedBy:H,selectionSheetNumber:q,isHold:C.some(W=>W.hold),isRevisit:s.draft?.isRevisit,previousMaterialsCount:s.draft?.previousMaterialsCount};try{await fetch(`/api/check-ins/${s.id}/complete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({materials:C,selectedFabricator:j,helpedBy:H,selectionSheetNumber:q})})}catch(W){console.error("Complete API error:",W)}J(!1),i(s.id,m),d()},yr=()=>{if(!s.draft?.selectionSheetNumber)return!1;const m=N.filter(de=>de.firstName===s.firstName&&de.lastName===s.lastName&&de.status==="helped"&&de.draft?.selectionSheetNumber),he=s.draft.selectionSheetNumber.split(".")[0],Ke=m.filter(de=>(de.draft?.selectionSheetNumber||"").startsWith(he));return Ke.sort((de,De)=>{const xe=de.draft?.selectionSheetNumber||"",O=De.draft?.selectionSheetNumber||"",ae=xe.split("."),Ee=O.split("."),He=parseInt(ae[0])||0,tr=parseInt(Ee[0])||0;if(He!==tr)return He-tr;const dr=ae.length>1?parseInt(ae[1]):0,_r=Ee.length>1?parseInt(Ee[1]):0;return dr-_r}),Ke[Ke.length-1]?.id===s.id},Pe=Nr();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-6 z-50",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsxs("div",{className:"flex justify-between items-start mb-6",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{color:"var(--color-gold)"},children:[Pe.firstName,Pe.lastName].filter(Boolean).join(" ")}),t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:["Step ",k," of 3"]})]}),t.jsx("button",{onClick:wr,className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsx("div",{className:"flex gap-2 mb-8",children:[1,2,3].map(m=>t.jsx("div",{className:"flex-1 h-2 rounded-full",style:{backgroundColor:m<=k?"var(--color-gold)":"var(--color-border)"}},m))}),k===1&&t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Customer Details"}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),t.jsx("input",{type:"text",value:B,onChange:m=>$(m.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Street Address"}),t.jsx("input",{type:"text",value:A.street??Pe.street,onChange:m=>F({...A,street:m.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:A.suiteUnit??Pe.suiteUnit,onChange:m=>F({...A,suiteUnit:m.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[t.jsxs("div",{className:"col-span-2",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"City"}),t.jsx("input",{type:"text",value:A.city??Pe.city,onChange:m=>F({...A,city:m.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"State"}),t.jsx("input",{type:"text",value:A.state??Pe.state,onChange:m=>F({...A,state:m.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"ZIP"}),t.jsx("input",{type:"text",value:A.zip??Pe.zip,onChange:m=>F({...A,zip:m.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Country"}),t.jsxs("select",{value:A.country??Pe.country,onChange:m=>F({...A,country:m.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Phone Numbers"}),(A.phones??Pe.phones).map((m,W)=>t.jsx("input",{type:"tel",value:m,onChange:me=>{const he=[...A.phones??Pe.phones];he[W]=me.target.value,F({...A,phones:he})},className:"w-full px-4 py-3 rounded-lg mb-2",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}},W))]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Email Addresses"}),(A.emails??Pe.emails).map((m,W)=>t.jsx("input",{type:"email",value:m,onChange:me=>{const he=[...A.emails??Pe.emails];he[W]=me.target.value,F({...A,emails:he})},className:"w-full px-4 py-3 rounded-lg mb-2",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}},W))]}),Pe.visitors&&Pe.visitors.length>0?t.jsxs("div",{children:[t.jsxs("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:["All Visitors (",Pe.visitors.length,")"]}),t.jsx("div",{className:"space-y-4",children:Pe.visitors.filter(m=>m&&m.name).map((m,W)=>(console.log(`Visitor ${W}:`,{name:m.name,hasSignature:!!m.signature,signatureLength:m.signature?.length,isMinor:m.isMinor,isMain:m.isMain}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:m.isMain?"2px solid var(--color-gold)":"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"15px",fontWeight:"500"},children:m.name}),m.isMain&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:"Main"}),m.isMinor&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",color:"var(--color-text-gray)"},children:"Minor"})]}),m.signature&&m.signature.length>0?t.jsx("div",{className:"rounded",style:{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"8px"},children:t.jsx("img",{src:m.signature,alt:`${m.name}'s signature`,className:"w-full rounded",style:{maxHeight:"80px",objectFit:"contain"}})}):m.isMinor?t.jsx("div",{className:"rounded flex items-center justify-center",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",padding:"12px",minHeight:"80px"},children:t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No signature (Minor)"})}):null]},W)))})]}):t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Waiver Signature"}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)"},children:t.jsx("img",{src:Pe.signature,alt:"Signature",className:"w-full rounded",style:{maxHeight:"150px",objectFit:"contain"}})})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[t.jsxs("button",{onClick:()=>_e(m=>!m),className:"w-full flex items-center justify-between px-4 py-3",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-white)",border:"none",cursor:"pointer"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ys,{size:16,style:{color:"var(--color-gold)"}}),t.jsx("span",{children:"Uploaded Images"}),!ar&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212,167,54,0.15)",color:"var(--color-gold)"},children:ce.reduce((m,W)=>m+W.images.length,0)})]}),be?t.jsx(Cd,{size:16,style:{color:"var(--color-text-gray)"}}):t.jsx(wd,{size:16,style:{color:"var(--color-text-gray)"}})]}),be&&t.jsx("div",{className:"p-4",style:{borderTop:"1px solid var(--color-border)"},children:ar?t.jsx(cn,{size:"small",color:"#ccb331"}):ce.length===0?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No images uploaded."}):t.jsx("div",{className:"space-y-5",children:ce.map(m=>t.jsxs("div",{children:[ce.length>1&&t.jsxs("p",{className:"mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:["Visit: ",new Date(m.checkInTime).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),t.jsx("div",{className:"grid gap-3",style:{gridTemplateColumns:"repeat(auto-fill, minmax(110px, 1fr))"},children:m.images.map(W=>t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{aspectRatio:"1",border:"1px solid var(--color-border)",cursor:"pointer"},onClick:()=>$e(W.image_url),children:[t.jsx("img",{src:W.image_url,alt:"Material",className:"w-full h-full object-cover"}),t.jsxs("div",{className:"absolute bottom-0 right-0 px-1.5 py-0.5 text-xs font-semibold rounded-tl-lg",style:{backgroundColor:"rgba(0,0,0,0.75)",color:"var(--color-gold)"},children:["×",W.quantity]})]},W.id))})]},m.checkInId))})})]})]}),k===2&&t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Referral Information"}),t.jsx("div",{className:"mt-4 p-4 rounded-lg",style:{backgroundColor:"var(--color-background)"},children:Pe.referralSources&&Pe.referralSources.length>0?Pe.referralSources.map((m,W)=>t.jsxs("div",{className:"mb-3",children:[t.jsxs("p",{style:{color:"var(--color-text-white)"},children:[t.jsx("span",{style:{color:"var(--color-gold)"},children:"•"})," ",m.type]}),m.name&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Name: ",m.name]}),m.phone&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Phone: ",m.phone]}),m.location&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Location: ",m.location]})]},W)):t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No referral information provided"})})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)",marginBottom:"16px"},children:"Fabricator Selection *"}),t.jsxs("div",{className:"relative",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Search by Company Name"}),t.jsx("input",{type:"text",value:P,onChange:m=>Ie(m.target.value),onFocus:()=>oe(!0),onBlur:()=>{setTimeout(()=>oe(!1),200)},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${j?"var(--color-gold)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Type 3+ characters to search..."}),ee&&P.length>=3&&t.jsx("div",{className:"absolute z-10 w-full mt-1 rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",maxHeight:"200px",overflowY:"auto"},children:h?t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[t.jsx(cn,{size:"small",color:"#ccb331"}),t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"Searching..."})]}):Se.length>0?Se.map(m=>t.jsxs("button",{onClick:()=>Lr(m),className:"w-full text-left px-4 py-3 hover:bg-opacity-50",style:{backgroundColor:"transparent",color:"var(--color-text-white)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("div",{children:m.companyName}),t.jsxs("div",{style:{color:"var(--color-text-gray)",fontSize:"12px"},children:[m.city,", ",m.state]})]},m.id)):t.jsx("div",{className:"px-4 py-3",children:t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:['No accounts found matching "',P,'"']})})}),P.length>0&&P.length<3&&t.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-text-gray)"},children:"Type at least 3 characters to search"})]})]}),j&&t.jsxs("div",{className:"p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"},children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("h4",{style:{color:"var(--color-gold)"},children:"Selected Fabricator"}),t.jsx("button",{onClick:()=>{w(void 0),K("")},className:"px-3 py-1 rounded text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Change"})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Company Name"}),t.jsx("input",{type:"text",value:j.companyName,onChange:m=>w({...j,companyName:m.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Address"}),t.jsx("input",{type:"text",value:j.address,onChange:m=>w({...j,address:m.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"City"}),t.jsx("input",{type:"text",value:j.city,onChange:m=>w({...j,city:m.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"State"}),t.jsx("input",{type:"text",value:j.state,onChange:m=>w({...j,state:m.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"ZIP"}),t.jsx("input",{type:"text",value:j.zip,onChange:m=>w({...j,zip:m.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Sales Person"}),t.jsx("input",{type:"text",value:A.salesPerson??Pe.salesPerson??"",onChange:m=>F({...A,salesPerson:m.target.value}),placeholder:"Sales person name",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone 1"}),t.jsx("input",{type:"text",value:j.phone1,onChange:m=>w({...j,phone1:m.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone 2"}),t.jsx("input",{type:"text",value:j.phone2||"",onChange:m=>w({...j,phone2:m.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Mobile"}),t.jsx("input",{type:"text",value:j.mobile||"",onChange:m=>w({...j,mobile:m.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Email"}),t.jsx("input",{type:"email",value:j.email,onChange:m=>w({...j,email:m.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]})]})]}),k===3&&t.jsxs("div",{className:"space-y-6",children:[s.draft?.isRevisit&&t.jsx("div",{className:"p-4 rounded-lg mb-4",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)"},children:t.jsxs("p",{style:{color:"var(--color-gold)",fontSize:"14px"},children:[t.jsx("strong",{children:"Re-visit Mode:"})," You can edit all materials. Use the ",t.jsx("strong",{children:"−"})," button when quantity is 1 to delete a material."]})}),t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Materials / Selection Sheet"}),t.jsxs("div",{className:"relative mt-4",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Search Materials"}),t.jsx("input",{type:"text",value:D,onChange:m=>{R(m.target.value),Ce(!0)},onFocus:()=>Ce(!0),disabled:v,className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:v?"not-allowed":"text",opacity:v?.6:1},placeholder:v?"View only mode":"Search for materials..."}),!v&&ve&&D.length>=3&&t.jsx("div",{className:"absolute z-10 w-full mt-1 rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",maxHeight:"200px",overflowY:"auto"},children:ye?t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[t.jsx(cn,{size:"small",color:"#ccb331"}),t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"Searching..."})]}):ie.length>0?ie.map(m=>t.jsxs("button",{onClick:()=>Je(m.name),className:"w-full text-left px-4 py-3 hover:bg-opacity-50 flex items-center justify-between",style:{backgroundColor:"transparent",color:"var(--color-text-white)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("span",{children:m.name}),t.jsx(dn,{size:16,style:{color:"var(--color-gold)"}})]},m.id)):t.jsx("div",{className:"px-4 py-3",children:t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:['No materials found matching "',D,'"']})})})]})]}),C.length>0&&t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"separate",borderSpacing:"0 10px"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{backgroundColor:"var(--color-background)"},children:[t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",width:"110px"},children:"Qty"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"160px"},children:"Name"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"130px"},children:"Sold As"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"130px"},children:"Finish"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"150px"},children:"Size (L x H)"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"90px"},children:"Lot"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"110px"},children:"Location"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"110px"},children:"Hold"})]})}),t.jsx("tbody",{children:C.map((m,W)=>{const me=s.draft?.isRevisit&&W<(s.draft?.previousMaterialsCount||0);return t.jsxs("tr",{style:{backgroundColor:me?"rgba(100, 100, 100, 0.2)":"var(--color-background)",borderRadius:"8px"},children:[t.jsx("td",{className:"px-5 py-5",style:{borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px"},children:t.jsxs("div",{className:"flex items-center gap-1.5",children:[t.jsx("button",{onClick:()=>{m.quantity===1?hr(m.id):Le(m.id,"quantity",m.quantity-1)},disabled:v,className:"p-2 rounded",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)",opacity:v?.5:1,cursor:v?"not-allowed":"pointer"},title:m.quantity===1?"Delete material":"Decrease quantity",children:t.jsx(Pd,{size:16})}),t.jsx("span",{style:{color:"var(--color-text-white)",minWidth:"30px",textAlign:"center",fontSize:"15px",fontWeight:"500"},children:m.quantity}),t.jsx("button",{onClick:()=>Le(m.id,"quantity",m.quantity+1),disabled:v,className:"p-2 rounded",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)",opacity:v?.5:1,cursor:v?"not-allowed":"pointer"},children:t.jsx(dn,{size:16})})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"15px"},children:m.name}),me&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-gray)",border:"1px solid var(--color-border)"},children:"Previous"})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:m.soldAs||"",onChange:he=>Le(m.id,"soldAs",he.target.value),disabled:v,placeholder:"Alternative",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:v?.6:1,cursor:v?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("select",{value:m.finish||"Polished",onChange:he=>Le(m.id,"finish",he.target.value),disabled:v,className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:v?.6:1,cursor:v?"not-allowed":"pointer"},children:[t.jsx("option",{value:"Polished",children:"Polished"}),t.jsx("option",{value:"Honed",children:"Honed"}),t.jsx("option",{value:"Polished/Honed",children:"Polished/Honed"}),t.jsx("option",{value:"Leather",children:"Leather"}),t.jsx("option",{value:"Honed/Leather",children:"Honed/Leather"})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("input",{type:"text",value:m.size?.l||"",onChange:he=>Le(m.id,"size",{...m.size||{l:"",h:""},l:he.target.value}),disabled:v,placeholder:"L",className:"w-16 px-2 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",textAlign:"center",opacity:v?.6:1,cursor:v?"not-allowed":"text"}}),t.jsx("span",{style:{color:"var(--color-gold)",fontWeight:"bold",fontSize:"16px"},children:"×"}),t.jsx("input",{type:"text",value:m.size?.h||"",onChange:he=>Le(m.id,"size",{...m.size||{l:"",h:""},h:he.target.value}),disabled:v,placeholder:"H",className:"w-16 px-2 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",textAlign:"center",opacity:v?.6:1,cursor:v?"not-allowed":"text"}})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:m.lot||"",onChange:he=>Le(m.id,"lot",he.target.value),disabled:v,placeholder:"Lot #",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:v?.6:1,cursor:v?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:m.location||"",onChange:he=>Le(m.id,"location",he.target.value),disabled:v,placeholder:"Location",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:v?.6:1,cursor:v?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-2 mb-2 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:m.hold,onChange:he=>Le(m.id,"hold",he.target.checked),disabled:v,className:"w-4 h-4 rounded",style:{accentColor:"var(--color-gold)",opacity:v?.5:1,cursor:v?"not-allowed":"pointer"}}),t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"14px"},children:"Hold"})]}),m.hold&&t.jsx("input",{type:"text",value:m.slabNumbers||"",onChange:he=>Le(m.id,"slabNumbers",he.target.value),disabled:v,placeholder:"Slab #s",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)",fontSize:"14px",opacity:v?.6:1,cursor:v?"not-allowed":"text"}})]})})]},m.id)})})]})}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Helped By"}),t.jsx("div",{className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)"},children:H})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Selection Sheet Number"}),t.jsx("input",{type:"text",value:q,onChange:m=>_(m.target.value),readOnly:s.draft?.isRevisit||v,placeholder:"e.g. 800, 801...",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:s.draft?.isRevisit||v?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:`1px solid ${s.draft?.isRevisit||v?"var(--color-gold)":"var(--color-border)"}`,color:"var(--color-text-white)",cursor:s.draft?.isRevisit||v?"not-allowed":"text",opacity:v?.6:1}}),s.draft?.isRevisit&&!v&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-gold)"},children:"Auto-generated from previous sheet"})]})]})]}),t.jsxs("div",{className:"flex gap-4 mt-8",children:[k>1&&t.jsx("button",{onClick:()=>L(k-1),className:"px-6 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),!v&&k<3?t.jsx("button",{onClick:()=>L(k+1),disabled:k===2&&!j,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:k===2&&!j?"var(--color-border)":"var(--color-gold)",color:"var(--color-background)",cursor:k===2&&!j?"not-allowed":"pointer"},children:"Next"}):v&&k<3?t.jsx("button",{onClick:()=>L(k+1),className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Next"}):v?null:t.jsx("button",{onClick:vr,disabled:!q||q.trim()===""||U,className:"flex-1 py-3 rounded-lg flex items-center justify-center gap-2",style:{backgroundColor:!q||q.trim()===""||U?"var(--color-border)":"var(--color-success)",color:"var(--color-background)",cursor:!q||q.trim()===""||U?"not-allowed":"pointer"},children:U?t.jsxs(t.Fragment,{children:[t.jsx(cn,{size:"small",color:"var(--color-background)"}),t.jsx("span",{children:"Submitting..."})]}):"Submit"})]}),v&&g&&k===3&&yr()&&t.jsx("div",{className:"flex gap-4 mt-4",children:t.jsx("button",{onClick:()=>{g(s),d()},className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Re-visit"})})]})}),jr&&t.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},onClick:()=>$e(null),children:[t.jsx("img",{src:jr,alt:"Enlarged material",style:{maxWidth:"90vw",maxHeight:"90vh",display:"block",borderRadius:"8px"},onClick:m=>m.stopPropagation()}),t.jsx("button",{onClick:()=>$e(null),style:{position:"absolute",top:"16px",right:"16px",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",color:"white",fontSize:"22px",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})]})}function em({username:s,onLogout:d,checkIns:i,onMarkAsHelped:u,onSaveDraft:g,onRevisit:p,onUpdateCurrentlyHelpedBy:v}){const[N,k]=x.useState("queue"),[L,A]=x.useState(null),[F,B]=x.useState(1),[re,$]=x.useState(""),[j,w]=x.useState(""),[C,z]=x.useState(""),[H,X]=x.useState(""),[q,_]=x.useState(""),[P,K]=x.useState("all"),D=10,R=i.filter(h=>h.status==="waiting"),ee=i.filter(h=>h.status==="helped"),oe=ee.filter(h=>{if(re&&h.draft?.selectedFabricator&&!h.draft.selectedFabricator.companyName.toLowerCase().includes(re.toLowerCase())||j&&h.helpedTime&&h.helpedTime.toISOString().split("T")[0]!==j||C&&h.draft?.selectionSheetNumber&&!h.draft.selectionSheetNumber.toLowerCase().includes(C.toLowerCase())||H&&!`${h.firstName} ${h.lastName}`.toLowerCase().includes(H.toLowerCase())||q&&!h.phones.some(ye=>ye.toLowerCase().includes(q.toLowerCase())))return!1;if(P!=="all"){const I=h.draft?.isHold||!1;if(P==="yes"&&!I||P==="no"&&I)return!1}return!0}),ve=[...oe].sort((h,I)=>!h.helpedTime||!I.helpedTime?0:I.helpedTime.getTime()-h.helpedTime.getTime()),Ce=ve.slice((F-1)*D,F*D),Te=Math.ceil(ve.length/D),Me=h=>{const ye=new Date().getTime()-h.getTime(),fe=Math.floor(ye/6e4);if(fe<1)return"Just now";if(fe<60)return`${fe} min`;const U=Math.floor(fe/60),J=fe%60;return`${U}h ${J}m`},Se=h=>h.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),G=h=>h.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})+" "+h.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),ie=(h,I)=>{g(h,I),I.step===3&&u(h)},te=h=>{v(h.id,s),A(h)};return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-12 h-12 object-contain"}),t.jsx("h2",{style:{color:"var(--color-gold)"},children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("span",{style:{color:"var(--color-text-white)"},children:s}),t.jsxs("button",{className:"relative p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)"},children:[t.jsx(Qp,{size:20,style:{color:"var(--color-text-gray)"}}),R.length>0&&t.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:R.length})]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})]}),t.jsxs("div",{className:"flex gap-6 mt-6",children:[t.jsxs("button",{onClick:()=>k("queue"),className:"pb-3 px-2",style:{color:N==="queue"?"var(--color-gold)":"var(--color-text-gray)",borderBottom:N==="queue"?"2px solid var(--color-gold)":"2px solid transparent"},children:["Queue ",R.length>0&&`(${R.length})`]}),t.jsx("button",{onClick:()=>k("history"),className:"pb-3 px-2",style:{color:N==="history"?"var(--color-gold)":"var(--color-text-gray)",borderBottom:N==="history"?"2px solid var(--color-gold)":"2px solid transparent"},children:"History"})]})]})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8",children:[N==="queue"&&t.jsx("div",{children:t.jsx("div",{className:"space-y-3",children:R.length===0?t.jsx("div",{className:"text-center py-12",style:{color:"var(--color-text-gray)"},children:"No customers in queue"}):R.map(h=>t.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-lg transition-all hover:bg-opacity-80",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:h.firstName.charAt(0).toUpperCase()}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("span",{className:"font-medium truncate",style:{color:"var(--color-text-white)"},children:[h.firstName,h.lastName].filter(Boolean).join(" ")}),h.currentlyHelpedBy?t.jsxs("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:["In Progress • ",h.currentlyHelpedBy]}):t.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"New"}),t.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:h.isRevisit?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:h.isRevisit?"var(--color-gold)":"#3B82F6"},children:h.isRevisit?"Revisiting":"First Time"}),h.partySize&&(h.partySize.adults>1||h.partySize.minors>0)&&t.jsxs("span",{className:"px-2 py-0.5 rounded text-xs flex-shrink-0",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:[h.partySize.adults," ",h.partySize.adults===1?"Adult":"Adults",h.partySize.minors>0&&`, ${h.partySize.minors} ${h.partySize.minors===1?"Minor":"Minors"}`]})]}),t.jsxs("div",{className:"flex items-center gap-4 text-xs",style:{color:"var(--color-text-gray)"},children:[t.jsxs("span",{children:["Checked in at ",Se(h.checkInTime)]}),t.jsx("span",{children:"•"}),t.jsxs("span",{style:{color:"var(--color-gold)"},children:["Waiting ",Me(h.checkInTime)]})]})]}),t.jsx("button",{onClick:()=>te(h),className:"flex-shrink-0 px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"View"})]},h.id))})}),N==="history"&&t.jsxs("div",{children:[t.jsxs("div",{className:"mb-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("h3",{style:{color:"var(--color-gold)",marginBottom:"16px"},children:"Filter History"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Customer Name"}),t.jsx("input",{type:"text",value:H,onChange:h=>{X(h.target.value),B(1)},placeholder:"Search by name...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone Number"}),t.jsx("input",{type:"text",value:q,onChange:h=>{_(h.target.value),B(1)},placeholder:"Search by phone...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Fabricator"}),t.jsx("input",{type:"text",value:re,onChange:h=>{$(h.target.value),B(1)},placeholder:"Search by fabricator...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Selection Sheet #"}),t.jsx("input",{type:"text",value:C,onChange:h=>{z(h.target.value),B(1)},placeholder:"Search by sheet #...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Date"}),t.jsx("input",{type:"date",value:j,onChange:h=>{w(h.target.value),B(1)},className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Hold Status"}),t.jsxs("select",{value:P,onChange:h=>{K(h.target.value),B(1)},className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Hold"}),t.jsx("option",{value:"no",children:"Not Hold"})]})]})]}),(H||q||re||C||j||P!=="all")&&t.jsx("button",{onClick:()=>{X(""),_(""),$(""),z(""),w(""),K("all"),B(1)},className:"mt-4 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear Filters"})]}),ve.length===0?t.jsxs("div",{className:"text-center py-16",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"18px"},children:oe.length===0&&ee.length>0?"No matching results":"No history yet"}),t.jsx("p",{style:{color:"var(--color-text-gray)",marginTop:"8px"},children:oe.length===0&&ee.length>0?"Try adjusting your filters":"Helped customers will appear here"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{backgroundColor:"var(--color-background)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Sheet #"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Customer Name"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Phone Number"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Fabricator"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Check-in"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Helped At"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Hold"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"}})]})}),t.jsx("tbody",{children:Ce.map((h,I)=>t.jsxs("tr",{style:{borderBottom:I<Ce.length-1?"1px solid var(--color-border)":"none",backgroundColor:I%2===0?"transparent":"rgba(0, 0, 0, 0.2)"},children:[t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-white)",fontSize:"14px"},children:h.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-white)",fontSize:"14px"},children:[h.firstName,h.lastName].filter(Boolean).join(" ")}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:h.phones[0]||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:h.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:G(h.checkInTime)}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:h.helpedTime?G(h.helpedTime):"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:h.draft?.isHold?"var(--color-gold)":"var(--color-text-gray)",fontSize:"14px",fontWeight:h.draft?.isHold?"600":"normal"},children:h.draft?.isHold?"Yes":"No"}),t.jsx("td",{className:"px-4 py-4",children:t.jsx("button",{onClick:()=>A(h),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"},children:"View"})})]},h.id))})]})})}),Te>1&&t.jsxs("div",{className:"flex justify-center items-center gap-4 mt-8",children:[t.jsx("button",{onClick:()=>B(Math.max(1,F-1)),disabled:F===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:F===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:F===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:F===1?"not-allowed":"pointer"},children:"Previous"}),t.jsxs("span",{style:{color:"var(--color-text-white)"},children:["Page ",F," of ",Te]}),t.jsx("button",{onClick:()=>B(Math.min(Te,F+1)),disabled:F===Te,className:"px-4 py-2 rounded-lg",style:{backgroundColor:F===Te?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:F===Te?"var(--color-text-gray)":"var(--color-text-white)",cursor:F===Te?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),L&&t.jsx(Zh,{customer:L,onClose:()=>A(null),onSubmit:ie,onMarkAsHelped:u,onRevisit:p,staffUsername:s,isViewOnly:L.status==="helped",allCheckIns:i})]})}function Dd({customer:s,onClose:d,onComplete:i}){const[u,g]=x.useState([]),[p,v]=x.useState(!1),N=s.priced||!1;x.useEffect(()=>{if(s.draft?.materials){const A=s.draft.materials.map(F=>{const B=parseFloat(F.size?.l)||0,re=parseFloat(F.size?.h)||0,$=parseFloat(F.price||"0")||0,j=F.priceType||"per SFT";return{material:F.soldAs||F.name,quantity:F.quantity,finish:F.finish||"Polished",length:B,height:re,price:$,priceType:j}});g(A)}},[s]);const k=(A,F,B)=>{if(N)return;const re=[...u];re[A]={...re[A],[F]:B},g(re)},L=async()=>{if(!u.every(F=>F.price>0)&&!N){alert("Please enter prices for all materials");return}v(!0),setTimeout(()=>{console.log("Sending quote to fabricator:",s.draft?.selectedFabricator),console.log("Quote details:",{customer:[s.firstName,s.lastName].filter(Boolean).join(" "),selectionSheetNumber:s.draft?.selectionSheetNumber,materials:u.map(F=>({quantity:F.quantity,material:F.material,finish:F.finish,length:F.length,height:F.height,price:F.price,priceType:F.priceType}))}),alert(`Quote ${N?"resent":"sent"} successfully to ${s.draft?.selectedFabricator?.companyName||"fabricator"}!`),v(!1),N||i(s.id),d()},1500)};return t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-5xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px"},children:[t.jsxs("div",{className:"sticky top-0 z-10 flex items-center justify-between p-6 border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-1",style:{color:"var(--color-gold)"},children:"Quote"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:[[s.firstName,s.lastName].filter(Boolean).join(" ")," • Sheet #",s.draft?.selectionSheetNumber]})]}),t.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4 p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("p",{style:{color:"var(--color-text-white)"},children:[s.firstName,s.lastName].filter(Boolean).join(" ")})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("p",{style:{color:"var(--color-text-white)"},children:s.draft?.selectedFabricator?.companyName||"Not assigned"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-3",style:{color:"var(--color-text-white)"},children:"Materials & Pricing"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{borderBottom:"2px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:[t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"80px"},children:"Quantity"}),t.jsx("th",{className:"text-left p-3 text-sm font-semibold",style:{color:"var(--color-gold)"},children:"Material Name"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"120px"},children:"Finish"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"110px"},children:"Length (in)"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"110px"},children:"Height (in)"}),t.jsx("th",{className:"text-right p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"140px"},children:"Price"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"120px"},children:"Type"})]})}),t.jsx("tbody",{children:u.map((A,F)=>t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)"},children:[t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:A.quantity,onChange:B=>k(F,"quantity",parseFloat(B.target.value)||0),disabled:N,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:N?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:N?"not-allowed":"text"},min:"0"})}),t.jsx("td",{className:"p-3",style:{color:"var(--color-text-white)"},children:A.material}),t.jsx("td",{className:"p-3 text-center",style:{color:"var(--color-text-white)"},children:A.finish}),t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:A.length,onChange:B=>k(F,"length",parseFloat(B.target.value)||0),disabled:N,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:N?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:N?"not-allowed":"text"},min:"0",step:"0.1"})}),t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:A.height,onChange:B=>k(F,"height",parseFloat(B.target.value)||0),disabled:N,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:N?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:N?"not-allowed":"text"},min:"0",step:"0.1"})}),t.jsx("td",{className:"p-3 text-right",children:t.jsxs("div",{className:"flex items-center justify-end",children:[t.jsx("span",{style:{color:"var(--color-gold)",marginRight:"4px",fontSize:"16px",fontWeight:"600"},children:"$"}),t.jsx("input",{type:"number",value:A.price,onChange:B=>k(F,"price",parseFloat(B.target.value)||0),disabled:N,className:"w-full px-2 py-2 rounded text-right",style:{backgroundColor:N?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:N?"not-allowed":"text"},placeholder:"0.00",min:"0",step:"0.01"})]})}),t.jsx("td",{className:"p-3 text-center",children:t.jsxs("select",{value:A.priceType,onChange:B=>k(F,"priceType",B.target.value),disabled:N,className:"w-full px-2 py-2 rounded",style:{backgroundColor:N?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:N?"not-allowed":"pointer"},children:[t.jsx("option",{value:"per SFT",children:"per SFT"}),t.jsx("option",{value:"per Slab",children:"per Slab"})]})})]},F))})]})})]}),N&&t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"rgba(34, 197, 94, 0.1)",border:"1px solid #22c55e"},children:t.jsx("p",{className:"text-center",style:{color:"#22c55e"},children:"✓ This quote has been priced and sent. You can resend the email if needed."})}),t.jsxs("div",{className:"flex gap-3 pt-4",children:[t.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:N?"Close":"Cancel"}),t.jsxs("button",{onClick:L,disabled:p,className:"flex-1 py-3 rounded-lg flex items-center justify-center gap-2",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:p?.6:1},children:[t.jsx(dh,{size:20}),p?"Sending...":N?"Resend Quote":"Send Quote to Fabricator"]})]})]})]})})}function rm({username:s,onLogout:d,checkIns:i,fabricators:u,onComplete:g,onResetHoldDate:p}){const[v,N]=x.useState(null),[k,L]=x.useState(""),[A,F]=x.useState(""),[B,re]=x.useState("all"),[$,j]=x.useState("all"),[w,C]=x.useState("all"),[z,H]=x.useState(!1),[X,q]=x.useState({}),[_,P]=x.useState("main"),[K,D]=x.useState({}),[R,ee]=x.useState({}),[oe,ve]=x.useState({}),[Ce,Te]=x.useState(new Date().getFullYear()),[Me,Se]=x.useState(new Date().getMonth()),[G,ie]=x.useState(new Date().getFullYear()),[te,h]=x.useState(new Date().getMonth()),[I,ye]=x.useState(new Date().getFullYear()),[fe,U]=x.useState(new Date().getMonth()),[J,ce]=x.useState(1),ke=10,be=[2025,2026,2027,2028],_e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ar=x.useMemo(()=>i.filter(E=>E.status==="helped"&&E.draft?.materials&&E.draft.materials.length>0),[i]),Ir=E=>{const de=new Date;return new Date(E).toDateString()===de.toDateString()},jr=E=>{const de=new Date,De=new Date(E);return(de.getTime()-De.getTime())/(1e3*60*60*24)>5},{mainDashboardCheckIns:$e,holdsNotConvertedCheckIns:Nr,ignoredCheckIns:wr}=x.useMemo(()=>{const E=[],de=[],De=[];return ar.forEach(xe=>{const O=K[xe.id]||!1,ae=xe.draft?.isHold||!1,Ee=!X[xe.id],He=jr(xe.checkInTime);O?De.push(xe):ae&&Ee&&He?de.push(xe):E.push(xe)}),{mainDashboardCheckIns:E,holdsNotConvertedCheckIns:de,ignoredCheckIns:De}},[ar,X,K]),Lr=x.useMemo(()=>_==="holds-not-converted"?Nr:_==="ignored"?wr:$e,[_,$e,Nr,wr]),Ie=x.useMemo(()=>[...Lr.filter(de=>{const De=`${de.firstName} ${de.lastName}`.toLowerCase().includes(k.toLowerCase())||de.phones?.some(He=>He.includes(k))||de.draft?.selectionSheetNumber?.includes(k),xe=!A||de.draft?.selectedFabricator?.id===A,O=B==="all"||B==="hold"&&de.draft?.isHold||B==="no-hold"&&!de.draft?.isHold,ae=$==="all"||$==="priced"&&de.priced||$==="not-priced"&&!de.priced,Ee=w==="all"||w==="yes"&&X[de.id]||w==="no"&&!X[de.id];return De&&xe&&O&&ae&&Ee})].sort((de,De)=>new Date(De.checkInTime).getTime()-new Date(de.checkInTime).getTime()),[Lr,k,A,B,$,w,X]),Je=Math.ceil(Ie.length/ke),Le=(J-1)*ke,hr=Le+ke,vr=Ie.slice(Le,hr);Yr.useEffect(()=>{ce(1)},[k,A,B,$,w,_]);const yr=E=>{N(E)},Pe=E=>{D({...K,[E]:!0})},m=E=>{p&&p(E),ve({...oe,[E]:!0})},W=E=>{ee({...R,[E]:!R[E]})},me=E=>new Date(E).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"});x.useMemo(()=>{const E=new Set;return ar.forEach(De=>{const xe=new Date(De.checkInTime),O=`${xe.getFullYear()}-${String(xe.getMonth()+1).padStart(2,"0")}`;if(E.add(O),De.pricedTime){const ae=new Date(De.pricedTime),Ee=`${ae.getFullYear()}-${String(ae.getMonth()+1).padStart(2,"0")}`;E.add(Ee)}}),Array.from(E).sort().reverse()},[ar]),x.useMemo(()=>{const E=new Date;return`${E.getFullYear()}-${String(E.getMonth()+1).padStart(2,"0")}`},[]),Yr.useEffect(()=>{Me||Se(new Date().getMonth()),te||h(new Date().getMonth()),fe||U(new Date().getMonth())},[]);const he=(E,de,De)=>{const xe=new Date(E);return xe.getMonth()===de&&xe.getFullYear()===De},Ke=x.useMemo(()=>({pendingPricing:$e.filter(E=>!E.priced).length,pricedToday:$e.filter(E=>E.priced&&E.pricedTime&&Ir(E.pricedTime)).length,onHold:$e.filter(E=>E.draft?.isHold).length,onHoldForMonth:$e.filter(E=>E.draft?.isHold&&he(E.checkInTime,te,G)).length,pricedForMonth:$e.filter(E=>E.priced&&E.pricedTime&&he(E.pricedTime,Me,Ce)).length,convertedForMonth:$e.filter(E=>X[E.id]&&he(E.checkInTime,fe,I)).length}),[$e,X,Me,Ce,te,G,fe,I]);return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl",style:{color:"var(--color-gold)"},children:"Pricing Dashboard"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]})]})]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[t.jsxs("div",{className:"flex gap-2 mb-6",children:[t.jsx("button",{onClick:()=>P("main"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:_==="main"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:_==="main"?"var(--color-background)":"var(--color-text-white)",fontWeight:_==="main"?"600":"normal"},children:"Main Dashboard"}),t.jsxs("button",{onClick:()=>P("holds-not-converted"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:_==="holds-not-converted"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:_==="holds-not-converted"?"var(--color-background)":"var(--color-text-white)",fontWeight:_==="holds-not-converted"?"600":"normal"},children:["Holds Not Converted (",Nr.length,")"]}),t.jsxs("button",{onClick:()=>P("ignored"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:_==="ignored"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:_==="ignored"?"var(--color-background)":"var(--color-text-white)",fontWeight:_==="ignored"?"600":"normal"},children:["Ignored (",wr.length,")"]})]}),t.jsxs("div",{className:"mb-6 space-y-4",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(Td,{className:"absolute left-3 top-1/2 -translate-y-1/2",size:20,style:{color:"var(--color-text-gray)"}}),t.jsx("input",{type:"text",value:k,onChange:E=>L(E.target.value),placeholder:"Search by name, phone, or sheet number...",className:"w-full pl-10 pr-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("button",{onClick:()=>H(!z),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-lg",style:{backgroundColor:z?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:z?"var(--color-background)":"var(--color-text-white)"},children:[t.jsx(Sd,{size:20}),"Filters"]})]}),z&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsxs("select",{value:A,onChange:E=>F(E.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Fabricators"}),u.map(E=>t.jsx("option",{value:E.id,children:E.companyName},E.id))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Hold Status"}),t.jsxs("select",{value:B,onChange:E=>re(E.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"hold",children:"On Hold"}),t.jsx("option",{value:"no-hold",children:"Not On Hold"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced Status"}),t.jsxs("select",{value:$,onChange:E=>j(E.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"priced",children:"Priced"}),t.jsx("option",{value:"not-priced",children:"Not Priced"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted Status"}),t.jsxs("select",{value:w,onChange:E=>C(E.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Converted"}),t.jsx("option",{value:"no",children:"Not Converted"})]})]})]})]}),_==="main"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Pending Pricing"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Ke.pendingPricing})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Priced Today"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Ke.pricedToday})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Ke.onHold})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Ke.pricedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:Me,onChange:E=>Se(parseInt(E.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:_e.map((E,de)=>t.jsx("option",{value:de,children:E},de))}),t.jsx("select",{value:Ce,onChange:E=>Te(parseInt(E.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:be.map(E=>t.jsx("option",{value:E,children:E},E))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Ke.onHoldForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:te,onChange:E=>h(parseInt(E.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:_e.map((E,de)=>t.jsx("option",{value:de,children:E},de))}),t.jsx("select",{value:G,onChange:E=>ie(parseInt(E.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:be.map(E=>t.jsx("option",{value:E,children:E},E))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Ke.convertedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:fe,onChange:E=>U(parseInt(E.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:_e.map((E,de)=>t.jsx("option",{value:de,children:E},de))}),t.jsx("select",{value:I,onChange:E=>ye(parseInt(E.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:be.map(E=>t.jsx("option",{value:E,children:E},E))})]})]})]}),_==="holds-not-converted"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Nr.filter(E=>E.draft?.isHold).length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Not Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Nr.filter(E=>!X[E.id]).length})]})]}),_==="ignored"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Ignored"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:wr.length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:wr.filter(E=>E.draft?.isHold).length})]})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{style:{backgroundColor:"var(--color-background)"},children:t.jsxs("tr",{children:[t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sheet #"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Materials"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Status"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Converted"}),_==="ignored"&&t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Lot"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Date"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Actions"})]})}),t.jsx("tbody",{children:vr.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:_==="ignored"?9:8,className:"text-center p-8",style:{color:"var(--color-text-gray)"},children:"No customers found"})}):vr.map(E=>{const de=X[E.id]||!1,De=R[E.id]||!1,xe=oe[E.id]||!1;let O="transparent";return _==="ignored"&&De?O="rgba(34, 197, 94, 0.2)":xe?O="rgba(239, 68, 68, 0.2)":de?O="rgba(212, 167, 54, 0.15)":E.priced&&(O="rgba(34, 197, 94, 0.1)"),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",backgroundColor:O},children:[t.jsxs("td",{className:"p-4",children:[t.jsx("div",{style:{color:"var(--color-text-white)"},children:[E.firstName,E.lastName].filter(Boolean).join(" ")}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:E.phones?.[0]})]}),t.jsx("td",{className:"p-4",style:{color:"var(--color-gold)"},children:E.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:E.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"p-4 text-center",style:{color:"var(--color-text-white)"},children:E.draft?.materials?.length||0}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-2",children:[E.priced&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"Priced"}),E.draft?.isHold&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:"Hold"})]})}),t.jsx("td",{className:"p-4 text-center",children:t.jsxs("select",{value:de?"Yes":"No",onChange:ae=>q({...X,[E.id]:ae.target.value==="Yes"}),className:"px-3 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:de?"1px solid var(--color-gold)":"1px solid var(--color-border)",color:de?"var(--color-gold)":"var(--color-text-white)",cursor:"pointer",fontWeight:de?"600":"normal",fontSize:"13px"},children:[t.jsx("option",{value:"No",children:"No"}),t.jsx("option",{value:"Yes",children:"Yes"})]})}),_==="ignored"&&t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:E.draft?.materials&&E.draft.materials.length>0?t.jsx("div",{className:"flex flex-col gap-1",children:Array.from(new Set(E.draft.materials.map(ae=>ae.lot).filter(Boolean))).map((ae,Ee)=>t.jsx("span",{className:"text-sm",children:ae},Ee))}):"-"}),t.jsx("td",{className:"p-4 text-center text-sm",style:{color:"var(--color-text-gray)"},children:me(E.checkInTime)}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center",children:[t.jsx("button",{onClick:()=>yr(E),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},title:"View Pricing",children:t.jsx(vs,{size:18})}),_==="holds-not-converted"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>m(E.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(34, 197, 94, 0.7)",color:"var(--color-text-white)"},title:"Undo - Send back to Main",children:t.jsx(Ed,{size:18})}),t.jsx("button",{onClick:()=>Pe(E.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(239, 68, 68, 0.8)",color:"var(--color-text-white)"},title:"Ignore",children:t.jsx(ct,{size:18})})]}),_==="ignored"&&t.jsx("button",{onClick:()=>W(E.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:De?"rgba(34, 197, 94, 0.8)":"rgba(100, 100, 100, 0.5)",color:"var(--color-text-white)"},title:De?"Unmark as Known":"Mark as Known",children:t.jsx(Nd,{size:18})})]})})]},E.id)})})]})}),Je>1&&t.jsxs("div",{className:"flex items-center justify-between px-4 py-4",style:{borderTop:"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Showing ",Le+1," to ",Math.min(hr,Ie.length)," of ",Ie.length," customers"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>ce(J-1),disabled:J===1,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:J===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:J===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:J===1?"not-allowed":"pointer"},children:"Previous"}),t.jsx("div",{className:"flex gap-1",children:Array.from({length:Je},(E,de)=>de+1).map(E=>t.jsx("button",{onClick:()=>ce(E),className:"px-3 py-2 rounded-lg transition-colors",style:{backgroundColor:J===E?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:J===E?"var(--color-background)":"var(--color-text-white)",fontWeight:J===E?"600":"normal",cursor:"pointer"},children:E},E))}),t.jsx("button",{onClick:()=>ce(J+1),disabled:J===Je,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:J===Je?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:J===Je?"var(--color-text-gray)":"var(--color-text-white)",cursor:J===Je?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),v&&t.jsx(Dd,{customer:v,onClose:()=>N(null),onComplete:g})]})}function tm({username:s,onLogout:d,checkIns:i,fabricators:u,onComplete:g,onResetHoldDate:p,onPriceUpdate:v}){const[N,k]=x.useState(null),[L,A]=x.useState(""),[F,B]=x.useState(""),[re,$]=x.useState(""),[j,w]=x.useState("all"),[C,z]=x.useState("all"),[H,X]=x.useState("all"),[q,_]=x.useState(!1),[P,K]=x.useState({}),[D,R]=x.useState("main"),[ee,oe]=x.useState({}),[ve,Ce]=x.useState({}),[Te,Me]=x.useState({}),[Se,G]=x.useState(new Date().getFullYear()),[ie,te]=x.useState(new Date().getMonth()),[h,I]=x.useState(new Date().getFullYear()),[ye,fe]=x.useState(new Date().getMonth()),[U,J]=x.useState(new Date().getFullYear()),[ce,ke]=x.useState(new Date().getMonth()),[be,_e]=x.useState(1),ar=10,Ir=[2025,2026,2027,2028],jr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$e=x.useMemo(()=>i.filter(O=>O.status==="helped"&&O.draft?.materials&&O.draft.materials.length>0),[i]),Nr=x.useMemo(()=>{const O=new Set;return $e.forEach(ae=>{ae.draft?.salesPerson&&O.add(ae.draft.salesPerson)}),Array.from(O).sort()},[$e]),wr=O=>{const ae=new Date;return new Date(O).toDateString()===ae.toDateString()},Lr=O=>{const ae=new Date,Ee=new Date(O);return(ae.getTime()-Ee.getTime())/(1e3*60*60*24)>5},{mainDashboardCheckIns:Ie,holdsNotConvertedCheckIns:Je,ignoredCheckIns:Le}=x.useMemo(()=>{const O=[],ae=[],Ee=[];return $e.forEach(He=>{const tr=ee[He.id]||!1,dr=He.draft?.isHold||!1,_r=!P[He.id],Cr=Lr(He.checkInTime);tr?Ee.push(He):dr&&_r&&Cr?ae.push(He):O.push(He)}),{mainDashboardCheckIns:O,holdsNotConvertedCheckIns:ae,ignoredCheckIns:Ee}},[$e,P,ee]),hr=x.useMemo(()=>D==="holds-not-converted"?Je:D==="ignored"?Le:Ie,[D,Ie,Je,Le]),vr=x.useMemo(()=>[...hr.filter(ae=>{const Ee=`${ae.firstName} ${ae.lastName}`.toLowerCase().includes(L.toLowerCase())||ae.phones?.some(Vr=>Vr.includes(L))||ae.draft?.selectionSheetNumber?.includes(L),He=!F||ae.draft?.selectedFabricator?.id===F,tr=!re||ae.draft?.salesPerson===re,dr=j==="all"||j==="hold"&&ae.draft?.isHold||j==="no-hold"&&!ae.draft?.isHold,_r=C==="all"||C==="priced"&&ae.priced||C==="not-priced"&&!ae.priced,Cr=H==="all"||H==="yes"&&P[ae.id]||H==="no"&&!P[ae.id];return Ee&&He&&tr&&dr&&_r&&Cr})].sort((ae,Ee)=>new Date(Ee.checkInTime).getTime()-new Date(ae.checkInTime).getTime()),[hr,L,F,re,j,C,H,P]),yr=Math.ceil(vr.length/ar),Pe=(be-1)*ar,m=Pe+ar,W=vr.slice(Pe,m);Yr.useEffect(()=>{_e(1)},[L,F,re,j,C,H,D]);const me=O=>{k(O)},he=O=>{oe({...ee,[O]:!0})},Ke=O=>{p&&p(O),Me({...Te,[O]:!0})},E=O=>{Ce({...ve,[O]:!ve[O]})},de=O=>new Date(O).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}),De=(O,ae,Ee)=>{const He=new Date(O);return He.getMonth()===ae&&He.getFullYear()===Ee},xe=x.useMemo(()=>{const O=Ie.filter(Ae=>!Ae.priced).length,ae=Ie.filter(Ae=>Ae.priced&&Ae.pricedTime&&wr(Ae.pricedTime)).length,Ee=Ie.filter(Ae=>Ae.draft?.isHold).length,He=Ie.filter(Ae=>Ae.draft?.isHold&&De(Ae.checkInTime,ye,h)).length,tr=Ie.filter(Ae=>Ae.priced&&Ae.pricedTime&&De(Ae.pricedTime,ie,Se)).length,dr=Ie.filter(Ae=>P[Ae.id]&&De(Ae.checkInTime,ce,U)).length,_r=Ie.filter(Ae=>P[Ae.id]).length,Cr=re?Ie.filter(Ae=>Ae.draft?.salesPerson===re).length:Ie.length,Vr=re?Ie.filter(Ae=>Ae.draft?.salesPerson===re&&P[Ae.id]).length:Ie.filter(Ae=>P[Ae.id]).length,pn=Cr>0?(Vr/Cr*100).toFixed(1):"0";return{pendingPricing:O,pricedToday:ae,onHold:Ee,onHoldForMonth:He,pricedForMonth:tr,convertedForMonth:dr,totalConverted:_r,totalCustomers:Cr,convertedCustomers:Vr,conversionRate:pn}},[Ie,P,ie,Se,ye,h,ce,U,re]);return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl",style:{color:"var(--color-gold)"},children:"Analysis Dashboard"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]})]})]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[t.jsxs("div",{className:"flex gap-2 mb-6",children:[t.jsx("button",{onClick:()=>R("main"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:D==="main"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:D==="main"?"var(--color-background)":"var(--color-text-white)",fontWeight:D==="main"?"600":"normal"},children:"Main Dashboard"}),t.jsxs("button",{onClick:()=>R("holds-not-converted"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:D==="holds-not-converted"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:D==="holds-not-converted"?"var(--color-background)":"var(--color-text-white)",fontWeight:D==="holds-not-converted"?"600":"normal"},children:["Holds Not Converted (",Je.length,")"]}),t.jsxs("button",{onClick:()=>R("ignored"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:D==="ignored"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:D==="ignored"?"var(--color-background)":"var(--color-text-white)",fontWeight:D==="ignored"?"600":"normal"},children:["Ignored (",Le.length,")"]})]}),t.jsxs("div",{className:"mb-6 space-y-4",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(Td,{className:"absolute left-3 top-1/2 -translate-y-1/2",size:20,style:{color:"var(--color-text-gray)"}}),t.jsx("input",{type:"text",value:L,onChange:O=>A(O.target.value),placeholder:"Search by name, phone, or sheet number...",className:"w-full pl-10 pr-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("button",{onClick:()=>_(!q),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-lg",style:{backgroundColor:q?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:q?"var(--color-background)":"var(--color-text-white)"},children:[t.jsx(Sd,{size:20}),"Filters"]})]}),q&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Sales Person"}),t.jsxs("select",{value:re,onChange:O=>$(O.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Sales People"}),Nr.map(O=>t.jsx("option",{value:O,children:O},O))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsxs("select",{value:F,onChange:O=>B(O.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Fabricators"}),u.map(O=>t.jsx("option",{value:O.id,children:O.companyName},O.id))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Hold Status"}),t.jsxs("select",{value:j,onChange:O=>w(O.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"hold",children:"On Hold"}),t.jsx("option",{value:"no-hold",children:"Not On Hold"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced Status"}),t.jsxs("select",{value:C,onChange:O=>z(O.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"priced",children:"Priced"}),t.jsx("option",{value:"not-priced",children:"Not Priced"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted Status"}),t.jsxs("select",{value:H,onChange:O=>X(O.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Converted"}),t.jsx("option",{value:"no",children:"Not Converted"})]})]})]})]}),D==="main"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",children:[re&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)"},children:[t.jsxs("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:["Sales Person: ",re]}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:xe.totalCustomers}),t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-text-gray)"},children:"Total Customers"})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:xe.convertedCustomers}),t.jsxs("p",{className:"text-xs mt-1",style:{color:"var(--color-text-gray)"},children:[xe.conversionRate,"% Rate"]})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Pending Pricing"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:xe.pendingPricing})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Priced Today"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:xe.pricedToday})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:xe.onHold})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:xe.totalConverted})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:xe.onHoldForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:ye,onChange:O=>fe(parseInt(O.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:jr.map((O,ae)=>t.jsx("option",{value:ae,children:O},ae))}),t.jsx("select",{value:h,onChange:O=>I(parseInt(O.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Ir.map(O=>t.jsx("option",{value:O,children:O},O))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:xe.convertedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:ce,onChange:O=>ke(parseInt(O.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:jr.map((O,ae)=>t.jsx("option",{value:ae,children:O},ae))}),t.jsx("select",{value:U,onChange:O=>J(parseInt(O.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Ir.map(O=>t.jsx("option",{value:O,children:O},O))})]})]})]}),D==="holds-not-converted"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Je.filter(O=>O.draft?.isHold).length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Not Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Je.filter(O=>!P[O.id]).length})]})]}),D==="ignored"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Ignored"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Le.length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Le.filter(O=>O.draft?.isHold).length})]})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{style:{backgroundColor:"var(--color-background)"},children:t.jsxs("tr",{children:[t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sheet #"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sales Person"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Materials"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Status"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Converted"}),D==="ignored"&&t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Lot"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Date"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Actions"})]})}),t.jsx("tbody",{children:W.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:D==="ignored"?10:9,className:"text-center p-8",style:{color:"var(--color-text-gray)"},children:"No customers found"})}):W.map(O=>{const ae=P[O.id]||!1,Ee=ve[O.id]||!1,He=Te[O.id]||!1;let tr="transparent";return D==="ignored"&&Ee?tr="rgba(34, 197, 94, 0.2)":He?tr="rgba(239, 68, 68, 0.2)":ae?tr="rgba(212, 167, 54, 0.15)":O.priced&&(tr="rgba(34, 197, 94, 0.1)"),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",backgroundColor:tr},children:[t.jsxs("td",{className:"p-4",children:[t.jsx("div",{style:{color:"var(--color-text-white)"},children:[O.firstName,O.lastName].filter(Boolean).join(" ")}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:O.phones?.[0]})]}),t.jsx("td",{className:"p-4",style:{color:"var(--color-gold)"},children:O.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:O.draft?.salesPerson||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:O.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"p-4 text-center",style:{color:"var(--color-text-white)"},children:O.draft?.materials?.length||0}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-2",children:[O.priced&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"Priced"}),O.draft?.isHold&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:"Hold"})]})}),t.jsx("td",{className:"p-4 text-center",children:t.jsxs("select",{value:ae?"Yes":"No",onChange:dr=>K({...P,[O.id]:dr.target.value==="Yes"}),className:"px-3 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:ae?"1px solid var(--color-gold)":"1px solid var(--color-border)",color:ae?"var(--color-gold)":"var(--color-text-white)",cursor:"pointer",fontWeight:ae?"600":"normal",fontSize:"13px"},children:[t.jsx("option",{value:"No",children:"No"}),t.jsx("option",{value:"Yes",children:"Yes"})]})}),D==="ignored"&&t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:O.draft?.materials&&O.draft.materials.length>0?t.jsx("div",{className:"flex flex-col gap-1",children:Array.from(new Set(O.draft.materials.map(dr=>dr.lot).filter(Boolean))).map((dr,_r)=>t.jsx("span",{className:"text-sm",children:dr},_r))}):"-"}),t.jsx("td",{className:"p-4 text-center text-sm",style:{color:"var(--color-text-gray)"},children:de(O.checkInTime)}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-1",children:[t.jsx("button",{onClick:()=>me(O),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},title:"View/Edit Pricing",children:t.jsx(vs,{size:18})}),D==="holds-not-converted"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>Ke(O.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(34, 197, 94, 0.7)",color:"var(--color-text-white)"},title:"Undo - Send back to Main",children:t.jsx(Ed,{size:18})}),t.jsx("button",{onClick:()=>he(O.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(239, 68, 68, 0.8)",color:"var(--color-text-white)"},title:"Ignore",children:t.jsx(ct,{size:18})})]}),D==="ignored"&&t.jsx("button",{onClick:()=>E(O.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:Ee?"rgba(34, 197, 94, 0.8)":"rgba(100, 100, 100, 0.5)",color:"var(--color-text-white)"},title:Ee?"Unmark as Known":"Mark as Known",children:t.jsx(Nd,{size:18})})]})})]},O.id)})})]})}),yr>1&&t.jsxs("div",{className:"flex items-center justify-between px-4 py-4",style:{borderTop:"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Showing ",Pe+1," to ",Math.min(m,vr.length)," of ",vr.length," customers"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>_e(be-1),disabled:be===1,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:be===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:be===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:be===1?"not-allowed":"pointer"},children:"Previous"}),t.jsx("div",{className:"flex gap-1",children:Array.from({length:yr},(O,ae)=>ae+1).map(O=>t.jsx("button",{onClick:()=>_e(O),className:"px-3 py-2 rounded-lg transition-colors",style:{backgroundColor:be===O?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:be===O?"var(--color-background)":"var(--color-text-white)",fontWeight:be===O?"600":"normal",cursor:"pointer"},children:O},O))}),t.jsx("button",{onClick:()=>_e(be+1),disabled:be===yr,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:be===yr?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:be===yr?"var(--color-text-gray)":"var(--color-text-white)",cursor:be===yr?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),N&&t.jsx(Dd,{customer:N,onClose:()=>k(null),onComplete:O=>{v&&v(O,s),g(O)},isAnalysisMode:!0,analysisUser:s})]})}function om({onCustomerFound:s,onBack:d}){const[i,u]=x.useState(""),[g,p]=x.useState(!1),[v,N]=x.useState(""),k=async()=>{if(!i.trim()){N("Please enter a phone number or email");return}p(!0),N("");try{const A=i.trim(),F=A.includes("@")?A.toLowerCase():A.replace(/\D/g,"");if(!A.includes("@")&&F.length<10){N("Please enter a valid 10-digit phone number"),p(!1);return}const B=await fetch(`/api/check-ins/lookup?q=${encodeURIComponent(F)}`),re=await B.json();B.ok&&re.success&&re.data?s(re.data):B.status===404?N('No previous check-in found with this information. Please use "Check-In" for first-time visit.'):N(re.error||"Something went wrong. Please try again.")}catch{N("Unable to search. Please check your connection and try again.")}finally{p(!1)}},L=A=>{A.key==="Enter"&&k()};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-3 text-3xl",style:{color:"var(--color-gold)"},children:"Welcome Back!"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Enter your mobile number or email that you used during check-in"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Phone or Email"}),t.jsx("input",{type:"text",value:i,onChange:A=>{u(A.target.value),N("")},onKeyPress:L,placeholder:"(602) 555-1234 or email@example.com",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${v?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},disabled:g}),v&&t.jsx("p",{className:"mt-2 text-sm",style:{color:"#EF4444"},children:v})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("button",{onClick:k,disabled:g,className:"w-full py-3 rounded-lg",style:{backgroundColor:g?"var(--color-border)":"var(--color-gold)",color:"var(--color-background)",cursor:g?"not-allowed":"pointer",opacity:g?.6:1},children:g?"Searching...":"Find My Information"}),t.jsx("button",{onClick:d,disabled:g,className:"w-full py-3 rounded-lg",style:{backgroundColor:"transparent",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:g?"not-allowed":"pointer",opacity:g?.6:1},children:"Back to Home"})]})]})]})})}function nm({customerData:s,onNext:d,onBack:i}){const[u,g]=x.useState({firstName:s.firstName||"",lastName:s.lastName||"",street:s.street||"",suiteUnit:s.suiteUnit||"",city:s.city||"",state:s.state||"",zip:s.zip||"",country:s.country||"USA",phones:s.phones||[""],emails:s.emails||[""]}),[p,v]=x.useState({}),N=w=>w.split(" ").map(C=>C.charAt(0).toUpperCase()+C.slice(1).toLowerCase()).join(" "),k=()=>{const w={};u.firstName.trim()||(w.firstName="First name is required"),u.lastName.trim()||(w.lastName="Last name is required"),u.street.trim()||(w.street="Street address is required"),u.city.trim()||(w.city="City is required"),u.state.trim()||(w.state="State is required"),u.zip.trim()||(w.zip="ZIP code is required");const C=u.phones.filter(H=>H.trim());C.length===0?w.phones="At least one phone number is required":C.forEach((H,X)=>{H.replace(/\D/g,"").length!==10&&(w[`phone${X}`]="Phone must be 10 digits")});const z=u.emails.filter(H=>H.trim());return z.length===0?w.emails="At least one email is required":z.forEach((H,X)=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(H)||(w[`email${X}`]="Invalid email format")}),v(w),Object.keys(w).length===0},L=w=>{w.preventDefault(),k()&&d(u)},A=()=>{g({...u,phones:[...u.phones,""]})},F=w=>{u.phones.length>1&&g({...u,phones:u.phones.filter((C,z)=>z!==w)})},B=(w,C)=>{const z=[...u.phones];z[w]=C,g({...u,phones:z})},re=()=>{g({...u,emails:[...u.emails,""]})},$=w=>{u.emails.length>1&&g({...u,emails:u.emails.filter((C,z)=>z!==w)})},j=(w,C)=>{const z=[...u.emails];z[w]=C,g({...u,emails:z})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Review Your Information"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please review and update your details if needed"}),t.jsxs("form",{onSubmit:L,className:"space-y-4 sm:space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"First Name *"}),t.jsx("input",{type:"text",value:u.firstName,onChange:w=>g({...u,firstName:N(w.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.firstName?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.firstName&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.firstName})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Last Name *"}),t.jsx("input",{type:"text",value:u.lastName,onChange:w=>g({...u,lastName:N(w.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.lastName?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.lastName&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.lastName})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Street Address *"}),t.jsx("input",{type:"text",value:u.street,onChange:w=>g({...u,street:N(w.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.street?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.street&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.street})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:u.suiteUnit,onChange:w=>g({...u,suiteUnit:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"City *"}),t.jsx("input",{type:"text",value:u.city,onChange:w=>g({...u,city:N(w.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.city?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.city&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.city})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"State *"}),t.jsx("input",{type:"text",value:u.state,onChange:w=>g({...u,state:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.state?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.state&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.state})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"ZIP Code *"}),t.jsx("input",{type:"text",value:u.zip,onChange:w=>g({...u,zip:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.zip?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.zip&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.zip})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Country *"}),t.jsxs("select",{value:u.country,onChange:w=>g({...u,country:w.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Phone Number(s) *"}),t.jsx("button",{type:"button",onClick:A,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"+ Add Phone"})]}),u.phones.map((w,C)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{type:"tel",value:w,onChange:z=>B(C,z.target.value),placeholder:"(602) 555-1234",className:"flex-1 px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p[`phone${C}`]?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),u.phones.length>1&&t.jsx("button",{type:"button",onClick:()=>F(C),className:"px-3 rounded",style:{backgroundColor:"#EF4444",color:"white"},children:"×"})]},C)),p.phones&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.phones})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Email Address(es) *"}),t.jsx("button",{type:"button",onClick:re,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"+ Add Email"})]}),u.emails.map((w,C)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{type:"email",value:w,onChange:z=>j(C,z.target.value),placeholder:"email@example.com",className:"flex-1 px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p[`email${C}`]?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),u.emails.length>1&&t.jsx("button",{type:"button",onClick:()=>$(C),className:"px-3 rounded",style:{backgroundColor:"#EF4444",color:"white"},children:"×"})]},C)),p.emails&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.emails})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:i,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function lm({customerName:s,onReturnHome:d}){const[i,u]=x.useState(15),g=x.useRef(d);return x.useEffect(()=>{g.current=d},[d]),x.useEffect(()=>{const p=setInterval(()=>{u(v=>v<=1?(clearInterval(p),setTimeout(()=>g.current(),0),0):v-1)},1e3);return()=>clearInterval(p)},[]),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("div",{className:"flex justify-center mb-6",children:t.jsx(xs,{size:80,style:{color:"var(--color-success)"}})}),t.jsxs("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:["Thank You for Revisiting, ",s,"!"]}),t.jsx("p",{className:"mb-8",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"Your check-in is complete. A member of our team will be with you shortly."}),t.jsxs("p",{className:"mb-6",style:{color:"var(--color-text-gray)"},children:["Returning to home screen in ",t.jsx("span",{style:{color:"var(--color-gold)"},children:i})," seconds..."]}),t.jsx("button",{onClick:d,className:"px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return to Home"})]})})}function am({onLogin:s}){const[d,i]=x.useState(""),[u,g]=x.useState(""),[p,v]=x.useState(""),N=k=>{k.preventDefault(),v(""),d==="staff2"&&u==="reliance"?s(d):v("Invalid credentials. Use staff2/reliance")};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-2 text-3xl",style:{color:"var(--color-gold)"},children:"Staff2 Login"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Queue Management"}),t.jsxs("form",{onSubmit:N,className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Username"}),t.jsx("input",{type:"text",value:d,onChange:k=>{i(k.target.value),v("")},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Enter username"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Password"}),t.jsx("input",{type:"password",value:u,onChange:k=>{g(k.target.value),v("")},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Enter password"})]}),p&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239, 68, 68, 0.1)",border:"1px solid #EF4444"},children:t.jsx("p",{style:{color:"#EF4444",fontSize:"14px"},children:p})}),t.jsx("button",{type:"submit",className:"w-full py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Login"})]})]})})}const Rd=["Katia","Diane","Sathvik","Ben","Dheeraj","Om","Raj","Alana","Aman","Maria","Susheel","Harsh","Walter","Olivia","Shaik","Swatik","Ras","Self","Jugal","Preet","Lenny"];function sm({customer:s,currentUsername:d,onView:i,onDone:u,onAssign:g}){const p=(s.partySize?.adults||0)+(s.partySize?.minors||0),v=s.isRevisit===!0,N=s.currentlyHelpedBy||"",k=L=>{if(!L)return"";const A=new Date(L);return isNaN(A.getTime())?"":A.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:N?"1px solid rgba(34, 197, 94, 0.4)":"1px solid var(--color-border)"},children:t.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[t.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:s.firstName?.charAt(0).toUpperCase()||"?"}),t.jsxs("div",{className:"flex flex-col gap-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[t.jsx("p",{className:"font-medium whitespace-nowrap",style:{color:"var(--color-text-white)"},children:[s.firstName,s.lastName].filter(Boolean).join(" ")}),t.jsx("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:s.phones?.[0]||"No phone"}),t.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap",style:{backgroundColor:v?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:v?"var(--color-gold)":"#3B82F6"},children:v?"Revisiting":"First Time"}),t.jsxs("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:["👥 ",p," visitor",p!==1?"s":""]}),s.checkInTime&&t.jsxs("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:["🕐 ",k(s.checkInTime)]})]}),N&&t.jsxs("p",{className:"text-xs",style:{color:"#22C55E"},children:["✓ Assigned to ",N]})]})]}),t.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[t.jsxs("select",{value:N,onChange:L=>g(s.id,L.target.value),className:"px-3 py-2 rounded-lg font-medium",style:{backgroundColor:N?"rgba(34, 197, 94, 0.1)":"var(--color-background)",border:N?"1px solid #22C55E":"1px solid var(--color-border)",color:N?"#22C55E":"var(--color-text-white)",cursor:"pointer"},children:[t.jsx("option",{value:"",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)"},children:"— Assign —"}),Rd.map(L=>t.jsx("option",{value:L,style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)"},children:L},L))]}),t.jsx("button",{onClick:()=>i(s),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"View"}),t.jsx("button",{onClick:()=>u(s.id),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Done"})]})]})})}function im({customer:s,onClose:d,onSave:i}){const[u,g]=x.useState([s.firstName,s.lastName].filter(Boolean).join(" ")),[p,v]=x.useState({street:s.street||"",suiteUnit:s.suiteUnit||"",city:s.city||"",state:s.state||"",zip:s.zip||"",country:s.country||"USA",phones:s.phones||[""],emails:s.emails||[""]}),N=P=>P.split(" ").map(K=>K.charAt(0).toUpperCase()+K.slice(1).toLowerCase()).join(" "),k=()=>{v({...p,phones:[...p.phones,""]})},L=P=>{p.phones.length>1&&v({...p,phones:p.phones.filter((K,D)=>D!==P)})},A=(P,K)=>{const D=[...p.phones];D[P]=K,v({...p,phones:D})},F=()=>{v({...p,emails:[...p.emails,""]})},B=P=>{p.emails.length>1&&v({...p,emails:p.emails.filter((K,D)=>D!==P)})},re=(P,K)=>{const D=[...p.emails];D[P]=K,v({...p,emails:D})},[$,j]=x.useState([]),[w,C]=x.useState(!1),[z,H]=x.useState(!1),[X,q]=x.useState(null);x.useEffect(()=>{const P=s.phones?.[0];P&&(H(!0),fetch(`/api/images/customer/${encodeURIComponent(P)}`).then(K=>K.json()).then(K=>{K.success&&Array.isArray(K.data)&&j(K.data.filter(D=>D.images.length>0))}).catch(()=>{}).finally(()=>H(!1)))},[s.phones]);const _=()=>{if(!u.trim()){alert("Full name is required");return}const P=u.trim().split(/\s+/),K=P[0]||"",D=P.slice(1).join(" ");i(s.id,{firstName:K,lastName:D,...p})};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-6 z-50",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsxs("div",{className:"flex justify-between items-start mb-6",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl",style:{color:"var(--color-gold)"},children:[s.firstName,s.lastName].filter(Boolean).join(" ")}),t.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-text-gray)"},children:s.isRevisit?"Revisiting Customer":"First Time Customer"})]}),t.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Customer Information"}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Full Name *"}),t.jsx("input",{type:"text",value:u,onChange:P=>g(N(P.target.value)),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Street Address"}),t.jsx("input",{type:"text",value:p.street,onChange:P=>v({...p,street:N(P.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:p.suiteUnit,onChange:P=>v({...p,suiteUnit:P.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"City"}),t.jsx("input",{type:"text",value:p.city,onChange:P=>v({...p,city:N(P.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"State"}),t.jsx("input",{type:"text",value:p.state,onChange:P=>v({...p,state:P.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"ZIP"}),t.jsx("input",{type:"text",value:p.zip,onChange:P=>v({...p,zip:P.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Phones"}),p.phones.map((P,K)=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("input",{type:"text",value:P,onChange:D=>A(K,D.target.value),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("button",{onClick:()=>L(K),className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:16})})]},K)),t.jsx("button",{onClick:k,className:"py-2 px-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Add Phone"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Emails"}),p.emails.map((P,K)=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("input",{type:"text",value:P,onChange:D=>re(K,D.target.value),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("button",{onClick:()=>B(K),className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:16})})]},K)),t.jsx("button",{onClick:F,className:"py-2 px-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Add Email"})]})]}),s.referralSources&&s.referralSources.length>0&&t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Referral Information"}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:s.referralSources.map((P,K)=>t.jsxs("div",{className:"mb-3 last:mb-0",children:[t.jsxs("p",{style:{color:"var(--color-gold)"},children:["• ",P.type]}),P.name&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Name: ",P.name]}),P.phone&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Phone: ",P.phone]}),P.location&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Location: ",P.location]})]},K))})]}),s.partySize&&t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Party Information"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Adults"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:s.partySize.adults})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Minors"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:s.partySize.minors})]})]}),s.visitors&&s.visitors.length>0&&t.jsxs("div",{children:[t.jsx("h4",{className:"text-lg mb-3",style:{color:"var(--color-text-white)"},children:"Visitors & Signatures"}),t.jsx("div",{className:"space-y-4",children:s.visitors.map((P,K)=>t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:P.isMain?"2px solid var(--color-gold)":"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx("span",{className:"font-medium",style:{color:"var(--color-text-white)"},children:P.name}),P.isMain&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:"Main"}),P.isMinor&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",color:"var(--color-text-gray)"},children:"Minor (No signature required)"})]}),P.signature&&!P.isMinor&&t.jsxs("div",{children:[t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-text-gray)"},children:"Signature:"}),t.jsx("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"white",border:"1px solid var(--color-border)",maxWidth:"400px"},children:t.jsx("img",{src:P.signature,alt:`${P.name} signature`,style:{width:"100%",height:"auto",maxHeight:"150px",objectFit:"contain"}})})]})]},K))})]})]}),t.jsxs("div",{className:"mb-8 rounded-lg overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[t.jsxs("button",{onClick:()=>C(P=>!P),className:"w-full flex items-center justify-between px-4 py-3",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-white)",border:"none",cursor:"pointer"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ys,{size:16,style:{color:"var(--color-gold)"}}),t.jsx("span",{children:"Uploaded Images"}),!z&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212,167,54,0.15)",color:"var(--color-gold)"},children:$.reduce((P,K)=>P+K.images.length,0)})]}),w?t.jsx(Cd,{size:16,style:{color:"var(--color-text-gray)"}}):t.jsx(wd,{size:16,style:{color:"var(--color-text-gray)"}})]}),w&&t.jsx("div",{className:"p-4",style:{borderTop:"1px solid var(--color-border)"},children:z?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Loading…"}):$.length===0?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No images uploaded."}):t.jsx("div",{className:"space-y-5",children:$.map(P=>t.jsxs("div",{children:[$.length>1&&t.jsxs("p",{className:"mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:["Visit: ",new Date(P.checkInTime).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),t.jsx("div",{className:"grid gap-3",style:{gridTemplateColumns:"repeat(auto-fill, minmax(110px, 1fr))"},children:P.images.map(K=>t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{aspectRatio:"1",border:"1px solid var(--color-border)",cursor:"pointer"},onClick:()=>q(K.image_url),children:[t.jsx("img",{src:K.image_url,alt:"Material",className:"w-full h-full object-cover"}),t.jsxs("div",{className:"absolute bottom-0 right-0 px-1.5 py-0.5 text-xs font-semibold rounded-tl-lg",style:{backgroundColor:"rgba(0,0,0,0.75)",color:"var(--color-gold)"},children:["×",K.quantity]})]},K.id))})]},P.checkInId))})})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Cancel"}),t.jsx("button",{onClick:_,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Save Changes"})]})]})}),X&&t.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},onClick:()=>q(null),children:[t.jsx("img",{src:X,alt:"Enlarged material",style:{maxWidth:"90vw",maxHeight:"90vh",display:"block",borderRadius:"8px"},onClick:P=>P.stopPropagation()}),t.jsx("button",{onClick:()=>q(null),style:{position:"absolute",top:"16px",right:"16px",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",color:"white",fontSize:"22px",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})]})}function cm({username:s,onLogout:d,checkIns:i,onMarkAsDone:u}){const[g,p]=x.useState("queue"),[v,N]=x.useState([]),[k,L]=x.useState([]),[A,F]=x.useState(null),[B,re]=x.useState(!1),[$,j]=x.useState(1),[w,C]=x.useState(1),z=15,[H,X]=x.useState(new Date().getMonth()+1),[q,_]=x.useState(new Date().getDate()),[P,K]=x.useState(new Date().getFullYear()),[D,R]=x.useState(i),[ee,oe]=x.useState(0);x.useEffect(()=>{const U=D.filter(J=>J.status==="waiting").sort((J,ce)=>new Date(J.checkInTime).getTime()-new Date(ce.checkInTime).getTime());N(U)},[D]),x.useEffect(()=>{if(g!=="history")return;const U=String(H).padStart(2,"0"),J=String(q).padStart(2,"0");fetch(`/api/check-ins?date=${P}-${U}-${J}`).then(ce=>ce.json()).then(ce=>{ce.success&&Array.isArray(ce.data)&&L(ce.data)}).catch(()=>{})},[g,H,q,P,ee]),x.useEffect(()=>{fetch("/api/check-ins").then(J=>J.json()).then(J=>{J.success&&Array.isArray(J.data)&&R(J.data)}).catch(()=>{});const U=new EventSource("/api/check-ins/events");return U.onmessage=J=>{try{const ce=JSON.parse(J.data);ce.type==="update"&&Array.isArray(ce.data)&&(R(ce.data),oe(ke=>ke+1))}catch{}},U.onerror=()=>{},()=>U.close()},[]);const ve=async U=>{F(U),re(!0);try{const ce=await(await fetch(`/api/check-ins/${U.id}`)).json();ce.success&&ce.data&&F(ce.data)}catch{}},Ce=async U=>{const J=new Date().toISOString(),ke=D.find(be=>be.id===U)?.currentlyHelpedBy||null;R(be=>be.map(_e=>_e.id===U?{..._e,status:"done",helpedTime:J,helpedBy:ke}:_e));try{await fetch(`/api/check-ins/${U}/done`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({helpedBy:ke})})}catch{R(be=>be.map(_e=>_e.id===U?{..._e,status:"waiting",helpedTime:null}:_e))}u(U)},Te=async(U,J)=>{R(ce=>ce.map(ke=>ke.id===U?{...ke,currentlyHelpedBy:J||null}:ke));try{await fetch(`/api/check-ins/${U}/claim`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({helpedBy:J})})}catch{}},Me=async(U,J)=>{R(ce=>ce.map(ke=>ke.id===U?{...ke,...J}:ke)),re(!1)},Se=k.length,G=k.filter(U=>!U.isRevisit).length,ie=k.filter(U=>U.isRevisit).length,te={};for(const U of k){const J=U.helpedBy;J&&(te[J]=(te[J]||0)+1)}const h=Rd.filter(U=>te[U]).map(U=>({name:U,count:te[U]})),I=["January","February","March","April","May","June","July","August","September","October","November","December"],ye=Array.from({length:31},(U,J)=>J+1),fe=[2024,2025,2026,2027];return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("header",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsx("span",{className:"text-xl font-medium",style:{color:"var(--color-text-white)"},children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("span",{style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:[t.jsx(un,{size:18}),"Logout"]})]})]})}),t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"flex px-6",children:[t.jsxs("button",{onClick:()=>p("queue"),className:"px-6 py-4 font-medium border-b-2",style:{color:g==="queue"?"var(--color-gold)":"var(--color-text-gray)",borderColor:g==="queue"?"var(--color-gold)":"transparent"},children:["Queue (",v.length,")"]}),t.jsx("button",{onClick:()=>p("history"),className:"px-6 py-4 font-medium border-b-2",style:{color:g==="history"?"var(--color-gold)":"var(--color-text-gray)",borderColor:g==="history"?"var(--color-gold)":"transparent"},children:"History"})]})}),t.jsx("div",{className:"p-6",children:g==="queue"?t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-6",style:{color:"var(--color-text-white)"},children:"Customer Queue"}),v.length===0?t.jsx("div",{className:"text-center py-12 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No customers in queue"})}):t.jsx("div",{className:"space-y-4",children:v.slice(($-1)*z,$*z).map(U=>t.jsx(sm,{customer:U,currentUsername:s,onView:ve,onDone:Ce,onAssign:Te},U.id))}),v.length>z&&t.jsxs("div",{className:"flex justify-center mt-4",children:[t.jsx("button",{onClick:()=>j($-1),disabled:$===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Previous"}),t.jsxs("span",{className:"mx-4",style:{color:"var(--color-text-gray)"},children:["Page ",$," of ",Math.ceil(v.length/z)]}),t.jsx("button",{onClick:()=>j($+1),disabled:$*z>=v.length,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Next"})]})]}):t.jsxs("div",{children:[t.jsxs("div",{className:"mb-6",children:[t.jsx("h2",{className:"text-2xl mb-4",style:{color:"var(--color-text-white)"},children:"Daily Visitors"}),t.jsxs("div",{className:"flex flex-wrap gap-4 mb-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Month"}),t.jsx("select",{value:H,onChange:U=>{X(parseInt(U.target.value)),C(1)},className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:I.map((U,J)=>t.jsx("option",{value:J+1,children:U},J))})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Day"}),t.jsx("select",{value:q,onChange:U=>{_(parseInt(U.target.value)),C(1)},className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:ye.map(U=>t.jsx("option",{value:U,children:U},U))})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Year"}),t.jsx("select",{value:P,onChange:U=>{K(parseInt(U.target.value)),C(1)},className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:fe.map(U=>t.jsx("option",{value:U,children:U},U))})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Visitors"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--color-gold)"},children:Se})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"New Customers"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"#3B82F6"},children:G})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Revisits"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--color-gold)"},children:ie})]})]}),h.length>0&&t.jsxs("div",{className:"p-4 rounded-lg mb-6",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm font-medium mb-3",style:{color:"var(--color-text-gray)"},children:"Staff Summary"}),t.jsx("div",{className:"flex flex-wrap gap-3",children:h.map(({name:U,count:J})=>t.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("span",{style:{color:"var(--color-text-white)"},children:U}),t.jsx("span",{className:"px-2 py-0.5 rounded-full text-xs font-bold",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:J})]},U))})]})]}),k.length===0?t.jsx("div",{className:"text-center py-12 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No visitors for selected date"})}):t.jsx("div",{className:"space-y-4",children:k.slice((w-1)*z,w*z).map(U=>t.jsx("div",{className:"p-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},onClick:()=>ve(U),children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:U.firstName?.charAt(0).toUpperCase()||"?"}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("p",{className:"font-medium",style:{color:"var(--color-text-white)"},children:[U.firstName,U.lastName].filter(Boolean).join(" ")}),t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:U.isRevisit?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:U.isRevisit?"var(--color-gold)":"#3B82F6"},children:U.isRevisit?"Revisiting":"First Time"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:U.phones?.[0]||"No phone"}),U.helpedBy&&t.jsxs("p",{className:"text-xs",style:{color:"#22C55E"},children:["✓ Helped by ",U.helpedBy]})]})]})]}),t.jsx("div",{className:"text-right",children:t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["👥 ",(U.partySize?.adults||0)+(U.partySize?.minors||0)," visitors"]})})]})},U.id))}),k.length>z&&t.jsxs("div",{className:"flex justify-center mt-4",children:[t.jsx("button",{onClick:()=>C(w-1),disabled:w===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Previous"}),t.jsxs("span",{className:"mx-4",style:{color:"var(--color-text-gray)"},children:["Page ",w," of ",Math.ceil(k.length/z)]}),t.jsx("button",{onClick:()=>C(w+1),disabled:w*z>=k.length,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Next"})]})]})}),B&&A&&t.jsx(im,{customer:A,onClose:()=>{re(!1),F(null)},onSave:Me})]})}const an=15;function dm({customerName:s,checkInId:d,authToken:i,onDone:u}){const[g,p]=x.useState([]),[v,N]=x.useState({}),[k,L]=x.useState(!1),[A,F]=x.useState(""),B=x.useRef(null),re=x.useRef({});x.useEffect(()=>{fetch(`/api/images/check-in/${d}`,{headers:{Authorization:`Bearer ${i}`}}).then(z=>z.json()).then(z=>{if(z.success&&Array.isArray(z.data)){p(z.data);const H={};z.data.forEach(X=>{H[X.id]=X.quantity}),N(H)}}).catch(()=>{})},[d,i]);const $=async z=>{const H=Array.from(z.target.files||[]);if(!H.length)return;const X=an-g.length,q=H.slice(0,X);if(q.length===0){F(`You've reached the maximum of ${an} images.`),B.current&&(B.current.value="");return}F(H.length>q.length?`Only ${q.length} image(s) added — ${an} image maximum.`:""),L(!0);const _=new FormData;q.forEach(P=>_.append("images",P)),_.append("quantities",JSON.stringify(q.map(()=>1)));try{const P=await fetch("/api/images/upload",{method:"POST",headers:{Authorization:`Bearer ${i}`},body:_}),K=await P.json();if(!P.ok)F(K.error||"Upload failed. Please try again.");else{const D=K.data;p(R=>[...R,...D]),N(R=>{const ee={...R};return D.forEach(oe=>{ee[oe.id]=oe.quantity}),ee})}}catch{F("Upload failed. Please check your connection.")}finally{L(!1),B.current&&(B.current.value="")}},j=x.useCallback((z,H)=>{N(X=>{const q=X[z]??1,_=Math.max(1,Math.min(99,q+H));return _===q?X:(re.current[z]&&clearTimeout(re.current[z]),re.current[z]=setTimeout(async()=>{try{await fetch(`/api/images/${z}/quantity`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({quantity:_})})}catch{}},600),{...X,[z]:_})})},[i]),w=async z=>{p(H=>H.filter(X=>X.id!==z)),N(H=>{const X={...H};return delete X[z],X});try{await fetch(`/api/images/${z}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`}})}catch{}},C=g.length>=an;return t.jsx("div",{className:"min-h-screen p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl mx-auto",children:[t.jsxs("div",{className:"mb-8 text-center",children:[t.jsxs("h1",{style:{color:"var(--color-gold)"},children:["Welcome, ",s,"!"]}),t.jsx("p",{className:"mt-2",style:{color:"var(--color-text-gray)"},children:"Upload photos of materials you're interested in (optional)"})]}),t.jsxs("div",{className:"mb-4 text-center",children:[t.jsx("input",{ref:B,type:"file",accept:"image/*",multiple:!0,className:"hidden",onChange:$,disabled:k||C}),t.jsxs("button",{onClick:()=>B.current?.click(),disabled:k||C,className:"px-6 py-3 rounded-lg font-semibold",style:{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"8px",whiteSpace:"nowrap",backgroundColor:C?"var(--color-border)":"var(--color-gold)",color:C?"var(--color-text-gray)":"var(--color-background)",cursor:C?"not-allowed":"pointer"},children:[t.jsx(yh,{size:20}),k?"Uploading…":"Add Photos"]})]}),t.jsxs("p",{className:"mb-4 text-center",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:[g.length," / ",an," images"]}),A&&t.jsx("div",{className:"mb-4 p-3 rounded-lg",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{className:"text-center",style:{color:"var(--color-error)"},children:A})}),g.length>0&&t.jsx("div",{className:"space-y-3 mb-8",children:g.map(z=>t.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("img",{src:z.image_url,alt:"Uploaded material",className:"rounded object-cover flex-shrink-0",style:{width:120,height:120}}),t.jsx("div",{className:"flex-1"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>j(z.id,-1),className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:t.jsx(Pd,{size:14})}),t.jsx("span",{className:"w-8 text-center",style:{color:"var(--color-text-white)",fontWeight:600},children:v[z.id]??z.quantity}),t.jsx("button",{onClick:()=>j(z.id,1),className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:t.jsx(dn,{size:14})})]}),t.jsx("button",{onClick:()=>w(z.id),className:"w-8 h-8 rounded-full flex items-center justify-center ml-2",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)",color:"var(--color-error)"},children:t.jsx(ct,{size:16})})]},z.id))}),g.length===0&&!k&&t.jsxs("div",{className:"mb-8 py-12 text-center rounded-lg",style:{border:"2px dashed var(--color-border)"},children:[t.jsx(ys,{size:48,className:"mx-auto mb-3",style:{color:"var(--color-text-gray)"}}),t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No photos uploaded yet"})]}),t.jsx("button",{onClick:u,disabled:k,className:"w-full py-4 rounded-lg font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:k?.7:1},children:"Done"})]})})}function um({checkInId:s,authToken:d,onDone:i}){const[u,g]=x.useState(0),[p,v]=x.useState(0),[N,k]=x.useState(""),[L,A]=x.useState(!1),[F,B]=x.useState(!1),[re,$]=x.useState(15),j=x.useRef(i);x.useEffect(()=>{j.current=i},[i]),x.useEffect(()=>{if(!F)return;const C=setInterval(()=>{$(z=>z<=1?(clearInterval(C),setTimeout(()=>j.current(),0),0):z-1)},1e3);return()=>clearInterval(C)},[F]);const w=async C=>{if(C){B(!0);return}if(u!==0){A(!0);try{await fetch("/api/survey",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify({starRating:u,comment:N.trim()||void 0})})}catch{}finally{A(!1),B(!0)}}};return F?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx(xs,{size:72,className:"mx-auto mb-6",style:{color:"var(--color-success)"}}),t.jsx("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:"Thank You!"}),t.jsx("p",{className:"mb-6",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"We appreciate your feedback."}),t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:["Returning to home screen in"," ",t.jsx("span",{style:{color:"var(--color-gold)"},children:re})," seconds…"]}),t.jsx("button",{onClick:()=>j.current(),className:"mt-6 px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return Home"})]})}):t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("h1",{className:"text-center mb-2",style:{color:"var(--color-gold)"},children:"How was your experience?"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Your feedback helps us improve."}),t.jsx("div",{className:"flex justify-center gap-3 mb-8",children:[1,2,3,4,5].map(C=>{const z=C<=(p||u);return t.jsx("button",{onClick:()=>g(C),onMouseEnter:()=>v(C),onMouseLeave:()=>v(0),className:"p-2 rounded-lg transition-transform",style:{background:"none",border:"none",transform:p===C?"scale(1.15)":"scale(1)",cursor:"pointer"},"aria-label":`${C} star${C!==1?"s":""}`,children:t.jsx(Nl,{size:48,fill:z?"var(--color-gold)":"none",style:{color:z?"var(--color-gold)":"var(--color-border)"}})},C)})}),t.jsxs("div",{className:"mb-8",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Any additional feedback?"}),t.jsx("textarea",{value:N,onChange:C=>k(C.target.value),rows:4,placeholder:"Optional — share your thoughts…",className:"w-full px-4 py-3 rounded-lg resize-none",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsx("button",{onClick:()=>w(!1),disabled:L||u===0,className:"w-full py-4 rounded-lg mb-4 font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:L||u===0?.5:1,cursor:u===0?"not-allowed":"pointer"},children:L?"Submitting…":"Submit"}),t.jsx("div",{className:"text-center",children:t.jsx("button",{onClick:()=>w(!0),disabled:L,style:{color:"var(--color-text-gray)",background:"none",border:"none",cursor:"pointer",fontSize:"14px",textDecoration:"underline"},children:"Skip"})})]})})}function pm({rating:s}){return t.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4,5].map(d=>t.jsx(Nl,{size:16,fill:d<=s?"var(--color-gold)":"none",style:{color:d<=s?"var(--color-gold)":"var(--color-border)"}},d))})}function hm({onLogout:s}){const[d,i]=x.useState([]),[u,g]=x.useState(null),[p,v]=x.useState(1),[N,k]=x.useState(""),[L,A]=x.useState(""),[F,B]=x.useState(!1),[re,$]=x.useState(""),j=x.useCallback(async(H,X,q)=>{B(!0),$("");try{const _=new URLSearchParams({page:String(H)});X&&_.set("startDate",X),q&&_.set("endDate",q);const P=await fetch(`/api/survey/responses?${_}`),K=await P.json();P.ok?(i(K.data),g(K.meta)):$(K.error||"Failed to load responses.")}catch{$("Failed to load responses. Please check your connection.")}finally{B(!1)}},[]);x.useEffect(()=>{j(p,N,L)},[p,j]);const w=()=>{v(1),j(1,N,L)},C=()=>{k(""),A(""),v(1),j(1,"","")},z=u?Math.max(...[1,2,3,4,5].map(H=>u.distribution[H]??0),1):1;return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("header",{style:{backgroundColor:"var(--color-card)",borderBottom:"1px solid var(--color-border)",padding:"16px 24px"},children:t.jsxs("div",{className:"max-w-6xl mx-auto flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h2",{style:{color:"var(--color-gold)",margin:0},children:"Customer Ratings"}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",margin:0},children:"Survey responses"})]})]}),t.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:[t.jsx(un,{size:16}),"Logout"]})]})}),t.jsxs("div",{className:"max-w-6xl mx-auto p-6 space-y-6",children:[u&&t.jsxs("div",{className:"grid gap-4",style:{gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))"},children:[t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:8},children:"Average Rating"}),t.jsxs("div",{className:"flex items-end gap-2",children:[t.jsx("span",{style:{color:"var(--color-gold)",fontSize:"40px",fontWeight:700,lineHeight:1},children:u.averageRating.toFixed(1)}),t.jsx(Nl,{size:24,fill:"var(--color-gold)",style:{color:"var(--color-gold)",marginBottom:4}})]}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginTop:4},children:"out of 5"})]}),t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:8},children:"Total Responses"}),t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"40px",fontWeight:700,lineHeight:1},children:u.total}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginTop:4},children:"submissions"})]}),t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",gridColumn:"span 2"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:12},children:"Rating Distribution"}),t.jsx("div",{className:"space-y-2",children:[5,4,3,2,1].map(H=>{const X=u.distribution[H]??0,q=u.total>0?X/u.total*100:0,_=z>0?X/z*100:0;return t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",style:{width:80},children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"13px",width:12,textAlign:"right"},children:H}),t.jsx(Nl,{size:12,fill:"var(--color-gold)",style:{color:"var(--color-gold)"}})]}),t.jsx("div",{className:"flex-1 rounded-full overflow-hidden",style:{height:8,backgroundColor:"var(--color-background)"},children:t.jsx("div",{className:"h-full rounded-full",style:{width:`${_}%`,backgroundColor:"var(--color-gold)",transition:"width 0.3s ease"}})}),t.jsxs("span",{style:{color:"var(--color-text-gray)",fontSize:"12px",width:60,textAlign:"right"},children:[X," (",q.toFixed(0),"%)"]})]},H)})})]})]}),t.jsxs("div",{className:"p-4 rounded-xl flex flex-wrap items-end gap-4",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1",style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"From"}),t.jsx("input",{type:"date",value:N,onChange:H=>k(H.target.value),className:"px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",colorScheme:"dark"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1",style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"To"}),t.jsx("input",{type:"date",value:L,onChange:H=>A(H.target.value),className:"px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",colorScheme:"dark"}})]}),t.jsx("button",{onClick:w,className:"px-5 py-2 rounded-lg font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Apply"}),(N||L)&&t.jsx("button",{onClick:C,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),re&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{style:{color:"var(--color-error)"},children:re})}),t.jsx("div",{className:"rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsx("tr",{style:{backgroundColor:"var(--color-card)",borderBottom:"1px solid var(--color-border)"},children:["Date","Customer","Rating","Comment"].map(H=>t.jsx("th",{className:"text-left px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"13px",fontWeight:600},children:H},H))})}),t.jsx("tbody",{children:F?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"px-4 py-12 text-center",style:{color:"var(--color-text-gray)"},children:"Loading…"})}):d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"px-4 py-12 text-center",style:{color:"var(--color-text-gray)"},children:"No survey responses found."})}):d.map((H,X)=>t.jsxs("tr",{style:{backgroundColor:X%2===0?"var(--color-background)":"var(--color-card)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"14px",whiteSpace:"nowrap"},children:new Date(H.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-white)",fontSize:"14px"},children:H.customerName}),t.jsx("td",{className:"px-4 py-3",children:t.jsx(pm,{rating:H.starRating})}),t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"14px",maxWidth:400},children:H.comment||t.jsx("span",{style:{fontStyle:"italic",opacity:.5},children:"No comment"})})]},H.id))})]})}),u&&u.totalPages>1&&t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:["Page ",u.page," of ",u.totalPages," · ",u.total," total"]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{onClick:()=>v(H=>Math.max(1,H-1)),disabled:p<=1,className:"flex items-center gap-1 px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:p<=1?"var(--color-text-gray)":"var(--color-text-white)",cursor:p<=1?"not-allowed":"pointer",opacity:p<=1?.5:1},children:[t.jsx(Jp,{size:16})," Prev"]}),t.jsxs("button",{onClick:()=>v(H=>Math.min(u.totalPages,H+1)),disabled:p>=u.totalPages,className:"flex items-center gap-1 px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:p>=u.totalPages?"var(--color-text-gray)":"var(--color-text-white)",cursor:p>=u.totalPages?"not-allowed":"pointer",opacity:p>=u.totalPages?.5:1},children:["Next ",t.jsx(eh,{size:16})]})]})]})]})]})}function mm(s){const d=s.materials||[],i=d.length>0||s.selectionSheetNumber||s.fabricator||s.draftStep>0;return{id:s.id,isRevisit:s.isRevisit||!1,firstName:s.firstName,lastName:s.lastName,street:s.street,suiteUnit:s.suiteUnit||"",city:s.city,state:s.state,zip:s.zip,country:s.country,phones:s.phones||[],emails:s.emails||[],referralSources:s.referralSources||[],signature:s.signature||"",checkInTime:new Date(s.checkInTime),helpedTime:s.helpedTime?new Date(s.helpedTime):void 0,status:s.status,currentlyHelpedBy:s.currentlyHelpedBy||void 0,partySize:s.partySize||{adults:1,minors:0},visitors:s.visitors||[],draft:i?{step:s.status==="helped"?3:s.draftStep||0,editedCustomerData:{},materials:d,selectedFabricator:s.fabricator||void 0,helpedBy:s.helpedBy||void 0,selectionSheetNumber:s.selectionSheetNumber||"",isHold:d.some(u=>u.hold)}:void 0}}function fm(){const[s,d]=x.useState(()=>{const m=localStorage.getItem("staff2Session");if(m)try{const{expiry:W}=JSON.parse(m);if(Date.now()<W)return"staff2-dashboard"}catch{}return"home"}),[i,u]=x.useState({}),[g,p]=x.useState([]),[v,N]=x.useState(""),[k,L]=x.useState({adults:1,minors:0}),[A,F]=x.useState(!1),[B,re]=x.useState(null),[$,j]=x.useState([]),[w,C]=x.useState(0),[z,H]=x.useState([]),[X,q]=x.useState(!1),[_,P]=x.useState(null),[K,D]=x.useState(()=>{const m=localStorage.getItem("staff2Session");if(m)try{const{username:W,expiry:me}=JSON.parse(m);if(Date.now()<me)return W;localStorage.removeItem("staff2Session")}catch{localStorage.removeItem("staff2Session")}return""}),[R,ee]=x.useState(null),[oe,ve]=x.useState(null);x.useEffect(()=>{fetch("/api/check-ins").then(m=>m.json()).then(m=>{m.success&&Array.isArray(m.data)&&p(m.data.map(mm))}).catch(m=>console.error("Failed to load check-ins:",m))},[]);const Ce=m=>{u({...i,...m,referralSources:[]}),d("customer-step3a")},Te=m=>{u({...i,...m}),d("customer-step3a")},Me=m=>{L(m),d("customer-step3b")},Se=m=>{console.log("=== STEP 3B NEXT ==="),console.log("Signature data received:",{hasSignature:!!m.signature,signatureLength:m.signature?.length,signaturePreview:m.signature?.substring(0,50),hasEsignConsent:!!m.esignConsentTimestamp,sessionId:m.sessionId,deviceType:m.deviceInfo?.deviceType}),re(m),k.adults>1?(C(0),j([]),d("customer-step3c")):k.minors>0?d("customer-step3d"):h(void 0,void 0,m)},G=m=>{const W=[...$];W[w]=m,j(W);const me=k.adults-2;w<me?C(w+1):k.minors>0?d("customer-step3d"):h(void 0,W)},ie=()=>{w===0?d("customer-step3b"):C(w-1)},te=m=>{console.log("=== STEP 3D SUBMIT ==="),console.log("Received names:",m),console.log("Names length:",m.length),h(m)},h=async(m,W,me)=>{if(X)return;q(!0);const he=m!==void 0?m:z,Ke=W!==void 0?W:$,E=me!==void 0?me:B,de=[{name:[i.firstName,i.lastName].filter(Boolean).join(" "),signature:E?.signature||"",isMain:!0,isMinor:!1},...Ke.map(xe=>({name:xe.name,signature:xe.signature,isMain:!1,isMinor:!1})),...he.map(xe=>({name:xe,signature:"",isMain:!1,isMinor:!0}))],De={firstName:i.firstName,lastName:i.lastName,street:i.street,suiteUnit:i.suiteUnit||"",city:i.city,state:i.state,zip:i.zip,country:i.country,phones:i.phones,emails:i.emails,referralSources:i.referralSources||[],signature:E?.signature||"",partySize:k,visitors:de,checkInTime:new Date().toISOString(),esignConsentTimestamp:E?.esignConsentTimestamp,sessionId:E?.sessionId,deviceInfo:E?.deviceInfo};try{const xe=await fetch("/api/check-ins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(De)}),O=await xe.json();if(!xe.ok){console.error("Check-in API error:",O);let Ee="Check-in failed. Please try again.";xe.status===403?Ee="Check-in is only available on the office network. Please connect to the office Wi-Fi.":xe.status===409?(Ee=O.error,d("customer-step1")):xe.status===400&&(Ee="Some information was invalid. Please review and re-enter your details.",d("customer-step1")),alert(Ee),q(!1);return}console.log("Check-in successful:",O.data.id),O.data.waiverPdfUrl&&console.log("Waiver PDF:",O.data.waiverPdfUrl);const ae={id:O.data.id,...i,signatureData:E?.signature||"",checkInTime:new Date(O.data.checkInTime),status:"waiting",partySize:k,visitors:de};p([...g,ae])}catch(xe){console.error("Check-in network error:",xe),alert("Check-in failed. Please check your connection and try again."),q(!1);return}F(k.minors>0),L({adults:1,minors:0}),re(null),j([]),C(0),H([]),q(!1),d("customer-step4")},I=x.useCallback(()=>{u({}),F(!1),L({adults:1,minors:0}),re(null),j([]),C(0),H([]),d("home")},[]),ye=(m,W,me)=>{W==="staff2"?Je(m):W==="customer"&&me?(ee(me),d("customer-upload")):W==="rating"?(N(m),d("rating-dashboard")):(N(m),d(W==="pricing"?"pricing-dashboard":W==="analysis"?"analysis-dashboard":"staff-dashboard"))},fe=()=>{R&&ve({token:R.token,checkInId:R.checkInId}),ee(null),d("customer-survey")},U=()=>{ve(null),d("home")},J=()=>{N(""),d("home")},ce=m=>{p(W=>W.map(me=>me.id===m?{...me,status:"helped",helpedTime:new Date,currentlyHelpedBy:void 0}:me))},ke=(m,W)=>{p(me=>me.map(he=>he.id===m?{...he,currentlyHelpedBy:W}:he))},be=m=>{p(W=>W.map(me=>me.id===m?{...me,priced:!0,pricedTime:new Date}:me))},_e=m=>{p(W=>W.map(me=>me.id===m?{...me,checkInTime:new Date}:me))},ar=m=>{P(m),d("revisit-step1")},Ir=m=>{P(W=>({...W,...m})),d("revisit-step3a")},jr=m=>{L(m),d("revisit-step3b")},$e=m=>{re(m),k.adults>1?(C(0),j([]),d("revisit-step3c")):k.minors>0?d("revisit-step3d"):Ie(void 0,void 0,m)},Nr=m=>{const W=[...$];W[w]=m,j(W);const me=k.adults-2;w<me?C(w+1):k.minors>0?d("revisit-step3d"):Ie(void 0,W)},wr=()=>{w===0?d("revisit-step3b"):C(w-1)},Lr=m=>{Ie(m)},Ie=async(m,W,me)=>{if(X)return;q(!0);const he=m!==void 0?m:z,Ke=W!==void 0?W:$,E=me!==void 0?me:B,de=[{name:[_.firstName,_.lastName].filter(Boolean).join(" "),signature:E?.signature||"",isMain:!0,isMinor:!1},...Ke.map(xe=>({name:xe.name,signature:xe.signature,isMain:!1,isMinor:!1})),...he.map(xe=>({name:xe,signature:"",isMain:!1,isMinor:!0}))],De={firstName:_.firstName,lastName:_.lastName,street:_.street,suiteUnit:_.suiteUnit||"",city:_.city,state:_.state,zip:_.zip,country:_.country,phones:_.phones,emails:_.emails,referralSources:_.referralSources||[],signature:E?.signature||"",partySize:k,visitors:de,checkInTime:new Date().toISOString(),isRevisit:!0,esignConsentTimestamp:E?.esignConsentTimestamp,sessionId:E?.sessionId,deviceInfo:E?.deviceInfo};try{const xe=await fetch("/api/check-ins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(De)}),O=await xe.json();if(!xe.ok){xe.status===403?alert("Check-in is only available on the office network. Please connect to the office Wi-Fi."):alert("Revisit check-in failed. Please try again."),q(!1);return}const ae={id:O.data.id,..._,isRevisit:!0,signature:E?.signature||"",checkInTime:new Date(O.data.checkInTime),status:"waiting",partySize:k,visitors:de};p(Ee=>[...Ee,ae])}catch{alert("Revisit check-in failed. Please check your connection."),q(!1);return}L({adults:1,minors:0}),re(null),j([]),C(0),H([]),q(!1),d("revisit-confirmation")},Je=m=>{const W=Date.now()+288e5;localStorage.setItem("staff2Session",JSON.stringify({username:m,expiry:W})),D(m),d("staff2-dashboard")},Le=()=>{localStorage.removeItem("staff2Session"),D(""),d("home")},hr=m=>{p(W=>W.map(me=>me.id===m?{...me,status:"done"}:me))},vr=(m,W)=>{p(me=>me.map(he=>he.id===m?{...he,draft:W}:he))},yr=m=>{g.filter(he=>he.firstName===m.firstName&&he.lastName===m.lastName&&he.status==="helped"&&he.draft?.selectionSheetNumber);let W=m.draft?.selectionSheetNumber||"";if(W){const he=W.split("."),Ke=he[0];if(he.length===1)W=`${Ke}.1`;else{const E=parseInt(he[1])||0;W=`${Ke}.${E+1}`}}const me={...m,id:Date.now().toString(),checkInTime:new Date,status:"waiting",helpedTime:void 0,draft:{step:3,editedCustomerData:{},selectedFabricator:m.draft?.selectedFabricator,materials:m.draft?.materials||[],helpedBy:v,selectionSheetNumber:W,isHold:!1,isRevisit:!0,previousMaterialsCount:(m.draft?.materials||[]).length}};p([...g,me])},Pe=X?t.jsx(cn,{fullScreen:!0,color:"#ccb331",text:"Submitting your check-in…"}):null;if(s==="customer-step1")return t.jsxs(t.Fragment,{children:[Pe,t.jsx(Sh,{onNext:Ce,initialData:i})]});if(s==="customer-step2")return t.jsxs(t.Fragment,{children:[Pe,t.jsx(Eh,{onNext:Te,onBack:()=>d("customer-step1"),initialData:i})]});if(s==="customer-step3a")return t.jsxs(t.Fragment,{children:[Pe,t.jsx(ud,{onNext:Me,onBack:()=>d("customer-step1"),initialData:k})]});if(s==="customer-step3b")return t.jsxs(t.Fragment,{children:[Pe,t.jsx(pd,{onNext:Se,onBack:()=>d("customer-step3a"),initialData:B||void 0})]});if(s==="customer-step3c"){const m=w<$.length?$[w]:void 0;return t.jsxs(t.Fragment,{children:[Pe,t.jsx(hd,{onNext:G,onBack:ie,visitorNumber:w+2,totalAdults:k.adults,initialData:m,primaryVisitorName:`${i.firstName??""} ${i.lastName??""}`.trim(),takenNames:$.slice(0,w).map(W=>W.name)},w)]})}if(s==="customer-step3d")return t.jsxs(t.Fragment,{children:[Pe,t.jsx(md,{onNext:te,onBack:()=>{k.adults>1?(C(k.adults-2),d("customer-step3c")):d("customer-step3b")},numberOfMinors:k.minors})]});if(s==="customer-step4")return t.jsx(Mh,{customerName:[i.firstName,i.lastName].filter(Boolean).join(" "),hasMinors:A,onReturnHome:I});if(s==="staff-login")return t.jsx(_h,{onLogin:ye});if(s==="staff-dashboard")return t.jsx(em,{username:v,onLogout:J,checkIns:g,onMarkAsHelped:ce,onSaveDraft:vr,onRevisit:yr,onUpdateCurrentlyHelpedBy:ke});if(s==="pricing-dashboard")return t.jsx(rm,{username:v,onLogout:J,checkIns:g,fabricators:[],onComplete:be,onResetHoldDate:_e});if(s==="analysis-dashboard")return t.jsx(tm,{username:v,onLogout:J,checkIns:g,fabricators:[],onComplete:be,onResetHoldDate:_e});if(s==="revisit-lookup")return t.jsx(om,{onCustomerFound:ar,onBack:()=>d("home")});if(s==="revisit-step1")return t.jsx(nm,{customerData:_,onNext:Ir,onBack:()=>d("revisit-lookup")});if(s==="revisit-step3a")return t.jsxs(t.Fragment,{children:[Pe,t.jsx(ud,{onNext:jr,onBack:()=>d("revisit-step1"),initialData:k})]});if(s==="revisit-step3b")return t.jsxs(t.Fragment,{children:[Pe,t.jsx(pd,{onNext:$e,onBack:()=>d("revisit-step3a"),initialData:B||void 0})]});if(s==="revisit-step3c"){const m=w<$.length?$[w]:void 0;return t.jsxs(t.Fragment,{children:[Pe,t.jsx(hd,{onNext:Nr,onBack:wr,visitorNumber:w+2,totalAdults:k.adults,initialData:m,primaryVisitorName:`${_?.firstName??""} ${_?.lastName??""}`.trim(),takenNames:$.slice(0,w).map(W=>W.name)},`revisit-${w}`)]})}return s==="revisit-step3d"?t.jsxs(t.Fragment,{children:[Pe,t.jsx(md,{onNext:Lr,onBack:()=>{k.adults>1?(C(k.adults-2),d("revisit-step3c")):d("revisit-step3b")},numberOfMinors:k.minors})]}):s==="revisit-confirmation"?t.jsx(lm,{customerName:[_?.firstName,_?.lastName].filter(Boolean).join(" "),onReturnHome:I}):s==="staff2-login"?t.jsx(am,{onLogin:Je}):s==="staff2-dashboard"?t.jsx(cm,{username:K,onLogout:Le,checkIns:g,onMarkAsDone:hr}):s==="customer-upload"?R?t.jsx(dm,{customerName:R.customerName,checkInId:R.checkInId,authToken:R.token,onDone:fe}):null:s==="customer-survey"?t.jsx(um,{checkInId:oe?.checkInId??"",authToken:oe?.token??"",onDone:U}):s==="rating-dashboard"?t.jsx(hm,{onLogout:J}):t.jsx(Bp,{onCustomerCheckIn:()=>d("customer-step1"),onStaffLogin:()=>d("staff-login"),onRevisit:()=>d("revisit-lookup"),onStaff2Login:()=>d("staff2-login")})}Lp.createRoot(document.getElementById("root")).render(t.jsx(fm,{}));
