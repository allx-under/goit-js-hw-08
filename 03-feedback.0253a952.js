!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var r,i,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function h(e){return l=e,f=setTimeout(j,t),d?y(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function j(){var e=p();if(O(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-c);return s?m(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?y(e):(r=i=void 0,u)}function T(){var e=p(),n=O(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return h(c);if(s)return f=setTimeout(j,t),y(c)}return void 0===f&&(f=setTimeout(j,t)),u}return t=S(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?g(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?c(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var h=document.querySelector(".feedback-form"),O=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea"),w="feedback-form-state",T={email:"",message:""};h.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value;localStorage.setItem(w,JSON.stringify(T))}),500)),h.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem(w);try{var n=JSON.parse(t);console.log(n)}catch(e){console.log("Submit error with parsing")}e.target.reset(),localStorage.removeItem(w)})),addEventListener("DOMContentLoaded",(function(){if(localStorage.getItem(w))try{var e=JSON.parse(localStorage.getItem(w));return O.value=e.email,j.value=e.message,e}catch(e){console.log("Error with parsing")}}))}();
//# sourceMappingURL=03-feedback.0253a952.js.map
