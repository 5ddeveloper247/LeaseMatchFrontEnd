<template>
    <div id="uiBlocker" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index:9999;">
        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);">
            <img src="../assets/images/loading-spinner.gif" alt="Loading..." style="height:150px; width:150px;"/>
        </div>
    </div>
    <div class="container p-0 img-con text-center">
        <!-- <img class="w-100" src="../assets/images/form-wizard.jpg" alt=""> -->
        <div class="img-text px-1 px-md-5">
            <div class="img-heading px-1 px-md-5 py-3">
                <h2 class="text-white">
                    JOIN OUR EXCLUSIVE LEASE MATCH NETWORK
                </h2>
                <p class="">
                    Welcome to Lease Match! Our quick intake form is your gateway to accessing a curated list of vetted
                    renters in New York City. By filling out this form, you’ll be added to our comprehensive database of
                    distinguished properties. Rest assured, a member of our team will review your submission and reach
                    out
                    to you within 24 hours. We’re excited to partner with you in finding the perfect match for your
                    rental
                    property.
                </p>
            </div>
        </div>
    </div>
    <section class="new-form-section container p-3 ps-4 ps-md-5 p-md-5">
        <div class="row">
            <ul class="nav nav-tabs mt-4 col-5 d-flex flex-column gap-3" id="myTab" role="tablist">
                <li class="nav-item" role="presentation" v-for="(tab, index) in tabs" :key="index">
                    <button class="nav-link" :class="{ active: activeTab === tab.id }" @click="selectTab(tab.id, index)">
                        {{ tab.name }}
                        <span class="highlight" v-if="activeTab === tab.id"></span>
                    </button>
                </li>
            </ul>

            <div class="tab-content col-7" id="myTabContent">
                <div class="tab-pane fade" :class="{ 'show active': activeTab === tab.id }" v-for="(tab, index) in tabs"
                    :key="tab.id" :id="tab.id">
                    <!-- fieldsets -->
                    <fieldset v-if="index === 0">
                        <div class="form-card">
                            <div class="row">
                                <div class="group col-md-6">
                                    <input type="text" v-model="formData.full_name" name="full_name" 
                                        placeholder="UserName" maxlength="100" />
                                </div>
                                <div class="group col-md-6">
                                    <input type="email" v-model="formData.email" name="email" placeholder="Email Id" 
                                        maxlength="100" />
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="group col-md-6">
                                    <input type="number" v-model="formData.phone_number" name="phone_number"
                                        placeholder="Enter your phone number" maxlength="18" />
                                </div>
                                <div class="group col-md-6">
                                    <input type="text" v-model="formData.company_name" name="company_name" 
                                        placeholder="Enter your company name" maxlength="100" />
                                </div>
                            </div>
                        </div>
                        <button @click="nextTab" v-if="index < tabs.length - 1"
                            class="next action-button px-5 py-1 mt-5 mx-3">Next</button>
                    </fieldset>

                    <fieldset v-if="index === 1">
                        <div class="form-card">
                            <label class="fieldlabels p-0">Street Address*</label>
                            <input type="text" v-model="formData.street_address" name="street_address" maxlength="255"/>
                            <div class="row ">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Apartment/Unit Number*</label>
                                    <input type="text" v-model="formData.appartment_number" name="appartment_number" maxlength="10"/>
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Borough/Neighborhood*</label>
                                    <input type="text" v-model="formData.neighbourhood" name="neighbourhood" maxlength="100" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Property Type*</label>
                                    <select class="form-select pt-0" v-model="formData.property_type"
                                        name="property_type" aria-label="Default select example">
                                        <option value="">Please choose an option</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Condo">Condo</option>
                                        <option value="House">House</option>
                                        <option value="Studio">Studio</option>
                                    </select>
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Number of Units (if multi-unit property)*</label>
                                    <input type="number" v-model="formData.number_of_units" name="number_of_units" maxlength="3" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Year Built*<br></label>
                                    <br><br>
                                    <input type="number" v-model="formData.year_built" name="year_built" maxlength="4"/>
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Year of Last Major Renovation <br> (if
                                        applicable)*</label>
                                    <input type="number" v-model="formData.major_renovation" name="major_renovation" maxlength="4" />
                                </div>
                            </div>
                        </div>
                        <button type="button" @click="previousTab"
                            class="previous action-button-previous px-5 py-1 mt-5 mx-3">Previous</button>
                        <button type="button" @click="nextTab"
                            class="next action-button px-5 py-1 mt-5 mx-3">Next</button>
                    </fieldset>

                    <fieldset v-if="index === 2">
                        <div class="form-card">
                            <!-- Tab specific content here -->
                            <!-- 1 -->
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Size (square footage)*</label>
                                    <input type="number" v-model="formData.size_square_feet" name="size_square_feet" maxlength="6">
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Number of Bedrooms*</label>
                                    <input type="number" v-model="formData.number_of_bedrooms"
                                        name="number_of_bedrooms" maxlength="3">
                                </div>
                            </div>

                            <!-- 2 -->
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels pt-2">Number of Bathrooms*</label>
                                    <input type="number" v-model="formData.number_of_bathrooms"
                                        name="number_of_bathrooms" maxlength="3"/>
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Type of Rental*</label>
                                    <select class="form-select" v-model="formData.rental_type" name="rental_type"
                                        aria-label="Default select example">
                                        <option value="">Please choose an option</option>
                                        <option value="Furnished">Furnished</option>
                                        <option value="Unfurnished">Unfurnished</option>
                                    </select>
                                </div>
                            </div>
                            <!-- 3 -->
                            <div class="row">
                                <div class="group col-md-4">
                                    <label class="fieldlabels p-0">Monthly Rent (USD)*</label>
                                    <br><br>
                                    <input type="number" v-model="formData.monthly_rent" name="monthly_rent" maxlength="6"/>
                                </div>
                                <div class="group col-md-4">
                                    <label class="fieldlabels p-0">Security Deposit Requirement (USD)*</label>
                                    <input type="number" v-model="formData.security_deposit" name="security_deposit" maxlength="6"/>
                                </div>

                                <div class="group col-md-4">
                                    <label class="fieldlabels p-0">Minimum Lease Duration (Month)*</label>
                                    <input type="number" v-model="formData.lease_duration" name="lease_duration" maxlength="3"/>
                                </div>
                            </div>
                            <!-- 4 -->
                            <div class="row">
                                <div class="group col-md-12">
                                    <label class="fieldlabels p-0">Renewal Options*</label>
                                    <select class="form-select" v-model="formData.renwal_option" name="renwal_option"
                                        aria-label="Default select example">
                                        <option value="">Please choose an option</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Quarterly">Quarterly</option>
                                        <option value="Half Yearly">Half Yearly</option>
                                        <option value="Yearly">Yearly</option>
                                    </select>
                                </div>
                            </div>

                            <!-- 5 -->
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">List of Amenities*</label>
                                    <input type="text" v-model="formData.list_of_amenities" name="list_of_amenities"
                                        placeholder="e.g., In-unit Laundry, Dishwasher" maxlength="255"/>
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Special Features*</label>
                                    <input type="text" v-model="formData.special_feature" name="special_feature"
                                        placeholder="e.g., Balcony, Pet-friendly" maxlength="255"/>
                                </div>
                            </div>
                        </div>
                        <button type="button" @click="previousTab"
                            class="previous action-button-previous px-5 py-1 mt-5 mx-3">Previous</button>
                        <button type="button" @click="nextTab"
                            class="next action-button px-5 py-1 mt-5 mx-3">Next</button>
                    </fieldset>

                    <fieldset v-if="index === 3">
                        <div class="form-card">
                            <!-- 1 -->
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Ideal Tenant Characteristics*</label>
                                    <input type="text" v-model="formData.tenant_characteristics"
                                        name="tenant_characteristics" placeholder="e.g., Non_smoker, No Pets" maxlength="255">
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Credit Score Range*</label>
                                    <input type="text" v-model="formData.credit_score" name="credit_score" maxlength="100">
                                </div>
                            </div>
                            <!-- 2 -->
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Income Requirements*</label>
                                    <input type="text" v-model="formData.income_requirements"
                                        name="income_requirements" maxlength="100">
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Rental History Checks*</label>
                                    <input type="text" v-model="formData.rental_history" name="rental_history" maxlength="100">
                                </div>
                            </div>
                        </div>
                        <button type="button" @click="previousTab"
                            class="previous action-button-previous px-5 py-1 mt-5 mx-3">Previous</button>
                        <button type="button" @click="nextTab"
                            class="next action-button px-5 py-1 mt-5 mx-3">Next</button>
                    </fieldset>

                    <fieldset v-if="index === 4">
                        <div class="form-card">
                            <div class="row">
                                <label class="fieldlabels p-0">Special Instructions or Notes*</label>
                                <textarea v-model="formData.special_note" name="special_note"></textarea>
                                <label class="fieldlabels p-0 mt-4">Photos of the Property</label>
                                <div class="row">
                                    <div class="group col-md-12">
                                        <div class="image-upload">
                                            <div class="upload-container">
                                                <label for="file-input">
                                                    <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                                                </label>
                                                <p class="site-color p-0" id="upload-text">Upload document*</p>
                                            </div>
                                            <input type="file" id="file-input" name="file" accept="image/*" multiple="false">
                                            <div id="image-container"></div>
                                            <div class="image-info">
                                                <p id="file-names"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button type="button" @click="previousTab"
                            class="previous action-button-previous px-5 py-1 mt-5 mx-3">Previous</button>
                        <button type="button" @click="nextTab"
                            class="next action-button px-5 py-1 mt-5 mx-3">Next</button>
                    </fieldset>

                    <fieldset v-if="index === 5">
                        <div class="form-card">
                            <!-- Finish tab content here -->
                            <h2 class="text-white text-center">
                                <strong>SUCCESS !</strong>
                            </h2>
                            <br>
                            <div class="row justify-content-center">
                                <div class="col-3 d-flex justify-content-center">
                                    <i class="fa-solid fa-check"
                                        style="font-size: 50px; color: #04d7e8 !important;"></i>
                                </div>
                            </div>
                            <br><br>
                            <div class="row justify-content-center">
                                <div class="col-7 text-center">
                                    <h5 class="text-white text-center">You Have Successfully Signed Up</h5>
                                </div>
                            </div>
                        </div>
                        <!-- <button type="button" @click="previousTab"
                            class="previous action-button-previous px-5 py-1 mt-5 mx-3">Previous</button> -->
                        <button type="submit" class="next action-button px-5 py-1 mt-5 mx-3">Finish</button>
                    </fieldset>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import axiosInstance from '@/plugins/axios';

