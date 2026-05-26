import React, { useState } from 'react'

const PRODUCTS = [
  {
    id: 1,
    name: "Chicago Sox Retro",
    price: "₡12,000",
    description: "Crema y negro. El diseño clásico de Chicago Sox para complementar tu outfit urbano.",
    image: "/images/cap_new1.png"
  },
  {
    id: 2,
    name: "Amiri Bones Black",
    price: "₡12,000",
    description: "Negro y dorado con bordado de huesos Amiri en relieve. Estilo exclusivo de alta gama.",
    image: "/images/cap_new2.png"
  },
  {
    id: 3,
    name: "New York Yankees Chocolate",
    price: "₡12,000",
    description: "Crema y marrón. La elegancia otoñal perfecta con el bordado icónico de la gran manzana.",
    image: "/images/cap_new3.png"
  },
  {
    id: 4,
    name: "New York Yankees Crimson",
    price: "₡12,000",
    description: "Rojo encendido con visera y detalles en blanco puro. Estilo deportivo y vibrante.",
    image: "/images/cap_new4.png"
  },
  {
    id: 5,
    name: "Los Angeles Dodgers Royal",
    price: "₡12,000",
    description: "Crema y azul marino. La corona de LA para lucir con máxima presencia streetwear.",
    image: "/images/cap_new5.png"
  },
  {
    id: 6,
    name: "Boston Celtics Shamrock",
    price: "₡12,000",
    description: "Crema y verde. Clásico diseño de los Celtics con el trébol y duendecillo icónico.",
    image: "/images/cap_new6.png"
  },
  {
    id: 7,
    name: "Los Angeles Lakers Desert Gold",
    price: "₡12,000",
    description: "Crema monocromático con logo sutil de los Lakers bordado en tono desierto elegante.",
    image: "/images/cap_new7.png"
  },
  {
    id: 8,
    name: "Chicago Sox Gold Accent",
    price: "₡12,000",
    description: "Negro y marrón claro con el logo de Chicago Sox bordado en hilo dorado premium.",
    image: "/images/cap_new8.png"
  },
  {
    id: 9,
    name: "Oakland Athletics Classic",
    price: "₡12,000",
    description: "Crema y verde oscuro con logo clásico 'A's' de Oakland bordado en relieve.",
    image: "/images/cap_new9.png"
  }
]

const WATCHES = [
  {
    id: 1,
    name: "Rolex Submariner Sunset",
    price: "₡25,000",
    description: "Esfera naranja degradada con bisel topográfico negro y naranja exclusivo.",
    image: "/images/watch1.jpg"
  },
  {
    id: 2,
    name: "Rolex Day-Date Gold",
    price: "₡25,000",
    description: "Oro de 18 quilates con esfera dorada cepillada y bisel estriado clásico.",
    image: "/images/watch2.jpg"
  },
  {
    id: 3,
    name: "Rolex Day-Date Ice Blue",
    price: "₡25,000",
    description: "Acero pulido de alta calidad con esfera azul glaciar y números romanos.",
    image: "/images/watch3.jpg"
  },
  {
    id: 4,
    name: "Rolex Submariner Hulk Gold",
    price: "₡25,000",
    description: "Oro amarillo de lujo con esfera verde esmeralda y bisel topográfico premium.",
    image: "/images/watch4.jpg"
  }
]

const COMBOS = [
  {
    id: 1,
    name: "Combo Dúo Urbano",
    priceOriginal: "₡24,000",
    priceCombo: "₡20,000",
    description: "Une el estilo retro clásico de Chicago Sox con los emblemáticos detalles de Amiri Bones. Un dúo urbano insuperable.",
    caps: [1, 2],
    discount: "Ahorra ₡4,000"
  },
  {
    id: 2,
    name: "Combo Champions Pack",
    priceOriginal: "₡24,000",
    priceCombo: "₡20,000",
    description: "Llévate la vibra ganadora a donde vayas. Combina la corona de los Boston Celtics Shamrock y los Lakers Desert Gold.",
    caps: [6, 7],
    discount: "Ahorra ₡4,000"
  },
  {
    id: 3,
    name: "Triple Pack Street Elite",
    priceOriginal: "₡36,000",
    priceCombo: "₡29,900",
    description: "La mejor selección para tu rotación semanal. Combina Chicago Sox Gold Accent, Oakland Athletics y Yankees Chocolate.",
    caps: [8, 9, 3],
    discount: "Ahorra ₡6,100"
  }
]

