import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../managers/AuthManager";
import "./Auth.css";

export const Register = () => {
  const firstName = useRef();
  const lastName = useRef();
  const username = useRef();
  const password = useRef();
  const age = useRef();
  const gradeLevel = useRef();
  const verifyPassword = useRef();
  const passwordDialog = useRef();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        password: password.current.value,
        is_staff: isChecked
      };

      if (!isChecked) {
        newUser.age = age.current.value;
        newUser.grade_level = parseInt(gradeLevel.current.value);
      }

      registerUser(newUser).then((res) => {
        
        
          if ("valid" in res && res.valid && "token" in res) {
            localStorage.setItem("cb_token",JSON.stringify(res))
            navigate("/");
        }
      });
    } else {
      passwordDialog.current.showModal();
    }
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <main style={{ textAlign: "center" }}>
      <dialog className="dialog dialog--password" ref={passwordDialog}>
        <div>Passwords do not match</div>
        <button
          className="button--close"
          onClick={(e) => passwordDialog.current.close()}
        >
          Close
        </button>
      </dialog>

      <form className="form--login" onSubmit={(e)=> handleRegister(e)}>
        <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
        <div>
          <label>
            Staff:
            <input type="checkbox" checked={isChecked} onChange={handleCheck} />
          </label>
          <span>{isChecked ? "Yes" : "No"}</span>
        </div>
        <fieldset>
          <label htmlFor="firstName"> First Name </label>
          <input
            ref={firstName}
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First name"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName"> Last Name </label>
          <input
            ref={lastName}
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last name"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputUsername">Username</label>
          <input
            ref={username}
            type="text"
            name="username"
            className="form-control"
            placeholder="Username"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="inputPassword"> Password </label>
          <input
            ref={password}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="verifyPassword"> Verify Password </label>
          <input
            ref={verifyPassword}
            type="password"
            name="verifyPassword"
            className="form-control"
            placeholder="Verify password"
            required
          />
        </fieldset>

        {!isChecked && (
          <>
            <fieldset>
              <label htmlFor="age"> Age </label>
              <input
                ref={age}
                type="text"
                name="age"
                className="form-control"
                placeholder="Age"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="gradeLevel"> Grade Level </label>
              <select
                ref={gradeLevel}
                name="gradeLevel"
                className="form-control"
                required
              >
                <option value="">Select Grade Level</option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
              </select>
            </fieldset>
          </>
        )}

        <fieldset
          style={{
            textAlign: "center",
          }}
        >
          <button className="btn btn-1 btn-sep icon-send" type="submit">
            Register
          </button>
        </fieldset>
      </form>
      <section className="link--register">
        Already registered? <Link to="/login">Login</Link>
      </section>
    </main>
  );
};
