import { useState } from "react";
import Captcha from "./Captcha";

function Form() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  // Generate a random captcha
  function generateCaptcha() {
    return Math.floor(Math.random() * 9000) + 1000; // Generate a 4-digit random number
  }

  // Validate the captcha input value
  function validateCaptcha() {
    return captchaInput === captcha.toString();
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (validateCaptcha()) {
      alert("Captcha passed!"); // Do something with the form data
      event.target.reset(); // Clear the form
      setCaptcha(generateCaptcha()); // Generate a new captcha
      setCaptchaInput(""); // Clear the captcha input field
    } else {
      alert("Captcha failed. Please try again."); // Display an error message
      setCaptcha(generateCaptcha()); // Generate a new captcha
      setCaptchaInput(""); // Clear the captcha input field
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border justify-center shadow-lg p-10"
    >
      <h1 className="text-3xl mb-3">Sign up</h1>
      <label htmlFor="name">Email:</label>
      <input
        placeholder="Email.."
        className="border p-2 border-slate-600"
        type="email"
        id="email"
        name="email"
      />
      <br />
      <label htmlFor="email">Password:</label>
      <input
        placeholder="Password.."
        className="border p-2 border-slate-600"
        type="password"
        id="password"
        name="password"
      />
      <br />
      <Captcha
        setCaptcha={setCaptcha}
        generateCaptcha={generateCaptcha}
        setCaptchaInput={setCaptchaInput}
        validateCaptcha={validateCaptcha}
        captcha={captcha}
        captchaInput={captchaInput}
      />
    </form>
  );
}

export default Form;
