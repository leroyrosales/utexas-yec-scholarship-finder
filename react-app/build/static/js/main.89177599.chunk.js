(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(8),c=n.n(l),s=(n(33),n(9)),i=(n(34),n(17)),o=n(11),u=n(1);function j(e){var t=e.scholarship,n=Object(r.useState)(!1),a=Object(s.a)(n,2),l=a[0],c=a[1],j=function(){return c(!1)},b=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)};return Object(u.jsxs)("div",{className:"ut-scholarship--card",children:[Object(u.jsx)("h3",{children:t.title}),t.amount?Object(u.jsxs)("p",{className:"ut-scholarship--card-award-amt",children:["Award amount: ",t.amount]}):null,t.deadline_string?Object(u.jsxs)("p",{className:"ut-scholarship--card-award-deadline",children:[Object(u.jsx)("strong",{children:"Deadline:"})," ",t.deadline_string]}):null,Object(u.jsx)(i.a,{variant:"primary",onClick:function(){return c(!0)},children:"Read scholarship info"}),Object(u.jsxs)(o.a,{show:l,onHide:j,centered:!0,children:[Object(u.jsx)(o.a.Header,{closeButton:!0,children:Object(u.jsx)(o.a.Title,{children:t.title})}),Object(u.jsx)(o.a.Body,{children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:t.information}}),Object(u.jsxs)("ul",{children:[t.website[0]?Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Site:"})," ",Object(u.jsxs)("a",{target:"_blank",href:t.website[0],rel:"noindex, nofollow, noreferrer",children:[Object(u.jsx)("br",{}),t.website[0]]})]}):null,t.application_online_or_paper[0]?Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Application (online or paper):"}),Object(u.jsx)("br",{}),b(t.application_online_or_paper[0])]}):null,t.essays[0]?Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Essay required?:"}),Object(u.jsx)("br",{})," ",b(t.essays[0])]}):null,t.letters_of_recommendation[0]?Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Letter of recommendation?:"}),Object(u.jsx)("br",{}),b(t.letters_of_recommendation[0])]}):null,t.no_of_awards[0]?Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Number of awards offered:"}),Object(u.jsx)("br",{}),t.no_of_awards[0]]}):null,t.texas_resident[0]?Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Requires Texas residency?:"}),Object(u.jsx)("br",{}),b(t.texas_resident[0])]}):null,t.transcripts[0]?Object(u.jsxs)("li",{children:[Object(u.jsx)("strong",{children:"Requires transcript?:"}),Object(u.jsx)("br",{}),b(t.transcripts[0])]}):null,t.additional_info[0]?Object(u.jsx)("div",{className:"ut-scholarship--card-add-info",dangerouslySetInnerHTML:{__html:t.additional_info[0]}}):null]})]})}),Object(u.jsx)(o.a.Footer,{children:Object(u.jsx)(i.a,{variant:"secondary",onClick:j,children:"Close"})})]})]})}var b=n(6),h=n(12),d=[{value:"9th",label:"9th grade"},{value:"10th",label:"10th grade"},{value:"11th",label:"11th grade"},{value:"12th",label:"12th grade"}],O=[{value:"yes",label:"Yes"},{value:"no",label:"No"}],f=[{value:"yes",label:"Yes"},{value:"no",label:"No"}],p=[{value:"yes",label:"Yes"},{value:"no",label:"No"}];function x(e){var t=e.searchquery,n=e.setSearchQuery,r=e.year,a=e.transcript,l=e.essay,c=e.residency,s=e.handleResidenceChange,i=e.handleEssayChange,o=e.handleTranscriptChange,j=e.handleYearChange,x=e.handleStemChange,m=e.resetAll;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{className:"ut-scholarships--grid-form",children:[Object(u.jsx)("label",{htmlFor:"searchquery",children:"Search"}),Object(u.jsx)("input",{type:"text",id:"searchquery",placeholder:"Enter search keyword",value:t,onChange:function(e){return n(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"residency",children:"Residency"}),Object(u.jsx)(h.a,{theme:function(e){return Object(b.a)(Object(b.a)({},e),{},{borderRadius:0,colors:Object(b.a)(Object(b.a)({},e.colors),{},{primary:"#1f262b",primary25:"#F2F4F5",primary50:"#bf5700",neutral80:"#1f262b",neutral70:"#1f262b",neutral60:"#1f262b",neutral50:"#9CADB7",neutral30:"#1f262b",neutral20:"#9CADB7"})})},options:O,isClearable:!0,placeholder:"Select residency status",onChange:function(e){return s(e)},value:c,name:"residency"}),Object(u.jsx)("label",{htmlFor:"essay",children:"Essay"}),Object(u.jsx)(h.a,{theme:function(e){return Object(b.a)(Object(b.a)({},e),{},{borderRadius:0,colors:Object(b.a)(Object(b.a)({},e.colors),{},{primary:"#1f262b",primary25:"#F2F4F5",primary50:"#bf5700",neutral80:"#1f262b",neutral70:"#1f262b",neutral60:"#1f262b",neutral50:"#9CADB7",neutral30:"#1f262b",neutral20:"#9CADB7"})})},options:f,isClearable:!0,placeholder:"Is an essay required?",onChange:function(e){return i(e)},value:l,name:"essay"}),Object(u.jsx)("label",{htmlFor:"transcript",children:"Transript"}),Object(u.jsx)(h.a,{theme:function(e){return Object(b.a)(Object(b.a)({},e),{},{borderRadius:0,colors:Object(b.a)(Object(b.a)({},e.colors),{},{primary:"#1f262b",primary25:"#F2F4F5",primary50:"#bf5700",neutral80:"#1f262b",neutral70:"#1f262b",neutral60:"#1f262b",neutral50:"#9CADB7",neutral30:"#1f262b",neutral20:"#9CADB7"})})},options:p,isClearable:!0,placeholder:"Transcript required?",onChange:function(e){return o(e)},value:a,name:"transcript"}),Object(u.jsx)("label",{htmlFor:"year",children:"Year in School"}),Object(u.jsx)(h.a,{theme:function(e){return Object(b.a)(Object(b.a)({},e),{},{borderRadius:0,colors:Object(b.a)(Object(b.a)({},e.colors),{},{primary:"#1f262b",primary25:"#F2F4F5",primary50:"#bf5700",neutral80:"#1f262b",neutral70:"#1f262b",neutral60:"#1f262b",neutral50:"#9CADB7",neutral30:"#1f262b",neutral20:"#9CADB7"})})},options:d,isClearable:!0,placeholder:"Select year in school",onChange:function(e){return j(e)},value:r,name:"year"}),Object(u.jsx)("label",{htmlFor:"stem",children:"Stem scholarship"}),Object(u.jsx)("input",{className:"ut-checkbox",type:"checkbox",id:"stem",value:"stem",onClick:x}),Object(u.jsx)("button",{onClick:m,children:"Reset"})]})})}function m(e){for(var t=e.perPage,n=e.totalScholarships,r=e.paginate,a=[],l=1;l<=Math.ceil(n/t);l++)a.push(l);return Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{className:"ut-pagination",children:a.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{onClick:function(){return r(e)},href:"!#",children:e})},e)}))})})}var g=function(e){var t=e.scholarships,n=Object(r.useState)(),a=Object(s.a)(n,2),l=a[0],c=a[1],i=Object(r.useState)(),o=Object(s.a)(i,2),b=o[0],h=o[1],d=Object(r.useState)(),O=Object(s.a)(d,2),f=O[0],p=O[1],g=Object(r.useState)(),y=Object(s.a)(g,2),v=y[0],C=y[1],_=Object(r.useState)(),F=Object(s.a)(_,2),S=F[0],w=F[1],k=Object(r.useState)(""),D=Object(s.a)(k,2),A=D[0],B=D[1],N=new Date,T=N.getFullYear()+("0"+(N.getMonth()+1)).slice(-2)+N.getDate(),R=Object(r.useState)(1),q=Object(s.a)(R,2),E=q[0],Y=q[1],I=Object(r.useState)(10),L=Object(s.a)(I,1)[0],M=E*L,H=M-L,P=t.slice(H,M).filter((function(e){return S?e.stem[0]===S:e})).filter((function(e){return l?e.texas_resident[0]===l.value:e})).filter((function(e){return b?e.essays[0]===b.value:e})).filter((function(e){return f?e.transcripts[0]===f.value:e})).filter((function(e){return v?e.year_in_school[0].includes(v.value):e})).filter((function(e){return e.keywords[0].toLowerCase().indexOf(A)>-1})).sort((function(e,t){return new Date(e.deadline_numeric).getTime()-new Date(t.deadline_numeric).getTime()})).filter((function(e){return e.deadline_numeric>T})).map((function(e,t){return Object(u.jsx)(j,{scholarship:e},t)}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("section",{className:"ut-scholarship--grid",children:[Object(u.jsx)(x,{searchquery:A,setSearchQuery:B,stem:S,year:v,transcript:f,essay:b,residency:l,handleResidenceChange:function(e){c(null!=e?e:null)},handleEssayChange:function(e){h(null!=e?e:null)},handleTranscriptChange:function(e){p(null!=e?e:null)},handleYearChange:function(e){C(null!=e?e:null)},handleStemChange:function(e){console.log(e.target.checked),!0===e.target.checked?w("1"):w(null)},resetAll:function(e){e.preventDefault(),c(null),h(null),p(null),C(null),w(null),document.getElementById("stem").checked=!1,B("")}}),Object(u.jsx)("div",{children:P.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"ut-scholarship--grid-results",children:P}),Object(u.jsx)(m,{perPage:L,totalScholarships:t.length,paginate:function(e){return Y(e)}})]}):Object(u.jsx)("h2",{children:"Sorry, no results match that search"})})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),l(e),c(e)}))},v=n(28),C=n.n(v),_="..".concat("/wp-content/plugins/utexas-yec-scholarship-finder/react-app/build");C.a.get("".concat(_,"/data/data.json")).then((function(e){return c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(g,{scholarships:e.data})}),document.getElementById("yec-root"))})),y()}},[[69,1,2]]]);
//# sourceMappingURL=main.89177599.chunk.js.map