<template>
    <section class="container d-flex align-items-center" id="logon">
        <div class="side d-none d-md-flex "
            style="background-image: url('http://127.0.0.1:8000/assets/images/Number-of-Vetted-Renters.JPG');">
            <div class="content text-center">
                <h1>Please enter the OTP to continue</h1>
                <p>A platform with efficient integration of many features and so much more</p>
            </div>
        </div>
        <div class="contain">
            <div class="flex_row">
                <div class="col">
                    <div class="in_col">
                        <form action="#" method="POST">
                            <div class="log_blk">
                                <div class="txt text-center">
                                    <h2>Verification Code</h2>
                                    <p class="text-dark">Please enter the OTP sent to email
                                        <strong>sample@gmail.com</strong> <br> <a href="javascript:void(0)"
                                            class="pop_btn" data-popup="email">Change
                                            Email</a></p>
                                </div>
                                <div class="form_row row">
                                    <div class="col-xs-12">
                                        <div class="form_blk otp_blk d-flex ps-4 text-center">
                                            <input type="text" name="" id="" class="text_box" placeholder="0">
                                            <input type="text" name="" id="" class="text_box" placeholder="0">
                                            <input type="text" name="" id="" class="text_box" placeholder="0">
                                            <input type="text" name="" id="" class="text_box" placeholder="0">
                                            <input type="text" name="" id="" class="text_box" placeholder="0">
                                        </div>
                                    </div>
                                </div>
                                <div class="btn_blk form_btn form_blk">
                                    <button @click="goToForgetPassword" type="submit" class="site_btn block">Verify
                                    </button>
                                </div>
                                <p class="text-center text-dark ">Not received your code? <a href="?">Resend code</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="popup sm" data-popup="email">
            <div class="table_dv">
                <div class="table_cell">
                    <div class="contain">
                        <div class="_inner">
                            <div class="x_btn"></div>
                            <h4>Change your email address</h4>
                            <form action="" method="POST">
                                <div class="form_row row">
                                    <div class="col-xs-12">
                                        <h6>Email Address<sup>*</sup></h6>
                                        <div class="form_blk">
                                            <input type="text" name="" id="" class="text_box"
                                                placeholder="eg: sample@gmail.com">
                                        </div>
                                    </div>
                                </div>
                                <div class="btn_blk form_btn">
                                    <button type="submit" class="site_btn block">Change Email</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToForgetPassword = () => {
    router.push({path: '/forgetPassword'})
}
</script>



<style scoped>
#logon {
    padding: 5rem 0 5rem 0;
}

#logon .side {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 82vh;
    width: 100%;
    border-radius: 20px;
}

#logon .side::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: .9;
    z-index: 1;
    border-radius: 20px;
    width: 100%;
}

#logon .side .content {
    position: relative;
    width: 100%;
    max-width: 40rem;
    color: #fff;
    margin: auto;
    z-index: 2;
}

#logon .side .logo {
    margin: 0 auto 2rem;
}

.logo {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    width: 100%;
    max-width: 20rem;
    height: 4.4rem;
}

h1 {
    font-weight: 500;
    line-height: 1.3;
    margin: 0 0 1rem;
    font-size: 2rem
}

.contain {
    position: relative;
    max-width: 120rem;
    padding: 0 1.5rem;
    margin: 0 auto;
    min-height: 0.1rem;
}

.contain:before {
    content: "";
    display: table;
}

:after,
:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

#logon .flex_row {
    width: auto;
    min-height: 100vh;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 4rem 0;
    margin: 0;
}

.flex_row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap;
    flex-flow: wrap;
    width: calc(100% + 3rem);
    margin: -1.5rem;
}

.contain:after {
    clear: both;
}

.contain:before {
    content: "";
    display: table;
}

:after,
:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.flex_row>.col {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    /* padding: 1.5rem; */
}

.flex_row>.col>div {
    width: 100%;
}

#logon .log_blk {
    position: relative;
    background: #fff;
    padding: 1.5rem;
    border-radius: 1rem;
    -webkit-box-shadow: 0 0.7rem 1.5rem -0.5rem rgba(8, 1, 28, 0.08), 0 -0.5rem 1rem -0.6rem rgba(8, 1, 28, 0.03);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

#logon .log_blk .txt {
    margin-bottom: 2rem;
}

.form_row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap;
    flex-flow: wrap;
    /* margin: -2rem 0 0 -2rem; */
    /* width: calc(100% + 2rem); */
}

.form_blk:not(:nth-last-child(1)) {
    margin-bottom: 2rem;
}

.btn_blk.form_btn {
    margin-top: 2rem;
}

.form_blk {
    position: relative;
}

input {
    width: 15%;
    border: none;
    border-bottom: 1px solid #000;
    margin: .5rem .6rem;
    text-align: center;
}

.btn_blk {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap;
    flex-flow: wrap;
    gap: 1.5rem;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    background: rgba(25, 33, 37, 0.95);
    padding: 0;
    overflow: auto;
    z-index: 101;
}

.popup>.table_dv {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap;
    flex-flow: wrap;
    width: 100%;
    height: 100%;
}

.table_dv {
    display: table;
    width: 100%;
    height: 100%;
}

.popup>.table_dv>.table_cell {
    display: block;
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    width: 100%;
    padding: 2rem 0;
}

.table_dv .table_cell {
    display: table-cell;
    vertical-align: middle;
}

.contain {
    position: relative;
    max-width: 120rem;
    padding: 0 1.5rem;
    margin: 0 auto;
    min-height: 0.1rem;
}

.popup.sm ._inner {
    max-width: 42rem;
}

.popup ._inner {
    position: relative;
    max-width: 60rem;
    background: #fff;
    padding: 2rem;
    margin: auto;
    border-radius: 1rem;
    -webkit-box-shadow: 0 0.7rem 1.5rem -0.5rem rgba(8, 1, 28, 0.08), 0 -0.5rem 1rem -0.6rem rgba(8, 1, 28, 0.03);
    box-shadow: 0 0.7rem 1.5rem -0.5rem rgba(8, 1, 28, 0.08), 0 -0.5rem 1rem -0.6rem rgba(8, 1, 28, 0.03);
}

.x_btn:not(.site_btn) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.4rem;
    height: 2.4rem;
    background: #08011c;
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0;
    text-align: center;
    border: 0;
    border-radius: 75%;
    cursor: pointer;
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
    z-index: 5;
}

.form_row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-flow: wrap;
    flex-flow: wrap;
    margin: -2rem 0 0 -2rem;
    width: calc(100% + 2rem);
}

.btn_blk.form_btn {
    margin-top: 2rem;
}

.site_btn.block {
    width: 100%;
}

.site_btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    position: relative;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    gap: 0 1rem;
    height: 2.6rem;
    background: #0078b9;
    color: #fff;
    font-weight: 500;
    text-align: center;
    padding: 0 2.5rem;
    white-space: nowrap;
    border: 0;
    border-radius: 0.7rem;
    outline: none !important;
    -webkit-box-shadow: 0 1rem 4rem -0.3rem rgba(8, 1, 28, 0.1);
    box-shadow: 0 1rem 4rem -0.3rem rgba(8, 1, 28, 0.1);
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
}
</style>