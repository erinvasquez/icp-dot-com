/*
 * Author: Erin Vasquez
 * Last Modified: 10/12/2021
 * 
 * 
 * */

var countClicks = 0;

// gives a browser alert
function hello() {
    alert("Clicks: " + countClicks);
}

function countAClick() {
    countClicks++;
    hello();

}
