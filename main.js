(()=>{"use strict";function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(e){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.popover=this.container.querySelector(".popover"),this.popover.addEventListener("click",(function(e){return o.onClick(e)})),this.init()}var o,n;return o=t,(n=[{key:"init",value:function(){this.container.style.position="relative",this.container.style.height="".concat(document.documentElement.clientHeight,"px"),this.popover.style.left="".concat(Math.round(this.container.clientWidth/2)-this.popover.offsetWidth/2,"px"),this.popover.style.top="".concat(Math.round(this.container.clientHeight/2)-this.popover.offsetHeight/2,"px"),this.popover.style.position="absolute"}},{key:"onClick",value:function(e){var t=e.target;t.style.boxShadow="0 0 0 .2rem rgba(225,83,97,.5)";var o=t.dataset.originalTitle,n=t.dataset.content;if(t.classList.contains("popover-active"))t.classList.remove("popover-active"),this.container.querySelector(".popover-inform").remove(),this.container.querySelector(".arrow").remove(),t.style.boxShadow="";else{t.classList.add("popover-active");var i=document.createElement("div");i.className="popover-inform";var r=document.createElement("h3");r.className="popover-title",r.textContent=o;var a=document.createElement("div");a.className="popover-inform-text",a.textContent=n;var c=document.createElement("div");c.className="arrow",i.insertAdjacentElement("afterbegin",r),i.insertAdjacentElement("beforeend",a),this.container.append(i),this.container.append(c);var s=t.getBoundingClientRect(),l=s.left,p=s.right,v=s.top,h=s.height,d=s.width;c.style.bottom="".concat(v+h+3.2,"px"),c.style.left="".concat(l+d/2-c.offsetWidth/2,"px"),i.style.bottom="".concat(v+h+(c.offsetHeight-1)+3.2,"px"),i.style.left="".concat(l-20,"px"),i.style.right="".concat(document.documentElement.offsetWidth-(p+20),"px")}}}])&&e(o.prototype,n),t}();window.popover=new t(document.querySelector(".container-popovers"))})();