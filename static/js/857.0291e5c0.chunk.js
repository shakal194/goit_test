"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[857],{4857:function(e,s,t){t.r(s),t.d(s,{default:function(){return f}});var r=t(885),a=t(2791),i=t(9434),n=t(8724),o="RegisterView_formPage__CXBkg",l="RegisterView_title__62JZO",u="RegisterView_form__HVfo1",c="RegisterView_formText__NqwjX",m="RegisterView_label__lwuqH",d="RegisterView_input__D9Uox",h="RegisterView_button__9V-EH",_="RegisterView_massage__zt2Qj",p=t(9869),g=t(184);function f(){var e=(0,i.I0)(),s=(0,a.useState)(""),t=(0,r.Z)(s,2),f=t[0],v=t[1],w=(0,a.useState)(""),x=(0,r.Z)(w,2),j=x[0],N=x[1],b=(0,a.useState)(""),S=(0,r.Z)(b,2),V=S[0],E=S[1],Z=(0,a.useState)(!1),R=(0,r.Z)(Z,2),y=R[0],k=R[1],C=(0,a.useState)(!1),T=(0,r.Z)(C,2),H=T[0],q=T[1],z=(0,a.useState)(!1),D=(0,r.Z)(z,2),I=D[0],M=D[1],P=(0,a.useState)(!0),X=(0,r.Z)(P,2),A=X[0],B=X[1],F=(0,a.useState)(""),J=(0,r.Z)(F,2),O=J[0],Q=J[1],U=(0,i.v9)(p.Z.getIsAuthError);(0,a.useEffect)((function(){var e,s;console.log("isError",U),"MongoError"===(null===U||void 0===U?void 0:U.name)&&Q("This user is already registered"),"ValidatorError"===(null===U||void 0===U||null===(e=U.errors)||void 0===e||null===(s=e.password)||void 0===s?void 0:s.name)&&Q(U.message),setTimeout((function(){Q("")}),3e3)}),[U]);var G=function(e){var s=e.target,t=s.name,r=s.value;switch(t){case"name":return v(r);case"email":return N(r);case"password":return E(r);default:return}};return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:o,children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("h1",{className:l,children:"Sing up"}),(0,g.jsxs)("div",{className:_,children:[y&&(0,g.jsx)("p",{children:"Enter your name"}),H&&(0,g.jsx)("p",{children:"Enter your email"}),I&&(0,g.jsx)("p",{children:"Enter your password"}),!A&&(0,g.jsx)("p",{children:"Minimum allowed password length is 8 characters"}),U&&""!==O&&(0,g.jsx)("p",{children:O})]})]}),(0,g.jsxs)("form",{className:u,onSubmit:function(s){return s.preventDefault(),""===f.trim()?(k(!0),void setTimeout((function(){return k(!1)}),3e3)):""===j.trim()?(q(!0),void setTimeout((function(){return q(!1)}),3e3)):""===V.trim()?(M(!0),void setTimeout((function(){return M(!1)}),3e3)):V.length<7?(B(!1),void setTimeout((function(){return B(!0)}),3e3)):(e((0,n.z2)({name:f,email:j,password:V})),v(""),N(""),void E(""))},autoComplete:"off",children:[(0,g.jsx)("p",{className:c,children:" Registration details"}),(0,g.jsxs)("label",{className:m,children:["Name",(0,g.jsx)("input",{className:d,type:"text",name:"name",value:f,onChange:G})]}),(0,g.jsxs)("label",{className:m,children:["Email",(0,g.jsx)("input",{className:d,type:"email",name:"email",value:j,onChange:G})]}),(0,g.jsxs)("label",{className:m,children:["Password",(0,g.jsx)("input",{className:d,type:"password",name:"password",value:V,onChange:G})]}),(0,g.jsx)("button",{className:h,type:"submit",children:"Sing up"})]})]})})}}}]);
//# sourceMappingURL=857.0291e5c0.chunk.js.map