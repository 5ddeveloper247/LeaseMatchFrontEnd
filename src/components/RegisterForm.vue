<template>
  <!-- register -->
  <section class="register-sec pb-5">
    <div class="register-overlay"></div>
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div
          class="col-9 user-container my-5 px-5"
          style="background-color: #fff; position: relative; border-radius: 10px" >
          <form id="msform">
            <div class="progress">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" ></div>
            </div>
            <br />
            <!-- fieldsets -->
            
            <!-- 1 -->
            <fieldset id="step_1">
              <div class="form-card">
                <div class="row">
                  <h2 class="fs-title text-center mb-4">Personal Information</h2>
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Name*</label>
                    <input type="text" v-model="formData.name" name="name" placeholder="Enter your name" class="form-control" />
                  </div>
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Date of Birth*</label>
                    <input type="date" v-model="formData.date_of_birth" name="date_of_birth" placeholder="Date of Birth" class="form-control" />
                  </div>
                </div>
                <!-- 2 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Email*</label>
                    <input type="email" v-model="formData.email" name="email" placeholder="Enter your Email" class="form-control" />
                  </div>
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Phone*</label>
                    <input type="text" v-model="formData.phone_number" name="phone_number" placeholder="Enter your Phone No" class="form-control" />
                  </div>
                </div>
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
            </fieldset>
            
            <!-- 2 field-->
            <fieldset id="step_2">
              <h2 class="fs-title text-center mb-4">Residential Preference</h2>
              <div class="form-card">
                <!-- 1 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Preferred Borough/Location* </label>
                    <select class="form-select" v-model="formData.preferred_location" name="preferred_location" aria-label="Default select example">
                        <option value="">- Select a Preferred Borough/Location -</option>
                        <option value="Bronx">Bronx</option>
                        <option value="Staten Island">Staten Island</option>
                        <option value="Manhattan">Manhattan</option>
                        <option value="Queens">Queens</option>
                        <option value="Brooklyn">Brooklyn</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label class="fieldlabels p-0">Preferred Property Type* </label>
                    <select class="form-select" v-model="formData.preferred_property_type" name="preferred_property_type" aria-label="Default select example">
                      <option value="">- Select a Preferred Property Type -</option>
                      <option value="Appartment">Appartment</option>
                      <option value="Condo">Condo</option>
                      <option value="House">House</option>
                      <option value="Studio">Studio</option>
                      
                    </select>
                  </div>
                </div>
                <!-- 2 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Minimum Bedrooms Needed* </label>
                    <select class="form-select" v-model="formData.min_bedrooms_needed" name="min_bedrooms_needed" aria-label="Default select example">
                      <option value="">- Select a Minimum Bedrooms Needed -</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Minimum Bathrooms Needed* </label>
                    <select class="form-select" v-model="formData.min_bathrooms_needed" name="min_bathrooms_needed" aria-label="Default select example">
                      <option value="">- Select a Minimum Bathrooms Needed -</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>
            
            <!-- 3 field-->
            <fieldset id="step_3">
              <h2 class="fs-title text-center mb-4">Financial Information</h2>
              <div class="form-card">
                
                <!-- 1 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Annual Income (USD)*</label>
                    <select class="form-select" v-model="formData.annual_income" name="annual_income" aria-label="Default select example">
                        <option value="">- Select annual income</option>
                        <option value="10k_20k">$10,000 - $20,000</option>
                        <option value="20k_30k">$20,000 - $30,000</option>
                        <option value="30k_40k">$30,000 - $40,000</option>
                        <option value="40k_50k">$40,000 - $50,000</option>
                        <option value="50k_60k">$50,000 - $60,000</option>
                        <option value="60k_70k">$60,000 - $70,000</option>
                        <option value="70k_80k">$70,000 - $80,000</option>
                        <option value="80k_90k">$80,000 - $90,000</option>
                        <option value="90k_100k">$90,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Employment Status* </label>
                    <select class="form-select" v-model="formData.employment_status" name="employment_status" aria-label="Default select example">
                        <option value="">- Select an Employment Status -</option>
                        <option value="Employed">Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Retired">Retired</option>
                        <option value="Student">Student</option>
                    </select>
                  </div>
                </div>
                <!-- 2 -->
                <div class="row">
                  <div class="col-md-4">
                    <label class="fieldlabels p-0">Employer Name*</label>
                    <input type="text" v-model="formData.employer_name" name="employer_name" />
                    
                  </div>
                  <div class="col-md-4">
                    <label class="fieldlabels p-0">Type of Income*</label>
                    <select class="form-select" v-model="formData.income_type" name="income_type" aria-label="Default select example">
                        <option value="">- Select a Type of Income -</option>
                        <option value="Salary">Salary</option>
                        <option value="Benefits">Benefits</option>
                        <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div class="group col-md-4">
                    <label class="fieldlabels p-0">Maximum rental budget (USD)*</label>
                    <input type="number" v-model="formData.rental_budget" name="rental_budget"/>
                  </div>
                </div>
                
              </div>
              <!-- <input type="button" name="next" class="next action-button" value="Next" /> -->
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>
            
            <!-- 4 field-->
            <fieldset id="step_4">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">Rental Assistance and Certification</h2>
                
                <!-- 2 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Has Rental Voucher* </label>
                    <select class="form-select" v-model="formData.rental_voucher" name="rental_voucher" aria-label="Default select example">
                      <option selected>- Select a Has Rental Voucher -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Voucher Type* </label>
                    <select class="form-select" v-model="formData.voucher_type" name="voucher_type" aria-label="Default select example">
                        <option value="">- Select a Voucher Type -</option>
                        <option value="Section 8">Section 8</option>
                        <option value="SOTA">SOTA</option>
                        <option value="CityFheps">CityFheps</option>
                        <option value="HASA">HASA</option>
                        <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <!-- 2 -->
                <div class="row">
                  
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Certification Details* </label>
                    <input type="text" v-model="formData.certification_detail" name="certification_detail" />
                  </div>
                  
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Certification Expiry Date* </label>
                    <input type="date" v-model="formData.certification_expiry" name="certification_expiry" />
                  </div>
                </div>
                
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>

            <!-- 5 field-->
            <fieldset id="step_5">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">Current/Previous Living Situation</h2>
                 
                <!-- 1 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Current Address* </label> 
                    <input type="text" v-model="formData.current_address" name="current_address"/>
                  </div>
                  
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Reason for Moving* </label> 
                    <input type="text" v-model="formData.moving_reason" name="moving_reason"/>
                  </div>
                </div>
                
                <!-- 2 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Previous Landlord Contact Information* </label>
                    <input type="text" v-model="formData.prev_landlord_contact" name="prev_landlord_contact"/>
                  </div>
                  
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Lease Violations (if any)* </label>
                    <input type="text" v-model="formData.lease_violation" name="lease_violation"/>
                  </div>
                </div>
                
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>
            
            <!-- 6 field-->
            <fieldset id="step_6">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">Household Information</h2>
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Total Household Size*</label>
                    <input type="number" v-model="formData.household_size" name="household_size"/>
                  </div>

                  <div class="col-md-6">
                    <label class="fieldlabels p-0">Number of Adults*</label> 
                    <input type="number" v-model="formData.number_of_adults" name="number_of_adults"/>
                  </div>
                </div>
                <div class="row">
                  
                
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Number of Children*</label>
                    <input type="number" v-model="formData.number_of_child" name="number_of_child" />
                  </div>
                </div>
                
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>
            
            <!-- 7 field-->
            <fieldset id="step_7">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">Pet Information</h2>
                
                <!-- 1 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Has Pets*</label>
                    <select class="form-select" v-model="formData.has_pets" name="has_pets" aria-label="Default select example">
                      <option value="">- Select a Has Pets -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Pet Type(s)* </label> 
                    <input type="text" v-model="formData.pet_type" name="pet_type" />
                  </div>
                </div>
                <!-- 2 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Number of Pets*</label> 
                    <input type="number" v-model="formData.number_of_pets" name="number_of_pets"/>
                  </div>
                
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Pet Size*</label>
                    <select class="form-select" v-model="formData.pet_size" name="pet_size" aria-label="Default select example">
                      <option value="">- Select a Pet Size -</option>
                      <option value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                      
                    </select>
                  </div>
                </div>
                
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>

            <!-- 8 field-->
            <fieldset id="step_8">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">
                  Accessibility & Accommodation Requirements
                </h2>
                <!-- 1 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Disability*</label>
                    <select class="form-select" v-model="formData.disability" name="disability" aria-label="Default select example">
                      <option value="">- Select a Disability -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div class="group col-md-6">
                    
                    <label class="fieldlabels p-0">Type of Disability*</label> 
                    <input type="text" v-model="formData.disability_type" name="disability_type"/>
                  </div>
                </div>
                
                <!-- 2 -->
                <div class="row">
                  <div class="col-12">
                    <label class="fieldlabels p-0">Special Accommodations Needed*</label>
                    <input type="text" v-model="formData.special_accomodation" name="special_accomodation"/>
                  </div>
                </div>
                
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>

            <!-- 9 field-->
            <fieldset id="step_9">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">Additional Preferences & Requirements</h2>
                <!-- 1 -->
                <div class="row">
                  <div class="group col-md-12">
                    <label class="fieldlabels p-0">Maximum Rent Willing to Pay*</label>
                    <input type="number" v-model="formData.max_rent_to_pay" name="max_rent_to_pay"/>
                  </div>
                </div>
                <!-- 2 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Preferred Move-in Date*</label>
                    <input type="date" v-model="formData.preffered_move_in_date" name="preffered_move_in_date"/>
                  </div>
                  <div class="col-md-6">
                    <label class="fieldlabels p-0">Lease Length Preference*</label>
                    <select class="form-select" v-model="formData.lease_length_preference" name="lease_length_preference" aria-label="Default select example">
                        <option value="">- Select Lease Length Preference -</option>
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="18">18 months</option>
                        <option value="24">24 months</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>

            <!-- 10 field-->
            <fieldset id="step_10">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">Legal & Compliance</h2>
                <!-- 1 -->
                <div class="row">
                  <div class="group col-md-12">
                    <label class="fieldlabels p-0">Criminal Record*</label>
                    <select class="form-select" v-model="formData.criminal_record" name="criminal_record" aria-label="Default select example">
                        <option value="">- Select a Criminal Record</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    
                    <label class="fieldlabels p-0">Legal Right to Rent*</label>
                    <select class="form-select" v-model="formData.legal_right" name="legal_right" aria-label="Default select example">
                        <option value="">- Select a Legal Right to Rent -</option>
                        <option value="Citizen">Citizen</option>
                        <option value="Visa Holder">Visa Holder</option>
                    </select>
                  </div>
                </div>
                
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>

            <!-- 11-->
            <fieldset id="step_11">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">References</h2>
                <!-- 1 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Reference Name*</label> 
                    <input type="text" v-model="formData.reference_name" name="reference_name"/>
                  </div>
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Reference Relationship*</label>
                    <input type="text" v-model="formData.reference_relationship" name="reference_relationship"/>
                  </div>
                </div>
                <!-- 2 -->
                <div class="row">
                  <div class="group col-md-12">
                    <label class="fieldlabels p-0">Reference Contact Information*</label>
                    <input type="text"  v-model="formData.contact_information" name="contact_information"/>
                  </div>
                </div>
                
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>

            <!-- 12 -->
            <fieldset id="step_12">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">Additional Notes</h2>
                
                <div class="row">
                  <div class="group col-md-12">
                    <label class="fieldlabels p-0">General Notes*</label>
                    <textarea type="text" v-model="formData.general_note" name="general_note"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="group col-md-12">
                    <label class="fieldlabels p-0">Are you willing to work with a licensed real estate Broker?*</label>
                    <select class="form-select" v-model="formData.work_with_broker" name="work_with_broker" aria-label="Default select example">
                      <option value="">- Select a Legal Right to Rent -</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
                <!-- 3 -->
                <div class="row">
                  <div class="group col-md-12">
                    <div class="image-upload">
                      <div class="upload-container">
                        <label for="file-input">
                          <i class="fa fa-cloud-upload" aria-hidden="true"></i>
                        </label>
                        <p class="site-color text-center p-0" id="upload-text">Upload document*</p>
                      </div>
                      <input type="file" id="file-input" name="files" multiple />
                      <div id="image-container"></div>
                      <div class="image-info">
                        <p id="file-names"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>

            <!-- 13 -->
            <fieldset id="step_13">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">Account:</h2>
                <!-- 1 -->
                <div class="row">
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Username *</label> 
                    <input type="text" v-model="formData.user_name" name="user_name"/>
                  </div>
                  
                  <div class="group col-md-6">
                    <label class="fieldlabels p-0">Email address *</label>
                    <input type="email" v-model="formData.user_email" name="user_email"/>
                  </div>
                </div>
            
                <div class="row">
                  <div class="col-md-6">
                    <label class="fieldlabels p-0">Password *</label> 
                    <input type="password" v-model="formData.password" name="password"/>
                  </div>
                  <div class="col-md-6">
                    <label class="fieldlabels p-0">Confirm Password *</label>
                    <input type="password" v-model="formData.password_confirmation" name="password_confirmation"/>
                  </div>
                </div>
                <div class="row">
                  <div class="group col-md-12">
                    <p class="site-color">
                      Your personal data will be used to support your experience throughout this
                      website, to manage access to your account, and for other purposes described in
                      our privacy policy.
                    </p>
                  </div>
                </div>
              </div>
              <button type="button" class="action-button" @click="nextTab">Next</button>
              <button type="button" class="action-button-previous" @click="previous">Previous</button>
            </fieldset>
            <!-- end -->
            <fieldset id="step_14">
              <div class="form-card">
                <h2 class="fs-title text-center mb-4">Finish:</h2>
                <br /><br />
                <h2 class="purple-text text-center"><strong>SUCCESS !</strong></h2>
                <br />
                <div class="row justify-content-center">
                  <div class="col-3 d-flex justify-content-center">
                    <i
                      class="fa-solid fa-check"
                      style="font-size: 50px; color: #04d7e8 !important"
                    ></i>
                  </div>
                </div>
                <br /><br />
                <div class="row justify-content-center">
                  <div class="col-7 text-center">
                    <h5 class="purple-text text-center">You Have Successfully Signed Up</h5>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
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

