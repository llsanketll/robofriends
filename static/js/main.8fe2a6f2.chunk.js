(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(6),i=t.n(a),c=(t(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function s(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=t(1),u=t(2),h=t(4),d=t(3),f=function(e){Object(h.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(l.a)(this,t),(e=n.call(this)).state={hasError:!1},e}return Object(u.a)(t,[{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null," Ooops. That is Wrong"):this.props.children}}]),t}(o.a.Component),m=function(e){return o.a.createElement("div",{style:{position:"sticky",top:"0",zIndex:1}},e.children)},v=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"pp"}),o.a.createElement("div",null,o.a.createElement("h2",null," ",n," "),o.a.createElement("p",null," ",t," ")))},p=function(e){var n=e.robots;return o.a.createElement("div",{className:"cards-container"},n.map((function(e){return o.a.createElement(v,{key:e.id,name:e.name,email:e.email,id:e.id})})))},g=function(e){e.searchField;var n=e.searchChange;return o.a.createElement("div",null,o.a.createElement("input",{type:"search",placeholder:"Search Robot",onChange:n}))},b=(t(13),function(e){Object(h.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(l.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchField:n.target.value})},e.state={robots:[],searchField:""},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})}))}},{key:"render",value:function(){var e=this,n=this.state.robots.filter((function(n){return n.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return this.state.robots.length?o.a.createElement("div",null,o.a.createElement(m,null,o.a.createElement("header",null,o.a.createElement("h1",null," robofriends"),o.a.createElement(g,{searchChange:this.onSearchChange}))),o.a.createElement(f,null,o.a.createElement(p,{robots:n}))):o.a.createElement("h1",null," Loading.. ")}}]),t}(o.a.Component));i.a.render(o.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");c?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(n,e)}))}}()},7:function(e,n,t){e.exports=t(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.8fe2a6f2.chunk.js.map