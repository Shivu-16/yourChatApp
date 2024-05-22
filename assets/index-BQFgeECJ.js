(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function S4(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var k4={exports:{}},Bc={},N4={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf=Symbol.for("react.element"),Q3=Symbol.for("react.portal"),G3=Symbol.for("react.fragment"),Y3=Symbol.for("react.strict_mode"),H3=Symbol.for("react.profiler"),W3=Symbol.for("react.provider"),J3=Symbol.for("react.context"),$3=Symbol.for("react.forward_ref"),Z3=Symbol.for("react.suspense"),q3=Symbol.for("react.memo"),K3=Symbol.for("react.lazy"),Wy=Symbol.iterator;function X3(t){return t===null||typeof t!="object"?null:(t=Wy&&t[Wy]||t["@@iterator"],typeof t=="function"?t:null)}var A4={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j4=Object.assign,D4={};function Ro(t,e,n){this.props=t,this.context=e,this.refs=D4,this.updater=n||A4}Ro.prototype.isReactComponent={};Ro.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ro.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function R4(){}R4.prototype=Ro.prototype;function lp(t,e,n){this.props=t,this.context=e,this.refs=D4,this.updater=n||A4}var cp=lp.prototype=new R4;cp.constructor=lp;j4(cp,Ro.prototype);cp.isPureReactComponent=!0;var Jy=Array.isArray,P4=Object.prototype.hasOwnProperty,dp={current:null},x4={key:!0,ref:!0,__self:!0,__source:!0};function O4(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)P4.call(e,r)&&!x4.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Qf,type:t,key:s,ref:o,props:i,_owner:dp.current}}function eb(t,e){return{$$typeof:Qf,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Qf}function tb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $y=/\/+/g;function Ih(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tb(""+t.key):e.toString(36)}function dl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Qf:case Q3:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ih(o,0):r,Jy(i)?(n="",t!=null&&(n=t.replace($y,"$&/")+"/"),dl(i,e,n,"",function(l){return l})):i!=null&&(hp(i)&&(i=eb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($y,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Jy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ih(s,a);o+=dl(s,e,n,u,i)}else if(u=X3(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ih(s,a++),o+=dl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pu(t,e,n){if(t==null)return t;var r=[],i=0;return dl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function nb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},hl={transition:null},rb={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:hl,ReactCurrentOwner:dp};function z4(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Pu,forEach:function(t,e,n){Pu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pu(t,function(){e++}),e},toArray:function(t){return Pu(t,function(e){return e})||[]},only:function(t){if(!hp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ro;re.Fragment=G3;re.Profiler=H3;re.PureComponent=lp;re.StrictMode=Y3;re.Suspense=Z3;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rb;re.act=z4;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=j4({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)P4.call(e,u)&&!x4.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Qf,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:J3,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:W3,_context:t},t.Consumer=t};re.createElement=O4;re.createFactory=function(t){var e=O4.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:$3,render:t}};re.isValidElement=hp;re.lazy=function(t){return{$$typeof:K3,_payload:{_status:-1,_result:t},_init:nb}};re.memo=function(t,e){return{$$typeof:q3,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};re.unstable_act=z4;re.useCallback=function(t,e){return Bt.current.useCallback(t,e)};re.useContext=function(t){return Bt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Bt.current.useEffect(t,e)};re.useId=function(){return Bt.current.useId()};re.useImperativeHandle=function(t,e,n){return Bt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Bt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Bt.current.useReducer(t,e,n)};re.useRef=function(t){return Bt.current.useRef(t)};re.useState=function(t){return Bt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Bt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Bt.current.useTransition()};re.version="18.3.1";N4.exports=re;var T=N4.exports;const le=S4(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ib=T,sb=Symbol.for("react.element"),ob=Symbol.for("react.fragment"),ab=Object.prototype.hasOwnProperty,fb=ib.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ub={key:!0,ref:!0,__self:!0,__source:!0};function U4(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ab.call(e,r)&&!ub.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:sb,type:t,key:s,ref:o,props:i,_owner:fb.current}}Bc.Fragment=ob;Bc.jsx=U4;Bc.jsxs=U4;k4.exports=Bc;var R=k4.exports,L0={},V4={exports:{}},ln={},F4={exports:{}},B4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,J){var $=B.length;B.push(J);e:for(;0<$;){var ge=$-1>>>1,ee=B[ge];if(0<i(ee,J))B[ge]=J,B[$]=ee,$=ge;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var J=B[0],$=B.pop();if($!==J){B[0]=$;e:for(var ge=0,ee=B.length,fe=ee>>>1;ge<fe;){var Ge=2*(ge+1)-1,He=B[Ge],ut=Ge+1,Rt=B[ut];if(0>i(He,$))ut<ee&&0>i(Rt,He)?(B[ge]=Rt,B[ut]=$,ge=ut):(B[ge]=He,B[Ge]=$,ge=Ge);else if(ut<ee&&0>i(Rt,$))B[ge]=Rt,B[ut]=$,ge=ut;else break e}}return J}function i(B,J){var $=B.sortIndex-J.sortIndex;return $!==0?$:B.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],l=[],c=1,h=null,p=3,v=!1,I=!1,S=!1,N=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(B){for(var J=n(l);J!==null;){if(J.callback===null)r(l);else if(J.startTime<=B)r(l),J.sortIndex=J.expirationTime,e(u,J);else break;J=n(l)}}function A(B){if(S=!1,_(B),!I)if(n(u)!==null)I=!0,Gn(z);else{var J=n(l);J!==null&&Xe(A,J.startTime-B)}}function z(B,J){I=!1,S&&(S=!1,M(m),m=-1),v=!0;var $=p;try{for(_(J),h=n(u);h!==null&&(!(h.expirationTime>J)||B&&!k());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,p=h.priorityLevel;var ee=ge(h.expirationTime<=J);J=t.unstable_now(),typeof ee=="function"?h.callback=ee:h===n(u)&&r(u),_(J)}else r(u);h=n(u)}if(h!==null)var fe=!0;else{var Ge=n(l);Ge!==null&&Xe(A,Ge.startTime-J),fe=!1}return fe}finally{h=null,p=$,v=!1}}var x=!1,C=null,m=-1,L=5,E=-1;function k(){return!(t.unstable_now()-E<L)}function j(){if(C!==null){var B=t.unstable_now();E=B;var J=!0;try{J=C(!0,B)}finally{J?b():(x=!1,C=null)}}else x=!1}var b;if(typeof y=="function")b=function(){y(j)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Gt=Qe.port2;Qe.port1.onmessage=j,b=function(){Gt.postMessage(null)}}else b=function(){N(j,0)};function Gn(B){C=B,x||(x=!0,b())}function Xe(B,J){m=N(function(){B(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){I||v||(I=!0,Gn(z))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(p){case 1:case 2:case 3:var J=3;break;default:J=p}var $=p;p=J;try{return B()}finally{p=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=p;p=B;try{return J()}finally{p=$}},t.unstable_scheduleCallback=function(B,J,$){var ge=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,B){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=$+ee,B={id:c++,callback:J,priorityLevel:B,startTime:$,expirationTime:ee,sortIndex:-1},$>ge?(B.sortIndex=$,e(l,B),n(u)===null&&B===n(l)&&(S?(M(m),m=-1):S=!0,Xe(A,$-ge))):(B.sortIndex=ee,e(u,B),I||v||(I=!0,Gn(z))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var J=p;return function(){var $=p;p=J;try{return B.apply(this,arguments)}finally{p=$}}}})(B4);F4.exports=B4;var lb=F4.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb=T,un=lb;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q4=new Set,of={};function fs(t,e){fo(t,e),fo(t+"Capture",e)}function fo(t,e){for(of[t]=e,t=0;t<e.length;t++)Q4.add(e[t])}var Ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),C0=Object.prototype.hasOwnProperty,hb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zy={},qy={};function pb(t){return C0.call(qy,t)?!0:C0.call(Zy,t)?!1:hb.test(t)?qy[t]=!0:(Zy[t]=!0,!1)}function gb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mb(t,e,n,r){if(e===null||typeof e>"u"||gb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var pp=/[\-:]([a-z])/g;function gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pp,gp);mt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pp,gp);mt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pp,gp);mt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function mp(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mb(e,n,i,r)&&(n=null),r||i===null?pb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nr=cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xu=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),E0=Symbol.for("react.profiler"),G4=Symbol.for("react.provider"),Y4=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),T0=Symbol.for("react.suspense"),b0=Symbol.for("react.suspense_list"),vp=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),H4=Symbol.for("react.offscreen"),Ky=Symbol.iterator;function ca(t){return t===null||typeof t!="object"?null:(t=Ky&&t[Ky]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Lh;function ba(t){if(Lh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lh=e&&e[1]||""}return`
`+Lh+t}var Ch=!1;function Eh(t,e){if(!t||Ch)return"";Ch=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Ch=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ba(t):""}function yb(t){switch(t.tag){case 5:return ba(t.type);case 16:return ba("Lazy");case 13:return ba("Suspense");case 19:return ba("SuspenseList");case 0:case 2:case 15:return t=Eh(t.type,!1),t;case 11:return t=Eh(t.type.render,!1),t;case 1:return t=Eh(t.type,!0),t;default:return""}}function S0(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Ds:return"Portal";case E0:return"Profiler";case yp:return"StrictMode";case T0:return"Suspense";case b0:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y4:return(t.displayName||"Context")+".Consumer";case G4:return(t._context.displayName||"Context")+".Provider";case wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vp:return e=t.displayName||null,e!==null?e:S0(t.type)||"Memo";case Or:e=t._payload,t=t._init;try{return S0(t(e))}catch{}}return null}function wb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return S0(e);case 8:return e===yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ui(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function W4(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vb(t){var e=W4(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ou(t){t._valueTracker||(t._valueTracker=vb(t))}function J4(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=W4(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function k0(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ui(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $4(t,e){e=e.checked,e!=null&&mp(t,"checked",e,!1)}function N0(t,e){$4(t,e);var n=ui(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?A0(t,e.type,n):e.hasOwnProperty("defaultValue")&&A0(t,e.type,ui(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ew(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function A0(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Sa=Array.isArray;function Js(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ui(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function j0(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(Sa(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ui(n)}}function Z4(t,e){var n=ui(e.value),r=ui(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function nw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function q4(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function D0(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?q4(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zu,K4=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zu=zu||document.createElement("div"),zu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function af(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_b=["Webkit","ms","Moz","O"];Object.keys(za).forEach(function(t){_b.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),za[e]=za[t]})});function X4(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||za.hasOwnProperty(t)&&za[t]?(""+e).trim():e+"px"}function e_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=X4(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Mb=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function R0(t,e){if(e){if(Mb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function P0(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x0=null;function _p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var O0=null,$s=null,Zs=null;function rw(t){if(t=Hf(t)){if(typeof O0!="function")throw Error(V(280));var e=t.stateNode;e&&(e=Wc(e),O0(t.stateNode,t.type,e))}}function t_(t){$s?Zs?Zs.push(t):Zs=[t]:$s=t}function n_(){if($s){var t=$s,e=Zs;if(Zs=$s=null,rw(t),e)for(t=0;t<e.length;t++)rw(e[t])}}function r_(t,e){return t(e)}function i_(){}var Th=!1;function s_(t,e,n){if(Th)return t(e,n);Th=!0;try{return r_(t,e,n)}finally{Th=!1,($s!==null||Zs!==null)&&(i_(),n_())}}function ff(t,e){var n=t.stateNode;if(n===null)return null;var r=Wc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var z0=!1;if(Ir)try{var da={};Object.defineProperty(da,"passive",{get:function(){z0=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{z0=!1}function Ib(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Ua=!1,Ul=null,Vl=!1,U0=null,Lb={onError:function(t){Ua=!0,Ul=t}};function Cb(t,e,n,r,i,s,o,a,u){Ua=!1,Ul=null,Ib.apply(Lb,arguments)}function Eb(t,e,n,r,i,s,o,a,u){if(Cb.apply(this,arguments),Ua){if(Ua){var l=Ul;Ua=!1,Ul=null}else throw Error(V(198));Vl||(Vl=!0,U0=l)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function iw(t){if(us(t)!==t)throw Error(V(188))}function Tb(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return iw(i),t;if(s===r)return iw(i),e;s=s.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function a_(t){return t=Tb(t),t!==null?f_(t):null}function f_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=f_(t);if(e!==null)return e;t=t.sibling}return null}var u_=un.unstable_scheduleCallback,sw=un.unstable_cancelCallback,bb=un.unstable_shouldYield,Sb=un.unstable_requestPaint,Ye=un.unstable_now,kb=un.unstable_getCurrentPriorityLevel,Mp=un.unstable_ImmediatePriority,l_=un.unstable_UserBlockingPriority,Fl=un.unstable_NormalPriority,Nb=un.unstable_LowPriority,c_=un.unstable_IdlePriority,Qc=null,qn=null;function Ab(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(Qc,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:Rb,jb=Math.log,Db=Math.LN2;function Rb(t){return t>>>=0,t===0?32:31-(jb(t)/Db|0)|0}var Uu=64,Vu=4194304;function ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ka(a):(s&=o,s!==0&&(r=ka(s)))}else o=n&~i,o!==0?r=ka(o):s!==0&&(r=ka(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-On(e),i=1<<n,r|=t[n],e&=~i;return r}function Pb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=Pb(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function V0(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function d_(){var t=Uu;return Uu<<=1,!(Uu&4194240)&&(Uu=64),t}function bh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gf(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function Ob(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-On(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ip(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-On(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var we=0;function h_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var p_,Lp,g_,m_,y_,F0=!1,Fu=[],Zr=null,qr=null,Kr=null,uf=new Map,lf=new Map,Ur=[],zb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ow(t,e){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":uf.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":lf.delete(e.pointerId)}}function ha(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hf(e),e!==null&&Lp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ub(t,e,n,r,i){switch(e){case"focusin":return Zr=ha(Zr,t,e,n,r,i),!0;case"dragenter":return qr=ha(qr,t,e,n,r,i),!0;case"mouseover":return Kr=ha(Kr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uf.set(s,ha(uf.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,lf.set(s,ha(lf.get(s)||null,t,e,n,r,i)),!0}return!1}function w_(t){var e=Pi(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=o_(n),e!==null){t.blockedOn=e,y_(t.priority,function(){g_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=B0(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);x0=r,n.target.dispatchEvent(r),x0=null}else return e=Hf(n),e!==null&&Lp(e),t.blockedOn=n,!1;e.shift()}return!0}function aw(t,e,n){pl(t)&&n.delete(e)}function Vb(){F0=!1,Zr!==null&&pl(Zr)&&(Zr=null),qr!==null&&pl(qr)&&(qr=null),Kr!==null&&pl(Kr)&&(Kr=null),uf.forEach(aw),lf.forEach(aw)}function pa(t,e){t.blockedOn===e&&(t.blockedOn=null,F0||(F0=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,Vb)))}function cf(t){function e(i){return pa(i,t)}if(0<Fu.length){pa(Fu[0],t);for(var n=1;n<Fu.length;n++){var r=Fu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Zr!==null&&pa(Zr,t),qr!==null&&pa(qr,t),Kr!==null&&pa(Kr,t),uf.forEach(e),lf.forEach(e),n=0;n<Ur.length;n++)r=Ur[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ur.length&&(n=Ur[0],n.blockedOn===null);)w_(n),n.blockedOn===null&&Ur.shift()}var qs=Nr.ReactCurrentBatchConfig,Ql=!0;function Fb(t,e,n,r){var i=we,s=qs.transition;qs.transition=null;try{we=1,Cp(t,e,n,r)}finally{we=i,qs.transition=s}}function Bb(t,e,n,r){var i=we,s=qs.transition;qs.transition=null;try{we=4,Cp(t,e,n,r)}finally{we=i,qs.transition=s}}function Cp(t,e,n,r){if(Ql){var i=B0(t,e,n,r);if(i===null)Oh(t,e,r,Gl,n),ow(t,r);else if(Ub(i,t,e,n,r))r.stopPropagation();else if(ow(t,r),e&4&&-1<zb.indexOf(t)){for(;i!==null;){var s=Hf(i);if(s!==null&&p_(s),s=B0(t,e,n,r),s===null&&Oh(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Oh(t,e,r,null,n)}}var Gl=null;function B0(t,e,n,r){if(Gl=null,t=_p(r),t=Pi(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=o_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function v_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kb()){case Mp:return 1;case l_:return 4;case Fl:case Nb:return 16;case c_:return 536870912;default:return 16}default:return 16}}var Hr=null,Ep=null,gl=null;function __(){if(gl)return gl;var t,e=Ep,n=e.length,r,i="value"in Hr?Hr.value:Hr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return gl=i.slice(t,1<r?1-r:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bu(){return!0}function fw(){return!1}function cn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bu:fw,this.isPropagationStopped=fw,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bu)},persist:function(){},isPersistent:Bu}),e}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tp=cn(Po),Yf=Oe({},Po,{view:0,detail:0}),Qb=cn(Yf),Sh,kh,ga,Gc=Oe({},Yf,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(Sh=t.screenX-ga.screenX,kh=t.screenY-ga.screenY):kh=Sh=0,ga=t),Sh)},movementY:function(t){return"movementY"in t?t.movementY:kh}}),uw=cn(Gc),Gb=Oe({},Gc,{dataTransfer:0}),Yb=cn(Gb),Hb=Oe({},Yf,{relatedTarget:0}),Nh=cn(Hb),Wb=Oe({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),Jb=cn(Wb),$b=Oe({},Po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zb=cn($b),qb=Oe({},Po,{data:0}),lw=cn(qb),Kb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eS[t])?!!e[t]:!1}function bp(){return tS}var nS=Oe({},Yf,{key:function(t){if(t.key){var e=Kb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bp,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rS=cn(nS),iS=Oe({},Gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cw=cn(iS),sS=Oe({},Yf,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bp}),oS=cn(sS),aS=Oe({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=cn(aS),uS=Oe({},Gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lS=cn(uS),cS=[9,13,27,32],Sp=Ir&&"CompositionEvent"in window,Va=null;Ir&&"documentMode"in document&&(Va=document.documentMode);var dS=Ir&&"TextEvent"in window&&!Va,M_=Ir&&(!Sp||Va&&8<Va&&11>=Va),dw=" ",hw=!1;function I_(t,e){switch(t){case"keyup":return cS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function hS(t,e){switch(t){case"compositionend":return L_(e);case"keypress":return e.which!==32?null:(hw=!0,dw);case"textInput":return t=e.data,t===dw&&hw?null:t;default:return null}}function pS(t,e){if(Ps)return t==="compositionend"||!Sp&&I_(t,e)?(t=__(),gl=Ep=Hr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M_&&e.locale!=="ko"?null:e.data;default:return null}}var gS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gS[t.type]:e==="textarea"}function C_(t,e,n,r){t_(r),e=Yl(e,"onChange"),0<e.length&&(n=new Tp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fa=null,df=null;function mS(t){P_(t,0)}function Yc(t){var e=zs(t);if(J4(e))return t}function yS(t,e){if(t==="change")return e}var E_=!1;if(Ir){var Ah;if(Ir){var jh="oninput"in document;if(!jh){var gw=document.createElement("div");gw.setAttribute("oninput","return;"),jh=typeof gw.oninput=="function"}Ah=jh}else Ah=!1;E_=Ah&&(!document.documentMode||9<document.documentMode)}function mw(){Fa&&(Fa.detachEvent("onpropertychange",T_),df=Fa=null)}function T_(t){if(t.propertyName==="value"&&Yc(df)){var e=[];C_(e,df,t,_p(t)),s_(mS,e)}}function wS(t,e,n){t==="focusin"?(mw(),Fa=e,df=n,Fa.attachEvent("onpropertychange",T_)):t==="focusout"&&mw()}function vS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yc(df)}function _S(t,e){if(t==="click")return Yc(e)}function MS(t,e){if(t==="input"||t==="change")return Yc(e)}function IS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Fn=typeof Object.is=="function"?Object.is:IS;function hf(t,e){if(Fn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!C0.call(e,i)||!Fn(t[i],e[i]))return!1}return!0}function yw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ww(t,e){var n=yw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yw(n)}}function b_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function S_(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function kp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LS(t){var e=S_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b_(n.ownerDocument.documentElement,n)){if(r!==null&&kp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ww(n,s);var o=ww(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CS=Ir&&"documentMode"in document&&11>=document.documentMode,xs=null,Q0=null,Ba=null,G0=!1;function vw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;G0||xs==null||xs!==zl(r)||(r=xs,"selectionStart"in r&&kp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ba&&hf(Ba,r)||(Ba=r,r=Yl(Q0,"onSelect"),0<r.length&&(e=new Tp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xs)))}function Qu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:Qu("Animation","AnimationEnd"),animationiteration:Qu("Animation","AnimationIteration"),animationstart:Qu("Animation","AnimationStart"),transitionend:Qu("Transition","TransitionEnd")},Dh={},k_={};Ir&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Hc(t){if(Dh[t])return Dh[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return Dh[t]=e[n];return t}var N_=Hc("animationend"),A_=Hc("animationiteration"),j_=Hc("animationstart"),D_=Hc("transitionend"),R_=new Map,_w="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(t,e){R_.set(t,e),fs(e,[t])}for(var Rh=0;Rh<_w.length;Rh++){var Ph=_w[Rh],ES=Ph.toLowerCase(),TS=Ph[0].toUpperCase()+Ph.slice(1);yi(ES,"on"+TS)}yi(N_,"onAnimationEnd");yi(A_,"onAnimationIteration");yi(j_,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi(D_,"onTransitionEnd");fo("onMouseEnter",["mouseout","mouseover"]);fo("onMouseLeave",["mouseout","mouseover"]);fo("onPointerEnter",["pointerout","pointerover"]);fo("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function Mw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Eb(r,e,void 0,t),t.currentTarget=null}function P_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Mw(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Mw(i,a,l),s=u}}}if(Vl)throw t=U0,Vl=!1,U0=null,t}function Ee(t,e){var n=e[$0];n===void 0&&(n=e[$0]=new Set);var r=t+"__bubble";n.has(r)||(x_(e,t,2,!1),n.add(r))}function xh(t,e,n){var r=0;e&&(r|=4),x_(n,t,r,e)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function pf(t){if(!t[Gu]){t[Gu]=!0,Q4.forEach(function(n){n!=="selectionchange"&&(bS.has(n)||xh(n,!1,t),xh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gu]||(e[Gu]=!0,xh("selectionchange",!1,e))}}function x_(t,e,n,r){switch(v_(e)){case 1:var i=Fb;break;case 4:i=Bb;break;default:i=Cp}n=i.bind(null,e,n,t),i=void 0,!z0||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Oh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Pi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}s_(function(){var l=s,c=_p(n),h=[];e:{var p=R_.get(t);if(p!==void 0){var v=Tp,I=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":v=rS;break;case"focusin":I="focus",v=Nh;break;case"focusout":I="blur",v=Nh;break;case"beforeblur":case"afterblur":v=Nh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=uw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Yb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=oS;break;case N_:case A_:case j_:v=Jb;break;case D_:v=fS;break;case"scroll":v=Qb;break;case"wheel":v=lS;break;case"copy":case"cut":case"paste":v=Zb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=cw}var S=(e&4)!==0,N=!S&&t==="scroll",M=S?p!==null?p+"Capture":null:p;S=[];for(var y=l,_;y!==null;){_=y;var A=_.stateNode;if(_.tag===5&&A!==null&&(_=A,M!==null&&(A=ff(y,M),A!=null&&S.push(gf(y,A,_)))),N)break;y=y.return}0<S.length&&(p=new v(p,I,null,n,c),h.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",p&&n!==x0&&(I=n.relatedTarget||n.fromElement)&&(Pi(I)||I[Lr]))break e;if((v||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,v?(I=n.relatedTarget||n.toElement,v=l,I=I?Pi(I):null,I!==null&&(N=us(I),I!==N||I.tag!==5&&I.tag!==6)&&(I=null)):(v=null,I=l),v!==I)){if(S=uw,A="onMouseLeave",M="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(S=cw,A="onPointerLeave",M="onPointerEnter",y="pointer"),N=v==null?p:zs(v),_=I==null?p:zs(I),p=new S(A,y+"leave",v,n,c),p.target=N,p.relatedTarget=_,A=null,Pi(c)===l&&(S=new S(M,y+"enter",I,n,c),S.target=_,S.relatedTarget=N,A=S),N=A,v&&I)t:{for(S=v,M=I,y=0,_=S;_;_=Ts(_))y++;for(_=0,A=M;A;A=Ts(A))_++;for(;0<y-_;)S=Ts(S),y--;for(;0<_-y;)M=Ts(M),_--;for(;y--;){if(S===M||M!==null&&S===M.alternate)break t;S=Ts(S),M=Ts(M)}S=null}else S=null;v!==null&&Iw(h,p,v,S,!1),I!==null&&N!==null&&Iw(h,N,I,S,!0)}}e:{if(p=l?zs(l):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var z=yS;else if(pw(p))if(E_)z=MS;else{z=vS;var x=wS}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(z=_S);if(z&&(z=z(t,l))){C_(h,z,n,c);break e}x&&x(t,p,l),t==="focusout"&&(x=p._wrapperState)&&x.controlled&&p.type==="number"&&A0(p,"number",p.value)}switch(x=l?zs(l):window,t){case"focusin":(pw(x)||x.contentEditable==="true")&&(xs=x,Q0=l,Ba=null);break;case"focusout":Ba=Q0=xs=null;break;case"mousedown":G0=!0;break;case"contextmenu":case"mouseup":case"dragend":G0=!1,vw(h,n,c);break;case"selectionchange":if(CS)break;case"keydown":case"keyup":vw(h,n,c)}var C;if(Sp)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Ps?I_(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(M_&&n.locale!=="ko"&&(Ps||m!=="onCompositionStart"?m==="onCompositionEnd"&&Ps&&(C=__()):(Hr=c,Ep="value"in Hr?Hr.value:Hr.textContent,Ps=!0)),x=Yl(l,m),0<x.length&&(m=new lw(m,t,null,n,c),h.push({event:m,listeners:x}),C?m.data=C:(C=L_(n),C!==null&&(m.data=C)))),(C=dS?hS(t,n):pS(t,n))&&(l=Yl(l,"onBeforeInput"),0<l.length&&(c=new lw("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=C))}P_(h,e)})}function gf(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ff(t,n),s!=null&&r.unshift(gf(t,s,i)),s=ff(t,e),s!=null&&r.push(gf(t,s,i))),t=t.return}return r}function Ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Iw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=ff(n,s),u!=null&&o.unshift(gf(n,u,a))):i||(u=ff(n,s),u!=null&&o.push(gf(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var SS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function Lw(t){return(typeof t=="string"?t:""+t).replace(SS,`
`).replace(kS,"")}function Yu(t,e,n){if(e=Lw(e),Lw(t)!==e&&n)throw Error(V(425))}function Hl(){}var Y0=null,H0=null;function W0(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var J0=typeof setTimeout=="function"?setTimeout:void 0,NS=typeof clearTimeout=="function"?clearTimeout:void 0,Cw=typeof Promise=="function"?Promise:void 0,AS=typeof queueMicrotask=="function"?queueMicrotask:typeof Cw<"u"?function(t){return Cw.resolve(null).then(t).catch(jS)}:J0;function jS(t){setTimeout(function(){throw t})}function zh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),cf(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);cf(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ew(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xo=Math.random().toString(36).slice(2),Wn="__reactFiber$"+xo,mf="__reactProps$"+xo,Lr="__reactContainer$"+xo,$0="__reactEvents$"+xo,DS="__reactListeners$"+xo,RS="__reactHandles$"+xo;function Pi(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ew(t);t!==null;){if(n=t[Wn])return n;t=Ew(t)}return e}t=n,n=t.parentNode}return null}function Hf(t){return t=t[Wn]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function Wc(t){return t[mf]||null}var Z0=[],Us=-1;function wi(t){return{current:t}}function ke(t){0>Us||(t.current=Z0[Us],Z0[Us]=null,Us--)}function Ie(t,e){Us++,Z0[Us]=t.current,t.current=e}var li={},At=wi(li),Zt=wi(!1),Yi=li;function uo(t,e){var n=t.type.contextTypes;if(!n)return li;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function Wl(){ke(Zt),ke(At)}function Tw(t,e,n){if(At.current!==li)throw Error(V(168));Ie(At,e),Ie(Zt,n)}function O_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(V(108,wb(t)||"Unknown",i));return Oe({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||li,Yi=At.current,Ie(At,t),Ie(Zt,Zt.current),!0}function bw(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=O_(t,e,Yi),r.__reactInternalMemoizedMergedChildContext=t,ke(Zt),ke(At),Ie(At,t)):ke(Zt),Ie(Zt,n)}var lr=null,Jc=!1,Uh=!1;function z_(t){lr===null?lr=[t]:lr.push(t)}function PS(t){Jc=!0,z_(t)}function vi(){if(!Uh&&lr!==null){Uh=!0;var t=0,e=we;try{var n=lr;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,Jc=!1}catch(i){throw lr!==null&&(lr=lr.slice(t+1)),u_(Mp,vi),i}finally{we=e,Uh=!1}}return null}var Vs=[],Fs=0,$l=null,Zl=0,pn=[],gn=0,Hi=null,cr=1,dr="";function Ai(t,e){Vs[Fs++]=Zl,Vs[Fs++]=$l,$l=t,Zl=e}function U_(t,e,n){pn[gn++]=cr,pn[gn++]=dr,pn[gn++]=Hi,Hi=t;var r=cr;t=dr;var i=32-On(r)-1;r&=~(1<<i),n+=1;var s=32-On(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cr=1<<32-On(e)+i|n<<i|r,dr=s+t}else cr=1<<s|n<<i|r,dr=t}function Np(t){t.return!==null&&(Ai(t,1),U_(t,1,0))}function Ap(t){for(;t===$l;)$l=Vs[--Fs],Vs[Fs]=null,Zl=Vs[--Fs],Vs[Fs]=null;for(;t===Hi;)Hi=pn[--gn],pn[gn]=null,dr=pn[--gn],pn[gn]=null,cr=pn[--gn],pn[gn]=null}var an=null,tn=null,je=!1,Dn=null;function V_(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,an=t,tn=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,an=t,tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hi!==null?{id:cr,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,an=t,tn=null,!0):!1;default:return!1}}function q0(t){return(t.mode&1)!==0&&(t.flags&128)===0}function K0(t){if(je){var e=tn;if(e){var n=e;if(!Sw(t,e)){if(q0(t))throw Error(V(418));e=Xr(n.nextSibling);var r=an;e&&Sw(t,e)?V_(r,n):(t.flags=t.flags&-4097|2,je=!1,an=t)}}else{if(q0(t))throw Error(V(418));t.flags=t.flags&-4097|2,je=!1,an=t}}}function kw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function Hu(t){if(t!==an)return!1;if(!je)return kw(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!W0(t.type,t.memoizedProps)),e&&(e=tn)){if(q0(t))throw F_(),Error(V(418));for(;e;)V_(t,e),e=Xr(e.nextSibling)}if(kw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tn=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tn=null}}else tn=an?Xr(t.stateNode.nextSibling):null;return!0}function F_(){for(var t=tn;t;)t=Xr(t.nextSibling)}function lo(){tn=an=null,je=!1}function jp(t){Dn===null?Dn=[t]:Dn.push(t)}var xS=Nr.ReactCurrentBatchConfig;function ma(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function Wu(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nw(t){var e=t._init;return e(t._payload)}function B_(t){function e(M,y){if(t){var _=M.deletions;_===null?(M.deletions=[y],M.flags|=16):_.push(y)}}function n(M,y){if(!t)return null;for(;y!==null;)e(M,y),y=y.sibling;return null}function r(M,y){for(M=new Map;y!==null;)y.key!==null?M.set(y.key,y):M.set(y.index,y),y=y.sibling;return M}function i(M,y){return M=ri(M,y),M.index=0,M.sibling=null,M}function s(M,y,_){return M.index=_,t?(_=M.alternate,_!==null?(_=_.index,_<y?(M.flags|=2,y):_):(M.flags|=2,y)):(M.flags|=1048576,y)}function o(M){return t&&M.alternate===null&&(M.flags|=2),M}function a(M,y,_,A){return y===null||y.tag!==6?(y=Hh(_,M.mode,A),y.return=M,y):(y=i(y,_),y.return=M,y)}function u(M,y,_,A){var z=_.type;return z===Rs?c(M,y,_.props.children,A,_.key):y!==null&&(y.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Or&&Nw(z)===y.type)?(A=i(y,_.props),A.ref=ma(M,y,_),A.return=M,A):(A=Ll(_.type,_.key,_.props,null,M.mode,A),A.ref=ma(M,y,_),A.return=M,A)}function l(M,y,_,A){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=Wh(_,M.mode,A),y.return=M,y):(y=i(y,_.children||[]),y.return=M,y)}function c(M,y,_,A,z){return y===null||y.tag!==7?(y=Fi(_,M.mode,A,z),y.return=M,y):(y=i(y,_),y.return=M,y)}function h(M,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Hh(""+y,M.mode,_),y.return=M,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xu:return _=Ll(y.type,y.key,y.props,null,M.mode,_),_.ref=ma(M,null,y),_.return=M,_;case Ds:return y=Wh(y,M.mode,_),y.return=M,y;case Or:var A=y._init;return h(M,A(y._payload),_)}if(Sa(y)||ca(y))return y=Fi(y,M.mode,_,null),y.return=M,y;Wu(M,y)}return null}function p(M,y,_,A){var z=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return z!==null?null:a(M,y,""+_,A);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case xu:return _.key===z?u(M,y,_,A):null;case Ds:return _.key===z?l(M,y,_,A):null;case Or:return z=_._init,p(M,y,z(_._payload),A)}if(Sa(_)||ca(_))return z!==null?null:c(M,y,_,A,null);Wu(M,_)}return null}function v(M,y,_,A,z){if(typeof A=="string"&&A!==""||typeof A=="number")return M=M.get(_)||null,a(y,M,""+A,z);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case xu:return M=M.get(A.key===null?_:A.key)||null,u(y,M,A,z);case Ds:return M=M.get(A.key===null?_:A.key)||null,l(y,M,A,z);case Or:var x=A._init;return v(M,y,_,x(A._payload),z)}if(Sa(A)||ca(A))return M=M.get(_)||null,c(y,M,A,z,null);Wu(y,A)}return null}function I(M,y,_,A){for(var z=null,x=null,C=y,m=y=0,L=null;C!==null&&m<_.length;m++){C.index>m?(L=C,C=null):L=C.sibling;var E=p(M,C,_[m],A);if(E===null){C===null&&(C=L);break}t&&C&&E.alternate===null&&e(M,C),y=s(E,y,m),x===null?z=E:x.sibling=E,x=E,C=L}if(m===_.length)return n(M,C),je&&Ai(M,m),z;if(C===null){for(;m<_.length;m++)C=h(M,_[m],A),C!==null&&(y=s(C,y,m),x===null?z=C:x.sibling=C,x=C);return je&&Ai(M,m),z}for(C=r(M,C);m<_.length;m++)L=v(C,M,m,_[m],A),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?m:L.key),y=s(L,y,m),x===null?z=L:x.sibling=L,x=L);return t&&C.forEach(function(k){return e(M,k)}),je&&Ai(M,m),z}function S(M,y,_,A){var z=ca(_);if(typeof z!="function")throw Error(V(150));if(_=z.call(_),_==null)throw Error(V(151));for(var x=z=null,C=y,m=y=0,L=null,E=_.next();C!==null&&!E.done;m++,E=_.next()){C.index>m?(L=C,C=null):L=C.sibling;var k=p(M,C,E.value,A);if(k===null){C===null&&(C=L);break}t&&C&&k.alternate===null&&e(M,C),y=s(k,y,m),x===null?z=k:x.sibling=k,x=k,C=L}if(E.done)return n(M,C),je&&Ai(M,m),z;if(C===null){for(;!E.done;m++,E=_.next())E=h(M,E.value,A),E!==null&&(y=s(E,y,m),x===null?z=E:x.sibling=E,x=E);return je&&Ai(M,m),z}for(C=r(M,C);!E.done;m++,E=_.next())E=v(C,M,m,E.value,A),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?m:E.key),y=s(E,y,m),x===null?z=E:x.sibling=E,x=E);return t&&C.forEach(function(j){return e(M,j)}),je&&Ai(M,m),z}function N(M,y,_,A){if(typeof _=="object"&&_!==null&&_.type===Rs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case xu:e:{for(var z=_.key,x=y;x!==null;){if(x.key===z){if(z=_.type,z===Rs){if(x.tag===7){n(M,x.sibling),y=i(x,_.props.children),y.return=M,M=y;break e}}else if(x.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Or&&Nw(z)===x.type){n(M,x.sibling),y=i(x,_.props),y.ref=ma(M,x,_),y.return=M,M=y;break e}n(M,x);break}else e(M,x);x=x.sibling}_.type===Rs?(y=Fi(_.props.children,M.mode,A,_.key),y.return=M,M=y):(A=Ll(_.type,_.key,_.props,null,M.mode,A),A.ref=ma(M,y,_),A.return=M,M=A)}return o(M);case Ds:e:{for(x=_.key;y!==null;){if(y.key===x)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(M,y.sibling),y=i(y,_.children||[]),y.return=M,M=y;break e}else{n(M,y);break}else e(M,y);y=y.sibling}y=Wh(_,M.mode,A),y.return=M,M=y}return o(M);case Or:return x=_._init,N(M,y,x(_._payload),A)}if(Sa(_))return I(M,y,_,A);if(ca(_))return S(M,y,_,A);Wu(M,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(M,y.sibling),y=i(y,_),y.return=M,M=y):(n(M,y),y=Hh(_,M.mode,A),y.return=M,M=y),o(M)):n(M,y)}return N}var co=B_(!0),Q_=B_(!1),ql=wi(null),Kl=null,Bs=null,Dp=null;function Rp(){Dp=Bs=Kl=null}function Pp(t){var e=ql.current;ke(ql),t._currentValue=e}function X0(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ks(t,e){Kl=t,Dp=Bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Dp!==t)if(t={context:t,memoizedValue:e,next:null},Bs===null){if(Kl===null)throw Error(V(308));Bs=t,Kl.dependencies={lanes:0,firstContext:t}}else Bs=Bs.next=t;return e}var xi=null;function xp(t){xi===null?xi=[t]:xi.push(t)}function G_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cr(t,r)}function Cr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zr=!1;function Op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ei(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cr(t,n)}return i=r.interleaved,i===null?(e.next=e,xp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cr(t,n)}function yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ip(t,n)}}function Aw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Xl(t,e,n,r){var i=t.updateQueue;zr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var p=a.lane,v=a.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var I=t,S=a;switch(p=e,v=n,S.tag){case 1:if(I=S.payload,typeof I=="function"){h=I.call(v,h,p);break e}h=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=S.payload,p=typeof I=="function"?I.call(v,h,p):I,p==null)break e;h=Oe({},h,p);break e;case 2:zr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else v={eventTime:v,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=v,u=h):c=c.next=v,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ji|=o,t.lanes=o,t.memoizedState=h}}function jw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Wf={},Kn=wi(Wf),yf=wi(Wf),wf=wi(Wf);function Oi(t){if(t===Wf)throw Error(V(174));return t}function zp(t,e){switch(Ie(wf,e),Ie(yf,t),Ie(Kn,Wf),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:D0(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=D0(e,t)}ke(Kn),Ie(Kn,e)}function ho(){ke(Kn),ke(yf),ke(wf)}function H_(t){Oi(wf.current);var e=Oi(Kn.current),n=D0(e,t.type);e!==n&&(Ie(yf,t),Ie(Kn,n))}function Up(t){yf.current===t&&(ke(Kn),ke(yf))}var Re=wi(0);function ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vh=[];function Vp(){for(var t=0;t<Vh.length;t++)Vh[t]._workInProgressVersionPrimary=null;Vh.length=0}var wl=Nr.ReactCurrentDispatcher,Fh=Nr.ReactCurrentBatchConfig,Wi=0,Pe=null,et=null,st=null,tc=!1,Qa=!1,vf=0,OS=0;function Mt(){throw Error(V(321))}function Fp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Fn(t[n],e[n]))return!1;return!0}function Bp(t,e,n,r,i,s){if(Wi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,wl.current=t===null||t.memoizedState===null?FS:BS,t=n(r,i),Qa){s=0;do{if(Qa=!1,vf=0,25<=s)throw Error(V(301));s+=1,st=et=null,e.updateQueue=null,wl.current=QS,t=n(r,i)}while(Qa)}if(wl.current=nc,e=et!==null&&et.next!==null,Wi=0,st=et=Pe=null,tc=!1,e)throw Error(V(300));return t}function Qp(){var t=vf!==0;return vf=0,t}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Pe.memoizedState=st=t:st=st.next=t,st}function En(){if(et===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var e=st===null?Pe.memoizedState:st.next;if(e!==null)st=e,et=t;else{if(t===null)throw Error(V(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},st===null?Pe.memoizedState=st=t:st=st.next=t}return st}function _f(t,e){return typeof e=="function"?e(t):e}function Bh(t){var e=En(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=et,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((Wi&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,Pe.lanes|=c,Ji|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,Fn(r,e.memoizedState)||(Jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,Ji|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qh(t){var e=En(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Fn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function W_(){}function J_(t,e){var n=Pe,r=En(),i=e(),s=!Fn(r.memoizedState,i);if(s&&(r.memoizedState=i,Jt=!0),r=r.queue,Gp(q_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,Mf(9,Z_.bind(null,n,r,i,e),void 0,null),ft===null)throw Error(V(349));Wi&30||$_(n,e,i)}return i}function $_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Z_(t,e,n,r){e.value=n,e.getSnapshot=r,K_(e)&&X_(t)}function q_(t,e,n){return n(function(){K_(e)&&X_(t)})}function K_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Fn(t,n)}catch{return!0}}function X_(t){var e=Cr(t,1);e!==null&&zn(e,t,1,-1)}function Dw(t){var e=Hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_f,lastRenderedState:t},e.queue=t,t=t.dispatch=VS.bind(null,Pe,t),[e.memoizedState,t]}function Mf(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eM(){return En().memoizedState}function vl(t,e,n,r){var i=Hn();Pe.flags|=t,i.memoizedState=Mf(1|e,n,void 0,r===void 0?null:r)}function $c(t,e,n,r){var i=En();r=r===void 0?null:r;var s=void 0;if(et!==null){var o=et.memoizedState;if(s=o.destroy,r!==null&&Fp(r,o.deps)){i.memoizedState=Mf(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Mf(1|e,n,s,r)}function Rw(t,e){return vl(8390656,8,t,e)}function Gp(t,e){return $c(2048,8,t,e)}function tM(t,e){return $c(4,2,t,e)}function nM(t,e){return $c(4,4,t,e)}function rM(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iM(t,e,n){return n=n!=null?n.concat([t]):null,$c(4,4,rM.bind(null,e,t),n)}function Yp(){}function sM(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function oM(t,e){var n=En();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function aM(t,e,n){return Wi&21?(Fn(n,e)||(n=d_(),Pe.lanes|=n,Ji|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function zS(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=Fh.transition;Fh.transition={};try{t(!1),e()}finally{we=n,Fh.transition=r}}function fM(){return En().memoizedState}function US(t,e,n){var r=ni(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},uM(t))lM(e,n);else if(n=G_(t,e,n,r),n!==null){var i=Vt();zn(n,t,r,i),cM(n,e,r)}}function VS(t,e,n){var r=ni(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(uM(t))lM(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Fn(a,o)){var u=e.interleaved;u===null?(i.next=i,xp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=G_(t,e,i,r),n!==null&&(i=Vt(),zn(n,t,r,i),cM(n,e,r))}}function uM(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function lM(t,e){Qa=tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cM(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ip(t,n)}}var nc={readContext:Cn,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},FS={readContext:Cn,useCallback:function(t,e){return Hn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Rw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,vl(4194308,4,rM.bind(null,e,t),n)},useLayoutEffect:function(t,e){return vl(4194308,4,t,e)},useInsertionEffect:function(t,e){return vl(4,2,t,e)},useMemo:function(t,e){var n=Hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=US.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=Hn();return t={current:t},e.memoizedState=t},useState:Dw,useDebugValue:Yp,useDeferredValue:function(t){return Hn().memoizedState=t},useTransition:function(){var t=Dw(!1),e=t[0];return t=zS.bind(null,t[1]),Hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=Hn();if(je){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),ft===null)throw Error(V(349));Wi&30||$_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rw(q_.bind(null,r,s,t),[t]),r.flags|=2048,Mf(9,Z_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Hn(),e=ft.identifierPrefix;if(je){var n=dr,r=cr;n=(r&~(1<<32-On(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=vf++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=OS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BS={readContext:Cn,useCallback:sM,useContext:Cn,useEffect:Gp,useImperativeHandle:iM,useInsertionEffect:tM,useLayoutEffect:nM,useMemo:oM,useReducer:Bh,useRef:eM,useState:function(){return Bh(_f)},useDebugValue:Yp,useDeferredValue:function(t){var e=En();return aM(e,et.memoizedState,t)},useTransition:function(){var t=Bh(_f)[0],e=En().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:J_,useId:fM,unstable_isNewReconciler:!1},QS={readContext:Cn,useCallback:sM,useContext:Cn,useEffect:Gp,useImperativeHandle:iM,useInsertionEffect:tM,useLayoutEffect:nM,useMemo:oM,useReducer:Qh,useRef:eM,useState:function(){return Qh(_f)},useDebugValue:Yp,useDeferredValue:function(t){var e=En();return et===null?e.memoizedState=t:aM(e,et.memoizedState,t)},useTransition:function(){var t=Qh(_f)[0],e=En().memoizedState;return[t,e]},useMutableSource:W_,useSyncExternalStore:J_,useId:fM,unstable_isNewReconciler:!1};function An(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function e1(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zc={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=ni(t),s=yr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,i),e!==null&&(zn(e,t,i,r),yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Vt(),i=ni(t),s=yr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ei(t,s,i),e!==null&&(zn(e,t,i,r),yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Vt(),r=ni(t),i=yr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ei(t,i,r),e!==null&&(zn(e,t,r,n),yl(e,t,r))}};function Pw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hf(n,r)||!hf(i,s):!0}function dM(t,e,n){var r=!1,i=li,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(i=qt(e)?Yi:At.current,r=e.contextTypes,s=(r=r!=null)?uo(t,i):li),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function xw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zc.enqueueReplaceState(e,e.state,null)}function t1(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Op(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Cn(s):(s=qt(e)?Yi:At.current,i.context=uo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(e1(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zc.enqueueReplaceState(i,i.state,null),Xl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function po(t,e){try{var n="",r=e;do n+=yb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Gh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function n1(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GS=typeof WeakMap=="function"?WeakMap:Map;function hM(t,e,n){n=yr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ic||(ic=!0,d1=r),n1(t,e)},n}function pM(t,e,n){n=yr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){n1(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){n1(t,e),typeof r!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ow(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new GS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=i6.bind(null,t,e,n),e.then(t,t))}function zw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yr(-1,1),e.tag=2,ei(n,e,1))),n.lanes|=1),t)}var YS=Nr.ReactCurrentOwner,Jt=!1;function zt(t,e,n,r){e.child=t===null?Q_(e,null,n,r):co(e,t.child,n,r)}function Vw(t,e,n,r,i){n=n.render;var s=e.ref;return Ks(e,i),r=Bp(t,e,n,r,s,i),n=Qp(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(je&&n&&Np(e),e.flags|=1,zt(t,e,r,i),e.child)}function Fw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Xp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,gM(t,e,s,r,i)):(t=Ll(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hf,n(o,r)&&t.ref===e.ref)return Er(t,e,i)}return e.flags|=1,t=ri(s,r),t.ref=e.ref,t.return=e,e.child=t}function gM(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hf(s,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,Er(t,e,i)}return r1(t,e,n,r,i)}function mM(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Gs,en),en|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(Gs,en),en|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(Gs,en),en|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(Gs,en),en|=r;return zt(t,e,i,n),e.child}function yM(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function r1(t,e,n,r,i){var s=qt(n)?Yi:At.current;return s=uo(e,s),Ks(e,i),n=Bp(t,e,n,r,s,i),r=Qp(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Er(t,e,i)):(je&&r&&Np(e),e.flags|=1,zt(t,e,n,i),e.child)}function Bw(t,e,n,r,i){if(qt(n)){var s=!0;Jl(e)}else s=!1;if(Ks(e,i),e.stateNode===null)_l(t,e),dM(e,n,r),t1(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=Cn(l):(l=qt(n)?Yi:At.current,l=uo(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&xw(e,o,r,l),zr=!1;var p=e.memoizedState;o.state=p,Xl(e,r,o,i),u=e.memoizedState,a!==r||p!==u||Zt.current||zr?(typeof c=="function"&&(e1(e,n,c,r),u=e.memoizedState),(a=zr||Pw(e,n,a,r,p,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Y_(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:An(e.type,a),o.props=l,h=e.pendingProps,p=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Cn(u):(u=qt(n)?Yi:At.current,u=uo(e,u));var v=n.getDerivedStateFromProps;(c=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==u)&&xw(e,o,r,u),zr=!1,p=e.memoizedState,o.state=p,Xl(e,r,o,i);var I=e.memoizedState;a!==h||p!==I||Zt.current||zr?(typeof v=="function"&&(e1(e,n,v,r),I=e.memoizedState),(l=zr||Pw(e,n,l,r,p,I,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return i1(t,e,n,r,s,i)}function i1(t,e,n,r,i,s){yM(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&bw(e,n,!1),Er(t,e,s);r=e.stateNode,YS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=co(e,t.child,null,s),e.child=co(e,null,a,s)):zt(t,e,a,s),e.memoizedState=r.state,i&&bw(e,n,!0),e.child}function wM(t){var e=t.stateNode;e.pendingContext?Tw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tw(t,e.context,!1),zp(t,e.containerInfo)}function Qw(t,e,n,r,i){return lo(),jp(i),e.flags|=256,zt(t,e,n,r),e.child}var s1={dehydrated:null,treeContext:null,retryLane:0};function o1(t){return{baseLanes:t,cachePool:null,transitions:null}}function vM(t,e,n){var r=e.pendingProps,i=Re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(Re,i&1),t===null)return K0(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xc(o,r,0,null),t=Fi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=o1(n),e.memoizedState=s1,t):Hp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return HS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ri(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ri(a,s):(s=Fi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?o1(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=s1,r}return s=t.child,t=s.sibling,r=ri(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Hp(t,e){return e=Xc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ju(t,e,n,r){return r!==null&&jp(r),co(e,t.child,null,n),t=Hp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function HS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Gh(Error(V(422))),Ju(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xc({mode:"visible",children:r.children},i,0,null),s=Fi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&co(e,t.child,null,o),e.child.memoizedState=o1(o),e.memoizedState=s1,s);if(!(e.mode&1))return Ju(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(V(419)),r=Gh(s,r,void 0),Ju(t,e,o,r)}if(a=(o&t.childLanes)!==0,Jt||a){if(r=ft,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cr(t,i),zn(r,t,i,-1))}return Kp(),r=Gh(Error(V(421))),Ju(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=s6.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,tn=Xr(i.nextSibling),an=e,je=!0,Dn=null,t!==null&&(pn[gn++]=cr,pn[gn++]=dr,pn[gn++]=Hi,cr=t.id,dr=t.overflow,Hi=e),e=Hp(e,r.children),e.flags|=4096,e)}function Gw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),X0(t.return,e,n)}function Yh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _M(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(zt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gw(t,n,e);else if(t.tag===19)Gw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(Re,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ec(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ec(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yh(e,!0,n,null,s);break;case"together":Yh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _l(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ji|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=ri(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ri(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function WS(t,e,n){switch(e.tag){case 3:wM(e),lo();break;case 5:H_(e);break;case 1:qt(e.type)&&Jl(e);break;case 4:zp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(ql,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?vM(t,e,n):(Ie(Re,Re.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Ie(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _M(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,mM(t,e,n)}return Er(t,e,n)}var MM,a1,IM,LM;MM=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};a1=function(){};IM=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Oi(Kn.current);var s=null;switch(n){case"input":i=k0(t,i),r=k0(t,r),s=[];break;case"select":i=Oe({},i,{value:void 0}),r=Oe({},r,{value:void 0}),s=[];break;case"textarea":i=j0(t,i),r=j0(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Hl)}R0(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(of.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(of.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&Ee("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};LM=function(t,e,n,r){n!==r&&(e.flags|=4)};function ya(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function JS(t,e,n){var r=e.pendingProps;switch(Ap(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return qt(e.type)&&Wl(),It(e),null;case 3:return r=e.stateNode,ho(),ke(Zt),ke(At),Vp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Hu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dn!==null&&(g1(Dn),Dn=null))),a1(t,e),It(e),null;case 5:Up(e);var i=Oi(wf.current);if(n=e.type,t!==null&&e.stateNode!=null)IM(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return It(e),null}if(t=Oi(Kn.current),Hu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wn]=e,r[mf]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<Na.length;i++)Ee(Na[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Xy(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":tw(r,s),Ee("invalid",r)}R0(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yu(r.textContent,a,t),i=["children",""+a]):of.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Ou(r),ew(r,s,!0);break;case"textarea":Ou(r),nw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Hl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=q4(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wn]=e,t[mf]=r,MM(t,e,!1,!1),e.stateNode=t;e:{switch(o=P0(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<Na.length;i++)Ee(Na[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":Xy(t,r),i=k0(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Oe({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":tw(t,r),i=j0(t,r),Ee("invalid",t);break;default:i=r}R0(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?e_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&K4(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&af(t,u):typeof u=="number"&&af(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(of.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ee("scroll",t):u!=null&&mp(t,s,u,o))}switch(n){case"input":Ou(t),ew(t,r,!1);break;case"textarea":Ou(t),nw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ui(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Js(t,!!r.multiple,s,!1):r.defaultValue!=null&&Js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)LM(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=Oi(wf.current),Oi(Kn.current),Hu(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wn]=e,(s=r.nodeValue!==n)&&(t=an,t!==null))switch(t.tag){case 3:Yu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wn]=e,e.stateNode=r}return It(e),null;case 13:if(ke(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&tn!==null&&e.mode&1&&!(e.flags&128))F_(),lo(),e.flags|=98560,s=!1;else if(s=Hu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(V(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[Wn]=e}else lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),s=!1}else Dn!==null&&(g1(Dn),Dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?tt===0&&(tt=3):Kp())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return ho(),a1(t,e),t===null&&pf(e.stateNode.containerInfo),It(e),null;case 10:return Pp(e.type._context),It(e),null;case 17:return qt(e.type)&&Wl(),It(e),null;case 19:if(ke(Re),s=e.memoizedState,s===null)return It(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ya(s,!1);else{if(tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ec(t),o!==null){for(e.flags|=128,ya(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(Re,Re.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ye()>go&&(e.flags|=128,r=!0,ya(s,!1),e.lanes=4194304)}else{if(!r)if(t=ec(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ya(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return It(e),null}else 2*Ye()-s.renderingStartTime>go&&n!==1073741824&&(e.flags|=128,r=!0,ya(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ye(),e.sibling=null,n=Re.current,Ie(Re,r?n&1|2:n&1),e):(It(e),null);case 22:case 23:return qp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?en&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function $S(t,e){switch(Ap(e),e.tag){case 1:return qt(e.type)&&Wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),ke(Zt),ke(At),Vp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Up(e),null;case 13:if(ke(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Re),null;case 4:return ho(),null;case 10:return Pp(e.type._context),null;case 22:case 23:return qp(),null;case 24:return null;default:return null}}var $u=!1,Et=!1,ZS=typeof WeakSet=="function"?WeakSet:Set,G=null;function Qs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function f1(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var Yw=!1;function qS(t,e){if(Y0=Ql,t=S_(),kp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,p=null;t:for(;;){for(var v;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)p=h,h=v;for(;;){if(h===t)break t;if(p===n&&++l===i&&(a=o),p===s&&++c===r&&(u=o),(v=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=v}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(H0={focusedElem:t,selectionRange:n},Ql=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var S=I.memoizedProps,N=I.memoizedState,M=e.stateNode,y=M.getSnapshotBeforeUpdate(e.elementType===e.type?S:An(e.type,S),N);M.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(A){Fe(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return I=Yw,Yw=!1,I}function Ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&f1(e,n,s)}i=i.next}while(i!==r)}}function qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function u1(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function CM(t){var e=t.alternate;e!==null&&(t.alternate=null,CM(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[mf],delete e[$0],delete e[DS],delete e[RS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function EM(t){return t.tag===5||t.tag===3||t.tag===4}function Hw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||EM(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function l1(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hl));else if(r!==4&&(t=t.child,t!==null))for(l1(t,e,n),t=t.sibling;t!==null;)l1(t,e,n),t=t.sibling}function c1(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(c1(t,e,n),t=t.sibling;t!==null;)c1(t,e,n),t=t.sibling}var ct=null,jn=!1;function Pr(t,e,n){for(n=n.child;n!==null;)TM(t,e,n),n=n.sibling}function TM(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(Qc,n)}catch{}switch(n.tag){case 5:Et||Qs(n,e);case 6:var r=ct,i=jn;ct=null,Pr(t,e,n),ct=r,jn=i,ct!==null&&(jn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(jn?(t=ct,n=n.stateNode,t.nodeType===8?zh(t.parentNode,n):t.nodeType===1&&zh(t,n),cf(t)):zh(ct,n.stateNode));break;case 4:r=ct,i=jn,ct=n.stateNode.containerInfo,jn=!0,Pr(t,e,n),ct=r,jn=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&f1(n,e,o),i=i.next}while(i!==r)}Pr(t,e,n);break;case 1:if(!Et&&(Qs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,e,a)}Pr(t,e,n);break;case 21:Pr(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,Pr(t,e,n),Et=r):Pr(t,e,n);break;default:Pr(t,e,n)}}function Ww(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZS),e.forEach(function(r){var i=o6.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,jn=!1;break e;case 3:ct=a.stateNode.containerInfo,jn=!0;break e;case 4:ct=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(ct===null)throw Error(V(160));TM(s,o,i),ct=null,jn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){Fe(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bM(e,t),e=e.sibling}function bM(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nn(e,t),Yn(t),r&4){try{Ga(3,t,t.return),qc(3,t)}catch(S){Fe(t,t.return,S)}try{Ga(5,t,t.return)}catch(S){Fe(t,t.return,S)}}break;case 1:Nn(e,t),Yn(t),r&512&&n!==null&&Qs(n,n.return);break;case 5:if(Nn(e,t),Yn(t),r&512&&n!==null&&Qs(n,n.return),t.flags&32){var i=t.stateNode;try{af(i,"")}catch(S){Fe(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$4(i,s),P0(a,o);var l=P0(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?e_(i,h):c==="dangerouslySetInnerHTML"?K4(i,h):c==="children"?af(i,h):mp(i,c,h,l)}switch(a){case"input":N0(i,s);break;case"textarea":Z4(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Js(i,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?Js(i,!!s.multiple,s.defaultValue,!0):Js(i,!!s.multiple,s.multiple?[]:"",!1))}i[mf]=s}catch(S){Fe(t,t.return,S)}}break;case 6:if(Nn(e,t),Yn(t),r&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){Fe(t,t.return,S)}}break;case 3:if(Nn(e,t),Yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cf(e.containerInfo)}catch(S){Fe(t,t.return,S)}break;case 4:Nn(e,t),Yn(t);break;case 13:Nn(e,t),Yn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($p=Ye())),r&4&&Ww(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(l=Et)||c,Nn(e,t),Et=l):Nn(e,t),Yn(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(G=t,c=t.child;c!==null;){for(h=G=c;G!==null;){switch(p=G,v=p.child,p.tag){case 0:case 11:case 14:case 15:Ga(4,p,p.return);break;case 1:Qs(p,p.return);var I=p.stateNode;if(typeof I.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(S){Fe(r,n,S)}}break;case 5:Qs(p,p.return);break;case 22:if(p.memoizedState!==null){$w(h);continue}}v!==null?(v.return=p,G=v):$w(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=X4("display",o))}catch(S){Fe(t,t.return,S)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(S){Fe(t,t.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nn(e,t),Yn(t),r&4&&Ww(t);break;case 21:break;default:Nn(e,t),Yn(t)}}function Yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(EM(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(af(i,""),r.flags&=-33);var s=Hw(t);c1(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hw(t);l1(t,a,o);break;default:throw Error(V(161))}}catch(u){Fe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KS(t,e,n){G=t,SM(t)}function SM(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var i=G,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$u;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Et;a=$u;var l=Et;if($u=o,(Et=u)&&!l)for(G=i;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?Zw(i):u!==null?(u.return=o,G=u):Zw(i);for(;s!==null;)G=s,SM(s),s=s.sibling;G=i,$u=a,Et=l}Jw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,G=s):Jw(t)}}function Jw(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||qc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:An(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&cf(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}Et||e.flags&512&&u1(e)}catch(p){Fe(e,e.return,p)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function $w(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function Zw(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qc(4,e)}catch(u){Fe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Fe(e,i,u)}}var s=e.return;try{u1(e)}catch(u){Fe(e,s,u)}break;case 5:var o=e.return;try{u1(e)}catch(u){Fe(e,o,u)}}}catch(u){Fe(e,e.return,u)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var XS=Math.ceil,rc=Nr.ReactCurrentDispatcher,Wp=Nr.ReactCurrentOwner,vn=Nr.ReactCurrentBatchConfig,he=0,ft=null,$e=null,pt=0,en=0,Gs=wi(0),tt=0,If=null,Ji=0,Kc=0,Jp=0,Ya=null,Ht=null,$p=0,go=1/0,ur=null,ic=!1,d1=null,ti=null,Zu=!1,Wr=null,sc=0,Ha=0,h1=null,Ml=-1,Il=0;function Vt(){return he&6?Ye():Ml!==-1?Ml:Ml=Ye()}function ni(t){return t.mode&1?he&2&&pt!==0?pt&-pt:xS.transition!==null?(Il===0&&(Il=d_()),Il):(t=we,t!==0||(t=window.event,t=t===void 0?16:v_(t.type)),t):1}function zn(t,e,n,r){if(50<Ha)throw Ha=0,h1=null,Error(V(185));Gf(t,n,r),(!(he&2)||t!==ft)&&(t===ft&&(!(he&2)&&(Kc|=n),tt===4&&Vr(t,pt)),Kt(t,r),n===1&&he===0&&!(e.mode&1)&&(go=Ye()+500,Jc&&vi()))}function Kt(t,e){var n=t.callbackNode;xb(t,e);var r=Bl(t,t===ft?pt:0);if(r===0)n!==null&&sw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sw(n),e===1)t.tag===0?PS(qw.bind(null,t)):z_(qw.bind(null,t)),AS(function(){!(he&6)&&vi()}),n=null;else{switch(h_(r)){case 1:n=Mp;break;case 4:n=l_;break;case 16:n=Fl;break;case 536870912:n=c_;break;default:n=Fl}n=xM(n,kM.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kM(t,e){if(Ml=-1,Il=0,he&6)throw Error(V(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var r=Bl(t,t===ft?pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=oc(t,r);else{e=r;var i=he;he|=2;var s=AM();(ft!==t||pt!==e)&&(ur=null,go=Ye()+500,Vi(t,e));do try{n6();break}catch(a){NM(t,a)}while(!0);Rp(),rc.current=s,he=i,$e!==null?e=0:(ft=null,pt=0,e=tt)}if(e!==0){if(e===2&&(i=V0(t),i!==0&&(r=i,e=p1(t,i))),e===1)throw n=If,Vi(t,0),Vr(t,r),Kt(t,Ye()),n;if(e===6)Vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!e6(i)&&(e=oc(t,r),e===2&&(s=V0(t),s!==0&&(r=s,e=p1(t,s))),e===1))throw n=If,Vi(t,0),Vr(t,r),Kt(t,Ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:ji(t,Ht,ur);break;case 3:if(Vr(t,r),(r&130023424)===r&&(e=$p+500-Ye(),10<e)){if(Bl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Vt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=J0(ji.bind(null,t,Ht,ur),e);break}ji(t,Ht,ur);break;case 4:if(Vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-On(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XS(r/1960))-r,10<r){t.timeoutHandle=J0(ji.bind(null,t,Ht,ur),r);break}ji(t,Ht,ur);break;case 5:ji(t,Ht,ur);break;default:throw Error(V(329))}}}return Kt(t,Ye()),t.callbackNode===n?kM.bind(null,t):null}function p1(t,e){var n=Ya;return t.current.memoizedState.isDehydrated&&(Vi(t,e).flags|=256),t=oc(t,e),t!==2&&(e=Ht,Ht=n,e!==null&&g1(e)),t}function g1(t){Ht===null?Ht=t:Ht.push.apply(Ht,t)}function e6(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Fn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Vr(t,e){for(e&=~Jp,e&=~Kc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),r=1<<n;t[n]=-1,e&=~r}}function qw(t){if(he&6)throw Error(V(327));Xs();var e=Bl(t,0);if(!(e&1))return Kt(t,Ye()),null;var n=oc(t,e);if(t.tag!==0&&n===2){var r=V0(t);r!==0&&(e=r,n=p1(t,r))}if(n===1)throw n=If,Vi(t,0),Vr(t,e),Kt(t,Ye()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ji(t,Ht,ur),Kt(t,Ye()),null}function Zp(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(go=Ye()+500,Jc&&vi())}}function $i(t){Wr!==null&&Wr.tag===0&&!(he&6)&&Xs();var e=he;he|=1;var n=vn.transition,r=we;try{if(vn.transition=null,we=1,t)return t()}finally{we=r,vn.transition=n,he=e,!(he&6)&&vi()}}function qp(){en=Gs.current,ke(Gs)}function Vi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NS(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Ap(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wl();break;case 3:ho(),ke(Zt),ke(At),Vp();break;case 5:Up(r);break;case 4:ho();break;case 13:ke(Re);break;case 19:ke(Re);break;case 10:Pp(r.type._context);break;case 22:case 23:qp()}n=n.return}if(ft=t,$e=t=ri(t.current,null),pt=en=e,tt=0,If=null,Jp=Kc=Ji=0,Ht=Ya=null,xi!==null){for(e=0;e<xi.length;e++)if(n=xi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}xi=null}return t}function NM(t,e){do{var n=$e;try{if(Rp(),wl.current=nc,tc){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}tc=!1}if(Wi=0,st=et=Pe=null,Qa=!1,vf=0,Wp.current=null,n===null||n.return===null){tt=1,If=e,$e=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=pt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var v=zw(o);if(v!==null){v.flags&=-257,Uw(v,o,a,s,e),v.mode&1&&Ow(s,l,e),e=v,u=l;var I=e.updateQueue;if(I===null){var S=new Set;S.add(u),e.updateQueue=S}else I.add(u);break e}else{if(!(e&1)){Ow(s,l,e),Kp();break e}u=Error(V(426))}}else if(je&&a.mode&1){var N=zw(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Uw(N,o,a,s,e),jp(po(u,a));break e}}s=u=po(u,a),tt!==4&&(tt=2),Ya===null?Ya=[s]:Ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var M=hM(s,u,e);Aw(s,M);break e;case 1:a=u;var y=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ti===null||!ti.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var A=pM(s,a,e);Aw(s,A);break e}}s=s.return}while(s!==null)}DM(n)}catch(z){e=z,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function AM(){var t=rc.current;return rc.current=nc,t===null?nc:t}function Kp(){(tt===0||tt===3||tt===2)&&(tt=4),ft===null||!(Ji&268435455)&&!(Kc&268435455)||Vr(ft,pt)}function oc(t,e){var n=he;he|=2;var r=AM();(ft!==t||pt!==e)&&(ur=null,Vi(t,e));do try{t6();break}catch(i){NM(t,i)}while(!0);if(Rp(),he=n,rc.current=r,$e!==null)throw Error(V(261));return ft=null,pt=0,tt}function t6(){for(;$e!==null;)jM($e)}function n6(){for(;$e!==null&&!bb();)jM($e)}function jM(t){var e=PM(t.alternate,t,en);t.memoizedProps=t.pendingProps,e===null?DM(t):$e=e,Wp.current=null}function DM(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$S(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tt=6,$e=null;return}}else if(n=JS(n,e,en),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);tt===0&&(tt=5)}function ji(t,e,n){var r=we,i=vn.transition;try{vn.transition=null,we=1,r6(t,e,n,r)}finally{vn.transition=i,we=r}return null}function r6(t,e,n,r){do Xs();while(Wr!==null);if(he&6)throw Error(V(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ob(t,s),t===ft&&($e=ft=null,pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zu||(Zu=!0,xM(Fl,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vn.transition,vn.transition=null;var o=we;we=1;var a=he;he|=4,Wp.current=null,qS(t,n),bM(n,t),LS(H0),Ql=!!Y0,H0=Y0=null,t.current=n,KS(n),Sb(),he=a,we=o,vn.transition=s}else t.current=n;if(Zu&&(Zu=!1,Wr=t,sc=i),s=t.pendingLanes,s===0&&(ti=null),Ab(n.stateNode),Kt(t,Ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ic)throw ic=!1,t=d1,d1=null,t;return sc&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===h1?Ha++:(Ha=0,h1=t):Ha=0,vi(),null}function Xs(){if(Wr!==null){var t=h_(sc),e=vn.transition,n=we;try{if(vn.transition=null,we=16>t?16:t,Wr===null)var r=!1;else{if(t=Wr,Wr=null,sc=0,he&6)throw Error(V(331));var i=he;for(he|=4,G=t.current;G!==null;){var s=G,o=s.child;if(G.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(G=l;G!==null;){var c=G;switch(c.tag){case 0:case 11:case 15:Ga(8,c,s)}var h=c.child;if(h!==null)h.return=c,G=h;else for(;G!==null;){c=G;var p=c.sibling,v=c.return;if(CM(c),c===l){G=null;break}if(p!==null){p.return=v,G=p;break}G=v}}}var I=s.alternate;if(I!==null){var S=I.child;if(S!==null){I.child=null;do{var N=S.sibling;S.sibling=null,S=N}while(S!==null)}}G=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,G=o;else e:for(;G!==null;){if(s=G,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ga(9,s,s.return)}var M=s.sibling;if(M!==null){M.return=s.return,G=M;break e}G=s.return}}var y=t.current;for(G=y;G!==null;){o=G;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,G=_;else e:for(o=y;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qc(9,a)}}catch(z){Fe(a,a.return,z)}if(a===o){G=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,G=A;break e}G=a.return}}if(he=i,vi(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(Qc,t)}catch{}r=!0}return r}finally{we=n,vn.transition=e}}return!1}function Kw(t,e,n){e=po(n,e),e=hM(t,e,1),t=ei(t,e,1),e=Vt(),t!==null&&(Gf(t,1,e),Kt(t,e))}function Fe(t,e,n){if(t.tag===3)Kw(t,t,n);else for(;e!==null;){if(e.tag===3){Kw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ti===null||!ti.has(r))){t=po(n,t),t=pM(e,t,1),e=ei(e,t,1),t=Vt(),e!==null&&(Gf(e,1,t),Kt(e,t));break}}e=e.return}}function i6(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Vt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(pt&n)===n&&(tt===4||tt===3&&(pt&130023424)===pt&&500>Ye()-$p?Vi(t,0):Jp|=n),Kt(t,e)}function RM(t,e){e===0&&(t.mode&1?(e=Vu,Vu<<=1,!(Vu&130023424)&&(Vu=4194304)):e=1);var n=Vt();t=Cr(t,e),t!==null&&(Gf(t,e,n),Kt(t,n))}function s6(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),RM(t,n)}function o6(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),RM(t,n)}var PM;PM=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,WS(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,je&&e.flags&1048576&&U_(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_l(t,e),t=e.pendingProps;var i=uo(e,At.current);Ks(e,n),i=Bp(null,e,r,t,i,n);var s=Qp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,Jl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Op(e),i.updater=Zc,e.stateNode=i,i._reactInternals=e,t1(e,r,t,n),e=i1(null,e,r,!0,s,n)):(e.tag=0,je&&s&&Np(e),zt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_l(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=f6(r),t=An(r,t),i){case 0:e=r1(null,e,r,t,n);break e;case 1:e=Bw(null,e,r,t,n);break e;case 11:e=Vw(null,e,r,t,n);break e;case 14:e=Fw(null,e,r,An(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),r1(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Bw(t,e,r,i,n);case 3:e:{if(wM(e),t===null)throw Error(V(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Y_(t,e),Xl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=po(Error(V(423)),e),e=Qw(t,e,r,n,i);break e}else if(r!==i){i=po(Error(V(424)),e),e=Qw(t,e,r,n,i);break e}else for(tn=Xr(e.stateNode.containerInfo.firstChild),an=e,je=!0,Dn=null,n=Q_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lo(),r===i){e=Er(t,e,n);break e}zt(t,e,r,n)}e=e.child}return e;case 5:return H_(e),t===null&&K0(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,W0(r,i)?o=null:s!==null&&W0(r,s)&&(e.flags|=32),yM(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&K0(e),null;case 13:return vM(t,e,n);case 4:return zp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=co(e,null,r,n):zt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),Vw(t,e,r,i,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(ql,r._currentValue),r._currentValue=o,s!==null)if(Fn(s.value,o)){if(s.children===i.children&&!Zt.current){e=Er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=yr(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),X0(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(V(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),X0(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ks(e,n),i=Cn(i),r=r(i),e.flags|=1,zt(t,e,r,n),e.child;case 14:return r=e.type,i=An(r,e.pendingProps),i=An(r.type,i),Fw(t,e,r,i,n);case 15:return gM(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:An(r,i),_l(t,e),e.tag=1,qt(r)?(t=!0,Jl(e)):t=!1,Ks(e,n),dM(e,r,i),t1(e,r,i,n),i1(null,e,r,!0,t,n);case 19:return _M(t,e,n);case 22:return mM(t,e,n)}throw Error(V(156,e.tag))};function xM(t,e){return u_(t,e)}function a6(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new a6(t,e,n,r)}function Xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function f6(t){if(typeof t=="function")return Xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wp)return 11;if(t===vp)return 14}return 2}function ri(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Xp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rs:return Fi(n.children,i,s,e);case yp:o=8,i|=8;break;case E0:return t=mn(12,n,e,i|2),t.elementType=E0,t.lanes=s,t;case T0:return t=mn(13,n,e,i),t.elementType=T0,t.lanes=s,t;case b0:return t=mn(19,n,e,i),t.elementType=b0,t.lanes=s,t;case H4:return Xc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G4:o=10;break e;case Y4:o=9;break e;case wp:o=11;break e;case vp:o=14;break e;case Or:o=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Fi(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function Xc(t,e,n,r){return t=mn(22,t,r,e),t.elementType=H4,t.lanes=n,t.stateNode={isHidden:!1},t}function Hh(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Wh(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function u6(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bh(0),this.expirationTimes=bh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function eg(t,e,n,r,i,s,o,a,u){return t=new u6(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Op(s),t}function l6(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function OM(t){if(!t)return li;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(qt(n))return O_(t,n,e)}return e}function zM(t,e,n,r,i,s,o,a,u){return t=eg(n,r,!0,t,i,s,o,a,u),t.context=OM(null),n=t.current,r=Vt(),i=ni(n),s=yr(r,i),s.callback=e??null,ei(n,s,i),t.current.lanes=i,Gf(t,i,r),Kt(t,r),t}function ed(t,e,n,r){var i=e.current,s=Vt(),o=ni(i);return n=OM(n),e.context===null?e.context=n:e.pendingContext=n,e=yr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ei(i,e,o),t!==null&&(zn(t,i,o,s),yl(t,i,o)),o}function ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tg(t,e){Xw(t,e),(t=t.alternate)&&Xw(t,e)}function c6(){return null}var UM=typeof reportError=="function"?reportError:function(t){console.error(t)};function ng(t){this._internalRoot=t}td.prototype.render=ng.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));ed(t,e,null,null)};td.prototype.unmount=ng.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$i(function(){ed(null,t,null,null)}),e[Lr]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var e=m_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ur.length&&e!==0&&e<Ur[n].priority;n++);Ur.splice(n,0,t),n===0&&w_(t)}};function rg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ev(){}function d6(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=ac(o);s.call(l)}}var o=zM(e,r,t,0,null,!1,!1,"",ev);return t._reactRootContainer=o,t[Lr]=o.current,pf(t.nodeType===8?t.parentNode:t),$i(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=ac(u);a.call(l)}}var u=eg(t,0,!1,null,null,!1,!1,"",ev);return t._reactRootContainer=u,t[Lr]=u.current,pf(t.nodeType===8?t.parentNode:t),$i(function(){ed(e,u,n,r)}),u}function rd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=ac(o);a.call(u)}}ed(e,o,t,i)}else o=d6(n,e,t,i,r);return ac(o)}p_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ka(e.pendingLanes);n!==0&&(Ip(e,n|1),Kt(e,Ye()),!(he&6)&&(go=Ye()+500,vi()))}break;case 13:$i(function(){var r=Cr(t,1);if(r!==null){var i=Vt();zn(r,t,1,i)}}),tg(t,1)}};Lp=function(t){if(t.tag===13){var e=Cr(t,134217728);if(e!==null){var n=Vt();zn(e,t,134217728,n)}tg(t,134217728)}};g_=function(t){if(t.tag===13){var e=ni(t),n=Cr(t,e);if(n!==null){var r=Vt();zn(n,t,e,r)}tg(t,e)}};m_=function(){return we};y_=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};O0=function(t,e,n){switch(e){case"input":if(N0(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wc(r);if(!i)throw Error(V(90));J4(r),N0(r,i)}}}break;case"textarea":Z4(t,n);break;case"select":e=n.value,e!=null&&Js(t,!!n.multiple,e,!1)}};r_=Zp;i_=$i;var h6={usingClientEntryPoint:!1,Events:[Hf,zs,Wc,t_,n_,Zp]},wa={findFiberByHostInstance:Pi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p6={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=a_(t),t===null?null:t.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||c6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qu.isDisabled&&qu.supportsFiber)try{Qc=qu.inject(p6),qn=qu}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h6;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rg(e))throw Error(V(200));return l6(t,e,null,n)};ln.createRoot=function(t,e){if(!rg(t))throw Error(V(299));var n=!1,r="",i=UM;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=eg(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,pf(t.nodeType===8?t.parentNode:t),new ng(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=a_(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return $i(t)};ln.hydrate=function(t,e,n){if(!nd(e))throw Error(V(200));return rd(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!rg(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=UM;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zM(e,null,t,1,n??null,i,!1,s,o),t[Lr]=e.current,pf(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new td(e)};ln.render=function(t,e,n){if(!nd(e))throw Error(V(200));return rd(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!nd(t))throw Error(V(40));return t._reactRootContainer?($i(function(){rd(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};ln.unstable_batchedUpdates=Zp;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nd(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return rd(t,e,n,!1,r)};ln.version="18.3.1-next-f1338f8080-20240426";function VM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(VM)}catch(t){console.error(t)}}VM(),V4.exports=ln;var g6=V4.exports,tv=g6;L0.createRoot=tv.createRoot,L0.hydrateRoot=tv.hydrateRoot;var nv={};/**
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
 */const FM={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Q=function(t,e){if(!t)throw Oo(e)},Oo=function(t){return new Error("Firebase Database ("+FM.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const BM=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},m6=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,v=l&63;u||(v=64,o||(p=64)),r.push(n[c],n[h],n[p],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(BM(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):m6(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new y6;const p=s<<2|a>>4;if(r.push(p),l!==64){const v=a<<4&240|l>>2;if(r.push(v),h!==64){const I=l<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class y6 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QM=function(t){const e=BM(t);return ig.encodeByteArray(e,!0)},fc=function(t){return QM(t).replace(/\./g,"")},uc=function(t){try{return ig.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function w6(t){return GM(void 0,t)}function GM(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!v6(n)||(t[n]=GM(t[n],e[n]));return t}function v6(t){return t!=="__proto__"}/**
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
 */function _6(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const M6=()=>_6().__FIREBASE_DEFAULTS__,I6=()=>{if(typeof process>"u"||typeof nv>"u")return;const t=nv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L6=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uc(t[1]);return e&&JSON.parse(e)},id=()=>{try{return M6()||I6()||L6()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},YM=t=>{var e,n;return(n=(e=id())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HM=t=>{const e=YM(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},WM=()=>{var t;return(t=id())===null||t===void 0?void 0:t.config},JM=t=>{var e;return(e=id())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $M(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fc(JSON.stringify(n)),fc(JSON.stringify(o)),""].join(".")}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function og(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function C6(){var t;const e=(t=id())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function E6(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZM(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function T6(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qM(){return FM.NODE_ADMIN===!0}function b6(){return!C6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function S6(){try{return typeof indexedDB=="object"}catch{return!1}}function k6(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const N6="FirebaseError";class sr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=N6,Object.setPrototypeOf(this,sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jf.prototype.create)}}class Jf{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?A6(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sr(i,a,r)}}function A6(t,e){return t.replace(j6,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const j6=/\{\$([^}]+)}/g;/**
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
 */function Lf(t){return JSON.parse(t)}function dt(t){return JSON.stringify(t)}/**
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
 */const KM=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Lf(uc(s[0])||""),n=Lf(uc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},D6=function(t){const e=KM(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},R6=function(t){const e=KM(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ar(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function mo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function m1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lc(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function yo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(rv(s)&&rv(o)){if(!yo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rv(t){return t!==null&&typeof t=="object"}/**
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
 */function zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Aa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ja(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class P6{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],l,c;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),c=1518500249):(l=s^o^a,c=1859775393):h<60?(l=s&o|a&(s|o),c=2400959708):(l=s^o^a,c=3395469782);const p=(i<<5|i>>>27)+l+u+c+r[h]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function x6(t,e){const n=new O6(t,e);return n.subscribe.bind(n)}class O6{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");z6(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jh),i.error===void 0&&(i.error=Jh),i.complete===void 0&&(i.complete=Jh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z6(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jh(){}function U6(t,e){return`${t} failed: ${e} argument `}/**
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
 */const V6=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,Q(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ze(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Di="[DEFAULT]";/**
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
 */class F6{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Q6(e))try{this.getOrInitializeService({instanceIdentifier:Di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Di){return this.instances.has(e)}getOptions(e=Di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:B6(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Di){return this.component?this.component.multipleInstances?e:Di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function B6(t){return t===Di?void 0:t}function Q6(t){return t.instantiationMode==="EAGER"}/**
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
 */class G6{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new F6(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Y6={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},H6=ie.INFO,W6={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},J6=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=W6[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class od{constructor(e){this.name=e,this._logLevel=H6,this._logHandler=J6,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y6[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const $6=(t,e)=>e.some(n=>t instanceof n);let iv,sv;function Z6(){return iv||(iv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function q6(){return sv||(sv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XM=new WeakMap,y1=new WeakMap,eI=new WeakMap,$h=new WeakMap,ag=new WeakMap;function K6(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&XM.set(n,t)}).catch(()=>{}),ag.set(e,t),e}function X6(t){if(y1.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});y1.set(t,e)}let w1={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return y1.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ek(t){w1=t(w1)}function tk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zh(this),e,...n);return eI.set(r,e.sort?e.sort():[e]),ii(r)}:q6().includes(t)?function(...e){return t.apply(Zh(this),e),ii(XM.get(this))}:function(...e){return ii(t.apply(Zh(this),e))}}function nk(t){return typeof t=="function"?tk(t):(t instanceof IDBTransaction&&X6(t),$6(t,Z6())?new Proxy(t,w1):t)}function ii(t){if(t instanceof IDBRequest)return K6(t);if($h.has(t))return $h.get(t);const e=nk(t);return e!==t&&($h.set(t,e),ag.set(e,t)),e}const Zh=t=>ag.get(t);function rk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ii(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ii(o.result),u.oldVersion,u.newVersion,ii(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ik=["get","getKey","getAll","getAllKeys","count"],sk=["put","add","delete","clear"],qh=new Map;function ov(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qh.get(e))return qh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ik.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return qh.set(e,s),s}ek(t=>({...t,get:(e,n,r)=>ov(e,n)||t.get(e,n,r),has:(e,n)=>!!ov(e,n)||t.has(e,n)}));/**
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
 */class ok{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ak(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ak(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const v1="@firebase/app",av="0.10.3";/**
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
 */const Zi=new od("@firebase/app"),fk="@firebase/app-compat",uk="@firebase/analytics-compat",lk="@firebase/analytics",ck="@firebase/app-check-compat",dk="@firebase/app-check",hk="@firebase/auth",pk="@firebase/auth-compat",gk="@firebase/database",mk="@firebase/database-compat",yk="@firebase/functions",wk="@firebase/functions-compat",vk="@firebase/installations",_k="@firebase/installations-compat",Mk="@firebase/messaging",Ik="@firebase/messaging-compat",Lk="@firebase/performance",Ck="@firebase/performance-compat",Ek="@firebase/remote-config",Tk="@firebase/remote-config-compat",bk="@firebase/storage",Sk="@firebase/storage-compat",kk="@firebase/firestore",Nk="@firebase/vertexai-preview",Ak="@firebase/firestore-compat",jk="firebase",Dk="10.12.0";/**
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
 */const _1="[DEFAULT]",Rk={[v1]:"fire-core",[fk]:"fire-core-compat",[lk]:"fire-analytics",[uk]:"fire-analytics-compat",[dk]:"fire-app-check",[ck]:"fire-app-check-compat",[hk]:"fire-auth",[pk]:"fire-auth-compat",[gk]:"fire-rtdb",[mk]:"fire-rtdb-compat",[yk]:"fire-fn",[wk]:"fire-fn-compat",[vk]:"fire-iid",[_k]:"fire-iid-compat",[Mk]:"fire-fcm",[Ik]:"fire-fcm-compat",[Lk]:"fire-perf",[Ck]:"fire-perf-compat",[Ek]:"fire-rc",[Tk]:"fire-rc-compat",[bk]:"fire-gcs",[Sk]:"fire-gcs-compat",[kk]:"fire-fst",[Ak]:"fire-fst-compat",[Nk]:"fire-vertex","fire-js":"fire-js",[jk]:"fire-js-all"};/**
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
 */const cc=new Map,Pk=new Map,M1=new Map;function fv(t,e){try{t.container.addComponent(e)}catch(n){Zi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(M1.has(e))return Zi.debug(`There were multiple attempts to register component ${e}.`),!1;M1.set(e,t);for(const n of cc.values())fv(n,t);for(const n of Pk.values())fv(n,t);return!0}function ad(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jn(t){return t.settings!==void 0}/**
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
 */const xk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},si=new Jf("app","Firebase",xk);/**
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
 */class Ok{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw si.create("app-deleted",{appName:this._name})}}/**
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
 */const _i=Dk;function tI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_1,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw si.create("bad-app-name",{appName:String(i)});if(n||(n=WM()),!n)throw si.create("no-options");const s=cc.get(i);if(s){if(yo(n,s.options)&&yo(r,s.config))return s;throw si.create("duplicate-app",{appName:i})}const o=new G6(i);for(const u of M1.values())o.addComponent(u);const a=new Ok(n,r,o);return cc.set(i,a),a}function fg(t=_1){const e=cc.get(t);if(!e&&t===_1&&WM())return tI();if(!e)throw si.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let i=(r=Rk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zi.warn(a.join(" "));return}ci(new Tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zk="firebase-heartbeat-database",Uk=1,Cf="firebase-heartbeat-store";let Kh=null;function nI(){return Kh||(Kh=rk(zk,Uk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Cf)}catch(n){console.warn(n)}}}}).catch(t=>{throw si.create("idb-open",{originalErrorMessage:t.message})})),Kh}async function Vk(t){try{const n=(await nI()).transaction(Cf),r=await n.objectStore(Cf).get(rI(t));return await n.done,r}catch(e){if(e instanceof sr)Zi.warn(e.message);else{const n=si.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zi.warn(n.message)}}}async function uv(t,e){try{const r=(await nI()).transaction(Cf,"readwrite");await r.objectStore(Cf).put(e,rI(t)),await r.done}catch(n){if(n instanceof sr)Zi.warn(n.message);else{const r=si.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zi.warn(r.message)}}}function rI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fk=1024,Bk=30*24*60*60*1e3;class Qk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lv();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Bk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lv(),{heartbeatsToSend:r,unsentEntries:i}=Gk(this._heartbeatsCache.heartbeats),s=fc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function lv(){return new Date().toISOString().substring(0,10)}function Gk(t,e=Fk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return S6()?k6().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Vk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cv(t){return fc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Hk(t){ci(new Tr("platform-logger",e=>new ok(e),"PRIVATE")),ci(new Tr("heartbeat",e=>new Qk(e),"PRIVATE")),_n(v1,av,t),_n(v1,av,"esm2017"),_n("fire-js","")}Hk("");var dv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bi,iI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,m){function L(){}L.prototype=m.prototype,C.D=m.prototype,C.prototype=new L,C.prototype.constructor=C,C.C=function(E,k,j){for(var b=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)b[Qe-2]=arguments[Qe];return m.prototype[k].apply(E,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,m,L){L||(L=0);var E=Array(16);if(typeof m=="string")for(var k=0;16>k;++k)E[k]=m.charCodeAt(L++)|m.charCodeAt(L++)<<8|m.charCodeAt(L++)<<16|m.charCodeAt(L++)<<24;else for(k=0;16>k;++k)E[k]=m[L++]|m[L++]<<8|m[L++]<<16|m[L++]<<24;m=C.g[0],L=C.g[1],k=C.g[2];var j=C.g[3],b=m+(j^L&(k^j))+E[0]+3614090360&4294967295;m=L+(b<<7&4294967295|b>>>25),b=j+(k^m&(L^k))+E[1]+3905402710&4294967295,j=m+(b<<12&4294967295|b>>>20),b=k+(L^j&(m^L))+E[2]+606105819&4294967295,k=j+(b<<17&4294967295|b>>>15),b=L+(m^k&(j^m))+E[3]+3250441966&4294967295,L=k+(b<<22&4294967295|b>>>10),b=m+(j^L&(k^j))+E[4]+4118548399&4294967295,m=L+(b<<7&4294967295|b>>>25),b=j+(k^m&(L^k))+E[5]+1200080426&4294967295,j=m+(b<<12&4294967295|b>>>20),b=k+(L^j&(m^L))+E[6]+2821735955&4294967295,k=j+(b<<17&4294967295|b>>>15),b=L+(m^k&(j^m))+E[7]+4249261313&4294967295,L=k+(b<<22&4294967295|b>>>10),b=m+(j^L&(k^j))+E[8]+1770035416&4294967295,m=L+(b<<7&4294967295|b>>>25),b=j+(k^m&(L^k))+E[9]+2336552879&4294967295,j=m+(b<<12&4294967295|b>>>20),b=k+(L^j&(m^L))+E[10]+4294925233&4294967295,k=j+(b<<17&4294967295|b>>>15),b=L+(m^k&(j^m))+E[11]+2304563134&4294967295,L=k+(b<<22&4294967295|b>>>10),b=m+(j^L&(k^j))+E[12]+1804603682&4294967295,m=L+(b<<7&4294967295|b>>>25),b=j+(k^m&(L^k))+E[13]+4254626195&4294967295,j=m+(b<<12&4294967295|b>>>20),b=k+(L^j&(m^L))+E[14]+2792965006&4294967295,k=j+(b<<17&4294967295|b>>>15),b=L+(m^k&(j^m))+E[15]+1236535329&4294967295,L=k+(b<<22&4294967295|b>>>10),b=m+(k^j&(L^k))+E[1]+4129170786&4294967295,m=L+(b<<5&4294967295|b>>>27),b=j+(L^k&(m^L))+E[6]+3225465664&4294967295,j=m+(b<<9&4294967295|b>>>23),b=k+(m^L&(j^m))+E[11]+643717713&4294967295,k=j+(b<<14&4294967295|b>>>18),b=L+(j^m&(k^j))+E[0]+3921069994&4294967295,L=k+(b<<20&4294967295|b>>>12),b=m+(k^j&(L^k))+E[5]+3593408605&4294967295,m=L+(b<<5&4294967295|b>>>27),b=j+(L^k&(m^L))+E[10]+38016083&4294967295,j=m+(b<<9&4294967295|b>>>23),b=k+(m^L&(j^m))+E[15]+3634488961&4294967295,k=j+(b<<14&4294967295|b>>>18),b=L+(j^m&(k^j))+E[4]+3889429448&4294967295,L=k+(b<<20&4294967295|b>>>12),b=m+(k^j&(L^k))+E[9]+568446438&4294967295,m=L+(b<<5&4294967295|b>>>27),b=j+(L^k&(m^L))+E[14]+3275163606&4294967295,j=m+(b<<9&4294967295|b>>>23),b=k+(m^L&(j^m))+E[3]+4107603335&4294967295,k=j+(b<<14&4294967295|b>>>18),b=L+(j^m&(k^j))+E[8]+1163531501&4294967295,L=k+(b<<20&4294967295|b>>>12),b=m+(k^j&(L^k))+E[13]+2850285829&4294967295,m=L+(b<<5&4294967295|b>>>27),b=j+(L^k&(m^L))+E[2]+4243563512&4294967295,j=m+(b<<9&4294967295|b>>>23),b=k+(m^L&(j^m))+E[7]+1735328473&4294967295,k=j+(b<<14&4294967295|b>>>18),b=L+(j^m&(k^j))+E[12]+2368359562&4294967295,L=k+(b<<20&4294967295|b>>>12),b=m+(L^k^j)+E[5]+4294588738&4294967295,m=L+(b<<4&4294967295|b>>>28),b=j+(m^L^k)+E[8]+2272392833&4294967295,j=m+(b<<11&4294967295|b>>>21),b=k+(j^m^L)+E[11]+1839030562&4294967295,k=j+(b<<16&4294967295|b>>>16),b=L+(k^j^m)+E[14]+4259657740&4294967295,L=k+(b<<23&4294967295|b>>>9),b=m+(L^k^j)+E[1]+2763975236&4294967295,m=L+(b<<4&4294967295|b>>>28),b=j+(m^L^k)+E[4]+1272893353&4294967295,j=m+(b<<11&4294967295|b>>>21),b=k+(j^m^L)+E[7]+4139469664&4294967295,k=j+(b<<16&4294967295|b>>>16),b=L+(k^j^m)+E[10]+3200236656&4294967295,L=k+(b<<23&4294967295|b>>>9),b=m+(L^k^j)+E[13]+681279174&4294967295,m=L+(b<<4&4294967295|b>>>28),b=j+(m^L^k)+E[0]+3936430074&4294967295,j=m+(b<<11&4294967295|b>>>21),b=k+(j^m^L)+E[3]+3572445317&4294967295,k=j+(b<<16&4294967295|b>>>16),b=L+(k^j^m)+E[6]+76029189&4294967295,L=k+(b<<23&4294967295|b>>>9),b=m+(L^k^j)+E[9]+3654602809&4294967295,m=L+(b<<4&4294967295|b>>>28),b=j+(m^L^k)+E[12]+3873151461&4294967295,j=m+(b<<11&4294967295|b>>>21),b=k+(j^m^L)+E[15]+530742520&4294967295,k=j+(b<<16&4294967295|b>>>16),b=L+(k^j^m)+E[2]+3299628645&4294967295,L=k+(b<<23&4294967295|b>>>9),b=m+(k^(L|~j))+E[0]+4096336452&4294967295,m=L+(b<<6&4294967295|b>>>26),b=j+(L^(m|~k))+E[7]+1126891415&4294967295,j=m+(b<<10&4294967295|b>>>22),b=k+(m^(j|~L))+E[14]+2878612391&4294967295,k=j+(b<<15&4294967295|b>>>17),b=L+(j^(k|~m))+E[5]+4237533241&4294967295,L=k+(b<<21&4294967295|b>>>11),b=m+(k^(L|~j))+E[12]+1700485571&4294967295,m=L+(b<<6&4294967295|b>>>26),b=j+(L^(m|~k))+E[3]+2399980690&4294967295,j=m+(b<<10&4294967295|b>>>22),b=k+(m^(j|~L))+E[10]+4293915773&4294967295,k=j+(b<<15&4294967295|b>>>17),b=L+(j^(k|~m))+E[1]+2240044497&4294967295,L=k+(b<<21&4294967295|b>>>11),b=m+(k^(L|~j))+E[8]+1873313359&4294967295,m=L+(b<<6&4294967295|b>>>26),b=j+(L^(m|~k))+E[15]+4264355552&4294967295,j=m+(b<<10&4294967295|b>>>22),b=k+(m^(j|~L))+E[6]+2734768916&4294967295,k=j+(b<<15&4294967295|b>>>17),b=L+(j^(k|~m))+E[13]+1309151649&4294967295,L=k+(b<<21&4294967295|b>>>11),b=m+(k^(L|~j))+E[4]+4149444226&4294967295,m=L+(b<<6&4294967295|b>>>26),b=j+(L^(m|~k))+E[11]+3174756917&4294967295,j=m+(b<<10&4294967295|b>>>22),b=k+(m^(j|~L))+E[2]+718787259&4294967295,k=j+(b<<15&4294967295|b>>>17),b=L+(j^(k|~m))+E[9]+3951481745&4294967295,C.g[0]=C.g[0]+m&4294967295,C.g[1]=C.g[1]+(k+(b<<21&4294967295|b>>>11))&4294967295,C.g[2]=C.g[2]+k&4294967295,C.g[3]=C.g[3]+j&4294967295}r.prototype.u=function(C,m){m===void 0&&(m=C.length);for(var L=m-this.blockSize,E=this.B,k=this.h,j=0;j<m;){if(k==0)for(;j<=L;)i(this,C,j),j+=this.blockSize;if(typeof C=="string"){for(;j<m;)if(E[k++]=C.charCodeAt(j++),k==this.blockSize){i(this,E),k=0;break}}else for(;j<m;)if(E[k++]=C[j++],k==this.blockSize){i(this,E),k=0;break}}this.h=k,this.o+=m},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var m=1;m<C.length-8;++m)C[m]=0;var L=8*this.o;for(m=C.length-8;m<C.length;++m)C[m]=L&255,L/=256;for(this.u(C),C=Array(16),m=L=0;4>m;++m)for(var E=0;32>E;E+=8)C[L++]=this.g[m]>>>E&255;return C};function s(C,m){var L=a;return Object.prototype.hasOwnProperty.call(L,C)?L[C]:L[C]=m(C)}function o(C,m){this.h=m;for(var L=[],E=!0,k=C.length-1;0<=k;k--){var j=C[k]|0;E&&j==m||(L[k]=j,E=!1)}this.g=L}var a={};function u(C){return-128<=C&&128>C?s(C,function(m){return new o([m|0],0>m?-1:0)}):new o([C|0],0>C?-1:0)}function l(C){if(isNaN(C)||!isFinite(C))return h;if(0>C)return N(l(-C));for(var m=[],L=1,E=0;C>=L;E++)m[E]=C/L|0,L*=4294967296;return new o(m,0)}function c(C,m){if(C.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(C.charAt(0)=="-")return N(c(C.substring(1),m));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var L=l(Math.pow(m,8)),E=h,k=0;k<C.length;k+=8){var j=Math.min(8,C.length-k),b=parseInt(C.substring(k,k+j),m);8>j?(j=l(Math.pow(m,j)),E=E.j(j).add(l(b))):(E=E.j(L),E=E.add(l(b)))}return E}var h=u(0),p=u(1),v=u(16777216);t=o.prototype,t.m=function(){if(S(this))return-N(this).m();for(var C=0,m=1,L=0;L<this.g.length;L++){var E=this.i(L);C+=(0<=E?E:4294967296+E)*m,m*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(I(this))return"0";if(S(this))return"-"+N(this).toString(C);for(var m=l(Math.pow(C,6)),L=this,E="";;){var k=A(L,m).g;L=M(L,k.j(m));var j=((0<L.g.length?L.g[0]:L.h)>>>0).toString(C);if(L=k,I(L))return j+E;for(;6>j.length;)j="0"+j;E=j+E}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function I(C){if(C.h!=0)return!1;for(var m=0;m<C.g.length;m++)if(C.g[m]!=0)return!1;return!0}function S(C){return C.h==-1}t.l=function(C){return C=M(this,C),S(C)?-1:I(C)?0:1};function N(C){for(var m=C.g.length,L=[],E=0;E<m;E++)L[E]=~C.g[E];return new o(L,~C.h).add(p)}t.abs=function(){return S(this)?N(this):this},t.add=function(C){for(var m=Math.max(this.g.length,C.g.length),L=[],E=0,k=0;k<=m;k++){var j=E+(this.i(k)&65535)+(C.i(k)&65535),b=(j>>>16)+(this.i(k)>>>16)+(C.i(k)>>>16);E=b>>>16,j&=65535,b&=65535,L[k]=b<<16|j}return new o(L,L[L.length-1]&-2147483648?-1:0)};function M(C,m){return C.add(N(m))}t.j=function(C){if(I(this)||I(C))return h;if(S(this))return S(C)?N(this).j(N(C)):N(N(this).j(C));if(S(C))return N(this.j(N(C)));if(0>this.l(v)&&0>C.l(v))return l(this.m()*C.m());for(var m=this.g.length+C.g.length,L=[],E=0;E<2*m;E++)L[E]=0;for(E=0;E<this.g.length;E++)for(var k=0;k<C.g.length;k++){var j=this.i(E)>>>16,b=this.i(E)&65535,Qe=C.i(k)>>>16,Gt=C.i(k)&65535;L[2*E+2*k]+=b*Gt,y(L,2*E+2*k),L[2*E+2*k+1]+=j*Gt,y(L,2*E+2*k+1),L[2*E+2*k+1]+=b*Qe,y(L,2*E+2*k+1),L[2*E+2*k+2]+=j*Qe,y(L,2*E+2*k+2)}for(E=0;E<m;E++)L[E]=L[2*E+1]<<16|L[2*E];for(E=m;E<2*m;E++)L[E]=0;return new o(L,0)};function y(C,m){for(;(C[m]&65535)!=C[m];)C[m+1]+=C[m]>>>16,C[m]&=65535,m++}function _(C,m){this.g=C,this.h=m}function A(C,m){if(I(m))throw Error("division by zero");if(I(C))return new _(h,h);if(S(C))return m=A(N(C),m),new _(N(m.g),N(m.h));if(S(m))return m=A(C,N(m)),new _(N(m.g),m.h);if(30<C.g.length){if(S(C)||S(m))throw Error("slowDivide_ only works with positive integers.");for(var L=p,E=m;0>=E.l(C);)L=z(L),E=z(E);var k=x(L,1),j=x(E,1);for(E=x(E,2),L=x(L,2);!I(E);){var b=j.add(E);0>=b.l(C)&&(k=k.add(L),j=b),E=x(E,1),L=x(L,1)}return m=M(C,k.j(m)),new _(k,m)}for(k=h;0<=C.l(m);){for(L=Math.max(1,Math.floor(C.m()/m.m())),E=Math.ceil(Math.log(L)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),j=l(L),b=j.j(m);S(b)||0<b.l(C);)L-=E,j=l(L),b=j.j(m);I(j)&&(j=p),k=k.add(j),C=M(C,b)}return new _(k,C)}t.A=function(C){return A(this,C).h},t.and=function(C){for(var m=Math.max(this.g.length,C.g.length),L=[],E=0;E<m;E++)L[E]=this.i(E)&C.i(E);return new o(L,this.h&C.h)},t.or=function(C){for(var m=Math.max(this.g.length,C.g.length),L=[],E=0;E<m;E++)L[E]=this.i(E)|C.i(E);return new o(L,this.h|C.h)},t.xor=function(C){for(var m=Math.max(this.g.length,C.g.length),L=[],E=0;E<m;E++)L[E]=this.i(E)^C.i(E);return new o(L,this.h^C.h)};function z(C){for(var m=C.g.length+1,L=[],E=0;E<m;E++)L[E]=C.i(E)<<1|C.i(E-1)>>>31;return new o(L,C.h)}function x(C,m){var L=m>>5;m%=32;for(var E=C.g.length-L,k=[],j=0;j<E;j++)k[j]=0<m?C.i(j+L)>>>m|C.i(j+L+1)<<32-m:C.i(j+L);return new o(k,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=c,Bi=o}).apply(typeof dv<"u"?dv:typeof self<"u"?self:typeof window<"u"?window:{});var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sI,oI,Da,aI,Cl,I1,fI,uI,lI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,d,g){return f==Array.prototype||f==Object.prototype||(f[d]=g.value),f};function n(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ku=="object"&&Ku];for(var d=0;d<f.length;++d){var g=f[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function i(f,d){if(d)e:{var g=r;f=f.split(".");for(var w=0;w<f.length-1;w++){var D=f[w];if(!(D in g))break e;g=g[D]}f=f[f.length-1],w=g[f],d=d(w),d!=w&&d!=null&&e(g,f,{configurable:!0,writable:!0,value:d})}}function s(f,d){f instanceof String&&(f+="");var g=0,w=!1,D={next:function(){if(!w&&g<f.length){var P=g++;return{value:d(P,f[P]),done:!1}}return w=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(f){return f||function(){return s(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(f){var d=typeof f;return d=d!="object"?d:f?Array.isArray(f)?"array":d:"null",d=="array"||d=="object"&&typeof f.length=="number"}function l(f){var d=typeof f;return d=="object"&&f!=null||d=="function"}function c(f,d,g){return f.call.apply(f.bind,arguments)}function h(f,d,g){if(!f)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,w),f.apply(d,D)}}return function(){return f.apply(d,arguments)}}function p(f,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?c:h,p.apply(null,arguments)}function v(f,d){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),f.apply(this,w)}}function I(f,d){function g(){}g.prototype=d.prototype,f.aa=d.prototype,f.prototype=new g,f.prototype.constructor=f,f.Qb=function(w,D,P){for(var F=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)F[Me-2]=arguments[Me];return d.prototype[D].apply(w,F)}}function S(f){const d=f.length;if(0<d){const g=Array(d);for(let w=0;w<d;w++)g[w]=f[w];return g}return[]}function N(f,d){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(u(w)){const D=f.length||0,P=w.length||0;f.length=D+P;for(let F=0;F<P;F++)f[D+F]=w[F]}else f.push(w)}}class M{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function y(f){return/^[\s\xa0]*$/.test(f)}function _(){var f=a.navigator;return f&&(f=f.userAgent)?f:""}function A(f){return A[" "](f),f}A[" "]=function(){};var z=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function x(f,d,g){for(const w in f)d.call(g,f[w],w,f)}function C(f,d){for(const g in f)d.call(void 0,f[g],g,f)}function m(f){const d={};for(const g in f)d[g]=f[g];return d}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(f,d){let g,w;for(let D=1;D<arguments.length;D++){w=arguments[D];for(g in w)f[g]=w[g];for(let P=0;P<L.length;P++)g=L[P],Object.prototype.hasOwnProperty.call(w,g)&&(f[g]=w[g])}}function k(f){var d=1;f=f.split(":");const g=[];for(;0<d&&f.length;)g.push(f.shift()),d--;return f.length&&g.push(f.join(":")),g}function j(f){a.setTimeout(()=>{throw f},0)}function b(){var f=J;let d=null;return f.g&&(d=f.g,f.g=f.g.next,f.g||(f.h=null),d.next=null),d}class Qe{constructor(){this.h=this.g=null}add(d,g){const w=Gt.get();w.set(d,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Gt=new M(()=>new Gn,f=>f.reset());class Gn{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Xe,B=!1,J=new Qe,$=()=>{const f=a.Promise.resolve(void 0);Xe=()=>{f.then(ge)}};var ge=()=>{for(var f;f=b();){try{f.h.call(f.g)}catch(g){j(g)}var d=Gt;d.j(f),100>d.h&&(d.h++,f.next=d.g,d.g=f)}B=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(f,d){this.type=f,this.g=this.target=d,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Ge=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var f=!1,d=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return f}();function He(f,d){if(fe.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f){var g=this.type=f.type,w=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;if(this.target=f.target||f.srcElement,this.g=d,d=f.relatedTarget){if(z){e:{try{A(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else g=="mouseover"?d=f.fromElement:g=="mouseout"&&(d=f.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=typeof f.pointerType=="string"?f.pointerType:ut[f.pointerType]||"",this.state=f.state,this.i=f,f.defaultPrevented&&He.aa.h.call(this)}}I(He,fe);var ut={2:"touch",3:"pen",4:"mouse"};He.prototype.h=function(){He.aa.h.call(this);var f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var Rt="closure_listenable_"+(1e6*Math.random()|0),Kd=0;function h3(f,d,g,w,D){this.listener=f,this.proxy=null,this.src=d,this.type=g,this.capture=!!w,this.ha=D,this.key=++Kd,this.da=this.fa=!1}function wu(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function vu(f){this.src=f,this.g={},this.h=0}vu.prototype.add=function(f,d,g,w,D){var P=f.toString();f=this.g[P],f||(f=this.g[P]=[],this.h++);var F=eh(f,d,w,D);return-1<F?(d=f[F],g||(d.fa=!1)):(d=new h3(d,this.src,P,!!w,D),d.fa=g,f.push(d)),d};function Xd(f,d){var g=d.type;if(g in f.g){var w=f.g[g],D=Array.prototype.indexOf.call(w,d,void 0),P;(P=0<=D)&&Array.prototype.splice.call(w,D,1),P&&(wu(d),f.g[g].length==0&&(delete f.g[g],f.h--))}}function eh(f,d,g,w){for(var D=0;D<f.length;++D){var P=f[D];if(!P.da&&P.listener==d&&P.capture==!!g&&P.ha==w)return D}return-1}var th="closure_lm_"+(1e6*Math.random()|0),nh={};function Jm(f,d,g,w,D){if(Array.isArray(d)){for(var P=0;P<d.length;P++)Jm(f,d[P],g,w,D);return null}return g=qm(g),f&&f[Rt]?f.K(d,g,l(w)?!!w.capture:!!w,D):p3(f,d,g,!1,w,D)}function p3(f,d,g,w,D,P){if(!d)throw Error("Invalid event type");var F=l(D)?!!D.capture:!!D,Me=ih(f);if(Me||(f[th]=Me=new vu(f)),g=Me.add(d,g,w,F,P),g.proxy)return g;if(w=g3(),g.proxy=w,w.src=f,w.listener=g,f.addEventListener)Ge||(D=F),D===void 0&&(D=!1),f.addEventListener(d.toString(),w,D);else if(f.attachEvent)f.attachEvent(Zm(d.toString()),w);else if(f.addListener&&f.removeListener)f.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function g3(){function f(g){return d.call(f.src,f.listener,g)}const d=m3;return f}function $m(f,d,g,w,D){if(Array.isArray(d))for(var P=0;P<d.length;P++)$m(f,d[P],g,w,D);else w=l(w)?!!w.capture:!!w,g=qm(g),f&&f[Rt]?(f=f.i,d=String(d).toString(),d in f.g&&(P=f.g[d],g=eh(P,g,w,D),-1<g&&(wu(P[g]),Array.prototype.splice.call(P,g,1),P.length==0&&(delete f.g[d],f.h--)))):f&&(f=ih(f))&&(d=f.g[d.toString()],f=-1,d&&(f=eh(d,g,w,D)),(g=-1<f?d[f]:null)&&rh(g))}function rh(f){if(typeof f!="number"&&f&&!f.da){var d=f.src;if(d&&d[Rt])Xd(d.i,f);else{var g=f.type,w=f.proxy;d.removeEventListener?d.removeEventListener(g,w,f.capture):d.detachEvent?d.detachEvent(Zm(g),w):d.addListener&&d.removeListener&&d.removeListener(w),(g=ih(d))?(Xd(g,f),g.h==0&&(g.src=null,d[th]=null)):wu(f)}}}function Zm(f){return f in nh?nh[f]:nh[f]="on"+f}function m3(f,d){if(f.da)f=!0;else{d=new He(d,this);var g=f.listener,w=f.ha||f.src;f.fa&&rh(f),f=g.call(w,d)}return f}function ih(f){return f=f[th],f instanceof vu?f:null}var sh="__closure_events_fn_"+(1e9*Math.random()>>>0);function qm(f){return typeof f=="function"?f:(f[sh]||(f[sh]=function(d){return f.handleEvent(d)}),f[sh])}function wt(){ee.call(this),this.i=new vu(this),this.M=this,this.F=null}I(wt,ee),wt.prototype[Rt]=!0,wt.prototype.removeEventListener=function(f,d,g,w){$m(this,f,d,g,w)};function Pt(f,d){var g,w=f.F;if(w)for(g=[];w;w=w.F)g.push(w);if(f=f.M,w=d.type||d,typeof d=="string")d=new fe(d,f);else if(d instanceof fe)d.target=d.target||f;else{var D=d;d=new fe(w,f),E(d,D)}if(D=!0,g)for(var P=g.length-1;0<=P;P--){var F=d.g=g[P];D=_u(F,w,!0,d)&&D}if(F=d.g=f,D=_u(F,w,!0,d)&&D,D=_u(F,w,!1,d)&&D,g)for(P=0;P<g.length;P++)F=d.g=g[P],D=_u(F,w,!1,d)&&D}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var f=this.i,d;for(d in f.g){for(var g=f.g[d],w=0;w<g.length;w++)wu(g[w]);delete f.g[d],f.h--}}this.F=null},wt.prototype.K=function(f,d,g,w){return this.i.add(String(f),d,!1,g,w)},wt.prototype.L=function(f,d,g,w){return this.i.add(String(f),d,!0,g,w)};function _u(f,d,g,w){if(d=f.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,P=0;P<d.length;++P){var F=d[P];if(F&&!F.da&&F.capture==g){var Me=F.listener,lt=F.ha||F.src;F.fa&&Xd(f.i,F),D=Me.call(lt,w)!==!1&&D}}return D&&!w.defaultPrevented}function Km(f,d,g){if(typeof f=="function")g&&(f=p(f,g));else if(f&&typeof f.handleEvent=="function")f=p(f.handleEvent,f);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(f,d||0)}function Xm(f){f.g=Km(()=>{f.g=null,f.i&&(f.i=!1,Xm(f))},f.l);const d=f.h;f.h=null,f.m.apply(null,d)}class y3 extends ee{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Xm(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qo(f){ee.call(this),this.h=f,this.g={}}I(qo,ee);var ey=[];function ty(f){x(f.g,function(d,g){this.g.hasOwnProperty(g)&&rh(d)},f),f.g={}}qo.prototype.N=function(){qo.aa.N.call(this),ty(this)},qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oh=a.JSON.stringify,w3=a.JSON.parse,v3=class{stringify(f){return a.JSON.stringify(f,void 0)}parse(f){return a.JSON.parse(f,void 0)}};function ah(){}ah.prototype.h=null;function ny(f){return f.h||(f.h=f.i())}function ry(){}var Ko={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fh(){fe.call(this,"d")}I(fh,fe);function uh(){fe.call(this,"c")}I(uh,fe);var bi={},iy=null;function Mu(){return iy=iy||new wt}bi.La="serverreachability";function sy(f){fe.call(this,bi.La,f)}I(sy,fe);function Xo(f){const d=Mu();Pt(d,new sy(d))}bi.STAT_EVENT="statevent";function oy(f,d){fe.call(this,bi.STAT_EVENT,f),this.stat=d}I(oy,fe);function xt(f){const d=Mu();Pt(d,new oy(d,f))}bi.Ma="timingevent";function ay(f,d){fe.call(this,bi.Ma,f),this.size=d}I(ay,fe);function ea(f,d){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){f()},d)}function ta(){this.g=!0}ta.prototype.xa=function(){this.g=!1};function _3(f,d,g,w,D,P){f.info(function(){if(f.g)if(P)for(var F="",Me=P.split("&"),lt=0;lt<Me.length;lt++){var pe=Me[lt].split("=");if(1<pe.length){var vt=pe[0];pe=pe[1];var _t=vt.split("_");F=2<=_t.length&&_t[1]=="type"?F+(vt+"="+pe+"&"):F+(vt+"=redacted&")}}else F=null;else F=P;return"XMLHTTP REQ ("+w+") [attempt "+D+"]: "+d+`
`+g+`
`+F})}function M3(f,d,g,w,D,P,F){f.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+D+"]: "+d+`
`+g+`
`+P+" "+F})}function Is(f,d,g,w){f.info(function(){return"XMLHTTP TEXT ("+d+"): "+L3(f,g)+(w?" "+w:"")})}function I3(f,d){f.info(function(){return"TIMEOUT: "+d})}ta.prototype.info=function(){};function L3(f,d){if(!f.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(f=0;f<g.length;f++)if(Array.isArray(g[f])){var w=g[f];if(!(2>w.length)){var D=w[1];if(Array.isArray(D)&&!(1>D.length)){var P=D[0];if(P!="noop"&&P!="stop"&&P!="close")for(var F=1;F<D.length;F++)D[F]=""}}}}return oh(g)}catch{return d}}var Iu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lh;function Lu(){}I(Lu,ah),Lu.prototype.g=function(){return new XMLHttpRequest},Lu.prototype.i=function(){return{}},lh=new Lu;function jr(f,d,g,w){this.j=f,this.i=d,this.l=g,this.R=w||1,this.U=new qo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new uy}function uy(){this.i=null,this.g="",this.h=!1}var ly={},ch={};function dh(f,d,g){f.L=1,f.v=bu(or(d)),f.m=g,f.P=!0,cy(f,null)}function cy(f,d){f.F=Date.now(),Cu(f),f.A=or(f.v);var g=f.A,w=f.R;Array.isArray(w)||(w=[String(w)]),Ey(g.i,"t",w),f.C=0,g=f.j.J,f.h=new uy,f.g=Qy(f.j,g?d:null,!f.m),0<f.O&&(f.M=new y3(p(f.Y,f,f.g),f.O)),d=f.U,g=f.g,w=f.ca;var D="readystatechange";Array.isArray(D)||(D&&(ey[0]=D.toString()),D=ey);for(var P=0;P<D.length;P++){var F=Jm(g,D[P],w||d.handleEvent,!1,d.h||d);if(!F)break;d.g[F.key]=F}d=f.H?m(f.H):{},f.m?(f.u||(f.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.A,f.u,f.m,d)):(f.u="GET",f.g.ea(f.A,f.u,null,d)),Xo(),_3(f.i,f.u,f.A,f.l,f.R,f.m)}jr.prototype.ca=function(f){f=f.target;const d=this.M;d&&ar(f)==3?d.j():this.Y(f)},jr.prototype.Y=function(f){try{if(f==this.g)e:{const _t=ar(this.g);var d=this.g.Ba();const Es=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||jy(this.g)))){this.J||_t!=4||d==7||(d==8||0>=Es?Xo(3):Xo(2)),hh(this);var g=this.g.Z();this.X=g;t:if(dy(this)){var w=jy(this.g);f="";var D=w.length,P=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Si(this),na(this);var F="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,f+=this.h.i.decode(w[d],{stream:!(P&&d==D-1)});w.length=0,this.h.g+=f,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=g==200,M3(this.i,this.u,this.A,this.l,this.R,_t,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,lt=this.g;if((Me=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(Me)){var pe=Me;break t}}pe=null}if(g=pe)Is(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ph(this,g);else{this.o=!1,this.s=3,xt(12),Si(this),na(this);break e}}if(this.P){g=!0;let kn;for(;!this.J&&this.C<F.length;)if(kn=C3(this,F),kn==ch){_t==4&&(this.s=4,xt(14),g=!1),Is(this.i,this.l,null,"[Incomplete Response]");break}else if(kn==ly){this.s=4,xt(15),Is(this.i,this.l,F,"[Invalid Chunk]"),g=!1;break}else Is(this.i,this.l,kn,null),ph(this,kn);if(dy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||F.length!=0||this.h.h||(this.s=1,xt(16),g=!1),this.o=this.o&&g,!g)Is(this.i,this.l,F,"[Invalid Chunked Response]"),Si(this),na(this);else if(0<F.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),_h(vt),vt.M=!0,xt(11))}}else Is(this.i,this.l,F,null),ph(this,F);_t==4&&Si(this),this.o&&!this.J&&(_t==4?Uy(this.j,this):(this.o=!1,Cu(this)))}else F3(this.g),g==400&&0<F.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),Si(this),na(this)}}}catch{}finally{}};function dy(f){return f.g?f.u=="GET"&&f.L!=2&&f.j.Ca:!1}function C3(f,d){var g=f.C,w=d.indexOf(`
`,g);return w==-1?ch:(g=Number(d.substring(g,w)),isNaN(g)?ly:(w+=1,w+g>d.length?ch:(d=d.slice(w,w+g),f.C=w+g,d)))}jr.prototype.cancel=function(){this.J=!0,Si(this)};function Cu(f){f.S=Date.now()+f.I,hy(f,f.I)}function hy(f,d){if(f.B!=null)throw Error("WatchDog timer not null");f.B=ea(p(f.ba,f),d)}function hh(f){f.B&&(a.clearTimeout(f.B),f.B=null)}jr.prototype.ba=function(){this.B=null;const f=Date.now();0<=f-this.S?(I3(this.i,this.A),this.L!=2&&(Xo(),xt(17)),Si(this),this.s=2,na(this)):hy(this,this.S-f)};function na(f){f.j.G==0||f.J||Uy(f.j,f)}function Si(f){hh(f);var d=f.M;d&&typeof d.ma=="function"&&d.ma(),f.M=null,ty(f.U),f.g&&(d=f.g,f.g=null,d.abort(),d.ma())}function ph(f,d){try{var g=f.j;if(g.G!=0&&(g.g==f||gh(g.h,f))){if(!f.K&&gh(g.h,f)&&g.G==3){try{var w=g.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var D=w;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<f.F)ju(g),Nu(g);else break e;vh(g),xt(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=ea(p(g.Za,g),6e3));if(1>=my(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else Ni(g,11)}else if((f.K||g.g==f)&&ju(g),!y(d))for(D=g.Da.g.parse(d),d=0;d<D.length;d++){let pe=D[d];if(g.T=pe[0],pe=pe[1],g.G==2)if(pe[0]=="c"){g.K=pe[1],g.ia=pe[2];const vt=pe[3];vt!=null&&(g.la=vt,g.j.info("VER="+g.la));const _t=pe[4];_t!=null&&(g.Aa=_t,g.j.info("SVER="+g.Aa));const Es=pe[5];Es!=null&&typeof Es=="number"&&0<Es&&(w=1.5*Es,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const kn=f.g;if(kn){const Ru=kn.g?kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ru){var P=w.h;P.g||Ru.indexOf("spdy")==-1&&Ru.indexOf("quic")==-1&&Ru.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(mh(P,P.h),P.h=null))}if(w.D){const Mh=kn.g?kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Mh&&(w.ya=Mh,Ce(w.I,w.D,Mh))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-f.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var F=f;if(w.qa=By(w,w.J?w.ia:null,w.W),F.K){yy(w.h,F);var Me=F,lt=w.L;lt&&(Me.I=lt),Me.B&&(hh(Me),Cu(Me)),w.g=F}else Oy(w);0<g.i.length&&Au(g)}else pe[0]!="stop"&&pe[0]!="close"||Ni(g,7);else g.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Ni(g,7):wh(g):pe[0]!="noop"&&g.l&&g.l.ta(pe),g.v=0)}}Xo(4)}catch{}}var E3=class{constructor(f,d){this.g=f,this.map=d}};function py(f){this.l=f||10,a.PerformanceNavigationTiming?(f=a.performance.getEntriesByType("navigation"),f=0<f.length&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gy(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function my(f){return f.h?1:f.g?f.g.size:0}function gh(f,d){return f.h?f.h==d:f.g?f.g.has(d):!1}function mh(f,d){f.g?f.g.add(d):f.h=d}function yy(f,d){f.h&&f.h==d?f.h=null:f.g&&f.g.has(d)&&f.g.delete(d)}py.prototype.cancel=function(){if(this.i=wy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function wy(f){if(f.h!=null)return f.i.concat(f.h.D);if(f.g!=null&&f.g.size!==0){let d=f.i;for(const g of f.g.values())d=d.concat(g.D);return d}return S(f.i)}function T3(f){if(f.V&&typeof f.V=="function")return f.V();if(typeof Map<"u"&&f instanceof Map||typeof Set<"u"&&f instanceof Set)return Array.from(f.values());if(typeof f=="string")return f.split("");if(u(f)){for(var d=[],g=f.length,w=0;w<g;w++)d.push(f[w]);return d}d=[],g=0;for(w in f)d[g++]=f[w];return d}function b3(f){if(f.na&&typeof f.na=="function")return f.na();if(!f.V||typeof f.V!="function"){if(typeof Map<"u"&&f instanceof Map)return Array.from(f.keys());if(!(typeof Set<"u"&&f instanceof Set)){if(u(f)||typeof f=="string"){var d=[];f=f.length;for(var g=0;g<f;g++)d.push(g);return d}d=[],g=0;for(const w in f)d[g++]=w;return d}}}function vy(f,d){if(f.forEach&&typeof f.forEach=="function")f.forEach(d,void 0);else if(u(f)||typeof f=="string")Array.prototype.forEach.call(f,d,void 0);else for(var g=b3(f),w=T3(f),D=w.length,P=0;P<D;P++)d.call(void 0,w[P],g&&g[P],f)}var _y=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function S3(f,d){if(f){f=f.split("&");for(var g=0;g<f.length;g++){var w=f[g].indexOf("="),D=null;if(0<=w){var P=f[g].substring(0,w);D=f[g].substring(w+1)}else P=f[g];d(P,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ki(f){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,f instanceof ki){this.h=f.h,Eu(this,f.j),this.o=f.o,this.g=f.g,Tu(this,f.s),this.l=f.l;var d=f.i,g=new sa;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),My(this,g),this.m=f.m}else f&&(d=String(f).match(_y))?(this.h=!1,Eu(this,d[1]||"",!0),this.o=ra(d[2]||""),this.g=ra(d[3]||"",!0),Tu(this,d[4]),this.l=ra(d[5]||"",!0),My(this,d[6]||"",!0),this.m=ra(d[7]||"")):(this.h=!1,this.i=new sa(null,this.h))}ki.prototype.toString=function(){var f=[],d=this.j;d&&f.push(ia(d,Iy,!0),":");var g=this.g;return(g||d=="file")&&(f.push("//"),(d=this.o)&&f.push(ia(d,Iy,!0),"@"),f.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&f.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&f.push("/"),f.push(ia(g,g.charAt(0)=="/"?A3:N3,!0))),(g=this.i.toString())&&f.push("?",g),(g=this.m)&&f.push("#",ia(g,D3)),f.join("")};function or(f){return new ki(f)}function Eu(f,d,g){f.j=g?ra(d,!0):d,f.j&&(f.j=f.j.replace(/:$/,""))}function Tu(f,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);f.s=d}else f.s=null}function My(f,d,g){d instanceof sa?(f.i=d,R3(f.i,f.h)):(g||(d=ia(d,j3)),f.i=new sa(d,f.h))}function Ce(f,d,g){f.i.set(d,g)}function bu(f){return Ce(f,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),f}function ra(f,d){return f?d?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function ia(f,d,g){return typeof f=="string"?(f=encodeURI(f).replace(d,k3),g&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function k3(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var Iy=/[#\/\?@]/g,N3=/[#\?:]/g,A3=/[#\?]/g,j3=/[#\?@]/g,D3=/#/g;function sa(f,d){this.h=this.g=null,this.i=f||null,this.j=!!d}function Dr(f){f.g||(f.g=new Map,f.h=0,f.i&&S3(f.i,function(d,g){f.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=sa.prototype,t.add=function(f,d){Dr(this),this.i=null,f=Ls(this,f);var g=this.g.get(f);return g||this.g.set(f,g=[]),g.push(d),this.h+=1,this};function Ly(f,d){Dr(f),d=Ls(f,d),f.g.has(d)&&(f.i=null,f.h-=f.g.get(d).length,f.g.delete(d))}function Cy(f,d){return Dr(f),d=Ls(f,d),f.g.has(d)}t.forEach=function(f,d){Dr(this),this.g.forEach(function(g,w){g.forEach(function(D){f.call(d,D,w,this)},this)},this)},t.na=function(){Dr(this);const f=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let w=0;w<d.length;w++){const D=f[w];for(let P=0;P<D.length;P++)g.push(d[w])}return g},t.V=function(f){Dr(this);let d=[];if(typeof f=="string")Cy(this,f)&&(d=d.concat(this.g.get(Ls(this,f))));else{f=Array.from(this.g.values());for(let g=0;g<f.length;g++)d=d.concat(f[g])}return d},t.set=function(f,d){return Dr(this),this.i=null,f=Ls(this,f),Cy(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[d]),this.h+=1,this},t.get=function(f,d){return f?(f=this.V(f),0<f.length?String(f[0]):d):d};function Ey(f,d,g){Ly(f,d),0<g.length&&(f.i=null,f.g.set(Ls(f,d),S(g)),f.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var w=d[g];const P=encodeURIComponent(String(w)),F=this.V(w);for(w=0;w<F.length;w++){var D=P;F[w]!==""&&(D+="="+encodeURIComponent(String(F[w]))),f.push(D)}}return this.i=f.join("&")};function Ls(f,d){return d=String(d),f.j&&(d=d.toLowerCase()),d}function R3(f,d){d&&!f.j&&(Dr(f),f.i=null,f.g.forEach(function(g,w){var D=w.toLowerCase();w!=D&&(Ly(this,w),Ey(this,D,g))},f)),f.j=d}function P3(f,d){const g=new ta;if(a.Image){const w=new Image;w.onload=v(Rr,g,"TestLoadImage: loaded",!0,d,w),w.onerror=v(Rr,g,"TestLoadImage: error",!1,d,w),w.onabort=v(Rr,g,"TestLoadImage: abort",!1,d,w),w.ontimeout=v(Rr,g,"TestLoadImage: timeout",!1,d,w),a.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=f}else d(!1)}function x3(f,d){const g=new ta,w=new AbortController,D=setTimeout(()=>{w.abort(),Rr(g,"TestPingServer: timeout",!1,d)},1e4);fetch(f,{signal:w.signal}).then(P=>{clearTimeout(D),P.ok?Rr(g,"TestPingServer: ok",!0,d):Rr(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Rr(g,"TestPingServer: error",!1,d)})}function Rr(f,d,g,w,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),w(g)}catch{}}function O3(){this.g=new v3}function z3(f,d,g){const w=g||"";try{vy(f,function(D,P){let F=D;l(D)&&(F=oh(D)),d.push(w+P+"="+encodeURIComponent(F))})}catch(D){throw d.push(w+"type="+encodeURIComponent("_badmap")),D}}function oa(f){this.l=f.Ub||null,this.j=f.eb||!1}I(oa,ah),oa.prototype.g=function(){return new Su(this.l,this.j)},oa.prototype.i=function(f){return function(){return f}}({});function Su(f,d){wt.call(this),this.D=f,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(Su,wt),t=Su.prototype,t.open=function(f,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=f,this.A=d,this.readyState=1,fa(this)},t.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};f&&(d.body=f),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,aa(this)),this.readyState=0},t.Sa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,fa(this)),this.g&&(this.readyState=3,fa(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ty(this)}else f.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ty(f){f.j.read().then(f.Pa.bind(f)).catch(f.ga.bind(f))}t.Pa=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var d=f.value?f.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!f.done}))&&(this.response=this.responseText+=d)}f.done?aa(this):fa(this),this.readyState==3&&Ty(this)}},t.Ra=function(f){this.g&&(this.response=this.responseText=f,aa(this))},t.Qa=function(f){this.g&&(this.response=f,aa(this))},t.ga=function(){this.g&&aa(this)};function aa(f){f.readyState=4,f.l=null,f.j=null,f.v=null,fa(f)}t.setRequestHeader=function(f,d){this.u.append(f,d)},t.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,f.push(g[0]+": "+g[1]),g=d.next();return f.join(`\r
`)};function fa(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(Su.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function by(f){let d="";return x(f,function(g,w){d+=w,d+=":",d+=g,d+=`\r
`}),d}function yh(f,d,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=by(g),typeof f=="string"?g!=null&&encodeURIComponent(String(g)):Ce(f,d,g))}function Ve(f){wt.call(this),this.headers=new Map,this.o=f||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Ve,wt);var U3=/^https?$/i,V3=["POST","PUT"];t=Ve.prototype,t.Ha=function(f){this.J=f},t.ea=function(f,d,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);d=d?d.toUpperCase():"GET",this.D=f,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lh.g(),this.v=this.o?ny(this.o):ny(lh),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(f),!0),this.B=!1}catch(P){Sy(this,P);return}if(f=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var D in w)g.set(D,w[D]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const P of w.keys())g.set(P,w.get(P));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(P=>P.toLowerCase()=="content-type"),D=a.FormData&&f instanceof a.FormData,!(0<=Array.prototype.indexOf.call(V3,d,void 0))||w||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of g)this.g.setRequestHeader(P,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ay(this),this.u=!0,this.g.send(f),this.u=!1}catch(P){Sy(this,P)}};function Sy(f,d){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=d,f.m=5,ky(f),ku(f)}function ky(f){f.A||(f.A=!0,Pt(f,"complete"),Pt(f,"error"))}t.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=f||7,Pt(this,"complete"),Pt(this,"abort"),ku(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ku(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ny(this):this.bb())},t.bb=function(){Ny(this)};function Ny(f){if(f.h&&typeof o<"u"&&(!f.v[1]||ar(f)!=4||f.Z()!=2)){if(f.u&&ar(f)==4)Km(f.Ea,0,f);else if(Pt(f,"readystatechange"),ar(f)==4){f.h=!1;try{const F=f.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var w;if(w=F===0){var D=String(f.D).match(_y)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),w=!U3.test(D?D.toLowerCase():"")}g=w}if(g)Pt(f,"complete"),Pt(f,"success");else{f.m=6;try{var P=2<ar(f)?f.g.statusText:""}catch{P=""}f.l=P+" ["+f.Z()+"]",ky(f)}}finally{ku(f)}}}}function ku(f,d){if(f.g){Ay(f);const g=f.g,w=f.v[0]?()=>{}:null;f.g=null,f.v=null,d||Pt(f,"ready");try{g.onreadystatechange=w}catch{}}}function Ay(f){f.I&&(a.clearTimeout(f.I),f.I=null)}t.isActive=function(){return!!this.g};function ar(f){return f.g?f.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(f){if(this.g){var d=this.g.responseText;return f&&d.indexOf(f)==0&&(d=d.substring(f.length)),w3(d)}};function jy(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.H){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function F3(f){const d={};f=(f.g&&2<=ar(f)&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<f.length;w++){if(y(f[w]))continue;var g=k(f[w]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const P=d[D]||[];d[D]=P,P.push(g)}C(d,function(w){return w.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ua(f,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[f]||d}function Dy(f){this.Aa=0,this.i=[],this.j=new ta,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ua("failFast",!1,f),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ua("baseRetryDelayMs",5e3,f),this.cb=ua("retryDelaySeedMs",1e4,f),this.Wa=ua("forwardChannelMaxRetries",2,f),this.wa=ua("forwardChannelRequestTimeoutMs",2e4,f),this.pa=f&&f.xmlHttpFactory||void 0,this.Xa=f&&f.Tb||void 0,this.Ca=f&&f.useFetchStreams||!1,this.L=void 0,this.J=f&&f.supportsCrossDomainXhr||!1,this.K="",this.h=new py(f&&f.concurrentRequestLimit),this.Da=new O3,this.P=f&&f.fastHandshake||!1,this.O=f&&f.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=f&&f.Rb||!1,f&&f.xa&&this.j.xa(),f&&f.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&f&&f.detectBufferingProxy||!1,this.ja=void 0,f&&f.longPollingTimeout&&0<f.longPollingTimeout&&(this.ja=f.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Dy.prototype,t.la=8,t.G=1,t.connect=function(f,d,g,w){xt(0),this.W=f,this.H=d||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=By(this,null,this.W),Au(this)};function wh(f){if(Ry(f),f.G==3){var d=f.U++,g=or(f.I);if(Ce(g,"SID",f.K),Ce(g,"RID",d),Ce(g,"TYPE","terminate"),la(f,g),d=new jr(f,f.j,d),d.L=2,d.v=bu(or(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Qy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Cu(d)}Fy(f)}function Nu(f){f.g&&(_h(f),f.g.cancel(),f.g=null)}function Ry(f){Nu(f),f.u&&(a.clearTimeout(f.u),f.u=null),ju(f),f.h.cancel(),f.s&&(typeof f.s=="number"&&a.clearTimeout(f.s),f.s=null)}function Au(f){if(!gy(f.h)&&!f.s){f.s=!0;var d=f.Ga;Xe||$(),B||(Xe(),B=!0),J.add(d,f),f.B=0}}function B3(f,d){return my(f.h)>=f.h.j-(f.s?1:0)?!1:f.s?(f.i=d.D.concat(f.i),!0):f.G==1||f.G==2||f.B>=(f.Va?0:f.Wa)?!1:(f.s=ea(p(f.Ga,f,d),Vy(f,f.B)),f.B++,!0)}t.Ga=function(f){if(this.s)if(this.s=null,this.G==1){if(!f){this.U=Math.floor(1e5*Math.random()),f=this.U++;const D=new jr(this,this.j,f);let P=this.o;if(this.S&&(P?(P=m(P),E(P,this.S)):P=this.S),this.m!==null||this.O||(D.H=P,P=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=xy(this,D,d),g=or(this.I),Ce(g,"RID",f),Ce(g,"CVER",22),this.D&&Ce(g,"X-HTTP-Session-Id",this.D),la(this,g),P&&(this.O?d="headers="+encodeURIComponent(String(by(P)))+"&"+d:this.m&&yh(g,this.m,P)),mh(this.h,D),this.Ua&&Ce(g,"TYPE","init"),this.P?(Ce(g,"$req",d),Ce(g,"SID","null"),D.T=!0,dh(D,g,null)):dh(D,g,d),this.G=2}}else this.G==3&&(f?Py(this,f):this.i.length==0||gy(this.h)||Py(this))};function Py(f,d){var g;d?g=d.l:g=f.U++;const w=or(f.I);Ce(w,"SID",f.K),Ce(w,"RID",g),Ce(w,"AID",f.T),la(f,w),f.m&&f.o&&yh(w,f.m,f.o),g=new jr(f,f.j,g,f.B+1),f.m===null&&(g.H=f.o),d&&(f.i=d.D.concat(f.i)),d=xy(f,g,1e3),g.I=Math.round(.5*f.wa)+Math.round(.5*f.wa*Math.random()),mh(f.h,g),dh(g,w,d)}function la(f,d){f.H&&x(f.H,function(g,w){Ce(d,w,g)}),f.l&&vy({},function(g,w){Ce(d,w,g)})}function xy(f,d,g){g=Math.min(f.i.length,g);var w=f.l?p(f.l.Na,f.l,f):null;e:{var D=f.i;let P=-1;for(;;){const F=["count="+g];P==-1?0<g?(P=D[0].g,F.push("ofs="+P)):P=0:F.push("ofs="+P);let Me=!0;for(let lt=0;lt<g;lt++){let pe=D[lt].g;const vt=D[lt].map;if(pe-=P,0>pe)P=Math.max(0,D[lt].g-100),Me=!1;else try{z3(vt,F,"req"+pe+"_")}catch{w&&w(vt)}}if(Me){w=F.join("&");break e}}}return f=f.i.splice(0,g),d.D=f,w}function Oy(f){if(!f.g&&!f.u){f.Y=1;var d=f.Fa;Xe||$(),B||(Xe(),B=!0),J.add(d,f),f.v=0}}function vh(f){return f.g||f.u||3<=f.v?!1:(f.Y++,f.u=ea(p(f.Fa,f),Vy(f,f.v)),f.v++,!0)}t.Fa=function(){if(this.u=null,zy(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var f=2*this.R;this.j.info("BP detection timer enabled: "+f),this.A=ea(p(this.ab,this),f)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),Nu(this),zy(this))};function _h(f){f.A!=null&&(a.clearTimeout(f.A),f.A=null)}function zy(f){f.g=new jr(f,f.j,"rpc",f.Y),f.m===null&&(f.g.H=f.o),f.g.O=0;var d=or(f.qa);Ce(d,"RID","rpc"),Ce(d,"SID",f.K),Ce(d,"AID",f.T),Ce(d,"CI",f.F?"0":"1"),!f.F&&f.ja&&Ce(d,"TO",f.ja),Ce(d,"TYPE","xmlhttp"),la(f,d),f.m&&f.o&&yh(d,f.m,f.o),f.L&&(f.g.I=f.L);var g=f.g;f=f.ia,g.L=1,g.v=bu(or(d)),g.m=null,g.P=!0,cy(g,f)}t.Za=function(){this.C!=null&&(this.C=null,Nu(this),vh(this),xt(19))};function ju(f){f.C!=null&&(a.clearTimeout(f.C),f.C=null)}function Uy(f,d){var g=null;if(f.g==d){ju(f),_h(f),f.g=null;var w=2}else if(gh(f.h,d))g=d.D,yy(f.h,d),w=1;else return;if(f.G!=0){if(d.o)if(w==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var D=f.B;w=Mu(),Pt(w,new ay(w,g)),Au(f)}else Oy(f);else if(D=d.s,D==3||D==0&&0<d.X||!(w==1&&B3(f,d)||w==2&&vh(f)))switch(g&&0<g.length&&(d=f.h,d.i=d.i.concat(g)),D){case 1:Ni(f,5);break;case 4:Ni(f,10);break;case 3:Ni(f,6);break;default:Ni(f,2)}}}function Vy(f,d){let g=f.Ta+Math.floor(Math.random()*f.cb);return f.isActive()||(g*=2),g*d}function Ni(f,d){if(f.j.info("Error code "+d),d==2){var g=p(f.fb,f),w=f.Xa;const D=!w;w=new ki(w||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Eu(w,"https"),bu(w),D?P3(w.toString(),g):x3(w.toString(),g)}else xt(2);f.G=0,f.l&&f.l.sa(d),Fy(f),Ry(f)}t.fb=function(f){f?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function Fy(f){if(f.G=0,f.ka=[],f.l){const d=wy(f.h);(d.length!=0||f.i.length!=0)&&(N(f.ka,d),N(f.ka,f.i),f.h.i.length=0,S(f.i),f.i.length=0),f.l.ra()}}function By(f,d,g){var w=g instanceof ki?or(g):new ki(g);if(w.g!="")d&&(w.g=d+"."+w.g),Tu(w,w.s);else{var D=a.location;w=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var P=new ki(null);w&&Eu(P,w),d&&(P.g=d),D&&Tu(P,D),g&&(P.l=g),w=P}return g=f.D,d=f.ya,g&&d&&Ce(w,g,d),Ce(w,"VER",f.la),la(f,w),w}function Qy(f,d,g){if(d&&!f.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=f.Ca&&!f.pa?new Ve(new oa({eb:g})):new Ve(f.pa),d.Ha(f.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gy(){}t=Gy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Du(){}Du.prototype.g=function(f,d){return new Xt(f,d)};function Xt(f,d){wt.call(this),this.g=new Dy(d),this.l=f,this.h=d&&d.messageUrlParams||null,f=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(f?f["X-WebChannel-Content-Type"]=d.messageContentType:f={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(f?f["X-WebChannel-Client-Profile"]=d.va:f={"X-WebChannel-Client-Profile":d.va}),this.g.S=f,(f=d&&d.Sb)&&!y(f)&&(this.g.m=f),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!y(d)&&(this.g.D=d,f=this.h,f!==null&&d in f&&(f=this.h,d in f&&delete f[d])),this.j=new Cs(this)}I(Xt,wt),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){wh(this.g)},Xt.prototype.o=function(f){var d=this.g;if(typeof f=="string"){var g={};g.__data__=f,f=g}else this.u&&(g={},g.__data__=oh(f),f=g);d.i.push(new E3(d.Ya++,f)),d.G==3&&Au(d)},Xt.prototype.N=function(){this.g.l=null,delete this.j,wh(this.g),delete this.g,Xt.aa.N.call(this)};function Yy(f){fh.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var d=f.__sm__;if(d){e:{for(const g in d){f=g;break e}f=void 0}(this.i=f)&&(f=this.i,d=d!==null&&f in d?d[f]:void 0),this.data=d}else this.data=f}I(Yy,fh);function Hy(){uh.call(this),this.status=1}I(Hy,uh);function Cs(f){this.g=f}I(Cs,Gy),Cs.prototype.ua=function(){Pt(this.g,"a")},Cs.prototype.ta=function(f){Pt(this.g,new Yy(f))},Cs.prototype.sa=function(f){Pt(this.g,new Hy)},Cs.prototype.ra=function(){Pt(this.g,"b")},Du.prototype.createWebChannel=Du.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,lI=function(){return new Du},uI=function(){return Mu()},fI=bi,I1={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Iu.NO_ERROR=0,Iu.TIMEOUT=8,Iu.HTTP_ERROR=6,Cl=Iu,fy.COMPLETE="complete",aI=fy,ry.EventType=Ko,Ko.OPEN="a",Ko.CLOSE="b",Ko.ERROR="c",Ko.MESSAGE="d",wt.prototype.listen=wt.prototype.K,Da=ry,oI=oa,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,sI=Ve}).apply(typeof Ku<"u"?Ku:typeof self<"u"?self:typeof window<"u"?window:{});const hv="@firebase/firestore";/**
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
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
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
 */let Uo="10.12.0";/**
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
 */const qi=new od("@firebase/firestore");function va(){return qi.logLevel}function H(t,...e){if(qi.logLevel<=ie.DEBUG){const n=e.map(ug);qi.debug(`Firestore (${Uo}): ${t}`,...n)}}function br(t,...e){if(qi.logLevel<=ie.ERROR){const n=e.map(ug);qi.error(`Firestore (${Uo}): ${t}`,...n)}}function wo(t,...e){if(qi.logLevel<=ie.WARN){const n=e.map(ug);qi.warn(`Firestore (${Uo}): ${t}`,...n)}}function ug(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function q(t="Unexpected state"){const e=`FIRESTORE (${Uo}) INTERNAL ASSERTION FAILED: `+t;throw br(e),new Error(e)}function Le(t,e){t||q()}function X(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends sr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class cI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ct.UNAUTHENTICATED))}shutdown(){}}class Jk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $k{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new cI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new Ct(e)}}class Zk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Zk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new Kk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function eN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function vo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class nt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new nt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new nt(0,0))}static max(){return new K(new nt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ef{constructor(e,n,r){n===void 0?n=0:n>e.length&&q(),r===void 0?r=e.length-n:r>e.length-n&&q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ef.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ef?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Ef{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const tN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends Ef{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return tN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Se.fromString(e))}static fromName(e){return new W(Se.fromString(e).popFirst(5))}static empty(){return new W(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Se(e.slice()))}}function nN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new nt(n+1,0):new nt(n,r));return new di(i,W.empty(),e)}function rN(t){return new di(t.readTime,t.key,-1)}class di{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new di(K.min(),W.empty(),-1)}static max(){return new di(K.max(),W.empty(),-1)}}function iN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const sN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $f(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==sN)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(i=>i?U.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new U((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new U((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function aN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zf(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class lg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}lg.oe=-1;function fd(t){return t==null}function dc(t){return t===0&&1/t==-1/0}function fN(t){return typeof t=="number"&&Number.isInteger(t)&&!dc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Ke=class L1{constructor(e,n){this.comparator=e,this.root=n||oi.EMPTY}insert(e,n){return new L1(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,oi.BLACK,null,null))}remove(e){return new L1(this.comparator,this.root.remove(e,this.comparator).copy(null,null,oi.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xu(this.root,e,this.comparator,!0)}},Xu=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},oi=class fr{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fr.RED,this.left=i??fr.EMPTY,this.right=s??fr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new fr(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return fr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return fr.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}};oi.EMPTY=null,oi.RED=!0,oi.BLACK=!1;oi.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new oi(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class gt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gv(this.data.getIterator())}getIteratorFrom(e){return new gv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new gt(this.comparator);return n.data=e,n}}class gv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new nn([])}unionWith(e){let n=new gt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pI("Invalid base64 string: "+s):s}}(e);return new jt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const uN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hi(t){if(Le(!!t),typeof t=="string"){let e=0;const n=uN.exec(t);if(Le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ki(t){return typeof t=="string"?jt.fromBase64String(t):jt.fromUint8Array(t)}/**
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
 */function cg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dg(t){const e=t.mapValue.fields.__previous_value__;return cg(e)?dg(e):e}function Tf(t){const e=hi(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class lN{constructor(e,n,r,i,s,o,a,u,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class bf{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bf("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bf&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const el={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cg(t)?4:cN(t)?9007199254740991:10:q()}function ir(t,e){if(t===e)return!0;const n=Xi(t);if(n!==Xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Tf(t).isEqual(Tf(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hi(i.timestampValue),a=hi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ki(i.bytesValue).isEqual(Ki(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Je(i.geoPointValue.latitude)===Je(s.geoPointValue.latitude)&&Je(i.geoPointValue.longitude)===Je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Je(i.integerValue)===Je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Je(i.doubleValue),a=Je(s.doubleValue);return o===a?dc(o)===dc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return vo(t.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(pv(o)!==pv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ir(o[u],a[u])))return!1;return!0}(t,e);default:return q()}}function Sf(t,e){return(t.values||[]).find(n=>ir(n,e))!==void 0}function _o(t,e){if(t===e)return 0;const n=Xi(t),r=Xi(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Je(s.integerValue||s.doubleValue),u=Je(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return mv(t.timestampValue,e.timestampValue);case 4:return mv(Tf(t),Tf(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ki(s),u=Ki(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const c=me(a[l],u[l]);if(c!==0)return c}return me(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=me(Je(s.latitude),Je(o.latitude));return a!==0?a:me(Je(s.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const c=_o(a[l],u[l]);if(c)return c}return me(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===el.mapValue&&o===el.mapValue)return 0;if(s===el.mapValue)return 1;if(o===el.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let h=0;h<u.length&&h<c.length;++h){const p=me(u[h],c[h]);if(p!==0)return p;const v=_o(a[u[h]],l[c[h]]);if(v!==0)return v}return me(u.length,c.length)}(t.mapValue,e.mapValue);default:throw q()}}function mv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=hi(t),r=hi(e),i=me(n.seconds,r.seconds);return i!==0?i:me(n.nanos,r.nanos)}function Mo(t){return C1(t)}function C1(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ki(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=C1(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${C1(n.fields[o])}`;return i+"}"}(t.mapValue):q()}function yv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function E1(t){return!!t&&"integerValue"in t}function hg(t){return!!t&&"arrayValue"in t}function wv(t){return!!t&&"nullValue"in t}function vv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function El(t){return!!t&&"mapValue"in t}function Wa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Wa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wa(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!El(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wa(n)}setAll(e){let n=ht.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Wa(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());El(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];El(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ls(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Wt(Wa(this.value))}}function gI(t){const e=[];return ls(t.fields,(n,r)=>{const i=new ht([n]);if(El(r)){const s=gI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new nn(e)}/**
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
 */class Tt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Tt(e,0,K.min(),K.min(),K.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,i){return new Tt(e,1,n,K.min(),r,i,0)}static newNoDocument(e,n){return new Tt(e,2,n,K.min(),K.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,K.min(),K.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hc{constructor(e,n){this.position=e,this.inclusive=n}}function _v(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=_o(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ir(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pc{constructor(e,n="asc"){this.field=e,this.dir=n}}function dN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mI{}class Ze extends mI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pN(e,n,r):n==="array-contains"?new yN(e,r):n==="in"?new wN(e,r):n==="not-in"?new vN(e,r):n==="array-contains-any"?new _N(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gN(e,r):new mN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_o(n,this.value)):n!==null&&Xi(this.value)===Xi(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bn extends mI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Bn(e,n)}matches(e){return yI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yI(t){return t.op==="and"}function wI(t){return hN(t)&&yI(t)}function hN(t){for(const e of t.filters)if(e instanceof Bn)return!1;return!0}function T1(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Mo(t.value);if(wI(t))return t.filters.map(e=>T1(e)).join(",");{const e=t.filters.map(n=>T1(n)).join(",");return`${t.op}(${e})`}}function vI(t,e){return t instanceof Ze?function(r,i){return i instanceof Ze&&r.op===i.op&&r.field.isEqual(i.field)&&ir(r.value,i.value)}(t,e):t instanceof Bn?function(r,i){return i instanceof Bn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&vI(o,i.filters[a]),!0):!1}(t,e):void q()}function _I(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${Mo(n.value)}`}(t):t instanceof Bn?function(n){return n.op.toString()+" {"+n.getFilters().map(_I).join(" ,")+"}"}(t):"Filter"}class pN extends Ze{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class gN extends Ze{constructor(e,n){super(e,"in",n),this.keys=MI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mN extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=MI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function MI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class yN extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hg(n)&&Sf(n.arrayValue,this.value)}}class wN extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Sf(this.value.arrayValue,n)}}class vN extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Sf(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Sf(this.value.arrayValue,n)}}class _N extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Sf(this.value.arrayValue,r))}}/**
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
 */class MN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Iv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new MN(t,e,n,r,i,s,o)}function pg(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>T1(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),fd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mo(r)).join(",")),e.ue=n}return e.ue}function gg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mv(t.startAt,e.startAt)&&Mv(t.endAt,e.endAt)}function b1(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class qf{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function IN(t,e,n,r,i,s,o,a){return new qf(t,e,n,r,i,s,o,a)}function ud(t){return new qf(t)}function Lv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function II(t){return t.collectionGroup!==null}function Ja(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new gt(ht.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new pc(s,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new pc(ht.keyField(),r))}return e.ce}function Xn(t){const e=X(t);return e.le||(e.le=LN(e,Ja(t))),e.le}function LN(t,e){if(t.limitType==="F")return Iv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new pc(i.field,s)});const n=t.endAt?new hc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hc(t.startAt.position,t.startAt.inclusive):null;return Iv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function S1(t,e){const n=t.filters.concat([e]);return new qf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function k1(t,e,n){return new qf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ld(t,e){return gg(Xn(t),Xn(e))&&t.limitType===e.limitType}function LI(t){return`${pg(Xn(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>_I(i)).join(", ")}]`),fd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Mo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Mo(i)).join(",")),`Target(${r})`}(Xn(t))}; limitType=${t.limitType})`}function cd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ja(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=_v(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,Ja(r),i)||r.endAt&&!function(o,a,u){const l=_v(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,Ja(r),i))}(t,e)}function CN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function CI(t){return(e,n)=>{let r=!1;for(const i of Ja(t)){const s=EN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EN(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?_o(u,l):q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return q()}}/**
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
 */class Vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hI(this.inner)}size(){return this.innerSize}}/**
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
 */const TN=new Ke(W.comparator);function Sr(){return TN}const EI=new Ke(W.comparator);function Ra(...t){let e=EI;for(const n of t)e=e.insert(n.key,n);return e}function TI(t){let e=EI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zi(){return $a()}function bI(){return $a()}function $a(){return new Vo(t=>t.toString(),(t,e)=>t.isEqual(e))}const bN=new Ke(W.comparator),SN=new gt(W.comparator);function se(...t){let e=SN;for(const n of t)e=e.add(n);return e}const kN=new gt(me);function NN(){return kN}/**
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
 */function SI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(e)?"-0":e}}function kI(t){return{integerValue:""+t}}function AN(t,e){return fN(e)?kI(e):SI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class dd{constructor(){this._=void 0}}function jN(t,e,n){return t instanceof kf?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&cg(s)&&(s=dg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Io?AI(t,e):t instanceof Lo?jI(t,e):function(i,s){const o=NI(i,s),a=Cv(o)+Cv(i.Pe);return E1(o)&&E1(i.Pe)?kI(a):SI(i.serializer,a)}(t,e)}function DN(t,e,n){return t instanceof Io?AI(t,e):t instanceof Lo?jI(t,e):n}function NI(t,e){return t instanceof gc?function(r){return E1(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class kf extends dd{}class Io extends dd{constructor(e){super(),this.elements=e}}function AI(t,e){const n=DI(e);for(const r of t.elements)n.some(i=>ir(i,r))||n.push(r);return{arrayValue:{values:n}}}class Lo extends dd{constructor(e){super(),this.elements=e}}function jI(t,e){let n=DI(e);for(const r of t.elements)n=n.filter(i=>!ir(i,r));return{arrayValue:{values:n}}}class gc extends dd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Cv(t){return Je(t.integerValue||t.doubleValue)}function DI(t){return hg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class mg{constructor(e,n){this.field=e,this.transform=n}}function RN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Io&&i instanceof Io||r instanceof Lo&&i instanceof Lo?vo(r.elements,i.elements,ir):r instanceof gc&&i instanceof gc?ir(r.Pe,i.Pe):r instanceof kf&&i instanceof kf}(t.transform,e.transform)}class PN{constructor(e,n){this.version=e,this.transformResults=n}}class er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new er}static exists(e){return new er(void 0,e)}static updateTime(e){return new er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hd{}function RI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xI(t.key,er.none()):new Kf(t.key,t.data,er.none());{const n=t.data,r=Wt.empty();let i=new gt(ht.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Mi(t.key,r,new nn(i.toArray()),er.none())}}function xN(t,e,n){t instanceof Kf?function(i,s,o){const a=i.value.clone(),u=Tv(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Mi?function(i,s,o){if(!Tl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Tv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(PI(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Za(t,e,n,r){return t instanceof Kf?function(s,o,a,u){if(!Tl(s.precondition,o))return a;const l=s.value.clone(),c=bv(s.fieldTransforms,u,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mi?function(s,o,a,u){if(!Tl(s.precondition,o))return a;const l=bv(s.fieldTransforms,u,o),c=o.data;return c.setAll(PI(s)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Tl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ON(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=NI(r.transform,i||null);s!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,s))}return n||null}function Ev(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&vo(r,i,(s,o)=>RN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kf extends hd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mi extends hd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function PI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tv(t,e,n){const r=new Map;Le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,DN(o,a,n[i]))}return r}function bv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jN(s,o,e))}return r}class xI extends hd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zN extends hd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class UN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&xN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Za(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=bI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=RI(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(n,r)=>Ev(n,r))&&vo(this.baseMutations,e.baseMutations,(n,r)=>Ev(n,r))}}class yg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Le(e.mutations.length===r.length);let i=function(){return bN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yg(e,n,r,i)}}/**
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
 */class VN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class FN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var We,ue;function BN(t){switch(t){default:return q();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function OI(t){if(t===void 0)return br("GRPC error has no .code"),O.UNKNOWN;switch(t){case We.OK:return O.OK;case We.CANCELLED:return O.CANCELLED;case We.UNKNOWN:return O.UNKNOWN;case We.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case We.INTERNAL:return O.INTERNAL;case We.UNAVAILABLE:return O.UNAVAILABLE;case We.UNAUTHENTICATED:return O.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case We.NOT_FOUND:return O.NOT_FOUND;case We.ALREADY_EXISTS:return O.ALREADY_EXISTS;case We.PERMISSION_DENIED:return O.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case We.ABORTED:return O.ABORTED;case We.OUT_OF_RANGE:return O.OUT_OF_RANGE;case We.UNIMPLEMENTED:return O.UNIMPLEMENTED;case We.DATA_LOSS:return O.DATA_LOSS;default:return q()}}(ue=We||(We={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function QN(){return new TextEncoder}/**
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
 */const GN=new Bi([4294967295,4294967295],0);function Sv(t){const e=QN().encode(t),n=new iI;return n.update(e),new Uint8Array(n.digest())}function kv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Bi([n,r],0),new Bi([i,s],0)]}class wg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Pa(`Invalid padding: ${n}`);if(r<0)throw new Pa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Pa(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Bi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Bi.fromNumber(r)));return i.compare(GN)===1&&(i=new Bi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Sv(e),[r,i]=kv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new wg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Sv(e),[r,i]=kv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Xf.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pd(K.min(),i,new Ke(me),Sr(),se())}}class Xf{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xf(r,n,se(),se(),se())}}/**
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
 */class bl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class zI{constructor(e,n){this.targetId=e,this.me=n}}class UI{constructor(e,n,r=jt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Nv{constructor(){this.fe=0,this.ge=jv(),this.pe=jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=se(),n=se(),r=se();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:q()}}),new Xf(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=jv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class YN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Sr(),this.qe=Av(),this.Qe=new Ke(me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(b1(s))if(r===0){const o=new W(s.path);this.Ue(n,o,Tt.newNoDocument(o,K.min()))}else Le(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,l)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ki(r).toUint8Array()}catch(u){if(u instanceof pI)return wo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new wg(o,i,s)}catch(u){return wo(u instanceof Pa?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&b1(a.target)){const u=new W(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Tt.newNoDocument(u,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=se();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Je(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new pd(e,n,this.Qe,this.ke,r);return this.ke=Sr(),this.qe=Av(),this.Qe=new Ke(me),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Nv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new gt(me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Av(){return new Ke(W.comparator)}function jv(){return new Ke(W.comparator)}const HN={asc:"ASCENDING",desc:"DESCENDING"},WN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JN={and:"AND",or:"OR"};class $N{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function N1(t,e){return t.useProto3Json||fd(e)?e:{value:e}}function mc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZN(t,e){return mc(t,e.toTimestamp())}function tr(t){return Le(!!t),K.fromTimestamp(function(n){const r=hi(n);return new nt(r.seconds,r.nanos)}(t))}function vg(t,e){return A1(t,e).canonicalString()}function A1(t,e){const n=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function FI(t){const e=Se.fromString(t);return Le(HI(e)),e}function j1(t,e){return vg(t.databaseId,e.path)}function Xh(t,e){const n=FI(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(QI(n))}function BI(t,e){return vg(t.databaseId,e)}function qN(t){const e=FI(t);return e.length===4?Se.emptyPath():QI(e)}function D1(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QI(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dv(t,e,n){return{name:j1(t,e),fields:n.value.mapValue.fields}}function KN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(Le(c===void 0||typeof c=="string"),jt.fromBase64String(c||"")):(Le(c===void 0||c instanceof Buffer||c instanceof Uint8Array),jt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?O.UNKNOWN:OI(l.code);return new Y(c,l.message||"")}(o);n=new UI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Xh(t,r.document.name),s=tr(r.document.updateTime),o=r.document.createTime?tr(r.document.createTime):K.min(),a=new Wt({mapValue:{fields:r.document.fields}}),u=Tt.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new bl(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Xh(t,r.document),s=r.readTime?tr(r.readTime):K.min(),o=Tt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Xh(t,r.document),s=r.removedTargetIds||[];n=new bl([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new FN(i,s),a=r.targetId;n=new zI(a,o)}}return n}function XN(t,e){let n;if(e instanceof Kf)n={update:Dv(t,e.key,e.value)};else if(e instanceof xI)n={delete:j1(t,e.key)};else if(e instanceof Mi)n={update:Dv(t,e.key,e.data),updateMask:fA(e.fieldMask)};else{if(!(e instanceof zN))return q();n={verify:j1(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof kf)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ZN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(t,e.precondition)),n}function eA(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?tr(i.updateTime):tr(s);return o.isEqual(K.min())&&(o=tr(s)),new PN(o,i.transformResults||[])}(n,e))):[]}function tA(t,e){return{documents:[BI(t,e.path)]}}function nA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=BI(t,i);const s=function(l){if(l.length!==0)return YI(Bn.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(l){if(l.length!==0)return l.map(c=>function(p){return{field:Ns(p.field),direction:sA(p.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=N1(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{_t:n,parent:i}}function rA(t){let e=qN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Le(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const p=GI(h);return p instanceof Bn&&wI(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(I){return new pc(As(I.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,fd(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(h){const p=!!h.before,v=h.values||[];return new hc(v,p)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const p=!h.before,v=h.values||[];return new hc(v,p)}(n.endAt)),IN(e,i,o,s,a,"F",u,l)}function iA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function GI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=As(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=As(n.unaryFilter.field);return Ze.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=As(n.unaryFilter.field);return Ze.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=As(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(As(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Bn.create(n.compositeFilter.filters.map(r=>GI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(n.compositeFilter.op))}(t):q()}function sA(t){return HN[t]}function oA(t){return WN[t]}function aA(t){return JN[t]}function Ns(t){return{fieldPath:t.canonicalString()}}function As(t){return ht.fromServerFormat(t.fieldPath)}function YI(t){return t instanceof Ze?function(n){if(n.op==="=="){if(vv(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NAN"}};if(wv(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vv(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NAN"}};if(wv(n.value))return{unaryFilter:{field:Ns(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ns(n.field),op:oA(n.op),value:n.value}}}(t):t instanceof Bn?function(n){const r=n.getFilters().map(i=>YI(i));return r.length===1?r[0]:{compositeFilter:{op:aA(n.op),filters:r}}}(t):q()}function fA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function HI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Jr{constructor(e,n,r,i,s=K.min(),o=K.min(),a=jt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class uA{constructor(e){this.ct=e}}function lA(t){const e=rA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?k1(e,e.limit,"L"):e}/**
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
 */class cA{constructor(){this._n=new dA}addToCollectionParentIndex(e,n){return this._n.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(di.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(di.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class dA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new gt(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new gt(Se.comparator)).toArray()}}/**
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
 */class Co{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Co(0)}static Ln(){return new Co(-1)}}/**
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
 */class hA{constructor(){this.changes=new Vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class pA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Za(r.mutation,i,nn.empty(),nt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=zi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ra();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Sr();const o=$a(),a=function(){return $a()}();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Mi)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),Za(c.mutation,l,c.mutation.getFieldMask(),nt.now())):o.set(l.key,nn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new pA(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=$a();let i=new Ke((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||nn.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||se()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=bI();c.forEach(p=>{if(!s.has(p)){const v=RI(n.get(p),r.get(p));v!==null&&h.set(p,v),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):II(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):U.resolve(zi());let a=-1,u=s;return o.next(l=>U.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?U.resolve():this.remoteDocumentCache.getEntry(e,c).next(p=>{u=u.insert(c,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,se())).next(c=>({batchId:a,changes:TI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ra();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ra();return this.indexManager.getCollectionParents(e,s).next(a=>U.forEach(a,u=>{const l=function(h,p){return new qf(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next(c=>{c.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,l)=>{const c=l.getKey();o.get(c)===null&&(o=o.insert(c,Tt.newInvalidDocument(c)))});let a=Ra();return o.forEach((u,l)=>{const c=s.get(u);c!==void 0&&Za(c.mutation,l,nn.empty(),nt.now()),cd(n,l)&&(a=a.insert(u,l))}),a})}}/**
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
 */class mA{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return U.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:tr(i.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:lA(i.bundledQuery),readTime:tr(i.readTime)}}(n)),U.resolve()}}/**
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
 */class yA{constructor(){this.overlays=new Ke(W.comparator),this.hr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zi();return U.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const i=zi(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return U.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ke((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=zi(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=zi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return U.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new VN(n,r));let s=this.hr.get(n);s===void 0&&(s=se(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class _g{constructor(){this.Pr=new gt(it.Ir),this.Tr=new gt(it.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new it(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new it(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new W(new Se([])),r=new it(n,e),i=new it(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new W(new Se([])),r=new it(n,e),i=new it(n,e+1);let s=se();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new it(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return W.comparator(e.key,n.key)||me(e.pr,n.pr)}static Er(e,n){return me(e.pr,n.pr)||W.comparator(e.key,n.key)}}/**
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
 */class wA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new gt(it.Ir)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new UN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new it(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return U.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),i=new it(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),U.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new gt(me);return n.forEach(i=>{const s=new it(i,0),o=new it(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),U.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new it(new W(s),0);let a=new gt(me);return this.wr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.pr)),!0)},o),U.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Le(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return U.forEach(n.mutations,i=>{const s=new it(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new it(n,0),i=this.wr.firstAfterOrEqual(r);return U.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vA{constructor(e){this.vr=e,this.docs=function(){return new Ke(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=Sr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Tt.newInvalidDocument(i))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Sr();const o=n.path,a=new W(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||iN(rN(c),r)<=0||(i.has(c.key)||cd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return U.resolve(s)}getAllFromCollectionGroup(e,n,r,i){q()}Fr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _A(this)}getSize(e){return U.resolve(this.size)}}class _A extends hA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class MA{constructor(e){this.persistence=e,this.Mr=new Vo(n=>pg(n),gg),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Or=0,this.Nr=new _g,this.targetCount=0,this.Lr=Co.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),U.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Co(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.qn(n),U.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),U.waitFor(s).next(()=>i)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),U.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Nr.containsKey(n))}}/**
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
 */class IA{constructor(e,n){this.Br={},this.overlays={},this.kr=new lg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new MA(this),this.indexManager=new cA,this.remoteDocumentCache=function(i){return new vA(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new uA(n),this.$r=new mA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new wA(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new LA(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return U.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class LA extends oN{constructor(e){super(),this.currentSequenceNumber=e}}class Mg{constructor(e){this.persistence=e,this.zr=new _g,this.jr=null}static Hr(e){return new Mg(e)}get Jr(){if(this.jr)return this.jr;throw q()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),U.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Jr,r=>{const i=W.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,K.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return U.or([()=>U.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Ig{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ig(e,n.fromCache,r,i)}}/**
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
 */class CA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class EA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return b6()?8:aN(yt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new CA;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(va()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),U.resolve()):(va()<=ie.DEBUG&&H("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(va()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xn(n))):U.resolve())}ji(e,n){if(Lv(n))return U.resolve(null);let r=Xn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=k1(n,null,"F"),r=Xn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Zi(n,a);return this.Xi(n,l,o,u.readTime)?this.ji(e,k1(n,null,"F")):this.es(e,l,n,u)}))})))}Hi(e,n,r,i){return Lv(n)||i.isEqual(K.min())?U.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?U.resolve(null):(va()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ks(n)),this.es(e,o,n,nN(i,-1)).next(a=>a))})}Zi(e,n){let r=new gt(CI(e));return n.forEach((i,s)=>{cd(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return va()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",ks(n)),this.zi.getDocumentsMatchingQuery(e,n,di.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class TA{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ke(me),this.rs=new Vo(s=>pg(s),gg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function bA(t,e,n,r){return new TA(t,e,n,r)}async function WI(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=se();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function SA(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,l,c){const h=l.batch,p=h.keys();let v=U.resolve();return p.forEach(I=>{v=v.next(()=>c.getEntry(u,I)).next(S=>{const N=l.docVersions.get(I);Le(N!==null),S.version.compareTo(N)<0&&(h.applyToRemoteDocument(S,l),S.isValidDocument()&&(S.setReadTime(l.commitVersion),c.addEntry(S)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=se();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function JI(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function kA(t,e){const n=X(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let v=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?v=v.withResumeToken(jt.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):c.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(c.resumeToken,r)),i=i.insert(h,v),function(S,N,M){return S.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(p,v,c)&&a.push(n.Qr.updateTargetData(s,v))});let u=Sr(),l=se();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(NA(s,o,e.documentUpdates).next(c=>{u=c.cs,l=c.ls})),!r.isEqual(K.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return U.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.ns=i,s))}function NA(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Sr();return n.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{cs:o,ls:i}})}function AA(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jA(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,U.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Jr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function R1(t,e,n){const r=X(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zf(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Rv(t,e,n){const r=X(t);let i=K.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,c){const h=X(u),p=h.rs.get(c);return p!==void 0?U.resolve(h.ns.get(p)):h.Qr.getTargetData(l,c)}(r,o,Xn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:K.min(),n?s:se())).next(a=>(DA(r,CN(e),a),{documents:a,hs:s})))}function DA(t,e,n){let r=t.ss.get(e)||K.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Pv{constructor(){this.activeTargetIds=NN()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RA{constructor(){this.no=new Pv,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Pv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PA{io(e){}shutdown(){}}/**
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
 */class xv{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tl=null;function e0(){return tl===null?tl=function(){return 268435456+Math.round(2147483648*Math.random())}():tl++,"0x"+tl.toString(16)}/**
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
 */const xA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class OA{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Lt="WebChannelConnection";class zA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=e0(),u=this.vo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const l={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(l,s,o),this.Mo(n,u,l,i).then(c=>(H("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw wo("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",u,"request:",i),c})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Uo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=xA[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=e0();return new Promise((o,a)=>{const u=new sI;u.setWithCredentials(!0),u.listenOnce(aI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Cl.NO_ERROR:const c=u.getResponseJson();H(Lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Cl.TIMEOUT:H(Lt,`RPC '${e}' ${s} timed out`),a(new Y(O.DEADLINE_EXCEEDED,"Request time out"));break;case Cl.HTTP_ERROR:const h=u.getStatus();if(H(Lt,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const v=p==null?void 0:p.error;if(v&&v.status&&v.message){const I=function(N){const M=N.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(M)>=0?M:O.UNKNOWN}(v.status);a(new Y(I,v.message))}else a(new Y(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new Y(O.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{H(Lt,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(i);H(Lt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}Oo(e,n,r){const i=e0(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lI(),a=uI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new oI({})),this.Fo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");H(Lt,`Creating RPC '${e}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let p=!1,v=!1;const I=new OA({lo:N=>{v?H(Lt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(p||(H(Lt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),H(Lt,`RPC '${e}' stream ${i} sending:`,N),h.send(N))},ho:()=>h.close()}),S=(N,M,y)=>{N.listen(M,_=>{try{y(_)}catch(A){setTimeout(()=>{throw A},0)}})};return S(h,Da.EventType.OPEN,()=>{v||(H(Lt,`RPC '${e}' stream ${i} transport opened.`),I.mo())}),S(h,Da.EventType.CLOSE,()=>{v||(v=!0,H(Lt,`RPC '${e}' stream ${i} transport closed`),I.po())}),S(h,Da.EventType.ERROR,N=>{v||(v=!0,wo(Lt,`RPC '${e}' stream ${i} transport errored:`,N),I.po(new Y(O.UNAVAILABLE,"The operation could not be completed")))}),S(h,Da.EventType.MESSAGE,N=>{var M;if(!v){const y=N.data[0];Le(!!y);const _=y,A=_.error||((M=_[0])===null||M===void 0?void 0:M.error);if(A){H(Lt,`RPC '${e}' stream ${i} received error:`,A);const z=A.status;let x=function(L){const E=We[L];if(E!==void 0)return OI(E)}(z),C=A.message;x===void 0&&(x=O.INTERNAL,C="Unknown error status: "+z+" with message "+A.message),v=!0,I.po(new Y(x,C)),h.close()}else H(Lt,`RPC '${e}' stream ${i} received:`,y),I.yo(y)}}),S(a,fI.STAT_EVENT,N=>{N.stat===I1.PROXY?H(Lt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===I1.NOPROXY&&H(Lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.fo()},0),I}}function t0(){return typeof document<"u"?document:null}/**
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
 */function gd(t){return new $N(t,!0)}/**
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
 */class $I{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class ZI{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new $I(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(br(n.toString()),br("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new Y(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UA extends ZI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=KN(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?tr(o.readTime):K.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=D1(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=b1(u)?{documents:tA(s,u)}:{query:nA(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=VI(s,o.resumeToken);const l=N1(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(K.min())>0){a.readTime=mc(s,o.snapshotVersion.toTimestamp());const l=N1(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=iA(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=D1(this.serializer),n.removeTarget=e,this.i_(n)}}class VA extends ZI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=eA(e.writeResults,e.commitTime),r=tr(e.commitTime);return this.listener.A_(r,n)}return Le(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=D1(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>XN(this.serializer,r))};this.i_(n)}}/**
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
 */class FA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,A1(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Y(O.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,A1(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(O.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class BA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(br(n),this.y_=!1):H("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class QA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{cs(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=X(u);l.M_.add(4),await eu(l),l.N_.set("Unknown"),l.M_.delete(4),await md(l)}(this))})}),this.N_=new BA(r,i)}}async function md(t){if(cs(t))for(const e of t.x_)await e(!0)}async function eu(t){for(const e of t.x_)await e(!1)}function qI(t,e){const n=X(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Tg(n)?Eg(n):Fo(n).Xo()&&Cg(n,e))}function Lg(t,e){const n=X(t),r=Fo(n);n.F_.delete(e),r.Xo()&&KI(n,e),n.F_.size===0&&(r.Xo()?r.n_():cs(n)&&n.N_.set("Unknown"))}function Cg(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fo(t).P_(e)}function KI(t,e){t.L_.xe(e),Fo(t).I_(e)}function Eg(t){t.L_=new YN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Fo(t).start(),t.N_.w_()}function Tg(t){return cs(t)&&!Fo(t).Zo()&&t.F_.size>0}function cs(t){return X(t).M_.size===0}function XI(t){t.L_=void 0}async function GA(t){t.N_.set("Online")}async function YA(t){t.F_.forEach((e,n)=>{Cg(t,e)})}async function HA(t,e){XI(t),Tg(t)?(t.N_.D_(e),Eg(t)):t.N_.set("Unknown")}async function WA(t,e,n){if(t.N_.set("Online"),e instanceof UI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yc(t,r)}else if(e instanceof bl?t.L_.Ke(e):e instanceof zI?t.L_.He(e):t.L_.We(e),!n.isEqual(K.min()))try{const r=await JI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const c=s.F_.get(l);c&&s.F_.set(l,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const c=s.F_.get(u);if(!c)return;s.F_.set(u,c.withResumeToken(jt.EMPTY_BYTE_STRING,c.snapshotVersion)),KI(s,u);const h=new Jr(c.target,u,l,c.sequenceNumber);Cg(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await yc(t,r)}}async function yc(t,e,n){if(!Zf(e))throw e;t.M_.add(1),await eu(t),t.N_.set("Offline"),n||(n=()=>JI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await md(t)})}function eL(t,e){return e().catch(n=>yc(t,n,e))}async function yd(t){const e=X(t),n=pi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;JA(e);)try{const i=await AA(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,$A(e,i)}catch(i){await yc(e,i)}tL(e)&&nL(e)}function JA(t){return cs(t)&&t.v_.length<10}function $A(t,e){t.v_.push(e);const n=pi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function tL(t){return cs(t)&&!pi(t).Zo()&&t.v_.length>0}function nL(t){pi(t).start()}async function ZA(t){pi(t).V_()}async function qA(t){const e=pi(t);for(const n of t.v_)e.d_(n.mutations)}async function KA(t,e,n){const r=t.v_.shift(),i=yg.from(r,e,n);await eL(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yd(t)}async function XA(t,e){e&&pi(t).E_&&await async function(r,i){if(function(o){return BN(o)&&o!==O.ABORTED}(i.code)){const s=r.v_.shift();pi(r).t_(),await eL(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await yd(r)}}(t,e),tL(t)&&nL(t)}async function Ov(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=cs(n);n.M_.add(3),await eu(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await md(n)}async function ej(t,e){const n=X(t);e?(n.M_.delete(2),await md(n)):e||(n.M_.add(2),await eu(n),n.N_.set("Unknown"))}function Fo(t){return t.B_||(t.B_=function(n,r,i){const s=X(n);return s.f_(),new UA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:GA.bind(null,t),To:YA.bind(null,t),Ao:HA.bind(null,t),h_:WA.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Tg(t)?Eg(t):t.N_.set("Unknown")):(await t.B_.stop(),XI(t))})),t.B_}function pi(t){return t.k_||(t.k_=function(n,r,i){const s=X(n);return s.f_(),new VA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:ZA.bind(null,t),Ao:XA.bind(null,t),R_:qA.bind(null,t),A_:KA.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await yd(t)):(await t.k_.stop(),t.v_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class bg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new bg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sg(t,e){if(br("AsyncQueue",`${e}: ${t}`),Zf(t))return new Y(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class eo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ra(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new eo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof eo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new eo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class zv{constructor(){this.q_=new Ke(W.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):q():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Eo{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Eo(e,n,eo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ld(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class tj{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class nj{constructor(){this.queries=new Vo(e=>LI(e),ld),this.onlineState="Unknown",this.z_=new Set}}async function kg(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new tj,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Sg(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Ag(n)}async function Ng(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rj(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Ag(n)}function ij(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Ag(t){t.z_.forEach(e=>{e.next()})}var P1,Uv;(Uv=P1||(P1={})).J_="default",Uv.Cache="cache";class jg{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==P1.Cache}}/**
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
 */class rL{constructor(e){this.key=e}}class iL{constructor(e){this.key=e}}class sj{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=se(),this.mutatedKeys=se(),this.Ia=CI(e),this.Ta=new eo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new zv,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const p=i.get(c),v=cd(this.query,h)?h:null,I=!!p&&this.mutatedKeys.has(p.key),S=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;p&&v?p.data.isEqual(v.data)?I!==S&&(r.track({type:3,doc:v}),N=!0):this.Ra(p,v)||(r.track({type:2,doc:v}),N=!0,(u&&this.Ia(v,u)>0||l&&this.Ia(v,l)<0)&&(a=!0)):!p&&v?(r.track({type:0,doc:v}),N=!0):p&&!v&&(r.track({type:1,doc:p}),N=!0,(u||l)&&(a=!0)),N&&(v?(o=o.add(v),s=S?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((c,h)=>function(v,I){const S=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return S(v)-S(I)}(c.type,h.type)||this.Ia(c.doc,h.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],u=this.Pa.size===0&&this.current&&!i?1:0,l=u!==this.ha;return this.ha=u,o.length!==0||l?{snapshot:new Eo(this.query,e.Ta,s,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new zv,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=se(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new iL(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new rL(r))}),n}pa(e){this.la=e.hs,this.Pa=se();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Eo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class oj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aj{constructor(e){this.key=e,this.wa=!1}}class fj{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Vo(a=>LI(a),ld),this.Da=new Map,this.Ca=new Set,this.va=new Ke(W.comparator),this.Fa=new Map,this.Ma=new _g,this.xa={},this.Oa=new Map,this.Na=Co.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function uj(t,e,n=!0){const r=lL(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await sL(r,e,n,!0),i}async function lj(t,e){const n=lL(t);await sL(n,e,!0,!1)}async function sL(t,e,n,r){const i=await jA(t.localStore,Xn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await cj(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&qI(t.remoteStore,i),a}async function cj(t,e,n,r,i){t.Ba=(h,p,v)=>async function(S,N,M,y){let _=N.view.da(M);_.Xi&&(_=await Rv(S.localStore,N.query,!1).then(({documents:C})=>N.view.da(C,_)));const A=y&&y.targetChanges.get(N.targetId),z=y&&y.targetMismatches.get(N.targetId)!=null,x=N.view.applyChanges(_,S.isPrimaryClient,A,z);return Fv(S,N.targetId,x.fa),x.snapshot}(t,h,p,v);const s=await Rv(t.localStore,e,!0),o=new sj(e,s.hs),a=o.da(s.documents),u=Xf.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);Fv(t,n,l.fa);const c=new oj(e,n,o);return t.ba.set(e,c),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),l.snapshot}async function dj(t,e,n){const r=X(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!ld(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await R1(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Lg(r.remoteStore,i.targetId),x1(r,i.targetId)}).catch($f)):(x1(r,i.targetId),await R1(r.localStore,i.targetId,!0))}async function hj(t,e){const n=X(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Lg(n.remoteStore,r.targetId))}async function pj(t,e,n){const r=Mj(t);try{const i=await function(o,a){const u=X(o),l=nt.now(),c=a.reduce((v,I)=>v.add(I.key),se());let h,p;return u.persistence.runTransaction("Locally write mutations","readwrite",v=>{let I=Sr(),S=se();return u.os.getEntries(v,c).next(N=>{I=N,I.forEach((M,y)=>{y.isValidDocument()||(S=S.add(M))})}).next(()=>u.localDocuments.getOverlayedDocuments(v,I)).next(N=>{h=N;const M=[];for(const y of a){const _=ON(y,h.get(y.key).overlayedDocument);_!=null&&M.push(new Mi(y.key,_,gI(_.value.mapValue),er.exists(!0)))}return u.mutationQueue.addMutationBatch(v,l,M,a)}).next(N=>{p=N;const M=N.applyToLocalDocumentSet(h,S);return u.documentOverlayCache.saveOverlays(v,N.batchId,M)})}).then(()=>({batchId:p.batchId,changes:TI(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.xa[o.currentUser.toKey()];l||(l=new Ke(me)),l=l.insert(a,u),o.xa[o.currentUser.toKey()]=l}(r,i.batchId,n),await tu(r,i.changes),await yd(r.remoteStore)}catch(i){const s=Sg(i,"Failed to persist write");n.reject(s)}}async function oL(t,e){const n=X(t);try{const r=await kA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Le(o.wa):i.removedDocuments.size>0&&(Le(o.wa),o.wa=!1))}),await tu(n,r,e)}catch(r){await $f(r)}}function Vv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=X(o);u.onlineState=a;let l=!1;u.queries.forEach((c,h)=>{for(const p of h.U_)p.j_(a)&&(l=!0)}),l&&Ag(u)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gj(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Ke(W.comparator);o=o.insert(s,Tt.newNoDocument(s,K.min()));const a=se().add(s),u=new pd(K.min(),new Map,new Ke(me),o,a);await oL(r,u),r.va=r.va.remove(s),r.Fa.delete(e),Dg(r)}else await R1(r.localStore,e,!1).then(()=>x1(r,e,n)).catch($f)}async function mj(t,e){const n=X(t),r=e.batch.batchId;try{const i=await SA(n.localStore,e);fL(n,r,null),aL(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tu(n,i)}catch(i){await $f(i)}}async function yj(t,e,n){const r=X(t);try{const i=await function(o,a){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return u.mutationQueue.lookupMutationBatch(l,a).next(h=>(Le(h!==null),c=h.keys(),u.mutationQueue.removeMutationBatch(l,h))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>u.localDocuments.getDocuments(l,c))})}(r.localStore,e);fL(r,e,n),aL(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tu(r,i)}catch(i){await $f(i)}}function aL(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function fL(t,e,n){const r=X(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function x1(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||uL(t,r)})}function uL(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Lg(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Dg(t))}function Fv(t,e,n){for(const r of n)r instanceof rL?(t.Ma.addReference(r.key,e),wj(t,r)):r instanceof iL?(H("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||uL(t,r.key)):q()}function wj(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(H("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Dg(t))}function Dg(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new W(Se.fromString(e)),r=t.Na.next();t.Fa.set(r,new aj(n)),t.va=t.va.insert(n,r),qI(t.remoteStore,new Jr(Xn(ud(n.path)),r,"TargetPurposeLimboResolution",lg.oe))}}async function tu(t,e,n){const r=X(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,u)=>{o.push(r.Ba(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Ig.Ki(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(u,l){const c=X(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>U.forEach(l,p=>U.forEach(p.qi,v=>c.persistence.referenceDelegate.addReference(h,p.targetId,v)).next(()=>U.forEach(p.Qi,v=>c.persistence.referenceDelegate.removeReference(h,p.targetId,v)))))}catch(h){if(!Zf(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const p=h.targetId;if(!h.fromCache){const v=c.ns.get(p),I=v.snapshotVersion,S=v.withLastLimboFreeSnapshotVersion(I);c.ns=c.ns.insert(p,S)}}}(r.localStore,s))}async function vj(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await WI(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(u=>{u.reject(new Y(O.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tu(n,r.us)}}function _j(t,e){const n=X(t),r=n.Fa.get(e);if(r&&r.wa)return se().add(r.key);{let i=se();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function lL(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oL.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_j.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gj.bind(null,e),e.Sa.h_=rj.bind(null,e.eventManager),e.Sa.ka=ij.bind(null,e.eventManager),e}function Mj(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yj.bind(null,e),e}class Bv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=gd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return bA(this.persistence,new EA,e.initialUser,this.serializer)}createPersistence(e){return new IA(Mg.Hr,this.serializer)}createSharedClientState(e){return new RA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ij{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vj.bind(null,this.syncEngine),await ej(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nj}()}createDatastore(e){const n=gd(e.databaseInfo.databaseId),r=function(s){return new zA(s)}(e.databaseInfo);return function(s,o,a,u){return new FA(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new QA(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Vv(this.syncEngine,n,0),function(){return xv.D()?new xv:new PA}())}createSyncEngine(e,n){return function(i,s,o,a,u,l,c){const h=new fj(i,s,o,a,u,l);return c&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=X(r);H("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await eu(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class Rg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):br("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Lj{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ct.UNAUTHENTICATED,this.clientId=dI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{H("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(H("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Sg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function n0(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ej(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ov(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ov(e.remoteStore,i)),t._onlineComponents=e}function Cj(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ej(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await n0(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Cj(n))throw n;wo("Error using user provided cache. Falling back to memory cache: "+n),await n0(t,new Bv)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await n0(t,new Bv);return t._offlineComponents}async function cL(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Qv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Qv(t,new Ij))),t._onlineComponents}function Tj(t){return cL(t).then(e=>e.syncEngine)}async function wc(t){const e=await cL(t),n=e.eventManager;return n.onListen=uj.bind(null,e.syncEngine),n.onUnlisten=dj.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lj.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=hj.bind(null,e.syncEngine),n}function bj(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new Rg({next:p=>{o.enqueueAndForget(()=>Ng(s,h));const v=p.docs.has(a);!v&&p.fromCache?l.reject(new Y(O.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&p.fromCache&&u&&u.source==="server"?l.reject(new Y(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new jg(ud(a.path),c,{includeMetadataChanges:!0,ra:!0});return kg(s,h)}(await wc(t),t.asyncQueue,e,n,r)),r.promise}function Sj(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new Rg({next:p=>{o.enqueueAndForget(()=>Ng(s,h)),p.fromCache&&u.source==="server"?l.reject(new Y(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),h=new jg(a,c,{includeMetadataChanges:!0,ra:!0});return kg(s,h)}(await wc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function dL(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Gv=new Map;/**
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
 */function hL(t,e,n){if(!n)throw new Y(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kj(t,e,n,r){if(e===!0&&r===!0)throw new Y(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yv(t){if(!W.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hv(t){if(W.isDocumentKey(t))throw new Y(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":q()}function Mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wd(t);throw new Y(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Wv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dL((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Y(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Y(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wk;switch(r.type){case"firstParty":return new qk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gv.get(n);r&&(H("ComponentProvider","Removing Datastore"),Gv.delete(n),r.terminate())}(this),Promise.resolve()}}function Nj(t,e,n,r={}){var i;const s=(t=Mn(t,vd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Ct.MOCK_USER;else{a=$M(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new Y(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ct(l)}t._authCredentials=new Jk(new cI(a,u))}}/**
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
 */class ds{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class Nt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ai(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nt(this.firestore,e,this._key)}}class ai extends ds{constructor(e,n,r){super(e,n,ud(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nt(this.firestore,null,new W(e))}withConverter(e){return new ai(this.firestore,e,this._path)}}function r0(t,e,...n){if(t=ze(t),hL("collection","path",e),t instanceof vd){const r=Se.fromString(e,...n);return Hv(r),new ai(t,null,r)}{if(!(t instanceof Nt||t instanceof ai))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Hv(r),new ai(t.firestore,null,r)}}function In(t,e,...n){if(t=ze(t),arguments.length===1&&(e=dI.newId()),hL("doc","path",e),t instanceof vd){const r=Se.fromString(e,...n);return Yv(r),new Nt(t,null,new W(r))}{if(!(t instanceof Nt||t instanceof ai))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Yv(r),new Nt(t.firestore,t instanceof ai?t.converter:null,new W(r))}}/**
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
 */class Aj{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new $I(this,"async_queue_retry"),this.hu=()=>{const n=t0();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=t0();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=t0();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new wr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Zf(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw br("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=bg.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&q()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Jv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class es extends vd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Aj}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pL(this),this._firestoreClient.terminate()}}function jj(t,e){const n=fg(),r="(default)",i=ad(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=HM("firestore");s&&Nj(i,...s)}return i}function _d(t){return t._firestoreClient||pL(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function pL(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,l,c){return new lN(a,u,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,dL(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Lj(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class To{constructor(e){this._byteString=e}static fromBase64String(e){try{return new To(jt.fromBase64String(e))}catch(n){throw new Y(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new To(jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Md{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Bo{constructor(e){this._methodName=e}}/**
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
 */class Pg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const Dj=/^__.*__$/;class Rj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kf(e,this.data,n,this.fieldTransforms)}}class gL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mL(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class Id{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Id(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return vc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(mL(this.fu)&&Dj.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Pj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gd(e)}Fu(e,n,r,i=!1){return new Id({fu:e,methodName:n,vu:r,path:ht.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xg(t){const e=t._freezeSettings(),n=gd(t._databaseId);return new Pj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xj(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Vg("Data must be an object, but it was:",o,r);const a=wL(r,o);let u,l;if(s.merge)u=new nn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const p=O1(e,h,n);if(!o.contains(p))throw new Y(O.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);_L(c,p)||c.push(p)}u=new nn(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Rj(new Wt(a),u,l)}class Ld extends Bo{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ld}}function yL(t,e,n){return new Id({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Og extends Bo{_toFieldTransform(e){return new mg(e.path,new kf)}isEqual(e){return e instanceof Og}}class zg extends Bo{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=yL(this,e,!0),r=this.Mu.map(s=>hs(s,n)),i=new Io(r);return new mg(e.path,i)}isEqual(e){return e instanceof zg&&yo(this.Mu,e.Mu)}}class Ug extends Bo{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=yL(this,e,!0),r=this.Mu.map(s=>hs(s,n)),i=new Lo(r);return new mg(e.path,i)}isEqual(e){return e instanceof Ug&&yo(this.Mu,e.Mu)}}function Oj(t,e,n,r){const i=t.Fu(1,e,n);Vg("Data must be an object, but it was:",i,r);const s=[],o=Wt.empty();ls(r,(u,l)=>{const c=Fg(e,u,n);l=ze(l);const h=i.Su(c);if(l instanceof Ld)s.push(c);else{const p=hs(l,h);p!=null&&(s.push(c),o.set(c,p))}});const a=new nn(s);return new gL(o,a,i.fieldTransforms)}function zj(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[O1(e,r,n)],u=[i];if(s.length%2!=0)throw new Y(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(O1(e,s[p])),u.push(s[p+1]);const l=[],c=Wt.empty();for(let p=a.length-1;p>=0;--p)if(!_L(l,a[p])){const v=a[p];let I=u[p];I=ze(I);const S=o.Su(v);if(I instanceof Ld)l.push(v);else{const N=hs(I,S);N!=null&&(l.push(v),c.set(v,N))}}const h=new nn(l);return new gL(c,h,o.fieldTransforms)}function Uj(t,e,n,r=!1){return hs(n,t.Fu(r?4:3,e))}function hs(t,e){if(vL(t=ze(t)))return Vg("Unsupported field value:",e,t),wL(t,e);if(t instanceof Bo)return function(r,i){if(!mL(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=hs(a,i.bu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=nt.fromDate(r);return{timestampValue:mc(i.serializer,s)}}if(r instanceof nt){const s=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mc(i.serializer,s)}}if(r instanceof Pg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof To)return{bytesValue:VI(i.serializer,r._byteString)};if(r instanceof Nt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:vg(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${wd(r)}`)}(t,e)}function wL(t,e){const n={};return hI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(t,(r,i)=>{const s=hs(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function vL(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Pg||t instanceof To||t instanceof Nt||t instanceof Bo)}function Vg(t,e,n){if(!vL(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=wd(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function O1(t,e,n){if((e=ze(e))instanceof Md)return e._internalPath;if(typeof e=="string")return Fg(t,e);throw vc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Vj=new RegExp("[~\\*/\\[\\]]");function Fg(t,e,n){if(e.search(Vj)>=0)throw vc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Md(...e.split("."))._internalPath}catch{throw vc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function vc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new Y(O.INVALID_ARGUMENT,a+t+u)}function _L(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ML{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Bg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Fj extends ML{data(){return super.data()}}function Bg(t,e){return typeof e=="string"?Fg(t,e):e instanceof Md?e._internalPath:e._delegate._internalPath}/**
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
 */function IL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qg{}class Bj extends Qg{}function Qj(t,e,...n){let r=[];e instanceof Qg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Gg).length,a=s.filter(u=>u instanceof Cd).length;if(o>1||o>0&&a>0)throw new Y(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Cd extends Bj{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Cd(e,n,r)}_apply(e){const n=this._parse(e);return LL(e._query,n),new ds(e.firestore,e.converter,S1(e._query,n))}_parse(e){const n=xg(e.firestore);return function(s,o,a,u,l,c,h){let p;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new Y(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Zv(h,c);const v=[];for(const I of h)v.push($v(u,s,I));p={arrayValue:{values:v}}}else p=$v(u,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Zv(h,c),p=Uj(a,o,h,c==="in"||c==="not-in");return Ze.create(l,c,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Gj(t,e,n){const r=e,i=Bg("where",t);return Cd._create(i,r,n)}class Gg extends Qg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Bn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)LL(o,u),o=S1(o,u)}(e._query,n),new ds(e.firestore,e.converter,S1(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function $v(t,e,n){if(typeof(n=ze(n))=="string"){if(n==="")throw new Y(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!II(e)&&n.indexOf("/")!==-1)throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!W.isDocumentKey(r))throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yv(t,new W(r))}if(n instanceof Nt)return yv(t,n._key);throw new Y(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wd(n)}.`)}function Zv(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function LL(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Yj{convertValue(e,n="none"){switch(Xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ls(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Pg(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Tf(e));default:return null}}convertTimestamp(e){const n=hi(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Le(HI(r));const i=new bf(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||br(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Hj(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class xa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class CL extends ML{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Bg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Sl extends CL{data(e={}){return super.data(e)}}class EL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new xa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Sl(this._firestore,this._userDataWriter,r.key,r,new xa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Sl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new xa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Sl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new xa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Wj(a.type),doc:u,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Wj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}/**
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
 */function Yg(t){t=Mn(t,Nt);const e=Mn(t.firestore,es);return bj(_d(e),t._key).then(n=>SL(e,t,n))}class Hg extends Yj{constructor(e){super(),this.firestore=e}convertBytes(e){return new To(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nt(this.firestore,null,n)}}function Jj(t){t=Mn(t,ds);const e=Mn(t.firestore,es),n=_d(e),r=new Hg(e);return IL(t._query),Sj(n,t._query).then(i=>new EL(e,r,t,i))}function z1(t,e,n){t=Mn(t,Nt);const r=Mn(t.firestore,es),i=Hj(t.converter,e);return bL(r,[xj(xg(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,er.none())])}function bo(t,e,n,...r){t=Mn(t,Nt);const i=Mn(t.firestore,es),s=xg(i);let o;return o=typeof(e=ze(e))=="string"||e instanceof Md?zj(s,"updateDoc",t._key,e,n,r):Oj(s,"updateDoc",t._key,e),bL(i,[o.toMutation(t._key,er.exists(!0))])}function TL(t,...e){var n,r,i;t=ze(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Jv(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Jv(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof Nt)l=Mn(t.firestore,es),c=ud(t._key.path),u={next:h=>{e[o]&&e[o](SL(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Mn(t,ds);l=Mn(h.firestore,es),c=h._query;const p=new Hg(l);u={next:v=>{e[o]&&e[o](new EL(l,p,h,v))},error:e[o+1],complete:e[o+2]},IL(t._query)}return function(p,v,I,S){const N=new Rg(S),M=new jg(v,N,I);return p.asyncQueue.enqueueAndForget(async()=>kg(await wc(p),M)),()=>{N.$a(),p.asyncQueue.enqueueAndForget(async()=>Ng(await wc(p),M))}}(_d(l),c,a,u)}function bL(t,e){return function(r,i){const s=new wr;return r.asyncQueue.enqueueAndForget(async()=>pj(await Tj(r),i,s)),s.promise}(_d(t),e)}function SL(t,e,n){const r=n.docs.get(e._key),i=new Hg(t);return new CL(t,i,e._key,r,new xa(n.hasPendingWrites,n.fromCache),e.converter)}function $j(){return new Og("serverTimestamp")}function _c(...t){return new zg("arrayUnion",t)}function Zj(...t){return new Ug("arrayRemove",t)}(function(e,n=!0){(function(i){Uo=i})(_i),ci(new Tr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new es(new $k(r.getProvider("auth-internal")),new Xk(r.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new Y(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bf(l.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),_n(hv,"4.6.2",e),_n(hv,"4.6.2","esm2017")})();var qj="firebase",Kj="10.12.0";/**
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
 */_n(qj,Kj,"app");function Wg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kL(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xj=kL,NL=new Jf("auth","Firebase",kL());/**
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
 */const Mc=new od("@firebase/auth");function eD(t,...e){Mc.logLevel<=ie.WARN&&Mc.warn(`Auth (${_i}): ${t}`,...e)}function kl(t,...e){Mc.logLevel<=ie.ERROR&&Mc.error(`Auth (${_i}): ${t}`,...e)}/**
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
 */function Qn(t,...e){throw Jg(t,...e)}function nr(t,...e){return Jg(t,...e)}function AL(t,e,n){const r=Object.assign(Object.assign({},Xj()),{[e]:n});return new Jf("auth","Firebase",r).create(e,{appName:t.name})}function vr(t){return AL(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NL.create(t,...e)}function Z(t,e,...n){if(!t)throw Jg(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kl(e),new Error(e)}function kr(t,e){t||hr(e)}/**
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
 */function U1(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tD(){return qv()==="http:"||qv()==="https:"}function qv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tD()||E6()||"connection"in navigator)?navigator.onLine:!0}function rD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class nu{constructor(e,n){this.shortDelay=e,this.longDelay=n,kr(n>e,"Short delay should be less than long delay!"),this.isMobile=og()||ZM()}get(){return nD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $g(t,e){kr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jL{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sD=new nu(3e4,6e4);function Ii(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Li(t,e,n,r,i={}){return DL(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),jL.fetch()(RL(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function DL(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},iD),e);try{const i=new aD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw nl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw nl(t,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw AL(t,c,l);Qn(t,c)}}catch(i){if(i instanceof sr)throw i;Qn(t,"network-request-failed",{message:String(i)})}}async function ru(t,e,n,r,i={}){const s=await Li(t,e,n,r,i);return"mfaPendingCredential"in s&&Qn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function RL(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$g(t.config,i):`${t.config.apiScheme}://${i}`}function oD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nr(this.auth,"network-request-failed")),sD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nr(t,e,r);return i.customData._tokenResponse=n,i}function Kv(t){return t!==void 0&&t.enterprise!==void 0}class fD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function uD(t,e){return Li(t,"GET","/v2/recaptchaConfig",Ii(t,e))}/**
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
 */async function lD(t,e){return Li(t,"POST","/v1/accounts:delete",e)}async function PL(t,e){return Li(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cD(t,e=!1){const n=ze(t),r=await n.getIdToken(e),i=Zg(r);Z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qa(i0(i.auth_time)),issuedAtTime:qa(i0(i.iat)),expirationTime:qa(i0(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function i0(t){return Number(t)*1e3}function Zg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kl("JWT malformed, contained fewer than 3 sections"),null;try{const i=uc(n);return i?JSON.parse(i):(kl("Failed to decode base64 JWT payload"),null)}catch(i){return kl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xv(t){const e=Zg(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Nf(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sr&&dD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class hD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class V1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qa(this.lastLoginAt),this.creationTime=qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ic(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Nf(t,PL(n,{idToken:r}));Z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?xL(s.providerUserInfo):[],a=gD(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new V1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function pD(t){const e=ze(t);await Ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xL(t){return t.map(e=>{var{providerId:n}=e,r=Wg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function mD(t,e){const n=await DL(t,{},async()=>{const r=zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=RL(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jL.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yD(t,e){return Li(t,"POST","/v2/accounts:revokeToken",Ii(t,e))}/**
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
 */class to{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Xv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new to;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new to,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
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
 */function xr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new hD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new V1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Nf(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cD(this,e)}reload(){return pD(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ic(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(vr(this.auth));const e=await this.getIdToken();return await Nf(this,lD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,M=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:A,isAnonymous:z,providerData:x,stsTokenManager:C}=n;Z(_&&C,e,"internal-error");const m=to.fromJSON(this.name,C);Z(typeof _=="string",e,"internal-error"),xr(h,e.name),xr(p,e.name),Z(typeof A=="boolean",e,"internal-error"),Z(typeof z=="boolean",e,"internal-error"),xr(v,e.name),xr(I,e.name),xr(S,e.name),xr(N,e.name),xr(M,e.name),xr(y,e.name);const L=new pr({uid:_,auth:e,email:p,emailVerified:A,displayName:h,isAnonymous:z,photoURL:I,phoneNumber:v,tenantId:S,stsTokenManager:m,createdAt:M,lastLoginAt:y});return x&&Array.isArray(x)&&(L.providerData=x.map(E=>Object.assign({},E))),N&&(L._redirectEventId=N),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new to;i.updateFromServerResponse(n);const s=new pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ic(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?xL(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new to;a.updateFromIdToken(r);const u=new pr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new V1(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,l),u}}/**
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
 */const e2=new Map;function gr(t){kr(t instanceof Function,"Expected a class definition");let e=e2.get(t);return e?(kr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,e2.set(t,e),e)}/**
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
 */class OL{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OL.type="NONE";const t2=OL;/**
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
 */function Nl(t,e,n){return`firebase:${t}:${e}:${n}`}class no{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new no(gr(t2),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||gr(t2);const o=Nl(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=pr._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new no(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new no(s,e,r))}}/**
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
 */function n2(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VL(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zL(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BL(e))return"Blackberry";if(QL(e))return"Webos";if(qg(e))return"Safari";if((e.includes("chrome/")||UL(e))&&!e.includes("edge/"))return"Chrome";if(FL(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zL(t=yt()){return/firefox\//i.test(t)}function qg(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UL(t=yt()){return/crios\//i.test(t)}function VL(t=yt()){return/iemobile/i.test(t)}function FL(t=yt()){return/android/i.test(t)}function BL(t=yt()){return/blackberry/i.test(t)}function QL(t=yt()){return/webos/i.test(t)}function Ed(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wD(t=yt()){var e;return Ed(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vD(){return T6()&&document.documentMode===10}function GL(t=yt()){return Ed(t)||FL(t)||QL(t)||BL(t)||/windows phone/i.test(t)||VL(t)}function _D(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function YL(t,e=[]){let n;switch(t){case"Browser":n=n2(yt());break;case"Worker":n=`${n2(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_i}/${r}`}/**
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
 */class MD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ID(t,e={}){return Li(t,"GET","/v2/passwordPolicy",Ii(t,e))}/**
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
 */const LD=6;class CD{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:LD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class ED{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new r2(this),this.idTokenSubscription=new r2(this),this.beforeStateQueue=new MD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NL,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await PL(this,{idToken:e}),r=await pr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(vr(this));const n=e?ze(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ID(this),n=new CD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Jf("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gr(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[gr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=YL(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ps(t){return ze(t)}class r2{constructor(e){this.auth=e,this.observer=null,this.addObserver=x6(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Td={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TD(t){Td=t}function HL(t){return Td.loadJS(t)}function bD(){return Td.recaptchaEnterpriseScript}function SD(){return Td.gapiScript}function kD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ND="recaptcha-enterprise",AD="NO_RECAPTCHA";class jD{constructor(e){this.type=ND,this.auth=ps(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{uD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new fD(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Kv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(AD)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Kv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=bD();u.length!==0&&(u+=a),HL(u).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function i2(t,e,n,r=!1){const i=new jD(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function F1(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await i2(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await i2(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function DD(t,e){const n=ad(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yo(s,e??{}))return i;Qn(i,"already-initialized")}return n.initialize({options:e})}function RD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PD(t,e,n){const r=ps(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=WL(e),{host:o,port:a}=xD(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),OD()}function WL(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xD(t){const e=WL(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:s2(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:s2(o)}}}function s2(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function OD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function zD(t,e){return Li(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function UD(t,e){return ru(t,"POST","/v1/accounts:signInWithPassword",Ii(t,e))}/**
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
 */async function VD(t,e){return ru(t,"POST","/v1/accounts:signInWithEmailLink",Ii(t,e))}async function FD(t,e){return ru(t,"POST","/v1/accounts:signInWithEmailLink",Ii(t,e))}/**
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
 */class Af extends Kg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Af(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Af(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return F1(e,n,"signInWithPassword",UD);case"emailLink":return VD(e,{email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return F1(e,r,"signUpPassword",zD);case"emailLink":return FD(e,{idToken:n,email:this._email,oobCode:this._password});default:Qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ro(t,e){return ru(t,"POST","/v1/accounts:signInWithIdp",Ii(t,e))}/**
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
 */const BD="http://localhost";class ts extends Kg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:BD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zo(n)}return e}}/**
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
 */function QD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GD(t){const e=Aa(ja(t)).link,n=e?Aa(ja(e)).deep_link_id:null,r=Aa(ja(t)).deep_link_id;return(r?Aa(ja(r)).link:null)||r||n||e||t}class Xg{constructor(e){var n,r,i,s,o,a;const u=Aa(ja(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=QD((i=u.mode)!==null&&i!==void 0?i:null);Z(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GD(e);try{return new Xg(n)}catch{return null}}}/**
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
 */class Qo{constructor(){this.providerId=Qo.PROVIDER_ID}static credential(e,n){return Af._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xg.parseLink(n);return Z(r,"argument-error"),Af._fromEmailAndCode(e,r.code,r.tenantId)}}Qo.PROVIDER_ID="password";Qo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class JL{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class iu extends JL{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fr extends iu{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
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
 */class Br extends iu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.GOOGLE_SIGN_IN_METHOD="google.com";Br.PROVIDER_ID="google.com";/**
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
 */class Qr extends iu{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Gr extends iu{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gr.credential(n,r)}catch{return null}}}Gr.TWITTER_SIGN_IN_METHOD="twitter.com";Gr.PROVIDER_ID="twitter.com";/**
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
 */async function YD(t,e){return ru(t,"POST","/v1/accounts:signUp",Ii(t,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pr._fromIdTokenResponse(e,r,i),o=o2(r);return new ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=o2(r);return new ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function o2(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Lc extends sr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lc(e,n,r,i)}}function $L(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lc._fromErrorAndOperation(t,s,e,r):s})}async function HD(t,e,n=!1){const r=await Nf(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
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
 */async function WD(t,e,n=!1){const{auth:r}=t;if(Jn(r.app))return Promise.reject(vr(r));const i="reauthenticate";try{const s=await Nf(t,$L(r,i,e,t),n);Z(s.idToken,r,"internal-error");const o=Zg(s.idToken);Z(o,r,"internal-error");const{sub:a}=o;return Z(t.uid===a,r,"user-mismatch"),ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qn(r,"user-mismatch"),s}}/**
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
 */async function ZL(t,e,n=!1){if(Jn(t.app))return Promise.reject(vr(t));const r="signIn",i=await $L(t,r,e),s=await ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function JD(t,e){return ZL(ps(t),e)}/**
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
 */async function qL(t){const e=ps(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $D(t,e,n){if(Jn(t.app))return Promise.reject(vr(t));const r=ps(t),o=await F1(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YD).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&qL(t),u}),a=await ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ZD(t,e,n){return Jn(t.app)?Promise.reject(vr(t)):JD(ze(t),Qo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qL(t),r})}function qD(t,e,n,r){return ze(t).onIdTokenChanged(e,n,r)}function KD(t,e,n){return ze(t).beforeAuthStateChanged(e,n)}function XD(t,e,n,r){return ze(t).onAuthStateChanged(e,n,r)}const Cc="__sak";/**
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
 */class KL{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cc,"1"),this.storage.removeItem(Cc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function e9(){const t=yt();return qg(t)||Ed(t)}const t9=1e3,n9=10;class XL extends KL{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=e9()&&_D(),this.fallbackToPolling=GL(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);vD()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,n9):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},t9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}XL.type="LOCAL";const r9=XL;/**
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
 */class eC extends KL{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eC.type="SESSION";const tC=eC;/**
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
 */function i9(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class bd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await i9(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bd.receivers=[];/**
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
 */function em(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class s9{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=em("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rr(){return window}function o9(t){rr().location.href=t}/**
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
 */function nC(){return typeof rr().WorkerGlobalScope<"u"&&typeof rr().importScripts=="function"}async function a9(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f9(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function u9(){return nC()?self:null}/**
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
 */const rC="firebaseLocalStorageDb",l9=1,Ec="firebaseLocalStorage",iC="fbase_key";class su{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sd(t,e){return t.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function c9(){const t=indexedDB.deleteDatabase(rC);return new su(t).toPromise()}function B1(){const t=indexedDB.open(rC,l9);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ec,{keyPath:iC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ec)?e(r):(r.close(),await c9(),e(await B1()))})})}async function a2(t,e,n){const r=Sd(t,!0).put({[iC]:e,value:n});return new su(r).toPromise()}async function d9(t,e){const n=Sd(t,!1).get(e),r=await new su(n).toPromise();return r===void 0?null:r.value}function f2(t,e){const n=Sd(t,!0).delete(e);return new su(n).toPromise()}const h9=800,p9=3;class sC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await B1(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>p9)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bd._getInstance(u9()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await a9(),!this.activeServiceWorker)return;this.sender=new s9(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f9()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await B1();return await a2(e,Cc,"1"),await f2(e,Cc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>a2(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>d9(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>f2(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Sd(i,!1).getAll();return new su(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h9)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sC.type="LOCAL";const g9=sC;new nu(3e4,6e4);/**
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
 */function m9(t,e){return e?gr(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class tm extends Kg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function y9(t){return ZL(t.auth,new tm(t),t.bypassAuthState)}function w9(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),WD(n,new tm(t),t.bypassAuthState)}async function v9(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),HD(n,new tm(t),t.bypassAuthState)}/**
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
 */class oC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return y9;case"linkViaPopup":case"linkViaRedirect":return v9;case"reauthViaPopup":case"reauthViaRedirect":return w9;default:Qn(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _9=new nu(2e3,1e4);class Ys extends oC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ys.currentPopupAction&&Ys.currentPopupAction.cancel(),Ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=em();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_9.get())};e()}}Ys.currentPopupAction=null;/**
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
 */const M9="pendingRedirect",Al=new Map;class I9 extends oC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Al.get(this.auth._key());if(!e){try{const r=await L9(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Al.set(this.auth._key(),e)}return this.bypassAuthState||Al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function L9(t,e){const n=T9(e),r=E9(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function C9(t,e){Al.set(t._key(),e)}function E9(t){return gr(t._redirectPersistence)}function T9(t){return Nl(M9,t.config.apiKey,t.name)}async function b9(t,e,n=!1){if(Jn(t.app))return Promise.reject(vr(t));const r=ps(t),i=m9(r,e),o=await new I9(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const S9=10*60*1e3;class k9{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!N9(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S9&&this.cachedEventUids.clear(),this.cachedEventUids.has(u2(e))}saveEventToCache(e){this.cachedEventUids.add(u2(e)),this.lastProcessedEventTime=Date.now()}}function u2(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function N9(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aC(t);default:return!1}}/**
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
 */async function A9(t,e={}){return Li(t,"GET","/v1/projects",e)}/**
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
 */const j9=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,D9=/^https?/;async function R9(t){if(t.config.emulator)return;const{authorizedDomains:e}=await A9(t);for(const n of e)try{if(P9(n))return}catch{}Qn(t,"unauthorized-domain")}function P9(t){const e=U1(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!D9.test(n))return!1;if(j9.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const x9=new nu(3e4,6e4);function l2(){const t=rr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function O9(t){return new Promise((e,n)=>{var r,i,s;function o(){l2(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{l2(),n(nr(t,"network-request-failed"))},timeout:x9.get()})}if(!((i=(r=rr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rr().gapi)===null||s===void 0)&&s.load)o();else{const a=kD("iframefcb");return rr()[a]=()=>{gapi.load?o():n(nr(t,"network-request-failed"))},HL(`${SD()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw jl=null,e})}let jl=null;function z9(t){return jl=jl||O9(t),jl}/**
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
 */const U9=new nu(5e3,15e3),V9="__/auth/iframe",F9="emulator/auth/iframe",B9={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q9=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G9(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$g(e,F9):`https://${t.config.authDomain}/${V9}`,r={apiKey:e.apiKey,appName:t.name,v:_i},i=Q9.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zo(r).slice(1)}`}async function Y9(t){const e=await z9(t),n=rr().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:G9(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:B9,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nr(t,"network-request-failed"),a=rr().setTimeout(()=>{s(o)},U9.get());function u(){rr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const H9={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},W9=500,J9=600,$9="_blank",Z9="http://localhost";class c2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function q9(t,e,n,r=W9,i=J9){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},H9),{width:r.toString(),height:i.toString(),top:s,left:o}),l=yt().toLowerCase();n&&(a=UL(l)?$9:n),zL(l)&&(e=e||Z9,u.scrollbars="yes");const c=Object.entries(u).reduce((p,[v,I])=>`${p}${v}=${I},`,"");if(wD(l)&&a!=="_self")return K9(e||"",a),new c2(null);const h=window.open(e||"",a,c);Z(h,t,"popup-blocked");try{h.focus()}catch{}return new c2(h)}function K9(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const X9="__/auth/handler",eR="emulator/auth/handler",tR=encodeURIComponent("fac");async function d2(t,e,n,r,i,s){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_i,eventId:i};if(e instanceof JL){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",m1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries({}))o[c]=h}if(e instanceof iu){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const u=await t._getAppCheckToken(),l=u?`#${tR}=${encodeURIComponent(u)}`:"";return`${nR(t)}?${zo(a).slice(1)}${l}`}function nR({config:t}){return t.emulator?$g(t,eR):`https://${t.authDomain}/${X9}`}/**
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
 */const s0="webStorageSupport";class rR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tC,this._completeRedirectFn=b9,this._overrideRedirectResult=C9}async _openPopup(e,n,r,i){var s;kr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await d2(e,n,r,U1(),i);return q9(e,o,em())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await d2(e,n,r,U1(),i);return o9(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Y9(e),r=new k9(e);return n.register("authEvent",i=>(Z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(s0,{type:s0},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[s0];o!==void 0&&n(!!o),Qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=R9(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GL()||qg()||Ed()}}const iR=rR;var h2="@firebase/auth",p2="1.7.3";/**
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
 */class sR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aR(t){ci(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:YL(t)},l=new ED(r,i,s,u);return RD(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ci(new Tr("auth-internal",e=>{const n=ps(e.getProvider("auth").getImmediate());return(r=>new sR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(h2,p2,oR(t)),_n(h2,p2,"esm2017")}/**
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
 */const fR=5*60,uR=JM("authIdTokenMaxAge")||fR;let g2=null;const lR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uR)return;const i=n==null?void 0:n.token;g2!==i&&(g2=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cR(t=fg()){const e=ad(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DD(t,{popupRedirectResolver:iR,persistence:[g9,r9,tC]}),r=JM("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=lR(s.toString());KD(n,o,()=>o(n.currentUser)),qD(n,a=>o(a))}}const i=YM("auth");return i&&PD(n,`http://${i}`),n}function dR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aR("Browser");/**
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
 */const fC="firebasestorage.googleapis.com",uC="storageBucket",hR=2*60*1e3,pR=10*60*1e3,gR=1e3;/**
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
 */class Ue extends sr{constructor(e,n,r=0){super(o0(e),`Firebase Storage: ${n} (${o0(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return o0(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ne;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ne||(Ne={}));function o0(t){return"storage/"+t}function nm(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Ne.UNKNOWN,t)}function mR(t){return new Ue(Ne.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function yR(t){return new Ue(Ne.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function wR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Ne.UNAUTHENTICATED,t)}function vR(){return new Ue(Ne.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _R(t){return new Ue(Ne.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function lC(){return new Ue(Ne.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cC(){return new Ue(Ne.CANCELED,"User canceled the upload/download.")}function MR(t){return new Ue(Ne.INVALID_URL,"Invalid URL '"+t+"'.")}function IR(t){return new Ue(Ne.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function LR(){return new Ue(Ne.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+uC+"' property when initializing the app?")}function dC(){return new Ue(Ne.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CR(){return new Ue(Ne.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function ER(){return new Ue(Ne.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TR(t){return new Ue(Ne.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Q1(t){return new Ue(Ne.INVALID_ARGUMENT,t)}function hC(){return new Ue(Ne.APP_DELETED,"The Firebase app was deleted.")}function bR(t){return new Ue(Ne.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ka(t,e){return new Ue(Ne.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function _a(t){throw new Ue(Ne.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw IR(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(A){A.path.charAt(A.path.length-1)==="/"&&(A.path_=A.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function l(A){A.path_=decodeURIComponent(A.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",v=new RegExp(`^https?://${h}/${c}/b/${i}/o${p}`,"i"),I={bucket:1,path:3},S=n===fC?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",M=new RegExp(`^https?://${S}/${i}/${N}`,"i"),_=[{regex:a,indices:u,postModify:s},{regex:v,indices:I,postModify:l},{regex:M,indices:{bucket:1,path:2},postModify:l}];for(let A=0;A<_.length;A++){const z=_[A],x=z.regex.exec(e);if(x){const C=x[z.indices.bucket];let m=x[z.indices.path];m||(m=""),r=new rn(C,m),z.postModify(r);break}}if(r==null)throw MR(e);return r}}class SR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kR(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let l=!1;function c(...N){l||(l=!0,e.apply(null,N))}function h(N){i=setTimeout(()=>{i=null,t(v,u())},N)}function p(){s&&clearTimeout(s)}function v(N,...M){if(l){p();return}if(N){p(),c.call(null,N,...M);return}if(u()||o){p(),c.call(null,N,...M);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,h(_)}let I=!1;function S(N){I||(I=!0,p(),!l&&(i!==null?(N||(a=2),clearTimeout(i),h(0)):N||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,S(!0)},n),S}function NR(t){t(!1)}/**
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
 */function AR(t){return t!==void 0}function jR(t){return typeof t=="function"}function DR(t){return typeof t=="object"&&!Array.isArray(t)}function kd(t){return typeof t=="string"||t instanceof String}function m2(t){return rm()&&t instanceof Blob}function rm(){return typeof Blob<"u"}function y2(t,e,n,r){if(r<e)throw Q1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Q1(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ou(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function pC(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Qi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qi||(Qi={}));/**
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
 */function gC(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class RR{constructor(e,n,r,i,s,o,a,u,l,c,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,I)=>{this.resolve_=v,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new rl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Qi.NO_ERROR,u=s.getStatus();if(!a||gC(u,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Qi.ABORT;r(!1,new rl(!1,null,c));return}const l=this.successCodes_.indexOf(u)!==-1;r(!0,new rl(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());AR(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=nm();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?hC():cC();o(u)}else{const u=lC();o(u)}};this.canceled_?n(!1,new rl(!1,null,!0)):this.backoffId_=kR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function PR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function UR(t,e,n,r,i,s,o=!0){const a=pC(t.urlParams),u=t.url+a,l=Object.assign({},t.headers);return OR(l,e),PR(l,n),xR(l,s),zR(l,r),new RR(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function VR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FR(...t){const e=VR();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(rm())return new Blob(t);throw new Ue(Ne.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function BR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function QR(t){if(typeof atob>"u")throw TR("base-64");return atob(t)}/**
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
 */const $n={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class a0{constructor(e,n){this.data=e,this.contentType=n||null}}function GR(t,e){switch(t){case $n.RAW:return new a0(mC(e));case $n.BASE64:case $n.BASE64URL:return new a0(yC(t,e));case $n.DATA_URL:return new a0(HR(e),WR(e))}throw nm()}function mC(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function YR(t){let e;try{e=decodeURIComponent(t)}catch{throw Ka($n.DATA_URL,"Malformed data URL.")}return mC(e)}function yC(t,e){switch(t){case $n.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ka(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case $n.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ka(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=QR(e)}catch(i){throw i.message.includes("polyfill")?i:Ka(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class wC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ka($n.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=JR(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function HR(t){const e=new wC(t);return e.base64?yC($n.BASE64,e.rest):YR(e.rest)}function WR(t){return new wC(t).contentType}function JR(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Yr{constructor(e,n){let r=0,i="";m2(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(m2(this.data_)){const r=this.data_,i=BR(r,e,n);return i===null?null:new Yr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Yr(r,!0)}}static getBlob(...e){if(rm()){const n=e.map(r=>r instanceof Yr?r.data_:r);return new Yr(FR.apply(null,n))}else{const n=e.map(o=>kd(o)?GR($n.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Yr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function vC(t){let e;try{e=JSON.parse(t)}catch{return null}return DR(e)?e:null}/**
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
 */function $R(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ZR(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function _C(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function qR(t,e){return e}class Ot{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||qR}}let il=null;function KR(t){return!kd(t)||t.length<2?t:_C(t)}function MC(){if(il)return il;const t=[];t.push(new Ot("bucket")),t.push(new Ot("generation")),t.push(new Ot("metageneration")),t.push(new Ot("name","fullPath",!0));function e(s,o){return KR(o)}const n=new Ot("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ot("size");return i.xform=r,t.push(i),t.push(new Ot("timeCreated")),t.push(new Ot("updated")),t.push(new Ot("md5Hash",null,!0)),t.push(new Ot("cacheControl",null,!0)),t.push(new Ot("contentDisposition",null,!0)),t.push(new Ot("contentEncoding",null,!0)),t.push(new Ot("contentLanguage",null,!0)),t.push(new Ot("contentType",null,!0)),t.push(new Ot("metadata","customMetadata",!0)),il=t,il}function XR(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function eP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return XR(r,t),r}function IC(t,e,n){const r=vC(e);return r===null?null:eP(t,r,n)}function tP(t,e,n,r){const i=vC(e);if(i===null||!kd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,p="/b/"+o(c)+"/o/"+o(h),v=ou(p,n,r),I=pC({alt:"media",token:l});return v+I})[0]}function LC(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Go{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function _r(t){if(!t)throw nm()}function im(t,e){function n(r,i){const s=IC(t,i,e);return _r(s!==null),s}return n}function nP(t,e){function n(r,i){const s=IC(t,i,e);return _r(s!==null),tP(s,i,t.host,t._protocol)}return n}function au(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=vR():i=wR():n.getStatus()===402?i=yR(t.bucket):n.getStatus()===403?i=_R(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function CC(t){const e=au(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=mR(t.path)),s.serverResponse=i.serverResponse,s}return n}function rP(t,e,n){const r=e.fullServerUrl(),i=ou(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Go(i,s,im(t,n),o);return a.errorHandler=CC(e),a}function iP(t,e,n){const r=e.fullServerUrl(),i=ou(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Go(i,s,nP(t,n),o);return a.errorHandler=CC(e),a}function sP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function EC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=sP(null,e)),r}function oP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let A=0;A<2;A++)_=_+Math.random().toString().slice(2);return _}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const l=EC(e,r,i),c=LC(l,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+u+`\r
Content-Type: `+l.contentType+`\r
\r
`,p=`\r
--`+u+"--",v=Yr.getBlob(h,r,p);if(v===null)throw dC();const I={name:l.fullPath},S=ou(s,t.host,t._protocol),N="POST",M=t.maxUploadRetryTime,y=new Go(S,N,im(t,n),M);return y.urlParams=I,y.headers=o,y.body=v.uploadData(),y.errorHandler=au(e),y}class Tc{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function sm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{_r(!1)}return _r(!!n&&(e||["active"]).indexOf(n)!==-1),n}function aP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=EC(e,r,i),a={name:o.fullPath},u=ou(s,t.host,t._protocol),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=LC(o,n),p=t.maxUploadRetryTime;function v(S){sm(S);let N;try{N=S.getResponseHeader("X-Goog-Upload-URL")}catch{_r(!1)}return _r(kd(N)),N}const I=new Go(u,l,v,p);return I.urlParams=a,I.headers=c,I.body=h,I.errorHandler=au(e),I}function fP(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(l){const c=sm(l,["active","final"]);let h=null;try{h=l.getResponseHeader("X-Goog-Upload-Size-Received")}catch{_r(!1)}h||_r(!1);const p=Number(h);return _r(!isNaN(p)),new Tc(p,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,u=new Go(n,o,s,a);return u.headers=i,u.errorHandler=au(e),u}const w2=256*1024;function uP(t,e,n,r,i,s,o,a){const u=new Tc(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw CR();const l=u.total-u.current;let c=l;i>0&&(c=Math.min(c,i));const h=u.current,p=h+c;let v="";c===0?v="finalize":l===c?v="upload, finalize":v="upload";const I={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${u.current}`},S=r.slice(h,p);if(S===null)throw dC();function N(A,z){const x=sm(A,["active","final"]),C=u.current+c,m=r.size();let L;return x==="final"?L=im(e,s)(A,z):L=null,new Tc(C,m,x==="final",L)}const M="POST",y=e.maxUploadRetryTime,_=new Go(n,M,N,y);return _.headers=I,_.body=S.uploadData(),_.progressCallback=a||null,_.errorHandler=au(t),_}const Yt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function f0(t){switch(t){case"running":case"pausing":case"canceling":return Yt.RUNNING;case"paused":return Yt.PAUSED;case"success":return Yt.SUCCESS;case"canceled":return Yt.CANCELED;case"error":return Yt.ERROR;default:return Yt.ERROR}}/**
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
 */class lP{constructor(e,n,r){if(jR(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function bs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class cP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw _a("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw _a("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw _a("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw _a("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw _a("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dP extends cP{initXhr(){this.xhr_.responseType="text"}}function js(){return new dP}/**
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
 */class hP{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=MC(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ne.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(gC(i.status,[]))if(s)i=lC();else{this.sleepTime=Math.max(this.sleepTime*2,gR),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ne.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=aP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,js,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=fP(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,js,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=w2*this._chunkMultiplier,n=new Tc(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=uP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const a=this._ref.storage._makeRequest(o,js,i,s,!1);this._request=a,a.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){w2*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=rP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,js,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=oP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,js,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=cC(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=f0(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new lP(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(f0(this._state)){case Yt.SUCCESS:bs(this._resolve.bind(null,this.snapshot))();break;case Yt.CANCELED:case Yt.ERROR:const n=this._reject;bs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(f0(this._state)){case Yt.RUNNING:case Yt.PAUSED:e.next&&bs(e.next.bind(e,this.snapshot))();break;case Yt.SUCCESS:e.complete&&bs(e.complete.bind(e))();break;case Yt.CANCELED:case Yt.ERROR:e.error&&bs(e.error.bind(e,this._error))();break;default:e.error&&bs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class rs{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new rs(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _C(this._location.path)}get storage(){return this._service}get parent(){const e=$R(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new rs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bR(e)}}function pP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new hP(t,new Yr(e),n)}function gP(t){t._throwIfRoot("getDownloadURL");const e=iP(t.storage,t._location,MC());return t.storage.makeRequestWithTokens(e,js).then(n=>{if(n===null)throw ER();return n})}function mP(t,e){const n=ZR(t._location.path,e),r=new rn(t._location.bucket,n);return new rs(t.storage,r)}/**
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
 */function yP(t){return/^[A-Za-z]+:\/\//.test(t)}function wP(t,e){return new rs(t,e)}function TC(t,e){if(t instanceof om){const n=t;if(n._bucket==null)throw LR();const r=new rs(n,n._bucket);return e!=null?TC(r,e):r}else return e!==void 0?mP(t,e):t}function vP(t,e){if(e&&yP(e)){if(t instanceof om)return wP(t,e);throw Q1("To use ref(service, url), the first argument must be a Storage instance.")}else return TC(t,e)}function v2(t,e){const n=e==null?void 0:e[uC];return n==null?null:rn.makeFromBucketSpec(n,t)}function _P(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:$M(i,t.app.options.projectId))}class om{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=fC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hR,this._maxUploadRetryTime=pR,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=v2(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=v2(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){y2("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){y2("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new rs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new SR(hC());{const o=UR(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const _2="@firebase/storage",M2="0.12.5";/**
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
 */const bC="storage";function MP(t,e,n){return t=ze(t),pP(t,e,n)}function IP(t){return t=ze(t),gP(t)}function LP(t,e){return t=ze(t),vP(t,e)}function CP(t=fg(),e){t=ze(t);const r=ad(t,bC).getImmediate({identifier:e}),i=HM("storage");return i&&EP(r,...i),r}function EP(t,e,n,r={}){_P(t,e,n,r)}function TP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new om(n,r,i,e,_i)}function bP(){ci(new Tr(bC,TP,"PUBLIC").setMultipleInstances(!0)),_n(_2,M2,""),_n(_2,M2,"esm2017")}bP();const SP={apiKey:"AIzaSyCxXohvi2Zb-YNoqPUQD3nEEzfnZqpXQ_g",authDomain:"yourchatapp-babc6.firebaseapp.com",projectId:"yourchatapp-babc6",storageBucket:"yourchatapp-babc6.appspot.com",messagingSenderId:"930612575204",appId:"1:930612575204:web:7f1ad2f0ccc750addba5f1"};tI(SP);const bc=cR(),Ln=jj(),kP=CP();var NP={VITE_API_KEY:"AIzaSyCxXohvi2Zb-YNoqPUQD3nEEzfnZqpXQ_g",BASE_URL:"/yourChatApp/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const I2=t=>{let e;const n=new Set,r=(c,h)=>{const p=typeof c=="function"?c(e):c;if(!Object.is(p,e)){const v=e;e=h??(typeof p!="object"||p===null)?p:Object.assign({},e,p),n.forEach(I=>I(e,v))}},i=()=>e,u={setState:r,getState:i,getInitialState:()=>l,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(NP?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},l=e=t(r,i,u);return u},AP=t=>t?I2(t):I2;var SC={exports:{}},kC={},NC={exports:{}},AC={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var So=T;function jP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var DP=typeof Object.is=="function"?Object.is:jP,RP=So.useState,PP=So.useEffect,xP=So.useLayoutEffect,OP=So.useDebugValue;function zP(t,e){var n=e(),r=RP({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return xP(function(){i.value=n,i.getSnapshot=e,u0(i)&&s({inst:i})},[t,n,e]),PP(function(){return u0(i)&&s({inst:i}),t(function(){u0(i)&&s({inst:i})})},[t]),OP(n),n}function u0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!DP(t,n)}catch{return!0}}function UP(t,e){return e()}var VP=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?UP:zP;AC.useSyncExternalStore=So.useSyncExternalStore!==void 0?So.useSyncExternalStore:VP;NC.exports=AC;var FP=NC.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nd=T,BP=FP;function QP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var GP=typeof Object.is=="function"?Object.is:QP,YP=BP.useSyncExternalStore,HP=Nd.useRef,WP=Nd.useEffect,JP=Nd.useMemo,$P=Nd.useDebugValue;kC.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=HP(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=JP(function(){function u(v){if(!l){if(l=!0,c=v,v=r(v),i!==void 0&&o.hasValue){var I=o.value;if(i(I,v))return h=I}return h=v}if(I=h,GP(c,v))return I;var S=r(v);return i!==void 0&&i(I,S)?I:(c=v,h=S)}var l=!1,c,h,p=n===void 0?null:n;return[function(){return u(e())},p===null?void 0:function(){return u(p())}]},[e,n,r,i]);var a=YP(t,s[0],s[1]);return WP(function(){o.hasValue=!0,o.value=a},[a]),$P(a),a};SC.exports=kC;var ZP=SC.exports;const qP=S4(ZP);var jC={VITE_API_KEY:"AIzaSyCxXohvi2Zb-YNoqPUQD3nEEzfnZqpXQ_g",BASE_URL:"/yourChatApp/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{useDebugValue:KP}=le,{useSyncExternalStoreWithSelector:XP}=qP;let L2=!1;const ex=t=>t;function tx(t,e=ex,n){(jC?"production":void 0)!=="production"&&n&&!L2&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),L2=!0);const r=XP(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return KP(r),r}const C2=t=>{(jC?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?AP(t):t,n=(r,i)=>tx(e,r,i);return Object.assign(n,e),n},DC=t=>t?C2(t):C2,gs=DC(t=>({currentUser:null,isLoading:!0,fetchUserInfo:async e=>{if(!e)return t({currentUser:null,isLoading:!1});try{const n=In(Ln,"users",e);console.log(e);const r=await Yg(n);r.exists()?t({currentUser:r.data(),isLoading:!1}):t({currentUser:null,isLoading:!1})}catch(n){return console.log(n),t({currentUser:null,isLoading:!1})}}})),nx=()=>{const{currentUser:t}=gs();return R.jsxs("div",{className:"userInfo",children:[R.jsxs("div",{className:"user",children:[R.jsx("img",{src:t.avatar||"./avatar.png",alt:"none"}),R.jsx("h2",{children:t.username})]}),R.jsxs("div",{className:"icons",children:[R.jsx("img",{src:"./more.png",alt:""}),R.jsx("img",{src:"./video.png",alt:""}),R.jsx("img",{src:"./edit.png",alt:""})]})]})};var E2={};const T2="@firebase/database",b2="1.0.5";/**
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
 */let RC="";function rx(t){RC=t}/**
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
 */class ix{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Lf(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class sx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ar(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const PC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ix(e)}}catch{}return new sx},Ui=PC("localStorage"),ox=PC("sessionStorage");/**
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
 */const io=new od("@firebase/database"),ax=function(){let t=1;return function(){return t++}}(),xC=function(t){const e=V6(t),n=new P6;n.update(e);const r=n.digest();return ig.encodeByteArray(r)},fu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fu.apply(null,r):typeof r=="object"?e+=dt(r):e+=r,e+=" "}return e};let Xa=null,S2=!0;const fx=function(t,e){Q(!e,"Can't turn on custom loggers persistently."),io.logLevel=ie.VERBOSE,Xa=io.log.bind(io)},bt=function(...t){if(S2===!0&&(S2=!1,Xa===null&&ox.get("logging_enabled")===!0&&fx()),Xa){const e=fu.apply(null,t);Xa(e)}},uu=function(t){return function(...e){bt(t,...e)}},G1=function(...t){const e="FIREBASE INTERNAL ERROR: "+fu(...t);io.error(e)},is=function(...t){const e=`FIREBASE FATAL ERROR: ${fu(...t)}`;throw io.error(e),new Error(e)},fn=function(...t){const e="FIREBASE WARNING: "+fu(...t);io.warn(e)},ux=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&fn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},OC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},lx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ko="[MIN_NAME]",ss="[MAX_NAME]",Yo=function(t,e){if(t===e)return 0;if(t===ko||e===ss)return-1;if(e===ko||t===ss)return 1;{const n=k2(t),r=k2(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},cx=function(t,e){return t===e?0:t<e?-1:1},Ma=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+dt(e))},am=function(t){if(typeof t!="object"||t===null)return dt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=dt(e[r]),n+=":",n+=am(t[e[r]]);return n+="}",n},zC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Tn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const UC=function(t){Q(!OC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(u=n;u;u-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const c=l.join("");let h="";for(u=0;u<64;u+=8){let p=parseInt(c.substr(u,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},dx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},px=new RegExp("^-?(0*)\\d{1,10}$"),gx=-2147483648,mx=2147483647,k2=function(t){if(px.test(t)){const e=Number(t);if(e>=gx&&e<=mx)return e}return null},lu=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw fn("Exception was thrown by user callback.",n),e},Math.floor(0))}},yx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ef=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class wx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){fn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class vx{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(bt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',fn(e)}}/**
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
 */const fm="5",VC="v",FC="s",BC="r",QC="f",GC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,YC="ls",HC="p",Y1="ac",WC="websocket",JC="long_polling";/**
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
 */class _x{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ui.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ui.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Mx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $C(t,e,n){Q(typeof e=="string","typeof type must == string"),Q(typeof n=="object","typeof params must == object");let r;if(e===WC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===JC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Mx(t)&&(n.ns=t.namespace);const i=[];return Tn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Ix{constructor(){this.counters_={}}incrementCounter(e,n=1){Ar(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return w6(this.counters_)}}/**
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
 */const l0={},c0={};function um(t){const e=t.toString();return l0[e]||(l0[e]=new Ix),l0[e]}function Lx(t,e){const n=t.toString();return c0[n]||(c0[n]=e()),c0[n]}/**
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
 */class Cx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&lu(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const N2="start",Ex="close",Tx="pLPCommand",bx="pRTLPCB",ZC="id",qC="pw",KC="ser",Sx="cb",kx="seg",Nx="ts",Ax="d",jx="dframe",XC=1870,eE=30,Dx=XC-eE,Rx=25e3,Px=3e4;class Hs{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=uu(e),this.stats_=um(n),this.urlFn=u=>(this.appCheckToken&&(u[Y1]=this.appCheckToken),$C(n,JC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Cx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Px)),lx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lm((...s)=>{const[o,a,u,l,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===N2)this.id=a,this.password=u;else if(o===Ex)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[N2]="t",r[KC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Sx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[VC]=fm,this.transportSessionId&&(r[FC]=this.transportSessionId),this.lastSessionId&&(r[YC]=this.lastSessionId),this.applicationId&&(r[HC]=this.applicationId),this.appCheckToken&&(r[Y1]=this.appCheckToken),typeof location<"u"&&location.hostname&&GC.test(location.hostname)&&(r[BC]=QC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hs.forceAllow_=!0}static forceDisallow(){Hs.forceDisallow_=!0}static isAvailable(){return Hs.forceAllow_?!0:!Hs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!dx()&&!hx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=QM(n),i=zC(r,Dx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[jx]="t",r[ZC]=e,r[qC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ax(),window[Tx+this.uniqueCallbackIdentifier]=e,window[bx+this.uniqueCallbackIdentifier]=n,this.myIFrame=lm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){bt("frame writing exception"),a.stack&&bt(a.stack),bt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||bt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ZC]=this.myID,e[qC]=this.myPW,e[KC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+eE+r.length<=XC;){const o=this.pendingSegs.shift();r=r+"&"+kx+i+"="+o.seg+"&"+Nx+i+"="+o.ts+"&"+Ax+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Rx)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{bt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const xx=16384,Ox=45e3;let Sc=null;typeof MozWebSocket<"u"?Sc=MozWebSocket:typeof WebSocket<"u"&&(Sc=WebSocket);class Pn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=uu(this.connId),this.stats_=um(n),this.connURL=Pn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[VC]=fm,typeof location<"u"&&location.hostname&&GC.test(location.hostname)&&(o[BC]=QC),n&&(o[FC]=n),r&&(o[YC]=r),i&&(o[Y1]=i),s&&(o[HC]=s),$C(e,WC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ui.set("previous_websocket_failure",!0);try{let r;qM(),this.mySock=new Sc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Sc!==null&&!Pn.forceDisallow_}static previouslyFailed(){return Ui.isInMemoryStorage||Ui.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ui.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Lf(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=zC(n,xx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ox))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pn.responsesRequiredToBeHealthy=2;Pn.healthyTimeout=3e4;/**
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
 */class jf{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Hs,Pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Pn&&Pn.isAvailable();let r=n&&!Pn.previouslyFailed();if(e.webSocketOnly&&(n||fn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Pn];else{const i=this.transports_=[];for(const s of jf.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);jf.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}jf.globalTransportInitialized_=!1;/**
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
 */const zx=6e4,Ux=5e3,Vx=10*1024,Fx=100*1024,d0="t",A2="d",Bx="s",j2="r",Qx="e",D2="o",R2="a",P2="n",x2="p",Gx="h";class Yx{constructor(e,n,r,i,s,o,a,u,l,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=uu("c:"+this.id+":"),this.transportManager_=new jf(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ef(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Fx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(d0 in e){const n=e[d0];n===R2?this.upgradeIfSecondaryHealthy_():n===j2?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===D2&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ma("t",e),r=Ma("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:x2,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:R2,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:P2,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ma("t",e),r=Ma("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ma(d0,e);if(A2 in e){const r=e[A2];if(n===Gx){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===P2){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Bx?this.onConnectionShutdown_(r):n===j2?this.onReset_(r):n===Qx?G1("Server Error: "+r):n===D2?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):G1("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fm!==r&&fn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ef(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(zx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ef(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ux))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:x2,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ui.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class tE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class nE{constructor(e){this.allowedEvents_=e,this.listeners_={},Q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){Q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class kc extends nE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!og()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new kc}getInitialEvent(e){return Q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const O2=32,z2=768;class Ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function _e(){return new Ae("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gi(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ae(t.pieces_,e)}function rE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Hx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function iE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function sE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ae(e,0)}function at(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ae)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Ae(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function yn(t,e){const n=ce(t),r=ce(e);if(n===null)return e;if(n===r)return yn(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function oE(t,e){if(gi(t)!==gi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function xn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(gi(t)>gi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Wx{constructor(e,n){this.errorPrefix_=n,this.parts_=iE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=sd(this.parts_[r]);aE(this)}}function Jx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=sd(e),aE(t)}function $x(t){const e=t.parts_.pop();t.byteLength_-=sd(e),t.parts_.length>0&&(t.byteLength_-=1)}function aE(t){if(t.byteLength_>z2)throw new Error(t.errorPrefix_+"has a key path longer than "+z2+" bytes ("+t.byteLength_+").");if(t.parts_.length>O2)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+O2+") or object contains a cycle "+Ri(t))}function Ri(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class cm extends nE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new cm}getInitialEvent(e){return Q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ia=1e3,Zx=60*5*1e3,U2=30*1e3,qx=1.3,Kx=3e4,Xx="server_kill",V2=3;class Mr extends tE{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Mr.nextPersistentConnectionId_++,this.log_=uu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ia,this.maxReconnectDelay_=Zx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!qM())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");cm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(dt(s)),Q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new sg,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Q(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,l=a.s;Mr.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ar(e,"w")){const r=mo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();fn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||R6(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=U2)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=D6(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),Q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+dt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):G1("Unrecognized action received from server: "+dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ia,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ia,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Kx&&(this.reconnectDelay_=Ia),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*qx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},l=function(h){Q(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:u,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?bt("getToken() completed but was canceled"):(bt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,a=new Yx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,v=>{fn(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xx)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&fn(h),u())}}}interrupt(e){bt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){bt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],m1(this.interruptReasons_)&&(this.reconnectDelay_=Ia,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>am(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Ae(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){bt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=V2&&(this.reconnectDelay_=U2,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){bt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=V2&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+RC.replace(/\./g,"-")]=1,og()?e["framework.cordova"]=1:ZM()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kc.getInstance().currentlyOnline();return m1(this.interruptReasons_)&&e}}Mr.nextPersistentConnectionId_=0;Mr.nextConnectionId_=0;/**
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
 */class de{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new de(e,n)}}/**
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
 */class Ad{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new de(ko,e),i=new de(ko,n);return this.compare(r,i)!==0}minPost(){return de.MIN}}/**
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
 */let sl;class fE extends Ad{static get __EMPTY_NODE(){return sl}static set __EMPTY_NODE(e){sl=e}compare(e,n){return Yo(e.name,n.name)}isDefinedOn(e){throw Oo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return de.MIN}maxPost(){return new de(ss,sl)}makePost(e,n){return Q(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,sl)}toString(){return".key"}}const so=new fE;/**
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
 */class ol{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ot.RED,this.left=i??$t.EMPTY_NODE,this.right=s??$t.EMPTY_NODE}copy(e,n,r,i,s){return new ot(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $t.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ot.RED=!0;ot.BLACK=!1;class eO{copy(e,n,r,i,s){return this}insert(e,n,r){return new ot(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $t{constructor(e,n=$t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ot.BLACK,null,null))}remove(e){return new $t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ot.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ol(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ol(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ol(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ol(this.root_,null,this.comparator_,!0,e)}}$t.EMPTY_NODE=new eO;/**
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
 */function tO(t,e){return Yo(t.name,e.name)}function dm(t,e){return Yo(t,e)}/**
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
 */let H1;function nO(t){H1=t}const uE=function(t){return typeof t=="number"?"number:"+UC(t):"string:"+t},lE=function(t){if(t.isLeafNode()){const e=t.val();Q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ar(e,".sv"),"Priority must be a string or number.")}else Q(t===H1||t.isEmpty(),"priority of unexpected type.");Q(t===H1||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let F2;class rt{constructor(e,n=rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lE(this.priorityNode_)}static set __childrenNodeConstructor(e){F2=e}static get __childrenNodeConstructor(){return F2}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:ce(e)===".priority"?this.priorityNode_:rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(Q(r!==".priority"||gi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=UC(this.value_):e+=this.value_,this.lazyHash_=xC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rt.__childrenNodeConstructor?-1:(Q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=rt.VALUE_TYPE_ORDER.indexOf(n),s=rt.VALUE_TYPE_ORDER.indexOf(r);return Q(i>=0,"Unknown leaf type: "+n),Q(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let cE,dE;function rO(t){cE=t}function iO(t){dE=t}class sO extends Ad{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Yo(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return de.MIN}maxPost(){return new de(ss,new rt("[PRIORITY-POST]",dE))}makePost(e,n){const r=cE(e);return new de(n,new rt("[PRIORITY-POST]",r))}toString(){return".priority"}}const kt=new sO;/**
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
 */const oO=Math.log(2);class aO{constructor(e){const n=s=>parseInt(Math.log(s)/oO,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Nc=function(t,e,n,r){t.sort(e);const i=function(u,l){const c=l-u;let h,p;if(c===0)return null;if(c===1)return h=t[u],p=n?n(h):h,new ot(p,h.node,ot.BLACK,null,null);{const v=parseInt(c/2,10)+u,I=i(u,v),S=i(v+1,l);return h=t[v],p=n?n(h):h,new ot(p,h.node,ot.BLACK,I,S)}},s=function(u){let l=null,c=null,h=t.length;const p=function(I,S){const N=h-I,M=h;h-=I;const y=i(N+1,M),_=t[N],A=n?n(_):_;v(new ot(A,_.node,S,null,y))},v=function(I){l?(l.left=I,l=I):(c=I,l=I)};for(let I=0;I<u.count;++I){const S=u.nextBitIsOne(),N=Math.pow(2,u.count-(I+1));S?p(N,ot.BLACK):(p(N,ot.BLACK),p(N,ot.RED))}return c},o=new aO(t.length),a=s(o);return new $t(r||e,a)};/**
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
 */let h0;const Ss={};class mr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return Q(Ss&&kt,"ChildrenNode.ts has not been loaded"),h0=h0||new mr({".priority":Ss},{".priority":kt}),h0}get(e){const n=mo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $t?n:null}hasIndex(e){return Ar(this.indexSet_,e.toString())}addIndex(e,n){Q(e!==so,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(de.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Nc(r,e.getCompare()):a=Ss;const u=e.toString(),l=Object.assign({},this.indexSet_);l[u]=e;const c=Object.assign({},this.indexes_);return c[u]=a,new mr(c,l)}addToIndexes(e,n){const r=lc(this.indexes_,(i,s)=>{const o=mo(this.indexSet_,s);if(Q(o,"Missing index implementation for "+s),i===Ss)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(de.Wrap);let l=u.getNext();for(;l;)l.name!==e.name&&a.push(l),l=u.getNext();return a.push(e),Nc(a,o.getCompare())}else return Ss;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new de(e.name,a))),u.insert(e,e.node)}});return new mr(r,this.indexSet_)}removeFromIndexes(e,n){const r=lc(this.indexes_,i=>{if(i===Ss)return i;{const s=n.get(e.name);return s?i.remove(new de(e.name,s)):i}});return new mr(r,this.indexSet_)}}/**
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
 */let La;class ye{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&lE(this.priorityNode_),this.children_.isEmpty()&&Q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return La||(La=new ye(new $t(dm),null,mr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||La}updatePriority(e){return this.children_.isEmpty()?this:new ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?La:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new de(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?La:this.priorityNode_;return new ye(i,o,s)}}updateChild(e,n){const r=ce(e);if(r===null)return n;{Q(ce(e)!==".priority"||gi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(be(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(kt,(o,a)=>{n[o]=a.val(e),r++,s&&ye.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uE(this.getPriority().val())+":"),this.forEachChild(kt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":xC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new de(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new de(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new de(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,de.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cu?-1:0}withIndex(e){if(e===so||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new ye(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===so||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(kt),i=n.getIterator(kt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===so?null:this.indexMap_.get(e.toString())}}ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fO extends ye{constructor(){super(new $t(dm),ye.EMPTY_NODE,mr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ye.EMPTY_NODE}isEmpty(){return!1}}const cu=new fO;Object.defineProperties(de,{MIN:{value:new de(ko,ye.EMPTY_NODE)},MAX:{value:new de(ss,cu)}});fE.__EMPTY_NODE=ye.EMPTY_NODE;rt.__childrenNodeConstructor=ye;nO(cu);iO(cu);/**
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
 */const uO=!0;function St(t,e=null){if(t===null)return ye.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new rt(n,St(e))}if(!(t instanceof Array)&&uO){const n=[];let r=!1;if(Tn(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=St(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new de(o,u)))}}),n.length===0)return ye.EMPTY_NODE;const s=Nc(n,tO,o=>o.name,dm);if(r){const o=Nc(n,kt.getCompare());return new ye(s,St(e),new mr({".priority":o},{".priority":kt}))}else return new ye(s,St(e),mr.Default)}else{let n=ye.EMPTY_NODE;return Tn(t,(r,i)=>{if(Ar(t,r)&&r.substring(0,1)!=="."){const s=St(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(St(e))}}rO(St);/**
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
 */class lO extends Ad{constructor(e){super(),this.indexPath_=e,Q(!ae(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Yo(e.name,n.name):s}makePost(e,n){const r=St(e),i=ye.EMPTY_NODE.updateChild(this.indexPath_,r);return new de(n,i)}maxPost(){const e=ye.EMPTY_NODE.updateChild(this.indexPath_,cu);return new de(ss,e)}toString(){return iE(this.indexPath_,0).join("/")}}/**
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
 */class cO extends Ad{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Yo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,n){const r=St(e);return new de(n,r)}toString(){return".value"}}const dO=new cO;/**
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
 */function hO(t){return{type:"value",snapshotNode:t}}function pO(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gO(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function B2(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function mO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class hm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=kt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ko}hasEnd(){return this.endSet_}getIndexEndValue(){return Q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===kt}copy(){const e=new hm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Q2(t){const e={};if(t.isDefault())return e;let n;if(t.index_===kt?n="$priority":t.index_===dO?n="$value":t.index_===so?n="$key":(Q(t.index_ instanceof lO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=dt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=dt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+dt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=dt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+dt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function G2(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==kt&&(e.i=t.index_.toString()),e}/**
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
 */class Ac extends tE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=uu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ac.getListenId_(e,r),a={};this.listens_[o]=a;const u=Q2(e._queryParams);this.restRequest_(s+".json",u,(l,c)=>{let h=c;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,r),mo(this.listens_,o)===a){let p;l?l===401?p="permission_denied":p="rest_error:"+l:p="ok",i(p,null)}})}unlisten(e,n){const r=Ac.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Q2(e._queryParams),r=e._path.toString(),i=new sg;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Lf(a.responseText)}catch{fn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&fn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class yO{constructor(){this.rootNode_=ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function jc(){return{value:null,children:new Map}}function hE(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ce(e);t.children.has(r)||t.children.set(r,jc());const i=t.children.get(r);e=be(e),hE(i,e,n)}}function W1(t,e,n){t.value!==null?n(e,t.value):wO(t,(r,i)=>{const s=new Ae(e.toString()+"/"+r);W1(i,s,n)})}function wO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class vO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Tn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Y2=10*1e3,_O=30*1e3,MO=5*60*1e3;class IO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new vO(e);const r=Y2+(_O-Y2)*Math.random();ef(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Tn(e,(i,s)=>{s>0&&Ar(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ef(this.reportStats_.bind(this),Math.floor(Math.random()*2*MO))}}/**
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
 */var Zn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Zn||(Zn={}));function pE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Dc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Zn.ACK_USER_WRITE,this.source=pE()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return Q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ae(e));return new Dc(_e(),n,this.revert)}}else return Q(ce(this.path)===e,"operationForChild called for unrelated child."),new Dc(be(this.path),this.affectedTree,this.revert)}}/**
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
 */class os{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Zn.OVERWRITE}operationForChild(e){return ae(this.path)?new os(this.source,_e(),this.snap.getImmediateChild(e)):new os(this.source,be(this.path),this.snap)}}/**
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
 */class Df{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Zn.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new Ae(e));return n.isEmpty()?null:n.value?new os(this.source,_e(),n.value):new Df(this.source,_e(),n)}else return Q(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Df(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pm{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function LO(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(mO(o.childName,o.snapshotNode))}),Ca(t,i,"child_removed",e,r,n),Ca(t,i,"child_added",e,r,n),Ca(t,i,"child_moved",s,r,n),Ca(t,i,"child_changed",e,r,n),Ca(t,i,"value",e,r,n),i}function Ca(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>EO(t,a,u)),o.forEach(a=>{const u=CO(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(u,t.query_))})})}function CO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function EO(t,e,n){if(e.childName==null||n.childName==null)throw Oo("Should only compare child_ events.");const r=new de(e.childName,e.snapshotNode),i=new de(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function yE(t,e){return{eventCache:t,serverCache:e}}function tf(t,e,n,r){return yE(new pm(e,n,r),t.serverCache)}function wE(t,e,n,r){return yE(t.eventCache,new pm(e,n,r))}function J1(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function as(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let p0;const TO=()=>(p0||(p0=new $t(cx)),p0);class Te{constructor(e,n=TO()){this.value=e,this.children=n}static fromObject(e){let n=new Te(null);return Tn(e,(r,i)=>{n=n.set(new Ae(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:_e(),value:this.value};if(ae(e))return null;{const r=ce(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(be(e),n);return s!=null?{path:at(new Ae(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=ce(e),r=this.children.get(n);return r!==null?r.subtree(be(e)):new Te(null)}}set(e,n){if(ae(e))return new Te(n,this.children);{const r=ce(e),s=(this.children.get(r)||new Te(null)).set(be(e),n),o=this.children.insert(r,s);return new Te(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new Te(null):new Te(null,this.children);{const n=ce(e),r=this.children.get(n);if(r){const i=r.remove(be(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Te(null):new Te(this.value,s)}else return this}}get(e){if(ae(e))return this.value;{const n=ce(e),r=this.children.get(n);return r?r.get(be(e)):null}}setTree(e,n){if(ae(e))return n;{const r=ce(e),s=(this.children.get(r)||new Te(null)).setTree(be(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Te(this.value,o)}}fold(e){return this.fold_(_e(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(at(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,_e(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ae(e))return null;{const s=ce(e),o=this.children.get(s);return o?o.findOnPath_(be(e),at(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,_e(),n)}foreachOnPath_(e,n,r){if(ae(e))return this;{this.value&&r(n,this.value);const i=ce(e),s=this.children.get(i);return s?s.foreachOnPath_(be(e),at(n,i),r):new Te(null)}}foreach(e){this.foreach_(_e(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(at(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Un{constructor(e){this.writeTree_=e}static empty(){return new Un(new Te(null))}}function nf(t,e,n){if(ae(e))return new Un(new Te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=yn(i,e);return s=s.updateChild(o,n),new Un(t.writeTree_.set(i,s))}else{const i=new Te(n),s=t.writeTree_.setTree(e,i);return new Un(s)}}}function H2(t,e,n){let r=t;return Tn(n,(i,s)=>{r=nf(r,at(e,i),s)}),r}function W2(t,e){if(ae(e))return Un.empty();{const n=t.writeTree_.setTree(e,new Te(null));return new Un(n)}}function $1(t,e){return ms(t,e)!=null}function ms(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(yn(n.path,e)):null}function J2(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(kt,(r,i)=>{e.push(new de(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new de(r,i.value))}),e}function fi(t,e){if(ae(e))return t;{const n=ms(t,e);return n!=null?new Un(new Te(n)):new Un(t.writeTree_.subtree(e))}}function Z1(t){return t.writeTree_.isEmpty()}function No(t,e){return vE(_e(),t.writeTree_,e)}function vE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(Q(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=vE(at(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(at(t,".priority"),r)),n}}/**
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
 */function _E(t,e){return EE(e,t)}function bO(t,e,n,r,i){Q(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=nf(t.visibleWrites,e,n)),t.lastWriteId=r}function SO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function kO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);Q(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&NO(a,r.path)?i=!1:xn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return AO(t),!0;if(r.snap)t.visibleWrites=W2(t.visibleWrites,r.path);else{const a=r.children;Tn(a,u=>{t.visibleWrites=W2(t.visibleWrites,at(r.path,u))})}return!0}else return!1}function NO(t,e){if(t.snap)return xn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&xn(at(t.path,n),e))return!0;return!1}function AO(t){t.visibleWrites=ME(t.allWrites,jO,_e()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jO(t){return t.visible}function ME(t,e,n){let r=Un.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)xn(n,o)?(a=yn(n,o),r=nf(r,a,s.snap)):xn(o,n)&&(a=yn(o,n),r=nf(r,_e(),s.snap.getChild(a)));else if(s.children){if(xn(n,o))a=yn(n,o),r=H2(r,a,s.children);else if(xn(o,n))if(a=yn(o,n),ae(a))r=H2(r,_e(),s.children);else{const u=mo(s.children,ce(a));if(u){const l=u.getChild(be(a));r=nf(r,_e(),l)}}}else throw Oo("WriteRecord should have .snap or .children")}}return r}function IE(t,e,n,r,i){if(!r&&!i){const s=ms(t.visibleWrites,e);if(s!=null)return s;{const o=fi(t.visibleWrites,e);if(Z1(o))return n;if(n==null&&!$1(o,_e()))return null;{const a=n||ye.EMPTY_NODE;return No(o,a)}}}else{const s=fi(t.visibleWrites,e);if(!i&&Z1(s))return n;if(!i&&n==null&&!$1(s,_e()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(xn(l.path,e)||xn(e,l.path))},a=ME(t.allWrites,o,e),u=n||ye.EMPTY_NODE;return No(a,u)}}}function DO(t,e,n){let r=ye.EMPTY_NODE;const i=ms(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(kt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fi(t.visibleWrites,e);return n.forEachChild(kt,(o,a)=>{const u=No(fi(s,new Ae(o)),a);r=r.updateImmediateChild(o,u)}),J2(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fi(t.visibleWrites,e);return J2(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function RO(t,e,n,r,i){Q(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=at(e,n);if($1(t.visibleWrites,s))return null;{const o=fi(t.visibleWrites,s);return Z1(o)?i.getChild(n):No(o,i.getChild(n))}}function PO(t,e,n,r){const i=at(e,n),s=ms(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fi(t.visibleWrites,i);return No(o,r.getNode().getImmediateChild(n))}else return null}function xO(t,e){return ms(t.visibleWrites,e)}function OO(t,e,n,r,i,s,o){let a;const u=fi(t.visibleWrites,e),l=ms(u,_e());if(l!=null)a=l;else if(n!=null)a=No(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let v=p.getNext();for(;v&&c.length<i;)h(v,r)!==0&&c.push(v),v=p.getNext();return c}else return[]}function zO(){return{visibleWrites:Un.empty(),allWrites:[],lastWriteId:-1}}function q1(t,e,n,r){return IE(t.writeTree,t.treePath,e,n,r)}function LE(t,e){return DO(t.writeTree,t.treePath,e)}function $2(t,e,n,r){return RO(t.writeTree,t.treePath,e,n,r)}function Rc(t,e){return xO(t.writeTree,at(t.treePath,e))}function UO(t,e,n,r,i,s){return OO(t.writeTree,t.treePath,e,n,r,i,s)}function gm(t,e,n){return PO(t.writeTree,t.treePath,e,n)}function CE(t,e){return EE(at(t.treePath,e),t.writeTree)}function EE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class VO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;Q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Q(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,B2(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,gO(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,pO(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,B2(r,e.snapshotNode,i.oldSnap));else throw Oo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class FO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const TE=new FO;class mm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new pm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:as(this.viewCache_),s=UO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}function BO(t,e){Q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function QO(t,e,n,r,i){const s=new VO;let o,a;if(n.type===Zn.OVERWRITE){const l=n;l.source.fromUser?o=K1(t,e,l.path,l.snap,r,i,s):(Q(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ae(l.path),o=Pc(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===Zn.MERGE){const l=n;l.source.fromUser?o=YO(t,e,l.path,l.children,r,i,s):(Q(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=X1(t,e,l.path,l.children,r,i,a,s))}else if(n.type===Zn.ACK_USER_WRITE){const l=n;l.revert?o=JO(t,e,l.path,r,i,s):o=HO(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===Zn.LISTEN_COMPLETE)o=WO(t,e,n.path,r,s);else throw Oo("Unknown operation type: "+n.type);const u=s.getChanges();return GO(e,o,u),{viewCache:o,changes:u}}function GO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=J1(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(hO(J1(e)))}}function bE(t,e,n,r,i,s){const o=e.eventCache;if(Rc(r,n)!=null)return e;{let a,u;if(ae(n))if(Q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=as(e),c=l instanceof ye?l:ye.EMPTY_NODE,h=LE(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=q1(r,as(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=ce(n);if(l===".priority"){Q(gi(n)===1,"Can't have a priority with additional path components");const c=o.getNode();u=e.serverCache.getNode();const h=$2(r,n,c,u);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=be(n);let h;if(o.isCompleteForChild(l)){u=e.serverCache.getNode();const p=$2(r,n,o.getNode(),u);p!=null?h=o.getNode().getImmediateChild(l).updateChild(c,p):h=o.getNode().getImmediateChild(l)}else h=gm(r,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,c,i,s):a=o.getNode()}}return tf(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function Pc(t,e,n,r,i,s,o,a){const u=e.serverCache;let l;const c=o?t.filter:t.filter.getIndexedFilter();if(ae(n))l=c.updateFullNode(u.getNode(),r,null);else if(c.filtersNodes()&&!u.isFiltered()){const v=u.getNode().updateChild(n,r);l=c.updateFullNode(u.getNode(),v,null)}else{const v=ce(n);if(!u.isCompleteForPath(n)&&gi(n)>1)return e;const I=be(n),N=u.getNode().getImmediateChild(v).updateChild(I,r);v===".priority"?l=c.updatePriority(u.getNode(),N):l=c.updateChild(u.getNode(),v,N,I,TE,null)}const h=wE(e,l,u.isFullyInitialized()||ae(n),c.filtersNodes()),p=new mm(i,h,s);return bE(t,h,n,i,p,a)}function K1(t,e,n,r,i,s,o){const a=e.eventCache;let u,l;const c=new mm(i,e,s);if(ae(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=tf(e,l,!0,t.filter.filtersNodes());else{const h=ce(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),u=tf(e,l,a.isFullyInitialized(),a.isFiltered());else{const p=be(n),v=a.getNode().getImmediateChild(h);let I;if(ae(p))I=r;else{const S=c.getCompleteChild(h);S!=null?rE(p)===".priority"&&S.getChild(sE(p)).isEmpty()?I=S:I=S.updateChild(p,r):I=ye.EMPTY_NODE}if(v.equals(I))u=e;else{const S=t.filter.updateChild(a.getNode(),h,I,p,c,o);u=tf(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function Z2(t,e){return t.eventCache.isCompleteForChild(e)}function YO(t,e,n,r,i,s,o){let a=e;return r.foreach((u,l)=>{const c=at(n,u);Z2(e,ce(c))&&(a=K1(t,a,c,l,i,s,o))}),r.foreach((u,l)=>{const c=at(n,u);Z2(e,ce(c))||(a=K1(t,a,c,l,i,s,o))}),a}function q2(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function X1(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,l;ae(n)?l=r:l=new Te(null).setTree(n,r);const c=e.serverCache.getNode();return l.children.inorderTraversal((h,p)=>{if(c.hasChild(h)){const v=e.serverCache.getNode().getImmediateChild(h),I=q2(t,v,p);u=Pc(t,u,new Ae(h),I,i,s,o,a)}}),l.children.inorderTraversal((h,p)=>{const v=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!c.hasChild(h)&&!v){const I=e.serverCache.getNode().getImmediateChild(h),S=q2(t,I,p);u=Pc(t,u,new Ae(h),S,i,s,o,a)}}),u}function HO(t,e,n,r,i,s,o){if(Rc(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(ae(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Pc(t,e,n,u.getNode().getChild(n),i,s,a,o);if(ae(n)){let l=new Te(null);return u.getNode().forEachChild(so,(c,h)=>{l=l.set(new Ae(c),h)}),X1(t,e,n,l,i,s,a,o)}else return e}else{let l=new Te(null);return r.foreach((c,h)=>{const p=at(n,c);u.isCompleteForPath(p)&&(l=l.set(c,u.getNode().getChild(p)))}),X1(t,e,n,l,i,s,a,o)}}function WO(t,e,n,r,i){const s=e.serverCache,o=wE(e,s.getNode(),s.isFullyInitialized()||ae(n),s.isFiltered());return bE(t,o,n,r,TE,i)}function JO(t,e,n,r,i,s){let o;if(Rc(r,n)!=null)return e;{const a=new mm(r,e,i),u=e.eventCache.getNode();let l;if(ae(n)||ce(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=q1(r,as(e));else{const h=e.serverCache.getNode();Q(h instanceof ye,"serverChildren would be complete if leaf node"),c=LE(r,h)}c=c,l=t.filter.updateFullNode(u,c,s)}else{const c=ce(n);let h=gm(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=u.getImmediateChild(c)),h!=null?l=t.filter.updateChild(u,c,h,be(n),a,s):e.eventCache.getNode().hasChild(c)?l=t.filter.updateChild(u,c,ye.EMPTY_NODE,be(n),a,s):l=u,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=q1(r,as(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Rc(r,_e())!=null,tf(e,l,o,t.filter.filtersNodes())}}function $O(t,e){const n=as(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function K2(t,e,n,r){e.type===Zn.MERGE&&e.source.queryId!==null&&(Q(as(t.viewCache_),"We should always have a full cache before handling merges"),Q(J1(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=QO(t.processor_,i,e,n,r);return BO(t.processor_,s.viewCache),Q(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,ZO(t,s.changes,s.viewCache.eventCache.getNode())}function ZO(t,e,n,r){const i=t.eventRegistrations_;return LO(t.eventGenerator_,e,n,i)}/**
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
 */let X2;function qO(t){Q(!X2,"__referenceConstructor has already been defined"),X2=t}function ym(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return Q(s!=null,"SyncTree gave us an op for an invalid query."),K2(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(K2(o,e,n,r));return s}}function wm(t,e){let n=null;for(const r of t.views.values())n=n||$O(r,e);return n}/**
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
 */let e4;function KO(t){Q(!e4,"__referenceConstructor has already been defined"),e4=t}class t4{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Te(null),this.pendingWriteTree_=zO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function XO(t,e,n,r,i){return bO(t.pendingWriteTree_,e,n,r,i),i?Dd(t,new os(pE(),e,n)):[]}function Ws(t,e,n=!1){const r=SO(t.pendingWriteTree_,e);if(kO(t.pendingWriteTree_,e)){let s=new Te(null);return r.snap!=null?s=s.set(_e(),!0):Tn(r.children,o=>{s=s.set(new Ae(o),!0)}),Dd(t,new Dc(r.path,s,n))}else return[]}function jd(t,e,n){return Dd(t,new os(gE(),e,n))}function ez(t,e,n){const r=Te.fromObject(n);return Dd(t,new Df(gE(),e,r))}function tz(t,e,n,r){const i=AE(t,r);if(i!=null){const s=jE(i),o=s.path,a=s.queryId,u=yn(o,e),l=new os(mE(a),u,n);return DE(t,o,l)}else return[]}function nz(t,e,n,r){const i=AE(t,r);if(i){const s=jE(i),o=s.path,a=s.queryId,u=yn(o,e),l=Te.fromObject(n),c=new Df(mE(a),u,l);return DE(t,o,c)}else return[]}function SE(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=yn(o,e),l=wm(a,u);if(l)return l});return IE(i,e,s,n,!0)}function Dd(t,e){return kE(e,t.syncPointTree_,null,_E(t.pendingWriteTree_,_e()))}function kE(t,e,n,r){if(ae(t.path))return NE(t,e,n,r);{const i=e.get(_e());n==null&&i!=null&&(n=wm(i,_e()));let s=[];const o=ce(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const l=n?n.getImmediateChild(o):null,c=CE(r,o);s=s.concat(kE(a,u,l,c))}return i&&(s=s.concat(ym(i,t,r,n))),s}}function NE(t,e,n,r){const i=e.get(_e());n==null&&i!=null&&(n=wm(i,_e()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,l=CE(r,o),c=t.operationForChild(o);c&&(s=s.concat(NE(c,a,u,l)))}),i&&(s=s.concat(ym(i,t,r,n))),s}function AE(t,e){return t.tagToQueryMap.get(e)}function jE(t){const e=t.indexOf("$");return Q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ae(t.substr(0,e))}}function DE(t,e,n){const r=t.syncPointTree_.get(e);Q(r,"Missing sync point for query tag that we're tracking");const i=_E(t.pendingWriteTree_,e);return ym(r,n,i,null)}/**
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
 */class vm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vm(n)}node(){return this.node_}}class _m{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=at(this.path_,e);return new _m(this.syncTree_,n)}node(){return SE(this.syncTree_,this.path_)}}const rz=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},n4=function(t,e,n){if(!t||typeof t!="object")return t;if(Q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return iz(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sz(t[".sv"],e);Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},iz=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Q(!1,"Unexpected server value: "+t)}},sz=function(t,e,n){t.hasOwnProperty("increment")||Q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&Q(!1,"Unexpected increment value: "+r);const i=e.node();if(Q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},oz=function(t,e,n,r){return Mm(e,new _m(n,t),r)},az=function(t,e,n){return Mm(t,new vm(e),n)};function Mm(t,e,n){const r=t.getPriority().val(),i=n4(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=n4(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new rt(a,St(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new rt(i))),o.forEachChild(kt,(a,u)=>{const l=Mm(u,e.getImmediateChild(a),n);l!==u&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */class Im{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Lm(t,e){let n=e instanceof Ae?e:new Ae(e),r=t,i=ce(n);for(;i!==null;){const s=mo(r.node.children,i)||{children:{},childCount:0};r=new Im(i,r,s),n=be(n),i=ce(n)}return r}function Ho(t){return t.node.value}function RE(t,e){t.node.value=e,ep(t)}function PE(t){return t.node.childCount>0}function fz(t){return Ho(t)===void 0&&!PE(t)}function Rd(t,e){Tn(t.node.children,(n,r)=>{e(new Im(n,t,r))})}function xE(t,e,n,r){n&&!r&&e(t),Rd(t,i=>{xE(i,e,!0,r)}),n&&r&&e(t)}function uz(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function du(t){return new Ae(t.parent===null?t.name:du(t.parent)+"/"+t.name)}function ep(t){t.parent!==null&&lz(t.parent,t.name,t)}function lz(t,e,n){const r=fz(n),i=Ar(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ep(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ep(t))}/**
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
 */const cz=/[\[\].#$\/\u0000-\u001F\u007F]/,dz=/[\[\].#$\u0000-\u001F\u007F]/,g0=10*1024*1024,OE=function(t){return typeof t=="string"&&t.length!==0&&!cz.test(t)},hz=function(t){return typeof t=="string"&&t.length!==0&&!dz.test(t)},pz=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hz(t)},zE=function(t,e,n){const r=n instanceof Ae?new Wx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ri(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ri(r)+" with contents = "+e.toString());if(OC(e))throw new Error(t+"contains "+e.toString()+" "+Ri(r));if(typeof e=="string"&&e.length>g0/3&&sd(e)>g0)throw new Error(t+"contains a string greater than "+g0+" utf8 bytes "+Ri(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Tn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!OE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ri(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Jx(r,o),zE(t,a,r),$x(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ri(r)+" in addition to actual children.")}},gz=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!OE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!pz(n))throw new Error(U6(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class mz{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yz(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!oE(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ys(t,e,n){yz(t,n),wz(t,r=>xn(r,e)||xn(e,r))}function wz(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(vz(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function vz(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xa&&bt("event: "+n.toString()),lu(r)}}}/**
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
 */const _z="repo_interrupt",Mz=25;class Iz{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mz,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jc(),this.transactionQueueTree_=new Im,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lz(t,e,n){if(t.stats_=um(t.repoInfo_),t.forceRestClient_||yx())t.server_=new Ac(t.repoInfo_,(r,i,s,o)=>{r4(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>i4(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{dt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mr(t.repoInfo_,e,(r,i,s,o)=>{r4(t,r,i,s,o)},r=>{i4(t,r)},r=>{Ez(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Lx(t.repoInfo_,()=>new IO(t.stats_,t.server_)),t.infoData_=new yO,t.infoSyncTree_=new t4({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=jd(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cm(t,"connected",!1),t.serverSyncTree_=new t4({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const l=o(a,u);ys(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Cz(t){const n=t.infoData_.getNode(new Ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function UE(t){return rz({timestamp:Cz(t)})}function r4(t,e,n,r,i){t.dataUpdateCount++;const s=new Ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=lc(n,l=>St(l));o=nz(t.serverSyncTree_,s,u,i)}else{const u=St(n);o=tz(t.serverSyncTree_,s,u,i)}else if(r){const u=lc(n,l=>St(l));o=ez(t.serverSyncTree_,s,u)}else{const u=St(n);o=jd(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Tm(t,s)),ys(t.eventQueue_,a,o)}function i4(t,e){Cm(t,"connected",e),e===!1&&bz(t)}function Ez(t,e){Tn(e,(n,r)=>{Cm(t,n,r)})}function Cm(t,e,n){const r=new Ae("/.info/"+e),i=St(n);t.infoData_.updateSnapshot(r,i);const s=jd(t.infoSyncTree_,r,i);ys(t.eventQueue_,r,s)}function Tz(t){return t.nextWriteId_++}function bz(t){VE(t,"onDisconnectEvents");const e=UE(t),n=jc();W1(t.onDisconnect_,_e(),(i,s)=>{const o=oz(i,s,t.serverSyncTree_,e);hE(n,i,o)});let r=[];W1(n,_e(),(i,s)=>{r=r.concat(jd(t.serverSyncTree_,i,s));const o=Az(t,i);Tm(t,o)}),t.onDisconnect_=jc(),ys(t.eventQueue_,_e(),r)}function Sz(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_z)}function VE(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),bt(n,...e)}function FE(t,e,n){return SE(t.serverSyncTree_,e,n)||ye.EMPTY_NODE}function Em(t,e=t.transactionQueueTree_){if(e||Pd(t,e),Ho(e)){const n=QE(t,e);Q(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&kz(t,du(e),n)}else PE(e)&&Rd(e,n=>{Em(t,n)})}function kz(t,e,n){const r=n.map(l=>l.currentWriteId),i=FE(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const c=n[l];Q(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=yn(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,l=>{VE(t,"transaction put response",{path:u.toString(),status:l});let c=[];if(l==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,c=c.concat(Ws(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Pd(t,Lm(t.transactionQueueTree_,e)),Em(t,t.transactionQueueTree_),ys(t.eventQueue_,e,c);for(let p=0;p<h.length;p++)lu(h[p])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{fn("transaction at "+u.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}Tm(t,e)}},o)}function Tm(t,e){const n=BE(t,e),r=du(n),i=QE(t,n);return Nz(t,i,r),r}function Nz(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],l=yn(n,u.path);let c=!1,h;if(Q(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)c=!0,h=u.abortReason,i=i.concat(Ws(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=Mz)c=!0,h="maxretry",i=i.concat(Ws(t.serverSyncTree_,u.currentWriteId,!0));else{const p=FE(t,u.path,o);u.currentInputSnapshot=p;const v=e[a].update(p.val());if(v!==void 0){zE("transaction failed: Data returned ",v,u.path);let I=St(v);typeof v=="object"&&v!=null&&Ar(v,".priority")||(I=I.updatePriority(p.getPriority()));const N=u.currentWriteId,M=UE(t),y=az(I,p,M);u.currentOutputSnapshotRaw=I,u.currentOutputSnapshotResolved=y,u.currentWriteId=Tz(t),o.splice(o.indexOf(N),1),i=i.concat(XO(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),i=i.concat(Ws(t.serverSyncTree_,N,!0))}else c=!0,h="nodata",i=i.concat(Ws(t.serverSyncTree_,u.currentWriteId,!0))}ys(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Pd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)lu(r[a]);Em(t,t.transactionQueueTree_)}function BE(t,e){let n,r=t.transactionQueueTree_;for(n=ce(e);n!==null&&Ho(r)===void 0;)r=Lm(r,n),e=be(e),n=ce(e);return r}function QE(t,e){const n=[];return GE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function GE(t,e,n){const r=Ho(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rd(e,i=>{GE(t,i,n)})}function Pd(t,e){const n=Ho(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,RE(e,n.length>0?n:void 0)}Rd(e,r=>{Pd(t,r)})}function Az(t,e){const n=du(BE(t,e)),r=Lm(t.transactionQueueTree_,e);return uz(r,i=>{m0(t,i)}),m0(t,r),xE(r,i=>{m0(t,i)}),n}function m0(t,e){const n=Ho(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Q(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(Q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ws(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?RE(e,void 0):n.length=s+1,ys(t.eventQueue_,du(e),i);for(let o=0;o<r.length;o++)lu(r[o])}}/**
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
 */function jz(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Dz(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):fn(`Invalid query segment '${n}' in query '${t}'`)}return e}const s4=function(t,e){const n=Rz(t),r=n.namespace;n.domain==="firebase.com"&&is(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&is("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ux();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _x(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Ae(n.pathString)}},Rz=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=jz(t.substring(c,h)));const p=Dz(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(l+1),10)):l=e.length;const v=e.slice(0,l);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const I=e.indexOf(".");r=e.substring(0,I).toLowerCase(),n=e.substring(I+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class bm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ae(this._path)?null:rE(this._path)}get ref(){return new Wo(this._repo,this._path)}get _queryIdentifier(){const e=G2(this._queryParams),n=am(e);return n==="{}"?"default":n}get _queryObject(){return G2(this._queryParams)}isEqual(e){if(e=ze(e),!(e instanceof bm))return!1;const n=this._repo===e._repo,r=oE(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Hx(this._path)}}class Wo extends bm{constructor(e,n){super(e,n,new hm,!1)}get parent(){const e=sE(this._path);return e===null?null:new Wo(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}qO(Wo);KO(Wo);/**
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
 */const Pz="FIREBASE_DATABASE_EMULATOR_HOST",tp={};let xz=!1;function Oz(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||is("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),bt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=s4(s,i),a=o.repoInfo,u;typeof process<"u"&&E2&&(u=E2[Pz]),u?(s=`http://${u}?ns=${a.namespace}`,o=s4(s,i),a=o.repoInfo):o.repoInfo.secure;const l=new vx(t.name,t.options,e);gz("Invalid Firebase Database URL",o),ae(o.path)||is("Database URL must point to the root of a Firebase Database (not including a child path).");const c=Uz(a,t,l,new wx(t.name,n));return new Vz(c,t)}function zz(t,e){const n=tp[e];(!n||n[t.key]!==t)&&is(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Sz(t),delete n[t.key]}function Uz(t,e,n,r){let i=tp[e.name];i||(i={},tp[e.name]=i);let s=i[t.toURLString()];return s&&is("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Iz(t,xz,n,r),i[t.toURLString()]=s,s}class Vz{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lz(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wo(this._repo,_e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(zz(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&is("Cannot call "+e+" on a deleted database.")}}/**
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
 */function Fz(t){rx(_i),ci(new Tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Oz(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),_n(T2,b2,t),_n(T2,b2,"esm2017")}Mr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Fz();const Bz=()=>{const[t,e]=T.useState(null),{currentUser:n}=gs(),r=async s=>{s.preventDefault();const a=new FormData(s.target).get("username");try{const u=r0(Ln,"users"),l=Qj(u,Gj("username","==",a)),c=await Jj(l);c.empty||e(c.docs[0].data())}catch(u){console.log(u)}},i=async()=>{const s=r0(Ln,"chats"),o=r0(Ln,"userchats");try{const a=In(s);await z1(a,{createdAt:$j(),messages:[]}),await bo(In(o,t.id),{chats:_c({chatId:a.id,lastMessage:"",receieverId:n.id,updatedAt:Date.now()})}),await bo(In(o,n.id),{chats:_c({chatId:a.id,lastMessage:"",receieverId:t.id,updatedAt:Date.now()})})}catch(a){console.log(a)}};return R.jsxs("div",{className:"addUser",children:[R.jsxs("form",{onSubmit:r,children:[R.jsx("input",{type:"text",placeholder:"Username",name:"username"}),R.jsx("button",{children:"Search"})]}),t&&R.jsxs("div",{className:"user",children:[R.jsxs("div",{className:"detail",children:[R.jsx("img",{src:t.avatar||"./avatar.png",alt:"none"}),R.jsx("span",{children:t.username})]}),R.jsx("button",{onClick:i,children:"Add User"})]})]})},xd=DC(t=>({chatId:null,user:null,isCurrentUserBlocked:!1,isReceieverBlocked:!1,changeChat:(e,n)=>{const r=gs.getState().currentUser;return n.blocked.includes(r.id)?t({chatId:e,user:null,isCurrentUserBlocked:!0,isReceieverBlocked:!1}):r.blocked.includes(r.id)?t({chatId:e,user:n,isCurrentUserBlocked:!1,isReceieverBlocked:!0}):t({chatId:e,user:n,isCurrentUserBlocked:!1,isReceieverBlocked:!1})},changeBlock:()=>{t(e=>({...e,isReceieverBlocked:!e.isReceieverBlocked}))}})),Qz=()=>{const[t,e]=T.useState(!1),[n,r]=T.useState([]),[i,s]=T.useState(""),{currentUser:o}=gs(),{chatId:a,changeChat:u}=xd();T.useEffect(()=>{const h=TL(In(Ln,"userchats",o.id),async p=>{const I=p.data().chats.map(async N=>{const M=In(Ln,"users",N.receieverId),_=(await Yg(M)).data();return{...N,user:_}}),S=await Promise.all(I);r(S.sort((N,M)=>M.updatedAt-N.updatedAt))});return()=>{h()}},[o.id]);const l=async h=>{const p=n.map(S=>{const{user:N,...M}=S;return M}),v=p.findIndex(S=>S.chatId===h.chatId);p[v].isSeen=!0;const I=In(Ln,"userchats",o.id);try{await bo(I,{chats:p}),u(h.chatId,h.user)}catch(S){console.log(S)}},c=n.filter(h=>h.user.username.toLowerCase().includes(i.toLowerCase()));return R.jsxs("div",{className:"chatList",children:[R.jsxs("div",{className:"search",children:[R.jsxs("div",{className:"searchBar",children:[R.jsx("img",{src:"./search.png",alt:""}),R.jsx("input",{type:"text",placeholder:"Search User",onChange:h=>s(h.target.value)})]}),R.jsx("img",{src:t?"./minus.png":"./plus.png",alt:"none",className:"add",onClick:()=>e(h=>!h)})]}),c.map(h=>R.jsxs("div",{className:"item",onClick:()=>l(h),style:{backgroundColor:h!=null&&h.isSeen?"transparent":"#5183fe"},children:[R.jsx("img",{src:h.user.blocked.includes(o.id)?"./avatar.png":h.user.avatar||"./avatar.png",alt:""}),R.jsxs("div",{className:"texts",children:[R.jsx("span",{children:h.user.blocked.includes(o.id)?"User":h.user.username}),R.jsx("p",{children:h.lastMessage})]})]},h.chatId)),t&&R.jsx(Bz,{})]})},Gz=()=>R.jsxs("div",{className:"list",children:[R.jsx(nx,{}),R.jsx(Qz,{})]}),Yz=()=>{const{chatId:t,user:e,isCurrentUserBlocked:n,isReceieverBlocked:r,changeBlock:i}=xd(),{currentUser:s}=gs(),o=async()=>{if(!e)return;const a=doc(db,"users",s.id);try{await bo(a,{bloacked:r?Zj(e.id):_c(e.id)}),i()}catch(u){console.log(u)}};return R.jsxs("div",{className:"detail",children:[R.jsxs("div",{className:"user",children:[R.jsx("img",{src:(e==null?void 0:e.avatar)||"./avater.png"}),R.jsx("h2",{children:e==null?void 0:e.username}),R.jsx("p",{children:e==null?void 0:e.email})]}),R.jsxs("div",{className:"info",children:[R.jsx("div",{className:"option",children:R.jsxs("div",{className:"title",children:[R.jsx("span",{children:"Chat Settings"}),R.jsx("img",{src:"./arrowUp.png",alt:""})]})}),R.jsx("div",{className:"option",children:R.jsxs("div",{className:"title",children:[R.jsx("span",{children:"Privacy & Help"}),R.jsx("img",{src:"./arrowUp.png",alt:""})]})}),R.jsxs("div",{className:"option",children:[R.jsxs("div",{className:"title",children:[R.jsx("span",{children:"Shared Photos"}),R.jsx("img",{src:"./arrowUp.png",alt:""})]}),R.jsxs("div",{className:"photos",children:[R.jsxs("div",{className:"photoItem",children:[R.jsxs("div",{className:"photoDetail",children:[R.jsx("img",{src:"./photo1.png",alt:"none"}),R.jsx("span",{children:" Photo 24 Feb 2024"})]}),R.jsx("img",{src:"./download.png",alt:"none",className:"icon"})]}),R.jsxs("div",{className:"photoItem",children:[R.jsxs("div",{className:"photoDetail",children:[R.jsx("img",{src:"./photo1.png",alt:"none"}),R.jsx("span",{children:" Photo 24 Feb 2024"})]}),R.jsx("img",{src:"./download.png",alt:"none",className:"icon"})]}),R.jsxs("div",{className:"photoItem",children:[R.jsxs("div",{className:"photoDetail",children:[R.jsx("img",{src:"./photo1.png",alt:"none"}),R.jsx("span",{children:" Photo 24 Feb 2024"})]}),R.jsx("img",{src:"./download.png",alt:"none",className:"icon"})]}),R.jsxs("div",{className:"photoItem",children:[R.jsxs("div",{className:"photoDetail",children:[R.jsx("img",{src:"./photo1.png",alt:"none"}),R.jsx("span",{children:" Photo 24 Feb 2024"})]}),R.jsx("img",{src:"./download.png",alt:"none",className:"icon"})]})]})]}),R.jsx("div",{className:"option",children:R.jsxs("div",{className:"title",children:[R.jsx("span",{children:"Shared Files"}),R.jsx("img",{src:"./arrowUp.png",alt:""})]})}),R.jsx("button",{onClick:o,children:n?"You are Blocked!":r?"User Blocked!":"Block User"}),R.jsx("button",{className:"logOut",onClick:()=>bc.signOut(),children:"Log Out"})]})]})};function np(t){return[].concat(t)}function Sm(t){return t.startsWith(":")}function YE(t){return Od(t)&&(t==="*"||t.length>1&&":>~.+*".includes(t.slice(0,1))||$E(t))}function HE(t,e){return(Od(e)||typeof e=="number")&&!JE(t)&&!Sm(t)&&!WE(t)}function WE(t){return t.startsWith("@media")}function Hz(t){return t==="."}function JE(t){return t==="--"}function Od(t){return t+""===t}function $E(t){return Od(t)&&(t.startsWith("&")||Sm(t))}function xc(t,e=""){return t.filter(Boolean).join(e)}function ZE(t,e){let n=0;if(e.length===0)return n.toString();for(let r=0;r<e.length;r++){const i=e.charCodeAt(r);n=(n<<5)-n+i,n=n&n}return`${t??"cl"}_${n.toString(36)}`}function Wz(t,e){return t==="content"?`"${e}"`:e}function Jz(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function o4(t,e){return`${t}:${e}`}function $z(t){return t?`.${t}`:""}function Zz(t,e){return t?`${t}
${e}`:e}var qE=class KE{constructor(e,n,r,i){this.sheet=e,this.property=n,this.value=r,this.selector=i,this.property=n,this.value=r,this.joined=o4(n,r);const s=this.selector.preconditions.concat(this.selector.postconditions);this.hash=this.selector.hasConditions?this.selector.scopeClassName:ZE(this.sheet.name,this.joined),this.key=xc([this.joined,s,this.hash])}toString(){let e=rp(this.selector.preconditions,{right:this.hash});return e=rp(this.selector.postconditions,{left:e}),`${e} {${KE.genRule(this.property,this.value)}}`}static genRule(e,n){const r=Jz(e);return o4(r,Wz(e,n))+";"}};function rp(t,{left:e="",right:n=""}={}){const r=t.reduce((i,s)=>Sm(s)?i+s:$E(s)?i+s.slice(1):xc([i,s]," "),e);return xc([r,$z(n)]," ")}var qz=class Dl{constructor(e,n=null,{preconditions:r,postconditions:i}={}){this.sheet=e,this.preconditions=[],this.scopeClassName=null,this.scopeName=null,this.postconditions=[],this.preconditions=r?np(r):[],this.postconditions=i?np(i):[],this.setScope(n)}setScope(e){return e?(this.scopeClassName||(this.scopeName=e,this.scopeClassName=ZE(this.sheet.name,e+this.sheet.count)),this):this}get hasConditions(){return this.preconditions.length>0||this.postconditions.length>0}addScope(e){return new Dl(this.sheet,e,{preconditions:this.preconditions,postconditions:this.postconditions})}addPrecondition(e){return new Dl(this.sheet,this.scopeClassName,{postconditions:this.postconditions,preconditions:this.preconditions.concat(e)})}addPostcondition(e){return new Dl(this.sheet,this.scopeClassName,{preconditions:this.preconditions,postconditions:this.postconditions.concat(e)})}createRule(e,n){return new qE(this.sheet,e,n,this)}},Kz=class{constructor(t,e){this.name=t,this.rootNode=e,this.storedStyles={},this.storedClasses={},this.style="",this.count=0,this.id=`flairup-${t}`,this.styleTag=this.createStyleTag()}getStyle(){return this.style}append(t){this.style=Zz(this.style,t)}apply(){this.count++,this.styleTag&&(this.styleTag.innerHTML=this.style)}isApplied(){return!!this.styleTag}createStyleTag(){if(typeof document>"u"||this.isApplied()||this.rootNode===null)return this.styleTag;const t=document.createElement("style");return t.type="text/css",t.id=this.id,(this.rootNode??document.head).appendChild(t),t}addRule(t){const e=this.storedClasses[t.key];return Od(e)?e:(this.storedClasses[t.key]=t.hash,this.storedStyles[t.hash]=[t.property,t.value],this.append(t.toString()),t.hash)}};function km(t,e){for(const n in t)e(n.trim(),t[n])}function oe(...t){const e=t.reduce((n,r)=>(r instanceof Set?n.push(...r):typeof r=="string"?n.push(r):Array.isArray(r)?n.push(oe(...r)):typeof r=="object"&&Object.entries(r).forEach(([i,s])=>{s&&n.push(i)}),n),[]);return xc(e," ").trim()}function Xz(t,e){const n=new Kz(t,e);return{create:r,getStyle:n.getStyle.bind(n),isApplied:n.isApplied.bind(n)};function r(i){const s={};return XE(n,i,new qz(n)).forEach(([a,u,l])=>{zd(n,u,l).forEach(c=>{o(a,c)})}),n.apply(),s;function o(a,u){s[a]=s[a]??new Set,s[a].add(u)}}}function XE(t,e,n){const r=[];return km(e,(i,s)=>{if(YE(i))return XE(t,s,n.addPrecondition(i)).forEach(o=>r.push(o));r.push([i,e[i],n.addScope(i)])}),r}function zd(t,e,n){const r=new Set;return km(e,(i,s)=>{let o=[];if(YE(i))o=zd(t,s,n.addPostcondition(i));else if(Hz(i))o=np(s);else if(WE(i))o=tU(t,s,i,n);else if(JE(i))o=eU(t,s,n);else if(HE(i,s)){const a=n.createRule(i,s);t.addRule(a),r.add(a.hash)}return eT(o,r)}),r}function eT(t,e){return t.forEach(n=>e.add(n)),e}function eU(t,e,n){const r=new Set,i=[];if(km(e,(s,o)=>{if(HE(s,o)){i.push(qE.genRule(s,o));return}const a=zd(t,o??{},n);eT(a,r)}),!n.scopeClassName)return r;if(i.length){const s=i.join(" ");t.append(`${rp(n.preconditions,{right:n.scopeClassName})} {${s}}`)}return r.add(n.scopeClassName),r}function tU(t,e,n,r){t.append(n+" {");const i=zd(t,e,r);return t.append("}"),i}function xe(){return xe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xe.apply(this,arguments)}function nU(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,ip(t,e)}function ip(t,e){return ip=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},ip(t,e)}function tT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rU(t,e){if(t){if(typeof t=="string")return a4(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a4(t,e)}}function a4(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function iU(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=rU(t))||e){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
    `+M0+" "+o3+` {
      display: none;
    }


    `+M0+" "+n+` {
      display: flex;
    }

    `+M0+" "+nV+":not(:has("+n+`)) {
      display: none;
    }
  `)}function iV(t){return[o3,'[data-full-name*="',op(t),'"]'].join("")}var sV="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyMCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTEyLDguODFjMCwyLjA4LTEuNjgsMy43Ni0zLjc2LDMuNzZjLTIuMDgsMC0zLjc2LTEuNjgtMy43Ni0zLjc2CgljMC0yLjA4LDEuNjgtMy43NiwzLjc2LTMuNzZDMTAuMzIsNS4wNSwxMiw2LjczLDEyLDguODF6IE0xMS4yMywxMi43MmMtMC44MywwLjY0LTEuODcsMS4wMS0yLjk5LDEuMDFjLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTIKCWMwLTIuNzIsMi4yLTQuOTIsNC45Mi00LjkyYzIuNzIsMCw0LjkyLDIuMiw0LjkyLDQuOTJjMCwxLjEzLTAuMzgsMi4xNi0xLjAxLDIuOTlsMy45NCwzLjkzYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyCgljLTAuMjUsMC4yNS0wLjY2LDAuMjUtMC45MiwwTDExLjIzLDEyLjcyeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTEyLDI4LjgxYzAsMi4wOC0xLjY4LDMuNzYtMy43NiwzLjc2Yy0yLjA4LDAtMy43Ni0xLjY4LTMuNzYtMy43NgoJYzAtMi4wOCwxLjY4LTMuNzYsMy43Ni0zLjc2QzEwLjMyLDI1LjA1LDEyLDI2LjczLDEyLDI4LjgxeiBNMTEuMjMsMzIuNzJjLTAuODMsMC42NC0xLjg3LDEuMDEtMi45OSwxLjAxCgljLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTJjMC0yLjcyLDIuMi00LjkyLDQuOTItNC45MmMyLjcyLDAsNC45MiwyLjIsNC45Miw0LjkyYzAsMS4xMy0wLjM4LDIuMTYtMS4wMSwyLjk5bDMuOTQsMy45MwoJYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyYy0wLjI1LDAuMjUtMC42NiwwLjI1LTAuOTIsMEwxMS4yMywzMi43MnoiLz4KPC9zdmc+";function oV(){return T.createElement("div",{className:oe(aV.icnSearch)})}var aV=De.create(xe({icnSearch:{".":"epr-icn-search",content:"",position:"absolute",top:"50%",left:"var(--epr-search-bar-inner-padding)",transform:"translateY(-50%)",width:"20px",height:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"0 0",backgroundSize:"20px",backgroundImage:"url("+sV+")"}},mi("icnSearch",{backgroundPositionY:"-20px"})));function fV(){var t=yT(),e=Um();return t?null:T.createElement(r3,{className:oe(xl.overlay)},T.createElement(uV,null),e?T.createElement(i3,null):null)}function uV(){var t=T.useState(0),e=t[0],n=t[1],r=_s(),i=Ei(),s=FU(),o=QU(),a=k5(),u=a.statusSearchResults,l=a.searchTerm,c=a.onChange,h=i==null?void 0:i.current,p=h==null?void 0:h.value;return T.createElement($d,{className:oe(xl.searchContainer)},T.createElement(rV,{value:p}),T.createElement("input",{autoFocus:o,"aria-label":"Type to search for an emoji",onFocus:r,className:oe(xl.search),type:"text","aria-controls":"epr-search-id",placeholder:s,onChange:function(I){n(e+1),setTimeout(function(){var S,N;c((S=I==null||(N=I.target)==null?void 0:N.value)!=null?S:p)})},ref:i}),l?T.createElement("div",{role:"status",className:oe("epr-status-search-results",xl.visuallyHidden),"aria-live":"polite",id:"epr-search-id","aria-atomic":"true"},u):null,T.createElement(oV,null),T.createElement(eV,null))}var xl=De.create(xe({overlay:{padding:"var(--epr-header-padding)",zIndex:"var(--epr-header-overlay-z-index)"},searchContainer:{".":"epr-search-container",flex:"1",display:"block",minWidth:"0"},visuallyHidden:{clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"},search:{outline:"none",transition:"all 0.2s ease-in-out",color:"var(--epr-search-input-text-color)",borderRadius:"var(--epr-search-input-border-radius)",padding:"var(--epr-search-input-padding)",height:"var(--epr-search-input-height)",backgroundColor:"var(--epr-search-input-bg-color)",border:"1px solid var(--epr-search-input-bg-color)",width:"100%",":focus":{backgroundColor:"var(--epr-search-input-bg-color-active)",border:"1px solid var(--epr-search-border-color)"},"::placeholder":{color:"var(--epr-search-input-placeholder-color)"}},btnClearSearch:{".":"epr-btn-clear-search",position:"absolute",right:"var(--epr-search-bar-inner-padding)",height:"30px",width:"30px",display:"flex",alignItems:"center",justifyContent:"center",top:"50%",transform:"translateY(-50%)",padding:"0",borderRadius:"50%",":hover":{background:"var(--epr-hover-bg-color)"},":focus":{background:"var(--epr-hover-bg-color)"}},icnClearnSearch:{".":"epr-icn-clear-search",backgroundColor:"transparent",backgroundRepeat:"no-repeat",backgroundSize:"20px",height:"20px",width:"20px",backgroundImage:"url("+s3+")",":hover":{backgroundPositionY:"-20px"},":focus":{backgroundPositionY:"-20px"}}},mi("icnClearnSearch",{backgroundPositionY:"-40px"}),mi("btnClearSearch",{":hover > .epr-icn-clear-search":{backgroundPositionY:"-60px"}})));function lV(){return T.createElement($d,{className:oe("epr-header",ws.hiddenOnReactions)},T.createElement(fV,null),T.createElement(K8,null))}function cV(t){return T.createElement(c5,null,T.createElement(sU,null),T.createElement(zU,Object.assign({},t),T.createElement(dV,null)))}function dV(){var t=Vd(),e=t[0],n=hT(),r=T.useState(!e),i=r[0],s=r[1],o=YU();return T.useEffect(function(){e&&!n||i||s(!0)},[i,n,e]),o?T.createElement(J5,null,T.createElement(M8,null),T.createElement(hV,{renderAll:i})):null}function hV(t){var e=t.renderAll;return e?T.createElement(T.Fragment,null,T.createElement(lV,null),T.createElement(D8,null),T.createElement(B8,null)):null}var pV=T.memo(cV,nT),gV=function(t){nU(e,t);function e(r){var i;return i=t.call(this,r)||this,i.state={hasError:!1},i}e.getDerivedStateFromError=function(){return{hasError:!0}};var n=e.prototype;return n.componentDidCatch=function(i,s){console.error("Emoji Picker React failed to render:",i,s)},n.render=function(){return this.state.hasError?null:this.props.children},e}(T.Component);function mV(t){var e=VU({onEmojiClick:t.onEmojiClick,onReactionClick:t.onReactionClick,onSkinToneChange:t.onSkinToneChange});return T.createElement(gV,null,T.createElement(cT.Provider,{value:e},T.createElement(pV,Object.assign({},t))))}const a3=async t=>{const n=LP(kP,`image/${new Date+t.name}`),r=MP(n,t);return new Promise((i,s)=>{r.on("state_changed",o=>{const a=o.bytesTransferred/o.totalBytes*100;console.log("Upload is "+a+"% done")},o=>{s("Something Went Wrong !"+o.code)},()=>{IP(r.snapshot.ref).then(o=>{console.log("File available at",o),i(o)})})})},yV=()=>{var M;const[t,e]=T.useState(!1),[n,r]=T.useState(),[i,s]=T.useState(""),[o,a]=T.useState({file:null,url:""}),{currentUser:u}=gs(),{chatId:l,user:c,isCurrentUserBlocked:h,isReceieverBlocked:p}=xd(),v=T.useRef(null);T.useEffect(()=>{var y;(y=v.current)==null||y.scrollIntoView({behavior:"smooth"})},[]),T.useEffect(()=>{const y=TL(In(Ln,"chats",l),_=>{r(_.data())});return()=>{y()}},[l]);const I=y=>{s(_=>_+y.emoji),e(!1)},S=y=>{y.target.files[0]&&a({file:y.target.files[0],url:URL.createObjectURL(y.target.files[0])})},N=async()=>{if(i==="")return;let y=null;try{o.file&&(y=await a3(o.file)),await bo(In(Ln,"chats",l),{messages:_c({senderId:u.id,text:i,createdAt:new Date,...y&&{img:y}})}),[u.id,c.id].forEach(async A=>{const z=In(Ln,"userchats",A),x=await Yg(z);if(x.exists()){const C=x.data(),m=C.chats.findIndex(L=>L.chatId===l);C.chats[m].lastMessage=i,C.chats[m].isSeen=A===u.id,C.chats[m].updatedAt=Date.now(),await bo(z,{chats:C.chats})}})}catch(_){console.log(_)}a({file:null,url:""}),s("")};return R.jsxs("div",{className:"chat",children:[R.jsxs("div",{className:"top",children:[R.jsxs("div",{className:"user",children:[R.jsx("img",{src:(c==null?void 0:c.avatar)||"./avater.png",alt:"none"}),R.jsxs("div",{className:"texts",children:[R.jsx("span",{children:c==null?void 0:c.username}),R.jsx("p",{children:c==null?void 0:c.email})]})]}),R.jsxs("div",{className:"icons",children:[R.jsx("img",{src:"./phone.png",alt:"phone"}),R.jsx("img",{src:"./video.png",alt:"video"}),R.jsx("img",{src:"./info.png",alt:"info"})]})]}),R.jsxs("div",{className:"center",children:[(M=n==null?void 0:n.messages)==null?void 0:M.map(y=>R.jsxs("div",{className:y.senderId===(u==null?void 0:u.id)?"message own":"message",children:[R.jsx("img",{src:"./avatar.png",alt:"none"}),R.jsxs("div",{className:"texts",children:[y.img&&R.jsx("img",{src:y.img,alt:""}),R.jsx("p",{children:y.text})]})]},y==null?void 0:y.createAt)),o.url&&R.jsx("div",{className:"message own",children:R.jsx("div",{className:"texts",children:R.jsx("img",{src:o.url,alt:""})})}),R.jsx("div",{ref:v})]}),R.jsxs("div",{className:"bottom",children:[R.jsxs("div",{className:"icons",children:[R.jsx("label",{htmlFor:"file",children:R.jsx("img",{src:"./img.png",alt:"camera"})}),R.jsx("input",{type:"file",id:"file",style:{display:"none"},onChange:S}),R.jsx("img",{src:"./camera.png",alt:"camera"}),R.jsx("img",{src:"./mic.png",alt:"camera"})]}),R.jsx("input",{type:"text",placeholder:h||p?"You Cannot send any message":"Type a message...",value:i,onChange:y=>s(y.target.value),disabled:h||p}),R.jsxs("div",{className:"emoji",children:[R.jsx("img",{src:"./emoji.png",alt:"none",onClick:()=>e(y=>!y)}),R.jsx("div",{className:"picker",children:R.jsx(mV,{open:t,onEmojiClick:I})})]}),R.jsx("button",{className:"sendButton",onClick:N,disabled:h||p,children:"Send"})]})]})};function f3(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=f3(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function $r(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=f3(t))&&(r&&(r+=" "),r+=e);return r}const Ff=t=>typeof t=="number"&&!isNaN(t),Gi=t=>typeof t=="string",on=t=>typeof t=="function",Ol=t=>Gi(t)||on(t)?t:null,fp=t=>T.isValidElement(t)||Gi(t)||on(t)||Ff(t);function wV(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Zd(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:u,preventExitTransition:l,done:c,nodeRef:h,isIn:p,playToast:v}=o;const I=r?`${e}--${u}`:e,S=r?`${n}--${u}`:n,N=T.useRef(0);return T.useLayoutEffect(()=>{const M=h.current,y=I.split(" "),_=A=>{A.target===h.current&&(v(),M.removeEventListener("animationend",_),M.removeEventListener("animationcancel",_),N.current===0&&A.type!=="animationcancel"&&M.classList.remove(...y))};M.classList.add(...y),M.addEventListener("animationend",_),M.addEventListener("animationcancel",_)},[]),T.useEffect(()=>{const M=h.current,y=()=>{M.removeEventListener("animationend",y),i?wV(M,c,s):c()};p||(l?y():(N.current=1,M.className+=` ${S}`,M.addEventListener("animationend",y)))},[p]),le.createElement(le.Fragment,null,a)}}function T4(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const Ut=new Map;let Bf=[];const up=new Set,vV=t=>up.forEach(e=>e(t)),u3=()=>Ut.size>0;function l3(t,e){var n;if(e)return!((n=Ut.get(e))==null||!n.isToastActive(t));let r=!1;return Ut.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function c3(t,e){fp(t)&&(u3()||Bf.push({content:t,options:e}),Ut.forEach(n=>{n.buildToast(t,e)}))}function b4(t,e){Ut.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function _V(t){const{subscribe:e,getSnapshot:n,setProps:r}=T.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const u=function(c,h,p){let v=1,I=0,S=[],N=[],M=[],y=h;const _=new Map,A=new Set,z=()=>{M=Array.from(_.values()),A.forEach(m=>m())},x=m=>{N=m==null?[]:N.filter(L=>L!==m),z()},C=m=>{const{toastId:L,onOpen:E,updateId:k,children:j}=m.props,b=k==null;m.staleId&&_.delete(m.staleId),_.set(L,m),N=[...N,m.props.toastId].filter(Qe=>Qe!==m.staleId),z(),p(T4(m,b?"added":"updated")),b&&on(E)&&E(T.isValidElement(j)&&j.props)};return{id:c,props:y,observe:m=>(A.add(m),()=>A.delete(m)),toggle:(m,L)=>{_.forEach(E=>{L!=null&&L!==E.props.toastId||on(E.toggle)&&E.toggle(m)})},removeToast:x,toasts:_,clearQueue:()=>{I-=S.length,S=[]},buildToast:(m,L)=>{if((ee=>{let{containerId:fe,toastId:Ge,updateId:He}=ee;const ut=fe?fe!==c:c!==1,Rt=_.has(Ge)&&He==null;return ut||Rt})(L))return;const{toastId:E,updateId:k,data:j,staleId:b,delay:Qe}=L,Gt=()=>{x(E)},Gn=k==null;Gn&&I++;const Xe={...y,style:y.toastStyle,key:v++,...Object.fromEntries(Object.entries(L).filter(ee=>{let[fe,Ge]=ee;return Ge!=null})),toastId:E,updateId:k,data:j,closeToast:Gt,isIn:!1,className:Ol(L.className||y.toastClassName),bodyClassName:Ol(L.bodyClassName||y.bodyClassName),progressClassName:Ol(L.progressClassName||y.progressClassName),autoClose:!L.isLoading&&(B=L.autoClose,J=y.autoClose,B===!1||Ff(B)&&B>0?B:J),deleteToast(){const ee=_.get(E),{onClose:fe,children:Ge}=ee.props;on(fe)&&fe(T.isValidElement(Ge)&&Ge.props),p(T4(ee,"removed")),_.delete(E),I--,I<0&&(I=0),S.length>0?C(S.shift()):z()}};var B,J;Xe.closeButton=y.closeButton,L.closeButton===!1||fp(L.closeButton)?Xe.closeButton=L.closeButton:L.closeButton===!0&&(Xe.closeButton=!fp(y.closeButton)||y.closeButton);let $=m;T.isValidElement(m)&&!Gi(m.type)?$=T.cloneElement(m,{closeToast:Gt,toastProps:Xe,data:j}):on(m)&&($=m({closeToast:Gt,toastProps:Xe,data:j}));const ge={content:$,props:Xe,staleId:b};y.limit&&y.limit>0&&I>y.limit&&Gn?S.push(ge):Ff(Qe)?setTimeout(()=>{C(ge)},Qe):C(ge)},setProps(m){y=m},setToggle:(m,L)=>{_.get(m).toggle=L},isToastActive:m=>N.some(L=>L===m),getSnapshot:()=>y.newestOnTop?M.reverse():M}}(o,s,vV);Ut.set(o,u);const l=u.observe(a);return Bf.forEach(c=>c3(c.content,c.options)),Bf=[],()=>{l(),Ut.delete(o)}},setProps(a){var u;(u=Ut.get(o))==null||u.setProps(a)},getSnapshot(){var a;return(a=Ut.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=T.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:u}=a.props;o.has(u)||o.set(u,[]),o.get(u).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:l3,count:i==null?void 0:i.length}}function MV(t){const[e,n]=T.useState(!1),[r,i]=T.useState(!1),s=T.useRef(null),o=T.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:u,closeToast:l,onClick:c,closeOnClick:h}=t;var p,v;function I(){n(!0)}function S(){n(!1)}function N(_){const A=s.current;o.canDrag&&A&&(o.didMove=!0,e&&S(),o.delta=t.draggableDirection==="x"?_.clientX-o.start:_.clientY-o.start,o.start!==_.clientX&&(o.canCloseOnClick=!1),A.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,A.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function M(){document.removeEventListener("pointermove",N),document.removeEventListener("pointerup",M);const _=s.current;if(o.canDrag&&o.didMove&&_){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();_.style.transition="transform 0.2s, opacity 0.2s",_.style.removeProperty("transform"),_.style.removeProperty("opacity")}}(v=Ut.get((p={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||v.setToggle(p.id,p.fn),T.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||S(),window.addEventListener("focus",I),window.addEventListener("blur",S),()=>{window.removeEventListener("focus",I),window.removeEventListener("blur",S)}},[t.pauseOnFocusLoss]);const y={onPointerDown:function(_){if(t.draggable===!0||t.draggable===_.pointerType){o.didMove=!1,document.addEventListener("pointermove",N),document.addEventListener("pointerup",M);const A=s.current;o.canCloseOnClick=!0,o.canDrag=!0,A.style.transition="none",t.draggableDirection==="x"?(o.start=_.clientX,o.removalDistance=A.offsetWidth*(t.draggablePercent/100)):(o.start=_.clientY,o.removalDistance=A.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(_){const{top:A,bottom:z,left:x,right:C}=s.current.getBoundingClientRect();_.nativeEvent.type!=="touchend"&&t.pauseOnHover&&_.clientX>=x&&_.clientX<=C&&_.clientY>=A&&_.clientY<=z?S():I()}};return a&&u&&(y.onMouseEnter=S,t.stacked||(y.onMouseLeave=I)),h&&(y.onClick=_=>{c&&c(_),o.canCloseOnClick&&l()}),{playToast:I,pauseToast:S,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:y}}function IV(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:u,progress:l,rtl:c,isIn:h,theme:p}=t;const v=s||u&&l===0,I={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};u&&(I.transform=`scaleX(${l})`);const S=$r("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),N=on(o)?o({rtl:c,type:i,defaultClassName:S}):$r(S,o),M={[u&&l>=1?"onTransitionEnd":"onAnimationEnd"]:u&&l<1?null:()=>{h&&r()}};return le.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},le.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${i}`}),le.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:N,style:I,...M}))}let LV=1;const d3=()=>""+LV++;function CV(t){return t&&(Gi(t.toastId)||Ff(t.toastId))?t.toastId:d3()}function sf(t,e){return c3(t,e),e.toastId}function Fc(t,e){return{...e,type:e&&e.type||t,toastId:CV(e)}}function ll(t){return(e,n)=>sf(e,Fc(t,n))}function ve(t,e){return sf(t,Fc("default",e))}ve.loading=(t,e)=>sf(t,Fc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),ve.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=Gi(i)?ve.loading(i,n):ve.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(c,h,p)=>{if(h==null)return void ve.dismiss(r);const v={type:c,...a,...n,data:p},I=Gi(h)?{render:h}:h;return r?ve.update(r,{...v,...I}):ve(I.render,{...v,...I}),p},l=on(t)?t():t;return l.then(c=>u("success",o,c)).catch(c=>u("error",s,c)),l},ve.success=ll("success"),ve.info=ll("info"),ve.error=ll("error"),ve.warning=ll("warning"),ve.warn=ve.warning,ve.dark=(t,e)=>sf(t,Fc("default",{theme:"dark",...e})),ve.dismiss=function(t){(function(e){var n;if(u3()){if(e==null||Gi(n=e)||Ff(n))Ut.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=Ut.get(e.containerId);r?r.removeToast(e.id):Ut.forEach(i=>{i.removeToast(e.id)})}}else Bf=Bf.filter(r=>e!=null&&r.options.toastId!==e)})(t)},ve.clearWaitingQueue=function(t){t===void 0&&(t={}),Ut.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},ve.isActive=l3,ve.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=Ut.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:d3()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,sf(o,s)}},ve.done=t=>{ve.update(t,{progress:1})},ve.onChange=function(t){return up.add(t),()=>{up.delete(t)}},ve.play=t=>b4(!0,t),ve.pause=t=>b4(!1,t);const EV=typeof window<"u"?T.useLayoutEffect:T.useEffect,cl=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return le.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},I0={info:function(t){return le.createElement(cl,{...t},le.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return le.createElement(cl,{...t},le.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return le.createElement(cl,{...t},le.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return le.createElement(cl,{...t},le.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return le.createElement("div",{className:"Toastify__spinner"})}},TV=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=MV(t),{closeButton:o,children:a,autoClose:u,onClick:l,type:c,hideProgressBar:h,closeToast:p,transition:v,position:I,className:S,style:N,bodyClassName:M,bodyStyle:y,progressClassName:_,progressStyle:A,updateId:z,role:x,progress:C,rtl:m,toastId:L,deleteToast:E,isIn:k,isLoading:j,closeOnClick:b,theme:Qe}=t,Gt=$r("Toastify__toast",`Toastify__toast-theme--${Qe}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":m},{"Toastify__toast--close-on-click":b}),Gn=on(S)?S({rtl:m,position:I,type:c,defaultClassName:Gt}):$r(Gt,S),Xe=function(ge){let{theme:ee,type:fe,isLoading:Ge,icon:He}=ge,ut=null;const Rt={theme:ee,type:fe};return He===!1||(on(He)?ut=He({...Rt,isLoading:Ge}):T.isValidElement(He)?ut=T.cloneElement(He,Rt):Ge?ut=I0.spinner():(Kd=>Kd in I0)(fe)&&(ut=I0[fe](Rt))),ut}(t),B=!!C||!u,J={closeToast:p,type:c,theme:Qe};let $=null;return o===!1||($=on(o)?o(J):T.isValidElement(o)?T.cloneElement(o,J):function(ge){let{closeToast:ee,theme:fe,ariaLabel:Ge="close"}=ge;return le.createElement("button",{className:`Toastify__close-button Toastify__close-button--${fe}`,type:"button",onClick:He=>{He.stopPropagation(),ee(He)},"aria-label":Ge},le.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},le.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(J)),le.createElement(v,{isIn:k,done:E,position:I,preventExitTransition:n,nodeRef:r,playToast:s},le.createElement("div",{id:L,onClick:l,"data-in":k,className:Gn,...i,style:N,ref:r},le.createElement("div",{...k&&{role:x},className:on(M)?M({type:c}):$r("Toastify__toast-body",M),style:y},Xe!=null&&le.createElement("div",{className:$r("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},Xe),le.createElement("div",null,a)),$,le.createElement(IV,{...z&&!B?{key:`pb-${z}`}:{},rtl:m,theme:Qe,delay:u,isRunning:e,isIn:k,closeToast:p,hide:h,type:c,style:A,className:_,controlledProgress:B,progress:C||0})))},qd=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},bV=Zd(qd("bounce",!0));Zd(qd("slide",!0));Zd(qd("zoom"));Zd(qd("flip"));const SV={position:"top-right",transition:bV,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function kV(t){let e={...SV,...t};const n=t.stacked,[r,i]=T.useState(!0),s=T.useRef(null),{getToastToRender:o,isToastActive:a,count:u}=_V(e),{className:l,style:c,rtl:h,containerId:p}=e;function v(S){const N=$r("Toastify__toast-container",`Toastify__toast-container--${S}`,{"Toastify__toast-container--rtl":h});return on(l)?l({position:S,rtl:h,defaultClassName:N}):$r(N,Ol(l))}function I(){n&&(i(!0),ve.play())}return EV(()=>{if(n){var S;const N=s.current.querySelectorAll('[data-in="true"]'),M=12,y=(S=e.position)==null?void 0:S.includes("top");let _=0,A=0;Array.from(N).reverse().forEach((z,x)=>{const C=z;C.classList.add("Toastify__toast--stacked"),x>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=y?"top":"bot");const m=_*(r?.2:1)+(r?0:M*x);C.style.setProperty("--y",`${y?m:-1*m}px`),C.style.setProperty("--g",`${M}`),C.style.setProperty("--s",""+(1-(r?A:0))),_+=C.offsetHeight,A+=.025})}},[r,u,n]),le.createElement("div",{ref:s,className:"Toastify",id:p,onMouseEnter:()=>{n&&(i(!1),ve.pause())},onMouseLeave:I},o((S,N)=>{const M=N.length?{...c}:{...c,pointerEvents:"none"};return le.createElement("div",{className:v(S),style:M,key:`container-${S}`},N.map(y=>{let{content:_,props:A}=y;return le.createElement(TV,{...A,stacked:n,collapseAll:I,isIn:a(A.toastId,A.containerId),style:A.style,key:`toast-${A.key}`},_)}))}))}const NV=()=>{const[t,e]=T.useState({file:null,url:""}),[n,r]=T.useState(!1),i=a=>{a.target.files[0]&&e({file:a.target.files[0],url:URL.createObjectURL(a.target.files[0])})},s=async a=>{a.preventDefault();const u=new FormData(a.target),{username:l,email:c,password:h}=Object.fromEntries(u);try{const p=await $D(bc,c,h),v=await a3(t.file);await z1(In(Ln,"users",p.user.uid),{username:l,email:c,avatar:v,id:p.user.uid,blocked:[]}),await z1(In(Ln,"userchats",p.user.uid),{chats:[]}),ve.success("Account created successfully !!! You can Login Now.")}catch(p){ve.error(p.message),console.log(p)}},o=async a=>{a.preventDefault(),r(!0);const u=new FormData(a.target),{email:l,password:c}=Object.fromEntries(u);try{await ZD(bc,l,c)}catch(h){console.log(h),ve.error(h.message)}finally{r(!1)}};return R.jsxs("div",{className:"login",children:[R.jsxs("div",{className:"item",children:[R.jsx("h2",{children:" Welcome Back"}),R.jsxs("form",{onSubmit:o,children:[R.jsx("input",{type:"text",placeholder:"Email",name:"email"}),R.jsx("input",{type:"password",placeholder:"Password",name:"password"}),R.jsx("button",{children:"Sign In"})]})]}),R.jsx("div",{className:"separator"}),R.jsxs("div",{className:"item",children:[R.jsx("h2",{children:" Create An Account"}),R.jsxs("form",{onSubmit:s,children:[R.jsxs("label",{htmlFor:"file",children:[R.jsx("img",{src:t.url||"./avatar.png",alt:""}),"Upload An Image"]}),R.jsx("input",{type:"file",id:"file",style:{display:"none"},onChange:i}),R.jsx("input",{type:"text",placeholder:"Username",name:"username"}),R.jsx("input",{type:"text",placeholder:"Email",name:"email"}),R.jsx("input",{type:"password",placeholder:"Password",name:"password"}),R.jsx("button",{children:"Sign Up"})]})]})]})},AV=()=>R.jsx("div",{className:"",children:R.jsx(kV,{position:"bottom-right"})}),jV=()=>{const{currentUser:t,isLoading:e,fetchUserInfo:n}=gs(),{chatId:r}=xd();return T.useEffect(()=>{const i=XD(bc,s=>{n(s==null?void 0:s.uid)});return()=>{i()}},[n]),e?R.jsx("div",{className:"loading",children:"Loading..."}):R.jsx(R.Fragment,{children:R.jsxs("div",{className:"container",children:[t?R.jsxs(R.Fragment,{children:[R.jsx(Gz,{}),r&&R.jsx(yV,{}),r&&R.jsx(Yz,{})]}):R.jsx(NV,{}),R.jsx(AV,{})]})})};L0.createRoot(document.getElementById("root")).render(R.jsx(le.StrictMode,{children:R.jsx(jV,{})}));