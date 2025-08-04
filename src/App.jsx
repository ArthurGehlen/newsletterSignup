import { useState } from "react";
import CheckInfo from "./components/CheckInfo";
import "./App.css";

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


  };

  return (
    <>
      <main>
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
    </>
  );
}

export default App;
