// cuvanje podataka - localStorage
// To je default mesto 

var btn1 = document.getElementById('btn1');

var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var i = 0;
var d = 0;
var player1 = Number(localStorage.getItem('Player1'));
var player2 = Number(localStorage.getItem('Player2'));

if(localStorage.getItem('pobednik') == '1') {
	setTimeout(function() {
		alert('Prethodnu igru je dobio player 1')
	},500);
	 localStorage.setItem('Player1',++player1);
	
}else if (localStorage.getItem('pobednik') == '2') {
  	alert('Prethodnu igru je dobio player 2')
  	localStorage.setItem('Player2',++player2);
}

btn1.addEventListener('click',function() {
		i++;
		score1.innerHTML = i;
	if( i == 20) {
		setTimeout(function() {
			alert('Pobednik je Player 1');
		},500);
		localStorage.setItem('pobednik','1');
	}	
});

addEventListener('keydown',function() {
	d++;
	score2.innerHTML = d;
	if( d == 20) {
		alert('Pobednik je Player 2');
		localStorage.setItem('pobednik','2');
	}	
})

alert('Player 1 ima ' +player1 + 'pobeda do sad ');
alert('Player 2 ima ' +player2 + 'pobeda do sad ');