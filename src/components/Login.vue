<template>
    <!-- login -->
    <section class="login_sec bg-light">
        <div class="container-fluid" style="background-color: #fff">
            <div class="container py-4">
                <div class="row gy-4 justify-content-around form-con py-2">
                    <div class="col-md-6 col-lg-5">
                        <div class="position-relative site-login">
                            <div class="custom-shape-divider-top-1716874915">
                                <span class="lease-match-text font-weight">LeaseMatch</span>
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="190 10 500 220"
                                    preserveAspectRatio="none">
                                    <path
                                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                        class="shape-fill"></path>
                                </svg>
                            </div>
                            <div class="circle"></div>
                            <div class="circle1"></div>
                            <div class="circle2"></div>
                            <div class="circle3"></div>
                            <h5 class="position-absolute login-heading-pic">Hi, Welcome Back</h5>
                            <div class="position-relative" style="overflow: hidden; height: 79%; bottom: -21%;">
                                <div class="login-image">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide"><img src="../assets/images/login.jpg"
                                                    class="h-100 w-100"></div>
                                            <div class="swiper-slide"><img src="../assets/images/about-3.webp"
                                                    class="h-100 w-100"></div>
                                            <div class="swiper-slide"><img src="../assets/images/banner.png"
                                                    class="h-100 w-100"></div>
                                            <div class="swiper-slide"><img src="../assets/images/login.jpg"
                                                    class="h-100 w-100"></div>
                                            <div class="swiper-slide"><img src="../assets/images/about-3.webp"
                                                    class="h-100 w-100"></div>
                                            <div class="swiper-slide"><img src="../assets/images/banner.png"
                                                    class="h-100 w-100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="login-images">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide"><img src="../assets/images/login.jpg"
                                                    class="h-100 w-100"></div>
                                            <div class="swiper-slide"><img src="../assets/images/about-3.webp"
                                                    class="h-100 w-100"></div>
                                            <div class="swiper-slide"><img src="../assets/images/banner.png"
                                                    class="h-100 w-100"></div>
                                            <div class="swiper-slide"><img src="../assets/images/login.jpg"
                                                    class="h-100 w-100"></div>
                                            <div class="swiper-slide"><img src="../assets/images/about-3.webp"
                                                    class="h-100 w-100"></div>
                                            <div class="swiper-slide"><img src="../assets/images/banner.png"
                                                    class="h-100 w-100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="border-column col-lg d-none d-lg-block"></div>
                    <!-- form -->
                    <div class="col-md-6 form col-lg-5 d-flex flex-column justify-content-center">
                        <h3>Sign In</h3>
                        <form class="mt-4">
                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="email" id="form1Example13" class="form-control form-control-md"
                                    placeholder="Email address" />
                            </div>
                            <!-- Password input -->
                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="password" id="form1Example23" class="form-control form-control-md"
                                    placeholder="Password" />
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <!-- Checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="form1Example3"
                                        checked />
                                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                                </div>
                                <button type="button" @click="goToOtp" class="forget-psw">Forgot
                                    password?</button>
                            </div>
                            <a href="http://127.0.0.1:8000/admin/dashboard" type="submit" data-mdb-button-init
                                data-mdb-ripple-init
                                class="btn btn-lg d-flex w-100 align-items-center justify-content-center login-btn">
                                Sign in
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToOtp = () => {
    router.push({ path: '/OtpSection' });
}

onMounted(() => {
    new Swiper('.swiper-container', {
        slidesOffsetBefore: 250,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        direction: 'vertical',
    });
});
</script>




<style scoped>
.form-con {
    display: flex;
}

.swiper-wrapper {
    display: flex;
    flex-direction: column;
    height: 200px;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.border-column {
    border-left: 1.5px solid #0e0d0d66;
    height: 45vh;
    margin: 8rem 0 0 7rem;
}

.forget-psw {
    background-color: transparent;
    border: none;
}
</style>