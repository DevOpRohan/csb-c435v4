(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{299:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(52),c=n(45),r=n(40),o=(n(76),n(54)),s=n.n(o),l=n(327),u=n(329),j=n(330),d=n(331),h=n(333),f=n(332),p=n(58),b=n.n(p),m=n(334),x=n(10),O=Object(m.a)({root:{height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"},chatCard:{width:"100%",height:"100%",margin:"auto",marginTop:0},title:{fontSize:"1.5rem"},inputContainer:{display:"flex",alignItems:"center",marginTop:"8px",marginBottom:"1%"},inputField:{flexGrow:1,marginRight:"8px"}}),g=function(){var e=O(),t=Object(a.useState)(""),n=Object(r.a)(t,2),i=n[0],o=n[1],p=Object(a.useState)([]),m=Object(r.a)(p,2),g=m[0],v=m[1],y=Object(a.useState)(!1),w=Object(r.a)(y,2),C=w[0],S=w[1],B=Object(a.useRef)(null),k=Object(a.useCallback)((function(){fetch("https://walrus-app-hodhq.ondigitalocean.app/android?q=".concat(i)).then((function(e){return e.text()})).then((function(e){var t={message:e,isBot:!0};v((function(e){return[].concat(Object(c.a)(e.slice(0,-1)),[t])}))})).catch((function(e){console.error(e)}))}),[i]);Object(a.useEffect)((function(){C&&(k(),S(!1),o(""))}),[C,k]),Object(a.useEffect)((function(){B.current&&(B.current.scrollTop=B.current.scrollHeight)}),[g]);var T=function(e){return e.split("```").map((function(e,t){if(t%2===1){var n=e.match(/^(\w+)\n/),a=n?n[1]:null,i=e.replace(/^\w+\n/,""),c=s.a.highlightAuto(i,a?[a]:null).value;return Object(x.jsxs)("div",{style:{position:"relative"},children:[Object(x.jsx)("pre",{style:{overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},dangerouslySetInnerHTML:{__html:c}}),Object(x.jsx)(l.a,{style:{position:"absolute",top:0,right:0,padding:0,fontSize:"0.8rem"},onClick:function(){navigator.clipboard.writeText(i)},children:Object(x.jsx)(b.a,{fontSize:"small"})})]},t)}return Object(x.jsx)("span",{children:e},t)}))};return Object(x.jsxs)("div",{className:e.root,children:[Object(x.jsx)(u.a,{className:e.chatCard,children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(d.a,{className:e.title,align:"center",gutterBottom:!0,children:"Jarvis"}),Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"60vh",overflow:"auto"},ref:B,children:g.map((function(e,t){return Object(x.jsx)("div",{style:{display:"flex",justifyContent:e.isBot?"flex-start":"flex-end",marginBottom:"8px"},children:Object(x.jsx)(u.a,{style:{width:"auto",maxWidth:"85%",backgroundColor:!1===e.isBot?"#f7f7f7":"white"},children:Object(x.jsx)(j.a,{style:{padding:"5px"},children:Object(x.jsx)(d.a,{variant:"body1",style:{fontSize:14},children:T(e.message)})})})},t)}))})]})}),Object(x.jsxs)("div",{className:e.inputContainer,children:[Object(x.jsx)(h.a,{className:e.inputField,label:"Type a message",value:i,onChange:function(e){o(e.target.value)},autoComplete:"off",autoFocus:!0,multiline:!0,rows:4,inputProps:{style:{overflow:"auto",resize:"both"}},variant:"outlined"}),Object(x.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){if(i){var e={message:"Typing...",isBot:!0};v((function(t){return[].concat(Object(c.a)(t),[{message:i,isBot:!1},e])})),S(!0)}},children:"Send"})]})]})},v=document.getElementById("root");Object(i.createRoot)(v).render(Object(x.jsx)(a.StrictMode,{children:Object(x.jsx)(g,{})}))}},[[299,1,2]]]);
//# sourceMappingURL=main.a25bd1d4.chunk.js.map