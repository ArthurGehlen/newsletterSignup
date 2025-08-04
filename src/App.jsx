import { useState } from "react";
import CheckInfo from "./components/CheckInfo";
import "./App.css";

const check_texts = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function App() {
  const [emailError, setEmailError] = useState(false)

  function handle_submit(e) {
    e.preventDefault();
  }

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
          <form action={handle_submit}>
            <div className="input_container">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@company.com"
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