var currentStep = 1;
var current_fs, next_fs, previous_fs;
var opacity;
var current = 1;
const selectedFiles = [];



const formData = {   
            step: '1',
            name: '',
            date_of_birth: '',
            email: '',
            phone_number: '',

            preferred_location: '',
            preferred_property_type: '',
            min_bedrooms_needed: '',
            min_bathrooms_needed: '',

            annual_income: '',
            employment_status: '',
            employer_name: '',
            income_type: '',
            rental_budget: '',

            rental_voucher: '',
            voucher_type: '',
            certification_detail: '',
            certification_expiry: '',

            current_address:'',
            moving_reason:'',
            prev_landlord_contact:'',
            lease_violation:'',

            household_size:'',
            number_of_adults:'',
            number_of_child:'',

            has_pets:'',
            pet_type:'',
            number_of_pets:'',
            pet_size:'',
            
            disability:'',
            disability_type:'',
            special_accomodation:'',

            max_rent_to_pay:'',
            preffered_move_in_date:'',
            lease_length_preference:'',

            criminal_record:'',
            legal_right:'',

            reference_name:'',
            reference_relationship:'',
            contact_information:'',

            general_note:'',
            work_with_broker:'',

            documents:'',

            user_name:'',
            user_email:'',
            password:'',
            password_confirmation:''
        };

