window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function o(e,t){return r(b.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&y[o]!==n)return"pfx"!=t||o}return!1}function l(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return!1===r?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+w.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+C.join(r+" ")+r).split(" "),l(o,t,n))}var s,d,f="2.6.2",p={},h=!0,m=t.documentElement,v="modernizr",g=t.createElement(v),y=g.style,b=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),E="Webkit Moz O ms",w=E.split(" "),C=E.toLowerCase().split(" "),x={},S=[],j=S.slice,k=function(e,n,r,o){var i,a,c,l,u=t.createElement("div"),s=t.body,d=s||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),u.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(s?u:d).innerHTML+=i,d.appendChild(u),s||(d.style.background="",d.style.overflow="hidden",l=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),a=n(u,e),s?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),m.style.overflow=l),!!a},F={}.hasOwnProperty;d=i(F,"undefined")||i(F.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return F.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(j.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(j.call(arguments)))};return r}),x.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},x.borderradius=function(){return u("borderRadius")},x.boxshadow=function(){return u("boxShadow")},x.textshadow=function(){return""===t.createElement("div").style.textShadow},x.opacity=function(){return o("opacity:.55"),/^0.55$/.test(y.opacity)},x.cssgradients=function(){var e="background-image:";return r((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+b.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),a(y.backgroundImage,"gradient")};for(var N in x)d(x,N)&&(s=N.toLowerCase(),p[s]=x[N](),S.push((p[s]?"":"no-")+s));return p.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,void 0!==h&&h&&(m.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),g=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},m++,e[h]=m,v[m]=t),t}function i(e,n,r){if(n||(n=t),s)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!f.test(e)?r.frag.appendChild(i):i}function a(e,n){if(e||(e=t),s)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),l=c.length;a<l;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function l(e){e||(e=t);var r=o(e);return g.shivCSS&&!u&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),s||c(e,r),e}var u,s,d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,s=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){u=!0,s=!0}}();var g={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==d.shivCSS,supportsUnknownElements:s,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:l,createElement:i,createDocumentFragment:a};e.html5=g,l(t)}(this,t),p._version=f,p._prefixes=b,p._domPrefixes=C,p._cssomPrefixes=w,p.testProp=function(e){return c([e])},p.testAllProps=u,p.testStyles=k,m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+S.join(" "):""),p}(0,this.document);