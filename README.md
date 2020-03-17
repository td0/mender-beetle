# mender-beetle
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

Mend your broken and ugly and stupid JSON structure, so you'd feel better :)


### Requirements
- A working PC / laptop with Unix or Unix like environment (FCK WINDOWS)
- NodeJS version 8 or later
- Relatively healthy and sane hooman brain


### How To Setup
```bash
git clone https://github.com/td0/mender-beetle.git

cd mender-beetle

npm i
```


### How To Use
- (OPTIONAL) make an object-worker and save it in `/objectWorkers` directory (just take alook at the existing one) with `.js` extension!! (Do whatever the fck u need there)
- run `./menderBeetle`
- enter your source JSON file URL
- pick a worker (the app will automagically list all object-worker files inside the `/objectWorkers` directory)
- if you chose a correct worker, it will generate the output file in `/output-json` directory with the same name as the source JSON
- EN-fcking-JOY!!
