var tanya = true;
while(tanya) {
	//pilihan player
	var p = prompt('Pilih : gajah, semut, orang');


	//generator computer
	//bilangan random
	var comp = Math.random();

	if(comp < 0.34) {
		comp = 'gajah'
	} else if(comp >= 0.34 && comp < 0.67) {
		comp = 'semut'
	} else{
		comp = 'orang'
	}
	console.log(comp);


	var hasil = '';
	//rules game
	if(p == comp) {
		hasil = 'SERI'
	} else if(p == 'gajah') {
		// if(comp == 'orang')
		// 	hasil = 'MENANG!'
		// } else{
		// 	hasil = 'KALAH!'
		// }

		//ternary
		hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
	} else if(p == 'orang') {
		hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
	}else if(p == 'semut') {
		hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
	} else{
		hasil = 'Kamu memasukan pilihan yang salah!';
	}


	//hasil
	alert('Kamu memilih :' + " " + p + " " + 'dan Computer memilih :' + comp + '\nMaka hasilnya :' + " " + hasil )

	tanya = confirm('Bermain lagi?');
}

alert('TERIMA KASIH')

