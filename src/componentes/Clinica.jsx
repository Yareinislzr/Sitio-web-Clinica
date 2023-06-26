export const Clinica = () => {
  return (
    <div className="clinica">
      <section id="section1" className="container-principal">
        <div className="container">
          <h1>Bienvenidos a nuestra Clínica</h1>
          <p>
            <span>
              En nuestra clínica ofrecemos los mejores servicios médicos para
              cuidar de su salud. Nuestro equipo de profesionales está altamente
              capacitado para brindarle la atención que necesita.
            </span>
          </p>
        </div>
      </section>
      <section id="section2">
        <div className="container">
          <h2>Algunos de nuestros servicios incluyen:</h2>
          <ul>
            <li>Control y seguimiento de enfermedades crónicas</li>
            <li>Atención en pediatría y ginecología</li>
            <li>Tratamientos de fisioterapia y rehabilitación</li>
            <li>Realización de estudios médicos y diagnósticos</li>
          </ul>
        </div>
      </section>
      <section id="section3">
        <div className="container">
          <h2>Nuestro equipo de profesionales</h2>
          <div className="grid">
            <div className="card">
              <img
                src="https://cdn.pixabay.com/photo/2020/11/03/15/31/doctor-5710152_640.jpg"
                alt="Doctor 1"
              />
              <h3>Dr. Juan Pérez</h3>
              <p>Especialista en pediatría</p>
            </div>
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/1393587823/es/foto/retrato-de-una-doctora-en-la-cl%C3%ADnica-m%C3%A9dica.jpg?s=1024x1024&w=is&k=20&c=7_lO4E-wimCzLDTXgKcmV9izuW83fNV8FGZ51GK1T1E="
                alt="Doctor 2"
              />
              <h3>Dra. Ana García</h3>
              <p>Especialista en ginecología</p>
            </div>
            <div className="card">
              <img
                src="https://media.istockphoto.com/id/1203995945/es/foto/retrato-de-hombre-maduro-doctor-que-lleva-abrigo-blanco-de-pie-en-el-pasillo-del-hospital.jpg?s=612x612&w=0&k=20&c=TLFMEYbqmt5noGITcY6PRgaX4MfmfE2TYXehgiCDDuk="
                alt="Doctor 2"
              />
              <h3>Dr. Carlos Rodríguez</h3>
              <p>Especialista en fisioterapia</p>
            </div>
          </div>
        </div>
      </section>
      <section id="section4">
        <div className="container">
          <h2>Contáctenos</h2>
          <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
};
