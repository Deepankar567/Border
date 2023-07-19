var h=window. innerHeight;
var w=window. innerWidth;
var hm=h-300;
var hhm=hm/2;
var wm=w-300;
var hwm=wm/2;
var hhm1=h-hhm;
var hwm1=w-hwm;
console. log(h);
console. log(w);
console. log(hhm);
console. log(hwm);
document.getElementById("top").style.top=hhm+"px";
document.getElementById("right").style.left=hwm1+"px";
document.getElementById("bottom").style.top=hhm1+"px";
document.getElementById("left").style.left=hwm+"px";



setInterval(abc,1);
function abc(){
var slider1 = document.getElementById("top").value;
var slider2 = document.getElementById("right").value;
var slider3 = document.getElementById("bottom").value;
var slider4 = document.getElementById("left").value;
var slider11=100-slider1;
var slider21=100-slider2;
var slider31=100-slider3;
var slider41=100-slider4;

var element1 = document.getElementById("fluidborder");
element1.style.borderRadius=slider1+"%"+" "+slider11+"%"+" "+slider3+"%"+" "+slider31+"%"+" "+"/"+" "+slider4+"%"+" "+slider2+"%"+" "+slider21+"%"+" "+slider41+"%";
var element2 = document.getElementById("code");
element2.innerHTML="border-radius:"+slider1+"%"+" "+slider11+"%"+" "+slider3+"%"+" "+slider31+"%"+" "+"/"+" "+slider4+"%"+" "+slider2+"%"+" "+slider21+"%"+" "+slider41+"%;";
}