(this.webpackJsonpseasons=this.webpackJsonpseasons||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),o=a(6),s=a(5),l=a(0),c=a.n(l),i=a(4),u=a.n(i),m=(a(12),{winter:{text:"It's cold",iconName:"snowflake",iconColor:"blue"},summer:{text:"Let's go to the beach",iconName:"sun",iconColor:"red"}}),d=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t<0?"summer":"winter":t>0?"winter":"summer"),r=m[n],o=r.text,s=r.iconName,l=r.iconColor;return c.a.createElement("div",{className:"season-display ".concat(n)},c.a.createElement("h1",null,"It is ",n," and ",o),c.a.createElement("i",{className:"icon-left ".concat(s," icon huge ").concat(l)}),c.a.createElement("i",{className:"icon-right ".concat(s," icon huge ").concat(l)}),c.a.createElement("ul",{className:"coordinates"},"You current:",c.a.createElement("li",null,"latitude: ",e.lat),c.a.createElement("li",null,"longitude: ",e.lon)))},h=function(e){return c.a.createElement("div",{style:{height:"100vh"},className:"ui segment"},c.a.createElement("div",{className:"ui active dimmer"},c.a.createElement("div",{className:"ui big text loader"},e.message)))};h.defaultProps={message:"Loading..."};var g=h,v=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={lat:null,lon:null,errorMessage:""},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){return e.setState((function(){return{lat:t.coords.latitude,lon:t.coords.longitude}}))}),(function(t){return e.setState({errorMessage:t.message})}))}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?c.a.createElement("div",null,"Error: ",this.state.errorMessage):!this.state.errorMessage&&this.state.lat?c.a.createElement(d,{lat:this.state.lat,lon:this.state.lon}):c.a.createElement(g,{message:"Please accept location request..."})}},{key:"render",value:function(){return c.a.createElement("div",null,this.renderContent())}}]),a}(c.a.Component);u.a.render(c.a.createElement(v,null),document.querySelector("#root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.13ed0b96.chunk.js.map