import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const tabs = ref([
    {
        id: 'personal-tab-pane',
        name: 'Personal Information',
        contentTitle: 'Personal & Property Information:'
    },
    {
        id: 'property-tab-pane',
        name: 'Property Details',
        contentTitle: 'Property Details:'
    },
    {
        id: 'rental-tab-pane',
        name: 'Rental Specifics',
        contentTitle: 'Rental Specifics:'
    },
    {
        id: 'tenant-tab-pane',
        name: 'Tenant',
        contentTitle: 'Tenant Preferences:'
    },
    {
        id: 'additional-tab-pane',
        name: 'Additional Information',
        contentTitle: 'Additional Information:'
    },
    {
        id: 'finish-tab-pane',
        name: 'Finish',
        contentTitle: 'Finish:'
    },
]);
var selectedFiles = [];


const formData = {
    step: '1',
    full_name: '',
    email: '',
    phone_number: '',
    company_name: '',

    street_address: '',
    appartment_number: '',
    neighbourhood: '',
    property_type: '',
    number_of_units: '',
    year_built: '',
    major_renovation: '',

    size_square_feet: '',
    number_of_bedrooms: '',
    number_of_bathrooms: '',
    rental_type: '',
    monthly_rent: '',
    security_deposit: '',
    lease_duration: '',
    renwal_option: '',
    list_of_amenities: '',
    special_feature: '',

    tenant_characteristics: '',
    credit_score: '',
    income_requirements: '',
    rental_history: '',

    special_note: ''
};
var errors = {}; // Object to hold field-specific error messages
var serverError = '';  // String to hold general server error messages

