(this.webpackJsonpproreact=this.webpackJsonpproreact||[]).push([[0],{18:function(e,a,t){e.exports=t(31)},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(16),c=t.n(r),i=(t(23),t(24),t(8)),o=t(11),s=t(1),m=t(9),u=t.n(m);function d(e){fetch("http://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return console.log(e)}));var a=i.profile[e.location.data.id];return console.log(a.carrer),n.a.createElement("div",{className:"row justify-content-center bg-secondary"},n.a.createElement("div",{className:"col-lg-3 m-3"},n.a.createElement("div",{className:"card shadow"},n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("img",{src:u.a,style:{width:"30%"}}),n.a.createElement("h3",null,a.basics.name),n.a.createElement("hr",null),n.a.createElement("a",{href:"tel:"+a.basics.Mobile},n.a.createElement("p",{className:"text-secondary"},a.basics.Mobile)),n.a.createElement("a",{href:"mailto:"+a.basics.email},n.a.createElement("p",{className:"text-secondary"},a.basics.email)),n.a.createElement("p",{className:"text-secondary"},a.basics.pin)))),n.a.createElement("div",{className:"col-lg-8 m-4 "},n.a.createElement("div",{className:"card shadow p-3"},n.a.createElement("h4",{className:"text-info"},"Career Objective"),n.a.createElement("p",null,a.carrer),n.a.createElement("hr",null),n.a.createElement("h4",{className:"text-info"},"Educational assets"),n.a.createElement("div",{class:"table-responsive-sm"},n.a.createElement("table",{class:"table table-bordered table-striped"},n.a.createElement("thead",{class:"thead-dark"},n.a.createElement("tr",null,n.a.createElement("th",null,"Sno"),n.a.createElement("th",null,"Institute"),n.a.createElement("th",null,"course"),n.a.createElement("th",null,"percent"),n.a.createElement("th",null,"year"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"1"),n.a.createElement("td",null,a.edu.btech),n.a.createElement("td",null,a.edu.bco),n.a.createElement("td",null,a.edu.bper),n.a.createElement("td",null,a.edu.byr)),n.a.createElement("tr",null,n.a.createElement("td",null,"2"),n.a.createElement("td",null,a.edu.inter),n.a.createElement("td",null,a.edu.ico),n.a.createElement("td",null,a.edu.iper),n.a.createElement("td",null,a.edu.iyr)),n.a.createElement("tr",null,n.a.createElement("td",null,"3"),n.a.createElement("td",null,a.edu.ssc),n.a.createElement("td",null,a.edu.Sco),n.a.createElement("td",null,a.edu.Sper),n.a.createElement("td",null,a.edu.Syr))),n.a.createElement("tfoot",null))),n.a.createElement("hr",null),n.a.createElement("h4",{className:"text-info"},"Skills"),n.a.createElement("ul",null,a.skills.s.map((function(e){return n.a.createElement("li",null,e)}))),n.a.createElement("hr",null),n.a.createElement("h4",{className:"text-info"},"Hobbies"),n.a.createElement("ul",null,a.hobby.h.map((function(e){return n.a.createElement("li",null,e)}))),n.a.createElement("hr",null),n.a.createElement("h4",{className:"text-info"},"Achievements"),n.a.createElement("ul",null,a.achieve.ai.map((function(e){return n.a.createElement("li",null,e)}))),n.a.createElement("hr",null),n.a.createElement("h4",{className:"text-info"},"Declaration"),n.a.createElement("p",null,a.achieve.declare))))}t(25);var E=function(){var e=i.profile;return console.log(e),n.a.createElement("div",null,n.a.createElement("div",{className:"row justify-content-center"},e.map((function(e,a){return n.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-10 mt-2",key:a},n.a.createElement("div",{className:"card bg-secondary"},n.a.createElement("div",{className:"card-body text-center "},n.a.createElement("img",{src:u.a,style:{width:"30%"}}),n.a.createElement("h3",null,e.basics.name),n.a.createElement("hr",null),n.a.createElement("a",{href:"tel:"+e.basics.Mobile},n.a.createElement("p",{className:"text-dark"},e.basics.Mobile)),n.a.createElement("a",{href:"mailto:"+e.basics.email},n.a.createElement("p",{className:"text-dark"},e.basics.email)),n.a.createElement("p",{className:""},e.basics.pin),n.a.createElement(o.b,{to:{pathname:"/resume",data:{id:a}},className:"btn btn-dark text-white"},"View Profile"))))}))))},h=function(){return n.a.createElement(o.a,null,n.a.createElement(s.a,{exact:!0,path:"/",component:E}),n.a.createElement(s.a,{exact:!0,path:"/resume",component:d}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"profile":[{"basics":{"name":"Alekhya","pin":"Rajahmundry","college":"GIET","email":"alekhyaman99@gmail.com","Mobile":"8978710133"},"carrer":"Aiming to work as software developer and utilize my skills for growth of organisation","edu":{"btech":"GIET","bco":"B-tech (CSE)","bper":"92.4","byr":"2021","inter":"Sri Chaitanya Junior College","ico":"Inter","iper":"97","iyr":"2017","ssc":"Bhashyam public school","Sco":"SSC","Sper":"95","Syr":"2015"},"skills":{"s":["Python","Java","C","Reactjs","SQL"]},"hobby":{"h":["Drawing","Playing Badminton"]},"achieve":{"ai":["Certified in NPTEL Java Certification with Elite gold ","Certified in NPTEL DBMS Certification with Elite","Certification course on Python Programming from Coursera "," Certification course on Cloud Computing Basics from Coursera "],"declare":"I hereby declare that above mentioned details are true to the best of my Knowledge"}},{"basics":{"name":"Vijay","pin":"Hyderabad","college":"Adithya Engineering college","email":"vijay.81@gmail.com","Mobile":"9912322656"},"carrer":"Aiming to work as software developer and utilize my skills for growth of organisation","edu":{"btech":"Adithya engineering college ","bco":"B-tech (CSE)","bper":"92.4","byr":"2021","inter":"Sri Chaitanya Junior College","ico":"Inter","iper":"97","iyr":"2017","ssc":"Bhashyam public school","Sco":"SSC","Sper":"95","Syr":"2015"},"skills":{"s":["Python","Java","C","Reactjs","SQL","HtML/CSS/JS"]},"hobby":{"h":["Reading books","Playing keyboard","listenng to music"]},"achieve":{"ai":["Certified in NPTEL Java Certification with Elite silver ","Certified in NPTEL DBMS Certification with Elite","Certification course on Python Programming from Coursera "],"declare":"I hereby declare that above mentioned details are true to the best of my Knowledge"}}]}')},9:function(e,a,t){e.exports=t.p+"static/media/profile_pic.6f88fc6b.svg"}},[[18,1,2]]]);
//# sourceMappingURL=main.df8e496b.chunk.js.map