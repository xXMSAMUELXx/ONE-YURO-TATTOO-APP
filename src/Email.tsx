import "./styles/email-styles.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    const currentForm = form.current;

    if (currentForm == null) return;
    emailjs
      .sendForm(
        "service_r9wmobd",
        "template_gs31mbc",
        currentForm,
        "QCLvq8GY6Pjfbbw_8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section>
        <div className="email-container">
          <h2 id="book-apt" className="text-center">
            BOOK YOUR APPOINTMENT.
          </h2>
          <h3 className="book-text">Let us know which tattoo you'd like.</h3>
          <h3 className="book-text">
            If you have a dope idea of your own, lets check it out.
          </h3>
          <h3 className="book-text">
            Tell us which day you'd like to come in & we'll let you know if it's
            chill with us.
          </h3>
          <h3 className="book-text"> We're stoked to see you.</h3>
          <form ref={form} onSubmit={sendEmail} className="form-control">
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea name="message" cols={30} rows={10}></textarea>
            <button type="submit" className="email-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Email;
