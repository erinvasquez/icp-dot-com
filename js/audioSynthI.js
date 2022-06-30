/*
 * Made with help from: https://modernweb.com/audio-synthesis-javascript/
 * 
 * 
 * 
 **/

var context = new window.webkitAudioContext();

var osc = context.createOscillator();
osc.frequency.value = 440;
osc.connect(context.destination);

// create an annoying sound in our speaker
osc.start(0);

var gain = context.createGain();
gain.gain.value = 100;
gain.connect(osc.frequency);

var osc2 = context.createOscillator)(;
osc2.frequency.value = 1;
osc2.connect(gain);
osc2.start(0);