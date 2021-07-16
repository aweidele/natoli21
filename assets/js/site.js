var tns=function(){var t=window,Ci=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},t=window,Mi=t.cancelAnimationFrame||t.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Ti(t){for(var e,n,i,o=t||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(n in e)o!==(i=e[n])&&void 0!==i&&(o[n]=i);return o}function Ei(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Ai(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Ni(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Li(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function ki(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function Oi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Bi(t){return("insertRule"in t?t.cssRules:t.rules).length}function Si(t,e,n){for(var i=0,o=t.length;i<o;i++)e.call(n,t[i],i)}var t="classList"in document.createElement("_"),Di=t?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Hi=t?function(t,e){Di(t,e)||t.classList.add(e)}:function(t,e){Di(t,e)||(t.className+=" "+e)},Pi=t?function(t,e){Di(t,e)&&t.classList.remove(e)}:function(t,e){Di(t,e)&&(t.className=t.className.replace(e,""))};function Ri(t,e){return t.hasAttribute(e)}function Ii(t,e){return t.getAttribute(e)}function a(t){return void 0!==t.item}function ji(t,e){if(t=a(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function zi(t,e){t=a(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var o=n;o--;)t[i].removeAttribute(e[o])}function Wi(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function _i(t,e){"none"!==t.style.display&&(t.style.display="none")}function qi(t,e){"none"===t.style.display&&(t.style.display="")}function Fi(t){return"none"!==window.getComputedStyle(t).display}function Qi(e){var n,i;"string"==typeof e&&(n=[e],i=e.charAt(0).toUpperCase()+e.substr(1),["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n);for(var t=document.createElement("fakeelement"),o=(e.length,0);o<e.length;o++){var a=e[o];if(void 0!==t.style[a])return a}return!1}function Vi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var e=!1;try{var i=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,i)}catch(t){}var r=!!e&&{passive:!0};function $i(t,e,n){for(var i in e){var o=0<=["touchstart","touchmove"].indexOf(i)&&!n&&r;t.addEventListener(i,e[i],o)}}function Gi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&r;t.removeEventListener(n,e[n],i)}}function Xi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var Yi=function(M){M=Ti({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},M||{});var T=document,m=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},e={},n=M.useLocalStorage;if(n){var t=navigator.userAgent,o=new Date;try{(e=m.localStorage)?(e.setItem(o,o),n=e.getItem(o)==o,e.removeItem(o)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var g=e.tC?Ei(e.tC):Ai(e,"tC",function(){var t=document,e=Ni(),n=Li(e),i=t.createElement("div"),o=!1;e.appendChild(i);try{for(var a,r="(10px * 10)",s=["calc"+r,"-moz-calc"+r,"-webkit-calc"+r],u=0;u<3;u++)if(a=s[u],i.style.width=a,100===i.offsetWidth){o=a.replace(r,"");break}}catch(t){}return e.fake?ki(e,n):i.remove(),o}(),n),y=e.tPL?Ei(e.tPL):Ai(e,"tPL",function(){var t=document,e=Ni(),n=Li(e),i=t.createElement("div"),o=t.createElement("div"),a="",t=!1;i.className="tns-t-subp2",o.className="tns-t-ct";for(var r=0;r<70;r++)a+="<div></div>";return o.innerHTML=a,i.appendChild(o),e.appendChild(i),t=Math.abs(i.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,e.fake?ki(e,n):i.remove(),t}(),n),E=e.tMQ?Ei(e.tMQ):Ai(e,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t=document,e=Ni(),n=Li(e),i=t.createElement("div"),o=t.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",i.className="tns-mq-test",e.appendChild(o),e.appendChild(i),o.styleSheet?o.styleSheet.cssText=a:o.appendChild(t.createTextNode(a)),a=(window.getComputedStyle?window.getComputedStyle(i):i.currentStyle).position,e.fake?ki(e,n):i.remove(),"absolute"===a}(),n),a=e.tTf?Ei(e.tTf):Ai(e,"tTf",Qi("transform"),n),r=e.t3D?Ei(e.t3D):Ai(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e=document,n=Ni(),i=Li(n),o=e.createElement("p"),e=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return e+="transform",n.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(e),n.fake?ki(n,i):o.remove(),void 0!==e&&0<e.length&&"none"!==e}(a),n),b=e.tTDu?Ei(e.tTDu):Ai(e,"tTDu",Qi("transitionDuration"),n),s=e.tTDe?Ei(e.tTDe):Ai(e,"tTDe",Qi("transitionDelay"),n),x=e.tADu?Ei(e.tADu):Ai(e,"tADu",Qi("animationDuration"),n),u=e.tADe?Ei(e.tADe):Ai(e,"tADe",Qi("animationDelay"),n),l=e.tTE?Ei(e.tTE):Ai(e,"tTE",Vi(b,"Transition"),n),c=e.tAE?Ei(e.tAE):Ai(e,"tAE",Vi(x,"Animation"),n),d=m.console&&"function"==typeof m.console.warn,f=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],p={};if(f.forEach(function(t){var e,n;"string"==typeof M[t]&&(e=M[t],n=T.querySelector(e),p[t]=e,n&&n.nodeName?M[t]=n:d&&console.warn("Can't find",M[t]))}),!(M.container.children.length<1)){var A,N,h,L,k=M.responsive,O=M.nested,B="carousel"===M.mode;if(k){0 in k&&(M=Ti(M,k[0]),delete k[0]);var v,w={};for(v in k){var C=k[v];w[v]=C="number"==typeof C?{items:C}:C}k=w,w=null}B||!function t(e){for(var n in e)B||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(M),B||(M.axis="horizontal",M.slideBy="page",M.edgePadding=!1,A=M.animateIn,N=M.animateOut,h=M.animateDelay,L=M.animateNormal);var S,D,H="horizontal"===M.axis,P=T.createElement("div"),R=T.createElement("div"),I=M.container,j=I.parentNode,z=I.outerHTML,W=I.children,_=W.length,q=tn(),F=!1;k&&wn(),B&&(I.className+=" tns-vpfix");var Q,V,$,G,X,Y,K,J,U,Z,tt,et,nt,it,ot,at,rt,st,ut,lt,ct,dt,ft,pt,ht,vt,mt,gt,yt,bt,xt,wt,Ct,Mt,Tt,Et,At,Nt,Lt,kt=M.autoWidth,Ot=an("fixedWidth"),Bt=an("edgePadding"),St=an("gutter"),Dt=nn(),Ht=an("center"),Pt=kt?1:Math.floor(an("items")),Rt=an("slideBy"),It=M.viewportMax||M.fixedWidthViewportWidth,jt=an("arrowKeys"),zt=an("speed"),Wt=M.rewind,_t=!Wt&&M.loop,qt=an("autoHeight"),Ft=an("controls"),Qt=an("controlsText"),Vt=an("nav"),$t=an("touch"),Gt=an("mouseDrag"),Xt=an("autoplay"),Yt=an("autoplayTimeout"),Kt=an("autoplayText"),Jt=an("autoplayHoverPause"),Ut=an("autoplayResetOnVisibility"),Zt=(o=null,t=an("nonce"),n=document.createElement("style"),o&&n.setAttribute("media",o),t&&n.setAttribute("nonce",t),document.querySelector("head").appendChild(n),n.sheet||n.styleSheet),te=M.lazyload,ee=M.lazyloadSelector,ne=[],ie=_t?(G=function(){{if(kt||Ot&&!It)return _-1;var t=Ot?"fixedWidth":"items",e=[];if((Ot||M[t]<_)&&e.push(M[t]),k)for(var n in k){n=k[n][t];n&&(Ot||n<_)&&e.push(n)}return e.length||e.push(0),Math.ceil(Ot?It/Math.min.apply(null,e):Math.max.apply(null,e))}}(),X=B?Math.ceil((5*G-_)/2):4*G-_,X=Math.max(G,X),on("edgePadding")?X+1:X):0,oe=B?_+2*ie:_+ie,ae=!(!Ot&&!kt||_t),re=Ot?Gn():null,se=!B||!_t,ue=H?"left":"top",le="",ce="",de=Ot?function(){return Ht&&!_t?_-1:Math.ceil(-re/(Ot+St))}:kt?function(){for(var t=0;t<oe;t++)if(Q[t]>=-re)return t}:function(){return Ht&&B&&!_t?_-1:_t||B?Math.max(0,oe-Math.ceil(Pt)):oe-1},fe=Je(an("startIndex")),pe=fe,he=(Ke(),0),ve=kt?null:de(),me=M.preventActionWhenRunning,ge=M.swipeAngle,ye=!ge||"?",be=!1,xe=M.onInit,we=new Xi,Ce=" tns-slider tns-"+M.mode,Me=I.id||(n=window.tnsId,window.tnsId=n?n+1:1,"tns"+window.tnsId),Te=an("disable"),Ee=!1,Ae=M.freezable,Ne=!(!Ae||kt)&&xn(),Le=!1,ke={click:ni,keydown:function(t){t=ci(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);0<=e&&(0===e?J.disabled||ni(t,-1):U.disabled||ni(t,1))}},Oe={click:function(t){if(be){if(me)return;ti()}var e=di(t=ci(t));for(;e!==it&&!Ri(e,"data-nav");)e=e.parentNode;{var n,i;Ri(e,"data-nav")&&(n=ut=Number(Ii(e,"data-nav")),i=Ot||kt?n*_/rt:n*Pt,ei(je?n:Math.min(Math.ceil(i),_-1),t),lt===n&&(bt&&si(),ut=-1))}},keydown:function(t){t=ci(t);var e,n=T.activeElement;Ri(n,"data-nav")&&(e=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),n=Number(Ii(n,"data-nav")),0<=e&&(0===e?0<n&&li(at[n-1]):1===e?n<rt-1&&li(at[n+1]):ei(ut=n,t)))}},Be={mouseover:function(){bt&&(oi(),xt=!0)},mouseout:function(){xt&&(ii(),xt=!1)}},Se={visibilitychange:function(){T.hidden?bt&&(oi(),Ct=!0):Ct&&(ii(),Ct=!1)}},De={keydown:function(t){t=ci(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);0<=e&&ni(t,0===e?-1:1)}},He={touchstart:vi,touchmove:mi,touchend:gi,touchcancel:gi},Pe={mousedown:vi,mousemove:mi,mouseup:gi,mouseleave:gi},Re=on("controls"),Ie=on("nav"),je=!!kt||M.navAsThumbnails,ze=on("autoplay"),We=on("touch"),_e=on("mouseDrag"),qe="tns-slide-active",Fe="tns-slide-cloned",Qe="tns-complete",Ve={load:function(t){On(di(t))},error:function(t){!function(t){Hi(t,"failed"),Bn(t)}(di(t))}},$e="force"===M.preventScrollOnTouch;Re&&(Y=M.controlsContainer,K=M.controlsContainer?M.controlsContainer.outerHTML:"",J=M.prevButton,U=M.nextButton,Z=M.prevButton?M.prevButton.outerHTML:"",tt=M.nextButton?M.nextButton.outerHTML:""),Ie&&(it=M.navContainer,ot=M.navContainer?M.navContainer.outerHTML:"",rt=kt?_:bi(),st=0,ut=-1,lt=Ze(),ct=lt,dt="tns-nav-active",ft="Carousel Page ",pt=" (Current Slide)"),ze&&(ht="forward"===M.autoplayDirection?1:-1,vt=M.autoplayButton,mt=M.autoplayButton?M.autoplayButton.outerHTML:"",gt=["<span class='tns-visually-hidden'>"," animation</span>"]),(We||_e)&&(Mt={},At=!(Tt={}),Lt=H?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y}),kt||Ye(Te||Ne),a&&(ue=a,le="translate",ce=r?(le+=H?"3d(":"3d(0px, ",H?", 0px, 0px)":", 0px)"):(le+=H?"X(":"Y(",")")),B&&(I.className=I.className.replace("tns-vpfix","")),function(){on("gutter");P.className="tns-outer",R.className="tns-inner",P.id=Me+"-ow",R.id=Me+"-iw",""===I.id&&(I.id=Me);Ce+=y||kt?" tns-subpixel":" tns-no-subpixel",Ce+=g?" tns-calc":" tns-no-calc",kt&&(Ce+=" tns-autowidth");Ce+=" tns-"+M.axis,I.className+=Ce,B?((S=T.createElement("div")).id=Me+"-mw",S.className="tns-ovh",P.appendChild(S),S.appendChild(R)):P.appendChild(R);qt&&((S||R).className+=" tns-ah");if(j.insertBefore(P,I),R.appendChild(I),Si(W,function(t,e){Hi(t,"tns-item"),t.id||(t.id=Me+"-item"+e),!B&&L&&Hi(t,L),ji(t,{"aria-hidden":"true",tabindex:"-1"})}),ie){for(var t=T.createDocumentFragment(),e=T.createDocumentFragment(),n=ie;n--;){var i=n%_,o=W[i].cloneNode(!0);Hi(o,Fe),zi(o,"id"),e.insertBefore(o,e.firstChild),B&&(i=W[_-1-i].cloneNode(!0),Hi(i,Fe),zi(i,"id"),t.appendChild(i))}I.insertBefore(t,I.firstChild),I.appendChild(e),W=I.children}}(),function(){if(!B)for(var t=fe,e=fe+Math.min(_,Pt);t<e;t++){var n=W[t];n.style.left=100*(t-fe)/Pt+"%",Hi(n,A),Pi(n,L)}H&&(y||kt?(Oi(Zt,"#"+Me+" > .tns-item","font-size:"+m.getComputedStyle(W[0]).fontSize+";",Bi(Zt)),Oi(Zt,"#"+Me,"font-size:0;",Bi(Zt))):B&&Si(W,function(t,e){t.style.marginLeft=(e=e,g?g+"("+100*e+"% / "+oe+")":100*e/oe+"%")}));E?(b&&(a=S&&M.autoHeight?dn(M.speed):"",Oi(Zt,"#"+Me+"-mw",a,Bi(Zt))),a=rn(M.edgePadding,M.gutter,M.fixedWidth,M.speed,M.autoHeight),Oi(Zt,"#"+Me+"-iw",a,Bi(Zt)),B&&(a=H&&!kt?"width:"+sn(M.fixedWidth,M.gutter,M.items)+";":"",b&&(a+=dn(zt)),Oi(Zt,"#"+Me,a,Bi(Zt))),a=H&&!kt?un(M.fixedWidth,M.gutter,M.items):"",M.gutter&&(a+=ln(M.gutter)),B||(b&&(a+=dn(zt)),x&&(a+=fn(zt)))):(B&&qt&&(S.style[b]=zt/1e3+"s"),R.style.cssText=rn(Bt,St,Ot,qt),B&&H&&!kt&&(I.style.width=sn(Ot,St,Pt)),a=H&&!kt?un(Ot,St,Pt):"",St&&(a+=ln(St))),a&&Oi(Zt,"#"+Me+" > .tns-item",a,Bi(Zt));if(k&&E)for(var i in k){i=parseInt(i);var o=k[i],a="",r="",s="",u="",l="",c=kt?null:an("items",i),d=an("fixedWidth",i),f=an("speed",i),p=an("edgePadding",i),h=an("autoHeight",i),v=an("gutter",i);b&&S&&an("autoHeight",i)&&"speed"in o&&(r="#"+Me+"-mw{"+dn(f)+"}"),("edgePadding"in o||"gutter"in o)&&(s="#"+Me+"-iw{"+rn(p,v,d,f,h)+"}"),B&&H&&!kt&&("fixedWidth"in o||"items"in o||Ot&&"gutter"in o)&&(u="width:"+sn(d,v,c)+";"),b&&"speed"in o&&(u+=dn(f)),u=u&&"#"+Me+"{"+u+"}",("fixedWidth"in o||Ot&&"gutter"in o||!B&&"items"in o)&&(l+=un(d,v,c)),"gutter"in o&&(l+=ln(v)),!B&&"speed"in o&&(b&&(l+=dn(f)),x&&(l+=fn(f))),(a=r+s+u+(l=l&&"#"+Me+" > .tns-item{"+l+"}"))&&Zt.insertRule("@media (min-width: "+i/16+"em) {"+a+"}",Zt.cssRules.length)}}(),pn();var Ge=_t?B?function(){var t=he,e=ve;t+=Rt,e-=Rt,Bt?(t+=1,--e):Ot&&(Dt+St)%(Ot+St)&&--e,ie&&(e<fe?fe-=_:fe<t&&(fe+=_))}:function(){if(ve<fe)for(;he+_<=fe;)fe-=_;else if(fe<he)for(;fe<=ve-_;)fe+=_}:function(){fe=Math.max(he,Math.min(ve,fe))},Xe=B?function(){var e,n,i,o,t,a,r,s,u,l,c;Vn(I,""),b||!zt?(Kn(),zt&&Fi(I)||ti()):(e=I,n=ue,i=le,o=ce,t=Xn(),a=zt,r=ti,s=Math.min(a,10),u=0<=t.indexOf("%")?"%":"px",t=t.replace(u,""),l=Number(e.style[n].replace(i,"").replace(o,"").replace(u,"")),c=(t-l)/a*s,setTimeout(function t(){a-=s;l+=c;e.style[n]=i+l+u+o;0<a?setTimeout(t,s):r()},s)),H||yi()}:function(){ne=[];var t={};t[l]=t[c]=ti,Gi(W[pe],t),$i(W[fe],t),Jn(pe,A,N,!0),Jn(fe,L,A),l&&c&&zt&&Fi(I)||ti()};return{version:"2.9.3",getInfo:wi,events:we,goTo:ei,play:function(){Xt&&!bt&&(ri(),wt=!1)},pause:function(){bt&&(si(),wt=!0)},isOn:F,updateSliderHeight:In,refresh:pn,destroy:function(){var t;Zt.disabled=!0,Zt.ownerNode&&Zt.ownerNode.remove(),Gi(m,{resize:yn}),jt&&Gi(T,De),Y&&Gi(Y,ke),it&&Gi(it,Oe),Gi(I,Be),Gi(I,Se),vt&&Gi(vt,{click:ui}),Xt&&clearInterval(yt),B&&l&&((t={})[l]=ti,Gi(I,t)),$t&&Gi(I,He),Gt&&Gi(I,Pe);var e,a=[z,K,Z,tt,ot,mt];for(e in f.forEach(function(t,e){var n,i,o="container"===t?P:M[t];"object"==typeof o&&o&&(n=o.previousElementSibling||!1,i=o.parentNode,o.outerHTML=a[e],M[t]=n?n.nextElementSibling:i.firstElementChild)}),f=A=N=h=L=H=P=R=I=j=z=W=_=D=q=kt=Ot=Bt=St=Dt=Pt=Rt=It=jt=zt=Wt=_t=qt=Zt=te=Q=ne=ie=oe=ae=re=se=ue=le=ce=de=fe=pe=he=ve=ge=ye=be=xe=we=Ce=Me=Te=Ee=Ae=Ne=Le=ke=Oe=Be=Se=De=He=Pe=Re=Ie=je=ze=_e=qe=Qe=Ve=V=Ft=Qt=Y=K=J=U=et=nt=Vt=it=ot=at=rt=st=ut=lt=ct=dt=ft=pt=Xt=Yt=ht=Kt=Jt=vt=mt=Ut=gt=yt=bt=xt=wt=Ct=Mt=Tt=Et=At=Nt=Lt=$t=Gt=null,this)"rebuild"!==e&&(this[e]=null);F=!1},rebuild:function(){return Yi(Ti(M,p))}}}function Ye(t){t&&(Ft=Vt=$t=Gt=jt=Xt=Jt=Ut=!1)}function Ke(){for(var t=B?fe-ie:fe;t<0;)t+=_;return t%_+1}function Je(t){return t=t?Math.max(0,Math.min(_t?_-1:_-Pt,t)):0,B?t+ie:t}function Ue(t){for(null==t&&(t=fe),B&&(t-=ie);t<0;)t+=_;return Math.floor(t%_)}function Ze(){var t=Ue(),t=je?t:Ot||kt?Math.ceil((t+1)*rt/_-1):Math.floor(t/Pt);return t=!_t&&B&&fe===ve?rt-1:t}function tn(){return m.innerWidth||T.documentElement.clientWidth||T.body.clientWidth}function en(t){return"top"===t?"afterbegin":"beforeend"}function nn(){var t=Bt?2*Bt-St:0;return function t(e){if(null!=e){var n,i=T.createElement("div");return e.appendChild(i),n=(n=i.getBoundingClientRect()).right-n.left,i.remove(),n||t(e.parentNode)}}(j)-t}function on(t){if(M[t])return!0;if(k)for(var e in k)if(k[e][t])return!0;return!1}function an(t,e){if(null==e&&(e=q),"items"===t&&Ot)return Math.floor((Dt+St)/(Ot+St))||1;var n=M[t];if(k)for(var i in k)e>=parseInt(i)&&t in k[i]&&(n=k[i][t]);return"slideBy"===t&&"page"===n&&(n=an("items")),n=!(B||"slideBy"!==t&&"items"!==t)?Math.floor(n):n}function rn(t,e,n,i,o){var a,r="";return void 0!==t?(a=t,e&&(a-=e),r=H?"margin: 0 "+a+"px 0 "+t+"px;":"margin: "+t+"px 0 "+a+"px 0;"):e&&!n&&(e="-"+e+"px",r="margin: 0 "+(H?e+" 0 0":"0 "+e+" 0")+";"),!B&&o&&b&&i&&(r+=dn(i)),r}function sn(t,e,n){return t?(t+e)*oe+"px":g?g+"("+100*oe+"% / "+n+")":100*oe/n+"%"}function un(t,e,n){var i;return i="width:"+(i=t?t+e+"px":(B||(n=Math.floor(n)),i=B?oe:n,g?g+"(100% / "+i+")":100/i+"%")),"inner"!==O?i+";":i+" !important;"}function ln(t){return!1!==t?(H?"padding-":"margin-")+(H?"right":"bottom")+": "+t+"px;":""}function cn(t,e){e=t.substring(0,t.length-e).toLowerCase();return e=e&&"-"+e+"-"}function dn(t){return cn(b,18)+"transition-duration:"+t/1e3+"s;"}function fn(t){return cn(x,17)+"animation-duration:"+t/1e3+"s;"}function pn(){var t;on("autoHeight")||kt||!H?(Si(t=I.querySelectorAll("img"),function(t){var e=t.src;te||(e&&e.indexOf("data:image")<0?(t.src="",$i(t,Ve),Hi(t,"loading"),t.src=e):On(t))}),Ci(function(){Hn(Wi(t),function(){V=!0})}),on("autoHeight")&&(t=Sn(fe,Math.min(fe+Pt-1,oe-1))),te?hn():Ci(function(){Hn(Wi(t),hn)})):(B&&Yn(),mn(),gn())}function hn(){var i;kt&&1<_?(i=_t?fe:_-1,function t(){var e=W[i].getBoundingClientRect().left,n=W[i-1].getBoundingClientRect().right;Math.abs(e-n)<=1?vn():setTimeout(function(){t()},16)}()):vn()}function vn(){H&&!kt||(jn(),kt?(re=Gn(),Ae&&(Ne=xn()),ve=de(),Ye(Te||Ne)):yi()),B&&Yn(),mn(),gn()}function mn(){if(zn(),P.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+Nn()+"</span>  of "+_+"</div>"),$=P.querySelector(".tns-liveregion .current"),ze&&(e=Xt?"stop":"start",vt?ji(vt,{"data-action":e}):M.autoplayButtonOutput&&(P.insertAdjacentHTML(en(M.autoplayPosition),'<button type="button" data-action="'+e+'">'+gt[0]+e+gt[1]+Kt[0]+"</button>"),vt=P.querySelector("[data-action]")),vt&&$i(vt,{click:ui}),Xt&&(ri(),Jt&&$i(I,Be),Ut&&$i(I,Se))),Ie){var t,e;if(it)ji(it,{"aria-label":"Carousel Pagination"}),Si(at=it.children,function(t,e){ji(t,{"data-nav":e,tabindex:"-1","aria-label":ft+(e+1),"aria-controls":Me})});else{for(var n="",i=je?"":'style="display:none"',o=0;o<_;o++)n+='<button type="button" data-nav="'+o+'" tabindex="-1" aria-controls="'+Me+'" '+i+' aria-label="'+ft+(o+1)+'"></button>';P.insertAdjacentHTML(en(M.navPosition),n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>"),it=P.querySelector(".tns-nav"),at=it.children}xi(),b&&(t=b.substring(0,b.length-18).toLowerCase(),e="transition: all "+zt/1e3+"s",Oi(Zt,"[aria-controls^="+Me+"-item]",e=t?"-"+t+"-"+e:e,Bi(Zt))),ji(at[lt],{"aria-label":ft+(lt+1)+pt}),zi(at[lt],"tabindex"),Hi(at[lt],dt),$i(it,Oe)}Re&&(Y||J&&U||(P.insertAdjacentHTML(en(M.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Me+'">'+Qt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Me+'">'+Qt[1]+"</button></div>"),Y=P.querySelector(".tns-controls")),J&&U||(J=Y.children[0],U=Y.children[1]),M.controlsContainer&&ji(Y,{"aria-label":"Carousel Navigation",tabindex:"0"}),(M.controlsContainer||M.prevButton&&M.nextButton)&&ji([J,U],{"aria-controls":Me,tabindex:"-1"}),(M.controlsContainer||M.prevButton&&M.nextButton)&&(ji(J,{"data-controls":"prev"}),ji(U,{"data-controls":"next"})),et=_n(J),nt=_n(U),Qn(),Y?$i(Y,ke):($i(J,ke),$i(U,ke))),Cn()}function gn(){var t;B&&l&&((t={})[l]=ti,$i(I,t)),$t&&$i(I,He,M.preventScrollOnTouch),Gt&&$i(I,Pe),jt&&$i(T,De),"inner"===O?we.on("outerResized",function(){bn(),we.emit("innerLoaded",wi())}):(k||Ot||kt||qt||!H)&&$i(m,{resize:yn}),qt&&("outer"===O?we.on("innerLoaded",Dn):Te||Dn()),kn(),Te?En():Ne&&Tn(),we.on("indexChanged",Pn),"inner"===O&&we.emit("innerLoaded",wi()),"function"==typeof xe&&xe(wi()),F=!0}function yn(t){Ci(function(){bn(ci(t))})}function bn(t){var e,n,i,o,a,r,s,u,l,c,d,f,p,h,v,m,g,y,b,x,w,C;F&&("outer"===O&&we.emit("outerResized",wi(t)),q=tn(),h=D,n=!1,k&&(wn(),(e=h!==D)&&we.emit("newBreakpointStart",wi(t))),i=Pt,o=Te,a=Ne,r=jt,s=Ft,u=Vt,l=$t,c=Gt,d=Xt,f=Jt,p=Ut,h=fe,e&&(v=Ot,g=qt,b=Qt,y=Ht,m=Kt,E||(C=St,w=Bt)),jt=an("arrowKeys"),Ft=an("controls"),Vt=an("nav"),$t=an("touch"),Ht=an("center"),Gt=an("mouseDrag"),Xt=an("autoplay"),Jt=an("autoplayHoverPause"),Ut=an("autoplayResetOnVisibility"),e&&(Te=an("disable"),Ot=an("fixedWidth"),zt=an("speed"),qt=an("autoHeight"),Qt=an("controlsText"),Kt=an("autoplayText"),Yt=an("autoplayTimeout"),E||(Bt=an("edgePadding"),St=an("gutter"))),Ye(Te),Dt=nn(),H&&!kt||Te||(jn(),H||(yi(),n=!0)),(Ot||kt)&&(re=Gn(),ve=de()),(e||Ot)&&(Pt=an("items"),Rt=an("slideBy"),(x=Pt!==i)&&(Ot||kt||(ve=de()),Ge())),e&&Te!==o&&(Te?En:function(){if(Ee){if(Zt.disabled=!1,I.className+=Ce,Yn(),_t)for(var t=ie;t--;)B&&qi(W[t]),qi(W[oe-t-1]);if(!B)for(var e=fe,n=fe+_;e<n;e++){var i=W[e],o=e<fe+Pt?A:L;i.style.left=100*(e-fe)/Pt+"%",Hi(i,o)}Mn(),Ee=!1}})(),Ae&&(e||Ot||kt)&&(Ne=xn())!==a&&(Ne?(Kn(Xn(Je(0))),Tn()):(function(){if(Le){if(Bt&&E&&(R.style.margin=""),ie)for(var t="tns-transparent",e=ie;e--;)B&&Pi(W[e],t),Pi(W[oe-e-1],t);Mn(),Le=!1}}(),n=!0)),Ye(Te||Ne),Xt||(Jt=Ut=!1),jt!==r&&(jt?$i:Gi)(T,De),Ft!==s&&(Ft?Y?qi(Y):(J&&qi(J),U&&qi(U)):Y?_i(Y):(J&&_i(J),U&&_i(U))),Vt!==u&&(Vt?(qi(it),xi()):_i(it)),$t!==l&&($t?$i(I,He,M.preventScrollOnTouch):Gi(I,He)),Gt!==c&&(Gt?$i:Gi)(I,Pe),Xt!==d&&(Xt?(vt&&qi(vt),bt||wt||ri()):(vt&&_i(vt),bt&&si())),Jt!==f&&(Jt?$i:Gi)(I,Be),Ut!==p&&(Ut?$i:Gi)(T,Se),e?(Ot===v&&Ht===y||(n=!0),qt!==g&&(qt||(R.style.height="")),Ft&&Qt!==b&&(J.innerHTML=Qt[0],U.innerHTML=Qt[1]),vt&&Kt!==m&&(b=(y=vt.innerHTML).length-m[g=Xt?1:0].length,y.substring(b)===m[g]&&(vt.innerHTML=y.substring(0,b)+Kt[g]))):Ht&&(Ot||kt)&&(n=!0),(x||Ot&&!kt)&&(rt=bi(),xi()),(h=fe!==h)?(we.emit("indexChanged",wi()),n=!0):x?h||Pn():(Ot||kt)&&(kn(),zn(),An()),x&&!B&&function(){for(var t=fe+Math.min(_,Pt),e=oe;e--;){var n=W[e];fe<=e&&e<t?(Hi(n,"tns-moving"),n.style.left=100*(e-fe)/Pt+"%",Hi(n,A),Pi(n,L)):n.style.left&&(n.style.left="",Hi(n,L),Pi(n,A)),Pi(n,N)}setTimeout(function(){Si(W,function(t){Pi(t,"tns-moving")})},300)}(),Te||Ne||(e&&!E&&(Bt===w&&St===C||(R.style.cssText=rn(Bt,St,Ot,zt,qt)),H&&(B&&(I.style.width=sn(Ot,St,Pt)),x=un(Ot,St,Pt)+ln(St),C=Bi(w=Zt)-1,"deleteRule"in w?w.deleteRule(C):w.removeRule(C),Oi(Zt,"#"+Me+" > .tns-item",x,Bi(Zt)))),qt&&Dn(),n&&(Yn(),pe=fe)),e&&we.emit("newBreakpointEnd",wi(t)))}function xn(){if(!Ot&&!kt)return _<=(Ht?Pt-(Pt-1)/2:Pt);var t=Ot?(Ot+St)*_:Q[_],e=Bt?Dt+2*Bt:Dt+St;return Ht&&(e-=Ot?(Dt-Ot)/2:(Dt-(Q[fe+1]-Q[fe]-St))/2),t<=e}function wn(){for(var t in D=0,k)(t=parseInt(t))<=q&&(D=t)}function Cn(){!Xt&&vt&&_i(vt),!Vt&&it&&_i(it),Ft||(Y?_i(Y):(J&&_i(J),U&&_i(U)))}function Mn(){Xt&&vt&&qi(vt),Vt&&it&&qi(it),Ft&&(Y?qi(Y):(J&&qi(J),U&&qi(U)))}function Tn(){if(!Le){if(Bt&&(R.style.margin="0px"),ie)for(var t="tns-transparent",e=ie;e--;)B&&Hi(W[e],t),Hi(W[oe-e-1],t);Cn(),Le=!0}}function En(){if(!Ee){if(Zt.disabled=!0,I.className=I.className.replace(Ce.substring(1),""),zi(I,["style"]),_t)for(var t=ie;t--;)B&&_i(W[t]),_i(W[oe-t-1]);if(H&&B||zi(R,["style"]),!B)for(var e=fe,n=fe+_;e<n;e++){var i=W[e];zi(i,["style"]),Pi(i,A),Pi(i,L)}Cn(),Ee=!0}}function An(){var t=Nn();$.innerHTML!==t&&($.innerHTML=t)}function Nn(){var t=Ln(),e=t[0]+1,t=t[1]+1;return e===t?e+"":e+" to "+t}function Ln(t){null==t&&(t=Xn());var n,i,o,e,a=fe;return Ht||Bt?(kt||Ot)&&(n=-(parseFloat(t)+Bt),i=n+Dt+2*Bt):kt&&(n=Q[fe],i=n+Dt),kt?Q.forEach(function(t,e){e<oe&&((Ht||Bt)&&t<=n+.5&&(a=e),.5<=i-t&&(o=e))}):(o=Ot?(e=Ot+St,Ht||Bt?(a=Math.floor(n/e),Math.ceil(i/e-1)):a+Math.ceil(Dt/e)-1):Ht||Bt?(e=Pt-1,o=Ht?(a-=e/2,fe+e/2):fe+e,Bt&&(a-=e=Bt*Pt/Dt,o+=e),a=Math.floor(a),Math.ceil(o)):a+Pt-1,a=Math.max(a,0),o=Math.min(o,oe-1)),[a,o]}function kn(){var t;te&&!Te&&((t=Ln()).push(ee),Sn.apply(null,t).forEach(function(t){var e;Di(t,Qe)||((e={})[l]=function(t){t.stopPropagation()},$i(t,e),$i(t,Ve),t.src=Ii(t,"data-src"),(e=Ii(t,"data-srcset"))&&(t.srcset=e),Hi(t,"loading"))}))}function On(t){Hi(t,"loaded"),Bn(t)}function Bn(t){Hi(t,Qe),Pi(t,"loading"),Gi(t,Ve)}function Sn(t,e,n){var i=[];for(n=n||"img";t<=e;)Si(W[t].querySelectorAll(n),function(t){i.push(t)}),t++;return i}function Dn(){var t=Sn.apply(null,Ln());Ci(function(){Hn(t,In)})}function Hn(n,t){return V?t():(n.forEach(function(t,e){!te&&t.complete&&Bn(t),Di(t,Qe)&&n.splice(e,1)}),n.length?void Ci(function(){Hn(n,t)}):t())}function Pn(){kn(),zn(),An(),Qn(),function(){{var t,e;Vt&&(lt=0<=ut?ut:Ze(),ut=-1,lt!==ct&&(t=at[ct],e=at[lt],ji(t,{tabindex:"-1","aria-label":ft+(ct+1)}),Pi(t,dt),ji(e,{"aria-label":ft+(lt+1)+pt}),zi(e,"tabindex"),Hi(e,dt),ct=lt))}}()}function Rn(t,e){for(var n=[],i=t,o=Math.min(t+e,oe);i<o;i++)n.push(W[i].offsetHeight);return Math.max.apply(null,n)}function In(){var t=qt?Rn(fe,Pt):Rn(ie,_),e=S||R;e.style.height!==t&&(e.style.height=t+"px")}function jn(){Q=[0];var n=H?"left":"top",i=H?"right":"bottom",o=W[0].getBoundingClientRect()[n];Si(W,function(t,e){e&&Q.push(t.getBoundingClientRect()[n]-o),e===oe-1&&Q.push(t.getBoundingClientRect()[i]-o)})}function zn(){var t=Ln(),n=t[0],i=t[1];Si(W,function(t,e){n<=e&&e<=i?Ri(t,"aria-hidden")&&(zi(t,["aria-hidden","tabindex"]),Hi(t,qe)):Ri(t,"aria-hidden")||(ji(t,{"aria-hidden":"true",tabindex:"-1"}),Pi(t,qe))})}function Wn(t){return t.nodeName.toLowerCase()}function _n(t){return"button"===Wn(t)}function qn(t){return"true"===t.getAttribute("aria-disabled")}function Fn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Qn(){var t,e,n,i;!Ft||Wt||_t||(t=et?J.disabled:qn(J),e=nt?U.disabled:qn(U),i=!Wt&&ve<=fe,(n=fe<=he)&&!t&&Fn(et,J,!0),!n&&t&&Fn(et,J,!1),i&&!e&&Fn(nt,U,!0),!i&&e&&Fn(nt,U,!1))}function Vn(t,e){b&&(t.style[b]=e)}function $n(t){return null==t&&(t=fe),kt?(Dt-(Bt?St:0)-(Q[t+1]-Q[t]-St))/2:Ot?(Dt-Ot)/2:(Pt-1)/2}function Gn(){var t=Dt+(Bt?St:0)-(Ot?(Ot+St)*oe:Q[oe]);return t=0<(t=Ht&&!_t?Ot?-(Ot+St)*(oe-1)-$n():$n(oe-1)-Q[oe-1]:t)?0:t}function Xn(t){var e;return null==t&&(t=fe),H&&!kt?Ot?(e=-(Ot+St)*t,Ht&&(e+=$n())):(Ht&&(t-=$n()),e=100*-t/(a?oe:Pt)):(e=-Q[t],Ht&&kt&&(e+=$n())),ae&&(e=Math.max(e,re)),e+=!H||kt||Ot?"px":"%"}function Yn(t){Vn(I,"0s"),Kn(t)}function Kn(t){null==t&&(t=Xn()),I.style[ue]=le+t+ce}function Jn(t,e,n,i){var o=t+Pt;_t||(o=Math.min(o,oe));for(var a=t;a<o;a++){var r=W[a];i||(r.style.left=100*(a-fe)/Pt+"%"),h&&s&&(r.style[s]=r.style[u]=h*(a-t)/1e3+"s"),Pi(r,e),Hi(r,n),i&&ne.push(r)}}function Un(t,e){se&&Ge(),fe===pe&&!e||(we.emit("indexChanged",wi()),we.emit("transitionStart",wi()),qt&&Dn(),bt&&t&&0<=["click","keydown"].indexOf(t.type)&&si(),be=!0,Xe())}function Zn(t){return t.toLowerCase().replace(/-/g,"")}function ti(t){if(B||be){if(we.emit("transitionEnd",wi(t)),!B&&0<ne.length)for(var e=0;e<ne.length;e++){var n=ne[e];n.style.left="",u&&s&&(n.style[u]="",n.style[s]=""),Pi(n,N),Hi(n,L)}(!t||!B&&t.target.parentNode===I||t.target===I&&Zn(t.propertyName)===Zn(ue))&&(se||(t=fe,Ge(),fe!==t&&(we.emit("indexChanged",wi()),Yn())),"inner"===O&&we.emit("innerLoaded",wi()),be=!1,pe=fe)}}function ei(t,e){if(!Ne)if("prev"===t)ni(e,-1);else if("next"===t)ni(e,1);else{if(be){if(me)return;ti()}var n=Ue(),i=0;"first"===t?i=-n:"last"===t?i=B?_-Pt-n:_-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(i=(t=!e?Math.max(0,Math.min(_-1,t)):t)-n)),!B&&i&&Math.abs(i)<Pt&&(n=0<i?1:-1,i+=he<=fe+i-_?_*n:2*_*n*-1),fe+=i,B&&_t&&(fe<he&&(fe+=_),ve<fe&&(fe-=_)),Ue(fe)!==Ue(pe)&&Un(e)}}function ni(t,e){if(be){if(me)return;ti()}var n;if(!e){for(var i=di(t=ci(t));i!==Y&&[J,U].indexOf(i)<0;)i=i.parentNode;var o=[J,U].indexOf(i);0<=o&&(n=!0,e=0===o?-1:1)}if(Wt){if(fe===he&&-1===e)return void ei("last",t);if(fe===ve&&1===e)return void ei("first",t)}e&&(fe+=Rt*e,kt&&(fe=Math.floor(fe)),Un(n||t&&"keydown"===t.type?t:null))}function ii(){yt=setInterval(function(){ni(null,ht)},Yt),bt=!0}function oi(){clearInterval(yt),bt=!1}function ai(t,e){ji(vt,{"data-action":t}),vt.innerHTML=gt[0]+t+gt[1]+e}function ri(){ii(),vt&&ai("stop",Kt[1])}function si(){oi(),vt&&ai("start",Kt[0])}function ui(){wt=bt?(si(),!0):(ri(),!1)}function li(t){t.focus()}function ci(t){return fi(t=t||m.event)?t.changedTouches[0]:t}function di(t){return t.target||m.event.srcElement}function fi(t){return 0<=t.type.indexOf("touch")}function pi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function hi(){return e=Tt.y-Mt.y,n=Tt.x-Mt.x,t=Math.atan2(e,n)*(180/Math.PI),e=ge,n=!1,t=Math.abs(90-Math.abs(t)),90-e<=t?n="horizontal":t<=e&&(n="vertical"),n===M.axis;var t,e,n}function vi(t){if(be){if(me)return;ti()}Xt&&bt&&oi(),At=!0,Nt&&(Mi(Nt),Nt=null);var e=ci(t);we.emit(fi(t)?"touchStart":"dragStart",wi(t)),!fi(t)&&0<=["img","a"].indexOf(Wn(di(t)))&&pi(t),Tt.x=Mt.x=e.clientX,Tt.y=Mt.y=e.clientY,B&&(Et=parseFloat(I.style[ue].replace(le,"")),Vn(I,"0s"))}function mi(t){var e;At&&(e=ci(t),Tt.x=e.clientX,Tt.y=e.clientY,B?Nt=Nt||Ci(function(){!function t(e){if(!ye)return void(At=!1);Mi(Nt);At&&(Nt=Ci(function(){t(e)}));"?"===ye&&(ye=hi());if(ye){!$e&&fi(e)&&($e=!0);try{e.type&&we.emit(fi(e)?"touchMove":"dragMove",wi(e))}catch(t){}var n=Et,i=Lt(Tt,Mt);!H||Ot||kt?(n+=i,n+="px"):(n+=a?i*Pt*100/((Dt+St)*oe):100*i/(Dt+St),n+="%"),I.style[ue]=le+n+ce}}(t)}):(ye="?"===ye?hi():ye)&&($e=!0),("boolean"!=typeof t.cancelable||t.cancelable)&&$e&&t.preventDefault())}function gi(i){var t,o,n;At&&(Nt&&(Mi(Nt),Nt=null),B&&Vn(I,""),At=!1,t=ci(i),Tt.x=t.clientX,Tt.y=t.clientY,o=Lt(Tt,Mt),Math.abs(o)&&(fi(i)||$i(n=di(i),{click:function t(e){pi(e),Gi(n,{click:t})}}),B?Nt=Ci(function(){if(H&&!kt){var t=-o*Pt/(Dt+St),t=0<o?Math.floor(t):Math.ceil(t);fe+=t}else{var e=-(Et+o);if(e<=0)fe=he;else if(e>=Q[oe-1])fe=ve;else for(var n=0;n<oe&&e>=Q[n];)e>Q[fe=n]&&o<0&&(fe+=1),n++}Un(i,o),we.emit(fi(i)?"touchEnd":"dragEnd",wi(i))}):ye&&ni(i,0<o?-1:1))),"auto"===M.preventScrollOnTouch&&($e=!1),ge&&(ye="?"),Xt&&!bt&&ii()}function yi(){(S||R).style.height=Q[fe+Pt]-Q[fe]+"px"}function bi(){return Math.min(Math.ceil(Ot?(Ot+St)*_/Dt:_/Pt),_)}function xi(){if(Vt&&!je&&rt!==st){var t=st,e=rt,n=qi;for(rt<st&&(t=rt,e=st,n=_i);t<e;)n(at[t]),t++;st=rt}}function wi(t){return{container:I,slideItems:W,navContainer:it,navItems:at,controlsContainer:Y,hasControls:Re,prevButton:J,nextButton:U,items:Pt,slideBy:Rt,cloneCount:ie,slideCount:_,slideCountNew:oe,index:fe,indexCached:pe,displayIndex:Ke(),navCurrentIndex:lt,navCurrentIndexCached:ct,pages:rt,pagesCached:st,sheet:Zt,isOn:F,event:t||{}}}d&&console.warn("No slides found in",M.container)};return Yi}();!function(s){s(".projects__filters-toggle").on("click",function(t){t.preventDefault(),s(this).parent().toggleClass("open")}),s(".projects__view button").on("click",function(t){var e=s(this).data("view"),n=s(this).parents(".projects__wrap");new Date;document.cookie="projectView= "+e,"list"==e?(n.addClass("list-view"),n.removeClass("grid-view")):(n.removeClass("list-view"),n.addClass("grid-view"))}),s(".projects__cards-sort button").on("click",function(){var t,e=s(this).parent().index()+1;t=s(this).data("order")&&"asc"==s(this).data("order")?"desc":"asc",s(".projects__cards-sort button").removeClass("selected asc desc"),"desc"==t?s(".projects__cards").addClass("desc"):s(".projects__cards").removeClass("desc"),s(this).data("order",t),s(this).addClass("selected "+t),function(o){var a=[],r=[];for(["Elephant","monkey","dog","cat"].splice(1,0,"Chicken","giraffe"),s(".projects__cards .project-card").each(function(){for(var t=function(t,e){t=s(1==e?"h2 a":":nth-child("+e+") li:first-child a",t).text();return t}(s(".project-card__content",this),o),e=!0,n=0,i=0;e;)e=n<=a.length&&t>a[n],i=n,n++;a.splice(i,0,t),r.splice(i,0,s(this))}),i=0;i<r.length;i++)r[i].css({order:i})}(e)})}(jQuery),function(i){var e,o,t;function n(){var t=i(window).scrollTop();if(i("body > main").hasClass("parent-page")){for(var e="",n=1;n<$sectionOffsets.length&&(e+=n+" / ",!(t<=$sectionOffsets[n].sectPos));n++);e+="<br>"+t+" / "+n+"<br>";for(n=0;n<$sectionOffsets.length;n++)e+=$sectionOffsets[n].sectPos+" / ";i("#feedback").html(e)}}function a(){i("body > main").hasClass("parent-page")&&($sectionOffsets=[],i(".page").each(function(){var t=i(this).offset().top-o,e=i(this).prop("id"),n=i(this).data("url");$sectionOffsets.push({sectPos:t,id:e,url:n})}),console.log($sectionOffsets))}i(".main-header__toggle").on("click",function(t){t.preventDefault(),i(this).parent().toggleClass("open")}),i("body > main").hasClass("parent-page")&&(e=i("#page-"+i("body").data("page-name")),o=i(".main-header").height(),t=e.offset().top-o,window.scrollTo(0,t),a(),i(window).load(function(){a(),n();var t=e.offset().top-o;window.scrollTo(0,t)})),i(window).scroll(function(){n()}),i(window).resize(function(){a()})}(jQuery),function(i){var o;o=i(window).width(),i(".natoli-slider").each(function(){var t,e,n=i(this);(!n.hasClass("desktop-only")||n.hasClass("desktop-only")&&768<=o)&&(n.prop("id"),t=n.data("options"),e=tns(t),n=n.parents(".tns-outer").siblings(".natoli-slider-nav"),i("button",n).on("click",function(){var t=i(this).index();e.goTo(t),e.pause()}))})}(jQuery);