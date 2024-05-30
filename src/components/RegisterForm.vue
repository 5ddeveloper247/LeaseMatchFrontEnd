<script>
export default {
    mounted() {
        $(document).ready(() => {
            let current_fs, next_fs, previous_fs;
            let opacity;
            let current = 1;
            const steps = $("fieldset").length;

            setProgressBar(current);

            $(".next").click(function () {
                current_fs = $(this).parent();
                next_fs = $(this).parent().next();

                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

                next_fs.show();
                current_fs.animate({ opacity: 0 }, {
                    step: function (now) {
                        opacity = 1 - now;
                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        next_fs.css({ 'opacity': opacity });
                    },
                    duration: 500
                });
                setProgressBar(++current);
            });

            $(".previous").click(function () {
                current_fs = $(this).parent();
                previous_fs = $(this).parent().prev();

                $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

                previous_fs.show();
                current_fs.animate({ opacity: 0 }, {
                    step: function (now) {
                        opacity = 1 - now;
                        current_fs.css({
                            'display': 'none',
                            'position': 'relative'
                        });
                        previous_fs.css({ 'opacity': opacity });
                    },
                    duration: 500
                });
                setProgressBar(--current);
            });

            function setProgressBar(curStep) {
                const percent = parseFloat(100 / steps) * curStep;
                const fixedPercent = percent.toFixed();
                $(".progress-bar")
                    .css("width", `${fixedPercent}%`)
                    .text((curStep === 1 ? "0" : fixedPercent) + "%");
            }
        });

        document.getElementById('file-input').addEventListener('change', function (event) {
            const files = event.target.files;
            if (files.length > 0) {
                const imageContainer = document.getElementById('image-container');
                imageContainer.innerHTML = '';  // Clear previous images
                const fileNamesElement = document.getElementById('file-names');
                fileNamesElement.textContent = "";

                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const reader = new FileReader();

                    reader.onload = function (e) {
                        const imageDiv = document.createElement('div');
                        imageDiv.classList.add('image-item');
                        const image = new Image();
                        image.src = e.target.result;
                        imageDiv.appendChild(image);
                        const fileName = document.createElement('p');
                        fileName.textContent = file.name;
                        imageDiv.appendChild(fileName);
                        imageContainer.appendChild(imageDiv);
                    };

                    reader.readAsDataURL(file);
                }
            }
        });
    }
}


</script>


