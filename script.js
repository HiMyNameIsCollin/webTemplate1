

document.getElementById('nav__dropBtn').addEventListener('click', (e) => {
	e.stopPropagation()
	const dropDown = document.getElementById('dropDown')
	dropDown.classList.add('dropDown--active')
	gsap.fromTo('#dropDown', {x: '100%'}, {x: '0%', duration: 0.25})

	const closeDropDown = (e) => {
		gsap.fromTo('#dropDown', {x: '0%'}, {x: '100%', duration: 0.25})
		setTimeout(() => dropDown.classList.remove('dropDown--active'), 500);
		window.removeEventListener('click', closeDropDown)
		window.removeEventListener('click', clickedOutside)
		window.removeEventListener('touchend', clickedOutside)
	}

	const clickedOutside = (e) => {
		console.log(e.target)
		if(!dropDown.contains(e.target)){
			closeDropDown()
		}

	}
	document.getElementById('dropDown__closeBtn').addEventListener('click', closeDropDown)	
	window.addEventListener('click', clickedOutside)
	window.addEventListener('touchend', clickedOutside)

})
