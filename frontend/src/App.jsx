import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const imageItems = [
  { src: heroImg, alt: 'Gradient hero shape', title: 'Hero Image' },
  { src: reactLogo, alt: 'React logo', title: 'React Logo' },
  { src: viteLogo, alt: 'Vite logo', title: 'Vite Logo' },
]

function App() {
  return (
    <main className="gallery-page">
      <header>
        <h1>Image Gallery</h1>
        <p>React page for the provided images.</p>
      </header>
      <section className="gallery-grid" aria-label="Image list">
        {imageItems.map((item) => (
          <article key={item.title} className="gallery-card">
            <img src={item.src} alt={item.alt} />
            <h2>{item.title}</h2>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
