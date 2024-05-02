// Last updated May. 1, 2024 by Natsu.
var address = location.hostname;

var topP = document.createElement("p");
topP.style.textAlign = "center";
topP.innerHTML = '<div class="custom-nav"><a href="#"><img src="https://i.snap.as/ZwjqhjCI.png" alt="Back to top..." style="margin: 0px auto; width: 30px; height: 30px"/></a></div>';

var customAdd = document.createElement("p");
customAdd.style.display = "none";
customAdd.innerHTML = '<div class="custom-nav likecoin"><p><img src="https://i.snap.as/rHuKRzB.png" alt="今回のブログは以上になります。最後までご覧いただきまして、ありがとうございました。" style="display: block; margin: 2px auto; width: 300px;"/><br /><img src="https://i.snap.as/vGjEbix.png" alt="➡️" style="height:26px; margin-right: 5px; float:left" ><em>如果你喜歡我的文字，幫我拍5個小手手， 也歡迎留言給我，謝謝你行動上的支持！</em></p><p>（回饋由 <a rel="nofollow"  href="https://like.co/">LikeCoin</a> 基金會出資，只要註冊/登入帳號，點 5 下 Like 就可以贊助我的文章。化讚為賞，支持創作。謝謝你！）</p><div style="display: block; margin: 0 auto;"><iframe style="display: block; margin: 0 auto;" scrolling="no" frameborder="0" allowtransparency="true" width="350" height="180" src="https://button.like.co/in/embed/natsushyomatters/button?referrer=' + encodeURIComponent(location.href.split('?')[0].split('#')[0]) + '"></iframe></div></div><div id="disqus_thread"></div>';

var cont = document.getElementById("wrapper");
if (cont !== null) {
	// Add to blog index and tag pages
	cont.appendChild(topP);
	if (address == "natsushyo.me") {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.onload = script.onreadystatechange = function() {
			if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
				// Handle memory leak in IE 
				script.onload = script.onreadystatechange = null;
			}
		};
		script.src = 'https://natsushyo.disqus.com/count.js';
		script.setAttribute('id', 'dsq-count-scr');
		head.appendChild(script);
		var i;
		var count = document.getElementsByClassName("post-title").length;
		for (i = 0; i < count; i++) {
			var anchor = document.getElementsByClassName("post-title")[i];
			do {
				anchor = anchor.childNodes[0];
			} while (anchor.nodeName.toLowerCase() != "a");
			var href = anchor.href; //Get URL of post-title
			anchor.insertAdjacentHTML("afterend", "<a href='" + anchor.href + "#disqus_thread' data-disqus-identifier='" + anchor.pathname + "' class='comment-count'></a>");
		}
	}
} else {
	// Add to individual blog post page
	cont = document.getElementById("post-body");
	cont.insertAdjacentHTML("afterend", topP.outerHTML);
	if (address == "natsushyo.me") {
		cont.insertAdjacentHTML("afterend", customAdd.outerHTML);
		// Add Disqus code
		var disqus_config = function() {
			// Replace PAGE_URL with your page's canonical URL variable
			this.page.url = location.href;
			// Replace PAGE_IDENTIFIER with your page's unique identifier variable
			this.page.identifier = location.pathname;
		};
		(function() { // DON'T EDIT BELOW THIS LINE
			var d = document,
				s = d.createElement('script');
			s.src = 'https://natsushyo.disqus.com/embed.js';
			s.setAttribute('data-timestamp', +new Date());
			(d.head || d.body).appendChild(s);
		})();
	}
}

if (address == "natsushyo.me") {
	// Add GoatCounter Code
	window.goatcounter = {
		endpoint: 'https://natsushyo.goatcounter.com/count'
	};
	// Dynamically load count.js
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.onload = script.onreadystatechange = function() {
		if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
			// Handle memory leak in IE 
			script.onload = script.onreadystatechange = null;
		}
	};
	script.src = 'https://gc.zgo.at/count.js';
	//script.async = true;
	head.appendChild(script);

	// Dynamically load BuyMeACoffee.js
    var bmc = document.createElement('script');
    bmc.type = 'text/javascript';
    bmc.setAttribute('data-name', 'BMC-Widget');
    bmc.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';
    bmc.setAttribute('data-id', 'Natsuho');
    bmc.setAttribute('data-description', 'Support me on Buy me a coffee!');
    bmc.setAttribute('data-message', '用一杯咖啡，支持好內容持續 👉 如果您喜歡我的部落格可以透過以下方式支持我的作品，謝謝您');
    bmc.setAttribute('data-color', '#FFDD00');
    bmc.setAttribute('data-position', 'left');
    bmc.setAttribute('data-x_margin', '18');
    bmc.setAttribute('data-y_margin', '18');
    bmc.async = true;
    bmc.onload = function () {
    var evt = document.createEvent('Event');
    evt.initEvent('DOMContentLoaded', false, false);
    window.dispatchEvent(evt);
    }
    this.bmc = bmc;
    head.appendChild(this.bmc);
}

/* Custom Footer*/
var customFooterHTML = '© 2024 <a rel="me" class="home pubd" href="https://portaly.cc/Natsuho">夏</a><br />published with <a class="home pubd" href="https://write.as/">write.as</a>';
var x = document.querySelector('footer').getElementsByTagName('nav')[0];
x.innerHTML = customFooterHTML;
