import { useState } from "react";
import CheckInfo from "./components/CheckInfo";
import "./App.css";
import icon_success from "./assets/images/icon-success.svg";

const check_texts = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const check_email_errors = () => {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !regex.test(email)) {
      setEmailError(true);
      return;
    }
    else {
      setEmailError(false);
    }
  };

  const handle_submit = (e) => {
    e.preventDefault();

    check_email_errors();

    document.getElementById("main").style.display = "none";
    document.getElementById("response").style.display = "flex";
  };

  const handle_dismiss = () => {
    document.getElementById("main").style.display = "flex";
    document.getElementById("response").style.display = "none";
  }

  return (
    <>
      <main id="main">
        <section className="image_section"></section>
        <section className="infos_section">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="checkers_container">
            {check_texts.map((content, index) => [
              <CheckInfo key={index} text={content} />,
            ])}
          </div>
          <form onSubmit={handle_submit}>
            <div className="input_container">
              <div className="label_container">
                <label htmlFor="email">Email address</label>
                {emailError && 
                  <label className="error_label" htmlFor="email">Valid email required</label>
                }
              </div>
              <input
                className={emailError ? "input_error" : ""}
                type="text"
                name="email"
                placeholder="email@company.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input type="submit" value="Subscribe to monthly newsletter" />
          </form>
        </section>
      </main>

      <div id="response">
        <img src={icon_success} alt="Success" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your sbscription.
        </p>
        <button onClick={handle_dismiss}>Dismiss message</button>
      </div>
    </>
  );
}

export default App;
