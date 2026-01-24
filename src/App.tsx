import './App.css'

function App() {
  return (
    <>
      <h1>Tamapo</h1>
      <div>
        <p className="welcomeMessage">
          it's so nice of you to stop by
          <br/>
          this website is currently under development
          <br/><br/>
          come back soon! :3
        </p>
      </div>
      <footer>
        {footer()}
      </footer>
    </>
  )
}

function footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <img className="dangoImage" src="/public/assets/dango.png" alt="Image of a japanese sweet Dango"/>
      <p>
        <a className="iconAttribute" href="https://www.flaticon.com/free-icons/japan" title="japan icons">Japan Icons created by Freepik - Flaticon</a>
      </p>
      <p>
        &copy; {year} Tamapo Studio
      </p>
    </footer>
  )
}

export default App
