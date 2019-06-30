"use strict";
const regexpTree = require('regexp-tree');
var parse = document.getElementById('parse');
parse.addEventListener('click', function (event) {
const originalRe = document.getElementById("input").value.replace(/^|$/g, "/");
const optimizedRe = regexpTree.optimize(originalRe).toString();
document.getElementById("output").textContent = optimizedRe.replace(/^\/|\/$/g, "");
var oldsize = document.getElementById("input").value.length;
document.getElementById("oldsize").textContent = `old size: ${oldsize}kb`;
var newsize = document.getElementById("output").textContent.length;
document.getElementById("newsize").textContent = `new size: ${newsize}kb`;
console.log(optimizedRe.toString())});