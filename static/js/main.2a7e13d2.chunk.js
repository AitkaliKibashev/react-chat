(this["webpackJsonpreact-chat"]=this["webpackJsonpreact-chat"]||[]).push([[0],{59:function(e,t,n){},79:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t),n.d(t,"Context",(function(){return P}));var a=n(1),c=n(15),r=n.n(c),o=(n(79),n(19)),i=(n(59),n(39)),s=n.n(i),j=n(47),l=n(121),d=n(124),h=n(125),u=n(126),b=n(132),O=n(35),x="/login",m="/chat/:roomId?",p=n(31),f=n(7),g=function(){var e=Object(a.useContext)(P).auth,t=Object(p.a)(e),n=Object(o.a)(t,1)[0];return Object(f.jsx)(l.a,{position:"static",children:Object(f.jsxs)(d.a,{children:[Object(f.jsx)(h.a,{variant:"h6",children:n?"Chat":"Login"}),Object(f.jsx)(u.a,{container:!0,justifyContent:"flex-end",children:n?Object(f.jsx)(O.b,{to:x,style:{textDecoration:"none"},children:Object(f.jsx)(b.a,{onClick:Object(j.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.signOut();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),variant:"contained",color:"secondary",children:"Logout"})}):Object(f.jsx)(b.a,{variant:"contained",children:"Login"})})]})})},v=n(17),w=n(127),y=n(131),_=n(28),C=function(){var e=Object(a.useContext)(P).auth,t=function(){var t=Object(j.a)(s.a.mark((function t(){var n,a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new _.a.auth.GoogleAuthProvider,t.next=3,e.signInWithPopup(n);case 3:a=t.sent,c=a.user,console.log(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(f.jsx)(w.a,{children:Object(f.jsx)(u.a,{container:!0,style:{height:window.innerHeight-65},alignItems:"center",justifyContent:"center",children:Object(f.jsx)(u.a,{style:{width:400,background:"lightgray"},container:!0,justifyContent:"center",alignItems:"center",children:Object(f.jsx)(y.a,{p:5,children:Object(f.jsx)(b.a,{onClick:t,variant:"outlined",children:"Login with Google"})})})})})},I=n(129),k=n(133),N=n(56),A=n(128),L=function(){return Object(f.jsx)(w.a,{children:Object(f.jsx)(u.a,{container:!0,style:{height:window.innerHeight},alignItems:"center",justifyContent:"center",children:Object(f.jsx)(u.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(f.jsx)(A.a,{})})})})},R=Object(v.g)((function(e){var t=e.match,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],i=c[1],s=Object(a.useState)(""),j=Object(o.a)(s,2),l=j[0],d=j[1],h=Object(a.useContext)(P),x=h.auth,m=h.firestore,g=Object(p.a)(x),v=Object(o.a)(g,1)[0],y=t.params.roomId,C=Object(N.a)(m.collection("messages").orderBy("createdAt")),A=Object(o.a)(C,1)[0],R=Object(N.a)(m.collection("rooms").orderBy("createdAt")),B=Object(o.a)(R,2),M=B[0];return B[1]?Object(f.jsx)(L,{}):Object(f.jsxs)(w.a,{children:[Object(f.jsx)("h1",{style:{marginTop:10},children:"Welcome to the my fucking CHAT"}),Object(f.jsxs)("div",{className:"chat-row",children:[Object(f.jsxs)("div",{style:{flex:1},className:"chat-row__chat-list",children:[Object(f.jsx)("h1",{children:"Rooms"}),Object(f.jsx)("div",{style:{flex:1},children:M.map((function(e){return Object(f.jsx)(O.b,{style:{textDecoration:"none"},to:"/chat/"+e.id,children:Object(f.jsx)("p",{className:"chat-row__chat-list__item",children:e.name})})}))}),Object(f.jsxs)("div",{className:"chat-row__chat-list__footer",children:[Object(f.jsx)(I.a,{value:l,onChange:function(e){return d(e.target.value)},rowsMax:2,variant:"outlined",color:"secondary",label:"Room name",style:{width:"65%"}}),Object(f.jsx)(b.a,{onClick:function(){m.collection("rooms").add({id:Math.floor(1e3*Math.random()),name:l,createdAt:_.a.firestore.FieldValue.serverTimestamp()}),d("")},variant:"outlined",color:"secondary",children:"Create"})]})]}),Object(f.jsxs)("div",{className:"chat-row__chat-window",children:[Object(f.jsx)("div",{className:"chat-row__chat-window__chat",children:A.map((function(e){return y===e.roomId?Object(f.jsxs)("div",{className:e.uid===v.uid?"chat-row__chat-window__user-message-me":"chat-row__chat-window__user-message-other",children:[Object(f.jsxs)(u.a,{container:!0,alignItems:"center",children:[Object(f.jsx)(k.a,{src:e.photoURL,style:{marginRight:10}}),Object(f.jsx)("p",{children:e.displayName})]}),Object(f.jsx)("p",{style:{marginTop:5},children:e.text})]}):null}))}),y?Object(f.jsxs)("div",{className:"chat-row__chat-window__footer",children:[Object(f.jsx)(I.a,{value:r,onChange:function(e){return i(e.target.value)},rowsMax:2,variant:"outlined",label:"Your text",style:{width:"90%"}}),Object(f.jsx)(b.a,{onClick:function(){m.collection("messages").add({roomId:y,uid:v.uid,displayName:v.displayName,photoURL:v.photoURL,text:r,createdAt:_.a.firestore.FieldValue.serverTimestamp()}),i("")},variant:"outlined",color:"secondary",children:"Send"})]}):null]})]})]})})),B=[{path:x,Component:C}],M=[{path:m,Component:R}],S=function(){var e=Object(a.useContext)(P).auth,t=Object(p.a)(e);return Object(o.a)(t,1)[0]?Object(f.jsxs)(v.d,{children:[M.map((function(e){var t=e.path,n=e.Component;return Object(f.jsx)(v.b,{path:t,component:n,exact:!0},t)})),Object(f.jsx)(v.a,{to:m})]}):Object(f.jsxs)(v.d,{children:[B.map((function(e){var t=e.path,n=e.Component;return Object(f.jsx)(v.b,{path:t,component:n,exact:!0},t)})),Object(f.jsx)(v.a,{to:x})]})};var T=function(){var e=Object(a.useContext)(P).auth,t=Object(p.a)(e),n=Object(o.a)(t,3),c=(n[0],n[1]);return n[2],c?Object(f.jsx)(L,{}):Object(f.jsxs)(O.a,{children:[Object(f.jsx)(g,{}),Object(f.jsx)(S,{})]})};n(93),n(94);_.a.initializeApp({apiKey:"AIzaSyBpbPMLFA7wExzyxphf30ppEJusYv2dd_c",authDomain:"react-chat-66a99.firebaseapp.com",projectId:"react-chat-66a99",storageBucket:"react-chat-66a99.appspot.com",messagingSenderId:"918040955507",appId:"1:918040955507:web:90e31caec7d66d7eab3806"});var P=Object(a.createContext)(null),z=_.a.auth(),D=_.a.firestore();r.a.render(Object(f.jsx)(P.Provider,{value:{firebase:_.a,auth:z,firestore:D},children:Object(f.jsx)(T,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.2a7e13d2.chunk.js.map