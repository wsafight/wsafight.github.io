(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{186:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("在工程实践中，我们常常会遇到一些奇技淫巧。所谓奇技淫巧，就是官方在设计或者实践中并未想象出的代码风格或者使用场景。其实也就是类似于 react 的 hoc,本来源自于社区，但是该方案却成为了官方肯定的方案。那么究竟应不应在平时学习呢？究竟应不应该在工程中使用呢，或者使用怎么样的奇技淫巧。")]),t._v(" "),n("p",[t._v("两年前。我还没有毕业，在大学的最后一个学期中选择了进入前端，同时，被吸引到前端阵营中一个不得不说的原因就是 js 的奇技淫巧，同时个人是一个比较猎奇的人，所以就学了很多关于 js 的奇技淫巧。")]),t._v(" "),n("p",[t._v("现在这些奇技淫巧要么变成了这门语言不可或缺的一部分，要么随着时间的推移而消失，还有一些在不知不觉中却忘记了，既然这次的文章是介绍这方面的知识，也就多介绍一下之前学习的一些例子。")]),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("在 es6 includes 尚未推行之前，我们判断判断字符串或者数组包含只能使用 indexOf 这个方法，但是 indexOf 返回的确实元素的索引，如果不存在则返回 -1。\n因为在之前写 c 语言的时候，我们往往使用 0 代表成功，1 2 3代表着不同的错误。因为0是独一无二的。在类c的语言中是具有 truthy falsy 这个概念。并不指代bool的 true 与 false。")]),t._v(" "),n("p",[t._v("下表代表了js 的 truthy 以及 falsy。")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("对于数值而言,我们知道 0 对于数值是唯一的，而 -1不是。那么我们可以通过 ~ 运算符来把-1 变为 0.")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),n("p",[t._v("因为在计算机中第一位代表着 符号位置。")]),t._v(" "),n("p",[t._v("同时简单理解。对任一数值 x 进行按位非操作的结果为 -(x + 1)。\n也就是说通过 ~ 可以把 -1(且仅仅只是 -1) 变为 falsy。")]),t._v(" "),t._m(7),t._m(8),t._v(" "),n("p",[t._v("没学习惰性函数时候，如果创建 xhr,每次都需要判断。")]),t._v(" "),t._m(9),n("p",[t._v("在学习完了惰性函数之后")]),t._v(" "),t._m(10),n("p",[t._v("如果代码被使用于两次调用以上则会有一定的性能优化。第一次调用时候 把 xhr 赋值并返回，且在进入层层 if 判断中把 createXHR 这个函数赋值为其他函数。")]),t._v(" "),t._m(11),n("p",[t._v("该方案可以在不需要第二个变量的情况下直接对函数调用进行优化。同时对于调用方也是透明的，不需要修改任何代码。")]),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("在最近的学习中，我看到了一篇关于 ...  (扩展运算符)的另类用法，"),n("a",{attrs:{href:"https://dev.to/jfet97/the-shortest-way-to-conditional-insert-properties-into-an-object-literal-4ag7",target:"_blank",rel:"noopener noreferrer"}},[t._v("The shortest way to conditional insert properties into an object literal"),n("OutboundLink")],1),t._v(", 这篇文章介绍了如何最简化的写出条件性插入对象属性。")]),t._v(" "),n("p",[t._v("在没有看过这篇文章时会写出如下代码：")]),t._v(" "),t._m(13),n("p",[t._v("但是,看完该文章之后可以写出这样的代码")]),t._v(" "),t._m(14),n("p",[t._v("上面的代码与该代码功能相同，但是代码量却减少很多。")]),t._v(" "),n("p",[t._v("要理解上述代码的运行原理，首先先介绍一下 ... 运算符，\n对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。")]),t._v(" "),t._m(15),n("p",[t._v("可以参考 阮一峰的 es6入门的"),n("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/object#%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("对象的扩展运算符"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("原理是因为代码可以如下理解：")]),t._v(" "),t._m(16),t._m(17),t._v(" "),n("p",[t._v("关于 ~ 操作符 + indexOf 其实加深了对位运算与比特位的理解。但是在es6之后我们完全可以使用 includes。完全可以不再使用~indexOf。")]),t._v(" "),n("p",[t._v("对于惰性函数，在typescript中，该代码是不可以使用的。当然，我们可以通过函数变量以及增加代码实现上述功能。")]),t._v(" "),t._m(18),n("p",[t._v("这里也可以看出 ts 不认可函数声明的函数名是一个变量。")]),t._v(" "),n("p",[t._v("对于扩展运算符的特殊用法。关于 typescript 使用,上述代码是可以在ts中使用的,不过不可以使用 &&，要使用 三元运算符")]),t._v(" "),t._m(19),n("p",[t._v("但是不建议在ts中使用,因为该代码不会被代码ts检测到。")]),t._v(" "),t._m(20),n("p",[t._v("该代码是与 ts 严重相悖的，ts首要就是类型定义，而使用该代码逃出了 ts 的类型定义，这个对于语言上以及工程维护上是无法接受的。\n同样的代码，我认为 js 是可以接受的(但是未必要在工程中使用)，但是 ts 确实无法接受的，这也是不同的语言之间的差异性。")]),t._v(" "),n("p",[t._v("在关于这片文章的评论中，最大的论点在于 为什么要使用最简的代码，最好的代码应该是不言自明的。")]),t._v(" "),n("p",[t._v("而作者也相对而言探讨了自己的一些看法，应该学习一些自己不理解的东西。同时如果一个东西能够解释来龙去脉，完全可以从原理性解释，那么值得学习与使用。同时我个人其实是和作者持着相同意见的。")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),n("p",[n("a",{attrs:{href:"https://dev.to/jfet97/the-shortest-way-to-conditional-insert-properties-into-an-object-literal-4ag7",target:"_blank",rel:"noopener noreferrer"}},[t._v("The shortest way to conditional insert properties into an object literal"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/object#%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95%E8%BF%90%E7%AE%97%E7%AC%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("对象的扩展运算符"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"探讨奇技淫巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#探讨奇技淫巧","aria-hidden":"true"}},[this._v("#")]),this._v(" 探讨奇技淫巧")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"起源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起源","aria-hidden":"true"}},[this._v("#")]),this._v(" 起源")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"运算符-indexof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运算符-indexof","aria-hidden":"true"}},[this._v("#")]),this._v(" ~ 运算符 + indexOf")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("变量类型")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("falsy")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("truthy")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("布尔")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("false")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("字符串")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v('"  "')]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("非空字符串")])]),t._v(" "),n("tr",[n("td",[t._v("数值")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("0 NaN")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("任何不为falsy的数值")])]),t._v(" "),n("tr",[n("td",[t._v("null")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("是")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),n("tr",[n("td",[t._v("undefined")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("是")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("否")])]),t._v(" "),n("tr",[n("td",[t._v("对象(数组), {} 以及 []")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("否")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("是")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("~-1\n// 0\n~1\n//-2\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("解释下"),e("br"),this._v("\n对每一个比特位执行非（NOT）操作。NOT a 结果为 a 的反转（即反码）。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("9 (base 10) = 00000000000000000000000000001001 (base 2)   \n         \n~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("var str = 'study pwa';\nvar searchFor = 'a';\n\n// 这是 if (str.indexOf('a') > -1) 或者 if ( -1 * str.indexOf('a') <= 0) 条件判断的另一种方法\nif (~str.indexOf(searchFor)) {\n  // searchFor 包含在字符串 str 中\n} else {\n  // searchFor 不包含在字符串 str 中\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"惰性函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#惰性函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 惰性函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('function createXHR(){\n  var xmlhttp;\n  try{\n    //firfox,opear,safari\n    xmlHttp=new XMLHttpRequest();\n  } catch(e) {\n    try{\n      xmlHttp=new ActiveXobject(\'Msxm12.XMLHTTP\');\n    } catch(e) {\n      try{\n        xmlHttp=new ActiveXobject("Microsoft.XMLHTTP")\n      } catch(e) {\n        alert("您的浏览器不支持AJAX")\n        return false;\n      }\n    }\n  }\n  return xmlHttp;\n}\n\n\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('function createXHR(){\n  // 定义xhr,\n  var xhr = null;\n  if (typeof XMLHttpRequest!=\'undefined\') {\n    xhr=new XMLHttpRequest();\n    createXHR=function(){\n      return new XMLHttpRequest();  //直接返回一个懒函数\n    }\n  } else {\n    try{\n      xhr=new ActiveXObject("Msxml2.XMLHTTP");\n      createXHR=function(){\n        return new ActiveXObject("Msxml2.XMLHTTP");\n      }\n    } catch(e) {\n      try{\n        xhr =new ActiveXObject("Microsoft.XMLHTTP");\n        createXHR=function(){\n          return new ActiveXObject("Microsoft.XMLHTTP");\n        }\n      } catch(e) {\n        createXHR=function(){\n          return null\n        }\n      }        \n    }\n  }\n  // 第一次调用也需要 返回 xhr 对象，所以需要返回 xhr\n  return xhr;\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(" // 如果浏览器中有 XMLHttpRequest 对象在第二次调用时候\n  createXHR=function(){\n    return XMLHttpRequest();  //直接返回一个懒函数\n  }\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"扩展运算符号的另类用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展运算符号的另类用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 扩展运算符号的另类用法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// 获得手机号\nconst phone = this.state.phone\n\nconst person = {\n  name: 'gogo',\n  age: 11\n}\n\n// 如果手机号不为空，则添加到person中\nif (phone) {\n  person.phone = phone\n}\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// 获得手机号\nconst phone = this.state.phone\n\nconst person = {\n  name: 'gogo',\n  age: 11,\n  ...phone && {phone}\n}\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("let z = { a: 3, b: 4 };\nlet n = { ...z };\nn // { a: 3, b: 4 }\n\n// 如果是 空对象，没有任何效果\n{...{}, a: 1}\n// { a: 1 }\n\n// 如果扩展运算符后面不是对象，则会自动将其转为对象。但是如果对象没有属性，就会返回空对象\n// {...1} 会变为 {...Object(1)} 但是因为没有属性\n{...1} \n// {}\n\n// 同理得到\n{...undefined} {...null} {...true}\n// 都会变为 {}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const obj = {\n  ...(phone && {phone})\n}\n\n// 如果 phone 有数据,&& 执行则会变为\nconst obj = {\n  ...{phone}\n}\n// 而对象扩展运算符 执行就会变为\nconst obj = {\n  phone\n}\n\n但是 如果 phone 为空字符串或者其他 falsy 数据，则代码会直接短路\nconst obj = {\n  ...false\n  ...null\n  ...0\n  ...undefined\n}\n则不会添加任何属性进入对象\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"讨论与思考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#讨论与思考","aria-hidden":"true"}},[this._v("#")]),this._v(" 讨论与思考")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("function createXHR(){}\n// 修改为\nlet createXHR = function() {\n  // ...\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("{\n   ...phone ? {phone} : {}\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const phone = '123'\n\n// 定义接口\ninterface Person {\n  name: string;\n}\n\n// 不会爆出 error\nconst person: Person = {\n  name: 'ccc',\n  ...phone ? {phone} : {}\n}\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("js 是一门灵活的语言(手动滑稽)。")]),this._v(" "),e("li",[this._v("应该多学习一些奇技淫巧，因为很多奇技淫巧往往代表一些混合的知识，往往会有一些新奇的思考与体验（怎么我想不出来？）同时，在别人使用了奇技淫巧时候我可以迅速理解。")]),this._v(" "),e("li",[this._v("在项目中是否使用此类代码要取决团队类型，以及项目体系，并非个人喜恶。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],!1,null,null,null);e.default=s.exports}}]);