function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function y(e,t,n){var i,r,o,u,f,a,c=0,l=!1,s=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(T,t),l?b(e):u}function w(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-c>=o}function T(){var e=v();if(w(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-a);return s?p(n,o-(e-c)):n}(e))}function h(e){return f=void 0,y&&i?b(e):(i=r=void 0,u)}function O(){var e=v(),n=w(e);if(i=arguments,r=this,a=e,n){if(void 0===f)return j(a);if(s)return f=setTimeout(T,t),b(a)}return void 0===f&&(f=setTimeout(T,t)),u}return t=g(t)||0,m(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(g(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=r=f=void 0},O.flush=function(){return void 0===f?u:h(v())},O}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector("iframe"),j=new Vimeo.Player(b);j.on("timeupdate",e(t)((function(e){const t=JSON.stringify(e);localStorage.setItem("videoplayer-current-time",t)}),1e3));const w=localStorage.getItem("videoplayer-current-time"),T=JSON.parse(w);j.setCurrentTime(T.seconds),localStorage.removeItem("videoplayer-current-time");
//# sourceMappingURL=02-video.e91816ac.js.map
