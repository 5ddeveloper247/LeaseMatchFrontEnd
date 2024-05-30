
// for window-location
$(document).ready(function () {
    let currentLocation = window.location.pathname;

    currentLocation = currentLocation.substring(currentLocation.lastIndexOf('/') + 1);

    $('.nav-link').each(function () {
        let linkPath = $(this).attr('href').substring($(this).attr('href').lastIndexOf('/') + 1);


        if (linkPath === currentLocation) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});
// video btn-move index-page
const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = 'fa-play';
const pauseIcon = 'fa-pause';

function togglePlayPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButtonIcon() {
    if (video.paused) {
        playPauseBtn.classList.remove(pauseIcon);
        playPauseBtn.classList.add(playIcon);
    } else {
        playPauseBtn.classList.remove(playIcon);
        playPauseBtn.classList.add(pauseIcon);
    }
}

updateButtonIcon();

video.addEventListener('play', updateButtonIcon);
video.addEventListener('pause', updateButtonIcon);
video.addEventListener('click', togglePlayPause);

let posX = 0,
    posY = 0;

const videoContainer = document.querySelector('.video-container');
const button = document.getElementById('playPauseBtn');
const buttonWidth = button.offsetWidth / 2;
const buttonHeight = button.offsetHeight / 2;

function updateButtonPosition(x, y) {
    const rect = videoContainer.getBoundingClientRect();
    const minX = buttonWidth;
    const maxX = rect.width - buttonWidth;
    const minY = buttonHeight;
    const maxY = rect.height - buttonHeight;

    posX = Math.max(minX, Math.min(x, maxX));
    posY = Math.max(minY, Math.min(y, maxY));

    gsap.set(".video-controls", {
        css: {
            left: posX - buttonWidth,
            top: posY - buttonHeight
        }
    });
}

function animateButton() {
    gsap.to(".video-controls", {
        duration: 0.018,
        repeat: -1,
        onRepeat: function () {
            gsap.set(".video-controls", {
                css: {
                    left: posX - buttonWidth,
                    top: posY - buttonHeight
                }
            });
        }
    });
}

animateButton();

videoContainer.addEventListener("mousemove", (e) => {
    const rect = videoContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    updateButtonPosition(mouseX, mouseY);
});

button.addEventListener("click", (e) => {
    togglePlayPause();
    e.stopPropagation();
});
// slider-process-index
$(document).ready(function () {
    function showStep(step) {
        $(".image-container").hide();
        $(".process-text").hide().removeClass("active"); 
        $(".line").css("height", "30px"); 
        $(".rounded-circle").removeClass("active"); 
        $(".process-heading").removeClass("active"); 

        $(`.image-container[data-step=${step}]`).show(); 
        $(`.process-text[data-step=${step}]`).show().addClass("active"); 
        $(`.line[data-step=${step}]`).css("height", "-webkit-fill-available"); 
        $(`.rounded-circle[data-step=${step}]`).addClass("active"); 
        $(`.process-heading[data-step=${step}]`).addClass("active"); 
    }

    // Show the first step by default
    showStep(1);

    $(".process-heading").hover(
        function () {
            const step = $(this).data("step");
            showStep(step);
        }
    );
});


// swiper-index
$(document).ready(function () {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
    });

    // $('#pauseSwiper').hover(
    //     function () {
    //         swiper.autoplay.stop();
    //     },
    //     function () {
    //         swiper.autoplay.start();
    //     }
    // );
});
// read more btn
$(document).ready(function () {
    $(".more-text").hide();
    $(".readMoreBtn").text("Read More");

    $(".readMoreBtn").click(function () {
        var $text = $(this).prev(".more-text");
        $text.toggle();
        $(this).text(function (_, text) {
            return text === "Read More" ? "Read Less" : "Read More";
        });
    });
});
// fliper-index
$(document).ready(function () {
    var $carousel = $('#carousel').flipster({
        itemContainer: '.flip-items',
        itemSelector: '.flip-item',
        start: 'center',
        style: 'coverflow',
        spacing: '-0.9',
        click: true,
        pagination: true,
    });

    var $pagination = $(".flipster__pagination");
    var $flipItems = $carousel.find(".flip-item");

    $flipItems.each(function (index) {
        var $dot = $("<li class='flipster__pagination__item'></li>").appendTo($pagination);
        $dot.on("click", function () {
            $carousel.flipster("jump", index);
            $pagination.find(".flipster__pagination__item").removeClass("flipster__pagination__item--current");
            $dot.addClass("flipster__pagination__item--current");
        });
    });

    $carousel.on("flipster:change", function (e, index) {
        $pagination.find(".flipster__pagination__item").removeClass("flipster__pagination__item--current");
        $pagination.find(".flipster__pagination__item").eq(index).addClass("flipster__pagination__item--current");
    });

    $pagination.find(".flipster__pagination__item").eq(0).addClass("flipster__pagination__item--current"); // Set the first pagination item as active
});