<template>
    <!-- register -->
    <section class="register-sec pb-5">
        <div class="register-overlay"></div>
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-9 user-container my-5 px-5">

                    <form id="msform">

                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                aria-valuemin="0" aria-valuemax="100"></div>
                        </div> <br>
                        <!-- fieldsets -->
                        <!-- 1 -->
                        <fieldset>
                            <div class="form-card">
                                ​
                                <div class="row">
                                    <h2 class="fs-title text-center mb-4">Personal Information</h2>
                                    <div class="group col-md-6">
                                        ​
                                        <label class="fieldlabels p-0">Name</label>
                                        <input type="text" name="name" placeholder="Enter your name"
                                            class="form-control" />
                                    </div>
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Date of Birth</label>
                                        <input type="date" name="dob" placeholder="Date of Birth"
                                            class="form-control" />
                                    </div>
                                </div>
                                <!-- 2 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Email</label>
                                        <input type="email" name="email" placeholder="Enter your Email"
                                            class="form-control" />
                                    </div>
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Phone</label>
                                        <input type="text" name="phone" placeholder="Enter your Phone No"
                                            class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <input type="button" name="next" class="next action-button" value="Next" />
                        </fieldset>
                        ​
                        <!-- 2 field-->
                        ​
                        <fieldset>
                            <h2 class="fs-title text-center mb-4">Residential Preference:</h2>
                            <div class="form-card">
                                ​
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Preferred Borough/Location*
                                        </label> <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Preferred Borough/Location -</option>
                                            <option value="1">Bronx</option>
                                            <option value="2">Manhattan</option>
                                            <option value="3">Queens</option>
                                            <option value="4">Brooklyn</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="fieldlabels p-0">Preferred Property Type*
                                        </label> <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Preferred Property Type -</option>
                                            <option value="1">Appertament</option>
                                            <option value="2">House</option>
                                            <option value="3">Condo</option>
                                            ​
                                        </select>
                                    </div>
                                </div>
                                <!-- 2 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Minimum Bedrooms Needed*
                                        </label> <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Minimum Bedrooms Needed -</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Minimum Bathrooms Needed*
                                        </label> <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Minimum Bathrooms Needed -</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                    </div>
                                </div>
                                ​
                                ​
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        <!-- 3 field-->
                        <fieldset>
                            <h2 class="fs-title text-center mb-4">Financial Infirmation:</h2>
                            <div class="form-card">
                                ​
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Annual Income (USD)*</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select annual income</option>
                                            <option value="1">$10,000 - $20,000</option>
                                            <option value="2">$20,000 - $30,000</option>
                                            <option value="3">$30,000 - $40,000</option>
                                            <option value="4">$40,000 - $50,000</option>
                                            <option value="5">$50,000 - $60,000</option>
                                            <option value="6">$60,000 - $70,000</option>
                                            <option value="7">$70,000 - $80,000</option>
                                            <option value="8">$80,000 - $90,000</option>
                                            <option value="9">$90,000 - $100,000</option>
                                            <option value="10">$100,000+</option>
                                        </select>
                                    </div>
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Employment Status*
                                        </label> <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select an Employment Status -</option>
                                            <option value="1">Employed</option>
                                            <option value="2">Unemployed</option>
                                            <option value="3">Retired</option>
                                            <option value="4">Student</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- 2 -->
                                <div class="row">
                                    <div class="col-md-4">
                                        <label class="fieldlabels p-0">Employer Name</label> <input type="number"
                                            name="builtyear" />
                                        ​
                                    </div>
                                    <div class="col-md-4">
                                        <label class="fieldlabels p-0">Type of Income*</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Type of Income -</option>
                                            <option value="1">Salary</option>
                                            <option value="2">Benefits</option>
                                            <option value="3">Other</option>
                                        </select>
                                    </div>
                                    ​
                                    <div class="group col-md-4">
                                        <label class="fieldlabels p-0">Maximum rental budget (USD)*</label> <input
                                            type="number">
                                    </div>
                                </div>
                                ​
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        <!-- 4 field-->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">Rental Assistance and Certification:</h2>
                                ​
                                <!-- 2 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Has Rental Voucher*
                                        </label> <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Has Rental Voucher -</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </select>
                                    </div>
                                    ​
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Voucher Type
                                        </label> <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Voucher Type -</option>
                                            <option value="1">Section 8</option>
                                            <option value="2">SOTA</option>
                                            <option value="3">CityFheps</option>
                                            <option value="4">HASA</option>
                                            <option value="5">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- 2 -->
                                <div class="row">
                                    ​
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Certification Details
                                        </label> <input type="text" name="income">
                                    </div>
                                    ​
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Certification Expiry Date
                                        </label> <input type="number" name="history">
                                    </div>
                                </div>
                                ​
                                ​
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        <!-- 5 field-->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">Current/Previous Living Situation:</h2>
                                ​
                                ​
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Current Address
                                        </label> <input type="text">
                                    </div>
                                    ​
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Reason for Moving
                                        </label> <input type="text">
                                    </div>
                                </div>
                                ​
                                <!-- 2 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Previous Landlord Contact Information
                                        </label> <input type="text">
                                    </div>
                                    ​
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Lease Violations (if any)
                                        </label> <input type="text">
                                    </div>
                                </div>
                                ​
                                ​
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        ​
                        <!-- 6 field-->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">Household Information:</h2>
                                ​
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Total Household Size*</label><input
                                            type="number">
                                    </div>
                                    ​
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Reason for Moving
                                        </label> <input type="text">
                                    </div>
                                </div>
                                <!-- 2 -->
                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="fieldlabels p-0">Number of Adults*</label> <input type="number">
                                    </div>
                                    ​
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Number of Children</label> <input type="number">
                                        ​
                                    </div>
                                </div>
                                ​
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        ​
                        <!-- 7 field-->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">Pet Information:</h2>
                                ​
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Has Pets*</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Has Pets -</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                            ​
                                        </select>
                                    </div>
                                    ​
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Pet Type(s)
                                        </label> <input type="text">
                                    </div>
                                </div>
                                <!-- 2 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Number of Pets</label> <input type="number">
                                    </div>
                                    ​
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Pet Size</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Pet Size -</option>
                                            <option value="1">Small</option>
                                            <option value="2">Medium</option>
                                            <option value="2">Large</option>
                                            ​
                                        </select>
                                    </div>
                                </div>
                                ​
                                ​
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        <!-- 8 field-->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">Accessibility & Accommodation Requirements:</h2>
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Disability*</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Disability - -</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </select>
                                    </div>
                                    <div class="group col-md-6">
                                        ​
                                        <label class="fieldlabels p-0">Type of Disability</label> <input type="text">
                                    </div>
                                </div>
                                ​
                                <!-- 2 -->
                                <div class="row">
                                    <div class="col-12">
                                        <label class="fieldlabels p-0">Special Accommodations Needed</label> <input
                                            type="text">
                                    </div>
                                </div>
                                ​
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        <!-- 9 field-->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">Additional Preferences & Requirements:</h2>
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-12">
                                        <label class="fieldlabels p-0">Maximum Rent Willing to Pay*</label> <input
                                            type="text">
                                    </div>
                                </div>
                                <!-- 2 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Preferred Move-in Date</label> <input
                                            type="date">
                                    </div>
                                    <div class="col-md-6">
                                        <label class="fieldlabels p-0">Lease Length Preference*</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select Lease Length Preference -</option>
                                            <option value="1">6 months</option>
                                            <option value="2">12 months</option>
                                            <option value="3">18 months</option>
                                            <option value="4">24 months</option>
                                        </select>
                                    </div>
                                </div>
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        <!-- 10 field-->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">Legal & Compliance:</h2>
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-12">
                                        <label class="fieldlabels p-0">Criminal Record*</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Criminal Record </option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                            ​
                                        </select>
                                        ​
                                        <label class="fieldlabels p-0">Legal Right to Rent*</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Legal Right to Rent -</option>
                                            <option value="1">Citizen</option>
                                            <option value="2">Visa Holder</option>
                                        </select>
                                    </div>
                                </div>
                                ​
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        <!-- 11-->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">References:</h2>
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Reference Name</label> <input type="text">
                                    </div>
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Reference Relationship</label> <input
                                            type="text">
                                    </div>
                                </div>
                                <!-- 2 -->
                                <div class="row">
                                    <div class="group col-md-12">
                                        <label class="fieldlabels p-0">Reference Contact Information</label> <input
                                            type="text">
                                    </div>
                                </div>
                                ​
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        <!-- 12 -->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">Additional Notes:</h2>
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-12">
                                        <label class="fieldlabels p-0">General Notes*</label> <textarea
                                            type="text"></textarea>
                                    </div>
                                </div>
                                <!-- 2 -->
                                <div class="row">
                                    <div class="group col-md-12">
                                        <label class="fieldlabels p-0">Are you willing to work with a licensed real
                                            estate
                                            Broker?*</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>- Select a Legal Right to Rent -</option>
                                            <option value="1">Citizen</option>
                                            <option value="2">Visa Holder</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- 3 -->
                                <div class="row">
                                    <div class="group col-md-12">
                                        <div class="image-upload ">
                                            <div class="upload-container d-flex flex-column align-items-center">
                                                <label for="file-input">
                                                    <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                                                </label>
                                                <p class="site-color p-0" id="upload-text">Upload Image</p>
                                            </div>
                                            <input id="file-input" type="file" accept="image/*" multiple />
                                            <div id="image-container"></div>
                                            <div class="image-info">
                                                <p id="file-names"></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        <!-- 13 -->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">Account:</h2>
                                <!-- 1 -->
                                <div class="row">
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Username *</label> <input type="text">
                                    </div>
                                    ​
                                    <div class="group col-md-6">
                                        <label class="fieldlabels p-0">Email address *</label>
                                        <input type="email">
                                    </div>
                                </div>
                                ​
                                <!-- 2 -->
                                ​
                                <div class="row">
                                    <div class="col-md-6">
                                        <label class="fieldlabels p-0">Password *</label> <input type="password">
                                        ​
                                    </div>
                                    <div class="col-md-6">
                                        <label class="fieldlabels p-0">Confirm Password *</label> <input
                                            type="password">
                                        ​
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="group col-md-12">
                                        <p class="site-color">Your personal data will be used to support your experience
                                            throughout this
                                            website,
                                            to manage access to your account, and for other purposes described in our
                                            privacy
                                            policy.</p>
                                    </div>
                                </div>
                            </div> <input type="button" name="next" class="next action-button" value="Next" />
                            <input type="button" name="previous" class="previous action-button-previous"
                                value="Previous" />
                        </fieldset>
                        <!-- end -->
                        <fieldset>
                            <div class="form-card">
                                <h2 class="fs-title text-center mb-4">Finish:</h2>
                                <br><br>
                                <h2 class="purple-text text-center"><strong>SUCCESS !</strong></h2> <br>
                                <div class="row justify-content-center">
                                    <div class="col-3 d-flex justify-content-center"> <i class="fa-solid fa-check"
                                            style="font-size: 50px; color: #04d7e8 !important;"></i> </div>
                                </div> <br><br>
                                <div class="row justify-content-center">
                                    <div class="col-7 text-center">
                                        <h5 class="purple-text text-center">You Have Successfully Signed Up</h5>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        ​
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>
.modal-dialog {
    position: fixed;
    top: 12%;
    right: 10px;
    margin: 0;
}

