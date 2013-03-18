#!/bin/bash
BASEDIR='../'
echo $PWD
java -jar $PWD/../../util/closure-compiler/compiler.jar --js $PWD/*.js --js_output_file $PWD/../../build/out.js