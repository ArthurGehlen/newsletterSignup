import CheckInfo from "./components/CheckInfo";
import "./App.css";

const check_texts = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function App() {
  // function to change the main style when the user is on mobile
  function check_window_width() {
    const width = window.innerWidth;
    console.log(width);
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
          <form action={check_window_width}>
            <div className="input_container">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email@company.com"
              />
            </div>
            <button type="submit">Subscribe to monthly newsletter</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;