var serverError = '';  // String to hold general server error messages


const nextTab = async () => {
    
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
    });

    if(selectedFiles.length > 0) {
        for (let i = 0; i < selectedFiles.length; i++) {
            data.append('documents[]', selectedFiles[i]);
        }
    } else {
        data.append('documents', '');
    }
    
    try {

        $('[name]').removeClass('is-invalid');
        const response = await axiosInstance.post('/registration/validate', data);
        
        if (response.data.success) {
        
            if(formData.step == '13'){
                    storeRegister();
            }else{
                formData.step++;
                next();
            }
            serverError = ''; // Clear any server error messages
        } else {
            toastr.error('API error:', response.data.error);
            console.error('API error:', response.data.error);
        }
    } catch (error) {
       
        if (error.response && error.response.status === 422) {
            // Handle validation errors
            Object.entries(error.response.data.errors).forEach(([key, value]) => {
                toastr.error(value[0]);
                var inputField = $('[name="' + key + '"]').addClass('is-invalid');
            });
        } else {
            // Handle other errors
            toastr.error('An unexpected error occurred. Please try again.');
            serverError = 'An unexpected error occurred. Please try again.';
        }
    }
}
const storeRegister = async () => {
    
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
    });
    
    if(selectedFiles.length > 0) {
        for (let i = 0; i < selectedFiles.length; i++) {
            data.append('documents[]', selectedFiles[i]);
        }
    } else {
        data.append('documents', '');
    }
    
    try {

        $('[name]').removeClass('is-invalid');
        const response = await axiosInstance.post('/registration/store', data);
        
        if (response.data.success) {
        
            formData.step++;
            next();
            resetFormData();
            serverError = ''; // Clear any server error messages

        } else {
            toastr.error('API error:', response.data.error);
            console.error('API error:', response.data.error);
        }
    } catch (error) {
       
        if (error.response && error.response.status === 422) {
            // Handle validation errors
            Object.entries(error.response.data.errors).forEach(([key, value]) => {
                toastr.error(value[0]);
                var inputField = $('[name="' + key + '"]').addClass('is-invalid');
            });
        } else {
            // Handle other errors
            toastr.error('An unexpected error occurred. Please try again.');
            serverError = 'An unexpected error occurred. Please try again.';
        }
    }
}
const next = async () => {
    current_fs = $("#step_"+current);//.parent();
    console.log(current_fs);
    next_fs = $("#step_"+current).next();//.parent()

    $('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');

    next_fs.show();
    current_fs.animate(
        { opacity: 0 },
        {
            step: function (now) {
            opacity = 1 - now;
            current_fs.css({
                display: 'none',
                position: 'relative'
            });
            next_fs.css({ opacity: opacity });
        },
        duration: 500
    });
    setProgressBar(++current);
}
const previous = async () => {
    current_fs = $("#step_"+current);//.parent()
    previous_fs = $("#step_"+current).prev();//.parent()

    $('#progressbar li').eq($('fieldset').index(current_fs)).removeClass('active')

    previous_fs.show()
    current_fs.animate(
    { opacity: 0 },
    {
        step: function (now) {
        opacity = 1 - now
        current_fs.css({
            display: 'none',
            position: 'relative'
        })
        previous_fs.css({ opacity: opacity })
        },
        duration: 500
    });
    formData.step--;
    setProgressBar(--current)
}

