(function(t){function e(e){for(var a,r,n=e[0],o=e[1],d=e[2],u=0,_=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&_.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(_.length)_.shift()();return c.push.apply(c,d||[]),s()}function s(){for(var t,e=0;e<c.length;e++){for(var s=c[e],a=!0,n=1;n<s.length;n++){var o=s[n];0!==i[o]&&(a=!1)}a&&(c.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},c=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/triangle/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var d=0;d<n.length;d++)e(n[d]);var l=o;c.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"410c":function(t,e,s){},"49b6":function(t,e,s){"use strict";s("e240")},5427:function(t,e,s){"use strict";s("410c")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],r=(s("034f"),s("2877")),n={},o=Object(r["a"])(n,i,c,!1,null,null,null),d=o.exports,l=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h5",{staticClass:"text-info"},[t._v("Candle")]),s("div",{staticClass:"d-flex flex-wrap",staticStyle:{gap:"10px"}},t._l(t.codes,(function(e){return s("div",{key:e.code,staticClass:"card border-info",staticStyle:{width:"25rem"}},[s("div",{staticClass:"card-header text-warning",style:t.colors[e.base_industry_code].color},[s("strong",[t._v(t._s(e.code))])]),s("div",{staticClass:"card-body text-dark"},[s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(e.current)+" / "+t._s(e.percent)+" (%)")]),s("p",{staticClass:"card-text",class:t.candles[e.candle]},[t._v("Candle : "+t._s(e.candle))]),s("p",{staticClass:"card-text",class:t.clouds[e.cloud]},[t._v("Cloud : "+t._s(e.cloud))]),s("p",{staticClass:"card-text",class:t.priceClouds[e.price_cloud]},[t._v("Price Cloud : "+t._s(e.price_cloud))]),s("p",{staticClass:"card-text",class:t.godEyes[e.god_eyes]},[t._v("God Eyes : "+t._s(e.god_eyes))]),s("p",{staticClass:"card-text",class:t.crossesEma[e.cross_ema]},[t._v("Cross Ema : "+t._s(e.cross_ema))]),s("p",{staticClass:"card-text",class:t.volume(e.volume_target_percent)},[t._v("Sale Rate : "+t._s(e.sale_rate)+" / "+t._s(e.volume_target_percent)+" (%)")]),s("p",{staticClass:"card-text"},[t._v("Rsi : "+t._s(e.rsi))]),s("p",{staticClass:"card-text"},[t._v("History Line : "+t._s(e.history_line))]),s("div",{staticClass:"overlay"},[s("div",{attrs:{id:"candle-"+e.code}}),s("a",{staticClass:"card-link",attrs:{href:e.url,target:"_blank"}},[t._v("Chart")]),e.type==t.types.STOCK?s("button",{staticClass:"card-link btn btn-link",attrs:{id:"tooltip-info-"+e.code}},[t._v(" Information ")]):t._e(),e.type==t.types.STOCK?s("b-tooltip",{attrs:{target:"tooltip-info-"+e.code,triggers:"hover",placement:"bottomright",boundary:"document"}},[s("ul",{staticClass:"container text-info text-lg-left"},[s("li",[t._v("Roe : "+t._s(e.basic.roe))]),s("li",[t._v("EPS : "+t._s(e.basic.eps))]),s("li",[t._v("PE : "+t._s(e.basic.pe.toFixed(2)))]),s("li",[t._v("Gross Margin : "+t._s(e.basic.gross_margin))]),s("li",{staticClass:"text-warning"},[t._v("Industry Roe : "+t._s(e.basic.industry_roe))]),s("li",{staticClass:"text-warning"},[t._v("Industry PE : "+t._s(e.basic.industry_pe))]),s("li",{staticClass:"text-warning"},[t._v("RI Name : "+t._s(e.root_industry_name))])])]):t._e()],1)])])})),0)])},_=[],p=(s("d3b7"),s("159b"),s("c740"),s("ac1f"),s("1276"),s("25f0"),s("b680"),s("782e")),h=s.n(p),v="https://www.googleapis.com/drive/v3/files/",g="AIzaSyB99c-pLTTMCY0x3zhxbc4WlAgMytEPDqE",x="1TvS6BlHp2qkSmHE8a5dW2Y6HHCLAmNHv",f="1l89dUsvhsnJ0QQc8CZv6gfur7aSnNh3S",m={"BULLISH ENGULFING":"text-success","MORNING STAR":"text-warning","PIERCING LINE":"text-primary"},y={"GREEN CLOUD":"text-success","RED CLOUD":"text-danger"},C={"ON CLOUD":"text-success","IN CLOUD":"text-primary","UNDER CLOUD":"text-danger"},b={"CROSS UP":"text-success","CROSS DOWN":"text-warning"},S={"UP TREND":"text-success","DOWN TREND":"text-danger",SIDEWAYS:"text-primary"},k={STOCK:1,COIN:2},E=s("ba30"),w=s.n(E),I={name:"Candle",watch:{codes:function(t){this.codes=t}},header:{title:"Candle",subTitle:"Candle"},data:function(){return{codes:[],candles:m,clouds:y,priceClouds:C,crossesEma:b,godEyes:S,types:k,charts:[],colors:[],candleSticks:{series:[{data:[]}],chart:{type:"candlestick",height:350},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}},chartsApex:[]}},updated:function(){this.$nextTick((function(){var t=this;this.codes.forEach((function(e){var s=document.getElementById("candle-"+e.code);null!=s&&(t.chartsApex[e.code]||(t.chartsApex[e.code]=new w.a(document.getElementById("candle-"+e.code),t.charts[e.code]),t.chartsApex[e.code].render()))}))}))},mounted:function(){var t=this,e=new h.a("b704586710340d91ae1f",{cluster:"eu",encrypted:!1}),s=e.subscribe("price");s.bind("candle-price",(function(e){if(t.updateChart(e),t.codes.length>0){var s=t.codes.findIndex((function(t){return t.code===e.code}));s>-1?(t.codes[s].current=e.current,t.codes[s].percent=e.percent,t.codes[s].candle=e.candle,t.codes[s].cloud=e.cloud,t.codes[s].price_cloud=e.price_cloud,t.codes[s].god_eyes=e.god_eyes,t.codes[s].sale_rate=e.sale_rate,t.codes[s].rsi=e.rsi,t.codes[s].history_line=e.history_line,t.codes[s].price_cloud=e.price_cloud,t.codes[s].cross_ema=e.cross_ema,t.codes[s].base_industry_code=e.base_industry_code,t.codes[s].volume_target_percent=e.volume_target_percent,t.chartsApex[e.code].updateSeries(t.charts[e.code].series)):t.codes.push(e)}else t.codes.push(e);-1===t.colors.findIndex((function(t){return t===e.base_industry_code}))&&(t.colors[e.base_industry_code]={color:t.randomColor()})}))},methods:{countDecimals:function(t){return Math.floor(t)===t?0:t.toString().split(".")[1].length||0},resetCandleSticks:function(){this.candleSticks.series[0].data=[]},updateChart:function(t){this.resetCandleSticks();var e=t.period_time[0],s=this.countDecimals(t.current);s=s>1?s:2;for(var a=0;a<t.period.length;a++)this.candleSticks.series[0].data.push({x:1e3*e,y:[t.period_open[a].toFixed(s),t.period_high[a].toFixed(s),t.period_low[a].toFixed(s),t.period[a].toFixed(s)]}),e-=86400;this.charts[t.code]=this.candleSticks},randomColor:function(){for(var t="0123456789ABCDEF",e="#",s=0;s<6;s++)e+=t[Math.floor(16*Math.random())];return{"background-color":e}},volume:function(t){return t>100?"text-success":t>50?"text-warning":"text-danger"}}},D=I,F=(s("89ed"),Object(r["a"])(D,u,_,!1,null,null,null)),O=F.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h5",[t._v("Ema")]),s("div",{staticClass:"d-flex flex-wrap",staticStyle:{gap:"10px"}},t._l(t.codes,(function(e){return s("div",{key:e.code,staticClass:"card",staticStyle:{width:"25rem"}},[s("div",{staticClass:"card-header text-info"},[t._v(t._s(e.code))]),s("div",{staticClass:"card-body text-dark"},[s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(e.current)+" / "+t._s(e.percent)+" (%)")]),s("p",{staticClass:"card-text",class:t.candles[e.candle]},[t._v("Buy With Price : "+t._s(e.price_ema))]),s("p",{staticClass:"card-text",class:t.candles[e.candle]},[t._v("Candle : "+t._s(e.candle))]),s("p",{staticClass:"card-text",class:t.clouds[e.cloud]},[t._v("Cloud : "+t._s(e.cloud))]),s("p",{staticClass:"card-text",class:t.priceClouds[e.price_cloud]},[t._v("Price Cloud : "+t._s(e.price_cloud))]),s("p",{staticClass:"card-text",class:t.godEyes[e.god_eyes]},[t._v("God Eyes : "+t._s(e.god_eyes))]),s("p",{staticClass:"card-text",class:t.volume(e.volume_target_percent)},[t._v("Sale Rate : "+t._s(e.sale_rate)+" / "+t._s(e.volume_target_percent)+" (%)")]),s("p",{staticClass:"card-text"},[t._v("Rsi : "+t._s(e.rsi))]),s("p",{staticClass:"card-text"},[t._v("History Line : "+t._s(e.history_line))]),s("div",{staticClass:"overlay"},[s("div",{attrs:{id:"candle-"+e.code}}),s("a",{staticClass:"card-link",attrs:{href:e.url,target:"_blank"}},[t._v("Chart")]),e.type==t.types.STOCK?s("button",{staticClass:"card-link btn btn-link",attrs:{id:"tooltip-info-"+e.code}},[t._v(" Information ")]):t._e(),e.type==t.types.STOCK?s("b-tooltip",{attrs:{target:"tooltip-info-"+e.code,triggers:"hover",placement:"bottomright",boundary:"document"}},[s("ul",{staticClass:"container text-info text-lg-left"},[s("li",[t._v("Roe : "+t._s(e.basic.roe))]),s("li",[t._v("EPS : "+t._s(e.basic.eps))]),s("li",[t._v("PE : "+t._s(e.basic.pe.toFixed(2)))]),s("li",[t._v("Gross Margin : "+t._s(e.basic.gross_margin))]),s("li",{staticClass:"text-warning"},[t._v("Industry Roe : "+t._s(e.basic.industry_roe))]),s("li",{staticClass:"text-warning"},[t._v("Industry PE : "+t._s(e.basic.industry_pe))]),s("li",{staticClass:"text-warning"},[t._v("RI Name : "+t._s(e.root_industry_name))])])]):t._e()],1)])])})),0)])},T=[],R={name:"EmaIndex",watch:{codes:function(t){this.codes=t}},header:{title:"Candle",subTitle:"Candle"},data:function(){return{codes:[],candles:m,clouds:y,priceClouds:C,godEyes:S,types:k,charts:[],candleSticks:{series:[{data:[]}],chart:{type:"candlestick",height:350},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}},chartsApex:[]}},updated:function(){this.$nextTick((function(){var t=this;this.codes.forEach((function(e){var s=document.getElementById("candle-"+e.code);null!=s&&(t.chartsApex[e.code]||(t.chartsApex[e.code]=new w.a(document.getElementById("candle-"+e.code),t.charts[e.code]),t.chartsApex[e.code].render()))}))}))},mounted:function(){var t=this,e=new h.a("b704586710340d91ae1f",{cluster:"eu",encrypted:!1}),s=e.subscribe("price");s.bind("ema-price",(function(e){if(t.updateChart(e),t.codes.length>0){var s=t.codes.findIndex((function(t){return t.code===e.code}));s>-1?(t.codes[s].current=e.current,t.codes[s].percent=e.percent,t.codes[s].candle=e.candle,t.codes[s].cloud=e.cloud,t.codes[s].sale_rate=e.sale_rate,t.codes[s].rsi=e.rsi,t.codes[s].history_line=e.history_line,t.codes[s].price_cloud=e.price_cloud,t.codes[s].god_eyes=e.god_eyes,t.codes[s].volume_target_percent=e.volume_target_percent,t.chartsApex[e.code].updateSeries(t.charts[e.code].series)):t.codes.push(e)}else t.codes.push(e)}))},methods:{countDecimals:function(t){return Math.floor(t)===t?0:t.toString().split(".")[1].length||0},resetCandleSticks:function(){this.candleSticks.series[0].data=[]},updateChart:function(t){this.resetCandleSticks();var e=t.period_time[0],s=this.countDecimals(t.current);s=s>1?s:2;for(var a=0;a<t.period.length;a++)this.candleSticks.series[0].data.push({x:1e3*e,y:[t.period_open[a].toFixed(s),t.period_high[a].toFixed(s),t.period_low[a].toFixed(s),t.period[a].toFixed(s)]}),e-=86400;this.charts[t.code]=this.candleSticks},volume:function(t){return t>100?"text-success":t>50?"text-warning":"text-danger"}}},A=R,N=(s("49b6"),Object(r["a"])(A,P,T,!1,null,null,null)),L=N.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h5",[t._v("Triangle")]),s("div",{staticClass:"d-flex flex-wrap",staticStyle:{gap:"10px"}},t._l(t.codes,(function(e){return s("div",{key:e.code,staticClass:"card",staticStyle:{width:"25rem"}},[s("div",{staticClass:"card-header text-info"},[t._v(t._s(e.code))]),s("div",{staticClass:"card-body text-dark"},[s("h5",{staticClass:"card-title"},[t._v(t._s(e.code))]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(e.current)+" / "+t._s(e.percent)+" (%)")]),s("p",{staticClass:"card-text"},[t._v("Buy With : "+t._s(e.buy_right))]),s("p",{staticClass:"card-text",class:t.candles[e.candle]},[t._v("Candle : "+t._s(e.candle))]),s("p",{staticClass:"card-text",class:t.clouds[e.cloud]},[t._v("Cloud : "+t._s(e.cloud))]),s("p",{staticClass:"card-text",class:t.priceClouds[e.price_cloud]},[t._v("Price Cloud : "+t._s(e.price_cloud))]),s("p",{staticClass:"card-text",class:t.crossesEma[e.cross_ema]},[t._v("Cross Ema : "+t._s(e.cross_ema))]),s("p",{staticClass:"card-text",class:t.godEyes[e.god_eyes]},[t._v("God Eyes : "+t._s(e.god_eyes))]),s("p",{staticClass:"card-text",class:t.volume(e.volume_target_percent)},[t._v("Sale Rate : "+t._s(e.sale_rate)+" / "+t._s(e.volume_target_percent)+" (%)")]),s("p",{staticClass:"card-text"},[t._v("History Line : "+t._s(e.history_line))]),s("div",{staticClass:"overlay"},[s("div",{attrs:{id:"candle-"+e.code}}),s("a",{staticClass:"card-link",attrs:{href:e.url,target:"_blank"}},[t._v("Chart")]),e.type==t.types.STOCK?s("button",{staticClass:"card-link btn btn-link",attrs:{id:"tooltip-info-"+e.code}},[t._v(" Information ")]):t._e(),e.type==t.types.STOCK?s("b-tooltip",{attrs:{target:"tooltip-info-"+e.code,triggers:"hover",placement:"bottomright",boundary:"document"}},[s("ul",{staticClass:"container text-info text-lg-left"},[s("li",[t._v("Roe : "+t._s(e.basic.roe))]),s("li",[t._v("EPS : "+t._s(e.basic.eps))]),s("li",[t._v("PE : "+t._s(e.basic.pe.toFixed(2)))]),s("li",[t._v("Gross Margin : "+t._s(e.basic.gross_margin))]),s("li",{staticClass:"text-warning"},[t._v("Industry Roe : "+t._s(e.basic.industry_roe))]),s("li",{staticClass:"text-warning"},[t._v("Industry PE : "+t._s(e.basic.industry_pe))]),s("li",{staticClass:"text-warning"},[t._v("RI Name : "+t._s(e.root_industry_name))])])]):t._e()],1)])])})),0)])},j=[],U={name:"TriangleIndex",watch:{codes:function(t){this.codes=t}},header:{title:"Candle",subTitle:"Candle"},data:function(){return{codes:[],candles:m,clouds:y,priceClouds:C,crossesEma:b,godEyes:S,types:k,charts:[],candleSticks:{series:[{data:[],name:"candle",type:"candlestick"},{name:"maxLine",type:"line",data:[]},{name:"minLine",type:"line",data:[]}],chart:{type:"line",height:350},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}},stroke:{width:[1,2,2]}},chartsApex:[]}},updated:function(){this.$nextTick((function(){var t=this;this.codes.forEach((function(e){var s=document.getElementById("candle-"+e.code);null!=s&&(t.chartsApex[e.code]||(t.chartsApex[e.code]=new w.a(document.getElementById("candle-"+e.code),t.charts[e.code]),t.chartsApex[e.code].render()))}))}))},mounted:function(){var t=this,e=new h.a("b704586710340d91ae1f",{cluster:"eu",encrypted:!1}),s=e.subscribe("price");s.bind("triangle-price",(function(e){if(t.updateChart(e),t.codes.length>0){var s=t.codes.findIndex((function(t){return t.code===e.code}));s>-1?(t.codes[s].percent=e.percent,t.codes[s].current=e.current,t.codes[s].candle=e.candle,t.codes[s].cloud=e.cloud,t.codes[s].sale_rate=e.sale_rate,t.codes[s].rsi=e.rsi,t.codes[s].history_line=e.history_line,t.codes[s].price_cloud=e.price_cloud,t.codes[s].cross_ema=e.cross_ema,t.codes[s].god_eyes=e.god_eyes,t.codes[s].volume_target_percent=e.volume_target_percent,t.chartsApex[e.code].updateSeries(t.charts[e.code].series)):t.codes.push(e)}else t.codes.push(e)}))},methods:{countDecimals:function(t){return Math.floor(t)===t?0:t.toString().split(".")[1].length||0},resetCandleSticks:function(){this.candleSticks.series[0].data=[],this.candleSticks.series[1].data=[],this.candleSticks.series[2].data=[]},updateChart:function(t){this.resetCandleSticks();var e=1e3*t.period_time[0],s=e,a=this.countDecimals(t.current);a=a>1?a:2;for(var i=0;i<t.period.length;i++)i===t.triangle.line_max[0][0]&&this.candleSticks.series[1].data.push({x:e,y:t.triangle.line_max[0][1].toFixed(a)}),i===t.triangle.line_max[1][0]&&(this.candleSticks.series[1].data.push({x:e,y:t.triangle.line_max[1][1].toFixed(a)}),this.candleSticks.series[1].data.push({x:s,y:t.buy_right.toFixed(a)})),i===t.triangle.line_min[0][0]&&this.candleSticks.series[2].data.push({x:e,y:t.triangle.line_min[0][1].toFixed(a)}),i===t.triangle.line_min[1][0]&&(this.candleSticks.series[2].data.push({x:e,y:t.triangle.line_min[1][1].toFixed(a)}),this.candleSticks.series[2].data.push({x:s,y:t.sell_left.toFixed(a)})),this.candleSticks.series[0].data.push({x:e,y:[t.period_open[i].toFixed(a),t.period_high[i].toFixed(a),t.period_low[i].toFixed(a),t.period[i].toFixed(a)]}),e-=86400;this.charts[t.code]=this.candleSticks},volume:function(t){return t>100?"text-success":t>50?"text-warning":"text-danger"}}},$=U,B=(s("b9d4"),Object(r["a"])($,M,j,!1,null,null,null)),G=B.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.data.code?s("div",{key:t.code,staticClass:"card"},[s("div",{staticClass:"card-header text-info"},[t._v(t._s(t.code))]),s("div",{staticClass:"card-body text-dark"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.code))]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.data.current)+" / "+t._s(t.data.percent)+" (%)")]),s("p",{staticClass:"card-text"},[t._v("Buy With : "+t._s(t.data.buy_right))]),s("p",{staticClass:"card-text",class:t.candles[t.data.candle]},[t._v("Candle : "+t._s(t.data.candle))]),s("p",{staticClass:"card-text",class:t.clouds[t.data.cloud]},[t._v("Cloud : "+t._s(t.data.cloud))]),s("p",{staticClass:"card-text",class:t.priceClouds[t.data.price_cloud]},[t._v("Price Cloud : "+t._s(t.data.price_cloud))]),s("p",{staticClass:"card-text",class:t.crossesEma[t.data.cross_ema]},[t._v("Cross Ema : "+t._s(t.data.cross_ema))]),s("p",{staticClass:"card-text",class:t.godEyes[t.data.god_eyes]},[t._v("God Eyes : "+t._s(t.data.god_eyes))]),s("p",{staticClass:"card-text",class:t.volume(t.data.volume_target_percent)},[t._v("Sale Rate : "+t._s(t.data.sale_rate)+" / "+t._s(t.data.volume_target_percent)+" (%)")]),s("p",{staticClass:"card-text"},[t._v("History Line : "+t._s(t.data.history_line))]),s("div",{staticClass:"overlay"},[s("div",{attrs:{id:"candle-"+t.code}}),s("a",{staticClass:"card-link",attrs:{href:t.data.url,target:"_blank"}},[t._v("Chart")]),t.data.type==t.types.STOCK?s("button",{staticClass:"card-link btn btn-link",attrs:{id:"tooltip-info-"+t.code}},[t._v(" Information ")]):t._e(),t.data.type==t.types.STOCK?s("b-tooltip",{attrs:{target:"tooltip-info-"+t.code,triggers:"hover",placement:"bottomright",boundary:"document"}},[s("ul",{staticClass:"container text-info text-lg-left"},[s("li",[t._v("Roe : "+t._s(t.data.basic.roe))]),s("li",[t._v("EPS : "+t._s(t.data.basic.eps))]),s("li",[t._v("PE : "+t._s(t.data.basic.pe.toFixed(2)))]),s("li",[t._v("Gross Margin : "+t._s(t.data.basic.gross_margin))]),s("li",{staticClass:"text-warning"},[t._v("Industry Roe : "+t._s(t.data.basic.industry_roe))]),s("li",{staticClass:"text-warning"},[t._v("Industry PE : "+t._s(t.data.basic.industry_pe))]),s("li",{staticClass:"text-warning"},[t._v("RI Name : "+t._s(t.data.root_industry_name))])])]):t._e()],1)])]):t._e()])},H=[],W=s("bc3a"),q=s.n(W),J={name:"CodeIndex",header:{title:"Code Index",subTitle:"Code"},data:function(){return{id:this.$route.query.id,code:this.$route.query.c,data:{},candles:m,clouds:y,priceClouds:C,crossesEma:b,godEyes:S,types:k,googleDriveUrl:v,googleDriveApiKey:g,chart:[],candleSticks:{series:[{name:"candle",type:"candlestick",data:[]},{name:"maxLine",type:"line",data:[]},{name:"minLine",type:"line",data:[]}],chart:{type:"line",height:350},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}},stroke:{width:[1,2,2]}}}},updated:function(){new w.a(document.getElementById("candle-"+this.code),this.chart).render()},mounted:function(){var t=this,e=this.googleDriveUrl+this.id+"?key="+this.googleDriveApiKey+"&alt=media";q.a.get(e).then((function(e){t.data=e.data,t.updateChart(t.data)})).catch((function(t){console.log(t)}))},methods:{countDecimals:function(t){return Math.floor(t)===t?0:t.toString().split(".")[1].length||0},resetCandleSticks:function(){this.candleSticks.series[0].data=[],this.candleSticks.series[1].data=[],this.candleSticks.series[2].data=[]},updateChart:function(t){this.resetCandleSticks();var e=1e3*t.period_time[0],s=e,a=this.countDecimals(t.current);a=a>1?a:2;for(var i=0;i<t.period.length;i++)i===t.triangle.line_max[0][0]&&this.candleSticks.series[1].data.push({x:e,y:t.triangle.line_max[0][1].toFixed(a)}),i===t.triangle.line_max[1][0]&&(this.candleSticks.series[1].data.push({x:e,y:t.triangle.line_max[1][1].toFixed(a)}),this.candleSticks.series[1].data.push({x:s,y:t.triangle.line_max[2][1].toFixed(a)})),i===t.triangle.line_min[0][0]&&this.candleSticks.series[2].data.push({x:e,y:t.triangle.line_min[0][1].toFixed(a)}),i===t.triangle.line_min[1][0]&&(this.candleSticks.series[2].data.push({x:e,y:t.triangle.line_min[1][1].toFixed(a)}),this.candleSticks.series[2].data.push({x:s,y:t.triangle.line_min[2][1].toFixed(a)})),this.candleSticks.series[0].data.push({x:e,y:[t.period_open[i].toFixed(a),t.period_high[i].toFixed(a),t.period_low[i].toFixed(a),t.period[i].toFixed(a)]}),e-=86400;this.chart=this.candleSticks},volume:function(t){return t>100?"text-success":t>50?"text-warning":"text-danger"}}},Y=J,z=(s("5427"),Object(r["a"])(Y,K,H,!1,null,null,null)),Q=z.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],X={mounted:function(){var t=this.$route;console.log(t)}},tt=X,et=Object(r["a"])(tt,Z,V,!1,null,null,null),st=et.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Summary")]),s("table",{staticClass:"table table-striped"},[t._m(0),s("tbody",t._l(t.data,(function(e,a){return s("tr",{key:e[a]},[s("td",[s("a",{attrs:{href:t.getUrl(e),target:"_blank"}},[t._v(t._s(e.code))])]),s("td",[t._v(t._s(e.time))]),s("td",[t._v(t._s(e.current))]),s("td",[t._v(t._s(e.close))]),s("td",[t._v(t._s(e.target.toFixed(t.countDecimals(e.close))))]),s("td",{style:e.style},[t._v(t._s(((e.current-e.close)/e.close*100).toFixed(2)))]),s("td",[t._v(t._s(e.wave))]),s("td",[t._v(t._s(e.is_crossing))]),s("td",[t._v(t._s(e.candle))]),s("td",[t._v(t._s(e.s_trend))]),s("td",[t._v(t._s(e.scores))]),s("td",[t._v(t._s(e.sale_time))]),s("td",[t._v(t._s(e.profit.toFixed(2)))])])})),0)])])},it=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Code")]),s("th",[t._v("Buy Date")]),s("th",[t._v("Current")]),s("th",[t._v("Buy Price")]),s("th",[t._v("Target")]),s("th",[t._v("Percentage (%)")]),s("th",[t._v("Wave")]),s("th",[t._v("Crossing Ema")]),s("th",[t._v("Candle")]),s("th",[t._v("Trend")]),s("th",[t._v("Scores ")]),s("th",[t._v("Sale Date")]),s("th",[t._v("Profit (%)")])])])}],ct=(s("a15b"),s("7db0"),{name:"SummaryIndex",header:{title:"Summary Index",subTitle:"Summary"},watch:{serviceDataCoin:function(t){var e=this;t.forEach((function(t){var s=parseFloat(t.data.k.c);e.data[t.originalIndex].current=s,s>e.data[t.originalIndex].close?e.data[t.originalIndex].style={color:"green"}:s<e.data[t.originalIndex].close?e.data[t.originalIndex].style={color:"red"}:e.data[t.originalIndex].style={color:"yellow"}}))},serviceDataStock:function(t){var e=this;t.forEach((function(t){var s=parseFloat(t.data.Close);e.data[t.originalIndex].current=s,s>e.data[t.originalIndex].close?e.data[t.originalIndex].style={color:"green"}:s<e.data[t.originalIndex].close?e.data[t.originalIndex].style={color:"red"}:e.data[t.originalIndex].style={color:"yellow"}}))}},data:function(){return{data:[],type:this.$route.query.t,fileId:x,googleDriveUrl:v,googleDriveApiKey:g,serviceDataCoin:[],serviceDataStock:[]}},created:function(){var t=this;this.fileId="stock"===this.type?x:f;var e=this.googleDriveUrl+this.fileId+"?key="+this.googleDriveApiKey+"&alt=media";q.a.get(e).then((function(e){t.data=e.data,t.getServiceData()})).catch((function(t){console.log(t)}))},methods:{getUrl:function(t){var e="https://tradingview.com/chart";return e+"/?symbol="+t["exchange"]+":"+t["code"]},countDecimals:function(t){return Math.floor(t)===t?0:t.toString().split(".")[1].length||0},getServiceData:function(){"coin"===this.type?this.getServiceDataForCoin():this.getServiceDataForStock()},getServiceDataForCoin:function(){var t=this,e=function(e){var s=t.data[e]["code"],a=new WebSocket("wss://stream.binance.com:9443/ws/"+s.toLowerCase()+"@kline_1h");a.onmessage=function(a){var i=JSON.parse(a.data);t.serviceDataCoin.push({symbol:s,originalIndex:e,data:i})}};for(var s in this.data)e(s)},getServiceDataForStock:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(0===e.length)for(var s in this.data){var a=this.data[s]["code"];-1===e.indexOf(a)&&e.push(a)}var i=e.join(",");q.a.get("https://cryptic-ridge-06951.herokuapp.com/call?codes="+i).then((function(s){var a=s.data;if("error"!==a.status){var i=function(e){var s=t.data[e]["code"],i=a.find((function(t){return t.code===s}));t.serviceDataStock.push({symbol:s,originalIndex:e,data:i.price[0]})};for(var c in t.data)i(c);t.getServiceDataForStock(e)}})).catch((function(t){console.log(t)}))}}}),rt=ct,nt=Object(r["a"])(rt,at,it,!1,null,null,null),ot=nt.exports;a["default"].use(l["a"]);var dt=[{path:"/",name:"triangle_index",component:G},{path:"/ema",name:"ema_index",component:L},{path:"/candle",name:"candle_index",component:O},{path:"/code",name:"code_index",component:Q},{path:"/summary",name:"summary_index",component:ot},{path:"*",name:"not_found",component:st}],lt=new l["a"]({mode:"history",base:"/triangle/",routes:dt}),ut=lt,_t=s("5f5b"),pt=s("b1e0");s("f9e3"),s("2dd8");a["default"].config.productionTip=!1,a["default"].use(_t["a"]),a["default"].use(pt["a"]),new a["default"]({router:ut,render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,s){},"89ed":function(t,e,s){"use strict";s("fff7")},b9d4:function(t,e,s){"use strict";s("c210")},c210:function(t,e,s){},e240:function(t,e,s){},fff7:function(t,e,s){}});
//# sourceMappingURL=app.a9632100.js.map