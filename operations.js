
// *Day,Date,Month,Year*
setInterval(1000);
let latest1 = new Date();
let day = latest1.toLocaleString('en-us', { weekday: 'long' }), date = latest1.getDate(), month = latest1.toLocaleString('en-us', { month: 'long' }), year = latest1.getFullYear();

// Display Day,Date,Month,Year in Card
document.getElementById('Day').textContent = `${day}`, document.getElementById('Date').textContent = `${month} ${date}, ${year}`;


// *Card Operations*

// First Card
document.getElementById('btn1').addEventListener('click', function () {
    // Task Decrease Section
    document.getElementById('task-count').innerText = parseInt(document.getElementById('task-count').innerText) - 1;

    // Check Box Increase
    document.getElementById('check-box').innerText = parseInt(document.getElementById('check-box').innerText) + 1;

    // Alert Section
    alert(document.getElementById('hdr1').innerText);

    //Button low visibility & disable Section
    document.getElementById('btn1').style.opacity = "0.3";
    document.getElementById('btn1').disabled = true;

    // Activity Log Create
    let div1 = document.createElement('div'), para = document.createElement('p');

    div1.classList.add('w-[21rem]', 'h-[4.25rem]', 'rounded-lg', 'p-[10px]', 'bg-[#F4F7FF]', 'flex', 'justify-center', 'mt-6'), para.classList.add('regular', 'text-base', 'tracking-wide');

    // *Time*
    setInterval(1000);
    let latest2 = new Date();
    let hour = latest2.getHours(), minute = latest2.getMinutes(), second = latest2.getSeconds(), temp = "";


    // Condition for Display Acurate Time
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    if (hour < 12) temp = "AM";
    if (hour >= 12) temp = "PM";

    // Display Time in Activity Log
    para.textContent = 'You have Complete The Task ' + document.getElementById('hdr1').innerText + ` ${hour}:${minute}:${second} ` + temp;
    document.getElementById('activity-log').appendChild(div1);
    div1.appendChild(para);
})

// Second Card
document.getElementById('btn2').addEventListener('click', function () {
    // Task Decrease Section
    document.getElementById('task-count').innerText = parseInt(document.getElementById('task-count').innerText) - 1;

    // Check Box Increase
    document.getElementById('check-box').innerText = parseInt(document.getElementById('check-box').innerText) + 1;

    // Alert Section
    alert(document.getElementById('hdr2').innerText);

    //Button low visibility & disable Section
    document.getElementById('btn2').style.opacity = "0.3";
    document.getElementById('btn2').disabled = true;

    // Activity Log Create
    let div1 = document.createElement('div'), para = document.createElement('p');

    div1.classList.add('w-[21rem]', 'h-[4.25rem]', 'rounded-lg', 'p-[10px]', 'bg-[#F4F7FF]', 'flex', 'justify-center', 'mt-6'), para.classList.add('regular', 'text-base', 'tracking-wide');

    // *Time*
    setInterval(1000);
    let latest2 = new Date();
    let hour = latest2.getHours(), minute = latest2.getMinutes(), second = latest2.getSeconds(), temp = "";


    // Condition for Display Acurate Time
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    if (hour < 12) temp = "AM";
    if (hour >= 12) temp = "PM";

    // Display Time in Activity Log
    para.textContent = 'You have Complete The Task ' + document.getElementById('hdr2').innerText + ` ${hour}:${minute}:${second} ` + temp;
    document.getElementById('activity-log').appendChild(div1);
    div1.appendChild(para);
})

// Third Card
document.getElementById('btn3').addEventListener('click', function () {
    // Task Decrease Section
    document.getElementById('task-count').innerText = parseInt(document.getElementById('task-count').innerText) - 1;

    // Check Box Increase
    document.getElementById('check-box').innerText = parseInt(document.getElementById('check-box').innerText) + 1;

    // Alert Section
    alert(document.getElementById('hdr3').innerText);

    //Button low visibility & disable Section
    document.getElementById('btn3').style.opacity = "0.3";
    document.getElementById('btn3').disabled = true;

    // Activity Log Create
    let div1 = document.createElement('div'), para = document.createElement('p');

    div1.classList.add('w-[21rem]', 'h-[4.25rem]', 'rounded-lg', 'p-[10px]', 'bg-[#F4F7FF]', 'flex', 'justify-center', 'mt-6'), para.classList.add('regular', 'text-base', 'tracking-wide');

    // *Time*
    setInterval(1000);
    let latest2 = new Date();
    let hour = latest2.getHours(), minute = latest2.getMinutes(), second = latest2.getSeconds(), temp = "";


    // Condition for Display Acurate Time
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    if (hour < 12) temp = "AM";
    if (hour >= 12) temp = "PM";

    // Display Time in Activity Log
    para.textContent = 'You have Complete The Task ' + document.getElementById('hdr3').innerText + ` ${hour}:${minute}:${second} ` + temp;

    document.getElementById('activity-log').appendChild(div1);
    div1.appendChild(para);
})

