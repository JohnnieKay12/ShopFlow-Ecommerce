import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.setHeader("Allow", ["POST"]).status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        console.log("Setting up transporter...");
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // Use `true` for port 465, `false` for port 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        console.log("Sending email...");
        const info = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_RECEIVER, // Ensure this is set in your environment variables
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        console.log("Email sent:", info);

        return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        return res.status(500).json({ error: "Failed to send message" });
    }
}
