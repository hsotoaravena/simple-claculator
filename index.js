#!/usr/bin/env node

var claculator=function(){};
claculator.prototype.add=function(a,b){
    return a+b;
}
claculator.prototype.sub=function(a,b){
    return a-b;
}
claculator.prototype.multiply=function(a,b){
    return a*b;
}
claculator.prototype.divide=function(a,b){
    return a/b;
}
module.exports= new claculator();