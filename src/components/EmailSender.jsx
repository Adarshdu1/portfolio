"use client";
import emailjs from "@emailjs/browser";
export const sendEmail = (form) => {
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_SERVICE,
      process.env.NEXT_PUBLIC_TEMPLATE,
      form.current,
      process.env.NEXT_PUBLIC_USER_ID
    )
    .then(
      () => {
        // console.log(result.text);
        alert("Your message has been sent successfully. Thank you!");
      },
      () => {
        // console.log(error.text);
        alert("Sorry, your message could not be sent. Please try again.");
      }
    );
};
