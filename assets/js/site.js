var tns=function(){var t=window,Ci=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},t=window,Mi=t.cancelAnimationFrame||t.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Ti(t){for(var e,n,i,o=t||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(n in e)o!==(i=e[n])&&void 0!==i&&(o[n]=i);return o}function Ei(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Ai(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Ni(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Li(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Oi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Bi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Si(t){return("insertRule"in t?t.cssRules:t.rules).length}function Di(t,e,n){for(var i=0,o=t.length;i<o;i++)e.call(n,t[i],i)}var t="classList"in document.createElement("_"),Hi=t?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},ki=t?function(t,e){Hi(t,e)||t.classList.add(e)}:function(t,e){Hi(t,e)||(t.className+=" "+e)},Pi=t?function(t,e){Hi(t,e)&&t.classList.remove(e)}:function(t,e){Hi(t,e)&&(t.className=t.className.replace(e,""))};function Ri(t,e){return t.hasAttribute(e)}function Ii(t,e){return t.getAttribute(e)}function a(t){return void 0!==t.item}function zi(t,e){if(t=a(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Wi(t,e){t=a(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var o=n;o--;)t[i].removeAttribute(e[o])}function ji(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function qi(t,e){"none"!==t.style.display&&(t.style.display="none")}function Fi(t,e){"none"===t.style.display&&(t.style.display="")}function $i(t){return"none"!==window.getComputedStyle(t).display}function Qi(e){var n,i;"string"==typeof e&&(n=[e],i=e.charAt(0).toUpperCase()+e.substr(1),["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n);for(var t=document.createElement("fakeelement"),o=(e.length,0);o<e.length;o++){var a=e[o];if(void 0!==t.style[a])return a}return!1}function Vi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,i)}catch(t){}var r=!!e&&{passive:!0};function Gi(t,e,n){for(var i in e){var o=0<=["touchstart","touchmove"].indexOf(i)&&!n&&r;t.addEventListener(i,e[i],o)}}function Xi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&r;t.removeEventListener(n,e[n],i)}}function Yi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var Ki=function(M){M=Ti({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},M||{});var T=document,m=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},e={},n=M.useLocalStorage;if(n){var t=navigator.userAgent,o=new Date;try{(e=m.localStorage)?(e.setItem(o,o),n=e.getItem(o)==o,e.removeItem(o)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var g=e.tC?Ei(e.tC):Ai(e,"tC",function(){var t=document,e=Ni(),n=Li(e),i=t.createElement("div"),o=!1;e.appendChild(i);try{for(var a,r="(10px * 10)",u=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],s=0;s<3;s++)if(a=u[s],i.style.width=a,100===i.offsetWidth){o=a.replace(r,"");break}}catch(t){}return e.fake?Oi(e,n):i.remove(),o}(),n),y=e.tPL?Ei(e.tPL):Ai(e,"tPL",function(){var t=document,e=Ni(),n=Li(e),i=t.createElement("div"),o=t.createElement("div"),a="",t=!1;i.className="tns-t-subp2",o.className="tns-t-ct";for(var r=0;r<70;r++)a+="<div></div>";return o.innerHTML=a,i.appendChild(o),e.appendChild(i),t=Math.abs(i.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,e.fake?Oi(e,n):i.remove(),t}(),n),E=e.tMQ?Ei(e.tMQ):Ai(e,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t=document,e=Ni(),n=Li(e),i=t.createElement("div"),o=t.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",i.className="tns-mq-test",e.appendChild(o),e.appendChild(i),o.styleSheet?o.styleSheet.cssText=a:o.appendChild(t.createTextNode(a)),a=(window.getComputedStyle?window.getComputedStyle(i):i.currentStyle).position,e.fake?Oi(e,n):i.remove(),"absolute"===a}(),n),a=e.tTf?Ei(e.tTf):Ai(e,"tTf",Qi("transform"),n),r=e.t3D?Ei(e.t3D):Ai(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e=document,n=Ni(),i=Li(n),o=e.createElement("p"),e=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return e+="transform",n.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(e),n.fake?Oi(n,i):o.remove(),void 0!==e&&0<e.length&&"none"!==e}(a),n),b=e.tTDu?Ei(e.tTDu):Ai(e,"tTDu",Qi("transitionDuration"),n),u=e.tTDe?Ei(e.tTDe):Ai(e,"tTDe",Qi("transitionDelay"),n),x=e.tADu?Ei(e.tADu):Ai(e,"tADu",Qi("animationDuration"),n),s=e.tADe?Ei(e.tADe):Ai(e,"tADe",Qi("animationDelay"),n),l=e.tTE?Ei(e.tTE):Ai(e,"tTE",Vi(b,"Transition"),n),c=e.tAE?Ei(e.tAE):Ai(e,"tAE",Vi(x,"Animation"),n),f=m.console&&"function"==typeof m.console.warn,d=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],p={};if(d.forEach(function(t){var e,n;"string"==typeof M[t]&&(e=M[t],n=T.querySelector(e),p[t]=e,n&&n.nodeName?M[t]=n:f&&console.warn("Can't find",M[t]))}),!(M.container.children.length<1)){var A,N,h,L,O=M.responsive,B=M.nested,S="carousel"===M.mode;if(O){0 in O&&(M=Ti(M,O[0]),delete O[0]);var v,w={};for(v in O){var C=O[v];w[v]=C="number"==typeof C?{items:C}:C}O=w,w=null}S||!function t(e){for(var n in e)S||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(M),S||(M.axis="horizontal",M.slideBy="page",M.edgePadding=!1,A=M.animateIn,N=M.animateOut,h=M.animateDelay,L=M.animateNormal);var D,H,k="horizontal"===M.axis,P=T.createElement("div"),R=T.createElement("div"),I=M.container,z=I.parentNode,W=I.outerHTML,j=I.children,q=j.length,F=tn(),$=!1;O&&wn(),S&&(I.className+=" tns-vpfix");var Q,V,G,X,Y,K,_,J,U,Z,tt,et,nt,it,ot,at,rt,ut,st,lt,ct,ft,dt,pt,ht,vt,mt,gt,yt,bt,xt,wt,Ct,Mt,Tt,Et,At,Nt,Lt,Ot=M.autoWidth,Bt=an("fixedWidth"),St=an("edgePadding"),Dt=an("gutter"),Ht=nn(),kt=an("center"),Pt=Ot?1:Math.floor(an("items")),Rt=an("slideBy"),It=M.viewportMax||M.fixedWidthViewportWidth,zt=an("arrowKeys"),Wt=an("speed"),jt=M.rewind,qt=!jt&&M.loop,Ft=an("autoHeight"),$t=an("controls"),Qt=an("controlsText"),Vt=an("nav"),Gt=an("touch"),Xt=an("mouseDrag"),Yt=an("autoplay"),Kt=an("autoplayTimeout"),_t=an("autoplayText"),Jt=an("autoplayHoverPause"),Ut=an("autoplayResetOnVisibility"),Zt=(o=null,t=an("nonce"),n=document.createElement("style"),o&&n.setAttribute("media",o),t&&n.setAttribute("nonce",t),document.querySelector("head").appendChild(n),n.sheet||n.styleSheet),te=M.lazyload,ee=M.lazyloadSelector,ne=[],ie=qt?(X=function(){{if(Ot||Bt&&!It)return q-1;var t=Bt?"fixedWidth":"items",e=[];if((Bt||M[t]<q)&&e.push(M[t]),O)for(var n in O){n=O[n][t];n&&(Bt||n<q)&&e.push(n)}return e.length||e.push(0),Math.ceil(Bt?It/Math.min.apply(null,e):Math.max.apply(null,e))}}(),Y=S?Math.ceil((5*X-q)/2):4*X-q,Y=Math.max(X,Y),on("edgePadding")?Y+1:Y):0,oe=S?q+2*ie:q+ie,ae=!(!Bt&&!Ot||qt),re=Bt?Xn():null,ue=!S||!qt,se=k?"left":"top",le="",ce="",fe=Bt?function(){return kt&&!qt?q-1:Math.ceil(-re/(Bt+Dt))}:Ot?function(){for(var t=0;t<oe;t++)if(Q[t]>=-re)return t}:function(){return kt&&S&&!qt?q-1:qt||S?Math.max(0,oe-Math.ceil(Pt)):oe-1},de=Je(an("startIndex")),pe=de,he=(_e(),0),ve=Ot?null:fe(),me=M.preventActionWhenRunning,ge=M.swipeAngle,ye=!ge||"?",be=!1,xe=M.onInit,we=new Yi,Ce=" tns-slider tns-"+M.mode,Me=I.id||(n=window.tnsId,window.tnsId=n?n+1:1,"tns"+window.tnsId),Te=an("disable"),Ee=!1,Ae=M.freezable,Ne=!(!Ae||Ot)&&xn(),Le=!1,Oe={click:ni,keydown:function(t){t=ci(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?J.disabled||ni(t,-1):U.disabled||ni(t,1))}},Be={click:function(t){if(be){if(me)return;ti()}var e=fi(t=ci(t));for(;e!==it&&!Ri(e,"data-nav");)e=e.parentNode;{var n,i;Ri(e,"data-nav")&&(n=st=Number(Ii(e,"data-nav")),i=Bt||Ot?n*q/rt:n*Pt,ei(ze?n:Math.min(Math.ceil(i),q-1),t),lt===n&&(bt&&ui(),st=-1))}},keydown:function(t){t=ci(t);var e,n=T.activeElement;Ri(n,"data-nav")&&(e=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),n=Number(Ii(n,"data-nav")),0<=e&&(0===e?0<n&&li(at[n-1]):1===e?n<rt-1&&li(at[n+1]):ei(st=n,t)))}},Se={mouseover:function(){bt&&(oi(),xt=!0)},mouseout:function(){xt&&(ii(),xt=!1)}},De={visibilitychange:function(){T.hidden?bt&&(oi(),Ct=!0):Ct&&(ii(),Ct=!1)}},He={keydown:function(t){t=ci(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);0<=e&&ni(t,0===e?-1:1)}},ke={touchstart:vi,touchmove:mi,touchend:gi,touchcancel:gi},Pe={mousedown:vi,mousemove:mi,mouseup:gi,mouseleave:gi},Re=on("controls"),Ie=on("nav"),ze=!!Ot||M.navAsThumbnails,We=on("autoplay"),je=on("touch"),qe=on("mouseDrag"),Fe="tns-slide-active",$e="tns-slide-cloned",Qe="tns-complete",Ve={load:function(t){Bn(fi(t))},error:function(t){!function(t){ki(t,"failed"),Sn(t)}(fi(t))}},Ge="force"===M.preventScrollOnTouch;Re&&(K=M.controlsContainer,_=M.controlsContainer?M.controlsContainer.outerHTML:"",J=M.prevButton,U=M.nextButton,Z=M.prevButton?M.prevButton.outerHTML:"",tt=M.nextButton?M.nextButton.outerHTML:""),Ie&&(it=M.navContainer,ot=M.navContainer?M.navContainer.outerHTML:"",rt=Ot?q:bi(),ut=0,st=-1,lt=Ze(),ct=lt,ft="tns-nav-active",dt="Carousel Page ",pt=" (Current Slide)"),We&&(ht="forward"===M.autoplayDirection?1:-1,vt=M.autoplayButton,mt=M.autoplayButton?M.autoplayButton.outerHTML:"",gt=["<span class='tns-visually-hidden'>"," animation</span>"]),(je||qe)&&(Mt={},At=!(Tt={}),Lt=k?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y}),Ot||Ke(Te||Ne),a&&(se=a,le="translate",ce=r?(le+=k?"3d(":"3d(0px, ",k?", 0px, 0px)":", 0px)"):(le+=k?"X(":"Y(",")")),S&&(I.className=I.className.replace("tns-vpfix","")),function(){on("gutter");P.className="tns-outer",R.className="tns-inner",P.id=Me+"-ow",R.id=Me+"-iw",""===I.id&&(I.id=Me);Ce+=y||Ot?" tns-subpixel":" tns-no-subpixel",Ce+=g?" tns-calc":" tns-no-calc",Ot&&(Ce+=" tns-autowidth");Ce+=" tns-"+M.axis,I.className+=Ce,S?((D=T.createElement("div")).id=Me+"-mw",D.className="tns-ovh",P.appendChild(D),D.appendChild(R)):P.appendChild(R);Ft&&((D||R).className+=" tns-ah");if(z.insertBefore(P,I),R.appendChild(I),Di(j,function(t,e){ki(t,"tns-item"),t.id||(t.id=Me+"-item"+e),!S&&L&&ki(t,L),zi(t,{"aria-hidden":"true",tabindex:"-1"})}),ie){for(var t=T.createDocumentFragment(),e=T.createDocumentFragment(),n=ie;n--;){var i=n%q,o=j[i].cloneNode(!0);ki(o,$e),Wi(o,"id"),e.insertBefore(o,e.firstChild),S&&(i=j[q-1-i].cloneNode(!0),ki(i,$e),Wi(i,"id"),t.appendChild(i))}I.insertBefore(t,I.firstChild),I.appendChild(e),j=I.children}}(),function(){if(!S)for(var t=de,e=de+Math.min(q,Pt);t<e;t++){var n=j[t];n.style.left=100*(t-de)/Pt+"%",ki(n,A),Pi(n,L)}k&&(y||Ot?(Bi(Zt,"#"+Me+" > .tns-item","font-size:"+m.getComputedStyle(j[0]).fontSize+";",Si(Zt)),Bi(Zt,"#"+Me,"font-size:0;",Si(Zt))):S&&Di(j,function(t,e){t.style.marginLeft=(e=e,g?g+"("+100*e+"% / "+oe+")":100*e/oe+"%")}));E?(b&&(a=D&&M.autoHeight?fn(M.speed):"",Bi(Zt,"#"+Me+"-mw",a,Si(Zt))),a=rn(M.edgePadding,M.gutter,M.fixedWidth,M.speed,M.autoHeight),Bi(Zt,"#"+Me+"-iw",a,Si(Zt)),S&&(a=k&&!Ot?"width:"+un(M.fixedWidth,M.gutter,M.items)+";":"",b&&(a+=fn(Wt)),Bi(Zt,"#"+Me,a,Si(Zt))),a=k&&!Ot?sn(M.fixedWidth,M.gutter,M.items):"",M.gutter&&(a+=ln(M.gutter)),S||(b&&(a+=fn(Wt)),x&&(a+=dn(Wt)))):(S&&Ft&&(D.style[b]=Wt/1e3+"s"),R.style.cssText=rn(St,Dt,Bt,Ft),S&&k&&!Ot&&(I.style.width=un(Bt,Dt,Pt)),a=k&&!Ot?sn(Bt,Dt,Pt):"",Dt&&(a+=ln(Dt))),a&&Bi(Zt,"#"+Me+" > .tns-item",a,Si(Zt));if(O&&E)for(var i in O){i=parseInt(i);var o=O[i],a="",r="",u="",s="",l="",c=Ot?null:an("items",i),f=an("fixedWidth",i),d=an("speed",i),p=an("edgePadding",i),h=an("autoHeight",i),v=an("gutter",i);b&&D&&an("autoHeight",i)&&"speed"in o&&(r="#"+Me+"-mw{"+fn(d)+"}"),("edgePadding"in o||"gutter"in o)&&(u="#"+Me+"-iw{"+rn(p,v,f,d,h)+"}"),S&&k&&!Ot&&("fixedWidth"in o||"items"in o||Bt&&"gutter"in o)&&(s="width:"+un(f,v,c)+";"),b&&"speed"in o&&(s+=fn(d)),s=s&&"#"+Me+"{"+s+"}",("fixedWidth"in o||Bt&&"gutter"in o||!S&&"items"in o)&&(l+=sn(f,v,c)),"gutter"in o&&(l+=ln(v)),!S&&"speed"in o&&(b&&(l+=fn(d)),x&&(l+=dn(d))),(a=r+u+s+(l=l&&"#"+Me+" > .tns-item{"+l+"}"))&&Zt.insertRule("@media (min-width: "+i/16+"em) {"+a+"}",Zt.cssRules.length)}}(),pn();var Xe=qt?S?function(){var t=he,e=ve;t+=Rt,e-=Rt,St?(t+=1,--e):Bt&&(Ht+Dt)%(Bt+Dt)&&--e,ie&&(e<de?de-=q:de<t&&(de+=q))}:function(){if(ve<de)for(;he+q<=de;)de-=q;else if(de<he)for(;de<=ve-q;)de+=q}:function(){de=Math.max(he,Math.min(ve,de))},Ye=S?function(){var e,n,i,o,t,a,r,u,s,l,c;Vn(I,""),b||!Wt?(_n(),Wt&&$i(I)||ti()):(e=I,n=se,i=le,o=ce,t=Yn(),a=Wt,r=ti,u=Math.min(a,10),s=0<=t.indexOf("%")?"%":"px",t=t.replace(s,""),l=Number(e.style[n].replace(i,"").replace(o,"").replace(s,"")),c=(t-l)/a*u,setTimeout(function t(){a-=u;l+=c;e.style[n]=i+l+s+o;0<a?setTimeout(t,u):r()},u)),k||yi()}:function(){ne=[];var t={};t[l]=t[c]=ti,Xi(j[pe],t),Gi(j[de],t),Jn(pe,A,N,!0),Jn(de,L,A),l&&c&&Wt&&$i(I)||ti()};return{version:"2.9.3",getInfo:wi,events:we,goTo:ei,play:function(){Yt&&!bt&&(ri(),wt=!1)},pause:function(){bt&&(ui(),wt=!0)},isOn:$,updateSliderHeight:In,refresh:pn,destroy:function(){var t;Zt.disabled=!0,Zt.ownerNode&&Zt.ownerNode.remove(),Xi(m,{resize:yn}),zt&&Xi(T,He),K&&Xi(K,Oe),it&&Xi(it,Be),Xi(I,Se),Xi(I,De),vt&&Xi(vt,{click:si}),Yt&&clearInterval(yt),S&&l&&((t={})[l]=ti,Xi(I,t)),Gt&&Xi(I,ke),Xt&&Xi(I,Pe);var e,a=[W,_,Z,tt,ot,mt];for(e in d.forEach(function(t,e){var n,i,o="container"===t?P:M[t];"object"==typeof o&&o&&(n=o.previousElementSibling||!1,i=o.parentNode,o.outerHTML=a[e],M[t]=n?n.nextElementSibling:i.firstElementChild)}),d=A=N=h=L=k=P=R=I=z=W=j=q=H=F=Ot=Bt=St=Dt=Ht=Pt=Rt=It=zt=Wt=jt=qt=Ft=Zt=te=Q=ne=ie=oe=ae=re=ue=se=le=ce=fe=de=pe=he=ve=ge=ye=be=xe=we=Ce=Me=Te=Ee=Ae=Ne=Le=Oe=Be=Se=De=He=ke=Pe=Re=Ie=ze=We=qe=Fe=Qe=Ve=V=$t=Qt=K=_=J=U=et=nt=Vt=it=ot=at=rt=ut=st=lt=ct=ft=dt=pt=Yt=Kt=ht=_t=Jt=vt=mt=Ut=gt=yt=bt=xt=wt=Ct=Mt=Tt=Et=At=Nt=Lt=Gt=Xt=null,this)"rebuild"!==e&&(this[e]=null);$=!1},rebuild:function(){return Ki(Ti(M,p))}}}function Ke(t){t&&($t=Vt=Gt=Xt=zt=Yt=Jt=Ut=!1)}function _e(){for(var t=S?de-ie:de;t<0;)t+=q;return t%q+1}function Je(t){return t=t?Math.max(0,Math.min(qt?q-1:q-Pt,t)):0,S?t+ie:t}function Ue(t){for(null==t&&(t=de),S&&(t-=ie);t<0;)t+=q;return Math.floor(t%q)}function Ze(){var t=Ue(),t=ze?t:Bt||Ot?Math.ceil((t+1)*rt/q-1):Math.floor(t/Pt);return t=!qt&&S&&de===ve?rt-1:t}function tn(){return m.innerWidth||T.documentElement.clientWidth||T.body.clientWidth}function en(t){return"top"===t?"afterbegin":"beforeend"}function nn(){var t=St?2*St-Dt:0;return function t(e){if(null!=e){var n,i=T.createElement("div");return e.appendChild(i),n=(n=i.getBoundingClientRect()).right-n.left,i.remove(),n||t(e.parentNode)}}(z)-t}function on(t){if(M[t])return!0;if(O)for(var e in O)if(O[e][t])return!0;return!1}function an(t,e){if(null==e&&(e=F),"items"===t&&Bt)return Math.floor((Ht+Dt)/(Bt+Dt))||1;var n=M[t];if(O)for(var i in O)e>=parseInt(i)&&t in O[i]&&(n=O[i][t]);return"slideBy"===t&&"page"===n&&(n=an("items")),n=!(S||"slideBy"!==t&&"items"!==t)?Math.floor(n):n}function rn(t,e,n,i,o){var a,r="";return void 0!==t?(a=t,e&&(a-=e),r=k?"margin: 0 "+a+"px 0 "+t+"px;":"margin: "+t+"px 0 "+a+"px 0;"):e&&!n&&(e="-"+e+"px",r="margin: 0 "+(k?e+" 0 0":"0 "+e+" 0")+";"),!S&&o&&b&&i&&(r+=fn(i)),r}function un(t,e,n){return t?(t+e)*oe+"px":g?g+"("+100*oe+"% / "+n+")":100*oe/n+"%"}function sn(t,e,n){var i;return i="width:"+(i=t?t+e+"px":(S||(n=Math.floor(n)),i=S?oe:n,g?g+"(100% / "+i+")":100/i+"%")),"inner"!==B?i+";":i+" !important;"}function ln(t){return!1!==t?(k?"padding-":"margin-")+(k?"right":"bottom")+": "+t+"px;":""}function cn(t,e){e=t.substring(0,t.length-e).toLowerCase();return e=e&&"-"+e+"-"}function fn(t){return cn(b,18)+"transition-duration:"+t/1e3+"s;"}function dn(t){return cn(x,17)+"animation-duration:"+t/1e3+"s;"}function pn(){var t;on("autoHeight")||Ot||!k?(Di(t=I.querySelectorAll("img"),function(t){var e=t.src;te||(e&&e.indexOf("data:image")<0?(t.src="",Gi(t,Ve),ki(t,"loading"),t.src=e):Bn(t))}),Ci(function(){kn(ji(t),function(){V=!0})}),on("autoHeight")&&(t=Dn(de,Math.min(de+Pt-1,oe-1))),te?hn():Ci(function(){kn(ji(t),hn)})):(S&&Kn(),mn(),gn())}function hn(){var i;Ot&&1<q?(i=qt?de:q-1,function t(){var e=j[i].getBoundingClientRect().left,n=j[i-1].getBoundingClientRect().right;Math.abs(e-n)<=1?vn():setTimeout(function(){t()},16)}()):vn()}function vn(){k&&!Ot||(zn(),Ot?(re=Xn(),Ae&&(Ne=xn()),ve=fe(),Ke(Te||Ne)):yi()),S&&Kn(),mn(),gn()}function mn(){if(Wn(),P.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+Nn()+"</span>  of "+q+"</div>"),G=P.querySelector(".tns-liveregion .current"),We&&(e=Yt?"stop":"start",vt?zi(vt,{"data-action":e}):M.autoplayButtonOutput&&(P.insertAdjacentHTML(en(M.autoplayPosition),'<button type="button" data-action="'+e+'">'+gt[0]+e+gt[1]+_t[0]+"</button>"),vt=P.querySelector("[data-action]")),vt&&Gi(vt,{click:si}),Yt&&(ri(),Jt&&Gi(I,Se),Ut&&Gi(I,De))),Ie){var t,e;if(it)zi(it,{"aria-label":"Carousel Pagination"}),Di(at=it.children,function(t,e){zi(t,{"data-nav":e,tabindex:"-1","aria-label":dt+(e+1),"aria-controls":Me})});else{for(var n="",i=ze?"":'style="display:none"',o=0;o<q;o++)n+='<button type="button" data-nav="'+o+'" tabindex="-1" aria-controls="'+Me+'" '+i+' aria-label="'+dt+(o+1)+'"></button>';P.insertAdjacentHTML(en(M.navPosition),n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>"),it=P.querySelector(".tns-nav"),at=it.children}xi(),b&&(t=b.substring(0,b.length-18).toLowerCase(),e="transition: all "+Wt/1e3+"s",Bi(Zt,"[aria-controls^="+Me+"-item]",e=t?"-"+t+"-"+e:e,Si(Zt))),zi(at[lt],{"aria-label":dt+(lt+1)+pt}),Wi(at[lt],"tabindex"),ki(at[lt],ft),Gi(it,Be)}Re&&(K||J&&U||(P.insertAdjacentHTML(en(M.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Me+'">'+Qt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Me+'">'+Qt[1]+"</button></div>"),K=P.querySelector(".tns-controls")),J&&U||(J=K.children[0],U=K.children[1]),M.controlsContainer&&zi(K,{"aria-label":"Carousel Navigation",tabindex:"0"}),(M.controlsContainer||M.prevButton&&M.nextButton)&&zi([J,U],{"aria-controls":Me,tabindex:"-1"}),(M.controlsContainer||M.prevButton&&M.nextButton)&&(zi(J,{"data-controls":"prev"}),zi(U,{"data-controls":"next"})),et=qn(J),nt=qn(U),Qn(),K?Gi(K,Oe):(Gi(J,Oe),Gi(U,Oe))),Cn()}function gn(){var t;S&&l&&((t={})[l]=ti,Gi(I,t)),Gt&&Gi(I,ke,M.preventScrollOnTouch),Xt&&Gi(I,Pe),zt&&Gi(T,He),"inner"===B?we.on("outerResized",function(){bn(),we.emit("innerLoaded",wi())}):(O||Bt||Ot||Ft||!k)&&Gi(m,{resize:yn}),Ft&&("outer"===B?we.on("innerLoaded",Hn):Te||Hn()),On(),Te?En():Ne&&Tn(),we.on("indexChanged",Pn),"inner"===B&&we.emit("innerLoaded",wi()),"function"==typeof xe&&xe(wi()),$=!0}function yn(t){Ci(function(){bn(ci(t))})}function bn(t){var e,n,i,o,a,r,u,s,l,c,f,d,p,h,v,m,g,y,b,x,w,C;$&&("outer"===B&&we.emit("outerResized",wi(t)),F=tn(),h=H,n=!1,O&&(wn(),(e=h!==H)&&we.emit("newBreakpointStart",wi(t))),i=Pt,o=Te,a=Ne,r=zt,u=$t,s=Vt,l=Gt,c=Xt,f=Yt,d=Jt,p=Ut,h=de,e&&(v=Bt,g=Ft,b=Qt,y=kt,m=_t,E||(C=Dt,w=St)),zt=an("arrowKeys"),$t=an("controls"),Vt=an("nav"),Gt=an("touch"),kt=an("center"),Xt=an("mouseDrag"),Yt=an("autoplay"),Jt=an("autoplayHoverPause"),Ut=an("autoplayResetOnVisibility"),e&&(Te=an("disable"),Bt=an("fixedWidth"),Wt=an("speed"),Ft=an("autoHeight"),Qt=an("controlsText"),_t=an("autoplayText"),Kt=an("autoplayTimeout"),E||(St=an("edgePadding"),Dt=an("gutter"))),Ke(Te),Ht=nn(),k&&!Ot||Te||(zn(),k||(yi(),n=!0)),(Bt||Ot)&&(re=Xn(),ve=fe()),(e||Bt)&&(Pt=an("items"),Rt=an("slideBy"),(x=Pt!==i)&&(Bt||Ot||(ve=fe()),Xe())),e&&Te!==o&&(Te?En:function(){if(Ee){if(Zt.disabled=!1,I.className+=Ce,Kn(),qt)for(var t=ie;t--;)S&&Fi(j[t]),Fi(j[oe-t-1]);if(!S)for(var e=de,n=de+q;e<n;e++){var i=j[e],o=e<de+Pt?A:L;i.style.left=100*(e-de)/Pt+"%",ki(i,o)}Mn(),Ee=!1}})(),Ae&&(e||Bt||Ot)&&(Ne=xn())!==a&&(Ne?(_n(Yn(Je(0))),Tn()):(function(){if(Le){if(St&&E&&(R.style.margin=""),ie)for(var t="tns-transparent",e=ie;e--;)S&&Pi(j[e],t),Pi(j[oe-e-1],t);Mn(),Le=!1}}(),n=!0)),Ke(Te||Ne),Yt||(Jt=Ut=!1),zt!==r&&(zt?Gi:Xi)(T,He),$t!==u&&($t?K?Fi(K):(J&&Fi(J),U&&Fi(U)):K?qi(K):(J&&qi(J),U&&qi(U))),Vt!==s&&(Vt?(Fi(it),xi()):qi(it)),Gt!==l&&(Gt?Gi(I,ke,M.preventScrollOnTouch):Xi(I,ke)),Xt!==c&&(Xt?Gi:Xi)(I,Pe),Yt!==f&&(Yt?(vt&&Fi(vt),bt||wt||ri()):(vt&&qi(vt),bt&&ui())),Jt!==d&&(Jt?Gi:Xi)(I,Se),Ut!==p&&(Ut?Gi:Xi)(T,De),e?(Bt===v&&kt===y||(n=!0),Ft!==g&&(Ft||(R.style.height="")),$t&&Qt!==b&&(J.innerHTML=Qt[0],U.innerHTML=Qt[1]),vt&&_t!==m&&(b=(y=vt.innerHTML).length-m[g=Yt?1:0].length,y.substring(b)===m[g]&&(vt.innerHTML=y.substring(0,b)+_t[g]))):kt&&(Bt||Ot)&&(n=!0),(x||Bt&&!Ot)&&(rt=bi(),xi()),(h=de!==h)?(we.emit("indexChanged",wi()),n=!0):x?h||Pn():(Bt||Ot)&&(On(),Wn(),An()),x&&!S&&function(){for(var t=de+Math.min(q,Pt),e=oe;e--;){var n=j[e];de<=e&&e<t?(ki(n,"tns-moving"),n.style.left=100*(e-de)/Pt+"%",ki(n,A),Pi(n,L)):n.style.left&&(n.style.left="",ki(n,L),Pi(n,A)),Pi(n,N)}setTimeout(function(){Di(j,function(t){Pi(t,"tns-moving")})},300)}(),Te||Ne||(e&&!E&&(St===w&&Dt===C||(R.style.cssText=rn(St,Dt,Bt,Wt,Ft)),k&&(S&&(I.style.width=un(Bt,Dt,Pt)),x=sn(Bt,Dt,Pt)+ln(Dt),C=Si(w=Zt)-1,"deleteRule"in w?w.deleteRule(C):w.removeRule(C),Bi(Zt,"#"+Me+" > .tns-item",x,Si(Zt)))),Ft&&Hn(),n&&(Kn(),pe=de)),e&&we.emit("newBreakpointEnd",wi(t)))}function xn(){if(!Bt&&!Ot)return q<=(kt?Pt-(Pt-1)/2:Pt);var t=Bt?(Bt+Dt)*q:Q[q],e=St?Ht+2*St:Ht+Dt;return kt&&(e-=Bt?(Ht-Bt)/2:(Ht-(Q[de+1]-Q[de]-Dt))/2),t<=e}function wn(){for(var t in H=0,O)(t=parseInt(t))<=F&&(H=t)}function Cn(){!Yt&&vt&&qi(vt),!Vt&&it&&qi(it),$t||(K?qi(K):(J&&qi(J),U&&qi(U)))}function Mn(){Yt&&vt&&Fi(vt),Vt&&it&&Fi(it),$t&&(K?Fi(K):(J&&Fi(J),U&&Fi(U)))}function Tn(){if(!Le){if(St&&(R.style.margin="0px"),ie)for(var t="tns-transparent",e=ie;e--;)S&&ki(j[e],t),ki(j[oe-e-1],t);Cn(),Le=!0}}function En(){if(!Ee){if(Zt.disabled=!0,I.className=I.className.replace(Ce.substring(1),""),Wi(I,["style"]),qt)for(var t=ie;t--;)S&&qi(j[t]),qi(j[oe-t-1]);if(k&&S||Wi(R,["style"]),!S)for(var e=de,n=de+q;e<n;e++){var i=j[e];Wi(i,["style"]),Pi(i,A),Pi(i,L)}Cn(),Ee=!0}}function An(){var t=Nn();G.innerHTML!==t&&(G.innerHTML=t)}function Nn(){var t=Ln(),e=t[0]+1,t=t[1]+1;return e===t?e+"":e+" to "+t}function Ln(t){null==t&&(t=Yn());var n,i,o,e,a=de;return kt||St?(Ot||Bt)&&(n=-(parseFloat(t)+St),i=n+Ht+2*St):Ot&&(n=Q[de],i=n+Ht),Ot?Q.forEach(function(t,e){e<oe&&((kt||St)&&t<=n+.5&&(a=e),.5<=i-t&&(o=e))}):(o=Bt?(e=Bt+Dt,kt||St?(a=Math.floor(n/e),Math.ceil(i/e-1)):a+Math.ceil(Ht/e)-1):kt||St?(e=Pt-1,o=kt?(a-=e/2,de+e/2):de+e,St&&(a-=e=St*Pt/Ht,o+=e),a=Math.floor(a),Math.ceil(o)):a+Pt-1,a=Math.max(a,0),o=Math.min(o,oe-1)),[a,o]}function On(){var t;te&&!Te&&((t=Ln()).push(ee),Dn.apply(null,t).forEach(function(t){var e;Hi(t,Qe)||((e={})[l]=function(t){t.stopPropagation()},Gi(t,e),Gi(t,Ve),t.src=Ii(t,"data-src"),(e=Ii(t,"data-srcset"))&&(t.srcset=e),ki(t,"loading"))}))}function Bn(t){ki(t,"loaded"),Sn(t)}function Sn(t){ki(t,Qe),Pi(t,"loading"),Xi(t,Ve)}function Dn(t,e,n){var i=[];for(n=n||"img";t<=e;)Di(j[t].querySelectorAll(n),function(t){i.push(t)}),t++;return i}function Hn(){var t=Dn.apply(null,Ln());Ci(function(){kn(t,In)})}function kn(n,t){return V?t():(n.forEach(function(t,e){!te&&t.complete&&Sn(t),Hi(t,Qe)&&n.splice(e,1)}),n.length?void Ci(function(){kn(n,t)}):t())}function Pn(){On(),Wn(),An(),Qn(),function(){{var t,e;Vt&&(lt=0<=st?st:Ze(),st=-1,lt!==ct&&(t=at[ct],e=at[lt],zi(t,{tabindex:"-1","aria-label":dt+(ct+1)}),Pi(t,ft),zi(e,{"aria-label":dt+(lt+1)+pt}),Wi(e,"tabindex"),ki(e,ft),ct=lt))}}()}function Rn(t,e){for(var n=[],i=t,o=Math.min(t+e,oe);i<o;i++)n.push(j[i].offsetHeight);return Math.max.apply(null,n)}function In(){var t=Ft?Rn(de,Pt):Rn(ie,q),e=D||R;e.style.height!==t&&(e.style.height=t+"px")}function zn(){Q=[0];var n=k?"left":"top",i=k?"right":"bottom",o=j[0].getBoundingClientRect()[n];Di(j,function(t,e){e&&Q.push(t.getBoundingClientRect()[n]-o),e===oe-1&&Q.push(t.getBoundingClientRect()[i]-o)})}function Wn(){var t=Ln(),n=t[0],i=t[1];Di(j,function(t,e){n<=e&&e<=i?Ri(t,"aria-hidden")&&(Wi(t,["aria-hidden","tabindex"]),ki(t,Fe)):Ri(t,"aria-hidden")||(zi(t,{"aria-hidden":"true",tabindex:"-1"}),Pi(t,Fe))})}function jn(t){return t.nodeName.toLowerCase()}function qn(t){return"button"===jn(t)}function Fn(t){return"true"===t.getAttribute("aria-disabled")}function $n(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Qn(){var t,e,n,i;!$t||jt||qt||(t=et?J.disabled:Fn(J),e=nt?U.disabled:Fn(U),i=!jt&&ve<=de,(n=de<=he)&&!t&&$n(et,J,!0),!n&&t&&$n(et,J,!1),i&&!e&&$n(nt,U,!0),!i&&e&&$n(nt,U,!1))}function Vn(t,e){b&&(t.style[b]=e)}function Gn(t){return null==t&&(t=de),Ot?(Ht-(St?Dt:0)-(Q[t+1]-Q[t]-Dt))/2:Bt?(Ht-Bt)/2:(Pt-1)/2}function Xn(){var t=Ht+(St?Dt:0)-(Bt?(Bt+Dt)*oe:Q[oe]);return t=0<(t=kt&&!qt?Bt?-(Bt+Dt)*(oe-1)-Gn():Gn(oe-1)-Q[oe-1]:t)?0:t}function Yn(t){var e;return null==t&&(t=de),k&&!Ot?Bt?(e=-(Bt+Dt)*t,kt&&(e+=Gn())):(kt&&(t-=Gn()),e=100*-t/(a?oe:Pt)):(e=-Q[t],kt&&Ot&&(e+=Gn())),ae&&(e=Math.max(e,re)),e+=!k||Ot||Bt?"px":"%"}function Kn(t){Vn(I,"0s"),_n(t)}function _n(t){null==t&&(t=Yn()),I.style[se]=le+t+ce}function Jn(t,e,n,i){var o=t+Pt;qt||(o=Math.min(o,oe));for(var a=t;a<o;a++){var r=j[a];i||(r.style.left=100*(a-de)/Pt+"%"),h&&u&&(r.style[u]=r.style[s]=h*(a-t)/1e3+"s"),Pi(r,e),ki(r,n),i&&ne.push(r)}}function Un(t,e){ue&&Xe(),de===pe&&!e||(we.emit("indexChanged",wi()),we.emit("transitionStart",wi()),Ft&&Hn(),bt&&t&&0<=["click","keydown"].indexOf(t.type)&&ui(),be=!0,Ye())}function Zn(t){return t.toLowerCase().replace(/-/g,"")}function ti(t){if(S||be){if(we.emit("transitionEnd",wi(t)),!S&&0<ne.length)for(var e=0;e<ne.length;e++){var n=ne[e];n.style.left="",s&&u&&(n.style[s]="",n.style[u]=""),Pi(n,N),ki(n,L)}(!t||!S&&t.target.parentNode===I||t.target===I&&Zn(t.propertyName)===Zn(se))&&(ue||(t=de,Xe(),de!==t&&(we.emit("indexChanged",wi()),Kn())),"inner"===B&&we.emit("innerLoaded",wi()),be=!1,pe=de)}}function ei(t,e){if(!Ne)if("prev"===t)ni(e,-1);else if("next"===t)ni(e,1);else{if(be){if(me)return;ti()}var n=Ue(),i=0;"first"===t?i=-n:"last"===t?i=S?q-Pt-n:q-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(i=(t=!e?Math.max(0,Math.min(q-1,t)):t)-n)),!S&&i&&Math.abs(i)<Pt&&(n=0<i?1:-1,i+=he<=de+i-q?q*n:2*q*n*-1),de+=i,S&&qt&&(de<he&&(de+=q),ve<de&&(de-=q)),Ue(de)!==Ue(pe)&&Un(e)}}function ni(t,e){if(be){if(me)return;ti()}var n;if(!e){for(var i=fi(t=ci(t));i!==K&&[J,U].indexOf(i)<0;)i=i.parentNode;var o=[J,U].indexOf(i);0<=o&&(n=!0,e=0===o?-1:1)}if(jt){if(de===he&&-1===e)return void ei("last",t);if(de===ve&&1===e)return void ei("first",t)}e&&(de+=Rt*e,Ot&&(de=Math.floor(de)),Un(n||t&&"keydown"===t.type?t:null))}function ii(){yt=setInterval(function(){ni(null,ht)},Kt),bt=!0}function oi(){clearInterval(yt),bt=!1}function ai(t,e){zi(vt,{"data-action":t}),vt.innerHTML=gt[0]+t+gt[1]+e}function ri(){ii(),vt&&ai("stop",_t[1])}function ui(){oi(),vt&&ai("start",_t[0])}function si(){wt=bt?(ui(),!0):(ri(),!1)}function li(t){t.focus()}function ci(t){return di(t=t||m.event)?t.changedTouches[0]:t}function fi(t){return t.target||m.event.srcElement}function di(t){return 0<=t.type.indexOf("touch")}function pi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function hi(){return e=Tt.y-Mt.y,n=Tt.x-Mt.x,t=Math.atan2(e,n)*(180/Math.PI),e=ge,n=!1,t=Math.abs(90-Math.abs(t)),90-e<=t?n="horizontal":t<=e&&(n="vertical"),n===M.axis;var t,e,n}function vi(t){if(be){if(me)return;ti()}Yt&&bt&&oi(),At=!0,Nt&&(Mi(Nt),Nt=null);var e=ci(t);we.emit(di(t)?"touchStart":"dragStart",wi(t)),!di(t)&&0<=["img","a"].indexOf(jn(fi(t)))&&pi(t),Tt.x=Mt.x=e.clientX,Tt.y=Mt.y=e.clientY,S&&(Et=parseFloat(I.style[se].replace(le,"")),Vn(I,"0s"))}function mi(t){var e;At&&(e=ci(t),Tt.x=e.clientX,Tt.y=e.clientY,S?Nt=Nt||Ci(function(){!function t(e){if(!ye)return void(At=!1);Mi(Nt);At&&(Nt=Ci(function(){t(e)}));"?"===ye&&(ye=hi());if(ye){!Ge&&di(e)&&(Ge=!0);try{e.type&&we.emit(di(e)?"touchMove":"dragMove",wi(e))}catch(t){}var n=Et,i=Lt(Tt,Mt);!k||Bt||Ot?(n+=i,n+="px"):(n+=a?i*Pt*100/((Ht+Dt)*oe):100*i/(Ht+Dt),n+="%"),I.style[se]=le+n+ce}}(t)}):(ye="?"===ye?hi():ye)&&(Ge=!0),("boolean"!=typeof t.cancelable||t.cancelable)&&Ge&&t.preventDefault())}function gi(i){var t,o,n;At&&(Nt&&(Mi(Nt),Nt=null),S&&Vn(I,""),At=!1,t=ci(i),Tt.x=t.clientX,Tt.y=t.clientY,o=Lt(Tt,Mt),Math.abs(o)&&(di(i)||Gi(n=fi(i),{click:function t(e){pi(e),Xi(n,{click:t})}}),S?Nt=Ci(function(){if(k&&!Ot){var t=-o*Pt/(Ht+Dt),t=0<o?Math.floor(t):Math.ceil(t);de+=t}else{var e=-(Et+o);if(e<=0)de=he;else if(e>=Q[oe-1])de=ve;else for(var n=0;n<oe&&e>=Q[n];)e>Q[de=n]&&o<0&&(de+=1),n++}Un(i,o),we.emit(di(i)?"touchEnd":"dragEnd",wi(i))}):ye&&ni(i,0<o?-1:1))),"auto"===M.preventScrollOnTouch&&(Ge=!1),ge&&(ye="?"),Yt&&!bt&&ii()}function yi(){(D||R).style.height=Q[de+Pt]-Q[de]+"px"}function bi(){return Math.min(Math.ceil(Bt?(Bt+Dt)*q/Ht:q/Pt),q)}function xi(){if(Vt&&!ze&&rt!==ut){var t=ut,e=rt,n=Fi;for(rt<ut&&(t=rt,e=ut,n=qi);t<e;)n(at[t]),t++;ut=rt}}function wi(t){return{container:I,slideItems:j,navContainer:it,navItems:at,controlsContainer:K,hasControls:Re,prevButton:J,nextButton:U,items:Pt,slideBy:Rt,cloneCount:ie,slideCount:q,slideCountNew:oe,index:de,indexCached:pe,displayIndex:_e(),navCurrentIndex:lt,navCurrentIndexCached:ct,pages:rt,pagesCached:ut,sheet:Zt,isOn:$,event:t||{}}}f&&console.warn("No slides found in",M.container)};return Ki}();!function(i){var e,o,t;function n(){var t=i(window).scrollTop();if(i("body > main").hasClass("parent-page")){for(var e="",n=1;n<$sectionOffsets.length&&(e+=n+" / ",!(t<=$sectionOffsets[n].sectPos));n++);e+="<br>"+t+" / "+n+"<br>";for(n=0;n<$sectionOffsets.length;n++)e+=$sectionOffsets[n].sectPos+" / ";i("#feedback").html(e)}}function a(){i("body > main").hasClass("parent-page")&&($sectionOffsets=[],i(".page").each(function(){var t=i(this).offset().top-o,e=i(this).prop("id"),n=i(this).data("url");$sectionOffsets.push({sectPos:t,id:e,url:n})}),console.log($sectionOffsets))}i(".main-header__toggle").on("click",function(t){t.preventDefault(),i(this).parent().toggleClass("open")}),i("body > main").hasClass("parent-page")&&(e=i("#page-"+i("body").data("page-name")),o=i(".main-header").height(),t=e.offset().top-o,window.scrollTo(0,t),a(),i(window).load(function(){a(),n();var t=e.offset().top-o;window.scrollTo(0,t)})),i(window).scroll(function(){n()}),i(window).resize(function(){a()})}(jQuery),function(e){e(".natoli-slider").each(function(){e(this).prop("id");var t=e(this).data("options");tns(t)})}(jQuery);