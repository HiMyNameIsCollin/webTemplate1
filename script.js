

document.getElementById('nav__dropBtn').addEventListener('mousedown', () => {

	document.getElementById('dropDown').classList.add('dropDown--active')
	gsap.fromTo('#dropDown', {x: '100%'}, {x: '0%', duration: 0.25})

	const closeDropDown = (e) => {
		if(e.target.matches('.dropDown__closeBtn')){
			gsap.fromTo('#dropDown', {x: '0%'}, {x: '100%', duration: 0.25})
			setTimeout(() => document.getElementById('dropDown').classList.remove('dropDown--active'), 500);
			return () => window.removeEventListener('mousedown', closeDropDown)
		}
	}
	window.addEventListener('mousedown', closeDropDown)

})