const setProgressBar = async (current) => {
    const steps = $('fieldset').length;
    const percent = parseFloat(100 / steps) * current;
    const fixedPercent = percent.toFixed();
    $('.progress-bar').css('width', `${fixedPercent}%`).text((current === 1 ? '0' : fixedPercent) + '%');
}

const resetFormData = async () => {
    formData.step = '1';
    formData.name = '';
    formData.date_of_birth = '';
    formData.email = '';
    formData.phone_number = '';

    formData.preferred_location = '';
    formData.preferred_property_type = '';
    formData.min_bedrooms_needed = '';
    formData.min_bathrooms_needed = '';

    formData.annual_income = '';
    formData.employment_status = '';
    formData.employer_name = '';
    formData.income_type = '';
    formData.rental_budget = '';

    formData.rental_voucher = '';
    formData.voucher_type = '';
    formData.certification_detail = '';
    formData.certification_expiry = '';

    formData.current_address = '';
    formData.moving_reason = '';
    formData.prev_landlord_contact = '';
    formData.lease_violation = '';

    formData.household_size = '';
    formData.number_of_adults = '';
    formData.number_of_child = '';

    formData.has_pets = '';
    formData.pet_type = '';
    formData.number_of_pets = '';
    formData.pet_size = '';
    
    formData.disability = '';
    formData.disability_type = '';
    formData.special_accomodation = '';

    formData.max_rent_to_pay = '';
    formData.preffered_move_in_date = '';
    formData.lease_length_preference = '';

    formData.criminal_record = '';
    formData.legal_right = '';

    formData.reference_name = '';
    formData.reference_relationship = '';
    formData.contact_information = '';

    formData.general_note = '';
    formData.work_with_broker = '';

    formData.documents = '';

    formData.user_name = '';
    formData.user_email = '';
    formData.password = '';
    formData.password_confirmation = '';
    $('[name]').val('');
}

