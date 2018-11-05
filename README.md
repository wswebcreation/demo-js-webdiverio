# JavaScript demonstration scripts for WebdriverIO

Here you'll find some sample code on how to get started with WebdriverIO and Sauce Labs

> The code doesn't hold a page-object model, it is purely to setup a WebdriverIO project together with Sauce Labs

## Getting started
Make sure you have a valid NodeJS environment set up. Then:

- Clone the project to your machine with `git clone https://github.com/saucelabs-training/demo-js-webdriverio.git`
- Install all dependencies with `npm install` (*Babel is used to support new ES6 JavaScript features*)
- After all dependencies are installed make sure you've setup your Sauce Labs account with a username and an access key, save them to your environment variables with the name `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`.
- Run `npm test` to run the test against your cloud

After running a test you will get a console log like this

```log
➜  demo-js-webdriverio git:(master) ✗ npm t

> demo-js-webdriverio@1.0.0 test /Users/demo-js-webdriverio
> wdio wdio.conf.js

------------------------------------------------------------------
[chrome latest Windows 10 #1-0] Session ID: c22643400db443788d81b1345e271175
[chrome latest Windows 10 #1-0] Spec: /Users/demo-js-webdriverio/test/specs/instantSauceTest.spec.js
[chrome latest Windows 10 #1-0] Running: chrome (vlatest) on Windows 10
[chrome latest Windows 10 #1-0]
[chrome latest Windows 10 #1-0] Login
[chrome latest Windows 10 #1-0]   ✓ should be able to login with a standard user
[chrome latest Windows 10 #1-0]
[chrome latest Windows 10 #1-0]
[chrome latest Windows 10 #1-0] 1 passing (30s)
[chrome latest Windows 10 #1-0]
[chrome latest Windows 10 #1-0] Check out job at https://saucelabs.com/tests/c22643400db443788d81b1345e271175
[chrome latest Windows 10 #1-0]

------------------------------------------------------------------
[firefox latest Windows 10 #0-0] Session ID: 089bdc97feb044be980c2a42aca9505c
[firefox latest Windows 10 #0-0] Spec: /Users/demo-js-webdriverio/test/specs/instantSauceTest.spec.js
[firefox latest Windows 10 #0-0] Running: firefox (vlatest) on Windows 10
[firefox latest Windows 10 #0-0]
[firefox latest Windows 10 #0-0] Login
[firefox latest Windows 10 #0-0]   ✓ should be able to login with a standard user
[firefox latest Windows 10 #0-0]
[firefox latest Windows 10 #0-0]
[firefox latest Windows 10 #0-0] 1 passing (39s)
[firefox latest Windows 10 #0-0]
[firefox latest Windows 10 #0-0] Check out job at https://saucelabs.com/tests/089bdc97feb044be980c2a42aca9505c
[firefox latest Windows 10 #0-0]



==================================================================
Number of specs: 2


2 passing (40.00s)
```

> **Note:**

> This project already holds the Sauce-service to connect to Sauce Labs. It will automatically update the testrun in the Sauce Labs cloud for you 
