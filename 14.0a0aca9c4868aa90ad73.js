(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3Ed4":function(n,t,e){"use strict";e.r(t);var o=e("CcnG"),a=function(){return function(){}}(),u=e("pMnS"),l=e("lzlj"),r=e("FVSy"),i=e("LOpI"),c=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function s(n){return o["\u0275vid"](0,[o["\u0275ncd"](null,0)],null,null)}var p=e("cTjs"),d=e("0j2b"),m=function(){function n(n,t,e,o){this.route=n,this.router=t,this.uxService=e,this.location=o,this.area="about",this.section="index"}return n.prototype.ngOnInit=function(){var n=this;this.area=this.route.snapshot.paramMap.get("area")||"about",this.section=this.route.snapshot.paramMap.get("section")||"index",this.route.params.subscribe(function(t){n.area=t.area||"about",n.section=t.section||"index",n.uxService.replaceBreadcrumb({title:n.area,routerLink:["/","docs",n.area]})}),this.setContext()},n.prototype.ngOnDestroy=function(){this.uxService.reset()},n.prototype.setContext=function(){this.uxService.setTitle("Open Age Docs"),this.uxService.resetContextMenu(),this.uxService.setBreadcrumb([{title:"Docs",routerLink:["/","docs"]},{title:this.area,routerLink:["/","docs",this.area]}]),this.uxService.setContextMenu(new p.d([]))},n}(),h=e("ZYCi"),f=e("Ip0R"),v=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function g(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,3,"mat-card",[["class","main mat-card"]],null,null,null,l.d,l.a)),o["\u0275did"](1,49152,null,0,r.a,[],null,null),(n()(),o["\u0275eld"](2,0,null,0,1,"markdown",[],null,null,null,s,c)),o["\u0275did"](3,4767744,null,0,i.a,[o.ElementRef,i.c],{src:[0,"src"]},null)],function(n,t){var e=t.component;n(t,3,0,"./assets/help/"+e.area+"/"+e.section+".md")},null)}function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"page-layout",[],null,null,null,g,v)),o["\u0275did"](1,245760,null,0,m,[h.a,h.l,d.a,f.Location],null,null)],function(n,t){n(t,1,0)},null)}var y=o["\u0275ccf"]("page-layout",m,x,{},{},[]),C=function(){return function(){}}(),b=e("Fzqc"),L=e("Wf4p"),M=e("ZYjt");e.d(t,"DocsModuleNgFactory",function(){return S});var S=o["\u0275cmf"](a,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,y]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[o.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),o["\u0275mpd"](1073742336,h.p,h.p,[[2,h.v],[2,h.l]]),o["\u0275mpd"](1073742336,C,C,[]),o["\u0275mpd"](1073742336,i.b,i.b,[]),o["\u0275mpd"](1073742336,b.a,b.a,[]),o["\u0275mpd"](1073742336,L.n,L.n,[[2,L.f],[2,M.g]]),o["\u0275mpd"](1073742336,r.c,r.c,[]),o["\u0275mpd"](1073742336,a,a,[]),o["\u0275mpd"](1024,h.j,function(){return[[{path:"",component:m},{path:":area",component:m},{path:":area/:section",component:m}]]},[])])})}}]);