//track active tabs
const activeTab = ref(tabs.value[0].id);

//tab selection function
const selectTab = (tabId, index) => {
    // activeTab.value = tabId;
    // formData.step = index+1;
}

//next tab function
const nextTab = async () => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
    });

    if (selectedFiles.length > 0) {
        for (let i = 0; i < selectedFiles.length; i++) {
            data.append('property_photos[]', selectedFiles[i]);
        }
    } else {
        data.append('property_photos', '');
    }

    try {

        $('#uiBlocker').show();
        $('[name]').removeClass('is-invalid');
        const response = await axiosInstance.post('/landlord/validate', data);

        if (response.data.success) {

            $('#uiBlocker').hide();
            const currentIndex = tabs.value.findIndex(tab => tab.id === activeTab.value);
            if (currentIndex < tabs.value.length - 1) {
                formData.step++;

                if (formData.step == '6') {
                    storeLandlord();
                } else {
                    activeTab.value = tabs.value[currentIndex + 1].id
                }
            }
            serverError = ''; // Clear any server error messages
        } else {
            $('#uiBlocker').hide();
            toastr.error('API error:', response.data.error);
            console.error('API error:', response.data.error);
        }
    } catch (error) {

        $('#uiBlocker').hide();
        if (error.response && error.response.status === 422) {
            // Handle validation errors
            Object.entries(error.response.data.errors).forEach(([key, value]) => {
                toastr.error(value[0]);
                var inputField = $('[name="' + key + '"]');
                inputField.addClass('is-invalid');
            });
        } else {
            // Handle other errors
            toastr.error('An unexpected error occurred. Please try again.');
            serverError = 'An unexpected error occurred. Please try again.';
        }
    }
}

