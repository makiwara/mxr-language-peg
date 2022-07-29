const parse = require("./parser").parse
const util = require('util')
const fs = require("fs")

const test_name = "test.txt"

fs.readFile(test_name, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const parts = data.split("---");
  for(var p in parts) {
  	const part = parts[p].replace(/^\s+/,"").replace(/\s+$/,"");
  	console.log(part);
  	console.log("---")
  	const result = parse(part);	
    if (result.errs[0]) 
      console.log(result.errs[0])
    else 
      console.dir(result.ast, { depth:null })
  	console.log("=================")
  }
})


