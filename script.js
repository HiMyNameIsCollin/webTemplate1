

document.getElementById('nav__dropBtn').addEventListener('click', (e) => {
	e.stopPropagation()
	const dropDown = document.getElementById('dropDown')
	dropDown.classList.add('dropDown--active')
	gsap.fromTo('#dropDown', {x: '100%'}, {x: '0%', duration: 0.25})

	const closeDropDown = (e) => {
		gsap.fromTo('#dropDown', {x: '0%'}, {x: '100%', duration: 0.25})
		setTimeout(() => dropDown.classList.remove('dropDown--active'), 500);
		return () => window.removeEventListener('click', closeDropDown)
	}

	const clickedOutside = (e) => {
		if(!dropDown.contains(e.target)){
			closeDropDown()
		}
		return () => window.removeEventListener('click', clickedOutside)
	}
	document.getElementById('dropDown__closeBtn').addEventListener('click', closeDropDown)	
	window.addEventListener('click', clickedOutside)

})
