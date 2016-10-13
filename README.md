# Mocha Webpack Faliure Scenario

This is a minimal example to reproduce issue [#48 in `mocha-webpack`](https://github.com/zinserjan/mocha-webpack/issues/48).

Note that this uses typescript and the webpack `ts-loader`.
 
## Steps to Reproduce

    npm i
    npm run test
        
    # other ways that should work as well:
    npm run test2
    npm run test3
    
    # It works when specifying just a single file:
    npm run singleTest
