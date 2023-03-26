import React from "react";

const Captcha = ({
  setCaptcha,
  generateCaptcha,
  setCaptchaInput,
  validateCaptcha,
  captcha,
  captchaInput,
}) => {
  // Handle captcha input changes
  function handleInputChange(event) {
    setCaptchaInput(event.target.value);
  }

  // Handle captcha refresh button click
  function handleRefreshClick() {
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
          height: "50px",
          backgroundColor: "#eee",
        }}
      >
        <span
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            margin: "0 10px",
            cursor: "pointer",
            backgroundColor: validateCaptcha() ? "green" : "red",
          }}
          onClick={handleRefreshClick}
        >
          {captcha}
        </span>
        <button type="button" onClick={handleRefreshClick}>
          Refresh
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          id="captcha-input"
          name="captcha-input"
          value={captchaInput}
          className="border border-slate-600 p-2"
          onChange={handleInputChange}
          placeholder="Please enter a captcha"
        />
        <button className="bg-blue-500 p-1 text-white rounded-lg" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Captcha;
