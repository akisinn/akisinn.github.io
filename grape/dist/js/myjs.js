(function() {
	'use strict';

	// グローバル変数
	var kishu = new Object();

	function notCherry(a,b) {
		return (a*b)/(b-1);
	}

	function PtoB(p) {
		return 100/p;
	}

	function gousei(a,b) {
		return (a*b)/(a+b);
	}

	// 機種情報を取得
	function getKishuInfo() {
		kishu.name = document.getElementById('kishu').options[document.getElementById('kishu').selectedIndex].value;
		var cherry_f = $('input:radio[name="cherry_f"]:checked').val();
		
		switch(kishu.name) {
			case 'umiracle':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [267.5,261.1,256.0,242.7,233.2,216.3];
				kishu.p_reg = [425.6,402.1,350.5,322.8,297.9,277.7];
				kishu.p_gousei = [164.3,158.3,147.9,138.6,130.8,121.6];
				kishu.p_grape = [5.93,5.93,5.93,5.93,5.87,5.81];
				kishu.header = 'ぶどう';
				kishu.kikaiwari = [98.04,99.22,100.98,103.37,105.73,109.37];
				kishu.prm1 = 239;
				kishu.prm2 = 95;
				// 値不明のためガールズの数値を使用
				kishu.prm3 = 0.411;
				switch (cherry_f) {
					case '0':
						kishu.prm4 = 0.0675;
						break;
					case '1':
						kishu.prm4 = 0.0387;
						break;
				}
				break;

			case 'mr':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [268.6,267.5,260.1,249.2,240.9,237.4];
				kishu.p_reg = [374.5,354.2,331.0,291.3,257.0,237.4];
				kishu.p_gousei = [156.4,152.4,145.6,134.3,124.4,118.7];
				kishu.p_grape = [6.29,6.22,6.15,6.09,6.02,5.96];
				kishu.header = 'ぶどう';
				kishu.kikaiwari = [99.5,100.52,102.37,105.24,108.09,109.89];
				kishu.prm1 = 239;
				kishu.prm2 = 95;
				kishu.prm3 = 0.411;
				switch (cherry_f) {
					case '0':
						kishu.prm4 = 0.159723;
						break;
					case '1':
						kishu.prm4 = 0.088723;
						break;
				}
				break;

			case 'girls':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.07,270.81,260.06,250.14,243.63,225.99];
				kishu.p_reg = [381.02,350.46,316.60,281.27,270.81,252.06];
				kishu.p_gousei = [159.1,152.8,142.8,132.4,128.3,119.2];
				kishu.p_grape = [5.98,5.98,5.98,5.98,5.88,5.83];
				kishu.header = 'ぶどう';
				kishu.kikaiwari = [98.19,99.12,101.19,103.51,105.42,108.94];
				kishu.prm1 = 239;
				kishu.prm2 = 95;
				kishu.prm3 = 0.411;
				switch (cherry_f) {
					case '0':
						kishu.prm4 = 0.0675;
						break;
					case '1':
						kishu.prm4 = 0.0387;
						break;
				}
				break;

			case 'gogo3':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [259.0,258.0,257.0,254.0,247.3,234.9];
				kishu.p_reg = [354.2,332.7,306.2,268.6,247.3,234.9];
				kishu.p_gousei = [149.6,145.3,139.7,130.5,123.7,117.4];
				kishu.p_grape = [6.25,6.20,6.15,6.07,6.00,5.92];
				kishu.header = 'ぶどう';
				kishu.kikaiwari = [98.46,99.51,100.88,102.94,105.45,108.29];
				kishu.prm1 = 239;
				kishu.prm2 = 95;
				kishu.prm3 = 0.411;
				switch (cherry_f) {
					case '0':
						kishu.prm4 = 0.0661;
						break;
					case '1':
						kishu.prm4 = 0.0372;
						break;
				}
				break;

			case 'my5':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.1,270.8,266.4,254.0,240.1,229.1];
				kishu.p_reg = [409.6,385.5,336.1,290.0,268.6,229.1];
				kishu.p_gousei = [163.8,159.1,148.6,135.4,126.8,114.6];
				kishu.p_grape = [5.90,5.85,5.80,5.78,5.76,5.66];
				kishu.header = 'ぶどう';
				kishu.kikaiwari = [97.83,98.95,101.19,104.31,107.19,111.65];
				kishu.prm1 = 239.25;
				kishu.prm2 = 95.25;
				kishu.prm3 = 0.411;
				switch (cherry_f) {
					case '0':
						kishu.prm4 = 0.05847;
						break;
					case '1':
						kishu.prm4 = 0.04228;
						break;
				}
				break;

			case 'funky2':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [266.4,259.0,256.0,249.2,240.1,219.9];
				kishu.p_reg = [439.8,407.1,366.1,322.8,299.3,262.1];
				kishu.p_gousei = [165.9,158.3,150.7,140.6,133.2,119.6];
				kishu.p_grape = [5.94,5.92,5.88,5.83,5.76,5.67];
				kishu.header = 'ぶどう';
				kishu.kikaiwari = [97.83,99.36,100.99,103.40,106.04,111.35];
				kishu.prm1 = 239.25;
				kishu.prm2 = 95.25;
				kishu.prm3 = 0.411;
				switch (cherry_f) {
					case '0':
						kishu.prm4 = 0.0603;
						break;
					case '1':
						kishu.prm4 = 0.04324;
						break;
				}
				break;

			case 'happy3':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.1,270.8,263.2,254.0,239.2,226.0];
				kishu.p_reg = [397.2,362.1,332.7,300.6,273.1,256.0];
				kishu.p_gousei = [161.8,154.9,146.9,137.7,127.5,120.0];
				kishu.p_grape = [6.04,6.01,5.98,5.84,5.81,5.79];
				kishu.header = 'ぶどう';
				kishu.kikaiwari = [97.90,99.15,101.00,104.20,107.45,110.34];
				kishu.prm1 = 239.25;
				kishu.prm2 = 95.7;
				kishu.prm3 = 0.411;
				switch (cherry_f) {
					case '0':
						kishu.prm4 = 0.1087;
						break;
					case '1':
						kishu.prm4 = 0.0662;
						break;
				}
				break;

			case 'neoim':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.1,269.7,269.7,259.0,259.0,255.0];
				kishu.p_reg = [439.8,399.6,331.0,315.1,255.0,255.0];
				kishu.p_gousei = [168.5,161.0,148.6,142.2,128.5,127.5];
				kishu.p_grape = [6.02,6.02,6.02,6.02,6.02,5.78];
				kishu.header = 'ぶどう';
				kishu.kikaiwari = [97.97,99.09,100.75,102.53,104.93,107.29];
				kishu.prm1 = 251.25;
				kishu.prm2 = 95.25;
				kishu.prm3 = 0.411;
				switch (cherry_f) {
					case '0':
						kishu.prm4 = 0.06068;
						break;
					case '1':
						kishu.prm4 = 0.040475;
						break;
				}
				break;

			default:
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.1,269.7,269.7,259.0,259.0,255.0];
				kishu.p_reg = [439.8,399.6,331.0,315.1,255.0,255.0];
				kishu.p_gousei = [168.5,161.0,148.6,142.2,128.5,127.5];
				kishu.p_grape = [6.02,6.02,6.02,6.02,6.02,5.78];
				kishu.header = 'ぶどう';
				kishu.kikaiwari = [97.97,99.09,100.75,102.53,104.93,107.29];
				kishu.prm1 = 251.25;
				kishu.prm2 = 95.25;
				kishu.prm3 = 0.411;
				switch (cherry_f) {
					case '0':
						kishu.prm4 = 0.06068;
						break;
					case '1':
						kishu.prm4 = 0.040475;
						break;
				}
				break;
		}
	}

	window.onload = function() {
		getKishuInfo();
		suisoku();
	}

	document.getElementById('kishu').addEventListener('change', function() {
		reset();
		getKishuInfo();
		suisoku();
	});

	$('input:radio[name="cherry_f"]').change(function() {
		getKishuInfo();
		suisoku();
	});

	document.getElementById('suisoku').addEventListener('click', function() {
		getKishuInfo();
		suisoku();
	});

	document.getElementById('reset').addEventListener('click', function() {
		reset();
		suisoku();
	});

	// t:試行回数,n:出現回数,p:出現確率
	function calc(t,n,p) {
		if (t === 0 || t === "" || n === "") return 1;
		if (p === 0) p=1000000000;
		var lc = [];
		lc[0] = 0;
		lc[1] = 0;
		var ls = 0;
		for (var i=2; i<=t; i++) {
			ls += Math.log(i);
			lc[i] = ls;
		}
		return Math.exp(lc[t]-lc[n]-lc[t-n]+(n*Math.log(1/p))+((t-n)*Math.log(1-(1/p))));
	}

	function suisoku() {
		// 入力値取得
		var game = Number(document.getElementById('game').value);
		var big = Number(document.getElementById('big').value);
		var reg = Number(document.getElementById('reg').value);
		//var samai = Number(document.getElementById('samai').value);
		var samai_tmp = document.getElementById('samai').value;
		var samai = Number(samai_tmp.replace(/[#*]/g, "-"));

		// ぶどう確率計算とぶどう回数
		var u_grape;
		u_grape = game/(((samai-(samai*2))-((game*3)-((big*kishu.prm1)+(reg*kishu.prm2)+(game*kishu.prm3)+(game*kishu.prm4))))/8)-(game/(((samai-(samai*2))-((game*3)-((big*kishu.prm1)+(reg*kishu.prm2)+(game*kishu.prm3)+(game*kishu.prm4))))/8)*2);

		if (isNaN(u_grape)) {
			var u_grape = '-';
			var grape = '';
		} else {
			u_grape = u_grape.toFixed(2);
			var grape = (game / u_grape).toFixed(0);
		}

		// 設定推測
		var tmp_big = new Array();
		var tmp_reg = new Array();
		var tmp_grape = new Array();
		var tmp1 = new Array();
		var tmp2 = 0;
		var suisoku = new Array();

		for (var i=0; i<kishu.settei.length; i++) {
			tmp_big[i] = calc(game, big, kishu.p_big[i]);
			tmp_reg[i] = calc(game, reg, kishu.p_reg[i]);
			tmp_grape[i] = calc(game, grape, kishu.p_grape[i]);
			tmp1[i] = tmp_big[i] * tmp_reg[i] * tmp_grape[i];
			tmp2 += tmp1[i];
		}

		for (var i=0; i<kishu.settei.length; i++) {
			if (isFinite((tmp1[i] / tmp2) * 100)) {
				suisoku[i] = ((tmp1[i] / tmp2) * 100).toFixed(0);
			} else {
				suisoku[i] = '-';
			}
		}

		// 確率計算
		if (isFinite(game/big)) {
			var u_big = (game/big).toFixed(0);
		} else {
			var u_big = '-';
		}

		if (isFinite(game/reg)) {
			var u_reg = (game/reg).toFixed(0);
		} else {
			var u_reg = '-';
		}

		if (isFinite(game/(big+reg))) {
			var u_gousei = (game/(big+reg)).toFixed(0);
		} else {
			var u_gousei = '-';
		}

		// 平均設定計算
		var u_settei = 0;
		for(var i=0; i<kishu.settei.length; i++) {
			u_settei += (suisoku[i] / 100) * (i+1);
		}

		if (isFinite(u_settei)) {
			u_settei = u_settei.toFixed(1);
		} else {
			u_settei = '-';
		}

		// 機械割計算
		var u_kikaiwari = 0;
		for(var i=0; i<kishu.settei.length; i++) {
			u_kikaiwari += (suisoku[i] / 100) * Number(kishu.kikaiwari[i]);
		}

		if (isFinite(u_kikaiwari)) {
			u_kikaiwari = u_kikaiwari.toFixed(1);
		} else {
			u_kikaiwari = '-';
		}

		// output
		// テーブルhead
		var output = '<div class="scroll"><table><thead><tr><th>設定</th><th>推測</th><th>BIG</th><th>REG</th><th>合算</th><th>' + kishu.header + '</th><th>割</th></tr></thead><tbody>';

		// テーブルbody
		for(var i=0; i<kishu.settei.length; i++) {
			output += '<tr><td>' + kishu.settei[i] + '</td><td>' + suisoku[i] + '</td><td>' + kishu.p_big[i].toFixed(0) + '</td><td>' + kishu.p_reg[i].toFixed(0) + '</td><td>' + kishu.p_gousei[i].toFixed(0) + '</td><td>' + kishu.p_grape[i].toFixed(2) + '</td><td>' + kishu.kikaiwari[i].toFixed(1) + '</td></tr>';
		}

		// あなた
		output += '<tr class="u"><td>' + u_settei + '</td>';

		if (Number(suisoku[kishu.settei.length-1]) + Number(suisoku[kishu.settei.length-2]) >= 50) {
			output += '<td class="go">GO!</td>';
		} else {
			output += '<td>-</td>';
		}

		output += '<td>' + u_big + '</td><td>' + u_reg + '</td><td>' + u_gousei + '</td><td>' + u_grape + '</td><td>' + u_kikaiwari + '</td></tr></tbody></table></div>';

		document.getElementById('output').innerHTML = output;
	}

	function reset() {
		$(".reset > input").val("");
		document.getElementsByName("cherry_f")[0].checked = true;
	}

})();
