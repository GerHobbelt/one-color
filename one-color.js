(function(e,t,n,r,i,s,o,u,a,f){function m(t){if(f.apply(t)==="[object Array]"){if(typeof t[0]=="string"&&typeof m[t[0]]=="function")return new m[t[0]](t.slice(1,t.length));if(t.length===4)return new m.RGB(t[0]/255,t[1]/255,t[2]/255,t[3]/255)}else{if(f.apply(t)==="[object Number]"){var n=s(t/65536),i=s((t-n*65536)/256),o=t-n*65536-i*256;return new m.RGB(n/255,i/255,o/255)}if(typeof t=="string"){var u=t.toLowerCase();c[u]&&(t="#"+c[u]),u==="transparent"&&(t="rgba(0,0,0,0)");var a=t.match(v);if(a){var l=a[1].toUpperCase(),p=h(a[8])?a[8]:r(a[8]),d=l[0]==="H",g=a[3]?100:d?360:255,y=a[5]||d?100:255,b=a[7]||d?100:255;if(h(m[l]))throw new Error("one.color."+l+" is not installed.");return new m[l](r(a[2])/g,r(a[4])/y,r(a[6])/b,p)}t.length<6&&(t=t.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,"$1$1$2$2$3$3"));var w=t.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);if(w)return new m.RGB(e(w[1],16)/255,e(w[2],16)/255,e(w[3],16)/255);var E=t.match(/^([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);if(E)return new m.RGB(e(E[4],16)/255,e(E[3],16)/255,e(E[2],16)/255,e(E[1],16)/255)}else if(typeof t=="object"&&t.isColor)return t}return!1}function g(e,t,r){function a(e,t){var n={};n[t.toLowerCase()]=new i("return this.rgb()."+t.toLowerCase()+"();"),m[t].propertyNames.forEach(function(e,r){n[e]=n[e==="black"?"k":e[0]]=new i("value","isDelta","return this."+t.toLowerCase()+"()."+e+"(value, isDelta);")});for(var r in n)n.hasOwnProperty(r)&&m[e].prototype[r]===undefined&&(m[e].prototype[r]=n[r])}m[e]=new i(t.join(","),"if (Object.prototype.toString.apply("+t[0]+") === '[object Array]') {"+t.map(function(e,n){return e+"="+t[0]+"["+n+"];"}).reverse().join("")+"}"+"if ("+t.filter(function(e){return e!=="alpha"}).map(function(e){return"isNaN("+e+")"}).join("||")+"){"+'throw new Error("['+e+']: Invalid color: ("+'+t.join('+","+')+'+")");}'+t.map(function(e){return e==="hue"?"this._hue=hue<0?hue-Math.floor(hue):hue%1":e==="alpha"?"this._alpha=(isNaN(alpha)||alpha>1)?1:(alpha<0?0:alpha);":"this._"+e+"="+e+"<0?0:("+e+">1?1:"+e+")"}).join(";")+";"),m[e].propertyNames=t;var s=m[e].prototype;["valueOf","hex","hexa","css","cssa","threejs","toNumber","kml"].forEach(function(t){s[t]=s[t]||(e==="RGB"?s.hex:new i("return this.rgb()."+t+"();"))}),s.isColor=!0,s.equals=function(r,i){h(i)&&(i=1e-10),r=r[e.toLowerCase()]();for(var s=0;s<t.length;s+=1)if(n.abs(this["_"+t[s]]-r["_"+t[s]])>i)return!1;return!0},s.toJSON=new i("return ['"+e+"', "+t.map(function(e){return"this._"+e},this).join(", ")+"];");for(var o in r)if(r.hasOwnProperty(o)){var u=o.match(/^from(.*)$/);u?m[u[1].toUpperCase()].prototype[e.toLowerCase()]=r[o]:s[o]=r[o]}s[e.toLowerCase()]=function(){return this},s.toString=new i('return "[one.color.'+e+':"+'+t.map(function(e,n){return'" '+t[n]+'="+this._'+e}).join("+")+'+"]";'),t.forEach(function(e,n){s[e]=s[e==="black"?"k":e[0]]=new i("value","isDelta","if (typeof value === 'undefined') {return this._"+e+";"+"}"+"if (isDelta) {"+"return new this.constructor("+t.map(function(t,n){return"this._"+t+(e===t?"+value":"")}).join(", ")+");"+"}"+"return new this.constructor("+t.map(function(t,n){return e===t?"value":"this._"+t}).join(", ")+");")}),l.forEach(function(t){a(e,t),a(t,e)}),l.push(e)}var l=[],c={},h=function(e){return typeof e=="undefined"},p=/\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,d=/\s*(\.\d+|\d+(?:\.\d+)?)\s*/,v=new RegExp("^(rgb|hsl|hsv)a?\\("+p.source+","+p.source+","+p.source+"(?:,"+d.source+")?"+"\\)$","i");m.installMethod=function(e,t){l.forEach(function(n){m[n].prototype[e]=t})},g("RGB",["red","green","blue","alpha"],{hex:function(){var e=(o(255*this._red)*65536+o(255*this._green)*256+o(255*this._blue)).toString(16);return"#"+"00000".substr(0,6-e.length)+e},hexa:function(){var e=o(this._alpha*255).toString(16);return"#"+"00".substr(0,2-e.length)+e+this.hex().substr(1,6)},css:function(){return"rgb("+o(255*this._red)+","+o(255*this._green)+","+o(255*this._blue)+")"},cssa:function(){return"rgba("+o(255*this._red)+","+o(255*this._green)+","+o(255*this._blue)+","+this._alpha+")"},threejs:function(){return o(255*this._red)*65536+o(255*this._green)*256+o(255*this._blue)},toNumber:function(){return o(255*this._red)*65536+o(255*this._green)*256+o(255*this._blue)},kml:function(){var e=(o(255*this._alpha)*16777216+o(255*this._blue)*65536+o(255*this._green)*256+o(255*this._red)).toString(16);return"0000000".substr(0,8-e.length)+e}}),typeof module!="undefined"?module.exports=m:typeof define=="function"&&!h(define.amd)?define([],function(){return m}):(one=window.one||{},one.color=m),typeof jQuery!="undefined"&&h(jQuery.color)&&(jQuery.color=m),g("HSV",["hue","saturation","value","alpha"],{rgb:function(){var e=this._hue,t=this._saturation,n=this._value,r=a(5,s(e*6)),i=e*6-r,o=n*(1-t),u=n*(1-i*t),f=n*(1-(1-i)*t),l,c,h;switch(r){case 0:l=n,c=f,h=o;break;case 1:l=u,c=n,h=o;break;case 2:l=o,c=n,h=f;break;case 3:l=o,c=u,h=n;break;case 4:l=f,c=o,h=n;break;case 5:l=n,c=o,h=u}return new m.RGB(l,c,h,this._alpha)},hsl:function(){var e=(2-this._saturation)*this._value,t=this._saturation*this._value,n=e<=1?e:2-e,r;return n<1e-9?r=0:r=t/n,new m.HSL(this._hue,r,e/2,this._alpha)},fromRgb:function(){var e=this._red,t=this._green,r=this._blue,i=n.max(e,t,r),s=a(e,t,r),o=i-s,u,f=i===0?0:o/i,l=i;if(o===0)u=0;else switch(i){case e:u=(t-r)/o/6+(t<r?1:0);break;case t:u=(r-e)/o/6+1/3;break;case r:u=(e-t)/o/6+2/3}return new m.HSV(u,f,l,this._alpha)}}),g("HSL",["hue","saturation","lightness","alpha"],{hsv:function(){var e=this._lightness*2,t=this._saturation*(e<=1?e:2-e),n;return e+t<1e-9?n=0:n=2*t/(e+t),new m.HSV(this._hue,n,(e+t)/2,this._alpha)},rgb:function(){return this.hsv().rgb()},fromRgb:function(){return this.hsv().hsl()}})})(parseInt,Object,Math,parseFloat,Function,Math.floor,Math.round,Object.prototype,Math.min,Object.prototype.toString)
