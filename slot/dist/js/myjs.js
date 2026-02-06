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

	function gousei2(a,b) {
		return (a*b)/(a+b);
	}

	function gousei3(a,b,c) {
		return gousei2((a*b)/(a+b),c);
	}

	// 機種情報を取得
	function getKishuInfo() {
		switch(document.getElementById('kishu').options[document.getElementById('kishu').selectedIndex].value) {
			case 'umiracle':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [267.5,261.1,256.0,242.7,233.2,216.3];
				kishu.p_reg = [425.6,402.1,350.5,322.8,297.9,277.7];
				kishu.p_gousei = [164.3,158.3,147.9,138.6,130.8,121.6];
				kishu.kikaiwari = [98.04,99.22,100.98,103.37,105.73,109.37];
				kishu.name_input = [];
				kishu.maxlength_input = [];
				kishu.name_prm = ["非重複<br>ﾁｪﾘｰ","ぶどう"];
				kishu.maxlength_prm = [4,4];
				kishu.calcvar_prm = ["sa_game","sa_game"];
				kishu.decimaldigits_prm = [1,2];
				kishu.p_prm = [
					[37.22,37.22,37.22,37.09,36.13,35.48],
					[5.93,5.93,5.93,5.93,5.87,5.81]
				];
				kishu.memo = "\
				<img src='https://psmaga.com/db/s_conq/kitac_slot/127/img/r01.png'><br>\
				"
				break;

			case 'mr':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [268.6,267.5,260.1,249.2,240.9,237.4];
				kishu.p_reg = [374.5,354.2,331.0,291.3,257.0,237.4];
				kishu.p_gousei = [156.4,152.4,145.6,134.3,124.4,118.7];
				kishu.kikaiwari = [99.5,100.52,102.37,105.24,108.09,109.89];
				kishu.name_input = [];
				kishu.maxlength_input = [];
				kishu.name_prm = ["ぶどう"];
				kishu.maxlength_prm = [4];
				kishu.calcvar_prm = ["sa_game"];
				kishu.decimaldigits_prm = [2];
				kishu.p_prm = [
					[6.29,6.22,6.15,6.09,6.02,5.96]
				];
				kishu.memo = "\
				<img src='https://psmaga.com/db/s_conq/kitac_slot/126/img/r01.png'><br>\
				"
				break;

			case 'girls':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.07,270.81,260.06,250.14,243.63,225.99];
				kishu.p_reg = [381.02,350.46,316.60,281.27,270.81,252.06];
				kishu.p_gousei = [159.1,152.8,142.8,132.4,128.3,119.2];
				kishu.kikaiwari = [98.09,99.02,101.09,103.42,105.32,108.84];
				kishu.name_input = [];
				kishu.maxlength_input = [];
				kishu.name_prm = ["非重複<br>ﾁｪﾘｰ","ぶどう"];
				kishu.maxlength_prm = [4,4];
				kishu.calcvar_prm = ["sa_game","sa_game"];
				kishu.decimaldigits_prm = [1,2];
				kishu.p_prm = [
					[33.56,33.47,33.21,33.15,33.10,32.97],
					[5.98,5.98,5.98,5.98,5.88,5.83]
				];
				kishu.memo = "\
				<img src='https://psmaga.com/db/s_conq/kitac_slot/124/img/r01.png'><br>\
				"
				break;

			case 'my5':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.1,270.8,266.4,254.0,240.1,229.1];
				kishu.p_reg = [409.6,385.5,336.1,290.0,268.6,229.1];
				kishu.p_gousei = [163.8,159.1,148.6,135.4,126.8,114.6];
				kishu.kikaiwari = [97.83,98.95,101.19,104.31,107.19,111.65];
				kishu.name_input = [];
				kishu.maxlength_input = [];
				kishu.name_prm = ["単独<br>BIG","ﾁｪﾘｰ<br>BIG","単独<br>REG","ﾁｪﾘｰ<br>REG","非重複<br>ﾁｪﾘｰ","ぶどう"];
				kishu.maxlength_prm = [2,2,2,2,4,4];
				kishu.calcvar_prm = ["sa_game","sa_game","sa_game","sa_game","sa_game","sa_game"];
				kishu.decimaldigits_prm = [0,0,0,0,1,2];
				kishu.p_prm = [
					[420.10,414.78,404.54,376.64,348.60,341.33],
					[1365.33,1365.33,1365.33,1365.33,1337.47,1129.93],
					[655.36,601.25,492.75,407.06,390.10,327.68],
					[1092.27,1074.36,1057.03,1008.25,862.32,762.05],
					[38.10,38.10,36.82,35.62,35.62,35.62],
					[5.90,5.85,5.80,5.78,5.76,5.66]
				];
				kishu.memo = "\
				<img src='https://psmaga.com/db/s_conq/kitac_slot/117/img/r01.png'><br>\
				"
				break;

			case 'funky2':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [266.4,259.0,256.0,249.2,240.1,219.9];
				kishu.p_reg = [439.8,407.1,366.1,322.8,299.3,262.1];
				kishu.p_gousei = [165.9,158.3,150.7,140.6,133.2,119.6];
				kishu.kikaiwari = [97.83,99.36,100.99,103.40,106.04,111.35];
				kishu.name_input = [];
				kishu.maxlength_input = [];
				kishu.name_prm = ["単独<br>BIG","ﾁｪﾘｰ<br>BIG","単独<br>REG","ﾁｪﾘｰ<br>REG","ﾚｱﾁｪﾘｰ","ぶどう"];
				kishu.maxlength_prm = [2,2,2,2,2,4];
				kishu.calcvar_prm = ["sa_game","sa_game","sa_game","sa_game","sa_game","sa_game"];
				kishu.decimaldigits_prm = [0,0,0,0,0,2];
				kishu.p_prm = [
					[402.06,397.19,397.19,385.51,378.82,339.56],
					[1456.36,1365.33,1337.47,1337.47,1260.31,1191.56],
					[636.27,574.88,512.00,448.88,409.60,356.17],
					[1424.70,1394.38,1285.02,1149.75,1110.78,992.97],
					[2048.0,1927.5,1820.4,1724.6,1638.4,1560.4],
					[5.94,5.92,5.88,5.83,5.76,5.67]
				];
				kishu.memo = "\
				<img src='https://psmaga.com/db/s_conq/kitac_slot/116/img/r01.png'><br>\
				"
				break;

			case 'happy3':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.1,270.8,263.2,254.0,239.2,226.0];
				kishu.p_reg = [397.2,362.1,332.7,300.6,273.1,256.0];
				kishu.p_gousei = [161.8,154.9,146.9,137.7,127.5,120.0];
				kishu.kikaiwari = [97.90,99.15,101.00,104.20,107.45,110.34];
				kishu.name_input = [];
				kishu.maxlength_input = [];
				kishu.name_prm = ["単独<br>BIG","ﾁｪﾘｰ<br>BIG","単独<br>REG","ﾁｪﾘｰ<br>REG","ぶどう"];
				kishu.maxlength_prm = [2,2,2,2,4];
				kishu.calcvar_prm = ["sa_game","sa_game","sa_game","sa_game","sa_game"];
				kishu.decimaldigits_prm = [0,0,0,0,2];
				kishu.p_prm = [
					[436.9,431.2,412.2,414.8,376.6,344.9],
					[1489.5,1489.5,1489.5,1213.6,1213.6,1213.6],
					[636.3,569.9,532.8,478.4,436.9,425.6],
					[1057.0,993.0,885.6,809.1,728.2,642.5],
					[6.04,6.01,5.98,5.84,5.81,5.79]
				];
				kishu.memo = "\
				<img src='https://psmaga.com/db/s_conq/kitac_slot/119/img/r01.png'><br>\
				"
				break;

			case 'neoim':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.1,269.7,269.7,259.0,259.0,255.0];
				kishu.p_reg = [439.8,399.6,331.0,315.1,255.0,255.0];
				kishu.p_gousei = [168.5,161.0,148.6,142.2,128.5,127.5];
				kishu.kikaiwari = [97.97,99.09,100.75,102.53,104.93,107.29];
				kishu.name_input = [];
				kishu.maxlength_input = [];
				kishu.name_prm = ["単独<br>BIG","ﾁｪﾘｰ<br>BIG","単独<br>REG","ﾁｪﾘｰ<br>REG","ﾚｱﾁｪﾘｰ","ぶどう"];
				kishu.maxlength_prm = [2,2,2,2,2,4];
				kishu.calcvar_prm = ["sa_game","sa_game","sa_game","sa_game","sa_game","sa_game"];
				kishu.decimaldigits_prm = [0,0,0,0,0,2];
				kishu.p_prm = [
					[431.16,422.81,422.81,417.43,417.43,407.06],
					[1129.93,1129.93,1129.93,1092.27,1092.27,1092.27],
					[630.15,574.88,474.90,448.88,364.09,364.09],
					[1456.36,1310.72,1092.27,1057.03,851.12,851.12],
					[2184.53,2184.53,2184.53,1820.44,1820.44,1820.44],
					[6.02,6.02,6.02,6.02,6.02,5.78]
				];
				kishu.memo = "\
				<img src='https://psmaga.com/db/s_conq/kitac_slot/114/img/r01.png'><br>\
				"
				break;

			case 'gogo3':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [259.0,258.0,257.0,254.0,247.3,234.9];
				kishu.p_reg = [354.2,332.7,306.2,268.6,247.3,234.9];
				kishu.p_gousei = [149.6,145.3,139.7,130.5,123.7,117.4];
				kishu.kikaiwari = [98.39,99.36,100.60,102.83,105.08,107.83];
				kishu.name_input = [];
				kishu.maxlength_input = [];
				kishu.name_prm = ["ぶどう"];
				kishu.maxlength_prm = [4];
				kishu.calcvar_prm = ["sa_game"];
				kishu.decimaldigits_prm = [2];
				kishu.p_prm = [
					[6.25,6.20,6.15,6.07,6.00,5.92]
				];
				kishu.memo = "\
				<img src='https://psmaga.com/db/s_conq/kitac_slot/121/img/r01.png'><br>\
				"
				break;

			case 'girls':
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.07,270.81,260.06,250.14,243.63,225.99];
				kishu.p_reg = [381.02,350.46,316.60,281.27,270.81,252.06];
				kishu.p_gousei = [159.1,152.8,142.8,132.4,128.3,119.2];
				kishu.kikaiwari = [98.19,99.12,101.19,103.51,105.42,108.94];
				kishu.name_input = [];
				kishu.maxlength_input = [];
				kishu.name_prm = ["ぶどう"];
				kishu.maxlength_prm = [4];
				kishu.calcvar_prm = ["sa_game"];
				kishu.decimaldigits_prm = [2];
				kishu.p_prm = [
					[5.98,5.98,5.98,5.98,5.88,5.83]
				];
				kishu.memo = "\
				<img src='https://psmaga.com/db/s_conq/kitac_slot/124/img/r01.png'><br>\
				"
				break;

			case 'newhanabi':
				kishu.settei = [1,2,5,6];
				kishu.p_big = [277.7,268.6,256.0,248.2];
				kishu.p_reg = [356.2,331.0,306.2,280.1];
				kishu.p_gousei = [156.0,148.3,139.4,131.6];
				kishu.kikaiwari = [102.0,104.0,106.5,109.0];
				kishu.name_input = ["BIGｹﾞｰﾑ<br>(29)","HCｹﾞｰﾑ<br>(20)","HGｹﾞｰﾑ<br>(20)"];
				kishu.maxlength_input = [4,4,4];
				kishu.name_prm = ["ﾁｪﾘｰ","氷","風鈴","BIG<br>斜め風鈴","BIG<br>ﾊﾞﾗｹ目","HC<br>ﾘﾌﾟﾚｲ","HC<br>ﾊｽﾞﾚ","HG<br>RTﾘﾌﾟﾚｲ","HG<br>ﾊｽﾞﾚ"];
				kishu.maxlength_prm = [4,4,4,4,4,4,4,4,4];
				kishu.calcvar_prm = ["sa_game","sa_game","sa_game","n_input[0]","n_input[0]","n_input[1]","n_input[1]","n_input[2]","n_input[2]"];
				kishu.decimaldigits_prm = [1,1,1,1,0,1,1,2,1];
				kishu.p_prm = [
					[16.4,15.3,16.1,15.6],
					[51.2,51.8,48.2,49.3],
					[7.66,7.64,7.45,7.29],
					[11.0,9.0,11.0,9.0],
					[16384,16384,16384,655.4],
					[3.0,3.1,3.3,3.4],
					[6.0,5.8,5.3,5.1],
					[1.75,1.78,1.85,1.89],
					[13.4,12.4,10.1,9.5]
				];
				kishu.memo = "\
				REG打ち方:中ﾘｰﾙ中下段赤7→左ﾘｰﾙ中下段赤7→右ﾘｰﾙ下段枠下赤7<br>\
				REG終了画面ﾋﾟｰｽ花火:2以上,REG氷ﾃﾝﾊﾟｲﾊｽﾞﾚ:5以上<br>\
				<img src='https://psmaga.com/db/s_conq/across_slot/19/img/r01.png'><br>\
				"
				break;

			case 'lhanabi':
				kishu.settei = [1,2,5,6];
				kishu.p_big = [297.9,292.6,284.9,273.1];
				kishu.p_reg = [394.8,358.1,313.6,282.5];
				kishu.p_gousei = [169.8,161.0,149.3,138.8];
				kishu.kikaiwari = [100.2,102.0,104.6,108.0];
				kishu.name_input = ["BIGｹﾞｰﾑ<br>(20)","HCｹﾞｰﾑ<br>(20)","HGｹﾞｰﾑ<br>(20)"];
				kishu.maxlength_input = [4,4,4];
				kishu.name_prm = ["ﾁｪﾘｰ","氷","風鈴","BIG<br>斜め風鈴","BIG<br>ﾊﾞﾗｹ目","HC<br>ﾘﾌﾟﾚｲ","HC<br>ﾊｽﾞﾚ","HG<br>RTﾘﾌﾟﾚｲ","HG<br>ﾊｽﾞﾚ"];
				kishu.maxlength_prm = [4,4,4,4,4,4,4,4,4];
				kishu.calcvar_prm = ["sa_game","sa_game","sa_game","n_input[0]","n_input[0]","n_input[1]","n_input[1]","n_input[2]","n_input[2]"];
				kishu.decimaldigits_prm = [1,1,2,1,0,1,1,1,1];
				kishu.p_prm = [
					[gousei3(99.4,21.0,307.7),gousei3(99.4,19.4,306.2),gousei3(99.4,20.5,300.6),gousei3(99.4,19.6,297.9)],
					[gousei2(46.3,1560.4),gousei2(47.3,1560.4),gousei2(46.2,1560.4),gousei2(47.4,1560.4)],
					[9.68,9.45,9.06,8.64],
					[10.0,7.0,10.0,7.0],
					[16384,16384,819.2,819.2],
					[3.2,3.4,3.6,3.7],
					[4.7,4.5,4.3,4.2],
					[1.9,2.0,2.1,2.1],
					[6.4,6.0,5.4,5.4]
				];
				kishu.memo = "\
				REG終了画面ﾋﾟｰｽ花火:2以上,REGﾊﾞﾗｹ目:6(1-5:1/16384,6:1/1092)<br>\
				<img src='https://cms-assets.nilto.com/spaces/211853270/media/937700794/_/hanabi_r01.png'><br>\
				"
				break;

			case 'monkeyturnv':
				kishu.settei = [1,2,4,5,6];
				kishu.p_big = [0,0,0,0,0];
				kishu.p_reg = [299.8,295.5,258.8,235.7,222.9];
				kishu.p_gousei = [0,0,0,0,0];
				kishu.kikaiwari = [97.9,98.9,104.5,110.2,114.9];
				kishu.name_input = ["AT回数"];
				kishu.maxlength_input = [4];
				kishu.name_prm = ["5枚役","AT終了時<BR>即優出","強ﾁｪﾘｰ/強ﾁｬﾝｽ目AT直撃"];
				kishu.maxlength_prm = [4,4,4];
				kishu.calcvar_prm = ["sa_game","n_input[0]","sa_game"];
				kishu.decimaldigits_prm = [1,1,1];
				kishu.p_prm = [
					[38.15,36.86,30.27,24.51,22.53],
					[PtoB(1.6),PtoB(1.7),PtoB(2.2),PtoB(3.0),PtoB(3.7)],
					[PtoB(0.4),PtoB(1.2),PtoB(2.0),PtoB(3.9),PtoB(6.3)]
				];
				kishu.memo = "\
				天井:通常時795G/6周期目規定ﾎﾟｲﾝﾄ到達<br>\
				AT直撃 ﾎﾞｰﾄ/弱ﾁｪﾘｰ/弱ﾁｬﾝｽ目:4以上<br>\
				舟券 金:4以上,虹:6<br>\
				ﾗｳﾝﾄﾞ開始画面 ｹﾛｯﾄ:5以上,青島&波多野:5以上<br>\
				獲得枚数表示 456枚:4以上,803枚:5以上,666枚:6<br>\
				AT終了画面 銅ﾄﾛ:2以上,金ﾄﾛ:4以上,ｹﾛｯﾄﾄﾛ:5以上,虹ﾄﾛ:6<br>\
				ｴﾝﾃﾞｨﾝｸﾞ中ｾﾘﾌ これが艇王と呼ばれる～:4以上,きたきたきたぁーー！:5以上,おめでとう！:6<br>\
				<img src='https://psmaga.com/db/s_conq/yamasa_slot/251/img/r01.png'><br>\
				"
				break;

			default:
				kishu.settei = [1,2,3,4,5,6];
				kishu.p_big = [273.1,269.7,269.7,259.0,259.0,255.0];
				kishu.p_reg = [439.8,399.6,331.0,315.1,255.0,255.0];
				kishu.p_gousei = [168.5,161.0,148.6,142.2,128.5,127.5];
				kishu.kikaiwari = [97.97,99.09,100.75,102.53,104.93,107.29];
				kishu.name_input = [];
				kishu.maxlength_input = [];
				kishu.name_prm = ["単独<br>BIG","ﾁｪﾘｰ<br>BIG","単独<br>REG","ﾁｪﾘｰ<br>REG","ﾚｱﾁｪﾘｰ","ぶどう"];
				kishu.maxlength_prm = [2,2,2,2,2,4];
				kishu.calcvar_prm = ["sa_game","sa_game","sa_game","sa_game","sa_game","sa_game"];
				kishu.decimaldigits_prm = [0,0,0,0,0,2];
				kishu.p_prm = [
					[431.16,422.81,422.81,417.43,417.43,407.06],
					[1129.93,1129.93,1129.93,1092.27,1092.27,1092.27],
					[630.15,574.88,474.90,448.88,364.09,364.09],
					[1456.36,1310.72,1092.27,1057.03,851.12,851.12],
					[2184.53,2184.53,2184.53,1820.44,1820.44,1820.44],
					[6.02,6.02,6.02,6.02,6.02,5.78]
				];
				kishu.memo = "\
				<img src='https://psmaga.com/db/s_conq/kitac_slot/114/img/r01.png'><br>\
				"
				break;
		}
	}

	function displayInputForm() {
		document.getElementById('e_game').disabled = true;
		document.getElementById('e_big').disabled = true;
		document.getElementById('e_reg').disabled = true;

		var output = "";
		for(var i=0; i<kishu.name_input.length; i++) {
			output += '<div class="flex"><label for="input' + i + '">' + kishu.name_input[i] + '</label><input type="tel" maxlength="' + kishu.maxlength_input[i] + '" name="input' + i + '" id="input' + i + '" onclick="this.select(0,this.value.length);"></div>';
		}

		for(var i=0; i<kishu.name_prm.length; i++) {
			output += '<div class="flex"><label for="prm' + i + '">' + kishu.name_prm[i] + '</label><input type="tel" maxlength="' + kishu.maxlength_prm[i] + ' name="prm' + i + '" id="prm' + i + '" onclick="this.select(0,this.value.length);"></div>';
		}

		document.getElementById('input_form').innerHTML = output;
	}

	window.onload = function() {
		getKishuInfo();
		displayInputForm();
		suisoku();
	}

	document.getElementById('kishu').addEventListener('change', function() {
		reset();
		getKishuInfo();
		displayInputForm();
		suisoku();
	});

	document.getElementById('suisoku').addEventListener('click', function() {
		suisoku();
	});

	document.getElementById('reset').addEventListener('click', function() {
		reset();
		suisoku();
	});

	window.addEventListener('keyup', function() {
		if (document.getElementById('s_game').value === "") {
			document.getElementById('e_game').disabled = true;
			document.getElementById('e_game').value = "";
		} else {
			document.getElementById('e_game').disabled = false;
		}

		if (document.getElementById('s_big').value === "") {
			document.getElementById('e_big').disabled = true;
			document.getElementById('e_big').value = "";
		} else {
			document.getElementById('e_big').disabled = false;
		}

		if (document.getElementById('s_reg').value === "") {
			document.getElementById('e_reg').disabled = true;
			document.getElementById('e_reg').value = "";
		} else {
			document.getElementById('e_reg').disabled = false;
		}
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
		if (document.getElementById('s_game').value === "") {
			var s_game = 0;
			var e_game = 0;
			var sa_game = 0;
		} else if (document.getElementById('e_game').value === "") {
			var s_game = Number(document.getElementById('s_game').value);
			var e_game = s_game;
			var sa_game = s_game;
		} else {
			var s_game = Number(document.getElementById('s_game').value);
			var e_game = Number(document.getElementById('e_game').value);
			var sa_game = e_game - s_game;
		}

		if (document.getElementById('s_big').value === "") {
			var s_big = 0;
			var e_big = 0;
			var sa_big = 0;
		} else if (document.getElementById('e_big').value === "") {
			var s_big = Number(document.getElementById('s_big').value);
			var e_big = s_big;
			var sa_big = s_big;
		} else {
			var s_big = Number(document.getElementById('s_big').value);
			var e_big = Number(document.getElementById('e_big').value);
			var sa_big = e_big - s_big;
		}

		if (document.getElementById('s_reg').value === "") {
			var s_reg = 0;
			var e_reg = 0;
			var sa_reg = 0;
		} else if (document.getElementById('e_reg').value === "") {
			var s_reg = Number(document.getElementById('s_reg').value);
			var e_reg = s_reg;
			var sa_reg = s_reg;
		} else {
			var s_reg = Number(document.getElementById('s_reg').value);
			var e_reg = Number(document.getElementById('e_reg').value);
			var sa_reg = e_reg - s_reg;
		}

		// input取得
		var n_input = new Array();
		for (var i=0; i<kishu.name_input.length; i++) {
			if (eval('document.getElementById("input' + i + '").value') === "") {
				n_input[i] = "";
			} else {
				n_input[i] = eval('Number(document.getElementById("input' + i + '").value)');
			}
		}

		// prm取得
		var n_prm = new Array();
		for (var i=0; i<kishu.name_prm.length; i++) {
			if (eval('document.getElementById("prm' + i + '").value') === "") {
				n_prm[i] = "";
			} else {
				n_prm[i] = eval('Number(document.getElementById("prm' + i + '").value)');
			}
		}

		// 設定推測
		var tmp_big = new Array();
		var tmp_reg = new Array();
		var tmp1 = new Array();
		var tmp2 = 0;
		var suisoku = new Array();

		for (var i=0; i<kishu.settei.length; i++) {
			tmp_big[i] = calc(e_game, e_big, kishu.p_big[i]);
			tmp_reg[i] = calc(e_game, e_reg, kishu.p_reg[i]);
			tmp1[i] = tmp_big[i] * tmp_reg[i];
			for (var j=0; j<kishu.name_prm.length; j++) {
				tmp1[i] *= eval('calc(' + kishu.calcvar_prm[j] + ', n_prm[j], kishu.p_prm[j][i])');
			}
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
		if (isFinite(e_game/e_big)) {
			var u_big = (e_game/e_big).toFixed(0);
		} else {
			var u_big = '-';
		}

		if (isFinite(e_game/e_reg)) {
			var u_reg = (e_game/e_reg).toFixed(0);
		} else {
			var u_reg = '-';
		}

		if (isFinite(e_game/(e_big+e_reg))) {
			var u_gousei = (e_game/(e_big+e_reg)).toFixed(0);
		} else {
			var u_gousei = '-';
		}

		// prmの確率計算
		var u_prm = new Array();
		for (var i=0; i<kishu.name_prm.length; i++) {
			if (n_prm[i] === "") {
				u_prm[i] = '-';				
			} else {
				var tmp = eval(kishu.calcvar_prm[i]) / n_prm[i];
				if (isFinite(tmp)) {
					u_prm[i] = tmp.toFixed(kishu.decimaldigits_prm[i]);
				} else {
					u_prm[i] = '-';
				}
			}
		}

		// 平均設定計算
		var u_settei = 0;
		for(var i=0; i<kishu.settei.length; i++) {
			u_settei += (suisoku[i] / 100) * Number(kishu.settei[i]);
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
		var output = '<div class="scroll"><table><thead><tr><th>設定</th><th>推測</th><th>BIG</th><th>REG</th><th>合算</th>';
		for (var i=0; i<kishu.name_prm.length; i++) {
			output += '<th>' + kishu.name_prm[i] + '</th>';
		}

		output += '<th>割</th></tr></thead><tbody>';

		// テーブルbody
		for(var i=0; i<kishu.settei.length; i++) {
			output += '<tr><td>' + kishu.settei[i] + '</td><td>' + suisoku[i] + '</td><td>' + kishu.p_big[i].toFixed(0) + '</td><td>' + kishu.p_reg[i].toFixed(0) + '</td><td>' + kishu.p_gousei[i].toFixed(0) + '</td>';

			for (var j=0; j<kishu.name_prm.length; j++) {
				output += '<td>' + kishu.p_prm[j][i].toFixed(kishu.decimaldigits_prm[j]) + '</td>';
			}

			output += '<td>' + kishu.kikaiwari[i].toFixed(1) + '</td></tr>';
		}

		// あなた
		output += '<tr class="u"><td>' + u_settei + '</td>';

		if (Number(suisoku[kishu.settei.length - 1]) + Number(suisoku[kishu.settei.length - 2]) >= 50) {
			output += '<td class="go">GO!</td>';
		} else {
			output += '<td>-</td>';
		}

		output += '<td>' + u_big + '</td><td>' + u_reg + '</td><td>' + u_gousei + '</td>';

		for (var i=0; i<kishu.name_prm.length; i++) {
			output += '<td>' + u_prm[i] + '</td>';
		}

		output += '<td>' + u_kikaiwari + '</td></tr></tbody></table></div>';

		document.getElementById('output').innerHTML = output;
		document.getElementById('memo').innerHTML = kishu.memo;
	}

	function reset() {
		$("input").val("");
	}

})();
