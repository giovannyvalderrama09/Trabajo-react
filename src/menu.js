
export function Menu() {
    return(
        <header>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="">Tyler the-creator 
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Canciones</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </header>
    )
}

export function Carrusel() {

    return(
        <section>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="assets/img/img1.jpg" className="d-block w-100" data-bs-interval="3000" alt="imagen del artista Tyler the-creator" />
    </div>
    <div className="carousel-item">
      <img src="assets/img/img4.jpg" className="d-block w-100" alt="imagen del artista Tyler the-creator" />
    </div>
    <div className="carousel-item">
      <img src="assets/img/img3.jpg" className="d-block w-100" alt="imagen del artista Tyler the-creator" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br/>
    </section> 
   
    )
    
}

export function Bibiografia() {
    return(
        <main>
        <div className="col-12 col-md-12"> 
        <h1 className="text-center">Tyler Gregory Okonma</h1>
        <p>Se hizo conocido en los inicios de los 2010 al ser el líder y cofundador del grupo de rap Odd Future, habiendo cantado y producido casi todas las canciones de la agrupación Como solista, Tyler lanzó un mixtape y seis álbumes de estudio, todos producidos por él mismo.</p>
      
        <p>Después de una larga contribución en los primeros trabajos de Odd Future, Tyler lanzó su primer mixtape como solista, Bastard, en 2009. Tras lanzar su álbum de estudio debut en 2011, Goblin, Okonma firmó un contrato con Sony Music para él y su discográfica, Odd Future Records Con fuertes influencias de horrorcore en sus primeros trabajos, Tyler fue criticado por su uso de homofobia y misoginia en sus letras. Luego lanzaría sus álbumes Wolf (2013) y Cherry Bomb (2015), que provocarían un cambio progresivamente en el estilo de música de Tyler, pasando del género del rap e incursionando más en el jazz y el neo-soul. Esto desembocaría en el lanzamiento de su álbumes, Flower Boy (2017), IGOR (2019) y Call Me If You Get Lost (2021), los cuales recibirían la aclamación por parte de la crítica y los fans, y con estos dos últimos debutando como número 1 en la lista de éxitos Billboard 200. Además, en los últimos años, Tyler se establecería a sí mismo como una importante figura en la moda y el estilo, habiendo establecido importantes relaciones con marcas como Vans, Lacoste o Converse.</p>
        </div>
        </main>
    )
}