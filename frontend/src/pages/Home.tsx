import yoshi from '../assets/yoshi.webp'

function Home() {
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
    
    </>

  );
}

export default Home;