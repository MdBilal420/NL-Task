(this.webpackJsonpnlapp=this.webpackJsonpnlapp||[]).push([[0],{28:function(e,t,a){e.exports=a(53)},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(7),i=a(8),s=a(10),m=a(9),u=a(26),d=a(23),h=a.n(d),b=Object(n.createContext)(),f=function(e){var t=Object(n.useState)(),a=Object(u.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){h.a.get("https://nl-static-site-assets.s3.ap-south-1.amazonaws.com/reports.json").then((function(e){c(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement(b.Provider,{value:{data:l}},e.children)},v=a(27),E=a(12),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={liked:!1},e.handleClick=e.handleClick.bind(Object(E.a)(e)),e}return Object(i.a)(a,[{key:"handleClick",value:function(){this.setState({liked:!this.state.liked})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("Favorite",JSON.stringify(t.liked))}},{key:"render",value:function(){var e=this.state.liked?"Unlike":"Like";return"Like"===e?r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:this.handleClick},r.a.createElement("i",{className:"fa fa-heart fa-lg",style:{color:"#33c3f0"}}))):"Unlike"===e?r.a.createElement("div",null,r.a.createElement("button",{className:"button",onClick:this.handleClick},r.a.createElement("i",{className:"fa fa-heart fa-lg",style:{color:"red"}}))):void 0}}]),a}(r.a.Component);var k=function(e){var t=e.data;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",null,t.item.headline),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-user"}," ",t.story["author-name"])),r.a.createElement("div",{className:"row"},r.a.createElement(v.a.Link,{href:t.story.url}," ",r.a.createElement("i",{className:"fa fa-link"},"  Open Article")),r.a.createElement(p,null)))))};var g=function(e){var t=Object(n.useContext)(b).data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"text-center mb-4"},"All Stories"),r.a.createElement("div",{className:"row"},t?t.items.map((function(e){return r.a.createElement(k,{data:e,key:e.id})})):"Loading")))},y=a(24),N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={storyTitle:""},e.onChange=function(t){e.setState(Object(y.a)({},t.target.name,t.target.value))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.findStory},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Search",name:"storyTitle",value:this.state.storyTitle,onChange:this.onChange})),r.a.createElement("button",{className:"btn btn-dark btn-lg btn-block mb-5",type:"submit"},"Search"))))}}]),a}(n.Component),O=a(25),j=function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-5"},r.a.createElement("span",{className:"navbar-brand mb-0 h1 mx-auto"}),r.a.createElement(O.a.Brand,{href:"#home"},r.a.createElement("img",{src:"https://images.assettype.com/newslaundry/2020-01/d91cad07-9650-47e9-8bdc-9a6247354d95/Header_logo_NL__2_New.png",width:"240",height:"60",className:"d-inline-block align-top",alt:"React Bootstrap logo"})))},w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(f,null,r.a.createElement(j,null),r.a.createElement(N,null),r.a.createElement(g,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.736466e3.chunk.js.map