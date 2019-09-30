checkbox = {};
checkbox.gameURLs = ["https://textmonster404.github.io/Random/random.html","https://textmonster404.github.io/","https://textmonster404.github.io/index.html"];
checkbox.gameLinks = [];

var uuidv4 = function(){return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));};

checkbox.url = localStorage.getItem("checkbox") || "";
checkbox.wins = localStorage.getItem("checkbox-wins") || 0;

checkbox.startGame = function() {
    if (checkbox.gameURLs.includes(window.location.href)) {
        localStorage.setItem("checkbox",window.location.href);
        checkbox.interval = window.setInterval(checkbox.roulette,1000);
        checkbox.moveCheckbox();
    }
}

for (var i=0;i<document.getElementsByTagName("a").length;i++) {
    var a = document.getElementsByTagName("a")[i];
    for (var j=0;j<checkbox.gameURLs.length;j++) {
        var g = checkbox.gameURLs[j];
        if (a.href==g) {
            checkbox.gameLinks = checkbox.gameLinks.concat([a]);
        }
    }
}
checkbox.removeCheckbox = function() {
    if (document.getElementById("checkbox-"+uuidv4)) {
        document.getElementById("checkbox-"+uuidv4).remove();
    }
}
checkbox.moveCheckbox = function() {
    checkbox.removeCheckbox();
    var els = document.querySelectorAll("li,a,span,b,i,u,div,td,th,h1,h2,h3,h4,h5,h6,sub,sup");
    els[Math.floor(Math.random()*els.length)].innerHTML+="<input type=\"checkbox\" onclick=\"checkbox.end();\" id=\"checkbox-"+uuidv4+"\"/>";
}
checkbox.end = function() {
    if (!checkbox.wins) {checkbox.wins=1;} else {checkbox.wins++;};
    alert("Congratulations!\nCheckboxes caught: "+checkbox.wins);
    localStorage.setItem("checkbox-wins",checkbox.wins);
    window.clearInterval(checkbox.interval);
    checkbox.url="";
    localStorage.setItem("checkbox","");
}
checkbox.roulette = function() {
    var a = checkbox.gameLinks[Math.floor(Math.random()*checkbox.gameLinks.length)];
    if (Math.random()*4<1&&checkbox.gameLinks.includes(a)) {
        a.innerHTML+=" <b style=\"color:green;\"><</b>";
        localStorage.setItem("checkbox",a.href);
        checkbox.removeCheckbox();
        window.clearInterval(checkbox.interval);
    } else {
        checkbox.moveCheckbox();
    }
}
if (((Math.random()*32<1||window.location.search=="?game")&&(checkbox.url==""||checkbox.url==null))||checkbox.url==window.location.href) {checkbox.startGame();}