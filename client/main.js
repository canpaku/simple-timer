import { Meteor } from 'meteor/meteor';
import { Promise } from 'meteor/promise';

import '../imports/apps/body.html';

// import { Tweets } from "../server/main";
//
// function insertDatabase(text) {
//
//     Tweets.insert({
//         text: text
//     });
// }

/////// 1秒毎に表示 ///////////////////////
let count = 1;
function start_count() {
    let countup = function () {
        $(".passed").text(count++);
    };
    timer = Meteor.setInterval(countup, 1000);
}


//////// これまでがんばった回数 ////////////
let ganbari = 0;

let otsukare = 0;

//////// ボタンが押されたとき実行する //////
onload = function(){
    let startbutton = document.getElementById("startbutton");
    let finishbutton = document.getElementById("finishbutton");

    startbutton.onclick = function () {
        /// カウントスタート！
        start_count();
        /// ループスタート！
        $(".mode_name").text("＼がんばりちゅう／");
        loop();
    }

    finishbutton.onclick = function () {
        otsukare = ganbari;
        Meteor.clearInterval(timer);
    }
}

//////// がんばり・きゅうけいループ ////////

function loop(goal_num) {
    new Promise(function (reso) {

        function study_time(i) {
            return new Promise(function (resolve, reject) {
                Meteor.setTimeout(function () {
                    ganbari++;
                    $(".mode_name").text("きゅうけいちゅう…");
                    resolve(i);
                },10000);
            }).then(function (count) {
                return new Promise(function (resolve, reject) {
                    Meteor.setTimeout(function () {
                        $(".mode_name").text("＼がんばりちゅう／");
                        resolve(count + 1);
                    }, 5000);
                })
            }).then(function (count) {
                // if (count>goal_num){
                //     reso();
                // } else {
                //     study_time(count);
                // }
                if (otsukare != 0){
                    reso();
                } else {
                    study_time(count);
                }
            });
        }
        study_time(0);

    }).then(function () {
        $(".mode_name").text("おつかれさま！");
        $(".ganbari").text(ganbari + "回がんばりました！");
    });
}
