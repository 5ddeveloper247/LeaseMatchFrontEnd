<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navbarToggler = ref(null);
const navbarCollapse = ref(null);

const handleClickOutside = (event) => {
    if (navbarToggler.value && navbarCollapse.value) {
        const isClickInside = navbarToggler.value.contains(event.target) || navbarCollapse.value.contains(event.target);
        const isNavbarExpanded = navbarToggler.value.getAttribute('aria-expanded') === 'true';

        if (!isClickInside && isNavbarExpanded) {
            navbarToggler.value.click()
        }
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
})

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
})
</script>

<template>
    <!-- Header Ribbon -->
    <div class="container-fluid header-container fixed-top">
        <div class="d-flex bg-header text-center pt-2 pb-3 px-md-5 px-2 justify-content-between align-items-center">
            <ul class="d-flex justify-content-between align-items-center m-0 p-0" style="gap: 20px;">
                <li class="text-white list-style">
                    <i class="fa fa-phone" aria-hidden="true" style="font-size: 10px;"></i><span class="ms-2">
                        (347) 754-5807</span>
                </li>
                <li class="text-white list-style"><i class="fa fa-envelope" aria-hidden="true"
                        style="font-size: 10px;"></i><span class="ms-2">LeaseMatch.nyc@gmail.com</span></li>
            </ul>
            <ul class="d-flex m-0">
                <div class="d-flex justify-content-end " style="gap: 10px;">
                    <li class="list-style sc-icon">
                        <a href="#" class="social-media"><i class="fa-brands fa-facebook"
                                style="font-size: 12px;"></i></a>
                    </li>
                    <li class="list-style">
                        <a href="#" class="social-media"><i class="fa-brands fa-x-twitter"
                                style="font-size: 12px;"></i></a>
                    </li>
                    <li class="list-style">
                        <a href="#" class="social-media"><i class="fa-brands fa-instagram"
                                style="font-size: 12px;"></i></a>
                    </li>
                    <li class="list-style">
                        <a href="#" class="social-media"><i class="fa-brands fa-youtube"
                                style="font-size: 12px;"></i></a>
                    </li>
                    <li class="list-style">
                        <a href="#" class="social-media"><i class="fa-brands fa-telegram"
                                style="font-size: 12px;"></i></a>
                    </li>
                </div>
            </ul>
        </div>
    </div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top container bg-header">
        <!-- <div class="container bg-light"> -->
        <RouterLink class="navbar-brand mx-3 p-0" to="/">
            <img src="../assets/images/logo-dark-150.png" alt="Logo" style="max-width: 150px; height: auto;" />
        </RouterLink>

        <button ref="navbarToggler" class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div ref="navbarCollapse" class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav nav-txt me-md-5">
                <li class="nav-item">
                    <RouterLink class="nav-link" aria-current="page" to="/">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/about">About us</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/pricing">Pricing</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/landlord">Landlord Portal</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/inquiry">Commercial Inquiry</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
                </li>
                <li class="nav-item ">
                    <a href="https://www.leasematch.nyc/customer" id="myBtn" class="nav-link"><i
                            class="fa-regular fa-circle-user" style="font-size: 22px;"></i></a>
                </li>
            </ul>   

        </div>
        <!-- </div> -->
    </nav>
</template>