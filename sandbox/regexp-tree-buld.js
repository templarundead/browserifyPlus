var fs = require('fs')
var path = require('path')
var browserify = require('browserify')

var input = path.join(__dirname, 'regexp-tree','main.js')
var output = path.join(__dirname,'regexp-tree','regexp-tree.js')

var b = browserify(input)

b.bundle(function (err, buf) {
  if (err) return console.log(err)
  fs.writeFile(output, buf, function (err) {
    if (err) return console.log(err)
  })
})