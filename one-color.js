(function(a,b,c,d,e,f){function m(c){if(Object.prototype.toString.apply(c)==="[object Array]")return c.length===4?new m.RGB(c[0]/255,c[1]/255,c[2]/255,c[3]/255):new m[c[0]](c.slice(1,c.length));if(typeof c=="string"){var d=c.toLowerCase();h[d]&&(c="#"+h[d]);var e=c.match(l);if(e){var f=e[1].toUpperCase(),g=i(e[8])?e[8]:a(e[8]),j=f[0]==="H",k=e[3]?100:j?360:255,n=e[5]||j?100:255,o=e[7]||j?100:255;if(i(m[f]))throw new Error("one.color."+f+" is not installed.");return new m[f](a(e[2])/k,a(e[4])/n,a(e[6])/o,g)}c.length<6&&(c=c.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,"$1$1$2$2$3$3"));var p=c.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);if(p)return new m.RGB(b(p[1],16)/255,b(p[2],16)/255,b(p[3],16)/255)}else{if(typeof c=="object"&&c.isColor)return c;if(!isNaN(c))return new m.RGB((c&255)/255,((c&65280)>>8)/255,((c&16711680)>>16)/255)}return!1}function n(a,b,e){function k(a,b){var d={};d[b.toLowerCase()]=new c("return this.rgb()."+b.toLowerCase()+"();"),m[b].propertyNames.forEach(function(a,e){d[a]=new c("value","isDelta","return this."+b.toLowerCase()+"()."+a+"(value, isDelta);")});for(var e in d)d.hasOwnProperty(e)&&m[a].prototype[e]===undefined&&(m[a].prototype[e]=d[e])}m[a]=new c(b.join(","),"if (Object.prototype.toString.apply("+b[0]+") === '[object Array]') {"+b.map(function(a,c){return a+"="+b[0]+"["+c+"];"}).reverse().join("")+"}"+"if ("+b.filter(function(a){return a!=="alpha"}).map(function(a){return"isNaN("+a+")"}).join("||")+"){"+'throw new Error("['+a+']: Invalid color: ("+'+b.join('+","+')+'+")");}'+b.map(function(a){return a==="hue"?"this._hue=hue<0?hue-Math.floor(hue):hue%1":a==="alpha"?"this._alpha=(isNaN(alpha)||alpha>1)?1:(alpha<0?0:alpha);":"this._"+a+"="+a+"<0?0:("+a+">1?1:"+a+")"}).join(";")+";"),m[a].propertyNames=b;var f=m[a].prototype;["valueOf","hex","css","cssa"].forEach(function(b){f[b]=f[b]||(a==="RGB"?f.hex:new c("return this.rgb()."+b+"();"))}),f.isColor=!0,f.equals=function(c,e){i(e)&&(e=1e-10),c=c[a.toLowerCase()]();for(var f=0;f<b.length;f+=1)if(d.abs(this["_"+b[f]]-c["_"+b[f]])>e)return!1;return!0},f.toJSON=new c("return ['"+a+"', "+b.map(function(a){return"this._"+a},this).join(", ")+"];");for(var h in e)if(e.hasOwnProperty(h)){var j=h.match(/^from(.*)$/);j?m[j[1].toUpperCase()].prototype[a.toLowerCase()]=e[h]:f[h]=e[h]}f[a.toLowerCase()]=function(){return this},f.toString=new c('return "[one.color.'+a+':"+'+b.map(function(a,c){return'" '+b[c]+'="+this._'+a}).join("+")+'+"]";'),b.forEach(function(a,d){f[a]=new c("value","isDelta","if (typeof value === 'undefined') {return this._"+a+";"+"}"+"if (isDelta) {"+"return new this.constructor("+b.map(function(b,c){return"this._"+b+(a===b?"+value":"")}).join(", ")+");"+"}"+"return new this.constructor("+b.map(function(b,c){return a===b?"value":"this._"+b}).join(", ")+");")}),g.forEach(function(b){k(a,b),k(b,a)}),g.push(a)}var g=[],h={},i=function(a){return typeof a=="undefined"},j=/\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,k=/\s*(\.\d+|\d+(?:\.\d+)?)\s*/,l=new RegExp("^(rgb|hsl|hsv)a?\\("+j.source+","+j.source+","+j.source+"(?:,"+k.source+")?"+"\\)$","i");m.installMethod=function(a,b){g.forEach(function(c){m[c].prototype[a]=b})},n("RGB",["red","green","blue","alpha"],{hex:function(){var a=(e(255*this._red)*65536+e(255*this._green)*256+e(255*this._blue)).toString(16);return"#"+"00000".substr(0,6-a.length)+a},css:function(){return"rgb("+e(255*this._red)+","+e(255*this._green)+","+e(255*this._blue)+")"},cssa:function(){return"rgba("+e(255*this._red)+","+e(255*this._green)+","+e(255*this._blue)+","+this._alpha+")"}}),typeof module!="undefined"?module.exports=m:typeof define=="function"&&!i(define.amd)?define([],function(){return m}):typeof jQuery!="undefined"&&i(jQuery.color)?jQuery.color=m:(one=window.one||{},one.color=m),n("HSV",["hue","saturation","value","alpha"],{rgb:function(){var a=this._hue,b=this._saturation,c=this._value,e=f(5,d.floor(a*6)),g=a*6-e,h=c*(1-b),i=c*(1-g*b),j=c*(1-(1-g)*b),k,l,n;switch(e){case 0:k=c,l=j,n=h;break;case 1:k=i,l=c,n=h;break;case 2:k=h,l=c,n=j;break;case 3:k=h,l=i,n=c;break;case 4:k=j,l=h,n=c;break;case 5:k=c,l=h,n=i}return new m.RGB(k,l,n,this._alpha)},hsl:function(){var a=(2-this._saturation)*this._value,b=this._saturation*this._value,c=a<=1?a:2-a,d;return c<1e-9?d=0:d=b/c,new m.HSL(this._hue,d,a/2,this._alpha)},fromRgb:function(){var a=this._red,b=this._green,c=this._blue,e=d.max(a,b,c),g=f(a,b,c),h=e-g,i,j=e===0?0:h/e,k=e;if(h===0)i=0;else switch(e){case a:i=(b-c)/h/6+(b<c?1:0);break;case b:i=(c-a)/h/6+1/3;break;case c:i=(a-b)/h/6+2/3}return new m.HSV(i,j,k,this._alpha)}}),n("HSL",["hue","saturation","lightness","alpha"],{hsv:function(){var a=this._lightness*2,b=this._saturation*(a<=1?a:2-a),c;return a+b<1e-9?c=0:c=2*b/(a+b),new m.HSV(this._hue,c,(a+b)/2,this._alpha)},rgb:function(){return this.hsv().rgb()},fromRgb:function(){return this.hsv().hsl()}})})(parseFloat,parseInt,Function,Math,Math.round,Math.min)
