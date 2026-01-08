(function() {
	'use strict';

	window.onload = function() {
		calc();
	}

	document.getElementById('calc').addEventListener('click', function() {
		calc();
	});

	document.getElementById('reset').addEventListener('click', function() {
		reset();
		calc();
	});

	function calc() {
		var game_t = 0;
		var big_t = 0;
		var reg_t = 0;
		var samai_t = 0;
		var daisu = 0;
	
		// 入力値取得
		var ItemList = document.getElementsByClassName("game"); 
		for(let i = 0; i < ItemList.length; i++) {
			if(ItemList.item(i).value !== '') {
				game_t += Number(ItemList.item(i).value);
				daisu++;
			}
		}

		ItemList = document.getElementsByClassName("big"); 
		for(let i = 0; i < ItemList.length; i++) {
			big_t += Number(ItemList.item(i).value);
		}

		ItemList = document.getElementsByClassName("reg"); 
		for(let i = 0; i < ItemList.length; i++) {
			reg_t += Number(ItemList.item(i).value);
		}

		ItemList = document.getElementsByClassName("samai"); 
		for(let i = 0; i < ItemList.length; i++) {
			samai_t += Number(ItemList.item(i).value);
		}

		// calc
		if(daisu == 0) {
			var game_a = 0;
			var samai_a = 0;
		} else {
			var game_a = (game_t / daisu).toFixed(0);
			var samai_a = (samai_t / daisu).toFixed(0);
		}

		if(big_t == 0) {
			var big_p = '-';
		} else {
			var big_p = '1/' + (game_t / big_t).toFixed(0);
		}
		
		if(reg_t == 0) {
			var reg_p = '-';
		} else {
			var reg_p = '1/' + (game_t / reg_t).toFixed(0);
		}

		var gousei_t = big_t + reg_t;
		if(gousei_t == 0) {
			var gousei_p = '-';
		} else {
			var gousei_p = '1/' + (game_t / gousei_t).toFixed(0);
		}

		if(game_t == 0) {
			var kikaiwari = '-';
		} else {
			var kikaiwari = (((samai_t+(3*game_t))/(3*game_t))*100).toFixed(1) + '%';
		}

		// output
		var output = 'game_t: ' + String(game_t) + ' , big_t: ' + String(big_t) + ' , reg_t: ' + String(reg_t) + ' , samai_t: ' + String(samai_t) + '<br>';
		//output += 'game_avg: ' + String(game_a) + ' , samai_avg: ' + String(samai_a) + '<br>';
		output += 'big_p: ' + String(big_p) + ' , reg_p: ' + String(reg_p) + ' , gousei_p: ' + String(gousei_p) + '<br>';
		output += '機械割: ' + String(kikaiwari);
		document.getElementById('output').innerHTML = output;
	}
	
	function reset() {
		$("input").val("");
	}

})();