function App() {
  const whatsappNumber = "50671764417"

  // Carousel States
  const [capIndex, setCapIndex] = useState(0)
  const [watchIndex, setWatchIndex] = useState(0)

  // Combo Selection State (Default to first combo)
  const [selectedComboId, setSelectedComboId] = useState(COMBOS[0].id)

  const handleConsult = (productName) => {
    const message = encodeURIComponent(`Hola! Me interesa consultar por el producto: ${productName}`)
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleConsultCombo = (combo) => {
    const message = encodeURIComponent(
      `Hola! Me interesa ordenar el *${combo.name}* (Precio especial: ${combo.priceCombo}, antes ${combo.priceOriginal}).`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  // Carousel controls
  const nextCap = () => {
    setCapIndex((prev) => (prev === PRODUCTS.length - 1 ? 0 : prev + 1))
  }
  const prevCap = () => {
    setCapIndex((prev) => (prev === 0 ? PRODUCTS.length - 1 : prev - 1))
  }

  const nextWatch = () => {
    setWatchIndex((prev) => (prev === WATCHES.length - 1 ? 0 : prev + 1))
  }
  const prevWatch = () => {
    setWatchIndex((prev) => (prev === 0 ? WATCHES.length - 1 : prev - 1))
  }

  // Get active combo object
  const activeCombo = COMBOS.find(c => c.id === selectedComboId)

  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="logo">Caps <span>Osvi</span></div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container">
            <div className="badge-hero">STREETWEAR & ACCESSORIES ELITE</div>
            <h1>THE STYLE <br/>YOU DESERVE</h1>
            <p>No es solo ropa, es tu identidad. Elevamos el estándar del estilo urbano con gorras exclusivas y relojes de alta gama diseñados para destacar.</p>
          </div>
        </section>

        {/* CAPS CAROUSEL SECTION */}
        <section className="products-section">
          <div className="container">
            <h2 className="section-title">GORRAS EXCLUSIVAS</h2>
            <p className="section-subtitle">Explora nuestra colección de gorras premium</p>
            
            <div className="carousel-container">
              <button className="carousel-btn prev" onClick={prevCap} aria-label="Anterior">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              
              <div className="carousel-viewport">
                <div className="carousel-track" style={{ transform: `translateX(-${capIndex * 100}%)` }}>
                  {PRODUCTS.map(product => (
                    <div key={product.id} className="carousel-slide">
                      <div className="card">
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
                    </div>
                  ))}
                </div>
              </div>

              <button className="carousel-btn next" onClick={nextCap} aria-label="Siguiente">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div className="carousel-dots">
              {PRODUCTS.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`dot ${idx === capIndex ? 'active' : ''}`}
                  onClick={() => setCapIndex(idx)}
                  aria-label={`Ir a diapositiva ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* COMBOS SECTION */}
        <section className="combos-section">
          <div className="container">
            <h2 className="section-title">COMBOS PROMOCIONALES</h2>
            <p className="section-subtitle">Selecciona un combo para ver los detalles y el ahorro</p>

            <div className="combos-layout">
              {/* Left Column: Combo List Selector */}
              <div className="combos-list">
                {COMBOS.map((combo) => (
                  <div 
                    key={combo.id} 
                    className={`combo-item ${combo.id === selectedComboId ? 'active' : ''}`}
                    onClick={() => setSelectedComboId(combo.id)}
                  >
                    <div className="combo-item-header">
                      <h3>{combo.name}</h3>
                      <span className="combo-badge">{combo.discount}</span>
                    </div>
                    <p className="combo-item-desc">{combo.description.substring(0, 70)}...</p>
                    <div className="combo-item-pricing">
                      <span className="original-price">{combo.priceOriginal}</span>
                      <span className="combo-price">{combo.priceCombo}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Interactive Sample/Preview */}
              <div className="combo-preview-container">
                {activeCombo && (
                  <div className="combo-preview-card">
                    <div className="combo-preview-badge">MUESTRA DE COMBO</div>
                    
                    <div className="combo-preview-header">
                      <h3>{activeCombo.name}</h3>
                      <span className="combo-save-pill">{activeCombo.discount}</span>
                    </div>
                    <p className="combo-preview-desc">{activeCombo.description}</p>
                    
                    {/* Visual representation of included caps */}
                    <div className="combo-caps-row">
                      {activeCombo.caps.map((capId, idx) => {
                        const cap = PRODUCTS.find(p => p.id === capId)
                        if (!cap) return null
                        return (
                          <div key={cap.id} className="combo-cap-mini">
                            <div className="mini-image-wrapper">
                              <img src={cap.image} alt={cap.name} />
                              <span className="mini-number">#{idx + 1}</span>
                            </div>
                            <h4>{cap.name}</h4>
                            <span className="mini-price">{cap.price}</span>
                          </div>
                        )
                      })}
                    </div>

                    <div className="combo-preview-footer">
                      <div className="combo-final-price-wrapper">
                        <span className="label">Precio Total Combo:</span>
                        <div className="price-tag-row">
                          <span className="old-price">{activeCombo.priceOriginal}</span>
                          <span className="new-price">{activeCombo.priceCombo}</span>
                        </div>
                      </div>
                      <button 
                        className="btn btn-glowing"
                        onClick={() => handleConsultCombo(activeCombo)}
                      >
                        Ordenar Combo por WhatsApp
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* WATCHES CAROUSEL SECTION */}
        <section className="products-section watches-section">
          <div className="container">
            <h2 className="section-title">RELOJES DE LUJO</h2>
            <p className="section-subtitle">Exclusividad y precisión en tu muñeca</p>
            
            <div className="carousel-container">
              <button className="carousel-btn prev" onClick={prevWatch} aria-label="Anterior">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              
              <div className="carousel-viewport">
                <div className="carousel-track" style={{ transform: `translateX(-${watchIndex * 100}%)` }}>
                  {WATCHES.map(watch => (
                    <div key={watch.id} className="carousel-slide">
                      <div className="card card-watch">
                        <div className="exclusive-badge">PREMIUM</div>
                        <div className="card-img-wrapper">
                          <img src={watch.image} alt={watch.name} className="card-img" />
                        </div>
                        <h3>{watch.name}</h3>
                        <p>{watch.description}</p>
                        <div className="card-footer">
                          <span className="price">{watch.price}</span>
                          <button 
                            className="btn" 
                            onClick={() => handleConsult(watch.name)}
                          >
                            Consultar Reloj
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="carousel-btn next" onClick={nextWatch} aria-label="Siguiente">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>

            <div className="carousel-dots">
              {WATCHES.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`dot ${idx === watchIndex ? 'active' : ''}`}
                  onClick={() => setWatchIndex(idx)}
                  aria-label={`Ir a diapositiva ${idx + 1}`}
                />
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

