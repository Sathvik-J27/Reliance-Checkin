(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))u(g);new MutationObserver(g=>{for(const h of g)if(h.type==="childList")for(const x of h.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function i(g){const h={};return g.integrity&&(h.integrity=g.integrity),g.referrerPolicy&&(h.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?h.credentials="include":g.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(g){if(g.ep)return;g.ep=!0;const h=i(g);fetch(g.href,h)}})();function Cp(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var cs={exports:{}},ln={},ds={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function Sp(){if(rd)return Me;rd=1;var s=Symbol.for("react.element"),d=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),x=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),F=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),C=Symbol.iterator;function _(p){return p===null||typeof p!="object"?null:(p=C&&p[C]||p["@@iterator"],typeof p=="function"?p:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,N={};function P(p,y,Q){this.props=p,this.context=y,this.refs=N,this.updater=Q||B}P.prototype.isReactComponent={},P.prototype.setState=function(p,y){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,y,"setState")},P.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function E(){}E.prototype=P.prototype;function w(p,y,Q){this.props=p,this.context=y,this.refs=N,this.updater=Q||B}var M=w.prototype=new E;M.constructor=w,q(M,P.prototype),M.isPureReactComponent=!0;var U=Array.isArray,H=Object.prototype.hasOwnProperty,W={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function Z(p,y,Q){var ee,ce={},ne=null,Se=null;if(y!=null)for(ee in y.ref!==void 0&&(Se=y.ref),y.key!==void 0&&(ne=""+y.key),y)H.call(y,ee)&&!R.hasOwnProperty(ee)&&(ce[ee]=y[ee]);var Te=arguments.length-2;if(Te===1)ce.children=Q;else if(1<Te){for(var we=Array(Te),Ue=0;Ue<Te;Ue++)we[Ue]=arguments[Ue+2];ce.children=we}if(p&&p.defaultProps)for(ee in Te=p.defaultProps,Te)ce[ee]===void 0&&(ce[ee]=Te[ee]);return{$$typeof:s,type:p,key:ne,ref:Se,props:ce,_owner:W.current}}function X(p,y){return{$$typeof:s,type:p.type,key:y,ref:p.ref,props:p.props,_owner:p._owner}}function L(p){return typeof p=="object"&&p!==null&&p.$$typeof===s}function oe(p){var y={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(Q){return y[Q]})}var de=/\/+/g;function V(p,y){return typeof p=="object"&&p!==null&&p.key!=null?oe(""+p.key):y.toString(36)}function he(p,y,Q,ee,ce){var ne=typeof p;(ne==="undefined"||ne==="boolean")&&(p=null);var Se=!1;if(p===null)Se=!0;else switch(ne){case"string":case"number":Se=!0;break;case"object":switch(p.$$typeof){case s:case d:Se=!0}}if(Se)return Se=p,ce=ce(Se),p=ee===""?"."+V(Se,0):ee,U(ce)?(Q="",p!=null&&(Q=p.replace(de,"$&/")+"/"),he(ce,y,Q,"",function(Ue){return Ue})):ce!=null&&(L(ce)&&(ce=X(ce,Q+(!ce.key||Se&&Se.key===ce.key?"":(""+ce.key).replace(de,"$&/")+"/")+p)),y.push(ce)),1;if(Se=0,ee=ee===""?".":ee+":",U(p))for(var Te=0;Te<p.length;Te++){ne=p[Te];var we=ee+V(ne,Te);Se+=he(ne,y,Q,we,ce)}else if(we=_(p),typeof we=="function")for(p=we.call(p),Te=0;!(ne=p.next()).done;)ne=ne.value,we=ee+V(ne,Te++),Se+=he(ne,y,Q,we,ce);else if(ne==="object")throw y=String(p),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return Se}function Ce(p,y,Q){if(p==null)return p;var ee=[],ce=0;return he(p,ee,"","",function(ne){return y.call(Q,ne,ce++)}),ee}function Pe(p){if(p._status===-1){var y=p._result;y=y(),y.then(function(Q){(p._status===0||p._status===-1)&&(p._status=1,p._result=Q)},function(Q){(p._status===0||p._status===-1)&&(p._status=2,p._result=Q)}),p._status===-1&&(p._status=0,p._result=y)}if(p._status===1)return p._result.default;throw p._result}var Ee={current:null},G={transition:null},ae={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:G,ReactCurrentOwner:W};function re(){throw Error("act(...) is not supported in production builds of React.")}return Me.Children={map:Ce,forEach:function(p,y,Q){Ce(p,function(){y.apply(this,arguments)},Q)},count:function(p){var y=0;return Ce(p,function(){y++}),y},toArray:function(p){return Ce(p,function(y){return y})||[]},only:function(p){if(!L(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},Me.Component=P,Me.Fragment=i,Me.Profiler=g,Me.PureComponent=w,Me.StrictMode=u,Me.Suspense=b,Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,Me.act=re,Me.cloneElement=function(p,y,Q){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var ee=q({},p.props),ce=p.key,ne=p.ref,Se=p._owner;if(y!=null){if(y.ref!==void 0&&(ne=y.ref,Se=W.current),y.key!==void 0&&(ce=""+y.key),p.type&&p.type.defaultProps)var Te=p.type.defaultProps;for(we in y)H.call(y,we)&&!R.hasOwnProperty(we)&&(ee[we]=y[we]===void 0&&Te!==void 0?Te[we]:y[we])}var we=arguments.length-2;if(we===1)ee.children=Q;else if(1<we){Te=Array(we);for(var Ue=0;Ue<we;Ue++)Te[Ue]=arguments[Ue+2];ee.children=Te}return{$$typeof:s,type:p.type,key:ce,ref:ne,props:ee,_owner:Se}},Me.createContext=function(p){return p={$$typeof:x,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:h,_context:p},p.Consumer=p},Me.createElement=Z,Me.createFactory=function(p){var y=Z.bind(null,p);return y.type=p,y},Me.createRef=function(){return{current:null}},Me.forwardRef=function(p){return{$$typeof:j,render:p}},Me.isValidElement=L,Me.lazy=function(p){return{$$typeof:A,_payload:{_status:-1,_result:p},_init:Pe}},Me.memo=function(p,y){return{$$typeof:F,type:p,compare:y===void 0?null:y}},Me.startTransition=function(p){var y=G.transition;G.transition={};try{p()}finally{G.transition=y}},Me.unstable_act=re,Me.useCallback=function(p,y){return Ee.current.useCallback(p,y)},Me.useContext=function(p){return Ee.current.useContext(p)},Me.useDebugValue=function(){},Me.useDeferredValue=function(p){return Ee.current.useDeferredValue(p)},Me.useEffect=function(p,y){return Ee.current.useEffect(p,y)},Me.useId=function(){return Ee.current.useId()},Me.useImperativeHandle=function(p,y,Q){return Ee.current.useImperativeHandle(p,y,Q)},Me.useInsertionEffect=function(p,y){return Ee.current.useInsertionEffect(p,y)},Me.useLayoutEffect=function(p,y){return Ee.current.useLayoutEffect(p,y)},Me.useMemo=function(p,y){return Ee.current.useMemo(p,y)},Me.useReducer=function(p,y,Q){return Ee.current.useReducer(p,y,Q)},Me.useRef=function(p){return Ee.current.useRef(p)},Me.useState=function(p){return Ee.current.useState(p)},Me.useSyncExternalStore=function(p,y,Q){return Ee.current.useSyncExternalStore(p,y,Q)},Me.useTransition=function(){return Ee.current.useTransition()},Me.version="18.3.1",Me}var td;function gs(){return td||(td=1,ds.exports=Sp()),ds.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var od;function Pp(){if(od)return ln;od=1;var s=gs(),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,g=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function x(j,b,F){var A,C={},_=null,B=null;F!==void 0&&(_=""+F),b.key!==void 0&&(_=""+b.key),b.ref!==void 0&&(B=b.ref);for(A in b)u.call(b,A)&&!h.hasOwnProperty(A)&&(C[A]=b[A]);if(j&&j.defaultProps)for(A in b=j.defaultProps,b)C[A]===void 0&&(C[A]=b[A]);return{$$typeof:d,type:j,key:_,ref:B,props:C,_owner:g.current}}return ln.Fragment=i,ln.jsx=x,ln.jsxs=x,ln}var nd;function Ep(){return nd||(nd=1,cs.exports=Pp()),cs.exports}var t=Ep(),bl={},us={exports:{}},Mr={},ps={exports:{}},hs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function Tp(){return ld||(ld=1,(function(s){function d(G,ae){var re=G.length;G.push(ae);e:for(;0<re;){var p=re-1>>>1,y=G[p];if(0<g(y,ae))G[p]=ae,G[re]=y,re=p;else break e}}function i(G){return G.length===0?null:G[0]}function u(G){if(G.length===0)return null;var ae=G[0],re=G.pop();if(re!==ae){G[0]=re;e:for(var p=0,y=G.length,Q=y>>>1;p<Q;){var ee=2*(p+1)-1,ce=G[ee],ne=ee+1,Se=G[ne];if(0>g(ce,re))ne<y&&0>g(Se,ce)?(G[p]=Se,G[ne]=re,p=ne):(G[p]=ce,G[ee]=re,p=ee);else if(ne<y&&0>g(Se,re))G[p]=Se,G[ne]=re,p=ne;else break e}}return ae}function g(G,ae){var re=G.sortIndex-ae.sortIndex;return re!==0?re:G.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var x=Date,j=x.now();s.unstable_now=function(){return x.now()-j}}var b=[],F=[],A=1,C=null,_=3,B=!1,q=!1,N=!1,P=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(G){for(var ae=i(F);ae!==null;){if(ae.callback===null)u(F);else if(ae.startTime<=G)u(F),ae.sortIndex=ae.expirationTime,d(b,ae);else break;ae=i(F)}}function U(G){if(N=!1,M(G),!q)if(i(b)!==null)q=!0,Pe(H);else{var ae=i(F);ae!==null&&Ee(U,ae.startTime-G)}}function H(G,ae){q=!1,N&&(N=!1,E(Z),Z=-1),B=!0;var re=_;try{for(M(ae),C=i(b);C!==null&&(!(C.expirationTime>ae)||G&&!oe());){var p=C.callback;if(typeof p=="function"){C.callback=null,_=C.priorityLevel;var y=p(C.expirationTime<=ae);ae=s.unstable_now(),typeof y=="function"?C.callback=y:C===i(b)&&u(b),M(ae)}else u(b);C=i(b)}if(C!==null)var Q=!0;else{var ee=i(F);ee!==null&&Ee(U,ee.startTime-ae),Q=!1}return Q}finally{C=null,_=re,B=!1}}var W=!1,R=null,Z=-1,X=5,L=-1;function oe(){return!(s.unstable_now()-L<X)}function de(){if(R!==null){var G=s.unstable_now();L=G;var ae=!0;try{ae=R(!0,G)}finally{ae?V():(W=!1,R=null)}}else W=!1}var V;if(typeof w=="function")V=function(){w(de)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Ce=he.port2;he.port1.onmessage=de,V=function(){Ce.postMessage(null)}}else V=function(){P(de,0)};function Pe(G){R=G,W||(W=!0,V())}function Ee(G,ae){Z=P(function(){G(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){q||B||(q=!0,Pe(H))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return i(b)},s.unstable_next=function(G){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var re=_;_=ae;try{return G()}finally{_=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,ae){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var re=_;_=G;try{return ae()}finally{_=re}},s.unstable_scheduleCallback=function(G,ae,re){var p=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?p+re:p):re=p,G){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=re+y,G={id:A++,callback:ae,priorityLevel:G,startTime:re,expirationTime:y,sortIndex:-1},re>p?(G.sortIndex=re,d(F,G),i(b)===null&&G===i(F)&&(N?(E(Z),Z=-1):N=!0,Ee(U,re-p))):(G.sortIndex=y,d(b,G),q||B||(q=!0,Pe(H))),G},s.unstable_shouldYield=oe,s.unstable_wrapCallback=function(G){var ae=_;return function(){var re=_;_=ae;try{return G.apply(this,arguments)}finally{_=re}}}})(hs)),hs}var ad;function zp(){return ad||(ad=1,ps.exports=Tp()),ps.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sd;function Mp(){if(sd)return Mr;sd=1;var s=gs(),d=zp();function i(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,g={};function h(e,r){x(e,r),x(e+"Capture",r)}function x(e,r){for(g[e]=r,e=0;e<r.length;e++)u.add(r[e])}var j=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),b=Object.prototype.hasOwnProperty,F=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,A={},C={};function _(e){return b.call(C,e)?!0:b.call(A,e)?!1:F.test(e)?C[e]=!0:(A[e]=!0,!1)}function B(e,r,o,n){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function q(e,r,o,n){if(r===null||typeof r>"u"||B(e,r,o,n))return!0;if(n)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function N(e,r,o,n,l,a,c){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=l,this.mustUseProperty=o,this.propertyName=e,this.type=r,this.sanitizeURL=a,this.removeEmptyString=c}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new N(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];P[r]=new N(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new N(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new N(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new N(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new N(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new N(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new N(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new N(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function w(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(E,w);P[r]=new N(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(E,w);P[r]=new N(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(E,w);P[r]=new N(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new N(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new N(e,1,!1,e.toLowerCase(),null,!0,!0)});function M(e,r,o,n){var l=P.hasOwnProperty(r)?P[r]:null;(l!==null?l.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(q(r,o,l,n)&&(o=null),n||l===null?_(r)&&(o===null?e.removeAttribute(r):e.setAttribute(r,""+o)):l.mustUseProperty?e[l.propertyName]=o===null?l.type===3?!1:"":o:(r=l.attributeName,n=l.attributeNamespace,o===null?e.removeAttribute(r):(l=l.type,o=l===3||l===4&&o===!0?"":""+o,n?e.setAttributeNS(n,r,o):e.setAttribute(r,o))))}var U=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),W=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),oe=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),G=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var re=Object.assign,p;function y(e){if(p===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);p=r&&r[1]||""}return`
`+p+e}var Q=!1;function ee(e,r){if(!e||Q)return"";Q=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(D){var n=D}Reflect.construct(e,[],r)}else{try{r.call()}catch(D){n=D}e.call(r.prototype)}else{try{throw Error()}catch(D){n=D}e()}}catch(D){if(D&&n&&typeof D.stack=="string"){for(var l=D.stack.split(`
`),a=n.stack.split(`
`),c=l.length-1,m=a.length-1;1<=c&&0<=m&&l[c]!==a[m];)m--;for(;1<=c&&0<=m;c--,m--)if(l[c]!==a[m]){if(c!==1||m!==1)do if(c--,m--,0>m||l[c]!==a[m]){var v=`
`+l[c].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=c&&0<=m);break}}}finally{Q=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?y(e):""}function ce(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function ne(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case W:return"Portal";case X:return"Profiler";case Z:return"StrictMode";case V:return"Suspense";case he:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oe:return(e.displayName||"Context")+".Consumer";case L:return(e._context.displayName||"Context")+".Provider";case de:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return r=e.displayName||null,r!==null?r:ne(e.type)||"Memo";case Pe:r=e._payload,e=e._init;try{return ne(e(r))}catch{}}return null}function Se(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(r);case 8:return r===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ue(e){var r=we(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,a=o.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return l.call(this)},set:function(c){n=""+c,a.call(this,c)}}),Object.defineProperty(e,r,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function cr(e){e._valueTracker||(e._valueTracker=Ue(e))}function Fr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var o=r.getValue(),n="";return e&&(n=we(e)?e.checked?"true":"false":e.value),e=n,e!==o?(r.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ve(e,r){var o=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function br(e,r){var o=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;o=Te(r.value!=null?r.value:o),e._wrapperState={initialChecked:n,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function jr(e,r){r=r.checked,r!=null&&M(e,"checked",r,!1)}function Lr(e,r){jr(e,r);var o=Te(r.value),n=r.type;if(o!=null)n==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?or(e,r.type,o):r.hasOwnProperty("defaultValue")&&or(e,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function We(e,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,o||r===e.value||(e.value=r),e.defaultValue=r}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function or(e,r,o){(r!=="number"||wr(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Oe=Array.isArray;function J(e,r,o,n){if(e=e.options,r){r={};for(var l=0;l<o.length;l++)r["$"+o[l]]=!0;for(o=0;o<e.length;o++)l=r.hasOwnProperty("$"+e[o].value),e[o].selected!==l&&(e[o].selected=l),l&&n&&(e[o].defaultSelected=!0)}else{for(o=""+Te(o),r=null,l=0;l<e.length;l++){if(e[l].value===o){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}r!==null||e[l].disabled||(r=e[l])}r!==null&&(r.selected=!0)}}function ve(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ne(e,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(i(92));if(Oe(o)){if(1<o.length)throw Error(i(93));o=o[0]}r=o}r==null&&(r=""),o=r}e._wrapperState={initialValue:Te(o)}}function ye(e,r){var o=Te(r.value),n=Te(r.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),r.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),n!=null&&(e.defaultValue=""+n)}function S(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qe(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?se(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ze,Be=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,n,l){MSApp.execUnsafeLocalFunction(function(){return e(r,o,n,l)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ze=ze||document.createElement("div"),ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ze.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function O(e,r){if(r){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=r;return}}e.textContent=r}var ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ae=["Webkit","ms","Moz","O"];Object.keys(ge).forEach(function(e){Ae.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),ge[r]=ge[e]})});function De(e,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||ge.hasOwnProperty(e)&&ge[e]?(""+r).trim():r+"px"}function I(e,r){e=e.style;for(var o in r)if(r.hasOwnProperty(o)){var n=o.indexOf("--")===0,l=De(o,r[o],n);o==="float"&&(o="cssFloat"),n?e.setProperty(o,l):e[o]=l}}var me=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Re(e,r){if(r){if(me[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function He(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lr=null;function hr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Cr=null,Vr=null;function pn(e){if(e=qo(e)){if(typeof Or!="function")throw Error(i(280));var r=e.stateNode;r&&(r=_n(r),Or(e.stateNode,e.type,r))}}function Fe(e){Cr?Vr?Vr.push(e):Vr=[e]:Cr=e}function bs(){if(Cr){var e=Cr,r=Vr;if(Vr=Cr=null,pn(e),r)for(e=0;e<r.length;e++)pn(r[e])}}function ks(e,r){return e(r)}function Ns(){}var Sl=!1;function ws(e,r,o){if(Sl)return e(r,o);Sl=!0;try{return ks(e,r,o)}finally{Sl=!1,(Cr!==null||Vr!==null)&&(Ns(),bs())}}function wo(e,r){var o=e.stateNode;if(o===null)return null;var n=_n(o);if(n===null)return null;o=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var Pl=!1;if(j)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{Pl=!1}function Md(e,r,o,n,l,a,c,m,v){var D=Array.prototype.slice.call(arguments,3);try{r.apply(o,D)}catch(Y){this.onError(Y)}}var Co=!1,hn=null,mn=!1,El=null,Od={onError:function(e){Co=!0,hn=e}};function Dd(e,r,o,n,l,a,c,m,v){Co=!1,hn=null,Md.apply(Od,arguments)}function Rd(e,r,o,n,l,a,c,m,v){if(Dd.apply(this,arguments),Co){if(Co){var D=hn;Co=!1,hn=null}else throw Error(i(198));mn||(mn=!0,El=D)}}function Lt(e){var r=e,o=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(o=r.return),e=r.return;while(e)}return r.tag===3?o:null}function js(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Cs(e){if(Lt(e)!==e)throw Error(i(188))}function _d(e){var r=e.alternate;if(!r){if(r=Lt(e),r===null)throw Error(i(188));return r!==e?null:e}for(var o=e,n=r;;){var l=o.return;if(l===null)break;var a=l.alternate;if(a===null){if(n=l.return,n!==null){o=n;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===o)return Cs(l),e;if(a===n)return Cs(l),r;a=a.sibling}throw Error(i(188))}if(o.return!==n.return)o=l,n=a;else{for(var c=!1,m=l.child;m;){if(m===o){c=!0,o=l,n=a;break}if(m===n){c=!0,n=l,o=a;break}m=m.sibling}if(!c){for(m=a.child;m;){if(m===o){c=!0,o=a,n=l;break}if(m===n){c=!0,n=a,o=l;break}m=m.sibling}if(!c)throw Error(i(189))}}if(o.alternate!==n)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:r}function Ss(e){return e=_d(e),e!==null?Ps(e):null}function Ps(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=Ps(e);if(r!==null)return r;e=e.sibling}return null}var Es=d.unstable_scheduleCallback,Ts=d.unstable_cancelCallback,Ad=d.unstable_shouldYield,Id=d.unstable_requestPaint,rr=d.unstable_now,Fd=d.unstable_getCurrentPriorityLevel,Tl=d.unstable_ImmediatePriority,zs=d.unstable_UserBlockingPriority,fn=d.unstable_NormalPriority,Ld=d.unstable_LowPriority,Ms=d.unstable_IdlePriority,gn=null,ot=null;function Hd(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(gn,e,void 0,(e.current.flags&128)===128)}catch{}}var Qr=Math.clz32?Math.clz32:Wd,Ud=Math.log,Bd=Math.LN2;function Wd(e){return e>>>=0,e===0?32:31-(Ud(e)/Bd|0)|0}var xn=64,vn=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yn(e,r){var o=e.pendingLanes;if(o===0)return 0;var n=0,l=e.suspendedLanes,a=e.pingedLanes,c=o&268435455;if(c!==0){var m=c&~l;m!==0?n=So(m):(a&=c,a!==0&&(n=So(a)))}else c=o&~l,c!==0?n=So(c):a!==0&&(n=So(a));if(n===0)return 0;if(r!==0&&r!==n&&(r&l)===0&&(l=n&-n,a=r&-r,l>=a||l===16&&(a&4194240)!==0))return r;if((n&4)!==0&&(n|=o&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)o=31-Qr(r),l=1<<o,n|=e[o],r&=~l;return n}function qd(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $d(e,r){for(var o=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var c=31-Qr(a),m=1<<c,v=l[c];v===-1?((m&o)===0||(m&n)!==0)&&(l[c]=qd(m,r)):v<=r&&(e.expiredLanes|=m),a&=~m}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Os(){var e=xn;return xn<<=1,(xn&4194240)===0&&(xn=64),e}function Ml(e){for(var r=[],o=0;31>o;o++)r.push(e);return r}function Po(e,r,o){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Qr(r),e[r]=o}function Yd(e,r){var o=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<o;){var l=31-Qr(o),a=1<<l;r[l]=0,n[l]=-1,e[l]=-1,o&=~a}}function Ol(e,r){var o=e.entangledLanes|=r;for(e=e.entanglements;o;){var n=31-Qr(o),l=1<<n;l&r|e[n]&r&&(e[n]|=r),o&=~l}}var Le=0;function Ds(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rs,Dl,_s,As,Is,Rl=!1,bn=[],yt=null,bt=null,kt=null,Eo=new Map,To=new Map,Nt=[],Vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fs(e,r){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":kt=null;break;case"pointerover":case"pointerout":Eo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(r.pointerId)}}function zo(e,r,o,n,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:r,domEventName:o,eventSystemFlags:n,nativeEvent:a,targetContainers:[l]},r!==null&&(r=qo(r),r!==null&&Dl(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,l!==null&&r.indexOf(l)===-1&&r.push(l),e)}function Qd(e,r,o,n,l){switch(r){case"focusin":return yt=zo(yt,e,r,o,n,l),!0;case"dragenter":return bt=zo(bt,e,r,o,n,l),!0;case"mouseover":return kt=zo(kt,e,r,o,n,l),!0;case"pointerover":var a=l.pointerId;return Eo.set(a,zo(Eo.get(a)||null,e,r,o,n,l)),!0;case"gotpointercapture":return a=l.pointerId,To.set(a,zo(To.get(a)||null,e,r,o,n,l)),!0}return!1}function Ls(e){var r=Ht(e.target);if(r!==null){var o=Lt(r);if(o!==null){if(r=o.tag,r===13){if(r=js(o),r!==null){e.blockedOn=r,Is(e.priority,function(){_s(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kn(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var o=Al(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var n=new o.constructor(o.type,o);lr=n,o.target.dispatchEvent(n),lr=null}else return r=qo(o),r!==null&&Dl(r),e.blockedOn=o,!1;r.shift()}return!0}function Hs(e,r,o){kn(e)&&o.delete(r)}function Xd(){Rl=!1,yt!==null&&kn(yt)&&(yt=null),bt!==null&&kn(bt)&&(bt=null),kt!==null&&kn(kt)&&(kt=null),Eo.forEach(Hs),To.forEach(Hs)}function Mo(e,r){e.blockedOn===r&&(e.blockedOn=null,Rl||(Rl=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Xd)))}function Oo(e){function r(l){return Mo(l,e)}if(0<bn.length){Mo(bn[0],e);for(var o=1;o<bn.length;o++){var n=bn[o];n.blockedOn===e&&(n.blockedOn=null)}}for(yt!==null&&Mo(yt,e),bt!==null&&Mo(bt,e),kt!==null&&Mo(kt,e),Eo.forEach(r),To.forEach(r),o=0;o<Nt.length;o++)n=Nt[o],n.blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&(o=Nt[0],o.blockedOn===null);)Ls(o),o.blockedOn===null&&Nt.shift()}var Zt=U.ReactCurrentBatchConfig,Nn=!0;function Kd(e,r,o,n){var l=Le,a=Zt.transition;Zt.transition=null;try{Le=1,_l(e,r,o,n)}finally{Le=l,Zt.transition=a}}function Gd(e,r,o,n){var l=Le,a=Zt.transition;Zt.transition=null;try{Le=4,_l(e,r,o,n)}finally{Le=l,Zt.transition=a}}function _l(e,r,o,n){if(Nn){var l=Al(e,r,o,n);if(l===null)Zl(e,r,n,wn,o),Fs(e,n);else if(Qd(l,e,r,o,n))n.stopPropagation();else if(Fs(e,n),r&4&&-1<Vd.indexOf(e)){for(;l!==null;){var a=qo(l);if(a!==null&&Rs(a),a=Al(e,r,o,n),a===null&&Zl(e,r,n,wn,o),a===l)break;l=a}l!==null&&n.stopPropagation()}else Zl(e,r,n,null,o)}}var wn=null;function Al(e,r,o,n){if(wn=null,e=hr(n),e=Ht(e),e!==null)if(r=Lt(e),r===null)e=null;else if(o=r.tag,o===13){if(e=js(r),e!==null)return e;e=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return wn=e,null}function Us(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fd()){case Tl:return 1;case zs:return 4;case fn:case Ld:return 16;case Ms:return 536870912;default:return 16}default:return 16}}var wt=null,Il=null,jn=null;function Bs(){if(jn)return jn;var e,r=Il,o=r.length,n,l="value"in wt?wt.value:wt.textContent,a=l.length;for(e=0;e<o&&r[e]===l[e];e++);var c=o-e;for(n=1;n<=c&&r[o-n]===l[a-n];n++);return jn=l.slice(e,1<n?1-n:void 0)}function Cn(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Ws(){return!1}function Dr(e){function r(o,n,l,a,c){this._reactName=o,this._targetInst=l,this.type=n,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(o=e[m],this[m]=o?o(a):a[m]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Sn:Ws,this.isPropagationStopped=Ws,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),r}var eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Dr(eo),Do=re({},eo,{view:0,detail:0}),Jd=Dr(Do),Ll,Hl,Ro,Pn=re({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(Ll=e.screenX-Ro.screenX,Hl=e.screenY-Ro.screenY):Hl=Ll=0,Ro=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Hl}}),qs=Dr(Pn),Zd=re({},Pn,{dataTransfer:0}),eu=Dr(Zd),ru=re({},Do,{relatedTarget:0}),Ul=Dr(ru),tu=re({},eo,{animationName:0,elapsedTime:0,pseudoElement:0}),ou=Dr(tu),nu=re({},eo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lu=Dr(nu),au=re({},eo,{data:0}),$s=Dr(au),su={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function du(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=cu[e])?!!r[e]:!1}function Bl(){return du}var uu=re({},Do,{key:function(e){if(e.key){var r=su[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Cn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?iu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(e){return e.type==="keypress"?Cn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pu=Dr(uu),hu=re({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=Dr(hu),mu=re({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),fu=Dr(mu),gu=re({},eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),xu=Dr(gu),vu=re({},Pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yu=Dr(vu),bu=[9,13,27,32],Wl=j&&"CompositionEvent"in window,_o=null;j&&"documentMode"in document&&(_o=document.documentMode);var ku=j&&"TextEvent"in window&&!_o,Vs=j&&(!Wl||_o&&8<_o&&11>=_o),Qs=" ",Xs=!1;function Ks(e,r){switch(e){case"keyup":return bu.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ro=!1;function Nu(e,r){switch(e){case"compositionend":return Gs(r);case"keypress":return r.which!==32?null:(Xs=!0,Qs);case"textInput":return e=r.data,e===Qs&&Xs?null:e;default:return null}}function wu(e,r){if(ro)return e==="compositionend"||!Wl&&Ks(e,r)?(e=Bs(),jn=Il=wt=null,ro=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Vs&&r.locale!=="ko"?null:r.data;default:return null}}var ju={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!ju[e.type]:r==="textarea"}function Zs(e,r,o,n){Fe(n),r=On(r,"onChange"),0<r.length&&(o=new Fl("onChange","change",null,o,n),e.push({event:o,listeners:r}))}var Ao=null,Io=null;function Cu(e){xi(e,0)}function En(e){var r=ao(e);if(Fr(r))return e}function Su(e,r){if(e==="change")return r}var ei=!1;if(j){var ql;if(j){var $l="oninput"in document;if(!$l){var ri=document.createElement("div");ri.setAttribute("oninput","return;"),$l=typeof ri.oninput=="function"}ql=$l}else ql=!1;ei=ql&&(!document.documentMode||9<document.documentMode)}function ti(){Ao&&(Ao.detachEvent("onpropertychange",oi),Io=Ao=null)}function oi(e){if(e.propertyName==="value"&&En(Io)){var r=[];Zs(r,Io,e,hr(e)),ws(Cu,r)}}function Pu(e,r,o){e==="focusin"?(ti(),Ao=r,Io=o,Ao.attachEvent("onpropertychange",oi)):e==="focusout"&&ti()}function Eu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return En(Io)}function Tu(e,r){if(e==="click")return En(r)}function zu(e,r){if(e==="input"||e==="change")return En(r)}function Mu(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Xr=typeof Object.is=="function"?Object.is:Mu;function Fo(e,r){if(Xr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var o=Object.keys(e),n=Object.keys(r);if(o.length!==n.length)return!1;for(n=0;n<o.length;n++){var l=o[n];if(!b.call(r,l)||!Xr(e[l],r[l]))return!1}return!0}function ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function li(e,r){var o=ni(e);e=0;for(var n;o;){if(o.nodeType===3){if(n=e+o.textContent.length,e<=r&&n>=r)return{node:o,offset:r-e};e=n}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ni(o)}}function ai(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?ai(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function si(){for(var e=window,r=wr();r instanceof e.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)e=r.contentWindow;else break;r=wr(e.document)}return r}function Yl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Ou(e){var r=si(),o=e.focusedElem,n=e.selectionRange;if(r!==o&&o&&o.ownerDocument&&ai(o.ownerDocument.documentElement,o)){if(n!==null&&Yl(o)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(e,o.value.length);else if(e=(r=o.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var l=o.textContent.length,a=Math.min(n.start,l);n=n.end===void 0?a:Math.min(n.end,l),!e.extend&&a>n&&(l=n,n=a,a=l),l=li(o,a);var c=li(o,n);l&&c&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(r=r.createRange(),r.setStart(l.node,l.offset),e.removeAllRanges(),a>n?(e.addRange(r),e.extend(c.node,c.offset)):(r.setEnd(c.node,c.offset),e.addRange(r)))}}for(r=[],e=o;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)e=r[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Du=j&&"documentMode"in document&&11>=document.documentMode,to=null,Vl=null,Lo=null,Ql=!1;function ii(e,r,o){var n=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ql||to==null||to!==wr(n)||(n=to,"selectionStart"in n&&Yl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Lo&&Fo(Lo,n)||(Lo=n,n=On(Vl,"onSelect"),0<n.length&&(r=new Fl("onSelect","select",null,r,o),e.push({event:r,listeners:n}),r.target=to)))}function Tn(e,r){var o={};return o[e.toLowerCase()]=r.toLowerCase(),o["Webkit"+e]="webkit"+r,o["Moz"+e]="moz"+r,o}var oo={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Xl={},ci={};j&&(ci=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function zn(e){if(Xl[e])return Xl[e];if(!oo[e])return e;var r=oo[e],o;for(o in r)if(r.hasOwnProperty(o)&&o in ci)return Xl[e]=r[o];return e}var di=zn("animationend"),ui=zn("animationiteration"),pi=zn("animationstart"),hi=zn("transitionend"),mi=new Map,fi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,r){mi.set(e,r),h(r,[e])}for(var Kl=0;Kl<fi.length;Kl++){var Gl=fi[Kl],Ru=Gl.toLowerCase(),_u=Gl[0].toUpperCase()+Gl.slice(1);jt(Ru,"on"+_u)}jt(di,"onAnimationEnd"),jt(ui,"onAnimationIteration"),jt(pi,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(hi,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Au=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function gi(e,r,o){var n=e.type||"unknown-event";e.currentTarget=o,Rd(n,r,void 0,e),e.currentTarget=null}function xi(e,r){r=(r&4)!==0;for(var o=0;o<e.length;o++){var n=e[o],l=n.event;n=n.listeners;e:{var a=void 0;if(r)for(var c=n.length-1;0<=c;c--){var m=n[c],v=m.instance,D=m.currentTarget;if(m=m.listener,v!==a&&l.isPropagationStopped())break e;gi(l,m,D),a=v}else for(c=0;c<n.length;c++){if(m=n[c],v=m.instance,D=m.currentTarget,m=m.listener,v!==a&&l.isPropagationStopped())break e;gi(l,m,D),a=v}}}if(mn)throw e=El,mn=!1,El=null,e}function $e(e,r){var o=r[la];o===void 0&&(o=r[la]=new Set);var n=e+"__bubble";o.has(n)||(vi(r,e,2,!1),o.add(n))}function Jl(e,r,o){var n=0;r&&(n|=4),vi(o,e,n,r)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[Mn]){e[Mn]=!0,u.forEach(function(o){o!=="selectionchange"&&(Au.has(o)||Jl(o,!1,e),Jl(o,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Mn]||(r[Mn]=!0,Jl("selectionchange",!1,r))}}function vi(e,r,o,n){switch(Us(r)){case 1:var l=Kd;break;case 4:l=Gd;break;default:l=_l}o=l.bind(null,r,o,e),l=void 0,!Pl||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(r,o,{capture:!0,passive:l}):e.addEventListener(r,o,!0):l!==void 0?e.addEventListener(r,o,{passive:l}):e.addEventListener(r,o,!1)}function Zl(e,r,o,n,l){var a=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var m=n.stateNode.containerInfo;if(m===l||m.nodeType===8&&m.parentNode===l)break;if(c===4)for(c=n.return;c!==null;){var v=c.tag;if((v===3||v===4)&&(v=c.stateNode.containerInfo,v===l||v.nodeType===8&&v.parentNode===l))return;c=c.return}for(;m!==null;){if(c=Ht(m),c===null)return;if(v=c.tag,v===5||v===6){n=a=c;continue e}m=m.parentNode}}n=n.return}ws(function(){var D=a,Y=hr(o),K=[];e:{var $=mi.get(e);if($!==void 0){var le=Fl,ue=e;switch(e){case"keypress":if(Cn(o)===0)break e;case"keydown":case"keyup":le=pu;break;case"focusin":ue="focus",le=Ul;break;case"focusout":ue="blur",le=Ul;break;case"beforeblur":case"afterblur":le=Ul;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=eu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=fu;break;case di:case ui:case pi:le=ou;break;case hi:le=xu;break;case"scroll":le=Jd;break;case"wheel":le=yu;break;case"copy":case"cut":case"paste":le=lu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Ys}var pe=(r&4)!==0,tr=!pe&&e==="scroll",T=pe?$!==null?$+"Capture":null:$;pe=[];for(var k=D,z;k!==null;){z=k;var te=z.stateNode;if(z.tag===5&&te!==null&&(z=te,T!==null&&(te=wo(k,T),te!=null&&pe.push(Bo(k,te,z)))),tr)break;k=k.return}0<pe.length&&($=new le($,ue,null,o,Y),K.push({event:$,listeners:pe}))}}if((r&7)===0){e:{if($=e==="mouseover"||e==="pointerover",le=e==="mouseout"||e==="pointerout",$&&o!==lr&&(ue=o.relatedTarget||o.fromElement)&&(Ht(ue)||ue[dt]))break e;if((le||$)&&($=Y.window===Y?Y:($=Y.ownerDocument)?$.defaultView||$.parentWindow:window,le?(ue=o.relatedTarget||o.toElement,le=D,ue=ue?Ht(ue):null,ue!==null&&(tr=Lt(ue),ue!==tr||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(le=null,ue=D),le!==ue)){if(pe=qs,te="onMouseLeave",T="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(pe=Ys,te="onPointerLeave",T="onPointerEnter",k="pointer"),tr=le==null?$:ao(le),z=ue==null?$:ao(ue),$=new pe(te,k+"leave",le,o,Y),$.target=tr,$.relatedTarget=z,te=null,Ht(Y)===D&&(pe=new pe(T,k+"enter",ue,o,Y),pe.target=z,pe.relatedTarget=tr,te=pe),tr=te,le&&ue)r:{for(pe=le,T=ue,k=0,z=pe;z;z=no(z))k++;for(z=0,te=T;te;te=no(te))z++;for(;0<k-z;)pe=no(pe),k--;for(;0<z-k;)T=no(T),z--;for(;k--;){if(pe===T||T!==null&&pe===T.alternate)break r;pe=no(pe),T=no(T)}pe=null}else pe=null;le!==null&&yi(K,$,le,pe,!1),ue!==null&&tr!==null&&yi(K,tr,ue,pe,!0)}}e:{if($=D?ao(D):window,le=$.nodeName&&$.nodeName.toLowerCase(),le==="select"||le==="input"&&$.type==="file")var fe=Su;else if(Js($))if(ei)fe=zu;else{fe=Eu;var be=Pu}else(le=$.nodeName)&&le.toLowerCase()==="input"&&($.type==="checkbox"||$.type==="radio")&&(fe=Tu);if(fe&&(fe=fe(e,D))){Zs(K,fe,o,Y);break e}be&&be(e,$,D),e==="focusout"&&(be=$._wrapperState)&&be.controlled&&$.type==="number"&&or($,"number",$.value)}switch(be=D?ao(D):window,e){case"focusin":(Js(be)||be.contentEditable==="true")&&(to=be,Vl=D,Lo=null);break;case"focusout":Lo=Vl=to=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,ii(K,o,Y);break;case"selectionchange":if(Du)break;case"keydown":case"keyup":ii(K,o,Y)}var ke;if(Wl)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else ro?Ks(e,o)&&(je="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(je="onCompositionStart");je&&(Vs&&o.locale!=="ko"&&(ro||je!=="onCompositionStart"?je==="onCompositionEnd"&&ro&&(ke=Bs()):(wt=Y,Il="value"in wt?wt.value:wt.textContent,ro=!0)),be=On(D,je),0<be.length&&(je=new $s(je,e,null,o,Y),K.push({event:je,listeners:be}),ke?je.data=ke:(ke=Gs(o),ke!==null&&(je.data=ke)))),(ke=ku?Nu(e,o):wu(e,o))&&(D=On(D,"onBeforeInput"),0<D.length&&(Y=new $s("onBeforeInput","beforeinput",null,o,Y),K.push({event:Y,listeners:D}),Y.data=ke))}xi(K,r)})}function Bo(e,r,o){return{instance:e,listener:r,currentTarget:o}}function On(e,r){for(var o=r+"Capture",n=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=wo(e,o),a!=null&&n.unshift(Bo(e,a,l)),a=wo(e,r),a!=null&&n.push(Bo(e,a,l))),e=e.return}return n}function no(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yi(e,r,o,n,l){for(var a=r._reactName,c=[];o!==null&&o!==n;){var m=o,v=m.alternate,D=m.stateNode;if(v!==null&&v===n)break;m.tag===5&&D!==null&&(m=D,l?(v=wo(o,a),v!=null&&c.unshift(Bo(o,v,m))):l||(v=wo(o,a),v!=null&&c.push(Bo(o,v,m)))),o=o.return}c.length!==0&&e.push({event:r,listeners:c})}var Iu=/\r\n?/g,Fu=/\u0000|\uFFFD/g;function bi(e){return(typeof e=="string"?e:""+e).replace(Iu,`
`).replace(Fu,"")}function Dn(e,r,o){if(r=bi(r),bi(e)!==r&&o)throw Error(i(425))}function Rn(){}var ea=null,ra=null;function ta(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var oa=typeof setTimeout=="function"?setTimeout:void 0,Lu=typeof clearTimeout=="function"?clearTimeout:void 0,ki=typeof Promise=="function"?Promise:void 0,Hu=typeof queueMicrotask=="function"?queueMicrotask:typeof ki<"u"?function(e){return ki.resolve(null).then(e).catch(Uu)}:oa;function Uu(e){setTimeout(function(){throw e})}function na(e,r){var o=r,n=0;do{var l=o.nextSibling;if(e.removeChild(o),l&&l.nodeType===8)if(o=l.data,o==="/$"){if(n===0){e.removeChild(l),Oo(r);return}n--}else o!=="$"&&o!=="$?"&&o!=="$!"||n++;o=l}while(o);Oo(r)}function Ct(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Ni(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return e;r--}else o==="/$"&&r++}e=e.previousSibling}return null}var lo=Math.random().toString(36).slice(2),nt="__reactFiber$"+lo,Wo="__reactProps$"+lo,dt="__reactContainer$"+lo,la="__reactEvents$"+lo,Bu="__reactListeners$"+lo,Wu="__reactHandles$"+lo;function Ht(e){var r=e[nt];if(r)return r;for(var o=e.parentNode;o;){if(r=o[dt]||o[nt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(e=Ni(e);e!==null;){if(o=e[nt])return o;e=Ni(e)}return r}e=o,o=e.parentNode}return null}function qo(e){return e=e[nt]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ao(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function _n(e){return e[Wo]||null}var aa=[],so=-1;function St(e){return{current:e}}function Ye(e){0>so||(e.current=aa[so],aa[so]=null,so--)}function qe(e,r){so++,aa[so]=e.current,e.current=r}var Pt={},gr=St(Pt),Sr=St(!1),Ut=Pt;function io(e,r){var o=e.type.contextTypes;if(!o)return Pt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in o)l[a]=r[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=l),l}function Pr(e){return e=e.childContextTypes,e!=null}function An(){Ye(Sr),Ye(gr)}function wi(e,r,o){if(gr.current!==Pt)throw Error(i(168));qe(gr,r),qe(Sr,o)}function ji(e,r,o){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return o;n=n.getChildContext();for(var l in n)if(!(l in r))throw Error(i(108,Se(e)||"Unknown",l));return re({},o,n)}function In(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pt,Ut=gr.current,qe(gr,e),qe(Sr,Sr.current),!0}function Ci(e,r,o){var n=e.stateNode;if(!n)throw Error(i(169));o?(e=ji(e,r,Ut),n.__reactInternalMemoizedMergedChildContext=e,Ye(Sr),Ye(gr),qe(gr,e)):Ye(Sr),qe(Sr,o)}var ut=null,Fn=!1,sa=!1;function Si(e){ut===null?ut=[e]:ut.push(e)}function qu(e){Fn=!0,Si(e)}function Et(){if(!sa&&ut!==null){sa=!0;var e=0,r=Le;try{var o=ut;for(Le=1;e<o.length;e++){var n=o[e];do n=n(!0);while(n!==null)}ut=null,Fn=!1}catch(l){throw ut!==null&&(ut=ut.slice(e+1)),Es(Tl,Et),l}finally{Le=r,sa=!1}}return null}var co=[],uo=0,Ln=null,Hn=0,Hr=[],Ur=0,Bt=null,pt=1,ht="";function Wt(e,r){co[uo++]=Hn,co[uo++]=Ln,Ln=e,Hn=r}function Pi(e,r,o){Hr[Ur++]=pt,Hr[Ur++]=ht,Hr[Ur++]=Bt,Bt=e;var n=pt;e=ht;var l=32-Qr(n)-1;n&=~(1<<l),o+=1;var a=32-Qr(r)+l;if(30<a){var c=l-l%5;a=(n&(1<<c)-1).toString(32),n>>=c,l-=c,pt=1<<32-Qr(r)+l|o<<l|n,ht=a+e}else pt=1<<a|o<<l|n,ht=e}function ia(e){e.return!==null&&(Wt(e,1),Pi(e,1,0))}function ca(e){for(;e===Ln;)Ln=co[--uo],co[uo]=null,Hn=co[--uo],co[uo]=null;for(;e===Bt;)Bt=Hr[--Ur],Hr[Ur]=null,ht=Hr[--Ur],Hr[Ur]=null,pt=Hr[--Ur],Hr[Ur]=null}var Rr=null,_r=null,Xe=!1,Kr=null;function Ei(e,r){var o=$r(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=e,r=e.deletions,r===null?(e.deletions=[o],e.flags|=16):r.push(o)}function Ti(e,r){switch(e.tag){case 5:var o=e.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Rr=e,_r=Ct(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Rr=e,_r=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Bt!==null?{id:pt,overflow:ht}:null,e.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=$r(18,null,null,0),o.stateNode=r,o.return=e,e.child=o,Rr=e,_r=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ua(e){if(Xe){var r=_r;if(r){var o=r;if(!Ti(e,r)){if(da(e))throw Error(i(418));r=Ct(o.nextSibling);var n=Rr;r&&Ti(e,r)?Ei(n,o):(e.flags=e.flags&-4097|2,Xe=!1,Rr=e)}}else{if(da(e))throw Error(i(418));e.flags=e.flags&-4097|2,Xe=!1,Rr=e}}}function zi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rr=e}function Un(e){if(e!==Rr)return!1;if(!Xe)return zi(e),Xe=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!ta(e.type,e.memoizedProps)),r&&(r=_r)){if(da(e))throw Mi(),Error(i(418));for(;r;)Ei(e,r),r=Ct(r.nextSibling)}if(zi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(r===0){_r=Ct(e.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}e=e.nextSibling}_r=null}}else _r=Rr?Ct(e.stateNode.nextSibling):null;return!0}function Mi(){for(var e=_r;e;)e=Ct(e.nextSibling)}function po(){_r=Rr=null,Xe=!1}function pa(e){Kr===null?Kr=[e]:Kr.push(e)}var $u=U.ReactCurrentBatchConfig;function $o(e,r,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var n=o.stateNode}if(!n)throw Error(i(147,e));var l=n,a=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===a?r.ref:(r=function(c){var m=l.refs;c===null?delete m[a]:m[a]=c},r._stringRef=a,r)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Bn(e,r){throw e=Object.prototype.toString.call(r),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Oi(e){var r=e._init;return r(e._payload)}function Di(e){function r(T,k){if(e){var z=T.deletions;z===null?(T.deletions=[k],T.flags|=16):z.push(k)}}function o(T,k){if(!e)return null;for(;k!==null;)r(T,k),k=k.sibling;return null}function n(T,k){for(T=new Map;k!==null;)k.key!==null?T.set(k.key,k):T.set(k.index,k),k=k.sibling;return T}function l(T,k){return T=At(T,k),T.index=0,T.sibling=null,T}function a(T,k,z){return T.index=z,e?(z=T.alternate,z!==null?(z=z.index,z<k?(T.flags|=2,k):z):(T.flags|=2,k)):(T.flags|=1048576,k)}function c(T){return e&&T.alternate===null&&(T.flags|=2),T}function m(T,k,z,te){return k===null||k.tag!==6?(k=os(z,T.mode,te),k.return=T,k):(k=l(k,z),k.return=T,k)}function v(T,k,z,te){var fe=z.type;return fe===R?Y(T,k,z.props.children,te,z.key):k!==null&&(k.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Pe&&Oi(fe)===k.type)?(te=l(k,z.props),te.ref=$o(T,k,z),te.return=T,te):(te=pl(z.type,z.key,z.props,null,T.mode,te),te.ref=$o(T,k,z),te.return=T,te)}function D(T,k,z,te){return k===null||k.tag!==4||k.stateNode.containerInfo!==z.containerInfo||k.stateNode.implementation!==z.implementation?(k=ns(z,T.mode,te),k.return=T,k):(k=l(k,z.children||[]),k.return=T,k)}function Y(T,k,z,te,fe){return k===null||k.tag!==7?(k=Gt(z,T.mode,te,fe),k.return=T,k):(k=l(k,z),k.return=T,k)}function K(T,k,z){if(typeof k=="string"&&k!==""||typeof k=="number")return k=os(""+k,T.mode,z),k.return=T,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case H:return z=pl(k.type,k.key,k.props,null,T.mode,z),z.ref=$o(T,null,k),z.return=T,z;case W:return k=ns(k,T.mode,z),k.return=T,k;case Pe:var te=k._init;return K(T,te(k._payload),z)}if(Oe(k)||ae(k))return k=Gt(k,T.mode,z,null),k.return=T,k;Bn(T,k)}return null}function $(T,k,z,te){var fe=k!==null?k.key:null;if(typeof z=="string"&&z!==""||typeof z=="number")return fe!==null?null:m(T,k,""+z,te);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case H:return z.key===fe?v(T,k,z,te):null;case W:return z.key===fe?D(T,k,z,te):null;case Pe:return fe=z._init,$(T,k,fe(z._payload),te)}if(Oe(z)||ae(z))return fe!==null?null:Y(T,k,z,te,null);Bn(T,z)}return null}function le(T,k,z,te,fe){if(typeof te=="string"&&te!==""||typeof te=="number")return T=T.get(z)||null,m(k,T,""+te,fe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case H:return T=T.get(te.key===null?z:te.key)||null,v(k,T,te,fe);case W:return T=T.get(te.key===null?z:te.key)||null,D(k,T,te,fe);case Pe:var be=te._init;return le(T,k,z,be(te._payload),fe)}if(Oe(te)||ae(te))return T=T.get(z)||null,Y(k,T,te,fe,null);Bn(k,te)}return null}function ue(T,k,z,te){for(var fe=null,be=null,ke=k,je=k=0,pr=null;ke!==null&&je<z.length;je++){ke.index>je?(pr=ke,ke=null):pr=ke.sibling;var Ie=$(T,ke,z[je],te);if(Ie===null){ke===null&&(ke=pr);break}e&&ke&&Ie.alternate===null&&r(T,ke),k=a(Ie,k,je),be===null?fe=Ie:be.sibling=Ie,be=Ie,ke=pr}if(je===z.length)return o(T,ke),Xe&&Wt(T,je),fe;if(ke===null){for(;je<z.length;je++)ke=K(T,z[je],te),ke!==null&&(k=a(ke,k,je),be===null?fe=ke:be.sibling=ke,be=ke);return Xe&&Wt(T,je),fe}for(ke=n(T,ke);je<z.length;je++)pr=le(ke,T,je,z[je],te),pr!==null&&(e&&pr.alternate!==null&&ke.delete(pr.key===null?je:pr.key),k=a(pr,k,je),be===null?fe=pr:be.sibling=pr,be=pr);return e&&ke.forEach(function(It){return r(T,It)}),Xe&&Wt(T,je),fe}function pe(T,k,z,te){var fe=ae(z);if(typeof fe!="function")throw Error(i(150));if(z=fe.call(z),z==null)throw Error(i(151));for(var be=fe=null,ke=k,je=k=0,pr=null,Ie=z.next();ke!==null&&!Ie.done;je++,Ie=z.next()){ke.index>je?(pr=ke,ke=null):pr=ke.sibling;var It=$(T,ke,Ie.value,te);if(It===null){ke===null&&(ke=pr);break}e&&ke&&It.alternate===null&&r(T,ke),k=a(It,k,je),be===null?fe=It:be.sibling=It,be=It,ke=pr}if(Ie.done)return o(T,ke),Xe&&Wt(T,je),fe;if(ke===null){for(;!Ie.done;je++,Ie=z.next())Ie=K(T,Ie.value,te),Ie!==null&&(k=a(Ie,k,je),be===null?fe=Ie:be.sibling=Ie,be=Ie);return Xe&&Wt(T,je),fe}for(ke=n(T,ke);!Ie.done;je++,Ie=z.next())Ie=le(ke,T,je,Ie.value,te),Ie!==null&&(e&&Ie.alternate!==null&&ke.delete(Ie.key===null?je:Ie.key),k=a(Ie,k,je),be===null?fe=Ie:be.sibling=Ie,be=Ie);return e&&ke.forEach(function(jp){return r(T,jp)}),Xe&&Wt(T,je),fe}function tr(T,k,z,te){if(typeof z=="object"&&z!==null&&z.type===R&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case H:e:{for(var fe=z.key,be=k;be!==null;){if(be.key===fe){if(fe=z.type,fe===R){if(be.tag===7){o(T,be.sibling),k=l(be,z.props.children),k.return=T,T=k;break e}}else if(be.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===Pe&&Oi(fe)===be.type){o(T,be.sibling),k=l(be,z.props),k.ref=$o(T,be,z),k.return=T,T=k;break e}o(T,be);break}else r(T,be);be=be.sibling}z.type===R?(k=Gt(z.props.children,T.mode,te,z.key),k.return=T,T=k):(te=pl(z.type,z.key,z.props,null,T.mode,te),te.ref=$o(T,k,z),te.return=T,T=te)}return c(T);case W:e:{for(be=z.key;k!==null;){if(k.key===be)if(k.tag===4&&k.stateNode.containerInfo===z.containerInfo&&k.stateNode.implementation===z.implementation){o(T,k.sibling),k=l(k,z.children||[]),k.return=T,T=k;break e}else{o(T,k);break}else r(T,k);k=k.sibling}k=ns(z,T.mode,te),k.return=T,T=k}return c(T);case Pe:return be=z._init,tr(T,k,be(z._payload),te)}if(Oe(z))return ue(T,k,z,te);if(ae(z))return pe(T,k,z,te);Bn(T,z)}return typeof z=="string"&&z!==""||typeof z=="number"?(z=""+z,k!==null&&k.tag===6?(o(T,k.sibling),k=l(k,z),k.return=T,T=k):(o(T,k),k=os(z,T.mode,te),k.return=T,T=k),c(T)):o(T,k)}return tr}var ho=Di(!0),Ri=Di(!1),Wn=St(null),qn=null,mo=null,ha=null;function ma(){ha=mo=qn=null}function fa(e){var r=Wn.current;Ye(Wn),e._currentValue=r}function ga(e,r,o){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===o)break;e=e.return}}function fo(e,r){qn=e,ha=mo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Er=!0),e.firstContext=null)}function Br(e){var r=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:r,next:null},mo===null){if(qn===null)throw Error(i(308));mo=e,qn.dependencies={lanes:0,firstContext:e}}else mo=mo.next=e;return r}var qt=null;function xa(e){qt===null?qt=[e]:qt.push(e)}function _i(e,r,o,n){var l=r.interleaved;return l===null?(o.next=o,xa(r)):(o.next=l.next,l.next=o),r.interleaved=o,mt(e,n)}function mt(e,r){e.lanes|=r;var o=e.alternate;for(o!==null&&(o.lanes|=r),o=e,e=e.return;e!==null;)e.childLanes|=r,o=e.alternate,o!==null&&(o.childLanes|=r),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Tt=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ai(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ft(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function zt(e,r,o){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(_e&2)!==0){var l=n.pending;return l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r,mt(e,o)}return l=n.interleaved,l===null?(r.next=r,xa(n)):(r.next=l.next,l.next=r),n.interleaved=r,mt(e,o)}function $n(e,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,o|=n,r.lanes=o,Ol(e,o)}}function Ii(e,r){var o=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,o===n)){var l=null,a=null;if(o=o.firstBaseUpdate,o!==null){do{var c={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};a===null?l=a=c:a=a.next=c,o=o.next}while(o!==null);a===null?l=a=r:a=a.next=r}else l=a=r;o={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=r:e.next=r,o.lastBaseUpdate=r}function Yn(e,r,o,n){var l=e.updateQueue;Tt=!1;var a=l.firstBaseUpdate,c=l.lastBaseUpdate,m=l.shared.pending;if(m!==null){l.shared.pending=null;var v=m,D=v.next;v.next=null,c===null?a=D:c.next=D,c=v;var Y=e.alternate;Y!==null&&(Y=Y.updateQueue,m=Y.lastBaseUpdate,m!==c&&(m===null?Y.firstBaseUpdate=D:m.next=D,Y.lastBaseUpdate=v))}if(a!==null){var K=l.baseState;c=0,Y=D=v=null,m=a;do{var $=m.lane,le=m.eventTime;if((n&$)===$){Y!==null&&(Y=Y.next={eventTime:le,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var ue=e,pe=m;switch($=r,le=o,pe.tag){case 1:if(ue=pe.payload,typeof ue=="function"){K=ue.call(le,K,$);break e}K=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=pe.payload,$=typeof ue=="function"?ue.call(le,K,$):ue,$==null)break e;K=re({},K,$);break e;case 2:Tt=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,$=l.effects,$===null?l.effects=[m]:$.push(m))}else le={eventTime:le,lane:$,tag:m.tag,payload:m.payload,callback:m.callback,next:null},Y===null?(D=Y=le,v=K):Y=Y.next=le,c|=$;if(m=m.next,m===null){if(m=l.shared.pending,m===null)break;$=m,m=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);if(Y===null&&(v=K),l.baseState=v,l.firstBaseUpdate=D,l.lastBaseUpdate=Y,r=l.shared.interleaved,r!==null){l=r;do c|=l.lane,l=l.next;while(l!==r)}else a===null&&(l.shared.lanes=0);Vt|=c,e.lanes=c,e.memoizedState=K}}function Fi(e,r,o){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],l=n.callback;if(l!==null){if(n.callback=null,n=o,typeof l!="function")throw Error(i(191,l));l.call(n)}}}var Yo={},lt=St(Yo),Vo=St(Yo),Qo=St(Yo);function $t(e){if(e===Yo)throw Error(i(174));return e}function ya(e,r){switch(qe(Qo,r),qe(Vo,e),qe(lt,Yo),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Qe(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Qe(r,e)}Ye(lt),qe(lt,r)}function go(){Ye(lt),Ye(Vo),Ye(Qo)}function Li(e){$t(Qo.current);var r=$t(lt.current),o=Qe(r,e.type);r!==o&&(qe(Vo,e),qe(lt,o))}function ba(e){Vo.current===e&&(Ye(lt),Ye(Vo))}var Je=St(0);function Vn(e){for(var r=e;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ka=[];function Na(){for(var e=0;e<ka.length;e++)ka[e]._workInProgressVersionPrimary=null;ka.length=0}var Qn=U.ReactCurrentDispatcher,wa=U.ReactCurrentBatchConfig,Yt=0,Ze=null,ar=null,dr=null,Xn=!1,Xo=!1,Ko=0,Yu=0;function xr(){throw Error(i(321))}function ja(e,r){if(r===null)return!1;for(var o=0;o<r.length&&o<e.length;o++)if(!Xr(e[o],r[o]))return!1;return!0}function Ca(e,r,o,n,l,a){if(Yt=a,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Qn.current=e===null||e.memoizedState===null?Ku:Gu,e=o(n,l),Xo){a=0;do{if(Xo=!1,Ko=0,25<=a)throw Error(i(301));a+=1,dr=ar=null,r.updateQueue=null,Qn.current=Ju,e=o(n,l)}while(Xo)}if(Qn.current=Jn,r=ar!==null&&ar.next!==null,Yt=0,dr=ar=Ze=null,Xn=!1,r)throw Error(i(300));return e}function Sa(){var e=Ko!==0;return Ko=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dr===null?Ze.memoizedState=dr=e:dr=dr.next=e,dr}function Wr(){if(ar===null){var e=Ze.alternate;e=e!==null?e.memoizedState:null}else e=ar.next;var r=dr===null?Ze.memoizedState:dr.next;if(r!==null)dr=r,ar=e;else{if(e===null)throw Error(i(310));ar=e,e={memoizedState:ar.memoizedState,baseState:ar.baseState,baseQueue:ar.baseQueue,queue:ar.queue,next:null},dr===null?Ze.memoizedState=dr=e:dr=dr.next=e}return dr}function Go(e,r){return typeof r=="function"?r(e):r}function Pa(e){var r=Wr(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var n=ar,l=n.baseQueue,a=o.pending;if(a!==null){if(l!==null){var c=l.next;l.next=a.next,a.next=c}n.baseQueue=l=a,o.pending=null}if(l!==null){a=l.next,n=n.baseState;var m=c=null,v=null,D=a;do{var Y=D.lane;if((Yt&Y)===Y)v!==null&&(v=v.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),n=D.hasEagerState?D.eagerState:e(n,D.action);else{var K={lane:Y,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};v===null?(m=v=K,c=n):v=v.next=K,Ze.lanes|=Y,Vt|=Y}D=D.next}while(D!==null&&D!==a);v===null?c=n:v.next=m,Xr(n,r.memoizedState)||(Er=!0),r.memoizedState=n,r.baseState=c,r.baseQueue=v,o.lastRenderedState=n}if(e=o.interleaved,e!==null){l=e;do a=l.lane,Ze.lanes|=a,Vt|=a,l=l.next;while(l!==e)}else l===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Ea(e){var r=Wr(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var n=o.dispatch,l=o.pending,a=r.memoizedState;if(l!==null){o.pending=null;var c=l=l.next;do a=e(a,c.action),c=c.next;while(c!==l);Xr(a,r.memoizedState)||(Er=!0),r.memoizedState=a,r.baseQueue===null&&(r.baseState=a),o.lastRenderedState=a}return[a,n]}function Hi(){}function Ui(e,r){var o=Ze,n=Wr(),l=r(),a=!Xr(n.memoizedState,l);if(a&&(n.memoizedState=l,Er=!0),n=n.queue,Ta(qi.bind(null,o,n,e),[e]),n.getSnapshot!==r||a||dr!==null&&dr.memoizedState.tag&1){if(o.flags|=2048,Jo(9,Wi.bind(null,o,n,l,r),void 0,null),ur===null)throw Error(i(349));(Yt&30)!==0||Bi(o,r,l)}return l}function Bi(e,r,o){e.flags|=16384,e={getSnapshot:r,value:o},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[e]):(o=r.stores,o===null?r.stores=[e]:o.push(e))}function Wi(e,r,o,n){r.value=o,r.getSnapshot=n,$i(r)&&Yi(e)}function qi(e,r,o){return o(function(){$i(r)&&Yi(e)})}function $i(e){var r=e.getSnapshot;e=e.value;try{var o=r();return!Xr(e,o)}catch{return!0}}function Yi(e){var r=mt(e,1);r!==null&&et(r,e,1,-1)}function Vi(e){var r=at();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},r.queue=e,e=e.dispatch=Xu.bind(null,Ze,e),[r.memoizedState,e]}function Jo(e,r,o,n){return e={tag:e,create:r,destroy:o,deps:n,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=e.next=e):(o=r.lastEffect,o===null?r.lastEffect=e.next=e:(n=o.next,o.next=e,e.next=n,r.lastEffect=e)),e}function Qi(){return Wr().memoizedState}function Kn(e,r,o,n){var l=at();Ze.flags|=e,l.memoizedState=Jo(1|r,o,void 0,n===void 0?null:n)}function Gn(e,r,o,n){var l=Wr();n=n===void 0?null:n;var a=void 0;if(ar!==null){var c=ar.memoizedState;if(a=c.destroy,n!==null&&ja(n,c.deps)){l.memoizedState=Jo(r,o,a,n);return}}Ze.flags|=e,l.memoizedState=Jo(1|r,o,a,n)}function Xi(e,r){return Kn(8390656,8,e,r)}function Ta(e,r){return Gn(2048,8,e,r)}function Ki(e,r){return Gn(4,2,e,r)}function Gi(e,r){return Gn(4,4,e,r)}function Ji(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Zi(e,r,o){return o=o!=null?o.concat([e]):null,Gn(4,4,Ji.bind(null,r,e),o)}function za(){}function ec(e,r){var o=Wr();r=r===void 0?null:r;var n=o.memoizedState;return n!==null&&r!==null&&ja(r,n[1])?n[0]:(o.memoizedState=[e,r],e)}function rc(e,r){var o=Wr();r=r===void 0?null:r;var n=o.memoizedState;return n!==null&&r!==null&&ja(r,n[1])?n[0]:(e=e(),o.memoizedState=[e,r],e)}function tc(e,r,o){return(Yt&21)===0?(e.baseState&&(e.baseState=!1,Er=!0),e.memoizedState=o):(Xr(o,r)||(o=Os(),Ze.lanes|=o,Vt|=o,e.baseState=!0),r)}function Vu(e,r){var o=Le;Le=o!==0&&4>o?o:4,e(!0);var n=wa.transition;wa.transition={};try{e(!1),r()}finally{Le=o,wa.transition=n}}function oc(){return Wr().memoizedState}function Qu(e,r,o){var n=Rt(e);if(o={lane:n,action:o,hasEagerState:!1,eagerState:null,next:null},nc(e))lc(r,o);else if(o=_i(e,r,o,n),o!==null){var l=Nr();et(o,e,n,l),ac(o,r,n)}}function Xu(e,r,o){var n=Rt(e),l={lane:n,action:o,hasEagerState:!1,eagerState:null,next:null};if(nc(e))lc(r,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=r.lastRenderedReducer,a!==null))try{var c=r.lastRenderedState,m=a(c,o);if(l.hasEagerState=!0,l.eagerState=m,Xr(m,c)){var v=r.interleaved;v===null?(l.next=l,xa(r)):(l.next=v.next,v.next=l),r.interleaved=l;return}}catch{}finally{}o=_i(e,r,l,n),o!==null&&(l=Nr(),et(o,e,n,l),ac(o,r,n))}}function nc(e){var r=e.alternate;return e===Ze||r!==null&&r===Ze}function lc(e,r){Xo=Xn=!0;var o=e.pending;o===null?r.next=r:(r.next=o.next,o.next=r),e.pending=r}function ac(e,r,o){if((o&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,o|=n,r.lanes=o,Ol(e,o)}}var Jn={readContext:Br,useCallback:xr,useContext:xr,useEffect:xr,useImperativeHandle:xr,useInsertionEffect:xr,useLayoutEffect:xr,useMemo:xr,useReducer:xr,useRef:xr,useState:xr,useDebugValue:xr,useDeferredValue:xr,useTransition:xr,useMutableSource:xr,useSyncExternalStore:xr,useId:xr,unstable_isNewReconciler:!1},Ku={readContext:Br,useCallback:function(e,r){return at().memoizedState=[e,r===void 0?null:r],e},useContext:Br,useEffect:Xi,useImperativeHandle:function(e,r,o){return o=o!=null?o.concat([e]):null,Kn(4194308,4,Ji.bind(null,r,e),o)},useLayoutEffect:function(e,r){return Kn(4194308,4,e,r)},useInsertionEffect:function(e,r){return Kn(4,2,e,r)},useMemo:function(e,r){var o=at();return r=r===void 0?null:r,e=e(),o.memoizedState=[e,r],e},useReducer:function(e,r,o){var n=at();return r=o!==void 0?o(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Qu.bind(null,Ze,e),[n.memoizedState,e]},useRef:function(e){var r=at();return e={current:e},r.memoizedState=e},useState:Vi,useDebugValue:za,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Vi(!1),r=e[0];return e=Vu.bind(null,e[1]),at().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,o){var n=Ze,l=at();if(Xe){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),ur===null)throw Error(i(349));(Yt&30)!==0||Bi(n,r,o)}l.memoizedState=o;var a={value:o,getSnapshot:r};return l.queue=a,Xi(qi.bind(null,n,a,e),[e]),n.flags|=2048,Jo(9,Wi.bind(null,n,a,o,r),void 0,null),o},useId:function(){var e=at(),r=ur.identifierPrefix;if(Xe){var o=ht,n=pt;o=(n&~(1<<32-Qr(n)-1)).toString(32)+o,r=":"+r+"R"+o,o=Ko++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Yu++,r=":"+r+"r"+o.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},Gu={readContext:Br,useCallback:ec,useContext:Br,useEffect:Ta,useImperativeHandle:Zi,useInsertionEffect:Ki,useLayoutEffect:Gi,useMemo:rc,useReducer:Pa,useRef:Qi,useState:function(){return Pa(Go)},useDebugValue:za,useDeferredValue:function(e){var r=Wr();return tc(r,ar.memoizedState,e)},useTransition:function(){var e=Pa(Go)[0],r=Wr().memoizedState;return[e,r]},useMutableSource:Hi,useSyncExternalStore:Ui,useId:oc,unstable_isNewReconciler:!1},Ju={readContext:Br,useCallback:ec,useContext:Br,useEffect:Ta,useImperativeHandle:Zi,useInsertionEffect:Ki,useLayoutEffect:Gi,useMemo:rc,useReducer:Ea,useRef:Qi,useState:function(){return Ea(Go)},useDebugValue:za,useDeferredValue:function(e){var r=Wr();return ar===null?r.memoizedState=e:tc(r,ar.memoizedState,e)},useTransition:function(){var e=Ea(Go)[0],r=Wr().memoizedState;return[e,r]},useMutableSource:Hi,useSyncExternalStore:Ui,useId:oc,unstable_isNewReconciler:!1};function Gr(e,r){if(e&&e.defaultProps){r=re({},r),e=e.defaultProps;for(var o in e)r[o]===void 0&&(r[o]=e[o]);return r}return r}function Ma(e,r,o,n){r=e.memoizedState,o=o(n,r),o=o==null?r:re({},r,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Zn={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,r,o){e=e._reactInternals;var n=Nr(),l=Rt(e),a=ft(n,l);a.payload=r,o!=null&&(a.callback=o),r=zt(e,a,l),r!==null&&(et(r,e,l,n),$n(r,e,l))},enqueueReplaceState:function(e,r,o){e=e._reactInternals;var n=Nr(),l=Rt(e),a=ft(n,l);a.tag=1,a.payload=r,o!=null&&(a.callback=o),r=zt(e,a,l),r!==null&&(et(r,e,l,n),$n(r,e,l))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var o=Nr(),n=Rt(e),l=ft(o,n);l.tag=2,r!=null&&(l.callback=r),r=zt(e,l,n),r!==null&&(et(r,e,n,o),$n(r,e,n))}};function sc(e,r,o,n,l,a,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,c):r.prototype&&r.prototype.isPureReactComponent?!Fo(o,n)||!Fo(l,a):!0}function ic(e,r,o){var n=!1,l=Pt,a=r.contextType;return typeof a=="object"&&a!==null?a=Br(a):(l=Pr(r)?Ut:gr.current,n=r.contextTypes,a=(n=n!=null)?io(e,l):Pt),r=new r(o,a),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Zn,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),r}function cc(e,r,o,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,n),r.state!==e&&Zn.enqueueReplaceState(r,r.state,null)}function Oa(e,r,o,n){var l=e.stateNode;l.props=o,l.state=e.memoizedState,l.refs={},va(e);var a=r.contextType;typeof a=="object"&&a!==null?l.context=Br(a):(a=Pr(r)?Ut:gr.current,l.context=io(e,a)),l.state=e.memoizedState,a=r.getDerivedStateFromProps,typeof a=="function"&&(Ma(e,r,a,o),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(r=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),r!==l.state&&Zn.enqueueReplaceState(l,l.state,null),Yn(e,o,l,n),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function xo(e,r){try{var o="",n=r;do o+=ce(n),n=n.return;while(n);var l=o}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:r,stack:l,digest:null}}function Da(e,r,o){return{value:e,source:null,stack:o??null,digest:r??null}}function Ra(e,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var Zu=typeof WeakMap=="function"?WeakMap:Map;function dc(e,r,o){o=ft(-1,o),o.tag=3,o.payload={element:null};var n=r.value;return o.callback=function(){al||(al=!0,Xa=n),Ra(e,r)},o}function uc(e,r,o){o=ft(-1,o),o.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var l=r.value;o.payload=function(){return n(l)},o.callback=function(){Ra(e,r)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(o.callback=function(){Ra(e,r),typeof n!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var c=r.stack;this.componentDidCatch(r.value,{componentStack:c!==null?c:""})}),o}function pc(e,r,o){var n=e.pingCache;if(n===null){n=e.pingCache=new Zu;var l=new Set;n.set(r,l)}else l=n.get(r),l===void 0&&(l=new Set,n.set(r,l));l.has(o)||(l.add(o),e=hp.bind(null,e,r,o),r.then(e,e))}function hc(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function mc(e,r,o,n,l){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ft(-1,1),r.tag=2,zt(o,r,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var ep=U.ReactCurrentOwner,Er=!1;function kr(e,r,o,n){r.child=e===null?Ri(r,null,o,n):ho(r,e.child,o,n)}function fc(e,r,o,n,l){o=o.render;var a=r.ref;return fo(r,l),n=Ca(e,r,o,n,a,l),o=Sa(),e!==null&&!Er?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,gt(e,r,l)):(Xe&&o&&ia(r),r.flags|=1,kr(e,r,n,l),r.child)}function gc(e,r,o,n,l){if(e===null){var a=o.type;return typeof a=="function"&&!ts(a)&&a.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=a,xc(e,r,a,n,l)):(e=pl(o.type,null,n,r,r.mode,l),e.ref=r.ref,e.return=r,r.child=e)}if(a=e.child,(e.lanes&l)===0){var c=a.memoizedProps;if(o=o.compare,o=o!==null?o:Fo,o(c,n)&&e.ref===r.ref)return gt(e,r,l)}return r.flags|=1,e=At(a,n),e.ref=r.ref,e.return=r,r.child=e}function xc(e,r,o,n,l){if(e!==null){var a=e.memoizedProps;if(Fo(a,n)&&e.ref===r.ref)if(Er=!1,r.pendingProps=n=a,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Er=!0);else return r.lanes=e.lanes,gt(e,r,l)}return _a(e,r,o,n,l)}function vc(e,r,o){var n=r.pendingProps,l=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(yo,Ar),Ar|=o;else{if((o&1073741824)===0)return e=a!==null?a.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,qe(yo,Ar),Ar|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:o,qe(yo,Ar),Ar|=n}else a!==null?(n=a.baseLanes|o,r.memoizedState=null):n=o,qe(yo,Ar),Ar|=n;return kr(e,r,l,o),r.child}function yc(e,r){var o=r.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function _a(e,r,o,n,l){var a=Pr(o)?Ut:gr.current;return a=io(r,a),fo(r,l),o=Ca(e,r,o,n,a,l),n=Sa(),e!==null&&!Er?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~l,gt(e,r,l)):(Xe&&n&&ia(r),r.flags|=1,kr(e,r,o,l),r.child)}function bc(e,r,o,n,l){if(Pr(o)){var a=!0;In(r)}else a=!1;if(fo(r,l),r.stateNode===null)rl(e,r),ic(r,o,n),Oa(r,o,n,l),n=!0;else if(e===null){var c=r.stateNode,m=r.memoizedProps;c.props=m;var v=c.context,D=o.contextType;typeof D=="object"&&D!==null?D=Br(D):(D=Pr(o)?Ut:gr.current,D=io(r,D));var Y=o.getDerivedStateFromProps,K=typeof Y=="function"||typeof c.getSnapshotBeforeUpdate=="function";K||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==n||v!==D)&&cc(r,c,n,D),Tt=!1;var $=r.memoizedState;c.state=$,Yn(r,n,c,l),v=r.memoizedState,m!==n||$!==v||Sr.current||Tt?(typeof Y=="function"&&(Ma(r,o,Y,n),v=r.memoizedState),(m=Tt||sc(r,o,m,n,$,v,D))?(K||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(r.flags|=4194308)):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=v),c.props=n,c.state=v,c.context=D,n=m):(typeof c.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{c=r.stateNode,Ai(e,r),m=r.memoizedProps,D=r.type===r.elementType?m:Gr(r.type,m),c.props=D,K=r.pendingProps,$=c.context,v=o.contextType,typeof v=="object"&&v!==null?v=Br(v):(v=Pr(o)?Ut:gr.current,v=io(r,v));var le=o.getDerivedStateFromProps;(Y=typeof le=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==K||$!==v)&&cc(r,c,n,v),Tt=!1,$=r.memoizedState,c.state=$,Yn(r,n,c,l);var ue=r.memoizedState;m!==K||$!==ue||Sr.current||Tt?(typeof le=="function"&&(Ma(r,o,le,n),ue=r.memoizedState),(D=Tt||sc(r,o,D,n,$,ue,v)||!1)?(Y||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,ue,v),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,ue,v)),typeof c.componentDidUpdate=="function"&&(r.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&$===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&$===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=ue),c.props=n,c.state=ue,c.context=v,n=D):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&$===e.memoizedState||(r.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&$===e.memoizedState||(r.flags|=1024),n=!1)}return Aa(e,r,o,n,a,l)}function Aa(e,r,o,n,l,a){yc(e,r);var c=(r.flags&128)!==0;if(!n&&!c)return l&&Ci(r,o,!1),gt(e,r,a);n=r.stateNode,ep.current=r;var m=c&&typeof o.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&c?(r.child=ho(r,e.child,null,a),r.child=ho(r,null,m,a)):kr(e,r,m,a),r.memoizedState=n.state,l&&Ci(r,o,!0),r.child}function kc(e){var r=e.stateNode;r.pendingContext?wi(e,r.pendingContext,r.pendingContext!==r.context):r.context&&wi(e,r.context,!1),ya(e,r.containerInfo)}function Nc(e,r,o,n,l){return po(),pa(l),r.flags|=256,kr(e,r,o,n),r.child}var Ia={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function wc(e,r,o){var n=r.pendingProps,l=Je.current,a=!1,c=(r.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(l&2)!==0),m?(a=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),qe(Je,l&1),e===null)return ua(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(c=n.children,e=n.fallback,a?(n=r.mode,a=r.child,c={mode:"hidden",children:c},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=c):a=hl(c,n,0,null),e=Gt(e,n,o,null),a.return=r,e.return=r,a.sibling=e,r.child=a,r.child.memoizedState=Fa(o),r.memoizedState=Ia,e):La(r,c));if(l=e.memoizedState,l!==null&&(m=l.dehydrated,m!==null))return rp(e,r,c,n,m,l,o);if(a){a=n.fallback,c=r.mode,l=e.child,m=l.sibling;var v={mode:"hidden",children:n.children};return(c&1)===0&&r.child!==l?(n=r.child,n.childLanes=0,n.pendingProps=v,r.deletions=null):(n=At(l,v),n.subtreeFlags=l.subtreeFlags&14680064),m!==null?a=At(m,a):(a=Gt(a,c,o,null),a.flags|=2),a.return=r,n.return=r,n.sibling=a,r.child=n,n=a,a=r.child,c=e.child.memoizedState,c=c===null?Fa(o):{baseLanes:c.baseLanes|o,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=e.childLanes&~o,r.memoizedState=Ia,n}return a=e.child,e=a.sibling,n=At(a,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=o),n.return=r,n.sibling=null,e!==null&&(o=r.deletions,o===null?(r.deletions=[e],r.flags|=16):o.push(e)),r.child=n,r.memoizedState=null,n}function La(e,r){return r=hl({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function el(e,r,o,n){return n!==null&&pa(n),ho(r,e.child,null,o),e=La(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function rp(e,r,o,n,l,a,c){if(o)return r.flags&256?(r.flags&=-257,n=Da(Error(i(422))),el(e,r,c,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(a=n.fallback,l=r.mode,n=hl({mode:"visible",children:n.children},l,0,null),a=Gt(a,l,c,null),a.flags|=2,n.return=r,a.return=r,n.sibling=a,r.child=n,(r.mode&1)!==0&&ho(r,e.child,null,c),r.child.memoizedState=Fa(c),r.memoizedState=Ia,a);if((r.mode&1)===0)return el(e,r,c,null);if(l.data==="$!"){if(n=l.nextSibling&&l.nextSibling.dataset,n)var m=n.dgst;return n=m,a=Error(i(419)),n=Da(a,n,void 0),el(e,r,c,n)}if(m=(c&e.childLanes)!==0,Er||m){if(n=ur,n!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(n.suspendedLanes|c))!==0?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,mt(e,l),et(n,e,l,-1))}return rs(),n=Da(Error(i(421))),el(e,r,c,n)}return l.data==="$?"?(r.flags|=128,r.child=e.child,r=mp.bind(null,e),l._reactRetry=r,null):(e=a.treeContext,_r=Ct(l.nextSibling),Rr=r,Xe=!0,Kr=null,e!==null&&(Hr[Ur++]=pt,Hr[Ur++]=ht,Hr[Ur++]=Bt,pt=e.id,ht=e.overflow,Bt=r),r=La(r,n.children),r.flags|=4096,r)}function jc(e,r,o){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),ga(e.return,r,o)}function Ha(e,r,o,n,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:o,tailMode:l}:(a.isBackwards=r,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=o,a.tailMode=l)}function Cc(e,r,o){var n=r.pendingProps,l=n.revealOrder,a=n.tail;if(kr(e,r,n.children,o),n=Je.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,o,r);else if(e.tag===19)jc(e,o,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(qe(Je,n),(r.mode&1)===0)r.memoizedState=null;else switch(l){case"forwards":for(o=r.child,l=null;o!==null;)e=o.alternate,e!==null&&Vn(e)===null&&(l=o),o=o.sibling;o=l,o===null?(l=r.child,r.child=null):(l=o.sibling,o.sibling=null),Ha(r,!1,l,o,a);break;case"backwards":for(o=null,l=r.child,r.child=null;l!==null;){if(e=l.alternate,e!==null&&Vn(e)===null){r.child=l;break}e=l.sibling,l.sibling=o,o=l,l=e}Ha(r,!0,o,null,a);break;case"together":Ha(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function rl(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function gt(e,r,o){if(e!==null&&(r.dependencies=e.dependencies),Vt|=r.lanes,(o&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(i(153));if(r.child!==null){for(e=r.child,o=At(e,e.pendingProps),r.child=o,o.return=r;e.sibling!==null;)e=e.sibling,o=o.sibling=At(e,e.pendingProps),o.return=r;o.sibling=null}return r.child}function tp(e,r,o){switch(r.tag){case 3:kc(r),po();break;case 5:Li(r);break;case 1:Pr(r.type)&&In(r);break;case 4:ya(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,l=r.memoizedProps.value;qe(Wn,n._currentValue),n._currentValue=l;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(qe(Je,Je.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?wc(e,r,o):(qe(Je,Je.current&1),e=gt(e,r,o),e!==null?e.sibling:null);qe(Je,Je.current&1);break;case 19:if(n=(o&r.childLanes)!==0,(e.flags&128)!==0){if(n)return Cc(e,r,o);r.flags|=128}if(l=r.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),qe(Je,Je.current),n)break;return null;case 22:case 23:return r.lanes=0,vc(e,r,o)}return gt(e,r,o)}var Sc,Ua,Pc,Ec;Sc=function(e,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ua=function(){},Pc=function(e,r,o,n){var l=e.memoizedProps;if(l!==n){e=r.stateNode,$t(lt.current);var a=null;switch(o){case"input":l=Ve(e,l),n=Ve(e,n),a=[];break;case"select":l=re({},l,{value:void 0}),n=re({},n,{value:void 0}),a=[];break;case"textarea":l=ve(e,l),n=ve(e,n),a=[];break;default:typeof l.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Rn)}Re(o,n);var c;o=null;for(D in l)if(!n.hasOwnProperty(D)&&l.hasOwnProperty(D)&&l[D]!=null)if(D==="style"){var m=l[D];for(c in m)m.hasOwnProperty(c)&&(o||(o={}),o[c]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(g.hasOwnProperty(D)?a||(a=[]):(a=a||[]).push(D,null));for(D in n){var v=n[D];if(m=l?.[D],n.hasOwnProperty(D)&&v!==m&&(v!=null||m!=null))if(D==="style")if(m){for(c in m)!m.hasOwnProperty(c)||v&&v.hasOwnProperty(c)||(o||(o={}),o[c]="");for(c in v)v.hasOwnProperty(c)&&m[c]!==v[c]&&(o||(o={}),o[c]=v[c])}else o||(a||(a=[]),a.push(D,o)),o=v;else D==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,m=m?m.__html:void 0,v!=null&&m!==v&&(a=a||[]).push(D,v)):D==="children"?typeof v!="string"&&typeof v!="number"||(a=a||[]).push(D,""+v):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(g.hasOwnProperty(D)?(v!=null&&D==="onScroll"&&$e("scroll",e),a||m===v||(a=[])):(a=a||[]).push(D,v))}o&&(a=a||[]).push("style",o);var D=a;(r.updateQueue=D)&&(r.flags|=4)}},Ec=function(e,r,o,n){o!==n&&(r.flags|=4)};function Zo(e,r){if(!Xe)switch(e.tailMode){case"hidden":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var n=null;o!==null;)o.alternate!==null&&(n=o),o=o.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function vr(e){var r=e.alternate!==null&&e.alternate.child===e.child,o=0,n=0;if(r)for(var l=e.child;l!==null;)o|=l.lanes|l.childLanes,n|=l.subtreeFlags&14680064,n|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)o|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=o,r}function op(e,r,o){var n=r.pendingProps;switch(ca(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vr(r),null;case 1:return Pr(r.type)&&An(),vr(r),null;case 3:return n=r.stateNode,go(),Ye(Sr),Ye(gr),Na(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Un(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Kr!==null&&(Ja(Kr),Kr=null))),Ua(e,r),vr(r),null;case 5:ba(r);var l=$t(Qo.current);if(o=r.type,e!==null&&r.stateNode!=null)Pc(e,r,o,n,l),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(i(166));return vr(r),null}if(e=$t(lt.current),Un(r)){n=r.stateNode,o=r.type;var a=r.memoizedProps;switch(n[nt]=r,n[Wo]=a,e=(r.mode&1)!==0,o){case"dialog":$e("cancel",n),$e("close",n);break;case"iframe":case"object":case"embed":$e("load",n);break;case"video":case"audio":for(l=0;l<Ho.length;l++)$e(Ho[l],n);break;case"source":$e("error",n);break;case"img":case"image":case"link":$e("error",n),$e("load",n);break;case"details":$e("toggle",n);break;case"input":br(n,a),$e("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},$e("invalid",n);break;case"textarea":Ne(n,a),$e("invalid",n)}Re(o,a),l=null;for(var c in a)if(a.hasOwnProperty(c)){var m=a[c];c==="children"?typeof m=="string"?n.textContent!==m&&(a.suppressHydrationWarning!==!0&&Dn(n.textContent,m,e),l=["children",m]):typeof m=="number"&&n.textContent!==""+m&&(a.suppressHydrationWarning!==!0&&Dn(n.textContent,m,e),l=["children",""+m]):g.hasOwnProperty(c)&&m!=null&&c==="onScroll"&&$e("scroll",n)}switch(o){case"input":cr(n),We(n,a,!0);break;case"textarea":cr(n),S(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Rn)}n=l,r.updateQueue=n,n!==null&&(r.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=se(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(o,{is:n.is}):(e=c.createElement(o),o==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,o),e[nt]=r,e[Wo]=n,Sc(e,r,!1,!1),r.stateNode=e;e:{switch(c=He(o,n),o){case"dialog":$e("cancel",e),$e("close",e),l=n;break;case"iframe":case"object":case"embed":$e("load",e),l=n;break;case"video":case"audio":for(l=0;l<Ho.length;l++)$e(Ho[l],e);l=n;break;case"source":$e("error",e),l=n;break;case"img":case"image":case"link":$e("error",e),$e("load",e),l=n;break;case"details":$e("toggle",e),l=n;break;case"input":br(e,n),l=Ve(e,n),$e("invalid",e);break;case"option":l=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},l=re({},n,{value:void 0}),$e("invalid",e);break;case"textarea":Ne(e,n),l=ve(e,n),$e("invalid",e);break;default:l=n}Re(o,l),m=l;for(a in m)if(m.hasOwnProperty(a)){var v=m[a];a==="style"?I(e,v):a==="dangerouslySetInnerHTML"?(v=v?v.__html:void 0,v!=null&&Be(e,v)):a==="children"?typeof v=="string"?(o!=="textarea"||v!=="")&&O(e,v):typeof v=="number"&&O(e,""+v):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(g.hasOwnProperty(a)?v!=null&&a==="onScroll"&&$e("scroll",e):v!=null&&M(e,a,v,c))}switch(o){case"input":cr(e),We(e,n,!1);break;case"textarea":cr(e),S(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Te(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?J(e,!!n.multiple,a,!1):n.defaultValue!=null&&J(e,!!n.multiple,n.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Rn)}switch(o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return vr(r),null;case 6:if(e&&r.stateNode!=null)Ec(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(i(166));if(o=$t(Qo.current),$t(lt.current),Un(r)){if(n=r.stateNode,o=r.memoizedProps,n[nt]=r,(a=n.nodeValue!==o)&&(e=Rr,e!==null))switch(e.tag){case 3:Dn(n.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Dn(n.nodeValue,o,(e.mode&1)!==0)}a&&(r.flags|=4)}else n=(o.nodeType===9?o:o.ownerDocument).createTextNode(n),n[nt]=r,r.stateNode=n}return vr(r),null;case 13:if(Ye(Je),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Xe&&_r!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Mi(),po(),r.flags|=98560,a=!1;else if(a=Un(r),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=r.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(i(317));a[nt]=r}else po(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;vr(r),a=!1}else Kr!==null&&(Ja(Kr),Kr=null),a=!0;if(!a)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Je.current&1)!==0?sr===0&&(sr=3):rs())),r.updateQueue!==null&&(r.flags|=4),vr(r),null);case 4:return go(),Ua(e,r),e===null&&Uo(r.stateNode.containerInfo),vr(r),null;case 10:return fa(r.type._context),vr(r),null;case 17:return Pr(r.type)&&An(),vr(r),null;case 19:if(Ye(Je),a=r.memoizedState,a===null)return vr(r),null;if(n=(r.flags&128)!==0,c=a.rendering,c===null)if(n)Zo(a,!1);else{if(sr!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(c=Vn(e),c!==null){for(r.flags|=128,Zo(a,!1),n=c.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=o,o=r.child;o!==null;)a=o,e=n,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,e=c.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return qe(Je,Je.current&1|2),r.child}e=e.sibling}a.tail!==null&&rr()>bo&&(r.flags|=128,n=!0,Zo(a,!1),r.lanes=4194304)}else{if(!n)if(e=Vn(c),e!==null){if(r.flags|=128,n=!0,o=e.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Zo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!Xe)return vr(r),null}else 2*rr()-a.renderingStartTime>bo&&o!==1073741824&&(r.flags|=128,n=!0,Zo(a,!1),r.lanes=4194304);a.isBackwards?(c.sibling=r.child,r.child=c):(o=a.last,o!==null?o.sibling=c:r.child=c,a.last=c)}return a.tail!==null?(r=a.tail,a.rendering=r,a.tail=r.sibling,a.renderingStartTime=rr(),r.sibling=null,o=Je.current,qe(Je,n?o&1|2:o&1),r):(vr(r),null);case 22:case 23:return es(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(Ar&1073741824)!==0&&(vr(r),r.subtreeFlags&6&&(r.flags|=8192)):vr(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function np(e,r){switch(ca(r),r.tag){case 1:return Pr(r.type)&&An(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return go(),Ye(Sr),Ye(gr),Na(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return ba(r),null;case 13:if(Ye(Je),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(i(340));po()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ye(Je),null;case 4:return go(),null;case 10:return fa(r.type._context),null;case 22:case 23:return es(),null;case 24:return null;default:return null}}var tl=!1,yr=!1,lp=typeof WeakSet=="function"?WeakSet:Set,ie=null;function vo(e,r){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(n){er(e,r,n)}else o.current=null}function Ba(e,r,o){try{o()}catch(n){er(e,r,n)}}var Tc=!1;function ap(e,r){if(ea=Nn,e=si(),Yl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var n=o.getSelection&&o.getSelection();if(n&&n.rangeCount!==0){o=n.anchorNode;var l=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{o.nodeType,a.nodeType}catch{o=null;break e}var c=0,m=-1,v=-1,D=0,Y=0,K=e,$=null;r:for(;;){for(var le;K!==o||l!==0&&K.nodeType!==3||(m=c+l),K!==a||n!==0&&K.nodeType!==3||(v=c+n),K.nodeType===3&&(c+=K.nodeValue.length),(le=K.firstChild)!==null;)$=K,K=le;for(;;){if(K===e)break r;if($===o&&++D===l&&(m=c),$===a&&++Y===n&&(v=c),(le=K.nextSibling)!==null)break;K=$,$=K.parentNode}K=le}o=m===-1||v===-1?null:{start:m,end:v}}else o=null}o=o||{start:0,end:0}}else o=null;for(ra={focusedElem:e,selectionRange:o},Nn=!1,ie=r;ie!==null;)if(r=ie,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,ie=e;else for(;ie!==null;){r=ie;try{var ue=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var pe=ue.memoizedProps,tr=ue.memoizedState,T=r.stateNode,k=T.getSnapshotBeforeUpdate(r.elementType===r.type?pe:Gr(r.type,pe),tr);T.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var z=r.stateNode.containerInfo;z.nodeType===1?z.textContent="":z.nodeType===9&&z.documentElement&&z.removeChild(z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(te){er(r,r.return,te)}if(e=r.sibling,e!==null){e.return=r.return,ie=e;break}ie=r.return}return ue=Tc,Tc=!1,ue}function en(e,r,o){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var l=n=n.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Ba(r,o,a)}l=l.next}while(l!==n)}}function ol(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var n=o.create;o.destroy=n()}o=o.next}while(o!==r)}}function Wa(e){var r=e.ref;if(r!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof r=="function"?r(e):r.current=e}}function zc(e){var r=e.alternate;r!==null&&(e.alternate=null,zc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[nt],delete r[Wo],delete r[la],delete r[Bu],delete r[Wu])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mc(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qa(e,r,o){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(e,r):o.insertBefore(e,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(e,o)):(r=o,r.appendChild(e)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Rn));else if(n!==4&&(e=e.child,e!==null))for(qa(e,r,o),e=e.sibling;e!==null;)qa(e,r,o),e=e.sibling}function $a(e,r,o){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?o.insertBefore(e,r):o.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for($a(e,r,o),e=e.sibling;e!==null;)$a(e,r,o),e=e.sibling}var mr=null,Jr=!1;function Mt(e,r,o){for(o=o.child;o!==null;)Dc(e,r,o),o=o.sibling}function Dc(e,r,o){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(gn,o)}catch{}switch(o.tag){case 5:yr||vo(o,r);case 6:var n=mr,l=Jr;mr=null,Mt(e,r,o),mr=n,Jr=l,mr!==null&&(Jr?(e=mr,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):mr.removeChild(o.stateNode));break;case 18:mr!==null&&(Jr?(e=mr,o=o.stateNode,e.nodeType===8?na(e.parentNode,o):e.nodeType===1&&na(e,o),Oo(e)):na(mr,o.stateNode));break;case 4:n=mr,l=Jr,mr=o.stateNode.containerInfo,Jr=!0,Mt(e,r,o),mr=n,Jr=l;break;case 0:case 11:case 14:case 15:if(!yr&&(n=o.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){l=n=n.next;do{var a=l,c=a.destroy;a=a.tag,c!==void 0&&((a&2)!==0||(a&4)!==0)&&Ba(o,r,c),l=l.next}while(l!==n)}Mt(e,r,o);break;case 1:if(!yr&&(vo(o,r),n=o.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=o.memoizedProps,n.state=o.memoizedState,n.componentWillUnmount()}catch(m){er(o,r,m)}Mt(e,r,o);break;case 21:Mt(e,r,o);break;case 22:o.mode&1?(yr=(n=yr)||o.memoizedState!==null,Mt(e,r,o),yr=n):Mt(e,r,o);break;default:Mt(e,r,o)}}function Rc(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new lp),r.forEach(function(n){var l=fp.bind(null,e,n);o.has(n)||(o.add(n),n.then(l,l))})}}function Zr(e,r){var o=r.deletions;if(o!==null)for(var n=0;n<o.length;n++){var l=o[n];try{var a=e,c=r,m=c;e:for(;m!==null;){switch(m.tag){case 5:mr=m.stateNode,Jr=!1;break e;case 3:mr=m.stateNode.containerInfo,Jr=!0;break e;case 4:mr=m.stateNode.containerInfo,Jr=!0;break e}m=m.return}if(mr===null)throw Error(i(160));Dc(a,c,l),mr=null,Jr=!1;var v=l.alternate;v!==null&&(v.return=null),l.return=null}catch(D){er(l,r,D)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)_c(r,e),r=r.sibling}function _c(e,r){var o=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zr(r,e),st(e),n&4){try{en(3,e,e.return),ol(3,e)}catch(pe){er(e,e.return,pe)}try{en(5,e,e.return)}catch(pe){er(e,e.return,pe)}}break;case 1:Zr(r,e),st(e),n&512&&o!==null&&vo(o,o.return);break;case 5:if(Zr(r,e),st(e),n&512&&o!==null&&vo(o,o.return),e.flags&32){var l=e.stateNode;try{O(l,"")}catch(pe){er(e,e.return,pe)}}if(n&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,c=o!==null?o.memoizedProps:a,m=e.type,v=e.updateQueue;if(e.updateQueue=null,v!==null)try{m==="input"&&a.type==="radio"&&a.name!=null&&jr(l,a),He(m,c);var D=He(m,a);for(c=0;c<v.length;c+=2){var Y=v[c],K=v[c+1];Y==="style"?I(l,K):Y==="dangerouslySetInnerHTML"?Be(l,K):Y==="children"?O(l,K):M(l,Y,K,D)}switch(m){case"input":Lr(l,a);break;case"textarea":ye(l,a);break;case"select":var $=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var le=a.value;le!=null?J(l,!!a.multiple,le,!1):$!==!!a.multiple&&(a.defaultValue!=null?J(l,!!a.multiple,a.defaultValue,!0):J(l,!!a.multiple,a.multiple?[]:"",!1))}l[Wo]=a}catch(pe){er(e,e.return,pe)}}break;case 6:if(Zr(r,e),st(e),n&4){if(e.stateNode===null)throw Error(i(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(pe){er(e,e.return,pe)}}break;case 3:if(Zr(r,e),st(e),n&4&&o!==null&&o.memoizedState.isDehydrated)try{Oo(r.containerInfo)}catch(pe){er(e,e.return,pe)}break;case 4:Zr(r,e),st(e);break;case 13:Zr(r,e),st(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Qa=rr())),n&4&&Rc(e);break;case 22:if(Y=o!==null&&o.memoizedState!==null,e.mode&1?(yr=(D=yr)||Y,Zr(r,e),yr=D):Zr(r,e),st(e),n&8192){if(D=e.memoizedState!==null,(e.stateNode.isHidden=D)&&!Y&&(e.mode&1)!==0)for(ie=e,Y=e.child;Y!==null;){for(K=ie=Y;ie!==null;){switch($=ie,le=$.child,$.tag){case 0:case 11:case 14:case 15:en(4,$,$.return);break;case 1:vo($,$.return);var ue=$.stateNode;if(typeof ue.componentWillUnmount=="function"){n=$,o=$.return;try{r=n,ue.props=r.memoizedProps,ue.state=r.memoizedState,ue.componentWillUnmount()}catch(pe){er(n,o,pe)}}break;case 5:vo($,$.return);break;case 22:if($.memoizedState!==null){Fc(K);continue}}le!==null?(le.return=$,ie=le):Fc(K)}Y=Y.sibling}e:for(Y=null,K=e;;){if(K.tag===5){if(Y===null){Y=K;try{l=K.stateNode,D?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(m=K.stateNode,v=K.memoizedProps.style,c=v!=null&&v.hasOwnProperty("display")?v.display:null,m.style.display=De("display",c))}catch(pe){er(e,e.return,pe)}}}else if(K.tag===6){if(Y===null)try{K.stateNode.nodeValue=D?"":K.memoizedProps}catch(pe){er(e,e.return,pe)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===e)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===e)break e;for(;K.sibling===null;){if(K.return===null||K.return===e)break e;Y===K&&(Y=null),K=K.return}Y===K&&(Y=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:Zr(r,e),st(e),n&4&&Rc(e);break;case 21:break;default:Zr(r,e),st(e)}}function st(e){var r=e.flags;if(r&2){try{e:{for(var o=e.return;o!==null;){if(Mc(o)){var n=o;break e}o=o.return}throw Error(i(160))}switch(n.tag){case 5:var l=n.stateNode;n.flags&32&&(O(l,""),n.flags&=-33);var a=Oc(e);$a(e,a,l);break;case 3:case 4:var c=n.stateNode.containerInfo,m=Oc(e);qa(e,m,c);break;default:throw Error(i(161))}}catch(v){er(e,e.return,v)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function sp(e,r,o){ie=e,Ac(e)}function Ac(e,r,o){for(var n=(e.mode&1)!==0;ie!==null;){var l=ie,a=l.child;if(l.tag===22&&n){var c=l.memoizedState!==null||tl;if(!c){var m=l.alternate,v=m!==null&&m.memoizedState!==null||yr;m=tl;var D=yr;if(tl=c,(yr=v)&&!D)for(ie=l;ie!==null;)c=ie,v=c.child,c.tag===22&&c.memoizedState!==null?Lc(l):v!==null?(v.return=c,ie=v):Lc(l);for(;a!==null;)ie=a,Ac(a),a=a.sibling;ie=l,tl=m,yr=D}Ic(e)}else(l.subtreeFlags&8772)!==0&&a!==null?(a.return=l,ie=a):Ic(e)}}function Ic(e){for(;ie!==null;){var r=ie;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:yr||ol(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!yr)if(o===null)n.componentDidMount();else{var l=r.elementType===r.type?o.memoizedProps:Gr(r.type,o.memoizedProps);n.componentDidUpdate(l,o.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=r.updateQueue;a!==null&&Fi(r,a,n);break;case 3:var c=r.updateQueue;if(c!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Fi(r,c,o)}break;case 5:var m=r.stateNode;if(o===null&&r.flags&4){o=m;var v=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":v.autoFocus&&o.focus();break;case"img":v.src&&(o.src=v.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var D=r.alternate;if(D!==null){var Y=D.memoizedState;if(Y!==null){var K=Y.dehydrated;K!==null&&Oo(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}yr||r.flags&512&&Wa(r)}catch($){er(r,r.return,$)}}if(r===e){ie=null;break}if(o=r.sibling,o!==null){o.return=r.return,ie=o;break}ie=r.return}}function Fc(e){for(;ie!==null;){var r=ie;if(r===e){ie=null;break}var o=r.sibling;if(o!==null){o.return=r.return,ie=o;break}ie=r.return}}function Lc(e){for(;ie!==null;){var r=ie;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{ol(4,r)}catch(v){er(r,o,v)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var l=r.return;try{n.componentDidMount()}catch(v){er(r,l,v)}}var a=r.return;try{Wa(r)}catch(v){er(r,a,v)}break;case 5:var c=r.return;try{Wa(r)}catch(v){er(r,c,v)}}}catch(v){er(r,r.return,v)}if(r===e){ie=null;break}var m=r.sibling;if(m!==null){m.return=r.return,ie=m;break}ie=r.return}}var ip=Math.ceil,nl=U.ReactCurrentDispatcher,Ya=U.ReactCurrentOwner,qr=U.ReactCurrentBatchConfig,_e=0,ur=null,nr=null,fr=0,Ar=0,yo=St(0),sr=0,rn=null,Vt=0,ll=0,Va=0,tn=null,Tr=null,Qa=0,bo=1/0,xt=null,al=!1,Xa=null,Ot=null,sl=!1,Dt=null,il=0,on=0,Ka=null,cl=-1,dl=0;function Nr(){return(_e&6)!==0?rr():cl!==-1?cl:cl=rr()}function Rt(e){return(e.mode&1)===0?1:(_e&2)!==0&&fr!==0?fr&-fr:$u.transition!==null?(dl===0&&(dl=Os()),dl):(e=Le,e!==0||(e=window.event,e=e===void 0?16:Us(e.type)),e)}function et(e,r,o,n){if(50<on)throw on=0,Ka=null,Error(i(185));Po(e,o,n),((_e&2)===0||e!==ur)&&(e===ur&&((_e&2)===0&&(ll|=o),sr===4&&_t(e,fr)),zr(e,n),o===1&&_e===0&&(r.mode&1)===0&&(bo=rr()+500,Fn&&Et()))}function zr(e,r){var o=e.callbackNode;$d(e,r);var n=yn(e,e===ur?fr:0);if(n===0)o!==null&&Ts(o),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(o!=null&&Ts(o),r===1)e.tag===0?qu(Uc.bind(null,e)):Si(Uc.bind(null,e)),Hu(function(){(_e&6)===0&&Et()}),o=null;else{switch(Ds(n)){case 1:o=Tl;break;case 4:o=zs;break;case 16:o=fn;break;case 536870912:o=Ms;break;default:o=fn}o=Xc(o,Hc.bind(null,e))}e.callbackPriority=r,e.callbackNode=o}}function Hc(e,r){if(cl=-1,dl=0,(_e&6)!==0)throw Error(i(327));var o=e.callbackNode;if(ko()&&e.callbackNode!==o)return null;var n=yn(e,e===ur?fr:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=ul(e,n);else{r=n;var l=_e;_e|=2;var a=Wc();(ur!==e||fr!==r)&&(xt=null,bo=rr()+500,Xt(e,r));do try{up();break}catch(m){Bc(e,m)}while(!0);ma(),nl.current=a,_e=l,nr!==null?r=0:(ur=null,fr=0,r=sr)}if(r!==0){if(r===2&&(l=zl(e),l!==0&&(n=l,r=Ga(e,l))),r===1)throw o=rn,Xt(e,0),_t(e,n),zr(e,rr()),o;if(r===6)_t(e,n);else{if(l=e.current.alternate,(n&30)===0&&!cp(l)&&(r=ul(e,n),r===2&&(a=zl(e),a!==0&&(n=a,r=Ga(e,a))),r===1))throw o=rn,Xt(e,0),_t(e,n),zr(e,rr()),o;switch(e.finishedWork=l,e.finishedLanes=n,r){case 0:case 1:throw Error(i(345));case 2:Kt(e,Tr,xt);break;case 3:if(_t(e,n),(n&130023424)===n&&(r=Qa+500-rr(),10<r)){if(yn(e,0)!==0)break;if(l=e.suspendedLanes,(l&n)!==n){Nr(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=oa(Kt.bind(null,e,Tr,xt),r);break}Kt(e,Tr,xt);break;case 4:if(_t(e,n),(n&4194240)===n)break;for(r=e.eventTimes,l=-1;0<n;){var c=31-Qr(n);a=1<<c,c=r[c],c>l&&(l=c),n&=~a}if(n=l,n=rr()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ip(n/1960))-n,10<n){e.timeoutHandle=oa(Kt.bind(null,e,Tr,xt),n);break}Kt(e,Tr,xt);break;case 5:Kt(e,Tr,xt);break;default:throw Error(i(329))}}}return zr(e,rr()),e.callbackNode===o?Hc.bind(null,e):null}function Ga(e,r){var o=tn;return e.current.memoizedState.isDehydrated&&(Xt(e,r).flags|=256),e=ul(e,r),e!==2&&(r=Tr,Tr=o,r!==null&&Ja(r)),e}function Ja(e){Tr===null?Tr=e:Tr.push.apply(Tr,e)}function cp(e){for(var r=e;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var n=0;n<o.length;n++){var l=o[n],a=l.getSnapshot;l=l.value;try{if(!Xr(a(),l))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _t(e,r){for(r&=~Va,r&=~ll,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var o=31-Qr(r),n=1<<o;e[o]=-1,r&=~n}}function Uc(e){if((_e&6)!==0)throw Error(i(327));ko();var r=yn(e,0);if((r&1)===0)return zr(e,rr()),null;var o=ul(e,r);if(e.tag!==0&&o===2){var n=zl(e);n!==0&&(r=n,o=Ga(e,n))}if(o===1)throw o=rn,Xt(e,0),_t(e,r),zr(e,rr()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Kt(e,Tr,xt),zr(e,rr()),null}function Za(e,r){var o=_e;_e|=1;try{return e(r)}finally{_e=o,_e===0&&(bo=rr()+500,Fn&&Et())}}function Qt(e){Dt!==null&&Dt.tag===0&&(_e&6)===0&&ko();var r=_e;_e|=1;var o=qr.transition,n=Le;try{if(qr.transition=null,Le=1,e)return e()}finally{Le=n,qr.transition=o,_e=r,(_e&6)===0&&Et()}}function es(){Ar=yo.current,Ye(yo)}function Xt(e,r){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Lu(o)),nr!==null)for(o=nr.return;o!==null;){var n=o;switch(ca(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&An();break;case 3:go(),Ye(Sr),Ye(gr),Na();break;case 5:ba(n);break;case 4:go();break;case 13:Ye(Je);break;case 19:Ye(Je);break;case 10:fa(n.type._context);break;case 22:case 23:es()}o=o.return}if(ur=e,nr=e=At(e.current,null),fr=Ar=r,sr=0,rn=null,Va=ll=Vt=0,Tr=tn=null,qt!==null){for(r=0;r<qt.length;r++)if(o=qt[r],n=o.interleaved,n!==null){o.interleaved=null;var l=n.next,a=o.pending;if(a!==null){var c=a.next;a.next=l,n.next=c}o.pending=n}qt=null}return e}function Bc(e,r){do{var o=nr;try{if(ma(),Qn.current=Jn,Xn){for(var n=Ze.memoizedState;n!==null;){var l=n.queue;l!==null&&(l.pending=null),n=n.next}Xn=!1}if(Yt=0,dr=ar=Ze=null,Xo=!1,Ko=0,Ya.current=null,o===null||o.return===null){sr=1,rn=r,nr=null;break}e:{var a=e,c=o.return,m=o,v=r;if(r=fr,m.flags|=32768,v!==null&&typeof v=="object"&&typeof v.then=="function"){var D=v,Y=m,K=Y.tag;if((Y.mode&1)===0&&(K===0||K===11||K===15)){var $=Y.alternate;$?(Y.updateQueue=$.updateQueue,Y.memoizedState=$.memoizedState,Y.lanes=$.lanes):(Y.updateQueue=null,Y.memoizedState=null)}var le=hc(c);if(le!==null){le.flags&=-257,mc(le,c,m,a,r),le.mode&1&&pc(a,D,r),r=le,v=D;var ue=r.updateQueue;if(ue===null){var pe=new Set;pe.add(v),r.updateQueue=pe}else ue.add(v);break e}else{if((r&1)===0){pc(a,D,r),rs();break e}v=Error(i(426))}}else if(Xe&&m.mode&1){var tr=hc(c);if(tr!==null){(tr.flags&65536)===0&&(tr.flags|=256),mc(tr,c,m,a,r),pa(xo(v,m));break e}}a=v=xo(v,m),sr!==4&&(sr=2),tn===null?tn=[a]:tn.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,r&=-r,a.lanes|=r;var T=dc(a,v,r);Ii(a,T);break e;case 1:m=v;var k=a.type,z=a.stateNode;if((a.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||z!==null&&typeof z.componentDidCatch=="function"&&(Ot===null||!Ot.has(z)))){a.flags|=65536,r&=-r,a.lanes|=r;var te=uc(a,m,r);Ii(a,te);break e}}a=a.return}while(a!==null)}$c(o)}catch(fe){r=fe,nr===o&&o!==null&&(nr=o=o.return);continue}break}while(!0)}function Wc(){var e=nl.current;return nl.current=Jn,e===null?Jn:e}function rs(){(sr===0||sr===3||sr===2)&&(sr=4),ur===null||(Vt&268435455)===0&&(ll&268435455)===0||_t(ur,fr)}function ul(e,r){var o=_e;_e|=2;var n=Wc();(ur!==e||fr!==r)&&(xt=null,Xt(e,r));do try{dp();break}catch(l){Bc(e,l)}while(!0);if(ma(),_e=o,nl.current=n,nr!==null)throw Error(i(261));return ur=null,fr=0,sr}function dp(){for(;nr!==null;)qc(nr)}function up(){for(;nr!==null&&!Ad();)qc(nr)}function qc(e){var r=Qc(e.alternate,e,Ar);e.memoizedProps=e.pendingProps,r===null?$c(e):nr=r,Ya.current=null}function $c(e){var r=e;do{var o=r.alternate;if(e=r.return,(r.flags&32768)===0){if(o=op(o,r,Ar),o!==null){nr=o;return}}else{if(o=np(o,r),o!==null){o.flags&=32767,nr=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{sr=6,nr=null;return}}if(r=r.sibling,r!==null){nr=r;return}nr=r=e}while(r!==null);sr===0&&(sr=5)}function Kt(e,r,o){var n=Le,l=qr.transition;try{qr.transition=null,Le=1,pp(e,r,o,n)}finally{qr.transition=l,Le=n}return null}function pp(e,r,o,n){do ko();while(Dt!==null);if((_e&6)!==0)throw Error(i(327));o=e.finishedWork;var l=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var a=o.lanes|o.childLanes;if(Yd(e,a),e===ur&&(nr=ur=null,fr=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||sl||(sl=!0,Xc(fn,function(){return ko(),null})),a=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||a){a=qr.transition,qr.transition=null;var c=Le;Le=1;var m=_e;_e|=4,Ya.current=null,ap(e,o),_c(o,e),Ou(ra),Nn=!!ea,ra=ea=null,e.current=o,sp(o),Id(),_e=m,Le=c,qr.transition=a}else e.current=o;if(sl&&(sl=!1,Dt=e,il=l),a=e.pendingLanes,a===0&&(Ot=null),Hd(o.stateNode),zr(e,rr()),r!==null)for(n=e.onRecoverableError,o=0;o<r.length;o++)l=r[o],n(l.value,{componentStack:l.stack,digest:l.digest});if(al)throw al=!1,e=Xa,Xa=null,e;return(il&1)!==0&&e.tag!==0&&ko(),a=e.pendingLanes,(a&1)!==0?e===Ka?on++:(on=0,Ka=e):on=0,Et(),null}function ko(){if(Dt!==null){var e=Ds(il),r=qr.transition,o=Le;try{if(qr.transition=null,Le=16>e?16:e,Dt===null)var n=!1;else{if(e=Dt,Dt=null,il=0,(_e&6)!==0)throw Error(i(331));var l=_e;for(_e|=4,ie=e.current;ie!==null;){var a=ie,c=a.child;if((ie.flags&16)!==0){var m=a.deletions;if(m!==null){for(var v=0;v<m.length;v++){var D=m[v];for(ie=D;ie!==null;){var Y=ie;switch(Y.tag){case 0:case 11:case 15:en(8,Y,a)}var K=Y.child;if(K!==null)K.return=Y,ie=K;else for(;ie!==null;){Y=ie;var $=Y.sibling,le=Y.return;if(zc(Y),Y===D){ie=null;break}if($!==null){$.return=le,ie=$;break}ie=le}}}var ue=a.alternate;if(ue!==null){var pe=ue.child;if(pe!==null){ue.child=null;do{var tr=pe.sibling;pe.sibling=null,pe=tr}while(pe!==null)}}ie=a}}if((a.subtreeFlags&2064)!==0&&c!==null)c.return=a,ie=c;else e:for(;ie!==null;){if(a=ie,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:en(9,a,a.return)}var T=a.sibling;if(T!==null){T.return=a.return,ie=T;break e}ie=a.return}}var k=e.current;for(ie=k;ie!==null;){c=ie;var z=c.child;if((c.subtreeFlags&2064)!==0&&z!==null)z.return=c,ie=z;else e:for(c=k;ie!==null;){if(m=ie,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:ol(9,m)}}catch(fe){er(m,m.return,fe)}if(m===c){ie=null;break e}var te=m.sibling;if(te!==null){te.return=m.return,ie=te;break e}ie=m.return}}if(_e=l,Et(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(gn,e)}catch{}n=!0}return n}finally{Le=o,qr.transition=r}}return!1}function Yc(e,r,o){r=xo(o,r),r=dc(e,r,1),e=zt(e,r,1),r=Nr(),e!==null&&(Po(e,1,r),zr(e,r))}function er(e,r,o){if(e.tag===3)Yc(e,e,o);else for(;r!==null;){if(r.tag===3){Yc(r,e,o);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Ot===null||!Ot.has(n))){e=xo(o,e),e=uc(r,e,1),r=zt(r,e,1),e=Nr(),r!==null&&(Po(r,1,e),zr(r,e));break}}r=r.return}}function hp(e,r,o){var n=e.pingCache;n!==null&&n.delete(r),r=Nr(),e.pingedLanes|=e.suspendedLanes&o,ur===e&&(fr&o)===o&&(sr===4||sr===3&&(fr&130023424)===fr&&500>rr()-Qa?Xt(e,0):Va|=o),zr(e,r)}function Vc(e,r){r===0&&((e.mode&1)===0?r=1:(r=vn,vn<<=1,(vn&130023424)===0&&(vn=4194304)));var o=Nr();e=mt(e,r),e!==null&&(Po(e,r,o),zr(e,o))}function mp(e){var r=e.memoizedState,o=0;r!==null&&(o=r.retryLane),Vc(e,o)}function fp(e,r){var o=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(o=l.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(i(314))}n!==null&&n.delete(r),Vc(e,o)}var Qc;Qc=function(e,r,o){if(e!==null)if(e.memoizedProps!==r.pendingProps||Sr.current)Er=!0;else{if((e.lanes&o)===0&&(r.flags&128)===0)return Er=!1,tp(e,r,o);Er=(e.flags&131072)!==0}else Er=!1,Xe&&(r.flags&1048576)!==0&&Pi(r,Hn,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;rl(e,r),e=r.pendingProps;var l=io(r,gr.current);fo(r,o),l=Ca(null,r,n,e,l,o);var a=Sa();return r.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Pr(n)?(a=!0,In(r)):a=!1,r.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,va(r),l.updater=Zn,r.stateNode=l,l._reactInternals=r,Oa(r,n,e,o),r=Aa(null,r,n,!0,a,o)):(r.tag=0,Xe&&a&&ia(r),kr(null,r,l,o),r=r.child),r;case 16:n=r.elementType;e:{switch(rl(e,r),e=r.pendingProps,l=n._init,n=l(n._payload),r.type=n,l=r.tag=xp(n),e=Gr(n,e),l){case 0:r=_a(null,r,n,e,o);break e;case 1:r=bc(null,r,n,e,o);break e;case 11:r=fc(null,r,n,e,o);break e;case 14:r=gc(null,r,n,Gr(n.type,e),o);break e}throw Error(i(306,n,""))}return r;case 0:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),_a(e,r,n,l,o);case 1:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),bc(e,r,n,l,o);case 3:e:{if(kc(r),e===null)throw Error(i(387));n=r.pendingProps,a=r.memoizedState,l=a.element,Ai(e,r),Yn(r,n,null,o);var c=r.memoizedState;if(n=c.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},r.updateQueue.baseState=a,r.memoizedState=a,r.flags&256){l=xo(Error(i(423)),r),r=Nc(e,r,n,o,l);break e}else if(n!==l){l=xo(Error(i(424)),r),r=Nc(e,r,n,o,l);break e}else for(_r=Ct(r.stateNode.containerInfo.firstChild),Rr=r,Xe=!0,Kr=null,o=Ri(r,null,n,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(po(),n===l){r=gt(e,r,o);break e}kr(e,r,n,o)}r=r.child}return r;case 5:return Li(r),e===null&&ua(r),n=r.type,l=r.pendingProps,a=e!==null?e.memoizedProps:null,c=l.children,ta(n,l)?c=null:a!==null&&ta(n,a)&&(r.flags|=32),yc(e,r),kr(e,r,c,o),r.child;case 6:return e===null&&ua(r),null;case 13:return wc(e,r,o);case 4:return ya(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=ho(r,null,n,o):kr(e,r,n,o),r.child;case 11:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),fc(e,r,n,l,o);case 7:return kr(e,r,r.pendingProps,o),r.child;case 8:return kr(e,r,r.pendingProps.children,o),r.child;case 12:return kr(e,r,r.pendingProps.children,o),r.child;case 10:e:{if(n=r.type._context,l=r.pendingProps,a=r.memoizedProps,c=l.value,qe(Wn,n._currentValue),n._currentValue=c,a!==null)if(Xr(a.value,c)){if(a.children===l.children&&!Sr.current){r=gt(e,r,o);break e}}else for(a=r.child,a!==null&&(a.return=r);a!==null;){var m=a.dependencies;if(m!==null){c=a.child;for(var v=m.firstContext;v!==null;){if(v.context===n){if(a.tag===1){v=ft(-1,o&-o),v.tag=2;var D=a.updateQueue;if(D!==null){D=D.shared;var Y=D.pending;Y===null?v.next=v:(v.next=Y.next,Y.next=v),D.pending=v}}a.lanes|=o,v=a.alternate,v!==null&&(v.lanes|=o),ga(a.return,o,r),m.lanes|=o;break}v=v.next}}else if(a.tag===10)c=a.type===r.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(i(341));c.lanes|=o,m=c.alternate,m!==null&&(m.lanes|=o),ga(c,o,r),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===r){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}kr(e,r,l.children,o),r=r.child}return r;case 9:return l=r.type,n=r.pendingProps.children,fo(r,o),l=Br(l),n=n(l),r.flags|=1,kr(e,r,n,o),r.child;case 14:return n=r.type,l=Gr(n,r.pendingProps),l=Gr(n.type,l),gc(e,r,n,l,o);case 15:return xc(e,r,r.type,r.pendingProps,o);case 17:return n=r.type,l=r.pendingProps,l=r.elementType===n?l:Gr(n,l),rl(e,r),r.tag=1,Pr(n)?(e=!0,In(r)):e=!1,fo(r,o),ic(r,n,l),Oa(r,n,l,o),Aa(null,r,n,!0,e,o);case 19:return Cc(e,r,o);case 22:return vc(e,r,o)}throw Error(i(156,r.tag))};function Xc(e,r){return Es(e,r)}function gp(e,r,o,n){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $r(e,r,o,n){return new gp(e,r,o,n)}function ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xp(e){if(typeof e=="function")return ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===de)return 11;if(e===Ce)return 14}return 2}function At(e,r){var o=e.alternate;return o===null?(o=$r(e.tag,r,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=r,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,r=e.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function pl(e,r,o,n,l,a){var c=2;if(n=e,typeof e=="function")ts(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case R:return Gt(o.children,l,a,r);case Z:c=8,l|=8;break;case X:return e=$r(12,o,r,l|2),e.elementType=X,e.lanes=a,e;case V:return e=$r(13,o,r,l),e.elementType=V,e.lanes=a,e;case he:return e=$r(19,o,r,l),e.elementType=he,e.lanes=a,e;case Ee:return hl(o,l,a,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:c=10;break e;case oe:c=9;break e;case de:c=11;break e;case Ce:c=14;break e;case Pe:c=16,n=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return r=$r(c,o,r,l),r.elementType=e,r.type=n,r.lanes=a,r}function Gt(e,r,o,n){return e=$r(7,e,n,r),e.lanes=o,e}function hl(e,r,o,n){return e=$r(22,e,n,r),e.elementType=Ee,e.lanes=o,e.stateNode={isHidden:!1},e}function os(e,r,o){return e=$r(6,e,null,r),e.lanes=o,e}function ns(e,r,o){return r=$r(4,e.children!==null?e.children:[],e.key,r),r.lanes=o,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function vp(e,r,o,n,l){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=n,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ls(e,r,o,n,l,a,c,m,v){return e=new vp(e,r,o,m,v),r===1?(r=1,a===!0&&(r|=8)):r=0,a=$r(3,null,null,r),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(a),e}function yp(e,r,o){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:n==null?null:""+n,children:e,containerInfo:r,implementation:o}}function Kc(e){if(!e)return Pt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(i(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Pr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Pr(o))return ji(e,o,r)}return r}function Gc(e,r,o,n,l,a,c,m,v){return e=ls(o,n,!0,e,l,a,c,m,v),e.context=Kc(null),o=e.current,n=Nr(),l=Rt(o),a=ft(n,l),a.callback=r??null,zt(o,a,l),e.current.lanes=l,Po(e,l,n),zr(e,n),e}function ml(e,r,o,n){var l=r.current,a=Nr(),c=Rt(l);return o=Kc(o),r.context===null?r.context=o:r.pendingContext=o,r=ft(a,c),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=zt(l,r,c),e!==null&&(et(e,l,c,a),$n(e,l,c)),c}function fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jc(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<r?o:r}}function as(e,r){Jc(e,r),(e=e.alternate)&&Jc(e,r)}function bp(){return null}var Zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ss(e){this._internalRoot=e}gl.prototype.render=ss.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(i(409));ml(e,r,null,null)},gl.prototype.unmount=ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Qt(function(){ml(null,e,null,null)}),r[dt]=null}};function gl(e){this._internalRoot=e}gl.prototype.unstable_scheduleHydration=function(e){if(e){var r=As();e={blockedOn:null,target:e,priority:r};for(var o=0;o<Nt.length&&r!==0&&r<Nt[o].priority;o++);Nt.splice(o,0,e),o===0&&Ls(e)}};function is(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ed(){}function kp(e,r,o,n,l){if(l){if(typeof n=="function"){var a=n;n=function(){var D=fl(c);a.call(D)}}var c=Gc(r,n,e,0,null,!1,!1,"",ed);return e._reactRootContainer=c,e[dt]=c.current,Uo(e.nodeType===8?e.parentNode:e),Qt(),c}for(;l=e.lastChild;)e.removeChild(l);if(typeof n=="function"){var m=n;n=function(){var D=fl(v);m.call(D)}}var v=ls(e,0,!1,null,null,!1,!1,"",ed);return e._reactRootContainer=v,e[dt]=v.current,Uo(e.nodeType===8?e.parentNode:e),Qt(function(){ml(r,v,o,n)}),v}function vl(e,r,o,n,l){var a=o._reactRootContainer;if(a){var c=a;if(typeof l=="function"){var m=l;l=function(){var v=fl(c);m.call(v)}}ml(r,c,e,l)}else c=kp(o,r,e,l,n);return fl(c)}Rs=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var o=So(r.pendingLanes);o!==0&&(Ol(r,o|1),zr(r,rr()),(_e&6)===0&&(bo=rr()+500,Et()))}break;case 13:Qt(function(){var n=mt(e,1);if(n!==null){var l=Nr();et(n,e,1,l)}}),as(e,1)}},Dl=function(e){if(e.tag===13){var r=mt(e,134217728);if(r!==null){var o=Nr();et(r,e,134217728,o)}as(e,134217728)}},_s=function(e){if(e.tag===13){var r=Rt(e),o=mt(e,r);if(o!==null){var n=Nr();et(o,e,r,n)}as(e,r)}},As=function(){return Le},Is=function(e,r){var o=Le;try{return Le=e,r()}finally{Le=o}},Or=function(e,r,o){switch(r){case"input":if(Lr(e,o),r=o.name,o.type==="radio"&&r!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var n=o[r];if(n!==e&&n.form===e.form){var l=_n(n);if(!l)throw Error(i(90));Fr(n),Lr(n,l)}}}break;case"textarea":ye(e,o);break;case"select":r=o.value,r!=null&&J(e,!!o.multiple,r,!1)}},ks=Za,Ns=Qt;var Np={usingClientEntryPoint:!1,Events:[qo,ao,_n,Fe,bs,Za]},nn={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wp={bundleType:nn.bundleType,version:nn.version,rendererPackageName:nn.rendererPackageName,rendererConfig:nn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ss(e),e===null?null:e.stateNode},findFiberByHostInstance:nn.findFiberByHostInstance||bp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{gn=yl.inject(wp),ot=yl}catch{}}return Mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Np,Mr.createPortal=function(e,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!is(r))throw Error(i(200));return yp(e,r,null,o)},Mr.createRoot=function(e,r){if(!is(e))throw Error(i(299));var o=!1,n="",l=Zc;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),r=ls(e,1,!1,null,null,o,!1,n,l),e[dt]=r.current,Uo(e.nodeType===8?e.parentNode:e),new ss(r)},Mr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Ss(r),e=e===null?null:e.stateNode,e},Mr.flushSync=function(e){return Qt(e)},Mr.hydrate=function(e,r,o){if(!xl(r))throw Error(i(200));return vl(null,e,r,!0,o)},Mr.hydrateRoot=function(e,r,o){if(!is(e))throw Error(i(405));var n=o!=null&&o.hydratedSources||null,l=!1,a="",c=Zc;if(o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(a=o.identifierPrefix),o.onRecoverableError!==void 0&&(c=o.onRecoverableError)),r=Gc(r,null,e,1,o??null,l,!1,a,c),e[dt]=r.current,Uo(e),n)for(e=0;e<n.length;e++)o=n[e],l=o._getVersion,l=l(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,l]:r.mutableSourceEagerHydrationData.push(o,l);return new gl(r)},Mr.render=function(e,r,o){if(!xl(r))throw Error(i(200));return vl(null,e,r,!1,o)},Mr.unmountComponentAtNode=function(e){if(!xl(e))throw Error(i(40));return e._reactRootContainer?(Qt(function(){vl(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1},Mr.unstable_batchedUpdates=Za,Mr.unstable_renderSubtreeIntoContainer=function(e,r,o,n){if(!xl(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return vl(e,r,o,!1,n)},Mr.version="18.3.1-next-f1338f8080-20240426",Mr}var id;function Op(){if(id)return us.exports;id=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),us.exports=Mp(),us.exports}var cd;function Dp(){if(cd)return bl;cd=1;var s=Op();return bl.createRoot=s.createRoot,bl.hydrateRoot=s.hydrateRoot,bl}var Rp=Dp(),f=gs();const Yr=Cp(f),Jt="/assets/5ebff9a217654d307f5ff0e6abe952a2f7edba47-C_j6zY7W.png",_p="/assets/f72178f30a0dde70a8d75f3484b9afe145cb6b4a-CDyQn-v-.png",Ap="/assets/ce4e08efbf373b6ac47b975a612b62ba9dbdfad0-E6WWYkN1.png";function Ip({onCustomerCheckIn:s,onStaffLogin:d,onRevisit:i}){return t.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-black",children:[t.jsx("div",{className:"hidden lg:flex absolute",style:{right:"0",top:"50%",transform:"translateY(-50%)",width:"45%",height:"85%",zIndex:5,alignItems:"center",justifyContent:"center"},children:t.jsx("img",{src:_p,alt:"Eagle",className:"eagle-wings",style:{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center",opacity:.35}})}),t.jsxs("nav",{className:"relative z-10 flex items-center justify-between px-6 sm:px-8 lg:px-12 py-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsx("span",{className:"text-lg sm:text-xl font-medium text-white",children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-6 sm:gap-8",children:[t.jsx("a",{href:"https://reliancesurfaces.com/shop/",target:"_blank",rel:"noopener noreferrer",className:"text-sm sm:text-base text-gray-400 transition-all duration-200 nav-link",children:"Slabs"}),t.jsx("button",{onClick:d,className:"text-sm sm:text-base text-gray-400 transition-all duration-200 nav-link",children:"Login"})]})]}),t.jsx("div",{className:"hidden sm:flex relative z-10 flex-col items-start justify-center px-8 lg:px-16 xl:px-24",style:{height:"calc(100vh - 100px)"},children:t.jsxs("div",{className:"max-w-2xl lg:max-w-3xl",children:[t.jsxs("h1",{className:"mb-6 text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-light",style:{color:"#FFFFFF",fontWeight:"300",lineHeight:"1.1"},children:["Welcome to"," ",t.jsx("span",{style:{color:"#D4A736"},children:"Reliance Surfaces"})]}),t.jsx("p",{className:"mb-12 text-lg md:text-xl lg:text-2xl italic",style:{color:"rgba(156, 163, 175, 0.9)",fontWeight:"300"},children:"Surfaces that tell a story"}),t.jsxs("div",{className:"flex flex-col sm:flex-row items-start gap-4 max-w-md",children:[t.jsx("button",{onClick:s,className:"w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"#D4A736",color:"#000000",border:"none",cursor:"pointer"},onMouseEnter:u=>{u.currentTarget.style.backgroundColor="#E5B946",u.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:u=>{u.currentTarget.style.backgroundColor="#D4A736",u.currentTarget.style.transform="translateY(0)"},children:"Check-In"}),t.jsx("button",{onClick:i,className:"w-full sm:w-auto px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"transparent",border:"1px solid #D4A736",color:"#D4A736",cursor:"pointer"},onMouseEnter:u=>{u.currentTarget.style.backgroundColor="rgba(212, 167, 54, 0.1)",u.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:u=>{u.currentTarget.style.backgroundColor="transparent",u.currentTarget.style.transform="translateY(0)"},children:"Revisiting"})]})]})}),t.jsxs("div",{className:"sm:hidden relative z-10 flex flex-col justify-between px-6",style:{height:"calc(100vh - 88px)"},children:[t.jsxs("div",{className:"flex flex-col pt-8 text-center",children:[t.jsx("h1",{className:"mb-2 text-5xl leading-tight font-light",style:{color:"#FFFFFF",fontWeight:"200",lineHeight:"1.1"},children:"Welcome"}),t.jsx("p",{className:"mb-6 text-2xl italic",style:{color:"rgba(156, 163, 175, 0.8)",fontWeight:"300",fontStyle:"italic"},children:"to"}),t.jsx("h2",{className:"mb-6 text-4xl leading-tight font-light",style:{color:"#D4A736",fontWeight:"300",lineHeight:"1.1"},children:"Reliance Surfaces"}),t.jsx("p",{className:"mb-8 text-base italic px-4",style:{color:"rgba(156, 163, 175, 0.9)",fontWeight:"300"},children:"Surfaces that tell a story"}),t.jsxs("div",{className:"flex flex-col gap-3 max-w-xs mx-auto w-full",children:[t.jsx("button",{onClick:s,className:"w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"#D4A736",color:"#000000",border:"none",cursor:"pointer"},children:"Check-In"}),t.jsx("button",{onClick:i,className:"w-full px-8 py-3.5 rounded-lg text-base font-medium transition-all",style:{backgroundColor:"transparent",border:"1px solid #D4A736",color:"#D4A736",cursor:"pointer"},children:"Revisiting"})]})]}),t.jsx("div",{className:"flex justify-center items-center pb-16 pt-4",children:t.jsx("img",{src:Ap,alt:"Eagle",className:"eagle-wings-mobile",style:{width:"85%",maxWidth:"360px",height:"auto",opacity:.4,filter:"brightness(0) saturate(100%) invert(63%) sepia(44%) saturate(443%) hue-rotate(1deg) brightness(93%) contrast(87%)"}})})]}),t.jsx("style",{children:`
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
 */const Fp=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lp=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(d,i,u)=>u?u.toUpperCase():i.toLowerCase()),dd=s=>{const d=Lp(s);return d.charAt(0).toUpperCase()+d.slice(1)},vd=(...s)=>s.filter((d,i,u)=>!!d&&d.trim()!==""&&u.indexOf(d)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hp={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=f.forwardRef(({color:s="currentColor",size:d=24,strokeWidth:i=2,absoluteStrokeWidth:u,className:g="",children:h,iconNode:x,...j},b)=>f.createElement("svg",{ref:b,...Hp,width:d,height:d,stroke:s,strokeWidth:u?Number(i)*24/Number(d):i,className:vd("lucide",g),...j},[...x.map(([F,A])=>f.createElement(F,A)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=(s,d)=>{const i=f.forwardRef(({className:u,...g},h)=>f.createElement(Up,{ref:h,iconNode:d,className:vd(`lucide-${Fp(dd(s))}`,`lucide-${s}`,u),...g}));return i.displayName=dd(s),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Wp=Ge("bell",Bp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],yd=Ge("check",qp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],bd=Ge("chevron-down",$p);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Vp=Ge("chevron-left",Yp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Xp=Ge("chevron-right",Qp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],kd=Ge("chevron-up",Kp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],xs=Ge("circle-check-big",Gp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Zp=Ge("eye-off",Jp);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vs=Ge("eye",eh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Nd=Ge("funnel",rh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],ys=Ge("image",th);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],un=Ge("log-out",oh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],lh=Ge("mail",nh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=[["path",{d:"M5 12h14",key:"1ays0h"}]],wd=Ge("minus",ah);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],dn=Ge("plus",sh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],jd=Ge("rotate-ccw",ih);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Cd=Ge("search",ch);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],wl=Ge("star",dh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ph=Ge("triangle-alert",uh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],mh=Ge("upload",hh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],gh=Ge("user-plus",fh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],vh=Ge("user",xh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Sd=Ge("users",yh);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ct=Ge("x",bh);function kh({onNext:s,initialData:d}){const i=d?.firstName?[d.firstName,d.lastName].filter(Boolean).join(" "):"",[u,g]=f.useState(i),[h,x]=f.useState({street:d?.street||"",suiteUnit:d?.suiteUnit||"",city:d?.city||"",state:d?.state||"NJ",zip:d?.zip||"",country:d?.country||"USA",phones:d?.phones||[""],emails:d?.emails||[""]}),[j,b]=f.useState({}),F=f.useRef(null),A=f.useRef([]),C=f.useRef([]),_=[{code:"AL",name:"Alabama"},{code:"AK",name:"Alaska"},{code:"AZ",name:"Arizona"},{code:"AR",name:"Arkansas"},{code:"CA",name:"California"},{code:"CO",name:"Colorado"},{code:"CT",name:"Connecticut"},{code:"DE",name:"Delaware"},{code:"FL",name:"Florida"},{code:"GA",name:"Georgia"},{code:"HI",name:"Hawaii"},{code:"ID",name:"Idaho"},{code:"IL",name:"Illinois"},{code:"IN",name:"Indiana"},{code:"IA",name:"Iowa"},{code:"KS",name:"Kansas"},{code:"KY",name:"Kentucky"},{code:"LA",name:"Louisiana"},{code:"ME",name:"Maine"},{code:"MD",name:"Maryland"},{code:"MA",name:"Massachusetts"},{code:"MI",name:"Michigan"},{code:"MN",name:"Minnesota"},{code:"MS",name:"Mississippi"},{code:"MO",name:"Missouri"},{code:"MT",name:"Montana"},{code:"NE",name:"Nebraska"},{code:"NV",name:"Nevada"},{code:"NH",name:"New Hampshire"},{code:"NJ",name:"New Jersey"},{code:"NM",name:"New Mexico"},{code:"NY",name:"New York"},{code:"NC",name:"North Carolina"},{code:"ND",name:"North Dakota"},{code:"OH",name:"Ohio"},{code:"OK",name:"Oklahoma"},{code:"OR",name:"Oregon"},{code:"PA",name:"Pennsylvania"},{code:"RI",name:"Rhode Island"},{code:"SC",name:"South Carolina"},{code:"SD",name:"South Dakota"},{code:"TN",name:"Tennessee"},{code:"TX",name:"Texas"},{code:"UT",name:"Utah"},{code:"VT",name:"Vermont"},{code:"VA",name:"Virginia"},{code:"WA",name:"Washington"},{code:"WV",name:"West Virginia"},{code:"WI",name:"Wisconsin"},{code:"WY",name:"Wyoming"}],B=L=>{x(oe=>({...oe,state:L}))},q=L=>L.split(" ").map(oe=>oe.charAt(0).toUpperCase()+oe.slice(1).toLowerCase()).join(" "),N=L=>{setTimeout(()=>{L.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})},300)},P=L=>L.replace(/\D/g,"").length===10,E=L=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(L),w=()=>{const L={};u.trim()||(L.fullName="Full name is required"),h.street.trim()||(L.street="Street address is required"),h.city.trim()||(L.city="City is required"),h.state.trim()||(L.state="State is required"),h.zip.trim()||(L.zip="ZIP code is required");const oe=h.phones.filter(V=>V.trim());oe.length===0?L.phone="At least one phone number is required":oe.every(P)||(L.phone="Phone numbers must be 10 digits");const de=h.emails.filter(V=>V.trim());return de.length===0?L.email="At least one email is required":de.every(E)||(L.email="Email addresses must be valid"),b(L),Object.keys(L).length===0},M=L=>{if(L.preventDefault(),w()){const oe=u.trim().split(/\s+/),de=oe[0]||"",V=oe.slice(1).join(" ");s({firstName:de,lastName:V,...h,phones:h.phones.filter(he=>he.trim()),emails:h.emails.filter(he=>he.trim())})}},U=()=>x(L=>({...L,phones:[...L.phones,""]})),H=L=>x(oe=>({...oe,phones:oe.phones.filter((de,V)=>V!==L)})),W=(L,oe)=>x(de=>{const V=[...de.phones];return V[L]=oe,{...de,phones:V}}),R=()=>x(L=>({...L,emails:[...L.emails,""]})),Z=L=>x(oe=>({...oe,emails:oe.emails.filter((de,V)=>V!==L)})),X=(L,oe)=>x(de=>{const V=[...de.emails];return V[L]=oe,{...de,emails:V}});return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px 20px"},children:[t.jsx("h1",{className:"text-center mb-1 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 1: Your Details"}),t.jsx("p",{className:"text-center mb-6 text-sm",style:{color:"var(--color-text-gray)"},children:"Please provide your contact information"}),t.jsxs("form",{onSubmit:M,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Full Name *"}),t.jsx("input",{type:"text",value:u,onChange:L=>g(L.target.value),onBlur:L=>g(q(L.target.value)),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${j.fullName?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"First and last name"}),j.fullName&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:j.fullName})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Street Address *"}),t.jsx("input",{type:"text",value:h.street,onChange:L=>x(oe=>({...oe,street:L.target.value})),onBlur:L=>x(oe=>({...oe,street:q(L.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${j.street?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"e.g. 123 Main St",ref:F}),j.street&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:j.street})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"City *"}),t.jsx("input",{type:"text",value:h.city,onChange:L=>x(oe=>({...oe,city:L.target.value})),onBlur:L=>x(oe=>({...oe,city:q(L.target.value)})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${j.city?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"City"}),j.city&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:j.city})]}),t.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"State *"}),t.jsxs("select",{value:h.state,onChange:L=>B(L.target.value),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${j.state?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"Select"}),_.map(L=>t.jsx("option",{value:L.code,children:L.code},L.code))]}),j.state&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:j.state})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"ZIP *"}),t.jsx("input",{type:"text",value:h.zip,onChange:L=>x(oe=>({...oe,zip:L.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${j.zip?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"ZIP"}),j.zip&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-error)"},children:j.zip})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Country"}),t.jsxs("select",{value:h.country,onChange:L=>x(oe=>({...oe,country:L.target.value})),className:"w-full px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Phone Number(s) *"}),h.phones.map((L,oe)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{ref:de=>A.current[oe]=de,type:"tel",value:L,onChange:de=>W(oe,de.target.value),onFocus:de=>N(de.target),className:"flex-1 px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${j.phone&&oe===0?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Phone number"}),h.phones.length>1&&t.jsx("button",{type:"button",onClick:()=>H(oe),className:"px-3 py-2.5 rounded-lg flex-shrink-0",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:18})})]},oe)),j.phone&&t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-error)"},children:j.phone}),t.jsxs("button",{type:"button",onClick:U,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-gold)"},children:[t.jsx(dn,{size:18}),"Add Another Phone"]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1.5 text-sm",style:{color:"var(--color-text-white)"},children:"Email Address(es) *"}),h.emails.map((L,oe)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{ref:de=>C.current[oe]=de,type:"email",value:L,onChange:de=>X(oe,de.target.value),onFocus:de=>N(de.target),className:"flex-1 px-3 py-2.5 rounded-lg text-sm",style:{backgroundColor:"var(--color-background)",border:`1px solid ${j.email&&oe===0?"var(--color-error)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Email address"}),h.emails.length>1&&t.jsx("button",{type:"button",onClick:()=>Z(oe),className:"px-3 py-2.5 rounded-lg flex-shrink-0",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:18})})]},oe)),j.email&&t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-error)"},children:j.email}),t.jsxs("button",{type:"button",onClick:R,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-gold)"},children:[t.jsx(dn,{size:18}),"Add Another Email"]})]}),t.jsx("button",{type:"submit",className:"w-full py-3.5 rounded-lg text-sm font-medium mt-6",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})})}const Nh=["Fabricator","Contractor","Kitchen & Bath","Architect","Builder","Friends/Family","Other"];function wh({onNext:s,onBack:d,initialData:i}){const[u,g]=f.useState(i?.referralSources?.map(E=>E.type)||[]),[h,x]=f.useState(i?.referralSources?.reduce((E,w)=>(E[w.type]={name:w.name||"",phone:w.phone||"",location:w.location||""},E),{})||{}),[j,b]=f.useState({}),[F,A]=f.useState(!1),C=E=>E.split(" ").map(w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase()).join(" "),_=E=>{if(u.includes(E)){g(u.filter(U=>U!==E));const w={...h};delete w[E],x(w);const M={...j};delete M[E],b(M)}else g([...u,E]),A(!1)},B=(E,w,M)=>{if(x({...h,[E]:{...h[E],name:w==="name"?M:h[E]?.name||"",phone:w==="phone"?M:h[E]?.phone||"",location:w==="location"?M:h[E]?.location||""}}),j[E]){const U={...j};w==="name"&&delete U[E].name,w==="phone"&&(delete U[E].phone,delete U[E].phoneOrLocation),w==="location"&&delete U[E].phoneOrLocation,b(U)}},q=E=>{if(E.preventDefault(),u.length===0){A(!0);return}const w={};let M=!1;for(const H of u)if(w[H]={},h[H]?.name?.trim()||(w[H].name="Name is required",M=!0),H==="Fabricator"){const W=h[H]?.phone?.trim()||"",R=h[H]?.location?.trim();!W&&!R?(w[H].phoneOrLocation="Enter a phone number or location",M=!0):W&&!/^\d{10}$/.test(W)&&(w[H].phone="Phone number must be 10 digits",M=!0)}else{const W=h[H]?.phone?.trim()||"";W?/^\d{10}$/.test(W)||(w[H].phone="Phone number must be 10 digits",M=!0):(w[H].phone="Phone number is required",M=!0)}if(M){b(w);return}const U={referralSources:u.map(H=>({type:H,name:h[H]?.name,phone:h[H]?.phone,...H==="Fabricator"&&h[H]?.location?{location:h[H].location}:{}}))};s(U)},N={color:"#f87171",fontSize:"0.75rem",marginTop:"4px"},P="1px solid #f87171";return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Step 2: How Did You Hear About Us?"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg font-medium",style:{color:"var(--color-text-gray)"},children:"Select all that applies"}),t.jsxs("form",{onSubmit:q,className:"space-y-4 sm:space-y-6",children:[t.jsxs("div",{className:"space-y-4",children:[F&&t.jsx("p",{style:{...N,fontSize:"0.875rem"},children:"Please select at least one option"}),Nh.map(E=>t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-opacity-50 transition-colors",style:{backgroundColor:u.includes(E)?"var(--color-background)":"transparent",border:`1px solid ${u.includes(E)?"var(--color-gold)":"var(--color-border)"}`},children:[t.jsx("input",{type:"checkbox",checked:u.includes(E),onChange:()=>_(E),className:"w-5 h-5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:E})]}),u.includes(E)&&t.jsxs("div",{className:"ml-6 sm:ml-8 mt-3 space-y-3",children:[t.jsxs("div",{children:[t.jsx("input",{type:"text",value:h[E]?.name||"",onChange:w=>B(E,"name",C(w.target.value)),placeholder:E==="Fabricator"?"Fabricator's Shop Name (required)":"Name (required)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:j[E]?.name?P:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),j[E]?.name&&t.jsx("p",{style:N,children:j[E].name})]}),t.jsxs("div",{children:[t.jsx("input",{type:"tel",value:h[E]?.phone||"",onChange:w=>B(E,"phone",w.target.value),placeholder:E==="Fabricator"?"Phone (required if no location)":"Phone (required)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:j[E]?.phone||j[E]?.phoneOrLocation?P:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),j[E]?.phone&&t.jsx("p",{style:N,children:j[E].phone})]}),E==="Fabricator"&&t.jsxs("div",{children:[t.jsx("input",{type:"text",value:h[E]?.location||"",onChange:w=>B(E,"location",C(w.target.value)),placeholder:"Location (required if no phone)",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:j[E]?.phoneOrLocation?P:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),j[E]?.phoneOrLocation&&t.jsx("p",{style:N,children:j[E].phoneOrLocation})]})]})]},E))]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue to Step 3"})]})]})]})})}function jh({onNext:s,onBack:d,initialData:i}){const[u,g]=f.useState(i?.adults||1),[h,x]=f.useState(i?.minors||0),j=b=>{b.preventDefault(),s({adults:u,minors:h})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-3 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Party Size"}),t.jsx("p",{className:"text-center mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please let us know who's visiting today"}),t.jsxs("form",{onSubmit:j,className:"space-y-8",children:[t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx(Sd,{size:28,style:{color:"var(--color-gold)"}}),t.jsx("h2",{className:"text-xl sm:text-2xl",style:{color:"var(--color-text-white)"},children:"How many adults are visiting?"})]}),t.jsxs("div",{className:"flex items-center justify-center gap-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("button",{type:"button",onClick:()=>g(Math.max(1,u-1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:u<=1?"var(--color-card)":"var(--color-gold)",color:u<=1?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:u<=1?"not-allowed":"pointer"},disabled:u<=1,children:"−"}),t.jsxs("div",{className:"text-center min-w-[120px]",children:[t.jsx("div",{className:"text-5xl font-light mb-2",style:{color:"var(--color-gold)"},children:u}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:u===1?"Adult":"Adults"})]}),t.jsx("button",{type:"button",onClick:()=>g(Math.min(10,u+1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:u>=10?"var(--color-card)":"var(--color-gold)",color:u>=10?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:u>=10?"not-allowed":"pointer"},disabled:u>=10,children:"+"})]})]}),t.jsxs("div",{className:"space-y-4",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.jsx(vh,{size:24,style:{color:"var(--color-gold)"}}),t.jsx("h2",{className:"text-xl sm:text-2xl",style:{color:"var(--color-text-white)"},children:"Number of minors"})]}),t.jsxs("div",{className:"flex items-center justify-center gap-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("button",{type:"button",onClick:()=>x(Math.max(0,h-1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:h<=0?"var(--color-card)":"var(--color-gold)",color:h<=0?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:h<=0?"not-allowed":"pointer"},disabled:h<=0,children:"−"}),t.jsxs("div",{className:"text-center min-w-[120px]",children:[t.jsx("div",{className:"text-5xl font-light mb-2",style:{color:"var(--color-gold)"},children:h}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:h===1?"Minor":"Minors"})]}),t.jsx("button",{type:"button",onClick:()=>x(Math.min(10,h+1)),className:"w-12 h-12 rounded-full text-2xl font-medium transition-colors",style:{backgroundColor:h>=10?"var(--color-card)":"var(--color-gold)",color:h>=10?"var(--color-text-gray)":"var(--color-background)",border:"1px solid var(--color-border)",cursor:h>=10?"not-allowed":"pointer"},disabled:h>=10,children:"+"})]})]}),t.jsx("div",{className:"text-center p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)"},children:t.jsxs("p",{className:"text-base sm:text-lg",style:{color:"var(--color-text-white)"},children:["Total visitors: ",t.jsx("span",{style:{color:"var(--color-gold)",fontWeight:"600"},children:u+h})]})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function Ch({isOpen:s,onConsent:d}){return s?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.75)",backdropFilter:"blur(4px)"},children:t.jsxs("div",{className:"w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)",padding:"32px"},children:[t.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-center mb-6",style:{color:"var(--color-gold)"},children:"Electronic Signature Consent"}),t.jsxs("div",{className:"space-y-5 mb-8",style:{color:"var(--color-text-white)",fontSize:"15px",lineHeight:"1.7"},children:[t.jsx("p",{children:"Before proceeding with the electronic waiver, please read and understand the following:"}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:'By clicking "I Consent" below, you agree to:'}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Sign this waiver electronically using your mouse, touchscreen, or trackpad"}),t.jsxs("li",{className:"pl-3",children:["Your electronic signature having the ",t.jsx("strong",{children:"same legal validity as a handwritten signature"})]}),t.jsx("li",{className:"pl-3",children:"This agreement being governed by New Jersey law and the federal Electronic Signatures in Global and National Commerce Act (ESIGN Act)"})]})]}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:"You have the right to:"}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Print or save this document for your records after signing"}),t.jsxs("li",{className:"pl-3",children:["Contact our office at ",t.jsx("strong",{children:"(908) 245-0888"})," or ",t.jsx("strong",{children:"info@reliancesurfaces.com"})," for assistance"]})]})]}),t.jsxs("div",{className:"p-5 rounded-lg space-y-4",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"font-semibold mb-3",style:{color:"var(--color-gold)"},children:"Technical Requirements:"}),t.jsxs("ul",{className:"space-y-3 pl-12",style:{listStyleType:"disc"},children:[t.jsx("li",{className:"pl-3",children:"Modern web browser (Chrome, Firefox, Safari, Edge, or similar)"}),t.jsx("li",{className:"pl-3",children:"Ability to view and save PDF documents"}),t.jsxs("li",{className:"pl-3",children:["For technical assistance, contact us at ",t.jsx("strong",{children:"(908) 245-0888"})]})]})]}),t.jsx("div",{className:"p-4 rounded-lg text-center font-medium",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)"},children:'By clicking "I Consent," you acknowledge that you have read and understand this disclosure, and you agree to conduct this transaction electronically.'})]}),t.jsx("div",{className:"flex justify-center mt-6",children:t.jsx("button",{onClick:d,className:"w-full sm:w-auto px-20 py-4 rounded-lg text-base font-medium transition-colors hover:opacity-90",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"I Consent to Electronic Signature"})}),t.jsx("p",{className:"mt-4 text-center text-xs",style:{color:"var(--color-text-gray)"},children:"This consent is required by federal ESIGN Act and New Jersey UETA to ensure you understand the legal implications of signing electronically."})]})}):null}const Sh=`WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT

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

I HAVE READ THIS COVENANT NOT TO SUE, WAIVER, RELEASE, INFORMED CONSENT, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND HAVE SIGNED IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT, ASSURANCE OR GUARANTEE BEING MADE TO ME AND INTEND MY SIGNATURE TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF RELIANCE AND ALL PARTIES MENTIONED HEREIN TO THE GREATEST EXTENT ALLOWED BY LAW. THIS IS A RELEASE OF LIABILITY; DO NOT SIGN THIS DOCUMENT IF YOU DO NOT UNDERSTAND OR DO NOT AGREE WITH ITS TERMS.`;function Ph({onNext:s,onBack:d,isMainVisitor:i=!0,initialData:u}){const[g,h]=f.useState(!u?.esignConsentTimestamp),[x,j]=f.useState(u?.esignConsentTimestamp),[b]=f.useState(()=>{if(u?.sessionId)return u.sessionId;let V=sessionStorage.getItem("checkInSessionId");return V||(V=crypto.randomUUID(),sessionStorage.setItem("checkInSessionId",V)),V}),[F]=f.useState(()=>u?.deviceInfo?u.deviceInfo:{userAgent:navigator.userAgent,screenWidth:window.screen.width,screenHeight:window.screen.height,deviceType:/Mobile|Tablet/i.test(navigator.userAgent)?"mobile":"desktop",timestamp:new Date().toISOString()}),[A,C]=f.useState(u?.agreed||!1),[_,B]=f.useState(!!u),[q,N]=f.useState(u?.signature||""),[P,E]=f.useState(!1),[w,M]=f.useState(""),U=f.useRef(null),H=f.useRef(null);f.useEffect(()=>{const V=U.current;if(!V)return;const he=V.getContext("2d");if(he&&(V.width=V.offsetWidth*2,V.height=V.offsetHeight*2,he.scale(2,2),he.strokeStyle="#D4A736",he.lineWidth=2,he.lineCap="round",he.lineJoin="round",u?.signature)){const Ce=new Image;Ce.onload=()=>{he.drawImage(Ce,0,0,V.offsetWidth,V.offsetHeight)},Ce.src=u.signature}},[u]);const W=()=>{const V=H.current;if(!V)return;Math.abs(V.scrollHeight-V.scrollTop-V.clientHeight)<10&&B(!0)},R=V=>{E(!0);const he=U.current;if(!he)return;const Ce=he.getContext("2d");if(!Ce)return;const Pe=he.getBoundingClientRect(),Ee=he.width/Pe.width,G=he.height/Pe.height,ae="touches"in V?V.touches[0].clientX:V.clientX,re="touches"in V?V.touches[0].clientY:V.clientY,p=(ae-Pe.left)*Ee/2,y=(re-Pe.top)*G/2;Ce.beginPath(),Ce.moveTo(p,y)},Z=V=>{if(!P)return;const he=U.current;if(!he)return;const Ce=he.getContext("2d");if(!Ce)return;const Pe=he.getBoundingClientRect(),Ee=he.width/Pe.width,G=he.height/Pe.height,ae="touches"in V?V.touches[0].clientX:V.clientX,re="touches"in V?V.touches[0].clientY:V.clientY,p=(ae-Pe.left)*Ee/2,y=(re-Pe.top)*G/2;Ce.lineTo(p,y),Ce.stroke()},X=()=>{E(!1);const V=U.current;V&&N(V.toDataURL())},L=()=>{const V=U.current;if(!V)return;const he=V.getContext("2d");he&&(he.clearRect(0,0,V.width,V.height),N(""))},oe=()=>{const V=new Date().toISOString();j(V),h(!1)},de=V=>{if(V.preventDefault(),M(""),!x){M("Electronic signature consent is required"),h(!0);return}if(!_){M("Please scroll to the bottom of the waiver to continue");return}if(!A){M("You must agree to the waiver to continue");return}if(!q){M("Please provide your signature");return}s({agreed:A,signature:q,esignConsentTimestamp:x,sessionId:b,deviceInfo:F})};return t.jsxs(t.Fragment,{children:[t.jsx(Ch,{isOpen:g,onConsent:oe}),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-3xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Waiver Agreement"}),t.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:i?"Please read and sign the waiver":"Please review and provide your signature"}),t.jsxs("form",{onSubmit:de,className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{ref:H,onScroll:W,className:"p-4 sm:p-6 rounded-lg overflow-y-auto",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",maxHeight:"300px",color:"var(--color-text-white)",lineHeight:"1.6",fontSize:"13px"},children:t.jsx("div",{style:{whiteSpace:"pre-wrap"},children:Sh})}),!_&&t.jsx("p",{className:"text-center text-sm",style:{color:"var(--color-gold)"},children:"⬇ Please scroll to the bottom to continue ⬇"}),t.jsxs("label",{className:"flex items-start gap-3 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:A,onChange:V=>C(V.target.checked),disabled:!_,className:"w-5 h-5 mt-0.5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:_?"var(--color-text-white)":"var(--color-text-gray)"},children:"I have read and agree to the terms of the waiver"})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex justify-between items-center mb-2",children:[t.jsx("label",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:"Signature *"}),t.jsx("button",{type:"button",onClick:L,className:"px-3 py-1 rounded text-sm",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),t.jsx("canvas",{ref:U,onMouseDown:R,onMouseMove:Z,onMouseUp:X,onMouseLeave:X,onTouchStart:R,onTouchMove:Z,onTouchEnd:X,className:"w-full rounded-lg cursor-crosshair touch-none",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",height:"180px"}}),t.jsx("p",{className:"mt-2 text-xs sm:text-sm",style:{color:"var(--color-text-gray)"},children:"Sign above with your mouse or finger"})]}),w&&t.jsx("p",{className:"text-center text-sm",style:{color:"var(--color-error)"},children:w}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Submit"})]})]})]})})]})}function Eh({onNext:s,onBack:d,visitorNumber:i,totalAdults:u,initialData:g}){const[h,x]=f.useState(""),[j,b]=f.useState(""),[F,A]=f.useState(!1),C=f.useRef(null);f.useEffect(()=>{const w=C.current;if(!w)return;const M=w.getContext("2d");if(M)if(w.width=w.offsetWidth*2,w.height=w.offsetHeight*2,M.scale(2,2),M.strokeStyle="#D4A736",M.lineWidth=2,M.lineCap="round",M.lineJoin="round",M.clearRect(0,0,w.width,w.height),g){if(x(g.name),b(g.signature),g.signature){const U=new Image;U.onload=()=>{M.drawImage(U,0,0,w.offsetWidth,w.offsetHeight)},U.src=g.signature}}else x(""),b("")},[i,g]);const _=w=>w.split(" ").map(M=>M.charAt(0).toUpperCase()+M.slice(1).toLowerCase()).join(" "),B=w=>{A(!0);const M=C.current;if(!M)return;const U=M.getContext("2d");if(!U)return;const H=M.getBoundingClientRect(),W=M.width/H.width,R=M.height/H.height,Z="touches"in w?w.touches[0].clientX:w.clientX,X="touches"in w?w.touches[0].clientY:w.clientY,L=(Z-H.left)*W/2,oe=(X-H.top)*R/2;U.beginPath(),U.moveTo(L,oe)},q=w=>{if(!F)return;const M=C.current;if(!M)return;const U=M.getContext("2d");if(!U)return;const H=M.getBoundingClientRect(),W=M.width/H.width,R=M.height/H.height,Z="touches"in w?w.touches[0].clientX:w.clientX,X="touches"in w?w.touches[0].clientY:w.clientY,L=(Z-H.left)*W/2,oe=(X-H.top)*R/2;U.lineTo(L,oe),U.stroke()},N=()=>{A(!1);const w=C.current;w&&b(w.toDataURL())},P=()=>{const w=C.current;if(!w)return;const M=w.getContext("2d");M&&(M.clearRect(0,0,w.width,w.height),b(""))},E=w=>{if(w.preventDefault(),!h.trim()){alert("Please enter the visitor's name");return}if(!j){alert("Please provide a signature");return}s({name:h.trim(),signature:j})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[t.jsx(gh,{size:32,style:{color:"var(--color-gold)"}}),t.jsxs("h1",{className:"text-center text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Additional Visitor ",i," of ",u]})]}),t.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please provide name and signature"}),t.jsxs("form",{onSubmit:E,className:"space-y-6",children:[t.jsxs("div",{className:"space-y-2",children:[t.jsx("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:"Visitor's Full Name"}),t.jsx("input",{type:"text",value:h,onChange:w=>x(_(w.target.value)),placeholder:"Enter full name",required:!0,className:"w-full px-4 py-3 rounded-lg text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:"Signature"}),t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",height:"180px"},children:[t.jsx("canvas",{ref:C,className:"w-full h-full cursor-crosshair",style:{touchAction:"none"},onMouseDown:B,onMouseMove:q,onMouseUp:N,onMouseLeave:N,onTouchStart:B,onTouchMove:q,onTouchEnd:N,onTouchCancel:N}),!j&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",style:{color:"var(--color-text-gray)",fontSize:"16px"},children:"Sign here with your finger or mouse"})]}),t.jsx("button",{type:"button",onClick:P,className:"w-full py-2 rounded-lg text-sm transition-colors",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Clear Signature"})]}),t.jsx("div",{className:"text-center p-3 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)"},children:t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Collecting signatures: ",i," of ",u," adults"]})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:i<u?"Next Visitor":"Continue"})]})]})]})})}function Th({onNext:s,onBack:d,numberOfMinors:i}){const[u,g]=f.useState(Array(i).fill("")),h=b=>b.split(" ").map(F=>F.charAt(0).toUpperCase()+F.slice(1).toLowerCase()).join(" "),x=(b,F)=>{const A=[...u];A[b]=h(F),g(A)},j=b=>{b.preventDefault();for(let F=0;F<u.length;F++)if(!u[F].trim()){alert(`Please enter the name for Minor ${F+1}`);return}s(u.map(F=>F.trim()))};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("div",{className:"flex items-center justify-center gap-3 mb-3",children:[t.jsx(Sd,{size:32,style:{color:"var(--color-gold)"}}),t.jsx("h1",{className:"text-center text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Minor Information"})]}),t.jsxs("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:["Please provide the name",i>1?"s":""," of ",i===1?"the":"all"," minor",i>1?"s":""," visiting"]}),t.jsxs("form",{onSubmit:j,className:"space-y-5",children:[t.jsx("div",{className:"space-y-4",children:u.map((b,F)=>t.jsxs("div",{className:"space-y-2",children:[t.jsxs("label",{className:"block text-base",style:{color:"var(--color-text-white)"},children:["Minor ",F+1," Full Name"]}),t.jsx("input",{type:"text",value:b,onChange:A=>x(F,A.target.value),placeholder:`Enter name of minor ${F+1}`,required:!0,className:"w-full px-4 py-3 rounded-lg text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]},F))}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid rgba(212, 167, 54, 0.3)"},children:t.jsx("p",{className:"text-sm text-center",style:{color:"var(--color-text-gray)"},children:"ℹ️ Signatures are not required for minors"})}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:d,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Complete Check-In"})]})]})]})})}function zh({customerName:s,hasMinors:d,onReturnHome:i}){const[u,g]=f.useState(15),h=f.useRef(i);return f.useEffect(()=>{h.current=i},[i]),f.useEffect(()=>{const x=setInterval(()=>{g(j=>j<=1?(clearInterval(x),setTimeout(()=>h.current(),0),0):j-1)},1e3);return()=>clearInterval(x)},[]),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("div",{className:"flex justify-center mb-6",children:t.jsx(xs,{size:80,style:{color:"var(--color-success)"}})}),t.jsxs("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:["Thank You, ",s,"!"]}),t.jsx("p",{className:"mb-6",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"Your check-in is complete. A member of our team will be with you shortly."}),d&&t.jsxs("div",{className:"flex items-start gap-3 mb-8 p-4 rounded-lg text-left",style:{backgroundColor:"rgba(234, 179, 8, 0.1)",border:"1px solid var(--color-gold)"},children:[t.jsx(ph,{size:24,style:{color:"var(--color-gold)",flexShrink:0,marginTop:"2px"}}),t.jsx("p",{style:{color:"var(--color-gold)",fontSize:"16px",fontWeight:500},children:"Caution: Children under 15 years old must stay in the waiting room."})]}),t.jsxs("p",{className:"mb-6",style:{color:"var(--color-text-gray)"},children:["Returning to home screen in ",t.jsx("span",{style:{color:"var(--color-gold)"},children:u})," seconds..."]}),t.jsx("button",{onClick:i,className:"px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return to Home"})]})})}function Mh({onLogin:s}){const[d,i]=f.useState(""),[u,g]=f.useState(""),[h,x]=f.useState(!1),[j,b]=f.useState(""),[F,A]=f.useState(!1),C=async _=>{if(_.preventDefault(),b(""),!d.trim()){b("Username is required");return}if(!u.trim()){b("Password is required");return}if(d==="staff"&&u==="reliance")s(d,"staff");else if(d==="pricing"&&u==="reliance")s(d,"pricing");else if(d==="analysis"&&u==="reliance")s(d,"analysis");else if(d==="staff2"&&u==="reliance")s(d,"staff2");else if(["katia","sarah","diane","sneha","dheeraj","ben","om","guest"].includes(d.toLowerCase())&&u==="Reliance159")s(d.toLowerCase(),"staff2");else if(d==="rating"&&u==="Reliance33")s(d,"rating");else if(d===u&&d.replace(/\D/g,"").length===10){const B=d.replace(/\D/g,"");A(!0);try{const q=await fetch("/api/customer/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:B})}),N=await q.json();q.ok?s(d,"customer",{token:N.data.authToken,checkInId:N.data.checkInId,customerName:N.data.customerName}):b(N.error||"No check-in found for this phone number.")}catch{b("Login failed. Please check your connection and try again.")}finally{A(!1)}}else b("Invalid username or password")};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsxs("div",{className:"text-center mb-8",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-24 h-24 mx-auto mb-4 object-contain"}),t.jsx("h1",{style:{color:"var(--color-gold)"},children:"Reliance Surfaces"}),t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"Login"})]}),t.jsxs("form",{onSubmit:C,className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Username"}),t.jsx("input",{type:"text",value:d,onChange:_=>i(_.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter your username"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Password"}),t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:h?"text":"password",value:u,onChange:_=>g(_.target.value),className:"w-full px-4 py-3 rounded-lg pr-12",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter your password"}),t.jsx("button",{type:"button",onClick:()=>x(!h),className:"absolute right-3 top-1/2 -translate-y-1/2",style:{color:"var(--color-text-gray)"},children:h?t.jsx(Zp,{size:20}):t.jsx(vs,{size:20})})]})]}),j&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239, 68, 68, 0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{className:"text-center",style:{color:"var(--color-error)"},children:j})}),t.jsx("button",{type:"submit",disabled:F,className:"w-full py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:F?.7:1},children:F?"Signing in…":"Sign In"})]})]})})}function ud(s,d){const[i,u]=f.useState(s);return f.useEffect(()=>{const g=setTimeout(()=>u(s),d);return()=>clearTimeout(g)},[s,d]),i}function ir(s,d){d===void 0&&(d={});var i=d.insertAt;if(s&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css",i==="top"&&u.firstChild?u.insertBefore(g,u.firstChild):u.appendChild(g),g.styleSheet?g.styleSheet.cssText=s:g.appendChild(document.createTextNode(s))}}ir(`.react-loading-indicator-normalize,
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
}`);var it=function(){return it=Object.assign||function(s){for(var d,i=1,u=arguments.length;i<u;i++)for(var g in d=arguments[i])Object.prototype.hasOwnProperty.call(d,g)&&(s[g]=d[g]);return s},it.apply(this,arguments)};function jl(s){return jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},jl(s)}var Oh=/^\s+/,Dh=/\s+$/;function xe(s,d){if(d=d||{},(s=s||"")instanceof xe)return s;if(!(this instanceof xe))return new xe(s,d);var i=(function(u){var g={r:0,g:0,b:0},h=1,x=null,j=null,b=null,F=!1,A=!1;typeof u=="string"&&(u=(function(q){q=q.replace(Oh,"").replace(Dh,"").toLowerCase();var N,P=!1;if(fs[q])q=fs[q],P=!0;else if(q=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(N=rt.rgb.exec(q))?{r:N[1],g:N[2],b:N[3]}:(N=rt.rgba.exec(q))?{r:N[1],g:N[2],b:N[3],a:N[4]}:(N=rt.hsl.exec(q))?{h:N[1],s:N[2],l:N[3]}:(N=rt.hsla.exec(q))?{h:N[1],s:N[2],l:N[3],a:N[4]}:(N=rt.hsv.exec(q))?{h:N[1],s:N[2],v:N[3]}:(N=rt.hsva.exec(q))?{h:N[1],s:N[2],v:N[3],a:N[4]}:(N=rt.hex8.exec(q))?{r:Ir(N[1]),g:Ir(N[2]),b:Ir(N[3]),a:xd(N[4]),format:P?"name":"hex8"}:(N=rt.hex6.exec(q))?{r:Ir(N[1]),g:Ir(N[2]),b:Ir(N[3]),format:P?"name":"hex"}:(N=rt.hex4.exec(q))?{r:Ir(N[1]+""+N[1]),g:Ir(N[2]+""+N[2]),b:Ir(N[3]+""+N[3]),a:xd(N[4]+""+N[4]),format:P?"name":"hex8"}:(N=rt.hex3.exec(q))?{r:Ir(N[1]+""+N[1]),g:Ir(N[2]+""+N[2]),b:Ir(N[3]+""+N[3]),format:P?"name":"hex"}:!1})(u)),jl(u)=="object"&&(vt(u.r)&&vt(u.g)&&vt(u.b)?(C=u.r,_=u.g,B=u.b,g={r:255*Ke(C,255),g:255*Ke(_,255),b:255*Ke(B,255)},F=!0,A=String(u.r).substr(-1)==="%"?"prgb":"rgb"):vt(u.h)&&vt(u.s)&&vt(u.v)?(x=sn(u.s),j=sn(u.v),g=(function(q,N,P){q=6*Ke(q,360),N=Ke(N,100),P=Ke(P,100);var E=Math.floor(q),w=q-E,M=P*(1-N),U=P*(1-w*N),H=P*(1-(1-w)*N),W=E%6,R=[P,U,M,M,H,P][W],Z=[H,P,P,U,M,M][W],X=[M,M,H,P,P,U][W];return{r:255*R,g:255*Z,b:255*X}})(u.h,x,j),F=!0,A="hsv"):vt(u.h)&&vt(u.s)&&vt(u.l)&&(x=sn(u.s),b=sn(u.l),g=(function(q,N,P){var E,w,M;function U(R,Z,X){return X<0&&(X+=1),X>1&&(X-=1),X<1/6?R+6*(Z-R)*X:X<.5?Z:X<2/3?R+(Z-R)*(2/3-X)*6:R}if(q=Ke(q,360),N=Ke(N,100),P=Ke(P,100),N===0)E=w=M=P;else{var H=P<.5?P*(1+N):P+N-P*N,W=2*P-H;E=U(W,H,q+1/3),w=U(W,H,q),M=U(W,H,q-1/3)}return{r:255*E,g:255*w,b:255*M}})(u.h,x,b),F=!0,A="hsl"),u.hasOwnProperty("a")&&(h=u.a));var C,_,B;return h=Pd(h),{ok:F,format:u.format||A,r:Math.min(255,Math.max(g.r,0)),g:Math.min(255,Math.max(g.g,0)),b:Math.min(255,Math.max(g.b,0)),a:h}})(s);this._originalInput=s,this._r=i.r,this._g=i.g,this._b=i.b,this._a=i.a,this._roundA=Math.round(100*this._a)/100,this._format=d.format||i.format,this._gradientType=d.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=i.ok}function pd(s,d,i){s=Ke(s,255),d=Ke(d,255),i=Ke(i,255);var u,g,h=Math.max(s,d,i),x=Math.min(s,d,i),j=(h+x)/2;if(h==x)u=g=0;else{var b=h-x;switch(g=j>.5?b/(2-h-x):b/(h+x),h){case s:u=(d-i)/b+(d<i?6:0);break;case d:u=(i-s)/b+2;break;case i:u=(s-d)/b+4}u/=6}return{h:u,s:g,l:j}}function hd(s,d,i){s=Ke(s,255),d=Ke(d,255),i=Ke(i,255);var u,g,h=Math.max(s,d,i),x=Math.min(s,d,i),j=h,b=h-x;if(g=h===0?0:b/h,h==x)u=0;else{switch(h){case s:u=(d-i)/b+(d<i?6:0);break;case d:u=(i-s)/b+2;break;case i:u=(s-d)/b+4}u/=6}return{h:u,s:g,v:j}}function md(s,d,i,u){var g=[tt(Math.round(s).toString(16)),tt(Math.round(d).toString(16)),tt(Math.round(i).toString(16))];return u&&g[0].charAt(0)==g[0].charAt(1)&&g[1].charAt(0)==g[1].charAt(1)&&g[2].charAt(0)==g[2].charAt(1)?g[0].charAt(0)+g[1].charAt(0)+g[2].charAt(0):g.join("")}function fd(s,d,i,u){return[tt(Ed(u)),tt(Math.round(s).toString(16)),tt(Math.round(d).toString(16)),tt(Math.round(i).toString(16))].join("")}function Rh(s,d){d=d===0?0:d||10;var i=xe(s).toHsl();return i.s-=d/100,i.s=Cl(i.s),xe(i)}function _h(s,d){d=d===0?0:d||10;var i=xe(s).toHsl();return i.s+=d/100,i.s=Cl(i.s),xe(i)}function Ah(s){return xe(s).desaturate(100)}function Ih(s,d){d=d===0?0:d||10;var i=xe(s).toHsl();return i.l+=d/100,i.l=Cl(i.l),xe(i)}function Fh(s,d){d=d===0?0:d||10;var i=xe(s).toRgb();return i.r=Math.max(0,Math.min(255,i.r-Math.round(-d/100*255))),i.g=Math.max(0,Math.min(255,i.g-Math.round(-d/100*255))),i.b=Math.max(0,Math.min(255,i.b-Math.round(-d/100*255))),xe(i)}function Lh(s,d){d=d===0?0:d||10;var i=xe(s).toHsl();return i.l-=d/100,i.l=Cl(i.l),xe(i)}function Hh(s,d){var i=xe(s).toHsl(),u=(i.h+d)%360;return i.h=u<0?360+u:u,xe(i)}function Uh(s){var d=xe(s).toHsl();return d.h=(d.h+180)%360,xe(d)}function gd(s,d){if(isNaN(d)||d<=0)throw new Error("Argument to polyad must be a positive number");for(var i=xe(s).toHsl(),u=[xe(s)],g=360/d,h=1;h<d;h++)u.push(xe({h:(i.h+h*g)%360,s:i.s,l:i.l}));return u}function Bh(s){var d=xe(s).toHsl(),i=d.h;return[xe(s),xe({h:(i+72)%360,s:d.s,l:d.l}),xe({h:(i+216)%360,s:d.s,l:d.l})]}function Wh(s,d,i){d=d||6,i=i||30;var u=xe(s).toHsl(),g=360/i,h=[xe(s)];for(u.h=(u.h-(g*d>>1)+720)%360;--d;)u.h=(u.h+g)%360,h.push(xe(u));return h}function qh(s,d){d=d||6;for(var i=xe(s).toHsv(),u=i.h,g=i.s,h=i.v,x=[],j=1/d;d--;)x.push(xe({h:u,s:g,v:h})),h=(h+j)%1;return x}xe.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var s=this.toRgb();return(299*s.r+587*s.g+114*s.b)/1e3},getLuminance:function(){var s,d,i,u=this.toRgb();return s=u.r/255,d=u.g/255,i=u.b/255,.2126*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.7152*(d<=.03928?d/12.92:Math.pow((d+.055)/1.055,2.4))+.0722*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))},setAlpha:function(s){return this._a=Pd(s),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var s=hd(this._r,this._g,this._b);return{h:360*s.h,s:s.s,v:s.v,a:this._a}},toHsvString:function(){var s=hd(this._r,this._g,this._b),d=Math.round(360*s.h),i=Math.round(100*s.s),u=Math.round(100*s.v);return this._a==1?"hsv("+d+", "+i+"%, "+u+"%)":"hsva("+d+", "+i+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var s=pd(this._r,this._g,this._b);return{h:360*s.h,s:s.s,l:s.l,a:this._a}},toHslString:function(){var s=pd(this._r,this._g,this._b),d=Math.round(360*s.h),i=Math.round(100*s.s),u=Math.round(100*s.l);return this._a==1?"hsl("+d+", "+i+"%, "+u+"%)":"hsla("+d+", "+i+"%, "+u+"%, "+this._roundA+")"},toHex:function(s){return md(this._r,this._g,this._b,s)},toHexString:function(s){return"#"+this.toHex(s)},toHex8:function(s){return(function(d,i,u,g,h){var x=[tt(Math.round(d).toString(16)),tt(Math.round(i).toString(16)),tt(Math.round(u).toString(16)),tt(Ed(g))];return h&&x[0].charAt(0)==x[0].charAt(1)&&x[1].charAt(0)==x[1].charAt(1)&&x[2].charAt(0)==x[2].charAt(1)&&x[3].charAt(0)==x[3].charAt(1)?x[0].charAt(0)+x[1].charAt(0)+x[2].charAt(0)+x[3].charAt(0):x.join("")})(this._r,this._g,this._b,this._a,s)},toHex8String:function(s){return"#"+this.toHex8(s)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ke(this._r,255))+"%",g:Math.round(100*Ke(this._g,255))+"%",b:Math.round(100*Ke(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ke(this._r,255))+"%, "+Math.round(100*Ke(this._g,255))+"%, "+Math.round(100*Ke(this._b,255))+"%)":"rgba("+Math.round(100*Ke(this._r,255))+"%, "+Math.round(100*Ke(this._g,255))+"%, "+Math.round(100*Ke(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&($h[md(this._r,this._g,this._b,!0)]||!1)},toFilter:function(s){var d="#"+fd(this._r,this._g,this._b,this._a),i=d,u=this._gradientType?"GradientType = 1, ":"";if(s){var g=xe(s);i="#"+fd(g._r,g._g,g._b,g._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+d+",endColorstr="+i+")"},toString:function(s){var d=!!s;s=s||this._format;var i=!1,u=this._a<1&&this._a>=0;return d||!u||s!=="hex"&&s!=="hex6"&&s!=="hex3"&&s!=="hex4"&&s!=="hex8"&&s!=="name"?(s==="rgb"&&(i=this.toRgbString()),s==="prgb"&&(i=this.toPercentageRgbString()),s!=="hex"&&s!=="hex6"||(i=this.toHexString()),s==="hex3"&&(i=this.toHexString(!0)),s==="hex4"&&(i=this.toHex8String(!0)),s==="hex8"&&(i=this.toHex8String()),s==="name"&&(i=this.toName()),s==="hsl"&&(i=this.toHslString()),s==="hsv"&&(i=this.toHsvString()),i||this.toHexString()):s==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return xe(this.toString())},_applyModification:function(s,d){var i=s.apply(null,[this].concat([].slice.call(d)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(Ih,arguments)},brighten:function(){return this._applyModification(Fh,arguments)},darken:function(){return this._applyModification(Lh,arguments)},desaturate:function(){return this._applyModification(Rh,arguments)},saturate:function(){return this._applyModification(_h,arguments)},greyscale:function(){return this._applyModification(Ah,arguments)},spin:function(){return this._applyModification(Hh,arguments)},_applyCombination:function(s,d){return s.apply(null,[this].concat([].slice.call(d)))},analogous:function(){return this._applyCombination(Wh,arguments)},complement:function(){return this._applyCombination(Uh,arguments)},monochromatic:function(){return this._applyCombination(qh,arguments)},splitcomplement:function(){return this._applyCombination(Bh,arguments)},triad:function(){return this._applyCombination(gd,[3])},tetrad:function(){return this._applyCombination(gd,[4])}},xe.fromRatio=function(s,d){if(jl(s)=="object"){var i={};for(var u in s)s.hasOwnProperty(u)&&(i[u]=u==="a"?s[u]:sn(s[u]));s=i}return xe(s,d)},xe.equals=function(s,d){return!(!s||!d)&&xe(s).toRgbString()==xe(d).toRgbString()},xe.random=function(){return xe.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},xe.mix=function(s,d,i){i=i===0?0:i||50;var u=xe(s).toRgb(),g=xe(d).toRgb(),h=i/100;return xe({r:(g.r-u.r)*h+u.r,g:(g.g-u.g)*h+u.g,b:(g.b-u.b)*h+u.b,a:(g.a-u.a)*h+u.a})},xe.readability=function(s,d){var i=xe(s),u=xe(d);return(Math.max(i.getLuminance(),u.getLuminance())+.05)/(Math.min(i.getLuminance(),u.getLuminance())+.05)},xe.isReadable=function(s,d,i){var u,g,h=xe.readability(s,d);switch(g=!1,(u=(function(x){var j,b;return j=((x=x||{level:"AA",size:"small"}).level||"AA").toUpperCase(),b=(x.size||"small").toLowerCase(),j!=="AA"&&j!=="AAA"&&(j="AA"),b!=="small"&&b!=="large"&&(b="small"),{level:j,size:b}})(i)).level+u.size){case"AAsmall":case"AAAlarge":g=h>=4.5;break;case"AAlarge":g=h>=3;break;case"AAAsmall":g=h>=7}return g},xe.mostReadable=function(s,d,i){var u,g,h,x,j=null,b=0;g=(i=i||{}).includeFallbackColors,h=i.level,x=i.size;for(var F=0;F<d.length;F++)(u=xe.readability(s,d[F]))>b&&(b=u,j=xe(d[F]));return xe.isReadable(s,j,{level:h,size:x})||!g?j:(i.includeFallbackColors=!1,xe.mostReadable(s,["#fff","#000"],i))};var fs=xe.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},$h=xe.hexNames=(function(s){var d={};for(var i in s)s.hasOwnProperty(i)&&(d[s[i]]=i);return d})(fs);function Pd(s){return s=parseFloat(s),(isNaN(s)||s<0||s>1)&&(s=1),s}function Ke(s,d){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(s)&&(s="100%");var i=(function(u){return typeof u=="string"&&u.indexOf("%")!=-1})(s);return s=Math.min(d,Math.max(0,parseFloat(s))),i&&(s=parseInt(s*d,10)/100),Math.abs(s-d)<1e-6?1:s%d/parseFloat(d)}function Cl(s){return Math.min(1,Math.max(0,s))}function Ir(s){return parseInt(s,16)}function tt(s){return s.length==1?"0"+s:""+s}function sn(s){return s<=1&&(s=100*s+"%"),s}function Ed(s){return Math.round(255*parseFloat(s)).toString(16)}function xd(s){return Ir(s)/255}var Ft,kl,Nl,rt=(kl="[\\s|\\(]+("+(Ft="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Ft+")[,|\\s]+("+Ft+")\\s*\\)?",Nl="[\\s|\\(]+("+Ft+")[,|\\s]+("+Ft+")[,|\\s]+("+Ft+")[,|\\s]+("+Ft+")\\s*\\)?",{CSS_UNIT:new RegExp(Ft),rgb:new RegExp("rgb"+kl),rgba:new RegExp("rgba"+Nl),hsl:new RegExp("hsl"+kl),hsla:new RegExp("hsla"+Nl),hsv:new RegExp("hsv"+kl),hsva:new RegExp("hsva"+Nl),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function vt(s){return!!rt.CSS_UNIT.exec(s)}var Yh=function(s,d){var i=(typeof s=="string"?parseInt(s):s)||0;if(i>=-5&&i<=5){var u=i,g=parseFloat(d),h=g+u*(g/5)*-1;return(h==0||h<=Number.EPSILON)&&(h=.1),{animationPeriod:h+"s"}}return{animationPeriod:d}},Vh=function(s,d){var i=s||{},u="";switch(d){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var g={};if(i.fontSize){var h=i.fontSize;g=(function(x,j){var b={};for(var F in x)Object.prototype.hasOwnProperty.call(x,F)&&j.indexOf(F)<0&&(b[F]=x[F]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function"){var A=0;for(F=Object.getOwnPropertySymbols(x);A<F.length;A++)j.indexOf(F[A])<0&&Object.prototype.propertyIsEnumerable.call(x,F[A])&&(b[F[A]]=x[F[A]])}return b})(i,["fontSize"]),u=h}return{fontSize:u,styles:g}},Qh={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Xh=function(s){var d=s.className,i=s.text,u=s.textColor,g=s.staticText,h=s.style;return i?Yr.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(d||"").trim(),style:it(it(it({},g&&Qh),u&&{color:u,mixBlendMode:"unset"}),h&&h)},typeof i=="string"&&i.length?i:"loading"):null},Td="rgb(50, 205, 50)";function Kh(s,d){if(d===void 0&&(d=0),s.length===0)throw new Error("Input array cannot be empty!");var i=[];return(function u(g,h){return h===void 0&&(h=0),i.push.apply(i,g),i.length<h&&u(i,h),i.slice(0,h)})(s,d)}ir(`.atom-rli-bounding-box {
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
}`);xe(Td).toRgb();Array.from({length:4},(function(s,d){return"--atom-phase".concat(d+1,"-rgb")}));ir(`.commet-rli-bounding-box {
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
}`);var No=Array.from({length:4},(function(s,d){return"--slab-phase".concat(d+1,"-color")})),Gh=function(s){var d,i=Vh(s?.style,s?.size),u=i.styles,g=i.fontSize,h=s?.easing,x=Yh(s?.speedPlus,"3s").animationPeriod,j=(function(b){var F={};if(b instanceof Array){for(var A=Kh(b,No.length),C=0;C<A.length&&!(C>=4);C++)F[No[C]]=A[C];return F}try{if(typeof b!="string")throw new Error("Color String expected");for(var _=0;_<No.length;_++)F[No[_]]=b}catch(B){for(B instanceof Error?console.warn("[".concat(B.message,']: Received "').concat(typeof b,'" instead with value, ').concat(JSON.stringify(b))):console.warn("".concat(JSON.stringify(b)," received in <Slab /> indicator cannot be processed. Using default instead!")),_=0;_<No.length;_++)F[No[_]]=Td}return F})((d=s?.color)!==null&&d!==void 0?d:"");return Yr.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",style:it(it(it(it(it({},g&&{fontSize:g}),x&&{"--rli-animation-duration-unitless":parseFloat(x)}),h&&{"--rli-animation-function":h}),j),u),role:"status","aria-live":"polite","aria-label":"Loading"},Yr.createElement("span",{className:"rli-d-i-b slab-indicator"},Yr.createElement("span",{className:"slabs-wrapper"},Yr.createElement("span",{className:"slab"}),Yr.createElement("span",{className:"slab"}),Yr.createElement("span",{className:"slab"}),Yr.createElement("span",{className:"slab"}))),Yr.createElement(Xh,{staticText:!0,text:s?.text,textColor:s?.textColor}))};ir(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},(function(s,d){return"--life-line-phase".concat(d+1,"-color")}));function cn({color:s="#ccb331",size:d="medium",text:i,fullScreen:u=!1}){const g=t.jsxs("div",{className:"flex flex-col items-center justify-center gap-3",children:[t.jsx(Gh,{color:s,size:d}),i&&t.jsx("p",{className:"text-sm animate-pulse",style:{color:"var(--color-text-gray, #aaa)"},children:i})]});return u?t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.7)"},children:g}):t.jsx("div",{className:"flex items-center justify-center p-6",children:g})}function Jh({customer:s,onClose:d,onSubmit:i,onMarkAsHelped:u,onRevisit:g,staffUsername:h,isViewOnly:x,allCheckIns:j}){const[b,F]=f.useState(s.draft?.step||1),[A,C]=f.useState(s.draft?.editedCustomerData||{}),[_,B]=f.useState(()=>{const S=s.draft?.editedCustomerData?.firstName??s.firstName,se=s.draft?.editedCustomerData?.lastName??s.lastName;return[S,se].filter(Boolean).join(" ")}),q=S=>{B(S);const se=S.trim().split(/\s+/).filter(Boolean);C(Qe=>({...Qe,firstName:se[0]||S.trim(),lastName:se.slice(1).join(" ")}))},[N,P]=f.useState(s.draft?.selectedFabricator),[E,w]=f.useState(s.draft?.materials||[]),[M,U]=f.useState(s.currentlyHelpedBy||s.draft?.helpedBy||h),[H,W]=f.useState(s.draft?.selectionSheetNumber||""),[R,Z]=f.useState(s.draft?.selectedFabricator?.companyName||""),[X,L]=f.useState(""),[oe,de]=f.useState(!1),[V,he]=f.useState(!1),Ce=ud(R,300),Pe=ud(X,300),[Ee,G]=f.useState([]),[ae,re]=f.useState([]),[p,y]=f.useState(!1),[Q,ee]=f.useState(!1),[ce,ne]=f.useState(!1),[Se,Te]=f.useState([]),[we,Ue]=f.useState(!1),[cr,Fr]=f.useState(!1),[wr,Ve]=f.useState(null);f.useEffect(()=>{s.currentlyHelpedBy&&U(s.currentlyHelpedBy)},[s.currentlyHelpedBy]),f.useEffect(()=>{const S=s.phones?.[0];S&&(Fr(!0),fetch(`/api/images/customer/${encodeURIComponent(S)}`).then(se=>se.json()).then(se=>{se.success&&Array.isArray(se.data)&&Te(se.data.filter(Qe=>Qe.images.length>0))}).catch(()=>{}).finally(()=>Fr(!1)))},[s.phones]);const br=()=>({...s,...A});f.useEffect(()=>{if(Ce.length<3){G([]);return}y(!0),fetch(`/api/accounts/search?q=${encodeURIComponent(Ce)}`).then(S=>S.json()).then(S=>G(S.success?S.data:[])).catch(()=>G([])).finally(()=>y(!1))},[Ce]),f.useEffect(()=>{if(Pe.length<3){re([]);return}ee(!0),fetch(`/api/materials/search?q=${encodeURIComponent(Pe)}`).then(S=>S.json()).then(S=>re(S.success?S.data:[])).catch(()=>re([])).finally(()=>ee(!1))},[Pe]);const jr=()=>{if(s.status==="waiting"){const S={step:b,editedCustomerData:A,selectedFabricator:N,materials:E,helpedBy:M,selectionSheetNumber:H,isHold:E.some(se=>se.hold),isRevisit:s.draft?.isRevisit,previousMaterialsCount:s.draft?.previousMaterialsCount};i(s.id,S),fetch(`/api/check-ins/${s.id}/draft`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({draftStep:b,materials:E,fabricator:N||null,helpedBy:M,selectionSheetNumber:H})}).catch(se=>console.warn("Draft save failed:",se))}d()},Lr=S=>{P(S),Z(S.companyName),de(!1),S.salesPerson&&C(se=>({...se,salesPerson:S.salesPerson}))},We=S=>{Z(S),de(!0),N&&S.toLowerCase()!==N.companyName.toLowerCase()&&!N.companyName.toLowerCase().startsWith(S.toLowerCase())&&S.length>=3&&P(void 0)},or=S=>{const se={id:Date.now().toString(),name:S,soldAs:"",size:{l:"",h:""},lot:"",location:"",quantity:1,finish:"Polished",hold:!1,slabNumbers:""};w([...E,se]),L(""),he(!1)},Oe=(S,se,Qe)=>{w(E.map(ze=>ze.id===S?{...ze,[se]:Qe}:ze))},J=S=>{w(E.filter(se=>se.id!==S))},ve=async()=>{if(b!==3||ce)return;ne(!0);const S={step:3,editedCustomerData:A,selectedFabricator:N,materials:E,helpedBy:M,selectionSheetNumber:H,isHold:E.some(se=>se.hold),isRevisit:s.draft?.isRevisit,previousMaterialsCount:s.draft?.previousMaterialsCount};try{await fetch(`/api/check-ins/${s.id}/complete`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({materials:E,selectedFabricator:N,helpedBy:M,selectionSheetNumber:H})})}catch(se){console.error("Complete API error:",se)}ne(!1),i(s.id,S),d()},Ne=()=>{if(!s.draft?.selectionSheetNumber)return!1;const S=j.filter(ge=>ge.firstName===s.firstName&&ge.lastName===s.lastName&&ge.status==="helped"&&ge.draft?.selectionSheetNumber),ze=s.draft.selectionSheetNumber.split(".")[0],Be=S.filter(ge=>(ge.draft?.selectionSheetNumber||"").startsWith(ze));return Be.sort((ge,Ae)=>{const De=ge.draft?.selectionSheetNumber||"",I=Ae.draft?.selectionSheetNumber||"",me=De.split("."),Re=I.split("."),He=parseInt(me[0])||0,lr=parseInt(Re[0])||0;if(He!==lr)return He-lr;const hr=me.length>1?parseInt(me[1]):0,Or=Re.length>1?parseInt(Re[1]):0;return hr-Or}),Be[Be.length-1]?.id===s.id},ye=br();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-6 z-50",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsxs("div",{className:"flex justify-between items-start mb-6",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{color:"var(--color-gold)"},children:[ye.firstName,ye.lastName].filter(Boolean).join(" ")}),t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:["Step ",b," of 3"]})]}),t.jsx("button",{onClick:jr,className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsx("div",{className:"flex gap-2 mb-8",children:[1,2,3].map(S=>t.jsx("div",{className:"flex-1 h-2 rounded-full",style:{backgroundColor:S<=b?"var(--color-gold)":"var(--color-border)"}},S))}),b===1&&t.jsxs("div",{className:"space-y-6",children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Customer Details"}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),t.jsx("input",{type:"text",value:_,onChange:S=>q(S.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Street Address"}),t.jsx("input",{type:"text",value:A.street??ye.street,onChange:S=>C({...A,street:S.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:A.suiteUnit??ye.suiteUnit,onChange:S=>C({...A,suiteUnit:S.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[t.jsxs("div",{className:"col-span-2",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"City"}),t.jsx("input",{type:"text",value:A.city??ye.city,onChange:S=>C({...A,city:S.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"State"}),t.jsx("input",{type:"text",value:A.state??ye.state,onChange:S=>C({...A,state:S.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"ZIP"}),t.jsx("input",{type:"text",value:A.zip??ye.zip,onChange:S=>C({...A,zip:S.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Country"}),t.jsxs("select",{value:A.country??ye.country,onChange:S=>C({...A,country:S.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Phone Numbers"}),(A.phones??ye.phones).map((S,se)=>t.jsx("input",{type:"tel",value:S,onChange:Qe=>{const ze=[...A.phones??ye.phones];ze[se]=Qe.target.value,C({...A,phones:ze})},className:"w-full px-4 py-3 rounded-lg mb-2",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}},se))]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Email Addresses"}),(A.emails??ye.emails).map((S,se)=>t.jsx("input",{type:"email",value:S,onChange:Qe=>{const ze=[...A.emails??ye.emails];ze[se]=Qe.target.value,C({...A,emails:ze})},className:"w-full px-4 py-3 rounded-lg mb-2",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}},se))]}),ye.visitors&&ye.visitors.length>0?t.jsxs("div",{children:[t.jsxs("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:["All Visitors (",ye.visitors.length,")"]}),t.jsx("div",{className:"space-y-4",children:ye.visitors.filter(S=>S&&S.name).map((S,se)=>(console.log(`Visitor ${se}:`,{name:S.name,hasSignature:!!S.signature,signatureLength:S.signature?.length,isMinor:S.isMinor,isMain:S.isMain}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:S.isMain?"2px solid var(--color-gold)":"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"15px",fontWeight:"500"},children:S.name}),S.isMain&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:"Main"}),S.isMinor&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",color:"var(--color-text-gray)"},children:"Minor"})]}),S.signature&&S.signature.length>0?t.jsx("div",{className:"rounded",style:{backgroundColor:"rgba(0, 0, 0, 0.3)",padding:"8px"},children:t.jsx("img",{src:S.signature,alt:`${S.name}'s signature`,className:"w-full rounded",style:{maxHeight:"80px",objectFit:"contain"}})}):S.isMinor?t.jsx("div",{className:"rounded flex items-center justify-center",style:{backgroundColor:"rgba(0, 0, 0, 0.2)",padding:"12px",minHeight:"80px"},children:t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No signature (Minor)"})}):null]},se)))})]}):t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Waiver Signature"}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)"},children:t.jsx("img",{src:ye.signature,alt:"Signature",className:"w-full rounded",style:{maxHeight:"150px",objectFit:"contain"}})})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[t.jsxs("button",{onClick:()=>Ue(S=>!S),className:"w-full flex items-center justify-between px-4 py-3",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-white)",border:"none",cursor:"pointer"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ys,{size:16,style:{color:"var(--color-gold)"}}),t.jsx("span",{children:"Uploaded Images"}),!cr&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212,167,54,0.15)",color:"var(--color-gold)"},children:Se.reduce((S,se)=>S+se.images.length,0)})]}),we?t.jsx(kd,{size:16,style:{color:"var(--color-text-gray)"}}):t.jsx(bd,{size:16,style:{color:"var(--color-text-gray)"}})]}),we&&t.jsx("div",{className:"p-4",style:{borderTop:"1px solid var(--color-border)"},children:cr?t.jsx(cn,{size:"small",color:"#ccb331"}):Se.length===0?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No images uploaded."}):t.jsx("div",{className:"space-y-5",children:Se.map(S=>t.jsxs("div",{children:[Se.length>1&&t.jsxs("p",{className:"mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:["Visit: ",new Date(S.checkInTime).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),t.jsx("div",{className:"grid gap-3",style:{gridTemplateColumns:"repeat(auto-fill, minmax(110px, 1fr))"},children:S.images.map(se=>t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{aspectRatio:"1",border:"1px solid var(--color-border)",cursor:"pointer"},onClick:()=>Ve(se.image_url),children:[t.jsx("img",{src:se.image_url,alt:"Material",className:"w-full h-full object-cover"}),t.jsxs("div",{className:"absolute bottom-0 right-0 px-1.5 py-0.5 text-xs font-semibold rounded-tl-lg",style:{backgroundColor:"rgba(0,0,0,0.75)",color:"var(--color-gold)"},children:["×",se.quantity]})]},se.id))})]},S.checkInId))})})]})]}),b===2&&t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Referral Information"}),t.jsx("div",{className:"mt-4 p-4 rounded-lg",style:{backgroundColor:"var(--color-background)"},children:ye.referralSources&&ye.referralSources.length>0?ye.referralSources.map((S,se)=>t.jsxs("div",{className:"mb-3",children:[t.jsxs("p",{style:{color:"var(--color-text-white)"},children:[t.jsx("span",{style:{color:"var(--color-gold)"},children:"•"})," ",S.type]}),S.name&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Name: ",S.name]}),S.phone&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Phone: ",S.phone]}),S.location&&t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px",marginLeft:"20px"},children:["Location: ",S.location]})]},se)):t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No referral information provided"})})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)",marginBottom:"16px"},children:"Fabricator Selection *"}),t.jsxs("div",{className:"relative",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Search by Company Name"}),t.jsx("input",{type:"text",value:R,onChange:S=>We(S.target.value),onFocus:()=>de(!0),onBlur:()=>{setTimeout(()=>de(!1),200)},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${N?"var(--color-gold)":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Type 3+ characters to search..."}),oe&&R.length>=3&&t.jsx("div",{className:"absolute z-10 w-full mt-1 rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",maxHeight:"200px",overflowY:"auto"},children:p?t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[t.jsx(cn,{size:"small",color:"#ccb331"}),t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"Searching..."})]}):Ee.length>0?Ee.map(S=>t.jsxs("button",{onClick:()=>Lr(S),className:"w-full text-left px-4 py-3 hover:bg-opacity-50",style:{backgroundColor:"transparent",color:"var(--color-text-white)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("div",{children:S.companyName}),t.jsxs("div",{style:{color:"var(--color-text-gray)",fontSize:"12px"},children:[S.city,", ",S.state]})]},S.id)):t.jsx("div",{className:"px-4 py-3",children:t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:['No accounts found matching "',R,'"']})})}),R.length>0&&R.length<3&&t.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-text-gray)"},children:"Type at least 3 characters to search"})]})]}),N&&t.jsxs("div",{className:"p-6 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"},children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("h4",{style:{color:"var(--color-gold)"},children:"Selected Fabricator"}),t.jsx("button",{onClick:()=>{P(void 0),Z("")},className:"px-3 py-1 rounded text-sm",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Change"})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Company Name"}),t.jsx("input",{type:"text",value:N.companyName,onChange:S=>P({...N,companyName:S.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Address"}),t.jsx("input",{type:"text",value:N.address,onChange:S=>P({...N,address:S.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"City"}),t.jsx("input",{type:"text",value:N.city,onChange:S=>P({...N,city:S.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"State"}),t.jsx("input",{type:"text",value:N.state,onChange:S=>P({...N,state:S.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"ZIP"}),t.jsx("input",{type:"text",value:N.zip,onChange:S=>P({...N,zip:S.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Sales Person"}),t.jsx("input",{type:"text",value:A.salesPerson??ye.salesPerson??"",onChange:S=>C({...A,salesPerson:S.target.value}),placeholder:"Sales person name",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone 1"}),t.jsx("input",{type:"text",value:N.phone1,onChange:S=>P({...N,phone1:S.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone 2"}),t.jsx("input",{type:"text",value:N.phone2||"",onChange:S=>P({...N,phone2:S.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Mobile"}),t.jsx("input",{type:"text",value:N.mobile||"",onChange:S=>P({...N,mobile:S.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Email"}),t.jsx("input",{type:"email",value:N.email,onChange:S=>P({...N,email:S.target.value}),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]})]})]}),b===3&&t.jsxs("div",{className:"space-y-6",children:[s.draft?.isRevisit&&t.jsx("div",{className:"p-4 rounded-lg mb-4",style:{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-gold)"},children:t.jsxs("p",{style:{color:"var(--color-gold)",fontSize:"14px"},children:[t.jsx("strong",{children:"Re-visit Mode:"})," You can edit all materials. Use the ",t.jsx("strong",{children:"−"})," button when quantity is 1 to delete a material."]})}),t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--color-text-white)"},children:"Materials / Selection Sheet"}),t.jsxs("div",{className:"relative mt-4",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Search Materials"}),t.jsx("input",{type:"text",value:X,onChange:S=>{L(S.target.value),he(!0)},onFocus:()=>he(!0),disabled:x,className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:x?"not-allowed":"text",opacity:x?.6:1},placeholder:x?"View only mode":"Search for materials..."}),!x&&V&&X.length>=3&&t.jsx("div",{className:"absolute z-10 w-full mt-1 rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",maxHeight:"200px",overflowY:"auto"},children:Q?t.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[t.jsx(cn,{size:"small",color:"#ccb331"}),t.jsx("span",{style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"Searching..."})]}):ae.length>0?ae.map(S=>t.jsxs("button",{onClick:()=>or(S.name),className:"w-full text-left px-4 py-3 hover:bg-opacity-50 flex items-center justify-between",style:{backgroundColor:"transparent",color:"var(--color-text-white)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("span",{children:S.name}),t.jsx(dn,{size:16,style:{color:"var(--color-gold)"}})]},S.id)):t.jsx("div",{className:"px-4 py-3",children:t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:['No materials found matching "',X,'"']})})})]})]}),E.length>0&&t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"separate",borderSpacing:"0 10px"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{backgroundColor:"var(--color-background)"},children:[t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",width:"110px"},children:"Qty"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"160px"},children:"Name"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"130px"},children:"Sold As"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"130px"},children:"Finish"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"150px"},children:"Size (L x H)"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"90px"},children:"Lot"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"110px"},children:"Location"}),t.jsx("th",{className:"px-5 py-4 text-left",style:{color:"var(--color-gold)",fontSize:"15px",fontWeight:"600",minWidth:"110px"},children:"Hold"})]})}),t.jsx("tbody",{children:E.map((S,se)=>{const Qe=s.draft?.isRevisit&&se<(s.draft?.previousMaterialsCount||0);return t.jsxs("tr",{style:{backgroundColor:Qe?"rgba(100, 100, 100, 0.2)":"var(--color-background)",borderRadius:"8px"},children:[t.jsx("td",{className:"px-5 py-5",style:{borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px"},children:t.jsxs("div",{className:"flex items-center gap-1.5",children:[t.jsx("button",{onClick:()=>{S.quantity===1?J(S.id):Oe(S.id,"quantity",S.quantity-1)},disabled:x,className:"p-2 rounded",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)",opacity:x?.5:1,cursor:x?"not-allowed":"pointer"},title:S.quantity===1?"Delete material":"Decrease quantity",children:t.jsx(wd,{size:16})}),t.jsx("span",{style:{color:"var(--color-text-white)",minWidth:"30px",textAlign:"center",fontSize:"15px",fontWeight:"500"},children:S.quantity}),t.jsx("button",{onClick:()=>Oe(S.id,"quantity",S.quantity+1),disabled:x,className:"p-2 rounded",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-white)",opacity:x?.5:1,cursor:x?"not-allowed":"pointer"},children:t.jsx(dn,{size:16})})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"15px"},children:S.name}),Qe&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"var(--color-card)",color:"var(--color-text-gray)",border:"1px solid var(--color-border)"},children:"Previous"})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:S.soldAs||"",onChange:ze=>Oe(S.id,"soldAs",ze.target.value),disabled:x,placeholder:"Alternative",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:x?.6:1,cursor:x?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("select",{value:S.finish||"Polished",onChange:ze=>Oe(S.id,"finish",ze.target.value),disabled:x,className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:x?.6:1,cursor:x?"not-allowed":"pointer"},children:[t.jsx("option",{value:"Polished",children:"Polished"}),t.jsx("option",{value:"Honed",children:"Honed"}),t.jsx("option",{value:"Polished/Honed",children:"Polished/Honed"}),t.jsx("option",{value:"Leather",children:"Leather"}),t.jsx("option",{value:"Honed/Leather",children:"Honed/Leather"})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("input",{type:"text",value:S.size?.l||"",onChange:ze=>Oe(S.id,"size",{...S.size||{l:"",h:""},l:ze.target.value}),disabled:x,placeholder:"L",className:"w-16 px-2 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",textAlign:"center",opacity:x?.6:1,cursor:x?"not-allowed":"text"}}),t.jsx("span",{style:{color:"var(--color-gold)",fontWeight:"bold",fontSize:"16px"},children:"×"}),t.jsx("input",{type:"text",value:S.size?.h||"",onChange:ze=>Oe(S.id,"size",{...S.size||{l:"",h:""},h:ze.target.value}),disabled:x,placeholder:"H",className:"w-16 px-2 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",textAlign:"center",opacity:x?.6:1,cursor:x?"not-allowed":"text"}})]})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:S.lot||"",onChange:ze=>Oe(S.id,"lot",ze.target.value),disabled:x,placeholder:"Lot #",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:x?.6:1,cursor:x?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsx("input",{type:"text",value:S.location||"",onChange:ze=>Oe(S.id,"location",ze.target.value),disabled:x,placeholder:"Location",className:"w-full px-3 py-2.5 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px",opacity:x?.6:1,cursor:x?"not-allowed":"text"}})}),t.jsx("td",{className:"px-5 py-5",children:t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-2 mb-2 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:S.hold,onChange:ze=>Oe(S.id,"hold",ze.target.checked),disabled:x,className:"w-4 h-4 rounded",style:{accentColor:"var(--color-gold)",opacity:x?.5:1,cursor:x?"not-allowed":"pointer"}}),t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"14px"},children:"Hold"})]}),S.hold&&t.jsx("input",{type:"text",value:S.slabNumbers||"",onChange:ze=>Oe(S.id,"slabNumbers",ze.target.value),disabled:x,placeholder:"Slab #s",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)",fontSize:"14px",opacity:x?.6:1,cursor:x?"not-allowed":"text"}})]})})]},S.id)})})]})}),t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Helped By"}),t.jsx("div",{className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",border:"1px solid var(--color-gold)",color:"var(--color-text-white)"},children:M})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Selection Sheet Number"}),t.jsx("input",{type:"text",value:H,onChange:S=>W(S.target.value),readOnly:s.draft?.isRevisit||x,placeholder:"e.g. 800, 801...",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:s.draft?.isRevisit||x?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:`1px solid ${s.draft?.isRevisit||x?"var(--color-gold)":"var(--color-border)"}`,color:"var(--color-text-white)",cursor:s.draft?.isRevisit||x?"not-allowed":"text",opacity:x?.6:1}}),s.draft?.isRevisit&&!x&&t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-gold)"},children:"Auto-generated from previous sheet"})]})]})]}),t.jsxs("div",{className:"flex gap-4 mt-8",children:[b>1&&t.jsx("button",{onClick:()=>F(b-1),className:"px-6 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),!x&&b<3?t.jsx("button",{onClick:()=>F(b+1),disabled:b===2&&!N,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:b===2&&!N?"var(--color-border)":"var(--color-gold)",color:"var(--color-background)",cursor:b===2&&!N?"not-allowed":"pointer"},children:"Next"}):x&&b<3?t.jsx("button",{onClick:()=>F(b+1),className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Next"}):x?null:t.jsx("button",{onClick:ve,disabled:!H||H.trim()===""||ce,className:"flex-1 py-3 rounded-lg flex items-center justify-center gap-2",style:{backgroundColor:!H||H.trim()===""||ce?"var(--color-border)":"var(--color-success)",color:"var(--color-background)",cursor:!H||H.trim()===""||ce?"not-allowed":"pointer"},children:ce?t.jsxs(t.Fragment,{children:[t.jsx(cn,{size:"small",color:"var(--color-background)"}),t.jsx("span",{children:"Submitting..."})]}):"Submit"})]}),x&&g&&b===3&&Ne()&&t.jsx("div",{className:"flex gap-4 mt-4",children:t.jsx("button",{onClick:()=>{g(s),d()},className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Re-visit"})})]})}),wr&&t.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},onClick:()=>Ve(null),children:[t.jsx("img",{src:wr,alt:"Enlarged material",style:{maxWidth:"90vw",maxHeight:"90vh",display:"block",borderRadius:"8px"},onClick:S=>S.stopPropagation()}),t.jsx("button",{onClick:()=>Ve(null),style:{position:"absolute",top:"16px",right:"16px",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",color:"white",fontSize:"22px",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})]})}function Zh({username:s,onLogout:d,checkIns:i,onMarkAsHelped:u,onSaveDraft:g,onRevisit:h,onUpdateCurrentlyHelpedBy:x}){const[j,b]=f.useState("queue"),[F,A]=f.useState(null),[C,_]=f.useState(1),[B,q]=f.useState(""),[N,P]=f.useState(""),[E,w]=f.useState(""),[M,U]=f.useState(""),[H,W]=f.useState(""),[R,Z]=f.useState("all"),X=10,L=i.filter(p=>p.status==="waiting"),oe=i.filter(p=>p.status==="helped"),de=oe.filter(p=>{if(B&&p.draft?.selectedFabricator&&!p.draft.selectedFabricator.companyName.toLowerCase().includes(B.toLowerCase())||N&&p.helpedTime&&p.helpedTime.toISOString().split("T")[0]!==N||E&&p.draft?.selectionSheetNumber&&!p.draft.selectionSheetNumber.toLowerCase().includes(E.toLowerCase())||M&&!`${p.firstName} ${p.lastName}`.toLowerCase().includes(M.toLowerCase())||H&&!p.phones.some(Q=>Q.toLowerCase().includes(H.toLowerCase())))return!1;if(R!=="all"){const y=p.draft?.isHold||!1;if(R==="yes"&&!y||R==="no"&&y)return!1}return!0}),V=[...de].sort((p,y)=>!p.helpedTime||!y.helpedTime?0:y.helpedTime.getTime()-p.helpedTime.getTime()),he=V.slice((C-1)*X,C*X),Ce=Math.ceil(V.length/X),Pe=p=>{const Q=new Date().getTime()-p.getTime(),ee=Math.floor(Q/6e4);if(ee<1)return"Just now";if(ee<60)return`${ee} min`;const ce=Math.floor(ee/60),ne=ee%60;return`${ce}h ${ne}m`},Ee=p=>p.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),G=p=>p.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})+" "+p.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"}),ae=(p,y)=>{g(p,y),y.step===3&&u(p)},re=p=>{x(p.id,s),A(p)};return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-4",children:[t.jsxs("div",{className:"flex justify-between items-center",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-12 h-12 object-contain"}),t.jsx("h2",{style:{color:"var(--color-gold)"},children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("span",{style:{color:"var(--color-text-white)"},children:s}),t.jsxs("button",{className:"relative p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)"},children:[t.jsx(Wp,{size:20,style:{color:"var(--color-text-gray)"}}),L.length>0&&t.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:L.length})]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})]}),t.jsxs("div",{className:"flex gap-6 mt-6",children:[t.jsxs("button",{onClick:()=>b("queue"),className:"pb-3 px-2",style:{color:j==="queue"?"var(--color-gold)":"var(--color-text-gray)",borderBottom:j==="queue"?"2px solid var(--color-gold)":"2px solid transparent"},children:["Queue ",L.length>0&&`(${L.length})`]}),t.jsx("button",{onClick:()=>b("history"),className:"pb-3 px-2",style:{color:j==="history"?"var(--color-gold)":"var(--color-text-gray)",borderBottom:j==="history"?"2px solid var(--color-gold)":"2px solid transparent"},children:"History"})]})]})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8",children:[j==="queue"&&t.jsx("div",{children:t.jsx("div",{className:"space-y-3",children:L.length===0?t.jsx("div",{className:"text-center py-12",style:{color:"var(--color-text-gray)"},children:"No customers in queue"}):L.map(p=>t.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-lg transition-all hover:bg-opacity-80",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:p.firstName.charAt(0).toUpperCase()}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("span",{className:"font-medium truncate",style:{color:"var(--color-text-white)"},children:[p.firstName,p.lastName].filter(Boolean).join(" ")}),p.currentlyHelpedBy?t.jsxs("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:["In Progress • ",p.currentlyHelpedBy]}):t.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium flex-shrink-0",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"New"}),p.partySize&&(p.partySize.adults>1||p.partySize.minors>0)&&t.jsxs("span",{className:"px-2 py-0.5 rounded text-xs flex-shrink-0",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:[p.partySize.adults," ",p.partySize.adults===1?"Adult":"Adults",p.partySize.minors>0&&`, ${p.partySize.minors} ${p.partySize.minors===1?"Minor":"Minors"}`]})]}),t.jsxs("div",{className:"flex items-center gap-4 text-xs",style:{color:"var(--color-text-gray)"},children:[t.jsxs("span",{children:["Checked in at ",Ee(p.checkInTime)]}),t.jsx("span",{children:"•"}),t.jsxs("span",{style:{color:"var(--color-gold)"},children:["Waiting ",Pe(p.checkInTime)]})]})]}),t.jsx("button",{onClick:()=>re(p),className:"flex-shrink-0 px-6 py-2 rounded-lg font-medium transition-all hover:opacity-90",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"View"})]},p.id))})}),j==="history"&&t.jsxs("div",{children:[t.jsxs("div",{className:"mb-6 p-6 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("h3",{style:{color:"var(--color-gold)",marginBottom:"16px"},children:"Filter History"}),t.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Customer Name"}),t.jsx("input",{type:"text",value:M,onChange:p=>{U(p.target.value),_(1)},placeholder:"Search by name...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Phone Number"}),t.jsx("input",{type:"text",value:H,onChange:p=>{W(p.target.value),_(1)},placeholder:"Search by phone...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Fabricator"}),t.jsx("input",{type:"text",value:B,onChange:p=>{q(p.target.value),_(1)},placeholder:"Search by fabricator...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Selection Sheet #"}),t.jsx("input",{type:"text",value:E,onChange:p=>{w(p.target.value),_(1)},placeholder:"Search by sheet #...",className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Date"}),t.jsx("input",{type:"date",value:N,onChange:p=>{P(p.target.value),_(1)},className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Hold Status"}),t.jsxs("select",{value:R,onChange:p=>{Z(p.target.value),_(1)},className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Hold"}),t.jsx("option",{value:"no",children:"Not Hold"})]})]})]}),(M||H||B||E||N||R!=="all")&&t.jsx("button",{onClick:()=>{U(""),W(""),q(""),w(""),P(""),Z("all"),_(1)},className:"mt-4 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear Filters"})]}),V.length===0?t.jsxs("div",{className:"text-center py-16",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"18px"},children:de.length===0&&oe.length>0?"No matching results":"No history yet"}),t.jsx("p",{style:{color:"var(--color-text-gray)",marginTop:"8px"},children:de.length===0&&oe.length>0?"Try adjusting your filters":"Helped customers will appear here"})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{backgroundColor:"var(--color-background)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Sheet #"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Customer Name"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Phone Number"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Fabricator"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Check-in"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Helped At"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"},children:"Hold"}),t.jsx("th",{className:"px-4 py-3 text-left",style:{color:"var(--color-gold)",fontSize:"14px",fontWeight:"600"}})]})}),t.jsx("tbody",{children:he.map((p,y)=>t.jsxs("tr",{style:{borderBottom:y<he.length-1?"1px solid var(--color-border)":"none",backgroundColor:y%2===0?"transparent":"rgba(0, 0, 0, 0.2)"},children:[t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-white)",fontSize:"14px"},children:p.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-white)",fontSize:"14px"},children:[p.firstName,p.lastName].filter(Boolean).join(" ")}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:p.phones[0]||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:p.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:G(p.checkInTime)}),t.jsx("td",{className:"px-4 py-4",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:p.helpedTime?G(p.helpedTime):"-"}),t.jsx("td",{className:"px-4 py-4",style:{color:p.draft?.isHold?"var(--color-gold)":"var(--color-text-gray)",fontSize:"14px",fontWeight:p.draft?.isHold?"600":"normal"},children:p.draft?.isHold?"Yes":"No"}),t.jsx("td",{className:"px-4 py-4",children:t.jsx("button",{onClick:()=>A(p),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",fontSize:"14px"},children:"View"})})]},p.id))})]})})}),Ce>1&&t.jsxs("div",{className:"flex justify-center items-center gap-4 mt-8",children:[t.jsx("button",{onClick:()=>_(Math.max(1,C-1)),disabled:C===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:C===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:C===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:C===1?"not-allowed":"pointer"},children:"Previous"}),t.jsxs("span",{style:{color:"var(--color-text-white)"},children:["Page ",C," of ",Ce]}),t.jsx("button",{onClick:()=>_(Math.min(Ce,C+1)),disabled:C===Ce,className:"px-4 py-2 rounded-lg",style:{backgroundColor:C===Ce?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:C===Ce?"var(--color-text-gray)":"var(--color-text-white)",cursor:C===Ce?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),F&&t.jsx(Jh,{customer:F,onClose:()=>A(null),onSubmit:ae,onMarkAsHelped:u,onRevisit:h,staffUsername:s,isViewOnly:F.status==="helped",allCheckIns:i})]})}function zd({customer:s,onClose:d,onComplete:i}){const[u,g]=f.useState([]),[h,x]=f.useState(!1),j=s.priced||!1;f.useEffect(()=>{if(s.draft?.materials){const A=s.draft.materials.map(C=>{const _=parseFloat(C.size?.l)||0,B=parseFloat(C.size?.h)||0,q=parseFloat(C.price||"0")||0,N=C.priceType||"per SFT";return{material:C.soldAs||C.name,quantity:C.quantity,finish:C.finish||"Polished",length:_,height:B,price:q,priceType:N}});g(A)}},[s]);const b=(A,C,_)=>{if(j)return;const B=[...u];B[A]={...B[A],[C]:_},g(B)},F=async()=>{if(!u.every(C=>C.price>0)&&!j){alert("Please enter prices for all materials");return}x(!0),setTimeout(()=>{console.log("Sending quote to fabricator:",s.draft?.selectedFabricator),console.log("Quote details:",{customer:[s.firstName,s.lastName].filter(Boolean).join(" "),selectionSheetNumber:s.draft?.selectionSheetNumber,materials:u.map(C=>({quantity:C.quantity,material:C.material,finish:C.finish,length:C.length,height:C.height,price:C.price,priceType:C.priceType}))}),alert(`Quote ${j?"resent":"sent"} successfully to ${s.draft?.selectedFabricator?.companyName||"fabricator"}!`),x(!1),j||i(s.id),d()},1500)};return t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-5xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px"},children:[t.jsxs("div",{className:"sticky top-0 z-10 flex items-center justify-between p-6 border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-1",style:{color:"var(--color-gold)"},children:"Quote"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:[[s.firstName,s.lastName].filter(Boolean).join(" ")," • Sheet #",s.draft?.selectionSheetNumber]})]}),t.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsxs("div",{className:"p-6 space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-2 gap-4 p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("p",{style:{color:"var(--color-text-white)"},children:[s.firstName,s.lastName].filter(Boolean).join(" ")})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("p",{style:{color:"var(--color-text-white)"},children:s.draft?.selectedFabricator?.companyName||"Not assigned"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg mb-3",style:{color:"var(--color-text-white)"},children:"Materials & Pricing"}),t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsxs("tr",{style:{borderBottom:"2px solid var(--color-border)",backgroundColor:"var(--color-background)"},children:[t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"80px"},children:"Quantity"}),t.jsx("th",{className:"text-left p-3 text-sm font-semibold",style:{color:"var(--color-gold)"},children:"Material Name"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"120px"},children:"Finish"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"110px"},children:"Length (in)"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"110px"},children:"Height (in)"}),t.jsx("th",{className:"text-right p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"140px"},children:"Price"}),t.jsx("th",{className:"text-center p-3 text-sm font-semibold",style:{color:"var(--color-gold)",width:"120px"},children:"Type"})]})}),t.jsx("tbody",{children:u.map((A,C)=>t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)"},children:[t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:A.quantity,onChange:_=>b(C,"quantity",parseFloat(_.target.value)||0),disabled:j,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:j?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:j?"not-allowed":"text"},min:"0"})}),t.jsx("td",{className:"p-3",style:{color:"var(--color-text-white)"},children:A.material}),t.jsx("td",{className:"p-3 text-center",style:{color:"var(--color-text-white)"},children:A.finish}),t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:A.length,onChange:_=>b(C,"length",parseFloat(_.target.value)||0),disabled:j,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:j?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:j?"not-allowed":"text"},min:"0",step:"0.1"})}),t.jsx("td",{className:"p-3 text-center",children:t.jsx("input",{type:"number",value:A.height,onChange:_=>b(C,"height",parseFloat(_.target.value)||0),disabled:j,className:"w-full px-2 py-2 rounded text-center",style:{backgroundColor:j?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:j?"not-allowed":"text"},min:"0",step:"0.1"})}),t.jsx("td",{className:"p-3 text-right",children:t.jsxs("div",{className:"flex items-center justify-end",children:[t.jsx("span",{style:{color:"var(--color-gold)",marginRight:"4px",fontSize:"16px",fontWeight:"600"},children:"$"}),t.jsx("input",{type:"number",value:A.price,onChange:_=>b(C,"price",parseFloat(_.target.value)||0),disabled:j,className:"w-full px-2 py-2 rounded text-right",style:{backgroundColor:j?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:j?"not-allowed":"text"},placeholder:"0.00",min:"0",step:"0.01"})]})}),t.jsx("td",{className:"p-3 text-center",children:t.jsxs("select",{value:A.priceType,onChange:_=>b(C,"priceType",_.target.value),disabled:j,className:"w-full px-2 py-2 rounded",style:{backgroundColor:j?"rgba(100, 100, 100, 0.2)":"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:j?"not-allowed":"pointer"},children:[t.jsx("option",{value:"per SFT",children:"per SFT"}),t.jsx("option",{value:"per Slab",children:"per Slab"})]})})]},C))})]})})]}),j&&t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"rgba(34, 197, 94, 0.1)",border:"1px solid #22c55e"},children:t.jsx("p",{className:"text-center",style:{color:"#22c55e"},children:"✓ This quote has been priced and sent. You can resend the email if needed."})}),t.jsxs("div",{className:"flex gap-3 pt-4",children:[t.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:j?"Close":"Cancel"}),t.jsxs("button",{onClick:F,disabled:h,className:"flex-1 py-3 rounded-lg flex items-center justify-center gap-2",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:h?.6:1},children:[t.jsx(lh,{size:20}),h?"Sending...":j?"Resend Quote":"Send Quote to Fabricator"]})]})]})]})})}function em({username:s,onLogout:d,checkIns:i,fabricators:u,onComplete:g,onResetHoldDate:h}){const[x,j]=f.useState(null),[b,F]=f.useState(""),[A,C]=f.useState(""),[_,B]=f.useState("all"),[q,N]=f.useState("all"),[P,E]=f.useState("all"),[w,M]=f.useState(!1),[U,H]=f.useState({}),[W,R]=f.useState("main"),[Z,X]=f.useState({}),[L,oe]=f.useState({}),[de,V]=f.useState({}),[he,Ce]=f.useState(new Date().getFullYear()),[Pe,Ee]=f.useState(new Date().getMonth()),[G,ae]=f.useState(new Date().getFullYear()),[re,p]=f.useState(new Date().getMonth()),[y,Q]=f.useState(new Date().getFullYear()),[ee,ce]=f.useState(new Date().getMonth()),[ne,Se]=f.useState(1),Te=10,we=[2025,2026,2027,2028],Ue=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],cr=f.useMemo(()=>i.filter(O=>O.status==="helped"&&O.draft?.materials&&O.draft.materials.length>0),[i]),Fr=O=>{const ge=new Date;return new Date(O).toDateString()===ge.toDateString()},wr=O=>{const ge=new Date,Ae=new Date(O);return(ge.getTime()-Ae.getTime())/(1e3*60*60*24)>5},{mainDashboardCheckIns:Ve,holdsNotConvertedCheckIns:br,ignoredCheckIns:jr}=f.useMemo(()=>{const O=[],ge=[],Ae=[];return cr.forEach(De=>{const I=Z[De.id]||!1,me=De.draft?.isHold||!1,Re=!U[De.id],He=wr(De.checkInTime);I?Ae.push(De):me&&Re&&He?ge.push(De):O.push(De)}),{mainDashboardCheckIns:O,holdsNotConvertedCheckIns:ge,ignoredCheckIns:Ae}},[cr,U,Z]),Lr=f.useMemo(()=>W==="holds-not-converted"?br:W==="ignored"?jr:Ve,[W,Ve,br,jr]),We=f.useMemo(()=>[...Lr.filter(ge=>{const Ae=`${ge.firstName} ${ge.lastName}`.toLowerCase().includes(b.toLowerCase())||ge.phones?.some(He=>He.includes(b))||ge.draft?.selectionSheetNumber?.includes(b),De=!A||ge.draft?.selectedFabricator?.id===A,I=_==="all"||_==="hold"&&ge.draft?.isHold||_==="no-hold"&&!ge.draft?.isHold,me=q==="all"||q==="priced"&&ge.priced||q==="not-priced"&&!ge.priced,Re=P==="all"||P==="yes"&&U[ge.id]||P==="no"&&!U[ge.id];return Ae&&De&&I&&me&&Re})].sort((ge,Ae)=>new Date(Ae.checkInTime).getTime()-new Date(ge.checkInTime).getTime()),[Lr,b,A,_,q,P,U]),or=Math.ceil(We.length/Te),Oe=(ne-1)*Te,J=Oe+Te,ve=We.slice(Oe,J);Yr.useEffect(()=>{Se(1)},[b,A,_,q,P,W]);const Ne=O=>{j(O)},ye=O=>{X({...Z,[O]:!0})},S=O=>{h&&h(O),V({...de,[O]:!0})},se=O=>{oe({...L,[O]:!L[O]})},Qe=O=>new Date(O).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"});f.useMemo(()=>{const O=new Set;return cr.forEach(Ae=>{const De=new Date(Ae.checkInTime),I=`${De.getFullYear()}-${String(De.getMonth()+1).padStart(2,"0")}`;if(O.add(I),Ae.pricedTime){const me=new Date(Ae.pricedTime),Re=`${me.getFullYear()}-${String(me.getMonth()+1).padStart(2,"0")}`;O.add(Re)}}),Array.from(O).sort().reverse()},[cr]),f.useMemo(()=>{const O=new Date;return`${O.getFullYear()}-${String(O.getMonth()+1).padStart(2,"0")}`},[]),Yr.useEffect(()=>{Pe||Ee(new Date().getMonth()),re||p(new Date().getMonth()),ee||ce(new Date().getMonth())},[]);const ze=(O,ge,Ae)=>{const De=new Date(O);return De.getMonth()===ge&&De.getFullYear()===Ae},Be=f.useMemo(()=>({pendingPricing:Ve.filter(O=>!O.priced).length,pricedToday:Ve.filter(O=>O.priced&&O.pricedTime&&Fr(O.pricedTime)).length,onHold:Ve.filter(O=>O.draft?.isHold).length,onHoldForMonth:Ve.filter(O=>O.draft?.isHold&&ze(O.checkInTime,re,G)).length,pricedForMonth:Ve.filter(O=>O.priced&&O.pricedTime&&ze(O.pricedTime,Pe,he)).length,convertedForMonth:Ve.filter(O=>U[O.id]&&ze(O.checkInTime,ee,y)).length}),[Ve,U,Pe,he,re,G,ee,y]);return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl",style:{color:"var(--color-gold)"},children:"Pricing Dashboard"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]})]})]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[t.jsxs("div",{className:"flex gap-2 mb-6",children:[t.jsx("button",{onClick:()=>R("main"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:W==="main"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:W==="main"?"var(--color-background)":"var(--color-text-white)",fontWeight:W==="main"?"600":"normal"},children:"Main Dashboard"}),t.jsxs("button",{onClick:()=>R("holds-not-converted"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:W==="holds-not-converted"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:W==="holds-not-converted"?"var(--color-background)":"var(--color-text-white)",fontWeight:W==="holds-not-converted"?"600":"normal"},children:["Holds Not Converted (",br.length,")"]}),t.jsxs("button",{onClick:()=>R("ignored"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:W==="ignored"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:W==="ignored"?"var(--color-background)":"var(--color-text-white)",fontWeight:W==="ignored"?"600":"normal"},children:["Ignored (",jr.length,")"]})]}),t.jsxs("div",{className:"mb-6 space-y-4",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(Cd,{className:"absolute left-3 top-1/2 -translate-y-1/2",size:20,style:{color:"var(--color-text-gray)"}}),t.jsx("input",{type:"text",value:b,onChange:O=>F(O.target.value),placeholder:"Search by name, phone, or sheet number...",className:"w-full pl-10 pr-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("button",{onClick:()=>M(!w),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-lg",style:{backgroundColor:w?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:w?"var(--color-background)":"var(--color-text-white)"},children:[t.jsx(Nd,{size:20}),"Filters"]})]}),w&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsxs("select",{value:A,onChange:O=>C(O.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Fabricators"}),u.map(O=>t.jsx("option",{value:O.id,children:O.companyName},O.id))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Hold Status"}),t.jsxs("select",{value:_,onChange:O=>B(O.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"hold",children:"On Hold"}),t.jsx("option",{value:"no-hold",children:"Not On Hold"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced Status"}),t.jsxs("select",{value:q,onChange:O=>N(O.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"priced",children:"Priced"}),t.jsx("option",{value:"not-priced",children:"Not Priced"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted Status"}),t.jsxs("select",{value:P,onChange:O=>E(O.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Converted"}),t.jsx("option",{value:"no",children:"Not Converted"})]})]})]})]}),W==="main"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Pending Pricing"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Be.pendingPricing})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Priced Today"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Be.pricedToday})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Be.onHold})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Be.pricedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:Pe,onChange:O=>Ee(parseInt(O.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Ue.map((O,ge)=>t.jsx("option",{value:ge,children:O},ge))}),t.jsx("select",{value:he,onChange:O=>Ce(parseInt(O.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:we.map(O=>t.jsx("option",{value:O,children:O},O))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Be.onHoldForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:re,onChange:O=>p(parseInt(O.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Ue.map((O,ge)=>t.jsx("option",{value:ge,children:O},ge))}),t.jsx("select",{value:G,onChange:O=>ae(parseInt(O.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:we.map(O=>t.jsx("option",{value:O,children:O},O))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:Be.convertedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:ee,onChange:O=>ce(parseInt(O.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Ue.map((O,ge)=>t.jsx("option",{value:ge,children:O},ge))}),t.jsx("select",{value:y,onChange:O=>Q(parseInt(O.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:we.map(O=>t.jsx("option",{value:O,children:O},O))})]})]})]}),W==="holds-not-converted"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:br.filter(O=>O.draft?.isHold).length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Not Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:br.filter(O=>!U[O.id]).length})]})]}),W==="ignored"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Ignored"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:jr.length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:jr.filter(O=>O.draft?.isHold).length})]})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{style:{backgroundColor:"var(--color-background)"},children:t.jsxs("tr",{children:[t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sheet #"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Materials"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Status"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Converted"}),W==="ignored"&&t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Lot"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Date"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Actions"})]})}),t.jsx("tbody",{children:ve.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:W==="ignored"?9:8,className:"text-center p-8",style:{color:"var(--color-text-gray)"},children:"No customers found"})}):ve.map(O=>{const ge=U[O.id]||!1,Ae=L[O.id]||!1,De=de[O.id]||!1;let I="transparent";return W==="ignored"&&Ae?I="rgba(34, 197, 94, 0.2)":De?I="rgba(239, 68, 68, 0.2)":ge?I="rgba(212, 167, 54, 0.15)":O.priced&&(I="rgba(34, 197, 94, 0.1)"),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",backgroundColor:I},children:[t.jsxs("td",{className:"p-4",children:[t.jsx("div",{style:{color:"var(--color-text-white)"},children:[O.firstName,O.lastName].filter(Boolean).join(" ")}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:O.phones?.[0]})]}),t.jsx("td",{className:"p-4",style:{color:"var(--color-gold)"},children:O.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:O.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"p-4 text-center",style:{color:"var(--color-text-white)"},children:O.draft?.materials?.length||0}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-2",children:[O.priced&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"Priced"}),O.draft?.isHold&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:"Hold"})]})}),t.jsx("td",{className:"p-4 text-center",children:t.jsxs("select",{value:ge?"Yes":"No",onChange:me=>H({...U,[O.id]:me.target.value==="Yes"}),className:"px-3 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:ge?"1px solid var(--color-gold)":"1px solid var(--color-border)",color:ge?"var(--color-gold)":"var(--color-text-white)",cursor:"pointer",fontWeight:ge?"600":"normal",fontSize:"13px"},children:[t.jsx("option",{value:"No",children:"No"}),t.jsx("option",{value:"Yes",children:"Yes"})]})}),W==="ignored"&&t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:O.draft?.materials&&O.draft.materials.length>0?t.jsx("div",{className:"flex flex-col gap-1",children:Array.from(new Set(O.draft.materials.map(me=>me.lot).filter(Boolean))).map((me,Re)=>t.jsx("span",{className:"text-sm",children:me},Re))}):"-"}),t.jsx("td",{className:"p-4 text-center text-sm",style:{color:"var(--color-text-gray)"},children:Qe(O.checkInTime)}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center",children:[t.jsx("button",{onClick:()=>Ne(O),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},title:"View Pricing",children:t.jsx(vs,{size:18})}),W==="holds-not-converted"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>S(O.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(34, 197, 94, 0.7)",color:"var(--color-text-white)"},title:"Undo - Send back to Main",children:t.jsx(jd,{size:18})}),t.jsx("button",{onClick:()=>ye(O.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(239, 68, 68, 0.8)",color:"var(--color-text-white)"},title:"Ignore",children:t.jsx(ct,{size:18})})]}),W==="ignored"&&t.jsx("button",{onClick:()=>se(O.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:Ae?"rgba(34, 197, 94, 0.8)":"rgba(100, 100, 100, 0.5)",color:"var(--color-text-white)"},title:Ae?"Unmark as Known":"Mark as Known",children:t.jsx(yd,{size:18})})]})})]},O.id)})})]})}),or>1&&t.jsxs("div",{className:"flex items-center justify-between px-4 py-4",style:{borderTop:"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Showing ",Oe+1," to ",Math.min(J,We.length)," of ",We.length," customers"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>Se(ne-1),disabled:ne===1,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:ne===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:ne===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:ne===1?"not-allowed":"pointer"},children:"Previous"}),t.jsx("div",{className:"flex gap-1",children:Array.from({length:or},(O,ge)=>ge+1).map(O=>t.jsx("button",{onClick:()=>Se(O),className:"px-3 py-2 rounded-lg transition-colors",style:{backgroundColor:ne===O?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:ne===O?"var(--color-background)":"var(--color-text-white)",fontWeight:ne===O?"600":"normal",cursor:"pointer"},children:O},O))}),t.jsx("button",{onClick:()=>Se(ne+1),disabled:ne===or,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:ne===or?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:ne===or?"var(--color-text-gray)":"var(--color-text-white)",cursor:ne===or?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),x&&t.jsx(zd,{customer:x,onClose:()=>j(null),onComplete:g})]})}function rm({username:s,onLogout:d,checkIns:i,fabricators:u,onComplete:g,onResetHoldDate:h,onPriceUpdate:x}){const[j,b]=f.useState(null),[F,A]=f.useState(""),[C,_]=f.useState(""),[B,q]=f.useState(""),[N,P]=f.useState("all"),[E,w]=f.useState("all"),[M,U]=f.useState("all"),[H,W]=f.useState(!1),[R,Z]=f.useState({}),[X,L]=f.useState("main"),[oe,de]=f.useState({}),[V,he]=f.useState({}),[Ce,Pe]=f.useState({}),[Ee,G]=f.useState(new Date().getFullYear()),[ae,re]=f.useState(new Date().getMonth()),[p,y]=f.useState(new Date().getFullYear()),[Q,ee]=f.useState(new Date().getMonth()),[ce,ne]=f.useState(new Date().getFullYear()),[Se,Te]=f.useState(new Date().getMonth()),[we,Ue]=f.useState(1),cr=10,Fr=[2025,2026,2027,2028],wr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Ve=f.useMemo(()=>i.filter(I=>I.status==="helped"&&I.draft?.materials&&I.draft.materials.length>0),[i]),br=f.useMemo(()=>{const I=new Set;return Ve.forEach(me=>{me.draft?.salesPerson&&I.add(me.draft.salesPerson)}),Array.from(I).sort()},[Ve]),jr=I=>{const me=new Date;return new Date(I).toDateString()===me.toDateString()},Lr=I=>{const me=new Date,Re=new Date(I);return(me.getTime()-Re.getTime())/(1e3*60*60*24)>5},{mainDashboardCheckIns:We,holdsNotConvertedCheckIns:or,ignoredCheckIns:Oe}=f.useMemo(()=>{const I=[],me=[],Re=[];return Ve.forEach(He=>{const lr=oe[He.id]||!1,hr=He.draft?.isHold||!1,Or=!R[He.id],Cr=Lr(He.checkInTime);lr?Re.push(He):hr&&Or&&Cr?me.push(He):I.push(He)}),{mainDashboardCheckIns:I,holdsNotConvertedCheckIns:me,ignoredCheckIns:Re}},[Ve,R,oe]),J=f.useMemo(()=>X==="holds-not-converted"?or:X==="ignored"?Oe:We,[X,We,or,Oe]),ve=f.useMemo(()=>[...J.filter(me=>{const Re=`${me.firstName} ${me.lastName}`.toLowerCase().includes(F.toLowerCase())||me.phones?.some(Vr=>Vr.includes(F))||me.draft?.selectionSheetNumber?.includes(F),He=!C||me.draft?.selectedFabricator?.id===C,lr=!B||me.draft?.salesPerson===B,hr=N==="all"||N==="hold"&&me.draft?.isHold||N==="no-hold"&&!me.draft?.isHold,Or=E==="all"||E==="priced"&&me.priced||E==="not-priced"&&!me.priced,Cr=M==="all"||M==="yes"&&R[me.id]||M==="no"&&!R[me.id];return Re&&He&&lr&&hr&&Or&&Cr})].sort((me,Re)=>new Date(Re.checkInTime).getTime()-new Date(me.checkInTime).getTime()),[J,F,C,B,N,E,M,R]),Ne=Math.ceil(ve.length/cr),ye=(we-1)*cr,S=ye+cr,se=ve.slice(ye,S);Yr.useEffect(()=>{Ue(1)},[F,C,B,N,E,M,X]);const Qe=I=>{b(I)},ze=I=>{de({...oe,[I]:!0})},Be=I=>{h&&h(I),Pe({...Ce,[I]:!0})},O=I=>{he({...V,[I]:!V[I]})},ge=I=>new Date(I).toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}),Ae=(I,me,Re)=>{const He=new Date(I);return He.getMonth()===me&&He.getFullYear()===Re},De=f.useMemo(()=>{const I=We.filter(Fe=>!Fe.priced).length,me=We.filter(Fe=>Fe.priced&&Fe.pricedTime&&jr(Fe.pricedTime)).length,Re=We.filter(Fe=>Fe.draft?.isHold).length,He=We.filter(Fe=>Fe.draft?.isHold&&Ae(Fe.checkInTime,Q,p)).length,lr=We.filter(Fe=>Fe.priced&&Fe.pricedTime&&Ae(Fe.pricedTime,ae,Ee)).length,hr=We.filter(Fe=>R[Fe.id]&&Ae(Fe.checkInTime,Se,ce)).length,Or=We.filter(Fe=>R[Fe.id]).length,Cr=B?We.filter(Fe=>Fe.draft?.salesPerson===B).length:We.length,Vr=B?We.filter(Fe=>Fe.draft?.salesPerson===B&&R[Fe.id]).length:We.filter(Fe=>R[Fe.id]).length,pn=Cr>0?(Vr/Cr*100).toFixed(1):"0";return{pendingPricing:I,pricedToday:me,onHold:Re,onHoldForMonth:He,pricedForMonth:lr,convertedForMonth:hr,totalConverted:Or,totalCustomers:Cr,convertedCustomers:Vr,conversionRate:pn}},[We,R,ae,Ee,Q,p,Se,ce,B]);return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-xl",style:{color:"var(--color-gold)"},children:"Analysis Dashboard"}),t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]})]})]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx(un,{size:18}),"Logout"]})]})})}),t.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[t.jsxs("div",{className:"flex gap-2 mb-6",children:[t.jsx("button",{onClick:()=>L("main"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:X==="main"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:X==="main"?"var(--color-background)":"var(--color-text-white)",fontWeight:X==="main"?"600":"normal"},children:"Main Dashboard"}),t.jsxs("button",{onClick:()=>L("holds-not-converted"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:X==="holds-not-converted"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:X==="holds-not-converted"?"var(--color-background)":"var(--color-text-white)",fontWeight:X==="holds-not-converted"?"600":"normal"},children:["Holds Not Converted (",or.length,")"]}),t.jsxs("button",{onClick:()=>L("ignored"),className:"px-6 py-3 rounded-lg transition-colors",style:{backgroundColor:X==="ignored"?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:X==="ignored"?"var(--color-background)":"var(--color-text-white)",fontWeight:X==="ignored"?"600":"normal"},children:["Ignored (",Oe.length,")"]})]}),t.jsxs("div",{className:"mb-6 space-y-4",children:[t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx(Cd,{className:"absolute left-3 top-1/2 -translate-y-1/2",size:20,style:{color:"var(--color-text-gray)"}}),t.jsx("input",{type:"text",value:F,onChange:I=>A(I.target.value),placeholder:"Search by name, phone, or sheet number...",className:"w-full pl-10 pr-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("button",{onClick:()=>W(!H),className:"flex items-center justify-center gap-2 px-6 py-3 rounded-lg",style:{backgroundColor:H?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:H?"var(--color-background)":"var(--color-text-white)"},children:[t.jsx(Nd,{size:20}),"Filters"]})]}),H&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Sales Person"}),t.jsxs("select",{value:B,onChange:I=>q(I.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Sales People"}),br.map(I=>t.jsx("option",{value:I,children:I},I))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsxs("select",{value:C,onChange:I=>_(I.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"",children:"All Fabricators"}),u.map(I=>t.jsx("option",{value:I.id,children:I.companyName},I.id))]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Hold Status"}),t.jsxs("select",{value:N,onChange:I=>P(I.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"hold",children:"On Hold"}),t.jsx("option",{value:"no-hold",children:"Not On Hold"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Priced Status"}),t.jsxs("select",{value:E,onChange:I=>w(I.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"priced",children:"Priced"}),t.jsx("option",{value:"not-priced",children:"Not Priced"})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted Status"}),t.jsxs("select",{value:M,onChange:I=>U(I.target.value),className:"w-full px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"all",children:"All"}),t.jsx("option",{value:"yes",children:"Converted"}),t.jsx("option",{value:"no",children:"Not Converted"})]})]})]})]}),X==="main"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",children:[B&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)"},children:[t.jsxs("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:["Sales Person: ",B]}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:De.totalCustomers}),t.jsx("p",{className:"text-xs mt-1",style:{color:"var(--color-text-gray)"},children:"Total Customers"})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"2px solid var(--color-gold)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:De.convertedCustomers}),t.jsxs("p",{className:"text-xs mt-1",style:{color:"var(--color-text-gray)"},children:[De.conversionRate,"% Rate"]})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Pending Pricing"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:De.pendingPricing})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Priced Today"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:De.pricedToday})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:De.onHold})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:De.totalConverted})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:De.onHoldForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:Q,onChange:I=>ee(parseInt(I.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:wr.map((I,me)=>t.jsx("option",{value:me,children:I},me))}),t.jsx("select",{value:p,onChange:I=>y(parseInt(I.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Fr.map(I=>t.jsx("option",{value:I,children:I},I))})]})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-2",style:{color:"var(--color-text-gray)"},children:"Converted"}),t.jsx("p",{className:"text-2xl mb-2",style:{color:"var(--color-gold)"},children:De.convertedForMonth}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("select",{value:Se,onChange:I=>Te(parseInt(I.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:wr.map((I,me)=>t.jsx("option",{value:me,children:I},me))}),t.jsx("select",{value:ce,onChange:I=>ne(parseInt(I.target.value)),className:"flex-1 text-sm px-2 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:"pointer"},children:Fr.map(I=>t.jsx("option",{value:I,children:I},I))})]})]})]}),X==="holds-not-converted"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:or.filter(I=>I.draft?.isHold).length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Not Converted"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:or.filter(I=>!R[I.id]).length})]})]}),X==="ignored"&&t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Ignored"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Oe.length})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"On Hold"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:Oe.filter(I=>I.draft?.isHold).length})]})]}),t.jsxs("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("div",{className:"overflow-x-auto",children:t.jsxs("table",{className:"w-full",children:[t.jsx("thead",{style:{backgroundColor:"var(--color-background)"},children:t.jsxs("tr",{children:[t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Customer"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sheet #"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Sales Person"}),t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Fabricator"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Materials"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Status"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Converted"}),X==="ignored"&&t.jsx("th",{className:"text-left p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Lot"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Date"}),t.jsx("th",{className:"text-center p-4 text-sm",style:{color:"var(--color-text-gray)"},children:"Actions"})]})}),t.jsx("tbody",{children:se.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:X==="ignored"?10:9,className:"text-center p-8",style:{color:"var(--color-text-gray)"},children:"No customers found"})}):se.map(I=>{const me=R[I.id]||!1,Re=V[I.id]||!1,He=Ce[I.id]||!1;let lr="transparent";return X==="ignored"&&Re?lr="rgba(34, 197, 94, 0.2)":He?lr="rgba(239, 68, 68, 0.2)":me?lr="rgba(212, 167, 54, 0.15)":I.priced&&(lr="rgba(34, 197, 94, 0.1)"),t.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",backgroundColor:lr},children:[t.jsxs("td",{className:"p-4",children:[t.jsx("div",{style:{color:"var(--color-text-white)"},children:[I.firstName,I.lastName].filter(Boolean).join(" ")}),t.jsx("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:I.phones?.[0]})]}),t.jsx("td",{className:"p-4",style:{color:"var(--color-gold)"},children:I.draft?.selectionSheetNumber||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:I.draft?.salesPerson||"-"}),t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:I.draft?.selectedFabricator?.companyName||"-"}),t.jsx("td",{className:"p-4 text-center",style:{color:"var(--color-text-white)"},children:I.draft?.materials?.length||0}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-2",children:[I.priced&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(34, 197, 94, 0.2)",color:"#22c55e"},children:"Priced"}),I.draft?.isHold&&t.jsx("span",{className:"px-2 py-1 rounded text-xs",style:{backgroundColor:"rgba(251, 191, 36, 0.2)",color:"#fbbf24"},children:"Hold"})]})}),t.jsx("td",{className:"p-4 text-center",children:t.jsxs("select",{value:me?"Yes":"No",onChange:hr=>Z({...R,[I.id]:hr.target.value==="Yes"}),className:"px-3 py-1.5 rounded",style:{backgroundColor:"var(--color-background)",border:me?"1px solid var(--color-gold)":"1px solid var(--color-border)",color:me?"var(--color-gold)":"var(--color-text-white)",cursor:"pointer",fontWeight:me?"600":"normal",fontSize:"13px"},children:[t.jsx("option",{value:"No",children:"No"}),t.jsx("option",{value:"Yes",children:"Yes"})]})}),X==="ignored"&&t.jsx("td",{className:"p-4",style:{color:"var(--color-text-white)"},children:I.draft?.materials&&I.draft.materials.length>0?t.jsx("div",{className:"flex flex-col gap-1",children:Array.from(new Set(I.draft.materials.map(hr=>hr.lot).filter(Boolean))).map((hr,Or)=>t.jsx("span",{className:"text-sm",children:hr},Or))}):"-"}),t.jsx("td",{className:"p-4 text-center text-sm",style:{color:"var(--color-text-gray)"},children:ge(I.checkInTime)}),t.jsx("td",{className:"p-4",children:t.jsxs("div",{className:"flex justify-center gap-1",children:[t.jsx("button",{onClick:()=>Qe(I),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},title:"View/Edit Pricing",children:t.jsx(vs,{size:18})}),X==="holds-not-converted"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>Be(I.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(34, 197, 94, 0.7)",color:"var(--color-text-white)"},title:"Undo - Send back to Main",children:t.jsx(jd,{size:18})}),t.jsx("button",{onClick:()=>ze(I.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:"rgba(239, 68, 68, 0.8)",color:"var(--color-text-white)"},title:"Ignore",children:t.jsx(ct,{size:18})})]}),X==="ignored"&&t.jsx("button",{onClick:()=>O(I.id),className:"p-2 rounded-lg hover:bg-opacity-80",style:{backgroundColor:Re?"rgba(34, 197, 94, 0.8)":"rgba(100, 100, 100, 0.5)",color:"var(--color-text-white)"},title:Re?"Unmark as Known":"Mark as Known",children:t.jsx(yd,{size:18})})]})})]},I.id)})})]})}),Ne>1&&t.jsxs("div",{className:"flex items-center justify-between px-4 py-4",style:{borderTop:"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["Showing ",ye+1," to ",Math.min(S,ve.length)," of ",ve.length," customers"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>Ue(we-1),disabled:we===1,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:we===1?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:we===1?"var(--color-text-gray)":"var(--color-text-white)",cursor:we===1?"not-allowed":"pointer"},children:"Previous"}),t.jsx("div",{className:"flex gap-1",children:Array.from({length:Ne},(I,me)=>me+1).map(I=>t.jsx("button",{onClick:()=>Ue(I),className:"px-3 py-2 rounded-lg transition-colors",style:{backgroundColor:we===I?"var(--color-gold)":"var(--color-card)",border:"1px solid var(--color-border)",color:we===I?"var(--color-background)":"var(--color-text-white)",fontWeight:we===I?"600":"normal",cursor:"pointer"},children:I},I))}),t.jsx("button",{onClick:()=>Ue(we+1),disabled:we===Ne,className:"px-4 py-2 rounded-lg transition-colors",style:{backgroundColor:we===Ne?"var(--color-background)":"var(--color-card)",border:"1px solid var(--color-border)",color:we===Ne?"var(--color-text-gray)":"var(--color-text-white)",cursor:we===Ne?"not-allowed":"pointer"},children:"Next"})]})]})]})]}),j&&t.jsx(zd,{customer:j,onClose:()=>b(null),onComplete:I=>{x&&x(I,s),g(I)},isAnalysisMode:!0,analysisUser:s})]})}function tm({onCustomerFound:s,onBack:d,checkIns:i}){const[u,g]=f.useState(""),[h,x]=f.useState(!1),[j,b]=f.useState(""),F=async()=>{if(!u.trim()){b("Please enter a phone number or email");return}x(!0),b("");try{const C=u.trim().toLowerCase(),_=i.find(B=>{const q=B.phones?.some(P=>P.replace(/\D/g,"").includes(C.replace(/\D/g,""))),N=B.emails?.some(P=>P.toLowerCase().includes(C));return q||N});_?s(_):b('No previous check-in found with this information. Please use "Check-In" for first-time visit.')}catch{b('No previous check-in found with this information. Please use "Check-In" for first-time visit.')}finally{x(!1)}},A=C=>{C.key==="Enter"&&F()};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-3 text-3xl",style:{color:"var(--color-gold)"},children:"Welcome Back!"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Enter your mobile number or email that you used during check-in"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Phone or Email"}),t.jsx("input",{type:"text",value:u,onChange:C=>{g(C.target.value),b("")},onKeyPress:A,placeholder:"(602) 555-1234 or email@example.com",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${j?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},disabled:h}),j&&t.jsx("p",{className:"mt-2 text-sm",style:{color:"#EF4444"},children:j})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("button",{onClick:F,disabled:h,className:"w-full py-3 rounded-lg",style:{backgroundColor:h?"var(--color-border)":"var(--color-gold)",color:"var(--color-background)",cursor:h?"not-allowed":"pointer",opacity:h?.6:1},children:h?"Searching...":"Find My Information"}),t.jsx("button",{onClick:d,disabled:h,className:"w-full py-3 rounded-lg",style:{backgroundColor:"transparent",border:"1px solid var(--color-border)",color:"var(--color-text-white)",cursor:h?"not-allowed":"pointer",opacity:h?.6:1},children:"Back to Home"})]})]})]})})}function om({customerData:s,onNext:d,onBack:i}){const[u,g]=f.useState({firstName:s.firstName||"",lastName:s.lastName||"",street:s.street||"",suiteUnit:s.suiteUnit||"",city:s.city||"",state:s.state||"",zip:s.zip||"",country:s.country||"USA",phones:s.phones||[""],emails:s.emails||[""]}),[h,x]=f.useState({}),j=P=>P.split(" ").map(E=>E.charAt(0).toUpperCase()+E.slice(1).toLowerCase()).join(" "),b=()=>{const P={};u.firstName.trim()||(P.firstName="First name is required"),u.lastName.trim()||(P.lastName="Last name is required"),u.street.trim()||(P.street="Street address is required"),u.city.trim()||(P.city="City is required"),u.state.trim()||(P.state="State is required"),u.zip.trim()||(P.zip="ZIP code is required");const E=u.phones.filter(M=>M.trim());E.length===0?P.phones="At least one phone number is required":E.forEach((M,U)=>{M.replace(/\D/g,"").length!==10&&(P[`phone${U}`]="Phone must be 10 digits")});const w=u.emails.filter(M=>M.trim());return w.length===0?P.emails="At least one email is required":w.forEach((M,U)=>{/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(M)||(P[`email${U}`]="Invalid email format")}),x(P),Object.keys(P).length===0},F=P=>{P.preventDefault(),b()&&d(u)},A=()=>{g({...u,phones:[...u.phones,""]})},C=P=>{u.phones.length>1&&g({...u,phones:u.phones.filter((E,w)=>w!==P)})},_=(P,E)=>{const w=[...u.phones];w[P]=E,g({...u,phones:w})},B=()=>{g({...u,emails:[...u.emails,""]})},q=P=>{u.emails.length>1&&g({...u,emails:u.emails.filter((E,w)=>w!==P)})},N=(P,E)=>{const w=[...u.emails];w[P]=E,g({...u,emails:w})};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Review Your Information"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please review and update your details if needed"}),t.jsxs("form",{onSubmit:F,className:"space-y-4 sm:space-y-6",children:[t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"First Name *"}),t.jsx("input",{type:"text",value:u.firstName,onChange:P=>g({...u,firstName:j(P.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.firstName?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.firstName&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.firstName})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Last Name *"}),t.jsx("input",{type:"text",value:u.lastName,onChange:P=>g({...u,lastName:j(P.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.lastName?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.lastName&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.lastName})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Street Address *"}),t.jsx("input",{type:"text",value:u.street,onChange:P=>g({...u,street:j(P.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.street?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.street&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.street})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:u.suiteUnit,onChange:P=>g({...u,suiteUnit:P.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"City *"}),t.jsx("input",{type:"text",value:u.city,onChange:P=>g({...u,city:j(P.target.value)}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.city?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.city&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.city})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"State *"}),t.jsx("input",{type:"text",value:u.state,onChange:P=>g({...u,state:P.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.state?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.state&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.state})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"ZIP Code *"}),t.jsx("input",{type:"text",value:u.zip,onChange:P=>g({...u,zip:P.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h.zip?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),h.zip&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.zip})]})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Country *"}),t.jsxs("select",{value:u.country,onChange:P=>g({...u,country:P.target.value}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:[t.jsx("option",{value:"USA",children:"USA"}),t.jsx("option",{value:"CAN",children:"CAN"}),t.jsx("option",{value:"MEX",children:"MEX"})]})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Phone Number(s) *"}),t.jsx("button",{type:"button",onClick:A,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"+ Add Phone"})]}),u.phones.map((P,E)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{type:"tel",value:P,onChange:w=>_(E,w.target.value),placeholder:"(602) 555-1234",className:"flex-1 px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h[`phone${E}`]?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),u.phones.length>1&&t.jsx("button",{type:"button",onClick:()=>C(E),className:"px-3 rounded",style:{backgroundColor:"#EF4444",color:"white"},children:"×"})]},E)),h.phones&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.phones})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Email Address(es) *"}),t.jsx("button",{type:"button",onClick:B,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"+ Add Email"})]}),u.emails.map((P,E)=>t.jsxs("div",{className:"flex gap-2 mb-2",children:[t.jsx("input",{type:"email",value:P,onChange:w=>N(E,w.target.value),placeholder:"email@example.com",className:"flex-1 px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h[`email${E}`]?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"}}),u.emails.length>1&&t.jsx("button",{type:"button",onClick:()=>q(E),className:"px-3 rounded",style:{backgroundColor:"#EF4444",color:"white"},children:"×"})]},E)),h.emails&&t.jsx("p",{className:"mt-1 text-sm",style:{color:"#EF4444"},children:h.emails})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:i,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}const nm=["Fabricator","Contractor","Kitchen & Bath","Architect","Builder","Friends/Family","Other"];function lm({referralSources:s,onNext:d,onBack:i}){const[u,g]=f.useState(s.map(C=>C.type)),[h,x]=f.useState(s.reduce((C,_)=>(C[_.type]={name:_.name||"",phone:_.phone||""},C),{})),j=C=>C.split(" ").map(_=>_.charAt(0).toUpperCase()+_.slice(1).toLowerCase()).join(" "),b=C=>{if(u.includes(C)){g(u.filter(B=>B!==C));const _={...h};delete _[C],x(_)}else g([...u,C])},F=(C,_,B)=>{x({...h,[C]:{...h[C],name:_==="name"?B:h[C]?.name||"",phone:_==="phone"?B:h[C]?.phone||""}})},A=C=>{if(C.preventDefault(),u.length===0){alert("Please select at least one referral source");return}for(const B of u){if(!h[B]?.name?.trim()){alert(`Please enter a name for ${B}`);return}if(B!=="Fabricator"&&!h[B]?.phone?.trim()){alert(`Please enter a phone number for ${B}`);return}}const _=u.map(B=>({type:B,name:h[B]?.name,phone:h[B]?.phone}));d(_)};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Review Referral Sources"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg font-medium",style:{color:"var(--color-text-gray)"},children:"Update or add new referral sources"}),t.jsxs("form",{onSubmit:A,className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{className:"space-y-4",children:nm.map(C=>t.jsxs("div",{children:[t.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-3 sm:p-4 rounded-lg hover:bg-opacity-50 transition-colors",style:{backgroundColor:u.includes(C)?"var(--color-background)":"transparent",border:`1px solid ${u.includes(C)?"var(--color-gold)":"var(--color-border)"}`},children:[t.jsx("input",{type:"checkbox",checked:u.includes(C),onChange:()=>b(C),className:"w-5 h-5 flex-shrink-0",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{className:"text-sm sm:text-base",style:{color:"var(--color-text-white)"},children:C})]}),u.includes(C)&&t.jsxs("div",{className:"ml-6 sm:ml-8 mt-3 space-y-3",children:[t.jsx("input",{type:"text",value:h[C]?.name||"",onChange:_=>F(C,"name",j(_.target.value)),placeholder:"Name (required)",required:!0,className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("input",{type:"tel",value:h[C]?.phone||"",onChange:_=>F(C,"phone",_.target.value),placeholder:C==="Fabricator"?"Phone (optional)":"Phone (required)",required:C!=="Fabricator",className:"w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]},C))}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2",children:[t.jsx("button",{type:"button",onClick:i,className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{type:"submit",className:"w-full sm:flex-1 py-3 sm:py-4 rounded-lg text-sm sm:text-base",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})})}function am({customerName:s,onSubmit:d,onBack:i}){const[u,g]=f.useState("party"),[h,x]=f.useState({adults:1,minors:0}),[j,b]=f.useState(!1),[F,A]=f.useState(""),[C,_]=f.useState([]),[B,q]=f.useState(0),[N,P]=f.useState([]),[E,w]=f.useState(0),[M,U]=f.useState(""),H=f.useRef(null),[W,R]=f.useState(!1),[Z,X]=f.useState(!1);f.useEffect(()=>{const y=H.current;if(y){const Q=y.getContext("2d");Q&&(Q.strokeStyle="#D4A736",Q.lineWidth=2,Q.lineCap="round")}},[u,B]);const L=(y,Q)=>{const ee=Q.getBoundingClientRect(),ce=Q.width/ee.width,ne=Q.height/ee.height,Se="touches"in y?y.touches[0].clientX:y.clientX,Te="touches"in y?y.touches[0].clientY:y.clientY;return{x:(Se-ee.left)*ce,y:(Te-ee.top)*ne}},oe=y=>{R(!0);const Q=H.current;if(!Q)return;const ee=Q.getContext("2d");if(!ee)return;const{x:ce,y:ne}=L(y,Q);ee.beginPath(),ee.moveTo(ce,ne)},de=y=>{if(!W)return;const Q=H.current;if(!Q)return;const ee=Q.getContext("2d");if(!ee)return;const{x:ce,y:ne}=L(y,Q);ee.lineTo(ce,ne),ee.stroke()},V=()=>{R(!1),X(!0)},he=()=>{const y=H.current;if(!y)return;const Q=y.getContext("2d");Q&&(Q.clearRect(0,0,y.width,y.height),X(!1))},Ce=()=>{const y=H.current;return y?y.toDataURL("image/png"):""},Pe=()=>{g("main")},Ee=()=>{if(!j){alert("Please agree to the terms before continuing");return}if(!Z){alert("Please provide your signature");return}const y=Ce();A(y),he(),h.adults>1?(g("additional"),q(0)):h.minors>0?(g("minors"),w(0)):re(y,[],[])},G=()=>{const y=document.getElementById("additional-name")?.value;if(!y||!y.trim()){alert("Please enter a name");return}if(!Z){alert("Please provide a signature");return}const Q=Ce(),ee=[...C];ee[B]={name:y.trim(),signature:Q},_(ee),he(),B<h.adults-2?q(B+1):h.minors>0?(g("minors"),w(0)):re(F,ee,[])},ae=()=>{if(!M.trim()){alert("Please enter the minor's name");return}const y=[...N];y[E]=M.trim(),P(y),U(""),E<h.minors-1?w(E+1):re(F,C,y)},re=(y,Q,ee)=>{const ce=[{name:s,signature:y,isMain:!0,isMinor:!1},...Q.map(ne=>({name:ne.name,signature:ne.signature,isMain:!1,isMinor:!1})),...ee.map(ne=>({name:ne,signature:"",isMain:!1,isMinor:!0}))];d({partySize:h,signature:y,visitors:ce})},p=()=>{u==="party"?i():u==="main"?g("party"):u==="additional"?B===0?g("main"):q(B-1):u==="minors"&&(E===0?h.adults>1?(g("additional"),q(h.adults-2)):g("main"):w(E-1))};return u==="party"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Party Size"}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"How many people are in your party?"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Number of Adults (including you)"}),t.jsx("input",{type:"number",min:"1",max:"20",value:h.adults,onChange:y=>x({...h,adults:parseInt(y.target.value)||1}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Number of Minors (under 18)"}),t.jsx("input",{type:"number",min:"0",max:"20",value:h.minors,onChange:y=>x({...h,minors:parseInt(y.target.value)||0}),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:Pe,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Continue"})]})]})]})}):u==="main"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)",overflowY:"auto"},children:t.jsxs("div",{className:"w-full max-w-3xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsx("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:"Liability Waiver"}),t.jsx("p",{className:"text-center mb-6 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please read and sign below"}),t.jsxs("div",{className:"space-y-4 sm:space-y-6",children:[t.jsx("div",{className:"rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",maxHeight:"300px",overflowY:"auto",padding:"16px",color:"var(--color-text-white)",lineHeight:"1.6",fontSize:"13px"},children:t.jsx("p",{style:{whiteSpace:"pre-wrap"},children:`WAIVER AND RELEASE, INDEMNITY AGREEMENT, AND INFORMED CONSENT

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

I HAVE READ THIS COVENANT NOT TO SUE, WAIVER, RELEASE, INFORMED CONSENT, ASSUMPTION OF RISK AND INDEMNITY AGREEMENT, FULLY UNDERSTAND ITS TERMS, UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND HAVE SIGNED IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT, ASSURANCE OR GUARANTEE BEING MADE TO ME AND INTEND MY SIGNATURE TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF RELIANCE AND ALL PARTIES MENTIONED HEREIN TO THE GREATEST EXTENT ALLOWED BY LAW. THIS IS A RELEASE OF LIABILITY; DO NOT SIGN THIS DOCUMENT IF YOU DO NOT UNDERSTAND OR DO NOT AGREE WITH ITS TERMS.`})}),t.jsx("div",{children:t.jsxs("label",{className:"flex items-center gap-3 cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:j,onChange:y=>b(y.target.checked),className:"w-5 h-5",style:{accentColor:"var(--color-gold)"}}),t.jsx("span",{style:{color:"var(--color-text-white)"},children:"I have read and agree to the terms above"})]})}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Your Signature"}),t.jsx("button",{type:"button",onClick:he,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),t.jsx("canvas",{ref:H,width:600,height:200,onMouseDown:oe,onMouseMove:de,onMouseUp:V,onMouseLeave:V,onTouchStart:oe,onTouchMove:de,onTouchEnd:V,className:"w-full border rounded-lg cursor-crosshair",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"}})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:Ee,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:h.adults>1||h.minors>0?"Next":"Submit"})]})]})]})}):u==="additional"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Visitor ",B+2," of ",h.adults]}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Additional adult signature required"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),t.jsx("input",{id:"additional-name",type:"text",defaultValue:C[B]?.name||"",className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter full name"})]}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between mb-2",children:[t.jsx("label",{style:{color:"var(--color-text-gray)"},children:"Signature"}),t.jsx("button",{type:"button",onClick:he,className:"text-sm px-3 py-1 rounded",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),t.jsx("canvas",{ref:H,width:600,height:200,onMouseDown:oe,onMouseMove:de,onMouseUp:V,onMouseLeave:V,onTouchStart:oe,onTouchMove:de,onTouchEnd:V,className:"w-full border rounded-lg cursor-crosshair",style:{backgroundColor:"var(--color-background)",border:"2px solid var(--color-gold)"}})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:G,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:B<h.adults-2||h.minors>0?"Next":"Submit"})]})]})]})}):u==="minors"?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 sm:p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"24px"},children:[t.jsxs("h1",{className:"text-center mb-2 text-2xl sm:text-3xl",style:{color:"var(--color-gold)"},children:["Minor ",E+1," of ",h.minors]}),t.jsx("p",{className:"text-center mb-6 sm:mb-8 text-base sm:text-lg",style:{color:"var(--color-text-gray)"},children:"Please provide the minor's name"}),t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Full Name"}),t.jsx("input",{type:"text",value:M,onChange:y=>U(y.target.value),className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},placeholder:"Enter full name"})]}),t.jsx("p",{className:"text-sm text-center",style:{color:"var(--color-text-gray)"},children:"No signature required (under 18)"}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[t.jsx("button",{type:"button",onClick:p,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Back"}),t.jsx("button",{onClick:ae,className:"w-full sm:flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:E<h.minors-1?"Next":"Submit"})]})]})]})}):null}function sm({customerName:s,onReturnHome:d}){const[i,u]=f.useState(15),g=f.useRef(d);return f.useEffect(()=>{g.current=d},[d]),f.useEffect(()=>{const h=setInterval(()=>{u(x=>x<=1?(clearInterval(h),setTimeout(()=>g.current(),0),0):x-1)},1e3);return()=>clearInterval(h)},[]),t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("div",{className:"flex justify-center mb-6",children:t.jsx(xs,{size:80,style:{color:"var(--color-success)"}})}),t.jsxs("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:["Thank You for Revisiting, ",s,"!"]}),t.jsx("p",{className:"mb-8",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"Your check-in is complete. A member of our team will be with you shortly."}),t.jsxs("p",{className:"mb-6",style:{color:"var(--color-text-gray)"},children:["Returning to home screen in ",t.jsx("span",{style:{color:"var(--color-gold)"},children:i})," seconds..."]}),t.jsx("button",{onClick:d,className:"px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return to Home"})]})})}function im({onLogin:s}){const[d,i]=f.useState(""),[u,g]=f.useState(""),[h,x]=f.useState(""),j=b=>{b.preventDefault(),x(""),d==="staff2"&&u==="reliance"?s(d):x("Invalid credentials. Use staff2/reliance")};return t.jsx("div",{className:"min-h-screen flex items-center justify-center p-4",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsx("h1",{className:"text-center mb-2 text-3xl",style:{color:"var(--color-gold)"},children:"Staff2 Login"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Queue Management"}),t.jsxs("form",{onSubmit:j,className:"space-y-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Username"}),t.jsx("input",{type:"text",value:d,onChange:b=>{i(b.target.value),x("")},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Enter username"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-gray)"},children:"Password"}),t.jsx("input",{type:"password",value:u,onChange:b=>{g(b.target.value),x("")},className:"w-full px-4 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:`1px solid ${h?"#EF4444":"var(--color-border)"}`,color:"var(--color-text-white)"},placeholder:"Enter password"})]}),h&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239, 68, 68, 0.1)",border:"1px solid #EF4444"},children:t.jsx("p",{style:{color:"#EF4444",fontSize:"14px"},children:h})}),t.jsx("button",{type:"submit",className:"w-full py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Login"})]})]})})}function cm({customer:s,currentUsername:d,onView:i,onDone:u,onAttend:g}){const h=(s.partySize?.adults||0)+(s.partySize?.minors||0),x=s.isRevisit===!0,j=s.currentlyHelpedBy||null,b=j===d,F=j&&!b,A=C=>{if(!C)return"";const _=new Date(C);return isNaN(_.getTime())?"":_.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:F?"1px solid rgba(212, 167, 54, 0.5)":"1px solid var(--color-border)"},children:t.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[t.jsx("div",{className:"w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:s.firstName?.charAt(0).toUpperCase()||"?"}),t.jsxs("div",{className:"flex flex-col gap-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[t.jsx("p",{className:"font-medium whitespace-nowrap",style:{color:"var(--color-text-white)"},children:[s.firstName,s.lastName].filter(Boolean).join(" ")}),t.jsx("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:s.phones?.[0]||"No phone"}),t.jsx("span",{className:"px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap",style:{backgroundColor:x?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:x?"var(--color-gold)":"#3B82F6"},children:x?"Revisiting":"First Time"}),t.jsxs("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:["👥 ",h," visitor",h!==1?"s":""]}),s.checkInTime&&t.jsxs("p",{className:"text-sm whitespace-nowrap",style:{color:"var(--color-text-gray)"},children:["🕐 ",A(s.checkInTime)]})]}),j&&t.jsx("p",{className:"text-xs",style:{color:b?"#22C55E":"var(--color-gold)"},children:b?"✓ You are attending":`Being attended by ${j}`})]})]}),t.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0",children:[t.jsx("button",{onClick:()=>!b&&g(s.id),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:b?{backgroundColor:"rgba(34, 197, 94, 0.15)",border:"1px solid #22C55E",color:"#22C55E"}:F?{backgroundColor:"rgba(212, 167, 54, 0.1)",border:"1px solid var(--color-border)",color:"var(--color-gold)",cursor:"default"}:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:b||F?"Attending":"Attend"}),t.jsx("button",{onClick:()=>i(s),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"View"}),t.jsx("button",{onClick:()=>u(s.id),className:"px-4 py-2 rounded-lg font-medium whitespace-nowrap",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Done"})]})]})})}function dm({customer:s,onClose:d,onSave:i}){const[u,g]=f.useState([s.firstName,s.lastName].filter(Boolean).join(" ")),[h,x]=f.useState({street:s.street||"",suiteUnit:s.suiteUnit||"",city:s.city||"",state:s.state||"",zip:s.zip||"",country:s.country||"USA",phones:s.phones||[""],emails:s.emails||[""]}),j=R=>R.split(" ").map(Z=>Z.charAt(0).toUpperCase()+Z.slice(1).toLowerCase()).join(" "),b=()=>{x({...h,phones:[...h.phones,""]})},F=R=>{h.phones.length>1&&x({...h,phones:h.phones.filter((Z,X)=>X!==R)})},A=(R,Z)=>{const X=[...h.phones];X[R]=Z,x({...h,phones:X})},C=()=>{x({...h,emails:[...h.emails,""]})},_=R=>{h.emails.length>1&&x({...h,emails:h.emails.filter((Z,X)=>X!==R)})},B=(R,Z)=>{const X=[...h.emails];X[R]=Z,x({...h,emails:X})},[q,N]=f.useState([]),[P,E]=f.useState(!1),[w,M]=f.useState(!1),[U,H]=f.useState(null);f.useEffect(()=>{const R=s.phones?.[0];R&&(M(!0),fetch(`/api/images/customer/${encodeURIComponent(R)}`).then(Z=>Z.json()).then(Z=>{Z.success&&Array.isArray(Z.data)&&N(Z.data.filter(X=>X.images.length>0))}).catch(()=>{}).finally(()=>M(!1)))},[s.phones]);const W=()=>{if(!u.trim()){alert("Full name is required");return}const R=u.trim().split(/\s+/),Z=R[0]||"",X=R.slice(1).join(" ");i(s.id,{firstName:Z,lastName:X,...h})};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-6 z-50",style:{backgroundColor:"rgba(0, 0, 0, 0.8)"},children:t.jsxs("div",{className:"w-full max-w-4xl max-h-[90vh] overflow-y-auto",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"32px"},children:[t.jsxs("div",{className:"flex justify-between items-start mb-6",children:[t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl",style:{color:"var(--color-gold)"},children:[s.firstName,s.lastName].filter(Boolean).join(" ")}),t.jsx("p",{className:"text-sm mt-1",style:{color:"var(--color-text-gray)"},children:s.isRevisit?"Revisiting Customer":"First Time Customer"})]}),t.jsx("button",{onClick:d,className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:24})})]}),t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Customer Information"}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Full Name *"}),t.jsx("input",{type:"text",value:u,onChange:R=>g(j(R.target.value)),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Street Address"}),t.jsx("input",{type:"text",value:h.street,onChange:R=>x({...h,street:j(R.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Suite/Unit"}),t.jsx("input",{type:"text",value:h.suiteUnit,onChange:R=>x({...h,suiteUnit:R.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"City"}),t.jsx("input",{type:"text",value:h.city,onChange:R=>x({...h,city:j(R.target.value)}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"State"}),t.jsx("input",{type:"text",value:h.state,onChange:R=>x({...h,state:R.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"ZIP"}),t.jsx("input",{type:"text",value:h.zip,onChange:R=>x({...h,zip:R.target.value}),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]})]}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Phones"}),h.phones.map((R,Z)=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("input",{type:"text",value:R,onChange:X=>A(Z,X.target.value),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("button",{onClick:()=>F(Z),className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:16})})]},Z)),t.jsx("button",{onClick:b,className:"py-2 px-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Add Phone"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Emails"}),h.emails.map((R,Z)=>t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("input",{type:"text",value:R,onChange:X=>B(Z,X.target.value),className:"w-full px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}}),t.jsx("button",{onClick:()=>_(Z),className:"p-2 rounded-lg hover:bg-opacity-50",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-gray)"},children:t.jsx(ct,{size:16})})]},Z)),t.jsx("button",{onClick:C,className:"py-2 px-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Add Email"})]})]}),s.referralSources&&s.referralSources.length>0&&t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Referral Information"}),t.jsx("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:s.referralSources.map((R,Z)=>t.jsxs("div",{className:"mb-3 last:mb-0",children:[t.jsxs("p",{style:{color:"var(--color-gold)"},children:["• ",R.type]}),R.name&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Name: ",R.name]}),R.phone&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Phone: ",R.phone]}),R.location&&t.jsxs("p",{className:"ml-4 text-sm",style:{color:"var(--color-text-gray)"},children:["Location: ",R.location]})]},Z))})]}),s.partySize&&t.jsxs("div",{className:"mb-8",children:[t.jsx("h3",{className:"text-xl mb-4",style:{color:"var(--color-text-white)"},children:"Party Information"}),t.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Adults"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:s.partySize.adults})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Minors"}),t.jsx("p",{className:"text-2xl",style:{color:"var(--color-gold)"},children:s.partySize.minors})]})]}),s.visitors&&s.visitors.length>0&&t.jsxs("div",{children:[t.jsx("h4",{className:"text-lg mb-3",style:{color:"var(--color-text-white)"},children:"Visitors & Signatures"}),t.jsx("div",{className:"space-y-4",children:s.visitors.map((R,Z)=>t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-background)",border:R.isMain?"2px solid var(--color-gold)":"1px solid var(--color-border)"},children:[t.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[t.jsx("span",{className:"font-medium",style:{color:"var(--color-text-white)"},children:R.name}),R.isMain&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:"Main"}),R.isMinor&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(100, 100, 100, 0.2)",color:"var(--color-text-gray)"},children:"Minor (No signature required)"})]}),R.signature&&!R.isMinor&&t.jsxs("div",{children:[t.jsx("p",{className:"text-xs mb-2",style:{color:"var(--color-text-gray)"},children:"Signature:"}),t.jsx("div",{className:"rounded-lg overflow-hidden",style:{backgroundColor:"white",border:"1px solid var(--color-border)",maxWidth:"400px"},children:t.jsx("img",{src:R.signature,alt:`${R.name} signature`,style:{width:"100%",height:"auto",maxHeight:"150px",objectFit:"contain"}})})]})]},Z))})]})]}),t.jsxs("div",{className:"mb-8 rounded-lg overflow-hidden",style:{border:"1px solid var(--color-border)"},children:[t.jsxs("button",{onClick:()=>E(R=>!R),className:"w-full flex items-center justify-between px-4 py-3",style:{backgroundColor:"var(--color-background)",color:"var(--color-text-white)",border:"none",cursor:"pointer"},children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(ys,{size:16,style:{color:"var(--color-gold)"}}),t.jsx("span",{children:"Uploaded Images"}),!w&&t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:"rgba(212,167,54,0.15)",color:"var(--color-gold)"},children:q.reduce((R,Z)=>R+Z.images.length,0)})]}),P?t.jsx(kd,{size:16,style:{color:"var(--color-text-gray)"}}):t.jsx(bd,{size:16,style:{color:"var(--color-text-gray)"}})]}),P&&t.jsx("div",{className:"p-4",style:{borderTop:"1px solid var(--color-border)"},children:w?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"Loading…"}):q.length===0?t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:"No images uploaded."}):t.jsx("div",{className:"space-y-5",children:q.map(R=>t.jsxs("div",{children:[q.length>1&&t.jsxs("p",{className:"mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:["Visit: ",new Date(R.checkInTime).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),t.jsx("div",{className:"grid gap-3",style:{gridTemplateColumns:"repeat(auto-fill, minmax(110px, 1fr))"},children:R.images.map(Z=>t.jsxs("div",{className:"relative rounded-lg overflow-hidden",style:{aspectRatio:"1",border:"1px solid var(--color-border)",cursor:"pointer"},onClick:()=>H(Z.image_url),children:[t.jsx("img",{src:Z.image_url,alt:"Material",className:"w-full h-full object-cover"}),t.jsxs("div",{className:"absolute bottom-0 right-0 px-1.5 py-0.5 text-xs font-semibold rounded-tl-lg",style:{backgroundColor:"rgba(0,0,0,0.75)",color:"var(--color-gold)"},children:["×",Z.quantity]})]},Z.id))})]},R.checkInId))})})]}),t.jsxs("div",{className:"flex gap-3",children:[t.jsx("button",{onClick:d,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:"Cancel"}),t.jsx("button",{onClick:W,className:"flex-1 py-3 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Save Changes"})]})]})}),U&&t.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"rgba(0,0,0,0.9)",display:"flex",alignItems:"center",justifyContent:"center",padding:"16px"},onClick:()=>H(null),children:[t.jsx("img",{src:U,alt:"Enlarged material",style:{maxWidth:"90vw",maxHeight:"90vh",display:"block",borderRadius:"8px"},onClick:R=>R.stopPropagation()}),t.jsx("button",{onClick:()=>H(null),style:{position:"absolute",top:"16px",right:"16px",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(255,255,255,0.2)",color:"white",fontSize:"22px",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:"×"})]})]})}function um({username:s,onLogout:d,checkIns:i,onMarkAsDone:u}){const[g,h]=f.useState("queue"),[x,j]=f.useState([]),[b,F]=f.useState([]),[A,C]=f.useState(null),[_,B]=f.useState(!1),[q,N]=f.useState(1),[P,E]=f.useState(1),w=15,[M,U]=f.useState(new Date().getMonth()+1),[H,W]=f.useState(new Date().getDate()),[R,Z]=f.useState(new Date().getFullYear()),[X,L]=f.useState(i);f.useEffect(()=>{const p=X.filter(y=>y.status==="waiting").sort((y,Q)=>new Date(y.checkInTime).getTime()-new Date(Q.checkInTime).getTime());j(p)},[X]),f.useEffect(()=>{if(g==="history"){const p=X.filter(y=>{if(y.status!=="done"&&y.status!=="helped")return!1;const Q=new Date(y.helpedTime||y.checkInTime);return Q.getMonth()+1===M&&Q.getDate()===H&&Q.getFullYear()===R});F(p)}},[g,M,H,R,X]),f.useEffect(()=>{fetch("/api/check-ins").then(y=>y.json()).then(y=>{y.success&&Array.isArray(y.data)&&L(y.data)}).catch(()=>{});const p=new EventSource("/api/check-ins/events");return p.onmessage=y=>{try{const Q=JSON.parse(y.data);Q.type==="update"&&Array.isArray(Q.data)&&L(Q.data)}catch{}},p.onerror=()=>{},()=>p.close()},[]);const oe=p=>{C(p),B(!0)},de=async p=>{const y=new Date().toISOString();L(Q=>Q.map(ee=>ee.id===p?{...ee,status:"done",helpedTime:y}:ee));try{await fetch(`/api/check-ins/${p}/done`,{method:"PATCH"})}catch{L(Q=>Q.map(ee=>ee.id===p?{...ee,status:"waiting",helpedTime:null}:ee))}u(p)},V=async p=>{try{const Q=await(await fetch(`/api/check-ins/${p}/claim`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({helpedBy:s})})).json();Q.claimed?L(ee=>ee.map(ce=>ce.id===p?{...ce,currentlyHelpedBy:s}:ce)):Q.claimedBy&&L(ee=>ee.map(ce=>ce.id===p?{...ce,currentlyHelpedBy:Q.claimedBy}:ce))}catch{}},he=async(p,y)=>{L(Q=>Q.map(ee=>ee.id===p?{...ee,...y}:ee)),B(!1)},Ce=b.length,Pe=b.filter(p=>!p.isRevisit).length,Ee=b.filter(p=>p.isRevisit).length,G=["January","February","March","April","May","June","July","August","September","October","November","December"],ae=Array.from({length:31},(p,y)=>y+1),re=[2024,2025,2026,2027];return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("header",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance Surfaces",className:"w-10 h-10 object-contain"}),t.jsx("span",{className:"text-xl font-medium",style:{color:"var(--color-text-white)"},children:"Reliance Surfaces"})]}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsxs("span",{style:{color:"var(--color-text-gray)"},children:["Welcome, ",s]}),t.jsxs("button",{onClick:d,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:[t.jsx(un,{size:18}),"Logout"]})]})]})}),t.jsx("div",{className:"border-b",style:{backgroundColor:"var(--color-card)",borderColor:"var(--color-border)"},children:t.jsxs("div",{className:"flex px-6",children:[t.jsxs("button",{onClick:()=>h("queue"),className:"px-6 py-4 font-medium border-b-2",style:{color:g==="queue"?"var(--color-gold)":"var(--color-text-gray)",borderColor:g==="queue"?"var(--color-gold)":"transparent"},children:["Queue (",x.length,")"]}),t.jsx("button",{onClick:()=>h("history"),className:"px-6 py-4 font-medium border-b-2",style:{color:g==="history"?"var(--color-gold)":"var(--color-text-gray)",borderColor:g==="history"?"var(--color-gold)":"transparent"},children:"History"})]})}),t.jsx("div",{className:"p-6",children:g==="queue"?t.jsxs("div",{children:[t.jsx("h2",{className:"text-2xl mb-6",style:{color:"var(--color-text-white)"},children:"Customer Queue"}),x.length===0?t.jsx("div",{className:"text-center py-12 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No customers in queue"})}):t.jsx("div",{className:"space-y-4",children:x.slice((q-1)*w,q*w).map(p=>t.jsx(cm,{customer:p,currentUsername:s,onView:oe,onDone:de,onAttend:V},p.id))}),x.length>w&&t.jsxs("div",{className:"flex justify-center mt-4",children:[t.jsx("button",{onClick:()=>N(q-1),disabled:q===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Previous"}),t.jsxs("span",{className:"mx-4",style:{color:"var(--color-text-gray)"},children:["Page ",q," of ",Math.ceil(x.length/w)]}),t.jsx("button",{onClick:()=>N(q+1),disabled:q*w>=x.length,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Next"})]})]}):t.jsxs("div",{children:[t.jsxs("div",{className:"mb-6",children:[t.jsx("h2",{className:"text-2xl mb-4",style:{color:"var(--color-text-white)"},children:"Daily Visitors"}),t.jsxs("div",{className:"flex flex-wrap gap-4 mb-6",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Month"}),t.jsx("select",{value:M,onChange:p=>U(parseInt(p.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:G.map((p,y)=>t.jsx("option",{value:y+1,children:p},y))})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Day"}),t.jsx("select",{value:H,onChange:p=>W(parseInt(p.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:ae.map(p=>t.jsx("option",{value:p,children:p},p))})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-2 text-sm",style:{color:"var(--color-text-gray)"},children:"Year"}),t.jsx("select",{value:R,onChange:p=>Z(parseInt(p.target.value)),className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:re.map(p=>t.jsx("option",{value:p,children:p},p))})]})]}),t.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",children:[t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Total Visitors"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--color-gold)"},children:Ce})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"New Customers"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"#3B82F6"},children:Pe})]}),t.jsxs("div",{className:"p-4 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{className:"text-sm mb-1",style:{color:"var(--color-text-gray)"},children:"Revisits"}),t.jsx("p",{className:"text-3xl font-bold",style:{color:"var(--color-gold)"},children:Ee})]})]})]}),b.length===0?t.jsx("div",{className:"text-center py-12 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No visitors for selected date"})}):t.jsx("div",{className:"space-y-4",children:b.slice((P-1)*w,P*w).map(p=>t.jsx("div",{className:"p-4 rounded-lg cursor-pointer hover:opacity-80 transition-opacity",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},onClick:()=>oe(p),children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg",style:{backgroundColor:"rgba(212, 167, 54, 0.2)",color:"var(--color-gold)"},children:p.firstName?.charAt(0).toUpperCase()||"?"}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[t.jsx("p",{className:"font-medium",style:{color:"var(--color-text-white)"},children:[p.firstName,p.lastName].filter(Boolean).join(" ")}),t.jsx("span",{className:"px-2 py-0.5 rounded text-xs",style:{backgroundColor:p.isRevisit?"rgba(212, 167, 54, 0.2)":"rgba(59, 130, 246, 0.2)",color:p.isRevisit?"var(--color-gold)":"#3B82F6"},children:p.isRevisit?"Revisiting":"First Time"})]}),t.jsx("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:p.phones?.[0]||"No phone"})]})]}),t.jsx("div",{className:"text-right",children:t.jsxs("p",{className:"text-sm",style:{color:"var(--color-text-gray)"},children:["👥 ",(p.partySize?.adults||0)+(p.partySize?.minors||0)," visitors"]})})]})},p.id))}),b.length>w&&t.jsxs("div",{className:"flex justify-center mt-4",children:[t.jsx("button",{onClick:()=>E(P-1),disabled:P===1,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Previous"}),t.jsxs("span",{className:"mx-4",style:{color:"var(--color-text-gray)"},children:["Page ",P," of ",Math.ceil(b.length/w)]}),t.jsx("button",{onClick:()=>E(P+1),disabled:P*w>=b.length,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Next"})]})]})}),_&&A&&t.jsx(dm,{customer:A,onClose:()=>{B(!1),C(null)},onSave:he})]})}const an=15;function pm({customerName:s,checkInId:d,authToken:i,onDone:u}){const[g,h]=f.useState([]),[x,j]=f.useState({}),[b,F]=f.useState(!1),[A,C]=f.useState(""),_=f.useRef(null),B=f.useRef({});f.useEffect(()=>{fetch(`/api/images/check-in/${d}`,{headers:{Authorization:`Bearer ${i}`}}).then(w=>w.json()).then(w=>{if(w.success&&Array.isArray(w.data)){h(w.data);const M={};w.data.forEach(U=>{M[U.id]=U.quantity}),j(M)}}).catch(()=>{})},[d,i]);const q=async w=>{const M=Array.from(w.target.files||[]);if(!M.length)return;const U=an-g.length,H=M.slice(0,U);if(H.length===0){C(`You've reached the maximum of ${an} images.`),_.current&&(_.current.value="");return}C(M.length>H.length?`Only ${H.length} image(s) added — ${an} image maximum.`:""),F(!0);const W=new FormData;H.forEach(R=>W.append("images",R)),W.append("quantities",JSON.stringify(H.map(()=>1)));try{const R=await fetch("/api/images/upload",{method:"POST",headers:{Authorization:`Bearer ${i}`},body:W}),Z=await R.json();if(!R.ok)C(Z.error||"Upload failed. Please try again.");else{const X=Z.data;h(L=>[...L,...X]),j(L=>{const oe={...L};return X.forEach(de=>{oe[de.id]=de.quantity}),oe})}}catch{C("Upload failed. Please check your connection.")}finally{F(!1),_.current&&(_.current.value="")}},N=f.useCallback((w,M)=>{j(U=>{const H=U[w]??1,W=Math.max(1,Math.min(99,H+M));return W===H?U:(B.current[w]&&clearTimeout(B.current[w]),B.current[w]=setTimeout(async()=>{try{await fetch(`/api/images/${w}/quantity`,{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i}`},body:JSON.stringify({quantity:W})})}catch{}},600),{...U,[w]:W})})},[i]),P=async w=>{h(M=>M.filter(U=>U.id!==w)),j(M=>{const U={...M};return delete U[w],U});try{await fetch(`/api/images/${w}`,{method:"DELETE",headers:{Authorization:`Bearer ${i}`}})}catch{}},E=g.length>=an;return t.jsx("div",{className:"min-h-screen p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-2xl mx-auto",children:[t.jsxs("div",{className:"mb-8 text-center",children:[t.jsxs("h1",{style:{color:"var(--color-gold)"},children:["Welcome, ",s,"!"]}),t.jsx("p",{className:"mt-2",style:{color:"var(--color-text-gray)"},children:"Upload photos of materials you're interested in (optional)"})]}),t.jsxs("div",{className:"mb-4 text-center",children:[t.jsx("input",{ref:_,type:"file",accept:"image/*",multiple:!0,className:"hidden",onChange:q,disabled:b||E}),t.jsxs("button",{onClick:()=>_.current?.click(),disabled:b||E,className:"px-6 py-3 rounded-lg font-semibold",style:{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"8px",whiteSpace:"nowrap",backgroundColor:E?"var(--color-border)":"var(--color-gold)",color:E?"var(--color-text-gray)":"var(--color-background)",cursor:E?"not-allowed":"pointer"},children:[t.jsx(mh,{size:20}),b?"Uploading…":"Add Photos"]})]}),t.jsxs("p",{className:"mb-4 text-center",style:{color:"var(--color-text-gray)",fontSize:"14px"},children:[g.length," / ",an," images"]}),A&&t.jsx("div",{className:"mb-4 p-3 rounded-lg",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{className:"text-center",style:{color:"var(--color-error)"},children:A})}),g.length>0&&t.jsx("div",{className:"space-y-3 mb-8",children:g.map(w=>t.jsxs("div",{className:"flex items-center gap-4 p-3 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("img",{src:w.image_url,alt:"Uploaded material",className:"rounded object-cover flex-shrink-0",style:{width:120,height:120}}),t.jsx("div",{className:"flex-1"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{onClick:()=>N(w.id,-1),className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:t.jsx(wd,{size:14})}),t.jsx("span",{className:"w-8 text-center",style:{color:"var(--color-text-white)",fontWeight:600},children:x[w.id]??w.quantity}),t.jsx("button",{onClick:()=>N(w.id,1),className:"w-8 h-8 rounded-full flex items-center justify-center",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"},children:t.jsx(dn,{size:14})})]}),t.jsx("button",{onClick:()=>P(w.id),className:"w-8 h-8 rounded-full flex items-center justify-center ml-2",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)",color:"var(--color-error)"},children:t.jsx(ct,{size:16})})]},w.id))}),g.length===0&&!b&&t.jsxs("div",{className:"mb-8 py-12 text-center rounded-lg",style:{border:"2px dashed var(--color-border)"},children:[t.jsx(ys,{size:48,className:"mx-auto mb-3",style:{color:"var(--color-text-gray)"}}),t.jsx("p",{style:{color:"var(--color-text-gray)"},children:"No photos uploaded yet"})]}),t.jsx("button",{onClick:u,disabled:b,className:"w-full py-4 rounded-lg font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:b?.7:1},children:"Done"})]})})}function hm({checkInId:s,authToken:d,onDone:i}){const[u,g]=f.useState(0),[h,x]=f.useState(0),[j,b]=f.useState(""),[F,A]=f.useState(!1),[C,_]=f.useState(!1),[B,q]=f.useState(15),N=f.useRef(i);f.useEffect(()=>{N.current=i},[i]),f.useEffect(()=>{if(!C)return;const E=setInterval(()=>{q(w=>w<=1?(clearInterval(E),setTimeout(()=>N.current(),0),0):w-1)},1e3);return()=>clearInterval(E)},[C]);const P=async E=>{if(E){_(!0);return}if(u!==0){A(!0);try{await fetch("/api/survey",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify({starRating:u,comment:j.trim()||void 0})})}catch{}finally{A(!1),_(!0)}}};return C?t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md text-center",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx(xs,{size:72,className:"mx-auto mb-6",style:{color:"var(--color-success)"}}),t.jsx("h1",{className:"mb-4",style:{color:"var(--color-gold)"},children:"Thank You!"}),t.jsx("p",{className:"mb-6",style:{color:"var(--color-text-white)",fontSize:"18px"},children:"We appreciate your feedback."}),t.jsxs("p",{style:{color:"var(--color-text-gray)"},children:["Returning to home screen in"," ",t.jsx("span",{style:{color:"var(--color-gold)"},children:B})," seconds…"]}),t.jsx("button",{onClick:()=>N.current(),className:"mt-6 px-8 py-4 rounded-lg",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Return Home"})]})}):t.jsx("div",{className:"min-h-screen flex items-center justify-center p-6",style:{backgroundColor:"var(--color-background)"},children:t.jsxs("div",{className:"w-full max-w-md",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",borderRadius:"12px",padding:"48px"},children:[t.jsx("h1",{className:"text-center mb-2",style:{color:"var(--color-gold)"},children:"How was your experience?"}),t.jsx("p",{className:"text-center mb-8",style:{color:"var(--color-text-gray)"},children:"Your feedback helps us improve."}),t.jsx("div",{className:"flex justify-center gap-3 mb-8",children:[1,2,3,4,5].map(E=>{const w=E<=(h||u);return t.jsx("button",{onClick:()=>g(E),onMouseEnter:()=>x(E),onMouseLeave:()=>x(0),className:"p-2 rounded-lg transition-transform",style:{background:"none",border:"none",transform:h===E?"scale(1.15)":"scale(1)",cursor:"pointer"},"aria-label":`${E} star${E!==1?"s":""}`,children:t.jsx(wl,{size:48,fill:w?"var(--color-gold)":"none",style:{color:w?"var(--color-gold)":"var(--color-border)"}})},E)})}),t.jsxs("div",{className:"mb-8",children:[t.jsx("label",{className:"block mb-2",style:{color:"var(--color-text-white)"},children:"Any additional feedback?"}),t.jsx("textarea",{value:j,onChange:E=>b(E.target.value),rows:4,placeholder:"Optional — share your thoughts…",className:"w-full px-4 py-3 rounded-lg resize-none",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)"}})]}),t.jsx("button",{onClick:()=>P(!1),disabled:F||u===0,className:"w-full py-4 rounded-lg mb-4 font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)",opacity:F||u===0?.5:1,cursor:u===0?"not-allowed":"pointer"},children:F?"Submitting…":"Submit"}),t.jsx("div",{className:"text-center",children:t.jsx("button",{onClick:()=>P(!0),disabled:F,style:{color:"var(--color-text-gray)",background:"none",border:"none",cursor:"pointer",fontSize:"14px",textDecoration:"underline"},children:"Skip"})})]})})}function mm({rating:s}){return t.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4,5].map(d=>t.jsx(wl,{size:16,fill:d<=s?"var(--color-gold)":"none",style:{color:d<=s?"var(--color-gold)":"var(--color-border)"}},d))})}function fm({onLogout:s}){const[d,i]=f.useState([]),[u,g]=f.useState(null),[h,x]=f.useState(1),[j,b]=f.useState(""),[F,A]=f.useState(""),[C,_]=f.useState(!1),[B,q]=f.useState(""),N=f.useCallback(async(M,U,H)=>{_(!0),q("");try{const W=new URLSearchParams({page:String(M)});U&&W.set("startDate",U),H&&W.set("endDate",H);const R=await fetch(`/api/survey/responses?${W}`),Z=await R.json();R.ok?(i(Z.data),g(Z.meta)):q(Z.error||"Failed to load responses.")}catch{q("Failed to load responses. Please check your connection.")}finally{_(!1)}},[]);f.useEffect(()=>{N(h,j,F)},[h,N]);const P=()=>{x(1),N(1,j,F)},E=()=>{b(""),A(""),x(1),N(1,"","")},w=u?Math.max(...[1,2,3,4,5].map(M=>u.distribution[M]??0),1):1;return t.jsxs("div",{className:"min-h-screen",style:{backgroundColor:"var(--color-background)"},children:[t.jsx("header",{style:{backgroundColor:"var(--color-card)",borderBottom:"1px solid var(--color-border)",padding:"16px 24px"},children:t.jsxs("div",{className:"max-w-6xl mx-auto flex items-center justify-between",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("img",{src:Jt,alt:"Reliance",className:"w-10 h-10 object-contain"}),t.jsxs("div",{children:[t.jsx("h2",{style:{color:"var(--color-gold)",margin:0},children:"Customer Ratings"}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",margin:0},children:"Survey responses"})]})]}),t.jsxs("button",{onClick:s,className:"flex items-center gap-2 px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:[t.jsx(un,{size:16}),"Logout"]})]})}),t.jsxs("div",{className:"max-w-6xl mx-auto p-6 space-y-6",children:[u&&t.jsxs("div",{className:"grid gap-4",style:{gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))"},children:[t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:8},children:"Average Rating"}),t.jsxs("div",{className:"flex items-end gap-2",children:[t.jsx("span",{style:{color:"var(--color-gold)",fontSize:"40px",fontWeight:700,lineHeight:1},children:u.averageRating.toFixed(1)}),t.jsx(wl,{size:24,fill:"var(--color-gold)",style:{color:"var(--color-gold)",marginBottom:4}})]}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginTop:4},children:"out of 5"})]}),t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:8},children:"Total Responses"}),t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"40px",fontWeight:700,lineHeight:1},children:u.total}),t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginTop:4},children:"submissions"})]}),t.jsxs("div",{className:"p-5 rounded-xl",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",gridColumn:"span 2"},children:[t.jsx("p",{style:{color:"var(--color-text-gray)",fontSize:"13px",marginBottom:12},children:"Rating Distribution"}),t.jsx("div",{className:"space-y-2",children:[5,4,3,2,1].map(M=>{const U=u.distribution[M]??0,H=u.total>0?U/u.total*100:0,W=w>0?U/w*100:0;return t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsxs("div",{className:"flex items-center gap-1 flex-shrink-0",style:{width:80},children:[t.jsx("span",{style:{color:"var(--color-text-white)",fontSize:"13px",width:12,textAlign:"right"},children:M}),t.jsx(wl,{size:12,fill:"var(--color-gold)",style:{color:"var(--color-gold)"}})]}),t.jsx("div",{className:"flex-1 rounded-full overflow-hidden",style:{height:8,backgroundColor:"var(--color-background)"},children:t.jsx("div",{className:"h-full rounded-full",style:{width:`${W}%`,backgroundColor:"var(--color-gold)",transition:"width 0.3s ease"}})}),t.jsxs("span",{style:{color:"var(--color-text-gray)",fontSize:"12px",width:60,textAlign:"right"},children:[U," (",H.toFixed(0),"%)"]})]},M)})})]})]}),t.jsxs("div",{className:"p-4 rounded-xl flex flex-wrap items-end gap-4",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)"},children:[t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1",style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"From"}),t.jsx("input",{type:"date",value:j,onChange:M=>b(M.target.value),className:"px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",colorScheme:"dark"}})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block mb-1",style:{color:"var(--color-text-gray)",fontSize:"13px"},children:"To"}),t.jsx("input",{type:"date",value:F,onChange:M=>A(M.target.value),className:"px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-white)",colorScheme:"dark"}})]}),t.jsx("button",{onClick:P,className:"px-5 py-2 rounded-lg font-semibold",style:{backgroundColor:"var(--color-gold)",color:"var(--color-background)"},children:"Apply"}),(j||F)&&t.jsx("button",{onClick:E,className:"px-4 py-2 rounded-lg",style:{backgroundColor:"var(--color-background)",border:"1px solid var(--color-border)",color:"var(--color-text-gray)"},children:"Clear"})]}),B&&t.jsx("div",{className:"p-3 rounded-lg",style:{backgroundColor:"rgba(239,68,68,0.1)",border:"1px solid var(--color-error)"},children:t.jsx("p",{style:{color:"var(--color-error)"},children:B})}),t.jsx("div",{className:"rounded-xl overflow-hidden",style:{border:"1px solid var(--color-border)"},children:t.jsxs("table",{className:"w-full",style:{borderCollapse:"collapse"},children:[t.jsx("thead",{children:t.jsx("tr",{style:{backgroundColor:"var(--color-card)",borderBottom:"1px solid var(--color-border)"},children:["Date","Customer","Rating","Comment"].map(M=>t.jsx("th",{className:"text-left px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"13px",fontWeight:600},children:M},M))})}),t.jsx("tbody",{children:C?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"px-4 py-12 text-center",style:{color:"var(--color-text-gray)"},children:"Loading…"})}):d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:4,className:"px-4 py-12 text-center",style:{color:"var(--color-text-gray)"},children:"No survey responses found."})}):d.map((M,U)=>t.jsxs("tr",{style:{backgroundColor:U%2===0?"var(--color-background)":"var(--color-card)",borderBottom:"1px solid var(--color-border)"},children:[t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"14px",whiteSpace:"nowrap"},children:new Date(M.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-white)",fontSize:"14px"},children:M.customerName}),t.jsx("td",{className:"px-4 py-3",children:t.jsx(mm,{rating:M.starRating})}),t.jsx("td",{className:"px-4 py-3",style:{color:"var(--color-text-gray)",fontSize:"14px",maxWidth:400},children:M.comment||t.jsx("span",{style:{fontStyle:"italic",opacity:.5},children:"No comment"})})]},M.id))})]})}),u&&u.totalPages>1&&t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("p",{style:{color:"var(--color-text-gray)",fontSize:"14px"},children:["Page ",u.page," of ",u.totalPages," · ",u.total," total"]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsxs("button",{onClick:()=>x(M=>Math.max(1,M-1)),disabled:h<=1,className:"flex items-center gap-1 px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:h<=1?"var(--color-text-gray)":"var(--color-text-white)",cursor:h<=1?"not-allowed":"pointer",opacity:h<=1?.5:1},children:[t.jsx(Vp,{size:16})," Prev"]}),t.jsxs("button",{onClick:()=>x(M=>Math.min(u.totalPages,M+1)),disabled:h>=u.totalPages,className:"flex items-center gap-1 px-3 py-2 rounded-lg",style:{backgroundColor:"var(--color-card)",border:"1px solid var(--color-border)",color:h>=u.totalPages?"var(--color-text-gray)":"var(--color-text-white)",cursor:h>=u.totalPages?"not-allowed":"pointer",opacity:h>=u.totalPages?.5:1},children:["Next ",t.jsx(Xp,{size:16})]})]})]})]})]})}function gm(s){const d=s.materials||[],i=d.length>0||s.selectionSheetNumber||s.fabricator||s.draftStep>0;return{id:s.id,isRevisit:s.isRevisit||!1,firstName:s.firstName,lastName:s.lastName,street:s.street,suiteUnit:s.suiteUnit||"",city:s.city,state:s.state,zip:s.zip,country:s.country,phones:s.phones||[],emails:s.emails||[],referralSources:s.referralSources||[],signature:s.signature||"",checkInTime:new Date(s.checkInTime),helpedTime:s.helpedTime?new Date(s.helpedTime):void 0,status:s.status,currentlyHelpedBy:s.currentlyHelpedBy||void 0,partySize:s.partySize||{adults:1,minors:0},visitors:s.visitors||[],draft:i?{step:s.status==="helped"?3:s.draftStep||0,editedCustomerData:{},materials:d,selectedFabricator:s.fabricator||void 0,helpedBy:s.helpedBy||void 0,selectionSheetNumber:s.selectionSheetNumber||"",isHold:d.some(u=>u.hold)}:void 0}}function xm(){const[s,d]=f.useState(()=>{const J=localStorage.getItem("staff2Session");if(J)try{const{expiry:ve}=JSON.parse(J);if(Date.now()<ve)return"staff2-dashboard"}catch{}return"home"}),[i,u]=f.useState({}),[g,h]=f.useState([]),[x,j]=f.useState(""),[b,F]=f.useState({adults:1,minors:0}),[A,C]=f.useState(!1),[_,B]=f.useState(null),[q,N]=f.useState([]),[P,E]=f.useState(0),[w,M]=f.useState([]),[U,H]=f.useState(!1),[W,R]=f.useState(null),[Z,X]=f.useState(()=>{const J=localStorage.getItem("staff2Session");if(J)try{const{username:ve,expiry:Ne}=JSON.parse(J);if(Date.now()<Ne)return ve;localStorage.removeItem("staff2Session")}catch{localStorage.removeItem("staff2Session")}return""}),[L,oe]=f.useState(null),[de,V]=f.useState(null);f.useEffect(()=>{fetch("/api/check-ins").then(J=>J.json()).then(J=>{J.success&&Array.isArray(J.data)&&h(J.data.map(gm))}).catch(J=>console.error("Failed to load check-ins:",J))},[]);const he=J=>{u({...i,...J,referralSources:[]}),d("customer-step3a")},Ce=J=>{u({...i,...J}),d("customer-step3a")},Pe=J=>{F(J),d("customer-step3b")},Ee=J=>{console.log("=== STEP 3B NEXT ==="),console.log("Signature data received:",{hasSignature:!!J.signature,signatureLength:J.signature?.length,signaturePreview:J.signature?.substring(0,50),hasEsignConsent:!!J.esignConsentTimestamp,sessionId:J.sessionId,deviceType:J.deviceInfo?.deviceType}),B(J),b.adults>1?(E(0),N([]),d("customer-step3c")):b.minors>0?d("customer-step3d"):p(void 0,void 0,J)},G=J=>{const ve=[...q];ve[P]=J,N(ve);const Ne=b.adults-2;P<Ne?E(P+1):b.minors>0?d("customer-step3d"):p(void 0,ve)},ae=()=>{P===0?d("customer-step3b"):E(P-1)},re=J=>{console.log("=== STEP 3D SUBMIT ==="),console.log("Received names:",J),console.log("Names length:",J.length),p(J)},p=async(J,ve,Ne)=>{if(U)return;H(!0);const ye=J!==void 0?J:w,S=ve!==void 0?ve:q,se=Ne!==void 0?Ne:_,Qe=[{name:[i.firstName,i.lastName].filter(Boolean).join(" "),signature:se?.signature||"",isMain:!0,isMinor:!1},...S.map(Be=>({name:Be.name,signature:Be.signature,isMain:!1,isMinor:!1})),...ye.map(Be=>({name:Be,signature:"",isMain:!1,isMinor:!0}))],ze={firstName:i.firstName,lastName:i.lastName,street:i.street,suiteUnit:i.suiteUnit||"",city:i.city,state:i.state,zip:i.zip,country:i.country,phones:i.phones,emails:i.emails,referralSources:i.referralSources||[],signature:se?.signature||"",partySize:b,visitors:Qe,checkInTime:new Date().toISOString(),esignConsentTimestamp:se?.esignConsentTimestamp,sessionId:se?.sessionId,deviceInfo:se?.deviceInfo};try{const Be=await fetch("/api/check-ins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ze)}),O=await Be.json();if(!Be.ok){console.error("Check-in API error:",O);let Ae="Check-in failed. Please try again.";Be.status===403?Ae="Check-in is only available on the office network. Please connect to the office Wi-Fi.":Be.status===409&&(Ae=O.error,d("customer-step1")),alert(Ae),H(!1);return}console.log("Check-in successful:",O.data.id),O.data.waiverPdfUrl&&console.log("Waiver PDF:",O.data.waiverPdfUrl);const ge={id:O.data.id,...i,signatureData:se?.signature||"",checkInTime:new Date(O.data.checkInTime),status:"waiting",partySize:b,visitors:Qe};h([...g,ge])}catch(Be){console.error("Check-in network error:",Be),alert("Check-in failed. Please check your connection and try again."),H(!1);return}C(b.minors>0),F({adults:1,minors:0}),B(null),N([]),E(0),M([]),H(!1),d("customer-step4")},y=f.useCallback(()=>{u({}),C(!1),F({adults:1,minors:0}),B(null),N([]),E(0),M([]),d("home")},[]),Q=(J,ve,Ne)=>{ve==="staff2"?br(J):ve==="customer"&&Ne?(oe(Ne),d("customer-upload")):ve==="rating"?(j(J),d("rating-dashboard")):(j(J),d(ve==="pricing"?"pricing-dashboard":ve==="analysis"?"analysis-dashboard":"staff-dashboard"))},ee=()=>{L&&V({token:L.token,checkInId:L.checkInId}),oe(null),d("customer-survey")},ce=()=>{V(null),d("home")},ne=()=>{j(""),d("home")},Se=J=>{h(ve=>ve.map(Ne=>Ne.id===J?{...Ne,status:"helped",helpedTime:new Date,currentlyHelpedBy:void 0}:Ne))},Te=(J,ve)=>{h(Ne=>Ne.map(ye=>ye.id===J?{...ye,currentlyHelpedBy:ve}:ye))},we=J=>{h(ve=>ve.map(Ne=>Ne.id===J?{...Ne,priced:!0,pricedTime:new Date}:Ne))},Ue=J=>{h(ve=>ve.map(Ne=>Ne.id===J?{...Ne,checkInTime:new Date}:Ne))},cr=J=>{R(J),d("revisit-step1")},Fr=J=>{R(ve=>({...ve,...J})),d("revisit-step2")},wr=J=>{R(ve=>({...ve,referralSources:J})),d("revisit-waiver")},Ve=async J=>{if(U)return;H(!0);const ve={firstName:W.firstName,lastName:W.lastName,street:W.street,suiteUnit:W.suiteUnit||"",city:W.city,state:W.state,zip:W.zip,country:W.country,phones:W.phones,emails:W.emails,referralSources:W.referralSources||[],signature:J.signature,partySize:J.partySize,visitors:J.visitors,checkInTime:new Date().toISOString(),isRevisit:!0};try{const Ne=await fetch("/api/check-ins",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ve)}),ye=await Ne.json();if(!Ne.ok){Ne.status===403?alert("Check-in is only available on the office network. Please connect to the office Wi-Fi."):alert("Revisit check-in failed. Please try again."),H(!1);return}const S={id:ye.data.id,...W,isRevisit:!0,signature:J.signature,checkInTime:new Date(ye.data.checkInTime),status:"waiting",partySize:J.partySize,visitors:J.visitors};h(se=>[...se,S])}catch{alert("Revisit check-in failed. Please check your connection."),H(!1);return}H(!1),d("revisit-confirmation")},br=J=>{const ve=Date.now()+288e5;localStorage.setItem("staff2Session",JSON.stringify({username:J,expiry:ve})),X(J),d("staff2-dashboard")},jr=()=>{localStorage.removeItem("staff2Session"),X(""),d("home")},Lr=J=>{h(ve=>ve.map(Ne=>Ne.id===J?{...Ne,status:"done"}:Ne))},We=(J,ve)=>{h(Ne=>Ne.map(ye=>ye.id===J?{...ye,draft:ve}:ye))},or=J=>{g.filter(ye=>ye.firstName===J.firstName&&ye.lastName===J.lastName&&ye.status==="helped"&&ye.draft?.selectionSheetNumber);let ve=J.draft?.selectionSheetNumber||"";if(ve){const ye=ve.split("."),S=ye[0];if(ye.length===1)ve=`${S}.1`;else{const se=parseInt(ye[1])||0;ve=`${S}.${se+1}`}}const Ne={...J,id:Date.now().toString(),checkInTime:new Date,status:"waiting",helpedTime:void 0,draft:{step:3,editedCustomerData:{},selectedFabricator:J.draft?.selectedFabricator,materials:J.draft?.materials||[],helpedBy:x,selectionSheetNumber:ve,isHold:!1,isRevisit:!0,previousMaterialsCount:(J.draft?.materials||[]).length}};h([...g,Ne])},Oe=U?t.jsx(cn,{fullScreen:!0,color:"#ccb331",text:"Submitting your check-in…"}):null;if(s==="customer-step1")return t.jsxs(t.Fragment,{children:[Oe,t.jsx(kh,{onNext:he,initialData:i})]});if(s==="customer-step2")return t.jsxs(t.Fragment,{children:[Oe,t.jsx(wh,{onNext:Ce,onBack:()=>d("customer-step1"),initialData:i})]});if(s==="customer-step3a")return t.jsxs(t.Fragment,{children:[Oe,t.jsx(jh,{onNext:Pe,onBack:()=>d("customer-step1"),initialData:b})]});if(s==="customer-step3b")return t.jsxs(t.Fragment,{children:[Oe,t.jsx(Ph,{onNext:Ee,onBack:()=>d("customer-step3a"),initialData:_||void 0})]});if(s==="customer-step3c"){const J=P<q.length?q[P]:void 0;return t.jsxs(t.Fragment,{children:[Oe,t.jsx(Eh,{onNext:G,onBack:ae,visitorNumber:P+2,totalAdults:b.adults,initialData:J},P)]})}return s==="customer-step3d"?t.jsxs(t.Fragment,{children:[Oe,t.jsx(Th,{onNext:re,onBack:()=>{b.adults>1?(E(b.adults-2),d("customer-step3c")):d("customer-step3b")},numberOfMinors:b.minors})]}):s==="customer-step4"?t.jsx(zh,{customerName:[i.firstName,i.lastName].filter(Boolean).join(" "),hasMinors:A,onReturnHome:y}):s==="staff-login"?t.jsx(Mh,{onLogin:Q}):s==="staff-dashboard"?t.jsx(Zh,{username:x,onLogout:ne,checkIns:g,onMarkAsHelped:Se,onSaveDraft:We,onRevisit:or,onUpdateCurrentlyHelpedBy:Te}):s==="pricing-dashboard"?t.jsx(em,{username:x,onLogout:ne,checkIns:g,fabricators:[],onComplete:we,onResetHoldDate:Ue}):s==="analysis-dashboard"?t.jsx(rm,{username:x,onLogout:ne,checkIns:g,fabricators:[],onComplete:we,onResetHoldDate:Ue}):s==="revisit-lookup"?t.jsx(tm,{checkIns:g,onCustomerFound:cr,onBack:()=>d("home")}):s==="revisit-step1"?t.jsx(om,{customerData:W,onNext:Fr,onBack:()=>d("revisit-lookup")}):s==="revisit-step2"?t.jsx(lm,{referralSources:W?.referralSources||[],onNext:wr,onBack:()=>d("revisit-step1")}):s==="revisit-waiver"?t.jsxs(t.Fragment,{children:[Oe,t.jsx(am,{customerName:[W?.firstName,W?.lastName].filter(Boolean).join(" "),onSubmit:Ve,onBack:()=>d("revisit-step2")})]}):s==="revisit-confirmation"?t.jsx(sm,{customerName:[W?.firstName,W?.lastName].filter(Boolean).join(" "),onReturnHome:y}):s==="staff2-login"?t.jsx(im,{onLogin:br}):s==="staff2-dashboard"?t.jsx(um,{username:Z,onLogout:jr,checkIns:g,onMarkAsDone:Lr}):s==="customer-upload"?L?t.jsx(pm,{customerName:L.customerName,checkInId:L.checkInId,authToken:L.token,onDone:ee}):null:s==="customer-survey"?t.jsx(hm,{checkInId:de?.checkInId??"",authToken:de?.token??"",onDone:ce}):s==="rating-dashboard"?t.jsx(fm,{onLogout:ne}):t.jsx(Ip,{onCustomerCheckIn:()=>d("customer-step1"),onStaffLogin:()=>d("staff-login"),onRevisit:()=>d("revisit-lookup"),onStaff2Login:()=>d("staff2-login")})}Rp.createRoot(document.getElementById("root")).render(t.jsx(xm,{}));
