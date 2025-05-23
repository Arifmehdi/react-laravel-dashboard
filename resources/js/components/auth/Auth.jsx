 import {Link} from 'react-router-dom';
 import React, {useEffect} from 'react';
 import $ from 'jquery';

 function Auth(){
    useEffect(() => {
        $('#loginForm').submit(function(e){
            e.preventDefault();
            $.ajax({
                url: 'login',
                type: 'Post',
                data: $(this).serialize(),
                dataType: 'json',
                success: function(res){
                    if(res.message == 'success'){
                        window.location.href = `${window.baseUrl}/dashboard`;
                    }
                }

            });
        });
    },[]);
    return (
        <main>
        <div className="container">
            <section
                className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="d-flex justify-content-center py-4">
                                <a href="#" className="logo d-flex align-items-center w-auto">
                                    <img src="assets/image/logo.png" alt="" />
                                    <span className="d-none d-lg-block">Best Dream Car</span>
                                </a>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="pt-4 pb-2">
                                        <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                        <p className="text-center small">Enter your email & password to login</p>
                                    </div>
                                    <form className="row g-3 needs-validation" id="loginForm" method="post">
                                        <div className="col-12">
                                            <label htmlFor="yourEmail" className="form-label">Email</label>
                                            <div className="input-group has-validation">
                                                <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                <input type="text" name="email" className="form-control"
                                                    id="yourEmail" required />
                                                <div className="invalid-feedback">Please enter your Email.</div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="yourPassword" className="form-label">Password</label>
                                            <input type="password" name="password" className="form-control"
                                                id="yourPassword" required />
                                            <div className="invalid-feedback">Please enter your password!</div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember"
                                                    value="true" id="rememberMe" />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100" type="submit">Login</button>
                                        </div>
                                        <div className="col-12">
                                            <p className="small mb-0">Don't have account? <a href="#">Create an
                                                    account</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="credits">
                                Designed by <Link to="/">Best Dream Car</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>
    );
}

export default Auth;
