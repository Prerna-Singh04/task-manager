import React from "react";

const SingnUpForm = () => {
  return (
    <div className="registration">
        <h5>Sign Up</h5>
      <form className="registration_form">
          <input type = "string" className="registration_form_input" placeholder="First Name *" value="" required />
          <input type = "string" className="registration_form_input"  placeholder="Last Name (optional) " value="" required/>
          <input type = "string"  className="registration_form_input" placeholder="User Name *" value="" required />
          <input type = "password" className="registration_form_input"  placeholder="Password *" value="" required />
          <input type = "password" className="registration_form_input"  placeholder="Confirm Password *" value="" required />
          <button className="registration_form_submit">Submit</button>

      </form>
    </div>
  );
};
export default SingnUpForm;