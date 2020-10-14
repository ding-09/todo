(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(645),i=t.n(o)()(!1);i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    box-sizing: border-box;\n    font-family: 'Source Sans Pro', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n}\n\n#default {\n    height: 100%;\n}\n\nheader {\n    background-color: #f45d4f;\n    width: 100%;\n    height: 50px;\n}\n\n#menu {\n    background-color: #f5f5f5;\n    display: flex; \n    flex-direction: column;\n    width: 20%;\n    min-height: 100%;\n    padding-top: 20px;\n    position: fixed;\n}\n\n#menu > div {\n    margin: 0 10px 0 30px;\n    height: 45px;\n    border-radius: 3px;\n    cursor: pointer;\n}\n\n#menu > div:hover {\n    background-color: white;\n}\n\n#menu i {\n    width: 25px;\n    text-align: center;\n    margin: 0 10px 7px 15px;\n    font-size: 21px;\n}\n\n#menu h3 {\n    display: inline-block;\n    padding-top: 12px;\n    height: 90%;\n    width: 70%;\n    font-size: 17px;\n}\n\n#inbox {\n    background-color: white;\n}\n\n#inbox i {\n    color: #87caff;\n}\n\n#today i { \n    color: #4caf50;\n}\n\n#upcoming i {\n    color: #673ab7;\n}\n\n#today h3, #upcoming h3 {\n    font-weight: 300;\n}\n\n#inbox-page {\n    float: right;\n    width: 80%;\n    height: 100%;\n    display: block;\n}\n\n.page-title {\n    width: 85%;\n    margin: 0 auto;\n    font-size: 21px;\n    margin-top: 20px;\n    padding-top: 10px;\n    height: 45px;\n}\n\n.add-task {\n    width: 85%;\n    height: 45px;\n    margin: 0 auto;\n    margin-top: 5px;\n    cursor: pointer;\n    position: relative;\n}\n\n.fa-plus {\n    color: #f45d4f;\n    font-size: 18px;\n    display: inline-block;\n    padding-left: 3px;\n    padding-top: 2px;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    margin-top: 10px;\n}\n\n.add-task-btn {\n    color: #757575;\n    border: none;\n    outline: none;\n    background-color: white;\n    font-size: 16px;\n    font-weight: 300;\n    position: absolute;\n    top: 11px;\n    margin-left: 10px;\n}\n\n.add-task:hover .fa-plus {\n    background-color: #e55a51;\n    color: white;\n}\n\n.add-task:hover .add-task-btn {\n    color: #e55a51;\n}\n\n#modal-bg {\n    width: 85%;\n    height: auto;\n    margin: 0 auto;\n    border: 1px solid #bdbdbd;\n    border-radius: 5px;\n}\n\n#modal-content {\n    height: inherit;\n}\n\ntextarea {\n    resize: none;\n    width: 95%;\n    border: none;\n    padding-left: 10px;\n    padding-top: 10px;\n    height: auto;\n    outline: none;\n    font-size: 15px;\n}\n\n#priority-btn {\n    float: right;\n    margin-right: 15px;\n    margin-bottom: 6px;\n    background-color: white;\n    outline: none;\n    border: none;\n    border-radius: 3px;\n}\n\n.fa-flag {\n    color: #9e9e9e;\n    font-size: 17px;\n    padding: 5px;\n}\n\n#priority-btn:hover .fa-flag {\n    background-color: #f5f5f5;\n    color: #424242;\n}",""]);const a=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t,o,i,a=n[1]||"",r=n[3];if(!r)return a;if(e&&"function"==typeof btoa){var d=(t=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(i," */")),c=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[a].concat(c).concat([d]).join("\n")}return[a].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var o,i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function r(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},o=[],i=0;i<n.length;i++){var d=n[i],c=e.base?d[0]+e.base:d[0],s=t[c]||0,l="".concat(c," ").concat(s);t[c]=s+1;var p=r(l),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(a[p].references++,a[p].updater(u)):a.push({identifier:l,updater:m(u,e),references:1}),o.push(l)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var r=i(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function p(n,e,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,i);else{var a=document.createTextNode(i),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(a,r[e]):n.appendChild(a)}}function u(n,e,t){var o=t.css,i=t.media,a=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,h=0;function m(n,e){var t,o,i;if(e.singleton){var a=h++;t=f||(f=c(e)),o=p.bind(null,t,a,!1),i=p.bind(null,t,a,!0)}else t=c(e),o=u.bind(null,t,e),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var i=r(t[o]);a[i].references--}for(var c=d(n,e),s=0;s<t.length;s++){var l=r(t[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=c}}}}},e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(28);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const i=()=>{const n=document.createElement("div");n.setAttribute("id","inbox-page");const e=document.createElement("h3");e.textContent="Inbox",e.classList.add("page-title"),n.appendChild(e);const t=(()=>{const n=document.createElement("div");n.setAttribute("id","modal-bg");const e=document.createElement("div");e.setAttribute="modal-content";const t=(()=>{const n=document.createElement("form");n.setAttribute("id","add-task-form");const e=document.createElement("div"),t=document.createElement("textarea");t.placeholder="e.g. Chase cats at 9pm",e.appendChild(t);const o=document.createElement("div"),i=document.createElement("button");i.setAttribute("id","priority-btn");const a=document.createElement("i");return a.classList.add("far","fa-flag"),i.appendChild(a),document.createElement("div").setAttribute("id","dropdown-content"),o.appendChild(i),e.appendChild(o),n.appendChild(e),n})();return e.appendChild(t),n.appendChild(e),n})();n.appendChild(t);const o=(()=>{const n=document.createElement("div");return function(){n.classList.add("add-task");const e=document.createElement("button");e.textContent="Add task";const t=document.createElement("i");t.classList.add("fas","fa-plus"),e.classList.add("add-task-btn"),n.appendChild(t),n.appendChild(e)}(),n})();return n.appendChild(o),n};(()=>{const n=document.getElementById("default"),e=document.createElement("header"),t=(()=>{const n=document.createElement("div");n.setAttribute("id","menu");const e=document.createElement("div");e.setAttribute("id","inbox");const t=document.createElement("i");t.classList.add("fas","fa-inbox"),e.appendChild(t);const o=document.createElement("h3");o.textContent="Inbox",e.appendChild(o);const i=document.createElement("div");i.setAttribute("id","today");const a=document.createElement("i");a.classList.add("far","fa-calendar"),i.appendChild(a);const r=document.createElement("h3");r.textContent="Today",i.appendChild(r);const d=document.createElement("div");d.setAttribute("id","upcoming");const c=document.createElement("i");c.classList.add("far","fa-calendar-alt"),d.appendChild(c);const s=document.createElement("h3");return s.textContent="Upcoming",d.appendChild(s),n.appendChild(e),n.appendChild(i),n.appendChild(d),n})(),o=i();n.appendChild(e),n.appendChild(t),n.appendChild(o)})()()})()})();