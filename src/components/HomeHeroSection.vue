<template>
    <!-- Section 1 -->
    <section class="sec-1 main-section mt-5">
        <div class="container-fluid main-fluid">
            <div class="row">
                <div class="col-12 col-lg-5 main-content d-flex align-items-center">
                    <div class="mx-md-4 mx-3 main-data">
                        <div class="main-content-h">
                            <h1 ref="heading">Lorem Ipsum Freoewu Trebdsshd Rttsdy</h1>
                        </div>
                        <div class="mt-4">
                            <p ref="paragraph" class="text-white main-content-p">A renovated home available for rent. 2
                                bedrooms, 2 full baths, living and dining rooms</p>
                        </div>
                        <div ref="span" class="main-content-span"><span class="main-price">$5000/mo</span></div>
                        <div>
                            <RouterLink to="/registerForm">
                                <button ref="enrollLink" class="main-btn mt-4 font-weight theme_btn2">Register
                                    <span></span><span></span><span></span><span></span>
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-7 p-0">
                    <div class="video-container" @mousemove="updateButtonPosition" @mouseenter="showButton"
                        @mouseleave="hideButton">
                        <div class="shade-overlay"></div>
                        <video id="myVideo" class="h-100 w-100" style="object-fit: cover" autoplay muted>
                            <source
                                src="https://www.leasematch.nyc/wp-content/uploads/2023/12/LeaseMatch.NYC-Your-Dream-Home-1.mp4">
                        </video>
                        <div v-if="showControls" class="video-controls"
                            :style="{ top: buttonTop + 'px', left: buttonLeft + 'px' }">
                            <button @click="togglePlayPause" style="border: none" class="video-btn">
                                <i :class="playIcon"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- section-2 -->
    <section class="sec-2">
        <div class="container my-5">
            <div class="row box-aboutt justify-content-between">
                <div class="col-lg-6 box-tabs p-lg-0">
                    <div class="row row-30 row-flex">
                        <div class="col-md-6 mb-4">
                            <div class="box-about">
                                <div class="box-about-icon">
                                    <i class="fa-solid fa-location-dot" style="font-size: 36px;"></i>
                                </div>
                                <h4 class="box-about-title">Various Locations</h4>
                                <div class="box-about-divider"></div>
                                <p class="text-dark">We have lots of properties in various locations.</p>
                            </div>
                        </div>
                        <!-- 2 -->
                        <div class="col-md-6 mb-4">
                            <div class="box-about">
                                <div class="box-about-icon">
                                    <i class="fa-solid fa-folder-open" style="font-size: 36px;"></i>
                                </div>
                                <h4 class="box-about-title">Various Locations</h4>
                                <div class="box-about-divider"></div>
                                <p class="text-dark">We have lots of properties in various locations.</p>
                            </div>
                        </div>
                        <!-- 3 -->
                        <div class="col-md-6 mb-4 mb-lg-0">
                            <div class="box-about">
                                <div class="box-about-icon">
                                    <i class="fa-solid fa-location-dot" style="font-size: 36px;"></i>
                                </div>
                                <h4 class="box-about-title">Various Locations</h4>
                                <div class="box-about-divider"></div>
                                <p class="text-dark">We have lots of properties in various locations.</p>
                            </div>
                        </div>
                        <!-- 4 -->
                        <div class="col-md-6 mb-4 mb-lg-0">
                            <div class="box-about">
                                <div class="box-about-icon">
                                    <i class="fa-solid fa-folder-open" style="font-size: 36px;"></i>
                                </div>
                                <h4 class="box-about-title">Various Locations</h4>
                                <div class="box-about-divider"></div>
                                <p class="text-dark">We have lots of properties in various locations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- part2 -->
                <div class="col-lg-5 box-tabss-main">
                    <div class="box-tabss-main-inner">
                        <h2>About Our Company</h2>
                        <div class="divider-small"></div>
                        <br>
                        <!-- Nav tabs -->
                        <ul class="nav nav-tabs main-tab-about" role="tablist">
                            <li class="nav-item tab-about-item">
                                <a class="nav-link tab-about font-weight active" aria-current="page"
                                    data-bs-toggle="tab" href="#home">Service</a>
                            </li>
                            <li class="nav-item tab-about-item">
                                <a class="nav-link tab-about" data-bs-toggle="tab" href="#menu1">Aims</a>
                            </li>
                            <li class="nav-item tab-about-item">
                                <a class="nav-link tab-about" data-bs-toggle="tab" href="#menu2">Mission</a>
                            </li>
                        </ul>

                        <!-- Tab panes -->
                        <div class="tab-content">
                            <div id="home" class="container tab-pane active text-white main-tab-content p-0"><br>
                                <p>Real Estate is a full-service, luxury real estate brokerage company representing
                                    clients worldwide. </p>
                                <p>Since its inception, we have redefined the business of real estate, modernizing and
                                    advancing the industry by fostering a culture of partnership involving our clients.
                                </p>
                            </div>
                            <div id="menu1" class="container tab-pane fade text-white p-0"><br>
                                <p>We have been working since 1999 to be sure you are getting the best real estate
                                    service possible. </p>
                                <p>Real Estate aims to unite real estate brokers to provide their clients and partners
                                    with the top-notch level of brokerage services throughout the USA.</p>
                            </div>
                            <div id="menu2" class="container tab-pane fade text-white p-0"><br>
                                <p>Our mission is to be the most successful real estate firm in the local states and
                                    beyond. </p>
                                <p>Real Estate incorporates proven, professional state of-the-art techniques
                                    specializing in the marketing, listing and selling of new and resale luxury homes.
                                </p>
                            </div>
                        </div>
                        <RouterLink class="button main-content-btn theme_btn1" to="/contact">Get in Touch
                            <span></span><span></span><span></span><span></span>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>




