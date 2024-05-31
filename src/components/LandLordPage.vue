<script setup>
import { ref } from 'vue';

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
])

//track active tabs
const activeTab = ref(tabs.value[0].id);



//tab selection function
const selectTab = (tabId) => {
    activeTab.value = tabId;
}



//next tab function
const nextTab = () => {
    const currentIndex = tabs.value.findIndex(tab => tab.id === activeTab.value);
    if (currentIndex < tabs.value.length - 1) {
        activeTab.value = tabs.value[currentIndex + 1].id
    }
}

//prev tab function
const previousTab = () => {
    const currentIndex = tabs.value.findIndex(tab => tab.id === activeTab.value);
    if (currentIndex < tabs.value.length - 1) {
        activeTab.value = tabs.value[currentIndex - 1].id
    }
}



$(document).ready(() => {
    const selectedFiles = [];
    $('#file-input').on('change', function (event) {
        const files = event.target.files;
        const $imageContainer = $('#image-container');
        $imageContainer.empty(); // Clear previous images
        // Add selected files to the selectedFiles array
        for (let i = 0; i < files.length; i++) {
            selectedFiles.push(files[i]);
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



<template>
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
                distinguished properties. Rest assured, a member of our team will review your submission and reach out
                to you within 24 hours. We’re excited to partner with you in finding the perfect match for your rental
                property.
            </p>
            </div>
        </div>
    </div>
    <section class="new-form-section container p-5">
        <div class="row">
            <ul class="nav nav-tabs col-5 d-flex flex-column gap-3" id="myTab" role="tablist">
                <li class="nav-item" role="presentation" v-for="(tab, index) in tabs" :key="index">
                    <button class="nav-link" :class="{ active: activeTab === tab.id }" @click="selectTab(tab.id)">
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
                                    <input type="text" name="uname" placeholder="UserName" />
                                </div>
                                <div class="group col-md-6">
                                    <input type="email" name="email" placeholder="Email Id" />
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="group col-md-6">
                                    <input type="number" name="phone" placeholder="Enter your phone number" />
                                </div>
                                <div class="group col-md-6">
                                    <input type="text" name="company" placeholder="Enter your company name" />
                                </div>
                            </div>
                        </div>
                        <button @click="nextTab" v-if="index < tabs.length - 1"
                            class="next action-button px-5 py-1 mt-5 mx-3">Next</button>
                    </fieldset>

                    <fieldset v-if="index === 1">
                        <div class="form-card">
                            <label class="fieldlabels p-0">Street Address:</label>
                            <input type="text" name="address" />
                            <div class="row ">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Apartment/Unit Number:</label>
                                    <input type="text" name="unit" />
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Borough/Neighborhood</label>
                                    <input type="text" name="borough" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Property Type</label>
                                    <select class="form-select pt-0" aria-label="Default select example">
                                        <option selected>Please choose an option</option>
                                        <option value="1">Apartment</option>
                                        <option value="2">Condo</option>
                                        <option value="3">House</option>
                                        <option value="4">Studio</option>
                                    </select>
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Number of Units (if multi-unit property)</label>
                                    <input type="number" name="units" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Year Built</label>
                                    <br><br><br class="d-block d-md-none">
                                    <input type="number" name="yearBuilt" />
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Year of Last Major Renovation <br> (if
                                        applicable)</label>
                                    <input type="number" name="renovationYear" />
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
                                    <label class="fieldlabels p-0">Size (square footage)</label>
                                    <input type="number" name="size">
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Number of Bedrooms
                                        Photo:</label> <input type="number" name="bed">
                                </div>
                            </div>

                            <!-- 2 -->
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels pt-2">Number of Bathrooms</label>
                                    <input type="number" name="rooms" />
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Type of Rental
                                    </label> <select class="form-select" aria-label="Default select example">
                                        <option selected>Please choose an option</option>
                                        <option value="1">Furnished</option>
                                        <option value="2">Unfurnished</option>
                                    </select>
                                </div>
                            </div>
                            <!-- 3 -->
                            <div class="row">
                                <div class="group col-md-4">
                                    <label class="fieldlabels p-0">Monthly Rent (USD)</label>
                                    <br><br>
                                    <input type="number" name="builtyear" />
                                </div>
                                <div class="group col-md-4">
                                    <label class="fieldlabels p-0">Security Deposit Requirement (USD)</label>
                                    <input type="number" name="builtyear" />
                                </div>

                                <div class="group col-md-4">
                                    <label class="fieldlabels p-0">Minimum Lease Duration (Month)</label>
                                    <input type="number" name="builtyear" />
                                </div>
                            </div>
                            <!-- 4 -->
                            <div class="row">
                                <div class="group col-md-12">
                                    <label class="fieldlabels p-0">Renewal Options</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Please choose an option</option>
                                        <option value="1">Monthly</option>
                                        <option value="2">Quarterly</option>
                                        <option value="3">Half Yearly</option>
                                        <option value="4">Yearly</option>
                                    </select>
                                </div>
                            </div>

                            <!-- 5 -->
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">List of Amenities</label> <input type="text"
                                        name="builtyear" placeholder="e.g., In-unit Laundry, Dishwasher" />
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Security Deposit Requirement (USD)</label> <input
                                        type="number" name="builtyear" placeholder="e.g., Balcony, Pet-friendly" />
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
                                    <label class="fieldlabels p-0">Ideal Tenant Characteristics</label>
                                    <input type="text" name="ideal" placeholder="e.g., Non_smoker, No Pets">
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Credit Score Range</label>
                                    <input type="text" name="score">
                                </div>
                            </div>
                            <!-- 2 -->
                            <div class="row">
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Income Requirements</label>
                                    <input type="text" name="income">
                                </div>
                                <div class="group col-md-6">
                                    <label class="fieldlabels p-0">Rental History Checks</label>
                                    <input type="text" name="history">
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
                                <div class="col-7">
                                    <h2 class="fs-title d-md-none">Additional Information:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps d-md-none">Step 5 - 6</h2>
                                </div>
                            </div>
                            <div class="row">
                                <label class="fieldlabels p-0">Special Instructions or Notes</label>
                                <textarea></textarea>
                                <label class="fieldlabels p-0 mt-4">Photos of the Property</label>
                                <div class="row">
                                    <div class="group col-md-12">
                                        <div class="image-upload">
                                            <div class="upload-container">
                                                <label for="file-input">
                                                    <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                                                </label>
                                                <p class="site-color p-0" id="upload-text">Upload document</p>
                                            </div>
                                            <input type="file" id="file-input" name="files" multiple>
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
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title d-md-none">Finish:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps d-md-none">Step 6 - 6</h2>
                                </div>
                            </div>
                            <br><br>
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
                        <button type="button" @click="previousTab"
                            class="previous action-button-previous px-5 py-1 mt-5 mx-3">Previous</button>
                        <button type="submit" class="next action-button px-5 py-1 mt-5 mx-3">Finish</button>
                    </fieldset>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.new-form-section {
    margin-bottom: 5rem;
    background-color: #012252;
}

fieldset {
    text-align: end;
}

.image-container {
    display: flex;
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
    font-size: 16px !important;
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

/* button:hover {
    background-color: #fff;
    color: #000;
} */
</style>