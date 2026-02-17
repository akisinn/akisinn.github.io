(function() {
	'use strict';

	window.onload = function() {
		keisan();
	}

	$('input:radio[name="haisou"]').change(function() {
		keisan();
	});

	$('input:radio[name="tesuu"]').change(function() {
		keisan();
	});

	document.getElementById('keisan').addEventListener('click', function() {
		keisan();
	});

	document.getElementById('reset').addEventListener('click', function() {
		reset();
		keisan();
	});

	function keisan() {
		var kakaku = Number(document.getElementById('kakaku').value);
		var genka = Number(document.getElementById('genka').value);
		var haisou = Number($('input:radio[name="haisou"]:checked').val());
		var tesuu = Number($('input:radio[name="tesuu"]:checked').val());

		var rieki = kakaku - genka - haisou - (kakaku * tesuu);
		var riekiritu = (rieki / kakaku) * 100;
		
		var mokuhyou_riekiritu = 0.3;
		var mokuhyou_kakaku30 = (genka + haisou) / (1 - tesuu - mokuhyou_riekiritu);
		var mokuhyou_genka30 = kakaku * (1 - tesuu - mokuhyou_riekiritu) - haisou;
		var mokuhyou_riekiritu = 0.2;
		var mokuhyou_kakaku20 = (genka + haisou) / (1 - tesuu - mokuhyou_riekiritu);
		var mokuhyou_genka20 = kakaku * (1 - tesuu - mokuhyou_riekiritu) - haisou;
		var mokuhyou_riekiritu = 0.1;
		var mokuhyou_kakaku10 = (genka + haisou) / (1 - tesuu - mokuhyou_riekiritu);
		var mokuhyou_genka10 = kakaku * (1 - tesuu - mokuhyou_riekiritu) - haisou;
		var mokuhyou_riekiritu = 0;
		var mokuhyou_kakaku0 = (genka + haisou) / (1 - tesuu - mokuhyou_riekiritu);
		var mokuhyou_genka0 = kakaku * (1 - tesuu - mokuhyou_riekiritu) - haisou;

		var output = '利益:' + rieki + ', 利益率:' + riekiritu.toFixed(1) + '%<br>';
		output += '目標価格:[30%]' + mokuhyou_kakaku30.toFixed(0) + ' [20%]' + mokuhyou_kakaku20.toFixed(0) + ' [10%]' + mokuhyou_kakaku10.toFixed(0) + ' [0%]' + mokuhyou_kakaku0.toFixed(0) + '<br>';
		output += '目標原価:[30%]' + mokuhyou_genka30.toFixed(0) + ' [20%]' + mokuhyou_genka20.toFixed(0) + ' [10%]' + mokuhyou_genka10.toFixed(0) + ' [0%]' + mokuhyou_genka0.toFixed(0);

		document.getElementById('output').innerHTML = output;
	}

	function reset() {
		$(".reset > input").val("");
		document.getElementsByName("haisou")[0].checked = true;
		document.getElementsByName("tesuu")[0].checked = true;
	}

})();
