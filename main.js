var targetNode = document.body;
var config = { attributes: true, childList: true };

var callback = function() {
	filter(document.querySelectorAll('.heroGrid-largeCard'));
	filter(document.querySelectorAll('.heroGrid-smallCard'));
	filter(document.querySelectorAll('.heroGrid-compact'));
	filter(document.querySelectorAll('.u-size6of12'));
	filter(document.querySelectorAll('.u-size4of12'));
};

var observer = new MutationObserver(callback);
observer.observe(targetNode, config);

function filter(elements) {
	for (var i = 0; i < elements.length; i++) {
		var icon = elements[i].querySelector('.svgIcon--star');
		if (icon) elements[i].parentNode.removeChild(elements[i]);
	}
}
