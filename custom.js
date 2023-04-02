jQuery(document).ready(function(){
	jQuery("#search-btn").click(function(){
		jQuery(".search-wrap").slideToggle();
		jQuery(this).toggleClass("active");
	});

	jQuery("#filter-btn").click(function(){
		jQuery(".filter-wrap").slideToggle();
		jQuery(this).toggleClass("active");
	});

	jQuery(".password-visibility").click(function() {
		jQuery(this).toggleClass("visible");
	})
});

function passwordVisibility() {
	let field = document.getElementsByClassName("password")[0];
	console.log(field)
	if (field.type === "password") {
		field.type = "text";
	} else {
		field.type = "password";
	}
}

jQuery('.trending-topic-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	infinite: false,
	dots: false,
	speed: 500,
	mobileFirst: true,
	responsive: [
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 991,
		settings: "unslick"
	}
	]
});

jQuery('.latest-intelligence-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	infinite: false,
	dots: false,
	speed: 500,
	mobileFirst: true,
	responsive: [
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 767,
		settings: "unslick"
	}
	]
});

jQuery('.latest-webinar-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	infinite: false,
	dots: false,
	speed: 500,
	mobileFirst: true,
	responsive: [
	{
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 767,
		settings: "unslick"
	}
	]
});


// Sticky Header Jquery
// jQuery(window).scroll(function() {    
// 	var scroll = jQuery(window).scrollTop();
// 	console.log(scroll)
// 	if (scroll > 0) {
// 		console.log(scroll)
// 		jQuery(".header-main").addClass("position-fixed");
// 	} else {
// 		jQuery(".header-main").removeClass("position-fixed");
// 	}
// });


// Filter Select Jquery
jQuery('.custom-select-wrap .select-value').click(function(){
	jQuery(this).parents(".custom-select-wrap").find('.option-item').removeClass('expanded');
	if(jQuery(this).parents(".custom-select-wrap").hasClass('expanded')){
		jQuery(this).parents(".custom-select-wrap").removeClass('expanded');

	} else {
		jQuery(this).parents(".custom-select-wrap").addClass('expanded');
	}
});

jQuery('.custom-select-wrap .option-item').click(function() {
	if(jQuery(this).hasClass('sub-option-item')) {
		if(jQuery(this).hasClass('expanded')) {
			jQuery(this).removeClass('expanded');
		} else {
			jQuery(".custom-select-wrap .option-item").removeClass('expanded');
			jQuery(this).addClass('expanded');
		}
	} else {
		jQuery(this).parents('.custom-select-wrap').find(".selected-value").html(jQuery(this).html());
		jQuery(this).addClass('selected-item');
		jQuery(this).parents(".custom-select-wrap").addClass('active-select');
		jQuery(".custom-select-wrap .option-item").removeClass('expanded');
		jQuery(".custom-select-wrap").removeClass('expanded');
	}
});

jQuery('.custom-select-wrap .select-icons .cancel').click(function() {
	jQuery(this).parents(".custom-select-wrap").find(".selected-value").html(' ');
	jQuery(this).parents(".custom-select-wrap").removeClass('active-select');
	jQuery(this).parents(".custom-select-wrap").find(".option-item").removeClass('selected-item');
});


// default menu open

// jQuery(".navbar .header-btns .toggle-btn.btn").on("click", function () {
// 	if (jQuery(".navbar-nav .dropdown-menu").hasClass("show") && jQuery("a.dropdown-toggle").hasClass("show")) {
// 	  jQuery(".navbar-nav .dropdown-menu").removeClass("show");
// 	} else {
// 	  jQuery(".navbar-nav .dropdown-menu").addClass("show");
// 	  jQuery("a.dropdown-toggle").addClass("show");
// 	}
//   });


//tabs-content

const $tabsToDropdown = $(".tabs-to-dropdown");

function generateDropdownMarkup(container) {
  const $navWrapper = container.find(".nav-wrapper");
  const $navPills = container.find(".nav-pills");
  const firstTextLink = $navPills.find("li:first-child a").text();
  const $items = $navPills.find("li");
  const markup = `
    <div class="dropdown d-md-none">
      <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ${firstTextLink}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
        ${generateDropdownLinksMarkup($items)}
      </div>
    </div>
  `;
  $navWrapper.prepend(markup);
}

function generateDropdownLinksMarkup(items) {
  let markup = "";
  items.each(function () {
    const textLink = $(this).find("a").text();
    markup += `<a class="dropdown-item" href="#">${textLink}</a>`;
  });

  return markup;
}

function showDropdownHandler(e) {
  // works also
  //const $this = $(this);
  const $this = $(e.target);
  const $dropdownToggle = $this.find(".dropdown-toggle");
  const dropdownToggleText = $dropdownToggle.text().trim();
  const $dropdownMenuLinks = $this.find(".dropdown-menu a");
  const dNoneClass = "d-none";
  $dropdownMenuLinks.each(function () {
    const $this = $(this);
    if ($this.text() == dropdownToggleText) {
      $this.addClass(dNoneClass);
    } else {
      $this.removeClass(dNoneClass);
    }
  });
}

function clickHandler(e) {
  e.preventDefault();
  const $this = $(this);
  const index = $this.index();
  const text = $this.text();
  $this.closest(".dropdown").find(".dropdown-toggle").text(`${text}`);
  $this
    .closest($tabsToDropdown)
    .find(`.nav-pills li:eq(${index}) a`)
    .tab("show");
}

function shownTabsHandler(e) {
  // works also
  //const $this = $(this);
  const $this = $(e.target);
  const index = $this.parent().index();
  const $parent = $this.closest($tabsToDropdown);
  const $targetDropdownLink = $parent.find(".dropdown-menu a").eq(index);
  const targetDropdownLinkText = $targetDropdownLink.text();
  $parent.find(".dropdown-toggle").text(targetDropdownLinkText);
}

$tabsToDropdown.each(function () {
  const $this = $(this);
  const $pills = $this.find('a[data-toggle="pill"]');

  generateDropdownMarkup($this);

  const $dropdown = $this.find(".dropdown");
  const $dropdownLinks = $this.find(".dropdown-menu a");

  $dropdown.on("show.bs.dropdown", showDropdownHandler);
  $dropdownLinks.on("click", clickHandler);
  $pills.on("shown.bs.tab", shownTabsHandler);
});