<script setup>

</script>



<template>
    <!-- section-1 -->
    <section class="contact_sec-1 position-relative py-5" style="background-color: #04d7e8;">
        <div class="custom-shape-divider-top-1717160352">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    class="shape-fill"></path>
            </svg>
        </div>
        <div class="container-fluid bg-contact pt-5" style="position: relative;">
            <div class="container pt-5">
                <div class="row pt-5">

                    <div class="col-md-7">
                        <h1 class="contact-title font-weight">Send us a message</h1>
                        <p class="site-color">If you have any questions about membership or usage, please fill out the
                            form and our team
                            will get back to you within 24 hours.</p>
                        <form id="contact_form" name="contact_form" method="post">
                            <div class="mb-5 row">
                                <div class="col contact-field">
                                    <!-- <label>Your Name</label> -->
                                    <input type="text" required maxlength="50" class="form-control" id="first_name"
                                        name="first_name" placeholder="Your Name">
                                </div>
                                <div class="col contact-field">
                                    <!-- <label for="email_addr">Email address</label> -->
                                    <input type="email" required maxlength="50" class="form-control" id="email_addr"
                                        name="email" placeholder="Email Address">
                                </div>
                            </div>
                            <div class="mb-5 row">
                                <div class="col contact-field">
                                    <!-- <label for="email_addr">Enter Subject</label> -->
                                    <input type="text" required maxlength="50" class="form-control" id="subject"
                                        name="subject" placeholder="Enter Subject">
                                </div>
                                <div class="col contact-field">
                                    <!-- <label for="phone_input">Phone</label> -->
                                    <input type="tel" required maxlength="50" class="form-control" id="phone_input"
                                        name="Phone" placeholder="Phone">
                                </div>
                            </div>
                            <div class="mb-5 contact-field">
                                <!-- <label for="message">Message</label> -->
                                <textarea class="form-control" id="message" name="message" rows="5"
                                    placeholder="Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-contact btn-lg theme_btn2 mb-2">Send
                                Message<span></span><span></span><span></span><span></span><span></span></button>
                        </form>
                    </div>
                    <div class="col-md-5 px-md-5">
                        <div class="contact-address">
                            <div class="contact_address-title mb-3">
                                <h1 class="font-weight">Address</h1>
                            </div>
                            <div class="contact_info">
                                <div class="contact_info d-flex">
                                    <div class="icon">
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div class="contact_info-detail d-flex">
                                        <p><a href="tel:+919246147999">1800-121-3637</a></p>
                                        <p><a href="tel:+919246147999">+91 924-614-7999</a></p>
                                    </div>
                                </div>
                                <div class="contact_info d-flex">
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="contact_info-detail">
                                        <p><a href="mailto:info@deneb.com">info@deneb.com</a></p>

                                    </div>
                                </div>
                                <div class="contact_info d-flex">
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="contact_info-detail">
                                        <p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </section>
    <!-- faqs -->
    <section class="contact_sec-2 my-5 bg-faqs py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="faqs-image position-relative pb-5 pb-md-0">
                        <img src="../assets/images/faq-img-01.png" class="h-100 w-100">
                        <div class="comment-icon comment-top-left">
                            <i class="fas fa-comment"></i>
                        </div>
                        <div class="comment-icon comment-top-right">
                            <i class="fas fa-comment"></i>
                        </div>
                        <div class="comment-icon comment-bottom-left">
                            <i class="fas fa-comment"></i>
                        </div>
                        <div class="comment-icon comment-bottom-right">
                            <i class="fas fa-comment"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div>
                        <label>Frequently Asked Question</label>
                        <h1 class="font-weight">Get The Answers You <span class="" style="color: #04d7e8;">Need</span>
                        </h1>
                        <p class="site-color"> A pellentesque sit amet porttitor eget. Fringilla phasellus faucibus
                            scelerisque eleifend.
                            Sit amet volutpat consequat mauris. Mattis pellentesque id nibh.</p>
                    </div>
                    <div class="faq-container">
                        <div class="faq-item active">
                            <div class="faq-question font-weight">What is your return policy?<span class="icon"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="14" height="14">
                                        <path
                                            d="M97.7,11.18a7.81,7.81,0,0,0-2.37-5.81A8.12,8.12,0,0,0,89.52,3l-79.34.25a8.18,8.18,0,1,0,0,16.35l59.63-.24L7,82.18A8.24,8.24,0,0,0,7,93.79a8.14,8.14,0,0,0,11.53,0L81.34,31l-.25,59.55a8.18,8.18,0,0,0,16.36,0Z">
                                        </path>
                                    </svg></span></div>
                            <div class="faq-answer mt-3">Our return policy is... Fringilla phasellus faucibus
                                scelerisque
                                eleifend.
                                Sit amet volutpat consequat mauris. Mattis pellentesque id nibh.</div>
                        </div>
                        <div class="faq-item">
                            <div class="faq-question font-weight">How do I track my order?<span class="icon"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="14" height="14">
                                        <>
                                            <path
                                                d="M97.7,11.18a7.81,7.81,0,0,0-2.37-5.81A8.12,8.12,0,0,0,89.52,3l-79.34.25a8.18,8.18,0,1,0,0,16.35l59.63-.24L7,82.18A8.24,8.24,0,0,0,7,93.79a8.14,8.14,0,0,0,11.53,0L81.34,31l-.25,59.55a8.18,8.18,0,0,0,16.36,0Z">
                                            </path>
                                    </svg></span></div>
                            <div class="faq-answer mt-3">You can track your order by.. Fringilla phasellus faucibus
                                scelerisque eleifend.
                                Sit amet volutpat consequat mauris. Mattis pellentesque id nibh..</div>
                        </div>
                        <div class="faq-item">
                            <div class="faq-question font-weight">Do you ship internationally?<span class="icon"><svg
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="14" height="14">
                                        <>
                                            <path
                                                d="M97.7,11.18a7.81,7.81,0,0,0-2.37-5.81A8.12,8.12,0,0,0,89.52,3l-79.34.25a8.18,8.18,0,1,0,0,16.35l59.63-.24L7,82.18A8.24,8.24,0,0,0,7,93.79a8.14,8.14,0,0,0,11.53,0L81.34,31l-.25,59.55a8.18,8.18,0,0,0,16.36,0Z">
                                            </path>
                                    </svg></span></div>
                            <div class="faq-answer mt-3">Yes, we ship internationally. Fringilla phasellus faucibus
                                scelerisque eleifend.
                                Sit amet volutpat consequat mauris. Mattis pellentesque id nibh..</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- map -->
    <section class="mb-5">
        <div class="container-fluid">
            <div class="map m-1">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5753.884181787861!2d-81.95946927069843!3d28.0388028608652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd38ca4722ecc9%3A0x10d88b4491e12478!2s501%20Florida%20Ave%20S%2C%20Lakeland%2C%20FL%2033801%2C%20USA!5e0!3m2!1sen!2s!4v1705573853815!5m2!1sen!2s"
                    width="100%" style="border: 0; height:83vh" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
</template>


<style scoped>
.custom-shape-divider-top-1717160352 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1717160352 svg {
    position: relative;
    display: block;
    width: calc(137% + 1.3px);
    height: 335px;
}

.custom-shape-divider-top-1717160352 .shape-fill {
    fill: #FFFFFF;
}

.contact_sec-1 {
    margin-top: 7rem;
}
</style>