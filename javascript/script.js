const data = document.getElementById('send')
data.addEventListener('click', function() {
	const nama = document.getElementById('nme').value;
	const email = document.getElementById('email').value;
	const pesan = document.getElementById('mesage').value;

	var arr = []
		arr.push({
			Nama: nama,
			Email: email,
			Pesan: pesan
	})
	const name = document.getElementById('name');
	const imel = document.getElementById('imel') ;
	const message = document.getElementById('message')
	const content = document.querySelector('.content')
	for ( let i = 0; i < arr.length; i++ ) {
		content.style.border = '2px inset grey'
		content.style.width = '300px'
		content.style.margin = 'auto'
		name.innerHTML = arr[i].Nama;
		imel.innerHTML = arr[i].Email;
		message.innerHTML = arr[i].Pesan;
	}
})