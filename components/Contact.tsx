"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) {
      toast.error("Form not found. Please refresh the page.");
      return;
    }

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    if (!name || !email || !subject || !message) {
      toast.error("All fields are required.");
      return;
    }

    try {
      await emailjs.sendForm(
        "service_0n0owbl",
        "template_8sjexcd",
        form,
        "wZfOnCPF6L6o6Cyvx"
      );
      toast.success("✅ Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("❌ Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. Contact Us
      </p>
      <h2 className="font-titleFont text-5xl font-semibold text-white">
        Get In Touch
      </h2>
      <p className="max-w-[600px] text-center text-textDark">
        Feel free to reach out by filling the form below. We’ll get back to you
        as soon as possible!
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full max-w-[500px] mt-8 flex flex-col gap-5"
        noValidate
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full h-12 px-4 rounded-md border border-gray-600 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-textGreen"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full h-12 px-4 rounded-md border border-gray-600 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-textGreen"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full h-12 px-4 rounded-md border border-gray-600 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-textGreen"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:border-textGreen"
        ></textarea>

        <button
          type="submit"
          className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"
        >
          Send Message
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
};

export default Contact;
