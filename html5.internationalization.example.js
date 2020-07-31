var languages = Array.from(document.getElementsByClassName('language'));
var xhttp = new XMLHttpRequest();
var langDocument = {};
var langData = {};

languages.forEach(function(value, index) {
	languages[index].addEventListener('click', function() {
		localStorage.setItem('lang', this.dataset.lang)
		switchLanguage(this.dataset.lang);
	});
});
xhttp.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
		debugger
		langDocument = JSON.parse(langData);
		processLangDocument();
	}
};
function switchLanguage(language) {
	xhttp.open('GET', '/html5Localization/i18n/' + language + '.json', true);
	xhttp.setRequestHeader('Content-type', 'application/json');
	xhttp.send();
}
function processLangDocument() {
	var tags = document.querySelectorAll('span,img,a,label,li,option,h1,h2,h3,h4,h5,h6,button');
	Array.from(tags).forEach(function(value, index) {
		debugger
		var key = value.dataset.langkey;
		if (langDocument[key]) value.innerText = langDocument[key];
	});
}

$(document).ready(function () {
	const a = localStorage.getItem('lang')
	switchLanguage(a)
});
