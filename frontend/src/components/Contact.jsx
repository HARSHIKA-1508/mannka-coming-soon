import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://mannka-coming-soon-ba.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        setResponse("✅ Message sent successfully!");
        setForm({ fullName: "", email: "", mobile: "", message: "" });
      } else {
        const errorMsg =
          data.errors?.map((err) => err.msg).join(", ") || data.error;
        setResponse(`❌ ${errorMsg}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse("❌ Server error. Try again later.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="fullName">
          Full Name
        </label>
        <input
          type="text"
          className="form-input"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="mobile">
          Mobile Number
        </label>
        <input
          type="tel"
          className="form-input"
          id="mobile"
          name="mobile"
          placeholder="Your Contact Number"
          value={form.mobile}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-textarea"
          id="message"
          name="message"
          placeholder="Tell us what you're excited about or any questions you have..."
          value={form.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Send Message
      </button>

      {response && <p className="response-msg">{response}</p>}
    </form>
  );
};

export default Contact;
