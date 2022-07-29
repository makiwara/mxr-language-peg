#!/bin/bash
rm parser.*
rm *.js

tspeg grammar.peg parser.ts
tsc -t ES2015 -m commonjs parser.ts
tsc -t ES2015 -m commonjs test.ts
node test.js