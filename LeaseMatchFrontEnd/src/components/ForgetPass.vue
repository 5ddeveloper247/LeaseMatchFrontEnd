<script>
</script>


<template>
    <section class="d-flex align-items-center gap-5 container" id="logon">
        <div class="side d-none d-md-flex align-items-center justify-content-center"
            style="background-image: url('http://127.0.0.1:8000/assets/images/Number-of-Vetted-Renters.JPG')">
            <div class="content text-center">
                <div class="logo">
                    <a href="index.php"
                        style="background-image: url('http://127.0.0.1:8000/assets/images/Number-of-Vetted-Renters.JPG')"></a>
                </div>
                <h1>Reset your password to continue</h1>
                <p>A platform with efficient integration of many features and so much more</p>
            </div>
        </div>
        <div class="contain">
            <div class="flex_row">
                <div class="col">
                    <div class="in_col">
                        <form action="" method="POST">
                            <div class="log_blk">
                                <div class="txt text-center">
                                    <h2>Forgot Password</h2>
                                    <p class="text-dark" >Don’t worry. Just enter the email address you registered with and we’ll email you
                                        instructions to reset your password.</p>
                                </div>
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
                                    <button type="submit" class="site_btn block">Reset Password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>
#logon {
    padding: 10rem 0 5rem 0;
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
    width: 100%;
    padding: 0rem 1rem;
    height: 80vh;
    border-radius: 20px !important;
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

#logon .log_blk {
    position: relative;
    background: #fff;
    padding: 1rem;
    border-radius: 1rem;
    -webkit-box-shadow: 0 0.7rem 1.5rem -0.5rem rgba(8, 1, 28, 0.08), 0 -0.5rem 1rem -0.6rem rgba(8, 1, 28, 0.03);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

#logon .log_blk .txt {
    margin-bottom: 2rem;
}

h2 {
    font-weight: 500;
    line-height: 1.3;
    margin: 0 0 1rem;
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

.row:before {
    display: table;
    content: " ";
}

.form_row>[class*="col-"], .form_row>[class^="col-"] {
    padding: 2rem 0 0 2rem;
}

h6 {
    font-weight: 500;
    line-height: 1.3;
    margin: 0 0 1rem;
}

.form_blk {
    position: relative;
}

.text_box {
    display: block;
    width: 100%;
    background: #fff;
    text-align: left;
    padding: 0.6rem 1.4rem;
    border: 0.1rem solid #b0b0b0;
    border-radius: 0.7rem;
    outline: none !important;
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
}

input, button, select, textarea {
    text-decoration: none !important;
    outline: none !important;
}

.btn_blk.form_btn {
    margin-top: 2rem;
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

.site_btn.block {
    width: 100%;
}

.site_btn {
    background: #0078b9;
    color: #fff;
    font-weight: 500;
    text-align: center;
    padding: .8rem 2rem;
    white-space: nowrap;
    border: 0;
    border-radius: 0.7rem;
}

sup {
    font-size: 16px;
    color: red;
}

</style>