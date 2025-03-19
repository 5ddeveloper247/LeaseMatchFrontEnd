<script>
export default {
    mounted() {
        // $(document).ready(() => {
        //     var swiper = new Swiper('.mySwiper', {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //         loop: true,
        //         pagination: {
        //             el: '.swiper-pagination',
        //             clickable: true,
        //         },
        //         autoplay: {
        //             delay: 7000,
        //             disableOnInteraction: false,
        //         },
        //     });

        // });
        // $(document).ready(() => {
        //     var $carousel = $('#carousel').flipster({
        //         itemContainer: '.flip-items',
        //         itemSelector: '.flip-item',
        //         start: 'center',
        //         style: 'coverflow',
        //         spacing: '-0.9',
        //         click: true,
        //         pagination: true,
        //     });

        //     var $pagination = $(" .flipster__pagination");
        //     var $flipItems = $carousel.find(".flip-item");

        //     $flipItems.each(function (index) {
        //         var $dot = $("<li class='flipster__pagination__item'></li>").appendTo($pagination);
        //         $dot.on("click", function () {
        //             $carousel.flipster("jump", index);
        //             $pagination.find(".flipster__pagination__item").removeClass("flipster__pagination__item--current");
        //             $dot.addClass("flipster__pagination__item--current");
        //         });
        //     });

        //     $carousel.on("flipster:change", function (e, index) {
        //         $pagination.find(".flipster__pagination__item").removeClass("flipster__pagination__item--current");
        //         $pagination.find(".flipster__pagination__item").eq(index).addClass("flipster__pagination__item--current");
        //     });

        //     $pagination.find(".flipster__pagination__item").eq(0).addClass("flipster__pagination__item--current"); // Set the first pagination item as active
        // });
    }
}

</script>
<script setup>
import { ref, onBeforeMount, onMounted, computed } from 'vue';
import { axiosInstance } from '@/plugins/axios';
import { baseURL } from '@/plugins/axios';
// Testimonial Component
import Testimonial from '@/components/Testimonial.vue';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const modules = ref([Autoplay, EffectCoverflow]);
const coverflowEffect = {
    rotate: 0,
    stretch: 100,
    depth: 300,
    modifier: 2,
    slideShadows: false,
};
const autoplay = {
    delay: 3500,
    disableOnInteraction: false
}

const testimonials = ref([]);
onMounted(async () => {
    try {
        const response = await axiosInstance.get('/siteTestimonials');
        if (response.status == 200) {
            const data = response?.data?.testimonials;
            testimonials.value = data;
        } else {
            toastr.error('API error:', response.data.error);
        }
    } catch (error) {
        const errorMessage = error.response?.status === 422
            ? 'An unexpected error occurred. Please try again.'
            : 'An unexpected error occurred. Please try again.';
        toastr.error(errorMessage);
    }

});
const parsedUrl = computed(() => baseURL.split('/api')[0]);



