(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[{id:1,name:"Beastmen",Icon:"../pictures/Beastmen.jpg"},{id:2,name:"BorderPrinces",Icon:"../pictures/BorderPrinces.jpg"},{id:3,name:"DarkElves",Icon:"../pictures/DarkElves.jpg"},{id:4,name:"Dwarves",Icon:"../pictures/Dwarves.jpg"},{id:5,name:"HighElves",Icon:"../pictures/HighElves.jpg"},{id:6,name:"Khorne",Icon:"../pictures/Khorne.jpg"},{id:7,name:"Lizardmen",Icon:"../pictures/Lizardmen.jpg"},{id:8,name:"Nurgle",Icon:"../pictures/Nurgle.jpg"},{id:9,name:"Orks",Icon:"../pictures/Orks.jpg"},{id:10,name:"Reikland",Icon:"../pictures/Reikland.jpg"},{id:11,name:"Slannesh",Icon:"../pictures/Slannesh.jpg"},{id:12,name:"VonCarstein",Icon:"../pictures/VonCarstein.jpg"}]},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),o=n.n(r),s=n(4),i=n(5),l=n(7),u=n(6),m=n(8),p=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"TotalWar Icon Clicky Game"),c.a.createElement("h3",null,"Click on each image no more than once, click all 12 to win!"))},g=function(e){return c.a.createElement("div",null,c.a.createElement("span",null,"Score ",e.score),c.a.createElement("span",null,"Message ",e.message),c.a.createElement("span",null,"Top Score",e.topScore),c.a.createElement("span",null))},d=function(e){var t=e.image,n=e.name,a=e.suffleFunction,r=e.id;return console.log(r),c.a.createElement("div",null,c.a.createElement("img",{src:t,alt:n,onClick:function(){return a(r)}}))},f=function(e){var t=e.images,n=e.suffleFunction,a=t.map(function(e){return c.a.createElement(d,{key:e.id,id:e.id,name:e.name,image:e.Icon,suffleFunction:n})});return c.a.createElement("div",null,a)},h=n(1),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={images:h,clicked:[],score:0,topScore:0,totalScore:0,message:"start by clicking an image, but no image more than once"},n.suffleFunction=function(e){var t=n.state.clicked;if(t.includes(e))n.setState({clicked:[],score:0,totalScore:n.state.topScore,message:"WRONG! WRONG!"});else{t.push(e),12===t.length&&n.setState({clicked:[]}),n.state.score>=n.state.totalScore&&n.setState({topScore:n.state.score}),n.setState({score:t.length,totalScore:n.state.topScore,message:"WINNER! HIGHSCORE!"});for(var a,c,r=h.length;--r>0;)a=Math.floor(Math.random()*(r+1)),c=h[a],h[a]=h[r],h[r]=c}},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),c.a.createElement(p,null),c.a.createElement(f,{suffleFunction:this.suffleFunction,images:this.state.images}))}}]),t}(c.a.Component);o.a.render(c.a.createElement(E,null),document.querySelector("#root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f4d1700e.chunk.js.map