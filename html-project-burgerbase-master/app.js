document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

localStorage.setItem('username', 'Craig');
localStorage.setItem('password', 'sdfdsfefesfs');

const getName = localStorage.getItem('username');
console.log(getName);
localStorage.clear();

sessionStorage.setItem('username', 'Mickey Mouse');

document.cookie = session = true;