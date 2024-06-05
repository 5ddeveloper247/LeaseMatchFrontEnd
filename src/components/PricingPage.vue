




<template>
    <!-- banner -->
    <section class="about-banner my-5">

        <div class="container-fluid gif-banner p-0">
            <div class="banner-overlay"></div>
            <img src="../assets/images/banner.png" class="h-100 w-100">

            <div class="position-absolute text-white" style="top:40%; left: 50%; transform: translateX(-50%);">
                <h1>PRICING</h1>
            </div>

        </div>
    </section>


    <!-- package section -->
    <section class="package_sec-1 bg-package my-5 pb-5">
        <div class="container">
            <div class="row align-items-center justify-content-center fadeInLeft">
                <div class="col-md-3 col-sm-5 col-12" v-for="(value, index) in pricing">
                    <div class="card pricing-card">
                        <div class="card-header pricing-card-header">
                            <h5 class="site-color"> {{ value.title }}</h5>
                            <div class="d-flex align-items-center">
                                <h2 class="font-weight">{{ formatPrice(value.monthly_price) }}</h2>
                                <p>/Month</p>
                            </div>
                        </div>
                        <div class="card-body pricing-card-body">
                            <p class="">For Small Projects Up to 10 Users</p>
                            <ul class="list-unstyled card-body-content pt-4">
                                <li>✓ Number of matches as per the Tier {{ value.title }} - {{ value.number_of_matches }} properties.</li>
                                <li :class="{ inactive_service: value.directly_contact_flag == 0 }">✓ Tenant allowed to directly contact with rental/landlord.</li>
                                <li :class="{ inactive_service: value.process_application_flag == 0 }">✓ Ask lease match to process application on their behalf.</li>
                                <li :class="{ inactive_service: value.necessary_doc_flag == 0 }">✓ They will be informed as to exactly what documents need to be uploaded to process the as an applicant.</li>
                                
                            </ul>
                        </div>
                        <div class="card-footer pricing-card-footer text-center">
                            <a href="javascript:;" class="btn btn-package theme_btn2">Get
                                Started</a>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-md-3 col-sm-6 col-12">
                    <div class="card-main ">
                        <div class="card pricing-card active">
                            <div class="card-header pricing-card-header">
                                <h5 class="standard-color">Standard Plan</h5>
                                <div class="d-flex align-items-center">
                                    <h2 class="font-weight">$39.99</h2>
                                    <p>/Month</p>
                                </div>
                            </div>
                            <div class="card-body pricing-card-body">
                                <p class=" ">For Small Projects Up to 10 Users</p>
                                <ul class="list-unstyled card-body-content pt-4">
                                    <li>✓ Think smarter with AI.</li>
                                    <li>✓ The future is now with.</li>
                                    <li>✓ Making life easier.</li>
                                    <li>✓ Innovating the world with.</li>
                                    <li>✓ The power to transform.</li>
                                    <li>✓ Experience the power.</li>
                                </ul>
                            </div>
                            <div class="card-footer pricing-card-footer text-center">
                                <a href="#" class="btn btn-package theme_btn1">Get
                                    Started<span></span><span></span><span></span><span></span></a>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- <div class="col-md-3 col-sm-6 col-12">
                    <div class="card pricing-card">
                        <div class="card-header pricing-card-header ">
                            <h5 class="site-color">Premium Plan</h5>
                            <div class="d-flex align-items-center">
                                <h2 class="font-weight">$39.99</h2>
                                <span>/Month</span>
                            </div>
                        </div>
                        <div class="card-body pricing-card-body ">
                            <p class=" ">For Small Projects Up to 10 Users</p>
                            <ul class="list-unstyled card-body-content pt-4">
                                <li>✓ Think smarter with AI.</li>
                                <li>✓ The future is now with.</li>
                                <li>✓ Making life easier.</li>
                                <li>✓ Innovating the world with.</li>
                                <li>✓ The power to transform.</li>
                                <li>✓ Experience the power.</li>
                            </ul>
                        </div>
                        <div class="card-footer pricing-card-footer text-center">
                            <a href="#" class="btn btn-package theme_btn2">Get
                                Started<span></span><span></span><span></span><span></span></a>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import axiosInstance from '@/plugins/axios';

import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const pricing = ref([]);
const getAllPageData = async () => {
    
try {

        const response = await axiosInstance.get('/pricing/getAllPricingList');
        
        if (response.data.success) {
            pricing.value = response.data.data.pricings;
        } else {
            toastr.error('API error:', response.data.error);
        }
    } catch (error) {
       
        if (error.response && error.response.status === 422) {
            // Handle validation errors
            toastr.error('An unexpected error occurred. Please try again.');
        } else {
            // Handle other errors
            toastr.error('An unexpected error occurred. Please try again.');
        }
    }
}
const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    }).format(price);
}
getAllPageData();
</script>

<style scoped>
.inactive_service{
    color: gray;
    pointer-events: none;
    opacity: 0.5;
}
</style>