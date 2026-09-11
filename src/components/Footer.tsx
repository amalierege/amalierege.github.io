export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <img className="asmallonigiri-logo" src="./assets/asmallonigiri-watermark.png" alt="Image of a japanese snack onigiri"/>
      <p>
        &copy; {year} Tamapo Studio
      </p>
    </footer>
  )
}