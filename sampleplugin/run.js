var port = chrome.extension.connect({name: "WinExec"});
port.onMessage.addListener(function(msg) {
	var element = document.getElementById('pluginObj');
	element.sayHello(msg.text);
});
port.postMessage({joke: "123"});