// Fourth Card
document.getElementById('btn4').addEventListener('click', function () {
    // Task Decrease Section
    document.getElementById('task-count').innerText = parseInt(document.getElementById('task-count').innerText) - 1;

    // Check Box Increase
    document.getElementById('check-box').innerText = parseInt(document.getElementById('check-box').innerText) + 1;

    // Alert Section
    alert(document.getElementById('hdr4').innerText);

    //Button low visibility & disable Section
    document.getElementById('btn4').style.opacity = "0.3";
    document.getElementById('btn4').disabled = true;

    // Activity Log Create
    let div1 = document.createElement('div'), para = document.createElement('p');

    div1.classList.add('w-[21rem]', 'h-[4.25rem]', 'rounded-lg', 'p-[10px]', 'bg-[#F4F7FF]', 'flex', 'justify-center', 'mt-6'), para.classList.add('regular', 'text-base', 'tracking-wide');

    // *Time*
    setInterval(1000);
    let latest2 = new Date();
    let hour = latest2.getHours(), minute = latest2.getMinutes(), second = latest2.getSeconds(), temp = "";


    // Condition for Display Acurate Time
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    if (hour < 12) temp = "AM";
    if (hour >= 12) temp = "PM";

    // Display Time in Activity Log
    para.textContent = 'You have Complete The Task ' + document.getElementById('hdr4').innerText + ` ${hour}:${minute}:${second} ` + temp;

    document.getElementById('activity-log').appendChild(div1);
    div1.appendChild(para);
})

// Fifth Card
document.getElementById('btn5').addEventListener('click', function () {
    // Task Decrease Section
    document.getElementById('task-count').innerText = parseInt(document.getElementById('task-count').innerText) - 1;

    // Check Box Increase
    document.getElementById('check-box').innerText = parseInt(document.getElementById('check-box').innerText) + 1;

    // Alert Section
    alert(document.getElementById('hdr5').innerText);

    //Button low visibility & disable Section
    document.getElementById('btn5').style.opacity = "0.3";
    document.getElementById('btn5').disabled = true;

    // Activity Log Create
    let div1 = document.createElement('div'), para = document.createElement('p');

    div1.classList.add('w-[21rem]', 'h-[4.25rem]', 'rounded-lg', 'p-[10px]', 'bg-[#F4F7FF]', 'flex', 'justify-center', 'mt-6'), para.classList.add('regular', 'text-base', 'tracking-wide');

    // *Time*
    setInterval(1000);
    let latest2 = new Date();
    let hour = latest2.getHours(), minute = latest2.getMinutes(), second = latest2.getSeconds(), temp = "";


    // Condition for Display Acurate Time
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    if (hour < 12) temp = "AM";
    if (hour >= 12) temp = "PM";

    // Display Time in Activity Log
    para.textContent = 'You have Complete The Task ' + document.getElementById('hdr5').innerText + ` ${hour}:${minute}:${second} ` + temp;

    document.getElementById('activity-log').appendChild(div1);
    div1.appendChild(para);
})

// Sixth Card
document.getElementById('btn6').addEventListener('click', function () {
    // Task Decrease Section
    document.getElementById('task-count').innerText = parseInt(document.getElementById('task-count').innerText) - 1;

    // Check Box Increase
    document.getElementById('check-box').innerText = parseInt(document.getElementById('check-box').innerText) + 1;

    // Alert Section
    alert(document.getElementById('hdr6').innerText);

    //Button low visibility & disable Section
    document.getElementById('btn6').style.opacity = "0.3";
    document.getElementById('btn6').disabled = true;

    // Activity Log Create
    let div1 = document.createElement('div'), para = document.createElement('p');

    div1.classList.add('w-[21rem]', 'h-[4.25rem]', 'rounded-lg', 'p-[10px]', 'bg-[#F4F7FF]', 'flex', 'justify-center', 'mt-6'), para.classList.add('regular', 'text-base', 'tracking-wide');

    // *Time*
    setInterval(1000);
    let latest2 = new Date();
    let hour = latest2.getHours(), minute = latest2.getMinutes(), second = latest2.getSeconds(), temp = "";


    // Condition for Display Acurate Time
    if (hour < 10) hour = '0' + hour;
    if (minute < 10) minute = '0' + minute;
    if (second < 10) second = '0' + second;
    if (hour < 12) temp = "AM";
    if (hour >= 12) temp = "PM";

    // Display Time in Activity Log
    para.textContent = 'You have Complete The Task ' + document.getElementById('hdr6').innerText + ` ${hour}:${minute}:${second} ` + temp;

    document.getElementById('activity-log').appendChild(div1);
    div1.appendChild(para);
})

// Activity Log Clear
document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('activity-log').innerHTML = "";
})


