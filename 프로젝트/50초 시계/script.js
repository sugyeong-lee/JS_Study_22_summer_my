function printClock() {
    
    var clock = document.getElementById("clock");            // 출력할 장소 선택
    var currentDate = new Date();
    var amPm = 'AM'; // 초기값 AM                                     // 현재시간
    var Hours = addZeros(currentDate.getHours(),2); 
    var Minute = addZeros(currentDate.getMinutes() ,2);
    var Seconds =  addZeros(currentDate.getSeconds(),2);
    
    if(Hours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
    	amPm = 'PM';
    	Hours = addZeros(Hours - 12,2);
    }

    if(Seconds >= 50){// 50초 이상일 때 색을 변환해 준다.
        Hours = '<span style="color:#de1951;">'+Hours+'</span>'
        Seconds = '<span style="color:#de1951;">'+Seconds+'</span>'
    }
    clock.innerHTML = Hours+":"+Minute+":"+Seconds +" <span style='font-size:50px;'>"+ amPm+"</span>"; //날짜를 출력해 줌
    
    setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출
}

function addZeros(num, digit) { // 자릿수 맞춰주기
	  var zero = '';
	  num = num.toString();
	  if (num.length < digit) {
	    for (i = 0; i < digit - num.length; i++) {
	      zero += '0';
	    }
	  }
	  return zero + num;
}