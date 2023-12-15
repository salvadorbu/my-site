import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/email",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send email.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center top-0 p-4">
        <h1 className="text-5xl text-periwinkle py-2">Contact Me</h1>
      </div>
      <div className="flex justify-center py-10">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                style={{
                  fontFamily: "futura",
                  fontSize: "22px",
                }}
                type="text"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                style={{
                  fontFamily: "futura",
                  fontSize: "22px",
                }}
                type="email"
                placeholder="Your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                style={{
                  fontFamily: "futura",
                  fontSize: "18px",
                }}
                rows="5"
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full px-3 flex justify-center">
    <button
      className="bg-stone-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <FontAwesomeIcon icon={icon({ name: "spinner", style: "solid" })} spin className="mr-2" />
          Sending...
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={icon({ name: "paper-plane", style: "solid" })} className="mr-2" />
          Send
        </>
      )}
    </button>
  </div>
</div>
        </form>
      </div>
    </>
  );
};

export default Contact;
