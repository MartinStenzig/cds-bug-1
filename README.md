# CAP Node.js - Bug Reproduction

I created this repository to reproduce a bug in CAP Node.js. 

## Steps to reproduce
1. Clone this repository
2. Run cds watch
3. call postWeatherData() function in ./test/buggy.http

Once I call the function I receive the following error:

```shell
[cds] - TypeError: Cannot read properties of undefined (reading 'match')
    at _getMediaTypeValue (/Users/martinstenzig/.npm-global/lib/node_modules/@sap/cds-dk/node_modules/@sap/cds/libx/_runtime/common/generic/input.js:51:44)
    at _processCategory (/Users/martinstenzig/.npm-global/lib/node_modules/@sap/cds-dk/node_modules/@sap/cds/libx/_runtime/common/generic/input.js:147:19)
    at /Users/martinstenzig/.npm-global/lib/node_modules/@sap/cds-dk/node_modules/@sap/cds/libx/_runtime/common/generic/input.js:160:7
    at _processElement (/Users/martinstenzig/.npm-global/lib/node_modules/@sap/cds-dk/node_modules/@sap/cds/libx/_runtime/common/utils/templateProcessor.js:19:3)
    at _processRow (/Users/martinstenzig/.npm-global/lib/node_modules/@sap/cds-dk/node_modules/@sap/cds/libx/_runtime/common/utils/templateProcessor.js:26:3)
    at templateProcessor (/Users/martinstenzig/.npm-global/lib/node_modules/@sap/cds-dk/node_modules/@sap/cds/libx/_runtime/common/utils/templateProcessor.js:73:5)
    at ApplicationService.commonGenericInput (/Users/martinstenzig/.npm-global/lib/node_modules/@sap/cds-dk/node_modules/@sap/cds/libx/_runtime/common/generic/input.js:262:5)
    at ApplicationService.handle (/Users/martinstenzig/.npm-global/lib/node_modules/@sap/cds-dk/node_modules/@sap/cds/lib/srv/srv-dispatch.js:58:53)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async BuggyReproService.<anonymous> (/Users/martinstenzig/dev/MartinStenzig/cds-bug-1/srv/buggy.js:25:35)
```



### CAP Version(s)
```shell
@sap/cds: 6.6.2
@sap/cds-compiler: 3.7.2
@sap/cds-dk: 6.6.2
@sap/cds-dk (global): 6.6.2
@sap/cds-foss: 4.0.0
@sap/cds-mtx: -- missing --
@sap/cds-mtxs: 1.6.3
@sap/eslint-plugin-cds: 2.6.3
Node.js: v16.17.1
cds-bug-1: 1.0.0
```


