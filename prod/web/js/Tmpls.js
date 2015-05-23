(function UMD(name,context,definition) {
	if (typeof module != "undefined" && module.exports) module.exports = definition(name,context);
	else if (typeof define == "function" && define.amd) define(definition);
	else context[name] = definition(name,context);
})("Tmpls",typeof global != "undefined" ? global : this,function definition(name,context) {
	"use strict";

	function init() {
		(function(G){var partial = G.definePartial, clone = G.cloneObj, extend = G.extend, cID = "/index.html";extend(cID,"/master.html");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n\n\n<header>\n	<h1>Unsuck The Web</h1>\n	<div class=\"logo\"></div>\n</header>\n\n<div id=\"content\">\n\n	<h1>The <em>Unsucked Web</em> Manifesto</h1>\n\n	<p>\n		<strong>WHEREAS,</strong> the web is built on an amazing collection of features that's ever-expanding, both in complexity and in size of resources;\n	</p>\n	<p>\n		<strong>WHEREAS,</strong> designers and developers currently exert near-complete control over the experience a user has on their site or web application;\n	</p>\n	<p>\n		<strong>WHEREAS,</strong> designers and developers tend to design <em>for the best experience</em>, making assumptions of free, fast, unlimited bandwidth to deliver this experience to users;\n	</p>\n	<p>\n		<strong>WHEREAS,</strong> user access to a lower fidelity experience is often treated as unimportant to business goals, and usually given the same amount of (non-)care as <em>Accessibility</em> concerns, which is to say little to none, or as older \"unsupported\" browsers (like IE6);\n	</p>\n	<p>\n		<strong>WHEREAS,</strong> many users are often disenfranchised from <em>this web</em> because a site or web application is too big&mdash;either <em>too costly</em> in time to download over slow internet, or <em>too costly</em> in money over metered bandwidth, and must unfortunately therefore make a choice simply not to visit at all;\n	</p>\n	<p>\n		<strong>WHEREAS,</strong> principles such as <em>progressive enhancement</em> and <em>responsive design</em> are nearly universally accepted among the community, but mainly only focus on device capabilities and characteristics instead of <em>user choice</em>;\n	</p>\n	<p>\n		<strong>WHEREAS,</strong> we <em>can</em> build a web that embraces users and gives them <em>choice</em> over their experience;\n	</p>\n	<p>\n		<strong>WE THEREFORE ASSERT</strong> the following principles of <em>unsucked web</em> design:\n	</p>\n	<ol>\n		<li>\n			<strong>THAT</strong> designers and developers of sites and web applications must be free to continue to adopt the latest and greatest web technologies as appropriate to their goals, including retina images, web fonts, etc.\n		</li>\n		<li>\n			<strong>THAT</strong> all sites and web applications must <em>also</em> at a minimum provide a useful, if significantly limited, <em>low fidelity</em> version that consists variously of: HTML/text, basic styling, a few (low-resolution) images, etc.\n		</li>\n		<li>\n			<strong>THAT</strong> designers and developers of sites and web applications must begin to intentionally design the web in <em>layers</em>, not unlike the original principles of <em>progressive enhancement</em>, and not dissimilar from breakpoints in <em>responsive design</em>. However, these layers of features must adapt not only to device capabilities, but also to <strong>user choice</strong>.\n		</li>\n		<li>\n			<strong>THAT</strong> no matter how powerful a user's device may be, or how awesome its screen, designers and developers have to <strong>respect</strong> that a user may not want to pay the <em>time</em> or <em>money</em> for those retina images, web fonts, etc.\n		</li>\n		<li>\n			<strong>THAT</strong> developers know how to fiddle with settings to control some aspects of this already, but regular non-technical users do not, and <em>should not have to</em>. User choice over the desired fidelity of experience on a site or web application must be easily expressible in the main UI of a browser, and must be on a per-site basis. For instance, a user may choose in loading a particular site between \"Faster Load\" or \"More Features\".\n		</li>\n		<li>\n			<strong>THAT</strong> ultimately, if there's a conflict between a user's expressed (or default) choice of fidelity of experience and the experience offered or forced by the site or web application, <em>user choice must take precedence</em>. Browsers must <em>respect</em> the user choice and refuse to download (not just suppress display, as in responsive design) resources that exceed chosen fidelity.\n		</li>\n	</ol>\n	<p>\n		Follow the progress of this movement on <a href=\"http://twitter.com/UnsuckTheWeb\">@UnsuckTheWeb</a>.\n	</p>\n\n</div>\n\n<footer>\n	<div class=\"left-hand\"></div>\n	<div class=\"text\">Let's Unsuck The Web Together, one site at a time!</div>\n	<div class=\"right-hand\"></div>\n</footer>\n\n";return ret;},"/index.html#content");})(this.grips||grips);(function(G){var partial = G.definePartial, clone = G.cloneObj;partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;$$.title =$.page_title ? $.page_title : "Unsucked Web Manifesto";ret += "\n\n<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\">\n<meta name=viewport content=\"width=device-width, initial-scale=1\">\n<title>";ret += $$.title;ret += "</title>\n<link rel=\"stylesheet\" href=\"/css/site.css\">\n</head>\n<body>\n\n";ret2 = $;ret2 = G.render("#content",ret2,$$);ret += ret2;ret += "\n\n</body>\n</html>\n\n";return ret;},"/master.html#page");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;return ret;},"/master.html#content");})(this.grips||grips);(function(G){var partial = G.definePartial, clone = G.cloneObj;partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "*, *:before, *:after {";ret2 = $;ret2 = G.render("#KiwgKjpiZWZvcmUsICo6YWZ0ZXI=_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#KiwgKjpiZWZvcmUsICo6YWZ0ZXI=");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n";return ret;},"/site.css#KiwgKjpiZWZvcmUsICo6YWZ0ZXI=_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "html, body {";ret2 = $;ret2 = G.render("#aHRtbCwgYm9keQ==_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#aHRtbCwgYm9keQ==");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n	position: relative;\n	padding: 0px;\n	margin: 0px;\n	background-color: ";ret += $$.mainBGColor;ret += ";\n	color: ";ret += $$.mainTextColor;ret += ";\n	font-family: sans-serif;\n	font-weight: lighter;\n";return ret;},"/site.css#aHRtbCwgYm9keQ==_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "header {";ret2 = $;ret2 = G.render("#aGVhZGVy_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#aGVhZGVy");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n	position: relative;\n	padding-bottom: 35px;\n\n	\n\n	\n";return ret;},"/site.css#aGVhZGVy_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "header h1 {";ret2 = $;ret2 = G.render("#aGVhZGVyIGgx_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#aGVhZGVyIGgx");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n		position: static;\n		margin: 0px;\n		padding: 0px;\n		font-size: 1px;\n		text-indent: -9999px;\n		color: #000;\n		color: rgba(0,0,0,0);\n		background-color: ";ret += $$.headerBGColor;ret += ";\n		height: 208px;\n	";return ret;},"/site.css#aGVhZGVyIGgx_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "header .logo {";ret2 = $;ret2 = G.render("#aGVhZGVyIC5sb2dv_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#aGVhZGVyIC5sb2dv");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n		position: absolute;\n		width: 100%;\n		height: 100%;\n		background: url(../images/header.svg) 50% -32px no-repeat;\n		top: 0px;\n		left: 0px;\n	";return ret;},"/site.css#aGVhZGVyIC5sb2dv_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "#content {";ret2 = $;ret2 = G.render("#I2NvbnRlbnQ=_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#I2NvbnRlbnQ=");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n	min-width: 300px;\n	max-width: 700px;\n	margin: 0px auto;\n	padding: 0px 30px;\n	font-size: 22px;\n	line-height: 35px;\n\n	\n\n	\n\n	\n";return ret;},"/site.css#I2NvbnRlbnQ=_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "#content a {";ret2 = $;ret2 = G.render("#I2NvbnRlbnQgYQ==_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#I2NvbnRlbnQgYQ==");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n		text-decoration: none;\n		color: ";ret += $$.linkTextColor;ret += ";\n	";return ret;},"/site.css#I2NvbnRlbnQgYQ==_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "#content em {";ret2 = $;ret2 = G.render("#I2NvbnRlbnQgZW0=_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#I2NvbnRlbnQgZW0=");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n		font-style: normal;\n		font-weight: bold;\n		color: ";ret += $$.emphasisTextColor;ret += ";\n	";return ret;},"/site.css#I2NvbnRlbnQgZW0=_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "#content strong {";ret2 = $;ret2 = G.render("#I2NvbnRlbnQgc3Ryb25n_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#I2NvbnRlbnQgc3Ryb25n");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n		color: ";ret += $$.strongTextColor;ret += ";\n	";return ret;},"/site.css#I2NvbnRlbnQgc3Ryb25n_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "#content a:hover {";ret2 = $;ret2 = G.render("#I2NvbnRlbnQgYTpob3Zlcg==_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#I2NvbnRlbnQgYTpob3Zlcg==");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n	text-decoration: underline;\n";return ret;},"/site.css#I2NvbnRlbnQgYTpob3Zlcg==_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "footer {";ret2 = $;ret2 = G.render("#Zm9vdGVy_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#Zm9vdGVy");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n	position: relative;\n	width: 100%;\n	height: 390px;\n\n	\n\n	\n\n	\n";return ret;},"/site.css#Zm9vdGVy_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "footer .left-hand {";ret2 = $;ret2 = G.render("#Zm9vdGVyIC5sZWZ0LWhhbmQ=_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#Zm9vdGVyIC5sZWZ0LWhhbmQ=");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n		position: absolute;\n		width: 248px;\n		height: 375px;\n		background: url(../images/footer-left-hand.svg) 50% 100% no-repeat;\n		bottom: 0px;\n		left: 50%;\n		transform: translateX(-670px);\n	";return ret;},"/site.css#Zm9vdGVyIC5sZWZ0LWhhbmQ=_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "footer .text {";ret2 = $;ret2 = G.render("#Zm9vdGVyIC50ZXh0_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#Zm9vdGVyIC50ZXh0");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n		display: none;\n		position: absolute;\n		width: 757px;\n		height: 349px;\n		font-size: 1px;\n		text-indent: -9999px;\n		color: ";ret += $$.mainBGColor;ret += ";\n		color: rgba(0,0,0,0);\n		/*background: url(../images/footer-text.svg) 50% 100% no-repeat;*/\n		bottom: 0px;\n		left: 50%;\n		transform: translate(-50%,-50px);\n	";return ret;},"/site.css#Zm9vdGVyIC50ZXh0_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "footer .right-hand {";ret2 = $;ret2 = G.render("#Zm9vdGVyIC5yaWdodC1oYW5k_",ret2,$$);ret += ret2;ret += "}";return ret;},"/site.css#Zm9vdGVyIC5yaWdodC1oYW5k");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n		position: absolute;\n		width: 255px;\n		height: 390px;\n		background: url(../images/footer-right-hand.svg) 50% 100% no-repeat;\n		bottom: 0px;\n		left: 50%;\n		transform: translateX(415px);\n	";return ret;},"/site.css#Zm9vdGVyIC5yaWdodC1oYW5k_");partial(function($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret2 = $;ret2 = G.render("#KiwgKjpiZWZvcmUsICo6YWZ0ZXI=",ret2,$$);ret += ret2;ret += "\n\n\n";ret2 = $;ret2 = G.render("#aHRtbCwgYm9keQ==",ret2,$$);ret += ret2;ret += "\n\n\n";ret2 = $;ret2 = G.render("#aGVhZGVy",ret2,$$);ret += ret2;ret += "\n";ret2 = $;ret2 = G.render("#aGVhZGVyIGgx",ret2,$$);ret += ret2;ret += "\n";ret2 = $;ret2 = G.render("#aGVhZGVyIC5sb2dv",ret2,$$);ret += ret2;ret += "\n\n\n";ret2 = $;ret2 = G.render("#I2NvbnRlbnQ=",ret2,$$);ret += ret2;ret += "\n";ret2 = $;ret2 = G.render("#I2NvbnRlbnQgYQ==",ret2,$$);ret += ret2;ret += "\n";ret2 = $;ret2 = G.render("#I2NvbnRlbnQgZW0=",ret2,$$);ret += ret2;ret += "\n";ret2 = $;ret2 = G.render("#I2NvbnRlbnQgc3Ryb25n",ret2,$$);ret += ret2;ret += "\n\n\n";ret2 = $;ret2 = G.render("#I2NvbnRlbnQgYTpob3Zlcg==",ret2,$$);ret += ret2;ret += "\n\n\n";ret2 = $;ret2 = G.render("#Zm9vdGVy",ret2,$$);ret += ret2;ret += "\n";ret2 = $;ret2 = G.render("#Zm9vdGVyIC5sZWZ0LWhhbmQ=",ret2,$$);ret += ret2;ret += "\n";ret2 = $;ret2 = G.render("#Zm9vdGVyIC50ZXh0",ret2,$$);ret += ret2;ret += "\n";ret2 = $;ret2 = G.render("#Zm9vdGVyIC5yaWdodC1oYW5k",ret2,$$);ret += ret2;ret += "\n\n";return ret;},"/site.css#all");})(this.grips||grips);
	}

	if (context.Events) {
		// hybrid event bindings
		context.Events.once(name,init);
	}

	var grips = context.grips;

	// module API
	var public_api = {
		init: init
	};

	return public_api;
});
