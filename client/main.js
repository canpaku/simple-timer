import { Meteor } from 'meteor/meteor';
import { Promise } from 'meteor/promise';

import '../imports/apps/body.html';

let count = 1;

let countup = function () {
    $(".passed").text(count++);
};

Meteor.setInterval(countup, 1000);

new Promise(function (reso) {

    function study_time(i) {
        return new Promise(function (resolve, reject) {
            Meteor.setTimeout(function () {
                console.log("10秒経ったよ！");
                resolve(i);
            },10000);
        }).then(function (count) {
            return new Promise(function (resolve, reject) {
                Meteor.setTimeout(function () {
                    console.log("5秒経ったよ！");
                    resolve(count + 1);
                }, 5000);
            })
        }).then(function (count) {
            if (count>10){
                reso();
            } else {
                study_time(count);
            }
        });
    }
    study_time(0);

}).then(function () {
    console.log("おわり！");
});