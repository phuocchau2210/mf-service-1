"use strict";(self.webpackChunkservice_1=self.webpackChunkservice_1||[]).push([[64],{64:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var n=r(83),o=r.n(n),i=r(71),l=(r(765),r(422),r(845));function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s={select:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return"SELECT_UNIVERSITY"===t.type?u(u({},e),{},{select:t.payload}):e},y=r(980),f=function(e){var t=y.GlobalStore.Get(),r=(0,l.MT)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());t.RegisterStore("Service1",r,[y.GlobalStore.AllowAll]);return o().createElement("div",null,o().createElement("h1",null,"Form:"),o().createElement("select",{name:"",id:"",onChange:function(e){return r=e,void t.DispatchAction("Service1",(n=r.target.value,console.log("action: ",n),{type:"SELECT_UNIVERSITY",payload:n}));var r,n}},o().createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Select University"),o().createElement("option",{value:"A"},"University A"),o().createElement("option",{value:"B"},"University B"),o().createElement("option",{value:"C"},"University C")),o().createElement("br",null),o().createElement("button",{type:"button",className:"btn btn-primary"},"Primary (from bootstrap)"))},v=document.getElementById("service-1-app"),m=function(e){(0,i.render)(o().createElement(f,null),e)};v&&m(v);const E=m}}]);