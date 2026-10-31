import yoshi from './assets/yoshi.webp'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={yoshi} className="yoshi" width="170" height="179" alt="Yoshi" />
        </div>
        <div>
          <h1>Project G4: Tekken 8</h1>
          <h3>
            Welcome to the G4 project: <code>Tekken 8 edition</code>
          </h3>
        </div>
        <div className="form-container">
          <h4>Please login to access your account</h4>
          <input type="email" placeholder="Insert email" />
          <br></br>
          <input type="password" placeholder="Insert password" />
          <br></br>
          <button>Login</button>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="spacer">
        <footer>
          <p>© 2026 G4 Project Team</p>
          <br></br>
          <p>
            Project G4 is not affiliated with, endorsed, or sponsored by Bandai Namco Entertainment Inc. or any of its subsidiaries. The views and content on this site do not reflect the views or opinions of Bandai Namco Entertainment Inc. or anyone officially associated with TEKKEN® 8. TEKKEN® and TEKKEN 8 are registered trademarks of Bandai Namco Entertainment Inc.
          </p>
        </footer>
      </section>
    </>
  )
}

export default App
