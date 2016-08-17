/**
 * Created by Administrator on 2016/8/16.
 */
var header=require("header.js");

var section=require("section.js");

var footer=require("footer.js");

var str=require("templates/index.string");
document.body.innerHTML+=str;

var wheader=document.querySelector("header");
var wsection=document.querySelector("section");
var wfooter=document.querySelector("footer");

wheader.innerHTML=header.msg();
wsection.innerHTML=section.msg();
wfooter.innerHTML=footer.msg();



/*
function fu(){
    aleret(111);
}
fu();
*/
