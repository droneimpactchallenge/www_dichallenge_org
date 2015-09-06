// JavaScript Document
function addListener(node, type, listener, obj) {
	var param = obj || {};
 
	if(node.addEventListener) {
		node.addEventListener(type, function(ev){listener(ev, param);}, false);
		return true;
	} else if(node.attachEvent) {
		node['e' + type + listener] = listener;
		node[type + listener] = function() {
			node['e' + type + listener](window.event, param);
		};
		node.attachEvent('on' + type, node[type + listener]);
		return true;
	}
	return false;
}
 
function getParamsOfShareWindow(width, height) {
	return ['toolbar=100,status=100,resizable=1,width=' + width + ',height=' + height + ',left=',(screen.width-width)/2,',top=',(screen.height-height)/2].join('');
}
 
function bindShareList() {
	var link = encodeURIComponent(document.location); // 文章链接
	var title = encodeURIComponent(document.title.substring(0,76)); // 文章标题
	var source = encodeURIComponent('Hiroshima Archive'); // 网站名称
	var windowName = 'share'; // 子窗口别称
	var site = 'http://hiroshima.mapping.jp/'; // 网站链接
 
	addListener(document.getElementById('facebook-share'), 'click', function() {
		var url = 'http://facebook.com/share.php?u=' + link + '&t=' + title;
		var params = getParamsOfShareWindow(626, 436);
		window.open(url, windowName, params);
	});
 
	addListener(document.getElementById('twitter-share'), 'click', function() {
		var url = 'http://twitter.com/share?url=' + link + '&text=' + title;
		var params = getParamsOfShareWindow(500, 375);
		window.open(url, windowName, params);
	});
 
}
 
bindShareList();