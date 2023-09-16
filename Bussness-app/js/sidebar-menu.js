$(document).ready(function() {
	$('.menu li:has(ul)').click(function(e) {
		e.preventDefault();

		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).children('ul').slideUp();
		} else {
			$('.menu li ul').slideUp();
			$('.menu li').removeClass('active');
			$(this).addClass('active');
			$(this).children('ul').slideDown();
		}

		$('.menu li ul li a').click(function() {
			window.location.href = $(this).attr('href');
		})
	});
});

document.getElementById("toggleButton").addEventListener("click", function () {
	const chevronIcon = document.getElementById("chevronIcon");
	
	if (chevronIcon.classList.contains("bi-chevron-compact-down")) {
	  chevronIcon.classList.remove("bi-chevron-compact-down");
	  chevronIcon.classList.add("bi-chevron-compact-up");
	} else {
	  chevronIcon.classList.remove("bi-chevron-compact-up");
	  chevronIcon.classList.add("bi-chevron-compact-down");
	}
  });
  