​ .modal-content a {
    color: #04d7e8;
    text-decoration: none;
}

​

/* register */
.register-sec {
    padding-top: 100px;
    background-image: url('../assets/images/Average-time-to-match.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    position: relative;
}

​ .register-overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #013539b8;
}

​ .user-container {
    border: 1px solid var(--tex-color);
    background: #ffffff;
    border-radius: 10px;
}

​ #heading {
    text-transform: uppercase;
    color: var(--tex-color);
    font-weight: normal
}

​ #msform {
    text-align: center;
    position: relative;
    margin-top: 30px;
}

​ #msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-bottom: 20px;
    position: relative
}

​ .form-card {
    text-align: left
}

​ #msform fieldset:not(:first-of-type) {
    display: none
}

​ #msform input,
#msform textarea,
.form-select {
    padding: 8px 15px 8px 15px;
    border: 1px solid var(--tex-color);
    border-radius: 0px;
    margin-bottom: 25px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: var(--tex-color);
    background-color: transparent;
    font-size: 16px;
    letter-spacing: 1px
}

​ .form-select,
.form-select option {
    cursor: pointer;
    color: var(--tex-color);
    background-color: transparent;
    font-size: 16px;
    letter-spacing: 1px
}

​ #msform input:focus,
#msform textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid var(--tex-color);
    outline-width: 0
}

