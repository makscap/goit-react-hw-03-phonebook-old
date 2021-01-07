(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{12:function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},2:function(t,e,n){t.exports={container:"Form_container___cwBN",form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",button:"Form_button__243jh"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(10),s=n.n(o);n(20);var i=function(t){var e=t.title,n=t.children;return Object(a.jsxs)(a.Fragment,{children:[e&&Object(a.jsx)("h1",{children:e}),n]})},l=n(13),u=n(4),b=n(5),m=n(7),d=n(6),j=n(23),h=n(11),f=n(2),p=n.n(f),O=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("form",{className:p.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:p.a.label,children:["Name",Object(a.jsx)("input",{className:p.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,autoComplete:"off"})]}),Object(a.jsxs)("label",{className:p.a.label,children:["Number",Object(a.jsx)("input",{className:p.a.input,type:"text",name:"number",value:n,onChange:this.handleChange,autoComplete:"off",placeholder:"Example: XXX-XX-XX"})]}),Object(a.jsx)("button",{className:p.a.button,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),v=n(12),x=n(8),_=n.n(x),C=function(t){var e=t.value,n=t.onChange;return Object(a.jsx)("label",{className:_.a.label,children:Object(a.jsxs)("p",{className:_.a.contacts,children:["Find contacts by name",Object(a.jsx)("input",{className:_.a.input,type:"text",onChange:n,value:e})]})})},g=n(3),S=n.n(g),N=n(14);var y=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:S.a.list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:S.a.item,children:[Object(a.jsxs)("p",{className:S.a.contact,children:[c," : ",r]}),Object(a.jsx)("button",{className:S.a.btn,type:"button",onClick:function(){return n(e)},children:Object(a.jsx)(N.a,{className:S.a.icon})})]},e)}))})})},F=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:v,filter:""},t.formSubmitHandler=function(e){t.state.contacts.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))||t.state.contacts.find((function(t){return t.number===e.number}))?alert("".concat(e.name," is already in your phonebook, bro!")):/\d{3}[-]\d{2}[-]\d{2}/g.test(e.number)?(e.id=Object(j.a)(),t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(l.a)(n))}}))):alert("Enter valid number please")},t.deleteContacts=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getFilter=function(e){t.setState({filter:e.currentTarget.value.toLowerCase()})},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"getFiltredContacts",value:function(){var t=this.state,e=t.contacts,n=t.filter;return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}},{key:"render",value:function(){var t=this.state.filter;return Object(a.jsxs)("div",{className:p.a.container,children:[Object(a.jsx)(i,{title:"Phonebook",children:Object(a.jsx)(O,{onSubmit:this.formSubmitHandler})}),Object(a.jsxs)(i,{title:"Contacts",children:[Object(a.jsx)(C,{value:t,onChange:this.getFilter}),Object(a.jsx)(y,{contacts:this.getFiltredContacts(),onDeleteContacts:this.deleteContacts})]})]})}}]),n}(c.Component);function k(){return Object(a.jsx)(i,{children:Object(a.jsx)(F,{})})}var w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),w()},3:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",btn:"ContactList_btn__1Xk4q",icon:"ContactList_icon__33G6D"}},8:function(t,e,n){t.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}}},[[21,1,2]]]);
//# sourceMappingURL=main.455b7952.chunk.js.map