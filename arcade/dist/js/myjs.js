(function() {
	'use strict';

	// グローバル変数
	var kishu = new Object();

	// 機種情報を取得
	function getKishuInfo() {
		switch(document.getElementById('kishu').options[document.getElementById('kishu').selectedIndex].value) {
			case '1943':
				kishu.memo = "\
				<table>\
				<tr><th>ﾗｳﾝﾄﾞ</th><th>1P</th><th>武器</th></tr>\
				<tr><td>1</td><td>8</td><td>SHOT GUN</td></tr>\
				<tr><td>2</td><td>A</td><td>SHOT GUN</td></tr>\
				<tr><td>3</td><td>3AB</td><td>LASER</td></tr>\
				<tr><td>4</td><td>7B</td><td>SHOT GUN</td></tr>\
				<tr><td>5</td><td>A</td><td>3WAY</td></tr>\
				<tr><td>6</td><td>4</td><td>AUTO</td></tr>\
				<tr><td>7</td><td>1</td><td>SHELL</td></tr>\
				<tr><td>8</td><td>4AB</td><td>3WAY</td></tr>\
				<tr><td>9</td><td>9AB</td><td>LASER</td></tr>\
				<tr><td>10</td><td>3B</td><td>SHELL</td></tr>\
				<tr><td>11</td><td>1</td><td>AUTO</td></tr>\
				<tr><td>12</td><td>6AB</td><td>3WAY</td></tr>\
				<tr><td>13</td><td>2</td><td>AUTO</td></tr>\
				<tr><td>14</td><td>1AB</td><td>LASER</td></tr>\
				<tr><td>15</td><td>9A</td><td>SHELL</td></tr>\
				<tr><td>16</td><td>6A</td><td>AUTO</td></tr>\
				</table>\
				"
				break;
				
			case '1943kai':
				kishu.memo = "\
				<table>\
				<tr><th>ﾗｳﾝﾄﾞ</th><th>1P</th><th>武器</th></tr>\
				<tr><td>1</td><td>6</td><td>SHOT GUN</td></tr>\
				<tr><td>2</td><td>1</td><td>LASER</td></tr>\
				<tr><td>3</td><td>A</td><td>3WAY</td></tr>\
				<tr><td>4</td><td>7A</td><td>3WAY</td></tr>\
				<tr><td>5</td><td>6</td><td>SHELL</td></tr>\
				<tr><td>6</td><td>7B</td><td>LASER</td></tr>\
				<tr><td>7</td><td>8AB</td><td>3WAY</td></tr>\
				<tr><td>8</td><td>7B</td><td>LASER</td></tr>\
				<tr><td>9</td><td>1B</td><td>SHELL</td></tr>\
				<tr><td>10</td><td>2A</td><td>3WAY</td></tr>\
				</table>\
				"
				break;

			case 'druaga':
				kishu.memo = "\
				<div>X:倒す、T:触れる、C:盾で受ける、L:ﾚﾊﾞｰ入れる、W:歩く、S:剣を振る、D:ﾄﾞｱ、N:しない</div>\
				<table>\
				<tr><th>階</th><th>宝</th><th>階</th><th>宝</th><th>階</th><th>宝</th></tr>\
<tr><td>1</td><td>X3</td><td>21</td><td>NW</td><td>41</td><td class='g'></td></tr>\
<tr><td>2</td><td>X2</td><td>22</td><td class='g'></td><td>42</td><td class='g'></td></tr>\
<tr><td>3</td><td>X1</td><td>23</td><td>X魔</td><td>43</td><td class='g'></td></tr>\
<tr><td>4</td><td>TD</td><td>24</td><td>S1</td><td>44</td><td>X灰紫緑橙</td></tr>\
<tr><td>5</td><td>C3</td><td>25</td><td class='g'></td><td>45</td><td>X緑橙鏡黒青</td></tr>\
<tr><td>6</td><td>T↑</td><td>26</td><td>X魔鍵</td><td>46</td><td>W四</td></tr>\
<tr><td>7</td><td>Xﾏﾄｯｸ</td><td>27</td><td>T火</td><td>47</td><td class='g'></td></tr>\
<tr><td>8</td><td class='g'></td><td>28</td><td>TDS</td><td>48</td><td>W四</td></tr>\
<tr><td>9</td><td class='g'></td><td>29</td><td>L回3</td><td>49</td><td class='g'></td></tr>\
<tr><td>10</td><td>C1</td><td>30</td><td>W↓2(←3/→5)3</td><td>50</td><td class='g'></td></tr>\
<tr><td>11</td><td>T↓</td><td>31</td><td>ｽﾀｰﾄ</td><td>51</td><td>L十</td></tr>\
<tr><td>12</td><td>d魔</td><td>32</td><td>S2</td><td>52</td><td>X壁4</td></tr>\
<tr><td>13</td><td>TDX</td><td>33</td><td>龍交差</td><td>53</td><td>W←10↓3</td></tr>\
<tr><td>14</td><td class='g'></td><td>34</td><td>X鏡</td><td>54</td><td>W←10↑2</td></tr>\
<tr><td>15</td><td>S交差中</td><td>35</td><td class='g'></td><td>55</td><td class='g'></td></tr>\
<tr><td>16</td><td>T←→</td><td>36</td><td>T炎</td><td>56</td><td class='g'></td></tr>\
<tr><td>17</td><td>ﾜｰﾌﾟ5</td><td>37</td><td>X霊Tﾛ</td><td>57</td><td>TDX女緑</td></tr>\
<tr><td>18</td><td>NT</td><td>38</td><td>C1</td><td>58</td><td>Wﾘﾊ</td></tr>\
<tr><td>19</td><td>TD</td><td>39</td><td>L↑2↓5</td><td>59</td><td>X魔騎魔龍ﾄﾞ</td></tr>\
<tr><td>20</td><td class='g'></td><td>40</td><td class='g'></td><td>60</td><td>女下上中女</td></tr>\
				</table>\
				"
				break;

			case 'slapfight':
				kishu.memo = "\
				<ul>\
				<li>保険☆：3AB\
				<li>2ﾎﾞｽ：ｼｮｯﾄ破壊で1UP\
				</ul>\
				"
				break;

			case '1942':
				kishu.memo = "\
				<ul>\
				<li>1UP赤水：6/13/18/25/29\
				<li>ｱﾔｺ：7/15/23/31\
				<li>殺人赤水：12/24/28\
				<li>最下段：18/22\
				</ul>\
				<table>\
				<tr><td>1</td><td>2</td><td>3</td><td>4</td><td></td><td>5</td><td class='r'>6</td><td class='g'>7</td><td>8</td></tr>\
				<tr><td>9</td><td>10</td><td>11</td><td class='y'>12</td><td></td><td class='r'>13</td><td>14</td><td class='g'>15</td><td>16</td></tr>\
				<tr><td>17</td><td class='r'>18</td><td>19</td><td>20</td><td></td><td>21</td><td>22</td><td class='g'>23</td><td class='y'>24</td></tr>\
				<tr><td class='r'>25</td><td>26</td><td>27</td><td class='y'>28</td><td></td><td class='r'>29</td><td>30</td><td class='g'>31</td><td>32</td></tr>\
				</table>\
				"
				break;

		}
	}

	document.getElementById('kishu').addEventListener('change', function() {
		getKishuInfo();
		document.getElementById('memo').innerHTML = kishu.memo;
	});
	
	window.onload = function() {
		getKishuInfo();
		document.getElementById('memo').innerHTML = kishu.memo;
	}
})();
