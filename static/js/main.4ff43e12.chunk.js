(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,n){t.exports=n(28)},22:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(3),r=n.n(a);n(22);var u=function(){return c.a.createElement("div",null,c.a.createElement("h2",{className:"intro"},"React with Redux"))},i=n(11),s=n(12),l=n(15),p=n(13),E=n(16),d=n(5),m=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(n=Object(l.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).increment=function(){n.props.dispatch({type:"INCREMENT"})},n.square=function(){n.props.dispatch({type:"SQUARE"})},n.squareRoot=function(){n.props.dispatch({type:"SQUARE-ROOT"})},n.decrement=function(){n.props.dispatch({type:"DECREMENT"})},n.reset=function(){n.props.dispatch({type:"RESET"})},n.multiply2=function(){n.props.dispatch({type:"MULTIPLY(2)"})},n.divide2=function(){n.props.dispatch({type:"DIVIDE(2)"})},n.factorial=function(){n.props.dispatch({type:"FACTORIAL"})},n}return Object(E.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Counter"),c.a.createElement("div",{style:{margin:10}},c.a.createElement("span",{className:"count"},this.props.count)),c.a.createElement("div",{style:{margin:10}},c.a.createElement("button",{onClick:this.decrement},"-1"),c.a.createElement("button",{id:"add",onClick:this.increment},"+1")),c.a.createElement("div",{style:{margin:10}},c.a.createElement("button",{onClick:this.multiply2},"x2"),c.a.createElement("button",{onClick:this.divide2},"/2"),c.a.createElement("button",{onClick:this.factorial},"Factorial")),c.a.createElement("div",{style:{margin:10}},c.a.createElement("button",{onClick:this.square},"Square(2)"),c.a.createElement("button",{onClick:this.squareRoot},"Square Root")),c.a.createElement("div",{style:{margin:10}},c.a.createElement("button",{onClick:this.reset},"Reset")))}}]),e}(c.a.Component);var h=Object(d.b)(function(t){return{count:t.count}})(m),y=(n(27),n(4)),R={count:0},T=Object(y.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(console.log("reducer",t,e),e.type){case"INCREMENT":return t.count<=9999999?{count:t.count+1}:{count:"Too Large"};case"SQUARE":return t.count<=9999999?{count:t.count*t.count}:{count:"Too Large"};case"SQUARE-ROOT":return t.count<=9999999?{count:Number.parseFloat(Math.sqrt(t.count)).toFixed(2)}:{count:"Too Large"};case"DECREMENT":return t.count>=-9999999?{count:t.count-1}:{count:"Too Large"};case"MULTIPLY(2)":return t.count>=-9999999&&t.count<=9999999?{count:2*t.count}:{count:"Too Large"};case"DIVIDE(2)":return t.count>=-9999999&&t.count<=9999999?{count:Number.parseFloat(t.count/2).toFixed(2)}:{count:"Too Large"};case"FACTORIAL":return t.count<=9999999?{count:function t(e){return e<0?-1:0===e?1:e*t(e-1)}(t.count)}:{count:"Too Large"};case"RESET":return{count:0};default:return t}});T.dispatch({type:"INCREMENT"}),T.dispatch({type:"INCREMENT"}),T.dispatch({type:"DECREMENT"}),T.dispatch({type:"MULTIPLY(2)"}),T.dispatch({type:"DIVIDE(2)"}),T.dispatch({type:"FACTORIAL"}),T.dispatch({type:"SQUARE"}),T.dispatch({type:"SQUARE-ROOT"}),T.dispatch({type:"RESET"});var f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u,null),c.a.createElement(d.a,{store:T},c.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.4ff43e12.chunk.js.map