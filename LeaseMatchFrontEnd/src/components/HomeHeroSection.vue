<template>
    <!-- Section 1 -->
    <section class="sec-1 main-section mt-5">
        <div class="container-fluid main-fluid">
            <div class="row">
                <div class="col-12 col-lg-5 main-content d-flex align-items-center">
                    <div class="mx-md-4 mx-3 main-data">
                        <div class="main-content-h">
                            <h1 ref="heading">LeaseMatch.NYC <br> New York’s First AI-Driven Matchmaking Platform</h1>
                        </div>
                        <div class="mt-4">
                            <p ref="paragraph" class="text-white main-content-p"
                                style="font-weight: bold; font-style: italic;">
                                A renovated home available for rent. 2 bedrooms, 2 full baths, living and dining rooms
                            </p>
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
                        <video id="myVideo" class="h-100 w-100" style="object-fit: cover" autoplay>
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
                <!-- Left Column with Boxes -->
                <div class="col-lg-6 box-tabs p-lg-0">
                    <div class="row row-30 row-flex">
                        <!-- Box 1 -->
                        <div class="col-md-6 mb-4">
                            <div class="box-about">
                                <div class="box-about-icon">
                                    <i class="fa-solid fa-person" style="font-size:36px;"></i>

                                </div>
                                <h4 class="box-about-title">Vetted Renters</h4>
                                <div class="box-about-divider mt-4"></div>
                                <div class="elementor-element elementor-element-0700d4b e-con-full e-flex e-con e-child"
                                    data-id="0700d4b" data-element_type="container"
                                    data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                                    <div class="elementor-element elementor-element-b58186b elementor-align-left elementor-widget elementor-widget-etheme_icon_box"
                                        data-id="b58186b" data-element_type="widget"
                                        data-widget_type="etheme_icon_box.default">
                                        <div class="elementor-widget-container">
                                            <div class="etheme-icon-box etheme-icon-box-icon-position-left">


                                                <div class="etheme-icon-box-icon etheme-icon-box-icon-type-icon">

                                                    <i aria-hidden="true" class="et-icon et-checked"></i>
                                                </div>

                                                <div class="etheme-icon-box-content">


                                                    <h3 class="etheme-icon-box-title">
                                                        <span><i class=" me-1 fa-regular fa-circle-check"
                                                                style="color: #04d7e8; font-size: 25px;"></i>4K+</span>
                                                    </h3>

                                                    <p class="etheme-icon-box-description"
                                                        style="font-weight: bold; font-style: italic !important;">
                                                        Vetted Renters
                                                    </p>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <p class="text-dark">We have lots of properties in various locations.</p> -->
                            </div>
                        </div>
                        <!-- Box 2 -->
                        <div class="col-md-6 mb-4">
                            <div class="box-about">
                                <div class="box-about-icon">
                                    <i class="fa-solid fa-house" style="font-size:36px;"></i>
                                </div>
                                <h4 class="box-about-title">Vetted Landlords</h4>
                                <div class="box-about-divider mt-4"></div>
                                <div class="elementor-element elementor-element-e1bde9a e-con-full e-flex e-con e-child"
                                    data-id="e1bde9a" data-element_type="container"
                                    data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                                    <div class="elementor-element elementor-element-bc51060 elementor-align-left elementor-widget elementor-widget-etheme_icon_box"
                                        data-id="bc51060" data-element_type="widget"
                                        data-widget_type="etheme_icon_box.default">
                                        <div class="elementor-widget-container">
                                            <div class="etheme-icon-box etheme-icon-box-icon-position-left">
                                                <div class="etheme-icon-box-icon etheme-icon-box-icon-type-icon">

                                                    <i aria-hidden="true" class="et-icon et-checked"></i>
                                                </div>

                                                <div class="etheme-icon-box-content">


                                                    <h3 class="etheme-icon-box-title">
                                                        <span><i class=" me-1 fa-regular fa-circle-check"
                                                                style="color: #04d7e8; font-size: 25px;"></i>1K+</span>
                                                    </h3>

                                                    <p class="etheme-icon-box-description">
                                                        Vetted Landlords
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <p class="text-dark">We have lots of properties in various locations.</p> -->
                            </div>
                        </div>
                        <!-- Box 3 -->
                        <div class="col-md-6 mb-4 mb-lg-0">
                            <div class="box-about">
                                <div class="box-about-icon">
                                    <i class="fa-solid fa-gauge" style="font-size:36px;"></i>

                                </div>
                                <h4 class="box-about-title">Average time to match</h4>
                                <div class="box-about-divider mt-4"></div>
                                <div class="elementor-element elementor-element-a103f18 e-con-full e-flex e-con e-child"
                                    data-id="a103f18" data-element_type="container"
                                    data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                                    <div class="elementor-element elementor-element-b6a2684 elementor-align-left elementor-widget elementor-widget-etheme_icon_box"
                                        data-id="b6a2684" data-element_type="widget"
                                        data-widget_type="etheme_icon_box.default">
                                        <div class="elementor-widget-container">
                                            <div class="etheme-icon-box etheme-icon-box-icon-position-left">


                                                <div class="etheme-icon-box-icon etheme-icon-box-icon-type-icon">

                                                    <i aria-hidden="true" class="et-icon et-checked"></i>
                                                </div>

                                                <div class="etheme-icon-box-content">


                                                    <h3 class="etheme-icon-box-title">
                                                        <span><i class=" me-1 fa-regular fa-circle-check"
                                                                style="color: #04d7e8; font-size: 25px;"></i>60
                                                            Days</span>
                                                    </h3>

                                                    <p class="etheme-icon-box-description">
                                                        Average time to match </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <p class="text-dark">We have lots of properties in various locations.</p> -->
                            </div>
                        </div>
                        <!-- Box 4 -->
                        <div class="col-md-6 mb-4 mb-lg-0">
                            <div class="box-about">
                                <div class="box-about-icon">
                                    <i class="fa-solid fa-check-double" style="font-size:36px;"></i>

                                </div>
                                <h4 class="box-about-title">Success Rate</h4>
                                <div class="box-about-divider  mt-4 "></div>
                                <div class="elementor-element elementor-element-540732f e-con-full e-flex e-con e-child"
                                    data-id="540732f" data-element_type="container"
                                    data-settings="{&quot;content_width&quot;:&quot;full&quot;}">
                                    <div class="elementor-element elementor-element-abf869f elementor-align-left elementor-widget elementor-widget-etheme_icon_box"
                                        data-id="abf869f" data-element_type="widget"
                                        data-widget_type="etheme_icon_box.default">
                                        <div class="elementor-widget-container">
                                            <div class="etheme-icon-box etheme-icon-box-icon-position-left">


                                                <div class="etheme-icon-box-icon etheme-icon-box-icon-type-icon">

                                                    <i aria-hidden="true" class="et-icon et-checked"></i>
                                                </div>

                                                <div class="etheme-icon-box-content">
                                                    <h3 class="etheme-icon-box-title">
                                                        <span><i class=" me-1 fa-regular fa-circle-check"
                                                                style="color: #04d7e8; font-size: 25px;"></i>92%</span>
                                                    </h3>
                                                    <p class="etheme-icon-box-description">
                                                        Success Rate </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <p class="text-dark">We have lots of properties in various locations.</p> -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Right Column with Tabs -->
                <div class="col-lg-5 box-tabss-main">
                    <div class="box-tabss-main-inner">
                        <h2>About Our Company</h2>
                        <div class="divider-small"></div>
                        <br>
                        <!-- Tabs -->
                        <!-- <ul class="nav nav-tabs main-tab-about" role="tablist">
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
                        </ul> -->
                        <!-- Tab Content -->
                        <div class="tab-content">
                            <div id="home" class="container tab-pane active text-white main-tab-content p-0">
                                <br>
                                <p style=" font-size: 14px; font-weight: 600;">
                                    At LeaseMatch, we leverage cutting-edge proprietary AI technology to seamlessly
                                    connect landlords with vetted, ready-to-move-in tenants, ensuring a perfect match
                                    every time.
                                    Our commitment to excellence is reflected in our deep understanding of New York
                                    City's ever-evolving housing guidelines. We pride ourselves on staying up-to-date
                                    with all regulations, ensuring a smooth and compliant process for both landlords and
                                    tenants.
                                    LeaseMatch specializes in all types of housing, but we take particular pride in our
                                    expertise in placing Section 8 tenants, CityFHEPS voucher holders, as well as SOTA
                                    and HASA clients. Our extensive knowledge and robust connections within the NYC
                                    housing market empower us to secure the ideal apartment for you.
                                </p>
                            </div>



                        </div>
                        <!-- Call to Action Button -->
                        <a href="/contact" class="button main-content-btn theme_btn1">
                            Get in Touch <span></span><span></span><span></span><span></span>
                        </a>
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
