(this.webpackJsonpmovies_app=this.webpackJsonpmovies_app||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(4),o=c.n(i),a=c(2),r=(c(9),c(10),c(0)),l=function(e){var t=e.movies,c=e.url;return Object(r.jsx)("div",{className:"grid",children:t.map((function(e){var t=e.title,n=e.poster_path,s=e.vote_average,i=e.overview,o=e.id;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("img",{src:null!=n?c+n:"/img/movie.jpg",alt:t}),Object(r.jsx)("h1",{children:t}),Object(r.jsx)("div",{className:"vote",children:s%1===0?s+".0":s}),Object(r.jsx)("p",{className:"info",children:i.length>1?i:"No overview available"})]},o)}))})},j=(c(12),function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],s=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?s(!0):e<=300&&s(!1)})),Object(r.jsx)("div",{children:Object(r.jsx)("div",{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},className:"btn",style:{display:c?"inline":"none"}})})}),u=(c(13),function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"skeleton",children:[Object(r.jsx)("div",{className:"placeholder-item"}),Object(r.jsx)("div",{className:"placeholder-item"}),Object(r.jsx)("div",{className:"placeholder-item"}),Object(r.jsx)("div",{className:"placeholder-item"})]})})}),d=(c(14),function(e){var t=e.movies,c=e.API_URL,s=Object(n.useState)(1),i=Object(a.a)(s,2),o=i[0],l=i[1],j=Object(n.useState)(""),u=Object(a.a)(j,2),d=u[0],h=u[1],b=function(){fetch(c).then((function(e){return e.json()})).then((function(e){t(e.results)})),l(1)};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("img",{src:"/img/logo.svg",className:"logo",alt:"logo",onClick:b}),Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=7f1f40a74cb0c8dab51641321ea95ef6&query="+d).then((function(e){return e.json()})).then((function(e){t(e.results)})),h(""),l(null)},children:Object(r.jsx)("input",{type:"text",placeholder:"Search...",className:"search",value:d,onChange:function(e){h(e.target.value)}})})]}),Object(r.jsxs)("div",{className:"btn-container",children:[Object(r.jsx)("button",{className:1===o?"not-allowed":null,onClick:function(){l(o-1),o<=1?b():fetch("".concat(c,"&page=").concat(o-1)).then((function(e){return e.json()})).then((function(e){t(e.results)}))},children:"Prev"}),Object(r.jsx)("div",{className:"relative",children:Object(r.jsx)("h4",{children:o})}),Object(r.jsx)("button",{onClick:function(){l(o+1),fetch("".concat(c,"&page=").concat(o+1)).then((function(e){return e.json()})).then((function(e){t(e.results)}))},children:"Next"})]})]})}),h="".concat("https://api.themoviedb.org/3","/discover/movie?sort_by=popularity.desc&").concat("api_key=7f1f40a74cb0c8dab51641321ea95ef6"),b=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch(h).then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{movies:s,API_URL:h}),c.length>1?Object(r.jsx)(l,{movies:c,url:"https://image.tmdb.org/t/p/w300"}):Object(r.jsx)(u,{}),Object(r.jsx)(j,{})]})};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.255a47b6.chunk.js.map