import { useEffect, useRef, useState } from "react";
import "./App.css";
import Bubble from "./components/Bubble";
import gsap from "gsap";

function App() {
   const [chatArray, setChatArray] = useState([]);
   const inputRef = useRef(null);
   const bubbleRefs = useRef({});

   function sendMessage() {
      // add chat to chatArray after pressing Enter
      const message = inputRef.current?.textContent.trim();
      if (message) {
         const newMessage = {
            id: Date.now(),
            text: message,
         };
         setChatArray((prev) => [...prev, newMessage]);
         inputRef.current.textContent = ""; // clear input after sending
      }
   }

   useEffect(() => {
      function handleClick() {
         inputRef.current?.focus();
      }

      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
   }, []);

   useEffect(() => {
      inputRef.current?.focus();
      if (chatArray.length === 0) return;

      if (chatArray.length > 6) {
         setChatArray((prev) => prev.slice(1, 7));
      }
      const interval = setInterval(() => {
         const oldest = chatArray[0];
         const el = bubbleRefs.current[oldest.id];
         if (el) {
            gsap.to(el, {
               opacity: 0,
               y: -20,
               duration: 0.5,
               onComplete: () => {
                  setChatArray((prev) => prev.slice(1));
               },
            });
         } else {
            setChatArray((prev) => prev.slice(1));
         }
      }, 3000);

      return () => clearInterval(interval);
   }, [chatArray]);

   return (
      <>
         <div className="flex flex-col-reverse max-w-[450px] min-w-14 h-screen -mt-20">
            <Bubble>
               <span
                  ref={inputRef}
                  role="textbox"
                  contentEditable="true"
                  className="flex min-w-7 outline-none"
                  onKeyDown={(e) => {
                     if (e.key === "Enter") {
                        e.preventDefault();
                        sendMessage();
                     }
                  }}></span>
            </Bubble>
            <div className="flex flex-col">
               {chatArray.map((chat) => (
                  <Bubble
                     key={chat.id}
                     ref={(el) => {
                        if (el) bubbleRefs.current[chat.id] = el;
                     }}>
                     {chat.text}
                  </Bubble>
               ))}
            </div>
            <div className="absolute top-0 h-[390px] w-full bg-[#00ff00]"></div>
         </div>
      </>
   );
}

export default App;
