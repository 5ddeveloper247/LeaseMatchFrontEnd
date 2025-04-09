<template>
    <h1 class="site-color text-center mb-3">Customer Satisfaction</h1>
    <swiper
      :modules="[EffectCoverflow, Autoplay]"
      :effect="'coverflow'"
      :loop="true"
      :slides-per-view="3"
      :centered-slides="true"
      :space-between="50"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      :coverflow-effect="{
        rotate: 0,
        stretch: 100,
        depth: 300,
        modifier: 1.7,
        slideShadows: false
      }"
      class="mySwiper mb-3"
    >
      <swiper-slide 
        v-for="(testimonial, index) in testimonials" 
        :key="index" 
        class="flip-card"
      >
        <div class="flip-card-inner">
          <!-- Front Side -->
          <div class="flip-card-front text-center p-4">
            <div class="card-body">
              <h5 class="card-title">{{ testimonial?.title }}</h5>
              <div class="ratings mb-3">
                <i
                  v-for="star in 5"
                  :key="star"
                  class="fa fa-star"
                  :style="{ color: star <= testimonial.rating ? '#FFD700' : '#D3D3D3' }"
                ></i>
              </div>
              <div class="text-justify">
                {{ testimonial?.description }}
              </div>
              <br>
              <div class="source media d-flex align-items-center">
                <img 
                  class="source-profile" 
                  :src="testimonial?.path" 
                  alt="User Image"
                />
                <div class="source-info media-body ps-3">
                  <div>{{ testimonial?.name }}</div>
                  <div>{{ testimonial?.address }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
</template>
  
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import { defineProps } from 'vue'

// Props for testimonials
const props = defineProps({
  testimonials: {
    type: Array,
    required: true
  }
})
</script>
  
<style scoped>
/* Swiper Container */
.mySwiper {
  width: 100%;
  height: 350px;
  padding: 20px;
}

/* Flip Card Effect */
.flip-card {
  perspective: 1000px;
}

/* Inner Card */
.flip-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-shadow: 0 4px 10px rgba(200, 200, 200, 0.3); /* Light gray shadow */
  background: #ffffff;
}

/* Front Side */
.flip-card-front {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(200, 200, 200, 0.3); /* Light shadow */
  padding: 20px;
}

/* Swiper Slide */
.swiper-slide {
  background: #ffffff !important;
  box-shadow: 0px 4px 8px rgba(200, 200, 200, 0.3); /* Softer light shadow */
  transition: all 0.3s ease-in-out;
}

/* Image */
.source-profile {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(200, 200, 200, 0.3); /* Light profile shadow */
}

/* Star Ratings */
.ratings i {
  font-size: 16px;
}
</style>
