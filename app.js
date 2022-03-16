function toggleSvgSprite(){
	const existing = document.querySelector('#newIcon');
	if(existing){
		existing.remove();
		return;
	}
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.id = 'newIcon';
	svg.setAttribute('viewBox', '0 0 32 32');
	svg.setAttribute('style', 'fill: black; width: 32px');
	svg.innerHTML = "<use xlink:href='/sprite.svg#action-add'></use>";
	document.querySelector('#svgExample').append(svg);
	done = true;
}

function toggleImg(){
	const existing = document.querySelector('#newImg');
	if(existing){
		existing.remove();
		return;
	}
	const img = document.createElement('img')
	img.id = 'newImg';
	img.setAttribute('style', 'width: 32px');
	img.src = "/cat.png"
	document.querySelector('#pngExample').append(img);
	done = true;
}

setInterval(() => {
	toggleSvgSprite();
	toggleImg();
}, 1000);