//prev tab function
const previousTab = () => {
    const currentIndex = tabs.value.findIndex(tab => tab.id === activeTab.value);
    if (currentIndex < tabs.value.length - 1) {
        activeTab.value = tabs.value[currentIndex - 1].id
        formData.step--;
    }
}

const storeLandlord = async () => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
    });

    if (selectedFiles.length > 0) {
        for (let i = 0; i < selectedFiles.length; i++) {
            data.append('property_photos[]', selectedFiles[i]);
        }
    } else {
        data.append('property_photos', '');
    }

    try {
        
        $('#uiBlocker').show();
        $('[name]').removeClass('is-invalid');
        const response = await axiosInstance.post('/landlord/store', data);

        if (response.data.success) {
            
            $('#uiBlocker').hide();
            resetFormData();

            const currentIndex = tabs.value.findIndex(tab => tab.id === activeTab.value);
            if (currentIndex < tabs.value.length - 1) {
                activeTab.value = tabs.value[currentIndex + 1].id
            }
            serverError = ''; // Clear any server error messages
        } else {
            $('#uiBlocker').hide();
            toastr.error('API error:', response.data.error);
            console.error('API error:', response.data.error);
        }
    } catch (error) {
        
        $('#uiBlocker').hide();
        if (error.response && error.response.status === 422) {
            // Handle validation errors
            Object.entries(error.response.data.errors).forEach(([key, value]) => {
                toastr.error(value[0]);
                var inputField = $('[name="' + key + '"]');
                inputField.addClass('is-invalid');
            });
        } else {
            // Handle other errors
            toastr.error('An unexpected error occurred. Please try again.');
            serverError = 'An unexpected error occurred. Please try again.';
        }
    }
}

const resetFormData = async () => {
    
            formData.step = '1';
            formData.full_name = '';
            formData.email = '';
            formData.phone_number = '';
            formData.company_name = '';

            formData.street_address = '';
            formData.appartment_number = '';
            formData.neighbourhood = '';
            formData.property_type = '';
            formData.number_of_units = '';
            formData.year_built = '';
            formData.major_renovation = '';

            formData.size_square_feet = '';
            formData.number_of_bedrooms = '';
            formData.number_of_bathrooms = '';
            formData.rental_type = '';
            formData.monthly_rent = '';
            formData.security_deposit = '';
            formData.lease_duration = '';
            formData.renwal_option = '';
            formData.list_of_amenities = '';
            formData.special_feature = '';

            formData.tenant_characteristics = '';
            formData.credit_score = '';
            formData.income_requirements = '';
            formData.rental_history = '';
            formData.special_note = '';
            
            $('[name]').val('');
       
}


