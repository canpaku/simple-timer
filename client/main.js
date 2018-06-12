import { Meteor } from 'meteor/meteor';
import { Promise } from 'meteor/promise';

new Promise(function (resolve) {
    console.time("1");
    Meteor.setTimeout(function () {
        console.log("step1");
        step1ok = 1;
        resolve(step1ok);
        console.timeEnd("1");
    },5000);
}).then(function (step1ok) {
    console.time("2");
    return new Promise(function (resolve) {
        Meteor.setTimeout(function () {
            console.log("step2");
            step2ok = 1;
            resolve(step2ok);
            console.timeEnd("2");
        },1000);
    })
}).then(function (step2ok) {
    console.time("3");
    Meteor.setTimeout(function () {
        console.log("step3");
        step3ok = "ok";
        console.timeEnd("3");
    },2000);
});