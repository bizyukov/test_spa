/**
  * Create application, this is very simple application, 
  * we just need to send request and show result, 
  * we don't need realize routers, controllers, models etc
  */
var App = (function() {
	/**
	* this method just showing the result
	* 
	* @param {JSON} message - response msg
	* 
	*/
	this.showMsg = (message) => {
		let msg = document.querySelector('.msg');
		msg.textContent = "";

		if(message.error){
			message = message.error; 
		}
		
		for (var key in message) {
			let div = document.createElement('div');
			div.innerHTML = '<strong>'+key+':</strong> '+message[key];
			msg.appendChild(div)
		}
	};
	
	/**
	* this method start the application
	* 
	*/
	this.start = () => {
		/**
		* add event listener to the button
		* 
		*/
		document.querySelector('button')
			.addEventListener('click', (e) => {
				const key = 'f3ac5da40170e9581e028ad7fda8ede3';
				let input = document.querySelector('input').value;
				let url = 'http://apilayer.net/api/check?access_key=' + key + '&email=' + input;
				/**
				* checking if XMLHttpRequest have "onload" method
				* 
				*/
				let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

				let xhr = new XHR();

				xhr.open('GET', url, true);

				/**
				* success response from server
				* 
				*/
				xhr.onload = (e) => {
					this.showMsg(JSON.parse(e.currentTarget.responseText));
				};
				/**
				* error response from server
				* 
				*/
				xhr.onerror = (e) => {
					this.showMsg(JSON.parse(e.currentTarget.status));
				};

				xhr.send();
		});
	};

	return this;
  })();

/**
* run the application
* 
*/
App.start();