## Activities to build or migrate an application using Apige


### How to run

This project is setup in a way to run using firebase multisite hosting. Ofcourse, you should be able to run however you would like as well

Learn more here,
https://firebase.google.com/docs/hosting/multisites


```
cd build-an-app
firebase serve --only hosting:build

```

```
cd migrate-an-app
firebase server --only hosting:target
```