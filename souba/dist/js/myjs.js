(function() {
	'use strict';

	window.onload = function() {
	}

	document.getElementById('check1').addEventListener('click', function() {
		check1();
	});
	document.getElementById('check2').addEventListener('click', function() {
		check2();
	});

	document.getElementById('reset').addEventListener('click', function() {
		reset();
	});

	function toEUC(str) {
	    const unicodeArray = Encoding.stringToCode(str);
	    const eucArray = Encoding.convert(unicodeArray, {
	      to: 'EUCJP',
	      from: 'UNICODE'
	    });
	    return eucArray
	      .map(b => (b & 0xFF).toString(16).padStart(2, '0'))
	      .join('');
	}

	function check1() {
		var keyword1 = document.getElementById('keyword1').value;
		var keyword2 = document.getElementById('keyword2').value;
		var keyword3 = document.getElementById('keyword3').value;
		var keyword = keyword1 + ' ' + keyword2 + ' ' + keyword3;
		var url = 'https://aucfan.com/search1/q-~' + toEUC(keyword) + '/s-mc/?o=de&itemstatusmc%5B%5D=used10&itemstatusmc%5B%5D=used20&itemstatusmc%5B%5D=used40&itemstatusmc%5B%5D=used60&sellertype=i&shipping=free&shopid=';
		window.open(url);
	}

	function check2() {
		var keyword1 = document.getElementById('keyword1').value;
		var keyword2 = document.getElementById('keyword2').value;
		var keyword3 = document.getElementById('keyword3').value;
		var keyword = keyword1 + ' ' + keyword2 + ' ' + keyword3;
		var url = 'https://aucfan.com/search1/q-~' + toEUC(keyword) + '/s-ya/?o=t1&itemstatus=used&sellertype=i&location=0';
		window.open(url);
	}

	function reset() {
		$(".reset > input").val("");
	}

})();
