(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var zp={exports:{}},Wl={},Up={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=Symbol.for("react.element"),wv=Symbol.for("react.portal"),Sv=Symbol.for("react.fragment"),Ev=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),Cv=Symbol.for("react.provider"),kv=Symbol.for("react.context"),Iv=Symbol.for("react.forward_ref"),Tv=Symbol.for("react.suspense"),bv=Symbol.for("react.memo"),Rv=Symbol.for("react.lazy"),ph=Symbol.iterator;function Nv(t){return t===null||typeof t!="object"?null:(t=ph&&t[ph]||t["@@iterator"],typeof t=="function"?t:null)}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bp=Object.assign,Vp={};function _i(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||Wp}_i.prototype.isReactComponent={};_i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hp(){}Hp.prototype=_i.prototype;function Su(t,e,n){this.props=t,this.context=e,this.refs=Vp,this.updater=n||Wp}var Eu=Su.prototype=new Hp;Eu.constructor=Su;Bp(Eu,_i.prototype);Eu.isPureReactComponent=!0;var gh=Array.isArray,$p=Object.prototype.hasOwnProperty,xu={current:null},Gp={key:!0,ref:!0,__self:!0,__source:!0};function Kp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$p.call(e,r)&&!Gp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Gs,type:t,key:s,ref:o,props:i,_owner:xu.current}}function Pv(t,e){return{$$typeof:Gs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gs}function Av(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mh=/\/+/g;function va(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Av(""+t.key):e.toString(36)}function Ao(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Gs:case wv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+va(o,0):r,gh(i)?(n="",t!=null&&(n=t.replace(mh,"$&/")+"/"),Ao(i,e,n,"",function(c){return c})):i!=null&&(Cu(i)&&(i=Pv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",gh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+va(s,l);o+=Ao(s,e,n,a,i)}else if(a=Nv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+va(s,l++),o+=Ao(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ho(t,e,n){if(t==null)return t;var r=[],i=0;return Ao(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Dv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var et={current:null},Do={transition:null},Ov={ReactCurrentDispatcher:et,ReactCurrentBatchConfig:Do,ReactCurrentOwner:xu};function Qp(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:ho,forEach:function(t,e,n){ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ho(t,function(){e++}),e},toArray:function(t){return ho(t,function(e){return e})||[]},only:function(t){if(!Cu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=_i;Y.Fragment=Sv;Y.Profiler=xv;Y.PureComponent=Su;Y.StrictMode=Ev;Y.Suspense=Tv;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ov;Y.act=Qp;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)$p.call(e,a)&&!Gp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Gs,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:kv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cv,_context:t},t.Consumer=t};Y.createElement=Kp;Y.createFactory=function(t){var e=Kp.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:Iv,render:t}};Y.isValidElement=Cu;Y.lazy=function(t){return{$$typeof:Rv,_payload:{_status:-1,_result:t},_init:Dv}};Y.memo=function(t,e){return{$$typeof:bv,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Do.transition;Do.transition={};try{t()}finally{Do.transition=e}};Y.unstable_act=Qp;Y.useCallback=function(t,e){return et.current.useCallback(t,e)};Y.useContext=function(t){return et.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return et.current.useDeferredValue(t)};Y.useEffect=function(t,e){return et.current.useEffect(t,e)};Y.useId=function(){return et.current.useId()};Y.useImperativeHandle=function(t,e,n){return et.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return et.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return et.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return et.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return et.current.useReducer(t,e,n)};Y.useRef=function(t){return et.current.useRef(t)};Y.useState=function(t){return et.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return et.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return et.current.useTransition()};Y.version="18.3.1";Up.exports=Y;var L=Up.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv=L,Mv=Symbol.for("react.element"),jv=Symbol.for("react.fragment"),Fv=Object.prototype.hasOwnProperty,zv=Lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uv={key:!0,ref:!0,__self:!0,__source:!0};function qp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Fv.call(e,r)&&!Uv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Mv,type:t,key:s,ref:o,props:i,_owner:zv.current}}Wl.Fragment=jv;Wl.jsx=qp;Wl.jsxs=qp;zp.exports=Wl;var u=zp.exports,Yp={exports:{}},pt={},Xp={exports:{}},Jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,U){var B=R.length;R.push(U);e:for(;0<B;){var oe=B-1>>>1,C=R[oe];if(0<i(C,U))R[oe]=U,R[B]=C,B=oe;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var U=R[0],B=R.pop();if(B!==U){R[0]=B;e:for(var oe=0,C=R.length,M=C>>>1;oe<M;){var $=2*(oe+1)-1,te=R[$],ne=$+1,S=R[ne];if(0>i(te,B))ne<C&&0>i(S,te)?(R[oe]=S,R[ne]=B,oe=ne):(R[oe]=te,R[$]=B,oe=$);else if(ne<C&&0>i(S,B))R[oe]=S,R[ne]=B,oe=ne;else break e}}return U}function i(R,U){var B=R.sortIndex-U.sortIndex;return B!==0?B:R.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],h=1,f=null,d=3,_=!1,v=!1,E=!1,O=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=R)r(c),U.sortIndex=U.expirationTime,e(a,U);else break;U=n(c)}}function w(R){if(E=!1,g(R),!v)if(n(a)!==null)v=!0,Gt(b);else{var U=n(c);U!==null&&Kt(w,U.startTime-R)}}function b(R,U){v=!1,E&&(E=!1,m(A),A=-1),_=!0;var B=d;try{for(g(U),f=n(a);f!==null&&(!(f.expirationTime>U)||R&&!Oe());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,d=f.priorityLevel;var C=oe(f.expirationTime<=U);U=t.unstable_now(),typeof C=="function"?f.callback=C:f===n(a)&&r(a),g(U)}else r(a);f=n(a)}if(f!==null)var M=!0;else{var $=n(c);$!==null&&Kt(w,$.startTime-U),M=!1}return M}finally{f=null,d=B,_=!1}}var D=!1,N=null,A=-1,le=5,H=-1;function Oe(){return!(t.unstable_now()-H<le)}function Q(){if(N!==null){var R=t.unstable_now();H=R;var U=!0;try{U=N(!0,R)}finally{U?he():(D=!1,N=null)}}else D=!1}var he;if(typeof p=="function")he=function(){p(Q)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,mn=It.port2;It.port1.onmessage=Q,he=function(){mn.postMessage(null)}}else he=function(){O(Q,0)};function Gt(R){N=R,D||(D=!0,he())}function Kt(R,U){A=O(function(){R(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,Gt(b))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var B=d;d=U;try{return R()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,U){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=d;d=R;try{return U()}finally{d=B}},t.unstable_scheduleCallback=function(R,U,B){var oe=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?oe+B:oe):B=oe,R){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=B+C,R={id:h++,callback:U,priorityLevel:R,startTime:B,expirationTime:C,sortIndex:-1},B>oe?(R.sortIndex=B,e(c,R),n(a)===null&&R===n(c)&&(E?(m(A),A=-1):E=!0,Kt(w,B-oe))):(R.sortIndex=C,e(a,R),v||_||(v=!0,Gt(b))),R},t.unstable_shouldYield=Oe,t.unstable_wrapCallback=function(R){var U=d;return function(){var B=d;d=U;try{return R.apply(this,arguments)}finally{d=B}}}})(Jp);Xp.exports=Jp;var Wv=Xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv=L,ft=Wv;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zp=new Set,gs={};function Ir(t,e){ri(t,e),ri(t+"Capture",e)}function ri(t,e){for(gs[t]=e,t=0;t<e.length;t++)Zp.add(e[t])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=Object.prototype.hasOwnProperty,Vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yh={},_h={};function Hv(t){return oc.call(_h,t)?!0:oc.call(yh,t)?!1:Vv.test(t)?_h[t]=!0:(yh[t]=!0,!1)}function $v(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Gv(t,e,n,r){if(e===null||typeof e>"u"||$v(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ku=/[\-:]([a-z])/g;function Iu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ku,Iu);Ue[e]=new tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ku,Iu);Ue[e]=new tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ku,Iu);Ue[e]=new tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new tt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tu(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Gv(e,n,i,r)&&(n=null),r||i===null?Hv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fn=Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),bu=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),eg=Symbol.for("react.provider"),tg=Symbol.for("react.context"),Ru=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),Nu=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),ng=Symbol.for("react.offscreen"),vh=Symbol.iterator;function Ai(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,wa;function $i(t){if(wa===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wa=e&&e[1]||""}return`
`+wa+t}var Sa=!1;function Ea(t,e){if(!t||Sa)return"";Sa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Sa=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$i(t):""}function Kv(t){switch(t.tag){case 5:return $i(t.type);case 16:return $i("Lazy");case 13:return $i("Suspense");case 19:return $i("SuspenseList");case 0:case 2:case 15:return t=Ea(t.type,!1),t;case 11:return t=Ea(t.type.render,!1),t;case 1:return t=Ea(t.type,!0),t;default:return""}}function uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Or:return"Fragment";case Dr:return"Portal";case lc:return"Profiler";case bu:return"StrictMode";case ac:return"Suspense";case cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tg:return(t.displayName||"Context")+".Consumer";case eg:return(t._context.displayName||"Context")+".Provider";case Ru:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nu:return e=t.displayName||null,e!==null?e:uc(t.type)||"Memo";case vn:e=t._payload,t=t._init;try{return uc(t(e))}catch{}}return null}function Qv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uc(e);case 8:return e===bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qv(t){var e=rg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=qv(t))}function ig(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dc(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Bn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sg(t,e){e=e.checked,e!=null&&Tu(t,"checked",e,!1)}function hc(t,e){sg(t,e);var n=Bn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&fc(t,e.type,Bn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fc(t,e,n){(e!=="number"||qo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gi=Array.isArray;function Gr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Bn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Gi(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bn(n)}}function og(t,e){var n=Bn(e.value),r=Bn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var go,ag=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Yv=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(t){Yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xi[e]=Xi[t]})});function cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xi.hasOwnProperty(t)&&Xi[t]?(""+e).trim():e+"px"}function ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Xv=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mc(t,e){if(e){if(Xv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _c=null;function Pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vc=null,Kr=null,Qr=null;function Ch(t){if(t=qs(t)){if(typeof vc!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Gl(e),vc(t.stateNode,t.type,e))}}function dg(t){Kr?Qr?Qr.push(t):Qr=[t]:Kr=t}function hg(){if(Kr){var t=Kr,e=Qr;if(Qr=Kr=null,Ch(t),e)for(t=0;t<e.length;t++)Ch(e[t])}}function fg(t,e){return t(e)}function pg(){}var xa=!1;function gg(t,e,n){if(xa)return t(e,n);xa=!0;try{return fg(t,e,n)}finally{xa=!1,(Kr!==null||Qr!==null)&&(pg(),hg())}}function ys(t,e){var n=t.stateNode;if(n===null)return null;var r=Gl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var wc=!1;if(on)try{var Di={};Object.defineProperty(Di,"passive",{get:function(){wc=!0}}),window.addEventListener("test",Di,Di),window.removeEventListener("test",Di,Di)}catch{wc=!1}function Jv(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ji=!1,Yo=null,Xo=!1,Sc=null,Zv={onError:function(t){Ji=!0,Yo=t}};function e0(t,e,n,r,i,s,o,l,a){Ji=!1,Yo=null,Jv.apply(Zv,arguments)}function t0(t,e,n,r,i,s,o,l,a){if(e0.apply(this,arguments),Ji){if(Ji){var c=Yo;Ji=!1,Yo=null}else throw Error(x(198));Xo||(Xo=!0,Sc=c)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kh(t){if(Tr(t)!==t)throw Error(x(188))}function n0(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kh(i),t;if(s===r)return kh(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function yg(t){return t=n0(t),t!==null?_g(t):null}function _g(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_g(t);if(e!==null)return e;t=t.sibling}return null}var vg=ft.unstable_scheduleCallback,Ih=ft.unstable_cancelCallback,r0=ft.unstable_shouldYield,i0=ft.unstable_requestPaint,Ce=ft.unstable_now,s0=ft.unstable_getCurrentPriorityLevel,Au=ft.unstable_ImmediatePriority,wg=ft.unstable_UserBlockingPriority,Jo=ft.unstable_NormalPriority,o0=ft.unstable_LowPriority,Sg=ft.unstable_IdlePriority,Bl=null,Bt=null;function l0(t){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:u0,a0=Math.log,c0=Math.LN2;function u0(t){return t>>>=0,t===0?32:31-(a0(t)/c0|0)|0}var mo=64,yo=4194304;function Ki(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ki(l):(s&=o,s!==0&&(r=Ki(s)))}else o=n&~i,o!==0?r=Ki(o):s!==0&&(r=Ki(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ot(e),i=1<<n,r|=t[n],e&=~i;return r}function d0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ot(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=d0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Eg(){var t=mo;return mo<<=1,!(mo&4194240)&&(mo=64),t}function Ca(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ks(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ot(e),t[e]=n}function f0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Du(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cg,Ou,kg,Ig,Tg,xc=!1,_o=[],Rn=null,Nn=null,Pn=null,_s=new Map,vs=new Map,Sn=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Th(t,e){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":_s.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(e.pointerId)}}function Oi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=qs(e),e!==null&&Ou(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function g0(t,e,n,r,i){switch(e){case"focusin":return Rn=Oi(Rn,t,e,n,r,i),!0;case"dragenter":return Nn=Oi(Nn,t,e,n,r,i),!0;case"mouseover":return Pn=Oi(Pn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return _s.set(s,Oi(_s.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vs.set(s,Oi(vs.get(s)||null,t,e,n,r,i)),!0}return!1}function bg(t){var e=lr(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=mg(n),e!==null){t.blockedOn=e,Tg(t.priority,function(){kg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_c=r,n.target.dispatchEvent(r),_c=null}else return e=qs(n),e!==null&&Ou(e),t.blockedOn=n,!1;e.shift()}return!0}function bh(t,e,n){Oo(t)&&n.delete(e)}function m0(){xc=!1,Rn!==null&&Oo(Rn)&&(Rn=null),Nn!==null&&Oo(Nn)&&(Nn=null),Pn!==null&&Oo(Pn)&&(Pn=null),_s.forEach(bh),vs.forEach(bh)}function Li(t,e){t.blockedOn===e&&(t.blockedOn=null,xc||(xc=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,m0)))}function ws(t){function e(i){return Li(i,t)}if(0<_o.length){Li(_o[0],t);for(var n=1;n<_o.length;n++){var r=_o[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Rn!==null&&Li(Rn,t),Nn!==null&&Li(Nn,t),Pn!==null&&Li(Pn,t),_s.forEach(e),vs.forEach(e),n=0;n<Sn.length;n++)r=Sn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)bg(n),n.blockedOn===null&&Sn.shift()}var qr=fn.ReactCurrentBatchConfig,el=!0;function y0(t,e,n,r){var i=re,s=qr.transition;qr.transition=null;try{re=1,Lu(t,e,n,r)}finally{re=i,qr.transition=s}}function _0(t,e,n,r){var i=re,s=qr.transition;qr.transition=null;try{re=4,Lu(t,e,n,r)}finally{re=i,qr.transition=s}}function Lu(t,e,n,r){if(el){var i=Cc(t,e,n,r);if(i===null)Oa(t,e,r,tl,n),Th(t,r);else if(g0(i,t,e,n,r))r.stopPropagation();else if(Th(t,r),e&4&&-1<p0.indexOf(t)){for(;i!==null;){var s=qs(i);if(s!==null&&Cg(s),s=Cc(t,e,n,r),s===null&&Oa(t,e,r,tl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oa(t,e,r,null,n)}}var tl=null;function Cc(t,e,n,r){if(tl=null,t=Pu(r),t=lr(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function Rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s0()){case Au:return 1;case wg:return 4;case Jo:case o0:return 16;case Sg:return 536870912;default:return 16}default:return 16}}var In=null,Mu=null,Lo=null;function Ng(){if(Lo)return Lo;var t,e=Mu,n=e.length,r,i="value"in In?In.value:In.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Lo=i.slice(t,1<r?1-r:void 0)}function Mo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vo(){return!0}function Rh(){return!1}function gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?vo:Rh,this.isPropagationStopped=Rh,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),e}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ju=gt(vi),Qs=_e({},vi,{view:0,detail:0}),v0=gt(Qs),ka,Ia,Mi,Vl=_e({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mi&&(Mi&&t.type==="mousemove"?(ka=t.screenX-Mi.screenX,Ia=t.screenY-Mi.screenY):Ia=ka=0,Mi=t),ka)},movementY:function(t){return"movementY"in t?t.movementY:Ia}}),Nh=gt(Vl),w0=_e({},Vl,{dataTransfer:0}),S0=gt(w0),E0=_e({},Qs,{relatedTarget:0}),Ta=gt(E0),x0=_e({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=gt(x0),k0=_e({},vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),I0=gt(k0),T0=_e({},vi,{data:0}),Ph=gt(T0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N0[t])?!!e[t]:!1}function Fu(){return P0}var A0=_e({},Qs,{key:function(t){if(t.key){var e=b0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?Mo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D0=gt(A0),O0=_e({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ah=gt(O0),L0=_e({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),M0=gt(L0),j0=_e({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=gt(j0),z0=_e({},Vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=gt(z0),W0=[9,13,27,32],zu=on&&"CompositionEvent"in window,Zi=null;on&&"documentMode"in document&&(Zi=document.documentMode);var B0=on&&"TextEvent"in window&&!Zi,Pg=on&&(!zu||Zi&&8<Zi&&11>=Zi),Dh=" ",Oh=!1;function Ag(t,e){switch(t){case"keyup":return W0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function V0(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:(Oh=!0,Dh);case"textInput":return t=e.data,t===Dh&&Oh?null:t;default:return null}}function H0(t,e){if(Lr)return t==="compositionend"||!zu&&Ag(t,e)?(t=Ng(),Lo=Mu=In=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pg&&e.locale!=="ko"?null:e.data;default:return null}}var $0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$0[t.type]:e==="textarea"}function Og(t,e,n,r){dg(r),e=nl(e,"onChange"),0<e.length&&(n=new ju("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var es=null,Ss=null;function G0(t){$g(t,0)}function Hl(t){var e=Fr(t);if(ig(e))return t}function K0(t,e){if(t==="change")return e}var Lg=!1;if(on){var ba;if(on){var Ra="oninput"in document;if(!Ra){var Mh=document.createElement("div");Mh.setAttribute("oninput","return;"),Ra=typeof Mh.oninput=="function"}ba=Ra}else ba=!1;Lg=ba&&(!document.documentMode||9<document.documentMode)}function jh(){es&&(es.detachEvent("onpropertychange",Mg),Ss=es=null)}function Mg(t){if(t.propertyName==="value"&&Hl(Ss)){var e=[];Og(e,Ss,t,Pu(t)),gg(G0,e)}}function Q0(t,e,n){t==="focusin"?(jh(),es=e,Ss=n,es.attachEvent("onpropertychange",Mg)):t==="focusout"&&jh()}function q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(Ss)}function Y0(t,e){if(t==="click")return Hl(e)}function X0(t,e){if(t==="input"||t==="change")return Hl(e)}function J0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:J0;function Es(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oc.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function Fh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zh(t,e){var n=Fh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fh(n)}}function jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fg(){for(var t=window,e=qo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qo(t.document)}return e}function Uu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Z0(t){var e=Fg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jg(n.ownerDocument.documentElement,n)){if(r!==null&&Uu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=zh(n,s);var o=zh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var e1=on&&"documentMode"in document&&11>=document.documentMode,Mr=null,kc=null,ts=null,Ic=!1;function Uh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ic||Mr==null||Mr!==qo(r)||(r=Mr,"selectionStart"in r&&Uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&Es(ts,r)||(ts=r,r=nl(kc,"onSelect"),0<r.length&&(e=new ju("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mr)))}function wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var jr={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Na={},zg={};on&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function $l(t){if(Na[t])return Na[t];if(!jr[t])return t;var e=jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zg)return Na[t]=e[n];return t}var Ug=$l("animationend"),Wg=$l("animationiteration"),Bg=$l("animationstart"),Vg=$l("transitionend"),Hg=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(t,e){Hg.set(t,e),Ir(e,[t])}for(var Pa=0;Pa<Wh.length;Pa++){var Aa=Wh[Pa],t1=Aa.toLowerCase(),n1=Aa[0].toUpperCase()+Aa.slice(1);Kn(t1,"on"+n1)}Kn(Ug,"onAnimationEnd");Kn(Wg,"onAnimationIteration");Kn(Bg,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Vg,"onTransitionEnd");ri("onMouseEnter",["mouseout","mouseover"]);ri("onMouseLeave",["mouseout","mouseover"]);ri("onPointerEnter",["pointerout","pointerover"]);ri("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function Bh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,t0(r,e,void 0,t),t.currentTarget=null}function $g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Bh(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Bh(i,l,c),s=a}}}if(Xo)throw t=Sc,Xo=!1,Sc=null,t}function fe(t,e){var n=e[Pc];n===void 0&&(n=e[Pc]=new Set);var r=t+"__bubble";n.has(r)||(Gg(e,t,2,!1),n.add(r))}function Da(t,e,n){var r=0;e&&(r|=4),Gg(n,t,r,e)}var So="_reactListening"+Math.random().toString(36).slice(2);function xs(t){if(!t[So]){t[So]=!0,Zp.forEach(function(n){n!=="selectionchange"&&(r1.has(n)||Da(n,!1,t),Da(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[So]||(e[So]=!0,Da("selectionchange",!1,e))}}function Gg(t,e,n,r){switch(Rg(e)){case 1:var i=y0;break;case 4:i=_0;break;default:i=Lu}n=i.bind(null,e,n,t),i=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=lr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}gg(function(){var c=s,h=Pu(n),f=[];e:{var d=Hg.get(t);if(d!==void 0){var _=ju,v=t;switch(t){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":_=D0;break;case"focusin":v="focus",_=Ta;break;case"focusout":v="blur",_=Ta;break;case"beforeblur":case"afterblur":_=Ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=M0;break;case Ug:case Wg:case Bg:_=C0;break;case Vg:_=F0;break;case"scroll":_=v0;break;case"wheel":_=U0;break;case"copy":case"cut":case"paste":_=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ah}var E=(e&4)!==0,O=!E&&t==="scroll",m=E?d!==null?d+"Capture":null:d;E=[];for(var p=c,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=ys(p,m),w!=null&&E.push(Cs(p,w,g)))),O)break;p=p.return}0<E.length&&(d=new _(d,v,null,n,h),f.push({event:d,listeners:E}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",d&&n!==_c&&(v=n.relatedTarget||n.fromElement)&&(lr(v)||v[ln]))break e;if((_||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?lr(v):null,v!==null&&(O=Tr(v),v!==O||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(E=Nh,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=Ah,w="onPointerLeave",m="onPointerEnter",p="pointer"),O=_==null?d:Fr(_),g=v==null?d:Fr(v),d=new E(w,p+"leave",_,n,h),d.target=O,d.relatedTarget=g,w=null,lr(h)===c&&(E=new E(m,p+"enter",v,n,h),E.target=g,E.relatedTarget=O,w=E),O=w,_&&v)t:{for(E=_,m=v,p=0,g=E;g;g=Nr(g))p++;for(g=0,w=m;w;w=Nr(w))g++;for(;0<p-g;)E=Nr(E),p--;for(;0<g-p;)m=Nr(m),g--;for(;p--;){if(E===m||m!==null&&E===m.alternate)break t;E=Nr(E),m=Nr(m)}E=null}else E=null;_!==null&&Vh(f,d,_,E,!1),v!==null&&O!==null&&Vh(f,O,v,E,!0)}}e:{if(d=c?Fr(c):window,_=d.nodeName&&d.nodeName.toLowerCase(),_==="select"||_==="input"&&d.type==="file")var b=K0;else if(Lh(d))if(Lg)b=X0;else{b=q0;var D=Q0}else(_=d.nodeName)&&_.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=Y0);if(b&&(b=b(t,c))){Og(f,b,n,h);break e}D&&D(t,d,c),t==="focusout"&&(D=d._wrapperState)&&D.controlled&&d.type==="number"&&fc(d,"number",d.value)}switch(D=c?Fr(c):window,t){case"focusin":(Lh(D)||D.contentEditable==="true")&&(Mr=D,kc=c,ts=null);break;case"focusout":ts=kc=Mr=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,Uh(f,n,h);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":Uh(f,n,h)}var N;if(zu)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Lr?Ag(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Pg&&n.locale!=="ko"&&(Lr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Lr&&(N=Ng()):(In=h,Mu="value"in In?In.value:In.textContent,Lr=!0)),D=nl(c,A),0<D.length&&(A=new Ph(A,t,null,n,h),f.push({event:A,listeners:D}),N?A.data=N:(N=Dg(n),N!==null&&(A.data=N)))),(N=B0?V0(t,n):H0(t,n))&&(c=nl(c,"onBeforeInput"),0<c.length&&(h=new Ph("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=N))}$g(f,e)})}function Cs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ys(t,n),s!=null&&r.unshift(Cs(t,s,i)),s=ys(t,e),s!=null&&r.push(Cs(t,s,i))),t=t.return}return r}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=ys(n,s),a!=null&&o.unshift(Cs(n,a,l))):i||(a=ys(n,s),a!=null&&o.push(Cs(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var i1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function Hh(t){return(typeof t=="string"?t:""+t).replace(i1,`
`).replace(s1,"")}function Eo(t,e,n){if(e=Hh(e),Hh(t)!==e&&n)throw Error(x(425))}function rl(){}var Tc=null,bc=null;function Rc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,l1=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(t){return $h.resolve(null).then(t).catch(a1)}:Nc;function a1(t){setTimeout(function(){throw t})}function La(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ws(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ws(e)}function An(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+wi,ks="__reactProps$"+wi,ln="__reactContainer$"+wi,Pc="__reactEvents$"+wi,c1="__reactListeners$"+wi,u1="__reactHandles$"+wi;function lr(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ln]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gh(t);t!==null;){if(n=t[Wt])return n;t=Gh(t)}return e}t=n,n=t.parentNode}return null}function qs(t){return t=t[Wt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Gl(t){return t[ks]||null}var Ac=[],zr=-1;function Qn(t){return{current:t}}function pe(t){0>zr||(t.current=Ac[zr],Ac[zr]=null,zr--)}function de(t,e){zr++,Ac[zr]=t.current,t.current=e}var Vn={},Ke=Qn(Vn),ot=Qn(!1),pr=Vn;function ii(t,e){var n=t.type.contextTypes;if(!n)return Vn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function lt(t){return t=t.childContextTypes,t!=null}function il(){pe(ot),pe(Ke)}function Kh(t,e,n){if(Ke.current!==Vn)throw Error(x(168));de(Ke,e),de(ot,n)}function Kg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Qv(t)||"Unknown",i));return _e({},n,r)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vn,pr=Ke.current,de(Ke,t),de(ot,ot.current),!0}function Qh(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Kg(t,e,pr),r.__reactInternalMemoizedMergedChildContext=t,pe(ot),pe(Ke),de(Ke,t)):pe(ot),de(ot,n)}var qt=null,Kl=!1,Ma=!1;function Qg(t){qt===null?qt=[t]:qt.push(t)}function d1(t){Kl=!0,Qg(t)}function qn(){if(!Ma&&qt!==null){Ma=!0;var t=0,e=re;try{var n=qt;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}qt=null,Kl=!1}catch(i){throw qt!==null&&(qt=qt.slice(t+1)),vg(Au,qn),i}finally{re=e,Ma=!1}}return null}var Ur=[],Wr=0,ol=null,ll=0,yt=[],_t=0,gr=null,Xt=1,Jt="";function nr(t,e){Ur[Wr++]=ll,Ur[Wr++]=ol,ol=t,ll=e}function qg(t,e,n){yt[_t++]=Xt,yt[_t++]=Jt,yt[_t++]=gr,gr=t;var r=Xt;t=Jt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xt=1<<32-Ot(e)+i|n<<i|r,Jt=s+t}else Xt=1<<s|n<<i|r,Jt=t}function Wu(t){t.return!==null&&(nr(t,1),qg(t,1,0))}function Bu(t){for(;t===ol;)ol=Ur[--Wr],Ur[Wr]=null,ll=Ur[--Wr],Ur[Wr]=null;for(;t===gr;)gr=yt[--_t],yt[_t]=null,Jt=yt[--_t],yt[_t]=null,Xt=yt[--_t],yt[_t]=null}var ht=null,dt=null,ge=!1,Nt=null;function Yg(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ht=t,dt=An(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ht=t,dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gr!==null?{id:Xt,overflow:Jt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ht=t,dt=null,!0):!1;default:return!1}}function Dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Oc(t){if(ge){var e=dt;if(e){var n=e;if(!qh(t,e)){if(Dc(t))throw Error(x(418));e=An(n.nextSibling);var r=ht;e&&qh(t,e)?Yg(r,n):(t.flags=t.flags&-4097|2,ge=!1,ht=t)}}else{if(Dc(t))throw Error(x(418));t.flags=t.flags&-4097|2,ge=!1,ht=t}}}function Yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ht=t}function xo(t){if(t!==ht)return!1;if(!ge)return Yh(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rc(t.type,t.memoizedProps)),e&&(e=dt)){if(Dc(t))throw Xg(),Error(x(418));for(;e;)Yg(t,e),e=An(e.nextSibling)}if(Yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dt=An(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dt=null}}else dt=ht?An(t.stateNode.nextSibling):null;return!0}function Xg(){for(var t=dt;t;)t=An(t.nextSibling)}function si(){dt=ht=null,ge=!1}function Vu(t){Nt===null?Nt=[t]:Nt.push(t)}var h1=fn.ReactCurrentBatchConfig;function ji(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Co(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xh(t){var e=t._init;return e(t._payload)}function Jg(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Mn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=Va(g,m.mode,w),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,w){var b=g.type;return b===Or?h(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===vn&&Xh(b)===p.type)?(w=i(p,g.props),w.ref=ji(m,p,g),w.return=m,w):(w=Vo(g.type,g.key,g.props,null,m.mode,w),w.ref=ji(m,p,g),w.return=m,w)}function c(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ha(g,m.mode,w),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function h(m,p,g,w,b){return p===null||p.tag!==7?(p=fr(g,m.mode,w,b),p.return=m,p):(p=i(p,g),p.return=m,p)}function f(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Va(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case fo:return g=Vo(p.type,p.key,p.props,null,m.mode,g),g.ref=ji(m,null,p),g.return=m,g;case Dr:return p=Ha(p,m.mode,g),p.return=m,p;case vn:var w=p._init;return f(m,w(p._payload),g)}if(Gi(p)||Ai(p))return p=fr(p,m.mode,g,null),p.return=m,p;Co(m,p)}return null}function d(m,p,g,w){var b=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fo:return g.key===b?a(m,p,g,w):null;case Dr:return g.key===b?c(m,p,g,w):null;case vn:return b=g._init,d(m,p,b(g._payload),w)}if(Gi(g)||Ai(g))return b!==null?null:h(m,p,g,w,null);Co(m,g)}return null}function _(m,p,g,w,b){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case fo:return m=m.get(w.key===null?g:w.key)||null,a(p,m,w,b);case Dr:return m=m.get(w.key===null?g:w.key)||null,c(p,m,w,b);case vn:var D=w._init;return _(m,p,g,D(w._payload),b)}if(Gi(w)||Ai(w))return m=m.get(g)||null,h(p,m,w,b,null);Co(p,w)}return null}function v(m,p,g,w){for(var b=null,D=null,N=p,A=p=0,le=null;N!==null&&A<g.length;A++){N.index>A?(le=N,N=null):le=N.sibling;var H=d(m,N,g[A],w);if(H===null){N===null&&(N=le);break}t&&N&&H.alternate===null&&e(m,N),p=s(H,p,A),D===null?b=H:D.sibling=H,D=H,N=le}if(A===g.length)return n(m,N),ge&&nr(m,A),b;if(N===null){for(;A<g.length;A++)N=f(m,g[A],w),N!==null&&(p=s(N,p,A),D===null?b=N:D.sibling=N,D=N);return ge&&nr(m,A),b}for(N=r(m,N);A<g.length;A++)le=_(N,m,A,g[A],w),le!==null&&(t&&le.alternate!==null&&N.delete(le.key===null?A:le.key),p=s(le,p,A),D===null?b=le:D.sibling=le,D=le);return t&&N.forEach(function(Oe){return e(m,Oe)}),ge&&nr(m,A),b}function E(m,p,g,w){var b=Ai(g);if(typeof b!="function")throw Error(x(150));if(g=b.call(g),g==null)throw Error(x(151));for(var D=b=null,N=p,A=p=0,le=null,H=g.next();N!==null&&!H.done;A++,H=g.next()){N.index>A?(le=N,N=null):le=N.sibling;var Oe=d(m,N,H.value,w);if(Oe===null){N===null&&(N=le);break}t&&N&&Oe.alternate===null&&e(m,N),p=s(Oe,p,A),D===null?b=Oe:D.sibling=Oe,D=Oe,N=le}if(H.done)return n(m,N),ge&&nr(m,A),b;if(N===null){for(;!H.done;A++,H=g.next())H=f(m,H.value,w),H!==null&&(p=s(H,p,A),D===null?b=H:D.sibling=H,D=H);return ge&&nr(m,A),b}for(N=r(m,N);!H.done;A++,H=g.next())H=_(N,m,A,H.value,w),H!==null&&(t&&H.alternate!==null&&N.delete(H.key===null?A:H.key),p=s(H,p,A),D===null?b=H:D.sibling=H,D=H);return t&&N.forEach(function(Q){return e(m,Q)}),ge&&nr(m,A),b}function O(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===Or&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case fo:e:{for(var b=g.key,D=p;D!==null;){if(D.key===b){if(b=g.type,b===Or){if(D.tag===7){n(m,D.sibling),p=i(D,g.props.children),p.return=m,m=p;break e}}else if(D.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===vn&&Xh(b)===D.type){n(m,D.sibling),p=i(D,g.props),p.ref=ji(m,D,g),p.return=m,m=p;break e}n(m,D);break}else e(m,D);D=D.sibling}g.type===Or?(p=fr(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=Vo(g.type,g.key,g.props,null,m.mode,w),w.ref=ji(m,p,g),w.return=m,m=w)}return o(m);case Dr:e:{for(D=g.key;p!==null;){if(p.key===D)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Ha(g,m.mode,w),p.return=m,m=p}return o(m);case vn:return D=g._init,O(m,p,D(g._payload),w)}if(Gi(g))return v(m,p,g,w);if(Ai(g))return E(m,p,g,w);Co(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Va(g,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return O}var oi=Jg(!0),Zg=Jg(!1),al=Qn(null),cl=null,Br=null,Hu=null;function $u(){Hu=Br=cl=null}function Gu(t){var e=al.current;pe(al),t._currentValue=e}function Lc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yr(t,e){cl=t,Hu=Br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(it=!0),t.firstContext=null)}function Et(t){var e=t._currentValue;if(Hu!==t)if(t={context:t,memoizedValue:e,next:null},Br===null){if(cl===null)throw Error(x(308));Br=t,cl.dependencies={lanes:0,firstContext:t}}else Br=Br.next=t;return e}var ar=null;function Ku(t){ar===null?ar=[t]:ar.push(t)}function em(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ku(e)):(n.next=i.next,i.next=n),e.interleaved=n,an(t,r)}function an(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wn=!1;function Qu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Dn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,an(t,n)}return i=r.interleaved,i===null?(e.next=e,Ku(r)):(e.next=i.next,i.next=e),r.interleaved=e,an(t,n)}function jo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Du(t,n)}}function Jh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,r){var i=t.updateQueue;wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=a))}if(s!==null){var f=i.baseState;o=0,h=c=a=null,l=s;do{var d=l.lane,_=l.eventTime;if((r&d)===d){h!==null&&(h=h.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,E=l;switch(d=e,_=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){f=v.call(_,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,d=typeof v=="function"?v.call(_,f,d):v,d==null)break e;f=_e({},f,d);break e;case 2:wn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else _={eventTime:_,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=_,a=f):h=h.next=_,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(h===null&&(a=f),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);yr|=o,t.lanes=o,t.memoizedState=f}}function Zh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var Ys={},Vt=Qn(Ys),Is=Qn(Ys),Ts=Qn(Ys);function cr(t){if(t===Ys)throw Error(x(174));return t}function qu(t,e){switch(de(Ts,e),de(Is,t),de(Vt,Ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gc(e,t)}pe(Vt),de(Vt,e)}function li(){pe(Vt),pe(Is),pe(Ts)}function nm(t){cr(Ts.current);var e=cr(Vt.current),n=gc(e,t.type);e!==n&&(de(Is,t),de(Vt,n))}function Yu(t){Is.current===t&&(pe(Vt),pe(Is))}var me=Qn(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ja=[];function Xu(){for(var t=0;t<ja.length;t++)ja[t]._workInProgressVersionPrimary=null;ja.length=0}var Fo=fn.ReactCurrentDispatcher,Fa=fn.ReactCurrentBatchConfig,mr=0,ye=null,Ie=null,Pe=null,hl=!1,ns=!1,bs=0,f1=0;function He(){throw Error(x(321))}function Ju(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function Zu(t,e,n,r,i,s){if(mr=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fo.current=t===null||t.memoizedState===null?y1:_1,t=n(r,i),ns){s=0;do{if(ns=!1,bs=0,25<=s)throw Error(x(301));s+=1,Pe=Ie=null,e.updateQueue=null,Fo.current=v1,t=n(r,i)}while(ns)}if(Fo.current=fl,e=Ie!==null&&Ie.next!==null,mr=0,Pe=Ie=ye=null,hl=!1,e)throw Error(x(300));return t}function ed(){var t=bs!==0;return bs=0,t}function Ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ye.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function xt(){if(Ie===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Pe===null?ye.memoizedState:Pe.next;if(e!==null)Pe=e,Ie=t;else{if(t===null)throw Error(x(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Pe===null?ye.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function Rs(t,e){return typeof e=="function"?e(t):e}function za(t){var e=xt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var h=c.lane;if((mr&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=f,o=r):a=a.next=f,ye.lanes|=h,yr|=h}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,Ft(r,e.memoizedState)||(it=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,yr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ua(t){var e=xt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(it=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function rm(){}function im(t,e){var n=ye,r=xt(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,it=!0),r=r.queue,td(lm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Ns(9,om.bind(null,n,r,i,e),void 0,null),De===null)throw Error(x(349));mr&30||sm(n,e,i)}return i}function sm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function om(t,e,n,r){e.value=n,e.getSnapshot=r,am(e)&&cm(t)}function lm(t,e,n){return n(function(){am(e)&&cm(t)})}function am(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function cm(t){var e=an(t,1);e!==null&&Lt(e,t,1,-1)}function ef(t){var e=Ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:t},e.queue=t,t=t.dispatch=m1.bind(null,ye,t),[e.memoizedState,t]}function Ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function um(){return xt().memoizedState}function zo(t,e,n,r){var i=Ut();ye.flags|=t,i.memoizedState=Ns(1|e,n,void 0,r===void 0?null:r)}function Ql(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&Ju(r,o.deps)){i.memoizedState=Ns(e,n,s,r);return}}ye.flags|=t,i.memoizedState=Ns(1|e,n,s,r)}function tf(t,e){return zo(8390656,8,t,e)}function td(t,e){return Ql(2048,8,t,e)}function dm(t,e){return Ql(4,2,t,e)}function hm(t,e){return Ql(4,4,t,e)}function fm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pm(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,fm.bind(null,e,t),n)}function nd(){}function gm(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ju(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function mm(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ju(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ym(t,e,n){return mr&21?(Ft(n,e)||(n=Eg(),ye.lanes|=n,yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,it=!0),t.memoizedState=n)}function p1(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Fa.transition;Fa.transition={};try{t(!1),e()}finally{re=n,Fa.transition=r}}function _m(){return xt().memoizedState}function g1(t,e,n){var r=Ln(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vm(t))wm(e,n);else if(n=em(t,e,n,r),n!==null){var i=Xe();Lt(n,t,r,i),Sm(n,e,r)}}function m1(t,e,n){var r=Ln(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vm(t))wm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,o)){var a=e.interleaved;a===null?(i.next=i,Ku(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=em(t,e,i,r),n!==null&&(i=Xe(),Lt(n,t,r,i),Sm(n,e,r))}}function vm(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function wm(t,e){ns=hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Du(t,n)}}var fl={readContext:Et,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},y1={readContext:Et,useCallback:function(t,e){return Ut().memoizedState=[t,e===void 0?null:e],t},useContext:Et,useEffect:tf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zo(4194308,4,fm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return zo(4,2,t,e)},useMemo:function(t,e){var n=Ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=g1.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=Ut();return t={current:t},e.memoizedState=t},useState:ef,useDebugValue:nd,useDeferredValue:function(t){return Ut().memoizedState=t},useTransition:function(){var t=ef(!1),e=t[0];return t=p1.bind(null,t[1]),Ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=Ut();if(ge){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),De===null)throw Error(x(349));mr&30||sm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,tf(lm.bind(null,r,s,t),[t]),r.flags|=2048,Ns(9,om.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ut(),e=De.identifierPrefix;if(ge){var n=Jt,r=Xt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=f1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_1={readContext:Et,useCallback:gm,useContext:Et,useEffect:td,useImperativeHandle:pm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:mm,useReducer:za,useRef:um,useState:function(){return za(Rs)},useDebugValue:nd,useDeferredValue:function(t){var e=xt();return ym(e,Ie.memoizedState,t)},useTransition:function(){var t=za(Rs)[0],e=xt().memoizedState;return[t,e]},useMutableSource:rm,useSyncExternalStore:im,useId:_m,unstable_isNewReconciler:!1},v1={readContext:Et,useCallback:gm,useContext:Et,useEffect:td,useImperativeHandle:pm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:mm,useReducer:Ua,useRef:um,useState:function(){return Ua(Rs)},useDebugValue:nd,useDeferredValue:function(t){var e=xt();return Ie===null?e.memoizedState=t:ym(e,Ie.memoizedState,t)},useTransition:function(){var t=Ua(Rs)[0],e=xt().memoizedState;return[t,e]},useMutableSource:rm,useSyncExternalStore:im,useId:_m,unstable_isNewReconciler:!1};function bt(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=Ln(t),s=nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Dn(t,s,i),e!==null&&(Lt(e,t,i,r),jo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Xe(),i=Ln(t),s=nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Dn(t,s,i),e!==null&&(Lt(e,t,i,r),jo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xe(),r=Ln(t),i=nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Dn(t,i,r),e!==null&&(Lt(e,t,r,n),jo(e,t,r))}};function nf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Es(n,r)||!Es(i,s):!0}function Em(t,e,n){var r=!1,i=Vn,s=e.contextType;return typeof s=="object"&&s!==null?s=Et(s):(i=lt(e)?pr:Ke.current,r=e.contextTypes,s=(r=r!=null)?ii(t,i):Vn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function rf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function jc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Qu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Et(s):(s=lt(e)?pr:Ke.current,i.context=ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ql.enqueueReplaceState(i,i.state,null),ul(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ai(t,e){try{var n="",r=e;do n+=Kv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Wa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var w1=typeof WeakMap=="function"?WeakMap:Map;function xm(t,e,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,Qc=r),Fc(t,e)},n}function Cm(t,e,n){n=nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Fc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fc(t,e),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new w1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=O1.bind(null,t,e,n),e.then(t,t))}function of(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nn(-1,1),e.tag=2,Dn(n,e,1))),n.lanes|=1),t)}var S1=fn.ReactCurrentOwner,it=!1;function qe(t,e,n,r){e.child=t===null?Zg(e,null,n,r):oi(e,t.child,n,r)}function af(t,e,n,r,i){n=n.render;var s=e.ref;return Yr(e,i),r=Zu(t,e,n,r,s,i),n=ed(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(ge&&n&&Wu(e),e.flags|=1,qe(t,e,r,i),e.child)}function cf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,km(t,e,s,r,i)):(t=Vo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Es,n(o,r)&&t.ref===e.ref)return cn(t,e,i)}return e.flags|=1,t=Mn(s,r),t.ref=e.ref,t.return=e,e.child=t}function km(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Es(s,r)&&t.ref===e.ref)if(it=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(it=!0);else return e.lanes=t.lanes,cn(t,e,i)}return zc(t,e,n,r,i)}function Im(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Hr,ct),ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Hr,ct),ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Hr,ct),ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Hr,ct),ct|=r;return qe(t,e,i,n),e.child}function Tm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zc(t,e,n,r,i){var s=lt(n)?pr:Ke.current;return s=ii(e,s),Yr(e,i),n=Zu(t,e,n,r,s,i),r=ed(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,cn(t,e,i)):(ge&&r&&Wu(e),e.flags|=1,qe(t,e,n,i),e.child)}function uf(t,e,n,r,i){if(lt(n)){var s=!0;sl(e)}else s=!1;if(Yr(e,i),e.stateNode===null)Uo(t,e),Em(e,n,r),jc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Et(c):(c=lt(n)?pr:Ke.current,c=ii(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&rf(e,o,r,c),wn=!1;var d=e.memoizedState;o.state=d,ul(e,r,o,i),a=e.memoizedState,l!==r||d!==a||ot.current||wn?(typeof h=="function"&&(Mc(e,n,h,r),a=e.memoizedState),(l=wn||nf(e,n,l,r,d,a,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tm(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:bt(e.type,l),o.props=c,f=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Et(a):(a=lt(n)?pr:Ke.current,a=ii(e,a));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||d!==a)&&rf(e,o,r,a),wn=!1,d=e.memoizedState,o.state=d,ul(e,r,o,i);var v=e.memoizedState;l!==f||d!==v||ot.current||wn?(typeof _=="function"&&(Mc(e,n,_,r),v=e.memoizedState),(c=wn||nf(e,n,c,r,d,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Uc(t,e,n,r,s,i)}function Uc(t,e,n,r,i,s){Tm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qh(e,n,!1),cn(t,e,s);r=e.stateNode,S1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=oi(e,t.child,null,s),e.child=oi(e,null,l,s)):qe(t,e,l,s),e.memoizedState=r.state,i&&Qh(e,n,!0),e.child}function bm(t){var e=t.stateNode;e.pendingContext?Kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kh(t,e.context,!1),qu(t,e.containerInfo)}function df(t,e,n,r,i){return si(),Vu(i),e.flags|=256,qe(t,e,n,r),e.child}var Wc={dehydrated:null,treeContext:null,retryLane:0};function Bc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rm(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(me,i&1),t===null)return Oc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,r,0,null),t=fr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bc(n),e.memoizedState=Wc,t):rd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return E1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Mn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Mn(l,s):(s=fr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wc,r}return s=t.child,t=s.sibling,r=Mn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rd(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ko(t,e,n,r){return r!==null&&Vu(r),oi(e,t.child,null,n),t=rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function E1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Wa(Error(x(422))),ko(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Jl({mode:"visible",children:r.children},i,0,null),s=fr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&oi(e,t.child,null,o),e.child.memoizedState=Bc(o),e.memoizedState=Wc,s);if(!(e.mode&1))return ko(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(x(419)),r=Wa(s,r,void 0),ko(t,e,o,r)}if(l=(o&t.childLanes)!==0,it||l){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,an(t,i),Lt(r,t,i,-1))}return cd(),r=Wa(Error(x(421))),ko(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=L1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dt=An(i.nextSibling),ht=e,ge=!0,Nt=null,t!==null&&(yt[_t++]=Xt,yt[_t++]=Jt,yt[_t++]=gr,Xt=t.id,Jt=t.overflow,gr=e),e=rd(e,r.children),e.flags|=4096,e)}function hf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Lc(t.return,e,n)}function Ba(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Nm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(qe(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hf(t,n,e);else if(t.tag===19)hf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ba(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ba(e,!0,n,null,s);break;case"together":Ba(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Uo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Mn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function x1(t,e,n){switch(e.tag){case 3:bm(e),si();break;case 5:nm(e);break;case 1:lt(e.type)&&sl(e);break;case 4:qu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(al,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?Rm(t,e,n):(de(me,me.current&1),t=cn(t,e,n),t!==null?t.sibling:null);de(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Nm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,Im(t,e,n)}return cn(t,e,n)}var Pm,Vc,Am,Dm;Pm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vc=function(){};Am=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,cr(Vt.current);var s=null;switch(n){case"input":i=dc(t,i),r=dc(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=pc(t,i),r=pc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=rl)}mc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(gs.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(gs.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&fe("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Dm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fi(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function C1(t,e,n){var r=e.pendingProps;switch(Bu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return lt(e.type)&&il(),$e(e),null;case 3:return r=e.stateNode,li(),pe(ot),pe(Ke),Xu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nt!==null&&(Xc(Nt),Nt=null))),Vc(t,e),$e(e),null;case 5:Yu(e);var i=cr(Ts.current);if(n=e.type,t!==null&&e.stateNode!=null)Am(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return $e(e),null}if(t=cr(Vt.current),xo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[ks]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Qi.length;i++)fe(Qi[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":wh(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":Eh(r,s),fe("invalid",r)}mc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Eo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Eo(r.textContent,l,t),i=["children",""+l]):gs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":po(r),Sh(r,s,!0);break;case"textarea":po(r),xh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[ks]=r,Pm(t,e,!1,!1),e.stateNode=t;e:{switch(o=yc(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qi.length;i++)fe(Qi[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":wh(t,r),i=dc(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),fe("invalid",t);break;case"textarea":Eh(t,r),i=pc(t,r),fe("invalid",t);break;default:i=r}mc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?ug(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&ag(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ms(t,a):typeof a=="number"&&ms(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(gs.hasOwnProperty(s)?a!=null&&s==="onScroll"&&fe("scroll",t):a!=null&&Tu(t,s,a,o))}switch(n){case"input":po(t),Sh(t,r,!1);break;case"textarea":po(t),xh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Bn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)Dm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=cr(Ts.current),cr(Vt.current),xo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(s=r.nodeValue!==n)&&(t=ht,t!==null))switch(t.tag){case 3:Eo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return $e(e),null;case 13:if(pe(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&dt!==null&&e.mode&1&&!(e.flags&128))Xg(),si(),e.flags|=98560,s=!1;else if(s=xo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Wt]=e}else si(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else Nt!==null&&(Xc(Nt),Nt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Re===0&&(Re=3):cd())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return li(),Vc(t,e),t===null&&xs(e.stateNode.containerInfo),$e(e),null;case 10:return Gu(e.type._context),$e(e),null;case 17:return lt(e.type)&&il(),$e(e),null;case 19:if(pe(me),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fi(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=128,Fi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>ci&&(e.flags|=128,r=!0,Fi(s,!1),e.lanes=4194304)}else{if(!r)if(t=dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return $e(e),null}else 2*Ce()-s.renderingStartTime>ci&&n!==1073741824&&(e.flags|=128,r=!0,Fi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=me.current,de(me,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return ad(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ct&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function k1(t,e){switch(Bu(e),e.tag){case 1:return lt(e.type)&&il(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return li(),pe(ot),pe(Ke),Xu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yu(e),null;case 13:if(pe(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(me),null;case 4:return li(),null;case 10:return Gu(e.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var Io=!1,Ge=!1,I1=typeof WeakSet=="function"?WeakSet:Set,P=null;function Vr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function Hc(t,e,n){try{n()}catch(r){we(t,e,r)}}var ff=!1;function T1(t,e){if(Tc=el,t=Fg(),Uu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)d=f,f=_;for(;;){if(f===t)break t;if(d===n&&++c===i&&(l=o),d===s&&++h===r&&(a=o),(_=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(bc={focusedElem:t,selectionRange:n},el=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,O=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?E:bt(e.type,E),O);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(w){we(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return v=ff,ff=!1,v}function rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hc(e,n,s)}i=i.next}while(i!==r)}}function Yl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $c(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Om(t){var e=t.alternate;e!==null&&(t.alternate=null,Om(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[ks],delete e[Pc],delete e[c1],delete e[u1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lm(t){return t.tag===5||t.tag===3||t.tag===4}function pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rl));else if(r!==4&&(t=t.child,t!==null))for(Gc(t,e,n),t=t.sibling;t!==null;)Gc(t,e,n),t=t.sibling}function Kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Kc(t,e,n),t=t.sibling;t!==null;)Kc(t,e,n),t=t.sibling}var Me=null,Rt=!1;function yn(t,e,n){for(n=n.child;n!==null;)Mm(t,e,n),n=n.sibling}function Mm(t,e,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:Ge||Vr(n,e);case 6:var r=Me,i=Rt;Me=null,yn(t,e,n),Me=r,Rt=i,Me!==null&&(Rt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Rt?(t=Me,n=n.stateNode,t.nodeType===8?La(t.parentNode,n):t.nodeType===1&&La(t,n),ws(t)):La(Me,n.stateNode));break;case 4:r=Me,i=Rt,Me=n.stateNode.containerInfo,Rt=!0,yn(t,e,n),Me=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hc(n,e,o),i=i.next}while(i!==r)}yn(t,e,n);break;case 1:if(!Ge&&(Vr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,e,l)}yn(t,e,n);break;case 21:yn(t,e,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,yn(t,e,n),Ge=r):yn(t,e,n);break;default:yn(t,e,n)}}function gf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I1),e.forEach(function(r){var i=M1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Rt=!1;break e;case 3:Me=l.stateNode.containerInfo,Rt=!0;break e;case 4:Me=l.stateNode.containerInfo,Rt=!0;break e}l=l.return}if(Me===null)throw Error(x(160));Mm(s,o,i),Me=null,Rt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){we(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jm(e,t),e=e.sibling}function jm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tt(e,t),zt(t),r&4){try{rs(3,t,t.return),Yl(3,t)}catch(E){we(t,t.return,E)}try{rs(5,t,t.return)}catch(E){we(t,t.return,E)}}break;case 1:Tt(e,t),zt(t),r&512&&n!==null&&Vr(n,n.return);break;case 5:if(Tt(e,t),zt(t),r&512&&n!==null&&Vr(n,n.return),t.flags&32){var i=t.stateNode;try{ms(i,"")}catch(E){we(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&sg(i,s),yc(l,o);var c=yc(l,s);for(o=0;o<a.length;o+=2){var h=a[o],f=a[o+1];h==="style"?ug(i,f):h==="dangerouslySetInnerHTML"?ag(i,f):h==="children"?ms(i,f):Tu(i,h,f,c)}switch(l){case"input":hc(i,s);break;case"textarea":og(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Gr(i,!!s.multiple,_,!1):d!==!!s.multiple&&(s.defaultValue!=null?Gr(i,!!s.multiple,s.defaultValue,!0):Gr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ks]=s}catch(E){we(t,t.return,E)}}break;case 6:if(Tt(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){we(t,t.return,E)}}break;case 3:if(Tt(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(e.containerInfo)}catch(E){we(t,t.return,E)}break;case 4:Tt(e,t),zt(t);break;case 13:Tt(e,t),zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(od=Ce())),r&4&&gf(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ge=(c=Ge)||h,Tt(e,t),Ge=c):Tt(e,t),zt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(P=t,h=t.child;h!==null;){for(f=P=h;P!==null;){switch(d=P,_=d.child,d.tag){case 0:case 11:case 14:case 15:rs(4,d,d.return);break;case 1:Vr(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){we(r,n,E)}}break;case 5:Vr(d,d.return);break;case 22:if(d.memoizedState!==null){yf(f);continue}}_!==null?(_.return=d,P=_):yf(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=cg("display",o))}catch(E){we(t,t.return,E)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(E){we(t,t.return,E)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Tt(e,t),zt(t),r&4&&gf(t);break;case 21:break;default:Tt(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Lm(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ms(i,""),r.flags&=-33);var s=pf(t);Kc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=pf(t);Gc(t,l,o);break;default:throw Error(x(161))}}catch(a){we(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function b1(t,e,n){P=t,Fm(t)}function Fm(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Io;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ge;l=Io;var c=Ge;if(Io=o,(Ge=a)&&!c)for(P=i;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?_f(i):a!==null?(a.return=o,P=a):_f(i);for(;s!==null;)P=s,Fm(s),s=s.sibling;P=i,Io=l,Ge=c}mf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,P=s):mf(t)}}function mf(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ge||Yl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Zh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ws(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Ge||e.flags&512&&$c(e)}catch(d){we(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function yf(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function _f(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yl(4,e)}catch(a){we(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){we(e,i,a)}}var s=e.return;try{$c(e)}catch(a){we(e,s,a)}break;case 5:var o=e.return;try{$c(e)}catch(a){we(e,o,a)}}}catch(a){we(e,e.return,a)}if(e===t){P=null;break}var l=e.sibling;if(l!==null){l.return=e.return,P=l;break}P=e.return}}var R1=Math.ceil,pl=fn.ReactCurrentDispatcher,id=fn.ReactCurrentOwner,St=fn.ReactCurrentBatchConfig,J=0,De=null,ke=null,ze=0,ct=0,Hr=Qn(0),Re=0,Ps=null,yr=0,Xl=0,sd=0,is=null,rt=null,od=0,ci=1/0,Qt=null,gl=!1,Qc=null,On=null,To=!1,Tn=null,ml=0,ss=0,qc=null,Wo=-1,Bo=0;function Xe(){return J&6?Ce():Wo!==-1?Wo:Wo=Ce()}function Ln(t){return t.mode&1?J&2&&ze!==0?ze&-ze:h1.transition!==null?(Bo===0&&(Bo=Eg()),Bo):(t=re,t!==0||(t=window.event,t=t===void 0?16:Rg(t.type)),t):1}function Lt(t,e,n,r){if(50<ss)throw ss=0,qc=null,Error(x(185));Ks(t,n,r),(!(J&2)||t!==De)&&(t===De&&(!(J&2)&&(Xl|=n),Re===4&&En(t,ze)),at(t,r),n===1&&J===0&&!(e.mode&1)&&(ci=Ce()+500,Kl&&qn()))}function at(t,e){var n=t.callbackNode;h0(t,e);var r=Zo(t,t===De?ze:0);if(r===0)n!==null&&Ih(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ih(n),e===1)t.tag===0?d1(vf.bind(null,t)):Qg(vf.bind(null,t)),l1(function(){!(J&6)&&qn()}),n=null;else{switch(xg(r)){case 1:n=Au;break;case 4:n=wg;break;case 16:n=Jo;break;case 536870912:n=Sg;break;default:n=Jo}n=Gm(n,zm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zm(t,e){if(Wo=-1,Bo=0,J&6)throw Error(x(327));var n=t.callbackNode;if(Xr()&&t.callbackNode!==n)return null;var r=Zo(t,t===De?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=yl(t,r);else{e=r;var i=J;J|=2;var s=Wm();(De!==t||ze!==e)&&(Qt=null,ci=Ce()+500,hr(t,e));do try{A1();break}catch(l){Um(t,l)}while(!0);$u(),pl.current=s,J=i,ke!==null?e=0:(De=null,ze=0,e=Re)}if(e!==0){if(e===2&&(i=Ec(t),i!==0&&(r=i,e=Yc(t,i))),e===1)throw n=Ps,hr(t,0),En(t,r),at(t,Ce()),n;if(e===6)En(t,r);else{if(i=t.current.alternate,!(r&30)&&!N1(i)&&(e=yl(t,r),e===2&&(s=Ec(t),s!==0&&(r=s,e=Yc(t,s))),e===1))throw n=Ps,hr(t,0),En(t,r),at(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:rr(t,rt,Qt);break;case 3:if(En(t,r),(r&130023424)===r&&(e=od+500-Ce(),10<e)){if(Zo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nc(rr.bind(null,t,rt,Qt),e);break}rr(t,rt,Qt);break;case 4:if(En(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R1(r/1960))-r,10<r){t.timeoutHandle=Nc(rr.bind(null,t,rt,Qt),r);break}rr(t,rt,Qt);break;case 5:rr(t,rt,Qt);break;default:throw Error(x(329))}}}return at(t,Ce()),t.callbackNode===n?zm.bind(null,t):null}function Yc(t,e){var n=is;return t.current.memoizedState.isDehydrated&&(hr(t,e).flags|=256),t=yl(t,e),t!==2&&(e=rt,rt=n,e!==null&&Xc(e)),t}function Xc(t){rt===null?rt=t:rt.push.apply(rt,t)}function N1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function En(t,e){for(e&=~sd,e&=~Xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ot(e),r=1<<n;t[n]=-1,e&=~r}}function vf(t){if(J&6)throw Error(x(327));Xr();var e=Zo(t,0);if(!(e&1))return at(t,Ce()),null;var n=yl(t,e);if(t.tag!==0&&n===2){var r=Ec(t);r!==0&&(e=r,n=Yc(t,r))}if(n===1)throw n=Ps,hr(t,0),En(t,e),at(t,Ce()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,rr(t,rt,Qt),at(t,Ce()),null}function ld(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(ci=Ce()+500,Kl&&qn())}}function _r(t){Tn!==null&&Tn.tag===0&&!(J&6)&&Xr();var e=J;J|=1;var n=St.transition,r=re;try{if(St.transition=null,re=1,t)return t()}finally{re=r,St.transition=n,J=e,!(J&6)&&qn()}}function ad(){ct=Hr.current,pe(Hr)}function hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,o1(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Bu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:li(),pe(ot),pe(Ke),Xu();break;case 5:Yu(r);break;case 4:li();break;case 13:pe(me);break;case 19:pe(me);break;case 10:Gu(r.type._context);break;case 22:case 23:ad()}n=n.return}if(De=t,ke=t=Mn(t.current,null),ze=ct=e,Re=0,Ps=null,sd=Xl=yr=0,rt=is=null,ar!==null){for(e=0;e<ar.length;e++)if(n=ar[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ar=null}return t}function Um(t,e){do{var n=ke;try{if($u(),Fo.current=fl,hl){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hl=!1}if(mr=0,Pe=Ie=ye=null,ns=!1,bs=0,id.current=null,n===null||n.return===null){Re=1,Ps=e,ke=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=ze,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=of(o);if(_!==null){_.flags&=-257,lf(_,o,l,s,e),_.mode&1&&sf(s,c,e),e=_,a=c;var v=e.updateQueue;if(v===null){var E=new Set;E.add(a),e.updateQueue=E}else v.add(a);break e}else{if(!(e&1)){sf(s,c,e),cd();break e}a=Error(x(426))}}else if(ge&&l.mode&1){var O=of(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),lf(O,o,l,s,e),Vu(ai(a,l));break e}}s=a=ai(a,l),Re!==4&&(Re=2),is===null?is=[s]:is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=xm(s,a,e);Jh(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(On===null||!On.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Cm(s,l,e);Jh(s,w);break e}}s=s.return}while(s!==null)}Vm(n)}catch(b){e=b,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Wm(){var t=pl.current;return pl.current=fl,t===null?fl:t}function cd(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||!(yr&268435455)&&!(Xl&268435455)||En(De,ze)}function yl(t,e){var n=J;J|=2;var r=Wm();(De!==t||ze!==e)&&(Qt=null,hr(t,e));do try{P1();break}catch(i){Um(t,i)}while(!0);if($u(),J=n,pl.current=r,ke!==null)throw Error(x(261));return De=null,ze=0,Re}function P1(){for(;ke!==null;)Bm(ke)}function A1(){for(;ke!==null&&!r0();)Bm(ke)}function Bm(t){var e=$m(t.alternate,t,ct);t.memoizedProps=t.pendingProps,e===null?Vm(t):ke=e,id.current=null}function Vm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=k1(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,ke=null;return}}else if(n=C1(n,e,ct),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Re===0&&(Re=5)}function rr(t,e,n){var r=re,i=St.transition;try{St.transition=null,re=1,D1(t,e,n,r)}finally{St.transition=i,re=r}return null}function D1(t,e,n,r){do Xr();while(Tn!==null);if(J&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(f0(t,s),t===De&&(ke=De=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||To||(To=!0,Gm(Jo,function(){return Xr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=St.transition,St.transition=null;var o=re;re=1;var l=J;J|=4,id.current=null,T1(t,n),jm(n,t),Z0(bc),el=!!Tc,bc=Tc=null,t.current=n,b1(n),i0(),J=l,re=o,St.transition=s}else t.current=n;if(To&&(To=!1,Tn=t,ml=i),s=t.pendingLanes,s===0&&(On=null),l0(n.stateNode),at(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gl)throw gl=!1,t=Qc,Qc=null,t;return ml&1&&t.tag!==0&&Xr(),s=t.pendingLanes,s&1?t===qc?ss++:(ss=0,qc=t):ss=0,qn(),null}function Xr(){if(Tn!==null){var t=xg(ml),e=St.transition,n=re;try{if(St.transition=null,re=16>t?16:t,Tn===null)var r=!1;else{if(t=Tn,Tn=null,ml=0,J&6)throw Error(x(331));var i=J;for(J|=4,P=t.current;P!==null;){var s=P,o=s.child;if(P.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(P=c;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:rs(8,h,s)}var f=h.child;if(f!==null)f.return=h,P=f;else for(;P!==null;){h=P;var d=h.sibling,_=h.return;if(Om(h),h===c){P=null;break}if(d!==null){d.return=_,P=d;break}P=_}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var O=E.sibling;E.sibling=null,E=O}while(E!==null)}}P=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,P=m;break e}P=s.return}}var p=t.current;for(P=p;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=p;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Yl(9,l)}}catch(b){we(l,l.return,b)}if(l===o){P=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,P=w;break e}P=l.return}}if(J=i,qn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Bl,t)}catch{}r=!0}return r}finally{re=n,St.transition=e}}return!1}function wf(t,e,n){e=ai(n,e),e=xm(t,e,1),t=Dn(t,e,1),e=Xe(),t!==null&&(Ks(t,1,e),at(t,e))}function we(t,e,n){if(t.tag===3)wf(t,t,n);else for(;e!==null;){if(e.tag===3){wf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){t=ai(n,t),t=Cm(e,t,1),e=Dn(e,t,1),t=Xe(),e!==null&&(Ks(e,1,t),at(e,t));break}}e=e.return}}function O1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Xe(),t.pingedLanes|=t.suspendedLanes&n,De===t&&(ze&n)===n&&(Re===4||Re===3&&(ze&130023424)===ze&&500>Ce()-od?hr(t,0):sd|=n),at(t,e)}function Hm(t,e){e===0&&(t.mode&1?(e=yo,yo<<=1,!(yo&130023424)&&(yo=4194304)):e=1);var n=Xe();t=an(t,e),t!==null&&(Ks(t,e,n),at(t,n))}function L1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hm(t,n)}function M1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Hm(t,n)}var $m;$m=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ot.current)it=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return it=!1,x1(t,e,n);it=!!(t.flags&131072)}else it=!1,ge&&e.flags&1048576&&qg(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Uo(t,e),t=e.pendingProps;var i=ii(e,Ke.current);Yr(e,n),i=Zu(null,e,r,t,i,n);var s=ed();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,lt(r)?(s=!0,sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qu(e),i.updater=ql,e.stateNode=i,i._reactInternals=e,jc(e,r,t,n),e=Uc(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&Wu(e),qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Uo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=F1(r),t=bt(r,t),i){case 0:e=zc(null,e,r,t,n);break e;case 1:e=uf(null,e,r,t,n);break e;case 11:e=af(null,e,r,t,n);break e;case 14:e=cf(null,e,r,bt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),zc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),uf(t,e,r,i,n);case 3:e:{if(bm(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tm(t,e),ul(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ai(Error(x(423)),e),e=df(t,e,r,n,i);break e}else if(r!==i){i=ai(Error(x(424)),e),e=df(t,e,r,n,i);break e}else for(dt=An(e.stateNode.containerInfo.firstChild),ht=e,ge=!0,Nt=null,n=Zg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(si(),r===i){e=cn(t,e,n);break e}qe(t,e,r,n)}e=e.child}return e;case 5:return nm(e),t===null&&Oc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rc(r,i)?o=null:s!==null&&Rc(r,s)&&(e.flags|=32),Tm(t,e),qe(t,e,o,n),e.child;case 6:return t===null&&Oc(e),null;case 13:return Rm(t,e,n);case 4:return qu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=oi(e,null,r,n):qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),af(t,e,r,i,n);case 7:return qe(t,e,e.pendingProps,n),e.child;case 8:return qe(t,e,e.pendingProps.children,n),e.child;case 12:return qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(al,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!ot.current){e=cn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=nn(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Lc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Lc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yr(e,n),i=Et(i),r=r(i),e.flags|=1,qe(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),cf(t,e,r,i,n);case 15:return km(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),Uo(t,e),e.tag=1,lt(r)?(t=!0,sl(e)):t=!1,Yr(e,n),Em(e,r,i),jc(e,r,i,n),Uc(null,e,r,!0,t,n);case 19:return Nm(t,e,n);case 22:return Im(t,e,n)}throw Error(x(156,e.tag))};function Gm(t,e){return vg(t,e)}function j1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new j1(t,e,n,r)}function ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function F1(t){if(typeof t=="function")return ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ru)return 11;if(t===Nu)return 14}return 2}function Mn(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Or:return fr(n.children,i,s,e);case bu:o=8,i|=8;break;case lc:return t=vt(12,n,e,i|2),t.elementType=lc,t.lanes=s,t;case ac:return t=vt(13,n,e,i),t.elementType=ac,t.lanes=s,t;case cc:return t=vt(19,n,e,i),t.elementType=cc,t.lanes=s,t;case ng:return Jl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case eg:o=10;break e;case tg:o=9;break e;case Ru:o=11;break e;case Nu:o=14;break e;case vn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fr(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function Jl(t,e,n,r){return t=vt(22,t,r,e),t.elementType=ng,t.lanes=n,t.stateNode={isHidden:!1},t}function Va(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function Ha(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function z1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ca(0),this.expirationTimes=Ca(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ca(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dd(t,e,n,r,i,s,o,l,a){return t=new z1(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(s),t}function U1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Km(t){if(!t)return Vn;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(lt(n))return Kg(t,n,e)}return e}function Qm(t,e,n,r,i,s,o,l,a){return t=dd(n,r,!0,t,i,s,o,l,a),t.context=Km(null),n=t.current,r=Xe(),i=Ln(n),s=nn(r,i),s.callback=e??null,Dn(n,s,i),t.current.lanes=i,Ks(t,i,r),at(t,r),t}function Zl(t,e,n,r){var i=e.current,s=Xe(),o=Ln(i);return n=Km(n),e.context===null?e.context=n:e.pendingContext=n,e=nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Dn(i,e,o),t!==null&&(Lt(t,i,o,s),jo(t,i,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hd(t,e){Sf(t,e),(t=t.alternate)&&Sf(t,e)}function W1(){return null}var qm=typeof reportError=="function"?reportError:function(t){console.error(t)};function fd(t){this._internalRoot=t}ea.prototype.render=fd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Zl(t,e,null,null)};ea.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_r(function(){Zl(null,t,null,null)}),e[ln]=null}};function ea(t){this._internalRoot=t}ea.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ig();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sn.length&&e!==0&&e<Sn[n].priority;n++);Sn.splice(n,0,t),n===0&&bg(t)}};function pd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ta(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ef(){}function B1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=_l(o);s.call(c)}}var o=Qm(e,r,t,0,null,!1,!1,"",Ef);return t._reactRootContainer=o,t[ln]=o.current,xs(t.nodeType===8?t.parentNode:t),_r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=_l(a);l.call(c)}}var a=dd(t,0,!1,null,null,!1,!1,"",Ef);return t._reactRootContainer=a,t[ln]=a.current,xs(t.nodeType===8?t.parentNode:t),_r(function(){Zl(e,a,n,r)}),a}function na(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=_l(o);l.call(a)}}Zl(e,o,t,i)}else o=B1(n,e,t,i,r);return _l(o)}Cg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ki(e.pendingLanes);n!==0&&(Du(e,n|1),at(e,Ce()),!(J&6)&&(ci=Ce()+500,qn()))}break;case 13:_r(function(){var r=an(t,1);if(r!==null){var i=Xe();Lt(r,t,1,i)}}),hd(t,1)}};Ou=function(t){if(t.tag===13){var e=an(t,134217728);if(e!==null){var n=Xe();Lt(e,t,134217728,n)}hd(t,134217728)}};kg=function(t){if(t.tag===13){var e=Ln(t),n=an(t,e);if(n!==null){var r=Xe();Lt(n,t,e,r)}hd(t,e)}};Ig=function(){return re};Tg=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};vc=function(t,e,n){switch(e){case"input":if(hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gl(r);if(!i)throw Error(x(90));ig(r),hc(r,i)}}}break;case"textarea":og(t,n);break;case"select":e=n.value,e!=null&&Gr(t,!!n.multiple,e,!1)}};fg=ld;pg=_r;var V1={usingClientEntryPoint:!1,Events:[qs,Fr,Gl,dg,hg,ld]},zi={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H1={bundleType:zi.bundleType,version:zi.version,rendererPackageName:zi.rendererPackageName,rendererConfig:zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yg(t),t===null?null:t.stateNode},findFiberByHostInstance:zi.findFiberByHostInstance||W1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{Bl=bo.inject(H1),Bt=bo}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V1;pt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(e))throw Error(x(200));return U1(t,e,null,n)};pt.createRoot=function(t,e){if(!pd(t))throw Error(x(299));var n=!1,r="",i=qm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dd(t,1,!1,null,null,n,!1,r,i),t[ln]=e.current,xs(t.nodeType===8?t.parentNode:t),new fd(e)};pt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=yg(e),t=t===null?null:t.stateNode,t};pt.flushSync=function(t){return _r(t)};pt.hydrate=function(t,e,n){if(!ta(e))throw Error(x(200));return na(null,t,e,!0,n)};pt.hydrateRoot=function(t,e,n){if(!pd(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=qm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Qm(e,null,t,1,n??null,i,!1,s,o),t[ln]=e.current,xs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ea(e)};pt.render=function(t,e,n){if(!ta(e))throw Error(x(200));return na(null,t,e,!1,n)};pt.unmountComponentAtNode=function(t){if(!ta(t))throw Error(x(40));return t._reactRootContainer?(_r(function(){na(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1};pt.unstable_batchedUpdates=ld;pt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ta(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return na(t,e,n,!1,r)};pt.version="18.3.1-next-f1338f8080-20240426";function Ym(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ym)}catch(t){console.error(t)}}Ym(),Yp.exports=pt;var $1=Yp.exports,Xm,xf=$1;Xm=xf.createRoot,xf.hydrateRoot;const G1=()=>{};var Cf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw Si(e)},Si=function(t){return new Error("Firebase Database ("+Jm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},K1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=s>>2,f=(s&3)<<4|l>>4;let d=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(d=64)),r.push(n[h],n[f],n[d],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):K1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||f==null)throw new Q1;const d=s<<2|l>>4;if(r.push(d),c!==64){const _=l<<4&240|c>>2;if(r.push(_),f!==64){const v=c<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Q1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ey=function(t){const e=Zm(t);return gd.encodeByteArray(e,!0)},vl=function(t){return ey(t).replace(/\./g,"")},wl=function(t){try{return gd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(t){return ty(void 0,t)}function ty(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Y1(n)||(t[n]=ty(t[n],e[n]));return t}function Y1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=()=>X1().__FIREBASE_DEFAULTS__,Z1=()=>{if(typeof process>"u"||typeof Cf>"u")return;const t=Cf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ew=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wl(t[1]);return e&&JSON.parse(e)},md=()=>{try{return G1()||J1()||Z1()||ew()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ny=t=>{var e,n;return(n=(e=md())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},tw=t=>{const e=ny(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ry=()=>{var t;return(t=md())==null?void 0:t.config},iy=t=>{var e;return(e=md())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sy(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[vl(JSON.stringify(n)),vl(JSON.stringify(o)),""].join(".")}const os={};function rw(){const t={prod:[],emulator:[]};for(const e of Object.keys(os))os[e]?t.emulator.push(e):t.prod.push(e);return t}function iw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let kf=!1;function oy(t,e){if(typeof window>"u"||typeof document>"u"||!Ei(window.location.host)||os[t]===e||os[t]||kf)return;os[t]=e;function n(d){return`__firebase__banner__${d}`}const r="__firebase__banner",s=rw().prod.length>0;function o(){const d=document.getElementById(r);d&&d.remove()}function l(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function a(d,_){d.setAttribute("width","24"),d.setAttribute("id",_),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{kf=!0,o()},d}function h(d,_){d.setAttribute("id",_),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function f(){const d=iw(r),_=n("text"),v=document.getElementById(_)||document.createElement("span"),E=n("learnmore"),O=document.getElementById(E)||document.createElement("a"),m=n("preprendIcon"),p=document.getElementById(m)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const g=d.element;l(g),h(O,E);const w=c();a(p,m),g.append(p,v,O,w),document.body.appendChild(g)}s?(v.innerText="Preview backend disconnected.",p.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(p.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function sw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ow(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ly(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lw(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ay(){return Jm.NODE_ADMIN===!0}function aw(){try{return typeof indexedDB=="object"}catch{return!1}}function cw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="FirebaseError";class Yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uw,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Yn(i,l,r)}}function dw(t,e){return t.replace(hw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=As(wl(s[0])||""),n=As(wl(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},fw=function(t){const e=cy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pw=function(t){const e=cy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ui(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Jc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sl(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(If(s)&&If(o)){if(!vr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function If(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Yi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=l^s&(o^l),h=1518500249):(c=s^o^l,h=1859775393):f<60?(c=s&o|l&(s|o),h=2400959708):(c=s^o^l,h=3395469782);const d=(i<<5|i>>>27)+c+a+h+r[f]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function mw(t,e){const n=new yw(t,e);return n.subscribe.bind(n)}class yw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_w(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$a),i.error===void 0&&(i.error=$a),i.complete===void 0&&(i.complete=$a);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _w(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}function ra(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ia=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ew(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sw(t){return t===ir?void 0:t}function Ew(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ww(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Cw={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},kw=ie.INFO,Iw={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Tw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Iw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _d{constructor(e){this.name=e,this._logLevel=kw,this._logHandler=Tw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const bw=(t,e)=>e.some(n=>t instanceof n);let Tf,bf;function Rw(){return Tf||(Tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Nw(){return bf||(bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uy=new WeakMap,Zc=new WeakMap,dy=new WeakMap,Ga=new WeakMap,vd=new WeakMap;function Pw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(jn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uy.set(n,t)}).catch(()=>{}),vd.set(e,t),e}function Aw(t){if(Zc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zc.set(t,e)}let eu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dw(t){eu=t(eu)}function Ow(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ka(this),e,...n);return dy.set(r,e.sort?e.sort():[e]),jn(r)}:Nw().includes(t)?function(...e){return t.apply(Ka(this),e),jn(uy.get(this))}:function(...e){return jn(t.apply(Ka(this),e))}}function Lw(t){return typeof t=="function"?Ow(t):(t instanceof IDBTransaction&&Aw(t),bw(t,Rw())?new Proxy(t,eu):t)}function jn(t){if(t instanceof IDBRequest)return Pw(t);if(Ga.has(t))return Ga.get(t);const e=Lw(t);return e!==t&&(Ga.set(t,e),vd.set(e,t)),e}const Ka=t=>vd.get(t);function Mw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=jn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(jn(o.result),a.oldVersion,a.newVersion,jn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const jw=["get","getKey","getAll","getAllKeys","count"],Fw=["put","add","delete","clear"],Qa=new Map;function Rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qa.get(e))return Qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Fw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Qa.set(e,s),s}Dw(t=>({...t,get:(e,n,r)=>Rf(e,n)||t.get(e,n,r),has:(e,n)=>!!Rf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Uw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Uw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tu="@firebase/app",Nf="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new _d("@firebase/app"),Ww="@firebase/app-compat",Bw="@firebase/analytics-compat",Vw="@firebase/analytics",Hw="@firebase/app-check-compat",$w="@firebase/app-check",Gw="@firebase/auth",Kw="@firebase/auth-compat",Qw="@firebase/database",qw="@firebase/data-connect",Yw="@firebase/database-compat",Xw="@firebase/functions",Jw="@firebase/functions-compat",Zw="@firebase/installations",eS="@firebase/installations-compat",tS="@firebase/messaging",nS="@firebase/messaging-compat",rS="@firebase/performance",iS="@firebase/performance-compat",sS="@firebase/remote-config",oS="@firebase/remote-config-compat",lS="@firebase/storage",aS="@firebase/storage-compat",cS="@firebase/firestore",uS="@firebase/ai",dS="@firebase/firestore-compat",hS="firebase",fS="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="[DEFAULT]",pS={[tu]:"fire-core",[Ww]:"fire-core-compat",[Vw]:"fire-analytics",[Bw]:"fire-analytics-compat",[$w]:"fire-app-check",[Hw]:"fire-app-check-compat",[Gw]:"fire-auth",[Kw]:"fire-auth-compat",[Qw]:"fire-rtdb",[qw]:"fire-data-connect",[Yw]:"fire-rtdb-compat",[Xw]:"fire-fn",[Jw]:"fire-fn-compat",[Zw]:"fire-iid",[eS]:"fire-iid-compat",[tS]:"fire-fcm",[nS]:"fire-fcm-compat",[rS]:"fire-perf",[iS]:"fire-perf-compat",[sS]:"fire-rc",[oS]:"fire-rc-compat",[lS]:"fire-gcs",[aS]:"fire-gcs-compat",[cS]:"fire-fst",[dS]:"fire-fst-compat",[uS]:"fire-vertex","fire-js":"fire-js",[hS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Map,gS=new Map,ru=new Map;function Pf(t,e){try{t.container.addComponent(e)}catch(n){un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(ru.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;ru.set(e,t);for(const n of Ds.values())Pf(n,t);for(const n of gS.values())Pf(n,t);return!0}function wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ut(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fn=new Js("app","Firebase",mS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=fS;function Sd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:nu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Fn.create("bad-app-name",{appName:String(i)});if(n||(n=ry()),!n)throw Fn.create("no-options");const s=Ds.get(i);if(s){if(vr(n,s.options)&&vr(r,s.config))return s;throw Fn.create("duplicate-app",{appName:i})}const o=new xw(i);for(const a of ru.values())o.addComponent(a);const l=new yS(n,r,o);return Ds.set(i,l),l}function hy(t=nu){const e=Ds.get(t);if(!e&&t===nu&&ry())return Sd();if(!e)throw Fn.create("no-app",{appName:t});return e}function Af(){return Array.from(Ds.values())}function zn(t,e,n){let r=pS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(o.join(" "));return}di(new wr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S="firebase-heartbeat-database",vS=1,Os="firebase-heartbeat-store";let qa=null;function fy(){return qa||(qa=Mw(_S,vS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Os)}catch(n){console.warn(n)}}}}).catch(t=>{throw Fn.create("idb-open",{originalErrorMessage:t.message})})),qa}async function wS(t){try{const n=(await fy()).transaction(Os),r=await n.objectStore(Os).get(py(t));return await n.done,r}catch(e){if(e instanceof Yn)un.warn(e.message);else{const n=Fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});un.warn(n.message)}}}async function Df(t,e){try{const r=(await fy()).transaction(Os,"readwrite");await r.objectStore(Os).put(e,py(t)),await r.done}catch(n){if(n instanceof Yn)un.warn(n.message);else{const r=Fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(r.message)}}}function py(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=1024,ES=30;class xS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Of();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>ES){const o=IS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Of(),{heartbeatsToSend:r,unsentEntries:i}=CS(this._heartbeatsCache.heartbeats),s=vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return un.warn(n),""}}}function Of(){return new Date().toISOString().substring(0,10)}function CS(t,e=SS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Lf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aw()?cw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Df(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Df(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Lf(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}function IS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){di(new wr("platform-logger",e=>new zw(e),"PRIVATE")),di(new wr("heartbeat",e=>new xS(e),"PRIVATE")),zn(tu,Nf,t),zn(tu,Nf,"esm2020"),zn("fire-js","")}TS("");var bS="firebase",RS="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn(bS,RS,"app");function gy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NS=gy,my=new Js("auth","Firebase",gy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new _d("@firebase/auth");function PS(t,...e){El.logLevel<=ie.WARN&&El.warn(`Auth (${Ci}): ${t}`,...e)}function Ho(t,...e){El.logLevel<=ie.ERROR&&El.error(`Auth (${Ci}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw xd(t,...e)}function Mt(t,...e){return xd(t,...e)}function Ed(t,e,n){const r={...NS(),[e]:n};return new Js("auth","Firebase",r).create(e,{appName:t.name})}function rn(t){return Ed(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function AS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ct(t,"argument-error"),Ed(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return my.create(t,...e)}function F(t,e,...n){if(!t)throw xd(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ho(e),new Error(e)}function dn(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function DS(){return Mf()==="http:"||Mf()==="https:"}function Mf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DS()||ow()||"connection"in navigator)?navigator.onLine:!0}function LS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=yd()||ly()}get(){return OS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],FS=new Zs(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function pn(t,e,n,r,i={}){return _y(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=xi({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:a,...s};return sw()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(c.credentials="include"),yy.fetch()(await vy(t,t.config.apiHost,n,l),c)})}async function _y(t,e,n){t._canInitEmulator=!1;const r={...MS,...e};try{const i=new US(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ro(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ro(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ro(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ro(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ed(t,h,c);Ct(t,h)}}catch(i){if(i instanceof Yn)throw i;Ct(t,"network-request-failed",{message:String(i)})}}async function eo(t,e,n,r,i={}){const s=await pn(t,e,n,r,i);return"mfaPendingCredential"in s&&Ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function vy(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Cd(t.config,i):`${t.config.apiScheme}://${i}`;return jS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function zS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class US{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),FS.get())})}}function Ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(t,e,r);return i.customData._tokenResponse=n,i}function jf(t){return t!==void 0&&t.enterprise!==void 0}class WS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function BS(t,e){return pn(t,"GET","/v2/recaptchaConfig",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e){return pn(t,"POST","/v1/accounts:delete",e)}async function xl(t,e){return pn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HS(t,e=!1){const n=Be(t),r=await n.getIdToken(e),i=kd(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ls(Ya(i.auth_time)),issuedAtTime:ls(Ya(i.iat)),expirationTime:ls(Ya(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ya(t){return Number(t)*1e3}function kd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ho("JWT malformed, contained fewer than 3 sections"),null;try{const i=wl(n);return i?JSON.parse(i):(Ho("Failed to decode base64 JWT payload"),null)}catch(i){return Ho("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ff(t){const e=kd(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yn&&$S(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $S({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cl(t){var f;const e=t.auth,n=await t.getIdToken(),r=await hi(t,xl(e,{idToken:n}));F(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(f=i.providerUserInfo)!=null&&f.length?wy(i.providerUserInfo):[],o=QS(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=l?a:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new su(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function KS(t){const e=Be(t);await Cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wy(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(t,e){const n=await _y(t,{},async()=>{const r=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await vy(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ei(t.emulatorConfig.host)&&(a.credentials="include"),yy.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YS(t,e){return pn(t,"POST","/v2/accounts:revokeToken",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ff(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){F(e.length!==0,"internal-error");const n=Ff(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Jr;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new GS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new su(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HS(this,e)}reload(){return KS(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(rn(this.auth));const e=await this.getIdToken();return await hi(this,VS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,c=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:_,providerData:v,stsTokenManager:E}=n;F(f&&E,e,"internal-error");const O=Jr.fromJSON(this.name,E);F(typeof f=="string",e,"internal-error"),_n(r,e.name),_n(i,e.name),F(typeof d=="boolean",e,"internal-error"),F(typeof _=="boolean",e,"internal-error"),_n(s,e.name),_n(o,e.name),_n(l,e.name),_n(a,e.name),_n(c,e.name),_n(h,e.name);const m=new At({uid:f,auth:e,email:i,emailVerified:d,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:O,createdAt:c,lastLoginAt:h});return v&&Array.isArray(v)&&(m.providerData=v.map(p=>({...p}))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new Jr;i.updateFromServerResponse(n);const s=new At({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];F(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?wy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Jr;l.updateFromIdToken(r);const a=new At({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new su(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=new Map;function en(t){dn(t instanceof Function,"Expected a class definition");let e=zf.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sy.type="NONE";const Uf=Sy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$o(this.userKey,i.apiKey,s),this.fullPersistenceKey=$o("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xl(this.auth,{idToken:e}).catch(()=>{});return n?At._fromGetAccountInfoResponse(this.auth,n,e):null}return At._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(en(Uf),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||en(Uf);const o=$o(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const h=await c._get(o);if(h){let f;if(typeof h=="string"){const d=await xl(e,{idToken:h}).catch(()=>{});if(!d)break;f=await At._fromGetAccountInfoResponse(e,d,h)}else f=At._fromJSON(e,h);c!==s&&(l=f),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Zr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Zr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ky(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ey(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ty(e))return"Blackberry";if(by(e))return"Webos";if(xy(e))return"Safari";if((e.includes("chrome/")||Cy(e))&&!e.includes("edge/"))return"Chrome";if(Iy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ey(t=Ze()){return/firefox\//i.test(t)}function xy(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cy(t=Ze()){return/crios\//i.test(t)}function ky(t=Ze()){return/iemobile/i.test(t)}function Iy(t=Ze()){return/android/i.test(t)}function Ty(t=Ze()){return/blackberry/i.test(t)}function by(t=Ze()){return/webos/i.test(t)}function Id(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XS(t=Ze()){var e;return Id(t)&&!!((e=window.navigator)!=null&&e.standalone)}function JS(){return lw()&&document.documentMode===10}function Ry(t=Ze()){return Id(t)||Iy(t)||by(t)||Ty(t)||/windows phone/i.test(t)||ky(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e=[]){let n;switch(t){case"Browser":n=Wf(Ze());break;case"Worker":n=`${Wf(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(t,e={}){return pn(t,"GET","/v2/passwordPolicy",Xn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=6;class nE{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tE,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bf(this),this.idTokenSubscription=new Bf(this),this.beforeStateQueue=new ZS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=my,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xl(this,{idToken:e}),r=await At._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(rn(this));const n=e?Be(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(rn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(rn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eE(this),n=new nE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&PS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Jn(t){return Be(t)}class Bf{constructor(e){this.auth=e,this.observer=null,this.addObserver=mw(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iE(t){sa=t}function Py(t){return sa.loadJS(t)}function sE(){return sa.recaptchaEnterpriseScript}function oE(){return sa.gapiScript}function lE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class aE{constructor(){this.enterprise=new cE}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class cE{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const uE="recaptcha-enterprise",Ay="NO_RECAPTCHA";class dE{constructor(e){this.type=uE,this.auth=Jn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{BS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new WS(a);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;jf(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ay)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aE().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&jf(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=sE();a.length!==0&&(a+=l),Py(a).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Vf(t,e,n,r=!1,i=!1){const s=new dE(t);let o;if(i)o=Ay;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const a=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const a=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function ou(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Vf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Vf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t,e){const n=wd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vr(s,e??{}))return i;Ct(i,"already-initialized")}return n.initialize({options:e})}function fE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pE(t,e,n){const r=Jn(t);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Dy(e),{host:o,port:l}=gE(e),a=l===null?"":`:${l}`,c={url:`${s}//${o}${a}/`},h=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(vr(c,r.config.emulator)&&vr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Ei(o)?(sy(`${s}//${o}${a}`),oy("Auth",!0)):mE()}function Dy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gE(t){const e=Dy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Hf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Hf(o)}}}function Hf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function yE(t,e){return pn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(t,e){return eo(t,"POST","/v1/accounts:signInWithPassword",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}async function wE(t,e){return eo(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Td{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ls(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ls(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ou(e,n,"signInWithPassword",_E);case"emailLink":return vE(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ou(e,r,"signUpPassword",yE);case"emailLink":return wE(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(t,e){return eo(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="http://localhost";class Sr extends Td{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ei(e,n)}buildRequest(){const e={requestUri:SE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xE(t){const e=qi(Yi(t)).link,n=e?qi(Yi(e)).deep_link_id:null,r=qi(Yi(t)).deep_link_id;return(r?qi(Yi(r)).link:null)||r||n||e||t}class bd{constructor(e){const n=qi(Yi(e)),r=n.apiKey??null,i=n.oobCode??null,s=EE(n.mode??null);F(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=xE(e);try{return new bd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,n){return Ls._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bd.parseLink(n);return F(r,"argument-error"),Ls._fromEmailAndCode(e,r.code,r.tenantId)}}ki.PROVIDER_ID="password";ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Rd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends to{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends to{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends to{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kn.credential(n,r)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CE(t,e){return eo(t,"POST","/v1/accounts:signUp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await At._fromIdTokenResponse(e,r,i),o=$f(r);return new Er({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$f(r);return new Er({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends Yn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,kl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new kl(e,n,r,i)}}function Oy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?kl._fromErrorAndOperation(t,s,e,r):s})}async function kE(t,e,n=!1){const r=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Er._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(t,e,n=!1){const{auth:r}=t;if(ut(r.app))return Promise.reject(rn(r));const i="reauthenticate";try{const s=await hi(t,Oy(r,i,e,t),n);F(s.idToken,r,"internal-error");const o=kd(s.idToken);F(o,r,"internal-error");const{sub:l}=o;return F(t.uid===l,r,"user-mismatch"),Er._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(t,e,n=!1){if(ut(t.app))return Promise.reject(rn(t));const r="signIn",i=await Oy(t,r,e),s=await Er._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function TE(t,e){return Ly(Jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function My(t){const e=Jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bE(t,e,n){if(ut(t.app))return Promise.reject(rn(t));const r=Jn(t),o=await ou(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CE).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&My(t),a}),l=await Er._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function RE(t,e,n){return ut(t.app)?Promise.reject(rn(t)):TE(Be(t),ki.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&My(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(t,e){return pn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Be(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await hi(r,NE(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function AE(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function DE(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function OE(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}function LE(t){return Be(t).signOut()}const Il="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=1e3,jE=10;class Fy extends jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ry(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,jE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ME)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fy.type="LOCAL";const FE=Fy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy extends jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zy.type="SESSION";const Uy=zy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new oa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await zE(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=Nd("",20);i.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(h),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function WE(t){Ht().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function BE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function HE(){return Wy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="firebaseLocalStorageDb",$E=1,Tl="firebaseLocalStorage",Vy="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function la(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function GE(){const t=indexedDB.deleteDatabase(By);return new no(t).toPromise()}function lu(){const t=indexedDB.open(By,$E);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:Vy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await GE(),e(await lu()))})})}async function Gf(t,e,n){const r=la(t,!0).put({[Vy]:e,value:n});return new no(r).toPromise()}async function KE(t,e){const n=la(t,!1).get(e),r=await new no(n).toPromise();return r===void 0?null:r.value}function Kf(t,e){const n=la(t,!0).delete(e);return new no(n).toPromise()}const QE=800,qE=3;class Hy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oa._getInstance(HE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await BE(),!this.activeServiceWorker)return;this.sender=new UE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lu();return await Gf(e,Il,"1"),await Kf(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=la(i,!1).getAll();return new no(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hy.type="LOCAL";const YE=Hy;new Zs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t,e){return e?en(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends Td{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XE(t){return Ly(t.auth,new Pd(t),t.bypassAuthState)}function JE(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),IE(n,new Pd(t),t.bypassAuthState)}async function ZE(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),kE(n,new Pd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XE;case"linkViaPopup":case"linkViaRedirect":return ZE;case"reauthViaPopup":case"reauthViaRedirect":return JE;default:Ct(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ex=new Zs(2e3,1e4);async function tx(t,e,n){if(ut(t.app))return Promise.reject(Mt(t,"operation-not-supported-in-this-environment"));const r=Jn(t);AS(t,e,Rd);const i=$y(r,n);return new ur(r,"signInViaPopup",e,i).executeNotNull()}class ur extends Gy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Nd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ex.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx="pendingRedirect",Go=new Map;class rx extends Gy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Go.get(this.auth._key());if(!e){try{const r=await ix(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Go.set(this.auth._key(),e)}return this.bypassAuthState||Go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ix(t,e){const n=lx(e),r=ox(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sx(t,e){Go.set(t._key(),e)}function ox(t){return en(t._redirectPersistence)}function lx(t){return $o(nx,t.config.apiKey,t.name)}async function ax(t,e,n=!1){if(ut(t.app))return Promise.reject(rn(t));const r=Jn(t),i=$y(r,e),o=await new rx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=10*60*1e3;class ux{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ky(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qf(e))}saveEventToCache(e){this.cachedEventUids.add(Qf(e)),this.lastProcessedEventTime=Date.now()}}function Qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ky({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ky(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx(t,e={}){return pn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,px=/^https?/;async function gx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hx(t);for(const n of e)try{if(mx(n))return}catch{}Ct(t,"unauthorized-domain")}function mx(t){const e=iu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!px.test(n))return!1;if(fx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=new Zs(3e4,6e4);function qf(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _x(t){return new Promise((e,n)=>{var i,s,o;function r(){qf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qf(),n(Mt(t,"network-request-failed"))},timeout:yx.get()})}if((s=(i=Ht().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Ht().gapi)!=null&&o.load)r();else{const l=lE("iframefcb");return Ht()[l]=()=>{gapi.load?r():n(Mt(t,"network-request-failed"))},Py(`${oE()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Ko=null,e})}let Ko=null;function vx(t){return Ko=Ko||_x(t),Ko}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=new Zs(5e3,15e3),Sx="__/auth/iframe",Ex="emulator/auth/iframe",xx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kx(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cd(e,Ex):`https://${t.config.authDomain}/${Sx}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},i=Cx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xi(r).slice(1)}`}async function Ix(t){const e=await vx(t),n=Ht().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:kx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),l=Ht().setTimeout(()=>{s(o)},wx.get());function a(){Ht().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bx=500,Rx=600,Nx="_blank",Px="http://localhost";class Yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ax(t,e,n,r=bx,i=Rx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...Tx,width:r.toString(),height:i.toString(),top:s,left:o},c=Ze().toLowerCase();n&&(l=Cy(c)?Nx:n),Ey(c)&&(e=e||Px,a.scrollbars="yes");const h=Object.entries(a).reduce((d,[_,v])=>`${d}${_}=${v},`,"");if(XS(c)&&l!=="_self")return Dx(e||"",l),new Yf(null);const f=window.open(e||"",l,h);F(f,t,"popup-blocked");try{f.focus()}catch{}return new Yf(f)}function Dx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox="__/auth/handler",Lx="emulator/auth/handler",Mx=encodeURIComponent("fac");async function Xf(t,e,n,r,i,s){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:i};if(e instanceof Rd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Jc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof to){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),c=a?`#${Mx}=${encodeURIComponent(a)}`:"";return`${jx(t)}?${xi(l).slice(1)}${c}`}function jx({config:t}){return t.emulator?Cd(t,Lx):`https://${t.authDomain}/${Ox}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="webStorageSupport";class Fx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uy,this._completeRedirectFn=ax,this._overrideRedirectResult=sx}async _openPopup(e,n,r,i){var o;dn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Xf(e,n,r,iu(),i);return Ax(e,s,Nd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xf(e,n,r,iu(),i);return WE(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ix(e),r=new ux(e);return n.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xa,{type:Xa},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Xa];s!==void 0&&n(!!s),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ry()||xy()||Id()}}const zx=Fx;var Jf="@firebase/auth",Zf="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bx(t){di(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ny(t)},c=new rE(r,i,s,a);return fE(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),di(new wr("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(r=>new Ux(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Jf,Zf,Wx(t)),zn(Jf,Zf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=5*60,Hx=iy("authIdTokenMaxAge")||Vx;let ep=null;const $x=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hx)return;const i=n==null?void 0:n.token;ep!==i&&(ep=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gx(t=hy()){const e=wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hE(t,{popupRedirectResolver:zx,persistence:[YE,FE,Uy]}),r=iy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$x(s.toString());DE(n,o,()=>o(n.currentUser)),AE(n,l=>o(l))}}const i=ny("auth");return i&&pE(n,`http://${i}`),n}function Kx(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}iE({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Kx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bx("Browser");var tp={};const np="@firebase/database",rp="1.1.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qy="";function Qx(t){Qy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:As(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return $t(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qx(e)}}catch{}return new Yx},dr=qy("localStorage"),Xx=qy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new _d("@firebase/database"),Jx=function(){let t=1;return function(){return t++}}(),Yy=function(t){const e=vw(t),n=new gw;n.update(e);const r=n.digest();return gd.encodeByteArray(r)},ro=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ro.apply(null,r):typeof r=="object"?e+=be(r):e+=r,e+=" "}return e};let as=null,ip=!0;const Zx=function(t,e){k(!e,"Can't turn on custom loggers persistently."),ti.logLevel=ie.VERBOSE,as=ti.log.bind(ti)},Fe=function(...t){if(ip===!0&&(ip=!1,as===null&&Xx.get("logging_enabled")===!0&&Zx()),as){const e=ro.apply(null,t);as(e)}},io=function(t){return function(...e){Fe(t,...e)}},au=function(...t){const e="FIREBASE INTERNAL ERROR: "+ro(...t);ti.error(e)},hn=function(...t){const e=`FIREBASE FATAL ERROR: ${ro(...t)}`;throw ti.error(e),new Error(e)},Je=function(...t){const e="FIREBASE WARNING: "+ro(...t);ti.warn(e)},eC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ad=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},fi="[MIN_NAME]",xr="[MAX_NAME]",br=function(t,e){if(t===e)return 0;if(t===fi||e===xr)return-1;if(e===fi||t===xr)return 1;{const n=sp(t),r=sp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nC=function(t,e){return t===e?0:t<e?-1:1},Ui=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},Dd=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=be(e[r]),n+=":",n+=Dd(t[e[r]]);return n+="}",n},Xy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function We(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Jy=function(t){k(!Ad(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(a=0;a<64;a+=8){let d=parseInt(h.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},rC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const oC=new RegExp("^-?(0*)\\d{1,10}$"),lC=-2147483648,aC=2147483647,sp=function(t){if(oC.test(t)){const e=Number(t);if(e>=lC&&e<=aC)return e}return null},Ii=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Je("Exception was thrown by user callback.",n),e},Math.floor(0))}},cC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,ut(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(e)}}class Qo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="5",Zy="v",e_="s",t_="r",n_="f",r_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,i_="ls",s_="p",cu="ac",o_="websocket",l_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,c=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function c_(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===o_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===l_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hC(t)&&(n.ns=t.namespace);const i=[];return We(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.counters_={}}incrementCounter(e,n=1){$t(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return q1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={},Za={};function Ld(t){const e=t.toString();return Ja[e]||(Ja[e]=new fC),Ja[e]}function pC(t,e){const n=t.toString();return Za[n]||(Za[n]=e()),Za[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ii(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="start",mC="close",yC="pLPCommand",_C="pRTLPCB",u_="id",d_="pw",h_="ser",vC="cb",wC="seg",SC="ts",EC="d",xC="dframe",f_=1870,p_=30,CC=f_-p_,kC=25e3,IC=3e4;class $r{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=io(e),this.stats_=Ld(n),this.urlFn=a=>(this.appCheckToken&&(a[cu]=this.appCheckToken),c_(n,l_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(IC)),tC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Md((...s)=>{const[o,l,a,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===op)this.id=l,this.password=a;else if(o===mC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[op]="t",r[h_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Zy]=Od,this.transportSessionId&&(r[e_]=this.transportSessionId),this.lastSessionId&&(r[i_]=this.lastSessionId),this.applicationId&&(r[s_]=this.applicationId),this.appCheckToken&&(r[cu]=this.appCheckToken),typeof location<"u"&&location.hostname&&r_.test(location.hostname)&&(r[t_]=n_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$r.forceAllow_=!0}static forceDisallow(){$r.forceDisallow_=!0}static isAvailable(){return $r.forceAllow_?!0:!$r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rC()&&!iC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ey(n),i=Xy(r,CC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[xC]="t",r[u_]=e,r[d_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Md{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Jx(),window[yC+this.uniqueCallbackIdentifier]=e,window[_C+this.uniqueCallbackIdentifier]=n,this.myIFrame=Md.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Fe("frame writing exception"),l.stack&&Fe(l.stack),Fe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[u_]=this.myID,e[d_]=this.myPW,e[h_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+p_+r.length<=f_;){const o=this.pendingSegs.shift();r=r+"&"+wC+i+"="+o.seg+"&"+SC+i+"="+o.ts+"&"+EC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(kC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=16384,bC=45e3;let bl=null;typeof MozWebSocket<"u"?bl=MozWebSocket:typeof WebSocket<"u"&&(bl=WebSocket);class Pt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=io(this.connId),this.stats_=Ld(n),this.connURL=Pt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Zy]=Od,typeof location<"u"&&location.hostname&&r_.test(location.hostname)&&(o[t_]=n_),n&&(o[e_]=n),r&&(o[i_]=r),i&&(o[cu]=i),s&&(o[s_]=s),c_(e,o_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dr.set("previous_websocket_failure",!0);try{let r;ay(),this.mySock=new bl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bl!==null&&!Pt.forceDisallow_}static previouslyFailed(){return dr.isInMemoryStorage||dr.get("previous_websocket_failure")===!0}markConnectionHealthy(){dr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=As(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Xy(n,TC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pt.responsesRequiredToBeHealthy=2;Pt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{static get ALL_TRANSPORTS(){return[$r,Pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Pt&&Pt.isAvailable();let r=n&&!Pt.previouslyFailed();if(e.webSocketOnly&&(n||Je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Pt];else{const i=this.transports_=[];for(const s of Ms.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ms.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ms.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=6e4,NC=5e3,PC=10*1024,AC=100*1024,ec="t",lp="d",DC="s",ap="r",OC="e",cp="o",up="a",dp="n",hp="p",LC="h";class MC{constructor(e,n,r,i,s,o,l,a,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=io("c:"+this.id+":"),this.transportManager_=new Ms(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ec in e){const n=e[ec];n===up?this.upgradeIfSecondaryHealthy_():n===ap?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ui("t",e),r=Ui("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:up,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ui("t",e),r=Ui("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ui(ec,e);if(lp in e){const r=e[lp];if(n===LC){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DC?this.onConnectionShutdown_(r):n===ap?this.onReset_(r):n===OC?au("Server Error: "+r):n===cp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):au("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Od!==r&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(NC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends m_{static getInstance(){return new Rl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!yd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=32,pp=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new se("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Hn(t){return t.pieces_.length-t.pieceNum_}function ue(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function jd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function js(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function y_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Ye(t,e){const n=G(t),r=G(e);if(n===null)return e;if(n===r)return Ye(ue(t),ue(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function FC(t,e){const n=js(t,0),r=js(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=br(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Fd(t,e){if(Hn(t)!==Hn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function wt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Hn(t)>Hn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class zC{constructor(e,n){this.errorPrefix_=n,this.parts_=js(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ia(this.parts_[r]);__(this)}}function UC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ia(e),__(t)}function WC(t){const e=t.parts_.pop();t.byteLength_-=ia(e),t.parts_.length>0&&(t.byteLength_-=1)}function __(t){if(t.byteLength_>pp)throw new Error(t.errorPrefix_+"has a key path longer than "+pp+" bytes ("+t.byteLength_+").");if(t.parts_.length>fp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fp+") or object contains a cycle "+sr(t))}function sr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends m_{static getInstance(){return new zd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=1e3,BC=60*5*1e3,gp=30*1e3,VC=1.3,HC=3e4,$C="server_kill",mp=3;class sn extends g_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=sn.nextPersistentConnectionId_++,this.log_=io("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Wi,this.maxReconnectDelay_=BC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ay())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(be(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Xs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;sn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&$t(e,"w")){const r=ui(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):au("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>HC&&(this.reconnectDelay_=Wi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+sn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(f){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,l=new MC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Je(_+" ("+this.repoInfo_.toString()+")"),this.interrupt($C)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Je(f),a())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Jc(this.interruptReasons_)&&(this.reconnectDelay_=Wi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Dd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mp&&(this.reconnectDelay_=gp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Qy.replace(/\./g,"-")]=1,yd()?e["framework.cordova"]=1:ly()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rl.getInstance().currentlyOnline();return Jc(this.interruptReasons_)&&e}}sn.nextPersistentConnectionId_=0;sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new K(fi,e),i=new K(fi,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No;class v_ extends aa{static get __EMPTY_NODE(){return No}static set __EMPTY_NODE(e){No=e}compare(e,n){return br(e.name,n.name)}isDefinedOn(e){throw Si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(xr,No)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,No)}toString(){return".key"}}const ni=new v_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ae{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ae.RED,this.left=i??st.EMPTY_NODE,this.right=s??st.EMPTY_NODE}copy(e,n,r,i,s){return new Ae(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return st.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return st.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ae.RED=!0;Ae.BLACK=!1;class GC{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ae(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class st{constructor(e,n=st.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new st(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ae.BLACK,null,null))}remove(e){return new st(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ae.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Po(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Po(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Po(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Po(this.root_,null,this.comparator_,!0,e)}}st.EMPTY_NODE=new GC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t,e){return br(t.name,e.name)}function Ud(t,e){return br(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uu;function QC(t){uu=t}const w_=function(t){return typeof t=="number"?"number:"+Jy(t):"string:"+t},S_=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$t(e,".sv"),"Priority must be a string or number.")}else k(t===uu||t.isEmpty(),"priority of unexpected type.");k(t===uu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yp;class Ne{static set __childrenNodeConstructor(e){yp=e}static get __childrenNodeConstructor(){return yp}constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),S_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:G(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=G(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Hn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+w_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Jy(this.value_):e+=this.value_,this.lazyHash_=Yy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),s=Ne.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E_,x_;function qC(t){E_=t}function YC(t){x_=t}class XC extends aa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?br(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(xr,new Ne("[PRIORITY-POST]",x_))}makePost(e,n){const r=E_(e);return new K(n,new Ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new XC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=Math.log(2);class ZC{constructor(e){const n=s=>parseInt(Math.log(s)/JC,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Nl=function(t,e,n,r){t.sort(e);const i=function(a,c){const h=c-a;let f,d;if(h===0)return null;if(h===1)return f=t[a],d=n?n(f):f,new Ae(d,f.node,Ae.BLACK,null,null);{const _=parseInt(h/2,10)+a,v=i(a,_),E=i(_+1,c);return f=t[_],d=n?n(f):f,new Ae(d,f.node,Ae.BLACK,v,E)}},s=function(a){let c=null,h=null,f=t.length;const d=function(v,E){const O=f-v,m=f;f-=v;const p=i(O+1,m),g=t[O],w=n?n(g):g;_(new Ae(w,g.node,E,null,p))},_=function(v){c?(c.left=v,c=v):(h=v,c=v)};for(let v=0;v<a.count;++v){const E=a.nextBitIsOne(),O=Math.pow(2,a.count-(v+1));E?d(O,Ae.BLACK):(d(O,Ae.BLACK),d(O,Ae.RED))}return h},o=new ZC(t.length),l=s(o);return new st(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;const Pr={};class tn{static get Default(){return k(Pr&&Ee,"ChildrenNode.ts has not been loaded"),tc=tc||new tn({".priority":Pr},{".priority":Ee}),tc}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ui(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof st?n:null}hasIndex(e){return $t(this.indexSet_,e.toString())}addIndex(e,n){k(e!==ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Nl(r,e.getCompare()):l=Pr;const a=e.toString(),c={...this.indexSet_};c[a]=e;const h={...this.indexes_};return h[a]=l,new tn(h,c)}addToIndexes(e,n){const r=Sl(this.indexes_,(i,s)=>{const o=ui(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===Pr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(K.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Nl(l,o.getCompare())}else return Pr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new K(e.name,l))),a.insert(e,e.node)}});return new tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Sl(this.indexes_,i=>{if(i===Pr)return i;{const s=n.get(e.name);return s?i.remove(new K(e.name,s)):i}});return new tn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;class z{static get EMPTY_NODE(){return Bi||(Bi=new z(new st(Ud),null,tn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&S_(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bi}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bi:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(ue(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new K(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Bi:this.priorityNode_;return new z(i,o,s)}}updateChild(e,n){const r=G(e);if(r===null)return n;{k(G(e)!==".priority"||Hn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ue(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,l)=>{n[o]=l.val(e),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+w_(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Yy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===so?-1:0}withIndex(e){if(e===ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ni?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ek extends z{constructor(){super(new st(Ud),z.EMPTY_NODE,tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const so=new ek;Object.defineProperties(K,{MIN:{value:new K(fi,z.EMPTY_NODE)},MAX:{value:new K(xr,so)}});v_.__EMPTY_NODE=z.EMPTY_NODE;Ne.__childrenNodeConstructor=z;QC(so);YC(so);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=!0;function Te(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Te(e))}if(!(t instanceof Array)&&tk){const n=[];let r=!1;if(We(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new K(o,a)))}}),n.length===0)return z.EMPTY_NODE;const s=Nl(n,KC,o=>o.name,Ud);if(r){const o=Nl(n,Ee.getCompare());return new z(s,Te(e),new tn({".priority":o},{".priority":Ee}))}else return new z(s,Te(e),tn.Default)}else{let n=z.EMPTY_NODE;return We(t,(r,i)=>{if($t(t,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(e))}}qC(Te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk extends aa{constructor(e){super(),this.indexPath_=e,k(!q(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?br(e.name,n.name):s}makePost(e,n){const r=Te(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,so);return new K(xr,e)}toString(){return js(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk extends aa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?br(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const r=Te(e);return new K(n,r)}toString(){return".value"}}const ik=new rk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t){return{type:"value",snapshotNode:t}}function pi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sk(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Fs(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(pi(n,r)):o.trackChildChange(zs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(Fs(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(zs(i,s,o))}else r.trackChildChange(pi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.indexedFilter_=new Wd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Us.getStartPost_(e),this.endPost_=Us.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new K(n,r))||(r=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,l)=>{s.matches(new K(o,l))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Us(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new K(n,r))||(r=z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,_)=>f(_,d)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new K(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const f=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,a);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(zs(n,r,f)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Fs(n,f));const E=l.updateImmediateChild(n,z.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(pi(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return r.isEmpty()?e:h&&o(c,a)>=0?(s!=null&&(s.trackChildChange(Fs(c.name,c.node)),s.trackChildChange(pi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:fi}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:xr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new Bd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lk(t){return t.loadsAllData()?new Wd(t.getIndex()):t.hasLimit()?new ok(t):new Us(t)}function _p(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===ik?n="$value":t.index_===ni?n="$key":(k(t.index_ instanceof nk,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=be(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+be(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=be(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+be(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl extends g_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=io("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Pl.getListenId_(e,r),l={};this.listens_[o]=l;const a=_p(e._queryParams);this.restRequest_(s+".json",a,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),ui(this.listens_,o)===l){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const r=Pl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=_p(e._queryParams),r=e._path.toString(),i=new Xs;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=As(l.responseText)}catch{Je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(){return{value:null,children:new Map}}function k_(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=G(e);t.children.has(r)||t.children.set(r,Al());const i=t.children.get(r);e=ue(e),k_(i,e,n)}}function du(t,e,n){t.value!==null?n(e,t.value):ck(t,(r,i)=>{const s=new se(e.toString()+"/"+r);du(i,s,n)})}function ck(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&We(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=10*1e3,dk=30*1e3,hk=5*60*1e3;class fk{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uk(e);const r=wp+(dk-wp)*Math.random();cs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;We(e,(i,s)=>{s>0&&$t(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*hk))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function Vd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $d(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Dt.ACK_USER_WRITE,this.source=Vd()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Dl(ee(),n,this.revert)}}else return k(G(this.path)===e,"operationForChild called for unrelated child."),new Dl(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.source=e,this.path=n,this.type=Dt.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Ws(this.source,ee()):new Ws(this.source,ue(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Dt.OVERWRITE}operationForChild(e){return q(this.path)?new Cr(this.source,ee(),this.snap.getImmediateChild(e)):new Cr(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Dt.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Cr(this.source,ee(),n.value):new gi(this.source,ee(),n)}else return k(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gi(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gk(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(sk(o.childName,o.snapshotNode))}),Vi(t,i,"child_removed",e,r,n),Vi(t,i,"child_added",e,r,n),Vi(t,i,"child_moved",s,r,n),Vi(t,i,"child_changed",e,r,n),Vi(t,i,"value",e,r,n),i}function Vi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>yk(t,l,a)),o.forEach(l=>{const a=mk(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function mk(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yk(t,e,n){if(e.childName==null||n.childName==null)throw Si("Should only compare child_ events.");const r=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t,e){return{eventCache:t,serverCache:e}}function us(t,e,n,r){return ca(new $n(e,n,r),t.serverCache)}function I_(t,e,n,r){return ca(t.eventCache,new $n(e,n,r))}function Ol(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc;const _k=()=>(nc||(nc=new st(nC)),nc);class ce{static fromObject(e){let n=new ce(null);return We(e,(r,i)=>{n=n.set(new se(r),i)}),n}constructor(e,n=_k()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(q(e))return null;{const r=G(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ue(e),n);return s!=null?{path:Se(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=G(e),r=this.children.get(n);return r!==null?r.subtree(ue(e)):new ce(null)}}set(e,n){if(q(e))return new ce(n,this.children);{const r=G(e),s=(this.children.get(r)||new ce(null)).set(ue(e),n),o=this.children.insert(r,s);return new ce(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=G(e),r=this.children.get(n);if(r){const i=r.remove(ue(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=G(e),r=this.children.get(n);return r?r.get(ue(e)):null}}setTree(e,n){if(q(e))return n;{const r=G(e),s=(this.children.get(r)||new ce(null)).setTree(ue(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ce(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(q(e))return null;{const s=G(e),o=this.children.get(s);return o?o.findOnPath_(ue(e),Se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,r){if(q(e))return this;{this.value&&r(n,this.value);const i=G(e),s=this.children.get(i);return s?s.foreachOnPath_(ue(e),Se(n,i),r):new ce(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.writeTree_=e}static empty(){return new jt(new ce(null))}}function ds(t,e,n){if(q(e))return new jt(new ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ye(i,e);return s=s.updateChild(o,n),new jt(t.writeTree_.set(i,s))}else{const i=new ce(n),s=t.writeTree_.setTree(e,i);return new jt(s)}}}function hu(t,e,n){let r=t;return We(n,(i,s)=>{r=ds(r,Se(e,i),s)}),r}function Sp(t,e){if(q(e))return jt.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new jt(n)}}function fu(t,e){return Rr(t,e)!=null}function Rr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ye(n.path,e)):null}function Ep(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{e.push(new K(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new K(r,i.value))}),e}function Un(t,e){if(q(e))return t;{const n=Rr(t,e);return n!=null?new jt(new ce(n)):new jt(t.writeTree_.subtree(e))}}function pu(t){return t.writeTree_.isEmpty()}function mi(t,e){return T_(ee(),t.writeTree_,e)}function T_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=T_(Se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Se(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(t,e){return P_(e,t)}function vk(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ds(t.visibleWrites,e,n)),t.lastWriteId=r}function wk(t,e,n,r){k(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=hu(t.visibleWrites,e,n),t.lastWriteId=r}function Sk(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Ek(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&xk(l,r.path)?i=!1:wt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Ck(t),!0;if(r.snap)t.visibleWrites=Sp(t.visibleWrites,r.path);else{const l=r.children;We(l,a=>{t.visibleWrites=Sp(t.visibleWrites,Se(r.path,a))})}return!0}else return!1}function xk(t,e){if(t.snap)return wt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wt(Se(t.path,n),e))return!0;return!1}function Ck(t){t.visibleWrites=b_(t.allWrites,kk,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function kk(t){return t.visible}function b_(t,e,n){let r=jt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)wt(n,o)?(l=Ye(n,o),r=ds(r,l,s.snap)):wt(o,n)&&(l=Ye(o,n),r=ds(r,ee(),s.snap.getChild(l)));else if(s.children){if(wt(n,o))l=Ye(n,o),r=hu(r,l,s.children);else if(wt(o,n))if(l=Ye(o,n),q(l))r=hu(r,ee(),s.children);else{const a=ui(s.children,G(l));if(a){const c=a.getChild(ue(l));r=ds(r,ee(),c)}}}else throw Si("WriteRecord should have .snap or .children")}}return r}function R_(t,e,n,r,i){if(!r&&!i){const s=Rr(t.visibleWrites,e);if(s!=null)return s;{const o=Un(t.visibleWrites,e);if(pu(o))return n;if(n==null&&!fu(o,ee()))return null;{const l=n||z.EMPTY_NODE;return mi(o,l)}}}else{const s=Un(t.visibleWrites,e);if(!i&&pu(s))return n;if(!i&&n==null&&!fu(s,ee()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(wt(c.path,e)||wt(e,c.path))},l=b_(t.allWrites,o,e),a=n||z.EMPTY_NODE;return mi(l,a)}}}function Ik(t,e,n){let r=z.EMPTY_NODE;const i=Rr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Un(t.visibleWrites,e);return n.forEachChild(Ee,(o,l)=>{const a=mi(Un(s,new se(o)),l);r=r.updateImmediateChild(o,a)}),Ep(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Un(t.visibleWrites,e);return Ep(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Tk(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Se(e,n);if(fu(t.visibleWrites,s))return null;{const o=Un(t.visibleWrites,s);return pu(o)?i.getChild(n):mi(o,i.getChild(n))}}function bk(t,e,n,r){const i=Se(e,n),s=Rr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Un(t.visibleWrites,i);return mi(o,r.getNode().getImmediateChild(n))}else return null}function Rk(t,e){return Rr(t.visibleWrites,e)}function Nk(t,e,n,r,i,s,o){let l;const a=Un(t.visibleWrites,e),c=Rr(a,ee());if(c!=null)l=c;else if(n!=null)l=mi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],f=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=d.getNext();for(;_&&h.length<i;)f(_,r)!==0&&h.push(_),_=d.getNext();return h}else return[]}function Pk(){return{visibleWrites:jt.empty(),allWrites:[],lastWriteId:-1}}function Ll(t,e,n,r){return R_(t.writeTree,t.treePath,e,n,r)}function Gd(t,e){return Ik(t.writeTree,t.treePath,e)}function xp(t,e,n,r){return Tk(t.writeTree,t.treePath,e,n,r)}function Ml(t,e){return Rk(t.writeTree,Se(t.treePath,e))}function Ak(t,e,n,r,i,s){return Nk(t.writeTree,t.treePath,e,n,r,i,s)}function Kd(t,e,n){return bk(t.writeTree,t.treePath,e,n)}function N_(t,e){return P_(Se(t.treePath,e),t.writeTree)}function P_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,zs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Fs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,pi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,zs(r,e.snapshotNode,i.oldSnap));else throw Si("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const A_=new Ok;class Qd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new $n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),s=Ak(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){return{filter:t}}function Mk(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jk(t,e,n,r,i){const s=new Dk;let o,l;if(n.type===Dt.OVERWRITE){const c=n;c.source.fromUser?o=gu(t,e,c.path,c.snap,r,i,s):(k(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=jl(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===Dt.MERGE){const c=n;c.source.fromUser?o=zk(t,e,c.path,c.children,r,i,s):(k(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=mu(t,e,c.path,c.children,r,i,l,s))}else if(n.type===Dt.ACK_USER_WRITE){const c=n;c.revert?o=Bk(t,e,c.path,r,i,s):o=Uk(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Dt.LISTEN_COMPLETE)o=Wk(t,e,n.path,r,s);else throw Si("Unknown operation type: "+n.type);const a=s.getChanges();return Fk(e,o,a),{viewCache:o,changes:a}}function Fk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ol(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(C_(Ol(e)))}}function D_(t,e,n,r,i,s){const o=e.eventCache;if(Ml(r,n)!=null)return e;{let l,a;if(q(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kr(e),h=c instanceof z?c:z.EMPTY_NODE,f=Gd(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Ll(r,kr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=G(n);if(c===".priority"){k(Hn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const f=xp(r,n,h,a);f!=null?l=t.filter.updatePriority(h,f):l=o.getNode()}else{const h=ue(n);let f;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const d=xp(r,n,o.getNode(),a);d!=null?f=o.getNode().getImmediateChild(c).updateChild(h,d):f=o.getNode().getImmediateChild(c)}else f=Kd(r,c,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),c,f,h,i,s):l=o.getNode()}}return us(e,l,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function jl(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);c=h.updateFullNode(a.getNode(),_,null)}else{const _=G(n);if(!a.isCompleteForPath(n)&&Hn(n)>1)return e;const v=ue(n),O=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=h.updatePriority(a.getNode(),O):c=h.updateChild(a.getNode(),_,O,v,A_,null)}const f=I_(e,c,a.isFullyInitialized()||q(n),h.filtersNodes()),d=new Qd(i,f,s);return D_(t,f,n,i,d,l)}function gu(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const h=new Qd(i,e,s);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=us(e,c,!0,t.filter.filtersNodes());else{const f=G(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=us(e,c,l.isFullyInitialized(),l.isFiltered());else{const d=ue(n),_=l.getNode().getImmediateChild(f);let v;if(q(d))v=r;else{const E=h.getCompleteChild(f);E!=null?jd(d)===".priority"&&E.getChild(y_(d)).isEmpty()?v=E:v=E.updateChild(d,r):v=z.EMPTY_NODE}if(_.equals(v))a=e;else{const E=t.filter.updateChild(l.getNode(),f,v,d,h,o);a=us(e,E,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Cp(t,e){return t.eventCache.isCompleteForChild(e)}function zk(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const h=Se(n,a);Cp(e,G(h))&&(l=gu(t,l,h,c,i,s,o))}),r.foreach((a,c)=>{const h=Se(n,a);Cp(e,G(h))||(l=gu(t,l,h,c,i,s,o))}),l}function kp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function mu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;q(n)?c=r:c=new ce(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),v=kp(t,_,d);a=jl(t,a,new se(f),v,i,s,o,l)}}),c.children.inorderTraversal((f,d)=>{const _=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!h.hasChild(f)&&!_){const v=e.serverCache.getNode().getImmediateChild(f),E=kp(t,v,d);a=jl(t,a,new se(f),E,i,s,o,l)}}),a}function Uk(t,e,n,r,i,s,o){if(Ml(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(q(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return jl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(q(n)){let c=new ce(null);return a.getNode().forEachChild(ni,(h,f)=>{c=c.set(new se(h),f)}),mu(t,e,n,c,i,s,l,o)}else return e}else{let c=new ce(null);return r.foreach((h,f)=>{const d=Se(n,h);a.isCompleteForPath(d)&&(c=c.set(h,a.getNode().getChild(d)))}),mu(t,e,n,c,i,s,l,o)}}function Wk(t,e,n,r,i){const s=e.serverCache,o=I_(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return D_(t,o,n,r,A_,i)}function Bk(t,e,n,r,i,s){let o;if(Ml(r,n)!=null)return e;{const l=new Qd(r,e,i),a=e.eventCache.getNode();let c;if(q(n)||G(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Ll(r,kr(e));else{const f=e.serverCache.getNode();k(f instanceof z,"serverChildren would be complete if leaf node"),h=Gd(r,f)}h=h,c=t.filter.updateFullNode(a,h,s)}else{const h=G(n);let f=Kd(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=a.getImmediateChild(h)),f!=null?c=t.filter.updateChild(a,h,f,ue(n),l,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(a,h,z.EMPTY_NODE,ue(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ll(r,kr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Ml(r,ee())!=null,us(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Wd(r.getIndex()),s=lk(r);this.processor_=Lk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(z.EMPTY_NODE,l.getNode(),null),h=new $n(a,o.isFullyInitialized(),i.filtersNodes()),f=new $n(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ca(f,h),this.eventGenerator_=new pk(this.query_)}get query(){return this.query_}}function Hk(t){return t.viewCache_.serverCache.getNode()}function $k(t){return Ol(t.viewCache_)}function Gk(t,e){const n=kr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function Ip(t){return t.eventRegistrations_.length===0}function Kk(t,e){t.eventRegistrations_.push(e)}function Tp(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function bp(t,e,n,r){e.type===Dt.MERGE&&e.source.queryId!==null&&(k(kr(t.viewCache_),"We should always have a full cache before handling merges"),k(Ol(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=jk(t.processor_,i,e,n,r);return Mk(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,O_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Qk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(pi(s,o))}),n.isFullyInitialized()&&r.push(C_(n.getNode())),O_(t,r,n.getNode(),e)}function O_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return gk(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl;class L_{constructor(){this.views=new Map}}function qk(t){k(!Fl,"__referenceConstructor has already been defined"),Fl=t}function Yk(){return k(Fl,"Reference.ts has not been loaded"),Fl}function Xk(t){return t.views.size===0}function qd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),bp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(bp(o,e,n,r));return s}}function M_(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Ll(n,i?r:null),a=!1;l?a=!0:r instanceof z?(l=Gd(n,r),a=!1):(l=z.EMPTY_NODE,a=!1);const c=ca(new $n(l,a,!1),new $n(r,i,!1));return new Vk(e,c)}return o}function Jk(t,e,n,r,i,s){const o=M_(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Kk(o,n),Qk(o,n)}function Zk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Gn(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(Tp(c,n,r)),Ip(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(Tp(a,n,r)),Ip(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Gn(t)&&s.push(new(Yk())(e._repo,e._path)),{removed:s,events:o}}function j_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Wn(t,e){let n=null;for(const r of t.views.values())n=n||Gk(r,e);return n}function F_(t,e){if(e._queryParams.loadsAllData())return da(t);{const r=e._queryIdentifier;return t.views.get(r)}}function z_(t,e){return F_(t,e)!=null}function Gn(t){return da(t)!=null}function da(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl;function eI(t){k(!zl,"__referenceConstructor has already been defined"),zl=t}function tI(){return k(zl,"Reference.ts has not been loaded"),zl}let nI=1;class Rp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=Pk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function U_(t,e,n,r,i){return vk(t.pendingWriteTree_,e,n,r,i),i?Ti(t,new Cr(Vd(),e,n)):[]}function rI(t,e,n,r){wk(t.pendingWriteTree_,e,n,r);const i=ce.fromObject(n);return Ti(t,new gi(Vd(),e,i))}function bn(t,e,n=!1){const r=Sk(t.pendingWriteTree_,e);if(Ek(t.pendingWriteTree_,e)){let s=new ce(null);return r.snap!=null?s=s.set(ee(),!0):We(r.children,o=>{s=s.set(new se(o),!0)}),Ti(t,new Dl(r.path,s,n))}else return[]}function oo(t,e,n){return Ti(t,new Cr(Hd(),e,n))}function iI(t,e,n){const r=ce.fromObject(n);return Ti(t,new gi(Hd(),e,r))}function sI(t,e){return Ti(t,new Ws(Hd(),e))}function oI(t,e,n){const r=Xd(t,n);if(r){const i=Jd(r),s=i.path,o=i.queryId,l=Ye(s,e),a=new Ws($d(o),l);return Zd(t,s,a)}else return[]}function Ul(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||z_(o,e))){const a=Zk(o,e,n,r);Xk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(d,_)=>Gn(_));if(h&&!f){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const _=cI(d);for(let v=0;v<_.length;++v){const E=_[v],O=E.query,m=H_(t,E);t.listenProvider_.startListening(hs(O),Bs(t,O),m.hashFn,m.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(hs(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(ha(d));t.listenProvider_.stopListening(hs(d),_)}))}uI(t,c)}return l}function W_(t,e,n,r){const i=Xd(t,r);if(i!=null){const s=Jd(i),o=s.path,l=s.queryId,a=Ye(o,e),c=new Cr($d(l),a,n);return Zd(t,o,c)}else return[]}function lI(t,e,n,r){const i=Xd(t,r);if(i){const s=Jd(i),o=s.path,l=s.queryId,a=Ye(o,e),c=ce.fromObject(n),h=new gi($d(l),a,c);return Zd(t,o,h)}else return[]}function yu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const v=Ye(d,i);s=s||Wn(_,v),o=o||Gn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Gn(l),s=s||Wn(l,ee())):(l=new L_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const E=Wn(v,ee());E&&(s=s.updateImmediateChild(_,E))}));const c=z_(l,e);if(!c&&!e._queryParams.loadsAllData()){const d=ha(e);k(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=dI();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const h=ua(t.pendingWriteTree_,i);let f=Jk(l,e,n,h,s,a);if(!c&&!o&&!r){const d=F_(l,e);f=f.concat(hI(t,e,d))}return f}function Yd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ye(o,e),c=Wn(l,a);if(c)return c});return R_(i,e,s,n,!0)}function aI(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,h)=>{const f=Ye(c,n);r=r||Wn(h,f)});let i=t.syncPointTree_.get(n);i?r=r||Wn(i,ee()):(i=new L_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new $n(r,!0,!1):null,l=ua(t.pendingWriteTree_,e._path),a=M_(i,e,l,s?o.getNode():z.EMPTY_NODE,s);return $k(a)}function Ti(t,e){return B_(e,t.syncPointTree_,null,ua(t.pendingWriteTree_,ee()))}function B_(t,e,n,r){if(q(t.path))return V_(t,e,n,r);{const i=e.get(ee());n==null&&i!=null&&(n=Wn(i,ee()));let s=[];const o=G(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,h=N_(r,o);s=s.concat(B_(l,a,c,h))}return i&&(s=s.concat(qd(i,t,r,n))),s}}function V_(t,e,n,r){const i=e.get(ee());n==null&&i!=null&&(n=Wn(i,ee()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=N_(r,o),h=t.operationForChild(o);h&&(s=s.concat(V_(h,l,a,c)))}),i&&(s=s.concat(qd(i,t,r,n))),s}function H_(t,e){const n=e.query,r=Bs(t,n);return{hashFn:()=>(Hk(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?oI(t,n._path,r):sI(t,n._path);{const s=sC(i,n);return Ul(t,n,null,s)}}}}function Bs(t,e){const n=ha(e);return t.queryToTagMap.get(n)}function ha(t){return t._path.toString()+"$"+t._queryIdentifier}function Xd(t,e){return t.tagToQueryMap.get(e)}function Jd(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Zd(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=ua(t.pendingWriteTree_,e);return qd(r,n,i,null)}function cI(t){return t.fold((e,n,r)=>{if(n&&Gn(n))return[da(n)];{let i=[];return n&&(i=j_(n)),We(r,(s,o)=>{i=i.concat(o)}),i}})}function hs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(tI())(t._repo,t._path):t}function uI(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=ha(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function dI(){return nI++}function hI(t,e,n){const r=e._path,i=Bs(t,e),s=H_(t,n),o=t.listenProvider_.startListening(hs(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!Gn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,h,f)=>{if(!q(c)&&h&&Gn(h))return[da(h).query];{let d=[];return h&&(d=d.concat(j_(h).map(_=>_.query))),We(f,(_,v)=>{d=d.concat(v)}),d}});for(let c=0;c<a.length;++c){const h=a[c];t.listenProvider_.stopListening(hs(h),Bs(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new eh(n)}node(){return this.node_}}class th{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Se(this.path_,e);return new th(this.syncTree_,n)}node(){return Yd(this.syncTree_,this.path_)}}const fI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Np=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gI(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},gI=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},$_=function(t,e,n,r){return nh(e,new th(n,t),r)},G_=function(t,e,n){return nh(t,new eh(e),n)};function nh(t,e,n){const r=t.getPriority().val(),i=Np(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Np(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ne(l,Te(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ne(i))),o.forEachChild(Ee,(l,a)=>{const c=nh(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ih(t,e){let n=e instanceof se?e:new se(e),r=t,i=G(n);for(;i!==null;){const s=ui(r.node.children,i)||{children:{},childCount:0};r=new rh(i,r,s),n=ue(n),i=G(n)}return r}function bi(t){return t.node.value}function K_(t,e){t.node.value=e,_u(t)}function Q_(t){return t.node.childCount>0}function mI(t){return bi(t)===void 0&&!Q_(t)}function fa(t,e){We(t.node.children,(n,r)=>{e(new rh(n,t,r))})}function q_(t,e,n,r){n&&!r&&e(t),fa(t,i=>{q_(i,e,!0,r)}),n&&r&&e(t)}function yI(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function lo(t){return new se(t.parent===null?t.name:lo(t.parent)+"/"+t.name)}function _u(t){t.parent!==null&&_I(t.parent,t.name,t)}function _I(t,e,n){const r=mI(n),i=$t(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,_u(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,_u(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=/[\[\].#$\/\u0000-\u001F\u007F]/,wI=/[\[\].#$\u0000-\u001F\u007F]/,rc=10*1024*1024,sh=function(t){return typeof t=="string"&&t.length!==0&&!vI.test(t)},Y_=function(t){return typeof t=="string"&&t.length!==0&&!wI.test(t)},SI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Y_(t)},EI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ad(t)||t&&typeof t=="object"&&$t(t,".sv")},X_=function(t,e,n,r){r&&e===void 0||pa(ra(t,"value"),e,n)},pa=function(t,e,n){const r=n instanceof se?new zC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+sr(r));if(typeof e=="function")throw new Error(t+"contains a function "+sr(r)+" with contents = "+e.toString());if(Ad(e))throw new Error(t+"contains "+e.toString()+" "+sr(r));if(typeof e=="string"&&e.length>rc/3&&ia(e)>rc)throw new Error(t+"contains a string greater than "+rc+" utf8 bytes "+sr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(We(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!sh(o)))throw new Error(t+" contains an invalid key ("+o+") "+sr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);UC(r,o),pa(t,l,r),WC(r)}),i&&s)throw new Error(t+' contains ".value" child '+sr(r)+" in addition to actual children.")}},xI=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=js(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!sh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(FC);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&wt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},CI=function(t,e,n,r){const i=ra(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];We(e,(o,l)=>{const a=new se(o);if(pa(i,l,Se(n,a)),jd(a)===".priority"&&!EI(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),xI(i,s)},J_=function(t,e,n,r){if(!Y_(n))throw new Error(ra(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),J_(t,e,n)},oh=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},II=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!SI(n))throw new Error(ra(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ga(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Fd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Z_(t,e,n){ga(t,n),ev(t,r=>Fd(r,e))}function kt(t,e,n){ga(t,n),ev(t,r=>wt(r,e)||wt(e,r))}function ev(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(bI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function bI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();as&&Fe("event: "+n.toString()),Ii(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="repo_interrupt",NI=25;class PI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Al(),this.transactionQueueTree_=new rh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AI(t,e,n){if(t.stats_=Ld(t.repoInfo_),t.forceRestClient_||cC())t.server_=new Pl(t.repoInfo_,(r,i,s,o)=>{Pp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ap(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new sn(t.repoInfo_,e,(r,i,s,o)=>{Pp(t,r,i,s,o)},r=>{Ap(t,r)},r=>{DI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pC(t.repoInfo_,()=>new fk(t.stats_,t.server_)),t.infoData_=new ak,t.infoSyncTree_=new Rp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=oo(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),lh(t,"connected",!1),t.serverSyncTree_=new Rp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);kt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function tv(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ma(t){return fI({timestamp:tv(t)})}function Pp(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Sl(n,c=>Te(c));o=lI(t.serverSyncTree_,s,a,i)}else{const a=Te(n);o=W_(t.serverSyncTree_,s,a,i)}else if(r){const a=Sl(n,c=>Te(c));o=iI(t.serverSyncTree_,s,a)}else{const a=Te(n);o=oo(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=yi(t,s)),kt(t.eventQueue_,l,o)}function Ap(t,e){lh(t,"connected",e),e===!1&&jI(t)}function DI(t,e){We(e,(n,r)=>{lh(t,n,r)})}function lh(t,e,n){const r=new se("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(r,i);const s=oo(t.infoSyncTree_,r,i);kt(t.eventQueue_,r,s)}function ah(t){return t.nextWriteId_++}function OI(t,e,n){const r=aI(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Te(i).withIndex(e._queryParams.getIndex());yu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=oo(t.serverSyncTree_,e._path,s);else{const l=Bs(t.serverSyncTree_,e);o=W_(t.serverSyncTree_,e._path,s,l)}return kt(t.eventQueue_,e._path,o),Ul(t.serverSyncTree_,e,n,null,!0),s},i=>(ao(t,"get for query "+be(e)+" failed: "+i),Promise.reject(new Error(i))))}function LI(t,e,n,r,i){ao(t,"set",{path:e.toString(),value:n,priority:r});const s=ma(t),o=Te(n,r),l=Yd(t.serverSyncTree_,e),a=G_(o,l,s),c=ah(t),h=U_(t.serverSyncTree_,e,a,c,!0);ga(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const v=d==="ok";v||Je("set at "+e+" failed: "+d);const E=bn(t.serverSyncTree_,c,!v);kt(t.eventQueue_,e,E),vu(t,i,d,_)});const f=uh(t,e);yi(t,f),kt(t.eventQueue_,f,[])}function MI(t,e,n,r){ao(t,"update",{path:e.toString(),value:n});let i=!0;const s=ma(t),o={};if(We(n,(l,a)=>{i=!1,o[l]=$_(Se(e,l),Te(a),t.serverSyncTree_,s)}),i)Fe("update() called with empty data.  Don't do anything."),vu(t,r,"ok",void 0);else{const l=ah(t),a=rI(t.serverSyncTree_,e,o,l);ga(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,h)=>{const f=c==="ok";f||Je("update at "+e+" failed: "+c);const d=bn(t.serverSyncTree_,l,!f),_=d.length>0?yi(t,e):e;kt(t.eventQueue_,_,d),vu(t,r,c,h)}),We(n,c=>{const h=uh(t,Se(e,c));yi(t,h)}),kt(t.eventQueue_,e,[])}}function jI(t){ao(t,"onDisconnectEvents");const e=ma(t),n=Al();du(t.onDisconnect_,ee(),(i,s)=>{const o=$_(i,s,t.serverSyncTree_,e);k_(n,i,o)});let r=[];du(n,ee(),(i,s)=>{r=r.concat(oo(t.serverSyncTree_,i,s));const o=uh(t,i);yi(t,o)}),t.onDisconnect_=Al(),kt(t.eventQueue_,ee(),r)}function FI(t,e,n){let r;G(e._path)===".info"?r=yu(t.infoSyncTree_,e,n):r=yu(t.serverSyncTree_,e,n),Z_(t.eventQueue_,e._path,r)}function zI(t,e,n){let r;G(e._path)===".info"?r=Ul(t.infoSyncTree_,e,n):r=Ul(t.serverSyncTree_,e,n),Z_(t.eventQueue_,e._path,r)}function UI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RI)}function ao(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function vu(t,e,n,r){e&&Ii(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function nv(t,e,n){return Yd(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function ch(t,e=t.transactionQueueTree_){if(e||ya(t,e),bi(e)){const n=iv(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&WI(t,lo(e),n)}else Q_(e)&&fa(e,n=>{ch(t,n)})}function WI(t,e,n){const r=n.map(c=>c.currentWriteId),i=nv(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];k(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=Ye(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{ao(t,"transaction put response",{path:a.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(bn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();ya(t,ih(t.transactionQueueTree_,e)),ch(t,t.transactionQueueTree_),kt(t.eventQueue_,e,h);for(let d=0;d<f.length;d++)Ii(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Je("transaction at "+a.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}yi(t,e)}},o)}function yi(t,e){const n=rv(t,e),r=lo(n),i=iv(t,n);return BI(t,i,r),r}function BI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Ye(n,a.path);let h=!1,f;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,f=a.abortReason,i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=NI)h=!0,f="maxretry",i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=nv(t,a.path,o);a.currentInputSnapshot=d;const _=e[l].update(d.val());if(_!==void 0){pa("transaction failed: Data returned ",_,a.path);let v=Te(_);typeof _=="object"&&_!=null&&$t(_,".priority")||(v=v.updatePriority(d.getPriority()));const O=a.currentWriteId,m=ma(t),p=G_(v,d,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=ah(t),o.splice(o.indexOf(O),1),i=i.concat(U_(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(bn(t.serverSyncTree_,O,!0))}else h=!0,f="nodata",i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0))}kt(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(f),!1,null))))}ya(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Ii(r[l]);ch(t,t.transactionQueueTree_)}function rv(t,e){let n,r=t.transactionQueueTree_;for(n=G(e);n!==null&&bi(r)===void 0;)r=ih(r,n),e=ue(e),n=G(e);return r}function iv(t,e){const n=[];return sv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function sv(t,e,n){const r=bi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);fa(e,i=>{sv(t,i,n)})}function ya(t,e){const n=bi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,K_(e,n.length>0?n:void 0)}fa(e,r=>{ya(t,r)})}function uh(t,e){const n=lo(rv(t,e)),r=ih(t.transactionQueueTree_,e);return yI(r,i=>{ic(t,i)}),ic(t,r),q_(r,i=>{ic(t,i)}),n}function ic(t,e){const n=bi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?K_(e,void 0):n.length=s+1,kt(t.eventQueue_,lo(e),i);for(let o=0;o<r.length;o++)Ii(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function HI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Dp=function(t,e){const n=$I(t),r=n.namespace;n.domain==="firebase.com"&&hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new a_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},$I=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=VI(t.substring(h,f)));const d=HI(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",GI=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Op.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Op.charAt(e[i]);return k(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+be(this.snapshot.exportVal())}}class QI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return q(this._path)?null:jd(this._path)}get ref(){return new gn(this._repo,this._path)}get _queryIdentifier(){const e=vp(this._queryParams),n=Dd(e);return n==="{}"?"default":n}get _queryObject(){return vp(this._queryParams)}isEqual(e){if(e=Be(e),!(e instanceof dh))return!1;const n=this._repo===e._repo,r=Fd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+jC(this._path)}}class gn extends dh{constructor(e,n){super(e,n,new Bd,!1)}get parent(){const e=y_(this._path);return e===null?null:new gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=Hs(this.ref,e);return new Vs(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Vs(i,Hs(this.ref,r),Ee)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function je(t,e){return t=Be(t),t._checkNotDeleted("ref"),e!==void 0?Hs(t._root,e):t._root}function Hs(t,e){return t=Be(t),G(t._path)===null?kI("child","path",e):J_("child","path",e),new gn(t._repo,Se(t._path,e))}function qI(t,e){t=Be(t),oh("push",t._path),X_("push",e,t._path,!0);const n=tv(t._repo),r=GI(n),i=Hs(t,r),s=Hs(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function YI(t){return oh("remove",t._path),$s(t,null)}function $s(t,e){t=Be(t),oh("set",t._path),X_("set",e,t._path,!1);const n=new Xs;return LI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function or(t,e){CI("update",e,t._path);const n=new Xs;return MI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function lv(t){t=Be(t);const e=new ov(()=>{}),n=new _a(e);return OI(t._repo,t,n).then(r=>new Vs(r,new gn(t._repo,t._path),t._queryParams.getIndex()))}class _a{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new KI("value",this,new Vs(e.snapshotNode,new gn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new QI(this,e,n):null}matches(e){return e instanceof _a?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function XI(t,e,n,r,i){const s=new ov(n,void 0),o=new _a(s);return FI(t._repo,t,o),()=>zI(t._repo,t,o)}function fs(t,e,n,r){return XI(t,"value",e)}qk(gn);eI(gn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="FIREBASE_DATABASE_EMULATOR_HOST",wu={};let ZI=!1;function eT(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Ei(s);t.repoInfo_=new a_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function tT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Dp(s,i),l=o.repoInfo,a;typeof process<"u"&&tp&&(a=tp[JI]),a?(s=`http://${a}?ns=${l.namespace}`,o=Dp(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new dC(t.name,t.options,e);II("Invalid Firebase Database URL",o),q(o.path)||hn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=rT(l,t,c,new uC(t,n));return new iT(h,t)}function nT(t,e){const n=wu[e];(!n||n[t.key]!==t)&&hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),UI(t),delete n[t.key]}function rT(t,e,n,r){let i=wu[e.name];i||(i={},wu[e.name]=i);let s=i[t.toURLString()];return s&&hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new PI(t,ZI,n,r),i[t.toURLString()]=s,s}class iT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hn("Cannot call "+e+" on a deleted database.")}}function av(t=hy(),e){const n=wd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=tw("database");r&&sT(n,...r)}return n}function sT(t,e,n,r={}){t=Be(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&vr(r,s.repoInfo_.emulatorOptions))return;hn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Qo(Qo.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:nw(r.mockUserToken,t.app.options.projectId);o=new Qo(l)}Ei(e)&&(sy(e),oy("Database",!0)),eT(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t){Qx(Ci),di(new wr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return tT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),zn(np,rp,t),zn(np,rp,"esm2020")}sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};oT();const lT={apiKey:"AIzaSyA_2340AhDRdUOJGq8dX7eV2b2caxegj54",authDomain:"green-move-3a29d.firebaseapp.com",projectId:"green-move-3a29d",storageBucket:"green-move-3a29d.firebasestorage.app",messagingSenderId:"397397942804",appId:"1:397397942804:web:f809cd260a0aa4fae9bd01",databaseURL:"https://green-move-3a29d-default-rtdb.firebaseio.com"},cv=Sd(lT),ps=Gx(cv),mt=av(cv),aT=new Yt,cT=[{id:1,icon:"🚶",title:"以步代車",desc:"今天步行或騎自行車代替開車",points:30,category:"交通",difficulty:"簡單"},{id:2,icon:"🛍️",title:"自備購物袋",desc:"購物時使用環保袋，拒絕塑膠袋",points:20,category:"生活",difficulty:"簡單"},{id:3,icon:"💧",title:"節水挑戰",desc:"洗澡縮短至5分鐘以內",points:25,category:"用水",difficulty:"中等"},{id:4,icon:"🌱",title:"種一棵植物",desc:"在家種植一盆植物或蔬菜",points:50,category:"生態",difficulty:"中等"},{id:5,icon:"♻️",title:"垃圾分類達人",desc:"正確分類今日所有垃圾",points:20,category:"回收",difficulty:"簡單"},{id:6,icon:"🥗",title:"無肉星期一",desc:"今天只吃蔬食，減少碳排放",points:40,category:"飲食",difficulty:"中等"},{id:7,icon:"💡",title:"節電行動",desc:"今天減少1小時的電器使用",points:30,category:"能源",difficulty:"簡單"},{id:8,icon:"🧴",title:"拒絕一次性",desc:"使用可重複使用的餐具或杯子",points:25,category:"生活",difficulty:"簡單"},{id:9,icon:"🌊",title:"淨灘行動",desc:"參與或自行清理附近的垃圾",points:100,category:"社區",difficulty:"困難"},{id:10,icon:"🔋",title:"舊電池回收",desc:"收集舊電池送至回收站",points:35,category:"回收",difficulty:"中等"}],uT=[{id:"p1",icon:"🌳",title:"種一百棵樹",org:"台灣森林協會",goal:1e4,raised:6840,unit:10,desc:"每筆贊助10元，協助山地造林復育",color:"#E8F5E9",accent:"#2E7D32",backers:68},{id:"p2",icon:"🌊",title:"淨化海洋計畫",org:"海洋守護隊",goal:8e3,raised:5120,unit:20,desc:"每筆贊助20元，購買淨灘清潔設備",color:"#E3F2FD",accent:"#1565C0",backers:44},{id:"p3",icon:"☀️",title:"偏鄉太陽能板",org:"綠能希望基金",goal:15e3,raised:9300,unit:50,desc:"每筆贊助50元，讓偏鄉學校用上太陽能",color:"#FFF8E1",accent:"#F57F17",backers:31},{id:"p4",icon:"🐝",title:"蜜蜂生態復育",org:"生態研究所",goal:6e3,raised:2100,unit:15,desc:"每筆贊助15元，保護授粉昆蟲棲地",color:"#FFF3E0",accent:"#E65100",backers:22},{id:"p5",icon:"💧",title:"淨水過濾設備",org:"清淨水源聯盟",goal:12e3,raised:7600,unit:30,desc:"每筆贊助30元，提供山村安全飲水",color:"#E0F7FA",accent:"#00695C",backers:55}],dT=[{id:"m1",creatorName:"小葉",avatar:"👧",icon:"🧹",title:"社區清潔日",desc:"組織社區居民一起清掃附近公園與街道，打造乾淨的生活環境。",category:"社區",goal:3e3,raised:1840,backers:24,deadline:"2026-03-20",accent:"#2E7D32",color:"#E8F5E9",joined:[],updates:["已有20位居民報名參加！","確認場地：文化公園集合"],location:{name:"文化公園，台北市大安區",lat:25.0268,lng:121.5432}},{id:"m2",creatorName:"環保王",avatar:"👨",icon:"🌻",title:"校園花圃重建",desc:"號召學生志工重新整理學校荒廢的花圃，種植本土植物。",category:"生態",goal:5e3,raised:2200,backers:18,deadline:"2026-03-28",accent:"#F57F17",color:"#FFF8E1",joined:[],updates:["已購買種子與土壤"],location:{name:"台灣大學校園，台北市大安區",lat:25.0174,lng:121.5398}},{id:"m3",creatorName:"大樹哥",avatar:"🧔",icon:"🚴",title:"無車通勤挑戰週",desc:"發起一週不開車上班活動，記錄里程換算減少的碳排放量。",category:"交通",goal:2e3,raised:2e3,backers:41,deadline:"2026-03-10",accent:"#6A1B9A",color:"#F3E5F5",joined:[],updates:["目標達成！感謝所有參與者","累計減少碳排放 320kg"],location:{name:"信義區自行車道，台北市",lat:25.033,lng:121.5654}}],Ar={交通:"#4CAF50",生活:"#81C784",用水:"#29B6F6",生態:"#66BB6A",回收:"#FFA726",飲食:"#A5D6A7",能源:"#FFCC02",社區:"#EF9A9A"},hT={簡單:{bg:"#E8F5E9",color:"#388E3C"},中等:{bg:"#FFF8E1",color:"#F57F17"},困難:{bg:"#FCE4EC",color:"#C62828"}},Lp=["#2E7D32","#1565C0","#F57F17","#E65100","#6A1B9A","#00695C","#C62828","#37474F"],fT=["#E8F5E9","#E3F2FD","#FFF8E1","#FFF3E0","#F3E5F5","#E0F7FA","#FCE4EC","#ECEFF1"],pT=["🌱","🌳","🌊","♻️","🌻","🧹","🚴","💧","🐝","☀️","🦋","🐢","🌿","🏕️","🌾"],gT=["挑戰","打卡","排行榜","贊助","發起"],mT={挑戰:"🌿",打卡:"📅",排行榜:"🏆",贊助:"💚",發起:"✨"},Z="Georgia, serif",yT=["🌱","🌿","🍃","🌳","🌍","🌊","☀️","🐝","🦋","🐢","🌻","⚡","🔋","♻️","🌾"];function Mp(t){return t<100?{name:"環保新芽",icon:"🌱",next:100}:t<250?{name:"綠葉守護者",icon:"🍃",next:250}:t<500?{name:"森林之友",icon:"🌳",next:500}:{name:"地球守護神",icon:"🌍",next:999}}function jp(){return new Date().toISOString().slice(0,10)}function _T(t,e){return new Date(t,e+1,0).getDate()}function vT({msg:t}){return u.jsx("div",{style:{position:"fixed",top:16,left:"50%",transform:"translateX(-50%)",background:"#1b5e20",color:"#fff",borderRadius:30,padding:"10px 24px",fontWeight:"bold",fontSize:14,zIndex:999,whiteSpace:"nowrap",fontFamily:Z,boxShadow:"0 4px 20px rgba(0,0,0,0.25)"},children:t})}function wT({lat:t,lng:e,label:n,accent:r}){const s="https://www.openstreetmap.org/export/embed.html?bbox="+(e-.008+"%2C"+(t-.005)+"%2C"+(e+.008)+"%2C"+(t+.005))+"&layer=mapnik&marker="+t+"%2C"+e,o="https://www.openstreetmap.org/?mlat="+t+"&mlon="+e+"#map=15/"+t+"/"+e;return u.jsxs("div",{style:{borderRadius:14,overflow:"hidden",border:"2px solid "+r+"44",marginBottom:10,position:"relative"},children:[u.jsx("iframe",{src:s,width:"100%",height:"175",style:{border:"none",display:"block"},title:n,loading:"lazy"}),u.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent,rgba(0,0,0,0.55))",padding:"18px 10px 6px",pointerEvents:"none"},children:u.jsxs("div",{style:{color:"#fff",fontSize:11,fontWeight:"bold"},children:["📍 ",n]})}),u.jsx("a",{href:o,target:"_blank",rel:"noreferrer",style:{position:"absolute",top:8,right:8,background:"#fff",borderRadius:20,padding:"4px 10px",fontSize:11,color:"#2e7d32",fontWeight:"bold",textDecoration:"none",boxShadow:"0 1px 6px rgba(0,0,0,0.2)"},children:"🗺 放大"})]})}function ST(){return u.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"linear-gradient(135deg,#1b5e20,#2e7d32)",fontFamily:Z},children:[u.jsx("div",{style:{fontSize:56,marginBottom:16},children:"🌿"}),u.jsx("div",{style:{color:"#fff",fontSize:20,fontWeight:"bold",letterSpacing:2,marginBottom:8},children:"綠色行動"}),u.jsx("div",{style:{color:"#a5d6a7",fontSize:13},children:"正在連線..."}),u.jsx("div",{style:{marginTop:24,width:40,height:40,border:"4px solid rgba(255,255,255,0.3)",borderTop:"4px solid #fff",borderRadius:"50%",animation:"spin 1s linear infinite"}}),u.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]})}function ET({onSkip:t}){const[e,n]=L.useState("login"),[r,i]=L.useState(""),[s,o]=L.useState(""),[l,a]=L.useState(""),[c,h]=L.useState("🌱"),[f,d]=L.useState(""),[_,v]=L.useState(!1),[E,O]=L.useState(!1);async function m(){if(!r||!s){d("請填寫Email和密碼");return}if(e==="register"&&!l){d("請填寫暱稱");return}if(e==="register"&&s.length<6){d("密碼至少需要6個字元");return}v(!0),d("");try{if(e==="register"){const g=await bE(ps,r,s);await PE(g.user,{displayName:l}),await $s(je(mt,"users/"+g.user.uid),{displayName:l,avatar:c,points:0,streak:0,checkinDays:[],completed:[],donations:{},taskDonations:{},createdAt:Date.now()})}else await RE(ps,r,s)}catch(g){d({"auth/email-already-in-use":"此Email已被註冊","auth/invalid-email":"Email格式不正確","auth/wrong-password":"密碼錯誤","auth/user-not-found":"找不到此帳號","auth/invalid-credential":"帳號或密碼錯誤"}[g.code]||"發生錯誤，請再試一次"),v(!1)}}async function p(){v(!0),d("");try{const g=await tx(ps,aT),w=je(mt,"users/"+g.user.uid);(await lv(w)).exists()||await $s(w,{displayName:g.user.displayName||"環保會員",avatar:"🌱",points:0,streak:0,checkinDays:[],completed:[],donations:{},taskDonations:{},createdAt:Date.now()})}catch{d("Google登入失敗，請再試一次"),v(!1)}}return u.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(160deg,#1b5e20 0%,#2e7d32 50%,#43a047 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:Z,padding:20},children:u.jsxs("div",{style:{background:"#fff",borderRadius:28,padding:"36px 28px",width:"100%",maxWidth:380,boxShadow:"0 24px 80px rgba(0,0,0,0.3)"},children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:28},children:[u.jsx("div",{style:{fontSize:52,marginBottom:8},children:"🌿"}),u.jsx("div",{style:{fontWeight:"bold",fontSize:24,color:"#1b5e20"},children:"綠色行動"}),u.jsx("div",{style:{fontSize:13,color:"#aaa",marginTop:4},children:"一起守護地球，從今天開始"})]}),u.jsx("div",{style:{display:"flex",background:"#f1f8e9",borderRadius:14,padding:4,marginBottom:24},children:["login","register"].map(g=>u.jsx("button",{onClick:()=>{n(g),d("")},style:{flex:1,padding:"10px",borderRadius:10,border:"none",background:e===g?"#2e7d32":"transparent",color:e===g?"#fff":"#888",fontWeight:"bold",fontSize:14,cursor:"pointer",fontFamily:Z,transition:"all 0.2s"},children:g==="login"?"🔑 登入":"📝 註冊"},g))}),e==="register"&&u.jsxs("div",{style:{marginBottom:16},children:[u.jsx("div",{style:{fontSize:12,fontWeight:"bold",color:"#555",marginBottom:8},children:"選擇頭像"}),u.jsxs("button",{onClick:()=>O(!E),style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:12,border:"1.5px solid #e8f5e9",background:"#fafafa",cursor:"pointer",width:"100%",fontFamily:Z},children:[u.jsx("span",{style:{fontSize:28},children:c}),u.jsx("span",{style:{fontSize:13,color:"#888"},children:"點擊更換頭像 ▾"})]}),E&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:8,padding:12,background:"#f9f9f9",borderRadius:12},children:yT.map(g=>u.jsx("button",{onClick:()=>{h(g),O(!1)},style:{width:40,height:40,borderRadius:10,border:`2px solid ${c===g?"#2e7d32":"#eee"}`,background:c===g?"#e8f5e9":"#fff",fontSize:22,cursor:"pointer"},children:g},g))})]}),e==="register"&&u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("div",{style:{fontSize:12,fontWeight:"bold",color:"#555",marginBottom:6},children:"暱稱 *"}),u.jsx("input",{value:l,onChange:g=>a(g.target.value),placeholder:"例如：環保小勇士",style:{width:"100%",padding:"11px 14px",borderRadius:12,border:"1.5px solid #e8f5e9",fontSize:14,fontFamily:Z,outline:"none",boxSizing:"border-box"}})]}),u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("div",{style:{fontSize:12,fontWeight:"bold",color:"#555",marginBottom:6},children:"Email *"}),u.jsx("input",{type:"email",value:r,onChange:g=>i(g.target.value),placeholder:"your@email.com",style:{width:"100%",padding:"11px 14px",borderRadius:12,border:"1.5px solid #e8f5e9",fontSize:14,fontFamily:Z,outline:"none",boxSizing:"border-box"}})]}),u.jsxs("div",{style:{marginBottom:20},children:[u.jsxs("div",{style:{fontSize:12,fontWeight:"bold",color:"#555",marginBottom:6},children:["密碼 ",e==="register"?"（至少6字元）":""," *"]}),u.jsx("input",{type:"password",value:s,onChange:g=>o(g.target.value),onKeyDown:g=>g.key==="Enter"&&m(),placeholder:"••••••",style:{width:"100%",padding:"11px 14px",borderRadius:12,border:"1.5px solid #e8f5e9",fontSize:14,fontFamily:Z,outline:"none",boxSizing:"border-box"}})]}),f&&u.jsxs("div",{style:{color:"#e53935",fontSize:12,marginBottom:14,textAlign:"center",background:"#ffebee",padding:"8px 12px",borderRadius:10},children:["❌ ",f]}),u.jsx("button",{onClick:m,disabled:_,style:{width:"100%",padding:14,borderRadius:14,border:"none",background:"linear-gradient(135deg,#2e7d32,#43a047)",color:"#fff",fontWeight:"bold",fontSize:16,cursor:"pointer",fontFamily:Z,marginBottom:12,opacity:_?.7:1},children:_?"處理中...":e==="login"?"🔑 登入":"🌱 立即註冊"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12},children:[u.jsx("div",{style:{flex:1,height:1,background:"#eee"}}),u.jsx("span",{style:{fontSize:12,color:"#bbb"},children:"或"}),u.jsx("div",{style:{flex:1,height:1,background:"#eee"}})]}),u.jsxs("button",{onClick:p,disabled:_,style:{width:"100%",padding:12,borderRadius:14,border:"1.5px solid #e0e0e0",background:"#fff",color:"#555",fontWeight:"bold",fontSize:15,cursor:"pointer",fontFamily:Z,display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:16},children:[u.jsx("span",{style:{fontSize:20},children:"G"})," 使用 Google 登入"]}),u.jsx("button",{onClick:t,style:{width:"100%",padding:10,borderRadius:12,border:"none",background:"transparent",color:"#aaa",fontSize:13,cursor:"pointer",fontFamily:Z},children:"👤 以訪客身份繼續（不儲存進度）"})]})})}function xT(){const[t,e]=L.useState("loading"),[n,r]=L.useState(!1),[i,s]=L.useState(null),[o,l]=L.useState("環保新芽"),[a,c]=L.useState("🌱"),[h,f]=L.useState(!0),[d,_]=L.useState(!1),[v,E]=L.useState("挑戰"),[O,m]=L.useState("全部"),[p,g]=L.useState(!1),[w,b]=L.useState(null),[D,N]=L.useState(!1),[A,le]=L.useState(null),[H,Oe]=L.useState(null),[Q,he]=L.useState({icon:"🌱",title:"",desc:"",category:"生態",goal:"",deadline:"",loc:""}),[It,mn]=L.useState(0),[Gt,Kt]=L.useState(0),[R,U]=L.useState(new Set),[B,oe]=L.useState(new Set),[C,M]=L.useState({}),[$,te]=L.useState({}),[ne,S]=L.useState(uT),[I,W]=L.useState(dT),[ve,xe]=L.useState([]);function Le(y){Oe(y),setTimeout(()=>Oe(null),2500)}L.useEffect(()=>OE(ps,T=>{if(e(T),!T){f(!1);return}s(T.uid),Ri(T)}),[]);async function Ri(y){try{const T=je(mt,"users/"+y.uid),j=await lv(T);if(j.exists()){const V=j.val();l(V.displayName||"環保新芽"),c(V.avatar||"🌱"),mn(V.points||0),Kt(V.streak||0),U(new Set(V.completed||[])),oe(new Set(V.checkinDays||[])),M(V.donations||{}),te(V.taskDonations||{})}else{const V=y.displayName||"環保新芽";await $s(T,{displayName:V,avatar:"🌱",points:0,streak:0,checkinDays:[],completed:[],donations:{},taskDonations:{},createdAt:Date.now()}),l(V),c("🌱")}}catch{}f(!1)}L.useEffect(()=>{if(!i)return;const y=je(mt,"memberTasks"),T=fs(y,Qe=>{if(Qe.exists()){const nt=Qe.val(),Zn=Object.entries(nt).map(([er,tr])=>({id:er,...tr}));Zn.length>0&&W(Zn)}}),j=je(mt,"projects"),V=fs(j,Qe=>{if(Qe.exists()){const nt=Qe.val(),Zn=Object.entries(nt).map(([er,tr])=>({id:er,...tr}));Zn.length>0&&S(Zn)}}),X=je(mt,"users"),Ve=fs(X,Qe=>{if(Qe.exists()){const nt=Qe.val(),Zn=Object.entries(nt).map(([er,tr])=>({uid:er,...tr})).sort((er,tr)=>(tr.points||0)-(er.points||0)).slice(0,20);xe(Zn)}});return()=>{T(),V(),Ve()}},[i]);async function uv(){await LE(ps),r(!1),s(null),mn(0),Kt(0),U(new Set),oe(new Set),M({}),te({})}async function dv(y,T){const j=new Set(R);j.has(y)?j.delete(y):j.add(y),U(j);const V=j.has(y)?T:-T,X=Math.max(0,It+V);mn(X),i&&await or(je(mt,"users/"+i),{completed:Array.from(j),points:X}),Le(j.has(y)?"🌿 完成挑戰！+"+T+"pts":"取消完成")}async function hv(){const y=jp();if(B.has(y))return;const T=new Set(B);T.add(y),oe(T),g(!0);const j=Gt+1,V=It+10;Kt(j),mn(V),setTimeout(()=>g(!1),1800),i&&await or(je(mt,"users/"+i),{checkinDays:Array.from(T),streak:j,points:V}),Le("📅 打卡成功！連續"+j+"天")}async function fv(y,T){const j={...C,[y]:(C[y]||0)+T};M(j),S(V=>V.map(X=>X.id===y?{...X,raised:X.raised+T,backers:X.backers+1}:X)),i&&await or(je(mt,"users/"+i),{donations:j}),Le("💚 感謝你的贊助！"),b(null)}async function pv(y,T){const j={...$,[y]:($[y]||0)+T};te(j),W(V=>V.map(X=>X.id===y?{...X,raised:X.raised+T,backers:X.backers+1}:X)),i&&await or(je(mt,"users/"+i),{taskDonations:j}),Le("💚 成功贊助任務！")}async function gv(y){if(!i)return;const T=I.find(X=>X.id===y);if(!T)return;const j=(T.joined||[]).includes(i),V=j?(T.joined||[]).filter(X=>X!==i):[...T.joined||[],i];W(X=>X.map(Ve=>Ve.id===y?{...Ve,joined:V}:Ve)),await or(je(mt,"memberTasks/"+y),{joined:V}),Le(j?"退出任務":"✅ 成功加入任務！")}async function mv(){if(!Q.title||!Q.desc||!Q.goal||!Q.deadline)return;const y=Math.floor(Math.random()*Lp.length);let T=25.033,j=121.565;if(Q.loc)try{const nt=await(await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(Q.loc)}&format=json&limit=1`)).json();nt&&nt.length>0&&(T=parseFloat(nt[0].lat),j=parseFloat(nt[0].lon))}catch{}const V={creatorName:o,avatar:a,icon:Q.icon,title:Q.title,desc:Q.desc,category:Q.category,goal:Number(Q.goal),raised:0,backers:0,deadline:Q.deadline,accent:Lp[y],color:fT[y],joined:[],updates:[],location:Q.loc?{name:Q.loc,lat:T,lng:j}:null,createdAt:Date.now()},X=je(mt,"memberTasks"),Ve=qI(X);await $s(Ve,V),W(Qe=>[...Qe,{...V,id:Ve.key}]),he({icon:"🌱",title:"",desc:"",category:"生態",goal:"",deadline:"",loc:""}),N(!1),Le("✨ 任務發起成功！")}if(t==="loading"||h)return u.jsx(ST,{});if(!t&&!n)return u.jsx(ET,{onSkip:()=>r(!0)});const Ni=Mp(It),hh=jp(),Pi=B.has(hh),fh=new Date,co=fh.getFullYear(),uo=fh.getMonth(),yv=_T(co,uo),_v=["全部",...Object.keys(Ar)],vv=()=>u.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:500,padding:20},onClick:()=>_(!1),children:u.jsxs("div",{style:{background:"#fff",borderRadius:24,padding:28,width:"100%",maxWidth:340},onClick:y=>y.stopPropagation(),children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[u.jsx("div",{style:{fontSize:56,marginBottom:8},children:a}),u.jsx("div",{style:{fontWeight:"bold",fontSize:20,color:"#1b5e20"},children:o}),u.jsx("div",{style:{fontSize:13,color:"#888",marginTop:4},children:t&&!n?t.email:"訪客模式"})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:20},children:[u.jsxs("div",{style:{textAlign:"center",background:"#f1f8e9",borderRadius:14,padding:12},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:22,color:"#2e7d32"},children:It}),u.jsx("div",{style:{fontSize:11,color:"#888"},children:"積分"})]}),u.jsxs("div",{style:{textAlign:"center",background:"#fff3e0",borderRadius:14,padding:12},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:22,color:"#f57f17"},children:Gt}),u.jsx("div",{style:{fontSize:11,color:"#888"},children:"連續天"})]}),u.jsxs("div",{style:{textAlign:"center",background:"#e3f2fd",borderRadius:14,padding:12},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:22,color:"#1565c0"},children:R.size}),u.jsx("div",{style:{fontSize:11,color:"#888"},children:"完成挑戰"})]})]}),u.jsxs("div",{style:{background:"#f9f9f9",borderRadius:14,padding:14,marginBottom:20,textAlign:"center"},children:[u.jsx("div",{style:{fontSize:28},children:Ni.icon}),u.jsx("div",{style:{fontWeight:"bold",color:"#2e7d32",marginTop:4},children:Ni.name}),u.jsxs("div",{style:{fontSize:11,color:"#aaa",marginTop:2},children:["下一等級還需 ",Ni.next-It," 點"]})]}),t&&!n?u.jsx("button",{onClick:uv,style:{width:"100%",padding:12,borderRadius:12,border:"none",background:"#ffebee",color:"#c62828",fontWeight:"bold",fontSize:15,cursor:"pointer",fontFamily:Z},children:"🚪 登出"}):u.jsx("button",{onClick:()=>{_(!1),r(!1)},style:{width:"100%",padding:12,borderRadius:12,border:"none",background:"linear-gradient(135deg,#2e7d32,#43a047)",color:"#fff",fontWeight:"bold",fontSize:15,cursor:"pointer",fontFamily:Z},children:"🌿 立即登入/註冊"})]})});return u.jsxs("div",{style:{maxWidth:480,margin:"0 auto",background:"#f5f7f5",minHeight:"100vh",fontFamily:Z,position:"relative"},children:[H&&u.jsx(vT,{msg:H}),d&&u.jsx(vv,{}),u.jsxs("div",{style:{background:"linear-gradient(135deg,#1b5e20,#2e7d32)",padding:"16px 20px 20px",position:"sticky",top:0,zIndex:100},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsxs("div",{children:[u.jsx("div",{style:{color:"#fff",fontWeight:"bold",fontSize:20,letterSpacing:1},children:"🌿 綠色行動"}),u.jsxs("div",{style:{color:"#a5d6a7",fontSize:12,marginTop:2},children:[Ni.icon," ",Ni.name," · ",It," pts",!t&&n&&u.jsx("span",{style:{color:"#ffcc02",marginLeft:8},children:"訪客模式"})]})]}),u.jsx("button",{onClick:()=>_(!0),style:{background:"rgba(255,255,255,0.15)",border:"none",borderRadius:99,padding:"8px 14px",color:"#fff",fontSize:22,cursor:"pointer",display:"flex",alignItems:"center",gap:6},children:a})]}),n&&u.jsxs("div",{style:{marginTop:10,background:"rgba(255,204,2,0.2)",borderRadius:10,padding:"8px 12px",fontSize:12,color:"#ffcc02",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("span",{children:"⚠️ 訪客模式，資料不會儲存"}),u.jsx("button",{onClick:()=>r(!1),style:{background:"#ffcc02",border:"none",borderRadius:8,padding:"4px 10px",fontSize:11,color:"#1b5e20",cursor:"pointer",fontFamily:Z},children:"立即登入"})]}),u.jsx("div",{style:{display:"flex",gap:4,marginTop:14},children:gT.map(y=>u.jsxs("button",{onClick:()=>E(y),style:{flex:1,padding:"8px 2px",borderRadius:12,border:"none",background:v===y?"rgba(255,255,255,0.25)":"transparent",color:"#fff",fontSize:11,fontWeight:v===y?"bold":"normal",cursor:"pointer",fontFamily:Z},children:[mT[y],u.jsx("br",{}),y]},y))})]}),u.jsxs("div",{style:{padding:"16px 16px 80px"},children:[v==="挑戰"&&u.jsxs("div",{children:[u.jsx("div",{style:{display:"flex",gap:8,overflowX:"auto",paddingBottom:8,marginBottom:16},children:_v.map(y=>u.jsx("button",{onClick:()=>m(y),style:{flexShrink:0,padding:"6px 14px",borderRadius:99,border:"none",background:O===y?"#2e7d32":"#fff",color:O===y?"#fff":"#555",fontWeight:O===y?"bold":"normal",fontSize:12,cursor:"pointer",fontFamily:Z,boxShadow:"0 1px 4px rgba(0,0,0,0.08)"},children:y},y))}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:cT.filter(y=>O==="全部"||y.category===O).map(y=>{const T=R.has(y.id),j=hT[y.difficulty];return u.jsx("div",{style:{background:"#fff",borderRadius:18,padding:16,boxShadow:"0 2px 12px rgba(0,0,0,0.06)",border:T?"2px solid #2e7d32":"2px solid transparent",transition:"all 0.2s"},children:u.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[u.jsx("div",{style:{fontSize:36,lineHeight:1},children:y.icon}),u.jsxs("div",{style:{flex:1},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:15,color:"#1b5e20"},children:y.title}),u.jsx("div",{style:{fontSize:11,background:j==null?void 0:j.bg,color:j==null?void 0:j.color,borderRadius:99,padding:"2px 8px",fontWeight:"bold"},children:y.difficulty})]}),u.jsx("div",{style:{fontSize:13,color:"#666",marginBottom:10},children:y.desc}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[u.jsx("div",{style:{fontSize:12,color:Ar[y.category],fontWeight:"bold",background:Ar[y.category]+"18",borderRadius:99,padding:"3px 10px"},children:y.category}),u.jsx("button",{onClick:()=>!n&&dv(y.id,y.points),style:{padding:"8px 16px",borderRadius:99,border:"none",background:T?"#2e7d32":"#f1f8e9",color:T?"#fff":"#2e7d32",fontWeight:"bold",fontSize:13,cursor:n?"not-allowed":"pointer",fontFamily:Z,transition:"all 0.2s"},children:T?"✅ +"+y.points:"+"+y.points+" pts"})]})]})]})},y.id)})})]}),v==="打卡"&&u.jsxs("div",{children:[u.jsxs("div",{style:{background:"linear-gradient(135deg,#1b5e20,#2e7d32)",borderRadius:20,padding:24,textAlign:"center",marginBottom:20,position:"relative",overflow:"hidden"},children:[p&&u.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:60,animation:"fadeOut 1.8s forwards"},children:"🌿"}),u.jsx("div",{style:{color:"#fff",fontSize:15,fontWeight:"bold",marginBottom:4},children:"今日打卡"}),u.jsxs("div",{style:{color:"#a5d6a7",fontSize:13,marginBottom:16},children:["連續 ",Gt," 天 🔥"]}),u.jsx("button",{onClick:()=>!n&&hv(),disabled:Pi||n,style:{padding:"14px 40px",borderRadius:99,border:"none",background:Pi?"rgba(255,255,255,0.2)":"#fff",color:Pi?"rgba(255,255,255,0.6)":"#2e7d32",fontWeight:"bold",fontSize:16,cursor:Pi||n?"not-allowed":"pointer",fontFamily:Z},children:Pi?"✅ 已打卡":"📅 立即打卡 +10pts"}),u.jsx("style",{children:"@keyframes fadeOut { 0%{opacity:1;transform:scale(1)} 100%{opacity:0;transform:scale(2)} }"})]}),u.jsxs("div",{style:{background:"#fff",borderRadius:18,padding:16,boxShadow:"0 2px 12px rgba(0,0,0,0.06)"},children:[u.jsxs("div",{style:{fontWeight:"bold",fontSize:15,color:"#1b5e20",marginBottom:12,textAlign:"center"},children:[co,"年",uo+1,"月 打卡記錄"]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:4},children:[["日","一","二","三","四","五","六"].map(y=>u.jsx("div",{style:{textAlign:"center",fontSize:11,color:"#aaa",paddingBottom:4},children:y},y)),Array.from({length:new Date(co,uo,1).getDay()}).map((y,T)=>u.jsx("div",{},"e"+T)),Array.from({length:yv}).map((y,T)=>{const j=T+1,V=`${co}-${String(uo+1).padStart(2,"0")}-${String(j).padStart(2,"0")}`,X=B.has(V),Ve=V===hh;return u.jsx("div",{style:{textAlign:"center",padding:"6px 0",borderRadius:8,background:X?"#2e7d32":Ve?"#e8f5e9":"transparent",color:X?"#fff":Ve?"#2e7d32":"#555",fontSize:12,fontWeight:Ve?"bold":"normal"},children:X?"✓":j},j)})]})]})]}),v==="排行榜"&&u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:16,color:"#1b5e20",marginBottom:16,textAlign:"center"},children:"🏆 本週環保英雄榜"}),ve.length===0&&u.jsx("div",{style:{textAlign:"center",color:"#aaa",padding:40},children:"還沒有排行榜資料"}),ve.map((y,T)=>{const j=y.uid===i,V=Mp(y.points||0);return u.jsxs("div",{style:{background:j?"#e8f5e9":"#fff",borderRadius:16,padding:"12px 16px",marginBottom:10,display:"flex",alignItems:"center",gap:12,boxShadow:"0 2px 10px rgba(0,0,0,0.06)",border:j?"2px solid #2e7d32":"2px solid transparent"},children:[u.jsx("div",{style:{fontSize:20,width:32,textAlign:"center",fontWeight:"bold",color:T===0?"#f57f17":T===1?"#9e9e9e":T===2?"#8d6e63":"#aaa"},children:T===0?"🥇":T===1?"🥈":T===2?"🥉":T+1}),u.jsx("div",{style:{fontSize:28},children:y.avatar||"🌱"}),u.jsxs("div",{style:{flex:1},children:[u.jsxs("div",{style:{fontWeight:"bold",fontSize:14,color:"#1b5e20"},children:[y.displayName||"環保會員",j?" (我)":""]}),u.jsxs("div",{style:{fontSize:11,color:"#888"},children:[V.icon," ",V.name]})]}),u.jsxs("div",{style:{fontWeight:"bold",fontSize:16,color:"#2e7d32"},children:[y.points||0," pts"]})]},y.uid)})]}),v==="贊助"&&u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:16,color:"#1b5e20",marginBottom:16},children:"💚 環保贊助專案"}),ne.map(y=>{const T=Math.min(100,Math.round(y.raised/y.goal*100)),j=C[y.id]||0;return u.jsxs("div",{style:{background:y.color||"#fff",borderRadius:18,padding:16,marginBottom:14,boxShadow:"0 2px 12px rgba(0,0,0,0.06)"},children:[u.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",marginBottom:10},children:[u.jsx("div",{style:{fontSize:36},children:y.icon}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:15,color:y.accent},children:y.title}),u.jsx("div",{style:{fontSize:12,color:"#888"},children:y.org})]})]}),u.jsx("div",{style:{fontSize:13,color:"#555",marginBottom:12},children:y.desc}),u.jsxs("div",{style:{marginBottom:10},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"#888",marginBottom:4},children:[u.jsxs("span",{style:{color:y.accent,fontWeight:"bold"},children:["NT$",y.raised.toLocaleString()," 募得"]}),u.jsxs("span",{children:["目標 NT$",y.goal.toLocaleString()]})]}),u.jsx("div",{style:{background:"rgba(0,0,0,0.08)",borderRadius:99,height:8,overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:T+"%",background:y.accent,borderRadius:99,transition:"width 0.6s"}})}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:4},children:[u.jsxs("span",{style:{fontSize:11,color:y.accent,fontWeight:"bold"},children:[T,"%"]}),u.jsxs("span",{style:{fontSize:11,color:"#aaa"},children:["👤 ",y.backers," 人支持"]})]})]}),!n&&u.jsx("button",{onClick:()=>b(y),style:{width:"100%",padding:"10px",borderRadius:12,border:"none",background:y.accent,color:"#fff",fontWeight:"bold",fontSize:14,cursor:"pointer",fontFamily:Z},children:"💚 贊助此專案"}),j>0&&u.jsxs("div",{style:{marginTop:8,textAlign:"right",fontSize:11,color:y.accent,fontWeight:"bold"},children:["我已贊助 NT$",j]})]},y.id)})]}),v==="發起"&&u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:16,color:"#1b5e20"},children:"✨ 會員環保任務"}),!n&&u.jsx("button",{onClick:()=>N(!0),style:{padding:"8px 16px",borderRadius:99,border:"none",background:"#2e7d32",color:"#fff",fontWeight:"bold",fontSize:13,cursor:"pointer",fontFamily:Z},children:"+ 發起"})]}),I.map(y=>{try{const T=y.accent||"#2E7D32",j=y.color||"#E8F5E9",V=y.goal>0?Math.min(100,Math.round((y.raised||0)/y.goal*100)):0,X=V>=100,Ve=i&&Array.isArray(y.joined)&&y.joined.includes(i),Qe=$[y.id]||0;return u.jsxs("div",{style:{background:j,borderRadius:18,padding:16,marginBottom:14,boxShadow:"0 2px 12px rgba(0,0,0,0.06)"},children:[u.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",marginBottom:8},children:[u.jsx("div",{style:{fontSize:32},children:y.icon||"🌱"}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:15,color:T},children:y.title}),u.jsxs("div",{style:{fontSize:11,color:"#888"},children:[y.avatar," ",y.creatorName," · ",y.deadline]})]}),u.jsx("div",{style:{fontSize:11,background:(Ar[y.category]||"#4CAF50")+"22",color:Ar[y.category]||"#4CAF50",borderRadius:99,padding:"3px 8px",fontWeight:"bold"},children:y.category})]}),u.jsx("div",{style:{fontSize:13,color:"#555",marginBottom:10},children:y.desc}),y.location&&u.jsxs("button",{onClick:()=>le(A===y.id?null:y.id),style:{fontSize:12,color:T,background:"transparent",border:"none",cursor:"pointer",marginBottom:8,padding:0},children:["📍 ",y.location.name," — 點擊查看地圖"]}),A===y.id&&y.location&&u.jsx(wT,{lat:y.location.lat,lng:y.location.lng,label:y.location.name,accent:T}),u.jsxs("div",{style:{marginBottom:12},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"#888",marginBottom:4},children:[u.jsxs("span",{style:{color:T,fontWeight:"bold"},children:["NT$",(y.raised||0).toLocaleString()," 募得"]}),u.jsxs("span",{children:["目標 NT$",(y.goal||0).toLocaleString()]})]}),u.jsx("div",{style:{background:"#f1f8e9",borderRadius:99,height:8,overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:V+"%",background:"linear-gradient(90deg,"+T+"88,"+T+")",borderRadius:99,transition:"width 0.6s"}})}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:4},children:[u.jsxs("span",{style:{fontSize:11,color:T,fontWeight:"bold"},children:[V.toFixed(0),"%"]}),u.jsxs("span",{style:{fontSize:11,color:"#aaa"},children:["👤 ",y.backers||0," 人支持 · ",(y.joined||[]).length," 人加入"]})]})]}),y.updates&&y.updates.length>0&&u.jsxs("div",{style:{background:"rgba(0,0,0,0.03)",borderRadius:10,padding:"8px 10px",marginBottom:12,fontSize:11,color:"#666",borderLeft:"3px solid "+T},children:["📢 ",y.updates[y.updates.length-1]]}),!X&&!n&&u.jsxs("div",{style:{display:"flex",gap:8},children:[[50,100,200].map(nt=>u.jsxs("button",{onClick:()=>pv(y.id,nt),style:{flex:1,padding:"8px 0",borderRadius:10,border:"1.5px solid "+T,background:"transparent",color:T,fontSize:12,cursor:"pointer",fontFamily:Z},children:["NT$",nt]},nt)),u.jsx("button",{onClick:()=>gv(y.id),style:{flex:1,padding:"8px 0",borderRadius:10,border:"1.5px solid "+T,background:Ve?T:"transparent",color:Ve?"#fff":T,fontWeight:"bold",fontSize:12,cursor:"pointer",fontFamily:Z},children:Ve?"✅ 已加入":"加入"})]}),X&&u.jsx("div",{style:{textAlign:"center",padding:"10px",background:T+"18",borderRadius:10,fontSize:13,color:T,fontWeight:"bold"},children:"🎉 目標達成！"}),Qe>0&&u.jsxs("div",{style:{marginTop:8,textAlign:"right",fontSize:11,color:T,fontWeight:"bold"},children:["我贊助 NT$",Qe]})]},y.id)}catch{return u.jsxs("div",{style:{background:"#ffebee",borderRadius:12,padding:12,marginBottom:10,fontSize:12,color:"#c62828"},children:["⚠️ 任務資料錯誤：",y.title||y.id]},y.id)}})]})]}),w&&u.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",display:"flex",alignItems:"flex-end",justifyContent:"center",zIndex:300},onClick:()=>b(null),children:u.jsxs("div",{style:{background:"#fff",borderRadius:"22px 22px 0 0",padding:"24px 20px 32px",width:"100%",maxWidth:480},onClick:y=>y.stopPropagation(),children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:20},children:[u.jsx("div",{style:{fontSize:36},children:w.icon}),u.jsx("div",{style:{fontWeight:"bold",fontSize:17,marginTop:8},children:w.title}),u.jsx("div",{style:{fontSize:13,color:"#888"},children:w.org})]}),u.jsxs("div",{style:{fontSize:14,color:"#555",marginBottom:20,textAlign:"center"},children:["選擇贊助金額（每筆 NT$",w.unit,"）"]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10},children:[1,2,5,10].map(y=>u.jsxs("button",{onClick:()=>fv(w.id,w.unit*y),style:{padding:16,borderRadius:14,border:"2px solid "+w.accent,background:"transparent",color:w.accent,fontWeight:"bold",fontSize:16,cursor:"pointer",fontFamily:Z},children:["NT$",w.unit*y]},y))}),u.jsx("button",{onClick:()=>b(null),style:{width:"100%",marginTop:14,padding:12,borderRadius:12,border:"none",background:"#f5f5f5",color:"#888",fontSize:14,cursor:"pointer",fontFamily:Z},children:"取消"})]})}),D&&u.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",display:"flex",alignItems:"flex-end",justifyContent:"center",zIndex:300},onClick:()=>N(!1),children:u.jsxs("div",{style:{background:"#fff",borderRadius:"22px 22px 0 0",padding:"24px 20px 32px",width:"100%",maxWidth:480,maxHeight:"85vh",overflowY:"auto"},onClick:y=>y.stopPropagation(),children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:18},children:[u.jsx("div",{style:{fontSize:28},children:"✨"}),u.jsx("div",{style:{fontWeight:"bold",fontSize:17,color:"#2d5a27",marginTop:4},children:"發起新環保任務"})]}),u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("div",{style:{fontSize:12,color:"#555",fontWeight:"bold",marginBottom:8},children:"選擇圖示"}),u.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:pT.map(y=>u.jsx("button",{onClick:()=>he(T=>({...T,icon:y})),style:{width:40,height:40,borderRadius:10,border:"2px solid "+(Q.icon===y?"#2e7d32":"#eee"),background:Q.icon===y?"#e8f5e9":"#fafafa",fontSize:20,cursor:"pointer"},children:y},y))})]}),[["title","任務名稱","例如：社區植樹日"],["desc","任務說明","描述你的環保任務內容與目標…"],["loc","📍 活動地點","例如：大安森林公園，台北市"]].map(([y,T,j])=>u.jsxs("div",{style:{marginBottom:12},children:[u.jsxs("div",{style:{fontSize:12,color:"#555",fontWeight:"bold",marginBottom:6},children:[T," ",y!=="loc"?"*":""]}),y==="desc"?u.jsx("textarea",{value:Q[y],onChange:V=>he(X=>({...X,[y]:V.target.value})),placeholder:j,rows:3,style:{width:"100%",padding:"10px 14px",borderRadius:12,border:"1.5px solid #e8f5e9",fontSize:13,fontFamily:Z,outline:"none",resize:"none",boxSizing:"border-box",background:"#fafafa",color:"#333"}}):u.jsx("input",{value:Q[y],onChange:V=>he(X=>({...X,[y]:V.target.value})),placeholder:j,style:{width:"100%",padding:"10px 14px",borderRadius:12,border:"1.5px solid #e8f5e9",fontSize:14,fontFamily:Z,outline:"none",boxSizing:"border-box",background:"#fafafa",color:"#333"}})]},y)),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12},children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:12,color:"#555",fontWeight:"bold",marginBottom:6},children:"分類"}),u.jsx("select",{value:Q.category,onChange:y=>he(T=>({...T,category:y.target.value})),style:{width:"100%",padding:"10px",borderRadius:12,border:"1.5px solid #e8f5e9",fontSize:13,fontFamily:Z,background:"#fafafa",outline:"none"},children:Object.keys(Ar).map(y=>u.jsx("option",{children:y},y))})]}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:12,color:"#555",fontWeight:"bold",marginBottom:6},children:"募款目標（新台幣）*"}),u.jsx("input",{type:"number",value:Q.goal,onChange:y=>he(T=>({...T,goal:y.target.value})),placeholder:"5000",style:{width:"100%",padding:"10px 14px",borderRadius:12,border:"1.5px solid #e8f5e9",fontSize:13,fontFamily:Z,outline:"none",boxSizing:"border-box",background:"#fafafa",color:"#333"}})]})]}),u.jsxs("div",{style:{marginBottom:20},children:[u.jsx("div",{style:{fontSize:12,color:"#555",fontWeight:"bold",marginBottom:6},children:"截止日期 *"}),u.jsx("input",{type:"date",value:Q.deadline,onChange:y=>he(T=>({...T,deadline:y.target.value})),style:{width:"100%",padding:"10px 14px",borderRadius:12,border:"1.5px solid #e8f5e9",fontSize:13,fontFamily:Z,outline:"none",boxSizing:"border-box",background:"#fafafa",color:"#333"}})]}),u.jsx("button",{onClick:mv,style:{width:"100%",padding:14,borderRadius:14,border:"none",background:Q.title&&Q.desc&&Q.goal&&Q.deadline?"linear-gradient(135deg,#2e7d32,#43a047)":"#e0e0e0",color:Q.title&&Q.desc&&Q.goal&&Q.deadline?"#fff":"#aaa",fontWeight:"bold",fontSize:15,cursor:"pointer",fontFamily:Z,marginBottom:10},children:"🌱 發起任務"}),u.jsx("button",{onClick:()=>N(!1),style:{width:"100%",padding:12,borderRadius:12,border:"none",background:"#f1f8e9",color:"#888",fontSize:14,cursor:"pointer",fontFamily:Z},children:"取消"})]})}),u.jsx("div",{style:{height:32}})]})}const CT={apiKey:"AIzaSyA_2340AhDRdUOJGq8dX7eV2b2caxegj54",authDomain:"green-move-3a29d.firebaseapp.com",projectId:"green-move-3a29d",storageBucket:"green-move-3a29d.firebasestorage.app",messagingSenderId:"397397942804",appId:"1:397397942804:web:f809cd260a0aa4fae9bd01",databaseURL:"https://green-move-3a29d-default-rtdb.firebaseio.com"},kT=Af().length===0?Sd(CT):Af()[0],Hi=av(kT),IT="coolo24444102",ae="Georgia, serif",Fp=[{id:"p1",icon:"🌳",title:"種一百棵樹",org:"台灣森林協會",goal:1e4,raised:6840,unit:10,desc:"每筆贊助10元，協助山地造林復育",backers:68,active:!0},{id:"p2",icon:"🌊",title:"淨化海洋計畫",org:"海洋守護隊",goal:8e3,raised:5120,unit:20,desc:"每筆贊助20元，購買淨灘清潔設備",backers:44,active:!0},{id:"p3",icon:"☀️",title:"偏鄉太陽能板",org:"綠能希望基金",goal:15e3,raised:9300,unit:50,desc:"每筆贊助50元，讓偏鄉學校用上太陽能",backers:31,active:!0},{id:"p4",icon:"🐝",title:"蜜蜂生態復育",org:"生態研究所",goal:6e3,raised:2100,unit:15,desc:"每筆贊助15元，保護授粉昆蟲棲地",backers:22,active:!0},{id:"p5",icon:"💧",title:"淨水過濾設備",org:"清淨水源聯盟",goal:12e3,raised:7600,unit:30,desc:"每筆贊助30元，提供山村安全飲水",backers:55,active:!0}],TT=["交通","生活","用水","生態","回收","飲食","能源","社區"],bT=["簡單","中等","困難"],RT=["🚶","🛍️","💧","🌱","♻️","🥗","💡","🧴","🌊","🔋","🌳","☀️","🐝","🌻","🚴","🧹"],NT=[{id:1,icon:"🚶",title:"以步代車",desc:"今天步行或騎自行車代替開車",points:30,category:"交通",difficulty:"簡單"},{id:2,icon:"🛍️",title:"自備購物袋",desc:"購物時使用環保袋，拒絕塑膠袋",points:20,category:"生活",difficulty:"簡單"},{id:3,icon:"💧",title:"節水挑戰",desc:"洗澡縮短至5分鐘以內",points:25,category:"用水",difficulty:"中等"},{id:4,icon:"🌱",title:"種一棵植物",desc:"在家種植一盆植物或蔬菜",points:50,category:"生態",difficulty:"中等"},{id:5,icon:"♻️",title:"垃圾分類達人",desc:"正確分類今日所有垃圾",points:20,category:"回收",difficulty:"簡單"},{id:6,icon:"🥗",title:"無肉星期一",desc:"今天只吃蔬食，減少碳排放",points:40,category:"飲食",difficulty:"中等"},{id:7,icon:"💡",title:"節電行動",desc:"今天減少1小時的電器使用",points:30,category:"能源",difficulty:"簡單"},{id:8,icon:"🧴",title:"拒絕一次性",desc:"使用可重複使用的餐具或杯子",points:25,category:"生活",difficulty:"簡單"},{id:9,icon:"🌊",title:"淨灘行動",desc:"參與或自行清理附近的垃圾",points:100,category:"社區",difficulty:"困難"},{id:10,icon:"🔋",title:"舊電池回收",desc:"收集舊電池送至回收站",points:35,category:"回收",difficulty:"中等"}];function PT(){const[t,e]=L.useState(!1),[n,r]=L.useState(""),[i,s]=L.useState(!1),[o,l]=L.useState("dashboard"),[a,c]=L.useState(""),[h,f]=L.useState([]),[d,_]=L.useState([]),[v,E]=L.useState(!0),[O,m]=L.useState(NT),[p,g]=L.useState(Fp),[w,b]=L.useState(null),[D,N]=L.useState(null);function A(C){c(C),setTimeout(()=>c(""),2500)}function le(){n===IT?(e(!0),s(!1)):s(!0)}L.useEffect(()=>{if(!t)return;const C=fs(je(Hi,"users"),$=>{if($.exists()){const te=$.val(),ne=Object.entries(te).map(([S,I])=>({uid:S,...I}));f(ne)}else f([]);E(!1)}),M=fs(je(Hi,"memberTasks"),$=>{if($.exists()){const te=$.val(),ne=Object.entries(te).map(([S,I])=>({id:S,...I}));_(ne)}else _([])});return()=>{C(),M()}},[t]);function H(){const C=h.length,M=h.reduce((W,ve)=>W+(ve.points||0),0),$=h.reduce((W,ve)=>{var xe;return W+(((xe=ve.checkinDays)==null?void 0:xe.length)||0)},0),te=h.reduce((W,ve)=>{const xe=ve.donations||{};return W+Object.values(xe).reduce((Le,Ri)=>Le+Ri,0)},0),ne=h.reduce((W,ve)=>{const xe=ve.taskDonations||{};return W+Object.values(xe).reduce((Le,Ri)=>Le+Ri,0)},0),S=d.filter(W=>!W.status||W.status==="審核中").length,I=h.length>0?Math.max(...h.map(W=>W.streak||0)):0;return{totalUsers:C,totalPoints:M,totalCheckins:$,totalDonations:te,totalTaskDonations:ne,pendingTasks:S,maxStreak:I}}function Oe(){const C={};return h.forEach(M=>{const $=M.donations||{};Object.entries($).forEach(([te,ne])=>{C[te]=(C[te]||0)+ne})}),C}if(!t)return u.jsx("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg,#1b5e20,#2e7d32)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:ae},children:u.jsxs("div",{style:{background:"#fff",borderRadius:24,padding:"40px 32px",width:320,boxShadow:"0 20px 60px rgba(0,0,0,0.3)"},children:[u.jsxs("div",{style:{textAlign:"center",marginBottom:28},children:[u.jsx("div",{style:{fontSize:48,marginBottom:8},children:"🌿"}),u.jsx("div",{style:{fontWeight:"bold",fontSize:22,color:"#1b5e20"},children:"後台管理系統"}),u.jsx("div",{style:{fontSize:13,color:"#aaa",marginTop:4},children:"綠色行動 Admin"})]}),u.jsxs("div",{style:{marginBottom:16},children:[u.jsx("input",{type:"password",value:n,onChange:C=>{r(C.target.value),s(!1)},onKeyDown:C=>C.key==="Enter"&&le(),placeholder:"請輸入管理員密碼",style:{width:"100%",padding:"12px 16px",borderRadius:12,border:`1.5px solid ${i?"#e53935":"#e8f5e9"}`,fontSize:15,fontFamily:ae,outline:"none",boxSizing:"border-box",color:"#333"}}),i&&u.jsx("div",{style:{color:"#e53935",fontSize:12,marginTop:6},children:"❌ 密碼錯誤，請重試"})]}),u.jsx("button",{onClick:le,style:{width:"100%",padding:14,borderRadius:12,border:"none",background:"linear-gradient(135deg,#2e7d32,#43a047)",color:"#fff",fontWeight:"bold",fontSize:16,cursor:"pointer",fontFamily:ae},children:"登入"})]})});const Q=[{key:"dashboard",label:"總覽",icon:"📊"},{key:"donations",label:"贊助報表",icon:"💰"},{key:"users",label:"用戶數據",icon:"👥"},{key:"tasks",label:"任務管理",icon:"✅"},{key:"challenges",label:"挑戰管理",icon:"🌿"},{key:"projects",label:"贊助計畫",icon:"💚"}],he=H(),It=Oe();function mn(){const C=[{label:"總會員數",value:he.totalUsers,icon:"👥",color:"#1565C0"},{label:"總積分",value:he.totalPoints.toLocaleString(),icon:"⭐",color:"#2E7D32"},{label:"總打卡次數",value:he.totalCheckins.toLocaleString(),icon:"📅",color:"#F57F17"},{label:"專案贊助",value:"NT$"+he.totalDonations.toLocaleString(),icon:"💚",color:"#00695C"},{label:"任務贊助",value:"NT$"+he.totalTaskDonations.toLocaleString(),icon:"🌱",color:"#6A1B9A"},{label:"待審任務",value:he.pendingTasks,icon:"⏳",color:"#C62828",alert:he.pendingTasks>0}];return u.jsxs("div",{children:[u.jsx("h2",{style:{margin:"0 0 8px",color:"#1b5e20"},children:"📊 系統總覽"}),u.jsx("div",{style:{fontSize:12,color:"#aaa",marginBottom:20},children:"即時數據來自 Firebase"}),v?u.jsx("div",{style:{textAlign:"center",padding:40,color:"#aaa"},children:"⏳ 載入中..."}):u.jsxs(u.Fragment,{children:[u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:14,marginBottom:28},children:C.map(M=>u.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:"18px 12px",boxShadow:"0 2px 12px rgba(0,0,0,0.08)",border:M.alert?"2px solid #FF6F00":"none",textAlign:"center"},children:[u.jsx("div",{style:{fontSize:28,marginBottom:6},children:M.icon}),u.jsx("div",{style:{fontWeight:"bold",fontSize:18,color:M.color},children:M.value}),u.jsx("div",{style:{fontSize:11,color:"#888",marginTop:4},children:M.label}),M.alert&&u.jsx("div",{style:{fontSize:10,color:"#FF6F00",fontWeight:"bold",marginTop:4},children:"⚠️ 需審核"})]},M.label))}),u.jsx("h3",{style:{color:"#1b5e20",marginBottom:12},children:"🏆 積分排行榜 TOP 10"}),u.jsx("div",{style:{background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.08)"},children:h.length===0?u.jsx("div",{style:{padding:20,textAlign:"center",color:"#aaa"},children:"還沒有會員數據"}):[...h].sort((M,$)=>($.points||0)-(M.points||0)).slice(0,10).map((M,$)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"12px 16px",borderBottom:"1px solid #f5f5f5",gap:12},children:[u.jsxs("div",{style:{fontWeight:"bold",fontSize:16,color:$<3?"#F57F17":"#ccc",width:28},children:["#",$+1]}),u.jsx("div",{style:{fontSize:22},children:M.avatar||"🌱"}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:14},children:M.displayName||"會員"}),u.jsxs("div",{style:{fontSize:11,color:"#aaa"},children:["🔥 ",M.streak||0,"天連續 · ",(M.checkinDays||[]).length,"次打卡"]})]}),u.jsxs("div",{style:{fontWeight:"bold",color:"#2e7d32",fontSize:16},children:[M.points||0," pts"]})]},M.uid))})]})]})}function Gt(){const C=he.totalDonations,M=he.totalTaskDonations,$=C+M,te=Fp.map(I=>({...I,realRaised:It[I.id]||0,donorCount:h.filter(W=>W.donations&&W.donations[I.id]).length})),ne=d.map(I=>{const W=h.reduce((xe,Le)=>xe+(Le.taskDonations&&Le.taskDonations[I.id]||0),0),ve=h.filter(xe=>xe.taskDonations&&xe.taskDonations[I.id]).length;return{...I,realRaised:W,donorCount:ve}}),S=h.map(I=>{const W=Object.values(I.donations||{}).reduce((xe,Le)=>xe+Le,0),ve=Object.values(I.taskDonations||{}).reduce((xe,Le)=>xe+Le,0);return{...I,totalDonated:W+ve}}).filter(I=>I.totalDonated>0).sort((I,W)=>W.totalDonated-I.totalDonated).slice(0,5);return u.jsxs("div",{children:[u.jsx("h2",{style:{margin:"0 0 20px",color:"#1b5e20"},children:"💰 贊助數據報表"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:14,marginBottom:28},children:[u.jsxs("div",{style:{background:"linear-gradient(135deg,#2e7d32,#43a047)",borderRadius:16,padding:20,textAlign:"center",color:"#fff"},children:[u.jsx("div",{style:{fontSize:24,marginBottom:6},children:"💰"}),u.jsxs("div",{style:{fontWeight:"bold",fontSize:20},children:["NT$",$.toLocaleString()]}),u.jsx("div",{style:{fontSize:11,opacity:.8,marginTop:4},children:"總贊助金額"})]}),u.jsxs("div",{style:{background:"linear-gradient(135deg,#1565c0,#1976d2)",borderRadius:16,padding:20,textAlign:"center",color:"#fff"},children:[u.jsx("div",{style:{fontSize:24,marginBottom:6},children:"🌳"}),u.jsxs("div",{style:{fontWeight:"bold",fontSize:20},children:["NT$",C.toLocaleString()]}),u.jsx("div",{style:{fontSize:11,opacity:.8,marginTop:4},children:"專案贊助"})]}),u.jsxs("div",{style:{background:"linear-gradient(135deg,#6a1b9a,#7b1fa2)",borderRadius:16,padding:20,textAlign:"center",color:"#fff"},children:[u.jsx("div",{style:{fontSize:24,marginBottom:6},children:"✨"}),u.jsxs("div",{style:{fontWeight:"bold",fontSize:20},children:["NT$",M.toLocaleString()]}),u.jsx("div",{style:{fontSize:11,opacity:.8,marginTop:4},children:"任務贊助"})]})]}),u.jsx("h3",{style:{color:"#1b5e20",marginBottom:12},children:"🌳 各專案贊助明細"}),u.jsx("div",{style:{background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.08)",marginBottom:24},children:te.map(I=>{const W=I.goal>0?Math.min(100,Math.round(I.realRaised/I.goal*100)):0;return u.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid #f5f5f5"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8},children:[u.jsx("span",{style:{fontSize:24},children:I.icon}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:14},children:I.title}),u.jsx("div",{style:{fontSize:11,color:"#888"},children:I.org})]}),u.jsxs("div",{style:{textAlign:"right"},children:[u.jsxs("div",{style:{fontWeight:"bold",color:"#2e7d32",fontSize:14},children:["NT$",I.realRaised.toLocaleString()]}),u.jsxs("div",{style:{fontSize:11,color:"#aaa"},children:[I.donorCount," 人贊助"]})]})]}),u.jsx("div",{style:{background:"#f1f8e9",borderRadius:99,height:8,overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:W+"%",background:"linear-gradient(90deg,#2e7d32,#43a047)",borderRadius:99,transition:"width 0.6s"}})}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:4,fontSize:11,color:"#aaa"},children:[u.jsxs("span",{style:{color:"#2e7d32",fontWeight:"bold"},children:[W,"%"]}),u.jsxs("span",{children:["目標 NT$",I.goal.toLocaleString()]})]})]},I.id)})}),u.jsx("h3",{style:{color:"#1b5e20",marginBottom:12},children:"✨ 各任務贊助明細"}),u.jsx("div",{style:{background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.08)",marginBottom:24},children:ne.length===0?u.jsx("div",{style:{padding:20,textAlign:"center",color:"#aaa"},children:"還沒有任務贊助"}):ne.map(I=>{const W=I.goal>0?Math.min(100,Math.round(I.realRaised/I.goal*100)):0;return u.jsxs("div",{style:{padding:"14px 16px",borderBottom:"1px solid #f5f5f5"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8},children:[u.jsx("span",{style:{fontSize:24},children:I.icon||"🌱"}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:14},children:I.title}),u.jsxs("div",{style:{fontSize:11,color:"#888"},children:[I.creatorName," · ",I.category]})]}),u.jsxs("div",{style:{textAlign:"right"},children:[u.jsxs("div",{style:{fontWeight:"bold",color:"#6a1b9a",fontSize:14},children:["NT$",I.realRaised.toLocaleString()]}),u.jsxs("div",{style:{fontSize:11,color:"#aaa"},children:[I.donorCount," 人贊助"]})]})]}),u.jsx("div",{style:{background:"#f3e5f5",borderRadius:99,height:8,overflow:"hidden"},children:u.jsx("div",{style:{height:"100%",width:W+"%",background:"linear-gradient(90deg,#6a1b9a,#8e24aa)",borderRadius:99}})}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:4,fontSize:11,color:"#aaa"},children:[u.jsxs("span",{style:{color:"#6a1b9a",fontWeight:"bold"},children:[W,"%"]}),u.jsxs("span",{children:["目標 NT$",(I.goal||0).toLocaleString()]})]})]},I.id)})}),u.jsx("h3",{style:{color:"#1b5e20",marginBottom:12},children:"🥇 贊助排行榜 TOP 5"}),u.jsx("div",{style:{background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.08)"},children:S.length===0?u.jsx("div",{style:{padding:20,textAlign:"center",color:"#aaa"},children:"還沒有贊助記錄"}):S.map((I,W)=>u.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"12px 16px",borderBottom:"1px solid #f5f5f5",gap:12},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:18,color:W<3?"#F57F17":"#ccc",width:28},children:W===0?"🥇":W===1?"🥈":W===2?"🥉":"#"+(W+1)}),u.jsx("div",{style:{fontSize:22},children:I.avatar||"🌱"}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:14},children:I.displayName||"會員"}),u.jsxs("div",{style:{fontSize:11,color:"#aaa"},children:["專案 NT$",Object.values(I.donations||{}).reduce((ve,xe)=>ve+xe,0).toLocaleString()," · 任務 NT$",Object.values(I.taskDonations||{}).reduce((ve,xe)=>ve+xe,0).toLocaleString()]})]}),u.jsxs("div",{style:{fontWeight:"bold",color:"#2e7d32",fontSize:16},children:["NT$",I.totalDonated.toLocaleString()]})]},I.uid))})]})}function Kt(){return u.jsxs("div",{children:[u.jsx("h2",{style:{margin:"0 0 8px",color:"#1b5e20"},children:"👥 用戶數據"}),u.jsxs("div",{style:{fontSize:12,color:"#aaa",marginBottom:20},children:["共 ",h.length," 位會員"]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12,marginBottom:24},children:[u.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:16,textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[u.jsx("div",{style:{fontSize:28,marginBottom:4},children:"👥"}),u.jsx("div",{style:{fontWeight:"bold",fontSize:24,color:"#1565C0"},children:h.length}),u.jsx("div",{style:{fontSize:12,color:"#888"},children:"總會員數"})]}),u.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:16,textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[u.jsx("div",{style:{fontSize:28,marginBottom:4},children:"⭐"}),u.jsx("div",{style:{fontWeight:"bold",fontSize:24,color:"#F57F17"},children:he.totalPoints.toLocaleString()}),u.jsx("div",{style:{fontSize:12,color:"#888"},children:"總積分"})]}),u.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:16,textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.08)"},children:[u.jsx("div",{style:{fontSize:28,marginBottom:4},children:"🔥"}),u.jsx("div",{style:{fontWeight:"bold",fontSize:24,color:"#C62828"},children:he.maxStreak}),u.jsx("div",{style:{fontSize:12,color:"#888"},children:"最高連續天"})]})]}),u.jsxs("div",{style:{background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.08)"},children:[u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",padding:"10px 16px",background:"#f9f9f9",fontSize:11,fontWeight:"bold",color:"#888"},children:[u.jsx("span",{children:"用戶"}),u.jsx("span",{style:{textAlign:"center"},children:"積分"}),u.jsx("span",{style:{textAlign:"center"},children:"打卡"}),u.jsx("span",{style:{textAlign:"center"},children:"連續"}),u.jsx("span",{style:{textAlign:"center"},children:"贊助"})]}),h.length===0?u.jsx("div",{style:{padding:20,textAlign:"center",color:"#aaa"},children:"還沒有會員"}):[...h].sort((C,M)=>(M.points||0)-(C.points||0)).map((C,M)=>{const $=Object.values(C.donations||{}).reduce((te,ne)=>te+ne,0)+Object.values(C.taskDonations||{}).reduce((te,ne)=>te+ne,0);return u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr 1fr",padding:"12px 16px",borderBottom:"1px solid #f5f5f5",alignItems:"center"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[u.jsxs("span",{style:{fontWeight:"bold",fontSize:12,color:M<3?"#F57F17":"#ccc",width:20},children:["#",M+1]}),u.jsx("span",{style:{fontSize:20},children:C.avatar||"🌱"}),u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:13},children:C.displayName||"會員"}),u.jsxs("div",{style:{fontSize:10,color:"#aaa"},children:[C.uid.slice(0,8),"..."]})]})]}),u.jsx("div",{style:{textAlign:"center",fontWeight:"bold",color:"#2e7d32",fontSize:13},children:C.points||0}),u.jsx("div",{style:{textAlign:"center",color:"#888",fontSize:13},children:(C.checkinDays||[]).length}),u.jsxs("div",{style:{textAlign:"center",color:"#F57F17",fontSize:13},children:["🔥",C.streak||0]}),u.jsxs("div",{style:{textAlign:"center",color:"#6a1b9a",fontSize:13},children:["NT$",$]})]},C.uid)})]})]})}function R(){async function C(S){await or(je(Hi,"memberTasks/"+S),{status:"已核准"}),A("✅ 任務已核准！")}async function M(S){await or(je(Hi,"memberTasks/"+S),{status:"已拒絕"}),A("❌ 任務已拒絕")}async function $(S){window.confirm("確定要刪除這個任務？")&&(await YI(je(Hi,"memberTasks/"+S)),A("🗑️ 任務已刪除"))}const te=d.filter(S=>!S.status||S.status==="審核中"),ne=d.filter(S=>S.status&&S.status!=="審核中");return u.jsxs("div",{children:[u.jsx("h2",{style:{margin:"0 0 20px",color:"#1b5e20"},children:"✅ 任務管理"}),te.length>0&&u.jsxs(u.Fragment,{children:[u.jsxs("h3",{style:{color:"#F57F17",marginBottom:12},children:["⏳ 待審核 (",te.length,")"]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,marginBottom:24},children:te.map(S=>u.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:16,boxShadow:"0 2px 12px rgba(0,0,0,0.08)",borderLeft:"4px solid #F57F17"},children:[u.jsxs("div",{style:{display:"flex",gap:12,marginBottom:10},children:[u.jsx("div",{style:{fontSize:28},children:S.icon||"🌱"}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:15},children:S.title}),u.jsxs("div",{style:{fontSize:12,color:"#888"},children:[S.creatorName," · ",S.category," · 截止 ",S.deadline]}),u.jsx("div",{style:{fontSize:13,color:"#555",marginTop:4},children:S.desc}),u.jsxs("div",{style:{fontSize:12,color:"#888",marginTop:4},children:["目標 NT$",(S.goal||0).toLocaleString()]})]})]}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx("button",{onClick:()=>C(S.id),style:{flex:1,padding:"10px",borderRadius:10,border:"none",background:"#2e7d32",color:"#fff",fontWeight:"bold",cursor:"pointer",fontFamily:ae},children:"✅ 核准"}),u.jsx("button",{onClick:()=>M(S.id),style:{flex:1,padding:"10px",borderRadius:10,border:"none",background:"#ffebee",color:"#c62828",fontWeight:"bold",cursor:"pointer",fontFamily:ae},children:"❌ 拒絕"}),u.jsx("button",{onClick:()=>$(S.id),style:{padding:"10px 14px",borderRadius:10,border:"none",background:"#f5f5f5",color:"#aaa",cursor:"pointer",fontFamily:ae},children:"🗑️"})]})]},S.id))})]}),te.length===0&&u.jsx("div",{style:{background:"#e8f5e9",borderRadius:12,padding:16,marginBottom:24,textAlign:"center",color:"#2e7d32",fontWeight:"bold"},children:"✅ 沒有待審核任務"}),u.jsx("h3",{style:{color:"#888",marginBottom:12},children:"已處理任務"}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:ne.length===0?u.jsx("div",{style:{background:"#fff",borderRadius:12,padding:16,textAlign:"center",color:"#aaa"},children:"還沒有已處理的任務"}):ne.map(S=>u.jsxs("div",{style:{background:"#fff",borderRadius:14,padding:"12px 16px",boxShadow:"0 1px 8px rgba(0,0,0,0.06)",display:"flex",alignItems:"center",gap:12},children:[u.jsx("div",{style:{fontSize:24},children:S.icon||"🌱"}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:14},children:S.title}),u.jsxs("div",{style:{fontSize:11,color:"#aaa"},children:[S.creatorName," · ",S.category]})]}),u.jsx("span",{style:{fontSize:12,padding:"4px 10px",borderRadius:99,fontWeight:"bold",background:S.status==="已核准"?"#e8f5e9":"#ffebee",color:S.status==="已核准"?"#2e7d32":"#c62828"},children:S.status}),u.jsx("button",{onClick:()=>$(S.id),style:{padding:"6px 10px",borderRadius:8,border:"none",background:"#f5f5f5",color:"#aaa",cursor:"pointer",fontSize:12,fontFamily:ae},children:"🗑️"})]},S.id))})]})}function U(){const[C,M]=L.useState(w||{icon:"🌱",title:"",desc:"",points:20,category:"生活",difficulty:"簡單"}),$=!!(w&&w.id);function te(){!C.title||!C.desc||($?(m(S=>S.map(I=>I.id===C.id?{...C,points:Number(C.points)}:I)),A("✅ 挑戰已更新！")):(m(S=>[...S,{...C,id:Date.now(),points:Number(C.points)}]),A("✅ 新挑戰已新增！")),b(null))}function ne(S){window.confirm("確定要刪除這個挑戰？")&&(m(I=>I.filter(W=>W.id!==S)),A("🗑️ 挑戰已刪除"))}return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[u.jsx("h2",{style:{margin:0,color:"#1b5e20"},children:"🌿 挑戰項目管理"}),u.jsx("button",{onClick:()=>b({}),style:{padding:"8px 16px",borderRadius:10,border:"none",background:"#2e7d32",color:"#fff",fontWeight:"bold",cursor:"pointer",fontFamily:ae},children:"+ 新增"})]}),w!==null&&u.jsxs("div",{style:{background:"#ffffff",borderRadius:16,padding:24,marginBottom:20,boxShadow:"0 2px 16px rgba(0,0,0,0.1)",color:"#333"},children:[u.jsx("h3",{style:{margin:"0 0 16px",color:"#1b5e20"},children:$?"✏️ 編輯挑戰":"➕ 新增挑戰"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:12},children:RT.map(S=>u.jsx("button",{onClick:()=>M(I=>({...I,icon:S})),style:{width:36,height:36,borderRadius:8,border:`2px solid ${C.icon===S?"#2e7d32":"#eee"}`,background:C.icon===S?"#e8f5e9":"#fff",fontSize:18,cursor:"pointer"},children:S},S))}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10},children:[u.jsxs("div",{children:[u.jsx("label",{style:{fontSize:12,fontWeight:"bold",color:"#555"},children:"分類"}),u.jsx("select",{value:C.category,onChange:S=>M(I=>({...I,category:S.target.value})),style:{width:"100%",padding:8,borderRadius:8,border:"1.5px solid #e8f5e9",marginTop:4,fontFamily:ae,color:"#333"},children:TT.map(S=>u.jsx("option",{children:S},S))})]}),u.jsxs("div",{children:[u.jsx("label",{style:{fontSize:12,fontWeight:"bold",color:"#555"},children:"難度"}),u.jsx("select",{value:C.difficulty,onChange:S=>M(I=>({...I,difficulty:S.target.value})),style:{width:"100%",padding:8,borderRadius:8,border:"1.5px solid #e8f5e9",marginTop:4,fontFamily:ae,color:"#333"},children:bT.map(S=>u.jsx("option",{children:S},S))})]})]}),[["title","挑戰名稱"],["desc","說明"]].map(([S,I])=>u.jsxs("div",{style:{marginBottom:10},children:[u.jsxs("label",{style:{fontSize:12,fontWeight:"bold",color:"#555"},children:[I," *"]}),u.jsx("input",{value:C[S]||"",onChange:W=>M(ve=>({...ve,[S]:W.target.value})),style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1.5px solid #e8f5e9",marginTop:4,fontSize:14,fontFamily:ae,boxSizing:"border-box",color:"#333"}})]},S)),u.jsxs("div",{style:{marginBottom:16},children:[u.jsx("label",{style:{fontSize:12,fontWeight:"bold",color:"#555"},children:"積分"}),u.jsx("input",{type:"number",value:C.points,onChange:S=>M(I=>({...I,points:S.target.value})),style:{width:100,padding:"8px 12px",borderRadius:8,border:"1.5px solid #e8f5e9",marginTop:4,fontSize:14,fontFamily:ae,display:"block",color:"#333"}})]}),u.jsxs("div",{style:{display:"flex",gap:10},children:[u.jsx("button",{onClick:te,style:{padding:"10px 24px",borderRadius:10,border:"none",background:"#2e7d32",color:"#fff",fontWeight:"bold",cursor:"pointer",fontFamily:ae},children:"💾 儲存"}),u.jsx("button",{onClick:()=>b(null),style:{padding:"10px 24px",borderRadius:10,border:"none",background:"#f5f5f5",color:"#888",fontWeight:"bold",cursor:"pointer",fontFamily:ae},children:"取消"})]})]}),u.jsx("div",{style:{background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.08)"},children:O.map(S=>u.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"12px 16px",borderBottom:"1px solid #f5f5f5",gap:12},children:[u.jsx("div",{style:{fontSize:28},children:S.icon}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:14},children:S.title}),u.jsx("div",{style:{fontSize:12,color:"#888"},children:S.desc}),u.jsxs("div",{style:{display:"flex",gap:6,marginTop:4},children:[u.jsx("span",{style:{fontSize:11,background:"#e8f5e9",color:"#2e7d32",padding:"2px 8px",borderRadius:99,fontWeight:"bold"},children:S.category}),u.jsx("span",{style:{fontSize:11,background:"#fff8e1",color:"#f57f17",padding:"2px 8px",borderRadius:99},children:S.difficulty}),u.jsxs("span",{style:{fontSize:11,background:"#e3f2fd",color:"#1565c0",padding:"2px 8px",borderRadius:99,fontWeight:"bold"},children:["+",S.points,"pts"]})]})]}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx("button",{onClick:()=>b(S),style:{padding:"6px 12px",borderRadius:8,border:"1px solid #e8f5e9",background:"#fff",color:"#2e7d32",cursor:"pointer",fontSize:12,fontFamily:ae},children:"✏️"}),u.jsx("button",{onClick:()=>ne(S.id),style:{padding:"6px 12px",borderRadius:8,border:"none",background:"#ffebee",color:"#c62828",cursor:"pointer",fontSize:12,fontFamily:ae},children:"🗑️"})]})]},S.id))})]})}function B(){const[C,M]=L.useState(D||{icon:"🌳",title:"",org:"",desc:"",goal:1e4,unit:10,active:!0}),$=!!(D&&D.id),te=Oe();function ne(){!C.title||!C.org||($?(g(S=>S.map(I=>I.id===C.id?{...C,goal:Number(C.goal),unit:Number(C.unit)}:I)),A("✅ 計畫已更新！")):(g(S=>[...S,{...C,id:"p"+Date.now(),raised:0,backers:0,goal:Number(C.goal),unit:Number(C.unit)}]),A("✅ 新計畫已新增！")),N(null))}return u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[u.jsx("h2",{style:{margin:0,color:"#1b5e20"},children:"💚 贊助計畫管理"}),u.jsx("button",{onClick:()=>N({}),style:{padding:"8px 16px",borderRadius:10,border:"none",background:"#2e7d32",color:"#fff",fontWeight:"bold",cursor:"pointer",fontFamily:ae},children:"+ 新增"})]}),D!==null&&u.jsxs("div",{style:{background:"#ffffff",borderRadius:16,padding:24,marginBottom:20,boxShadow:"0 2px 16px rgba(0,0,0,0.1)",color:"#333"},children:[u.jsx("h3",{style:{margin:"0 0 16px",color:"#1b5e20"},children:$?"✏️ 編輯計畫":"➕ 新增計畫"}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[[["title","計畫名稱"],["org","主辦單位"],["desc","說明"]].map(([S,I])=>u.jsxs("div",{style:{gridColumn:S==="desc"?"1/-1":"auto"},children:[u.jsxs("label",{style:{fontSize:12,fontWeight:"bold",color:"#555"},children:[I," *"]}),u.jsx("input",{value:C[S]||"",onChange:W=>M(ve=>({...ve,[S]:W.target.value})),style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1.5px solid #e8f5e9",marginTop:4,fontSize:14,fontFamily:ae,boxSizing:"border-box",color:"#333"}})]},S)),u.jsxs("div",{children:[u.jsx("label",{style:{fontSize:12,fontWeight:"bold",color:"#555"},children:"目標金額"}),u.jsx("input",{type:"number",value:C.goal,onChange:S=>M(I=>({...I,goal:S.target.value})),style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1.5px solid #e8f5e9",marginTop:4,fontFamily:ae,boxSizing:"border-box",color:"#333"}})]}),u.jsxs("div",{children:[u.jsx("label",{style:{fontSize:12,fontWeight:"bold",color:"#555"},children:"單筆贊助金額"}),u.jsx("input",{type:"number",value:C.unit,onChange:S=>M(I=>({...I,unit:S.target.value})),style:{width:"100%",padding:"8px 12px",borderRadius:8,border:"1.5px solid #e8f5e9",marginTop:4,fontFamily:ae,boxSizing:"border-box",color:"#333"}})]})]}),u.jsxs("div",{style:{display:"flex",gap:10,marginTop:16},children:[u.jsx("button",{onClick:ne,style:{padding:"10px 24px",borderRadius:10,border:"none",background:"#2e7d32",color:"#fff",fontWeight:"bold",cursor:"pointer",fontFamily:ae},children:"💾 儲存"}),u.jsx("button",{onClick:()=>N(null),style:{padding:"10px 24px",borderRadius:10,border:"none",background:"#f5f5f5",color:"#888",fontWeight:"bold",cursor:"pointer",fontFamily:ae},children:"取消"})]})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:p.map(S=>{const I=te[S.id]||0,W=Math.min(100,Math.round(I/S.goal*100));return u.jsx("div",{style:{background:"#fff",borderRadius:16,padding:16,boxShadow:"0 2px 12px rgba(0,0,0,0.08)"},children:u.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[u.jsx("div",{style:{fontSize:32},children:S.icon}),u.jsxs("div",{style:{flex:1},children:[u.jsx("div",{style:{fontWeight:"bold",fontSize:15,marginBottom:4},children:S.title}),u.jsx("div",{style:{fontSize:12,color:"#888",marginBottom:8},children:S.org}),u.jsx("div",{style:{background:"#f1f8e9",borderRadius:99,height:6,overflow:"hidden",marginBottom:4},children:u.jsx("div",{style:{height:"100%",width:W+"%",background:"#2e7d32",borderRadius:99}})}),u.jsxs("div",{style:{fontSize:11,color:"#888"},children:["實際 NT$",I.toLocaleString()," / 目標 NT$",S.goal.toLocaleString()," · ",W,"%"]})]}),u.jsx("div",{style:{display:"flex",gap:8},children:u.jsx("button",{onClick:()=>N(S),style:{padding:"6px 10px",borderRadius:8,border:"1px solid #e8f5e9",background:"#fff",color:"#2e7d32",cursor:"pointer",fontSize:12,fontFamily:ae},children:"✏️"})})]})},S.id)})})]})}const oe={dashboard:u.jsx(mn,{}),donations:u.jsx(Gt,{}),users:u.jsx(Kt,{}),tasks:u.jsx(R,{}),challenges:u.jsx(U,{}),projects:u.jsx(B,{})};return u.jsxs("div",{style:{minHeight:"100vh",background:"#f5f7f5",fontFamily:ae,colorScheme:"light",color:"#333"},children:[u.jsx("style",{children:`
      * { color-scheme: light !important; }
      input, textarea, select { color: #333 !important; background-color: #fafafa !important; }
    `}),a&&u.jsx("div",{style:{position:"fixed",top:16,left:"50%",transform:"translateX(-50%)",background:"#1b5e20",color:"#fff",borderRadius:30,padding:"10px 24px",fontWeight:"bold",fontSize:14,zIndex:9999,whiteSpace:"nowrap",boxShadow:"0 4px 20px rgba(0,0,0,0.25)"},children:a}),u.jsxs("div",{style:{position:"fixed",left:0,top:0,bottom:0,width:200,background:"linear-gradient(180deg,#1b5e20,#2e7d32)",padding:"24px 0",display:"flex",flexDirection:"column",zIndex:100},children:[u.jsxs("div",{style:{padding:"0 20px 24px",borderBottom:"1px solid rgba(255,255,255,0.15)"},children:[u.jsx("div",{style:{fontSize:28},children:"🌿"}),u.jsx("div",{style:{color:"#fff",fontWeight:"bold",fontSize:15,marginTop:6},children:"綠色行動"}),u.jsx("div",{style:{color:"rgba(255,255,255,0.6)",fontSize:11},children:"後台管理系統"})]}),u.jsx("div",{style:{flex:1,padding:"12px 0",overflowY:"auto"},children:Q.map(C=>u.jsxs("button",{onClick:()=>l(C.key),style:{width:"100%",padding:"12px 20px",border:"none",background:o===C.key?"rgba(255,255,255,0.2)":"transparent",color:"#fff",textAlign:"left",cursor:"pointer",fontSize:14,fontFamily:ae,display:"flex",alignItems:"center",gap:10,borderLeft:o===C.key?"3px solid #fff":"3px solid transparent"},children:[u.jsx("span",{children:C.icon}),u.jsx("span",{children:C.label})]},C.key))}),u.jsxs("div",{style:{padding:"16px 20px",borderTop:"1px solid rgba(255,255,255,0.15)"},children:[u.jsx("div",{style:{color:"rgba(255,255,255,0.5)",fontSize:10,marginBottom:8},children:"● 即時同步 Firebase"}),u.jsx("button",{onClick:()=>e(!1),style:{width:"100%",padding:"8px",borderRadius:8,border:"1px solid rgba(255,255,255,0.3)",background:"transparent",color:"#fff",cursor:"pointer",fontSize:13,fontFamily:ae},children:"🚪 登出"})]})]}),u.jsx("div",{style:{marginLeft:200,padding:32,minHeight:"100vh"},children:oe[o]})]})}const sc=window.location.pathname,AT=sc==="/admin"||sc==="/green-action/admin"||sc.endsWith("/admin");Xm(document.getElementById("root")).render(u.jsx(L.StrictMode,{children:AT?u.jsx(PT,{}):u.jsx(xT,{})}));
