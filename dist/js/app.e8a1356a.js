(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],d=0,m=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},o={app:0},n=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0839":function(e,t,a){},"0e64":function(e,t,a){"use strict";a("267c")},"24f5":function(e,t,a){},2503:function(e,t,a){},"267c":function(e,t,a){},"33f5":function(e,t,a){"use strict";a("7493")},3833:function(e,t,a){},4108:function(e,t,a){"use strict";a("2503")},4273:function(e,t,a){},"4d62":function(e,t,a){"use strict";a("97f3")},"4ffe":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:{"hide-menu":!e.isMenuVisible||!e.user},attrs:{id:"app"}},[a("Header",{attrs:{title:"Deposito de Artigos",hideToggle:!e.user,hideUserDropdown:!e.user}}),e.user?a("Menu"):e._e(),e.validatingToken?a("Loading"):a("Content"),a("Footer")],1)},n=[],s=a("c7eb"),i=a("1da1"),c=(a("14d9"),a("b64b"),a("2f62")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[e.hideToggle?e._e():a("a",{staticClass:"toggle",on:{click:e.toggleMenu}},[a("font-awesome-icon",{attrs:{icon:e.icon}})],1),a("h1",{staticClass:"title"},[a("router-link",{attrs:{to:"/"}},[e._v(" "+e._s(e.title))])],1),e.hideUserDropdown?e._e():a("UserDropdown")],1)},u=[],d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-dropdown"},[a("div",{staticClass:"user-button"},[a("span",{staticClass:"d-none d-sm-block"},[e._v(e._s(e.user.name))]),a("div",{staticClass:"user-dropdown-img"},[a("Gravatar",{attrs:{email:e.user.email,alt:"User"}})],1),a("font-awesome-icon",{attrs:{icon:"fa-chevron-down"}})],1),a("div",{staticClass:"user-dropdown-content"},[e.user.admin?a("router-link",{attrs:{to:"/admin"}},[a("i",[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-gear"}}),e._v(" Administração")],1)]):e._e(),a("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-right-from-bracket"}}),e._v(" Sair")],1)],1)])},m=[],f="_knowledge_user",p="http://localhost:3000";function g(e){e&&e.response&&e.response.data?r["default"].toasted.global.defaultError({msg:e.response.data}):"string"===typeof e&&r["default"].toasted.global.defaultError()}var h=a("e06a"),v=a.n(h),b={name:"UserDropdown",components:{Gravatar:v.a},computed:Object(c["b"])(["user"]),methods:{logout:function(){localStorage.removeItem(f),this.$store.commit("setUser",null),this.$router.push({name:"auth"})}}},y=b,_=(a("4108"),a("2877")),w=Object(_["a"])(y,d,m,!1,null,null,null),C=w.exports,k={name:"Header",components:{UserDropdown:C},props:{title:String,hideToggle:Boolean,hideUserDropdown:Boolean},computed:{icon:function(){return this.$store.state.isMenuVisible?"fa-chevron-left":"fa-chevron-down"}},methods:{toggleMenu:function(){this.$store.commit("toggleMenu")}}},x=k,$=(a("0e64"),Object(_["a"])(x,l,u,!1,null,null,null)),A=$.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{directives:[{name:"show",rawName:"v-show",value:e.isMenuVisible,expression:"isMenuVisible"}],staticClass:"menu"},[a("div",{staticClass:"menu-filter"},[a("font-awesome-icon",{staticStyle:{color:"#AAA"},attrs:{icon:"fa-solid fa-magnifying-glass",size:"md"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.treeFilter,expression:"treeFilter"}],staticClass:"filter-field",attrs:{type:"text",placeholder:"Digite para filtrar..."},domProps:{value:e.treeFilter},on:{input:function(t){t.target.composing||(e.treeFilter=t.target.value)}}})],1),a("Tree",{ref:"tree",attrs:{data:e.treeData,options:e.treeOptions,filter:e.treeFilter}})],1)},O=[],j=a("25ea"),U=a("bc3a"),I=a.n(U),E={name:"Menu",components:{Tree:j["a"]},computed:Object(c["b"])(["isMenuVisible"]),data:function(){return{treeFilter:"",treeData:this.getTreeData(),treeOptions:{propertyNames:{text:"name"},filter:{emptyText:"Categoria nâo encontrada"}}}},methods:{getTreeData:function(){var e="".concat(p,"/categories/tree");return I.a.get(e).then((function(e){return e.data}))},onNodeselected:function(e){this.$router.push({name:"articlesByCategory",params:{id:e.id}}),"xs"!==this.$mq&&"sm"!==this.$mq||this.$store.commit("toggleMenu",!1)}},mounted:function(){this.$refs.tree.$on("node:selected",this.onNodeselected)}},P=E,M=(a("4d62"),Object(_["a"])(P,S,O,!1,null,null,null)),N=M.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("router-view")],1)},D=[],q={name:"Content"},V=q,B=(a("b5ef"),Object(_["a"])(V,T,D,!1,null,null,null)),F=B.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("span",[e._v("Copyrigth "),a("strong",[e._v("Sette")]),e._v(" © 2023-2024 ")])])}],J={name:"Footer"},H=J,R=(a("f29c"),Object(_["a"])(H,L,z,!1,null,null,null)),G=R.exports,K=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Q=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"loading"},[r("img",{attrs:{src:a("cf1c"),alt:"Loading"}})])}],W={name:"Loading"},X=W,Y=(a("cfe5"),Object(_["a"])(X,K,Q,!1,null,null,null)),Z=Y.exports,ee={name:"App",components:{Header:A,Menu:N,Content:F,Footer:G,Loading:Z},computed:Object(c["b"])(["isMenuVisible","user"]),data:function(){return{validatingToken:!0}},methods:{validateToken:function(){var e=this;return Object(i["a"])(Object(s["a"])().mark((function t(){var a,r,o;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.validateToken=!0,a=localStorage.getItem(f),r=JSON.parse(a),e.$store.commit("setUser",null),r){t.next=8;break}return e.validatingToken=!1,e.$router.push({name:"auth"}),t.abrupt("return");case 8:return t.next=10,I.a.post("".concat(p,"/validateToken"),r);case 10:o=t.sent,o.data?(e.$store.commit("setUser",r),"xs"!==e.$mq&&"sm"!==e.$mq||e.$store.commit("toggleMenu",!1)):(localStorage.removeItem(f),e.$router.push({name:"auth"})),e.validatingToken=!1;case 13:case"end":return t.stop()}}),t)})))()}},created:function(){this.validateToken()}},te=ee,ae=(a("e6a8"),Object(_["a"])(te,o,n,!1,null,null,null)),re=ae.exports,oe=(a("f9e3"),a("2dd8"),a("5f5b"));r["default"].use(oe["a"]);var ne=a("a65d"),se=a.n(ne);r["default"].use(se.a,{iconPack:"fontawesome",duration:3e3}),r["default"].toasted.register("defaultSuccess",(function(e){return e.msg?e.msg:"Operação realizada com sucesso !"}),{type:"success",icon:"check"}),r["default"].toasted.register("defaultError",(function(e){return e.msg?e.msg:"Ops... Erro inesperado."}),{type:"error",icon:"times"});a("d3b7");var ie=function(e){return e},ce=function(e){if(401!==e.response.status)return Promise.reject(e);window.location="/"};I.a.interceptors.response.use(ie,ce);var le=a("660e");r["default"].use(le["a"],{breakpoints:{xs:576,sm:768,md:960,lg:1140,xl:1/0}}),r["default"].use(c["a"]);var ue=new c["a"].Store({state:{isMenuVisible:!1,user:null},mutations:{toggleMenu:function(e,t){e.user?e.isMenuVisible=void 0===t?!e.isMenuVisible:t:e.isMenuVisible=!1},setUser:function(e,t){e.user=t,t?(I.a.defaults.headers.common["Authorization"]="bearer ".concat(t.token),e.isMenuVisible=!0):(delete I.a.defaults.headers.common["Authorization"],e.isMenuVisible=!1)}}}),de=a("8c4f"),me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("PageTitle",{attrs:{icon:"fa-solid fa-house",main:"Dashboard",sub:"Base de Conhecimento"}}),a("div",{staticClass:"stats"},[a("Stat",{attrs:{title:"Categorias",value:e.stat.categories,icon:"fa-solid fa-folder",color:"#d54d50"}}),a("Stat",{attrs:{title:"Artigos",value:e.stat.articles,icon:"fa-solid fa-file",color:"#3bc480"}}),a("Stat",{attrs:{title:"Usuarios",value:e.stat.users,icon:"fa-solid fa-user",color:"#3282cd"}})],1)],1)},fe=[],pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-title"},[a("h1",[e.icon?a("font-awesome-icon",{attrs:{icon:e.icon}}):e._e(),e._v(" "+e._s(e.main)+" ")],1),a("h2",[e._v(e._s(e.sub))]),a("hr")])},ge=[],he={name:"pageTitle",props:["icon","main","sub"]},ve=he,be=(a("bdb3"),Object(_["a"])(ve,pe,ge,!1,null,null,null)),ye=be.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stat"},[a("div",{staticClass:"stat-icon"},[a("font-awesome-icon",{style:{color:this.color||"#ad5"},attrs:{icon:e.icon,size:"4x"}})],1),a("div",{staticClass:"stat-info"},[a("span",{staticClass:"stat-title"},[e._v(e._s(e.title))]),a("span",{staticClass:"stat-value"},[e._v(e._s(e.value))])])])},we=[],Ce={name:"Stat",props:["title","value","icon","color"]},ke=Ce,xe=(a("8bbb"),Object(_["a"])(ke,_e,we,!1,null,null,null)),$e=xe.exports,Ae={name:"Home",components:{PageTitle:ye,Stat:$e},data:function(){return{stat:{}}},methods:{getStats:function(){var e=this;I.a.get("".concat(p,"/stats")).then((function(t){return e.stat=t.data}))}},mounted:function(){this.getStats()}},Se=Ae,Oe=(a("bb62"),Object(_["a"])(Se,me,fe,!1,null,null,null)),je=Oe.exports,Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-pages"},[a("PageTitle",{attrs:{icon:"",main:"Administração do Sistema",sub:"Cadastro & Cia"}}),a("div",{staticClass:"admin-pages-tabs"},[a("b-card",{attrs:{"no-body":""}},[a("b-tabs",[a("b-tab",{attrs:{title:"Artigos",active:""}},[a("ArticleAdmin")],1),a("b-tab",{attrs:{title:"Categoria"}},[a("CategoryAdmin")],1),a("b-tab",{attrs:{title:"Usuarios",active:""}},[a("UserAdmin")],1)],1)],1)],1)],1)},Ie=[],Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-admin p-3"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.article.id,expression:"article.id"}],attrs:{id:"article-id",type:"hidden"},domProps:{value:e.article.id},on:{input:function(t){t.target.composing||e.$set(e.article,"id",t.target.value)}}}),a("b-form-group",{attrs:{label:"Nome:","label-for":"article-name"}},[a("b-form-input",{attrs:{id:"article-name",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome do Artigo..."},model:{value:e.article.name,callback:function(t){e.$set(e.article,"name",t)},expression:"article.name"}})],1),a("b-form-group",{attrs:{label:"Descrição","label-for":"article-description"}},[a("b-form-input",{attrs:{id:"article-description",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome do Artigo..."},model:{value:e.article.description,callback:function(t){e.$set(e.article,"description",t)},expression:"article.description"}})],1),"save"===e.mode?a("b-form-group",{attrs:{label:"Imagem (URL):","label-for":"article-imageUrl"}},[a("b-form-input",{attrs:{id:"article-imageUrl",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe a URL da Imagem..."},model:{value:e.article.imageUrl,callback:function(t){e.$set(e.article,"imageUrl",t)},expression:"article.imageUrl"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Categoria:","label-for":"article-categoryId"}},[a("b-form-select",{attrs:{id:"article-categoryId",options:e.categories},model:{value:e.article.categoryId,callback:function(t){e.$set(e.article,"categoryId",t)},expression:"article.categoryId"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Autor:","label-for":"article-userId"}},[a("b-form-select",{attrs:{id:"article-userId",options:e.users},model:{value:e.article.userId,callback:function(t){e.$set(e.article,"userId",t)},expression:"article.userId"}})],1):e._e(),"save"===e.mode?a("b-form-group",{attrs:{label:"Conteúdo","label-for":"article-content"}},[a("VueEditor",{attrs:{placeholder:"Informe o Conteúdo do Artigo..."},model:{value:e.article.content,callback:function(t){e.$set(e.article,"content",t)},expression:"article.content"}})],1):e._e(),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-table",{attrs:{hover:"",striped:"",items:e.articles,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){return e.loadArticle(t.item)}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-pencil"}})],1),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return e.loadArticle(t.item,"remove")}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1)]}}])}),a("b-pagination",{attrs:{size:"md","total-rows":e.count,"per-page":e.limit},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}})],1)},Pe=[],Me=(a("99af"),a("d81d"),a("b0c0"),a("5873")),Ne={name:"ArticleAdmin",components:{VueEditor:Me["a"]},data:function(){return{mode:"save",article:{},articles:[],categories:[],users:[],page:1,limit:0,count:0,fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"description",label:"Descrição",sortable:!0},{key:"actions",label:"Ações"}]}},methods:{loadArticles:function(){var e=this,t="".concat(p,"/articles?page=").concat(this.page);I.a.get(t).then((function(t){e.articles=t.data.data,e.count=t.data.count,e.limit=t.data.limit}))},reset:function(){this.mode="save",this.article={},this.loadArticles()},save:function(){var e=this,t=this.article.id?"put":"post",a=this.article.id?"/".concat(this.article.id):"";I.a[t]("".concat(p,"/articles").concat(a),this.article).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(g)},remove:function(){var e=this,t=this.article.id;I.a.delete("".concat(p,"/articles/").concat(t)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(g)},loadArticle:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=a,I.a.get("".concat(p,"/articles/").concat(e.id)).then((function(e){return t.article=e.data}))},loadCategories:function(){var e=this,t="".concat(p,"/categories");I.a.get(t).then((function(t){e.categories=t.data.map((function(e){return{value:e.id,text:e.path}}))}))},loadUsers:function(){var e=this,t="".concat(p,"/users");I.a.get(t).then((function(t){e.users=t.data.map((function(e){return{value:e.id,text:"".concat(e.name," - ").concat(e.email)}}))}))}},watch:{page:function(){this.loadArticles()}},mounted:function(){this.loadUsers(),this.loadCategories(),this.loadArticles()}},Te=Ne,De=Object(_["a"])(Te,Ee,Pe,!1,null,null,null),qe=De.exports,Ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category-admin p-3"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.category.id,expression:"category.id"}],attrs:{id:"category-id",type:"hidden"},domProps:{value:e.category.id},on:{input:function(t){t.target.composing||e.$set(e.category,"id",t.target.value)}}}),a("b-form-group",{attrs:{label:"Nome:","label-for":"category-name"}},[a("b-form-input",{attrs:{id:"category-name",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome da Categoria..."},model:{value:e.category.name,callback:function(t){e.$set(e.category,"name",t)},expression:"category.name"}})],1),a("b-form-group",{attrs:{label:"Categoria Pai:","label-for":"category-parentId"}},["save"===e.mode?a("b-form-select",{attrs:{id:"category-parentId",options:e.categories},model:{value:e.category.parentId,callback:function(t){e.$set(e.category,"parentId",t)},expression:"category.parentId"}}):a("b-form-input",{attrs:{id:"category-parentId",type:"text",readonly:""},model:{value:e.category.path,callback:function(t){e.$set(e.category,"path",t)},expression:"category.path"}})],1),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-table",{attrs:{hover:"",striped:"",items:e.categories,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){return e.loadCategory(t.item)}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-pencil"}})],1),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return e.loadCategory(t.item,"remove")}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1)]}}])})],1)},Be=[],Fe=a("5530"),Le={name:"CategoryAdmin",data:function(){return{mode:"save",category:{},categories:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"path",label:"Caminho",sortable:!0},{key:"actions",label:"Ação"}]}},methods:{loadCategories:function(){var e=this,t="".concat(p,"/categories");I.a.get(t).then((function(t){e.categories=t.data.map((function(e){return Object(Fe["a"])(Object(Fe["a"])({},e),{},{value:e.id,text:e.path})}))}))},reset:function(){this.mode="save",this.category={},this.loadCategories()},save:function(){var e=this,t=this.category.id?"put":"post",a=this.category.id?"/".concat(this.category.id):"";I.a[t]("".concat(p,"/categories").concat(a),this.category).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(g)},remove:function(){var e=this,t=this.category.id;I.a.delete("".concat(p,"/categories/").concat(t)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(g)},loadCategory:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.category=Object(Fe["a"])({},e)}},mounted:function(){this.loadCategories()}},ze=Le,Je=Object(_["a"])(ze,Ve,Be,!1,null,null,null),He=Je.exports,Re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-admin p-3"},[a("b-form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.id,expression:"user.id"}],attrs:{id:"user-id",type:"hidden"},domProps:{value:e.user.id},on:{input:function(t){t.target.composing||e.$set(e.user,"id",t.target.value)}}}),a("b-row",[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Nome:","label-for":"user-name"}},[a("b-form-input",{attrs:{id:"user-name",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Nome do Usuario..."},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"E-mail:","label-for":"user-email"}},[a("b-form-input",{attrs:{id:"user-email",type:"text",required:"",readonly:"remove"===e.mode,placeholder:"Informe o Email do Usuario..."},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1)],1),a("b-form-checkbox",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}],staticClass:"mt-3 mb-3",attrs:{id:"user-admin"},model:{value:e.user.admin,callback:function(t){e.$set(e.user,"admin",t)},expression:"user.admin"}},[e._v(" Administrador ")]),a("b-row",{directives:[{name:"show",rawName:"v-show",value:"save"===e.mode,expression:"mode === 'save'"}]},[a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Senha:","label-for":"user-password"}},[a("b-form-input",{attrs:{id:"user-password",type:"password",required:"",placeholder:"Informe a senha do Usuario..."},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)],1),a("b-col",{attrs:{md:"6",sm:"12"}},[a("b-form-group",{attrs:{label:"Confirmação de senha:","label-for":"user-confirm-password"}},[a("b-form-input",{attrs:{id:"user-confirm-password",type:"password",required:"",placeholder:"Confirme a senha do Usuario..."},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1)],1)],1),"save"===e.mode?a("b-button",{attrs:{variant:"primary"},on:{click:e.save}},[e._v("Salvar")]):e._e(),"remove"===e.mode?a("b-button",{attrs:{variant:"danger"},on:{click:e.remove}},[e._v("Excluir")]):e._e(),a("b-button",{staticClass:"ml-2",on:{click:e.reset}},[e._v("Cancelar")])],1),a("hr"),a("b-table",{attrs:{hover:"",striped:"",items:e.users,fields:e.fields},scopedSlots:e._u([{key:"cell(actions)",fn:function(t){return[a("b-button",{staticClass:"mr-2",attrs:{variant:"warning"},on:{click:function(a){return e.loadUser(t.item)}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-pencil"}})],1),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return e.loadUser(t.item,"remove")}}},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-trash"}})],1)]}}])})],1)},Ge=[],Ke={name:"UserAdmin",data:function(){return{mode:"save",user:{},users:[],fields:[{key:"id",label:"Código",sortable:!0},{key:"name",label:"Nome",sortable:!0},{key:"email",label:"E-mail",sortable:!0},{key:"admin",label:"Administrador",sortable:!0,formatter:function(e){return e?"Sim":"Não"}},{key:"actions",label:"Ação"}]}},methods:{loadUsers:function(){var e=this,t="".concat(p,"/users");I.a.get(t).then((function(t){e.users=t.data}))},reset:function(){this.mode="save",this.user={},this.loadUsers()},save:function(){var e=this,t=this.user.id?"put":"post",a=this.user.id?"/".concat(this.user.id):"";I.a[t]("".concat(p,"/users").concat(a),this.user).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(g)},remove:function(){var e=this,t=this.user.id;I.a.delete("".concat(p,"/users/").concat(t)).then((function(){e.$toasted.global.defaultSuccess(),e.reset()})).catch(g)},loadUser:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"save";this.mode=t,this.user=Object(Fe["a"])({},e)}},mounted:function(){this.loadUsers()}},Qe=Ke,We=Object(_["a"])(Qe,Re,Ge,!1,null,null,null),Xe=We.exports,Ye={name:"Adminpages",components:{PageTitle:ye,ArticleAdmin:qe,CategoryAdmin:He,UserAdmin:Xe}},Ze=Ye,et=Object(_["a"])(Ze,Ue,Ie,!1,null,null,null),tt=et.exports,at=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"articles-by-category"},[a("PageTitle",{attrs:{icon:"fa-solid fa-folder-open",main:e.category.name,sub:"Categoria"}}),a("ul",e._l(e.articles,(function(e){return a("li",{key:e.id},[a("ArticleItem",{attrs:{article:e}})],1)})),0),a("div",{staticClass:"load-more"},[e.loadMore?a("button",{staticClass:"btn btn-lg btn-outline-primary",on:{click:e.getArticles}},[e._v("Carregar Mais Artigos")]):e._e()])],1)},rt=[],ot=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"article-item"},[r("router-link",{attrs:{to:{name:"articleById",params:{id:e.article.id}}}},[r("div",{staticClass:"article-item-image d-none d-sm-block"},[e.article.imageUrl?r("img",{attrs:{src:e.article.imageUrl,height:"150",width:"150",alt:"Article"}}):r("img",{attrs:{src:a("c54c"),height:"150",width:"150",alt:"Article"}})]),r("div",{staticClass:"article-item-info"},[r("h2",[e._v(e._s(e.article.name))]),r("p",[e._v(e._s(e.article.description))]),r("span",{staticClass:"article-item-author"},[r("strong",[e._v("Autor: ")]),e._v(e._s(e.article.author)+" ")])])])],1)},nt=[],st={name:"ArticleItem",props:["article"]},it=st,ct=(a("96cc"),Object(_["a"])(it,ot,nt,!1,null,null,null)),lt=ct.exports,ut={name:"ArticlesByCategory",components:{PageTitle:ye,ArticleItem:lt},data:function(){return{category:{},articles:[],page:1,loadMore:!0}},methods:{getCategory:function(){var e=this,t="".concat(p,"/categories/").concat(this.category.id);I()(t).then((function(t){return e.category=t.data}))},getArticles:function(){var e=this,t="".concat(p,"/categories/").concat(this.category.id,"/articles?page=").concat(this.page);I()(t).then((function(t){e.articles=e.articles.concat(t.data),e.page++,0===t.data.length&&(e.loadMore=!1)}))}},watch:{$route:function(e){this.category.id=e.params.id,this.articles=[],this.page=1,this.loadMore=!0,this.getCategory(),this.getArticles()}},mounted:function(){this.category.id=this.$route.params.id,this.getCategory(),this.getArticles()}},dt=ut,mt=(a("ecf3"),Object(_["a"])(dt,at,rt,!1,null,null,null)),ft=mt.exports,pt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"article-by-id"},[a("PageTitle",{attrs:{icon:"fa-file-open",main:e.article.name,sub:e.article.description}}),a("div",{staticClass:"article-content",domProps:{innerHTML:e._s(e.article.content)}})],1)},gt=[],ht=(a("159b"),a("9729"),a("1487")),vt=a.n(ht),bt={name:"ArticleById",components:{PageTitle:ye},data:function(){return{article:{}}},mounted:function(){var e=this,t="".concat(p,"/articles/").concat(this.$route.params.id);I.a.get(t).then((function(t){return e.article=t.data}))},updated:function(){document.querySelectorAll(".article-content pre").forEach((function(e){vt.a.highlightBlock(e)}))}},yt=bt,_t=(a("e1c0"),Object(_["a"])(yt,pt,gt,!1,null,null,null)),wt=_t.exports,Ct=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-content"},[r("div",{staticClass:"auth-modal"},[r("img",{attrs:{src:a("cf05"),width:"200",alt:"logo"}}),r("hr"),r("div",{staticClass:"auth-title"},[e._v(e._s(e.showSignup?"Cadastro":"Login"))]),e.showSignup?r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],attrs:{type:"text",placeholder:"Nome"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}):e._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{name:"email",type:"text",placeholder:"E-mail"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{name:"password",type:"password",placeholder:"Senha"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.showSignup?r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirmPassword,expression:"user.confirmPassword"}],attrs:{type:"password",placeholder:"Confirme a Senha"},domProps:{value:e.user.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.user,"confirmPassword",t.target.value)}}}):e._e(),e.showSignup?r("button",{on:{click:e.signup}},[e._v("Registrar")]):r("button",{on:{click:e.signin}},[e._v("Entrar")]),r("a",{attrs:{href:""},on:{click:function(t){t.preventDefault(),e.showSignup=!e.showSignup}}},[e.showSignup?r("span",[e._v("Já tem cadastro ? Acesse o Login!")]):r("span",[e._v("Não tem cadastro? Registre-se aqui!")])])])])},kt=[],xt=(a("e9c4"),{name:"Auth",data:function(){return{showSignup:!1,user:{}}},methods:{signin:function(){var e=this;I.a.post("".concat(p,"/signin"),this.user).then((function(t){e.$store.commit("setUser",t.data),localStorage.setItem(f,JSON.stringify(t.data)),e.$router.push({path:"/"})})).catch(g)},signup:function(){var e=this;I.a.post("".concat(p,"/signup"),this.user).then((function(){e.$toasted.global.defaultSuccess(),e.user={},e.showSignup=!1})).catch(g)}}}),$t=xt,At=(a("33f5"),Object(_["a"])($t,Ct,kt,!1,null,null,null)),St=At.exports;r["default"].use(de["a"]);var Ot=[{name:"home",path:"/",component:je},{name:"adminPages",path:"/admin",component:tt,meta:{requiresAdmin:!0}},{name:"articlesByCategory",path:"/categories/:id/articles",component:ft},{name:"articleById",path:"/articles/:id",component:wt},{name:"auth",path:"/auth",component:St}],jt=new de["a"]({mode:"history",routes:Ot});jt.beforeEach((function(e,t,a){var r=localStorage.getItem(f);if(e.matched.some((function(e){return e.meta.requiresAdmin}))){var o=JSON.parse(r);o&&o.admin?a():a({path:"/"})}else a()}));var Ut=jt,It=a("be33"),Et=a("ad3d"),Pt=a("11ca");It["c"].add(Pt["m"],Pt["b"],Pt["c"],Pt["g"],Pt["a"],Pt["h"],Pt["e"],Pt["d"],Pt["l"],Pt["j"],Pt["k"],Pt["f"],Pt["i"]),r["default"].component("font-awesome-icon",Et["a"]),r["default"].config.productionTip=!1,new r["default"]({store:ue,router:Ut,render:function(e){return e(re)}}).$mount("#app")},"640b":function(e,t,a){},6416:function(e,t,a){},7493:function(e,t,a){},7804:function(e,t,a){},"8a5b":function(e,t,a){},"8bbb":function(e,t,a){"use strict";a("4ffe")},"96cc":function(e,t,a){"use strict";a("7804")},"97f3":function(e,t,a){},b5ef:function(e,t,a){"use strict";a("3833")},b6d0:function(e,t,a){},bb62:function(e,t,a){"use strict";a("8a5b")},bdb3:function(e,t,a){"use strict";a("6416")},c54c:function(e,t,a){e.exports=a.p+"img/article.ceb5521b.png"},cf05:function(e,t,a){e.exports=a.p+"img/logo.822f659d.png"},cf1c:function(e,t,a){e.exports=a.p+"img/loading.8a7630ca.gif"},cfe5:function(e,t,a){"use strict";a("24f5")},e1c0:function(e,t,a){"use strict";a("4273")},e6a8:function(e,t,a){"use strict";a("b6d0")},ecf3:function(e,t,a){"use strict";a("0839")},f29c:function(e,t,a){"use strict";a("640b")}});
//# sourceMappingURL=app.e8a1356a.js.map