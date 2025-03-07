<template>
  <!-- banner -->
  <section class="about-banner my-5">
    <div class="container-fluid gif-banner p-0">
      <div class="banner-overlay"></div>
      <img src="../assets/banners/Banner-2.jpeg.jpg" class="h-100 w-100" loading="lazy" alt="Pricing Banner" />
      <div class="banner-text">
        <h1>Pricing</h1>
      </div>
    </div>
  </section>

  <!-- package section -->
  <section class="package_sec-1 bg-package mt-5 pb-5">
    <div class="container">
      <div class="row gy-5 align-items-center justify-content-center" v-show="pricing.length" transition name="fade">
        <div class="col-12 col-sm-6 col-lg-4" v-for="(value, index) in pricing" :key="index">
          <div class="card pricing-card">
            <div class="card-header pricing-card-header">
              <h5 class="site-color">{{ value.title }}</h5>
              <div class="d-flex align-items-center">
                <h2 class="font-weight">{{ formatPrice(value.monthly_price) }}</h2>
                <p>/Month</p>
              </div>
            </div>
            <div class="card-body pricing-card-body">
              <p>For Small Projects Up to 10 Users</p>
              <ul class="list-unstyled card-body-content pt-4">
                <li>✓ Number of matches as per Tier {{ value.title }} - {{ value.number_of_matches }} properties.</li>
                <li :class="{ inactive_service: !value.directly_contact_flag }">✓ Direct contact with rental/landlord.
                </li>
                <li :class="{ inactive_service: !value.process_application_flag }">✓ Lease match processes application.
                </li>
                <li :class="{ inactive_service: !value.necessary_doc_flag }">✓ Informed of necessary documents for
                  application.</li>
              </ul>
            </div>
            <div class="card-footer pricing-card-footer text-center" v-if="index == 0">
              <!-- <a href="http://lmb.gregorygadson.io/" class="btn btn-package theme_btn2">Comming Soon</a> -->
              <a href="http://127.0.0.1:8000/customer/login" class=" btn btn-package theme_btn2">Buy Now</a>
              <a v-if="value.free_trial == 1" :href="`http://127.0.0.1:8000/customer/login?type=trial&plan=${value.id}`"
                class=" m-2 btn btn-package theme_btn2">
                Start a Free Trial
              </a>

            </div>
            <div class="card-footer pricing-card-footer text-center" v-else="index !==0">
              <a href="#" class="btn btn-package theme_btn2">Comming Soon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { axiosInstance } from '@/plugins/axios';
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
    const errorMessage = error.response?.status === 422
      ? 'An unexpected error occurred. Please try again.'
      : 'An unexpected error occurred. Please try again.';
    toastr.error(errorMessage);
  }
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

onBeforeMount(() => {
  getAllPageData();
});
</script>

<style scoped>
.about-banner {
  position: relative;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.banner-text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}

.inactive_service {
  color: gray;
  opacity: 0.5;
}

.btn-package:hover {
  color: #ffffffa0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>