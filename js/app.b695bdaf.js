(function(e){function t(t){for(var a,r,n=t[0],d=t[1],o=t[2],u=0,_=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&_.push(i[r][0]),i[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);l&&l(t);while(_.length)_.shift()();return c.push.apply(c,o||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,n=1;n<s.length;n++){var d=s[n];0!==i[d]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},i={app:0},c=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/triangle/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=t,n=n.slice();for(var o=0;o<n.length;o++)t(n[o]);var l=d;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"410c":function(e,t,s){},"49b6":function(e,t,s){"use strict";s("e240")},5427:function(e,t,s){"use strict";s("410c")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},c=[],r=(s("034f"),s("2877")),n={},d=Object(r["a"])(n,i,c,!1,null,null,null),o=d.exports,l=s("8c4f"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h5",{staticClass:"text-info"},[e._v("Candle")]),s("div",{staticClass:"d-flex flex-wrap",staticStyle:{gap:"10px"}},e._l(e.codes,(function(t){return s("div",{key:t.code,staticClass:"card border-info",staticStyle:{width:"25rem"}},[s("div",{staticClass:"card-header text-warning",style:e.colors[t.base_industry_code].color},[s("strong",[e._v(e._s(t.code))])]),s("div",{staticClass:"card-body text-dark"},[s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v(e._s(t.current)+" / "+e._s(t.percent)+" (%)")]),s("p",{staticClass:"card-text",class:e.candles[t.candle]},[e._v("Candle : "+e._s(t.candle))]),s("p",{staticClass:"card-text",class:e.clouds[t.cloud]},[e._v("Cloud : "+e._s(t.cloud))]),s("p",{staticClass:"card-text",class:e.priceClouds[t.price_cloud]},[e._v("Price Cloud : "+e._s(t.price_cloud))]),s("p",{staticClass:"card-text",class:e.godEyes[t.god_eyes]},[e._v("God Eyes : "+e._s(t.god_eyes))]),s("p",{staticClass:"card-text",class:e.crossesEma[t.cross_ema]},[e._v("Cross Ema : "+e._s(t.cross_ema))]),s("p",{staticClass:"card-text",class:e.volume(t.volume_target_percent)},[e._v("Sale Rate : "+e._s(t.sale_rate)+" / "+e._s(t.volume_target_percent)+" (%)")]),s("p",{staticClass:"card-text"},[e._v("Rsi : "+e._s(t.rsi))]),s("p",{staticClass:"card-text"},[e._v("History Line : "+e._s(t.history_line))]),s("div",{staticClass:"overlay"},[s("div",{attrs:{id:"candle-"+t.code}}),s("a",{staticClass:"card-link",attrs:{href:t.url,target:"_blank"}},[e._v("Chart")]),t.type==e.types.STOCK?s("button",{staticClass:"card-link btn btn-link",attrs:{id:"tooltip-info-"+t.code}},[e._v(" Information ")]):e._e(),t.type==e.types.STOCK?s("b-tooltip",{attrs:{target:"tooltip-info-"+t.code,triggers:"hover",placement:"bottomright",boundary:"document"}},[s("ul",{staticClass:"container text-info text-lg-left"},[s("li",[e._v("Roe : "+e._s(t.basic.roe))]),s("li",[e._v("EPS : "+e._s(t.basic.eps))]),s("li",[e._v("PE : "+e._s(t.basic.pe.toFixed(2)))]),s("li",[e._v("Gross Margin : "+e._s(t.basic.gross_margin))]),s("li",{staticClass:"text-warning"},[e._v("Industry Roe : "+e._s(t.basic.industry_roe))]),s("li",{staticClass:"text-warning"},[e._v("Industry PE : "+e._s(t.basic.industry_pe))]),s("li",{staticClass:"text-warning"},[e._v("RI Name : "+e._s(t.root_industry_name))])])]):e._e()],1)])])})),0)])},_=[],p=(s("d3b7"),s("159b"),s("c740"),s("ac1f"),s("1276"),s("25f0"),s("b680"),s("782e")),h=s.n(p),v="https://www.googleapis.com/drive/v3/files/",x="AIzaSyB99c-pLTTMCY0x3zhxbc4WlAgMytEPDqE",m="1TvS6BlHp2qkSmHE8a5dW2Y6HHCLAmNHv",f="1l89dUsvhsnJ0QQc8CZv6gfur7aSnNh3S",y={"BULLISH ENGULFING":"text-success","MORNING STAR":"text-warning","PIERCING LINE":"text-primary"},g={"GREEN CLOUD":"text-success","RED CLOUD":"text-danger"},C={"ON CLOUD":"text-success","IN CLOUD":"text-primary","UNDER CLOUD":"text-danger"},b={"CROSS UP":"text-success","CROSS DOWN":"text-warning"},S={"UP TREND":"text-success","DOWN TREND":"text-danger",SIDEWAYS:"text-primary"},k={STOCK:1,COIN:2},E=s("ba30"),w=s.n(E),I={name:"Candle",watch:{codes:function(e){this.codes=e}},header:{title:"Candle",subTitle:"Candle"},data:function(){return{codes:[],candles:y,clouds:g,priceClouds:C,crossesEma:b,godEyes:S,types:k,charts:[],colors:[],candleSticks:{series:[{data:[]}],chart:{type:"candlestick",height:350},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}},chartsApex:[]}},updated:function(){this.$nextTick((function(){var e=this;this.codes.forEach((function(t){var s=document.getElementById("candle-"+t.code);null!=s&&(e.chartsApex[t.code]||(e.chartsApex[t.code]=new w.a(document.getElementById("candle-"+t.code),e.charts[t.code]),e.chartsApex[t.code].render()))}))}))},mounted:function(){var e=this,t=new h.a("b704586710340d91ae1f",{cluster:"eu",encrypted:!1}),s=t.subscribe("price");s.bind("candle-price",(function(t){if(e.updateChart(t),e.codes.length>0){var s=e.codes.findIndex((function(e){return e.code===t.code}));s>-1?(e.codes[s].current=t.current,e.codes[s].percent=t.percent,e.codes[s].candle=t.candle,e.codes[s].cloud=t.cloud,e.codes[s].price_cloud=t.price_cloud,e.codes[s].god_eyes=t.god_eyes,e.codes[s].sale_rate=t.sale_rate,e.codes[s].rsi=t.rsi,e.codes[s].history_line=t.history_line,e.codes[s].price_cloud=t.price_cloud,e.codes[s].cross_ema=t.cross_ema,e.codes[s].base_industry_code=t.base_industry_code,e.codes[s].volume_target_percent=t.volume_target_percent,e.chartsApex[t.code].updateSeries(e.charts[t.code].series)):e.codes.push(t)}else e.codes.push(t);-1===e.colors.findIndex((function(e){return e===t.base_industry_code}))&&(e.colors[t.base_industry_code]={color:e.randomColor()})}))},methods:{countDecimals:function(e){return Math.floor(e)===e?0:e.toString().split(".")[1].length||0},resetCandleSticks:function(){this.candleSticks.series[0].data=[]},updateChart:function(e){this.resetCandleSticks();var t=e.period_time[0],s=this.countDecimals(e.current);s=s>1?s:2;for(var a=0;a<e.period.length;a++)this.candleSticks.series[0].data.push({x:1e3*t,y:[e.period_open[a].toFixed(s),e.period_high[a].toFixed(s),e.period_low[a].toFixed(s),e.period[a].toFixed(s)]}),t-=86400;this.charts[e.code]=this.candleSticks},randomColor:function(){for(var e="0123456789ABCDEF",t="#",s=0;s<6;s++)t+=e[Math.floor(16*Math.random())];return{"background-color":t}},volume:function(e){return e>100?"text-success":e>50?"text-warning":"text-danger"}}},O=I,F=(s("89ed"),Object(r["a"])(O,u,_,!1,null,null,null)),D=F.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h5",[e._v("Ema")]),s("div",{staticClass:"d-flex flex-wrap",staticStyle:{gap:"10px"}},e._l(e.codes,(function(t){return s("div",{key:t.code,staticClass:"card",staticStyle:{width:"25rem"}},[s("div",{staticClass:"card-header text-info"},[e._v(e._s(t.code))]),s("div",{staticClass:"card-body text-dark"},[s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v(e._s(t.current)+" / "+e._s(t.percent)+" (%)")]),s("p",{staticClass:"card-text",class:e.candles[t.candle]},[e._v("Buy With Price : "+e._s(t.price_ema))]),s("p",{staticClass:"card-text",class:e.candles[t.candle]},[e._v("Candle : "+e._s(t.candle))]),s("p",{staticClass:"card-text",class:e.clouds[t.cloud]},[e._v("Cloud : "+e._s(t.cloud))]),s("p",{staticClass:"card-text",class:e.priceClouds[t.price_cloud]},[e._v("Price Cloud : "+e._s(t.price_cloud))]),s("p",{staticClass:"card-text",class:e.godEyes[t.god_eyes]},[e._v("God Eyes : "+e._s(t.god_eyes))]),s("p",{staticClass:"card-text",class:e.volume(t.volume_target_percent)},[e._v("Sale Rate : "+e._s(t.sale_rate)+" / "+e._s(t.volume_target_percent)+" (%)")]),s("p",{staticClass:"card-text"},[e._v("Rsi : "+e._s(t.rsi))]),s("p",{staticClass:"card-text"},[e._v("History Line : "+e._s(t.history_line))]),s("div",{staticClass:"overlay"},[s("div",{attrs:{id:"candle-"+t.code}}),s("a",{staticClass:"card-link",attrs:{href:t.url,target:"_blank"}},[e._v("Chart")]),t.type==e.types.STOCK?s("button",{staticClass:"card-link btn btn-link",attrs:{id:"tooltip-info-"+t.code}},[e._v(" Information ")]):e._e(),t.type==e.types.STOCK?s("b-tooltip",{attrs:{target:"tooltip-info-"+t.code,triggers:"hover",placement:"bottomright",boundary:"document"}},[s("ul",{staticClass:"container text-info text-lg-left"},[s("li",[e._v("Roe : "+e._s(t.basic.roe))]),s("li",[e._v("EPS : "+e._s(t.basic.eps))]),s("li",[e._v("PE : "+e._s(t.basic.pe.toFixed(2)))]),s("li",[e._v("Gross Margin : "+e._s(t.basic.gross_margin))]),s("li",{staticClass:"text-warning"},[e._v("Industry Roe : "+e._s(t.basic.industry_roe))]),s("li",{staticClass:"text-warning"},[e._v("Industry PE : "+e._s(t.basic.industry_pe))]),s("li",{staticClass:"text-warning"},[e._v("RI Name : "+e._s(t.root_industry_name))])])]):e._e()],1)])])})),0)])},T=[],R={name:"EmaIndex",watch:{codes:function(e){this.codes=e}},header:{title:"Candle",subTitle:"Candle"},data:function(){return{codes:[],candles:y,clouds:g,priceClouds:C,godEyes:S,types:k,charts:[],candleSticks:{series:[{data:[]}],chart:{type:"candlestick",height:350},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}},chartsApex:[]}},updated:function(){this.$nextTick((function(){var e=this;this.codes.forEach((function(t){var s=document.getElementById("candle-"+t.code);null!=s&&(e.chartsApex[t.code]||(e.chartsApex[t.code]=new w.a(document.getElementById("candle-"+t.code),e.charts[t.code]),e.chartsApex[t.code].render()))}))}))},mounted:function(){var e=this,t=new h.a("b704586710340d91ae1f",{cluster:"eu",encrypted:!1}),s=t.subscribe("price");s.bind("ema-price",(function(t){if(e.updateChart(t),e.codes.length>0){var s=e.codes.findIndex((function(e){return e.code===t.code}));s>-1?(e.codes[s].current=t.current,e.codes[s].percent=t.percent,e.codes[s].candle=t.candle,e.codes[s].cloud=t.cloud,e.codes[s].sale_rate=t.sale_rate,e.codes[s].rsi=t.rsi,e.codes[s].history_line=t.history_line,e.codes[s].price_cloud=t.price_cloud,e.codes[s].god_eyes=t.god_eyes,e.codes[s].volume_target_percent=t.volume_target_percent,e.chartsApex[t.code].updateSeries(e.charts[t.code].series)):e.codes.push(t)}else e.codes.push(t)}))},methods:{resetCandleSticks:function(){this.candleSticks.series[0].data=[]},updateChart:function(e){this.resetCandleSticks();var t=e.period_time[0],s=this.countDecimals(e.current);s=s>1?s:2;for(var a=0;a<e.period.length;a++)this.candleSticks.series[0].data.push({x:1e3*t,y:[e.period_open[a].toFixed(s),e.period_high[a].toFixed(s),e.period_low[a].toFixed(s),e.period[a].toFixed(s)]}),t-=86400;this.charts[e.code]=this.candleSticks},volume:function(e){return e>100?"text-success":e>50?"text-warning":"text-danger"}}},A=R,N=(s("49b6"),Object(r["a"])(A,P,T,!1,null,null,null)),L=N.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h5",[e._v("Triangle")]),s("div",{staticClass:"d-flex flex-wrap",staticStyle:{gap:"10px"}},e._l(e.codes,(function(t){return s("div",{key:t.code,staticClass:"card",staticStyle:{width:"25rem"}},[s("div",{staticClass:"card-header text-info"},[e._v(e._s(t.code))]),s("div",{staticClass:"card-body text-dark"},[s("h5",{staticClass:"card-title"},[e._v(e._s(t.code))]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v(e._s(t.current)+" / "+e._s(t.percent)+" (%)")]),s("p",{staticClass:"card-text"},[e._v("Buy With : "+e._s(t.buy_right))]),s("p",{staticClass:"card-text",class:e.candles[t.candle]},[e._v("Candle : "+e._s(t.candle))]),s("p",{staticClass:"card-text",class:e.clouds[t.cloud]},[e._v("Cloud : "+e._s(t.cloud))]),s("p",{staticClass:"card-text",class:e.priceClouds[t.price_cloud]},[e._v("Price Cloud : "+e._s(t.price_cloud))]),s("p",{staticClass:"card-text",class:e.crossesEma[t.cross_ema]},[e._v("Cross Ema : "+e._s(t.cross_ema))]),s("p",{staticClass:"card-text",class:e.godEyes[t.god_eyes]},[e._v("God Eyes : "+e._s(t.god_eyes))]),s("p",{staticClass:"card-text",class:e.volume(t.volume_target_percent)},[e._v("Sale Rate : "+e._s(t.sale_rate)+" / "+e._s(t.volume_target_percent)+" (%)")]),s("p",{staticClass:"card-text"},[e._v("History Line : "+e._s(t.history_line))]),s("div",{staticClass:"overlay"},[s("div",{attrs:{id:"candle-"+t.code}}),s("a",{staticClass:"card-link",attrs:{href:t.url,target:"_blank"}},[e._v("Chart")]),t.type==e.types.STOCK?s("button",{staticClass:"card-link btn btn-link",attrs:{id:"tooltip-info-"+t.code}},[e._v(" Information ")]):e._e(),t.type==e.types.STOCK?s("b-tooltip",{attrs:{target:"tooltip-info-"+t.code,triggers:"hover",placement:"bottomright",boundary:"document"}},[s("ul",{staticClass:"container text-info text-lg-left"},[s("li",[e._v("Roe : "+e._s(t.basic.roe))]),s("li",[e._v("EPS : "+e._s(t.basic.eps))]),s("li",[e._v("PE : "+e._s(t.basic.pe.toFixed(2)))]),s("li",[e._v("Gross Margin : "+e._s(t.basic.gross_margin))]),s("li",{staticClass:"text-warning"},[e._v("Industry Roe : "+e._s(t.basic.industry_roe))]),s("li",{staticClass:"text-warning"},[e._v("Industry PE : "+e._s(t.basic.industry_pe))]),s("li",{staticClass:"text-warning"},[e._v("RI Name : "+e._s(t.root_industry_name))])])]):e._e()],1)])])})),0)])},j=[],B={name:"TriangleIndex",watch:{codes:function(e){this.codes=e}},header:{title:"Candle",subTitle:"Candle"},data:function(){return{codes:[],candles:y,clouds:g,priceClouds:C,crossesEma:b,godEyes:S,types:k,charts:[],candleSticks:{series:[{data:[],name:"candle",type:"candlestick"},{name:"maxLine",type:"line",data:[]},{name:"minLine",type:"line",data:[]}],chart:{type:"line",height:350},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}},stroke:{width:[1,2,2]}},chartsApex:[]}},updated:function(){this.$nextTick((function(){var e=this;this.codes.forEach((function(t){var s=document.getElementById("candle-"+t.code);null!=s&&(e.chartsApex[t.code]||(e.chartsApex[t.code]=new w.a(document.getElementById("candle-"+t.code),e.charts[t.code]),e.chartsApex[t.code].render()))}))}))},mounted:function(){var e=this,t=new h.a("b704586710340d91ae1f",{cluster:"eu",encrypted:!1}),s=t.subscribe("price");s.bind("triangle-price",(function(t){if(e.updateChart(t),e.codes.length>0){var s=e.codes.findIndex((function(e){return e.code===t.code}));s>-1?(e.codes[s].percent=t.percent,e.codes[s].current=t.current,e.codes[s].candle=t.candle,e.codes[s].cloud=t.cloud,e.codes[s].sale_rate=t.sale_rate,e.codes[s].rsi=t.rsi,e.codes[s].history_line=t.history_line,e.codes[s].price_cloud=t.price_cloud,e.codes[s].cross_ema=t.cross_ema,e.codes[s].god_eyes=t.god_eyes,e.codes[s].volume_target_percent=t.volume_target_percent,e.chartsApex[t.code].updateSeries(e.charts[t.code].series)):e.codes.push(t)}else e.codes.push(t)}))},methods:{countDecimals:function(e){return Math.floor(e)===e?0:e.toString().split(".")[1].length||0},resetCandleSticks:function(){this.candleSticks.series[0].data=[],this.candleSticks.series[1].data=[],this.candleSticks.series[2].data=[]},updateChart:function(e){this.resetCandleSticks();var t=1e3*e.period_time[0],s=t,a=this.countDecimals(e.current);a=a>1?a:2;for(var i=0;i<e.period.length;i++)i===e.triangle.line_max[0][0]&&this.candleSticks.series[1].data.push({x:t,y:e.triangle.line_max[0][1].toFixed(a)}),i===e.triangle.line_max[1][0]&&(this.candleSticks.series[1].data.push({x:t,y:e.triangle.line_max[1][1].toFixed(a)}),this.candleSticks.series[1].data.push({x:s,y:e.buy_right.toFixed(a)})),i===e.triangle.line_min[0][0]&&this.candleSticks.series[2].data.push({x:t,y:e.triangle.line_min[0][1].toFixed(a)}),i===e.triangle.line_min[1][0]&&(this.candleSticks.series[2].data.push({x:t,y:e.triangle.line_min[1][1].toFixed(a)}),this.candleSticks.series[2].data.push({x:s,y:e.sell_left.toFixed(a)})),this.candleSticks.series[0].data.push({x:t,y:[e.period_open[i].toFixed(a),e.period_high[i].toFixed(a),e.period_low[i].toFixed(a),e.period[i].toFixed(a)]}),t-=86400;this.charts[e.code]=this.candleSticks},volume:function(e){return e>100?"text-success":e>50?"text-warning":"text-danger"}}},M=B,U=(s("b9d4"),Object(r["a"])(M,$,j,!1,null,null,null)),G=U.exports,K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.data.code?s("div",{key:e.code,staticClass:"card"},[s("div",{staticClass:"card-header text-info"},[e._v(e._s(e.code))]),s("div",{staticClass:"card-body text-dark"},[s("h5",{staticClass:"card-title"},[e._v(e._s(e.code))]),s("h6",{staticClass:"card-subtitle mb-2 text-muted"},[e._v(e._s(e.data.current)+" / "+e._s(e.data.percent)+" (%)")]),s("p",{staticClass:"card-text"},[e._v("Buy With : "+e._s(e.data.buy_right))]),s("p",{staticClass:"card-text",class:e.candles[e.data.candle]},[e._v("Candle : "+e._s(e.data.candle))]),s("p",{staticClass:"card-text",class:e.clouds[e.data.cloud]},[e._v("Cloud : "+e._s(e.data.cloud))]),s("p",{staticClass:"card-text",class:e.priceClouds[e.data.price_cloud]},[e._v("Price Cloud : "+e._s(e.data.price_cloud))]),s("p",{staticClass:"card-text",class:e.crossesEma[e.data.cross_ema]},[e._v("Cross Ema : "+e._s(e.data.cross_ema))]),s("p",{staticClass:"card-text",class:e.godEyes[e.data.god_eyes]},[e._v("God Eyes : "+e._s(e.data.god_eyes))]),s("p",{staticClass:"card-text",class:e.volume(e.data.volume_target_percent)},[e._v("Sale Rate : "+e._s(e.data.sale_rate)+" / "+e._s(e.data.volume_target_percent)+" (%)")]),s("p",{staticClass:"card-text"},[e._v("History Line : "+e._s(e.data.history_line))]),s("div",{staticClass:"overlay"},[s("div",{attrs:{id:"candle-"+e.code}}),s("a",{staticClass:"card-link",attrs:{href:e.data.url,target:"_blank"}},[e._v("Chart")]),e.data.type==e.types.STOCK?s("button",{staticClass:"card-link btn btn-link",attrs:{id:"tooltip-info-"+e.code}},[e._v(" Information ")]):e._e(),e.data.type==e.types.STOCK?s("b-tooltip",{attrs:{target:"tooltip-info-"+e.code,triggers:"hover",placement:"bottomright",boundary:"document"}},[s("ul",{staticClass:"container text-info text-lg-left"},[s("li",[e._v("Roe : "+e._s(e.data.basic.roe))]),s("li",[e._v("EPS : "+e._s(e.data.basic.eps))]),s("li",[e._v("PE : "+e._s(e.data.basic.pe.toFixed(2)))]),s("li",[e._v("Gross Margin : "+e._s(e.data.basic.gross_margin))]),s("li",{staticClass:"text-warning"},[e._v("Industry Roe : "+e._s(e.data.basic.industry_roe))]),s("li",{staticClass:"text-warning"},[e._v("Industry PE : "+e._s(e.data.basic.industry_pe))]),s("li",{staticClass:"text-warning"},[e._v("RI Name : "+e._s(e.data.root_industry_name))])])]):e._e()],1)])]):e._e()])},H=[],W=s("bc3a"),q=s.n(W),J={name:"CodeIndex",header:{title:"Code Index",subTitle:"Code"},data:function(){return{id:this.$route.query.id,code:this.$route.query.c,data:{},candles:y,clouds:g,priceClouds:C,crossesEma:b,godEyes:S,types:k,googleDriveUrl:v,googleDriveApiKey:x,chart:[],candleSticks:{series:[{name:"candle",type:"candlestick",data:[]},{name:"maxLine",type:"line",data:[]},{name:"minLine",type:"line",data:[]}],chart:{type:"line",height:350},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}},stroke:{width:[1,2,2]}}}},updated:function(){new w.a(document.getElementById("candle-"+this.code),this.chart).render()},mounted:function(){var e=this,t=this.googleDriveUrl+this.id+"?key="+this.googleDriveApiKey+"&alt=media";q.a.get(t).then((function(t){e.data=t.data,e.updateChart(e.data)})).catch((function(e){console.log(e)}))},methods:{countDecimals:function(e){return Math.floor(e)===e?0:e.toString().split(".")[1].length||0},resetCandleSticks:function(){this.candleSticks.series[0].data=[],this.candleSticks.series[1].data=[],this.candleSticks.series[2].data=[]},updateChart:function(e){this.resetCandleSticks();var t=1e3*e.period_time[0],s=t,a=this.countDecimals(e.current);a=a>1?a:2;for(var i=0;i<e.period.length;i++)i===e.triangle.line_max[0][0]&&this.candleSticks.series[1].data.push({x:t,y:e.triangle.line_max[0][1].toFixed(a)}),i===e.triangle.line_max[1][0]&&(this.candleSticks.series[1].data.push({x:t,y:e.triangle.line_max[1][1].toFixed(a)}),this.candleSticks.series[1].data.push({x:s,y:e.triangle.line_max[2][1].toFixed(a)})),i===e.triangle.line_min[0][0]&&this.candleSticks.series[2].data.push({x:t,y:e.triangle.line_min[0][1].toFixed(a)}),i===e.triangle.line_min[1][0]&&(this.candleSticks.series[2].data.push({x:t,y:e.triangle.line_min[1][1].toFixed(a)}),this.candleSticks.series[2].data.push({x:s,y:e.triangle.line_min[2][1].toFixed(a)})),this.candleSticks.series[0].data.push({x:t,y:[e.period_open[i].toFixed(a),e.period_high[i].toFixed(a),e.period_low[i].toFixed(a),e.period[i].toFixed(a)]}),t-=86400;this.chart=this.candleSticks},volume:function(e){return e>100?"text-success":e>50?"text-warning":"text-danger"}}},Y=J,z=(s("5427"),Object(r["a"])(Y,K,H,!1,null,null,null)),Q=z.exports,Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("This is an about page")])])}],X={mounted:function(){var e=this.$route;console.log(e)}},ee=X,te=Object(r["a"])(ee,Z,V,!1,null,null,null),se=te.exports,ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Summary")]),s("table",{staticClass:"table table-striped"},[e._m(0),s("tbody",e._l(e.data,(function(t,a){return s("tr",{key:t[a]},[s("td",[e._v(e._s(t.code))]),s("td",[e._v(e._s(t.time))]),s("td",[e._v(e._s(t.current))]),s("td",[e._v(e._s(t.close.toFixed(2)))]),s("td",[e._v(e._s(100*((t.current-t.close)/t.close).toFixed(2)))]),s("td",[e._v(e._s(t.candle))]),s("td",[e._v(e._s(t.s_trend))]),s("td",[e._v(e._s(t.scores))]),s("td",[e._v(e._s(t.sale_time))]),s("td",[e._v(e._s(t.profit.toFixed(2)))])])})),0)])])},ie=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("Code")]),s("th",[e._v("Buy Date")]),s("th",[e._v("Current")]),s("th",[e._v("Buy Price")]),s("th",[e._v("Percentage (%)")]),s("th",[e._v("Candle")]),s("th",[e._v("Trend")]),s("th",[e._v("Scores ")]),s("th",[e._v("Sale Date")]),s("th",[e._v("Profit (%)")])])])}],ce={name:"SummaryIndex",header:{title:"Summary Index",subTitle:"Summary"},data:function(){return{data:[],type:this.$route.query.t,fileId:m,googleDriveUrl:v,googleDriveApiKey:x}},mounted:function(){var e=this;this.fileId="stock"===this.type?m:f;var t=this.googleDriveUrl+this.fileId+"?key="+this.googleDriveApiKey+"&alt=media";q.a.get(t).then((function(t){e.data=t.data})).catch((function(e){console.log(e)}))},methods:{}},re=ce,ne=Object(r["a"])(re,ae,ie,!1,null,null,null),de=ne.exports;a["default"].use(l["a"]);var oe=[{path:"/",name:"triangle_index",component:G},{path:"/ema",name:"ema_index",component:L},{path:"/candle",name:"candle_index",component:D},{path:"/code",name:"code_index",component:Q},{path:"/summary",name:"summary_index",component:de},{path:"*",name:"not_found",component:se}],le=new l["a"]({mode:"history",base:"/triangle/",routes:oe}),ue=le,_e=s("5f5b"),pe=s("b1e0");s("f9e3"),s("2dd8");a["default"].config.productionTip=!1,a["default"].use(_e["a"]),a["default"].use(pe["a"]),new a["default"]({router:ue,render:function(e){return e(o)}}).$mount("#app")},"85ec":function(e,t,s){},"89ed":function(e,t,s){"use strict";s("fff7")},b9d4:function(e,t,s){"use strict";s("c210")},c210:function(e,t,s){},e240:function(e,t,s){},fff7:function(e,t,s){}});
//# sourceMappingURL=app.b695bdaf.js.map