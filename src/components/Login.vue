<script setup>
var swiper = new Swiper('.swiper-container', {
    slidesOffsetBefore: 250,
    loop: true,
    infinite: true,
    slidePerView: 3,
    spaceBetween: 10,
    autoplay: true,
    direction: 'vertical',
    loopAddBlankSlides: false,
});
</script>




<template>
    <!-- login -->
    <section class="login_sec bg-light">
        <div class="container-fluid" style="background: linear-gradient(45deg,transparent, var(--tex-color));">
            <div class="container py-4">
                <div class="row justify-content-around py-2">
                    <div class="col-sm-6 col-lg-4">
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
                            <div class="position-relative" style="overflow: hidden;overflow: hidden;
                           height: 79%;
                           bottom: -21%;">
                                <div class="login-image">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide"><img src="../assets/images/login.jpg"
                                                    class="h-100 w-100">
                                            </div>
                                            <div class="swiper-slide"> <img src="../assets/images/about-3.webp"
                                                    class="h-100 w-100">
                                            </div>
                                            <div class="swiper-slide"><img src="../assets/images/banner.png"
                                                    class="h-100 w-100">
                                            </div>
                                            <div class="swiper-slide"><img src="../assets/images/login.jpg"
                                                    class="h-100 w-100">
                                            </div>
                                            <div class="swiper-slide"> <img src="../assets/images/about-3.webp"
                                                    class="h-100 w-100">
                                            </div>
                                            <div class="swiper-slide"><img src="../assets/images/banner.png"
                                                    class="h-100 w-100">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="login-images">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide"><img src="../assets/images/login.jpg"
                                                    class="h-100 w-100">
                                            </div>
                                            <div class="swiper-slide"> <img src="../assets/images/about-3.webp"
                                                    class="h-100 w-100">
                                            </div>
                                            <div class="swiper-slide"><img src="../assets/images/banner.png"
                                                    class="h-100 w-100">
                                            </div>
                                            <div class="swiper-slide"><img src="../assets/images/login.jpg"
                                                    class="h-100 w-100">
                                            </div>
                                            <div class="swiper-slide"> <img src="../assets/images/about-3.webp"
                                                    class="h-100 w-100">
                                            </div>
                                            <div class="swiper-slide"><img src="../assets/images/banner.png"
                                                    class="h-100 w-100">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- form -->
                    <div class="col-sm-6 col-lg-4 d-flex flex-column justify-content-center">
                        <h3>Sign In</h3>
                        <form class="mt-4">

                            <!-- <div class="login_social-links d-flex justify-content-between" style="gap: 10px;">
                                <a data-mdb-ripple-init class="btn btn-lg btn-block" style="color: 	#1877F2;" href="#!"
                                    role="button">
                                    <i class="fab fa-facebook-f me-2"></i>
                                </a>
                                <a data-mdb-ripple-init class="btn  btn-lg btn-block" style="color: #F56040" href="#!"
                                    role="button">
                                    <i class="fab fa-instagram me-2"></i>
                                </a>
                                <a data-mdb-ripple-init class="btn  btn-lg btn-block" style="color: #FF0000" href="#!"
                                    role="button">
                                    <i class="fab fa-youtube me-2"></i>
                                </a>
                                <a data-mdb-ripple-init class="btn btn-lg btn-block" style="color:	#1DA1F2" href="#!"
                                    role="button">
                                    <i class="fab fa-twitter me-2"></i></a>
                                <a data-mdb-ripple-init class="btn btn-lg btn-block" style="color: #0088cc" href="#!"
                                    role="button">
                                    <i class="fab fa-telegram me-2"></i></a>
                            </div> -->

                            <!-- <div class="divider d-flex align-items-center my-4">
                                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div> -->
                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="email" id="form1Example13" class="form-control form-control-md"
                                    placeholder="Email address">

                            </div>

                            <!-- Password input -->
                            <div data-mdb-input-init class="form-outline mb-4">
                                <input type="password" id="form1Example23" class="form-control form-control-md"
                                    placeholder="Password">

                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <!-- Checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="form1Example3"
                                        checked />
                                    <label class="form-check-label" for="form1Example3"> Remember me </label>
                                </div>
                                <a href="#!" class="forget-psw">Forgot password?</a>
                            </div>
                            <button type="submit" data-mdb-button-init data-mdb-ripple-init
                                class="btn btn-lg d-flex w-100 align-items-center justify-content-center login-btn">Sign
                                in</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
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
</style>