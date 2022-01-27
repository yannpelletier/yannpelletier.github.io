(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{430:function(t,o,e){"use strict";e.r(o);var n={name:"StakingPoolList",components:{StakingPool:e(431).default},props:{pools:{type:Array,default:function(){return[]}}}},l=e(69),r=e(62),c=e.n(r),v=e(467),component=Object(l.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-expansion-panels",{staticStyle:{transition:"all .25s"}},[t._l(t.pools,(function(t,o){return[e("staking-pool",{key:o,attrs:{pool:t}})]}))],2)}),[],!1,null,null,null);o.default=component.exports;c()(component,{StakingPool:e(431).default}),c()(component,{VExpansionPanels:v.a})},521:function(t,o,e){"use strict";e.r(o);var n=e(430),l=e(26),r={name:"Staking",components:{StakingPoolList:n.default},mounted:function(){var t=this;window.setTimeout((function(){t.$store.dispatch("updateData",1)}),2e3)},data:function(){return{regions:[{text:"Vaults",icon:"mdi-lock",value:"vaults"},{text:"Pools",icon:"mdi-sail-boat",value:"pools"},{text:"Super Pools",icon:"mdi-ferry",value:"super-pools"}]}},computed:{view:function(){return this.$nuxt.$route.query.view||"vaults"},buttonOutlined:function(){var t=this;return function(o){return t.view!==o}},buttonColor:function(){var t=this;return function(o){return t.view===o?"primary":null}},vaultPools:function(){return l.a.getters("getVaultPools")},regularPools:function(){return l.a.getters("getRegularPools")},superPools:function(){return l.a.getters("getSuperPools")}},methods:{setRegion:function(t){this.$nuxt.$router.push({query:{view:t}})}}},c=e(69),v=e(62),f=e.n(v),d=e(408),m=e(181),w=e(524),h=e(525),k=e(418),P=e(409),x=e(420),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-card",{staticClass:"flex-center",attrs:{width:"100%","max-width":"1200",color:"transparent",flat:""}},[e("v-col",{staticClass:"ma-0 pa-0"},[e("v-row",{staticClass:"mb-4"},t._l(t.regions,(function(o,n){return e("v-col",{key:n,attrs:{cols:"12",md:"4"}},[e("v-btn",{attrs:{width:"100%",color:t.buttonColor(o.value),outlined:t.buttonOutlined(o.value)},on:{click:function(e){return t.setRegion(o.value)}}},[t._v("\n          "+t._s(o.text)+"\n          "),e("v-icon",{staticClass:"ml-3"},[t._v("\n            "+t._s(o.icon)+"\n          ")])],1)],1)})),1),t._v(" "),e("v-carousel",{attrs:{"hide-delimiters":"","next-icon":!1,"prev-icon":!1,cycle:!1,height:"100%"},model:{value:t.view,callback:function(o){t.view=o},expression:"view"}},[e("v-carousel-item",{attrs:{value:"vaults"}},[e("staking-pool-list",{attrs:{pools:t.vaultPools}})],1),t._v(" "),e("v-carousel-item",{attrs:{value:"pools"}},[e("staking-pool-list",{attrs:{pools:t.regularPools}})],1),t._v(" "),e("v-carousel-item",{attrs:{value:"super-pools"}},[e("staking-pool-list",{attrs:{pools:t.superPools}})],1)],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports;f()(component,{StakingPoolList:e(430).default}),f()(component,{VBtn:d.a,VCard:m.a,VCarousel:w.a,VCarouselItem:h.a,VCol:k.a,VIcon:P.a,VRow:x.a})}}]);