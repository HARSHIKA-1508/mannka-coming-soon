const Contact = require("../models/Contact");

exports.handleContactForm = async (req, res) => {
  const { fullName, email, mobile, message } = req.body;

  // ✅ Basic manual validation
  if (!fullName || !email || !mobile || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const contact = new Contact({ fullName, email, mobile, message });
    await contact.save();
    console.log("✅ Contact saved to DB:", contact);
    return res.status(200).json({ success: "Message saved successfully!" });
  } catch (err) {
    console.error("❌ DB Save Error:", err.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
