(this["webpackJsonpreact-food-project"]=this["webpackJsonpreact-food-project"]||[]).push([[0],{16:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(11),s=c.n(a),j=(c(16),c(2)),i=c(4),o=c(6),l=c.n(o),b=c(9),u="https://themealdb.com/api/json/v1/".concat("1","/"),d=function(){var e=Object(b.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"lookup.php?i=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"categories.php"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"filter.php?c=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=c(0);var m=function(){return Object(x.jsx)("div",{className:"progress",children:Object(x.jsx)("div",{className:"indeterminate"})})},f=c(8),p=c(3);var v=function(e){e.idCategory;var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"card-image",children:Object(x.jsx)("img",{src:c,alt:t})}),Object(x.jsxs)("div",{className:"card-content",children:[Object(x.jsx)("span",{className:"card-title",children:t}),Object(x.jsxs)("p",{children:[n.slice(0,60),"..."]})]}),Object(x.jsx)("div",{className:"card-action",children:Object(x.jsx)(p.b,{to:"category/".concat(t),className:"btn",children:"Watch category"})})]})};var g=function(e){var t=e.catalog,c=void 0===t?[]:t;return Object(x.jsx)("div",{className:"list",children:c.map((function(e){return Object(x.jsx)(v,Object(f.a)({},e),e.idCategory)}))})};var N=function(e){var t=e.cb,c=Object(n.useState)(""),r=Object(i.a)(c,2),a=r[0],s=r[1],j=function(){t(a)};return Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"input-field col s12",children:[Object(x.jsx)("input",{type:"search",name:"",id:"search-field",placeholder:"search",onKeyDown:function(e){"Enter"===e.key&&j()},onChange:function(e){return s(e.target.value)},value:a}),Object(x.jsx)("button",{className:"btn",style:{position:"absolute",top:0,right:0},onClick:j,children:"Search"})]})})};var y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(i.a)(a,2),o=s[0],l=s[1],b=Object(j.f)(),u=b.pathname,d=b.search,O=Object(j.g)();return Object(n.useEffect)((function(){h().then((function(e){r(e.categories),l(d?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(d.split("=")[1].toLowerCase())})):e.categories)}))}),[d]),Object(x.jsxs)(x.Fragment,{children:[" ",Object(x.jsx)(N,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O("".concat(u,"?search=").concat(e))}})," ",c.length?Object(x.jsx)(g,{catalog:o}):Object(x.jsx)(m,{})]})};var w=function(){return Object(x.jsx)("h1",{children:"Hello, from About page"})};var C=function(){return Object(x.jsx)("h1",{children:"Hello, from Contact page"})};var k=function(){return Object(x.jsx)("h1",{children:"Page not found"})};c(19);var M=function(){return Object(x.jsx)("footer",{className:"page-footer green lighten-4",children:Object(x.jsx)("div",{className:"footer-copyright",children:Object(x.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(x.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://paavveel.github.io/react-food-project/",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})},F=function(){return Object(x.jsx)("nav",{className:"green darken-1",children:Object(x.jsxs)("div",{className:"nav-wrapper",children:[Object(x.jsx)(p.b,{to:"/",className:"brand-logo",children:"React Food"}),Object(x.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(x.jsx)("li",{children:Object(x.jsx)(p.b,{to:"/about",children:"About"})}),Object(x.jsx)("li",{children:Object(x.jsx)(p.b,{to:"/contacts",children:"Contacts"})})]})]})})};var S=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(F,{}),Object(x.jsx)("main",{className:"container content",children:Object(x.jsx)(j.a,{})}),Object(x.jsx)(M,{})]})};function A(e){var t=e.strMeal,c=e.strMealThumb,n=e.idMeal;return Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"card-image",children:Object(x.jsx)("img",{src:c,alt:t})}),Object(x.jsx)("div",{className:"card-content",children:Object(x.jsx)("span",{className:"card-title",children:t})}),Object(x.jsx)("div",{className:"card-action",children:Object(x.jsx)(p.b,{to:"meal/".concat(n),className:"btn",children:"Watch recipe"})})]})}var E=function(e){var t=e.meals;return Object(x.jsx)("div",{className:"list",children:t.map((function(e){return Object(x.jsx)(A,Object(f.a)({},e),e.idMeal)}))})};var I=function(){var e=Object(j.h)().name,t=Object(j.g)(),c=Object(n.useState)([]),r=Object(i.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){O(e).then((function(e){s(e.meals)}))}),[e]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{className:"btn",onClick:function(){t(-1)},children:"Go back"}),a.length?Object(x.jsx)(E,{meals:a}):Object(x.jsx)(m,{})]})};var L=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(j.h)().id,s=Object(j.g)();return Object(n.useEffect)((function(){d(a).then((function(e){r(e.meals[0])}))}),[a]),Object(x.jsxs)(x.Fragment,{children:[c.idMeal?Object(x.jsxs)("div",{className:"recipe",children:[Object(x.jsx)("img",{src:c.strMealThumb,alt:c.strMeal}),Object(x.jsx)("h1",{children:c.strMeal}),Object(x.jsxs)("h6",{children:["Category: ",c.strCategory]}),c.strArea?Object(x.jsxs)("h6",{children:["Area: ",c.strArea]}):null,Object(x.jsx)("p",{children:c.strInstructions}),Object(x.jsxs)("table",{className:"centered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Ingredient"}),Object(x.jsx)("th",{children:"Measure"})]})}),Object(x.jsx)("tbody",{children:Object.keys(c).map((function(e){return e.includes("Ingredient")&&c[e]?Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:c[e]}),Object(x.jsx)("td",{children:c["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),c.strYoutube?Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recepi"}),Object(x.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(c.strYoutube.slice(-11)),title:a,allowFullScreen:!0})]}):null]}):Object(x.jsx)(m,{}),Object(x.jsx)("button",{className:"btn",onClick:function(){s(-1)},children:"Go back"})]})};var T=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(j.d,{children:Object(x.jsxs)(j.b,{path:"/",element:Object(x.jsx)(S,{}),children:[Object(x.jsx)(j.b,{index:!0,element:Object(x.jsx)(y,{})}),Object(x.jsx)(j.b,{path:"about",element:Object(x.jsx)(w,{})}),Object(x.jsx)(j.b,{path:"contacts",element:Object(x.jsx)(C,{})}),Object(x.jsx)(j.b,{path:"category/:name",element:Object(x.jsx)(I,{})}),Object(x.jsx)(j.b,{path:"category/:name/meal/:id",element:Object(x.jsx)(L,{})}),Object(x.jsx)(j.b,{path:"*",element:Object(x.jsx)(k,{})})]})})})};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(p.a,{basename:"/react-food-project",children:Object(x.jsx)(T,{})})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.222fd434.chunk.js.map