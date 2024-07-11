<script setup>
import { ref } from 'vue';

const mainChatVisible = ref(true);
const chatSectionVisible = ref(false);
const chattingVisible = ref(false);
const isChatbotVisible = ref(false);

const resetChat = () => {
    mainChatVisible.value = true;
    chatSectionVisible.value = false;
    chattingVisible.value = false;
    document.querySelectorAll('#chat_section input, #chat_section textarea').forEach(field => {
        field.value = '';
    });
}

const showChatSection = () => {
    mainChatVisible.value = false;
    chatSectionVisible.value = true;
    chattingVisible.value = false;
}

const submitChat = () => {
    chatSectionVisible.value = false;
    chattingVisible.value = true;
}

function toggleChatbot() {
    isChatbotVisible.value = !isChatbotVisible.value;
}
</script>



<template>
    <!-- footer section -->
    <section class="deneb_cta">
        <div class="container">
            <div class="cta_wrapper">
                <div class="row align-items-center">
                    <div class="col-lg-7">
                        <div class="cta_content">
                            <h3>Have Any Project in Mind ?</h3>
                            <p>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh
                                feugiat, auctor enim quis.</p>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="button_box">
                            <RouterLink to="/contact" class="btn btn-footer theme_btn1">Hire
                                Us<span></span><span></span><span></span><span></span></RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer class="deneb_footer bg-footer">
        <div class="widget_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="widget widegt_about">
                            <div class="widget_title d-flex flex-column">
                                <img src="../assets/images/logo-white-150.png" class="img-fluid" alt="">

                            </div>
                            <p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit
                                ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
                            <ul class="footer-social p-0">
                                <li>
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-x-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-telegram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12  d-flex flex-column align-items-md-center">
                        <div class="widget widget_link">
                            <div class="widget_title">
                                <h4>Services</h4>
                            </div>
                            <ul>
                                <li class="px-0"><RouterLink to="/about">About Us</RouterLink></li>
                                <li class="px-0"><RouterLink to="/landlord">Landlord</RouterLink></li>
                                <li class="px-0"><RouterLink to="/registerForm">Register</RouterLink></li>
                                <li class="px-0"><RouterLink to="/contact">Contact</RouterLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="widget widget_contact">
                            <div class="widget_title">
                                <h4>Address</h4>
                            </div>
                            <div class="contact_info ">
                                <div class="single_info d-flex">
                                    <div class="icon">
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div class="info d-flex">
                                        <p><a href="tel:+919246147999">1800-121-3637</a>
                                            <a href="tel:+919246147999">+91 924-614-7999</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="single_info d-flex">
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="info">
                                        <p class="d-flex gap-3">
                                            <a href="mailto:info@deneb.com">info@deneb.com</a> 
                                            <a href="mailto:services@deneb.com">services@deneb.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div class="single_info d-flex">
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="info">
                                        <p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright_area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 d-flex align-items-md-center justify-content-md-center mb-4">
                            <div class="footer-tags d-flex w-100" style="gap: 30px;">
                                <div class="row gy-3 w-100">
                                    <div class="col-12 col-md-6 py-3 py-md-0 d-flex align-items-center justify-content-start gap-4">
                                        <RouterLink to="/waitlist">| Waitlist Removal</RouterLink>
                                        <RouterLink to="/policy">| Refund Policy</RouterLink>
                                    </div>
                                    <div class="col-12 col-md-6 d-flex align-items-center justify-content-start justify-content-md-end gap-5">
                                        <RouterLink to="/privacy">| Privacy Policy</RouterLink>
                                        <RouterLink to="/terms"> | Terms & Conditions</RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="copyright_text">
                                <p>Copyright © 2024 <a href="#" class="site-color"
                                        style="text-decoration: none;">LeaseMatch.NYC</a>. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Chatbot Toggler Button -->
    <button class="chatbot-toggler" @click="toggleChatbot">
        <span class="material-symbols-rounded chat-icon" :class="{ 'rotate-out': isChatbotVisible }">
            Chat
        </span>
        <span class="material-symbols-outlined close-icon" :class="{ 'rotate-in': isChatbotVisible }">
            close
        </span>
    </button>

    <!-- Chatbot Container -->
    <div class="chatbot" :class="{ 'show-chatbot': isChatbotVisible }">
        <!-- Main Chat Section -->
        <div v-if="mainChatVisible" class="main_chat d-flex flex-column justify-content-between p-lg-5 p-3"
            id="main_chat">
            <div class="d-flex justify-content-between">
                <div class="logo_chat">
                    <img src="../assets/images/agents-01-540x460.jpg" class="h-100 w-100">
                </div>
                <!-- <div class="icon_chat">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </div> -->
            </div>
            <div class="site-color">
                <h1 class="font-weight">Welcome to <br> LiveChat!</h1>
            </div>
            <div class="main_chat_body d-flex flex-column justify-content-between shadow p-lg-4 p-2">
                <div class="d-flex justify-content-between">
                    <div class="col-md-3 img_chat me-3">
                        <img src="../assets/images/agents-01-540x460.jpg" class="h-100 w-100">
                    </div>
                    <div class="col-md-9 chat_heading d-flex flex-column">
                        <span>Support</span>
                        <h6>Hi, Welcome to our site , eroire ewkjw jerwiu wrrwu wirurw</h6>
                    </div>
                </div>
                <a href="#" class="chat_btn text-center text-decoration-none mt-3" @click="showChatSection">Chat Now
                    <i class="fa-solid fa-paper-plane ms-3"></i>
                </a>
            </div>
            <div class="main_chat_footer shadow">
                <div class="d-flex justify-content-around p-lg-4 p-2">
                    <a href="#" id="home_icon" class="site-color d-flex flex-column align-items-center"
                        @click="resetChat">
                        <i class="fa fa-home" style="font-size: 18px;"></i>
                        Home
                    </a>
                    <a href="#" id="message_icon" class="site-color d-flex flex-column align-items-center"
                        @click="showChatSection">
                        <i class="fa-solid fa-message" style="font-size: 18px;"></i>
                        Chat
                    </a>
                </div>
            </div>
        </div>

        <!-- Chat Section -->
        <div v-if="chatSectionVisible" class="chat_section d-flex flex-column justify-content-between p-lg-5 p-3"
            id="chat_section">
            <div class="chat_section_body d-flex flex-column justify-content-between shadow p-lg-4 p-2 m-auto">
                <form class="form-row chat_fields">
                    <div class="chat_section_img">
                        <img src="../assets/images/agents-01-540x460.jpg" class="h-100 w-100">
                    </div>
                    <h6 class="site-color text-capitalize mt-2">Welcome to our live chat. Please fill the form below
                        before the chat starts!</h6>
                    <div class="row mb-2 p-2">
                        <label class="chat_fieldlabels p-0">Your Name: *</label>
                        <input type="text">
                    </div>
                    <div class="row mb-2 px-2">
                        <label class="chat_fieldlabels p-0">Email Id: *</label>
                        <input type="text">
                    </div>
                    <div class="row mb-2 px-2">
                        <label class="chat_fieldlabels p-0">Contact Number: *</label>
                        <input type="number">
                    </div>
                    <div class="row mb-2 px-2">
                        <label class="chat_fieldlabels p-0">Message</label>
                        <textarea class="chat_textarea" type="text" placeholder="Write your message"></textarea>
                    </div>
                    <a href="#" class="chat_btn text-center text-decoration-none mt-3" @click="submitChat">Submit</a>
                </form>
            </div>
        </div>

        <!-- Chatting Section -->
        <div v-if="chattingVisible" id="chatting"
            class="chatting d-flex flex-column justify-content-between p-lg-4 p-2 m-auto">
            <div class="chatting_body d-flex flex-column justify-content-between p-lg-4 p-2 m-auto h-100">
                <div class="chat_row shadow p-lg-4 p-2">
                    <div class="chat_section_img1">
                        <img src="../assets/images/agents-01-540x460.jpg" class="h-100 w-100">
                    </div>
                    <div class="d-flex mt-lg-3">
                        <h3 class="font-weight text-center site-color">Thank you for your Message!</h3>
                    </div>
                </div>
                <div class="main_chat_footer shadow">
                    <div class="d-flex justify-content-around p-lg-4 p-2">
                        <a href="#" id="home_icon_footer" class="site-color d-flex flex-column align-items-center"
                            @click="resetChat">
                            <i class="fa fa-home" style="font-size: 18px;"></i>
                            Home
                        </a>
                        <a href="#" id="message_icon_footer" class="site-color d-flex flex-column align-items-center"
                            @click="showChatSection">
                            <i class="fa-solid fa-message" style="font-size: 18px;"></i>
                            Chat
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>



<style scoped>
.modal-dialog {
    position: fixed;
    top: 12%;
    right: 10px;
    margin: 0;
}

.modal-content a {
    color: #04d7e8;
    text-decoration: none;
}
</style>