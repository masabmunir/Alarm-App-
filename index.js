//console.log("hello");


const alarmSubmit = document.getElementById("alarmSubmit").addEventListener('click', setAlarm);

let audio = new Audio ("https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3");

function ringbell(){
    audio.play();
}

function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`setting alarm for ${alarmDate}.....`);
    now = new Date();

    let timetoAlarm = alarmDate - now;
    console.log(timetoAlarm);
    if (timetoAlarm>=0) {
        setTimeout( ()=> {
            console.log("Ringing now")
            ringbell();
        }, timetoAlarm);

    }
}