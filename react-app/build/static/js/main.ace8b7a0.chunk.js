(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{31:function(e,n,t){},33:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var s=t(0),c=t.n(s),r=t(9),i=t.n(r),a=(t(31),t(15)),l=(t(32),t(8)),o=(t(33),t(11)),d=t(26),j=t(1);function h(e){var n=e.scholarship;return Object(j.jsxs)("div",{className:"col-6 col-md-4","data-year-in-hs":"{ scholarship.year_in_school }",children:[Object(j.jsx)("h3",{children:n.title}),Object(j.jsx)("hr",{}),n.amount?Object(j.jsxs)("p",{className:"mb-3",children:["Award amount: $",n.amount]}):null,Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(o.a.Toggle,{as:d.a.Header,eventKey:"0",children:"More Info"})}),Object(j.jsx)(o.a.Collapse,{eventKey:"0",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:n.information}}),Object(j.jsxs)("ul",{children:[n.deadline?Object(j.jsxs)("li",{children:["Deadline: ",n.deadline]}):null,n.application_online_or_paper?Object(j.jsxs)("li",{children:["Application (online or paper): ",n.application_online_or_paper]}):null,n.essays?Object(j.jsxs)("li",{children:["Essay required?: ",n.essays]}):null,n.letters_of_recommendation?Object(j.jsxs)("li",{children:["Letter of recommendation?: ",n.letters_of_recommendation]}):null,n.no_of_awards?Object(j.jsxs)("li",{children:["Number of awards offered: ",n.no_of_awards]}):null,n.texas_resident?Object(j.jsxs)("li",{children:["Requires Texas residency?: ",n.texas_resident]}):null,n.transcripts?Object(j.jsxs)("li",{children:["Requires transcript?: ",n.transcripts]}):null,Object(j.jsxs)("li",{children:["Site: ",Object(j.jsx)("a",{target:"_blank",href:"{ scholarship.website }",rel:"noindex, nofollow",children:n.website})]})]}),n.year_in_school.map((function(e,n){return Object(j.jsx)("div",{children:(t=e,t.replace("_"," "))},n);var t}))]})})]})})]})}function u(e){var n=e.handleResidenceChange,t=e.RESIDENCE_FILTERS;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(l.a.Label,{children:"Requires residency?"}),Object(j.jsx)(l.a.Control,{as:"select",onChange:n,children:t.map((function(e){return Object(j.jsx)("option",{children:e})}))})]})})}function b(e){var n=e.handleEssayChange,t=e.ESSAY_FILTERS;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a.Label,{children:"Requires essay?"}),Object(j.jsx)(l.a.Control,{as:"select",onChange:n,children:t.map((function(e){return Object(j.jsx)("option",{children:e})}))})]})}var x={All:function(){return!0},Yes:function(e){return e.texas_resident.includes("yes")},No:function(e){return e.texas_resident.includes("no")}},O={All:function(){return!0},Yes:function(e){return e.essays.includes("yes")},No:function(e){return e.essays.includes("no")}},p=Object.keys(x),f=Object.keys(O);var m=function(e){var n=e.scholarships,t=Object(s.useState)("All"),c=Object(a.a)(t,2),r=c[0],i=c[1],o=Object(s.useState)("All"),d=Object(a.a)(o,2),m=d[0],_=d[1],y=n.filter(x[r]).filter(O[m]).map((function(e,n){return Object(j.jsx)(h,{scholarship:e},n)}));return Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 col-md-3",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(u,{RESIDENCE_FILTERS:p,handleResidenceChange:function(e){i(e.target.value)},setTexasResidenceFilter:i}),Object(j.jsx)(b,{ESSAY_FILTERS:f,handleEssayChange:function(e){_(e.target.value)},setEssayFilter:_})]})}),Object(j.jsx)("div",{className:"col-12 col-md",children:Object(j.jsx)("div",{className:"row",children:y})})]})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,58)).then((function(n){var t=n.getCLS,s=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),s(e),c(e),r(e),i(e)}))},y=t(25);t.n(y).a.get("".concat("/wp-content/plugins/utexas-yec-scholarship-finder/react-app/build/","/data/data.json")).then((function(e){return i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{scholarships:e.data})}),document.getElementById("yec-root"))})),_()}},[[56,1,2]]]);
//# sourceMappingURL=main.ace8b7a0.chunk.js.map