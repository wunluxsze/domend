// var now = new Date();
// var end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
// var res = Math.floor(end.getTime() - now.getTime() / 1000);
// console.log(res)




// document.querySelector('#date-input')
// .addEventListener('blur', function(){
//     let birthday = new Date(Date.parse(this.value))
//     let now = new Date
//     birthday.setFullYear(+now.getFullYear())
//     if (birthday <= now){
//         birthday.setFullYear(+birthday.getFullYear() + 1)
//     }
//     let diff = Math.round((+birthday - now) / 86400000)
//     document.getElementById('output').innerHTML = diff
// })


// function go(){
//     window.setInterval(timer, 1000);
// }
// function timer(){
//     var test = document.getElementById('test');
//     test.innerHTML = parseInt(test.innerHTML)+1;
// }



// function go(){
//     window.timerId = window.setInterval(timer, 500);
//     document.getElementById('go').disabled = true;
//     document.getElementById('stop').disabled = false;
// }

// function stop(){
//     window.clearInterval(window.timerId);
//     document.getElementById('go').disabled = false;
//     document.getElementById('stop').disabled = true;
// }
// function timer(){
//     var test = document.getElementById('test');
//     test.innerHTML = parseInt(test.innerHTML)+1;
// }
	


// function go(){
//     window.timerId = window.setInterval(clock, 500);
// }
// function clock(){
//     var clock = document.getElementById('clock');
//     var date = new Date();
//     clock.innerHTML = nums(date.getHours())+':'+nums(date.getMinutes())+':'+nums(date.getSeconds());
// }
// function nums(num){
//     if(num <=9) return '0'+num;
//         else return num;
// }



// function go(){
//     window.timerId = window.setInterval(timer, 1000);
//     document.getElementById('go').disabled = true;
// }

// function stop(){
//     window.clearInterval(window.timerId);
// }
// function timer(){
//     var test = document.getElementById('test');
//     var number = parseInt(test.innerHTML)-1;
//     test.innerHTML = number;
//     if(number == 0) {
//         stop();
//         var timetStop = document.getElementById('stop');
//         timetStop.innerHTML = 'Обратный отсчет завершен.';
//     }
// }



// function go(){
//     window.timerId = window.setInterval(timer, 1000);
// }
// function timer(){
//     if(window.number == undefined || window.number == 3) {
//         window.number = 1;
//     } else window.number = window.number + 1;
//     var img = document.getElementById('img');
//     img.src = 'assets/img/kot'+window.number+'.jpg'
// }




// function go(){
//     window.timerId = window.setInterval(timer, 700);
//     document.getElementById('go').disabled = true;
// } 
// function timer(){
//     var img1 = document.getElementById('img1');
//     var img2 = document.getElementById('img2');
//     var img3 = document.getElementById('img3');
//     var start = img1.src;
//     img1.src = img2.src;
//     img2.src = img3.src;
//     img3.src = start;
// }
	


// function go(){
//     window.timerId = window.setInterval(timer, 1000);
//     document.getElementById('go').disabled = true;
//     document.getElementById('stop').disabled = false;
// }
// function stop(){
//     window.clearInterval(window.timerId);
//     document.getElementById('go').disabled = false;
//     document.getElementById('stop').disabled = true;
// }
// function timer(){
//     var img1 = document.getElementById('img1');
//     var img2 = document.getElementById('img2');
//     var img3 = document.getElementById('img3');
//     var img4 = document.getElementById('img4');
//     var img5 = document.getElementById('img5');
//     var img6 = document.getElementById('img6');
//     var start = img1.src;
//     img1.src = img2.src;
//     img2.src = img3.src;
//     img3.src = img4.src;
//     img4.src = img5.src;
//     img5.src = img6.src;
//     img6.src = start;
// }


// function go(){
//     window.timerId = window.setInterval(timer, 1000);
// }
// function timer(){
//     var seconds = document.getElementById('seconds');
//     var minutes = document.getElementById('minutes');
//     var hours = document.getElementById('hours');
//     var now = new Date();
//     var midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0);
//     var diff =  Math.floor((midnight - now)/1000);
//     var hoursRemain   = Math.floor(diff/(60*60));
//     var minutesRemain = Math.floor((diff-hoursRemain*60*60)/60);
//     var secondsRemain = Math.floor(diff%60);
//     hours.innerHTML   = hoursRemain;
//     minutes.innerHTML = nums(minutesRemain);
//     seconds.innerHTML = nums(secondsRemain); 
// }
// function nums(num){
//     if(num <=9) return '0'+num;
//         else return num;
// }
	