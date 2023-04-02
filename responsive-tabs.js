/**
  ** http://github.com/localnetwork/
  **/
(function ($){
	$.fn.responsiveTabs = function() {
	this.addClass('responsive-tabs'),
	this.append($('<span class="dropdown-arrow"></span>')),

	this.on("click", "li > button.active, span.dropdown-arrow", function (){
		
			this.toggleClass('open');
		}.bind(this)), this.on("click", "li > button:not(.active)", function() {
			this.addClass("123")

	        this.removeClass("open")
			console.log(this.text())
	    }.bind(this)); 
	}
})(jQuery);