</script>
<template>
    <!-- section 5 -->
    <section class="sec-5 mb-5">
        <div class="container">
            <div class="swiper mySwiper" style="position: relative;">
                <div class="swiper-wrapper">
                    <!-- Slide 1 -->
                    <div class="swiper-slide">
                        <div class="row px-xl-5 justify-content-around" style="gap: 30px;">
                            <div class="col-md-5 ms-md-0 d-flex justify-content-center">
                                <div class="progress-video">
                                    <img class="dots" src="../assets/images/dots.svg" alt="dots">
                                    <div class="video-progress-container h-100">
                                        <div class="video-image h-100">
                                            <img src="../assets/images/Number-of-Vetted-Renters.jpg" alt="video"
                                                class="h-100">
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- 2nd part -->
                            <div class="col-md-6">
                                <div class="progress-bar1 mb-4"></div>
                                <div class="progress-text">
                                    <h1 class="mb-3 site-color">Expansive <span
                                            class="font-weight progress-head">Renter</span> Network
                                    </h1>
                                    <p class="mb-3 site-color right" id="pauseSwiper">LeaseMatch.NYC stands as the
                                        premier
                                        platform for bridging the gap between renters and landlords in the bustling
                                        heart of New York City. Our service caters to a diverse range of clients,
                                        including those who are currently housed, individuals actively seeking a new
                                        home, and holders of housing vouchers.
                                    </p>
                                    <div class="more-text site-color right">
                                        <p>We maintain a dynamic and up-to-date
                                            roster of verified renters, creating a dependable environment for landlords
                                            and
                                            offering a wide array of options for prospective tenants. This ensures that
                                            everyone involved in the housing process, from landlords to tenants,
                                            benefits
                                            from the most current and relevant information. Our platform is not just
                                            about
                                            connecting spaces with people; it’s about creating communities and ensuring
                                            every New Yorker finds a place they can call home. </p>
                                    </div>

                                    <!-- <button class="readMoreBtn" style="
                                        margin-bottom: 20px;
                                        border: none;
                                        background: transparent;
                                        border-bottom: 2px solid black;
                                        padding: 0px;">Read More</button> -->

                                    <div class="row justify-content-around">
                                        <div class="col-4 progress-pills-container d-flex justify-content-center">
                                            <div
                                                class="progress-pills d-flex text-center text-white align-items-center justify-content-center">
                                                <div class="d-flex flex-column"><span>4k+ </span><span
                                                        class="font">Renters</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 progress-pills-container d-flex justify-content-center">
                                            <div
                                                class="progress-pills2 d-flex text-center text-white align-items-center justify-content-center">
                                                <div class="d-flex flex-column"><span>1k+ </span><span
                                                        class="font">Landlords</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 progress-pills-container d-flex justify-content-center">
                                            <div
                                                class="progress-pills3 d-flex text-center text-white align-items-center justify-content-center">
                                                <div class="d-flex flex-column"><span>60 Day </span><span
                                                        class="font">Avg</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 2 -->
                    <div class="swiper-slide">
                        <div class="row px-xl-5 justify-content-around" style="gap: 30px;">
                            <div class="col-md-5 ms-md-0 d-flex justify-content-center">
                                <div class="progress-video">
                                    <img class="dots" src="../assets/images/dots.svg" alt="dots">
                                    <div class="video-progress-container h-100">
                                        <div class="video-image h-100">
                                            <img src="../assets/images/Landlord-partnerships.jpg" alt="video"
                                                class="h-100">
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- 2nd part -->
                            <div class="col-md-6">
                                <div class="progress-bar2 mb-4"></div>
                                <div class="progress-text">
                                    <h1 class="mb-3 site-color">Strategic <span class="font-weight progress-head2"
                                            style="color: blue;">Landlord</span> Alliances
                                    </h1>
                                    <p class="mb-3 site-color right" id="pauseSwiper"> With a wealth of experience in
                                        New
                                        York’s real estate market,
                                        LeaseMatch.NYC has built strong relationships with top developers and landlords
                                        across the state. Our platform is a testament to our deep understanding of the
                                        needs
                                        of both tenants and landlords. We continuously invite applications from
                                        distinguished landlords,</p>
                                    <div class="more-text site-color right">
                                        <p>aiming to enhance our already impressive registry with
                                            top-tier property options.
                                            Our meticulously crafted form, designed to capture
                                            comprehensive details about landlords and their properties, ensures a match
                                            made in
                                            real estate heaven. Upon submission, our expert team, well-versed in all
                                            facets of
                                            real estate, promises a swift response within 24 hours. </p>
                                    </div>

                                    <!-- <button onclick="toggleVisibility()" class="readMoreBtn" style="
                                        margin-bottom: 20px;
                                        border: none;
                                        background: transparent;
                                        border-bottom: 2px solid black;
                                        padding: 0px;">Read More</button> -->

                                    <div class="row justify-content-around">
                                        <div class="col-4 progress-pills-container d-flex justify-content-center">
                                            <div
                                                class="progress-pills d-flex text-center text-white align-items-center justify-content-center">
                                                <div class="d-flex flex-column"><span>4k+ </span><span
                                                        class="font">Renters</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 progress-pills-container d-flex justify-content-center">
                                            <div
                                                class="progress-pills2 d-flex text-center text-white align-items-center justify-content-center">
                                                <div class="d-flex flex-column"><span>1k+ </span><span
                                                        class="font">Landlords</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 progress-pills-container d-flex justify-content-center">
                                            <div
                                                class="progress-pills3 d-flex text-center text-white align-items-center justify-content-center">
                                                <div class="d-flex flex-column"><span>60 Day </span><span
                                                        class="font">Avg</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 3 -->
                    <div class="swiper-slide">
                        <div class="row px-xl-5 justify-content-around" style="gap: 30px;">
                            <div class="col-md-5 ms-md-0 d-flex justify-content-center">
                                <div class="progress-video">
                                    <img class="dots" src="../assets/images/dots.svg" alt="dots">
                                    <div class="video-progress-container h-100">
                                        <div class="video-image h-100">
                                            <img src="../assets/images/Average-time-to-match.jpg" alt="video"
                                                class="h-100">
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <!-- 2nd part -->
                            <div class="col-md-6">
                                <div class="progress-bar3 mb-4"></div>
                                <div class="progress-text">

                                    <h1 class="mb-3 site-color" id="pauseSwiper">Swift <span
                                            class="font-weight progress-head3"
                                            style="color: goldenrod !important;">Matchmaking </span>Timeline
                                    </h1>
                                    <p class="mb-3 site-color right "> Our platform is changing the way you find homes
                                        in New
                                        York
                                        City. With our advanced AI, we quickly match your application with a wide range
                                        of
                                        available homes, usually within just 60 days. Our team is constantly improving
                                        this
                                        technology to find you the best match faster. We’re dedicated to helping you
                                        easily
                                        find not just any house, but your dream home. Experience a new and efficient way
                                        to
                                        find the perfect home, where innovative technology meets tailored service.
                                    </p>

                                    <div class="row justify-content-around">
                                        <div class="col-4 progress-pills-container d-flex justify-content-center">
                                            <div
                                                class="progress-pills d-flex text-center text-white align-items-center justify-content-center">
                                                <div class="d-flex flex-column"><span>4k+ </span><span
                                                        class="font">Renters</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 progress-pills-container d-flex justify-content-center">
                                            <div
                                                class="progress-pills2 d-flex text-center text-white align-items-center justify-content-center">
                                                <div class="d-flex flex-column"><span>1k+ </span><span
                                                        class="font">Landlords</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 progress-pills-container d-flex justify-content-center">
                                            <div
                                                class="progress-pills3 d-flex text-center text-white align-items-center justify-content-center">
                                                <div class="d-flex flex-column"><span>60 Day </span><span
                                                        class="font">Avg</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>


    <!-- section6 -->
    <section class="sec my-2">
        <div class="container space">
            <!-- <div class="row">
                <h1 class="site-color text-center">Customer Satisfaction</h1>
                <swiper class="slider" :loop="true" :effect="'coverflow'" :slides-per-view="3" :autoplay="autoplay"
                    :speed="1000" :space-between="110" :modules="modules" :coverflow-effect="{
                        rotate: 25,
                        stretch: 30,
                        depth: 300,
                        modifier: 1,
                        slideShadows: false
                    }" :centered-slides="true" style="overflow: hidden; width: 100%;">

                    <swiper-slide class="landing-card py-4 px-3 rounded-3 text-center"
                        v-for="testimonial in testimonials" :key="testimonial.id"
                        style="display: flex; justify-content: center; align-items: center; ">

                        <div class="flip-items" style="max-width: 100%; text-align: center;">
                            <div class="item-inner shadow-lg rounded" style="padding: 20px; border-radius: 10px;">
                                <h5 class="mb-2">{{ testimonial?.title }}</h5>
                                <div class="ratings site-color mb-3">
                                    <i v-for="star in 5" :key="star" class="fa fa-star"
                                        :style="{ color: star <= testimonial.rating ? '#FFD700' : '#D3D3D3' }">
                                    </i>
                                </div>
                                <div class="mb-3 text-justify">
                                    {{ testimonial?.description }}
                                </div>

                                <div class="source media flex-md-row d-flex justify-content-around">
                                    <img class="source-profile rounded-circle" src="../assets/images/faq-img-01.png"
                                        style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%;">
                                    
                                    <div class="source-info media-body pt-3" style="text-align: left;">
                                        <div>{{ testimonial?.name }}</div>
                                        <div>{{ testimonial?.address }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

            </div> -->
            <div class="row">
                
                <Testimonial :testimonials="testimonials"/>

            </div>
        </div>
    </section>
</template>


<style scoped>
p {
    color: #000 !important;
}

.font {
    font-size: 13px;
}

.right {
    margin-right: 11%;
}

@media (max-width: 768px) {
    .font {
        font-size: 9px;
    }

    .space {
        margin-top: -7%;
    }
}

@media screen and (max-width: 350px) {
    .progress-pills-container::before {
        width: 90px !important;

    }
}
</style>