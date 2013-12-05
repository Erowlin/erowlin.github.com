var json = null;

json = '{
	"test-balise-html" : [
		{
			"fr" : "test-text-francais",
			"en" : "test-text-english"
		}
	]
}'

function trJS(file){ // Initialize the library
	//jsonFile = "js/trjs/translations/index.trjs.json" 
	console.log(json);
};

trJS("index");