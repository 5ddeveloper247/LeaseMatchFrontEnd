<script>
export default {
    mounted() {
        $(document).ready(() => {
            function showStep(step) {
                $(".image-container").hide();
                $(".process-text").hide().removeClass("active");
                $(".line").css("height", "30px");
                $(".rounded-circle").removeClass("active");
                $(".process-heading").removeClass("active");

                $(`.image-container[data-step=${step}]`).show();
                $(`.process-text[data-step=${step}]`).show().addClass("active");
                $(`.line[data-step=${step}]`).css("height", "-webkit-fill-available");
                $(`.rounded-circle[data-step=${step}]`).addClass("active");
                $(`.process-heading[data-step=${step}]`).addClass("active");
            }

            // Show the first step by default
            showStep(1);

            $(".process-heading").hover(function () {
                const step = $(this).data("step");
                showStep(step);
            });
        });
    }
}

</script>



<template>
    <!-- process section -->
    <section class="sec-3">
        <div class="container process my-5">
            <div class="row">
                <h1 class="process-contentt pb-md-5 pb-3 px-lg-4 site-color divide-heading">
                    Renting As Easy As It Gets
                </h1>
                <p class="pb-md-5 pb-3 px-lg-4 site-color margin">LeaseMatch.NYC simplifies your apartment hunt, by
                    making it
                    as simple as 1-2-3!</p>
                <div class="row">
                    <div class="col-md-7 col-12">

                        <div id="step-1" class="d-flex left-content-process " data-step="1"
                            style="margin:10px 20px 10px 12px">
                            <div class="d-flex flex-column pr-4 align-items-center">
                                <div class="rounded-circle d-flex justify-content-center py-2 px-3 mb-1 process-step active"
                                    data-step="1">1</div>
                                <div class="line active" data-step="1"></div>
                            </div>
                            <div>
                                <h5 class="process-heading active" data-step="1">Start Your Application</h5>
                                <p class="text-dark lead process-text active" data-step="1">
                                    Begin your journey to the perfect New York City home by signing up and completing
                                    our detailed application. This is the first step in letting us know exactly what
                                    you're looking for.
                                </p>
                            </div>
                        </div>
                        <div id="step-2" class="div2 d-flex left-content-process" data-step="2"
                            style="margin:10px 20px 10px 12px">
                            <div class="d-flex flex-column pr-4 align-items-center">
                                <div class="rounded-circle d-flex justify-content-center py-2 px-3 mb-1 process-step"
                                    data-step="2">2</div>
                                <div class="line" data-step="2"></div>
                            </div>
                            <div>
                                <h5 class="process-heading" data-step="2">Choose Your Plan</h5>
                                <p class="text-dark lead process-text" data-step="2">
                                    After filling out the application, select the plan that suits you best. With options
                                    tailored to different needs, you'll find one that aligns with your housing search.
                                </p>
                            </div>
                        </div>
                        <div id="step-3" class="div3 d-flex left-content-process" data-step="3"
                            style="margin:10px 20px 10px 12px">
                            <div class="d-flex flex-column pr-4 align-items-center">
                                <div class="rounded-circle d-flex justify-content-center py-2 px-3 mb-1 process-step"
                                    data-step="3">3</div>
                                <div class="line" data-step="3"></div>
                            </div>
                            <div>
                                <h5 class="process-heading" data-step="3">Let Our AI Work for You</h5>
                                <p class="text-dark lead process-text" data-step="3">
                                    Once you've chosen your plan, relax and let our advanced AI take over. Our system
                                    specializes in tenant matching, connecting you with the finest landlords and their
                                    available units, based on your specific needs and preferences.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-5 main-div-2 pe-0 me-0 ps-4 ps-md-0 ms-1 ms-md-0">
                        <div class="d-flex flex-column align-items-center">
                            <!-- Images -->
                            <div class="image-container" data-step="1" style="display: block;">
                                <img class="img-fluid process-image" src="../assets/images/renting_as_easy.jpg">
                            </div>
                            <div class="image-container" data-step="2" style="display: none;">
                                <img class="img-fluid process-image " src="../assets/images/start_application.jpg">
                            </div>
                            <div class="image-container" data-step="3" style="display: none;">
                                <img class="img-fluid process-image" src="../assets/images/choose_plan.jpg">
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- section 4 -->
    <section class="sec-4 image-banner mb-5">
        <div class="container">
            <!-- <div class="quality-content-h text-white star-bg pt-5 process-contentt px-lg-5 px-2">
            <h1 class="text-capitalize display-lg-4 font-weight-normal pt-md-5 text-white">
                Get Started with Lease Match <br>as a Renter or Landlord
            </h1>
        </div> -->
            <div class="row mx-lg-5 mt-md-5 mb-md-5 py-3 justify-content-center space">

                <div class="col-md-6 col-lg-6 mt-5  mb-1 d-flex">
                    <div class="quality-content text-capitalize px-lg-5 px-2 py-lg-4 py-2 card-equal-height">
                        <div class="card-body quality-content1 text-white h-100 d-flex flex-column">
                            <!-- <h5 class="mb-3" style="font-weight: bold; font-style: italic;">Ensure production quality
                                with</h5> -->
                            <h1 class="mb-3 text-center">I am a <span
                                    class="quality-transform2 font-weight">R</span>enter</h1>
                            <p class="mb-3 text-center "
                                style="font-weight: bold; font-style: italic;text-align: justify;">Discover your ideal
                                New York
                                apartment effortlessly. Our cutting-edge AI
                                analyzes your preferences to match you with vetted, available listings—simplifying your
                                search with a single click.</p>
                            <div class="mt-auto d-flex text-white align-items-center justify-content-center"
                                style="gap: 15px;">
                                <RouterLink to="/registerForm" class="quality-icon">Renter Portal</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-md-6 col-lg-6 mt-3 mt-md-5  mb-1 d-flex">
                    <div class="quality-content text-capitalize px-lg-5 px-2 py-lg-4 py-2 card-equal-height">
                        <div class="card-body quality-content2 text-white h-100 d-flex flex-column">
                            <!-- <h5 class="mb-3" style="font-weight: bold; font-style: italic;">Ensure production quality
                                with</h5> -->
                            <h1 class="mb-3 text-center">I am a <span
                                    class="quality-transform1 font-weight">L</span>andLord</h1>
                            <p class="mb-3 text-center"
                                style="font-weight: bold; font-style: italic; text-align: justify;">
                                Submit the landlord form, and let our AI match you with New York’s only
                                accurate and vetted list of viable renters, doing the work for you.
                            </p>

                            <div class="mt-auto d-flex text-white align-items-center justify-content-center"
                                style="gap: 15px;">
                                <RouterLink to="/landlord" class="quality-icon">LandLord Portal</RouterLink>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>

</template>
<style scoped>
.margin {
    margin-top: -11%;
}

@media (max-width: 320px) {
    .margin {
        margin-top: -26%;
    }

    .space {
        padding-top: 0rem !important;
        padding-bottom: 3rem !important;
    }
}

@media (min-width: 375px) {
    .space {
        padding-top: 0rem !important;
        padding-bottom: 3rem !important;
    }
}
</style>
