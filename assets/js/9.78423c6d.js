(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{176:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("在 Vue 中，对组件进行循环都需要加入key以便“就地复用”，可是在某些情况下，我们需要新建多个对象，而这些对象不是从后端获取到的，而是前端生成的，没有唯一值，且 Vue 目前版本只允许字符串，数字作为组件的 key。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("例如")]),t._v(" "),t._m(4),a("p",[t._v("简单的组件，对 items 进行 CRUD 都是可以识别出来。不会影响界面的显示。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),a("p",[t._v("在创建时候添加唯一的 key —— id ，并且在上传的时候删除数组的 id")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("很难判断你所写的组件究竟是复杂还是简单，但在数组对象中添加唯一的 id 且必须在上传之前去除它，这终究不是一个好的解决方案。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("在ruby语言中，我们可以唯一确定这个对象，因为每个对象新建后都有一个唯一值确定该对象。但是 js 却没有这种语言特性。所以我们要从这方面入手考虑。")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),a("p",[t._v("在复杂的组件可以这样使用")]),t._v(" "),t._m(14),a("p",[t._v("无需添加唯一的 id 以及删除 id ，即插即用且不影响垃圾回收。完美！")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("1、标识 对象"),a("br"),t._v("\n2、缓存与对象相关的 属性"),a("br"),t._v("\n3、为对象添加监听器"),a("br"),t._v("\n具体可参考 "),a("a",{attrs:{href:"http://exploringjs.com/es6/ch_maps-sets.html#_use-cases-for-weakmaps",target:"_blank",rel:"noopener noreferrer"}},[t._v("Exploring ES6"),a("OutboundLink")],1)]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("Valine")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"利用-weakmap-对-vue-新建数组中的对象赋予-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#利用-weakmap-对-vue-新建数组中的对象赋予-key","aria-hidden":"true"}},[this._v("#")]),this._v(" 利用 WeakMap 对 Vue 新建数组中的对象赋予 :key")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"需求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求","aria-hidden":"true"}},[this._v("#")]),this._v(" 需求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 方案")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"简单的组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简单的组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 简单的组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<template> \n    <easy-component v-for="(item, index) in items" :key="index"/>\n</template>\n<script>\n    export default{\n        methods: {\n            addSometing () {\n                this.items.push({\n                    // 一些属性\n                    someProp\n                })\n            }\n        }\n    }\n<\/script>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"复杂的组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复杂的组件","aria-hidden":"true"}},[this._v("#")]),this._v(" 复杂的组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("但是对于一些复杂的组件 Vue 是识别不出来的，而且在删除时候会发生错乱。"),e("br"),this._v("\n所以需要这样写")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<template> \n    <complex-component v-for="item in items :key="item.id"/>\n</template>\n<script>\n    export default{\n        methods: {\n            addSometing () {\n                this.items.push({\n                    id: getUidFunction(),\n                    // 一些属性\n                    someProp\n                })\n            }\n        }\n    }\n<\/script>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺点","aria-hidden":"true"}},[this._v("#")]),this._v(" 缺点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"更好的方法-weakmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更好的方法-weakmap","aria-hidden":"true"}},[this._v("#")]),this._v(" 更好的方法 WeakMap")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"思考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#思考","aria-hidden":"true"}},[this._v("#")]),this._v(" 思考")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"weakmap的作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#weakmap的作用","aria-hidden":"true"}},[this._v("#")]),this._v(" WeakMap的作用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("WeakMap针对于普通的 Map 有两点特殊之处"),e("br"),this._v("\n1、WeakMap只接受对象作为键名（ null 除外），不接受其他类型的值作为键名。"),e("br"),this._v("\n2、WeakMap的键名所指向的对象是弱引用，不计入垃圾回收机制。"),e("br"),this._v("\n重点在于 如果删除了WeakMap的键名所指向的对象，无需手动删除应用。"),e("br"),this._v("\n那么 思考后代码如下")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// 唯一key\nlet uKey = 1\n// 弱引用Map\nconst uidMap = new WeakMap()\n\nfunction getUniqueKey (obj) {\n    if (!uidMap.has(obj)) {\n        uidMap.set(obj, uKey++)\n    }\n    return uidMap.get(obj)\n}\n\n// 为了简单直接使用插件\nconst uidPlugin = {\n    install (Vue) {\n        Vue.prototype.$uid = getUniqueKey\n    }\n}\n\nif (typeof window !== 'undefined' && window.Vue) {\n    window.Vue.use(uidPlugin)\n}\n\nexport { uidPlugin }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<template> \n    <complex-component v-for="(item, index) in items :key="$uid(item)"/>\n</template>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"weakmap-其他使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#weakmap-其他使用场景","aria-hidden":"true"}},[this._v("#")]),this._v(" WeakMap  其他使用场景")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("新的特性对应新的解决方案，虽然js不是一门优秀的编程语言，但是js却拥有着及其优秀的社区，社区使得js可以不断进步。"),e("br"),this._v("\n在这里我也想求教大家，有没有什么更好的解决方案，或者这篇博客中有什么不对的地方，欢迎指正，在这里感谢各位了。")])}],!1,null,null,null);e.default=s.exports}}]);