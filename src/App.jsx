import React from 'react'

const PRODUCTS = [
  {
    id: 1,
    name: "Boston Red Sox World Series",
    price: "₡18,500",
    description: "Gorra premium negra con bordado World Series y logo clásico.",
    image: "/images/cap1.png"
  },
  {
    id: 2,
    name: "Amiri Drip Edition",
    price: "₡22,000",
    description: "Estilo urbano con logo Amiri en efecto pintura goteada multicolor.",
    image: "/images/cap2.png"
  },
  {
    id: 3,
    name: "Chicago Sox 2020 Edition",
    price: "₡19,500",
    description: "Combinación elegante crema y negro con parche conmemorativo 2020.",
    image: "/images/cap3.png"
  },
  {
    id: 4,
    name: "Boston Celtics Classic",
    price: "₡18,500",
    description: "Diseño bicolor crema y verde con el logo icónico de los Celtics.",
    image: "/images/cap4.png"
  }
]

function App() {
  const whatsappNumber = "50671764417"

  const handleConsult = (productName) => {
    const message = encodeURIComponent(`Hola! Me interesa consultar por la gorra: ${productName}`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="logo">Caps <span>Osvi</span></div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="badge-hero">STREETWEAR ELITE</div>
            <h1>THE CROWN <br/>YOU DESERVE</h1>
            <p>No es solo una gorra, es tu identidad. Elevamos el estándar del estilo urbano con piezas exclusivas diseñadas para destacar.</p>
          </div>
        </section>

        <section className="products">
          <div className="container">
            <div className="grid">
              {PRODUCTS.map(product => (
                <div key={product.id} className="card">
                  <div className="exclusive-badge">NEW ARRIVAL</div>
                  <div className="card-img-wrapper">
                    <img src={product.image} alt={product.name} className="card-img" />
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="card-footer">
                    <span className="price">{product.price}</span>
                    <button 
                      className="btn" 
                      onClick={() => handleConsult(product.name)}
                    >
                      Consultar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-info">
            <p>© 2026 Caps Osvi. Todos los derechos reservados.</p>
            <p>Cartago, Costa Rica</p>
          </div>
          <p>
            ¿Tienes dudas? Escríbenos al <a href={`https://wa.me/${whatsappNumber}`} className="whatsapp-link">+506 7176 4417</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
