(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{16:function(t,n,e){},18:function(t,n,e){"use strict";e.r(n);var r=e(5),o=e.n(r),s=e(2),c=e(6),a=e(7),u=e(10),i=e(9),d=e(1),f=e.n(d),l=e(3),p=e.n(l),b=(e(16),e(0)),h=function(t){var n=t.goods;return Object(b.jsx)("ul",{className:"GoodsList",children:n.map((function(t){var n=t.id,e=t.name,r=t.color;return Object(b.jsx)("li",{style:{color:r},className:"GoodsList__item",children:e},n)}))})},j="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function m(){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=fetch(j),t.next=3,n;case 3:return t.abrupt("return",t.sent.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g=function(){var t=Object(s.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return n=t.sent,t.abrupt("return",n.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(s.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(t){Object(u.a)(e,t);var n=Object(i.a)(e);function e(){var t;Object(c.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))).state={goods:[]},t.setGoods=function(){var n=Object(s.a)(f.a.mark((function n(e){var r;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:r=n.sent,t.setState({goods:r});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),t}return Object(a.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.state.goods),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Dynamic list of Goods"}),Object(b.jsx)("button",{type:"button",onClick:function(){t.setGoods(m)},children:"Get goods"}),Object(b.jsx)("button",{type:"button",onClick:function(){t.setGoods(g)},children:"Get first 5 goods"}),Object(b.jsx)("button",{type:"button",onClick:function(){t.setGoods(y)},children:"Get red goods"}),Object(b.jsx)(h,{goods:this.state.goods})]})}}]),e}(p.a.Component),O=x;o.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.66bb19d0.chunk.js.map