​ #msform .action-button {
    width: 100px;
    background: var(--tex-color);
    font-weight: bold;
    color: white;
    border: 2px solid var(--tex-color);
    border-radius: 20px;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    margin: 10px 0px 10px 5px;
    float: right
}

​ #msform .action-button:hover,
#msform .action-button:focus {
    background-color: var(--tex-color);
    color: #ffffff;
}

​ #msform .action-button-previous {
    width: 100px;
    background: #ffffff;
    font-weight: bold;
    color: var(--tex-color);
    border: 2px solid var(--tex-color) !important;
    border-radius: 20px;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    margin: 10px 5px 10px 0px;
    float: right;
    display: flex;
    justify-content: center;
}

​ #msform .action-button-previous:hover {
    background-color: #ffffff;
    color: var(--tex-color);
}

​ .card {
    z-index: 0;
    border: none;
    position: relative
}

​ .fs-title {
    font-size: 25px;
    color: var(--tex-color);
    margin-bottom: 15px;
    font-weight: normal;
    text-align: left
}

​ .purple-text {
    color: var(--tex-color);
    font-weight: normal
}

​ .steps {
    font-size: 25px;
    color: gray;
    margin-bottom: 10px;
    font-weight: normal;
    text-align: right
}

​ .fieldlabels {
    color: gray;
    text-align: left
}

​ ​ .progress {
    height: 25px
}

​ .progress-bar {
    background-color: var(--tex-color)
}

.form-check-input {
    width: 1em !important;
    height: 1em !important;
    margin-top: .25em !important;
    vertical-align: top !important;
    background-color: #fff !important;
    background-size: #fff !important;
    border: 1px solid rgba(0, 0, 0, .25) !important;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
    padding: 1px !important;
    cursor: pointer;
    margin-right: 10px;
}

​.form-check-input:checked {
    background-color: var(--tex-color) !important;
    color: #fff !important;
}

/* ​@media screen and (max-width: 767px) {
    ​#progressbar li:before {
        width: 25px !important;
        height: 25px !important;
        line-height: 20px !important;
        font-size: 12px !important;
    }

    ​#progressbar li:after {
        top: 13px !important;
    }

    ​#progressbar li {
        font-size: 10px;
        width: 18%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    ​.fs-title {
        font-size: 18px !important;
    }

    ​.steps {
        font-size: 20px !important;
    }
} */

#image-container {
    margin-left: 5% !important;
}

.image-upload {
    position: relative;
    display: flex;
}

​ .image-upload img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border: 1px solid var(--tex-color);
    border-radius: 50px;
}

​ .image-upload input[type="file"] {
    display: none;
}

​ .image-upload label {
    position: relative;
    width: 70px;
    height: 70px;
    border: 1px solid var(--tex-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50px;
}

​ .image-upload label i {
    font-size: 2rem;
    color: var(--tex-color);
    position: absolute;
}

​ .image-info {
    display: flex;
    align-items: center;
    justify-content: start;
    width: fit-content;
}

.fit-image {
    width: 100%;
    object-fit: cover
}

​ .image-item {
    display: inline-block;
    margin-right: 20px;
    width: 80px;
    text-align: center;
    vertical-align: top;
    /* Align images at the top */
}

.image-item p {
    color: var(--tex-color);
    background: transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.image-item img {
    width: 70px;
    height: 70px;
    border-radius: 50px;
    margin-bottom: 5px;
    /* Added margin below images */
}
</style>