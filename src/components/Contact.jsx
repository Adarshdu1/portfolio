import React, { useRef } from "react";
import { sendEmail } from "./EmailSender";

export default function Contact() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(form);
    form.current.reset();
  };
  return (
    <div className="bg-[#111827] bg-opacity-70">
      <div id="contact" className=" max-w-7xl mx-auto pb-10">
        <div className="text-center text-5xl font-semibold p-10 mb-10 text-white">
          CONTACT ME
        </div>
        <form ref={form} onSubmit={handleSubmit}>
          <div className="flex justify-evenly">
            <div className="flex flex-col space-y-5 items-start justify-start">
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name..."
                id=""
                className="w-[500px] h-10 rounded-lg p-4"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email..."
                id=""
                className="w-[500px] h-10 rounded-lg p-4"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg p-2"
              >
                SEND MESSAGE
              </button>
            </div>
            <div className="">
              <textarea
                className="w-[500px] p-4 rounded-lg "
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Enter your message..."
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
