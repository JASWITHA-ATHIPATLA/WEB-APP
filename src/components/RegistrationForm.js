import React, { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setErrorMsg("");
    setLoading(true);

    try {
      const formBody = new URLSearchParams();
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("message", formData.message);

      const response = await fetch("https://script.google.com/macros/s/AKfycbw78v82SgW7R_f0sy_ck5RR68lOMPzy7aGoG8W-eCQiVCofNuniRuPlxRbcQjrJsQlAmA/exec", { // replace with your Apps Script URL
        method: "POST",
        body: formBody,
      });

      const result = await response.json();
      console.log("Server Response:", result);

      if (result.result === "success") {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMsg("❌ Failed to save data. Try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("❌ Error submitting form. Check console.");
    }

    setLoading(false);
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h3>Register to Explore More</h3>
      {submitted && <p className="success-msg">✅ Submitted successfully!</p>}
      {errorMsg && <p className="error-msg">{errorMsg}</p>}

      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
      <textarea name="message" placeholder="Why are you interested?" value={formData.message} onChange={handleChange} />
      <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
    </form>
  );
}