$(document).ready(() => {
    let current_fs, next_fs, previous_fs
    let opacity
    let current = 1;
    const steps = $('fieldset').length;

    setProgressBar(current)

    function setProgressBar(curStep) {
        const percent = parseFloat(100 / steps) * curStep
        const fixedPercent = percent.toFixed()
        $('.progress-bar')
        .css('width', `${fixedPercent}%`)
        .text((curStep === 1 ? '0' : fixedPercent) + '%')
    }
})

$(document).ready(() => {
    // const selectedFiles = []
    $('#file-input').on('change', function (event) {
        const files = event.target.files
        const $imageContainer = $('#image-container')
        $imageContainer.empty() // Clear previous images
        // Add selected files to the selectedFiles array
        for (let i = 0; i < files.length; i++) {
        selectedFiles.push(files[i])
        }
        // Update the display
        displaySelectedFiles()
    })
    function displaySelectedFiles() {
        const $imageContainer = $('#image-container')
        $imageContainer.empty() // Clear previous images
        selectedFiles.forEach((file, index) => {
            const reader = new FileReader()
            reader.onload = function (e) {
                const $imageDiv = $('<div>').addClass('image-item')
                const $image = $('<img>').attr('src', e.target.result)
                $imageDiv.append($image)
                const $fileName = $('<p>').text(file.name)
                $imageDiv.append($fileName)
                const $cancelButton = $('<span>').html('&times;').addClass('cancel-icon')
                $cancelButton.on('click', function () {
                selectedFiles.splice(index, 1)
                displaySelectedFiles()
            })
            $imageDiv.append($cancelButton)
            $imageContainer.append($imageDiv)
        }
        reader.readAsDataURL(file)
        })
    }
})

