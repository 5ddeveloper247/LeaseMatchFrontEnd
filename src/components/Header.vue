<script setup>
</script>

<template>
    <!-- Header Ribbon -->
    <div class="container-fluid header-container fixed-top">
        <div class="d-flex bg-header text-center pt-2 pb-3 px-md-5 px-2 justify-content-between align-items-center">
            <ul class="d-flex justify-content-between align-items-center m-0 p-0" style="gap: 20px;">
                <li class="text-white list-style">
                    <i class="fa fa-phone" aria-hidden="true" style="font-size: 10px;"></i><span class="ms-2">+92
                        0933002010</span>
                </li>
                <li class="text-white list-style"><i class="fa fa-envelope" aria-hidden="true"
                        style="font-size: 10px;"></i><span class="ms-2">leashMatch@gmail.com</span></li>
            </ul>
            <ul class="d-flex m-0">
                <div class="d-flex justify-content-end " style="gap: 10px;">
                    <li class="list-style sc-icon">
                        <a href="#" class="social-media"><i class="fa-brands fa-facebook"
                                style="font-size: 12px;"></i></a>
                    </li>
                    <li class="list-style">
                        <a href="#" class="social-media"><i class="fa-brands fa-twitter"
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
        <a class="navbar-brand mx-3 p-0" href="index.html">
            <img src="../assets/images/logo-dark-150.png" alt="" width="150" height="50">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
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
                    <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
                </li>
                <li class="nav-item ">
                    <RouterLink to="/login" id="myBtn" class="nav-link"><i class="fa-regular fa-circle-user"
                            style="font-size: 22px;"></i></RouterLink>
                </li>
            </ul>

        </div>
        <!-- </div> -->
    </nav>
</template>