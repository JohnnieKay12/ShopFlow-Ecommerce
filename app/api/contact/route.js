export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 });
        }

        // Simulate sending an email (replace with actual email logic)
        console.log("Message received:", { name, email, message });

        return new Response(JSON.stringify({ success: true, message: "Message sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error("Error sending message:", error);
        return new Response(JSON.stringify({ error: "Something went wrong!" }), { status: 500 });
    }
}
