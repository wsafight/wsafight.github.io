(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(t,i,n){"use strict";n.r(i);var e={name:"Valine",watch:{$route:function(t,i){i.path!=t.path&&this.initValine()}},methods:{initValine:function(){var t=location.origin+location.pathname;document.getElementsByClassName("leancloud-visitors")[0].id=t,this.valine.init({el:"#vcomments",appId:"JsbIEIrpTtaEWhGXAC4vGHWm-gzGzoHsz",appKey:"3M0AXkI6H2vjBtjELX0gPfHR",notify:!1,verify:!0,avatar:"wavatar",placeholder:"请发表你的看法(支持markdown)",path:t,visitor:!0})}},mounted:function(){var t=n(167);"undefined"!=typeof window&&(this.window=window,window.AV=n(168)),this.valine=new t,this.initValine()}},a=n(0),s=Object(a.a)(e,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("section",[i("div",{attrs:{id:"vcomments"}}),this._v(" "),i("span",{staticClass:"leancloud-visitors",attrs:{"data-flag-title":"Your Article Title"}},[i("em",{staticClass:"post-meta-item-text"},[this._v("阅读量： ")]),this._v(" "),i("i",{staticClass:"leancloud-visitors-count"})])])])}],!1,null,null,null);i.default=s.exports}}]);