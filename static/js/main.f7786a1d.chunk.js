(this["webpackJsonprandom-quote"]=this["webpackJsonprandom-quote"]||[]).push([[0],{11:function(t,e,o){},12:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o(1),r=o.n(n),s=o(5),a=o.n(s),u=o(4),i=o.p+"static/media/twitter.ca88c85b.svg",l=o.p+"static/media/tumblr.e04bb935.svg",d=o(3),h=o.n(d),b=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857","#0059ff"],m=function(){var t=Object(n.useState)(""),e=Object(u.a)(t,2),o=e[0],r=e[1],s=Object(n.useState)(""),a=Object(u.a)(s,2),d=a[0],m=a[1];Object(n.useEffect)((function(){j()}),[]);var j=function(){fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(t){var e=t.quotes,o=e[Math.floor(Math.random()*e.length)];r(o.quote),m(o.author)}))};return Object(n.useEffect)((function(){h()("#twet-quote").attr("href","https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+o+'" '+d)),h()("#tumlr-quote").attr("href","https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption="+encodeURIComponent(d)+"&content="+encodeURIComponent(o)+"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button")}),[o]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{id:"quote-box",children:[Object(c.jsx)("div",{id:"text",children:Object(c.jsx)("p",{children:o})}),Object(c.jsx)("div",{id:"author",children:Object(c.jsx)("p",{children:d})}),Object(c.jsxs)("div",{id:"buttons",children:[Object(c.jsxs)("div",{className:"social-media",children:[Object(c.jsx)("a",{href:"#",id:"twet-quote",target:"_blank",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:i,alt:""})})}),Object(c.jsx)("a",{href:"#",id:"tumlr-quote",target:"_blank",children:Object(c.jsx)("span",{children:Object(c.jsx)("img",{src:l,alt:""})})})]}),Object(c.jsx)("button",{onClick:function(){var t=b[Math.floor(Math.random()*b.length)];document.body.style.backgroundColor=t,document.querySelector("#text").style.color="white",document.querySelector("#author").style.color="white",setTimeout((function(){document.querySelector("#text").style.transition="0.8s",document.querySelector("#author").style.transition="0.8s",document.querySelector("#text").style.color=t,document.querySelector("#author").style.color=t}),300),setTimeout((function(){document.querySelector("#text").style.transition="0s",document.querySelector("#author").style.transition="0s"}),1150),document.querySelector("#twet-quote").style.backgroundColor=t,document.querySelector("#tumlr-quote").style.backgroundColor=t,document.querySelector("#new-quote").style.backgroundColor=t,j()},id:"new-quote",children:"New Quote"})]})]})})};o(11);var j=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(m,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.f7786a1d.chunk.js.map