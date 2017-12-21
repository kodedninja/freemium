var targetNode = document.body;
var config = { attributes: true, childList: true };

var callback = function() {
	filter(document.querySelectorAll('.heroGrid-largeCard:not(.freemiumseen)'));
	filter(document.querySelectorAll('.heroGrid-mediumCard:not(.freemiumseen)'));
	filter(document.querySelectorAll('.heroGrid-smallCard:not(.freemiumseen)'));
	filter(document.querySelectorAll('.heroGrid-compact:not(.freemiumseen)'));
	filter(document.querySelectorAll('.u-size6of12:not(.freemiumseen)'));
	filter(document.querySelectorAll('.u-size4of12:not(.freemiumseen)'));
};

var observer = new MutationObserver(callback);
observer.observe(targetNode, config);

function filter(elements) {
	for (var i = 0; i < elements.length; i++) {
		var icon = elements[i].querySelector('.svgIcon--star');
		if (icon) elements[i].parentNode.removeChild(elements[i]);
		else elements[i].classList.push('freemiumseen');
	}
}
