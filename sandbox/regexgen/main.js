"use strict";
const {Trie} = require('regexgen');
document.getElementById('parse').addEventListener('click', () => {
let t = new Trie;
let output = document.getElementById("input").value.split(/\n|\||\s/)
t.addAll(output);t.toString();
document.getElementById('output').textContent = `(?:${t})`;
//const out = document.getElementById("output").textContent.replace(/\\/g, "\\");
//document.getElementById("output").textContent = out;
	let word = document.getElementById("output").textContent.split('\n').length;
	document.getElementById("word").textContent = `lines: ${word}`;
	let oldsize = document.getElementById("input").value.length;
	document.getElementById("oldsize").textContent = `old size: ${oldsize}kb`;
	let newsize = document.getElementById("output").textContent.length;
	document.getElementById("newsize").textContent = `new size: ${newsize}kb`;
	let count = document.getElementById("output").textContent.split('?:').length-1;
	document.getElementById("group").textContent = `non-capturing group: ${count}`;
});