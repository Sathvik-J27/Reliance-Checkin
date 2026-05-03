(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const p of g)if(p.type==="childList")for(const x of p.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function i(g){const p={};return g.integrity&&(p.integrity=g.integrity),g.referrerPolicy&&(p.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?p.credentials="include":g.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(g){if(g.ep)return;g.ep=!0;const p=i(g);fetch(g.href,p)}})();function Sp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var cs={exports:{}},ln={},ds={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function Pp(){if(rd)return Me;rd=1;var s=Symbol.for("react.element"),d=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),x=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),C=Symbol.iterator;function _(h){return h===null||typeof h!="object"?null:(h=C&&h[C]||h["@@iterator"],typeof h=="function"?h:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,k={};function S(h,w,ne){this.props=h,this.context=w,this.refs=k,this.updater=ne||W}S.prototype.isReactComponent={},S.prototype.setState=function(h,w){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,w,"setState")},S.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function P(){}P.prototype=S.prototype;function O(h,w,ne){this.props=h,this.context=w,this.refs=k,this.updater=ne||W}var F=O.prototype=new P;F.constructor=O,$(F,S.prototype),F.isPureReactComponent=!0;var X=Array.isArray,B=Object.prototype.hasOwnProperty,R={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function G(h,w,ne){var le,H={},V=null,pe=null;if(w!=null)for(le in w.ref!==void 0&&(pe=w.ref),w.key!==void 0&&(V=""+w.key),w)B.call(w,le)&&!E.hasOwnProperty(le)&&(H[le]=w[le]);var ke=arguments.length-2;if(ke===1)H.children=ne;else if(1<ke){for(var be=Array(ke),Oe=0;Oe<ke;Oe++)be[Oe]=arguments[Oe+2];H.children=be}if(h&&h.defaultProps)for(le in ke=h.defaultProps,ke)H[le]===void 0&&(H[le]=ke[le]);return{$$typeof:s,type:h,key:V,ref:pe,props:H,_owner:R.current}}function Y(h,w){return{$$typeof:s,type:h.type,key:w,ref:h.ref,props:h.props,_owner:h._owner}}function U(h){return typeof h=="object"&&h!==null&&h.$$typeof===s}function oe(h){var w={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(ne){return w[ne]})}var ie=/\/+/g;function q(h,w){return typeof h=="object"&&h!==null&&h.key!=null?oe(""+h.key):w.toString(36)}function ce(h,w,ne,le,H){var V=typeof h;(V==="undefined"||V==="boolean")&&(h=null);var pe=!1;if(h===null)pe=!0;else switch(V){case"string":case"number":pe=!0;break;case"object":switch(h.$$typeof){case s:case d:pe=!0}}if(pe)return pe=h,H=H(pe),h=le===""?"."+q(pe,0):le,X(H)?(ne="",h!=null&&(ne=h.replace(ie,"$&/")+"/"),ce(H,w,ne,"",function(Oe){return Oe})):H!=null&&(U(H)&&(H=Y(H,ne+(!H.key||pe&&pe.key===H.key?"":(""+H.key).replace(ie,"$&/")+"/")+h)),w.push(H)),1;if(pe=0,le=le===""?".":le+":",X(h))for(var ke=0;ke<h.length;ke++){V=h[ke];var be=le+q(V,ke);pe+=ce(V,w,ne,be,H)}else if(be=_(h),typeof be=="function")for(h=be.call(h),ke=0;!(V=h.next()).done;)V=V.value,be=le+q(V,ke++),pe+=ce(V,w,ne,be,H);else if(V==="object")throw w=String(h),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return pe}function Ce(h,w,ne){if(h==null)return h;var le=[],H=0;return ce(h,le,"","",function(V){return w.call(ne,V,H++)}),le}function Ee(h){if(h._status===-1){var w=h._result;w=w(),w.then(function(ne){(h._status===0||h._status===-1)&&(h._status=1,h._result=ne)},function(ne){(h._status===0||h._status===-1)&&(h._status=2,h._result=ne)}),h._status===-1&&(h._status=0,h._result=w)}if(h._status===1)return h._result.default;throw h._result}var Te={current:null},Z={transition:null},se={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Z,ReactCurrentOwner:R};function re(){throw Error("act(...) is not supported in production builds of React.")}return Me.Children={map:Ce,forEach:function(h,w,ne){Ce(h,function(){w.apply(this,arguments)},ne)},count:function(h){var w=0;return Ce(h,function(){w++}),w},toArray:function(h){return Ce(h,function(w){return w})||[]},only:function(h){if(!U(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},Me.Component=S,Me.Fragment=i,Me.Profiler=g,Me.PureComponent=O,Me.StrictMode=u,Me.Suspense=b,Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,Me.act=re,Me.cloneElement=function(h,w,ne){if(h==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+h+".");var le=$({},h.props),H=h.key,V=h.ref,pe=h._owner;if(w!=null){if(w.ref!==void 0&&(V=w.ref,pe=R.current),w.key!==void 0&&(H=""+w.key),h.type&&h.type.defaultProps)var ke=h.type.defaultProps;for(be in w)B.call(w,be)&&!E.hasOwnProperty(be)&&(le[be]=w[be]===void 0&&ke!==void 0?ke[be]:w[be])}var be=arguments.length-2;if(be===1)le.children=ne;else if(1<be){ke=Array(be);for(var Oe=0;Oe<be;Oe++)ke[Oe]=arguments[Oe+2];le.children=ke}return{$$typeof:s,type:h.type,key:H,ref:V,props:le,_owner:pe}},Me.createContext=function(h){return h={$$typeof:x,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},h.Provider={$$typeof:p,_context:h},h.Consumer=h},Me.createElement=G,Me.createFactory=function(h){var w=G.bind(null,h);return w.type=h,w},Me.createRef=function(){return{current:null}},Me.forwardRef=function(h){return{$$typeof:N,render:h}},Me.isValidElement=U,Me.lazy=function(h){return{$$typeof:I,_payload:{_status:-1,_result:h},_init:Ee}},Me.memo=function(h,w){return{$$typeof:A,type:h,compare:w===void 0?null:w}},Me.startTransition=function(h){var w=Z.transition;Z.transition={};try{h()}finally{Z.transition=w}},Me.unstable_act=re,Me.useCallback=function(h,w){return Te.current.useCallback(h,w)},Me.useContext=function(h){return Te.current.useContext(h)},Me.useDebugValue=function(){},Me.useDeferredValue=function(h){return Te.current.useDeferredValue(h)},Me.useEffect=function(h,w){return Te.current.useEffect(h,w)},Me.useId=function(){return Te.current.useId()},Me.useImperativeHandle=function(h,w,ne){return Te.current.useImperativeHandle(h,w,ne)},Me.useInsertionEffect=function(h,w){return Te.current.useInsertionEffect(h,w)},Me.useLayoutEffect=function(h,w){return Te.current.useLayoutEffect(h,w)},Me.useMemo=function(h,w){return Te.current.useMemo(h,w)},Me.useReducer=function(h,w,ne){return Te.current.useReducer(h,w,ne)},Me.useRef=function(h){return Te.current.useRef(h)},Me.useState=function(h){return Te.current.useState(h)},Me.useSyncExternalStore=function(h,w,ne){return Te.current.useSyncExternalStore(h,w,ne)},Me.useTransition=function(){return Te.current.useTransition()},Me.version="18.3.1",Me}var td;function gs(){return td||(td=1,ds.exports=Pp()),ds.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function Ep(){if(od)return ln;od=1;var s=gs(),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,g=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function x(N,b,A){var I,C={},_=null,W=null;A!==void 0&&(_=""+A),b.key!==void 0&&(_=""+b.key),b.ref!==void 0&&(W=b.ref);for(I in b)u.call(b,I)&&!p.hasOwnProperty(I)&&(C[I]=b[I]);if(N&&N.defaultProps)for(I in b=N.defaultProps,b)C[I]===void 0&&(C[I]=b[I]);return{$$typeof:d,type:N,key:_,ref:W,props:C,_owner:g.current}}return ln.Fragment=i,ln.jsx=x,ln.jsxs=x,ln}var nd;function Tp(){return nd||(nd=1,cs.exports=Ep()),cs.exports}var t=Tp(),bl={},us={exports:{}},Mr={},ps={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function zp(){return ld||(ld=1,(function(s){function d(Z,se){var re=Z.length;Z.push(se);e:for(;0<re;){var h=re-1>>>1,w=Z[h];if(0<g(w,se))Z[h]=se,Z[re]=w,re=h;else break e}}function i(Z){return Z.length===0?null:Z[0]}function u(Z){if(Z.length===0)return null;var se=Z[0],re=Z.pop();if(re!==se){Z[0]=re;e:for(var h=0,w=Z.length,ne=w>>>1;h<ne;){var le=2*(h+1)-1,H=Z[le],V=le+1,pe=Z[V];if(0>g(H,re))V<w&&0>g(pe,H)?(Z[h]=pe,Z[V]=re,h=V):(Z[h]=H,Z[le]=re,h=le);else if(V<w&&0>g(pe,re))Z[h]=pe,Z[V]=re,h=V;else break e}}return se}function g(Z,se){var re=Z.sortIndex-se.sortIndex;return re!==0?re:Z.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;s.unstable_now=function(){return p.now()}}else{var x=Date,N=x.now();s.unstable_now=function(){return x.now()-N}}var b=[],A=[],I=1,C=null,_=3,W=!1,$=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(Z){for(var se=i(A);se!==null;){if(se.callback===null)u(A);else if(se.startTime<=Z)u(A),se.sortIndex=se.expirationTime,d(b,se);else break;se=i(A)}}function X(Z){if(k=!1,F(Z),!$)if(i(b)!==null)$=!0,Ee(B);else{var se=i(A);se!==null&&Te(X,se.startTime-Z)}}function B(Z,se){$=!1,k&&(k=!1,P(G),G=-1),W=!0;var re=_;try{for(F(se),C=i(b);C!==null&&(!(C.expirationTime>se)||Z&&!oe());){var h=C.callback;if(typeof h=="function"){C.callback=null,_=C.priorityLevel;var w=h(C.expirationTime<=se);se=s.unstable_now(),typeof w=="function"?C.callback=w:C===i(b)&&u(b),F(se)}else u(b);C=i(b)}if(C!==null)var ne=!0;else{var le=i(A);le!==null&&Te(X,le.startTime-se),ne=!1}return ne}finally{C=null,_=re,W=!1}}var R=!1,E=null,G=-1,Y=5,U=-1;function oe(){return!(s.unstable_now()-U<Y)}function ie(){if(E!==null){var Z=s.unstable_now();U=Z;var se=!0;try{se=E(!0,Z)}finally{se?q():(R=!1,E=null)}}else R=!1}var q;if(typeof O=="function")q=function(){O(ie)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,Ce=ce.port2;ce.port1.onmessage=ie,q=function(){Ce.postMessage(null)}}else q=function(){S(ie,0)};function Ee(Z){E=Z,R||(R=!0,q())}function Te(Z,se){G=S(function(){Z(s.unstable_now())},se)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){$||W||($=!0,Ee(B))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return i(b)},s.unstable_next=function(Z){switch(_){case 1:case 2:case 3:var se=3;break;default:se=_}var re=_;_=se;try{return Z()}finally{_=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,se){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var re=_;_=Z;try{return se()}finally{_=re}},s.unstable_scheduleCallback=function(Z,se,re){var h=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?h+re:h):re=h,Z){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=re+w,Z={id:I++,callback:se,priorityLevel:Z,startTime:re,expirationTime:w,sortIndex:-1},re>h?(Z.sortIndex=re,d(A,Z),i(b)===null&&Z===i(A)&&(k?(P(G),G=-1):k=!0,Te(X,re-h))):(Z.sortIndex=w,d(b,Z),$||W||($=!0,Ee(B))),Z},s.unstable_shouldYield=oe,s.unstable_wrapCallback=function(Z){var se=_;return function(){var re=_;_=se;try{return Z.apply(this,arguments)}finally{_=re}}}})(hs)),hs}var ad;function Mp(){return ad||(ad=1,ps.exports=zp()),ps.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function Op(){if(sd)return Mr;sd=1;var s=gs(),d=Mp();function i(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,g={};function p(e,r){x(e,r),x(e+"Capture",r)}function x(e,r){for(g[e]=r,e=0;e<r.length;e++)u.add(r[e])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,A=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},C={};function _(e){return b.call(C,e)?!0:b.call(I,e)?!1:A.test(e)?C[e]=!0:(I[e]=!0,!1)}function W(e,r,o,n){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $(e,r,o,n){if(r===null||typeof r>"u"||W(e,r,o,n))return!0;if(n)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function k(e,r,o,n,l,a,c){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=o,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=c}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new k(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];S[r]=new k(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new k(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new k(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new k(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new k(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new k(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new k(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new k(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function O(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(P,O);S[r]=new k(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(P,O);S[r]=new k(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(P,O);S[r]=new k(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new k(e,1,!1,e.toLowerCase(),null,!0,!0)});function F(e,r,o,n){var l=S.hasOwnProperty(r)?S[r]:null;(l!==null?l.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&($(r,o,l,n)&&(o=null),n||l===null?_(r)&&(o===null?e.removeAttribute(r):e.setAttribute(r,""+o)):l.mustUseProperty?e[l.propertyName]=o===null?l.type===3?!1:"":o:(r=l.attributeName,n=l.attributeNamespace,o===null?e.removeAttribute(r):(l=l.type,o=l===3||l===4&&o===!0?"":""+o,n?e.setAttributeNS(n,r,o):e.setAttribute(r,o))))}var X=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),R=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),oe=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),Z=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,h;function w(e){if(h===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);h=r&&r[1]||""}return`
`+h+e}var ne=!1;function le(e,r){if(!e||ne)return"";ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(D){var n=D}Reflect.construct(e,[],r)}else{try{r.call()}catch(D){n=D}e.call(r.prototype)}else{try{throw Error()}catch(D){n=D}e()}}catch(D){if(D&&n&&typeof D.stack=="string"){for(var l=D.stack.split(`
`),a=n.stack.split(`
`),c=l.length-1,m=a.length-1;1<=c&&0<=m&&l[c]!==a[m];)m--;for(;1<=c&&0<=m;c--,m--)if(l[c]!==a[m]){if(c!==1||m!==1)do if(c--,m--,0>m||l[c]!==a[m]){var v=`
`+l[c].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=c&&0<=m);break}}}finally{ne=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?w(e):""}function H(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function V(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case R:return"Portal";case Y:return"Profiler";case G:return"StrictMode";case q:return"Suspense";case ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oe:return(e.displayName||"Context")+".Consumer";case U:return(e._context.displayName||"Context")+".Provider";case ie:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return r=e.displayName||null,r!==null?r:V(e.type)||"Memo";case Ee:r=e._payload,e=e._init;try{return V(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(r);case 8:return r===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ke(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(e){var r=be(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,a=o.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(c){n=""+c,a.call(this,c)}}),Object.defineProperty(e,r,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function cr(e){e._valueTracker||(e._valueTracker=Oe(e))}function Fr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var o=r.getValue(),n="";return e&&(n=be(e)?e.checked?"true":"false":e.value),e=n,e!==o?(r.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ve(e,r){var o=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function br(e,r){var o=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;o=ke(r.value!=null?r.value:o),e._wrapperState={initialChecked:n,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function jr(e,r){r=r.checked,r!=null&&F(e,"checked",r,!1)}function Lr(e,r){jr(e,r);var o=ke(r.value),n=r.type;if(o!=null)n==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?or(e,r.type,o):r.hasOwnProperty("defaultValue")&&or(e,r.type,ke(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function We(e,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,o||r===e.value||(e.value=r),e.defaultValue=r}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function or(e,r,o){(r!=="number"||wr(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var De=Array.isArray;function ee(e,r,o,n){if(e=e.options,r){r={};for(var l=0;l<o.length;l++)r["$"+o[l]]=!0;for(o=0;o<e.length;o++)l=r.hasOwnProperty("$"+e[o].value),e[o].selected!==l&&(e[o].selected=l),l&&n&&(e[o].defaultSelected=!0)}else{for(o=""+ke(o),r=null,l=0;l<e.length;l++){if(e[l].value===o){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function ve(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Se(e,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(i(92));if(De(o)){if(1<o.length)throw Error(i(93));o=o[0]}r=o}r==null&&(r=""),o=r}e._wrapperState={initialValue:ke(o)}}function Ne(e,r){var o=ke(r.value),n=ke(r.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),r.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),n!=null&&(e.defaultValue=""+n)}function j(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function de(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qe(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?de(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ze,Ue=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,n,l){MSApp.execUnsafeLocalFunction(function(){return e(r,o,n,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ze=ze||document.createElement("div"),ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ze.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function M(e,r){if(r){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=r;return}}e.textContent=r}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(e){Re.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),xe[r]=xe[e]})});function _e(e,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||xe.hasOwnProperty(e)&&xe[e]?(""+r).trim():r+"px"}function L(e,r){e=e.style;for(var o in r)if(r.hasOwnProperty(o)){var n=o.indexOf("--")===0,l=_e(o,r[o],n);o==="float"&&(o="cssFloat"),n?e.setProperty(o,l):e[o]=l}}var fe=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ae(e,r){if(r){if(fe[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function Be(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lr=null;function hr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Cr=null,Vr=null;function pn(e){if(e=$o(e)){if(typeof Or!="function")throw Error(i(280));var r=e.stateNode;r&&(r=_n(r),Or(e.stateNode,e.type,r))}}function Le(e){Cr?Vr?Vr.push(e):Vr=[e]:Cr=e}function bs(){if(Cr){var e=Cr,r=Vr;if(Vr=Cr=null,pn(e),r)for(e=0;e<r.length;e++)pn(r[e])}}function ks(e,r){return e(r)}function Ns(){}var Sl=!1;function ws(e,r,o){if(Sl)return e(r,o);Sl=!0;try{return ks(e,r,o)}finally{Sl=!1,(Cr!==null||Vr!==null)&&(Ns(),bs())}}function wo(e,r){var o=e.stateNode;if(o===null)return null;var n=_n(o);if(n===null)return null;o=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var Pl=!1;if(N)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{Pl=!1}function Od(e,r,o,n,l,a,c,m,v){var D=Array.prototype.slice.call(arguments,3);try{r.apply(o,D)}catch(K){this.onError(K)}}var Co=!1,hn=null,mn=!1,El=null,Dd={onError:function(e){Co=!0,hn=e}};function Rd(e,r,o,n,l,a,c,m,v){Co=!1,hn=null,Od.apply(Dd,arguments)}function _d(e,r,o,n,l,a,c,m,v){if(Rd.apply(this,arguments),Co){if(Co){var D=hn;Co=!1,hn=null}else throw Error(i(198));mn||(mn=!0,El=D)}}function Lt(e){var r=e,o=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(o=r.return),e=r.return;while(e)}return r.tag===3?o:null}function js(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Cs(e){if(Lt(e)!==e)throw Error(i(188))}function Ad(e){var r=e.alternate;if(!r){if(r=Lt(e),r===null)throw Error(i(188));return r!==e?null:e}for(var o=e,n=r;;){var l=o.return;if(l===null)break;var a=l.alternate;if(a===null){if(n=l.return,n!==null){o=n;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===o)return Cs(l),e;if(a===n)return Cs(l),r;a=a.sibling}throw Error(i(188))}if(o.return!==n.return)o=l,n=a;else{for(var c=!1,m=l.child;m;){if(m===o){c=!0,o=l,n=a;break}if(m===n){c=!0,n=l,o=a;break}m=m.sibling}if(!c){for(m=a.child;m;){if(m===o){c=!0,o=a,n=l;break}if(m===n){c=!0,n=a,o=l;break}m=m.sibling}if(!c)throw Error(i(189))}}if(o.alternate!==n)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:r}function Ss(e){return e=Ad(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Ps(e);if(r!==null)return r;e=e.sibling}return null}var Es=d.unstable_scheduleCallback,Ts=d.unstable_cancelCallback,Id=d.unstable_shouldYield,Fd=d.unstable_requestPaint,rr=d.unstable_now,Ld=d.unstable_getCurrentPriorityLevel,Tl=d.unstable_ImmediatePriority,zs=d.unstable_UserBlockingPriority,fn=d.unstable_NormalPriority,Hd=d.unstable_LowPriority,Ms=d.unstable_IdlePriority,gn=null,ot=null;function Ud(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(gn,e,void 0,(e.current.flags&128)===128)}catch{}}var Qr=Math.clz32?Math.clz32:$d,Bd=Math.log,Wd=Math.LN2;function $d(e){return e>>>=0,e===0?32:31-(Bd(e)/Wd|0)|0}var xn=64,vn=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yn(e,r){var o=e.pendingLanes;if(o===0)return 0;var n=0,l=e.suspendedLanes,a=e.pingedLanes,c=o&268435455;if(c!==0){var m=c&~l;m!==0?n=So(m):(a&=c,a!==0&&(n=So(a)))}else c=o&~l,c!==0?n=So(c):a!==0&&(n=So(a));if(n===0)return 0;if(r!==0&&r!==n&&(r&l)===0&&(l=n&-n,a=r&-r,l>=a||l===16&&(a&4194240)!==0))return r;if((n&4)!==0&&(n|=o&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)o=31-Qr(r),l=1<<o,n|=e[o],r&=~l;return n}function qd(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yd(e,r){for(var o=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-Qr(a),m=1<<c,v=l[c];v===-1?((m&o)===0||(m&n)!==0)&&(l[c]=qd(m,r)):v<=r&&(e.expiredLanes|=m),a&=~m}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Os(){var e=xn;return xn<<=1,(xn&4194240)===0&&(xn=64),e}function Ml(e){for(var r=[],o=0;31>o;o++)r.push(e);return r}function Po(e,r,o){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Qr(r),e[r]=o}function Vd(e,r){var o=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<o;){var l=31-Qr(o),a=1<<l;r[l]=0,n[l]=-1,e[l]=-1,o&=~a}}function Ol(e,r){var o=e.entangledLanes|=r;for(e=e.entanglements;o;){var n=31-Qr(o),l=1<<n;l&r|e[n]&r&&(e[n]|=r),o&=~l}}var He=0;function Ds(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rs,Dl,_s,As,Is,Rl=!1,bn=[],yt=null,bt=null,kt=null,Eo=new Map,To=new Map,Nt=[],Qd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fs(e,r){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Eo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(r.pointerId)}}function zo(e,r,o,n,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:o,eventSystemFlags:n,nativeEvent:a,targetContainers:[l]},r!==null&&(r=$o(r),r!==null&&Dl(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function Xd(e,r,o,n,l){switch(r){case"focusin":return yt=zo(yt,e,r,o,n,l),!0;case"dragenter":return bt=zo(bt,e,r,o,n,l),!0;case"mouseover":return kt=zo(kt,e,r,o,n,l),!0;case"pointerover":var a=l.pointerId;return Eo.set(a,zo(Eo.get(a)||null,e,r,o,n,l)),!0;case"gotpointercapture":return a=l.pointerId,To.set(a,zo(To.get(a)||null,e,r,o,n,l)),!0}return!1}function Ls(e){var r=Ht(e.target);if(r!==null){var o=Lt(r);if(o!==null){if(r=o.tag,r===13){if(r=js(o),r!==null){e.blockedOn=r,Is(e.priority,function(){_s(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kn(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var o=Al(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var n=new o.constructor(o.type,o);lr=n,o.target.dispatchEvent(n),lr=null}else return r=$o(o),r!==null&&Dl(r),e.blockedOn=o,!1;r.shift()}return!0}function Hs(e,r,o){kn(e)&&o.delete(r)}function Kd(){Rl=!1,yt!==null&&kn(yt)&&(yt=null),bt!==null&&kn(bt)&&(bt=null),kt!==null&&kn(kt)&&(kt=null),Eo.forEach(Hs),To.forEach(Hs)}function Mo(e,r){e.blockedOn===r&&(e.blockedOn=null,Rl||(Rl=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Kd)))}function Oo(e){function r(l){return Mo(l,e)}if(0<bn.length){Mo(bn[0],e);for(var o=1;o<bn.length;o++){var n=bn[o];n.blockedOn===e&&(n.blockedOn=null)}}for(yt!==null&&Mo(yt,e),bt!==null&&Mo(bt,e),kt!==null&&Mo(kt,e),Eo.forEach(r),To.forEach(r),o=0;o<Nt.length;o++)n=Nt[o],n.blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&(o=Nt[0],o.blockedOn===null);)Ls(o),o.blockedOn===null&&Nt.shift()}var Zt=X.ReactCurrentBatchConfig,Nn=!0;function Gd(e,r,o,n){var l=He,a=Zt.transition;Zt.transition=null;try{He=1,_l(e,r,o,n)}finally{He=l,Zt.transition=a}}function Jd(e,r,o,n){var l=He,a=Zt.transition;Zt.transition=null;try{He=4,_l(e,r,o,n)}finally{He=l,Zt.transition=a}}function _l(e,r,o,n){if(Nn){var l=Al(e,r,o,n);if(l===null)Zl(e,r,n,wn,o),Fs(e,n);else if(Xd(l,e,r,o,n))n.stopPropagation();else if(Fs(e,n),r&4&&-1<Qd.indexOf(e)){for(;l!==null;){var a=$o(l);if(a!==null&&Rs(a),a=Al(e,r,o,n),a===null&&Zl(e,r,n,wn,o),a===l)break;l=a}l!==null&&n.stopPropagation()}else Zl(e,r,n,null,o)}}var wn=null;function Al(e,r,o,n){if(wn=null,e=hr(n),e=Ht(e),e!==null)if(r=Lt(e),r===null)e=null;else if(o=r.tag,o===13){if(e=js(r),e!==null)return e;e=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return wn=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ld()){case Tl:return 1;case zs:return 4;case fn:case Hd:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var wt=null,Il=null,jn=null;function Bs(){if(jn)return jn;var e,r=Il,o=r.length,n,l="value"in wt?wt.value:wt.textContent,a=l.length;for(e=0;e<o&&r[e]===l[e];e++);var c=o-e;for(n=1;n<=c&&r[o-n]===l[a-n];n++);return jn=l.slice(e,1<n?1-n:void 0)}function Cn(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Ws(){return!1}function Dr(e){function r(o,n,l,a,c){this._reactName=o,this._targetInst=l,this.type=n,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(o=e[m],this[m]=o?o(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Sn:Ws,this.isPropagationStopped=Ws,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),r}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Dr(eo),Do=re({},eo,{view:0,detail:0}),Zd=Dr(Do),Ll,Hl,Ro,Pn=re({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(Ll=e.screenX-Ro.screenX,Hl=e.screenY-Ro.screenY):Hl=Ll=0,Ro=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),$s=Dr(Pn),eu=re({},Pn,{dataTransfer:0}),ru=Dr(eu),tu=re({},Do,{relatedTarget:0}),Ul=Dr(tu),ou=re({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),nu=Dr(ou),lu=re({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),au=Dr(lu),su=re({},eo,{data:0}),qs=Dr(su),iu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},du={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uu(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=du[e])?!!r[e]:!1}function Bl(){return uu}var pu=re({},Do,{key:function(e){if(e.key){var r=iu[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Cn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?Cn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hu=Dr(pu),mu=re({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=Dr(mu),fu=re({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),gu=Dr(fu),xu=re({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),vu=Dr(xu),yu=re({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bu=Dr(yu),ku=[9,13,27,32],Wl=N&&"CompositionEvent"in window,_o=null;N&&"documentMode"in document&&(_o=document.documentMode);var Nu=N&&"TextEvent"in window&&!_o,Vs=N&&(!Wl||_o&&8<_o&&11>=_o),Qs=" ",Xs=!1;function Ks(e,r){switch(e){case"keyup":return ku.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ro=!1;function wu(e,r){switch(e){case"compositionend":return Gs(r);case"keypress":return r.which!==32?null:(Xs=!0,Qs);case"textInput":return e=r.data,e===Qs&&Xs?null:e;default:return null}}function ju(e,r){if(ro)return e==="compositionend"||!Wl&&Ks(e,r)?(e=Bs(),jn=Il=wt=null,ro=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Vs&&r.locale!=="ko"?null:r.data;default:return null}}var Cu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Cu[e.type]:r==="textarea"}function Zs(e,r,o,n){Le(n),r=On(r,"onChange"),0<r.length&&(o=new Fl("onChange","change",null,o,n),e.push({event:o,listeners:r}))}var Ao=null,Io=null;function Su(e){xi(e,0)}function En(e){var r=ao(e);if(Fr(r))return e}function Pu(e,r){if(e==="change")return r}var ei=!1;if(N){var $l;if(N){var ql="oninput"in document;if(!ql){var ri=document.createElement("div");ri.setAttribute("oninput","return;"),ql=typeof ri.oninput=="function"}$l=ql}else $l=!1;ei=$l&&(!document.documentMode||9<document.documentMode)}function ti(){Ao&&(Ao.detachEvent("onpropertychange",oi),Io=Ao=null)}function oi(e){if(e.propertyName==="value"&&En(Io)){var r=[];Zs(r,Io,e,hr(e)),ws(Su,r)}}function Eu(e,r,o){e==="focusin"?(ti(),Ao=r,Io=o,Ao.attachEvent("onpropertychange",oi)):e==="focusout"&&ti()}function Tu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return En(Io)}function zu(e,r){if(e==="click")return En(r)}function Mu(e,r){if(e==="input"||e==="change")return En(r)}function Ou(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Xr=typeof Object.is=="function"?Object.is:Ou;function Fo(e,r){if(Xr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var o=Object.keys(e),n=Object.keys(r);if(o.length!==n.length)return!1;for(n=0;n<o.length;n++){var l=o[n];if(!b.call(r,l)||!Xr(e[l],r[l]))return!1}return!0}function ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function li(e,r){var o=ni(e);e=0;for(var n;o;){if(o.nodeType===3){if(n=e+o.textContent.length,e<=r&&n>=r)return{node:o,offset:r-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ni(o)}}function ai(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ai(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function si(){for(var e=window,r=wr();r instanceof e.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)e=r.contentWindow;else break;r=wr(e.document)}return r}function Yl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Du(e){var r=si(),o=e.focusedElem,n=e.selectionRange;if(r!==o&&o&&o.ownerDocument&&ai(o.ownerDocument.documentElement,o)){if(n!==null&&Yl(o)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(e,o.value.length);else if(e=(r=o.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=o.textContent.length,a=Math.min(n.start,l);n=n.end===void 0?a:Math.min(n.end,l),!e.extend&&a>n&&(l=n,n=a,a=l),l=li(o,a);var c=li(o,n);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),a>n?(e.addRange(r),e.extend(c.node,c.offset)):(r.setEnd(c.node,c.offset),e.addRange(r)))}}for(r=[],e=o;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)e=r[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ru=N&&"documentMode"in document&&11>=document.documentMode,to=null,Vl=null,Lo=null,Ql=!1;function ii(e,r,o){var n=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ql||to==null||to!==wr(n)||(n=to,"selectionStart"in n&&Yl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Lo&&Fo(Lo,n)||(Lo=n,n=On(Vl,"onSelect"),0<n.length&&(r=new Fl("onSelect","select",null,r,o),e.push({event:r,listeners:n}),r.target=to)))}function Tn(e,r){var o={};return o[e.toLowerCase()]=r.toLowerCase(),o["Webkit"+e]="webkit"+r,o["Moz"+e]="moz"+r,o}var oo={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Xl={},ci={};N&&(ci=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function zn(e){if(Xl[e])return Xl[e];if(!oo[e])return e;var r=oo[e],o;for(o in r)if(r.hasOwnProperty(o)&&o in ci)return Xl[e]=r[o];return e}var di=zn("animationend"),ui=zn("animationiteration"),pi=zn("animationstart"),hi=zn("transitionend"),mi=new Map,fi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,r){mi.set(e,r),p(r,[e])}for(var Kl=0;Kl<fi.length;Kl++){var Gl=fi[Kl],_u=Gl.toLowerCase(),Au=Gl[0].toUpperCase()+Gl.slice(1);jt(_u,"on"+Au)}jt(di,"onAnimationEnd"),jt(ui,"onAnimationIteration"),jt(pi,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(hi,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iu=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function gi(e,r,o){var n=e.type||"unknown-event";e.currentTarget=o,_d(n,r,void 0,e),e.currentTarget=null}function xi(e,r){r=(r&4)!==0;for(var o=0;o<e.length;o++){var n=e[o],l=n.event;n=n.listeners;e:{var a=void 0;if(r)for(var c=n.length-1;0<=c;c--){var m=n[c],v=m.instance,D=m.currentTarget;if(m=m.listener,v!==a&&l.isPropagationStopped())break e;gi(l,m,D),a=v}else for(c=0;c<n.length;c++){if(m=n[c],v=m.instance,D=m.currentTarget,m=m.listener,v!==a&&l.isPropagationStopped())break e;gi(l,m,D),a=v}}}if(mn)throw e=El,mn=!1,El=null,e}function qe(e,r){var o=r[la];o===void 0&&(o=r[la]=new Set);var n=e+"__bubble";o.has(n)||(vi(r,e,2,!1),o.add(n))}function Jl(e,r,o){var n=0;r&&(n|=4),vi(o,e,n,r)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[Mn]){e[Mn]=!0,u.forEach(function(o){o!=="selectionchange"&&(Iu.has(o)||Jl(o,!1,e),Jl(o,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Mn]||(r[Mn]=!0,Jl("selectionchange",!1,r))}}function vi(e,r,o,n){switch(Us(r)){case 1:var l=Gd;break;case 4:l=Jd;break;default:l=_l}o=l.bind(null,r,o,e),l=void 0,!Pl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(r,o,{capture:!0,passive:l}):e.addEventListener(r,o,!0):l!==void 0?e.addEventListener(r,o,{passive:l}):e.addEventListener(r,o,!1)}function Zl(e,r,o,n,l){var a=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var m=n.stateNode.containerInfo;if(m===l||m.nodeType===8&&m.parentNode===l)break;if(c===4)for(c=n.return;c!==null;){var v=c.tag;if((v===3||v===4)&&(v=c.stateNode.containerInfo,v===l||v.nodeType===8&&v.parentNode===l))return;c=c.return}for(;m!==null;){if(c=Ht(m),c===null)return;if(v=c.tag,v===5||v===6){n=a=c;continue e}m=m.parentNode}}n=n.return}ws(function(){var D=a,K=hr(o),J=[];e:{var Q=mi.get(e);if(Q!==void 0){var ae=Fl,he=e;switch(e){case"keypress":if(Cn(o)===0)break e;case"keydown":case"keyup":ae=hu;break;case"focusin":he="focus",ae=Ul;break;case"focusout":he="blur",ae=Ul;break;case"beforeblur":case"afterblur":ae=Ul;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=$s;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=ru;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=gu;break;case di:case ui:case pi:ae=nu;break;case hi:ae=vu;break;case"scroll":ae=Zd;break;case"wheel":ae=bu;break;case"copy":case"cut":case"paste":ae=au;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=Ys}var me=(r&4)!==0,tr=!me&&e==="scroll",T=me?Q!==null?Q+"Capture":null:Q;me=[];for(var y=D,z;y!==null;){z=y;var te=z.stateNode;if(z.tag===5&&te!==null&&(z=te,T!==null&&(te=wo(y,T),te!=null&&me.push(Bo(y,te,z)))),tr)break;y=y.return}0<me.length&&(Q=new ae(Q,he,null,o,K),J.push({event:Q,listeners:me}))}}if((r&7)===0){e:{if(Q=e==="mouseover"||e==="pointerover",ae=e==="mouseout"||e==="pointerout",Q&&o!==lr&&(he=o.relatedTarget||o.fromElement)&&(Ht(he)||he[dt]))break e;if((ae||Q)&&(Q=K.window===K?K:(Q=K.ownerDocument)?Q.defaultView||Q.parentWindow:window,ae?(he=o.relatedTarget||o.toElement,ae=D,he=he?Ht(he):null,he!==null&&(tr=Lt(he),he!==tr||he.tag!==5&&he.tag!==6)&&(he=null)):(ae=null,he=D),ae!==he)){if(me=$s,te="onMouseLeave",T="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(me=Ys,te="onPointerLeave",T="onPointerEnter",y="pointer"),tr=ae==null?Q:ao(ae),z=he==null?Q:ao(he),Q=new me(te,y+"leave",ae,o,K),Q.target=tr,Q.relatedTarget=z,te=null,Ht(K)===D&&(me=new me(T,y+"enter",he,o,K),me.target=z,me.relatedTarget=tr,te=me),tr=te,ae&&he)r:{for(me=ae,T=he,y=0,z=me;z;z=no(z))y++;for(z=0,te=T;te;te=no(te))z++;for(;0<y-z;)me=no(me),y--;for(;0<z-y;)T=no(T),z--;for(;y--;){if(me===T||T!==null&&me===T.alternate)break r;me=no(me),T=no(T)}me=null}else me=null;ae!==null&&yi(J,Q,ae,me,!1),he!==null&&tr!==null&&yi(J,tr,he,me,!0)}}e:{if(Q=D?ao(D):window,ae=Q.nodeName&&Q.nodeName.toLowerCase(),ae==="select"||ae==="input"&&Q.type==="file")var ge=Pu;else if(Js(Q))if(ei)ge=Mu;else{ge=Tu;var we=Eu}else(ae=Q.nodeName)&&ae.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(ge=zu);if(ge&&(ge=ge(e,D))){Zs(J,ge,o,K);break e}we&&we(e,Q,D),e==="focusout"&&(we=Q._wrapperState)&&we.controlled&&Q.type==="number"&&or(Q,"number",Q.value)}switch(we=D?ao(D):window,e){case"focusin":(Js(we)||we.contentEditable==="true")&&(to=we,Vl=D,Lo=null);break;case"focusout":Lo=Vl=to=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,ii(J,o,K);break;case"selectionchange":if(Ru)break;case"keydown":case"keyup":ii(J,o,K)}var je;if(Wl)e:{switch(e){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else ro?Ks(e,o)&&(Pe="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Pe="onCompositionStart");Pe&&(Vs&&o.locale!=="ko"&&(ro||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&ro&&(je=Bs()):(wt=K,Il="value"in wt?wt.value:wt.textContent,ro=!0)),we=On(D,Pe),0<we.length&&(Pe=new qs(Pe,e,null,o,K),J.push({event:Pe,listeners:we}),je?Pe.data=je:(je=Gs(o),je!==null&&(Pe.data=je)))),(je=Nu?wu(e,o):ju(e,o))&&(D=On(D,"onBeforeInput"),0<D.length&&(K=new qs("onBeforeInput","beforeinput",null,o,K),J.push({event:K,listeners:D}),K.data=je))}xi(J,r)})}function Bo(e,r,o){return{instance:e,listener:r,currentTarget:o}}function On(e,r){for(var o=r+"Capture",n=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=wo(e,o),a!=null&&n.unshift(Bo(e,a,l)),a=wo(e,r),a!=null&&n.push(Bo(e,a,l))),e=e.return}return n}function no(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yi(e,r,o,n,l){for(var a=r._reactName,c=[];o!==null&&o!==n;){var m=o,v=m.alternate,D=m.stateNode;if(v!==null&&v===n)break;m.tag===5&&D!==null&&(m=D,l?(v=wo(o,a),v!=null&&c.unshift(Bo(o,v,m))):l||(v=wo(o,a),v!=null&&c.push(Bo(o,v,m)))),o=o.return}c.length!==0&&e.push({event:r,listeners:c})}var Fu=/\r\n?/g,Lu=/\u0000|\uFFFD/g;function bi(e){return(typeof e=="string"?e:""+e).replace(Fu,`
`).replace(Lu,"")}function Dn(e,r,o){if(r=bi(r),bi(e)!==r&&o)throw Error(i(425))}function Rn(){}var ea=null,ra=null;function ta(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,Hu=typeof clearTimeout=="function"?clearTimeout:void 0,ki=typeof Promise=="function"?Promise:void 0,Uu=typeof queueMicrotask=="function"?queueMicrotask:typeof ki<"u"?function(e){return ki.resolve(null).then(e).catch(Bu)}:oa;function Bu(e){setTimeout(function(){throw e})}function na(e,r){var o=r,n=0;do{var l=o.nextSibling;if(e.removeChild(o),l&&l.nodeType===8)if(o=l.data,o==="/$"){if(n===0){e.removeChild(l),Oo(r);return}n--}else o!=="$"&&o!=="$?"&&o!=="$!"||n++;o=l}while(o);Oo(r)}function Ct(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Ni(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return e;r--}else o==="/$"&&r++}e=e.previousSibling}return null}var lo=Math.random().toString(36).slice(2),nt="__reactFiber$"+lo,Wo="__reactProps$"+lo,dt="__reactContainer$"+lo,la="__reactEvents$"+lo,Wu="__reactListeners$"+lo,$u="__reactHandles$"+lo;function Ht(e){var r=e[nt];if(r)return r;for(var o=e.parentNode;o;){if(r=o[dt]||o[nt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(e=Ni(e);e!==null;){if(o=e[nt])return o;e=Ni(e)}return r}e=o,o=e.parentNode}return null}function $o(e){return e=e[nt]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ao(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function _n(e){return e[Wo]||null}var aa=[],so=-1;function St(e){return{current:e}}function Ye(e){0>so||(e.current=aa[so],aa[so]=null,so--)}function $e(e,r){so++,aa[so]=e.current,e.current=r}var Pt={},gr=St(Pt),Sr=St(!1),Ut=Pt;function io(e,r){var o=e.type.contextTypes;if(!o)return Pt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in o)l[a]=r[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function Pr(e){return e=e.childContextTypes,e!=null}function An(){Ye(Sr),Ye(gr)}function wi(e,r,o){if(gr.current!==Pt)throw Error(i(168));$e(gr,r),$e(Sr,o)}function ji(e,r,o){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return o;n=n.getChildContext();for(var l in n)if(!(l in r))throw Error(i(108,pe(e)||"Unknown",l));return re({},o,n)}function In(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Ut=gr.current,$e(gr,e),$e(Sr,Sr.current),!0}function Ci(e,r,o){var n=e.stateNode;if(!n)throw Error(i(169));o?(e=ji(e,r,Ut),n.__reactInternalMemoizedMergedChildContext=e,Ye(Sr),Ye(gr),$e(gr,e)):Ye(Sr),$e(Sr,o)}var ut=null,Fn=!1,sa=!1;function Si(e){ut===null?ut=[e]:ut.push(e)}function qu(e){Fn=!0,Si(e)}function Et(){if(!sa&&ut!==null){sa=!0;var e=0,r=He;try{var o=ut;for(He=1;e<o.length;e++){var n=o[e];do n=n(!0);while(n!==null)}ut=null,Fn=!1}catch(l){throw ut!==null&&(ut=ut.slice(e+1)),Es(Tl,Et),l}finally{He=r,sa=!1}}return null}var co=[],uo=0,Ln=null,Hn=0,Hr=[],Ur=0,Bt=null,pt=1,ht="";function Wt(e,r){co[uo++]=Hn,co[uo++]=Ln,Ln=e,Hn=r}function Pi(e,r,o){Hr[Ur++]=pt,Hr[Ur++]=ht,Hr[Ur++]=Bt,Bt=e;var n=pt;e=ht;var l=32-Qr(n)-1;n&=~(1<<l),o+=1;var a=32-Qr(r)+l;if(30<a){var c=l-l%5;a=(n&(1<<c)-1).toString(32),n>>=c,l-=c,pt=1<<32-Qr(r)+l|o<<l|n,ht=a+e}else pt=1<<a|o<<l|n,ht=e}function ia(e){e.return!==null&&(Wt(e,1),Pi(e,1,0))}function ca(e){for(;e===Ln;)Ln=co[--uo],co[uo]=null,Hn=co[--uo],co[uo]=null;for(;e===Bt;)Bt=Hr[--Ur],Hr[Ur]=null,ht=Hr[--Ur],Hr[Ur]=null,pt=Hr[--Ur],Hr[Ur]=null}var Rr=null,_r=null,Xe=!1,Kr=null;function Ei(e,r){var o=qr(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=e,r=e.deletions,r===null?(e.deletions=[o],e.flags|=16):r.push(o)}function Ti(e,r){switch(e.tag){case 5:var o=e.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Rr=e,_r=Ct(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Rr=e,_r=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Bt!==null?{id:pt,overflow:ht}:null,e.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=qr(18,null,null,0),o.stateNode=r,o.return=e,e.child=o,Rr=e,_r=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ua(e){if(Xe){var r=_r;if(r){var o=r;if(!Ti(e,r)){if(da(e))throw Error(i(418));r=Ct(o.nextSibling);var n=Rr;r&&Ti(e,r)?Ei(n,o):(e.flags=e.flags&-4097|2,Xe=!1,Rr=e)}}else{if(da(e))throw Error(i(418));e.flags=e.flags&-4097|2,Xe=!1,Rr=e}}}function zi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rr=e}function Un(e){if(e!==Rr)return!1;if(!Xe)return zi(e),Xe=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!ta(e.type,e.memoizedProps)),r&&(r=_r)){if(da(e))throw Mi(),Error(i(418));for(;r;)Ei(e,r),r=Ct(r.nextSibling)}if(zi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(r===0){_r=Ct(e.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}e=e.nextSibling}_r=null}}else _r=Rr?Ct(e.stateNode.nextSibling):null;return!0}function Mi(){for(var e=_r;e;)e=Ct(e.nextSibling)}function po(){_r=Rr=null,Xe=!1}function pa(e){Kr===null?Kr=[e]:Kr.push(e)}var Yu=X.ReactCurrentBatchConfig;function qo(e,r,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var n=o.stateNode}if(!n)throw Error(i(147,e));var l=n,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(c){var m=l.refs;c===null?delete m[a]:m[a]=c},r._stringRef=a,r)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Bn(e,r){throw e=Object.prototype.toString.call(r),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Oi(e){var r=e._init;return r(e._payload)}function Di(e){function r(T,y){if(e){var z=T.deletions;z===null?(T.deletions=[y],T.flags|=16):z.push(y)}}function o(T,y){if(!e)return null;for(;y!==null;)r(T,y),y=y.sibling;return null}function n(T,y){for(T=new Map;y!==null;)y.key!==null?T.set(y.key,y):T.set(y.index,y),y=y.sibling;return T}function l(T,y){return T=At(T,y),T.index=0,T.sibling=null,T}function a(T,y,z){return T.index=z,e?(z=T.alternate,z!==null?(z=z.index,z<y?(T.flags|=2,y):z):(T.flags|=2,y)):(T.flags|=1048576,y)}function c(T){return e&&T.alternate===null&&(T.flags|=2),T}function m(T,y,z,te){return y===null||y.tag!==6?(y=os(z,T.mode,te),y.return=T,y):(y=l(y,z),y.return=T,y)}function v(T,y,z,te){var ge=z.type;return ge===E?K(T,y,z.props.children,te,z.key):y!==null&&(y.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===Ee&&Oi(ge)===y.type)?(te=l(y,z.props),te.ref=qo(T,y,z),te.return=T,te):(te=pl(z.type,z.key,z.props,null,T.mode,te),te.ref=qo(T,y,z),te.return=T,te)}function D(T,y,z,te){return y===null||y.tag!==4||y.stateNode.containerInfo!==z.containerInfo||y.stateNode.implementation!==z.implementation?(y=ns(z,T.mode,te),y.return=T,y):(y=l(y,z.children||[]),y.return=T,y)}function K(T,y,z,te,ge){return y===null||y.tag!==7?(y=Gt(z,T.mode,te,ge),y.return=T,y):(y=l(y,z),y.return=T,y)}function J(T,y,z){if(typeof y=="string"&&y!==""||typeof y=="number")return y=os(""+y,T.mode,z),y.return=T,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case B:return z=pl(y.type,y.key,y.props,null,T.mode,z),z.ref=qo(T,null,y),z.return=T,z;case R:return y=ns(y,T.mode,z),y.return=T,y;case Ee:var te=y._init;return J(T,te(y._payload),z)}if(De(y)||se(y))return y=Gt(y,T.mode,z,null),y.return=T,y;Bn(T,y)}return null}function Q(T,y,z,te){var ge=y!==null?y.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return ge!==null?null:m(T,y,""+z,te);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case B:return z.key===ge?v(T,y,z,te):null;case R:return z.key===ge?D(T,y,z,te):null;case Ee:return ge=z._init,Q(T,y,ge(z._payload),te)}if(De(z)||se(z))return ge!==null?null:K(T,y,z,te,null);Bn(T,z)}return null}function ae(T,y,z,te,ge){if(typeof te=="string"&&te!==""||typeof te=="number")return T=T.get(z)||null,m(y,T,""+te,ge);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case B:return T=T.get(te.key===null?z:te.key)||null,v(y,T,te,ge);case R:return T=T.get(te.key===null?z:te.key)||null,D(y,T,te,ge);case Ee:var we=te._init;return ae(T,y,z,we(te._payload),ge)}if(De(te)||se(te))return T=T.get(z)||null,K(y,T,te,ge,null);Bn(y,te)}return null}function he(T,y,z,te){for(var ge=null,we=null,je=y,Pe=y=0,pr=null;je!==null&&Pe<z.length;Pe++){je.index>Pe?(pr=je,je=null):pr=je.sibling;var Fe=Q(T,je,z[Pe],te);if(Fe===null){je===null&&(je=pr);break}e&&je&&Fe.alternate===null&&r(T,je),y=a(Fe,y,Pe),we===null?ge=Fe:we.sibling=Fe,we=Fe,je=pr}if(Pe===z.length)return o(T,je),Xe&&Wt(T,Pe),ge;if(je===null){for(;Pe<z.length;Pe++)je=J(T,z[Pe],te),je!==null&&(y=a(je,y,Pe),we===null?ge=je:we.sibling=je,we=je);return Xe&&Wt(T,Pe),ge}for(je=n(T,je);Pe<z.length;Pe++)pr=ae(je,T,Pe,z[Pe],te),pr!==null&&(e&&pr.alternate!==null&&je.delete(pr.key===null?Pe:pr.key),y=a(pr,y,Pe),we===null?ge=pr:we.sibling=pr,we=pr);return e&&je.forEach(function(It){return r(T,It)}),Xe&&Wt(T,Pe),ge}function me(T,y,z,te){var ge=se(z);if(typeof ge!="function")throw Error(i(150));if(z=ge.call(z),z==null)throw Error(i(151));for(var we=ge=null,je=y,Pe=y=0,pr=null,Fe=z.next();je!==null&&!Fe.done;Pe++,Fe=z.next()){je.index>Pe?(pr=je,je=null):pr=je.sibling;var It=Q(T,je,Fe.value,te);if(It===null){je===null&&(je=pr);break}e&&je&&It.alternate===null&&r(T,je),y=a(It,y,Pe),we===null?ge=It:we.sibling=It,we=It,je=pr}if(Fe.done)return o(T,je),Xe&&Wt(T,Pe),ge;if(je===null){for(;!Fe.done;Pe++,Fe=z.next())Fe=J(T,Fe.value,te),Fe!==null&&(y=a(Fe,y,Pe),we===null?ge=Fe:we.sibling=Fe,we=Fe);return Xe&&Wt(T,Pe),ge}for(je=n(T,je);!Fe.done;Pe++,Fe=z.next())Fe=ae(je,T,Pe,Fe.value,te),Fe!==null&&(e&&Fe.alternate!==null&&je.delete(Fe.key===null?Pe:Fe.key),y=a(Fe,y,Pe),we===null?ge=Fe:we.sibling=Fe,we=Fe);return e&&je.forEach(function(Cp){return r(T,Cp)}),Xe&&Wt(T,Pe),ge}function tr(T,y,z,te){if(typeof z=="object"&&z!==null&&z.type===E&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case B:e:{for(var ge=z.key,we=y;we!==null;){if(we.key===ge){if(ge=z.type,ge===E){if(we.tag===7){o(T,we.sibling),y=l(we,z.props.children),y.return=T,T=y;break e}}else if(we.elementType===ge||typeof ge=="object"&&ge!==null&&ge.$$typeof===Ee&&Oi(ge)===we.type){o(T,we.sibling),y=l(we,z.props),y.ref=qo(T,we,z),y.return=T,T=y;break e}o(T,we);break}else r(T,we);we=we.sibling}z.type===E?(y=Gt(z.props.children,T.mode,te,z.key),y.return=T,T=y):(te=pl(z.type,z.key,z.props,null,T.mode,te),te.ref=qo(T,y,z),te.return=T,T=te)}return c(T);case R:e:{for(we=z.key;y!==null;){if(y.key===we)if(y.tag===4&&y.stateNode.containerInfo===z.containerInfo&&y.stateNode.implementation===z.implementation){o(T,y.sibling),y=l(y,z.children||[]),y.return=T,T=y;break e}else{o(T,y);break}else r(T,y);y=y.sibling}y=ns(z,T.mode,te),y.return=T,T=y}return c(T);case Ee:return we=z._init,tr(T,y,we(z._payload),te)}if(De(z))return he(T,y,z,te);if(se(z))return me(T,y,z,te);Bn(T,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,y!==null&&y.tag===6?(o(T,y.sibling),y=l(y,z),y.return=T,T=y):(o(T,y),y=os(z,T.mode,te),y.return=T,T=y),c(T)):o(T,y)}return tr}var ho=Di(!0),Ri=Di(!1),Wn=St(null),$n=null,mo=null,ha=null;function ma(){ha=mo=$n=null}function fa(e){var r=Wn.current;Ye(Wn),e._currentValue=r}function ga(e,r,o){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===o)break;e=e.return}}function fo(e,r){$n=e,ha=mo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Er=!0),e.firstContext=null)}function Br(e){var r=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:r,next:null},mo===null){if($n===null)throw Error(i(308));mo=e,$n.dependencies={lanes:0,firstContext:e}}else mo=mo.next=e;return r}var $t=null;function xa(e){$t===null?$t=[e]:$t.push(e)}function _i(e,r,o,n){var l=r.interleaved;return l===null?(o.next=o,xa(r)):(o.next=l.next,l.next=o),r.interleaved=o,mt(e,n)}function mt(e,r){e.lanes|=r;var o=e.alternate;for(o!==null&&(o.lanes|=r),o=e,e=e.return;e!==null;)e.childLanes|=r,o=e.alternate,o!==null&&(o.childLanes|=r),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Tt=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ai(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function zt(e,r,o){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ie&2)!==0){var l=n.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r,mt(e,o)}return l=n.interleaved,l===null?(r.next=r,xa(n)):(r.next=l.next,l.next=r),n.interleaved=r,mt(e,o)}function qn(e,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,o|=n,r.lanes=o,Ol(e,o)}}function Ii(e,r){var o=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,o===n)){var l=null,a=null;if(o=o.firstBaseUpdate,o!==null){do{var c={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};a===null?l=a=c:a=a.next=c,o=o.next}while(o!==null);a===null?l=a=r:a=a.next=r}else l=a=r;o={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=r:e.next=r,o.lastBaseUpdate=r}function Yn(e,r,o,n){var l=e.updateQueue;Tt=!1;var a=l.firstBaseUpdate,c=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var v=m,D=v.next;v.next=null,c===null?a=D:c.next=D,c=v;var K=e.alternate;K!==null&&(K=K.updateQueue,m=K.lastBaseUpdate,m!==c&&(m===null?K.firstBaseUpdate=D:m.next=D,K.lastBaseUpdate=v))}if(a!==null){var J=l.baseState;c=0,K=D=v=null,m=a;do{var Q=m.lane,ae=m.eventTime;if((n&Q)===Q){K!==null&&(K=K.next={eventTime:ae,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var he=e,me=m;switch(Q=r,ae=o,me.tag){case 1:if(he=me.payload,typeof he=="function"){J=he.call(ae,J,Q);break e}J=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=me.payload,Q=typeof he=="function"?he.call(ae,J,Q):he,Q==null)break e;J=re({},J,Q);break e;case 2:Tt=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,Q=l.effects,Q===null?l.effects=[m]:Q.push(m))}else ae={eventTime:ae,lane:Q,tag:m.tag,payload:m.payload,callback:m.callback,next:null},K===null?(D=K=ae,v=J):K=K.next=ae,c|=Q;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;Q=m,m=Q.next,Q.next=null,l.lastBaseUpdate=Q,l.shared.pending=null}}while(!0);if(K===null&&(v=J),l.baseState=v,l.firstBaseUpdate=D,l.lastBaseUpdate=K,r=l.shared.interleaved,r!==null){l=r;do c|=l.lane,l=l.next;while(l!==r)}else a===null&&(l.shared.lanes=0);Vt|=c,e.lanes=c,e.memoizedState=J}}function Fi(e,r,o){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],l=n.callback;if(l!==null){if(n.callback=null,n=o,typeof l!="function")throw Error(i(191,l));l.call(n)}}}var Yo={},lt=St(Yo),Vo=St(Yo),Qo=St(Yo);function qt(e){if(e===Yo)throw Error(i(174));return e}function ya(e,r){switch($e(Qo,r),$e(Vo,e),$e(lt,Yo),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Qe(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Qe(r,e)}Ye(lt),$e(lt,r)}function go(){Ye(lt),Ye(Vo),Ye(Qo)}function Li(e){qt(Qo.current);var r=qt(lt.current),o=Qe(r,e.type);r!==o&&($e(Vo,e),$e(lt,o))}function ba(e){Vo.current===e&&(Ye(lt),Ye(Vo))}var Je=St(0);function Vn(e){for(var r=e;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ka=[];function Na(){for(var e=0;e<ka.length;e++)ka[e]._workInProgressVersionPrimary=null;ka.length=0}var Qn=X.ReactCurrentDispatcher,wa=X.ReactCurrentBatchConfig,Yt=0,Ze=null,ar=null,dr=null,Xn=!1,Xo=!1,Ko=0,Vu=0;function xr(){throw Error(i(321))}function ja(e,r){if(r===null)return!1;for(var o=0;o<r.length&&o<e.length;o++)if(!Xr(e[o],r[o]))return!1;return!0}function Ca(e,r,o,n,l,a){if(Yt=a,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qn.current=e===null||e.memoizedState===null?Gu:Ju,e=o(n,l),Xo){a=0;do{if(Xo=!1,Ko=0,25<=a)throw Error(i(301));a+=1,dr=ar=null,r.updateQueue=null,Qn.current=Zu,e=o(n,l)}while(Xo)}if(Qn.current=Jn,r=ar!==null&&ar.next!==null,Yt=0,dr=ar=Ze=null,Xn=!1,r)throw Error(i(300));return e}function Sa(){var e=Ko!==0;return Ko=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dr===null?Ze.memoizedState=dr=e:dr=dr.next=e,dr}function Wr(){if(ar===null){var e=Ze.alternate;e=e!==null?e.memoizedState:null}else e=ar.next;var r=dr===null?Ze.memoizedState:dr.next;if(r!==null)dr=r,ar=e;else{if(e===null)throw Error(i(310));ar=e,e={memoizedState:ar.memoizedState,baseState:ar.baseState,baseQueue:ar.baseQueue,queue:ar.queue,next:null},dr===null?Ze.memoizedState=dr=e:dr=dr.next=e}return dr}function Go(e,r){return typeof r=="function"?r(e):r}function Pa(e){var r=Wr(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var n=ar,l=n.baseQueue,a=o.pending;if(a!==null){if(l!==null){var c=l.next;l.next=a.next,a.next=c}n.baseQueue=l=a,o.pending=null}if(l!==null){a=l.next,n=n.baseState;var m=c=null,v=null,D=a;do{var K=D.lane;if((Yt&K)===K)v!==null&&(v=v.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),n=D.hasEagerState?D.eagerState:e(n,D.action);else{var J={lane:K,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};v===null?(m=v=J,c=n):v=v.next=J,Ze.lanes|=K,Vt|=K}D=D.next}while(D!==null&&D!==a);v===null?c=n:v.next=m,Xr(n,r.memoizedState)||(Er=!0),r.memoizedState=n,r.baseState=c,r.baseQueue=v,o.lastRenderedState=n}if(e=o.interleaved,e!==null){l=e;do a=l.lane,Ze.lanes|=a,Vt|=a,l=l.next;while(l!==e)}else l===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Ea(e){var r=Wr(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var n=o.dispatch,l=o.pending,a=r.memoizedState;if(l!==null){o.pending=null;var c=l=l.next;do a=e(a,c.action),c=c.next;while(c!==l);Xr(a,r.memoizedState)||(Er=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),o.lastRenderedState=a}return[a,n]}function Hi(){}function Ui(e,r){var o=Ze,n=Wr(),l=r(),a=!Xr(n.memoizedState,l);if(a&&(n.memoizedState=l,Er=!0),n=n.queue,Ta($i.bind(null,o,n,e),[e]),n.getSnapshot!==r||a||dr!==null&&dr.memoizedState.tag&1){if(o.flags|=2048,Jo(9,Wi.bind(null,o,n,l,r),void 0,null),ur===null)throw Error(i(349));(Yt&30)!==0||Bi(o,r,l)}return l}function Bi(e,r,o){e.flags|=16384,e={getSnapshot:r,value:o},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[e]):(o=r.stores,o===null?r.stores=[e]:o.push(e))}function Wi(e,r,o,n){r.value=o,r.getSnapshot=n,qi(r)&&Yi(e)}function $i(e,r,o){return o(function(){qi(r)&&Yi(e)})}function qi(e){var r=e.getSnapshot;e=e.value;try{var o=r();return!Xr(e,o)}catch{return!0}}function Yi(e){var r=mt(e,1);r!==null&&et(r,e,1,-1)}function Vi(e){var r=at();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},r.queue=e,e=e.dispatch=Ku.bind(null,Ze,e),[r.memoizedState,e]}function Jo(e,r,o,n){return e={tag:e,create:r,destroy:o,deps:n,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=e.next=e):(o=r.lastEffect,o===null?r.lastEffect=e.next=e:(n=o.next,o.next=e,e.next=n,r.lastEffect=e)),e}function Qi(){return Wr().memoizedState}function Kn(e,r,o,n){var l=at();Ze.flags|=e,l.memoizedState=Jo(1|r,o,void 0,n===void 0?null:n)}function Gn(e,r,o,n){var l=Wr();n=n===void 0?null:n;var a=void 0;if(ar!==null){var c=ar.memoizedState;if(a=c.destroy,n!==null&&ja(n,c.deps)){l.memoizedState=Jo(r,o,a,n);return}}Ze.flags|=e,l.memoizedState=Jo(1|r,o,a,n)}function Xi(e,r){return Kn(8390656,8,e,r)}function Ta(e,r){return Gn(2048,8,e,r)}function Ki(e,r){return Gn(4,2,e,r)}function Gi(e,r){return Gn(4,4,e,r)}function Ji(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Zi(e,r,o){return o=o!=null?o.concat([e]):null,Gn(4,4,Ji.bind(null,r,e),o)}function za(){}function ec(e,r){var o=Wr();r=r===void 0?null:r;var n=o.memoizedState;return n!==null&&r!==null&&ja(r,n[1])?n[0]:(o.memoizedState=[e,r],e)}function rc(e,r){var o=Wr();r=r===void 0?null:r;var n=o.memoizedState;return n!==null&&r!==null&&ja(r,n[1])?n[0]:(e=e(),o.memoizedState=[e,r],e)}function tc(e,r,o){return(Yt&21)===0?(e.baseState&&(e.baseState=!1,Er=!0),e.memoizedState=o):(Xr(o,r)||(o=Os(),Ze.lanes|=o,Vt|=o,e.baseState=!0),r)}function Qu(e,r){var o=He;He=o!==0&&4>o?o:4,e(!0);var n=wa.transition;wa.transition={};try{e(!1),r()}finally{He=o,wa.transition=n}}function oc(){return Wr().memoizedState}function Xu(e,r,o){var n=Rt(e);if(o={lane:n,action:o,hasEagerState:!1,eagerState:null,next:null},nc(e))lc(r,o);else if(o=_i(e,r,o,n),o!==null){var l=Nr();et(o,e,n,l),ac(o,r,n)}}function Ku(e,r,o){var n=Rt(e),l={lane:n,action:o,hasEagerState:!1,eagerState:null,next:null};if(nc(e))lc(r,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var c=r.lastRenderedState,m=a(c,o);if(l.hasEagerState=!0,l.eagerState=m,Xr(m,c)){var v=r.interleaved;v===null?(l.next=l,xa(r)):(l.next=v.next,v.next=l),r.interleaved=l;return}}catch{}finally{}o=_i(e,r,l,n),o!==null&&(l=Nr(),et(o,e,n,l),ac(o,r,n))}}function nc(e){var r=e.alternate;return e===Ze||r!==null&&r===Ze}function lc(e,r){Xo=Xn=!0;var o=e.pending;o===null?r.next=r:(r.next=o.next,o.next=r),e.pending=r}function ac(e,r,o){if((o&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,o|=n,r.lanes=o,Ol(e,o)}}var Jn={readContext:Br,useCallback:xr,useContext:xr,useEffect:xr,useImperativeHandle:xr,useInsertionEffect:xr,useLayoutEffect:xr,useMemo:xr,useReducer:xr,useRef:xr,useState:xr,useDebugValue:xr,useDeferredValue:xr,useTransition:xr,useMutableSource:xr,useSyncExternalStore:xr,useId:xr,unstable_isNewReconciler:!1},Gu={readContext:Br,useCallback:function(e,r){return at().memoizedState=[e,r===void 0?null:r],e},useContext:Br,useEffect:Xi,useImperativeHandle:function(e,r,o){return o=o!=null?o.concat([e]):null,Kn(4194308,4,Ji.bind(null,r,e),o)},useLayoutEffect:function(e,r){return Kn(4194308,4,e,r)},useInsertionEffect:function(e,r){return Kn(4,2,e,r)},useMemo:function(e,r){var o=at();return r=r===void 0?null:r,e=e(),o.memoizedState=[e,r],e},useReducer:function(e,r,o){var n=at();return r=o!==void 0?o(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Xu.bind(null,Ze,e),[n.memoizedState,e]},useRef:function(e){var r=at();return e={current:e},r.memoizedState=e},useState:Vi,useDebugValue:za,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Vi(!1),r=e[0];return e=Qu.bind(null,e[1]),at().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,o){var n=Ze,l=at();if(Xe){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),ur===null)throw Error(i(349));(Yt&30)!==0||Bi(n,r,o)}l.memoizedState=o;var a={value:o,getSnapshot:r};return l.queue=a,Xi($i.bind(null,n,a,e),[e]),n.flags|=2048,Jo(9,Wi.bind(null,n,a,o,r),void 0,null),o},useId:function(){var e=at(),r=ur.identifierPrefix;if(Xe){var o=ht,n=pt;o=(n&~(1<<32-Qr(n)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ko++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Vu++,r=":"+r+"r"+o.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Ju={readContext:Br,useCallback:ec,useContext:Br,useEffect:Ta,useImperativeHandle:Zi,useInsertionEffect:Ki,useLayoutEffect:Gi,useMemo:rc,useReducer:Pa,useRef:Qi,useState:function(){return Pa(Go)},useDebugValue:za,useDeferredValue:function(e){var r=Wr();return tc(r,ar.memoizedState,e)},useTransition:function(){var e=Pa(Go)[0],r=Wr().memoizedState;return[e,r]},useMutableSource:Hi,useSyncExternalStore:Ui,useId:oc,unstable_isNewReconciler:!1},Zu={readContext:Br,useCallback:ec,useContext:Br,useEffect:Ta,useImperativeHandle:Zi,useInsertionEffect:Ki,useLayoutEffect:Gi,useMemo:rc,useReducer:Ea,useRef:Qi,useState:function(){return Ea(Go)},useDebugValue:za,useDeferredValue:function(e){var r=Wr();return ar===null?r.memoizedState=e:tc(r,ar.memoizedState,e)},useTransition:function(){var e=Ea(Go)[0],r=Wr().memoizedState;return[e,r]},useMutableSource:Hi,useSyncExternalStore:Ui,useId:oc,unstable_isNewReconciler:!1};function Gr(e,r){if(e&&e.defaultProps){r=re({},r),e=e.defaultProps;for(var o in e)r[o]===void 0&&(r[o]=e[o]);return r}return r}function Ma(e,r,o,n){r=e.memoizedState,o=o(n,r),o=o==null?r:re({},r,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Zn={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,r,o){e=e._reactInternals;var n=Nr(),l=Rt(e),a=ft(n,l);a.payload=r,o!=null&&(a.callback=o),r=zt(e,a,l),r!==null&&(et(r,e,l,n),qn(r,e,l))},enqueueReplaceState:function(e,r,o){e=e._reactInternals;var n=Nr(),l=Rt(e),a=ft(n,l);a.tag=1,a.payload=r,o!=null&&(a.callback=o),r=zt(e,a,l),r!==null&&(et(r,e,l,n),qn(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var o=Nr(),n=Rt(e),l=ft(o,n);l.tag=2,r!=null&&(l.callback=r),r=zt(e,l,n),r!==null&&(et(r,e,n,o),qn(r,e,n))}};function sc(e,r,o,n,l,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,c):r.prototype&&r.prototype.isPureReactComponent?!Fo(o,n)||!Fo(l,a):!0}function ic(e,r,o){var n=!1,l=Pt,a=r.contextType;return typeof a=="object"&&a!==null?a=Br(a):(l=Pr(r)?Ut:gr.current,n=r.contextTypes,a=(n=n!=null)?io(e,l):Pt),r=new r(o,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Zn,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),r}function cc(e,r,o,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,n),r.state!==e&&Zn.enqueueReplaceState(r,r.state,null)}function Oa(e,r,o,n){var l=e.stateNode;l.props=o,l.state=e.memoizedState,l.refs={},va(e);var a=r.contextType;typeof a=="object"&&a!==null?l.context=Br(a):(a=Pr(r)?Ut:gr.current,l.context=io(e,a)),l.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Ma(e,r,a,o),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Zn.enqueueReplaceState(l,l.state,null),Yn(e,o,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xo(e,r){try{var o="",n=r;do o+=H(n),n=n.return;while(n);var l=o}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:l,digest:null}}function Da(e,r,o){return{value:e,source:null,stack:o??null,digest:r??null}}function Ra(e,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var ep=typeof WeakMap=="function"?WeakMap:Map;function dc(e,r,o){o=ft(-1,o),o.tag=3,o.payload={element:null};var n=r.value;return o.callback=function(){al||(al=!0,Xa=n),Ra(e,r)},o}function uc(e,r,o){o=ft(-1,o),o.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=r.value;o.payload=function(){return n(l)},o.callback=function(){Ra(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(o.callback=function(){Ra(e,r),typeof n!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var c=r.stack;this.componentDidCatch(r.value,{componentStack:c!==null?c:""})}),o}function pc(e,r,o){var n=e.pingCache;if(n===null){n=e.pingCache=new ep;var l=new Set;n.set(r,l)}else l=n.get(r),l===void 0&&(l=new Set,n.set(r,l));l.has(o)||(l.add(o),e=mp.bind(null,e,r,o),r.then(e,e))}function hc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function mc(e,r,o,n,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ft(-1,1),r.tag=2,zt(o,r,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var rp=X.ReactCurrentOwner,Er=!1;function kr(e,r,o,n){r.child=e===null?Ri(r,null,o,n):ho(r,e.child,o,n)}function fc(e,r,o,n,l){o=o.render;var a=r.ref;return fo(r,l),n=Ca(e,r,o,n,a,l),o=Sa(),e!==null&&!Er?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,gt(e,r,l)):(Xe&&o&&ia(r),r.flags|=1,kr(e,r,n,l),r.child)}function gc(e,r,o,n,l){if(e===null){var a=o.type;return typeof a=="function"&&!ts(a)&&a.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=a,xc(e,r,a,n,l)):(e=pl(o.type,null,n,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&l)===0){var c=a.memoizedProps;if(o=o.compare,o=o!==null?o:Fo,o(c,n)&&e.ref===r.ref)return gt(e,r,l)}return r.flags|=1,e=At(a,n),e.ref=r.ref,e.return=r,r.child=e}function xc(e,r,o,n,l){if(e!==null){var a=e.memoizedProps;if(Fo(a,n)&&e.ref===r.ref)if(Er=!1,r.pendingProps=n=a,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Er=!0);else return r.lanes=e.lanes,gt(e,r,l)}return _a(e,r,o,n,l)}function vc(e,r,o){var n=r.pendingProps,l=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(yo,Ar),Ar|=o;else{if((o&1073741824)===0)return e=a!==null?a.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,$e(yo,Ar),Ar|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:o,$e(yo,Ar),Ar|=n}else a!==null?(n=a.baseLanes|o,r.memoizedState=null):n=o,$e(yo,Ar),Ar|=n;return kr(e,r,l,o),r.child}function yc(e,r){var o=r.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function _a(e,r,o,n,l){var a=Pr(o)?Ut:gr.current;return a=io(r,a),fo(r,l),o=Ca(e,r,o,n,a,l),n=Sa(),e!==null&&!Er?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,gt(e,r,l)):(Xe&&n&&ia(r),r.flags|=1,kr(e,r,o,l),r.child)}function bc(e,r,o,n,l){if(Pr(o)){var a=!0;In(r)}else a=!1;if(fo(r,l),r.stateNode===null)rl(e,r),ic(r,o,n),Oa(r,o,n,l),n=!0;else if(e===null){var c=r.stateNode,m=r.memoizedProps;c.props=m;var v=c.context,D=o.contextType;typeof D=="object"&&D!==null?D=Br(D):(D=Pr(o)?Ut:gr.current,D=io(r,D));var K=o.getDerivedStateFromProps,J=typeof K=="function"||typeof c.getSnapshotBeforeUpdate=="function";J||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==n||v!==D)&&cc(r,c,n,D),Tt=!1;var Q=r.memoizedState;c.state=Q,Yn(r,n,c,l),v=r.memoizedState,m!==n||Q!==v||Sr.current||Tt?(typeof K=="function"&&(Ma(r,o,K,n),v=r.memoizedState),(m=Tt||sc(r,o,m,n,Q,v,D))?(J||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(r.flags|=4194308)):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=v),c.props=n,c.state=v,c.context=D,n=m):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{c=r.stateNode,Ai(e,r),m=r.memoizedProps,D=r.type===r.elementType?m:Gr(r.type,m),c.props=D,J=r.pendingProps,Q=c.context,v=o.contextType,typeof v=="object"&&v!==null?v=Br(v):(v=Pr(o)?Ut:gr.current,v=io(r,v));var ae=o.getDerivedStateFromProps;(K=typeof ae=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==J||Q!==v)&&cc(r,c,n,v),Tt=!1,Q=r.memoizedState,c.state=Q,Yn(r,n,c,l);var he=r.memoizedState;m!==J||Q!==he||Sr.current||Tt?(typeof ae=="function"&&(Ma(r,o,ae,n),he=r.memoizedState),(D=Tt||sc(r,o,D,n,Q,he,v)||!1)?(K||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,he,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,he,v)),typeof c.componentDidUpdate=="function"&&(r.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&Q===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&Q===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=he),c.props=n,c.state=he,c.context=v,n=D):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&Q===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&Q===e.memoizedState||(r.flags|=1024),n=!1)}return Aa(e,r,o,n,a,l)}function Aa(e,r,o,n,l,a){yc(e,r);var c=(r.flags&128)!==0;if(!n&&!c)return l&&Ci(r,o,!1),gt(e,r,a);n=r.stateNode,rp.current=r;var m=c&&typeof o.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&c?(r.child=ho(r,e.child,null,a),r.child=ho(r,null,m,a)):kr(e,r,m,a),r.memoizedState=n.state,l&&Ci(r,o,!0),r.child}function kc(e){var r=e.stateNode;r.pendingContext?wi(e,r.pendingContext,r.pendingContext!==r.context):r.context&&wi(e,r.context,!1),ya(e,r.containerInfo)}function Nc(e,r,o,n,l){return po(),pa(l),r.flags|=256,kr(e,r,o,n),r.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function wc(e,r,o){var n=r.pendingProps,l=Je.current,a=!1,c=(r.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(l&2)!==0),m?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),$e(Je,l&1),e===null)return ua(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(c=n.children,e=n.fallback,a?(n=r.mode,a=r.child,c={mode:"hidden",children:c},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=hl(c,n,0,null),e=Gt(e,n,o,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=Fa(o),r.memoizedState=Ia,e):La(r,c));if(l=e.memoizedState,l!==null&&(m=l.dehydrated,m!==null))return tp(e,r,c,n,m,l,o);if(a){a=n.fallback,c=r.mode,l=e.child,m=l.sibling;var v={mode:"hidden",children:n.children};return(c&1)===0&&r.child!==l?(n=r.child,n.childLanes=0,n.pendingProps=v,r.deletions=null):(n=At(l,v),n.subtreeFlags=l.subtreeFlags&14680064),m!==null?a=At(m,a):(a=Gt(a,c,o,null),a.flags|=2),a.return=r,n.return=r,n.sibling=a,r.child=n,n=a,a=r.child,c=e.child.memoizedState,c=c===null?Fa(o):{baseLanes:c.baseLanes|o,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~o,r.memoizedState=Ia,n}return a=e.child,e=a.sibling,n=At(a,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=o),n.return=r,n.sibling=null,e!==null&&(o=r.deletions,o===null?(r.deletions=[e],r.flags|=16):o.push(e)),r.child=n,r.memoizedState=null,n}function La(e,r){return r=hl({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function el(e,r,o,n){return n!==null&&pa(n),ho(r,e.child,null,o),e=La(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function tp(e,r,o,n,l,a,c){if(o)return r.flags&256?(r.flags&=-257,n=Da(Error(i(422))),el(e,r,c,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=n.fallback,l=r.mode,n=hl({mode:"visible",children:n.children},l,0,null),a=Gt(a,l,c,null),a.flags|=2,n.return=r,a.return=r,n.sibling=a,r.child=n,(r.mode&1)!==0&&ho(r,e.child,null,c),r.child.memoizedState=Fa(c),r.memoizedState=Ia,a);if((r.mode&1)===0)return el(e,r,c,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var m=n.dgst;return n=m,a=Error(i(419)),n=Da(a,n,void 0),el(e,r,c,n)}if(m=(c&e.childLanes)!==0,Er||m){if(n=ur,n!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(n.suspendedLanes|c))!==0?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,mt(e,l),et(n,e,l,-1))}return rs(),n=Da(Error(i(421))),el(e,r,c,n)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=fp.bind(null,e),l._reactRetry=r,null):(e=a.treeContext,_r=Ct(l.nextSibling),Rr=r,Xe=!0,Kr=null,e!==null&&(Hr[Ur++]=pt,Hr[Ur++]=ht,Hr[Ur++]=Bt,pt=e.id,ht=e.overflow,Bt=r),r=La(r,n.children),r.flags|=4096,r)}function jc(e,r,o){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),ga(e.return,r,o)}function Ha(e,r,o,n,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:o,tailMode:l}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=o,a.tailMode=l)}function Cc(e,r,o){var n=r.pendingProps,l=n.revealOrder,a=n.tail;if(kr(e,r,n.children,o),n=Je.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,o,r);else if(e.tag===19)jc(e,o,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if($e(Je,n),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(o=r.child,l=null;o!==null;)e=o.alternate,e!==null&&Vn(e)===null&&(l=o),o=o.sibling;o=l,o===null?(l=r.child,r.child=null):(l=o.sibling,o.sibling=null),Ha(r,!1,l,o,a);break;case"backwards":for(o=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&Vn(e)===null){r.child=l;break}e=l.sibling,l.sibling=o,o=l,l=e}Ha(r,!0,o,null,a);break;case"together":Ha(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function rl(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function gt(e,r,o){if(e!==null&&(r.dependencies=e.dependencies),Vt|=r.lanes,(o&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(i(153));if(r.child!==null){for(e=r.child,o=At(e,e.pendingProps),r.child=o,o.return=r;e.sibling!==null;)e=e.sibling,o=o.sibling=At(e,e.pendingProps),o.return=r;o.sibling=null}return r.child}function op(e,r,o){switch(r.tag){case 3:kc(r),po();break;case 5:Li(r);break;case 1:Pr(r.type)&&In(r);break;case 4:ya(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,l=r.memoizedProps.value;$e(Wn,n._currentValue),n._currentValue=l;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?($e(Je,Je.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?wc(e,r,o):($e(Je,Je.current&1),e=gt(e,r,o),e!==null?e.sibling:null);$e(Je,Je.current&1);break;case 19:if(n=(o&r.childLanes)!==0,(e.flags&128)!==0){if(n)return Cc(e,r,o);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$e(Je,Je.current),n)break;return null;case 22:case 23:return r.lanes=0,vc(e,r,o)}return gt(e,r,o)}var Sc,Ua,Pc,Ec;Sc=function(e,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ua=function(){},Pc=function(e,r,o,n){var l=e.memoizedProps;if(l!==n){e=r.stateNode,qt(lt.current);var a=null;switch(o){case"input":l=Ve(e,l),n=Ve(e,n),a=[];break;case"select":l=re({},l,{value:void 0}),n=re({},n,{value:void 0}),a=[];break;case"textarea":l=ve(e,l),n=ve(e,n),a=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Rn)}Ae(o,n);var c;o=null;for(D in l)if(!n.hasOwnProperty(D)&&l.hasOwnProperty(D)&&l[D]!=null)if(D==="style"){var m=l[D];for(c in m)m.hasOwnProperty(c)&&(o||(o={}),o[c]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(g.hasOwnProperty(D)?a||(a=[]):(a=a||[]).push(D,null));for(D in n){var v=n[D];if(m=l?.[D],n.hasOwnProperty(D)&&v!==m&&(v!=null||m!=null))if(D==="style")if(m){for(c in m)!m.hasOwnProperty(c)||v&&v.hasOwnProperty(c)||(o||(o={}),o[c]="");for(c in v)v.hasOwnProperty(c)&&m[c]!==v[c]&&(o||(o={}),o[c]=v[c])}else o||(a||(a=[]),a.push(D,o)),o=v;else D==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,m=m?m.__html:void 0,v!=null&&m!==v&&(a=a||[]).push(D,v)):D==="children"?typeof v!="string"&&typeof v!="number"||(a=a||[]).push(D,""+v):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(g.hasOwnProperty(D)?(v!=null&&D==="onScroll"&&qe("scroll",e),a||m===v||(a=[])):(a=a||[]).push(D,v))}o&&(a=a||[]).push("style",o);var D=a;(r.updateQueue=D)&&(r.flags|=4)}},Ec=function(e,r,o,n){o!==n&&(r.flags|=4)};function Zo(e,r){if(!Xe)switch(e.tailMode){case"hidden":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var n=null;o!==null;)o.alternate!==null&&(n=o),o=o.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function vr(e){var r=e.alternate!==null&&e.alternate.child===e.child,o=0,n=0;if(r)for(var l=e.child;l!==null;)o|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)o|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=o,r}function np(e,r,o){var n=r.pendingProps;switch(ca(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vr(r),null;case 1:return Pr(r.type)&&An(),vr(r),null;case 3:return n=r.stateNode,go(),Ye(Sr),Ye(gr),Na(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Un(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Kr!==null&&(Ja(Kr),Kr=null))),Ua(e,r),vr(r),null;case 5:ba(r);var l=qt(Qo.current);if(o=r.type,e!==null&&r.stateNode!=null)Pc(e,r,o,n,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(i(166));return vr(r),null}if(e=qt(lt.current),Un(r)){n=r.stateNode,o=r.type;var a=r.memoizedProps;switch(n[nt]=r,n[Wo]=a,e=(r.mode&1)!==0,o){case"dialog":qe("cancel",n),qe("close",n);break;case"iframe":case"object":case"embed":qe("load",n);break;case"video":case"audio":for(l=0;l<Ho.length;l++)qe(Ho[l],n);break;case"source":qe("error",n);break;case"img":case"image":case"link":qe("error",n),qe("load",n);break;case"details":qe("toggle",n);break;case"input":br(n,a),qe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},qe("invalid",n);break;case"textarea":Se(n,a),qe("invalid",n)}Ae(o,a),l=null;for(var c in a)if(a.hasOwnProperty(c)){var m=a[c];c==="children"?typeof m=="string"?n.textContent!==m&&(a.suppressHydrationWarning!==!0&&Dn(n.textContent,m,e),l=["children",m]):typeof m=="number"&&n.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&Dn(n.textContent,m,e),l=["children",""+m]):g.hasOwnProperty(c)&&m!=null&&c==="onScroll"&&qe("scroll",n)}switch(o){case"input":cr(n),We(n,a,!0);break;case"textarea":cr(n),j(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Rn)}n=l,r.updateQueue=n,n!==null&&(r.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=de(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(o,{is:n.is}):(e=c.createElement(o),o==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,o),e[nt]=r,e[Wo]=n,Sc(e,r,!1,!1),r.stateNode=e;e:{switch(c=Be(o,n),o){case"dialog":qe("cancel",e),qe("close",e),l=n;break;case"iframe":case"object":case"embed":qe("load",e),l=n;break;case"video":case"audio":for(l=0;l<Ho.length;l++)qe(Ho[l],e);l=n;break;case"source":qe("error",e),l=n;break;case"img":case"image":case"link":qe("error",e),qe("load",e),l=n;break;case"details":qe("toggle",e),l=n;break;case"input":br(e,n),l=Ve(e,n),qe("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=re({},n,{value:void 0}),qe("invalid",e);break;case"textarea":Se(e,n),l=ve(e,n),qe("invalid",e);break;default:l=n}Ae(o,l),m=l;for(a in m)if(m.hasOwnProperty(a)){var v=m[a];a==="style"?L(e,v):a==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Ue(e,v)):a==="children"?typeof v=="string"?(o!=="textarea"||v!=="")&&M(e,v):typeof v=="number"&&M(e,""+v):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(g.hasOwnProperty(a)?v!=null&&a==="onScroll"&&qe("scroll",e):v!=null&&F(e,a,v,c))}switch(o){case"input":cr(e),We(e,n,!1);break;case"textarea":cr(e),j(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ke(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?ee(e,!!n.multiple,a,!1):n.defaultValue!=null&&ee(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Rn)}switch(o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return vr(r),null;case 6:if(e&&r.stateNode!=null)Ec(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(i(166));if(o=qt(Qo.current),qt(lt.current),Un(r)){if(n=r.stateNode,o=r.memoizedProps,n[nt]=r,(a=n.nodeValue!==o)&&(e=Rr,e!==null))switch(e.tag){case 3:Dn(n.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dn(n.nodeValue,o,(e.mode&1)!==0)}a&&(r.flags|=4)}else n=(o.nodeType===9?o:o.ownerDocument).createTextNode(n),n[nt]=r,r.stateNode=n}return vr(r),null;case 13:if(Ye(Je),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Xe&&_r!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Mi(),po(),r.flags|=98560,a=!1;else if(a=Un(r),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[nt]=r}else po(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;vr(r),a=!1}else Kr!==null&&(Ja(Kr),Kr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Je.current&1)!==0?sr===0&&(sr=3):rs())),r.updateQueue!==null&&(r.flags|=4),vr(r),null);case 4:return go(),Ua(e,r),e===null&&Uo(r.stateNode.containerInfo),vr(r),null;case 10:return fa(r.type._context),vr(r),null;case 17:return Pr(r.type)&&An(),vr(r),null;case 19:if(Ye(Je),a=r.memoizedState,a===null)return vr(r),null;if(n=(r.flags&128)!==0,c=a.rendering,c===null)if(n)Zo(a,!1);else{if(sr!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(c=Vn(e),c!==null){for(r.flags|=128,Zo(a,!1),n=c.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=o,o=r.child;o!==null;)a=o,e=n,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return $e(Je,Je.current&1|2),r.child}e=e.sibling}a.tail!==null&&rr()>bo&&(r.flags|=128,n=!0,Zo(a,!1),r.lanes=4194304)}else{if(!n)if(e=Vn(c),e!==null){if(r.flags|=128,n=!0,o=e.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Zo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!Xe)return vr(r),null}else 2*rr()-a.renderingStartTime>bo&&o!==1073741824&&(r.flags|=128,n=!0,Zo(a,!1),r.lanes=4194304);a.isBackwards?(c.sibling=r.child,r.child=c):(o=a.last,o!==null?o.sibling=c:r.child=c,a.last=c)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=rr(),r.sibling=null,o=Je.current,$e(Je,n?o&1|2:o&1),r):(vr(r),null);case 22:case 23:return es(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(Ar&1073741824)!==0&&(vr(r),r.subtreeFlags&6&&(r.flags|=8192)):vr(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function lp(e,r){switch(ca(r),r.tag){case 1:return Pr(r.type)&&An(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return go(),Ye(Sr),Ye(gr),Na(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return ba(r),null;case 13:if(Ye(Je),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(i(340));po()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ye(Je),null;case 4:return go(),null;case 10:return fa(r.type._context),null;case 22:case 23:return es(),null;case 24:return null;default:return null}}var tl=!1,yr=!1,ap=typeof WeakSet=="function"?WeakSet:Set,ue=null;function vo(e,r){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(n){er(e,r,n)}else o.current=null}function Ba(e,r,o){try{o()}catch(n){er(e,r,n)}}var Tc=!1;function sp(e,r){if(ea=Nn,e=si(),Yl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var l=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{o.nodeType,a.nodeType}catch{o=null;break e}var c=0,m=-1,v=-1,D=0,K=0,J=e,Q=null;r:for(;;){for(var ae;J!==o||l!==0&&J.nodeType!==3||(m=c+l),J!==a||n!==0&&J.nodeType!==3||(v=c+n),J.nodeType===3&&(c+=J.nodeValue.length),(ae=J.firstChild)!==null;)Q=J,J=ae;for(;;){if(J===e)break r;if(Q===o&&++D===l&&(m=c),Q===a&&++K===n&&(v=c),(ae=J.nextSibling)!==null)break;J=Q,Q=J.parentNode}J=ae}o=m===-1||v===-1?null:{start:m,end:v}}else o=null}o=o||{start:0,end:0}}else o=null;for(ra={focusedElem:e,selectionRange:o},Nn=!1,ue=r;ue!==null;)if(r=ue,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,ue=e;else for(;ue!==null;){r=ue;try{var he=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(he!==null){var me=he.memoizedProps,tr=he.memoizedState,T=r.stateNode,y=T.getSnapshotBeforeUpdate(r.elementType===r.type?me:Gr(r.type,me),tr);T.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var z=r.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(te){er(r,r.return,te)}if(e=r.sibling,e!==null){e.return=r.return,ue=e;break}ue=r.return}return he=Tc,Tc=!1,he}function en(e,r,o){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Ba(r,o,a)}l=l.next}while(l!==n)}}function ol(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var n=o.create;o.destroy=n()}o=o.next}while(o!==r)}}function Wa(e){var r=e.ref;if(r!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof r=="function"?r(e):r.current=e}}function zc(e){var r=e.alternate;r!==null&&(e.alternate=null,zc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[nt],delete r[Wo],delete r[la],delete r[Wu],delete r[$u])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mc(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $a(e,r,o){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(e,r):o.insertBefore(e,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(e,o)):(r=o,r.appendChild(e)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Rn));else if(n!==4&&(e=e.child,e!==null))for($a(e,r,o),e=e.sibling;e!==null;)$a(e,r,o),e=e.sibling}function qa(e,r,o){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?o.insertBefore(e,r):o.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(qa(e,r,o),e=e.sibling;e!==null;)qa(e,r,o),e=e.sibling}var mr=null,Jr=!1;function Mt(e,r,o){for(o=o.child;o!==null;)Dc(e,r,o),o=o.sibling}function Dc(e,r,o){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(gn,o)}catch{}switch(o.tag){case 5:yr||vo(o,r);case 6:var n=mr,l=Jr;mr=null,Mt(e,r,o),mr=n,Jr=l,mr!==null&&(Jr?(e=mr,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):mr.removeChild(o.stateNode));break;case 18:mr!==null&&(Jr?(e=mr,o=o.stateNode,e.nodeType===8?na(e.parentNode,o):e.nodeType===1&&na(e,o),Oo(e)):na(mr,o.stateNode));break;case 4:n=mr,l=Jr,mr=o.stateNode.containerInfo,Jr=!0,Mt(e,r,o),mr=n,Jr=l;break;case 0:case 11:case 14:case 15:if(!yr&&(n=o.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var a=l,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&Ba(o,r,c),l=l.next}while(l!==n)}Mt(e,r,o);break;case 1:if(!yr&&(vo(o,r),n=o.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=o.memoizedProps,n.state=o.memoizedState,n.componentWillUnmount()}catch(m){er(o,r,m)}Mt(e,r,o);break;case 21:Mt(e,r,o);break;case 22:o.mode&1?(yr=(n=yr)||o.memoizedState!==null,Mt(e,r,o),yr=n):Mt(e,r,o);break;default:Mt(e,r,o)}}function Rc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new ap),r.forEach(function(n){var l=gp.bind(null,e,n);o.has(n)||(o.add(n),n.then(l,l))})}}function Zr(e,r){var o=r.deletions;if(o!==null)for(var n=0;n<o.length;n++){var l=o[n];try{var a=e,c=r,m=c;e:for(;m!==null;){switch(m.tag){case 5:mr=m.stateNode,Jr=!1;break e;case 3:mr=m.stateNode.containerInfo,Jr=!0;break e;case 4:mr=m.stateNode.containerInfo,Jr=!0;break e}m=m.return}if(mr===null)throw Error(i(160));Dc(a,c,l),mr=null,Jr=!1;var v=l.alternate;v!==null&&(v.return=null),l.return=null}catch(D){er(l,r,D)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)_c(r,e),r=r.sibling}function _c(e,r){var o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zr(r,e),st(e),n&4){try{en(3,e,e.return),ol(3,e)}catch(me){er(e,e.return,me)}try{en(5,e,e.return)}catch(me){er(e,e.return,me)}}break;case 1:Zr(r,e),st(e),n&512&&o!==null&&vo(o,o.return);break;case 5:if(Zr(r,e),st(e),n&512&&o!==null&&vo(o,o.return),e.flags&32){var l=e.stateNode;try{M(l,"")}catch(me){er(e,e.return,me)}}if(n&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,c=o!==null?o.memoizedProps:a,m=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&jr(l,a),Be(m,c);var D=Be(m,a);for(c=0;c<v.length;c+=2){var K=v[c],J=v[c+1];K==="style"?L(l,J):K==="dangerouslySetInnerHTML"?Ue(l,J):K==="children"?M(l,J):F(l,K,J,D)}switch(m){case"input":Lr(l,a);break;case"textarea":Ne(l,a);break;case"select":var Q=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var ae=a.value;ae!=null?ee(l,!!a.multiple,ae,!1):Q!==!!a.multiple&&(a.defaultValue!=null?ee(l,!!a.multiple,a.defaultValue,!0):ee(l,!!a.multiple,a.multiple?[]:"",!1))}l[Wo]=a}catch(me){er(e,e.return,me)}}break;case 6:if(Zr(r,e),st(e),n&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(me){er(e,e.return,me)}}break;case 3:if(Zr(r,e),st(e),n&4&&o!==null&&o.memoizedState.isDehydrated)try{Oo(r.containerInfo)}catch(me){er(e,e.return,me)}break;case 4:Zr(r,e),st(e);break;case 13:Zr(r,e),st(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Qa=rr())),n&4&&Rc(e);break;case 22:if(K=o!==null&&o.memoizedState!==null,e.mode&1?(yr=(D=yr)||K,Zr(r,e),yr=D):Zr(r,e),st(e),n&8192){if(D=e.memoizedState!==null,(e.stateNode.isHidden=D)&&!K&&(e.mode&1)!==0)for(ue=e,K=e.child;K!==null;){for(J=ue=K;ue!==null;){switch(Q=ue,ae=Q.child,Q.tag){case 0:case 11:case 14:case 15:en(4,Q,Q.return);break;case 1:vo(Q,Q.return);var he=Q.stateNode;if(typeof he.componentWillUnmount=="function"){n=Q,o=Q.return;try{r=n,he.props=r.memoizedProps,he.state=r.memoizedState,he.componentWillUnmount()}catch(me){er(n,o,me)}}break;case 5:vo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){Fc(J);continue}}ae!==null?(ae.return=Q,ue=ae):Fc(J)}K=K.sibling}e:for(K=null,J=e;;){if(J.tag===5){if(K===null){K=J;try{l=J.stateNode,D?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=J.stateNode,v=J.memoizedProps.style,c=v!=null&&v.hasOwnProperty("display")?v.display:null,m.style.display=_e("display",c))}catch(me){er(e,e.return,me)}}}else if(J.tag===6){if(K===null)try{J.stateNode.nodeValue=D?"":J.memoizedProps}catch(me){er(e,e.return,me)}}else if((J.tag!==22&&J.tag!==23||J.memoizedState===null||J===e)&&J.child!==null){J.child.return=J,J=J.child;continue}if(J===e)break e;for(;J.sibling===null;){if(J.return===null||J.return===e)break e;K===J&&(K=null),J=J.return}K===J&&(K=null),J.sibling.return=J.return,J=J.sibling}}break;case 19:Zr(r,e),st(e),n&4&&Rc(e);break;case 21:break;default:Zr(r,e),st(e)}}function st(e){var r=e.flags;if(r&2){try{e:{for(var o=e.return;o!==null;){if(Mc(o)){var n=o;break e}o=o.return}throw Error(i(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(M(l,""),n.flags&=-33);var a=Oc(e);qa(e,a,l);break;case 3:case 4:var c=n.stateNode.containerInfo,m=Oc(e);$a(e,m,c);break;default:throw Error(i(161))}}catch(v){er(e,e.return,v)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ip(e,r,o){ue=e,Ac(e)}function Ac(e,r,o){for(var n=(e.mode&1)!==0;ue!==null;){var l=ue,a=l.child;if(l.tag===22&&n){var c=l.memoizedState!==null||tl;if(!c){var m=l.alternate,v=m!==null&&m.memoizedState!==null||yr;m=tl;var D=yr;if(tl=c,(yr=v)&&!D)for(ue=l;ue!==null;)c=ue,v=c.child,c.tag===22&&c.memoizedState!==null?Lc(l):v!==null?(v.return=c,ue=v):Lc(l);for(;a!==null;)ue=a,Ac(a),a=a.sibling;ue=l,tl=m,yr=D}Ic(e)}else(l.subtreeFlags&8772)!==0&&a!==null?(a.return=l,ue=a):Ic(e)}}function Ic(e){for(;ue!==null;){var r=ue;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:yr||ol(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!yr)if(o===null)n.componentDidMount();else{var l=r.elementType===r.type?o.memoizedProps:Gr(r.type,o.memoizedProps);n.componentDidUpdate(l,o.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Fi(r,a,n);break;case 3:var c=r.updateQueue;if(c!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Fi(r,c,o)}break;case 5:var m=r.stateNode;if(o===null&&r.flags&4){o=m;var v=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&o.focus();break;case"img":v.src&&(o.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var D=r.alternate;if(D!==null){var K=D.memoizedState;if(K!==null){var J=K.dehydrated;J!==null&&Oo(J)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}yr||r.flags&512&&Wa(r)}catch(Q){er(r,r.return,Q)}}if(r===e){ue=null;break}if(o=r.sibling,o!==null){o.return=r.return,ue=o;break}ue=r.return}}function Fc(e){for(;ue!==null;){var r=ue;if(r===e){ue=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ue=o;break}ue=r.return}}function Lc(e){for(;ue!==null;){var r=ue;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ol(4,r)}catch(v){er(r,o,v)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var l=r.return;try{n.componentDidMount()}catch(v){er(r,l,v)}}var a=r.return;try{Wa(r)}catch(v){er(r,a,v)}break;case 5:var c=r.return;try{Wa(r)}catch(v){er(r,c,v)}}}catch(v){er(r,r.return,v)}if(r===e){ue=null;break}var m=r.sibling;if(m!==null){m.return=r.return,ue=m;break}ue=r.return}}var cp=Math.ceil,nl=X.ReactCurrentDispatcher,Ya=X.ReactCurrentOwner,$r=X.ReactCurrentBatchConfig,Ie=0,ur=null,nr=null,fr=0,Ar=0,yo=St(0),sr=0,rn=null,Vt=0,ll=0,Va=0,tn=null,Tr=null,Qa=0,bo=1/0,xt=null,al=!1,Xa=null,Ot=null,sl=!1,Dt=null,il=0,on=0,Ka=null,cl=-1,dl=0;function Nr(){return(Ie&6)!==0?rr():cl!==-1?cl:cl=rr()}function Rt(e){return(e.mode&1)===0?1:(Ie&2)!==0&&fr!==0?fr&-fr:Yu.transition!==null?(dl===0&&(dl=Os()),dl):(e=He,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e)}function et(e,r,o,n){if(50<on)throw on=0,Ka=null,Error(i(185));Po(e,o,n),((Ie&2)===0||e!==ur)&&(e===ur&&((Ie&2)===0&&(ll|=o),sr===4&&_t(e,fr)),zr(e,n),o===1&&Ie===0&&(r.mode&1)===0&&(bo=rr()+500,Fn&&Et()))}function zr(e,r){var o=e.callbackNode;Yd(e,r);var n=yn(e,e===ur?fr:0);if(n===0)o!==null&&Ts(o),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(o!=null&&Ts(o),r===1)e.tag===0?qu(Uc.bind(null,e)):Si(Uc.bind(null,e)),Uu(function(){(Ie&6)===0&&Et()}),o=null;else{switch(Ds(n)){case 1:o=Tl;break;case 4:o=zs;break;case 16:o=fn;break;case 536870912:o=Ms;break;default:o=fn}o=Xc(o,Hc.bind(null,e))}e.callbackPriority=r,e.callbackNode=o}}function Hc(e,r){if(cl=-1,dl=0,(Ie&6)!==0)throw Error(i(327));var o=e.callbackNode;if(ko()&&e.callbackNode!==o)return null;var n=yn(e,e===ur?fr:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=ul(e,n);else{r=n;var l=Ie;Ie|=2;var a=Wc();(ur!==e||fr!==r)&&(xt=null,bo=rr()+500,Xt(e,r));do try{pp();break}catch(m){Bc(e,m)}while(!0);ma(),nl.current=a,Ie=l,nr!==null?r=0:(ur=null,fr=0,r=sr)}if(r!==0){if(r===2&&(l=zl(e),l!==0&&(n=l,r=Ga(e,l))),r===1)throw o=rn,Xt(e,0),_t(e,n),zr(e,rr()),o;if(r===6)_t(e,n);else{if(l=e.current.alternate,(n&30)===0&&!dp(l)&&(r=ul(e,n),r===2&&(a=zl(e),a!==0&&(n=a,r=Ga(e,a))),r===1))throw o=rn,Xt(e,0),_t(e,n),zr(e,rr()),o;switch(e.finishedWork=l,e.finishedLanes=n,r){case 0:case 1:throw Error(i(345));case 2:Kt(e,Tr,xt);break;case 3:if(_t(e,n),(n&130023424)===n&&(r=Qa+500-rr(),10<r)){if(yn(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){Nr(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=oa(Kt.bind(null,e,Tr,xt),r);break}Kt(e,Tr,xt);break;case 4:if(_t(e,n),(n&4194240)===n)break;for(r=e.eventTimes,l=-1;0<n;){var c=31-Qr(n);a=1<<c,c=r[c],c>l&&(l=c),n&=~a}if(n=l,n=rr()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*cp(n/1960))-n,10<n){e.timeoutHandle=oa(Kt.bind(null,e,Tr,xt),n);break}Kt(e,Tr,xt);break;case 5:Kt(e,Tr,xt);break;default:throw Error(i(329))}}}return zr(e,rr()),e.callbackNode===o?Hc.bind(null,e):null}function Ga(e,r){var o=tn;return e.current.memoizedState.isDehydrated&&(Xt(e,r).flags|=256),e=ul(e,r),e!==2&&(r=Tr,Tr=o,r!==null&&Ja(r)),e}function Ja(e){Tr===null?Tr=e:Tr.push.apply(Tr,e)}function dp(e){for(var r=e;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var n=0;n<o.length;n++){var l=o[n],a=l.getSnapshot;l=l.value;try{if(!Xr(a(),l))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _t(e,r){for(r&=~Va,r&=~ll,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var o=31-Qr(r),n=1<<o;e[o]=-1,r&=~n}}function Uc(e){if((Ie&6)!==0)throw Error(i(327));ko();var r=yn(e,0);if((r&1)===0)return zr(e,rr()),null;var o=ul(e,r);if(e.tag!==0&&o===2){var n=zl(e);n!==0&&(r=n,o=Ga(e,n))}if(o===1)throw o=rn,Xt(e,0),_t(e,r),zr(e,rr()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Kt(e,Tr,xt),zr(e,rr()),null}function Za(e,r){var o=Ie;Ie|=1;try{return e(r)}finally{Ie=o,Ie===0&&(bo=rr()+500,Fn&&Et())}}function Qt(e){Dt!==null&&Dt.tag===0&&(Ie&6)===0&&ko();var r=Ie;Ie|=1;var o=$r.transition,n=He;try{if($r.transition=null,He=1,e)return e()}finally{He=n,$r.transition=o,Ie=r,(Ie&6)===0&&Et()}}function es(){Ar=yo.current,Ye(yo)}function Xt(e,r){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Hu(o)),nr!==null)for(o=nr.return;o!==null;){var n=o;switch(ca(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&An();break;case 3:go(),Ye(Sr),Ye(gr),Na();break;case 5:ba(n);break;case 4:go();break;case 13:Ye(Je);break;case 19:Ye(Je);break;case 10:fa(n.type._context);break;case 22:case 23:es()}o=o.return}if(ur=e,nr=e=At(e.current,null),fr=Ar=r,sr=0,rn=null,Va=ll=Vt=0,Tr=tn=null,$t!==null){for(r=0;r<$t.length;r++)if(o=$t[r],n=o.interleaved,n!==null){o.interleaved=null;var l=n.next,a=o.pending;if(a!==null){var c=a.next;a.next=l,n.next=c}o.pending=n}$t=null}return e}function Bc(e,r){do{var o=nr;try{if(ma(),Qn.current=Jn,Xn){for(var n=Ze.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}Xn=!1}if(Yt=0,dr=ar=Ze=null,Xo=!1,Ko=0,Ya.current=null,o===null||o.return===null){sr=1,rn=r,nr=null;break}e:{var a=e,c=o.return,m=o,v=r;if(r=fr,m.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var D=v,K=m,J=K.tag;if((K.mode&1)===0&&(J===0||J===11||J===15)){var Q=K.alternate;Q?(K.updateQueue=Q.updateQueue,K.memoizedState=Q.memoizedState,K.lanes=Q.lanes):(K.updateQueue=null,K.memoizedState=null)}var ae=hc(c);if(ae!==null){ae.flags&=-257,mc(ae,c,m,a,r),ae.mode&1&&pc(a,D,r),r=ae,v=D;var he=r.updateQueue;if(he===null){var me=new Set;me.add(v),r.updateQueue=me}else he.add(v);break e}else{if((r&1)===0){pc(a,D,r),rs();break e}v=Error(i(426))}}else if(Xe&&m.mode&1){var tr=hc(c);if(tr!==null){(tr.flags&65536)===0&&(tr.flags|=256),mc(tr,c,m,a,r),pa(xo(v,m));break e}}a=v=xo(v,m),sr!==4&&(sr=2),tn===null?tn=[a]:tn.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var T=dc(a,v,r);Ii(a,T);break e;case 1:m=v;var y=a.type,z=a.stateNode;if((a.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(Ot===null||!Ot.has(z)))){a.flags|=65536,r&=-r,a.lanes|=r;var te=uc(a,m,r);Ii(a,te);break e}}a=a.return}while(a!==null)}qc(o)}catch(ge){r=ge,nr===o&&o!==null&&(nr=o=o.return);continue}break}while(!0)}function Wc(){var e=nl.current;return nl.current=Jn,e===null?Jn:e}function rs(){(sr===0||sr===3||sr===2)&&(sr=4),ur===null||(Vt&268435455)===0&&(ll&268435455)===0||_t(ur,fr)}function ul(e,r){var o=Ie;Ie|=2;var n=Wc();(ur!==e||fr!==r)&&(xt=null,Xt(e,r));do try{up();break}catch(l){Bc(e,l)}while(!0);if(ma(),Ie=o,nl.current=n,nr!==null)throw Error(i(261));return ur=null,fr=0,sr}function up(){for(;nr!==null;)$c(nr)}function pp(){for(;nr!==null&&!Id();)$c(nr)}function $c(e){var r=Qc(e.alternate,e,Ar);e.memoizedProps=e.pendingProps,r===null?qc(e):nr=r,Ya.current=null}function qc(e){var r=e;do{var o=r.alternate;if(e=r.return,(r.flags&32768)===0){if(o=np(o,r,Ar),o!==null){nr=o;return}}else{if(o=lp(o,r),o!==null){o.flags&=32767,nr=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{sr=6,nr=null;return}}if(r=r.sibling,r!==null){nr=r;return}nr=r=e}while(r!==null);sr===0&&(sr=5)}function Kt(e,r,o){var n=He,l=$r.transition;try{$r.transition=null,He=1,hp(e,r,o,n)}finally{$r.transition=l,He=n}return null}function hp(e,r,o,n){do ko();while(Dt!==null);if((Ie&6)!==0)throw Error(i(327));o=e.finishedWork;var l=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=o.lanes|o.childLanes;if(Vd(e,a),e===ur&&(nr=ur=null,fr=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||sl||(sl=!0,Xc(fn,function(){return ko(),null})),a=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||a){a=$r.transition,$r.transition=null;var c=He;He=1;var m=Ie;Ie|=4,Ya.current=null,sp(e,o),_c(o,e),Du(ra),Nn=!!ea,ra=ea=null,e.current=o,ip(o),Fd(),Ie=m,He=c,$r.transition=a}else e.current=o;if(sl&&(sl=!1,Dt=e,il=l),a=e.pendingLanes,a===0&&(Ot=null),Ud(o.stateNode),zr(e,rr()),r!==null)for(n=e.onRecoverableError,o=0;o<r.length;o++)l=r[o],n(l.value,{componentStack:l.stack,digest:l.digest});if(al)throw al=!1,e=Xa,Xa=null,e;return(il&1)!==0&&e.tag!==0&&ko(),a=e.pendingLanes,(a&1)!==0?e===Ka?on++:(on=0,Ka=e):on=0,Et(),null}function ko(){if(Dt!==null){var e=Ds(il),r=$r.transition,o=He;try{if($r.transition=null,He=16>e?16:e,Dt===null)var n=!1;else{if(e=Dt,Dt=null,il=0,(Ie&6)!==0)throw Error(i(331));var l=Ie;for(Ie|=4,ue=e.current;ue!==null;){var a=ue,c=a.child;if((ue.flags&16)!==0){var m=a.deletions;if(m!==null){for(var v=0;v<m.length;v++){var D=m[v];for(ue=D;ue!==null;){var K=ue;switch(K.tag){case 0:case 11:case 15:en(8,K,a)}var J=K.child;if(J!==null)J.return=K,ue=J;else for(;ue!==null;){K=ue;var Q=K.sibling,ae=K.return;if(zc(K),K===D){ue=null;break}if(Q!==null){Q.return=ae,ue=Q;break}ue=ae}}}var he=a.alternate;if(he!==null){var me=he.child;if(me!==null){he.child=null;do{var tr=me.sibling;me.sibling=null,me=tr}while(me!==null)}}ue=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,ue=c;else e:for(;ue!==null;){if(a=ue,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:en(9,a,a.return)}var T=a.sibling;if(T!==null){T.return=a.return,ue=T;break e}ue=a.return}}var y=e.current;for(ue=y;ue!==null;){c=ue;var z=c.child;if((c.subtreeFlags&2064)!==0&&z!==null)z.return=c,ue=z;else e:for(c=y;ue!==null;){if(m=ue,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:ol(9,m)}}catch(ge){er(m,m.return,ge)}if(m===c){ue=null;break e}var te=m.sibling;if(te!==null){te.return=m.return,ue=te;break e}ue=m.return}}if(Ie=l,Et(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(gn,e)}catch{}n=!0}return n}finally{He=o,$r.transition=r}}return!1}function Yc(e,r,o){r=xo(o,r),r=dc(e,r,1),e=zt(e,r,1),r=Nr(),e!==null&&(Po(e,1,r),zr(e,r))}function er(e,r,o){if(e.tag===3)Yc(e,e,o);else for(;r!==null;){if(r.tag===3){Yc(r,e,o);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ot===null||!Ot.has(n))){e=xo(o,e),e=uc(r,e,1),r=zt(r,e,1),e=Nr(),r!==null&&(Po(r,1,e),zr(r,e));break}}r=r.return}}function mp(e,r,o){var n=e.pingCache;n!==null&&n.delete(r),r=Nr(),e.pingedLanes|=e.suspendedLanes&o,ur===e&&(fr&o)===o&&(sr===4||sr===3&&(fr&130023424)===fr&&500>rr()-Qa?Xt(e,0):Va|=o),zr(e,r)}function Vc(e,r){r===0&&((e.mode&1)===0?r=1:(r=vn,vn<<=1,(vn&130023424)===0&&(vn=4194304)));var o=Nr();e=mt(e,r),e!==null&&(Po(e,r,o),zr(e,o))}function fp(e){var r=e.memoizedState,o=0;r!==null&&(o=r.retryLane),Vc(e,o)}function gp(e,r){var o=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(o=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(i(314))}n!==null&&n.delete(r),Vc(e,o)}var Qc;Qc=function(e,r,o){if(e!==null)if(e.memoizedProps!==r.pendingProps||Sr.current)Er=!0;else{if((e.lanes&o)===0&&(r.flags&128)===0)return Er=!1,op(e,r,o);Er=(e.flags&131072)!==0}else Er=!1,Xe&&(r.flags&1048576)!==0&&Pi(r,Hn,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;rl(e,r),e=r.pendingProps;var l=io(r,gr.current);fo(r,o),l=Ca(null,r,n,e,l,o);var a=Sa();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Pr(n)?(a=!0,In(r)):a=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,va(r),l.updater=Zn,r.stateNode=l,l._reactInternals=r,Oa(r,n,e,o),r=Aa(null,r,n,!0,a,o)):(r.tag=0,Xe&&a&&ia(r),kr(null,r,l,o),r=r.child),r;case 16:n=r.elementType;e:{switch(rl(e,r),e=r.pendingProps,l=n._init,n=l(n._payload),r.type=n,l=r.tag=vp(n),e=Gr(n,e),l){case 0:r=_a(null,r,n,e,o);break e;case 1:r=bc(null,r,n,e,o);break e;case 11:r=fc(null,r,n,e,o);break e;case 14:r=gc(null,r,n,Gr(n.type,e),o);break e}throw Error(i(306,n,""))}return r;case 0:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),_a(e,r,n,l,o);case 1:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),bc(e,r,n,l,o);case 3:e:{if(kc(r),e===null)throw Error(i(387));n=r.pendingProps,a=r.memoizedState,l=a.element,Ai(e,r),Yn(r,n,null,o);var c=r.memoizedState;if(n=c.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){l=xo(Error(i(423)),r),r=Nc(e,r,n,o,l);break e}else if(n!==l){l=xo(Error(i(424)),r),r=Nc(e,r,n,o,l);break e}else for(_r=Ct(r.stateNode.containerInfo.firstChild),Rr=r,Xe=!0,Kr=null,o=Ri(r,null,n,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(po(),n===l){r=gt(e,r,o);break e}kr(e,r,n,o)}r=r.child}return r;case 5:return Li(r),e===null&&ua(r),n=r.type,l=r.pendingProps,a=e!==null?e.memoizedProps:null,c=l.children,ta(n,l)?c=null:a!==null&&ta(n,a)&&(r.flags|=32),yc(e,r),kr(e,r,c,o),r.child;case 6:return e===null&&ua(r),null;case 13:return wc(e,r,o);case 4:return ya(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=ho(r,null,n,o):kr(e,r,n,o),r.child;case 11:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),fc(e,r,n,l,o);case 7:return kr(e,r,r.pendingProps,o),r.child;case 8:return kr(e,r,r.pendingProps.children,o),r.child;case 12:return kr(e,r,r.pendingProps.children,o),r.child;case 10:e:{if(n=r.type._context,l=r.pendingProps,a=r.memoizedProps,c=l.value,$e(Wn,n._currentValue),n._currentValue=c,a!==null)if(Xr(a.value,c)){if(a.children===l.children&&!Sr.current){r=gt(e,r,o);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var m=a.dependencies;if(m!==null){c=a.child;for(var v=m.firstContext;v!==null;){if(v.context===n){if(a.tag===1){v=ft(-1,o&-o),v.tag=2;var D=a.updateQueue;if(D!==null){D=D.shared;var K=D.pending;K===null?v.next=v:(v.next=K.next,K.next=v),D.pending=v}}a.lanes|=o,v=a.alternate,v!==null&&(v.lanes|=o),ga(a.return,o,r),m.lanes|=o;break}v=v.next}}else if(a.tag===10)c=a.type===r.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(i(341));c.lanes|=o,m=c.alternate,m!==null&&(m.lanes|=o),ga(c,o,r),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===r){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}kr(e,r,l.children,o),r=r.child}return r;case 9:return l=r.type,n=r.pendingProps.children,fo(r,o),l=Br(l),n=n(l),r.flags|=1,kr(e,r,n,o),r.child;case 14:return n=r.type,l=Gr(n,r.pendingProps),l=Gr(n.type,l),gc(e,r,n,l,o);case 15:return xc(e,r,r.type,r.pendingProps,o);case 17:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),rl(e,r),r.tag=1,Pr(n)?(e=!0,In(r)):e=!1,fo(r,o),ic(r,n,l),Oa(r,n,l,o),Aa(null,r,n,!0,e,o);case 19:return Cc(e,r,o);case 22:return vc(e,r,o)}throw Error(i(156,r.tag))};function Xc(e,r){return Es(e,r)}function xp(e,r,o,n){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qr(e,r,o,n){return new xp(e,r,o,n)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vp(e){if(typeof e=="function")return ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ie)return 11;if(e===Ce)return 14}return 2}function At(e,r){var o=e.alternate;return o===null?(o=qr(e.tag,r,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=r,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,r=e.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function pl(e,r,o,n,l,a){var c=2;if(n=e,typeof e=="function")ts(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case E:return Gt(o.children,l,a,r);case G:c=8,l|=8;break;case Y:return e=qr(12,o,r,l|2),e.elementType=Y,e.lanes=a,e;case q:return e=qr(13,o,r,l),e.elementType=q,e.lanes=a,e;case ce:return e=qr(19,o,r,l),e.elementType=ce,e.lanes=a,e;case Te:return hl(o,l,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:c=10;break e;case oe:c=9;break e;case ie:c=11;break e;case Ce:c=14;break e;case Ee:c=16,n=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return r=qr(c,o,r,l),r.elementType=e,r.type=n,r.lanes=a,r}function Gt(e,r,o,n){return e=qr(7,e,n,r),e.lanes=o,e}function hl(e,r,o,n){return e=qr(22,e,n,r),e.elementType=Te,e.lanes=o,e.stateNode={isHidden:!1},e}function os(e,r,o){return e=qr(6,e,null,r),e.lanes=o,e}function ns(e,r,o){return r=qr(4,e.children!==null?e.children:[],e.key,r),r.lanes=o,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function yp(e,r,o,n,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ls(e,r,o,n,l,a,c,m,v){return e=new yp(e,r,o,m,v),r===1?(r=1,a===!0&&(r|=8)):r=0,a=qr(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(a),e}function bp(e,r,o){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:n==null?null:""+n,children:e,containerInfo:r,implementation:o}}function Kc(e){if(!e)return Pt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(i(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Pr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Pr(o))return ji(e,o,r)}return r}function Gc(e,r,o,n,l,a,c,m,v){return e=ls(o,n,!0,e,l,a,c,m,v),e.context=Kc(null),o=e.current,n=Nr(),l=Rt(o),a=ft(n,l),a.callback=r??null,zt(o,a,l),e.current.lanes=l,Po(e,l,n),zr(e,n),e}function ml(e,r,o,n){var l=r.current,a=Nr(),c=Rt(l);return o=Kc(o),r.context===null?r.context=o:r.pendingContext=o,r=ft(a,c),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=zt(l,r,c),e!==null&&(et(e,l,c,a),qn(e,l,c)),c}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jc(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<r?o:r}}function as(e,r){Jc(e,r),(e=e.alternate)&&Jc(e,r)}function kp(){return null}var Zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ss(e){this._internalRoot=e}gl.prototype.render=ss.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(i(409));ml(e,r,null,null)},gl.prototype.unmount=ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Qt(function(){ml(null,e,null,null)}),r[dt]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var r=As();e={blockedOn:null,target:e,priority:r};for(var o=0;o<Nt.length&&r!==0&&r<Nt[o].priority;o++);Nt.splice(o,0,e),o===0&&Ls(e)}};function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ed(){}function Np(e,r,o,n,l){if(l){if(typeof n=="function"){var a=n;n=function(){var D=fl(c);a.call(D)}}var c=Gc(r,n,e,0,null,!1,!1,"",ed);return e._reactRootContainer=c,e[dt]=c.current,Uo(e.nodeType===8?e.parentNode:e),Qt(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var m=n;n=function(){var D=fl(v);m.call(D)}}var v=ls(e,0,!1,null,null,!1,!1,"",ed);return e._reactRootContainer=v,e[dt]=v.current,Uo(e.nodeType===8?e.parentNode:e),Qt(function(){ml(r,v,o,n)}),v}function vl(e,r,o,n,l){var a=o._reactRootContainer;if(a){var c=a;if(typeof l=="function"){var m=l;l=function(){var v=fl(c);m.call(v)}}ml(r,c,e,l)}else c=Np(o,r,e,l,n);return fl(c)}Rs=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var o=So(r.pendingLanes);o!==0&&(Ol(r,o|1),zr(r,rr()),(Ie&6)===0&&(bo=rr()+500,Et()))}break;case 13:Qt(function(){var n=mt(e,1);if(n!==null){var l=Nr();et(n,e,1,l)}}),as(e,1)}},Dl=function(e){if(e.tag===13){var r=mt(e,134217728);if(r!==null){var o=Nr();et(r,e,134217728,o)}as(e,134217728)}},_s=function(e){if(e.tag===13){var r=Rt(e),o=mt(e,r);if(o!==null){var n=Nr();et(o,e,r,n)}as(e,r)}},As=function(){return He},Is=function(e,r){var o=He;try{return He=e,r()}finally{He=o}},Or=function(e,r,o){switch(r){case"input":if(Lr(e,o),r=o.name,o.type==="radio"&&r!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var n=o[r];if(n!==e&&n.form===e.form){var l=_n(n);if(!l)throw Error(i(90));Fr(n),Lr(n,l)}}}break;case"textarea":Ne(e,o);break;case"select":r=o.value,r!=null&&ee(e,!!o.multiple,r,!1)}},ks=Za,Ns=Qt;var wp={usingClientEntryPoint:!1,Events:[$o,ao,_n,Le,bs,Za]},nn={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jp={bundleType:nn.bundleType,version:nn.version,rendererPackageName:nn.rendererPackageName,rendererConfig:nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ss(e),e===null?null:e.stateNode},findFiberByHostInstance:nn.findFiberByHostInstance||kp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{gn=yl.inject(jp),ot=yl}catch{}}return Mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wp,Mr.createPortal=function(e,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!is(r))throw Error(i(200));return bp(e,r,null,o)},Mr.createRoot=function(e,r){if(!is(e))throw Error(i(299));var o=!1,n="",l=Zc;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=ls(e,1,!1,null,null,o,!1,n,l),e[dt]=r.current,Uo(e.nodeType===8?e.parentNode:e),new ss(r)},Mr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Ss(r),e=e===null?null:e.stateNode,e},Mr.flushSync=function(e){return Qt(e)},Mr.hydrate=function(e,r,o){if(!xl(r))throw Error(i(200));return vl(null,e,r,!0,o)},Mr.hydrateRoot=function(e,r,o){if(!is(e))throw Error(i(405));var n=o!=null&&o.hydratedSources||null,l=!1,a="",c=Zc;if(o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(a=o.identifierPrefix),o.onRecoverableError!==void 0&&(c=o.onRecoverableError)),r=Gc(r,null,e,1,o??null,l,!1,a,c),e[dt]=r.current,Uo(e),n)for(e=0;e<n.length;e++)o=n[e],l=o._getVersion,l=l(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,l]:r.mutableSourceEagerHydrationData.push(o,l);return new gl(r)},Mr.render=function(e,r,o){if(!xl(r))throw Error(i(200));return vl(null,e,r,!1,o)},Mr.unmountComponentAtNode=function(e){if(!xl(e))throw Error(i(40));return e._reactRootContainer?(Qt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1},Mr.unstable_batchedUpdates=Za,Mr.unstable_renderSubtreeIntoContainer=function(e,r,o,n){if(!xl(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return vl(e,r,o,!1,n)},Mr.version="18.3.1-next-f1338f8080-20240426",Mr}var id;function Dp(){if(id)return us.exports;id=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),us.exports=Op(),us.exports}var cd;function Rp(){if(cd)return bl;cd=1;var s=Dp();return bl.createRoot=s.createRoot,bl.hydrateRoot=s.hydrateRoot,bl}var _p=Rp(),f=gs();const Yr=Sp(f),Jt="/assets/5ebff9a217654d307f5ff0e6abe952a2f7edba47-C_j6zY7W.png",Ap="/assets/f72178f30a0dde70a8d75f3484b9afe145cb6b4a-CDyQn-v-.png",Ip="/assets/ce4e08efbf373b6ac47b975a612b62ba9dbdfad0-E6WWYkN1.png";function Fp({onCustomerCheckIn:s,onStaffLogin:d,onRevisit:i}){return t.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[t.jsx("div",{className:"hidden lg:flex absolute",style:{right:"0",top:"50%",transform:"translateY(-50%)",width:"45%",height:"85%",zIndex:5,alignItems:"center",justifyContent:"center"},children:t.jsx("img",{src:Ap,alt:"Eagle",className:"eagle-wings",style:{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",opacity:.35}})}),t.jsxs("nav",{className:"relative z-10 flex items-center justify-between px-6 sm:px-8 lg:px-12 py-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsx("span",{className:"text-lg sm:text-xl font-medium text-white",children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-6 sm:gap-8",children:[t.jsx("a",{href:"https://reliancesurfaces.com/shop/",target:"_blank",rel:"noopener noreferrer",className:"text-sm sm:text-base text-gray-400 transition-all duration-200 nav-link",children:"Slabs"}),t.jsx("button",{onClick:d,className:"text-sm sm:text-base text-gray-400 transition-all duration-200 nav-link",children:"Login"})]})]}),t.jsx("div",{className:"hidden sm:flex relative z-10 flex-col items-start justify-center px-8 lg:px-16 xl:px-24",style:{height:"calc(100vh - 100px)"},children:t.jsxs("div",{className:"max-w-2xl lg:max-w-3xl",children:[t.jsxs("h1",{className:"mb-6 text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-light",style:{color:"#FFFFFF",fontWeight:"300",lineHeight:"1.1"},children:["Welcome to"," ",t.jsx("span",{style:{color:"#D4A736"},children:"Reliance Surfaces"})]}),t.jsx("p",{className:"mb-12 text-lg md:text-xl lg:text-2xl italic",style:{color:"rgba(156, 163, 175, 0.9)",fontWeight:"300"},children:"Surfaces that tell a story"}),t.jsxs("div",{className:"flex flex-col sm:flex-row items-start gap-4 max-w-md",children:[t.jsx("button",{onClick:s,className:"w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"#D4A736",color:"#000000",border:"none",cursor:"pointer"},onMouseEnter:u=>{u.currentTarget.style.backgroundColor="#E5B946",u.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:u=>{u.currentTarget.style.backgroundColor="#D4A736",u.currentTarget.style.transform="translateY(0)"},children:"Check-In"}),t.jsx("button",{onClick:i,className:"w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"transparent",border:"1px solid #D4A736",color:"#D4A736",cursor:"pointer"},onMouseEnter:u=>{u.currentTarget.style.backgroundColor="rgba(212, 167, 54, 0.1)",u.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:u=>{u.currentTarget.style.backgroundColor="transparent",u.currentTarget.style.transform="translateY(0)"},children:"Revisiting"})]})]})}),t.jsxs("div",{className:"sm:hidden relative z-10 flex flex-col justify-between px-6",style:{height:"calc(100vh - 88px)"},children:[t.jsxs("div",{className:"flex flex-col pt-8 text-center",children:[t.jsx("h1",{className:"mb-2 text-5xl leading-tight font-light",style:{color:"#FFFFFF",fontWeight:"200",lineHeight:"1.1"},children:"Welcome"}),t.jsx("p",{className:"mb-6 text-2xl italic",style:{color:"rgba(156, 163, 175, 0.8)",fontWeight:"300",fontStyle:"italic"},children:"to"}),t.jsx("h2",{className:"mb-6 text-4xl leading-tight font-light",style:{color:"#D4A736",fontWeight:"300",lineHeight:"1.1"},children:"Reliance Surfaces"}),t.jsx("p",{className:"mb-8 text-base italic px-4",style:{color:"rgba(156, 163, 175, 0.9)",fontWeight:"300"},children:"Surfaces that tell a story"}),t.jsxs("div",{className:"flex flex-col gap-3 max-w-xs mx-auto w-full",children:[t.jsx("button",{onClick:s,className:"w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"#D4A736",color:"#000000",border:"none",cursor:"pointer"},children:"Check-In"}),t.jsx("button",{onClick:i,className:"w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"transparent",border:"1px solid #D4A736",color:"#D4A736",cursor:"pointer"},children:"Revisiting"})]})]}),t.jsx("div",{className:"flex justify-center items-center pb-16 pt-4",children:t.jsx("img",{src:Ip,alt:"Eagle",className:"eagle-wings-mobile",style:{width:"85%",maxWidth:"360px",height:"auto",opacity:.4,filter:"brightness(0) saturate(100%) invert(63%) sepia(44%) saturate(443%) hue-rotate(1deg) brightness(93%) contrast(87%)"}})})]}),t.jsx("style",{children:`
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
 */const Lp=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hp=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,i,u)=>u?u.toUpperCase():i.toLowerCase()),dd=s=>{const d=Hp(s);return d.charAt(0).toUpperCase()+d.slice(1)},vd=(...s)=>s.filter((d,i,u)=>!!d&&d.trim()!==""&&u.indexOf(d)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Up={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=f.forwardRef(({color:s="currentColor",size:d=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:g="",children:p,iconNode:x,...N},b)=>f.createElement("svg",{ref:b,...Up,width:d,height:d,stroke:s,strokeWidth:u?Number(i)*24/Number(d):i,className:vd("lucide",g),...N},[...x.map(([A,I])=>f.createElement(A,I)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(s,d)=>{const i=f.forwardRef(({className:u,...g},p)=>f.createElement(Bp,{ref:p,iconNode:d,className:vd(`lucide-${Lp(dd(s))}`,`lucide-${s}`,u),...g}));return i.displayName=dd(s),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],$p=Ge("bell",Wp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],yd=Ge("check",qp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],bd=Ge("chevron-down",Yp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Qp=Ge("chevron-left",Vp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Kp=Ge("chevron-right",Xp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],kd=Ge("chevron-up",Gp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],xs=Ge("circle-check-big",Jp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],eh=Ge("eye-off",Zp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vs=Ge("eye",rh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Nd=Ge("funnel",th);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ys=Ge("image",oh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],un=Ge("log-out",nh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],ah=Ge("mail",lh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M5 12h14",key:"1ays0h"}]],wd=Ge("minus",sh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],dn=Ge("plus",ih);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],jd=Ge("rotate-ccw",ch);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Cd=Ge("search",dh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],wl=Ge("star",uh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],hh=Ge("triangle-alert",ph);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],fh=Ge("upload",mh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],xh=Ge("user-plus",gh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],yh=Ge("user",vh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Sd=Ge("users",bh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ct=Ge("x",kh);function Nh({onNext:s,initialData:d}){const i=d?.firstName?[d.firstName,d.lastName].filter(Boolean).join(" "):"",[u,g]=f.useState(i),[p,x]=f.useState({street:d?.street||"",suiteUnit:d?.suiteUnit||"",city:d?.city||"",state:d?.state||"NJ",zip:d?.zip||"",country:d?.country||"USA",phones:d?.phones||[""],emails:d?.emails||[""]}),[N,b]=f.useState({}),A=f.useRef(null),I=f.useRef([]),C=f.useRef([]),_=[{code:"AL",name:"Alabama"},{code:"AK",name:"Alaska"},{code:"AZ",name:"Arizona"},{code:"AR",name:"Arkansas"},{code:"CA",name:"California"},{code:"CO",name:"Colorado"},{code:"CT",name:"Connecticut"},{code:"DE",name:"Delaware"},{code:"FL",name:"Florida"},{code:"GA",name:"Georgia"},{code:"HI",name:"Hawaii"},{code:"ID",name:"Idaho"},{code:"IL",name:"Illinois"},{code:"IN",name:"Indiana"},{code:"IA",name:"Iowa"},{code:"KS",name:"Kansas"},{code:"KY",name:"Kentucky"},{code:"LA",name:"Louisiana"},{code:"ME",name:"Maine"},{code:"MD",name:"Maryland"},{code:"MA",name:"Massachusetts"},{code:"MI",name:"Michigan"},{code:"MN",name:"Minnesota"},{code:"MS",name:"Mississippi"},{code:"MO",name:"Missouri"},{code:"MT",name:"Montana"},{code:"NE",name:"Nebraska"},{code:"NV",name:"Nevada"},{code:"NH",name:"New Hampshire"},{code:"NJ",name:"New Jersey"},{code:"NM",name:"New Mexico"},{code:"NY",name:"New York"},{code:"NC",name:"North Carolina"},{code:"ND",name:"North Dakota"},{code:"OH",name:"Ohio"},{code:"OK",name:"Oklahoma"},{code:"OR",name:"Oregon"},{code:"PA",name:"Pennsylvania"},{code:"RI",name:"Rhode Island"},{code:"SC",name:"South Carolina"},{code:"SD",name:"South Dakota"},{code:"TN",name:"Tennessee"},{code:"TX",name:"Texas"},{code:"UT",name:"Utah"},{code:"VT",name:"Vermont"},{code:"VA",name:"Virginia"},{code:"WA",name:"Washington"},{code:"WV",name:"West Virginia"},{code:"WI",name:"Wisconsin"},{code:"WY",name:"Wyoming"}],W=U=>{x(oe=>({...oe,state:U}))},$=U=>U.split(" ").map(oe=>oe.charAt(0).toUpperCase()+oe.slice(1).toLowerCase()).join(" "),k=U=>{setTimeout(()=>{U.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},300)},S=U=>U.replace(/\D/g,"").length===10,P=U=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(U),O=()=>{const U={};u.trim()||(U.fullName="Full name is required"),p.street.trim()||(U.street="Street address is required"),p.city.trim()||(U.city="City is required"),p.state.trim()||(U.state="State is required"),p.zip.trim()||(U.zip="ZIP code is required");const oe=p.phones.filter(q=>q.trim());oe.length===0?U.phone="At least one phone number is required":oe.every(S)||(U.phone="Phone numbers must be 10 digits");const ie=p.emails.filter(q=>q.trim());return ie.length===0?U.email="At least one email is required":ie.every(P)||(U.email="Email addresses must be valid"),b(U),Object.keys(U).length===0},F=U=>{if(U.preventDefault(),O()){const oe=u.trim().split(/\s+/),ie=oe[0]||"",q=oe.slice(1).join(" ");s({firstName:ie,lastName:q,...p,phones:p.phones.filter(ce=>ce.trim()).map(ce=>ce.replace(/\D/g,"")),emails:p.emails.filter(ce=>ce.trim())})}},X=()=>x(U=>({...U,phones:[...U.phones,""]})),B=U=>x(oe=>({...oe,phones:oe.phones.filter((ie,q)=>q!==U)})),R=(U,oe)=>x(ie=>{const q=[...ie.phones];return q[U]=oe,{...ie,phones:q}}),E=()=>x(U=>({...U,emails:[...U.emails,""]})),G=U=>x(oe=>({...oe,emails:oe.emails.filter((ie,q)=>q!==U)})),Y=(U,oe)=>x(ie=>{const q=[...ie.emails];return q[U]=oe,{...ie,emails:q}});return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px 20px"},children:[t.jsx("h1",{className:"text-center mb-1 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 1: Your Details"}),t.jsx("p",{className:"text-center mb-6 text-sm",style:{color:"var(--color-text-gray)"},children:"Please provide your contact information"}),t.jsxs("form",{onSubmit:F,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Full Name *"}),t.jsx("input",{type:"text",value:u,onChange:U=>g(U.target.value),onBlur:U=>g($(U.target.value)),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.fullName?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"First and last name"}),N.fullName&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:N.fullName})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Street Address *"}),t.jsx("input",{type:"text",value:p.street,onChange:U=>x(oe=>({...oe,street:U.target.value})),onBlur:U=>x(oe=>({...oe,street:$(U.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.street?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"e.g. 123 Main St",ref:A}),N.street&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:N.street})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"City *"}),t.jsx("input",{type:"text",value:p.city,onChange:U=>x(oe=>({...oe,city:U.target.value})),onBlur:U=>x(oe=>({...oe,city:$(U.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.city?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"City"}),N.city&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:N.city})]}),t.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"State *"}),t.jsxs("select",{value:p.state,onChange:U=>W(U.target.value),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.state?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"Select"}),_.map(U=>t.jsx("option",{value:U.code,children:U.code},U.code))]}),N.state&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:N.state})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"ZIP *"}),t.jsx("input",{type:"text",value:p.zip,onChange:U=>x(oe=>({...oe,zip:U.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.zip?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"ZIP"}),N.zip&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:N.zip})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Country"}),t.jsxs("select",{value:p.country,onChange:U=>x(oe=>({...oe,country:U.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Phone Number(s) *"}),p.phones.map((U,oe)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{ref:ie=>I.current[oe]=ie,type:"tel",value:U,onChange:ie=>R(oe,ie.target.value),onFocus:ie=>k(ie.target),className:"flex-1 px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.phone&&oe===0?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Phone number"}),p.phones.length>1&&t.jsx("button",{type:"button",onClick:()=>B(oe),className:"px-3 py-2.5 rounded-lg flex-shrink-0",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:18})})]},oe)),N.phone&&t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-error)"},children:N.phone}),t.jsxs("button",{type:"button",onClick:X,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-gold)"},children:[t.jsx(dn,{size:18}),"Add Another Phone"]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Email Address(es) *"}),p.emails.map((U,oe)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{ref:ie=>C.current[oe]=ie,type:"email",value:U,onChange:ie=>Y(oe,ie.target.value),onFocus:ie=>k(ie.target),className:"flex-1 px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N.email&&oe===0?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Email address"}),p.emails.length>1&&t.jsx("button",{type:"button",onClick:()=>G(oe),className:"px-3 py-2.5 rounded-lg flex-shrink-0",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:18})})]},oe)),N.email&&t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-error)"},children:N.email}),t.jsxs("button",{type:"button",onClick:E,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-gold)"},children:[t.jsx(dn,{size:18}),"Add Another Email"]})]}),t.jsx("button",{type:"submit",className:"w-full py-3.5 rounded-lg text-sm font-medium mt-6",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})})}const wh=["Fabricator","Contractor","Kitchen & Bath","Architect","Builder","Friends/Family","Other"];function jh({onNext:s,onBack:d,initialData:i}){const[u,g]=f.useState(i?.referralSources?.map(P=>P.type)||[]),[p,x]=f.useState(i?.referralSources?.reduce((P,O)=>(P[O.type]={name:O.name||"",phone:O.phone||"",location:O.location||""},P),{})||{}),[N,b]=f.useState({}),[A,I]=f.useState(!1),C=P=>P.split(" ").map(O=>O.charAt(0).toUpperCase()+O.slice(1).toLowerCase()).join(" "),_=P=>{if(u.includes(P)){g(u.filter(X=>X!==P));const O={...p};delete O[P],x(O);const F={...N};delete F[P],b(F)}else g([...u,P]),I(!1)},W=(P,O,F)=>{if(x({...p,[P]:{...p[P],name:O==="name"?F:p[P]?.name||"",phone:O==="phone"?F:p[P]?.phone||"",location:O==="location"?F:p[P]?.location||""}}),N[P]){const X={...N};O==="name"&&delete X[P].name,O==="phone"&&(delete X[P].phone,delete X[P].phoneOrLocation),O==="location"&&delete X[P].phoneOrLocation,b(X)}},$=P=>{if(P.preventDefault(),u.length===0){I(!0);return}const O={};let F=!1;for(const B of u)if(O[B]={},p[B]?.name?.trim()||(O[B].name="Name is required",F=!0),B==="Fabricator"){const R=p[B]?.phone?.trim()||"",E=p[B]?.location?.trim();!R&&!E?(O[B].phoneOrLocation="Enter a phone number or location",F=!0):R&&!/^\d{10}$/.test(R)&&(O[B].phone="Phone number must be 10 digits",F=!0)}else{const R=p[B]?.phone?.trim()||"";R?/^\d{10}$/.test(R)||(O[B].phone="Phone number must be 10 digits",F=!0):(O[B].phone="Phone number is required",F=!0)}if(F){b(O);return}const X={referralSources:u.map(B=>({type:B,name:p[B]?.name,phone:p[B]?.phone,...B==="Fabricator"&&p[B]?.location?{location:p[B].location}:{}}))};s(X)},k={color:"#f87171",fontSize:"0.75rem",marginTop:"4px"},S="1px solid #f87171";return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 2: How Did You Hear About Us?"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg font-medium",style:{color:"var(--color-text-gray)"},children:"Select all that applies"}),t.jsxs("form",{onSubmit:$,className:"space-y-4 sm:space-y-6",children:[t.jsxs("div",{className:"space-y-4",children:[A&&t.jsx("p",{style:{...k,fontSize:"0.875rem"},children:"Please select at least one option"}),wh.map(P=>t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-opacity-50 transition-colors",style:{backgroundColor:u.includes(P)?"var(--color-background)":"transparent",border:`1px solid ${u.includes(P)?"var(--color-gold)":"var(--color-border)"}`},children:[t.jsx("input",{type:"checkbox",checked:u.includes(P),onChange:()=>_(P),className:"w-5 h-5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:P})]}),u.includes(P)&&t.jsxs("div",{className:"ml-6 sm:ml-8 mt-3 space-y-3",children:[t.jsxs("div",{children:[t.jsx("input",{type:"text",value:p[P]?.name||"",onChange:O=>W(P,"name",C(O.target.value)),placeholder:P==="Fabricator"?"Fabricator's Shop Name (required)":"Name (required)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:N[P]?.name?S:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),N[P]?.name&&t.jsx("p",{style:k,children:N[P].name})]}),t.jsxs("div",{children:[t.jsx("input",{type:"tel",value:p[P]?.phone||"",onChange:O=>W(P,"phone",O.target.value),placeholder:P==="Fabricator"?"Phone (required if no location)":"Phone (required)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:N[P]?.phone||N[P]?.phoneOrLocation?S:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),N[P]?.phone&&t.jsx("p",{style:k,children:N[P].phone})]}),P==="Fabricator"&&t.jsxs("div",{children:[t.jsx("input",{type:"text",value:p[P]?.location||"",onChange:O=>W(P,"location",C(O.target.value)),placeholder:"Location (required if no phone)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:N[P]?.phoneOrLocation?S:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),N[P]?.phoneOrLocation&&t.jsx("p",{style:k,children:N[P].phoneOrLocation})]})]})]},P))]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue to Step 3"})]})]})]})})}function Ch({onNext:s,onBack:d,initialData:i}){const[u,g]=f.useState(i?.adults||1),[p,x]=f.useState(i?.minors||0),N=b=>{b.preventDefault(),s({adults:u,minors:p})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-3 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Party Size"}),t.jsx("p",{className:"text-center mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please let us know who's visiting today"}),t.jsxs("form",{onSubmit:N,className:"space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx(Sd,{size:28,style:{color:"var(--color-gold)"}}),t.jsx("h2",{className:"text-xl sm:text-2xl",style:{color:"var(--color-text-white)"},children:"How many adults are visiting?"})]}),t.jsxs("div",{className:"flex items-center justify-center gap-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("button",{type:"button",onClick:()=>g(Math.max(1,u-1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:u<=1?"var(--color-card)":"var(--color-gold)",color:u<=1?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:u<=1?"not-allowed":"pointer"},disabled:u<=1,children:"−"}),t.jsxs("div",{className:"text-center min-w-[120px]",children:[t.jsx("div",{className:"text-5xl font-light mb-2",style:{color:"var(--color-gold)"},children:u}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:u===1?"Adult":"Adults"})]}),t.jsx("button",{type:"button",onClick:()=>g(Math.min(10,u+1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:u>=10?"var(--color-card)":"var(--color-gold)",color:u>=10?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:u>=10?"not-allowed":"pointer"},disabled:u>=10,children:"+"})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx(yh,{size:24,style:{color:"var(--color-gold)"}}),t.jsx("h2",{className:"text-xl sm:text-2xl",style:{color:"var(--color-text-white)"},children:"Number of minors"})]}),t.jsxs("div",{className:"flex items-center justify-center gap-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("button",{type:"button",onClick:()=>x(Math.max(0,p-1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:p<=0?"var(--color-card)":"var(--color-gold)",color:p<=0?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:p<=0?"not-allowed":"pointer"},disabled:p<=0,children:"−"}),t.jsxs("div",{className:"text-center min-w-[120px]",children:[t.jsx("div",{className:"text-5xl font-light mb-2",style:{color:"var(--color-gold)"},children:p}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:p===1?"Minor":"Minors"})]}),t.jsx("button",{type:"button",onClick:()=>x(Math.min(10,p+1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:p>=10?"var(--color-card)":"var(--color-gold)",color:p>=10?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:p>=10?"not-allowed":"pointer"},disabled:p>=10,children:"+"})]})]}),t.jsx("div",{className:"text-center p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)"},children:t.jsxs("p",{className:"text-base sm:text-lg",style:{color:"var(--color-text-white)"},children:["Total visitors: ",t.jsx("span",{style:{color:"var(--color-gold)",fontWeight:"600"},children:u+p})]})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function Sh({isOpen:s,onConsent:d}){return s?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.75)",backdropFilter:"blur(4px)"},children:t.jsxs("div",{className:"w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)",padding:"32px"},children:[t.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-center mb-6",style:{color:"var(--color-gold)"},children:"Electronic Signature Consent"}),t.jsxs("div",{className:"space-y-5 mb-8",style:{color:"var(--color-text-white)",fontSize:"15px",lineHeight:"1.7"},children:[t.jsx("p",{children:"Before proceeding with the electronic waiver, please read and understand the following:"}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:'By clicking "I Consent" below, you agree to:'}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Sign this waiver electronically using your mouse, touchscreen, or trackpad"}),t.jsxs("li",{className:"pl-3",children:["Your electronic signature having the ",t.jsx("strong",{children:"same legal validity as a handwritten signature"})]}),t.jsx("li",{className:"pl-3",children:"This agreement being governed by New Jersey law and the federal Electronic Signatures in Global and National Commerce Act (ESIGN Act)"})]})]}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:"You have the right to:"}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Print or save this document for your records after signing"}),t.jsxs("li",{className:"pl-3",children:["Contact our office at ",t.jsx("strong",{children:"(908) 245-0888"})," or ",t.jsx("strong",{children:"info@reliancesurfaces.com"})," for assistance"]})]})]}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:"Technical Requirements:"}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Modern web browser (Chrome, Firefox, Safari, Edge, or similar)"}),t.jsx("li",{className:"pl-3",children:"Ability to view and save PDF documents"}),t.jsxs("li",{className:"pl-3",children:["For technical assistance, contact us at ",t.jsx("strong",{children:"(908) 245-0888"})]})]})]}),t.jsx("div",{className:"p-4 rounded-lg text-center font-medium",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)"},children:'By clicking "I Consent," you acknowledge that you have read and understand this disclosure, and you agree to conduct this transaction electronically.'})]}),t.jsx("div",{className:"flex justify-center mt-6",children:t.jsx("button",{onClick:d,className:"w-full sm:w-auto px-20 py-4 rounded-lg text-base font-medium transition-colors hover:opacity-90",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"I Consent to Electronic Signature"})}),t.jsx("p",{className:"mt-4 text-center text-xs",style:{color:"var(--color-text-gray)"},children:"This consent is required by federal ESIGN Act and New Jersey UETA to ensure you understand the legal implications of signing electronically."})]})}):null}const Ph=`WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT

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

I HAVE READ THIS COVENANT NOT TO SUE, WAIVER, RELEASE, INFORMED CONSENT, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND HAVE SIGNED IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT, ASSURANCE OR GUARANTEE BEING MADE TO ME AND INTEND MY SIGNATURE TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF RELIANCE AND ALL PARTIES MENTIONED HEREIN TO THE GREATEST EXTENT ALLOWED BY LAW. THIS IS A RELEASE OF LIABILITY; DO NOT SIGN THIS DOCUMENT IF YOU DO NOT UNDERSTAND OR DO NOT AGREE WITH ITS TERMS.`;function Eh({onNext:s,onBack:d,isMainVisitor:i=!0,initialData:u}){const[g,p]=f.useState(!u?.esignConsentTimestamp),[x,N]=f.useState(u?.esignConsentTimestamp),[b]=f.useState(()=>{if(u?.sessionId)return u.sessionId;let q=sessionStorage.getItem("checkInSessionId");return q||(q=crypto.randomUUID(),sessionStorage.setItem("checkInSessionId",q)),q}),[A]=f.useState(()=>u?.deviceInfo?u.deviceInfo:{userAgent:navigator.userAgent,screenWidth:window.screen.width,screenHeight:window.screen.height,deviceType:/Mobile|Tablet/i.test(navigator.userAgent)?"mobile":"desktop",timestamp:new Date().toISOString()}),[I,C]=f.useState(u?.agreed||!1),[_,W]=f.useState(!!u),[$,k]=f.useState(u?.signature||""),[S,P]=f.useState(!1),[O,F]=f.useState(""),X=f.useRef(null),B=f.useRef(null);f.useEffect(()=>{const q=X.current;if(!q)return;const ce=q.getContext("2d");if(ce&&(q.width=q.offsetWidth*2,q.height=q.offsetHeight*2,ce.scale(2,2),ce.strokeStyle="#D4A736",ce.lineWidth=2,ce.lineCap="round",ce.lineJoin="round",u?.signature)){const Ce=new Image;Ce.onload=()=>{ce.drawImage(Ce,0,0,q.offsetWidth,q.offsetHeight)},Ce.src=u.signature}},[u]);const R=()=>{const q=B.current;if(!q)return;Math.abs(q.scrollHeight-q.scrollTop-q.clientHeight)<10&&W(!0)},E=q=>{P(!0);const ce=X.current;if(!ce)return;const Ce=ce.getContext("2d");if(!Ce)return;const Ee=ce.getBoundingClientRect(),Te=ce.width/Ee.width,Z=ce.height/Ee.height,se="touches"in q?q.touches[0].clientX:q.clientX,re="touches"in q?q.touches[0].clientY:q.clientY,h=(se-Ee.left)*Te/2,w=(re-Ee.top)*Z/2;Ce.beginPath(),Ce.moveTo(h,w)},G=q=>{if(!S)return;const ce=X.current;if(!ce)return;const Ce=ce.getContext("2d");if(!Ce)return;const Ee=ce.getBoundingClientRect(),Te=ce.width/Ee.width,Z=ce.height/Ee.height,se="touches"in q?q.touches[0].clientX:q.clientX,re="touches"in q?q.touches[0].clientY:q.clientY,h=(se-Ee.left)*Te/2,w=(re-Ee.top)*Z/2;Ce.lineTo(h,w),Ce.stroke()},Y=()=>{P(!1);const q=X.current;q&&k(q.toDataURL())},U=()=>{const q=X.current;if(!q)return;const ce=q.getContext("2d");ce&&(ce.clearRect(0,0,q.width,q.height),k(""))},oe=()=>{const q=new Date().toISOString();N(q),p(!1)},ie=q=>{if(q.preventDefault(),F(""),!x){F("Electronic signature consent is required"),p(!0);return}if(!_){F("Please scroll to the bottom of the waiver to continue");return}if(!I){F("You must agree to the waiver to continue");return}if(!$){F("Please provide your signature");return}s({agreed:I,signature:$,esignConsentTimestamp:x,sessionId:b,deviceInfo:A})};return t.jsxs(t.Fragment,{children:[t.jsx(Sh,{isOpen:g,onConsent:oe}),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-3xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Waiver Agreement"}),t.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:i?"Please read and sign the waiver":"Please review and provide your signature"}),t.jsxs("form",{onSubmit:ie,className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{ref:B,onScroll:R,className:"p-4 sm:p-6 rounded-lg overflow-y-auto",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",maxHeight:"300px",color:"var(--color-text-white)",lineHeight:"1.6",fontSize:"13px"},children:t.jsx("div",{style:{whiteSpace:"pre-wrap"},children:Ph})}),!_&&t.jsx("p",{className:"text-center text-sm",style:{color:"var(--color-gold)"},children:"⬇ Please scroll to the bottom to continue ⬇"}),t.jsxs("label",{className:"flex items-start gap-3 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:I,onChange:q=>C(q.target.checked),disabled:!_,className:"w-5 h-5 mt-0.5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:_?"var(--color-text-white)":"var(--color-text-gray)"},children:"I have read and agree to the terms of the waiver"})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex justify-between items-center mb-2",children:[t.jsx("label",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:"Signature *"}),t.jsx("button",{type:"button",onClick:U,className:"px-3 py-1 rounded text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),t.jsx("canvas",{ref:X,onMouseDown:E,onMouseMove:G,onMouseUp:Y,onMouseLeave:Y,onTouchStart:E,onTouchMove:G,onTouchEnd:Y,className:"w-full rounded-lg cursor-crosshair touch-none",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",height:"180px"}}),t.jsx("p",{className:"mt-2 text-xs sm:text-sm",style:{color:"var(--color-text-gray)"},children:"Sign above with your mouse or finger"})]}),O&&t.jsx("p",{className:"text-center text-sm",style:{color:"var(--color-error)"},children:O}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})]})}function Th({onNext:s,onBack:d,visitorNumber:i,totalAdults:u,initialData:g,primaryVisitorName:p,takenNames:x}){const[N,b]=f.useState(""),[A,I]=f.useState(""),[C,_]=f.useState(""),[W,$]=f.useState(!1),k=f.useRef(null);f.useEffect(()=>{const R=k.current;if(!R)return;const E=R.getContext("2d");if(E)if(R.width=R.offsetWidth*2,R.height=R.offsetHeight*2,E.scale(2,2),E.strokeStyle="#D4A736",E.lineWidth=2,E.lineCap="round",E.lineJoin="round",E.clearRect(0,0,R.width,R.height),g){if(b(g.name),_(g.signature),g.signature){const G=new Image;G.onload=()=>{E.drawImage(G,0,0,R.offsetWidth,R.offsetHeight)},G.src=g.signature}}else b(""),_("")},[i,g]);const S=R=>R.split(" ").map(E=>E.charAt(0).toUpperCase()+E.slice(1).toLowerCase()).join(" "),P=R=>{$(!0);const E=k.current;if(!E)return;const G=E.getContext("2d");if(!G)return;const Y=E.getBoundingClientRect(),U=E.width/Y.width,oe=E.height/Y.height,ie="touches"in R?R.touches[0].clientX:R.clientX,q="touches"in R?R.touches[0].clientY:R.clientY,ce=(ie-Y.left)*U/2,Ce=(q-Y.top)*oe/2;G.beginPath(),G.moveTo(ce,Ce)},O=R=>{if(!W)return;const E=k.current;if(!E)return;const G=E.getContext("2d");if(!G)return;const Y=E.getBoundingClientRect(),U=E.width/Y.width,oe=E.height/Y.height,ie="touches"in R?R.touches[0].clientX:R.clientX,q="touches"in R?R.touches[0].clientY:R.clientY,ce=(ie-Y.left)*U/2,Ce=(q-Y.top)*oe/2;G.lineTo(ce,Ce),G.stroke()},F=()=>{$(!1);const R=k.current;R&&_(R.toDataURL())},X=()=>{const R=k.current;if(!R)return;const E=R.getContext("2d");E&&(E.clearRect(0,0,R.width,R.height),_(""))},B=R=>{if(R.preventDefault(),!N.trim()){alert("Please enter the visitor's name");return}const E=N.trim().toLowerCase();if([p,...x].map(Y=>Y.trim().toLowerCase()).includes(E)){I("It looks like you've entered your own name. Please enter the name of the additional visitor instead.");return}if(I(""),!C){alert("Please provide a signature");return}s({name:N.trim(),signature:C})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[t.jsx(xh,{size:32,style:{color:"var(--color-gold)"}}),t.jsxs("h1",{className:"text-center text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Additional Visitor ",i," of ",u]})]}),t.jsx("p",{className:"text-center mb-4 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please provide name and signature"}),t.jsx("div",{className:"flex items-start gap-3 mb-6 p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.15)",border:"1px solid var(--color-gold)"},children:t.jsxs("p",{className:"text-sm sm:text-base",style:{color:"var(--color-gold)"},children:["Please hand the device to ",t.jsxs("strong",{children:["Visitor ",i]})," to enter their information."]})}),t.jsxs("form",{onSubmit:B,className:"space-y-6",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:["Visitor ",i,"'s Full Name"]}),t.jsx("input",{type:"text",value:N,onChange:R=>{I(""),b(S(R.target.value))},placeholder:`Enter Visitor ${i}'s full name`,required:!0,className:"w-full px-4 py-3 rounded-lg text-base",style:{backgroundColor:"var(--color-background)",border:A?"1px solid #ef4444":"1px solid var(--color-border)",color:"var(--color-text-white)"}}),A&&t.jsx("p",{className:"text-sm mt-1",style:{color:"#ef4444"},children:A})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:"Signature"}),t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",height:"180px"},children:[t.jsx("canvas",{ref:k,className:"w-full h-full cursor-crosshair",style:{touchAction:"none"},onMouseDown:P,onMouseMove:O,onMouseUp:F,onMouseLeave:F,onTouchStart:P,onTouchMove:O,onTouchEnd:F,onTouchCancel:F}),!C&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",style:{color:"var(--color-text-gray)",fontSize:"16px"},children:"Sign here with your finger or mouse"})]}),t.jsx("button",{type:"button",onClick:X,className:"w-full py-2 rounded-lg text-sm transition-colors",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Clear Signature"})]}),t.jsx("div",{className:"text-center p-3 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)"},children:t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Collecting signatures: ",i," of ",u," adults"]})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function zh({onNext:s,onBack:d,numberOfMinors:i}){const[u,g]=f.useState(Array(i).fill("")),p=b=>b.split(" ").map(A=>A.charAt(0).toUpperCase()+A.slice(1).toLowerCase()).join(" "),x=(b,A)=>{const I=[...u];I[b]=p(A),g(I)},N=b=>{b.preventDefault();for(let A=0;A<u.length;A++)if(!u[A].trim()){alert(`Please enter the name for Minor ${A+1}`);return}s(u.map(A=>A.trim()))};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[t.jsx(Sd,{size:32,style:{color:"var(--color-gold)"}}),t.jsx("h1",{className:"text-center text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Minor Information"})]}),t.jsxs("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:["Please provide the name",i>1?"s":""," of ",i===1?"the":"all"," minor",i>1?"s":""," visiting"]}),t.jsxs("form",{onSubmit:N,className:"space-y-5",children:[t.jsx("div",{className:"space-y-4",children:u.map((b,A)=>t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:["Minor ",A+1," Full Name"]}),t.jsx("input",{type:"text",value:b,onChange:I=>x(A,I.target.value),placeholder:`Enter name of minor ${A+1}`,required:!0,className:"w-full px-4 py-3 rounded-lg text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]},A))}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid rgba(212, 167, 54, 0.3)"},children:t.jsx("p",{className:"text-sm text-center",style:{color:"var(--color-text-gray)"},children:"ℹ️ Signatures are not required for minors"})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Submit"})]})]})]})})}function Mh({customerName:s,hasMinors:d,onReturnHome:i}){const[u,g]=f.useState(15),p=f.useRef(i);return f.useEffect(()=>{p.current=i},[i]),f.useEffect(()=>{const x=setInterval(()=>{g(N=>N<=1?(clearInterval(x),setTimeout(()=>p.current(),0),0):N-1)},1e3);return()=>clearInterval(x)},[]),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("div",{className:"flex justify-center mb-6",children:t.jsx(xs,{size:80,style:{color:"var(--color-success)"}})}),t.jsxs("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:["Thank You, ",s,"!"]}),t.jsx("p",{className:"mb-6",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"Your check-in is complete. A member of our team will be with you shortly."}),d&&t.jsxs("div",{className:"flex items-start gap-3 mb-8 p-4 rounded-lg text-left",style:{backgroundColor:"rgba(234, 179, 8, 0.1)",border:"1px solid var(--color-gold)"},children:[t.jsx(hh,{size:24,style:{color:"var(--color-gold)",flexShrink:0,marginTop:"2px"}}),t.jsx("p",{style:{color:"var(--color-gold)",fontSize:"16px",fontWeight:500},children:"Caution: Children under 15 years old must stay in the waiting room."})]}),t.jsxs("p",{className:"mb-6",style:{color:"var(--color-text-gray)"},children:["Returning to home screen in ",t.jsx("span",{style:{color:"var(--color-gold)"},children:u})," seconds..."]}),t.jsx("button",{onClick:i,className:"px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return to Home"})]})})}function Oh({onLogin:s}){const[d,i]=f.useState(""),[u,g]=f.useState(""),[p,x]=f.useState(!1),[N,b]=f.useState(""),[A,I]=f.useState(!1),C=async _=>{if(_.preventDefault(),b(""),!d.trim()){b("Username is required");return}if(!u.trim()){b("Password is required");return}if(d==="staff"&&u==="reliance")s(d,"staff");else if(d==="pricing"&&u==="reliance")s(d,"pricing");else if(d==="analysis"&&u==="reliance")s(d,"analysis");else if(d==="staff2"&&u==="reliance")s(d,"staff2");else if(["katia","sarah","diane","sneha","dheeraj","ben","om","guest"].includes(d.toLowerCase())&&u==="Reliance159")s(d.toLowerCase(),"staff2");else if(d==="rating"&&u==="Reliance33")s(d,"rating");else if(d===u&&d.replace(/\D/g,"").length===10){const W=d.replace(/\D/g,"");I(!0);try{const $=await fetch("/api/customer/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:W})}),k=await $.json();$.ok?s(d,"customer",{token:k.data.authToken,checkInId:k.data.checkInId,customerName:k.data.customerName}):b(k.error||"No check-in found for this phone number.")}catch{b("Login failed. Please check your connection and try again.")}finally{I(!1)}}else b("Invalid username or password")};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsxs("div",{className:"text-center mb-8",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-24 h-24 mx-auto mb-4 object-contain"}),t.jsx("h1",{style:{color:"var(--color-gold)"},children:"Reliance Surfaces"}),t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"Login"})]}),t.jsxs("form",{onSubmit:C,className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Username"}),t.jsx("input",{type:"text",value:d,onChange:_=>i(_.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter your username"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Password"}),t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:p?"text":"password",value:u,onChange:_=>g(_.target.value),className:"w-full px-4 py-3 rounded-lg pr-12",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter your password"}),t.jsx("button",{type:"button",onClick:()=>x(!p),className:"absolute right-3 top-1/2 -translate-y-1/2",style:{color:"var(--color-text-gray)"},children:p?t.jsx(eh,{size:20}):t.jsx(vs,{size:20})})]})]}),N&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239, 68, 68, 0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{className:"text-center",style:{color:"var(--color-error)"},children:N})}),t.jsx("button",{type:"submit",disabled:A,className:"w-full py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:A?.7:1},children:A?"Signing in…":"Sign In"})]})]})})}function ud(s,d){const[i,u]=f.useState(s);return f.useEffect(()=>{const g=setTimeout(()=>u(s),d);return()=>clearTimeout(g)},[s,d]),i}function ir(s,d){d===void 0&&(d={});var i=d.insertAt;if(s&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css",i==="top"&&u.firstChild?u.insertBefore(g,u.firstChild):u.appendChild(g),g.styleSheet?g.styleSheet.cssText=s:g.appendChild(document.createTextNode(s))}}ir(`.react-loading-indicator-normalize,
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
}`);var it=function(){return it=Object.assign||function(s){for(var d,i=1,u=arguments.length;i<u;i++)for(var g in d=arguments[i])Object.prototype.hasOwnProperty.call(d,g)&&(s[g]=d[g]);return s},it.apply(this,arguments)};function jl(s){return jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},jl(s)}var Dh=/^\s+/,Rh=/\s+$/;function ye(s,d){if(d=d||{},(s=s||"")instanceof ye)return s;if(!(this instanceof ye))return new ye(s,d);var i=(function(u){var g={r:0,g:0,b:0},p=1,x=null,N=null,b=null,A=!1,I=!1;typeof u=="string"&&(u=(function($){$=$.replace(Dh,"").replace(Rh,"").toLowerCase();var k,S=!1;if(fs[$])$=fs[$],S=!0;else if($=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(k=rt.rgb.exec($))?{r:k[1],g:k[2],b:k[3]}:(k=rt.rgba.exec($))?{r:k[1],g:k[2],b:k[3],a:k[4]}:(k=rt.hsl.exec($))?{h:k[1],s:k[2],l:k[3]}:(k=rt.hsla.exec($))?{h:k[1],s:k[2],l:k[3],a:k[4]}:(k=rt.hsv.exec($))?{h:k[1],s:k[2],v:k[3]}:(k=rt.hsva.exec($))?{h:k[1],s:k[2],v:k[3],a:k[4]}:(k=rt.hex8.exec($))?{r:Ir(k[1]),g:Ir(k[2]),b:Ir(k[3]),a:xd(k[4]),format:S?"name":"hex8"}:(k=rt.hex6.exec($))?{r:Ir(k[1]),g:Ir(k[2]),b:Ir(k[3]),format:S?"name":"hex"}:(k=rt.hex4.exec($))?{r:Ir(k[1]+""+k[1]),g:Ir(k[2]+""+k[2]),b:Ir(k[3]+""+k[3]),a:xd(k[4]+""+k[4]),format:S?"name":"hex8"}:(k=rt.hex3.exec($))?{r:Ir(k[1]+""+k[1]),g:Ir(k[2]+""+k[2]),b:Ir(k[3]+""+k[3]),format:S?"name":"hex"}:!1})(u)),jl(u)=="object"&&(vt(u.r)&&vt(u.g)&&vt(u.b)?(C=u.r,_=u.g,W=u.b,g={r:255*Ke(C,255),g:255*Ke(_,255),b:255*Ke(W,255)},A=!0,I=String(u.r).substr(-1)==="%"?"prgb":"rgb"):vt(u.h)&&vt(u.s)&&vt(u.v)?(x=sn(u.s),N=sn(u.v),g=(function($,k,S){$=6*Ke($,360),k=Ke(k,100),S=Ke(S,100);var P=Math.floor($),O=$-P,F=S*(1-k),X=S*(1-O*k),B=S*(1-(1-O)*k),R=P%6,E=[S,X,F,F,B,S][R],G=[B,S,S,X,F,F][R],Y=[F,F,B,S,S,X][R];return{r:255*E,g:255*G,b:255*Y}})(u.h,x,N),A=!0,I="hsv"):vt(u.h)&&vt(u.s)&&vt(u.l)&&(x=sn(u.s),b=sn(u.l),g=(function($,k,S){var P,O,F;function X(E,G,Y){return Y<0&&(Y+=1),Y>1&&(Y-=1),Y<1/6?E+6*(G-E)*Y:Y<.5?G:Y<2/3?E+(G-E)*(2/3-Y)*6:E}if($=Ke($,360),k=Ke(k,100),S=Ke(S,100),k===0)P=O=F=S;else{var B=S<.5?S*(1+k):S+k-S*k,R=2*S-B;P=X(R,B,$+1/3),O=X(R,B,$),F=X(R,B,$-1/3)}return{r:255*P,g:255*O,b:255*F}})(u.h,x,b),A=!0,I="hsl"),u.hasOwnProperty("a")&&(p=u.a));var C,_,W;return p=Pd(p),{ok:A,format:u.format||I,r:Math.min(255,Math.max(g.r,0)),g:Math.min(255,Math.max(g.g,0)),b:Math.min(255,Math.max(g.b,0)),a:p}})(s);this._originalInput=s,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=d.format||i.format,this._gradientType=d.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function pd(s,d,i){s=Ke(s,255),d=Ke(d,255),i=Ke(i,255);var u,g,p=Math.max(s,d,i),x=Math.min(s,d,i),N=(p+x)/2;if(p==x)u=g=0;else{var b=p-x;switch(g=N>.5?b/(2-p-x):b/(p+x),p){case s:u=(d-i)/b+(d<i?6:0);break;case d:u=(i-s)/b+2;break;case i:u=(s-d)/b+4}u/=6}return{h:u,s:g,l:N}}function hd(s,d,i){s=Ke(s,255),d=Ke(d,255),i=Ke(i,255);var u,g,p=Math.max(s,d,i),x=Math.min(s,d,i),N=p,b=p-x;if(g=p===0?0:b/p,p==x)u=0;else{switch(p){case s:u=(d-i)/b+(d<i?6:0);break;case d:u=(i-s)/b+2;break;case i:u=(s-d)/b+4}u/=6}return{h:u,s:g,v:N}}function md(s,d,i,u){var g=[tt(Math.round(s).toString(16)),tt(Math.round(d).toString(16)),tt(Math.round(i).toString(16))];return u&&g[0].charAt(0)==g[0].charAt(1)&&g[1].charAt(0)==g[1].charAt(1)&&g[2].charAt(0)==g[2].charAt(1)?g[0].charAt(0)+g[1].charAt(0)+g[2].charAt(0):g.join("")}function fd(s,d,i,u){return[tt(Ed(u)),tt(Math.round(s).toString(16)),tt(Math.round(d).toString(16)),tt(Math.round(i).toString(16))].join("")}function _h(s,d){d=d===0?0:d||10;var i=ye(s).toHsl();return i.s-=d/100,i.s=Cl(i.s),ye(i)}function Ah(s,d){d=d===0?0:d||10;var i=ye(s).toHsl();return i.s+=d/100,i.s=Cl(i.s),ye(i)}function Ih(s){return ye(s).desaturate(100)}function Fh(s,d){d=d===0?0:d||10;var i=ye(s).toHsl();return i.l+=d/100,i.l=Cl(i.l),ye(i)}function Lh(s,d){d=d===0?0:d||10;var i=ye(s).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-d/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-d/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-d/100*255))),ye(i)}function Hh(s,d){d=d===0?0:d||10;var i=ye(s).toHsl();return i.l-=d/100,i.l=Cl(i.l),ye(i)}function Uh(s,d){var i=ye(s).toHsl(),u=(i.h+d)%360;return i.h=u<0?360+u:u,ye(i)}function Bh(s){var d=ye(s).toHsl();return d.h=(d.h+180)%360,ye(d)}function gd(s,d){if(isNaN(d)||d<=0)throw new Error("Argument to polyad must be a positive number");for(var i=ye(s).toHsl(),u=[ye(s)],g=360/d,p=1;p<d;p++)u.push(ye({h:(i.h+p*g)%360,s:i.s,l:i.l}));return u}function Wh(s){var d=ye(s).toHsl(),i=d.h;return[ye(s),ye({h:(i+72)%360,s:d.s,l:d.l}),ye({h:(i+216)%360,s:d.s,l:d.l})]}function $h(s,d,i){d=d||6,i=i||30;var u=ye(s).toHsl(),g=360/i,p=[ye(s)];for(u.h=(u.h-(g*d>>1)+720)%360;--d;)u.h=(u.h+g)%360,p.push(ye(u));return p}function qh(s,d){d=d||6;for(var i=ye(s).toHsv(),u=i.h,g=i.s,p=i.v,x=[],N=1/d;d--;)x.push(ye({h:u,s:g,v:p})),p=(p+N)%1;return x}ye.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var s=this.toRgb();return(299*s.r+587*s.g+114*s.b)/1e3},getLuminance:function(){var s,d,i,u=this.toRgb();return s=u.r/255,d=u.g/255,i=u.b/255,.2126*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.7152*(d<=.03928?d/12.92:Math.pow((d+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(s){return this._a=Pd(s),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var s=hd(this._r,this._g,this._b);return{h:360*s.h,s:s.s,v:s.v,a:this._a}},toHsvString:function(){var s=hd(this._r,this._g,this._b),d=Math.round(360*s.h),i=Math.round(100*s.s),u=Math.round(100*s.v);return this._a==1?"hsv("+d+", "+i+"%, "+u+"%)":"hsva("+d+", "+i+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var s=pd(this._r,this._g,this._b);return{h:360*s.h,s:s.s,l:s.l,a:this._a}},toHslString:function(){var s=pd(this._r,this._g,this._b),d=Math.round(360*s.h),i=Math.round(100*s.s),u=Math.round(100*s.l);return this._a==1?"hsl("+d+", "+i+"%, "+u+"%)":"hsla("+d+", "+i+"%, "+u+"%, "+this._roundA+")"},toHex:function(s){return md(this._r,this._g,this._b,s)},toHexString:function(s){return"#"+this.toHex(s)},toHex8:function(s){return(function(d,i,u,g,p){var x=[tt(Math.round(d).toString(16)),tt(Math.round(i).toString(16)),tt(Math.round(u).toString(16)),tt(Ed(g))];return p&&x[0].charAt(0)==x[0].charAt(1)&&x[1].charAt(0)==x[1].charAt(1)&&x[2].charAt(0)==x[2].charAt(1)&&x[3].charAt(0)==x[3].charAt(1)?x[0].charAt(0)+x[1].charAt(0)+x[2].charAt(0)+x[3].charAt(0):x.join("")})(this._r,this._g,this._b,this._a,s)},toHex8String:function(s){return"#"+this.toHex8(s)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ke(this._r,255))+"%",g:Math.round(100*Ke(this._g,255))+"%",b:Math.round(100*Ke(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ke(this._r,255))+"%, "+Math.round(100*Ke(this._g,255))+"%, "+Math.round(100*Ke(this._b,255))+"%)":"rgba("+Math.round(100*Ke(this._r,255))+"%, "+Math.round(100*Ke(this._g,255))+"%, "+Math.round(100*Ke(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Yh[md(this._r,this._g,this._b,!0)]||!1)},toFilter:function(s){var d="#"+fd(this._r,this._g,this._b,this._a),i=d,u=this._gradientType?"GradientType = 1, ":"";if(s){var g=ye(s);i="#"+fd(g._r,g._g,g._b,g._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+d+",endColorstr="+i+")"},toString:function(s){var d=!!s;s=s||this._format;var i=!1,u=this._a<1&&this._a>=0;return d||!u||s!=="hex"&&s!=="hex6"&&s!=="hex3"&&s!=="hex4"&&s!=="hex8"&&s!=="name"?(s==="rgb"&&(i=this.toRgbString()),s==="prgb"&&(i=this.toPercentageRgbString()),s!=="hex"&&s!=="hex6"||(i=this.toHexString()),s==="hex3"&&(i=this.toHexString(!0)),s==="hex4"&&(i=this.toHex8String(!0)),s==="hex8"&&(i=this.toHex8String()),s==="name"&&(i=this.toName()),s==="hsl"&&(i=this.toHslString()),s==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):s==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ye(this.toString())},_applyModification:function(s,d){var i=s.apply(null,[this].concat([].slice.call(d)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(Fh,arguments)},brighten:function(){return this._applyModification(Lh,arguments)},darken:function(){return this._applyModification(Hh,arguments)},desaturate:function(){return this._applyModification(_h,arguments)},saturate:function(){return this._applyModification(Ah,arguments)},greyscale:function(){return this._applyModification(Ih,arguments)},spin:function(){return this._applyModification(Uh,arguments)},_applyCombination:function(s,d){return s.apply(null,[this].concat([].slice.call(d)))},analogous:function(){return this._applyCombination($h,arguments)},complement:function(){return this._applyCombination(Bh,arguments)},monochromatic:function(){return this._applyCombination(qh,arguments)},splitcomplement:function(){return this._applyCombination(Wh,arguments)},triad:function(){return this._applyCombination(gd,[3])},tetrad:function(){return this._applyCombination(gd,[4])}},ye.fromRatio=function(s,d){if(jl(s)=="object"){var i={};for(var u in s)s.hasOwnProperty(u)&&(i[u]=u==="a"?s[u]:sn(s[u]));s=i}return ye(s,d)},ye.equals=function(s,d){return!(!s||!d)&&ye(s).toRgbString()==ye(d).toRgbString()},ye.random=function(){return ye.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ye.mix=function(s,d,i){i=i===0?0:i||50;var u=ye(s).toRgb(),g=ye(d).toRgb(),p=i/100;return ye({r:(g.r-u.r)*p+u.r,g:(g.g-u.g)*p+u.g,b:(g.b-u.b)*p+u.b,a:(g.a-u.a)*p+u.a})},ye.readability=function(s,d){var i=ye(s),u=ye(d);return(Math.max(i.getLuminance(),u.getLuminance())+.05)/(Math.min(i.getLuminance(),u.getLuminance())+.05)},ye.isReadable=function(s,d,i){var u,g,p=ye.readability(s,d);switch(g=!1,(u=(function(x){var N,b;return N=((x=x||{level:"AA",size:"small"}).level||"AA").toUpperCase(),b=(x.size||"small").toLowerCase(),N!=="AA"&&N!=="AAA"&&(N="AA"),b!=="small"&&b!=="large"&&(b="small"),{level:N,size:b}})(i)).level+u.size){case"AAsmall":case"AAAlarge":g=p>=4.5;break;case"AAlarge":g=p>=3;break;case"AAAsmall":g=p>=7}return g},ye.mostReadable=function(s,d,i){var u,g,p,x,N=null,b=0;g=(i=i||{}).includeFallbackColors,p=i.level,x=i.size;for(var A=0;A<d.length;A++)(u=ye.readability(s,d[A]))>b&&(b=u,N=ye(d[A]));return ye.isReadable(s,N,{level:p,size:x})||!g?N:(i.includeFallbackColors=!1,ye.mostReadable(s,["#fff","#000"],i))};var fs=ye.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Yh=ye.hexNames=(function(s){var d={};for(var i in s)s.hasOwnProperty(i)&&(d[s[i]]=i);return d})(fs);function Pd(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function Ke(s,d){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(s)&&(s="100%");var i=(function(u){return typeof u=="string"&&u.indexOf("%")!=-1})(s);return s=Math.min(d,Math.max(0,parseFloat(s))),i&&(s=parseInt(s*d,10)/100),Math.abs(s-d)<1e-6?1:s%d/parseFloat(d)}function Cl(s){return Math.min(1,Math.max(0,s))}function Ir(s){return parseInt(s,16)}function tt(s){return s.length==1?"0"+s:""+s}function sn(s){return s<=1&&(s=100*s+"%"),s}function Ed(s){return Math.round(255*parseFloat(s)).toString(16)}function xd(s){return Ir(s)/255}var Ft,kl,Nl,rt=(kl="[\\s|\\(]+("+(Ft="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ft+")[,|\\s]+("+Ft+")\\s*\\)?",Nl="[\\s|\\(]+("+Ft+")[,|\\s]+("+Ft+")[,|\\s]+("+Ft+")[,|\\s]+("+Ft+")\\s*\\)?",{CSS_UNIT:new RegExp(Ft),rgb:new RegExp("rgb"+kl),rgba:new RegExp("rgba"+Nl),hsl:new RegExp("hsl"+kl),hsla:new RegExp("hsla"+Nl),hsv:new RegExp("hsv"+kl),hsva:new RegExp("hsva"+Nl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function vt(s){return!!rt.CSS_UNIT.exec(s)}var Vh=function(s,d){var i=(typeof s=="string"?parseInt(s):s)||0;if(i>=-5&&i<=5){var u=i,g=parseFloat(d),p=g+u*(g/5)*-1;return(p==0||p<=Number.EPSILON)&&(p=.1),{animationPeriod:p+"s"}}return{animationPeriod:d}},Qh=function(s,d){var i=s||{},u="";switch(d){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var g={};if(i.fontSize){var p=i.fontSize;g=(function(x,N){var b={};for(var A in x)Object.prototype.hasOwnProperty.call(x,A)&&N.indexOf(A)<0&&(b[A]=x[A]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function"){var I=0;for(A=Object.getOwnPropertySymbols(x);I<A.length;I++)N.indexOf(A[I])<0&&Object.prototype.propertyIsEnumerable.call(x,A[I])&&(b[A[I]]=x[A[I]])}return b})(i,["fontSize"]),u=p}return{fontSize:u,styles:g}},Xh={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Kh=function(s){var d=s.className,i=s.text,u=s.textColor,g=s.staticText,p=s.style;return i?Yr.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(d||"").trim(),style:it(it(it({},g&&Xh),u&&{color:u,mixBlendMode:"unset"}),p&&p)},typeof i=="string"&&i.length?i:"loading"):null},Td="rgb(50, 205, 50)";function Gh(s,d){if(d===void 0&&(d=0),s.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function u(g,p){return p===void 0&&(p=0),i.push.apply(i,g),i.length<p&&u(i,p),i.slice(0,p)})(s,d)}ir(`.atom-rli-bounding-box {
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
}`);ye(Td).toRgb();Array.from({length:4},(function(s,d){return"--atom-phase".concat(d+1,"-rgb")}));ir(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--commet-phase".concat(d+1,"-color")}));ir(`.OP-annulus-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--OP-annulus-phase".concat(d+1,"-color")}));function ms(s){return s&&s.Math===Math&&s}ir(`.OP-dotted-rli-bounding-box {
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
}`);ms(typeof window=="object"&&window)||ms(typeof self=="object"&&self)||ms(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();Array.from({length:4},(function(s,d){return"--OP-dotted-phase".concat(d+1,"-color")}));ir(`.OP-spokes-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--OP-spokes-phase".concat(d+1,"-color")}));ir(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--OP-annulus-dual-sectors-phase".concat(d+1,"-color")}));ir(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return["--OP-annulus-track-phase".concat(d+1,"-color"),"--OP-annulus-sector-phase".concat(d+1,"-color")]}));ir(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--four-square-phase".concat(d+1,"-color")}));ir(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--mosaic-phase".concat(d+1,"-color")}));ir(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--riple-phase".concat(d+1,"-color")}));ir(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--TD-pulsate-phase".concat(d+1,"-color")}));ir(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--TD-brick-stack-phase".concat(d+1,"-color")}));ir(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--TD-bob-phase".concat(d+1,"-color")}));ir(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--TD-bounce-phase".concat(d+1,"-color")}));ir(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--shape-phase".concat(d+1,"-color")}));ir(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--trophySpin-phase".concat(d+1,"-color")}));ir(`.slab-rli-bounding-box {
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
}`);var No=Array.from({length:4},(function(s,d){return"--slab-phase".concat(d+1,"-color")})),Jh=function(s){var d,i=Qh(s?.style,s?.size),u=i.styles,g=i.fontSize,p=s?.easing,x=Vh(s?.speedPlus,"3s").animationPeriod,N=(function(b){var A={};if(b instanceof Array){for(var I=Gh(b,No.length),C=0;C<I.length&&!(C>=4);C++)A[No[C]]=I[C];return A}try{if(typeof b!="string")throw new Error("Color String expected");for(var _=0;_<No.length;_++)A[No[_]]=b}catch(W){for(W instanceof Error?console.warn("[".concat(W.message,']: Received "').concat(typeof b,'" instead with value, ').concat(JSON.stringify(b))):console.warn("".concat(JSON.stringify(b)," received in <Slab /> indicator cannot be processed. Using default instead!")),_=0;_<No.length;_++)A[No[_]]=Td}return A})((d=s?.color)!==null&&d!==void 0?d:"");return Yr.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",style:it(it(it(it(it({},g&&{fontSize:g}),x&&{"--rli-animation-duration-unitless":parseFloat(x)}),p&&{"--rli-animation-function":p}),N),u),role:"status","aria-live":"polite","aria-label":"Loading"},Yr.createElement("span",{className:"rli-d-i-b slab-indicator"},Yr.createElement("span",{className:"slabs-wrapper"},Yr.createElement("span",{className:"slab"}),Yr.createElement("span",{className:"slab"}),Yr.createElement("span",{className:"slab"}),Yr.createElement("span",{className:"slab"}))),Yr.createElement(Kh,{staticText:!0,text:s?.text,textColor:s?.textColor}))};ir(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--life-line-phase".concat(d+1,"-color")}));function cn({color:s="#ccb331",size:d="medium",text:i,fullScreen:u=!1}){const g=t.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[t.jsx(Jh,{color:s,size:d}),i&&t.jsx("p",{className:"text-sm animate-pulse",style:{color:"var(--color-text-gray, #aaa)"},children:i})]});return u?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.7)"},children:g}):t.jsx("div",{className:"flex items-center justify-center p-6",children:g})}function Zh({customer:s,onClose:d,onSubmit:i,onMarkAsHelped:u,onRevisit:g,staffUsername:p,isViewOnly:x,allCheckIns:N}){const[b,A]=f.useState(s.draft?.step||1),[I,C]=f.useState(s.draft?.editedCustomerData||{}),[_,W]=f.useState(()=>{const j=s.draft?.editedCustomerData?.firstName??s.firstName,de=s.draft?.editedCustomerData?.lastName??s.lastName;return[j,de].filter(Boolean).join(" ")}),$=j=>{W(j);const de=j.trim().split(/\s+/).filter(Boolean);C(Qe=>({...Qe,firstName:de[0]||j.trim(),lastName:de.slice(1).join(" ")}))},[k,S]=f.useState(s.draft?.selectedFabricator),[P,O]=f.useState(s.draft?.materials||[]),[F,X]=f.useState(s.currentlyHelpedBy||s.draft?.helpedBy||p),[B,R]=f.useState(s.draft?.selectionSheetNumber||""),[E,G]=f.useState(s.draft?.selectedFabricator?.companyName||""),[Y,U]=f.useState(""),[oe,ie]=f.useState(!1),[q,ce]=f.useState(!1),Ce=ud(E,300),Ee=ud(Y,300),[Te,Z]=f.useState([]),[se,re]=f.useState([]),[h,w]=f.useState(!1),[ne,le]=f.useState(!1),[H,V]=f.useState(!1),[pe,ke]=f.useState([]),[be,Oe]=f.useState(!1),[cr,Fr]=f.useState(!1),[wr,Ve]=f.useState(null);f.useEffect(()=>{s.currentlyHelpedBy&&X(s.currentlyHelpedBy)},[s.currentlyHelpedBy]),f.useEffect(()=>{const j=s.phones?.[0];j&&(Fr(!0),fetch(`/api/images/customer/${encodeURIComponent(j)}`).then(de=>de.json()).then(de=>{de.success&&Array.isArray(de.data)&&ke(de.data.filter(Qe=>Qe.images.length>0))}).catch(()=>{}).finally(()=>Fr(!1)))},[s.phones]);const br=()=>({...s,...I});f.useEffect(()=>{if(Ce.length<3){Z([]);return}w(!0),fetch(`/api/accounts/search?q=${encodeURIComponent(Ce)}`).then(j=>j.json()).then(j=>Z(j.success?j.data:[])).catch(()=>Z([])).finally(()=>w(!1))},[Ce]),f.useEffect(()=>{if(Ee.length<3){re([]);return}le(!0),fetch(`/api/materials/search?q=${encodeURIComponent(Ee)}`).then(j=>j.json()).then(j=>re(j.success?j.data:[])).catch(()=>re([])).finally(()=>le(!1))},[Ee]);const jr=()=>{if(s.status==="waiting"){const j={step:b,editedCustomerData:I,selectedFabricator:k,materials:P,helpedBy:F,selectionSheetNumber:B,isHold:P.some(de=>de.hold),isRevisit:s.draft?.isRevisit,previousMaterialsCount:s.draft?.previousMaterialsCount};i(s.id,j),fetch(`/api/check-ins/${s.id}/draft`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({draftStep:b,materials:P,fabricator:k||null,helpedBy:F,selectionSheetNumber:B})}).catch(de=>console.warn("Draft save failed:",de))}d()},Lr=j=>{S(j),G(j.companyName),ie(!1),j.salesPerson&&C(de=>({...de,salesPerson:j.salesPerson}))},We=j=>{G(j),ie(!0),k&&j.toLowerCase()!==k.companyName.toLowerCase()&&!k.companyName.toLowerCase().startsWith(j.toLowerCase())&&j.length>=3&&S(void 0)},or=j=>{const de={id:Date.now().toString(),name:j,soldAs:"",size:{l:"",h:""},lot:"",location:"",quantity:1,finish:"Polished",hold:!1,slabNumbers:""};O([...P,de]),U(""),ce(!1)},De=(j,de,Qe)=>{O(P.map(ze=>ze.id===j?{...ze,[de]:Qe}:ze))},ee=j=>{O(P.filter(de=>de.id!==j))},ve=async()=>{if(b!==3||H)return;V(!0);const j={step:3,editedCustomerData:I,selectedFabricator:k,materials:P,helpedBy:F,selectionSheetNumber:B,isHold:P.some(de=>de.hold),isRevisit:s.draft?.isRevisit,previousMaterialsCount:s.draft?.previousMaterialsCount};try{await fetch(`/api/check-ins/${s.id}/complete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({materials:P,selectedFabricator:k,helpedBy:F,selectionSheetNumber:B})})}catch(de){console.error("Complete API error:",de)}V(!1),i(s.id,j),d()},Se=()=>{if(!s.draft?.selectionSheetNumber)return!1;const j=N.filter(xe=>xe.firstName===s.firstName&&xe.lastName===s.lastName&&xe.status==="helped"&&xe.draft?.selectionSheetNumber),ze=s.draft.selectionSheetNumber.split(".")[0],Ue=j.filter(xe=>(xe.draft?.selectionSheetNumber||"").startsWith(ze));return Ue.sort((xe,Re)=>{const _e=xe.draft?.selectionSheetNumber||"",L=Re.draft?.selectionSheetNumber||"",fe=_e.split("."),Ae=L.split("."),Be=parseInt(fe[0])||0,lr=parseInt(Ae[0])||0;if(Be!==lr)return Be-lr;const hr=fe.length>1?parseInt(fe[1]):0,Or=Ae.length>1?parseInt(Ae[1]):0;return hr-Or}),Ue[Ue.length-1]?.id===s.id},Ne=br();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-6 z-50",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsxs("div",{className:"flex justify-between items-start mb-6",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{color:"var(--color-gold)"},children:[Ne.firstName,Ne.lastName].filter(Boolean).join(" ")}),t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:["Step ",b," of 3"]})]}),t.jsx("button",{onClick:jr,className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsx("div",{className:"flex gap-2 mb-8",children:[1,2,3].map(j=>t.jsx("div",{className:"flex-1 h-2 rounded-full",style:{backgroundColor:j<=b?"var(--color-gold)":"var(--color-border)"}},j))}),b===1&&t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Customer Details"}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),t.jsx("input",{type:"text",value:_,onChange:j=>$(j.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Street Address"}),t.jsx("input",{type:"text",value:I.street??Ne.street,onChange:j=>C({...I,street:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:I.suiteUnit??Ne.suiteUnit,onChange:j=>C({...I,suiteUnit:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[t.jsxs("div",{className:"col-span-2",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"City"}),t.jsx("input",{type:"text",value:I.city??Ne.city,onChange:j=>C({...I,city:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"State"}),t.jsx("input",{type:"text",value:I.state??Ne.state,onChange:j=>C({...I,state:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"ZIP"}),t.jsx("input",{type:"text",value:I.zip??Ne.zip,onChange:j=>C({...I,zip:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Country"}),t.jsxs("select",{value:I.country??Ne.country,onChange:j=>C({...I,country:j.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Phone Numbers"}),(I.phones??Ne.phones).map((j,de)=>t.jsx("input",{type:"tel",value:j,onChange:Qe=>{const ze=[...I.phones??Ne.phones];ze[de]=Qe.target.value,C({...I,phones:ze})},className:"w-full px-4 py-3 rounded-lg mb-2",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}},de))]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Email Addresses"}),(I.emails??Ne.emails).map((j,de)=>t.jsx("input",{type:"email",value:j,onChange:Qe=>{const ze=[...I.emails??Ne.emails];ze[de]=Qe.target.value,C({...I,emails:ze})},className:"w-full px-4 py-3 rounded-lg mb-2",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}},de))]}),Ne.visitors&&Ne.visitors.length>0?t.jsxs("div",{children:[t.jsxs("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:["All Visitors (",Ne.visitors.length,")"]}),t.jsx("div",{className:"space-y-4",children:Ne.visitors.filter(j=>j&&j.name).map((j,de)=>(console.log(`Visitor ${de}:`,{name:j.name,hasSignature:!!j.signature,signatureLength:j.signature?.length,isMinor:j.isMinor,isMain:j.isMain}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:j.isMain?"2px solid var(--color-gold)":"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"15px",fontWeight:"500"},children:j.name}),j.isMain&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:"Main"}),j.isMinor&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",color:"var(--color-text-gray)"},children:"Minor"})]}),j.signature&&j.signature.length>0?t.jsx("div",{className:"rounded",style:{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"8px"},children:t.jsx("img",{src:j.signature,alt:`${j.name}'s signature`,className:"w-full rounded",style:{maxHeight:"80px",objectFit:"contain"}})}):j.isMinor?t.jsx("div",{className:"rounded flex items-center justify-center",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",padding:"12px",minHeight:"80px"},children:t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No signature (Minor)"})}):null]},de)))})]}):t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Waiver Signature"}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)"},children:t.jsx("img",{src:Ne.signature,alt:"Signature",className:"w-full rounded",style:{maxHeight:"150px",objectFit:"contain"}})})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[t.jsxs("button",{onClick:()=>Oe(j=>!j),className:"w-full flex items-center justify-between px-4 py-3",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-white)",border:"none",cursor:"pointer"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ys,{size:16,style:{color:"var(--color-gold)"}}),t.jsx("span",{children:"Uploaded Images"}),!cr&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212,167,54,0.15)",color:"var(--color-gold)"},children:pe.reduce((j,de)=>j+de.images.length,0)})]}),be?t.jsx(kd,{size:16,style:{color:"var(--color-text-gray)"}}):t.jsx(bd,{size:16,style:{color:"var(--color-text-gray)"}})]}),be&&t.jsx("div",{className:"p-4",style:{borderTop:"1px solid var(--color-border)"},children:cr?t.jsx(cn,{size:"small",color:"#ccb331"}):pe.length===0?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No images uploaded."}):t.jsx("div",{className:"space-y-5",children:pe.map(j=>t.jsxs("div",{children:[pe.length>1&&t.jsxs("p",{className:"mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:["Visit: ",new Date(j.checkInTime).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),t.jsx("div",{className:"grid gap-3",style:{gridTemplateColumns:"repeat(auto-fill, minmax(110px, 1fr))"},children:j.images.map(de=>t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{aspectRatio:"1",border:"1px solid var(--color-border)",cursor:"pointer"},onClick:()=>Ve(de.image_url),children:[t.jsx("img",{src:de.image_url,alt:"Material",className:"w-full h-full object-cover"}),t.jsxs("div",{className:"absolute bottom-0 right-0 px-1.5 py-0.5 text-xs font-semibold rounded-tl-lg",style:{backgroundColor:"rgba(0,0,0,0.75)",color:"var(--color-gold)"},children:["×",de.quantity]})]},de.id))})]},j.checkInId))})})]})]}),b===2&&t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Referral Information"}),t.jsx("div",{className:"mt-4 p-4 rounded-lg",style:{backgroundColor:"var(--color-background)"},children:Ne.referralSources&&Ne.referralSources.length>0?Ne.referralSources.map((j,de)=>t.jsxs("div",{className:"mb-3",children:[t.jsxs("p",{style:{color:"var(--color-text-white)"},children:[t.jsx("span",{style:{color:"var(--color-gold)"},children:"•"})," ",j.type]}),j.name&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Name: ",j.name]}),j.phone&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Phone: ",j.phone]}),j.location&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Location: ",j.location]})]},de)):t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No referral information provided"})})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)",marginBottom:"16px"},children:"Fabricator Selection *"}),t.jsxs("div",{className:"relative",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Search by Company Name"}),t.jsx("input",{type:"text",value:E,onChange:j=>We(j.target.value),onFocus:()=>ie(!0),onBlur:()=>{setTimeout(()=>ie(!1),200)},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${k?"var(--color-gold)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Type 3+ characters to search..."}),oe&&E.length>=3&&t.jsx("div",{className:"absolute z-10 w-full mt-1 rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",maxHeight:"200px",overflowY:"auto"},children:h?t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[t.jsx(cn,{size:"small",color:"#ccb331"}),t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"Searching..."})]}):Te.length>0?Te.map(j=>t.jsxs("button",{onClick:()=>Lr(j),className:"w-full text-left px-4 py-3 hover:bg-opacity-50",style:{backgroundColor:"transparent",color:"var(--color-text-white)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("div",{children:j.companyName}),t.jsxs("div",{style:{color:"var(--color-text-gray)",fontSize:"12px"},children:[j.city,", ",j.state]})]},j.id)):t.jsx("div",{className:"px-4 py-3",children:t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:['No accounts found matching "',E,'"']})})}),E.length>0&&E.length<3&&t.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-text-gray)"},children:"Type at least 3 characters to search"})]})]}),k&&t.jsxs("div",{className:"p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"},children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("h4",{style:{color:"var(--color-gold)"},children:"Selected Fabricator"}),t.jsx("button",{onClick:()=>{S(void 0),G("")},className:"px-3 py-1 rounded text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Change"})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Company Name"}),t.jsx("input",{type:"text",value:k.companyName,onChange:j=>S({...k,companyName:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Address"}),t.jsx("input",{type:"text",value:k.address,onChange:j=>S({...k,address:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"City"}),t.jsx("input",{type:"text",value:k.city,onChange:j=>S({...k,city:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"State"}),t.jsx("input",{type:"text",value:k.state,onChange:j=>S({...k,state:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"ZIP"}),t.jsx("input",{type:"text",value:k.zip,onChange:j=>S({...k,zip:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Sales Person"}),t.jsx("input",{type:"text",value:I.salesPerson??Ne.salesPerson??"",onChange:j=>C({...I,salesPerson:j.target.value}),placeholder:"Sales person name",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone 1"}),t.jsx("input",{type:"text",value:k.phone1,onChange:j=>S({...k,phone1:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone 2"}),t.jsx("input",{type:"text",value:k.phone2||"",onChange:j=>S({...k,phone2:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Mobile"}),t.jsx("input",{type:"text",value:k.mobile||"",onChange:j=>S({...k,mobile:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Email"}),t.jsx("input",{type:"email",value:k.email,onChange:j=>S({...k,email:j.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]})]})]}),b===3&&t.jsxs("div",{className:"space-y-6",children:[s.draft?.isRevisit&&t.jsx("div",{className:"p-4 rounded-lg mb-4",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)"},children:t.jsxs("p",{style:{color:"var(--color-gold)",fontSize:"14px"},children:[t.jsx("strong",{children:"Re-visit Mode:"})," You can edit all materials. Use the ",t.jsx("strong",{children:"−"})," button when quantity is 1 to delete a material."]})}),t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Materials / Selection Sheet"}),t.jsxs("div",{className:"relative mt-4",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Search Materials"}),t.jsx("input",{type:"text",value:Y,onChange:j=>{U(j.target.value),ce(!0)},onFocus:()=>ce(!0),disabled:x,className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:x?"not-allowed":"text",opacity:x?.6:1},placeholder:x?"View only mode":"Search for materials..."}),!x&&q&&Y.length>=3&&t.jsx("div",{className:"absolute z-10 w-full mt-1 rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",maxHeight:"200px",overflowY:"auto"},children:ne?t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[t.jsx(cn,{size:"small",color:"#ccb331"}),t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"Searching..."})]}):se.length>0?se.map(j=>t.jsxs("button",{onClick:()=>or(j.name),className:"w-full text-left px-4 py-3 hover:bg-opacity-50 flex items-center justify-between",style:{backgroundColor:"transparent",color:"var(--color-text-white)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("span",{children:j.name}),t.jsx(dn,{size:16,style:{color:"var(--color-gold)"}})]},j.id)):t.jsx("div",{className:"px-4 py-3",children:t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:['No materials found matching "',Y,'"']})})})]})]}),P.length>0&&t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"separate",borderSpacing:"0 10px"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{backgroundColor:"var(--color-background)"},children:[t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",width:"110px"},children:"Qty"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"160px"},children:"Name"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"130px"},children:"Sold As"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"130px"},children:"Finish"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"150px"},children:"Size (L x H)"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"90px"},children:"Lot"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"110px"},children:"Location"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"110px"},children:"Hold"})]})}),t.jsx("tbody",{children:P.map((j,de)=>{const Qe=s.draft?.isRevisit&&de<(s.draft?.previousMaterialsCount||0);return t.jsxs("tr",{style:{backgroundColor:Qe?"rgba(100, 100, 100, 0.2)":"var(--color-background)",borderRadius:"8px"},children:[t.jsx("td",{className:"px-5 py-5",style:{borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px"},children:t.jsxs("div",{className:"flex items-center gap-1.5",children:[t.jsx("button",{onClick:()=>{j.quantity===1?ee(j.id):De(j.id,"quantity",j.quantity-1)},disabled:x,className:"p-2 rounded",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)",opacity:x?.5:1,cursor:x?"not-allowed":"pointer"},title:j.quantity===1?"Delete material":"Decrease quantity",children:t.jsx(wd,{size:16})}),t.jsx("span",{style:{color:"var(--color-text-white)",minWidth:"30px",textAlign:"center",fontSize:"15px",fontWeight:"500"},children:j.quantity}),t.jsx("button",{onClick:()=>De(j.id,"quantity",j.quantity+1),disabled:x,className:"p-2 rounded",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)",opacity:x?.5:1,cursor:x?"not-allowed":"pointer"},children:t.jsx(dn,{size:16})})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"15px"},children:j.name}),Qe&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-gray)",border:"1px solid var(--color-border)"},children:"Previous"})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:j.soldAs||"",onChange:ze=>De(j.id,"soldAs",ze.target.value),disabled:x,placeholder:"Alternative",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:x?.6:1,cursor:x?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("select",{value:j.finish||"Polished",onChange:ze=>De(j.id,"finish",ze.target.value),disabled:x,className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:x?.6:1,cursor:x?"not-allowed":"pointer"},children:[t.jsx("option",{value:"Polished",children:"Polished"}),t.jsx("option",{value:"Honed",children:"Honed"}),t.jsx("option",{value:"Polished/Honed",children:"Polished/Honed"}),t.jsx("option",{value:"Leather",children:"Leather"}),t.jsx("option",{value:"Honed/Leather",children:"Honed/Leather"})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("input",{type:"text",value:j.size?.l||"",onChange:ze=>De(j.id,"size",{...j.size||{l:"",h:""},l:ze.target.value}),disabled:x,placeholder:"L",className:"w-16 px-2 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",textAlign:"center",opacity:x?.6:1,cursor:x?"not-allowed":"text"}}),t.jsx("span",{style:{color:"var(--color-gold)",fontWeight:"bold",fontSize:"16px"},children:"×"}),t.jsx("input",{type:"text",value:j.size?.h||"",onChange:ze=>De(j.id,"size",{...j.size||{l:"",h:""},h:ze.target.value}),disabled:x,placeholder:"H",className:"w-16 px-2 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",textAlign:"center",opacity:x?.6:1,cursor:x?"not-allowed":"text"}})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:j.lot||"",onChange:ze=>De(j.id,"lot",ze.target.value),disabled:x,placeholder:"Lot #",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:x?.6:1,cursor:x?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:j.location||"",onChange:ze=>De(j.id,"location",ze.target.value),disabled:x,placeholder:"Location",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:x?.6:1,cursor:x?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-2 mb-2 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:j.hold,onChange:ze=>De(j.id,"hold",ze.target.checked),disabled:x,className:"w-4 h-4 rounded",style:{accentColor:"var(--color-gold)",opacity:x?.5:1,cursor:x?"not-allowed":"pointer"}}),t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"14px"},children:"Hold"})]}),j.hold&&t.jsx("input",{type:"text",value:j.slabNumbers||"",onChange:ze=>De(j.id,"slabNumbers",ze.target.value),disabled:x,placeholder:"Slab #s",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)",fontSize:"14px",opacity:x?.6:1,cursor:x?"not-allowed":"text"}})]})})]},j.id)})})]})}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Helped By"}),t.jsx("div",{className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)"},children:F})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Selection Sheet Number"}),t.jsx("input",{type:"text",value:B,onChange:j=>R(j.target.value),readOnly:s.draft?.isRevisit||x,placeholder:"e.g. 800, 801...",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:s.draft?.isRevisit||x?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:`1px solid ${s.draft?.isRevisit||x?"var(--color-gold)":"var(--color-border)"}`,color:"var(--color-text-white)",cursor:s.draft?.isRevisit||x?"not-allowed":"text",opacity:x?.6:1}}),s.draft?.isRevisit&&!x&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-gold)"},children:"Auto-generated from previous sheet"})]})]})]}),t.jsxs("div",{className:"flex gap-4 mt-8",children:[b>1&&t.jsx("button",{onClick:()=>A(b-1),className:"px-6 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),!x&&b<3?t.jsx("button",{onClick:()=>A(b+1),disabled:b===2&&!k,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:b===2&&!k?"var(--color-border)":"var(--color-gold)",color:"var(--color-background)",cursor:b===2&&!k?"not-allowed":"pointer"},children:"Next"}):x&&b<3?t.jsx("button",{onClick:()=>A(b+1),className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Next"}):x?null:t.jsx("button",{onClick:ve,disabled:!B||B.trim()===""||H,className:"flex-1 py-3 rounded-lg flex items-center justify-center gap-2",style:{backgroundColor:!B||B.trim()===""||H?"var(--color-border)":"var(--color-success)",color:"var(--color-background)",cursor:!B||B.trim()===""||H?"not-allowed":"pointer"},children:H?t.jsxs(t.Fragment,{children:[t.jsx(cn,{size:"small",color:"var(--color-background)"}),t.jsx("span",{children:"Submitting..."})]}):"Submit"})]}),x&&g&&b===3&&Se()&&t.jsx("div",{className:"flex gap-4 mt-4",children:t.jsx("button",{onClick:()=>{g(s),d()},className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Re-visit"})})]})}),wr&&t.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},onClick:()=>Ve(null),children:[t.jsx("img",{src:wr,alt:"Enlarged material",style:{maxWidth:"90vw",maxHeight:"90vh",display:"block",borderRadius:"8px"},onClick:j=>j.stopPropagation()}),t.jsx("button",{onClick:()=>Ve(null),style:{position:"absolute",top:"16px",right:"16px",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",color:"white",fontSize:"22px",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})]})}function em({username:s,onLogout:d,checkIns:i,onMarkAsHelped:u,onSaveDraft:g,onRevisit:p,onUpdateCurrentlyHelpedBy:x}){const[N,b]=f.useState("queue"),[A,I]=f.useState(null),[C,_]=f.useState(1),[W,$]=f.useState(""),[k,S]=f.useState(""),[P,O]=f.useState(""),[F,X]=f.useState(""),[B,R]=f.useState(""),[E,G]=f.useState("all"),Y=10,U=i.filter(h=>h.status==="waiting"),oe=i.filter(h=>h.status==="helped"),ie=oe.filter(h=>{if(W&&h.draft?.selectedFabricator&&!h.draft.selectedFabricator.companyName.toLowerCase().includes(W.toLowerCase())||k&&h.helpedTime&&h.helpedTime.toISOString().split("T")[0]!==k||P&&h.draft?.selectionSheetNumber&&!h.draft.selectionSheetNumber.toLowerCase().includes(P.toLowerCase())||F&&!`${h.firstName} ${h.lastName}`.toLowerCase().includes(F.toLowerCase())||B&&!h.phones.some(ne=>ne.toLowerCase().includes(B.toLowerCase())))return!1;if(E!=="all"){const w=h.draft?.isHold||!1;if(E==="yes"&&!w||E==="no"&&w)return!1}return!0}),q=[...ie].sort((h,w)=>!h.helpedTime||!w.helpedTime?0:w.helpedTime.getTime()-h.helpedTime.getTime()),ce=q.slice((C-1)*Y,C*Y),Ce=Math.ceil(q.length/Y),Ee=h=>{const ne=new Date().getTime()-h.getTime(),le=Math.floor(ne/6e4);if(le<1)return"Just now";if(le<60)return`${le} min`;const H=Math.floor(le/60),V=le%60;return`${H}h ${V}m`},Te=h=>h.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),Z=h=>h.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})+" "+h.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),se=(h,w)=>{g(h,w),w.step===3&&u(h)},re=h=>{x(h.id,s),I(h)};return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-12 h-12 object-contain"}),t.jsx("h2",{style:{color:"var(--color-gold)"},children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("span",{style:{color:"var(--color-text-white)"},children:s}),t.jsxs("button",{className:"relative p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)"},children:[t.jsx($p,{size:20,style:{color:"var(--color-text-gray)"}}),U.length>0&&t.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:U.length})]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})]}),t.jsxs("div",{className:"flex gap-6 mt-6",children:[t.jsxs("button",{onClick:()=>b("queue"),className:"pb-3 px-2",style:{color:N==="queue"?"var(--color-gold)":"var(--color-text-gray)",borderBottom:N==="queue"?"2px solid var(--color-gold)":"2px solid transparent"},children:["Queue ",U.length>0&&`(${U.length})`]}),t.jsx("button",{onClick:()=>b("history"),className:"pb-3 px-2",style:{color:N==="history"?"var(--color-gold)":"var(--color-text-gray)",borderBottom:N==="history"?"2px solid var(--color-gold)":"2px solid transparent"},children:"History"})]})]})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8",children:[N==="queue"&&t.jsx("div",{children:t.jsx("div",{className:"space-y-3",children:U.length===0?t.jsx("div",{className:"text-center py-12",style:{color:"var(--color-text-gray)"},children:"No customers in queue"}):U.map(h=>t.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-lg transition-all hover:bg-opacity-80",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:h.firstName.charAt(0).toUpperCase()}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("span",{className:"font-medium truncate",style:{color:"var(--color-text-white)"},children:[h.firstName,h.lastName].filter(Boolean).join(" ")}),h.currentlyHelpedBy?t.jsxs("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:["In Progress • ",h.currentlyHelpedBy]}):t.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"New"}),h.partySize&&(h.partySize.adults>1||h.partySize.minors>0)&&t.jsxs("span",{className:"px-2 py-0.5 rounded text-xs flex-shrink-0",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:[h.partySize.adults," ",h.partySize.adults===1?"Adult":"Adults",h.partySize.minors>0&&`, ${h.partySize.minors} ${h.partySize.minors===1?"Minor":"Minors"}`]})]}),t.jsxs("div",{className:"flex items-center gap-4 text-xs",style:{color:"var(--color-text-gray)"},children:[t.jsxs("span",{children:["Checked in at ",Te(h.checkInTime)]}),t.jsx("span",{children:"•"}),t.jsxs("span",{style:{color:"var(--color-gold)"},children:["Waiting ",Ee(h.checkInTime)]})]})]}),t.jsx("button",{onClick:()=>re(h),className:"flex-shrink-0 px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"View"})]},h.id))})}),N==="history"&&t.jsxs("div",{children:[t.jsxs("div",{className:"mb-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("h3",{style:{color:"var(--color-gold)",marginBottom:"16px"},children:"Filter History"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Customer Name"}),t.jsx("input",{type:"text",value:F,onChange:h=>{X(h.target.value),_(1)},placeholder:"Search by name...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone Number"}),t.jsx("input",{type:"text",value:B,onChange:h=>{R(h.target.value),_(1)},placeholder:"Search by phone...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Fabricator"}),t.jsx("input",{type:"text",value:W,onChange:h=>{$(h.target.value),_(1)},placeholder:"Search by fabricator...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Selection Sheet #"}),t.jsx("input",{type:"text",value:P,onChange:h=>{O(h.target.value),_(1)},placeholder:"Search by sheet #...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Date"}),t.jsx("input",{type:"date",value:k,onChange:h=>{S(h.target.value),_(1)},className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Hold Status"}),t.jsxs("select",{value:E,onChange:h=>{G(h.target.value),_(1)},className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Hold"}),t.jsx("option",{value:"no",children:"Not Hold"})]})]})]}),(F||B||W||P||k||E!=="all")&&t.jsx("button",{onClick:()=>{X(""),R(""),$(""),O(""),S(""),G("all"),_(1)},className:"mt-4 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear Filters"})]}),q.length===0?t.jsxs("div",{className:"text-center py-16",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"18px"},children:ie.length===0&&oe.length>0?"No matching results":"No history yet"}),t.jsx("p",{style:{color:"var(--color-text-gray)",marginTop:"8px"},children:ie.length===0&&oe.length>0?"Try adjusting your filters":"Helped customers will appear here"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{backgroundColor:"var(--color-background)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Sheet #"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Customer Name"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Phone Number"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Fabricator"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Check-in"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Helped At"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Hold"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"}})]})}),t.jsx("tbody",{children:ce.map((h,w)=>t.jsxs("tr",{style:{borderBottom:w<ce.length-1?"1px solid var(--color-border)":"none",backgroundColor:w%2===0?"transparent":"rgba(0, 0, 0, 0.2)"},children:[t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-white)",fontSize:"14px"},children:h.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-white)",fontSize:"14px"},children:[h.firstName,h.lastName].filter(Boolean).join(" ")}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:h.phones[0]||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:h.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:Z(h.checkInTime)}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:h.helpedTime?Z(h.helpedTime):"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:h.draft?.isHold?"var(--color-gold)":"var(--color-text-gray)",fontSize:"14px",fontWeight:h.draft?.isHold?"600":"normal"},children:h.draft?.isHold?"Yes":"No"}),t.jsx("td",{className:"px-4 py-4",children:t.jsx("button",{onClick:()=>I(h),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"},children:"View"})})]},h.id))})]})})}),Ce>1&&t.jsxs("div",{className:"flex justify-center items-center gap-4 mt-8",children:[t.jsx("button",{onClick:()=>_(Math.max(1,C-1)),disabled:C===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:C===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:C===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:C===1?"not-allowed":"pointer"},children:"Previous"}),t.jsxs("span",{style:{color:"var(--color-text-white)"},children:["Page ",C," of ",Ce]}),t.jsx("button",{onClick:()=>_(Math.min(Ce,C+1)),disabled:C===Ce,className:"px-4 py-2 rounded-lg",style:{backgroundColor:C===Ce?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:C===Ce?"var(--color-text-gray)":"var(--color-text-white)",cursor:C===Ce?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),A&&t.jsx(Zh,{customer:A,onClose:()=>I(null),onSubmit:se,onMarkAsHelped:u,onRevisit:p,staffUsername:s,isViewOnly:A.status==="helped",allCheckIns:i})]})}function zd({customer:s,onClose:d,onComplete:i}){const[u,g]=f.useState([]),[p,x]=f.useState(!1),N=s.priced||!1;f.useEffect(()=>{if(s.draft?.materials){const I=s.draft.materials.map(C=>{const _=parseFloat(C.size?.l)||0,W=parseFloat(C.size?.h)||0,$=parseFloat(C.price||"0")||0,k=C.priceType||"per SFT";return{material:C.soldAs||C.name,quantity:C.quantity,finish:C.finish||"Polished",length:_,height:W,price:$,priceType:k}});g(I)}},[s]);const b=(I,C,_)=>{if(N)return;const W=[...u];W[I]={...W[I],[C]:_},g(W)},A=async()=>{if(!u.every(C=>C.price>0)&&!N){alert("Please enter prices for all materials");return}x(!0),setTimeout(()=>{console.log("Sending quote to fabricator:",s.draft?.selectedFabricator),console.log("Quote details:",{customer:[s.firstName,s.lastName].filter(Boolean).join(" "),selectionSheetNumber:s.draft?.selectionSheetNumber,materials:u.map(C=>({quantity:C.quantity,material:C.material,finish:C.finish,length:C.length,height:C.height,price:C.price,priceType:C.priceType}))}),alert(`Quote ${N?"resent":"sent"} successfully to ${s.draft?.selectedFabricator?.companyName||"fabricator"}!`),x(!1),N||i(s.id),d()},1500)};return t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-5xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px"},children:[t.jsxs("div",{className:"sticky top-0 z-10 flex items-center justify-between p-6 border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-1",style:{color:"var(--color-gold)"},children:"Quote"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:[[s.firstName,s.lastName].filter(Boolean).join(" ")," • Sheet #",s.draft?.selectionSheetNumber]})]}),t.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4 p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("p",{style:{color:"var(--color-text-white)"},children:[s.firstName,s.lastName].filter(Boolean).join(" ")})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("p",{style:{color:"var(--color-text-white)"},children:s.draft?.selectedFabricator?.companyName||"Not assigned"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-3",style:{color:"var(--color-text-white)"},children:"Materials & Pricing"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{borderBottom:"2px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:[t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"80px"},children:"Quantity"}),t.jsx("th",{className:"text-left p-3 text-sm font-semibold",style:{color:"var(--color-gold)"},children:"Material Name"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"120px"},children:"Finish"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"110px"},children:"Length (in)"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"110px"},children:"Height (in)"}),t.jsx("th",{className:"text-right p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"140px"},children:"Price"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"120px"},children:"Type"})]})}),t.jsx("tbody",{children:u.map((I,C)=>t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)"},children:[t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:I.quantity,onChange:_=>b(C,"quantity",parseFloat(_.target.value)||0),disabled:N,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:N?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:N?"not-allowed":"text"},min:"0"})}),t.jsx("td",{className:"p-3",style:{color:"var(--color-text-white)"},children:I.material}),t.jsx("td",{className:"p-3 text-center",style:{color:"var(--color-text-white)"},children:I.finish}),t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:I.length,onChange:_=>b(C,"length",parseFloat(_.target.value)||0),disabled:N,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:N?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:N?"not-allowed":"text"},min:"0",step:"0.1"})}),t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:I.height,onChange:_=>b(C,"height",parseFloat(_.target.value)||0),disabled:N,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:N?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:N?"not-allowed":"text"},min:"0",step:"0.1"})}),t.jsx("td",{className:"p-3 text-right",children:t.jsxs("div",{className:"flex items-center justify-end",children:[t.jsx("span",{style:{color:"var(--color-gold)",marginRight:"4px",fontSize:"16px",fontWeight:"600"},children:"$"}),t.jsx("input",{type:"number",value:I.price,onChange:_=>b(C,"price",parseFloat(_.target.value)||0),disabled:N,className:"w-full px-2 py-2 rounded text-right",style:{backgroundColor:N?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:N?"not-allowed":"text"},placeholder:"0.00",min:"0",step:"0.01"})]})}),t.jsx("td",{className:"p-3 text-center",children:t.jsxs("select",{value:I.priceType,onChange:_=>b(C,"priceType",_.target.value),disabled:N,className:"w-full px-2 py-2 rounded",style:{backgroundColor:N?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:N?"not-allowed":"pointer"},children:[t.jsx("option",{value:"per SFT",children:"per SFT"}),t.jsx("option",{value:"per Slab",children:"per Slab"})]})})]},C))})]})})]}),N&&t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"rgba(34, 197, 94, 0.1)",border:"1px solid #22c55e"},children:t.jsx("p",{className:"text-center",style:{color:"#22c55e"},children:"✓ This quote has been priced and sent. You can resend the email if needed."})}),t.jsxs("div",{className:"flex gap-3 pt-4",children:[t.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:N?"Close":"Cancel"}),t.jsxs("button",{onClick:A,disabled:p,className:"flex-1 py-3 rounded-lg flex items-center justify-center gap-2",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:p?.6:1},children:[t.jsx(ah,{size:20}),p?"Sending...":N?"Resend Quote":"Send Quote to Fabricator"]})]})]})]})})}function rm({username:s,onLogout:d,checkIns:i,fabricators:u,onComplete:g,onResetHoldDate:p}){const[x,N]=f.useState(null),[b,A]=f.useState(""),[I,C]=f.useState(""),[_,W]=f.useState("all"),[$,k]=f.useState("all"),[S,P]=f.useState("all"),[O,F]=f.useState(!1),[X,B]=f.useState({}),[R,E]=f.useState("main"),[G,Y]=f.useState({}),[U,oe]=f.useState({}),[ie,q]=f.useState({}),[ce,Ce]=f.useState(new Date().getFullYear()),[Ee,Te]=f.useState(new Date().getMonth()),[Z,se]=f.useState(new Date().getFullYear()),[re,h]=f.useState(new Date().getMonth()),[w,ne]=f.useState(new Date().getFullYear()),[le,H]=f.useState(new Date().getMonth()),[V,pe]=f.useState(1),ke=10,be=[2025,2026,2027,2028],Oe=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],cr=f.useMemo(()=>i.filter(M=>M.status==="helped"&&M.draft?.materials&&M.draft.materials.length>0),[i]),Fr=M=>{const xe=new Date;return new Date(M).toDateString()===xe.toDateString()},wr=M=>{const xe=new Date,Re=new Date(M);return(xe.getTime()-Re.getTime())/(1e3*60*60*24)>5},{mainDashboardCheckIns:Ve,holdsNotConvertedCheckIns:br,ignoredCheckIns:jr}=f.useMemo(()=>{const M=[],xe=[],Re=[];return cr.forEach(_e=>{const L=G[_e.id]||!1,fe=_e.draft?.isHold||!1,Ae=!X[_e.id],Be=wr(_e.checkInTime);L?Re.push(_e):fe&&Ae&&Be?xe.push(_e):M.push(_e)}),{mainDashboardCheckIns:M,holdsNotConvertedCheckIns:xe,ignoredCheckIns:Re}},[cr,X,G]),Lr=f.useMemo(()=>R==="holds-not-converted"?br:R==="ignored"?jr:Ve,[R,Ve,br,jr]),We=f.useMemo(()=>[...Lr.filter(xe=>{const Re=`${xe.firstName} ${xe.lastName}`.toLowerCase().includes(b.toLowerCase())||xe.phones?.some(Be=>Be.includes(b))||xe.draft?.selectionSheetNumber?.includes(b),_e=!I||xe.draft?.selectedFabricator?.id===I,L=_==="all"||_==="hold"&&xe.draft?.isHold||_==="no-hold"&&!xe.draft?.isHold,fe=$==="all"||$==="priced"&&xe.priced||$==="not-priced"&&!xe.priced,Ae=S==="all"||S==="yes"&&X[xe.id]||S==="no"&&!X[xe.id];return Re&&_e&&L&&fe&&Ae})].sort((xe,Re)=>new Date(Re.checkInTime).getTime()-new Date(xe.checkInTime).getTime()),[Lr,b,I,_,$,S,X]),or=Math.ceil(We.length/ke),De=(V-1)*ke,ee=De+ke,ve=We.slice(De,ee);Yr.useEffect(()=>{pe(1)},[b,I,_,$,S,R]);const Se=M=>{N(M)},Ne=M=>{Y({...G,[M]:!0})},j=M=>{p&&p(M),q({...ie,[M]:!0})},de=M=>{oe({...U,[M]:!U[M]})},Qe=M=>new Date(M).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"});f.useMemo(()=>{const M=new Set;return cr.forEach(Re=>{const _e=new Date(Re.checkInTime),L=`${_e.getFullYear()}-${String(_e.getMonth()+1).padStart(2,"0")}`;if(M.add(L),Re.pricedTime){const fe=new Date(Re.pricedTime),Ae=`${fe.getFullYear()}-${String(fe.getMonth()+1).padStart(2,"0")}`;M.add(Ae)}}),Array.from(M).sort().reverse()},[cr]),f.useMemo(()=>{const M=new Date;return`${M.getFullYear()}-${String(M.getMonth()+1).padStart(2,"0")}`},[]),Yr.useEffect(()=>{Ee||Te(new Date().getMonth()),re||h(new Date().getMonth()),le||H(new Date().getMonth())},[]);const ze=(M,xe,Re)=>{const _e=new Date(M);return _e.getMonth()===xe&&_e.getFullYear()===Re},Ue=f.useMemo(()=>({pendingPricing:Ve.filter(M=>!M.priced).length,pricedToday:Ve.filter(M=>M.priced&&M.pricedTime&&Fr(M.pricedTime)).length,onHold:Ve.filter(M=>M.draft?.isHold).length,onHoldForMonth:Ve.filter(M=>M.draft?.isHold&&ze(M.checkInTime,re,Z)).length,pricedForMonth:Ve.filter(M=>M.priced&&M.pricedTime&&ze(M.pricedTime,Ee,ce)).length,convertedForMonth:Ve.filter(M=>X[M.id]&&ze(M.checkInTime,le,w)).length}),[Ve,X,Ee,ce,re,Z,le,w]);return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl",style:{color:"var(--color-gold)"},children:"Pricing Dashboard"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]})]})]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[t.jsxs("div",{className:"flex gap-2 mb-6",children:[t.jsx("button",{onClick:()=>E("main"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:R==="main"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:R==="main"?"var(--color-background)":"var(--color-text-white)",fontWeight:R==="main"?"600":"normal"},children:"Main Dashboard"}),t.jsxs("button",{onClick:()=>E("holds-not-converted"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:R==="holds-not-converted"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:R==="holds-not-converted"?"var(--color-background)":"var(--color-text-white)",fontWeight:R==="holds-not-converted"?"600":"normal"},children:["Holds Not Converted (",br.length,")"]}),t.jsxs("button",{onClick:()=>E("ignored"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:R==="ignored"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:R==="ignored"?"var(--color-background)":"var(--color-text-white)",fontWeight:R==="ignored"?"600":"normal"},children:["Ignored (",jr.length,")"]})]}),t.jsxs("div",{className:"mb-6 space-y-4",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(Cd,{className:"absolute left-3 top-1/2 -translate-y-1/2",size:20,style:{color:"var(--color-text-gray)"}}),t.jsx("input",{type:"text",value:b,onChange:M=>A(M.target.value),placeholder:"Search by name, phone, or sheet number...",className:"w-full pl-10 pr-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("button",{onClick:()=>F(!O),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-lg",style:{backgroundColor:O?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:O?"var(--color-background)":"var(--color-text-white)"},children:[t.jsx(Nd,{size:20}),"Filters"]})]}),O&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsxs("select",{value:I,onChange:M=>C(M.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Fabricators"}),u.map(M=>t.jsx("option",{value:M.id,children:M.companyName},M.id))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Hold Status"}),t.jsxs("select",{value:_,onChange:M=>W(M.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"hold",children:"On Hold"}),t.jsx("option",{value:"no-hold",children:"Not On Hold"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced Status"}),t.jsxs("select",{value:$,onChange:M=>k(M.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"priced",children:"Priced"}),t.jsx("option",{value:"not-priced",children:"Not Priced"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted Status"}),t.jsxs("select",{value:S,onChange:M=>P(M.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Converted"}),t.jsx("option",{value:"no",children:"Not Converted"})]})]})]})]}),R==="main"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Pending Pricing"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Ue.pendingPricing})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Priced Today"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Ue.pricedToday})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Ue.onHold})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Ue.pricedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:Ee,onChange:M=>Te(parseInt(M.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Oe.map((M,xe)=>t.jsx("option",{value:xe,children:M},xe))}),t.jsx("select",{value:ce,onChange:M=>Ce(parseInt(M.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:be.map(M=>t.jsx("option",{value:M,children:M},M))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Ue.onHoldForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:re,onChange:M=>h(parseInt(M.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Oe.map((M,xe)=>t.jsx("option",{value:xe,children:M},xe))}),t.jsx("select",{value:Z,onChange:M=>se(parseInt(M.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:be.map(M=>t.jsx("option",{value:M,children:M},M))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Ue.convertedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:le,onChange:M=>H(parseInt(M.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Oe.map((M,xe)=>t.jsx("option",{value:xe,children:M},xe))}),t.jsx("select",{value:w,onChange:M=>ne(parseInt(M.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:be.map(M=>t.jsx("option",{value:M,children:M},M))})]})]})]}),R==="holds-not-converted"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:br.filter(M=>M.draft?.isHold).length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Not Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:br.filter(M=>!X[M.id]).length})]})]}),R==="ignored"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Ignored"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:jr.length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:jr.filter(M=>M.draft?.isHold).length})]})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{style:{backgroundColor:"var(--color-background)"},children:t.jsxs("tr",{children:[t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sheet #"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Materials"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Status"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Converted"}),R==="ignored"&&t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Lot"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Date"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Actions"})]})}),t.jsx("tbody",{children:ve.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:R==="ignored"?9:8,className:"text-center p-8",style:{color:"var(--color-text-gray)"},children:"No customers found"})}):ve.map(M=>{const xe=X[M.id]||!1,Re=U[M.id]||!1,_e=ie[M.id]||!1;let L="transparent";return R==="ignored"&&Re?L="rgba(34, 197, 94, 0.2)":_e?L="rgba(239, 68, 68, 0.2)":xe?L="rgba(212, 167, 54, 0.15)":M.priced&&(L="rgba(34, 197, 94, 0.1)"),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",backgroundColor:L},children:[t.jsxs("td",{className:"p-4",children:[t.jsx("div",{style:{color:"var(--color-text-white)"},children:[M.firstName,M.lastName].filter(Boolean).join(" ")}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:M.phones?.[0]})]}),t.jsx("td",{className:"p-4",style:{color:"var(--color-gold)"},children:M.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:M.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"p-4 text-center",style:{color:"var(--color-text-white)"},children:M.draft?.materials?.length||0}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-2",children:[M.priced&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"Priced"}),M.draft?.isHold&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:"Hold"})]})}),t.jsx("td",{className:"p-4 text-center",children:t.jsxs("select",{value:xe?"Yes":"No",onChange:fe=>B({...X,[M.id]:fe.target.value==="Yes"}),className:"px-3 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:xe?"1px solid var(--color-gold)":"1px solid var(--color-border)",color:xe?"var(--color-gold)":"var(--color-text-white)",cursor:"pointer",fontWeight:xe?"600":"normal",fontSize:"13px"},children:[t.jsx("option",{value:"No",children:"No"}),t.jsx("option",{value:"Yes",children:"Yes"})]})}),R==="ignored"&&t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:M.draft?.materials&&M.draft.materials.length>0?t.jsx("div",{className:"flex flex-col gap-1",children:Array.from(new Set(M.draft.materials.map(fe=>fe.lot).filter(Boolean))).map((fe,Ae)=>t.jsx("span",{className:"text-sm",children:fe},Ae))}):"-"}),t.jsx("td",{className:"p-4 text-center text-sm",style:{color:"var(--color-text-gray)"},children:Qe(M.checkInTime)}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center",children:[t.jsx("button",{onClick:()=>Se(M),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},title:"View Pricing",children:t.jsx(vs,{size:18})}),R==="holds-not-converted"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>j(M.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(34, 197, 94, 0.7)",color:"var(--color-text-white)"},title:"Undo - Send back to Main",children:t.jsx(jd,{size:18})}),t.jsx("button",{onClick:()=>Ne(M.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(239, 68, 68, 0.8)",color:"var(--color-text-white)"},title:"Ignore",children:t.jsx(ct,{size:18})})]}),R==="ignored"&&t.jsx("button",{onClick:()=>de(M.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:Re?"rgba(34, 197, 94, 0.8)":"rgba(100, 100, 100, 0.5)",color:"var(--color-text-white)"},title:Re?"Unmark as Known":"Mark as Known",children:t.jsx(yd,{size:18})})]})})]},M.id)})})]})}),or>1&&t.jsxs("div",{className:"flex items-center justify-between px-4 py-4",style:{borderTop:"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Showing ",De+1," to ",Math.min(ee,We.length)," of ",We.length," customers"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>pe(V-1),disabled:V===1,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:V===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:V===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:V===1?"not-allowed":"pointer"},children:"Previous"}),t.jsx("div",{className:"flex gap-1",children:Array.from({length:or},(M,xe)=>xe+1).map(M=>t.jsx("button",{onClick:()=>pe(M),className:"px-3 py-2 rounded-lg transition-colors",style:{backgroundColor:V===M?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:V===M?"var(--color-background)":"var(--color-text-white)",fontWeight:V===M?"600":"normal",cursor:"pointer"},children:M},M))}),t.jsx("button",{onClick:()=>pe(V+1),disabled:V===or,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:V===or?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:V===or?"var(--color-text-gray)":"var(--color-text-white)",cursor:V===or?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),x&&t.jsx(zd,{customer:x,onClose:()=>N(null),onComplete:g})]})}function tm({username:s,onLogout:d,checkIns:i,fabricators:u,onComplete:g,onResetHoldDate:p,onPriceUpdate:x}){const[N,b]=f.useState(null),[A,I]=f.useState(""),[C,_]=f.useState(""),[W,$]=f.useState(""),[k,S]=f.useState("all"),[P,O]=f.useState("all"),[F,X]=f.useState("all"),[B,R]=f.useState(!1),[E,G]=f.useState({}),[Y,U]=f.useState("main"),[oe,ie]=f.useState({}),[q,ce]=f.useState({}),[Ce,Ee]=f.useState({}),[Te,Z]=f.useState(new Date().getFullYear()),[se,re]=f.useState(new Date().getMonth()),[h,w]=f.useState(new Date().getFullYear()),[ne,le]=f.useState(new Date().getMonth()),[H,V]=f.useState(new Date().getFullYear()),[pe,ke]=f.useState(new Date().getMonth()),[be,Oe]=f.useState(1),cr=10,Fr=[2025,2026,2027,2028],wr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ve=f.useMemo(()=>i.filter(L=>L.status==="helped"&&L.draft?.materials&&L.draft.materials.length>0),[i]),br=f.useMemo(()=>{const L=new Set;return Ve.forEach(fe=>{fe.draft?.salesPerson&&L.add(fe.draft.salesPerson)}),Array.from(L).sort()},[Ve]),jr=L=>{const fe=new Date;return new Date(L).toDateString()===fe.toDateString()},Lr=L=>{const fe=new Date,Ae=new Date(L);return(fe.getTime()-Ae.getTime())/(1e3*60*60*24)>5},{mainDashboardCheckIns:We,holdsNotConvertedCheckIns:or,ignoredCheckIns:De}=f.useMemo(()=>{const L=[],fe=[],Ae=[];return Ve.forEach(Be=>{const lr=oe[Be.id]||!1,hr=Be.draft?.isHold||!1,Or=!E[Be.id],Cr=Lr(Be.checkInTime);lr?Ae.push(Be):hr&&Or&&Cr?fe.push(Be):L.push(Be)}),{mainDashboardCheckIns:L,holdsNotConvertedCheckIns:fe,ignoredCheckIns:Ae}},[Ve,E,oe]),ee=f.useMemo(()=>Y==="holds-not-converted"?or:Y==="ignored"?De:We,[Y,We,or,De]),ve=f.useMemo(()=>[...ee.filter(fe=>{const Ae=`${fe.firstName} ${fe.lastName}`.toLowerCase().includes(A.toLowerCase())||fe.phones?.some(Vr=>Vr.includes(A))||fe.draft?.selectionSheetNumber?.includes(A),Be=!C||fe.draft?.selectedFabricator?.id===C,lr=!W||fe.draft?.salesPerson===W,hr=k==="all"||k==="hold"&&fe.draft?.isHold||k==="no-hold"&&!fe.draft?.isHold,Or=P==="all"||P==="priced"&&fe.priced||P==="not-priced"&&!fe.priced,Cr=F==="all"||F==="yes"&&E[fe.id]||F==="no"&&!E[fe.id];return Ae&&Be&&lr&&hr&&Or&&Cr})].sort((fe,Ae)=>new Date(Ae.checkInTime).getTime()-new Date(fe.checkInTime).getTime()),[ee,A,C,W,k,P,F,E]),Se=Math.ceil(ve.length/cr),Ne=(be-1)*cr,j=Ne+cr,de=ve.slice(Ne,j);Yr.useEffect(()=>{Oe(1)},[A,C,W,k,P,F,Y]);const Qe=L=>{b(L)},ze=L=>{ie({...oe,[L]:!0})},Ue=L=>{p&&p(L),Ee({...Ce,[L]:!0})},M=L=>{ce({...q,[L]:!q[L]})},xe=L=>new Date(L).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}),Re=(L,fe,Ae)=>{const Be=new Date(L);return Be.getMonth()===fe&&Be.getFullYear()===Ae},_e=f.useMemo(()=>{const L=We.filter(Le=>!Le.priced).length,fe=We.filter(Le=>Le.priced&&Le.pricedTime&&jr(Le.pricedTime)).length,Ae=We.filter(Le=>Le.draft?.isHold).length,Be=We.filter(Le=>Le.draft?.isHold&&Re(Le.checkInTime,ne,h)).length,lr=We.filter(Le=>Le.priced&&Le.pricedTime&&Re(Le.pricedTime,se,Te)).length,hr=We.filter(Le=>E[Le.id]&&Re(Le.checkInTime,pe,H)).length,Or=We.filter(Le=>E[Le.id]).length,Cr=W?We.filter(Le=>Le.draft?.salesPerson===W).length:We.length,Vr=W?We.filter(Le=>Le.draft?.salesPerson===W&&E[Le.id]).length:We.filter(Le=>E[Le.id]).length,pn=Cr>0?(Vr/Cr*100).toFixed(1):"0";return{pendingPricing:L,pricedToday:fe,onHold:Ae,onHoldForMonth:Be,pricedForMonth:lr,convertedForMonth:hr,totalConverted:Or,totalCustomers:Cr,convertedCustomers:Vr,conversionRate:pn}},[We,E,se,Te,ne,h,pe,H,W]);return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl",style:{color:"var(--color-gold)"},children:"Analysis Dashboard"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]})]})]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[t.jsxs("div",{className:"flex gap-2 mb-6",children:[t.jsx("button",{onClick:()=>U("main"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:Y==="main"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:Y==="main"?"var(--color-background)":"var(--color-text-white)",fontWeight:Y==="main"?"600":"normal"},children:"Main Dashboard"}),t.jsxs("button",{onClick:()=>U("holds-not-converted"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:Y==="holds-not-converted"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:Y==="holds-not-converted"?"var(--color-background)":"var(--color-text-white)",fontWeight:Y==="holds-not-converted"?"600":"normal"},children:["Holds Not Converted (",or.length,")"]}),t.jsxs("button",{onClick:()=>U("ignored"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:Y==="ignored"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:Y==="ignored"?"var(--color-background)":"var(--color-text-white)",fontWeight:Y==="ignored"?"600":"normal"},children:["Ignored (",De.length,")"]})]}),t.jsxs("div",{className:"mb-6 space-y-4",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(Cd,{className:"absolute left-3 top-1/2 -translate-y-1/2",size:20,style:{color:"var(--color-text-gray)"}}),t.jsx("input",{type:"text",value:A,onChange:L=>I(L.target.value),placeholder:"Search by name, phone, or sheet number...",className:"w-full pl-10 pr-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("button",{onClick:()=>R(!B),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-lg",style:{backgroundColor:B?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:B?"var(--color-background)":"var(--color-text-white)"},children:[t.jsx(Nd,{size:20}),"Filters"]})]}),B&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Sales Person"}),t.jsxs("select",{value:W,onChange:L=>$(L.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Sales People"}),br.map(L=>t.jsx("option",{value:L,children:L},L))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsxs("select",{value:C,onChange:L=>_(L.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Fabricators"}),u.map(L=>t.jsx("option",{value:L.id,children:L.companyName},L.id))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Hold Status"}),t.jsxs("select",{value:k,onChange:L=>S(L.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"hold",children:"On Hold"}),t.jsx("option",{value:"no-hold",children:"Not On Hold"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced Status"}),t.jsxs("select",{value:P,onChange:L=>O(L.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"priced",children:"Priced"}),t.jsx("option",{value:"not-priced",children:"Not Priced"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted Status"}),t.jsxs("select",{value:F,onChange:L=>X(L.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Converted"}),t.jsx("option",{value:"no",children:"Not Converted"})]})]})]})]}),Y==="main"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",children:[W&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)"},children:[t.jsxs("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:["Sales Person: ",W]}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.totalCustomers}),t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-text-gray)"},children:"Total Customers"})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.convertedCustomers}),t.jsxs("p",{className:"text-xs mt-1",style:{color:"var(--color-text-gray)"},children:[_e.conversionRate,"% Rate"]})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Pending Pricing"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.pendingPricing})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Priced Today"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.pricedToday})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.onHold})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:_e.totalConverted})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:_e.onHoldForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:ne,onChange:L=>le(parseInt(L.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:wr.map((L,fe)=>t.jsx("option",{value:fe,children:L},fe))}),t.jsx("select",{value:h,onChange:L=>w(parseInt(L.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Fr.map(L=>t.jsx("option",{value:L,children:L},L))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:_e.convertedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:pe,onChange:L=>ke(parseInt(L.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:wr.map((L,fe)=>t.jsx("option",{value:fe,children:L},fe))}),t.jsx("select",{value:H,onChange:L=>V(parseInt(L.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Fr.map(L=>t.jsx("option",{value:L,children:L},L))})]})]})]}),Y==="holds-not-converted"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:or.filter(L=>L.draft?.isHold).length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Not Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:or.filter(L=>!E[L.id]).length})]})]}),Y==="ignored"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Ignored"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:De.length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:De.filter(L=>L.draft?.isHold).length})]})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{style:{backgroundColor:"var(--color-background)"},children:t.jsxs("tr",{children:[t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sheet #"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sales Person"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Materials"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Status"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Converted"}),Y==="ignored"&&t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Lot"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Date"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Actions"})]})}),t.jsx("tbody",{children:de.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:Y==="ignored"?10:9,className:"text-center p-8",style:{color:"var(--color-text-gray)"},children:"No customers found"})}):de.map(L=>{const fe=E[L.id]||!1,Ae=q[L.id]||!1,Be=Ce[L.id]||!1;let lr="transparent";return Y==="ignored"&&Ae?lr="rgba(34, 197, 94, 0.2)":Be?lr="rgba(239, 68, 68, 0.2)":fe?lr="rgba(212, 167, 54, 0.15)":L.priced&&(lr="rgba(34, 197, 94, 0.1)"),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",backgroundColor:lr},children:[t.jsxs("td",{className:"p-4",children:[t.jsx("div",{style:{color:"var(--color-text-white)"},children:[L.firstName,L.lastName].filter(Boolean).join(" ")}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:L.phones?.[0]})]}),t.jsx("td",{className:"p-4",style:{color:"var(--color-gold)"},children:L.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:L.draft?.salesPerson||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:L.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"p-4 text-center",style:{color:"var(--color-text-white)"},children:L.draft?.materials?.length||0}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-2",children:[L.priced&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"Priced"}),L.draft?.isHold&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:"Hold"})]})}),t.jsx("td",{className:"p-4 text-center",children:t.jsxs("select",{value:fe?"Yes":"No",onChange:hr=>G({...E,[L.id]:hr.target.value==="Yes"}),className:"px-3 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:fe?"1px solid var(--color-gold)":"1px solid var(--color-border)",color:fe?"var(--color-gold)":"var(--color-text-white)",cursor:"pointer",fontWeight:fe?"600":"normal",fontSize:"13px"},children:[t.jsx("option",{value:"No",children:"No"}),t.jsx("option",{value:"Yes",children:"Yes"})]})}),Y==="ignored"&&t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:L.draft?.materials&&L.draft.materials.length>0?t.jsx("div",{className:"flex flex-col gap-1",children:Array.from(new Set(L.draft.materials.map(hr=>hr.lot).filter(Boolean))).map((hr,Or)=>t.jsx("span",{className:"text-sm",children:hr},Or))}):"-"}),t.jsx("td",{className:"p-4 text-center text-sm",style:{color:"var(--color-text-gray)"},children:xe(L.checkInTime)}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-1",children:[t.jsx("button",{onClick:()=>Qe(L),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},title:"View/Edit Pricing",children:t.jsx(vs,{size:18})}),Y==="holds-not-converted"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>Ue(L.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(34, 197, 94, 0.7)",color:"var(--color-text-white)"},title:"Undo - Send back to Main",children:t.jsx(jd,{size:18})}),t.jsx("button",{onClick:()=>ze(L.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(239, 68, 68, 0.8)",color:"var(--color-text-white)"},title:"Ignore",children:t.jsx(ct,{size:18})})]}),Y==="ignored"&&t.jsx("button",{onClick:()=>M(L.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:Ae?"rgba(34, 197, 94, 0.8)":"rgba(100, 100, 100, 0.5)",color:"var(--color-text-white)"},title:Ae?"Unmark as Known":"Mark as Known",children:t.jsx(yd,{size:18})})]})})]},L.id)})})]})}),Se>1&&t.jsxs("div",{className:"flex items-center justify-between px-4 py-4",style:{borderTop:"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Showing ",Ne+1," to ",Math.min(j,ve.length)," of ",ve.length," customers"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>Oe(be-1),disabled:be===1,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:be===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:be===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:be===1?"not-allowed":"pointer"},children:"Previous"}),t.jsx("div",{className:"flex gap-1",children:Array.from({length:Se},(L,fe)=>fe+1).map(L=>t.jsx("button",{onClick:()=>Oe(L),className:"px-3 py-2 rounded-lg transition-colors",style:{backgroundColor:be===L?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:be===L?"var(--color-background)":"var(--color-text-white)",fontWeight:be===L?"600":"normal",cursor:"pointer"},children:L},L))}),t.jsx("button",{onClick:()=>Oe(be+1),disabled:be===Se,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:be===Se?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:be===Se?"var(--color-text-gray)":"var(--color-text-white)",cursor:be===Se?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),N&&t.jsx(zd,{customer:N,onClose:()=>b(null),onComplete:L=>{x&&x(L,s),g(L)},isAnalysisMode:!0,analysisUser:s})]})}function om({onCustomerFound:s,onBack:d,checkIns:i}){const[u,g]=f.useState(""),[p,x]=f.useState(!1),[N,b]=f.useState(""),A=async()=>{if(!u.trim()){b("Please enter a phone number or email");return}x(!0),b("");try{const C=u.trim().toLowerCase(),_=i.find(W=>{const $=W.phones?.some(S=>S.replace(/\D/g,"").includes(C.replace(/\D/g,""))),k=W.emails?.some(S=>S.toLowerCase().includes(C));return $||k});_?s(_):b('No previous check-in found with this information. Please use "Check-In" for first-time visit.')}catch{b('No previous check-in found with this information. Please use "Check-In" for first-time visit.')}finally{x(!1)}},I=C=>{C.key==="Enter"&&A()};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-3 text-3xl",style:{color:"var(--color-gold)"},children:"Welcome Back!"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Enter your mobile number or email that you used during check-in"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Phone or Email"}),t.jsx("input",{type:"text",value:u,onChange:C=>{g(C.target.value),b("")},onKeyPress:I,placeholder:"(602) 555-1234 or email@example.com",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},disabled:p}),N&&t.jsx("p",{className:"mt-2 text-sm",style:{color:"#EF4444"},children:N})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("button",{onClick:A,disabled:p,className:"w-full py-3 rounded-lg",style:{backgroundColor:p?"var(--color-border)":"var(--color-gold)",color:"var(--color-background)",cursor:p?"not-allowed":"pointer",opacity:p?.6:1},children:p?"Searching...":"Find My Information"}),t.jsx("button",{onClick:d,disabled:p,className:"w-full py-3 rounded-lg",style:{backgroundColor:"transparent",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:p?"not-allowed":"pointer",opacity:p?.6:1},children:"Back to Home"})]})]})]})})}function nm({customerData:s,onNext:d,onBack:i}){const[u,g]=f.useState({firstName:s.firstName||"",lastName:s.lastName||"",street:s.street||"",suiteUnit:s.suiteUnit||"",city:s.city||"",state:s.state||"",zip:s.zip||"",country:s.country||"USA",phones:s.phones||[""],emails:s.emails||[""]}),[p,x]=f.useState({}),N=S=>S.split(" ").map(P=>P.charAt(0).toUpperCase()+P.slice(1).toLowerCase()).join(" "),b=()=>{const S={};u.firstName.trim()||(S.firstName="First name is required"),u.lastName.trim()||(S.lastName="Last name is required"),u.street.trim()||(S.street="Street address is required"),u.city.trim()||(S.city="City is required"),u.state.trim()||(S.state="State is required"),u.zip.trim()||(S.zip="ZIP code is required");const P=u.phones.filter(F=>F.trim());P.length===0?S.phones="At least one phone number is required":P.forEach((F,X)=>{F.replace(/\D/g,"").length!==10&&(S[`phone${X}`]="Phone must be 10 digits")});const O=u.emails.filter(F=>F.trim());return O.length===0?S.emails="At least one email is required":O.forEach((F,X)=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(F)||(S[`email${X}`]="Invalid email format")}),x(S),Object.keys(S).length===0},A=S=>{S.preventDefault(),b()&&d(u)},I=()=>{g({...u,phones:[...u.phones,""]})},C=S=>{u.phones.length>1&&g({...u,phones:u.phones.filter((P,O)=>O!==S)})},_=(S,P)=>{const O=[...u.phones];O[S]=P,g({...u,phones:O})},W=()=>{g({...u,emails:[...u.emails,""]})},$=S=>{u.emails.length>1&&g({...u,emails:u.emails.filter((P,O)=>O!==S)})},k=(S,P)=>{const O=[...u.emails];O[S]=P,g({...u,emails:O})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Review Your Information"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please review and update your details if needed"}),t.jsxs("form",{onSubmit:A,className:"space-y-4 sm:space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"First Name *"}),t.jsx("input",{type:"text",value:u.firstName,onChange:S=>g({...u,firstName:N(S.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.firstName?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.firstName&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.firstName})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Last Name *"}),t.jsx("input",{type:"text",value:u.lastName,onChange:S=>g({...u,lastName:N(S.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.lastName?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.lastName&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.lastName})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Street Address *"}),t.jsx("input",{type:"text",value:u.street,onChange:S=>g({...u,street:N(S.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.street?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.street&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.street})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:u.suiteUnit,onChange:S=>g({...u,suiteUnit:S.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"City *"}),t.jsx("input",{type:"text",value:u.city,onChange:S=>g({...u,city:N(S.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.city?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.city&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.city})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"State *"}),t.jsx("input",{type:"text",value:u.state,onChange:S=>g({...u,state:S.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.state?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.state&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.state})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"ZIP Code *"}),t.jsx("input",{type:"text",value:u.zip,onChange:S=>g({...u,zip:S.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p.zip?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),p.zip&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.zip})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Country *"}),t.jsxs("select",{value:u.country,onChange:S=>g({...u,country:S.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Phone Number(s) *"}),t.jsx("button",{type:"button",onClick:I,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"+ Add Phone"})]}),u.phones.map((S,P)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{type:"tel",value:S,onChange:O=>_(P,O.target.value),placeholder:"(602) 555-1234",className:"flex-1 px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p[`phone${P}`]?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),u.phones.length>1&&t.jsx("button",{type:"button",onClick:()=>C(P),className:"px-3 rounded",style:{backgroundColor:"#EF4444",color:"white"},children:"×"})]},P)),p.phones&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.phones})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Email Address(es) *"}),t.jsx("button",{type:"button",onClick:W,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"+ Add Email"})]}),u.emails.map((S,P)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{type:"email",value:S,onChange:O=>k(P,O.target.value),placeholder:"email@example.com",className:"flex-1 px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p[`email${P}`]?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),u.emails.length>1&&t.jsx("button",{type:"button",onClick:()=>$(P),className:"px-3 rounded",style:{backgroundColor:"#EF4444",color:"white"},children:"×"})]},P)),p.emails&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:p.emails})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:i,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}const lm=["Fabricator","Contractor","Kitchen & Bath","Architect","Builder","Friends/Family","Other"];function am({referralSources:s,onNext:d,onBack:i}){const[u,g]=f.useState(s.map(C=>C.type)),[p,x]=f.useState(s.reduce((C,_)=>(C[_.type]={name:_.name||"",phone:_.phone||""},C),{})),N=C=>C.split(" ").map(_=>_.charAt(0).toUpperCase()+_.slice(1).toLowerCase()).join(" "),b=C=>{if(u.includes(C)){g(u.filter(W=>W!==C));const _={...p};delete _[C],x(_)}else g([...u,C])},A=(C,_,W)=>{x({...p,[C]:{...p[C],name:_==="name"?W:p[C]?.name||"",phone:_==="phone"?W:p[C]?.phone||""}})},I=C=>{if(C.preventDefault(),u.length===0){alert("Please select at least one referral source");return}for(const W of u){if(!p[W]?.name?.trim()){alert(`Please enter a name for ${W}`);return}if(W!=="Fabricator"&&!p[W]?.phone?.trim()){alert(`Please enter a phone number for ${W}`);return}}const _=u.map(W=>({type:W,name:p[W]?.name,phone:p[W]?.phone}));d(_)};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Review Referral Sources"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg font-medium",style:{color:"var(--color-text-gray)"},children:"Update or add new referral sources"}),t.jsxs("form",{onSubmit:I,className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{className:"space-y-4",children:lm.map(C=>t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-opacity-50 transition-colors",style:{backgroundColor:u.includes(C)?"var(--color-background)":"transparent",border:`1px solid ${u.includes(C)?"var(--color-gold)":"var(--color-border)"}`},children:[t.jsx("input",{type:"checkbox",checked:u.includes(C),onChange:()=>b(C),className:"w-5 h-5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:C})]}),u.includes(C)&&t.jsxs("div",{className:"ml-6 sm:ml-8 mt-3 space-y-3",children:[t.jsx("input",{type:"text",value:p[C]?.name||"",onChange:_=>A(C,"name",N(_.target.value)),placeholder:"Name (required)",required:!0,className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("input",{type:"tel",value:p[C]?.phone||"",onChange:_=>A(C,"phone",_.target.value),placeholder:C==="Fabricator"?"Phone (optional)":"Phone (required)",required:C!=="Fabricator",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]},C))}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:i,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function sm({customerName:s,onSubmit:d,onBack:i}){const[u,g]=f.useState("party"),[p,x]=f.useState({adults:1,minors:0}),[N,b]=f.useState(!1),[A,I]=f.useState(""),[C,_]=f.useState([]),[W,$]=f.useState(0),[k,S]=f.useState([]),[P,O]=f.useState(0),[F,X]=f.useState(""),B=f.useRef(null),[R,E]=f.useState(!1),[G,Y]=f.useState(!1);f.useEffect(()=>{const w=B.current;if(w){const ne=w.getContext("2d");ne&&(ne.strokeStyle="#D4A736",ne.lineWidth=2,ne.lineCap="round")}},[u,W]);const U=(w,ne)=>{const le=ne.getBoundingClientRect(),H=ne.width/le.width,V=ne.height/le.height,pe="touches"in w?w.touches[0].clientX:w.clientX,ke="touches"in w?w.touches[0].clientY:w.clientY;return{x:(pe-le.left)*H,y:(ke-le.top)*V}},oe=w=>{E(!0);const ne=B.current;if(!ne)return;const le=ne.getContext("2d");if(!le)return;const{x:H,y:V}=U(w,ne);le.beginPath(),le.moveTo(H,V)},ie=w=>{if(!R)return;const ne=B.current;if(!ne)return;const le=ne.getContext("2d");if(!le)return;const{x:H,y:V}=U(w,ne);le.lineTo(H,V),le.stroke()},q=()=>{E(!1),Y(!0)},ce=()=>{const w=B.current;if(!w)return;const ne=w.getContext("2d");ne&&(ne.clearRect(0,0,w.width,w.height),Y(!1))},Ce=()=>{const w=B.current;return w?w.toDataURL("image/png"):""},Ee=()=>{g("main")},Te=()=>{if(!N){alert("Please agree to the terms before continuing");return}if(!G){alert("Please provide your signature");return}const w=Ce();I(w),ce(),p.adults>1?(g("additional"),$(0)):p.minors>0?(g("minors"),O(0)):re(w,[],[])},Z=()=>{const w=document.getElementById("additional-name")?.value;if(!w||!w.trim()){alert("Please enter a name");return}if(!G){alert("Please provide a signature");return}const ne=Ce(),le=[...C];le[W]={name:w.trim(),signature:ne},_(le),ce(),W<p.adults-2?$(W+1):p.minors>0?(g("minors"),O(0)):re(A,le,[])},se=()=>{if(!F.trim()){alert("Please enter the minor's name");return}const w=[...k];w[P]=F.trim(),S(w),X(""),P<p.minors-1?O(P+1):re(A,C,w)},re=(w,ne,le)=>{const H=[{name:s,signature:w,isMain:!0,isMinor:!1},...ne.map(V=>({name:V.name,signature:V.signature,isMain:!1,isMinor:!1})),...le.map(V=>({name:V,signature:"",isMain:!1,isMinor:!0}))];d({partySize:p,signature:w,visitors:H})},h=()=>{u==="party"?i():u==="main"?g("party"):u==="additional"?W===0?g("main"):$(W-1):u==="minors"&&(P===0?p.adults>1?(g("additional"),$(p.adults-2)):g("main"):O(P-1))};return u==="party"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Party Size"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"How many people are in your party?"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Number of Adults (including you)"}),t.jsx("input",{type:"number",min:"1",max:"20",value:p.adults,onChange:w=>x({...p,adults:parseInt(w.target.value)||1}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Number of Minors (under 18)"}),t.jsx("input",{type:"number",min:"0",max:"20",value:p.minors,onChange:w=>x({...p,minors:parseInt(w.target.value)||0}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:h,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:Ee,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})}):u==="main"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)",overflowY:"auto"},children:t.jsxs("div",{className:"w-full max-w-3xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Liability Waiver"}),t.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please read and sign below"}),t.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{className:"rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",maxHeight:"300px",overflowY:"auto",padding:"16px",color:"var(--color-text-white)",lineHeight:"1.6",fontSize:"13px"},children:t.jsx("p",{style:{whiteSpace:"pre-wrap"},children:`WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT

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

I HAVE READ THIS COVENANT NOT TO SUE, WAIVER, RELEASE, INFORMED CONSENT, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND HAVE SIGNED IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT, ASSURANCE OR GUARANTEE BEING MADE TO ME AND INTEND MY SIGNATURE TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF RELIANCE AND ALL PARTIES MENTIONED HEREIN TO THE GREATEST EXTENT ALLOWED BY LAW. THIS IS A RELEASE OF LIABILITY; DO NOT SIGN THIS DOCUMENT IF YOU DO NOT UNDERSTAND OR DO NOT AGREE WITH ITS TERMS.`})}),t.jsx("div",{children:t.jsxs("label",{className:"flex items-center gap-3 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:N,onChange:w=>b(w.target.checked),className:"w-5 h-5",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{style:{color:"var(--color-text-white)"},children:"I have read and agree to the terms above"})]})}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Your Signature"}),t.jsx("button",{type:"button",onClick:ce,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),t.jsx("canvas",{ref:B,width:600,height:200,onMouseDown:oe,onMouseMove:ie,onMouseUp:q,onMouseLeave:q,onTouchStart:oe,onTouchMove:ie,onTouchEnd:q,className:"w-full border rounded-lg cursor-crosshair",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"}})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:h,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:Te,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:p.adults>1||p.minors>0?"Next":"Submit"})]})]})]})}):u==="additional"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Visitor ",W+2," of ",p.adults]}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Additional adult signature required"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),t.jsx("input",{id:"additional-name",type:"text",defaultValue:C[W]?.name||"",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter full name"})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Signature"}),t.jsx("button",{type:"button",onClick:ce,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),t.jsx("canvas",{ref:B,width:600,height:200,onMouseDown:oe,onMouseMove:ie,onMouseUp:q,onMouseLeave:q,onTouchStart:oe,onTouchMove:ie,onTouchEnd:q,className:"w-full border rounded-lg cursor-crosshair",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"}})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:h,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:Z,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:W<p.adults-2||p.minors>0?"Next":"Submit"})]})]})]})}):u==="minors"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Minor ",P+1," of ",p.minors]}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please provide the minor's name"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),t.jsx("input",{type:"text",value:F,onChange:w=>X(w.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter full name"})]}),t.jsx("p",{className:"text-sm text-center",style:{color:"var(--color-text-gray)"},children:"No signature required (under 18)"}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:h,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:se,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:P<p.minors-1?"Next":"Submit"})]})]})]})}):null}function im({customerName:s,onReturnHome:d}){const[i,u]=f.useState(15),g=f.useRef(d);return f.useEffect(()=>{g.current=d},[d]),f.useEffect(()=>{const p=setInterval(()=>{u(x=>x<=1?(clearInterval(p),setTimeout(()=>g.current(),0),0):x-1)},1e3);return()=>clearInterval(p)},[]),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("div",{className:"flex justify-center mb-6",children:t.jsx(xs,{size:80,style:{color:"var(--color-success)"}})}),t.jsxs("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:["Thank You for Revisiting, ",s,"!"]}),t.jsx("p",{className:"mb-8",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"Your check-in is complete. A member of our team will be with you shortly."}),t.jsxs("p",{className:"mb-6",style:{color:"var(--color-text-gray)"},children:["Returning to home screen in ",t.jsx("span",{style:{color:"var(--color-gold)"},children:i})," seconds..."]}),t.jsx("button",{onClick:d,className:"px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return to Home"})]})})}function cm({onLogin:s}){const[d,i]=f.useState(""),[u,g]=f.useState(""),[p,x]=f.useState(""),N=b=>{b.preventDefault(),x(""),d==="staff2"&&u==="reliance"?s(d):x("Invalid credentials. Use staff2/reliance")};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-2 text-3xl",style:{color:"var(--color-gold)"},children:"Staff2 Login"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Queue Management"}),t.jsxs("form",{onSubmit:N,className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Username"}),t.jsx("input",{type:"text",value:d,onChange:b=>{i(b.target.value),x("")},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Enter username"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Password"}),t.jsx("input",{type:"password",value:u,onChange:b=>{g(b.target.value),x("")},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${p?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Enter password"})]}),p&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239, 68, 68, 0.1)",border:"1px solid #EF4444"},children:t.jsx("p",{style:{color:"#EF4444",fontSize:"14px"},children:p})}),t.jsx("button",{type:"submit",className:"w-full py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Login"})]})]})})}const Md=["Katia","Diane","Sarah","Ben","Dheeraj","Om","Raj","Alana","Aman","Maria","Susheel","Harsh","Walter","Olivia","Shaik","Swatik","Ras","Self","Jugal","Preet","Lenny"];function dm({customer:s,currentUsername:d,onView:i,onDone:u,onAssign:g}){const p=(s.partySize?.adults||0)+(s.partySize?.minors||0),x=s.isRevisit===!0,N=s.currentlyHelpedBy||"",b=A=>{if(!A)return"";const I=new Date(A);return isNaN(I.getTime())?"":I.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:N?"1px solid rgba(34, 197, 94, 0.4)":"1px solid var(--color-border)"},children:t.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[t.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:s.firstName?.charAt(0).toUpperCase()||"?"}),t.jsxs("div",{className:"flex flex-col gap-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[t.jsx("p",{className:"font-medium whitespace-nowrap",style:{color:"var(--color-text-white)"},children:[s.firstName,s.lastName].filter(Boolean).join(" ")}),t.jsx("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:s.phones?.[0]||"No phone"}),t.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap",style:{backgroundColor:x?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:x?"var(--color-gold)":"#3B82F6"},children:x?"Revisiting":"First Time"}),t.jsxs("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:["👥 ",p," visitor",p!==1?"s":""]}),s.checkInTime&&t.jsxs("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:["🕐 ",b(s.checkInTime)]})]}),N&&t.jsxs("p",{className:"text-xs",style:{color:"#22C55E"},children:["✓ Assigned to ",N]})]})]}),t.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[t.jsxs("select",{value:N,onChange:A=>g(s.id,A.target.value),className:"px-3 py-2 rounded-lg font-medium",style:{backgroundColor:N?"rgba(34, 197, 94, 0.1)":"var(--color-background)",border:N?"1px solid #22C55E":"1px solid var(--color-border)",color:N?"#22C55E":"var(--color-text-white)",cursor:"pointer"},children:[t.jsx("option",{value:"",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)"},children:"— Assign —"}),Md.map(A=>t.jsx("option",{value:A,style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)"},children:A},A))]}),t.jsx("button",{onClick:()=>i(s),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"View"}),t.jsx("button",{onClick:()=>u(s.id),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Done"})]})]})})}function um({customer:s,onClose:d,onSave:i}){const[u,g]=f.useState([s.firstName,s.lastName].filter(Boolean).join(" ")),[p,x]=f.useState({street:s.street||"",suiteUnit:s.suiteUnit||"",city:s.city||"",state:s.state||"",zip:s.zip||"",country:s.country||"USA",phones:s.phones||[""],emails:s.emails||[""]}),N=E=>E.split(" ").map(G=>G.charAt(0).toUpperCase()+G.slice(1).toLowerCase()).join(" "),b=()=>{x({...p,phones:[...p.phones,""]})},A=E=>{p.phones.length>1&&x({...p,phones:p.phones.filter((G,Y)=>Y!==E)})},I=(E,G)=>{const Y=[...p.phones];Y[E]=G,x({...p,phones:Y})},C=()=>{x({...p,emails:[...p.emails,""]})},_=E=>{p.emails.length>1&&x({...p,emails:p.emails.filter((G,Y)=>Y!==E)})},W=(E,G)=>{const Y=[...p.emails];Y[E]=G,x({...p,emails:Y})},[$,k]=f.useState([]),[S,P]=f.useState(!1),[O,F]=f.useState(!1),[X,B]=f.useState(null);f.useEffect(()=>{const E=s.phones?.[0];E&&(F(!0),fetch(`/api/images/customer/${encodeURIComponent(E)}`).then(G=>G.json()).then(G=>{G.success&&Array.isArray(G.data)&&k(G.data.filter(Y=>Y.images.length>0))}).catch(()=>{}).finally(()=>F(!1)))},[s.phones]);const R=()=>{if(!u.trim()){alert("Full name is required");return}const E=u.trim().split(/\s+/),G=E[0]||"",Y=E.slice(1).join(" ");i(s.id,{firstName:G,lastName:Y,...p})};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-6 z-50",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsxs("div",{className:"flex justify-between items-start mb-6",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl",style:{color:"var(--color-gold)"},children:[s.firstName,s.lastName].filter(Boolean).join(" ")}),t.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-text-gray)"},children:s.isRevisit?"Revisiting Customer":"First Time Customer"})]}),t.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Customer Information"}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Full Name *"}),t.jsx("input",{type:"text",value:u,onChange:E=>g(N(E.target.value)),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Street Address"}),t.jsx("input",{type:"text",value:p.street,onChange:E=>x({...p,street:N(E.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:p.suiteUnit,onChange:E=>x({...p,suiteUnit:E.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"City"}),t.jsx("input",{type:"text",value:p.city,onChange:E=>x({...p,city:N(E.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"State"}),t.jsx("input",{type:"text",value:p.state,onChange:E=>x({...p,state:E.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"ZIP"}),t.jsx("input",{type:"text",value:p.zip,onChange:E=>x({...p,zip:E.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Phones"}),p.phones.map((E,G)=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("input",{type:"text",value:E,onChange:Y=>I(G,Y.target.value),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("button",{onClick:()=>A(G),className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:16})})]},G)),t.jsx("button",{onClick:b,className:"py-2 px-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Add Phone"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Emails"}),p.emails.map((E,G)=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("input",{type:"text",value:E,onChange:Y=>W(G,Y.target.value),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("button",{onClick:()=>_(G),className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:16})})]},G)),t.jsx("button",{onClick:C,className:"py-2 px-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Add Email"})]})]}),s.referralSources&&s.referralSources.length>0&&t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Referral Information"}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:s.referralSources.map((E,G)=>t.jsxs("div",{className:"mb-3 last:mb-0",children:[t.jsxs("p",{style:{color:"var(--color-gold)"},children:["• ",E.type]}),E.name&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Name: ",E.name]}),E.phone&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Phone: ",E.phone]}),E.location&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Location: ",E.location]})]},G))})]}),s.partySize&&t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Party Information"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Adults"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:s.partySize.adults})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Minors"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:s.partySize.minors})]})]}),s.visitors&&s.visitors.length>0&&t.jsxs("div",{children:[t.jsx("h4",{className:"text-lg mb-3",style:{color:"var(--color-text-white)"},children:"Visitors & Signatures"}),t.jsx("div",{className:"space-y-4",children:s.visitors.map((E,G)=>t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:E.isMain?"2px solid var(--color-gold)":"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx("span",{className:"font-medium",style:{color:"var(--color-text-white)"},children:E.name}),E.isMain&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:"Main"}),E.isMinor&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",color:"var(--color-text-gray)"},children:"Minor (No signature required)"})]}),E.signature&&!E.isMinor&&t.jsxs("div",{children:[t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-text-gray)"},children:"Signature:"}),t.jsx("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"white",border:"1px solid var(--color-border)",maxWidth:"400px"},children:t.jsx("img",{src:E.signature,alt:`${E.name} signature`,style:{width:"100%",height:"auto",maxHeight:"150px",objectFit:"contain"}})})]})]},G))})]})]}),t.jsxs("div",{className:"mb-8 rounded-lg overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[t.jsxs("button",{onClick:()=>P(E=>!E),className:"w-full flex items-center justify-between px-4 py-3",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-white)",border:"none",cursor:"pointer"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ys,{size:16,style:{color:"var(--color-gold)"}}),t.jsx("span",{children:"Uploaded Images"}),!O&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212,167,54,0.15)",color:"var(--color-gold)"},children:$.reduce((E,G)=>E+G.images.length,0)})]}),S?t.jsx(kd,{size:16,style:{color:"var(--color-text-gray)"}}):t.jsx(bd,{size:16,style:{color:"var(--color-text-gray)"}})]}),S&&t.jsx("div",{className:"p-4",style:{borderTop:"1px solid var(--color-border)"},children:O?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Loading…"}):$.length===0?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No images uploaded."}):t.jsx("div",{className:"space-y-5",children:$.map(E=>t.jsxs("div",{children:[$.length>1&&t.jsxs("p",{className:"mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:["Visit: ",new Date(E.checkInTime).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),t.jsx("div",{className:"grid gap-3",style:{gridTemplateColumns:"repeat(auto-fill, minmax(110px, 1fr))"},children:E.images.map(G=>t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{aspectRatio:"1",border:"1px solid var(--color-border)",cursor:"pointer"},onClick:()=>B(G.image_url),children:[t.jsx("img",{src:G.image_url,alt:"Material",className:"w-full h-full object-cover"}),t.jsxs("div",{className:"absolute bottom-0 right-0 px-1.5 py-0.5 text-xs font-semibold rounded-tl-lg",style:{backgroundColor:"rgba(0,0,0,0.75)",color:"var(--color-gold)"},children:["×",G.quantity]})]},G.id))})]},E.checkInId))})})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Cancel"}),t.jsx("button",{onClick:R,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Save Changes"})]})]})}),X&&t.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},onClick:()=>B(null),children:[t.jsx("img",{src:X,alt:"Enlarged material",style:{maxWidth:"90vw",maxHeight:"90vh",display:"block",borderRadius:"8px"},onClick:E=>E.stopPropagation()}),t.jsx("button",{onClick:()=>B(null),style:{position:"absolute",top:"16px",right:"16px",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",color:"white",fontSize:"22px",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})]})}function pm({username:s,onLogout:d,checkIns:i,onMarkAsDone:u}){const[g,p]=f.useState("queue"),[x,N]=f.useState([]),[b,A]=f.useState([]),[I,C]=f.useState(null),[_,W]=f.useState(!1),[$,k]=f.useState(1),[S,P]=f.useState(1),O=15,[F,X]=f.useState(new Date().getMonth()+1),[B,R]=f.useState(new Date().getDate()),[E,G]=f.useState(new Date().getFullYear()),[Y,U]=f.useState(i),[oe,ie]=f.useState(0);f.useEffect(()=>{const H=Y.filter(V=>V.status==="waiting").sort((V,pe)=>new Date(V.checkInTime).getTime()-new Date(pe.checkInTime).getTime());N(H)},[Y]),f.useEffect(()=>{if(g!=="history")return;const H=String(F).padStart(2,"0"),V=String(B).padStart(2,"0");fetch(`/api/check-ins?date=${E}-${H}-${V}`).then(pe=>pe.json()).then(pe=>{pe.success&&Array.isArray(pe.data)&&A(pe.data)}).catch(()=>{})},[g,F,B,E,oe]),f.useEffect(()=>{fetch("/api/check-ins").then(V=>V.json()).then(V=>{V.success&&Array.isArray(V.data)&&U(V.data)}).catch(()=>{});const H=new EventSource("/api/check-ins/events");return H.onmessage=V=>{try{const pe=JSON.parse(V.data);pe.type==="update"&&Array.isArray(pe.data)&&(U(pe.data),ie(ke=>ke+1))}catch{}},H.onerror=()=>{},()=>H.close()},[]);const q=async H=>{C(H),W(!0);try{const pe=await(await fetch(`/api/check-ins/${H.id}`)).json();pe.success&&pe.data&&C(pe.data)}catch{}},ce=async H=>{const V=new Date().toISOString(),ke=Y.find(be=>be.id===H)?.currentlyHelpedBy||null;U(be=>be.map(Oe=>Oe.id===H?{...Oe,status:"done",helpedTime:V,helpedBy:ke}:Oe));try{await fetch(`/api/check-ins/${H}/done`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({helpedBy:ke})})}catch{U(be=>be.map(Oe=>Oe.id===H?{...Oe,status:"waiting",helpedTime:null}:Oe))}u(H)},Ce=async(H,V)=>{U(pe=>pe.map(ke=>ke.id===H?{...ke,currentlyHelpedBy:V||null}:ke));try{await fetch(`/api/check-ins/${H}/claim`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({helpedBy:V})})}catch{}},Ee=async(H,V)=>{U(pe=>pe.map(ke=>ke.id===H?{...ke,...V}:ke)),W(!1)},Te=b.length,Z=b.filter(H=>!H.isRevisit).length,se=b.filter(H=>H.isRevisit).length,re={};for(const H of b){const V=H.helpedBy;V&&(re[V]=(re[V]||0)+1)}const h=Md.filter(H=>re[H]).map(H=>({name:H,count:re[H]})),w=["January","February","March","April","May","June","July","August","September","October","November","December"],ne=Array.from({length:31},(H,V)=>V+1),le=[2024,2025,2026,2027];return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("header",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsx("span",{className:"text-xl font-medium",style:{color:"var(--color-text-white)"},children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("span",{style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:[t.jsx(un,{size:18}),"Logout"]})]})]})}),t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"flex px-6",children:[t.jsxs("button",{onClick:()=>p("queue"),className:"px-6 py-4 font-medium border-b-2",style:{color:g==="queue"?"var(--color-gold)":"var(--color-text-gray)",borderColor:g==="queue"?"var(--color-gold)":"transparent"},children:["Queue (",x.length,")"]}),t.jsx("button",{onClick:()=>p("history"),className:"px-6 py-4 font-medium border-b-2",style:{color:g==="history"?"var(--color-gold)":"var(--color-text-gray)",borderColor:g==="history"?"var(--color-gold)":"transparent"},children:"History"})]})}),t.jsx("div",{className:"p-6",children:g==="queue"?t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-6",style:{color:"var(--color-text-white)"},children:"Customer Queue"}),x.length===0?t.jsx("div",{className:"text-center py-12 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No customers in queue"})}):t.jsx("div",{className:"space-y-4",children:x.slice(($-1)*O,$*O).map(H=>t.jsx(dm,{customer:H,currentUsername:s,onView:q,onDone:ce,onAssign:Ce},H.id))}),x.length>O&&t.jsxs("div",{className:"flex justify-center mt-4",children:[t.jsx("button",{onClick:()=>k($-1),disabled:$===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Previous"}),t.jsxs("span",{className:"mx-4",style:{color:"var(--color-text-gray)"},children:["Page ",$," of ",Math.ceil(x.length/O)]}),t.jsx("button",{onClick:()=>k($+1),disabled:$*O>=x.length,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Next"})]})]}):t.jsxs("div",{children:[t.jsxs("div",{className:"mb-6",children:[t.jsx("h2",{className:"text-2xl mb-4",style:{color:"var(--color-text-white)"},children:"Daily Visitors"}),t.jsxs("div",{className:"flex flex-wrap gap-4 mb-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Month"}),t.jsx("select",{value:F,onChange:H=>X(parseInt(H.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:w.map((H,V)=>t.jsx("option",{value:V+1,children:H},V))})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Day"}),t.jsx("select",{value:B,onChange:H=>R(parseInt(H.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:ne.map(H=>t.jsx("option",{value:H,children:H},H))})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Year"}),t.jsx("select",{value:E,onChange:H=>G(parseInt(H.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:le.map(H=>t.jsx("option",{value:H,children:H},H))})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Visitors"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--color-gold)"},children:Te})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"New Customers"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"#3B82F6"},children:Z})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Revisits"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--color-gold)"},children:se})]})]}),h.length>0&&t.jsxs("div",{className:"p-4 rounded-lg mb-6",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm font-medium mb-3",style:{color:"var(--color-text-gray)"},children:"Staff Summary"}),t.jsx("div",{className:"flex flex-wrap gap-3",children:h.map(({name:H,count:V})=>t.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("span",{style:{color:"var(--color-text-white)"},children:H}),t.jsx("span",{className:"px-2 py-0.5 rounded-full text-xs font-bold",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:V})]},H))})]})]}),b.length===0?t.jsx("div",{className:"text-center py-12 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No visitors for selected date"})}):t.jsx("div",{className:"space-y-4",children:b.slice((S-1)*O,S*O).map(H=>t.jsx("div",{className:"p-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},onClick:()=>q(H),children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:H.firstName?.charAt(0).toUpperCase()||"?"}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("p",{className:"font-medium",style:{color:"var(--color-text-white)"},children:[H.firstName,H.lastName].filter(Boolean).join(" ")}),t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:H.isRevisit?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:H.isRevisit?"var(--color-gold)":"#3B82F6"},children:H.isRevisit?"Revisiting":"First Time"})]}),t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:H.phones?.[0]||"No phone"}),H.helpedBy&&t.jsxs("p",{className:"text-xs",style:{color:"#22C55E"},children:["✓ Helped by ",H.helpedBy]})]})]})]}),t.jsx("div",{className:"text-right",children:t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["👥 ",(H.partySize?.adults||0)+(H.partySize?.minors||0)," visitors"]})})]})},H.id))}),b.length>O&&t.jsxs("div",{className:"flex justify-center mt-4",children:[t.jsx("button",{onClick:()=>P(S-1),disabled:S===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Previous"}),t.jsxs("span",{className:"mx-4",style:{color:"var(--color-text-gray)"},children:["Page ",S," of ",Math.ceil(b.length/O)]}),t.jsx("button",{onClick:()=>P(S+1),disabled:S*O>=b.length,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Next"})]})]})}),_&&I&&t.jsx(um,{customer:I,onClose:()=>{W(!1),C(null)},onSave:Ee})]})}const an=15;function hm({customerName:s,checkInId:d,authToken:i,onDone:u}){const[g,p]=f.useState([]),[x,N]=f.useState({}),[b,A]=f.useState(!1),[I,C]=f.useState(""),_=f.useRef(null),W=f.useRef({});f.useEffect(()=>{fetch(`/api/images/check-in/${d}`,{headers:{Authorization:`Bearer ${i}`}}).then(O=>O.json()).then(O=>{if(O.success&&Array.isArray(O.data)){p(O.data);const F={};O.data.forEach(X=>{F[X.id]=X.quantity}),N(F)}}).catch(()=>{})},[d,i]);const $=async O=>{const F=Array.from(O.target.files||[]);if(!F.length)return;const X=an-g.length,B=F.slice(0,X);if(B.length===0){C(`You've reached the maximum of ${an} images.`),_.current&&(_.current.value="");return}C(F.length>B.length?`Only ${B.length} image(s) added — ${an} image maximum.`:""),A(!0);const R=new FormData;B.forEach(E=>R.append("images",E)),R.append("quantities",JSON.stringify(B.map(()=>1)));try{const E=await fetch("/api/images/upload",{method:"POST",headers:{Authorization:`Bearer ${i}`},body:R}),G=await E.json();if(!E.ok)C(G.error||"Upload failed. Please try again.");else{const Y=G.data;p(U=>[...U,...Y]),N(U=>{const oe={...U};return Y.forEach(ie=>{oe[ie.id]=ie.quantity}),oe})}}catch{C("Upload failed. Please check your connection.")}finally{A(!1),_.current&&(_.current.value="")}},k=f.useCallback((O,F)=>{N(X=>{const B=X[O]??1,R=Math.max(1,Math.min(99,B+F));return R===B?X:(W.current[O]&&clearTimeout(W.current[O]),W.current[O]=setTimeout(async()=>{try{await fetch(`/api/images/${O}/quantity`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({quantity:R})})}catch{}},600),{...X,[O]:R})})},[i]),S=async O=>{p(F=>F.filter(X=>X.id!==O)),N(F=>{const X={...F};return delete X[O],X});try{await fetch(`/api/images/${O}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`}})}catch{}},P=g.length>=an;return t.jsx("div",{className:"min-h-screen p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl mx-auto",children:[t.jsxs("div",{className:"mb-8 text-center",children:[t.jsxs("h1",{style:{color:"var(--color-gold)"},children:["Welcome, ",s,"!"]}),t.jsx("p",{className:"mt-2",style:{color:"var(--color-text-gray)"},children:"Upload photos of materials you're interested in (optional)"})]}),t.jsxs("div",{className:"mb-4 text-center",children:[t.jsx("input",{ref:_,type:"file",accept:"image/*",multiple:!0,className:"hidden",onChange:$,disabled:b||P}),t.jsxs("button",{onClick:()=>_.current?.click(),disabled:b||P,className:"px-6 py-3 rounded-lg font-semibold",style:{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"8px",whiteSpace:"nowrap",backgroundColor:P?"var(--color-border)":"var(--color-gold)",color:P?"var(--color-text-gray)":"var(--color-background)",cursor:P?"not-allowed":"pointer"},children:[t.jsx(fh,{size:20}),b?"Uploading…":"Add Photos"]})]}),t.jsxs("p",{className:"mb-4 text-center",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:[g.length," / ",an," images"]}),I&&t.jsx("div",{className:"mb-4 p-3 rounded-lg",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{className:"text-center",style:{color:"var(--color-error)"},children:I})}),g.length>0&&t.jsx("div",{className:"space-y-3 mb-8",children:g.map(O=>t.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("img",{src:O.image_url,alt:"Uploaded material",className:"rounded object-cover flex-shrink-0",style:{width:120,height:120}}),t.jsx("div",{className:"flex-1"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>k(O.id,-1),className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:t.jsx(wd,{size:14})}),t.jsx("span",{className:"w-8 text-center",style:{color:"var(--color-text-white)",fontWeight:600},children:x[O.id]??O.quantity}),t.jsx("button",{onClick:()=>k(O.id,1),className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:t.jsx(dn,{size:14})})]}),t.jsx("button",{onClick:()=>S(O.id),className:"w-8 h-8 rounded-full flex items-center justify-center ml-2",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)",color:"var(--color-error)"},children:t.jsx(ct,{size:16})})]},O.id))}),g.length===0&&!b&&t.jsxs("div",{className:"mb-8 py-12 text-center rounded-lg",style:{border:"2px dashed var(--color-border)"},children:[t.jsx(ys,{size:48,className:"mx-auto mb-3",style:{color:"var(--color-text-gray)"}}),t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No photos uploaded yet"})]}),t.jsx("button",{onClick:u,disabled:b,className:"w-full py-4 rounded-lg font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:b?.7:1},children:"Done"})]})})}function mm({checkInId:s,authToken:d,onDone:i}){const[u,g]=f.useState(0),[p,x]=f.useState(0),[N,b]=f.useState(""),[A,I]=f.useState(!1),[C,_]=f.useState(!1),[W,$]=f.useState(15),k=f.useRef(i);f.useEffect(()=>{k.current=i},[i]),f.useEffect(()=>{if(!C)return;const P=setInterval(()=>{$(O=>O<=1?(clearInterval(P),setTimeout(()=>k.current(),0),0):O-1)},1e3);return()=>clearInterval(P)},[C]);const S=async P=>{if(P){_(!0);return}if(u!==0){I(!0);try{await fetch("/api/survey",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify({starRating:u,comment:N.trim()||void 0})})}catch{}finally{I(!1),_(!0)}}};return C?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx(xs,{size:72,className:"mx-auto mb-6",style:{color:"var(--color-success)"}}),t.jsx("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:"Thank You!"}),t.jsx("p",{className:"mb-6",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"We appreciate your feedback."}),t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:["Returning to home screen in"," ",t.jsx("span",{style:{color:"var(--color-gold)"},children:W})," seconds…"]}),t.jsx("button",{onClick:()=>k.current(),className:"mt-6 px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return Home"})]})}):t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("h1",{className:"text-center mb-2",style:{color:"var(--color-gold)"},children:"How was your experience?"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Your feedback helps us improve."}),t.jsx("div",{className:"flex justify-center gap-3 mb-8",children:[1,2,3,4,5].map(P=>{const O=P<=(p||u);return t.jsx("button",{onClick:()=>g(P),onMouseEnter:()=>x(P),onMouseLeave:()=>x(0),className:"p-2 rounded-lg transition-transform",style:{background:"none",border:"none",transform:p===P?"scale(1.15)":"scale(1)",cursor:"pointer"},"aria-label":`${P} star${P!==1?"s":""}`,children:t.jsx(wl,{size:48,fill:O?"var(--color-gold)":"none",style:{color:O?"var(--color-gold)":"var(--color-border)"}})},P)})}),t.jsxs("div",{className:"mb-8",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Any additional feedback?"}),t.jsx("textarea",{value:N,onChange:P=>b(P.target.value),rows:4,placeholder:"Optional — share your thoughts…",className:"w-full px-4 py-3 rounded-lg resize-none",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsx("button",{onClick:()=>S(!1),disabled:A||u===0,className:"w-full py-4 rounded-lg mb-4 font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:A||u===0?.5:1,cursor:u===0?"not-allowed":"pointer"},children:A?"Submitting…":"Submit"}),t.jsx("div",{className:"text-center",children:t.jsx("button",{onClick:()=>S(!0),disabled:A,style:{color:"var(--color-text-gray)",background:"none",border:"none",cursor:"pointer",fontSize:"14px",textDecoration:"underline"},children:"Skip"})})]})})}function fm({rating:s}){return t.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4,5].map(d=>t.jsx(wl,{size:16,fill:d<=s?"var(--color-gold)":"none",style:{color:d<=s?"var(--color-gold)":"var(--color-border)"}},d))})}function gm({onLogout:s}){const[d,i]=f.useState([]),[u,g]=f.useState(null),[p,x]=f.useState(1),[N,b]=f.useState(""),[A,I]=f.useState(""),[C,_]=f.useState(!1),[W,$]=f.useState(""),k=f.useCallback(async(F,X,B)=>{_(!0),$("");try{const R=new URLSearchParams({page:String(F)});X&&R.set("startDate",X),B&&R.set("endDate",B);const E=await fetch(`/api/survey/responses?${R}`),G=await E.json();E.ok?(i(G.data),g(G.meta)):$(G.error||"Failed to load responses.")}catch{$("Failed to load responses. Please check your connection.")}finally{_(!1)}},[]);f.useEffect(()=>{k(p,N,A)},[p,k]);const S=()=>{x(1),k(1,N,A)},P=()=>{b(""),I(""),x(1),k(1,"","")},O=u?Math.max(...[1,2,3,4,5].map(F=>u.distribution[F]??0),1):1;return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("header",{style:{backgroundColor:"var(--color-card)",borderBottom:"1px solid var(--color-border)",padding:"16px 24px"},children:t.jsxs("div",{className:"max-w-6xl mx-auto flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h2",{style:{color:"var(--color-gold)",margin:0},children:"Customer Ratings"}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",margin:0},children:"Survey responses"})]})]}),t.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:[t.jsx(un,{size:16}),"Logout"]})]})}),t.jsxs("div",{className:"max-w-6xl mx-auto p-6 space-y-6",children:[u&&t.jsxs("div",{className:"grid gap-4",style:{gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))"},children:[t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:8},children:"Average Rating"}),t.jsxs("div",{className:"flex items-end gap-2",children:[t.jsx("span",{style:{color:"var(--color-gold)",fontSize:"40px",fontWeight:700,lineHeight:1},children:u.averageRating.toFixed(1)}),t.jsx(wl,{size:24,fill:"var(--color-gold)",style:{color:"var(--color-gold)",marginBottom:4}})]}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginTop:4},children:"out of 5"})]}),t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:8},children:"Total Responses"}),t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"40px",fontWeight:700,lineHeight:1},children:u.total}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginTop:4},children:"submissions"})]}),t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",gridColumn:"span 2"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:12},children:"Rating Distribution"}),t.jsx("div",{className:"space-y-2",children:[5,4,3,2,1].map(F=>{const X=u.distribution[F]??0,B=u.total>0?X/u.total*100:0,R=O>0?X/O*100:0;return t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",style:{width:80},children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"13px",width:12,textAlign:"right"},children:F}),t.jsx(wl,{size:12,fill:"var(--color-gold)",style:{color:"var(--color-gold)"}})]}),t.jsx("div",{className:"flex-1 rounded-full overflow-hidden",style:{height:8,backgroundColor:"var(--color-background)"},children:t.jsx("div",{className:"h-full rounded-full",style:{width:`${R}%`,backgroundColor:"var(--color-gold)",transition:"width 0.3s ease"}})}),t.jsxs("span",{style:{color:"var(--color-text-gray)",fontSize:"12px",width:60,textAlign:"right"},children:[X," (",B.toFixed(0),"%)"]})]},F)})})]})]}),t.jsxs("div",{className:"p-4 rounded-xl flex flex-wrap items-end gap-4",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1",style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"From"}),t.jsx("input",{type:"date",value:N,onChange:F=>b(F.target.value),className:"px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",colorScheme:"dark"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1",style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"To"}),t.jsx("input",{type:"date",value:A,onChange:F=>I(F.target.value),className:"px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",colorScheme:"dark"}})]}),t.jsx("button",{onClick:S,className:"px-5 py-2 rounded-lg font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Apply"}),(N||A)&&t.jsx("button",{onClick:P,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),W&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{style:{color:"var(--color-error)"},children:W})}),t.jsx("div",{className:"rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsx("tr",{style:{backgroundColor:"var(--color-card)",borderBottom:"1px solid var(--color-border)"},children:["Date","Customer","Rating","Comment"].map(F=>t.jsx("th",{className:"text-left px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"13px",fontWeight:600},children:F},F))})}),t.jsx("tbody",{children:C?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"px-4 py-12 text-center",style:{color:"var(--color-text-gray)"},children:"Loading…"})}):d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"px-4 py-12 text-center",style:{color:"var(--color-text-gray)"},children:"No survey responses found."})}):d.map((F,X)=>t.jsxs("tr",{style:{backgroundColor:X%2===0?"var(--color-background)":"var(--color-card)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"14px",whiteSpace:"nowrap"},children:new Date(F.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-white)",fontSize:"14px"},children:F.customerName}),t.jsx("td",{className:"px-4 py-3",children:t.jsx(fm,{rating:F.starRating})}),t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"14px",maxWidth:400},children:F.comment||t.jsx("span",{style:{fontStyle:"italic",opacity:.5},children:"No comment"})})]},F.id))})]})}),u&&u.totalPages>1&&t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:["Page ",u.page," of ",u.totalPages," · ",u.total," total"]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{onClick:()=>x(F=>Math.max(1,F-1)),disabled:p<=1,className:"flex items-center gap-1 px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:p<=1?"var(--color-text-gray)":"var(--color-text-white)",cursor:p<=1?"not-allowed":"pointer",opacity:p<=1?.5:1},children:[t.jsx(Qp,{size:16})," Prev"]}),t.jsxs("button",{onClick:()=>x(F=>Math.min(u.totalPages,F+1)),disabled:p>=u.totalPages,className:"flex items-center gap-1 px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:p>=u.totalPages?"var(--color-text-gray)":"var(--color-text-white)",cursor:p>=u.totalPages?"not-allowed":"pointer",opacity:p>=u.totalPages?.5:1},children:["Next ",t.jsx(Kp,{size:16})]})]})]})]})]})}function xm(s){const d=s.materials||[],i=d.length>0||s.selectionSheetNumber||s.fabricator||s.draftStep>0;return{id:s.id,isRevisit:s.isRevisit||!1,firstName:s.firstName,lastName:s.lastName,street:s.street,suiteUnit:s.suiteUnit||"",city:s.city,state:s.state,zip:s.zip,country:s.country,phones:s.phones||[],emails:s.emails||[],referralSources:s.referralSources||[],signature:s.signature||"",checkInTime:new Date(s.checkInTime),helpedTime:s.helpedTime?new Date(s.helpedTime):void 0,status:s.status,currentlyHelpedBy:s.currentlyHelpedBy||void 0,partySize:s.partySize||{adults:1,minors:0},visitors:s.visitors||[],draft:i?{step:s.status==="helped"?3:s.draftStep||0,editedCustomerData:{},materials:d,selectedFabricator:s.fabricator||void 0,helpedBy:s.helpedBy||void 0,selectionSheetNumber:s.selectionSheetNumber||"",isHold:d.some(u=>u.hold)}:void 0}}function vm(){const[s,d]=f.useState(()=>{const ee=localStorage.getItem("staff2Session");if(ee)try{const{expiry:ve}=JSON.parse(ee);if(Date.now()<ve)return"staff2-dashboard"}catch{}return"home"}),[i,u]=f.useState({}),[g,p]=f.useState([]),[x,N]=f.useState(""),[b,A]=f.useState({adults:1,minors:0}),[I,C]=f.useState(!1),[_,W]=f.useState(null),[$,k]=f.useState([]),[S,P]=f.useState(0),[O,F]=f.useState([]),[X,B]=f.useState(!1),[R,E]=f.useState(null),[G,Y]=f.useState(()=>{const ee=localStorage.getItem("staff2Session");if(ee)try{const{username:ve,expiry:Se}=JSON.parse(ee);if(Date.now()<Se)return ve;localStorage.removeItem("staff2Session")}catch{localStorage.removeItem("staff2Session")}return""}),[U,oe]=f.useState(null),[ie,q]=f.useState(null);f.useEffect(()=>{fetch("/api/check-ins").then(ee=>ee.json()).then(ee=>{ee.success&&Array.isArray(ee.data)&&p(ee.data.map(xm))}).catch(ee=>console.error("Failed to load check-ins:",ee))},[]);const ce=ee=>{u({...i,...ee,referralSources:[]}),d("customer-step3a")},Ce=ee=>{u({...i,...ee}),d("customer-step3a")},Ee=ee=>{A(ee),d("customer-step3b")},Te=ee=>{console.log("=== STEP 3B NEXT ==="),console.log("Signature data received:",{hasSignature:!!ee.signature,signatureLength:ee.signature?.length,signaturePreview:ee.signature?.substring(0,50),hasEsignConsent:!!ee.esignConsentTimestamp,sessionId:ee.sessionId,deviceType:ee.deviceInfo?.deviceType}),W(ee),b.adults>1?(P(0),k([]),d("customer-step3c")):b.minors>0?d("customer-step3d"):h(void 0,void 0,ee)},Z=ee=>{const ve=[...$];ve[S]=ee,k(ve);const Se=b.adults-2;S<Se?P(S+1):b.minors>0?d("customer-step3d"):h(void 0,ve)},se=()=>{S===0?d("customer-step3b"):P(S-1)},re=ee=>{console.log("=== STEP 3D SUBMIT ==="),console.log("Received names:",ee),console.log("Names length:",ee.length),h(ee)},h=async(ee,ve,Se)=>{if(X)return;B(!0);const Ne=ee!==void 0?ee:O,j=ve!==void 0?ve:$,de=Se!==void 0?Se:_,Qe=[{name:[i.firstName,i.lastName].filter(Boolean).join(" "),signature:de?.signature||"",isMain:!0,isMinor:!1},...j.map(Ue=>({name:Ue.name,signature:Ue.signature,isMain:!1,isMinor:!1})),...Ne.map(Ue=>({name:Ue,signature:"",isMain:!1,isMinor:!0}))],ze={firstName:i.firstName,lastName:i.lastName,street:i.street,suiteUnit:i.suiteUnit||"",city:i.city,state:i.state,zip:i.zip,country:i.country,phones:i.phones,emails:i.emails,referralSources:i.referralSources||[],signature:de?.signature||"",partySize:b,visitors:Qe,checkInTime:new Date().toISOString(),esignConsentTimestamp:de?.esignConsentTimestamp,sessionId:de?.sessionId,deviceInfo:de?.deviceInfo};try{const Ue=await fetch("/api/check-ins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ze)}),M=await Ue.json();if(!Ue.ok){console.error("Check-in API error:",M);let Re="Check-in failed. Please try again.";Ue.status===403?Re="Check-in is only available on the office network. Please connect to the office Wi-Fi.":Ue.status===409?(Re=M.error,d("customer-step1")):Ue.status===400&&(Re="Some information was invalid. Please review and re-enter your details.",d("customer-step1")),alert(Re),B(!1);return}console.log("Check-in successful:",M.data.id),M.data.waiverPdfUrl&&console.log("Waiver PDF:",M.data.waiverPdfUrl);const xe={id:M.data.id,...i,signatureData:de?.signature||"",checkInTime:new Date(M.data.checkInTime),status:"waiting",partySize:b,visitors:Qe};p([...g,xe])}catch(Ue){console.error("Check-in network error:",Ue),alert("Check-in failed. Please check your connection and try again."),B(!1);return}C(b.minors>0),A({adults:1,minors:0}),W(null),k([]),P(0),F([]),B(!1),d("customer-step4")},w=f.useCallback(()=>{u({}),C(!1),A({adults:1,minors:0}),W(null),k([]),P(0),F([]),d("home")},[]),ne=(ee,ve,Se)=>{ve==="staff2"?br(ee):ve==="customer"&&Se?(oe(Se),d("customer-upload")):ve==="rating"?(N(ee),d("rating-dashboard")):(N(ee),d(ve==="pricing"?"pricing-dashboard":ve==="analysis"?"analysis-dashboard":"staff-dashboard"))},le=()=>{U&&q({token:U.token,checkInId:U.checkInId}),oe(null),d("customer-survey")},H=()=>{q(null),d("home")},V=()=>{N(""),d("home")},pe=ee=>{p(ve=>ve.map(Se=>Se.id===ee?{...Se,status:"helped",helpedTime:new Date,currentlyHelpedBy:void 0}:Se))},ke=(ee,ve)=>{p(Se=>Se.map(Ne=>Ne.id===ee?{...Ne,currentlyHelpedBy:ve}:Ne))},be=ee=>{p(ve=>ve.map(Se=>Se.id===ee?{...Se,priced:!0,pricedTime:new Date}:Se))},Oe=ee=>{p(ve=>ve.map(Se=>Se.id===ee?{...Se,checkInTime:new Date}:Se))},cr=ee=>{E(ee),d("revisit-step1")},Fr=ee=>{E(ve=>({...ve,...ee})),d("revisit-step2")},wr=ee=>{E(ve=>({...ve,referralSources:ee})),d("revisit-waiver")},Ve=async ee=>{if(X)return;B(!0);const ve={firstName:R.firstName,lastName:R.lastName,street:R.street,suiteUnit:R.suiteUnit||"",city:R.city,state:R.state,zip:R.zip,country:R.country,phones:R.phones,emails:R.emails,referralSources:R.referralSources||[],signature:ee.signature,partySize:ee.partySize,visitors:ee.visitors,checkInTime:new Date().toISOString(),isRevisit:!0};try{const Se=await fetch("/api/check-ins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)}),Ne=await Se.json();if(!Se.ok){Se.status===403?alert("Check-in is only available on the office network. Please connect to the office Wi-Fi."):alert("Revisit check-in failed. Please try again."),B(!1);return}const j={id:Ne.data.id,...R,isRevisit:!0,signature:ee.signature,checkInTime:new Date(Ne.data.checkInTime),status:"waiting",partySize:ee.partySize,visitors:ee.visitors};p(de=>[...de,j])}catch{alert("Revisit check-in failed. Please check your connection."),B(!1);return}B(!1),d("revisit-confirmation")},br=ee=>{const ve=Date.now()+288e5;localStorage.setItem("staff2Session",JSON.stringify({username:ee,expiry:ve})),Y(ee),d("staff2-dashboard")},jr=()=>{localStorage.removeItem("staff2Session"),Y(""),d("home")},Lr=ee=>{p(ve=>ve.map(Se=>Se.id===ee?{...Se,status:"done"}:Se))},We=(ee,ve)=>{p(Se=>Se.map(Ne=>Ne.id===ee?{...Ne,draft:ve}:Ne))},or=ee=>{g.filter(Ne=>Ne.firstName===ee.firstName&&Ne.lastName===ee.lastName&&Ne.status==="helped"&&Ne.draft?.selectionSheetNumber);let ve=ee.draft?.selectionSheetNumber||"";if(ve){const Ne=ve.split("."),j=Ne[0];if(Ne.length===1)ve=`${j}.1`;else{const de=parseInt(Ne[1])||0;ve=`${j}.${de+1}`}}const Se={...ee,id:Date.now().toString(),checkInTime:new Date,status:"waiting",helpedTime:void 0,draft:{step:3,editedCustomerData:{},selectedFabricator:ee.draft?.selectedFabricator,materials:ee.draft?.materials||[],helpedBy:x,selectionSheetNumber:ve,isHold:!1,isRevisit:!0,previousMaterialsCount:(ee.draft?.materials||[]).length}};p([...g,Se])},De=X?t.jsx(cn,{fullScreen:!0,color:"#ccb331",text:"Submitting your check-in…"}):null;if(s==="customer-step1")return t.jsxs(t.Fragment,{children:[De,t.jsx(Nh,{onNext:ce,initialData:i})]});if(s==="customer-step2")return t.jsxs(t.Fragment,{children:[De,t.jsx(jh,{onNext:Ce,onBack:()=>d("customer-step1"),initialData:i})]});if(s==="customer-step3a")return t.jsxs(t.Fragment,{children:[De,t.jsx(Ch,{onNext:Ee,onBack:()=>d("customer-step1"),initialData:b})]});if(s==="customer-step3b")return t.jsxs(t.Fragment,{children:[De,t.jsx(Eh,{onNext:Te,onBack:()=>d("customer-step3a"),initialData:_||void 0})]});if(s==="customer-step3c"){const ee=S<$.length?$[S]:void 0;return t.jsxs(t.Fragment,{children:[De,t.jsx(Th,{onNext:Z,onBack:se,visitorNumber:S+2,totalAdults:b.adults,initialData:ee,primaryVisitorName:`${i.firstName??""} ${i.lastName??""}`.trim(),takenNames:$.slice(0,S).map(ve=>ve.name)},S)]})}return s==="customer-step3d"?t.jsxs(t.Fragment,{children:[De,t.jsx(zh,{onNext:re,onBack:()=>{b.adults>1?(P(b.adults-2),d("customer-step3c")):d("customer-step3b")},numberOfMinors:b.minors})]}):s==="customer-step4"?t.jsx(Mh,{customerName:[i.firstName,i.lastName].filter(Boolean).join(" "),hasMinors:I,onReturnHome:w}):s==="staff-login"?t.jsx(Oh,{onLogin:ne}):s==="staff-dashboard"?t.jsx(em,{username:x,onLogout:V,checkIns:g,onMarkAsHelped:pe,onSaveDraft:We,onRevisit:or,onUpdateCurrentlyHelpedBy:ke}):s==="pricing-dashboard"?t.jsx(rm,{username:x,onLogout:V,checkIns:g,fabricators:[],onComplete:be,onResetHoldDate:Oe}):s==="analysis-dashboard"?t.jsx(tm,{username:x,onLogout:V,checkIns:g,fabricators:[],onComplete:be,onResetHoldDate:Oe}):s==="revisit-lookup"?t.jsx(om,{checkIns:g,onCustomerFound:cr,onBack:()=>d("home")}):s==="revisit-step1"?t.jsx(nm,{customerData:R,onNext:Fr,onBack:()=>d("revisit-lookup")}):s==="revisit-step2"?t.jsx(am,{referralSources:R?.referralSources||[],onNext:wr,onBack:()=>d("revisit-step1")}):s==="revisit-waiver"?t.jsxs(t.Fragment,{children:[De,t.jsx(sm,{customerName:[R?.firstName,R?.lastName].filter(Boolean).join(" "),onSubmit:Ve,onBack:()=>d("revisit-step2")})]}):s==="revisit-confirmation"?t.jsx(im,{customerName:[R?.firstName,R?.lastName].filter(Boolean).join(" "),onReturnHome:w}):s==="staff2-login"?t.jsx(cm,{onLogin:br}):s==="staff2-dashboard"?t.jsx(pm,{username:G,onLogout:jr,checkIns:g,onMarkAsDone:Lr}):s==="customer-upload"?U?t.jsx(hm,{customerName:U.customerName,checkInId:U.checkInId,authToken:U.token,onDone:le}):null:s==="customer-survey"?t.jsx(mm,{checkInId:ie?.checkInId??"",authToken:ie?.token??"",onDone:H}):s==="rating-dashboard"?t.jsx(gm,{onLogout:V}):t.jsx(Fp,{onCustomerCheckIn:()=>d("customer-step1"),onStaffLogin:()=>d("staff-login"),onRevisit:()=>d("revisit-lookup"),onStaff2Login:()=>d("staff2-login")})}_p.createRoot(document.getElementById("root")).render(t.jsx(vm,{}));
