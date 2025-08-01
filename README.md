🔥 Bubble Overlay Chat (with GSAP)
A React app that allows users to type floating chat bubbles over a video background (like YouTube or stream content). This project is designed for silent communication — users type messages that appear briefly on the screen and auto-fade like a one-way live chat overlay.

✨ Features
🫧 Animated chat bubbles (powered by GSAP)

🧠 Auto-deletes oldest message every 10 seconds

✍️ Input stays focused and resumes from the end

🔄 flex-col-reverse layout for natural bubble stacking

⛔ Chat container restricted to half the screen height

🎥 Designed to overlay with video content (e.g., YouTube embeds)

📸 Demo
(Include a screen recording or screenshot here if available)

🚀 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/bubble-chat-overlay.git
cd bubble-chat-overlay
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the app
bash
Copy
Edit
npm run dev # or npm start
Then open http://localhost:5173 (or whatever port your dev server uses).

🧠 How It Works
A contentEditable span lets users type directly into a styled chat bubble.

Pressing Enter adds the message to the screen.

Messages are stored in chatArray state.

Every 10 seconds, the oldest message animates and is removed using gsap.

The container uses flex-col-reverse to keep the input at the bottom and messages above it.

📁 File Structure
cpp
Copy
Edit
src/
├── components/
│   └── Bubble.jsx         // Reusable bubble component
├── App.jsx                // Main app logic with GSAP animation
├── App.css                // Tailwind and layout styles
🔧 Tech Stack
React

Tailwind CSS

GSAP (GreenSock Animation Platform)

📦 Use Case
Use this overlay in silent recordings, vlogs, tutorials, or video content where the speaker cannot talk but still wants to communicate casually — just type, and messages float on-screen like a one-way conversation.

You can position the chat overlay above any video using CSS positioning or by embedding this component as an overlay layer.
