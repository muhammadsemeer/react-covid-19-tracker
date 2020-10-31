(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),a=c(18),i=c.n(a),j=(c(26),c(7)),d=c(8),h=c(10),o=c(9),l=c(12),b=c(2),O=(c(27),function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("h1",{children:"Covid-19 Tracker"}),Object(n.jsxs)(l.b,{basename:"/",children:[Object(n.jsx)(l.c,{to:"/",children:"India"}),Object(n.jsx)(l.c,{to:"/world",children:"World"})]})]})}}]),c}(r.Component)),u=c(20),x=(c(36),function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={stateData:{}},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19india.org/state_district_wise.json").then((function(e){return e.json()})).then((function(t){e.setState({stateData:t})}))}},{key:"render",value:function(){var e=this.state.stateData;return delete e.state,Object.keys(e).map((function(t,c){var r=e[t].districtData,s=0,a=0,i=0,j=0,d=[];for(var h in r){s+=r[h].active,a+=r[h].confirmed,i+=r[h].deceased,j+=r[h].recovered;var o=r[h];o.district_name=h,d=[].concat(Object(u.a)(d),[o])}return Object(n.jsxs)("div",{className:"state",children:[Object(n.jsx)("div",{className:"state-head",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:t}),Object(n.jsxs)("span",{className:"confirm",children:["Confirmed: ",a]}),Object(n.jsxs)("span",{className:"active",children:["Active : ",s]}),Object(n.jsxs)("span",{className:"recover",children:["Recovered: ",j]}),Object(n.jsxs)("span",{className:"death",children:["Death: ",i]})]})}),Object(n.jsx)("div",{className:"table",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"District"}),Object(n.jsx)("th",{children:"Confirmed"}),Object(n.jsx)("th",{children:"Active"}),Object(n.jsx)("th",{children:"Recovered"}),Object(n.jsx)("th",{children:"Deaths"})]})}),Object(n.jsx)("tbody",{children:d.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.district_name}),Object(n.jsx)("td",{children:e.confirmed}),Object(n.jsx)("td",{children:e.active}),Object(n.jsx)("td",{children:e.recovered}),Object(n.jsx)("td",{children:e.deceased})]},t)}))})]})})]},c)}))}}]),c}(r.Component)),v=(c(37),function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={info:{}},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://corona.lmao.ninja/v2/countries/india").then((function(e){return e.json()})).then((function(t){e.setState({info:t})}))}},{key:"render",value:function(){var e=this.state.info;return Object(n.jsxs)("div",{className:"main-india",children:[Object(n.jsxs)("div",{className:"head",children:[Object(n.jsx)("h1",{children:"India"}),Object(n.jsx)("img",{src:"https://www.countryflags.io/in/shiny/64.png",alt:"Indian Flag"})]}),Object(n.jsxs)("div",{className:"india-status",children:[Object(n.jsxs)("div",{className:"confirm",children:[Object(n.jsx)("h2",{children:"Confirmed"}),Object(n.jsx)("p",{children:e.cases})]}),Object(n.jsxs)("div",{className:"active",children:[Object(n.jsx)("h2",{children:"Active"}),Object(n.jsx)("p",{children:e.active})]}),Object(n.jsxs)("div",{className:"recover",children:[Object(n.jsx)("h2",{children:"Recovered"}),Object(n.jsx)("p",{children:e.recovered})]}),Object(n.jsxs)("div",{className:"death",children:[Object(n.jsx)("h2",{children:"Deaths"}),Object(n.jsx)("p",{children:e.deaths})]})]}),Object(n.jsx)("div",{children:Object(n.jsx)(x,{})})]})}}]),c}(r.Component)),f=(c(38),function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={data:[]},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://corona.lmao.ninja/v2/countries").then((function(e){return e.json()})).then((function(t){t?e.setState({data:t,isLoaded:!0}):e.setState({isLoaded:!1})}))}},{key:"formatDate",value:function(e){return new Date(e).toLocaleString()}},{key:"render",value:function(){var e=this.state,t=e.data;return e.isLoaded?Object(n.jsxs)("div",{className:"world",children:[Object(n.jsx)("h1",{children:"World"}),Object(n.jsx)("div",{className:"table",children:Object(n.jsxs)("table",{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Country"}),Object(n.jsx)("th",{children:"Confirmed"}),Object(n.jsx)("th",{children:"Active"}),Object(n.jsx)("th",{children:"Recovered"}),Object(n.jsx)("th",{children:"Deaths"}),Object(n.jsx)("th",{children:"Updated on"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{children:[e.country,Object(n.jsx)("img",{src:e.countryInfo.flag,alt:e.country,style:{width:"50px",height:"25px"}})]}),Object(n.jsx)("td",{children:e.cases}),Object(n.jsx)("td",{children:e.active}),Object(n.jsx)("td",{children:e.recovered}),Object(n.jsx)("td",{children:e.deaths}),Object(n.jsx)("td",{children:new Date(e.updated).toLocaleString()})]},t)}))})]})})]}):Object(n.jsx)("div",{style:{marginTop:"75px"},children:Object(n.jsx)("h1",{children:"Loading"})})}}]),c}(r.Component)),m=function(e){Object(h.a)(c,e);var t=Object(o.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(O,{}),Object(n.jsx)(b.a,{path:"/",exact:!0,component:v}),Object(n.jsx)(b.a,{path:"/world",exact:!0,component:f})]})})}}]),c}(r.Component),p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),p()}},[[39,1,2]]]);
//# sourceMappingURL=main.f77f1862.chunk.js.map