</script>

<style>
.is-invalid{
    border-color: #ff0000 !important;
}
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

/* ​ .register-overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #013539b8;
} */

​ .user-container {
  border: 1px solid var(--tex-color);
  background: #ffffff;
  border-radius: 10px;
  position: relative;
  z-index: 9;
  border-radius: 20px;
}

​ #heading {
  text-transform: uppercase;
  color: var(--tex-color);
  font-weight: normal;
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
  position: relative;
}

​ .form-card {
  text-align: left;
}

​ #msform fieldset:not(:first-of-type) {
  display: none;
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
  letter-spacing: 1px;
}

​ .form-select,
.form-select option {
  cursor: pointer;
  color: var(--tex-color);
  background-color: transparent;
  font-size: 16px;
  letter-spacing: 1px;
}

​ #msform input:focus,
#msform textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid var(--tex-color);
  outline-width: 0;
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
  float: right;
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
  position: relative;
}

​ .fs-title {
  font-size: 25px;
  color: var(--tex-color);
  margin-bottom: 15px;
  font-weight: normal;
  text-align: left;
}

​ .purple-text {
  color: var(--tex-color);
  font-weight: normal;
}

​ .steps {
  font-size: 25px;
  color: gray;
  margin-bottom: 10px;
  font-weight: normal;
  text-align: right;
}

​ .fieldlabels {
  color: gray;
  text-align: left;
}

​ ​ .progress {
  height: 25px;
}

​ .progress-bar {
  background-color: var(--tex-color);
}

.form-check-input {
  width: 1em !important;
  height: 1em !important;
  margin-top: 0.25em !important;
  vertical-align: top !important;
  background-color: #fff !important;
  background-size: #fff !important;
  border: 1px solid rgba(0, 0, 0, 0.25) !important;
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

@media screen and (max-width: 767px) {
  #progressbar li:before {
    width: 25px !important;
    height: 25px !important;
    line-height: 20px !important;
    font-size: 12px !important;
  }

  #progressbar li:after {
    top: 13px !important;
  }

  #progressbar li {
    font-size: 10px;
    width: 18%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .fs-title {
    font-size: 18px !important;
  }

  .steps {
    font-size: 20px !important;
  }
}

#image-container {
  margin-left: 10%;
  display: flex;
  align-items: center;
}

.upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-upload {
  position: relative;
  display: flex;
}

.image-upload img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border: 1px solid var(--tex-color);
  border-radius: 50px;
}

.image-upload input[type='file'] {
  display: none;
}

.image-upload label {
  position: relative !important;
  width: 70px !important;
  height: 70px !important;
  /* Increased height to accommodate text below */
  border: 1px solid var(--tex-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50px;
}

.image-upload label i {
  font-size: 2rem;
  color: var(--tex-color);
  position: absolute;
}

.image-info {
  display: flex;
  align-items: center;
  justify-content: start;
  width: fit-content;
}

.fit-image {
  width: 100%;
  object-fit: cover;
}

.image-item {
  position: relative !important;
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

.cancel-icon {
  position: absolute !important;
  top: 0px !important;
  right: 0px !important;
  background: red !important;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  padding: 2px 8px;
  font-size: 14px;
}
</style>
