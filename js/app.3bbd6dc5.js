(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],f=0,p=[];f<i.length;f++)r=i[f],s[r]&&p.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Monster-slayer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),s=n.n(a);s.a},"4caf":function(t,e,n){"use strict";var a=n("9e10"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("div",{staticClass:"columns is-centered"},[n("Player",{attrs:{name:"You",life:t.lifePlayer}}),n("Player",{attrs:{name:"Monster",life:t.lifeMonster}})],1),n("div",{staticClass:"is-divider"}),n("div",{staticClass:"columns"},[!1===t.buttons?n("div",{staticClass:"column"},[n("button",{staticClass:"button is-link",on:{click:function(e){return e.preventDefault(),t.seeButtons(e)}}},[t._v("Start a new game")])]):t._e()]),!0===t.buttons?n("div",{staticClass:"columns is-centered"},[n("ButtonComponent",{attrs:{color:"is-danger","name-function":t.attack,name:"Attack"}}),n("ButtonComponent",{attrs:{color:"specialAttack","name-function":t.attackSpecial,name:"Special attack"}}),n("ButtonComponent",{attrs:{color:"is-success","name-function":t.heal,name:"Heal"}}),n("ButtonComponent",{attrs:{color:"giveUp","name-function":t.giveUp,name:"Give Up"}})],1):t._e(),t.lifePlayer<=0||t.lifeMonster<=0?n("Modal",{attrs:{"cancel-function":t.cancel,"new-game-function":t.newGame,result:t.result}}):t._e()],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-one-third"},[n("h2",{staticClass:"title is-2"},[t._v(t._s(t.name))]),n("progress",{staticClass:"progress is-success show-value",attrs:{max:"100"},domProps:{value:t.life}})])},i=[],l={name:"Player",props:["name","life"]},c=l,u=(n("6131"),n("2877")),f=Object(u["a"])(c,r,i,!1,null,null,null),p=f.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column is-2"},[n("button",{staticClass:"button is-rounded",class:t.color,on:{click:function(e){return e.preventDefault(),t.nameFunction(e)}}},[t._v(t._s(t.name))])])},m=[],h={name:"ButtonComponent",props:["nameFunction","name","color"]},v=h,b=(n("4caf"),Object(u["a"])(v,d,m,!1,null,null,null)),y=b.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"modal is-active"},[n("div",{staticClass:"modal-background"}),n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v(t._s(t.result))]),n("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return e.preventDefault(),t.cancelFunction(e)}}})]),n("section",{staticClass:"modal-card-body"},[n("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.newGameFunction(e)}}},[t._v("New game")]),n("button",{staticClass:"button is-danger",on:{click:function(e){return e.preventDefault(),t.cancelFunction(e)}}},[t._v("Cancel")])])])])])},M=[],P={name:"Modal",props:["newGameFunction","cancelFunction","result"]},_=P,k=Object(u["a"])(_,C,M,!1,null,null,null),g=k.exports,w={name:"app",components:{Player:p,ButtonComponent:y,Modal:g},data:function(){return{lifePlayer:100,lifeMonster:100,buttons:!1,result:""}},methods:{seeButtons:function(){this.buttons=!this.buttons},attack:function(){this.lifeMonster-=this.attackPlayer(),this.lifePlayer-=this.attackMonster()},attackSpecial:function(){this.lifeMonster-=this.attackSpecialPlayer(),this.lifePlayer-=this.attackMonster()},heal:function(){this.lifePlayer<100&&(this.lifePlayer+=10,this.lifePlayer-=this.attackMonster())},giveUp:function(){this.buttons=!1,this.lifePlayer=100,this.lifeMonster=100},newGame:function(){this.lifePlayer=this.lifeMonster=100},cancel:function(){this.lifePlayer=this.lifeMonster=100,this.buttons=!1},attackPlayer:function(){return Math.floor(7*Math.random())+3},attackMonster:function(){return Math.floor(7*Math.random())+5},attackSpecialPlayer:function(){return Math.floor(10*Math.random())+10}},updated:function(){this.lifePlayer<=0?this.result="you loose":this.lifeMonster<=0&&(this.result="you win")}},O=w,j=(n("034f"),Object(u["a"])(O,s,o,!1,null,null,null)),x=j.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(x)}}).$mount("#app")},6131:function(t,e,n){"use strict";var a=n("bf75"),s=n.n(a);s.a},"64a9":function(t,e,n){},"9e10":function(t,e,n){},bf75:function(t,e,n){}});
//# sourceMappingURL=app.3bbd6dc5.js.map