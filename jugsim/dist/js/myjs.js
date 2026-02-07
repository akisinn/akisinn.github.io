(function() {
	'use strict';

	const SEED = 65536;

	function rdm(p) {
		if(Math.random() < p) {
			return true;
		} else {
			return false;
		}
	}

	function PtoB(p) {
		return 100/p;
	}

	function gousei2(a,b) {
		return (a*b)/(a+b);
	}

	function gousei3(a,b,c) {
		return gousei2(gousei2(a,b),c);
	}

	function gousei4(a,b,c,d) {
		return gousei2(gousei3(a,b,c),d);
	}

	function gousei5(a,b,c,d,e) {
		return gousei2(gousei4(a,b,c,d),e);
	}

	window.onload = function(){
		document.getElementById('sim2').style.display = 'none';
	}

	document.getElementById('sim1').addEventListener('click', function() {
		sim();
		document.getElementById('sim2').style.display = 'block';
	});

	document.getElementById('sim2').addEventListener('click', function() {
		sim();
	});

	function sim() {
		var keiki = true;
		switch(document.getElementById('kishu').options[document.getElementById('kishu').selectedIndex].value) {
			case 'neoim':
				var mai_big = 252;
				var mai_reg = 96;
				var p_tbig = [431.16,422.81,422.81,417.43,417.43,407.06];
				var p_cbig = [gousei2(1129.93,2184.53),gousei2(1129.93,2184.53),gousei2(1129.93,2184.53),gousei2(1092.27,1820.44),gousei2(1092.27,1820.44),gousei2(1092.27,1820.44)];
				var p_treg = [630.15,574.88,474.90,448.88,364.09,364.09];
				var p_creg = [1456.36,1310.72,1092.27,1057.03,851.12,851.12];
				var p_grape = [6.02,6.02,6.02,6.02,6.02,5.78];
				var mai_grape = 8;
				var p_replay = [7.3,7.3,7.3,7.3,7.3,7.3];
				var p_cherry = [35.62,35.62,35.62,35.62,35.62,35.62];
				var mai_cherry = 2;
				var p_bell = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_bell = 14;
				var p_pierrot = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_pierrot = 10;
				var sorou_bell = 0;
				var sorou_pierrot = 0;
				break;
			case 'my5':
				var mai_big = 240;
				var mai_reg = 96;
				var p_tbig = [420.10,414.78,404.54,376.64,348.60,341.33];
				var p_cbig = [1365.33,1365.33,1365.33,1365.33,1337.47,1129.93];
				var p_treg = [655.36,601.25,492.75,407.06,390.10,327.68];
				var p_creg = [1092.27,1074.36,1057.03,1008.25,862.32,762.05];
				var p_grape = [5.90,5.85,5.80,5.78,5.76,5.66];
				var mai_grape = 8;
				var p_replay = [7.3,7.3,7.3,7.3,7.3,7.3];
				var p_cherry = [38.10,38.10,36.82,35.62,35.62,35.62];
				var mai_cherry = 2;
				var p_bell = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_bell = 14;
				var p_pierrot = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_pierrot = 10;
				var sorou_bell = 0;
				var sorou_pierrot = 0;
				break;
			case 'ultramiracle':
				var mai_big = 240;
				var mai_reg = 96;
				var p_tbig = [267.5,261.1,256.0,242.7,233.2,216.3];
				var p_cbig = [0,0,0,0,0,0];
				var p_treg = [425.6,402.1,350.5,322.8,297.9,277.7];
				var p_creg = [0,0,0,0,0,0];
				var p_grape = [5.93,5.93,5.93,5.93,5.87,5.81];
				var mai_grape = 8;
				var p_replay = [7.3,7.3,7.3,7.3,7.3,7.3];
				var p_cherry = [37.22,37.22,37.22,37.09,36.13,35.48];
				var mai_cherry = 2;
				var p_bell = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_bell = 14;
				var p_pierrot = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_pierrot = 10;
				var sorou_bell = 0;
				var sorou_pierrot = 0;
				break;
			case 'funky2':
				var mai_big = 240;
				var mai_reg = 96;
				var p_tbig = [402.06,397.19,397.19,385.51,378.82,339.56];
				var p_cbig = [1456.36,1365.33,1337.47,1337.47,1260.31,1191.56];
				var p_treg = [636.27,574.88,512.00,448.88,409.60,356.17];
				var p_creg = [1424.70,1394.38,1285.02,1149.75,1110.78,992.97];
				var p_grape = [5.94,5.92,5.88,5.83,5.76,5.67];
				var mai_grape = 8;
				var p_replay = [7.3,7.3,7.3,7.3,7.3,7.3];
				var p_cherry = [35.62,35.62,35.62,35.62,35.62,35.62];
				var mai_cherry = 2;
				var p_bell = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_bell = 14;
				var p_pierrot = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_pierrot = 10;
				var sorou_bell = 0;
				var sorou_pierrot = 0;
				break;
			case 'gogo3':
				var mai_big = 240;
				var mai_reg = 96;
				var p_tbig = [259.0,258.0,257.0,254.0,247.3,234.9];
				var p_cbig = [0,0,0,0,0,0];
				var p_treg = [354.2,332.7,306.2,268.6,247.3,234.9];
				var p_creg = [0,0,0,0,0,0];
				var p_grape = [6.25,6.20,6.15,6.07,6.00,5.92];
				var mai_grape = 8;
				var p_replay = [7.3,7.3,7.3,7.3,7.3,7.3];
				var p_cherry = [33.56,33.47,33.32,33.15,33.10,32.97];
				var mai_cherry = 2;
				var p_bell = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_bell = 14;
				var p_pierrot = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_pierrot = 10;
				var sorou_bell = 0;
				var sorou_pierrot = 0;
				break;
			case 'happy3':
				var mai_big = 240;
				var mai_reg = 96;
				var p_tbig = [gousei3(436.9,4096.0,6553.6),gousei3(431.2,4096.0,6553.6),gousei3(412.2,4096.0,6553.6),gousei3(414.8,4096.0,6553.6),gousei3(376.6,4096.0,6553.6),gousei3(344.9,4096.0,6553.6)];
				var p_cbig = [gousei3(1489.5,6553.6,6553.6),gousei3(1489.5,6553.6,6553.6),gousei3(1489.5,6553.6,6553.6),gousei3(1213.6,6553.6,6553.6),gousei3(1213.6,6553.6,6553.6),gousei3(1213.6,6553.6,6553.6)];
				var p_treg = [636.3,569.9,532.8,478.4,436.9,425.6];
				var p_creg = [1057.0,993.0,885.6,809.1,728.2,642.5];
				var p_grape = [6.04,6.01,5.98,5.84,5.81,5.79];
				var mai_grape = 8;
				var p_replay = [7.3,7.3,7.3,7.3,7.3,7.3];
				var p_cherry = [62.18,62.47,63.02,64.00,64.63,65.41];
				var mai_cherry = 4;
				var p_bell = [655.36,655.36,655.36,655.36,655.36,655.36];
				var mai_bell = 14;
				var p_pierrot = [655.36,655.36,655.36,655.36,655.36,655.36];
				var mai_pierrot = 10;
				var sorou_bell = 1;
				var sorou_pierrot = 1;
				break;
			case 'girls':
				var mai_big = 240;
				var mai_reg = 96;
				var p_tbig = [273.07,270.81,260.06,250.14,243.63,225.99];
				var p_cbig = [0,0,0,0,0,0];
				var p_treg = [381.02,350.46,316.60,281.27,270.81,252.06];
				var p_creg = [0,0,0,0,0,0];
				var p_grape = [5.98,5.98,5.98,5.98,5.88,5.83];
				var mai_grape = 8;
				var p_replay = [7.3,7.3,7.3,7.3,7.3,7.3];
				var p_cherry = [33.56,33.47,33.32,33.15,33.10,32.97];
				var mai_cherry = 2;
				var p_bell = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_bell = 14;
				var p_pierrot = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_pierrot = 10;
				var sorou_bell = 0;
				var sorou_pierrot = 0;
				break;
			case 'mr':
				var mai_big = 240;
				var mai_reg = 96;
				var p_tbig = [268.6,267.5,260.1,249.2,240.9,237.4];
				var p_cbig = [0,0,0,0,0,0];
				var p_treg = [374.5,354.2,331.0,291.3,257.0,237.4];
				var p_creg = [0,0,0,0,0,0];
				var p_grape = [6.29,6.22,6.15,6.09,6.02,5.96];
				var mai_grape = 8;
				var p_replay = [7.3,7.3,7.3,7.3,7.3,7.3];
				var p_cherry = [37.24,37.24,37.24,37.24,37.24,37.24];
				var mai_cherry = 4;
				var p_bell = [655.4,655.4,655.4,655.4,655.4,655.4];
				var mai_bell = 14;
				var p_pierrot = [420.1,420.1,420.1,420.1,420.1,420.1];
				var mai_pierrot = 10;
				var sorou_bell = 1;
				var sorou_pierrot = 1;
				break;
			default:
				var mai_big = 252;
				var mai_reg = 96;
				var p_tbig = [431.16,422.81,422.81,417.43,417.43,407.06];
				var p_cbig = [1129.93,1129.93,1129.93,1092.27,1092.27,1092.27];
				var p_treg = [630.15,574.88,474.90,448.88,364.09,364.09];
				var p_creg = [1456.36,1310.72,1092.27,1057.03,851.12,851.12];
				var p_grape = [6.02,6.02,6.02,6.02,6.02,5.78];
				var mai_grape = 8;
				var p_replay = [7.3,7.3,7.3,7.3,7.3,7.3];
				var p_cherry = [35.62,35.62,35.62,35.62,35.62,35.62];
				var mai_cherry = 2;
				var p_bell = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_bell = 14;
				var p_pierrot = [1092.27,1092.27,1092.27,1092.27,1092.27,1092.27];
				var mai_pierrot = 10;
				var sorou_bell = 0;
				var sorou_pierrot = 0;
				break;
		}

		if(document.getElementById('settei').value === 'r') {
			var settei = Math.floor(Math.random() * 6) + 1;
		} else {
			var settei = Number(document.getElementById('settei').value);
		}

		var game = Number(document.getElementById('game').value);
		var kasidasi = Number(document.getElementById('kasidasi').value);
		var koukan = Number(document.getElementById('koukan').value);

		// makeBox
		var box = new Array(SEED);
		var pointer = 0;
		if(p_tbig[settei-1] !== 0) {
			for(var i=0;i<Math.round(SEED/p_tbig[settei-1]);i++) {
				box[pointer] = 'tbig';
				pointer++;
			}
		}
		if(p_cbig[settei-1] !== 0) {
			for(var i=0;i<Math.round(SEED/p_cbig[settei-1]);i++) {
				box[pointer] = 'cbig';
				pointer++;
			}
		}
		if(p_treg[settei-1] !== 0) {
			for(var i=0;i<Math.round(SEED/p_treg[settei-1]);i++) {
				box[pointer] = 'treg';
				pointer++;
			}
		}
		if(p_creg[settei-1] !== 0) {
			for(var i=0;i<Math.round(SEED/p_creg[settei-1]);i++) {
				box[pointer] = 'creg';
				pointer++;
			}
		}
		if(p_grape[settei-1] !== 0) {
			for(var i=0;i<Math.round(SEED/p_grape[settei-1]);i++) {
				box[pointer] = 'grape';
				pointer++;
			}
		}
		if(p_replay[settei-1] !== 0) {
			for(var i=0;i<Math.round(SEED/p_replay[settei-1]);i++) {
				box[pointer] = 'replay';
				pointer++;
			}
		}
		if(p_cherry[settei-1] !== 0) {
			for(var i=0;i<Math.round(SEED/p_cherry[settei-1]);i++) {
				box[pointer] = 'cherry';
				pointer++;
			}
		}
		if(p_bell[settei-1] !== 0) {
			for(var i=0;i<Math.round(SEED/p_bell[settei-1]);i++) {
				box[pointer] = 'bell';
				pointer++;
			}
		}
		if(p_pierrot[settei-1] !== 0) {
			for(var i=0;i<Math.round(SEED/p_pierrot[settei-1]);i++) {
				box[pointer] = 'pierrot';
				pointer++;
			}
		}
		for(;pointer<SEED;pointer++) {
			box[pointer] = 'hazure';
		}

		// 打つ
		var n_tbig = 0;
		var n_cbig = 0;
		var n_treg = 0;
		var n_creg = 0;
		var n_grape = 0;
		var n_replay = 0;
		var n_cherry = 0;
		var n_bell = 0;
		var n_pierrot = 0;
		var n_hazure = 0;

		var in_maisu = 0;
		var out_maisu = 0;
		var samai = 0;
		var tousi = 0;
		var bonuskan_tousi = 0;
		var bonuskan = 1;
		var output = '<table><tbody>';

		for(var i=1;i<=game;i++,bonuskan++) {
			if(samai < 3) {
				tousi += 1000;
				bonuskan_tousi += 1;
				samai += kasidasi;
			}

			samai -= 3;
			in_maisu += 3;

			switch(box[Math.floor(Math.random()*SEED)]) {
				case 'tbig':
					n_tbig++;
					out_maisu += mai_big - 1;
					samai += mai_big - 1;

					if(bonuskan_tousi == 0) {
						bonuskan_tousi = '';
					} else {
						bonuskan_tousi += 'k';
					}

					output += '<tr><td class="bonuskan">' + bonuskan + '</td><td class="big">BIG</td><td>単独</td><td class="bonuskan_tousi">' + bonuskan_tousi + '</td></tr>';
					bonuskan = 0;
					bonuskan_tousi = 0;
					break;
				case 'cbig':
					n_cbig++;
					out_maisu += mai_cherry;
					out_maisu += mai_big - 1;
					samai += mai_cherry;
					samai += mai_big - 1;

					if(bonuskan_tousi == 0) {
						bonuskan_tousi = '';
					} else {
						bonuskan_tousi += 'k';
					}

					output += '<tr><td class="bonuskan">' + bonuskan + '</td><td class="big">BIG</td><td>ﾁｪﾘｰ</td><td class="bonuskan_tousi">'  + bonuskan_tousi + '</td></tr>';
					bonuskan = 0;
					bonuskan_tousi = 0;
					break;
				case 'treg':
					n_treg++;
					out_maisu += mai_reg - 1;
					samai += mai_reg - 1;

					if(bonuskan_tousi == 0) {
						bonuskan_tousi = '';
					} else {
						bonuskan_tousi += 'k';
					}

					output += '<tr><td class="bonuskan">' + bonuskan + '</td><td class="reg">REG</td><td>単独</td><td class="bonuskan_tousi">' + bonuskan_tousi + '</td></tr>';
					bonuskan = 0;
					bonuskan_tousi = 0;
					break;
				case 'creg':
					n_creg++;
					out_maisu += mai_cherry;
					out_maisu += mai_reg - 1;
					samai += mai_cherry;
					samai += mai_reg - 1;

					if(bonuskan_tousi == 0) {
						bonuskan_tousi = '';
					} else {
						bonuskan_tousi += 'k';
					}

					output += '<tr><td class="bonuskan">' + bonuskan + '</td><td class="reg">REG</td><td>ﾁｪﾘｰ</td><td class="bonuskan_tousi">' + bonuskan_tousi + '</td></tr>';
					bonuskan = 0;
					bonuskan_tousi = 0;
					break;
				case 'grape':
					n_grape++;
					out_maisu += mai_grape;
					samai += mai_grape;
					break;
				case 'replay':
					n_replay++;
					out_maisu += 3;
					samai += 3;
					break;
				case 'cherry':
					n_cherry++;
					out_maisu += mai_cherry;
					samai += mai_cherry;
					break;
				case 'bell':
					n_bell++;
					if(rdm(sorou_bell)) {
						out_maisu += mai_bell;
						samai += mai_bell;
					}
					break;
				case 'pierrot':
					n_pierrot++;
					if(rdm(sorou_pierrot)) {
						out_maisu += mai_pierrot;
						samai += mai_pierrot;
					}
					break;
				case 'hazure':
					n_hazure++;
					break;
				default:
					break;
			}
		}

		if(bonuskan_tousi == 0) {
			bonuskan_tousi = '';
		} else {
			bonuskan_tousi += 'k';
		}

		output += '<tr><td class="bonuskan">' + (bonuskan-1) + '</td><td class="yame">ヤメ</td><td></td><td class="bonuskan_tousi">' + bonuskan_tousi + '</td></tr>';

		var n_big = n_tbig+n_cbig;
		var n_reg = n_treg+n_creg;

		if(n_big != 0) {
			var big_bunbo = '(1/' + (game/n_big).toFixed(0) + ')';
		} else {
			var big_bunbo = '';
		}

		if(n_tbig != 0) {
			var tbig_bunbo = '(1/' + (game/n_tbig).toFixed(0) + ')';
		} else {
			var tbig_bunbo = '';
		}

		if(n_cbig != 0) {
			var cbig_bunbo = '(1/' + (game/n_cbig).toFixed(0) + ')';
		} else {
			var cbig_bunbo = '';
		}

		if(n_reg != 0) {
			var reg_bunbo = '(1/' + (game/n_reg).toFixed(0) + ')';
		} else {
			var reg_bunbo = '';
		}

		if(n_treg != 0) {
			var treg_bunbo = '(1/' + (game/n_treg).toFixed(0) + ')';
		} else {
			var treg_bunbo = '';
		}

		if(n_creg != 0) {
			var creg_bunbo = '(1/' + (game/n_creg).toFixed(0) + ')';
		} else {
			var creg_bunbo = '';
		}

		if(n_big+n_reg != 0) {
			var gassan_bunbo = '1/' + (game/(n_big+n_reg)).toFixed(0);
		} else {
			var gassan_bunbo = '';
		}

		if(n_grape != 0) {
			var grape_bunbo = '1/' + (game/n_grape).toFixed(2);
		} else {
			var grape_bunbo = '';
		}

		output += '</tbody></table><p><span class="big">BIG</span>:' + n_big + '回' + big_bunbo + ', 単独:' + n_tbig + '回' + tbig_bunbo + ', ﾁｪﾘｰ重複:' + n_cbig + '回' + cbig_bunbo;
		output += '<br>REG:' + n_reg + '回' + reg_bunbo + ', 単独:' + n_treg + '回' + treg_bunbo + ', ﾁｪﾘｰ重複:' + n_creg + '回' + creg_bunbo;
		output += '<br>ﾎﾞｰﾅｽ合算:' + gassan_bunbo + ', ぶどう:' + grape_bunbo;
		output += '<br>投資:' + tousi + '円, 獲得枚数:' + samai + '枚, 収支:' + (Math.round(((samai*1000/koukan)-tousi)/100)*100) + '円, 出玉率:' + (Math.round((out_maisu/in_maisu)*1000)/10).toFixed(1) + '%</p>';

		if(document.getElementById('settei').value === 'r') {
			output += '<p class="r">' + settei + '</p>';
		}

		document.getElementById('output').innerHTML = output;

		window.scrollTo(0,0);
	}
})();
