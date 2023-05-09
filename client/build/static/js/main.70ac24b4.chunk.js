(window["webpackJsonptodo-app-k8s"]=window["webpackJsonptodo-app-k8s"]||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),i=a(18),s=a.n(i),r=(a(83),a(29)),l=a(13),c=a(14),u=a(16),d=a(15),m=a(4),p=a(76),h=a.n(p).a.create({baseURL:"http://Sarahton.local:5000",withCredentials:!0});h.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e.response)}));var g=function(){return h.post("/api/logout").then((function(e){return e.data}))},f=function(e,t){return h.post("/api/login",{email:e,password:t}).then((function(e){return e.data}))},E=function(e,t,a){return h.post("/api/signup",{name:e,email:t,password:a}).then((function(e){return e.data}))},v=function(e,t){return h.post("/api/todo/add",{title:e,description:t}).then((function(e){return e.data}))},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={_id:e};return null!==t&&(n.important=t),null!==a&&(n.done=a),h.patch("/api/todo/update",n).then((function(e){return e.data}))},w=function(e){return h.delete("/api/todo/delete",{data:{_id:e}}).then((function(e){return e}))};a(128);function N(e){var t=e.userName,a=e.signout;return o.a.createElement(m.k,null,o.a.createElement(m.c,null,o.a.createElement("span",{className:"todo-welcome"},"Welcome ".concat(t))),o.a.createElement(m.c,null,o.a.createElement("div",{className:"todo-logout"},o.a.createElement("button",{className:"signup",onClick:function(){a()}},"Sign-out"))))}a(129);var y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={title:"",description:"",done:!1,important:!1,titleError:!1,errMessage:""},e.validateInput=function(){return!!e.state.title},e.handleTitleChange=function(t){e.setState({title:t.target.value,titleError:!1})},e.handleDescriptionChange=function(t){e.setState({description:t.target.value})},e.resetInput=function(){e.setState({title:"",description:""})},e.handleAddTodo=function(){e.setState({errMessage:""}),e.validateInput()?v(e.state.title,e.state.description).then((function(t){e.props.addTodo({title:e.state.title,description:e.state.description,important:!1,done:!1,_id:t.todo._id}),e.resetInput()})).catch((function(t){e.setState({errMessage:t.data.message})})):e.setState({titleError:!0})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.userName,a=e.signout;return o.a.createElement(m.d,{className:"add-todo-main"},o.a.createElement(N,{userName:t,signout:a}),o.a.createElement(m.k,null,o.a.createElement(m.c,null,o.a.createElement(m.h,{value:this.state.title,onChange:this.handleTitleChange,label:"ToDo Title",background:!0,size:this.state.titleError?"lg inputErrorDiv":"lg",className:this.state.titleError?"inputError":"",maxLength:100}),this.state.titleError&&o.a.createElement("span",{className:"error-text"}," ToDo Title cannot be blank."))),o.a.createElement(m.k,null,o.a.createElement(m.c,null,o.a.createElement(m.h,{value:this.state.description,onChange:this.handleDescriptionChange,type:"textarea",label:"ToDo Description",background:!0,maxLength:250}))),o.a.createElement(m.k,null,o.a.createElement(m.c,{className:"align-right"},o.a.createElement("button",{type:"button",onClick:this.resetInput,className:"btn btn-outline-info-modified waves-effect"},"Reset"),o.a.createElement("button",{type:"button",onClick:this.handleAddTodo,className:"btn btn-outline-info-modified waves-effect"},"Add"))))}}]),a}(n.Component),k=a(25),S=(a(130),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={todos:{columns:[{label:"#",field:"id",sort:"asc"},{label:"Title",field:"title",sort:"asc"},{label:"Description",field:"description",sort:"asc"},{label:"",field:"important",sort:"disabled"},{label:"",field:"done",sort:"disabled"},{label:"",field:"delete",sort:"disabled"}],rows:[],errMessage:""}},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.post("/api/todo/list").then((function(e){return e.data})).then((function(t){e.props.initiateTodo(t)})).catch((function(t){e.setState({errMessage:t.data.message})})),this.setState((function(t){return{todos:Object(k.a)(Object(k.a)({},t.todos),{},{rows:e.props.fillTodoRows()})}}))}},{key:"render",value:function(){return o.a.createElement(m.d,{className:"todo-table-main"},this.state.titleError&&o.a.createElement("span",{className:"error-text"}," ToDo Title cannot be blank."),o.a.createElement(m.k,null,o.a.createElement(m.c,null,o.a.createElement(m.e,{striped:!0,bordered:!0,small:!0,btn:!0,data:this.state.todos}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.fillTodoRows();return{todos:Object(k.a)(Object(k.a)({},t.todos),{},{rows:a,errMessage:""})}}}]),a}(n.Component)),T=a(77),j=a.n(T);function I(){return o.a.createElement(j.a,{type:"Watch",height:100,width:100,className:"pageLoader-main"})}a(150);a(151);function O(){return o.a.createElement(m.d,{className:"header-main glow"},"ToDo App")}var C=a(22),D=a(28),P=a.n(D),x=(a(213),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={email:"tester@example.com",password:"testing",invalidEmail:!1,emptyPassword:!1,loginFailed:!1,errMsg:""},e.handleEmailInput=function(t){e.setState({email:t.target.value,invalidEmail:!1})},e.handlePasswordInput=function(t){e.setState({password:t.target.value,emptyPassword:!1})},e.validate=function(){var t=!1;return P.a.isEmail(e.state.email)?""===e.state.password&&(t="emptyPassword"):t="invalidEmail",t},e.handleSubmit=function(){var t,a=e.validate();a?e.setState(Object(C.a)({},a,!0)):f(e.state.email,e.state.password).then((function(t){e.props.login(t)})).catch((function(a){t=a&&a.status&&400===a.status?"Incorrect username/password, please try again.":"Something went wrong, please try again later.",e.setState({loginFailed:!0,errMsg:t})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.errMsg,a=this.props.signup;return o.a.createElement(m.d,{className:"login-todo-main"},o.a.createElement(m.k,{className:"align-center"},o.a.createElement(m.c,{md:"6"},o.a.createElement("p",{className:"h5 text-center login-heading"},"Sign in"),o.a.createElement("div",{className:"grey-text"},o.a.createElement(m.h,{label:"Email:",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",value:this.state.email,onChange:this.handleEmailInput,size:this.state.invalidEmail?"lg inputErrorDiv":"lg",className:this.state.invalidEmail?"inputError":""}),this.state.invalidEmail&&o.a.createElement("span",{className:"signup-error-text"}," ","Please type valid email address."),o.a.createElement(m.h,{label:"Password: ",icon:"lock",group:!0,type:"password",validate:!0,value:this.state.password,onChange:this.handlePasswordInput,size:this.state.emptyPassword?"lg inputErrorDiv":"lg",className:this.state.emptyPassword?"inputError":""}),this.state.emptyPassword&&o.a.createElement("span",{className:"signup-error-text"},"Password cannot be blank."),this.state.loginFailed&&o.a.createElement("span",{className:"signup-error-text signin-bad-response"}," ",t)),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{onClick:function(){e.handleSubmit()},type:"button",className:"btn Ripple-parent btn btn-outline-info-modified Ripple-parent waves-effect"},"Login"),o.a.createElement("div",null,o.a.createElement("button",{className:"signup",onClick:function(){a()}},"Signup"))))))}}]),a}(n.Component)),M=(a(214),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={name:"",email:"",password:"",emptyName:!1,invalidEmail:!1,emptyPassword:!1,signupFailed:!1,errMessage:""},e.handleNameInput=function(t){e.setState({name:t.target.value,emptyName:!1})},e.handleEmailInput=function(t){e.setState({email:t.target.value,invalidEmail:!1})},e.handlePasswordInput=function(t){e.setState({password:t.target.value,emptyPassword:!1})},e.validate=function(){var t=!1;return""===e.state.name.trim()?t="emptyName":P.a.isEmail(e.state.email)?""===e.state.password.trim()&&(t="emptyPassword"):t="invalidEmail",t},e.handleSubmit=function(){var t=e.validate();t?e.setState(Object(C.a)({},t,!0)):E(e.state.name,e.state.email,e.state.password).then((function(t){e.props.signupDone()})).catch((function(t){var a;a=t.data.errmsg?t.data.errmsg:t.data.errors.password?"Invalid Password, must be atleast 7 letters.":t.data.message,e.setState({signupFailed:!0,errMessage:a})}))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.backToLogin;return o.a.createElement(m.d,{className:"login-todo-main"},o.a.createElement(m.k,{className:"align-center"},o.a.createElement(m.c,{md:"6"},o.a.createElement("p",{className:"h5 text-center signup-heading"},"Sign up"),o.a.createElement("div",{className:"grey-text"},o.a.createElement(m.h,{label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right",autoFocus:!0,value:this.state.name,onChange:this.handleNameInput,size:this.state.emptyName?"lg inputErrorDiv":"lg",className:this.state.emptyName?"inputError":""}),this.state.emptyName&&o.a.createElement("span",{className:"signup-error-text"}," Name field cannot be blank."),o.a.createElement(m.h,{label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",value:this.state.email,onChange:this.handleEmailInput,size:this.state.invalidEmail?"lg inputErrorDiv":"lg",className:this.state.invalidEmail?"inputError":""}),this.state.invalidEmail&&o.a.createElement("span",{className:"signup-error-text"}," Please type valid email address."),o.a.createElement(m.h,{label:"Your password",icon:"lock",group:!0,type:"password",validate:!0,value:this.state.password,onChange:this.handlePasswordInput,size:this.state.emptyPassword?"lg inputErrorDiv":"lg",className:this.state.emptyPassword?"inputError":""}),this.state.emptyPassword&&o.a.createElement("span",{className:"signup-error-text"},"Password cannot be blank."),this.state.signupFailed&&o.a.createElement("span",{className:"signup-error-text signin-bad-response"}," Error: ",this.state.errMessage,", please try again.")),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{type:"button",onClick:function(){e.handleSubmit()},className:"btn Ripple-parent btn btn-outline-info-modified Ripple-parent waves-effect"},"Create User"),o.a.createElement("div",null,o.a.createElement("button",{className:"login-link",onClick:function(){t()}},"Sign-in"))))))}}]),a}(n.Component)),R=(a(215),function(e,t,a,n){return e.map((function(e,i){return{id:i+1,title:e.title,description:e.description,important:o.a.createElement("div",{className:"todoRow"},o.a.createElement(m.l,{placement:"top"},o.a.createElement(m.b,{tag:"a",floating:!0,className:"round-btn",onClick:function(){return t(i,e._id)}},o.a.createElement(m.f,{icon:"star",className:e.important?"filled-yellow":""})),o.a.createElement("div",null,"Mark Important"))),done:o.a.createElement("div",{className:"todoRow"},o.a.createElement(m.l,{placement:"top"},o.a.createElement(m.b,{tag:"a",floating:!0,className:"round-btn",onClick:function(){return a(i,e._id)}},o.a.createElement(m.f,{icon:"check",className:e.done?"filled-yellow":""})),o.a.createElement("div",null,"Done"))),delete:o.a.createElement("div",{className:"todoRow"},o.a.createElement(m.l,{placement:"top"},o.a.createElement(m.b,{tag:"a",floating:!0,className:"round-btn",onClick:function(){return n(i,e._id)}},o.a.createElement(m.f,{icon:"trash-alt"})),o.a.createElement("div",null,"Remove")))}}))}),L=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={init:!0,loggedInUser:"",token:"",todos:[],signup:!1},e.addTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(r.a)(e.todos),[t])}}))},e.initiateTodo=function(t){e.setState({todos:t})},e.fillTodoRows=function(){return R(e.state.todos,e.handleImportant,e.handleDone,e.handleDelete)},e.toggleSignup=function(){e.setState((function(e){return{signup:!e.signup}}))},e.handleImportant=function(t,a){b(a,!e.state.todos[t].important).then((function(a){e.setState((function(e){var a=e;return a.todos[t].important=!a.todos[t].important,a}))})).catch((function(t){e.setState({errMessage:t})}))},e.handleDone=function(t,a){b(a,null,!e.state.todos[t].done).then((function(a){e.setState((function(e){var a=e;return a.todos[t].done=!a.todos[t].done,a}))})).catch((function(t){e.setState({errMessage:t})}))},e.logout=function(){e.setState({loggedInUser:"",token:""})},e.handleLogin=function(t){e.setState({loggedInUser:t,signup:!1,init:!1})},e.backToLogin=function(){e.setState({signup:!1})},e.handleDelete=function(t,a){w(a).then((function(a){e.setState((function(e){return{todos:[].concat(Object(r.a)(e.todos.splice(0,t)),Object(r.a)(e.todos.splice(1,e.todos.length)))}}))})).catch((function(t){e.setState({errMessage:t})}))},e.handleSignout=function(){g().then((function(t){e.setState({loggedInUser:"",token:"",todos:[],signup:!1})})).catch((function(t){e.setState({errMessage:t})}))},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.post("/api/init").then((function(e){return e.data})).then((function(t){e.handleLogin(t)})).catch((function(t){e.setState({init:!1})}))}},{key:"render",value:function(){var e=this.state.loggedInUser?this.state.loggedInUser.user.name:"";return o.a.createElement("div",{className:"app-main"},o.a.createElement(O,null),this.state.init?o.a.createElement(I,null):this.state.signup?o.a.createElement(M,{backToLogin:this.backToLogin,signupDone:this.toggleSignup}):this.state.loggedInUser?o.a.createElement(n.Fragment,null,o.a.createElement(y,{userName:e,addTodo:this.addTodo,signout:this.handleSignout}),o.a.createElement(S,{initiateTodo:this.initiateTodo,todos:this.state.todos,fillTodoRows:this.fillTodoRows,handleImportant:this.handleImportant,handleDone:this.handleDone,deleteTodo:this.handleDelete})):o.a.createElement(x,{login:this.handleLogin,signup:this.toggleSignup}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(216),a(217),a(218);s.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},78:function(e,t,a){e.exports=a(219)},83:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.70ac24b4.chunk.js.map