$(document).ready(() => {

    $('input,select,textarea').on('keyup', function(e) {
      $(this).removeClass('is-invalid');
    });
    $('input,select,textarea').on('change', function(e) {
      $(this).removeClass('is-invalid');
    });
    // number not allowed
    $('[name="full_name"]').on('keydown', function(e) {
        var key = e.keyCode || e.which;
        var char = String.fromCharCode(key);
        var controlKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];

        // Allow control keys and non-numeric characters
        if (controlKeys.includes(e.key) || !char.match(/[0-9]/)) {
            return true;
        } else {
            e.preventDefault();
            return false;
        }
    });
    // onlly numbers allowed
    $('input[type="number"],input[type="email"]').on('keydown', function(e) {
        var maxLength = $(this).attr("maxlength");
        
        var controlKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
        if (controlKeys.includes(e.key)) {
            return;
        }
        // Prevent new input if the value length exceeds maxLength
        if (this.value.length >= maxLength) {
            e.preventDefault();
        }
    });

    $('#file-input').on('change', function (event) {
        const files = event.target.files;
        var allfileslength = files.length + selectedFiles.length;
        
        if(allfileslength > 7){
          toastr.error('You can upload a maximum of 7 images.');
          return;
        }

        $('#image-container').empty();

        // Validate and add selected files to selectedFiles array
        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            // Check if the file is an image
            if (!file.type.startsWith('image/')) {
                toastr.error('Please select only image files.');
                continue;
            }

            selectedFiles.push(file);
        }
        // Update the display
        displaySelectedFiles();
    });
    function displaySelectedFiles() {
        const $imageContainer = $('#image-container');
        $imageContainer.empty(); // Clear previous images
        selectedFiles.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = function (e) {
                const $imageDiv = $('<div>').addClass('image-item');
                const $image = $('<img>').attr('src', e.target.result);
                $imageDiv.append($image);
                const $fileName = $('<p>').text(file.name);
                $imageDiv.append($fileName);
                const $cancelButton = $('<span>').html('&times;').addClass('cancel-icon');
                $cancelButton.on('click', function () {
                    selectedFiles.splice(index, 1);
                    displaySelectedFiles();
                });
                $imageDiv.append($cancelButton);
                $imageContainer.append($imageDiv);
            }
            reader.readAsDataURL(file);
        });
    }
})
</script>

<style scoped>


.new-form-section {
    margin-bottom: 5rem;
    background-color: #012252;
}

fieldset {
    text-align: end;
}

.image-container {
    display: grid;
    grid-template-columns: repeat(autoplay  );
    width: 100%;
    gap: 10px;
    align-items: flex-end;
    height: fit-content;
}

.image-item {
    flex: 0 0 auto;
    width: 100%;
    position: relative;
    z-index: 9;
}

.nav-link {
    position: relative;
    padding-left: 10px;
    /* overflow: hidden; */
    font-size: clamp(12px, 3vw, 16px) !important;
    text-align: left;
}

.nav-link .highlight {
    position: absolute;
    left: -25.5%;
    bottom: 17px;
    height: 3px;
    background-color: gold;
    width: 100%;
    transition: width 0.3s;
    rotate: 90deg;
}

.nav-link.active .highlight {
    width: 50%;
}

.img-con {
    background-image: url('../assets/images/form-wizard.jpg');
    /* position: relative; */
    margin-top: 10rem;
    background-position: center;
    background-size: cover;
    height: 25rem;
    width: 100%;
}

.img-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

.img-heading {
    border: 1px solid #fff;
    background-color: #0000003a;
}

.nav-link {
    color: #fff !important;
    background-color: transparent !important;
    border: none;
}

.nav-link.active {
    color: gold !important;
}

.nav-tabs {
    border: none;
    border-left: 3px solid #ffffffb0;
    height: fit-content;
}

.form-select {
    border: none;
    border-bottom: 1px solid #fff !important;
}

input:focus,
textarea:focus,
select:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid #fff;
}


select {
    color: #fff;
}

.image-upload label {
    background-color: #fff;
}

.group {
    margin-top: 1.5rem
}

input {
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ffffff9f;
    color: #fff;
    margin-top: .5rem;
}

textarea {
    border: 1px solid #fff;
    border-radius: 4px;
    background-color: transparent
}

label {
    color: #fff;
}

input::placeholder {
    color: #fff;
}

button {
    background-color: gold;
    border: 1px solid #00000079;
    border-radius: 4px;
    color: #000;
    font-weight: 500;
}

.is-invalid {
    border-color: #ff0000 !important;
    border-bottom: 1px solid #ff0000 !important;
}

/* button:hover {
    background-color: #fff;
    color: #000;
} */
</style>