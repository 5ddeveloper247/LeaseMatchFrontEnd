<template>
   <div id="uiBlocker"
    style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index:9999;">
    <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);">
      <img src="../assets/images/loading-spinner.gif" alt="Loading..." style="height:150px; width:150px;" />
    </div>
  </div>
  <!-- banner -->
  <section class="about-banner my-5">
    <div class="container-fluid gif-banner p-0">
      <div class="banner-overlay"></div>
      <img src="../assets/banners/Banner-2.jpeg.jpg" class="h-100 w-100" loading="lazy" alt="Pricing Banner" style="object-fit:cover;" />
      <div class="banner-text">
        <h1>Pricing</h1>
      </div>
    </div>
  </section>

  <!-- package section -->
  <section class="package_sec-1 bg-package mt-5 pb-5">
    <div class="container">
      <!-- Set Note for first select the plan then sign up  -->
      <div class="text-center mb-4">
        <h2 class="site-color">Choose Your Plan</h2>
        <p>We have a plan for every need. Choose the one that fits you best.</p>
        <p class="text-danger">Note: Please select a plan before signing up.</p>
      </div>
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
              <!-- <a href="http://127.0.0.1:8000/customer/login" class=" btn btn-package theme_btn2">Buy Now</a> -->
               <button
                class="m-2 btn btn-package theme_btn2" 
                to="registerForm" 
                @click.prevent="setPlanId(value.id)"
              >
                Start a Free Trial
            </button>
              <!-- <a v-if="value.free_trial == 1" :href="`http://127.0.0.1:8000/customer/login?type=trial&plan=${value.id}`"
                class=" m-2 btn btn-package theme_btn2">
                Start a Free Trial
              </a> -->
              <!-- <a href="http://127.0.0.1:8000/customer/login" class=" btn btn-package theme_btn2">Buy Now</a>
              <a v-if="value.free_trial == 1" :href="`http://127.0.0.1:8000/customer/login?type=trial&plan=${value.id}`"
                class=" m-2 btn btn-package theme_btn2">
                Start a Free Trial
              </a> -->
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
// delete localStorage.PlanId
if (localStorage.getItem('PlanId')) {
  localStorage.removeItem('PlanId');
}

const setPlanId = async (id) => {
  localStorage.setItem('planId', id); // Corrected key name: PlanId -> planId
  const registrationData = localStorage.getItem('registrationData'); // Fixed typo
  
  if (registrationData) {
    try {
      $('#uiBlocker').show();

      const response = await axiosInstance.post('/registration/store',  JSON.parse(registrationData));
      
      $('#uiBlocker').hide();
      if (response.data.success) {
        setTimeout(() => {
          const planId = localStorage.getItem('planId') || 0;
          localStorage.removeItem('planId');
          localStorage.removeItem('registrationData');
          // alert(`${response.data.redirect_url}&planId=${planId}`);
          window.location.href = `${response.data.redirect_url}&planId=${planId}`;
          
        }, 2000);
      } else {
        toastr.error('API error: '  + response.data.error);
      }
    } catch (error) {
      $('#uiBlocker').hide();
      if (error.response && error.response.status === 422) {
        // Handle validation errors
        Object.entries(error.response.data.errors).forEach(([key, value]) => {
          toastr.error(value[0]);
        });
      } else {
        toastr.error('An unexpected error occurred. Please try again.');
      }
    }
  } 
  else {
   
    window.location.href = "/registerForm";
  }
};


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
    background-color: rgb(0 0 0 / 59%);
    opacity: 1;
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