webpackJsonp([2],{"nS+4":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("LMZF"),e=function(){},o=u("Un6q"),i=u("/Xs+"),s=u("+hEK"),a=u("UHIZ"),c=u("0nO6"),r=u("BLQ6"),_=function(){function l(l){this.api=l,this.searchData=[],this.datacopy=[],this.data=[]}return l.prototype.ngOnInit=function(){this.showLoader=!0,this.state="state1",this.mydata()},l.prototype.mydata=function(){var l=this;setTimeout(function(){l.mySubscription=l.api.getData("").subscribe(function(n){l.resultdata=n;for(var u=0;u<n.length;u++)u>0&&(l.data.push(n[u]),l.datacopy.push(n[u]))}),l.showLoader=!1},3e3)},l.prototype.mySearch=function(l,n){var u=l,t="";this.searchData=[];for(var e=0;e<this.resultdata.length&&(void 0!==(t="editors_choice"===n?this.resultdata[e].editors_choice:"genre"===n?this.resultdata[e].genre:"score"===n?this.resultdata[e].score:"platform"===n?this.resultdata[e].platform:this.resultdata[e].title)&&(t=t.toLowerCase(),u=u.toLowerCase(),t.search(u)>=0&&this.searchData.push(t)),!(this.searchData.length>5));e++);},l.prototype.getSortedValue=function(){for(var l=this.data,n=[],u=0;u<l.length;u++)for(var t=u;t<l.length;t++)void 0!==l[u].score&&void 0!==l[t].score&&l[t].score>l[u].score&&(n=l[u],l[u]=l[t],l[t]=n);this.data=l},l.prototype.getfiltered=function(l,n){this.data=[],this.searchData=[];var u=l,t="";if(""===u)this.data=this.datacopy;else{for(var e=0;e<this.resultdata.length;e++)void 0!==(t="editors_choice"===n?this.resultdata[e].editors_choice:"genre"===n?this.resultdata[e].genre:"score"===n?this.resultdata[e].score:"platform"===n?this.resultdata[e].platform:this.resultdata[e].title)&&(t=t.toLowerCase(),u=u.toLowerCase(),t.search(u)>=0&&(this.data.push(this.resultdata[e]),this.searchData.length<10&&!0===this.showSuggestion&&this.searchData.push(t)));this.showSuggestion=!0}},l.prototype.mydataSelect=function(l,n,u){this.showSuggestion=!1,l.value=this.searchData[u],this.searchData=[],this.getfiltered(l.value,n.value)},l.prototype.submitform=function(l){this.getfiltered(l.value.search,l.value.opt)},l.prototype.hidesuggestion=function(){this.showSuggestion=!1,this.searchData=[]},l.prototype.ngOnDestroy=function(){try{this.mySubscription.unsubscribe()}catch(l){}},l}(),p=t._1({encapsulation:0,styles:[[".details[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#000;font-size:14px}.details[_ngcontent-%COMP%]{border-top:1px solid #000;padding-top:15px;line-height:1px}.post-module[_ngcontent-%COMP%]{position:relative;z-index:1;display:block;background:#fff;min-width:250px;height:300px;box-shadow:0 1px 2px 0 rgba(0,0,0,.15);transition:all .3s linear 0s}.hover[_ngcontent-%COMP%], .post-module[_ngcontent-%COMP%]:hover{box-shadow:0 1px 35px 0 rgba(0,0,0,.3)}.post-module[_ngcontent-%COMP%]:hover   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-transform:scale(1.1);transform:scale(1.1);opacity:.6}.post-module[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{background:#000;height:200px;overflow:hidden}.post-module[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px;z-index:1;background:#e74c3c;width:55px;height:55px;padding:12.5px 0;border-radius:100%;color:#fff;font-weight:700;text-align:center;-webkti-box-sizing:border-box;box-sizing:border-box}.post-module[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{font-size:16px}.post-module[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}.post-module[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:120%;transition:all .3s linear 0s}.post-module[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]{position:absolute;bottom:0;background:#fff;width:100%;padding:10px;min-height:120px;height:auto;-webkti-box-sizing:border-box;box-sizing:border-box;transition:all .3s cubic-bezier(.37,.75,.61,1.05) 0s}.post-module[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{position:absolute;top:-40px;left:0;background:#e74c3c;padding:10px 15px;color:#fff;font-size:14px;font-weight:600;text-transform:uppercase}.post-module[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:0;padding:0 0 10px;color:#333;font-size:20px;font-weight:700}.post-module[_ngcontent-%COMP%]   .post-content[_ngcontent-%COMP%]   .post-meta[_ngcontent-%COMP%]{margin:10px 0 0;color:#999;text-align:center}.search-val[_ngcontent-%COMP%]{width:90%;z-index:20;position:absolute;background-color:#faebd7}.search-val[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{padding-left:5px}.search-val[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]:hover{color:#f52121}.seggestion[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{border-bottom:1px solid #a19292;font-size:14px}"]],data:{animation:[{type:7,name:"rightleftAnimate",definitions:[{type:0,name:"state1",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"state2",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:"state1 <=> state2",animation:{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:"translateX(0)",offset:0},offset:null},{type:6,styles:{opacity:1,transform:"translateX(-25px)",offset:.25},offset:null},{type:6,styles:{opacity:1,transform:"translateX(-45px)",offset:.5},offset:null},{type:6,styles:{opacity:1,transform:"translateX(35px)",offset:.75},offset:null},{type:6,styles:{opacity:1,transform:"translateX(0)",offset:1},offset:null}]},timings:"300ms ease-in"},options:null}],options:{}}]}});function d(l){return t._22(0,[(l()(),t._3(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["\n            "])),(l()(),t._3(2,0,null,null,2,"p",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.mydataSelect(t._15(l.parent,12),t._15(l.parent,30),l.context.index)&&e),e},null,null)),(l()(),t._20(3,null,["",""])),t._17(0,o.n,[]),(l()(),t._20(-1,null,["\n          "]))],null,function(l,n){l(n,3,0,t._21(n,3,0,t._15(n,4).transform(n.context.$implicit,0,25)))})}function g(l){return t._22(0,[(l()(),t._3(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t._20(-1,null,["\n  "])),(l()(),t._3(2,0,null,null,1,"app-loader",[],null,null,null,i.c,i.b)),t._2(3,114688,null,0,s.a,[],null,null),(l()(),t._20(-1,null,["\n"]))],function(l,n){l(n,3,0)},null)}function h(l){return t._22(0,[(l()(),t._3(0,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),t._20(1,null,["\n                    ","\n                  "]))],null,function(l,n){l(n,1,0,null==n.parent.context.$implicit?null:n.parent.context.$implicit.score)})}function f(l){return t._22(0,[(l()(),t._3(0,0,null,null,52,"div",[["class","col-xs-12 col-sm-6 col-md-6 col-xl-3"],["style","margin-top:25px;"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._3(3,0,null,null,47,"div",[["class","post-module"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n            "])),(l()(),t._3(5,0,null,null,12,"div",[["class","thumbnail"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n              "])),(l()(),t._3(7,0,null,null,7,"div",[["class","date"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n                "])),(l()(),t._3(9,0,null,null,4,"div",[["class","day"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n                  "])),(l()(),t.Y(16777216,null,null,1,null,h)),t._2(12,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n                "])),(l()(),t._20(-1,null,["\n              "])),(l()(),t._20(-1,null,["\n              "])),(l()(),t._3(16,0,null,null,0,"img",[["src","/assets/gameimages/c400x400.jpg"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n            "])),(l()(),t._20(-1,null,["\n            "])),(l()(),t._3(19,0,null,null,30,"div",[["class","post-content"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n              "])),(l()(),t._20(-1,null,["\n              "])),(l()(),t._3(22,0,null,null,1,"h1",[["class","title"]],null,null,null,null,null)),(l()(),t._20(23,null,["",""])),(l()(),t._20(-1,null,["\n              "])),(l()(),t._3(25,0,null,null,11,"div",[["class","details"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n                "])),(l()(),t._3(27,0,null,null,2,"p",[["class","platform"]],null,null,null,null,null)),(l()(),t._3(28,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-check"]],null,null,null,null,null)),(l()(),t._20(29,null,[" ",""])),(l()(),t._20(-1,null,["\n                "])),(l()(),t._3(31,0,null,null,4,"p",[["class","genre"]],null,null,null,null,null)),(l()(),t._3(32,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-check"]],null,null,null,null,null)),(l()(),t._20(33,null,[" ","\n                  "])),(l()(),t._3(34,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-check"]],null,null,null,null,null)),(l()(),t._20(35,null,[" ",""])),(l()(),t._20(-1,null,["\n              "])),(l()(),t._20(-1,null,["\n\n              "])),(l()(),t._3(38,0,null,null,10,"div",[["class","post-meta"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n                "])),(l()(),t._3(40,0,null,null,7,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t._15(l,41).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t._2(41,671744,null,0,a.l,[a.k,a.a,o.g],{routerLink:[0,"routerLink"]},null),(l()(),t._20(-1,null,["\n                  "])),(l()(),t._3(43,0,null,null,3,"button",[["class","btn btn-success button1"]],null,null,null,null,null)),(l()(),t._20(-1,null,["Play Game\n                    "])),(l()(),t._3(45,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-arrow-circle-right"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n                  "])),(l()(),t._20(-1,null,["\n                "])),(l()(),t._20(-1,null,["\n              "])),(l()(),t._20(-1,null,["\n            "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n        "]))],function(l,n){l(n,12,0,!(null!=n.context.$implicit&&n.context.$implicit.test_test)),l(n,41,0,t._6(3,"/test/",null==n.context.$implicit?null:n.context.$implicit.c_url,"/",null==n.context.$implicit?null:n.context.$implicit.s_url,"/",null==n.context.$implicit?null:n.context.$implicit.testurl,""))},function(l,n){l(n,23,0,null==n.context.$implicit?null:n.context.$implicit.title),l(n,29,0,null==n.context.$implicit?null:n.context.$implicit.platform),l(n,33,0,null==n.context.$implicit?null:n.context.$implicit.genre),l(n,35,0,null==n.context.$implicit?null:n.context.$implicit.editors_choice),l(n,40,0,t._15(n,41).target,t._15(n,41).href)})}function m(l){return t._22(0,[(l()(),t._3(0,0,null,null,81,"div",[["class","container"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n  "])),(l()(),t._3(2,0,null,null,78,"div",[["class","row"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n\n    "])),(l()(),t._3(4,0,null,null,67,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==t._15(l,6).onSubmit(u)&&e),"reset"===n&&(e=!1!==t._15(l,6).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.submitform(t._15(l,6))&&e),e},null,null)),t._2(5,16384,null,0,c.r,[],null,null),t._2(6,4210688,[["myForm",4]],0,c.k,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t._18(2048,null,c.b,null,[c.k]),t._2(8,16384,null,0,c.j,[c.b],null,null),(l()(),t._20(-1,null,["\n      "])),(l()(),t._3(10,0,null,null,16,"div",[["class","form-group col-xl-5 col-md-5 col-sm-12 col-xs-12 float-left"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n        "])),(l()(),t._3(12,0,[["search",1]],null,7,"input",[["class","form-control"],["id","search"],["name","search"],["ngModel",""],["placeholder","Enter the text to search"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t._15(l,13)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t._15(l,13).onTouched()&&e),"compositionstart"===n&&(e=!1!==t._15(l,13)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t._15(l,13)._compositionEnd(u.target.value)&&e),"keyup"===n&&(e=!1!==o.submitform(t._15(l,6))&&e),e},null,null)),t._2(13,16384,null,0,c.c,[t.B,t.k,[2,c.a]],null,null),t._2(14,16384,null,0,c.o,[],{required:[0,"required"]},null),t._18(1024,null,c.f,function(l){return[l]},[c.o]),t._18(1024,null,c.g,function(l){return[l]},[c.c]),t._2(17,671744,null,0,c.l,[[2,c.b],[2,c.f],[8,null],[2,c.g]],{name:[0,"name"],model:[1,"model"]},null),t._18(2048,null,c.h,null,[c.l]),t._2(19,16384,null,0,c.i,[c.h],null,null),(l()(),t._20(-1,null,["\n        "])),(l()(),t._3(21,0,null,null,4,"div",[["class","search-val"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n          "])),(l()(),t.Y(16777216,null,null,1,null,d)),t._2(24,802816,null,0,o.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._3(28,0,null,null,34,"div",[["class","form-group col-xl-5 col-md-5 col-sm-12 col-xs-12 float-left"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n\n        "])),(l()(),t._3(30,0,[["opt",1]],null,31,"select",[["class","form-control"],["id","opt"],["name","opt"],["ngModel",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t._15(l,31).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t._15(l,31).onTouched()&&e),e},null,null)),t._2(31,16384,null,0,c.p,[t.B,t.k],null,null),t._18(1024,null,c.g,function(l){return[l]},[c.p]),t._2(33,671744,null,0,c.l,[[2,c.b],[8,null],[8,null],[2,c.g]],{name:[0,"name"],model:[1,"model"]},null),t._18(2048,null,c.h,null,[c.l]),t._2(35,16384,null,0,c.i,[c.h],null,null),(l()(),t._20(-1,null,["\n          "])),(l()(),t._3(37,0,null,null,3,"option",[],null,null,null,null,null)),t._2(38,147456,null,0,c.m,[t.k,t.B,[2,c.p]],null,null),t._2(39,147456,null,0,c.t,[t.k,t.B,[8,null]],null,null),(l()(),t._20(-1,null,["editors_choice "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._3(42,0,null,null,3,"option",[],null,null,null,null,null)),t._2(43,147456,null,0,c.m,[t.k,t.B,[2,c.p]],null,null),t._2(44,147456,null,0,c.t,[t.k,t.B,[8,null]],null,null),(l()(),t._20(-1,null,["genre "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._3(47,0,null,null,3,"option",[],null,null,null,null,null)),t._2(48,147456,null,0,c.m,[t.k,t.B,[2,c.p]],null,null),t._2(49,147456,null,0,c.t,[t.k,t.B,[8,null]],null,null),(l()(),t._20(-1,null,["score "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._3(52,0,null,null,3,"option",[],null,null,null,null,null)),t._2(53,147456,null,0,c.m,[t.k,t.B,[2,c.p]],null,null),t._2(54,147456,null,0,c.t,[t.k,t.B,[8,null]],null,null),(l()(),t._20(-1,null,["platform "])),(l()(),t._20(-1,null,["\n          "])),(l()(),t._3(57,0,null,null,3,"option",[["selected",""]],null,null,null,null,null)),t._2(58,147456,null,0,c.m,[t.k,t.B,[2,c.p]],null,null),t._2(59,147456,null,0,c.t,[t.k,t.B,[8,null]],null,null),(l()(),t._20(-1,null,["title "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._3(64,0,null,null,6,"div",[["class","form-group col-xl-2 col-md-2 col-sm-12 col-xs-12 float-left"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n        "])),(l()(),t._3(66,0,null,null,3,"button",[["class","btn btn-outline-light"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n          "])),(l()(),t._3(68,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-search"]],null,null,null,null,null)),(l()(),t._20(-1,null,[" Search "])),(l()(),t._20(-1,null,["\n      "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t._3(73,0,null,null,6,"div",[["class","form-group col-xl-2 col-md-2 col-sm-12 col-xs-12 float-left"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n      "])),(l()(),t._3(75,0,null,null,3,"button",[["class","btn btn-outline-light"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.getSortedValue()&&t),t},null,null)),(l()(),t._20(-1,null,["\n        "])),(l()(),t._3(77,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-filter"]],null,null,null,null,null)),(l()(),t._20(-1,null,[" Filter by Score "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,null,["\n\n  "])),(l()(),t._20(-1,null,["\n"])),(l()(),t._20(-1,null,["\n\n\n"])),(l()(),t.Y(16777216,null,null,1,null,g)),t._2(84,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t._20(-1,null,["\n\n\n\n"])),(l()(),t._3(86,0,null,null,17,"div",[["class"," h-100"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.hidesuggestion()&&t),t},null,null)),(l()(),t._20(-1,null,["\n  "])),(l()(),t._3(88,0,null,null,14,"div",[["class","row h-100 justify-content-center align-items-center"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n\n    "])),(l()(),t._3(90,0,null,null,11,"div",[["class","container test-cards"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n      "])),(l()(),t._3(92,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n        "])),(l()(),t._3(94,0,null,null,2,"div",[["style","position:absolute;  height:100%; overflow:hidden;"]],null,null,null,null,null)),(l()(),t._20(-1,null,["\n          "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t._20(-1,null,["\n        "])),(l()(),t.Y(16777216,null,null,1,null,f)),t._2(99,802816,null,0,o.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t._20(-1,null,["\n\n      "])),(l()(),t._20(-1,null,["\n    "])),(l()(),t._20(-1,null,["\n\n\n\n\n  "])),(l()(),t._20(-1,null,["\n"])),(l()(),t._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,14,0,""),l(n,17,0,"search",""),l(n,24,0,u.searchData),l(n,33,0,"opt",""),l(n,84,0,u.showLoader),l(n,99,0,u.data)},function(l,n){l(n,4,0,t._15(n,8).ngClassUntouched,t._15(n,8).ngClassTouched,t._15(n,8).ngClassPristine,t._15(n,8).ngClassDirty,t._15(n,8).ngClassValid,t._15(n,8).ngClassInvalid,t._15(n,8).ngClassPending),l(n,12,0,t._15(n,14).required?"":null,t._15(n,19).ngClassUntouched,t._15(n,19).ngClassTouched,t._15(n,19).ngClassPristine,t._15(n,19).ngClassDirty,t._15(n,19).ngClassValid,t._15(n,19).ngClassInvalid,t._15(n,19).ngClassPending),l(n,30,0,t._15(n,35).ngClassUntouched,t._15(n,35).ngClassTouched,t._15(n,35).ngClassPristine,t._15(n,35).ngClassDirty,t._15(n,35).ngClassValid,t._15(n,35).ngClassInvalid,t._15(n,35).ngClassPending)})}var b=t.Z("app-dashboard",_,function(l){return t._22(0,[(l()(),t._3(0,0,null,null,1,"app-dashboard",[],null,null,null,m,p)),t._2(1,245760,null,0,_,[r.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),x=u("r/TU"),v=function(){},y=u("NLsU"),C=u("T2Au"),M=u("RL0s");u.d(n,"GameModuleNgFactory",function(){return O});var O=t._0(e,[],function(l){return t._12([t._13(512,t.j,t.W,[[8,[b,i.a,x.a]],[3,t.j],t.v]),t._13(4608,o.k,o.j,[t.s,[2,o.p]]),t._13(4608,c.s,c.s,[]),t._13(512,o.b,o.b,[]),t._13(512,a.m,a.m,[[2,a.r],[2,a.k]]),t._13(512,v,v,[]),t._13(512,c.q,c.q,[]),t._13(512,c.e,c.e,[]),t._13(512,y.a,y.a,[]),t._13(512,C.a,C.a,[]),t._13(512,e,e,[]),t._13(1024,a.i,function(){return[[{path:"",component:_},{path:"dashboard",component:_}],[{path:"l1",component:s.a},{path:"u1",component:M.a}]]},[])])})}});