<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const buttonTop = ref(0);
const buttonLeft = ref(0);
const showControls = ref(false);
const playIcon = ref('fa fa-play');


const heading = ref(null);
const paragraph = ref(null);
const span = ref(null);
const enrollLink = ref(null);

const togglePlayPause = () => {
    const video = document.getElementById('myVideo');
    if (video.paused) {
        video.play();
        playIcon.value = 'fa fa-pause';
    } else {
        video.pause();
        playIcon.value = 'fa fa-play';
    }
};

const updateButtonPosition = (event) => {
    const videoContainer = document.querySelector('.video-container');
    const rect = videoContainer.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    buttonTop.value = mouseY;
    buttonLeft.value = mouseX;
};

const showButton = () => {
    showControls.value = true;
};

const hideButton = () => {
    showControls.value = false;
};

onMounted(() => {
    const video = document.getElementById('myVideo');
    video.addEventListener('play', () => {
        playIcon.value = 'fa fa-pause';
    });
    video.addEventListener('pause', () => {
        playIcon.value = 'fa fa-play';
    });


    const headingElement = heading.value;
    const paragraphElement = paragraph.value;
    const spanElement = span.value;
    const enrollLinkElement = enrollLink.value;

    const headingLetters = headingElement.textContent.trim().split('');
    headingElement.innerHTML = '';
    headingLetters.forEach(letter => {
        const span = document.createElement('span');
        span.textContent = letter;
        headingElement.appendChild(span);
    });

    const headingAnimation = gsap.from(headingElement.children, {
        duration: 0.3,
        opacity: 0,
        y: 10,
        ease: "power2.out",
        stagger: 0.03
    });

    gsap.set([paragraphElement, spanElement, enrollLinkElement], {
        opacity: 0
    });

    const timeline = gsap.timeline();
    timeline.add(headingAnimation);
    timeline.to([paragraphElement, spanElement, enrollLinkElement], {
        duration: 0.4,
        opacity: 1,
        y: 0,
        ease: "power2.out",
        stagger: .1
    });
});
</script>




<style scoped>
.video-container {
    position: relative;
    overflow: hidden;
}

.video-controls {
    position: absolute;
    pointer-events: none;
    /* Allows click-through */
}

.video-controls button {
    pointer-events: auto;
    /* Re-enables pointer events for the button itself */
}

.shade-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    pointer-events: none;
}
</style>
