import React, { useState, useEffect, useRef } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerInitiate, setErrorEmpty } from "../redux/actions";
import { FaCheck, FaTimes, FaInfoCircle, FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa'

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Register = ({ setLogoutUser }) => {

  const userRef = useRef();
  const errRef = useRef();


  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);



  const [password, setPassword] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  let history = useHistory();
  let dispatch = useDispatch();

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const { user, error } = useSelector(state => state.auth);


  useEffect(() => {
    dispatch(setErrorEmpty());
    if (user, errMsg) {
      history.push("/");
    }
  }, [user, errMsg])


  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(user);
    setValidEmail(result);
  }, [email])

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPwd(result);
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd])


  useEffect(() => {
    setErrMsg('');
  }, [email, password, matchPwd])

  //  useEffect(() => {
  //   userRef.current.focus();
  //  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
    const v2 = PWD_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    else {
      if (dispatch(registerInitiate(email, password))) {
        history.push('/')
      }
    }
  };
  return (
    <>
      {success ? (
        <div>
          <h1>Suman</h1>
          <Link to='/'>Sign In</Link>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '6rem' }}>
              <div className="text-left pl-2 ml-5">
                <h4 className="">Register</h4>
                <p>Don't have an account <Link to='/'>Create your account</Link> it takes less then a minute</p>
              </div>
              <div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <form className="form" onSubmit={handleSubmit}>
                  {/* ------------------------Email----------------------- */}
                  <div className="form-group">
                    <label htmlFor="email">Email:
                      <span className={validEmail ? "valid" : "hide"}>
                        <b><FaCheck /></b>
                      </span>
                      <span className={validEmail || !email ? "hide" : "invalid"}>
                        <b><FaTimes /></b>
                      </span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailnote"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={validEmail ? "false" : "true"}
                      aria-describedby="emailnote"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      required
                    />
                    <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                      <span><FaInfoCircle /></span>
                      Email is wrong.
                    </p>
                  </div>
                  {/* ---------------------Password---------------------- */}
                  <div className="form-group">
                    <label htmlFor="password">Password
                      <span className={validPwd ? "valid" : "hide"}>
                        <b><FaCheck /></b>
                      </span>
                      <span className={validPwd || !password ? "hide" : "invalid"}>
                        <b><FaTimes /></b>
                      </span>
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      required
                    />
                    <p id="pwdnote" className={pwdFocus && password && !validPwd ? "instructions" : "offscreen"}>
                      <span><FaInfoCircle /></span>
                      8 to 24 characters. <br />
                      must include uppercase and lowercase letters, a number and a special character.<br />
                      Allowed special characters: <span aria-label='exclamation mark'>!</span>
                      <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span>
                      <span aria-label='dollar sign'>$</span>
                      <span aria-label='percent'>%</span>
                    </p>
                  </div>
                  {/* --------------------------Repeat Pasword-------------------------- */}
                  <div className="form-group">
                    <label htmlFor='confirm_pwd'>Repeat password
                      <span className={validMatch && matchPwd ? "valid" : "hide"}>
                        <b><FaCheck /></b>
                      </span>
                      <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                        <b><FaTimes /></b>
                      </span>
                    </label>
                    <input
                      type="password"
                      id="confirm_pwd"
                      className="form-control"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    />
                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                      <span><FaInfoCircle /></span>
                      Password didn't match.
                    </p>
                  </div>
                  <button className='btn-success btn shadow' disabled={!validEmail || !validPwd || !validMatch ? true : false} style={{borderRadius:'30px'}}>Sign Up</button>
                </form>
                <p className="p-0 m-0">Already have an account then please <Link to="/login">Login</Link></p>
                <p className="p-0 m-0">Or</p>
                <p className="">Continue with</p>
                <div className="d-flex" style={{justifyContent:'space-evenly'}}>
                  <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <button className="btn facebook"><span className="social-icon"><FaFacebookF size='1.5em' color="#4267B2" style={{ zIndex: '1' }} /></span></button>
                    <span className="pt-1">facebook</span>
                  </div>
                  <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <button className="btn google"><span className="social-icon"><FaGooglePlusG size='1.5em' color="#4285F4" style={{ zIndex: '1' }} /></span></button>
                    <span className="pt-1">Google</span>
                  </div>
                  <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <button className="btn twitter"><span className="social-icon"><FaTwitter size='1.5em' color="	#1DA1F2" style={{ zIndex: '1' }} /></span></button>
                    <span className="pt-1">Twitter</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
