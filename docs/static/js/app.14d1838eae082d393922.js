webpackJsonp([1],{1067:function(t,s,n){var e=n(2)(n(8),n(1069),null,null);t.exports=e.exports},1068:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"app"}},[n("Kanban",{attrs:{statuses:t.statuses,items:t.blocks},on:{"update-block":t.updateBlock}},t._l(t.blocks,function(s){return n("div",{slot:s.id},[n("div",[n("strong",[t._v("id:")]),t._v(" "+t._s(s.id)+"\n          ")]),t._v(" "),n("div",[t._v("\n              "+t._s(s.title)+"\n          ")])])}))],1)},staticRenderFns:[]}},1069:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"drag-container"},[n("ul",{staticClass:"drag-list"},t._l(t.statuses,function(s){return n("li",{staticClass:"drag-column",class:(e={},e["drag-column-"+s]=!0,e)},[n("span",{staticClass:"drag-column-header"},[n("h2",[t._v(t._s(s))])]),t._v(" "),n("div",{staticClass:"drag-options"}),t._v(" "),n("ul",{ref:"list",refInFor:!0,staticClass:"drag-inner-list",attrs:{"data-status":s}},t._l(t.getBlocks(s),function(s){return n("li",{key:s.id,staticClass:"drag-item",attrs:{"data-block-id":s.id}},[t._t(String(s.id),[n("strong",[t._v(t._s(s.status))]),t._v(" "),n("div",[t._v(t._s(s.id))])])],2)}))]);var e}))])},staticRenderFns:[]}},16:function(t,s){},3:function(t,s,n){n(16);var e=n(2)(n(7),n(1068),null,null);t.exports=e.exports},6:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n(4),a=n(3),i=n.n(a);e.a.config.productionTip=!1,new e.a({el:"#app",template:"<App/>",components:{App:i.a}})},7:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n(17),a=n.n(e),i=n(1067),o=n.n(i);s.default={name:"app",components:{Kanban:o.a},data:function(){return{statuses:["on-hold","in-progress","needs-review","approved"],blocks:[]}},mounted:function(){for(var t=0;t<=10;t+=1)this.blocks.push({id:t,status:this.statuses[Math.floor(4*Math.random())],title:a.a.company.bs()})},methods:{updateBlock:function(t,s){this.blocks.find(function(s){return s.id===Number(t)}).status=s}}}},8:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n(15),a=n.n(e);s.default={name:"KanbanBoard",props:{statuses:{},items:{}},computed:{blocks:function(){return this.items}},methods:{getBlocks:function(t){return this.blocks.filter(function(s){return s.status===t})}},mounted:function(){var t=this;a()(this.$refs.list).on("drag",function(t){t.classList.add("is-moving")}).on("drop",function(s,n){t.$emit("update-block",s.dataset.blockId,n.dataset.status)}).on("dragend",function(t){t.classList.remove("is-moving"),window.setTimeout(function(){t.classList.add("is-moved"),window.setTimeout(function(){t.classList.remove("is-moved")},600)},100)})}}}},[6]);
//# sourceMappingURL=app.14d1838eae082d393922.js.map