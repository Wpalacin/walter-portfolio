import {
  ArrowUpRight,
  BarChart3,
  Cpu,
  Database,
  Github,
  MapPin,
  Rocket,
  Workflow,
} from "lucide-react";

const projects = [
  {
    tag: "NASA Space Apps Challenge 2026",
    title: "LAND & STAND",
    description:
      "Herramienta interdisciplinar para explorar rutas sobre el terreno de Marte, incorporando condiciones fisiológicas y análisis probabilístico.",
    detail: "Participación en coordinación y comunicación del proyecto.",
    href: "https://land-and-stand.vercel.app/",
    action: "Ver demostración",
    icon: Rocket,
  },
  {
    tag: "Business Intelligence",
    title: "Cuadros de mando e indicadores",
    description:
      "Diseño de cinco dashboards interactivos en Power BI, con Power Query y DAX, para apoyar el análisis operativo.",
    detail: "5 dashboards desarrollados.",
    href: "#experiencia",
    action: "Ver experiencia",
    icon: BarChart3,
  },
  {
    tag: "Automatización",
    title: "Optimización de procesos de datos",
    description:
      "Cruce y validación automatizados de información con Excel y VBA para reducir tareas repetitivas.",
    detail: "De 15 horas semanales a 30 minutos.",
    href: "#experiencia",
    action: "Ver resultados",
    icon: Workflow,
  },
];

const capabilities = [
  { icon: Database, label: "SQL y datos", detail: "SQL Server · MySQL" },
  { icon: BarChart3, label: "Business Intelligence", detail: "Power BI · DAX · Power Query" },
  { icon: Workflow, label: "Automatización", detail: "Excel · VBA" },
  { icon: Cpu, label: "Tecnología", detail: "Coordinación · proyectos digitales" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          WP<span>.</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#sobre-mi">Perfil</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Ingeniería · Datos · Innovación</div>
            <h1>
              Datos claros.<br />
              Decisiones mejores.<br />
              <em>Soluciones reales.</em>
            </h1>
            <p className="lead">
              Soy ingeniero de sistemas y MBA. Conecto Business Intelligence,
              automatización y gestión tecnológica para convertir necesidades
              complejas en resultados accionables.
            </p>
            <div className="actions">
              <a className="btn primary" href="#proyectos">
                Explorar proyectos <ArrowUpRight size={17} />
              </a>
              <a className="btn outline" href="#sobre-mi">Conocer mi trayectoria</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Resumen profesional">
            <div className="visual-header">
              <span>PERFIL PROFESIONAL</span>
              <span className="visual-status">ACTIVO</span>
            </div>
            <div className="visual-main">
              <div className="visual-orb"><Database size={34} /></div>
              <div>
                <small>ESPECIALIDAD</small>
                <strong>Datos + Tecnología + Gestión</strong>
              </div>
            </div>
            <div className="visual-lines">
              <div><span>Business Intelligence</span><i /></div>
              <div><span>Automatización</span><i /></div>
              <div><span>Coordinación</span><i /></div>
            </div>
          </div>
        </div>

        <div className="stats wrap">
          <div><strong>15 h → 30 min</strong><span>Proceso automatizado</span></div>
          <div><strong>5</strong><span>Dashboards desarrollados</span></div>
          <div><strong>NASA 2026</strong><span>Space Apps Challenge</span></div>
        </div>
      </section>

      <section className="section alt" id="sobre-mi">
        <div className="wrap two-col">
          <div>
            <span className="section-label">01 / PERFIL</span>
            <h2>Tecnología con visión de negocio.</h2>
          </div>
          <div>
            <p>
              Mi experiencia combina ingeniería de sistemas, análisis de datos,
              coordinación tecnológica y mejora de procesos. Trabajo con SQL,
              Power BI y automatización para conectar las necesidades de los
              equipos con soluciones prácticas.
            </p>
            <p>
              También amplío mi trabajo hacia el desarrollo asistido por
              inteligencia artificial y la creación de productos digitales,
              apoyándome en una trayectoria que integra formación técnica y MBA.
            </p>
            <div className="capability-grid">
              {capabilities.map(({ icon: Icon, label, detail }) => (
                <div className="capability" key={label}>
                  <Icon size={18} />
                  <div><strong>{label}</strong><span>{detail}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section wrap" id="proyectos">
        <span className="section-label">02 / PROYECTOS</span>
        <div className="section-heading">
          <h2>Trabajo aplicado, resultados reales.</h2>
          <p>Una selección de iniciativas en ciencia, analítica y mejora operativa.</p>
        </div>
        <div className="project-grid">
          {projects.map(({ tag, title, description, detail, href, action, icon: Icon }, index) => (
            <article className="project" key={title}>
              <div className="project-top">
                <div className="project-icon"><Icon size={24} /></div>
                <span>0{index + 1}</span>
              </div>
              <span className="project-tag">{tag}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <strong className="project-detail">{detail}</strong>
              <a
                href={href}
                target={href.startsWith("https") ? "_blank" : undefined}
                rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
              >
                {action} <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt" id="experiencia">
        <div className="wrap">
          <span className="section-label">03 / EXPERIENCIA</span>
          <h2>Experiencia y evolución profesional.</h2>
          <div className="timeline">
            <article>
              <span>2026 — ACTUALIDAD</span>
              <div><h3>Asesor de proyectos y soluciones tecnológicas</h3><p>Apoyo al desarrollo de soluciones de software y bases de datos, planificación tecnológica y coordinación de iniciativas interdisciplinarias.</p></div>
            </article>
            <article>
              <span>2023 — 2025</span>
              <div><h3>Analista de datos y procesos · Dusakawi EPSI</h3><p>Integración de datos y automatización de tareas repetitivas. Reducción de 15 horas semanales a 30 minutos en un proceso de tratamiento de información.</p></div>
            </article>
            <article>
              <span>2022 — 2023</span>
              <div><h3>Analista de sistemas y Business Intelligence · OHI</h3><p>Diseño de cinco cuadros de mando en Power BI y optimización de procesos de consulta y presentación de información.</p></div>
            </article>
            <article>
              <span>FORMACIÓN</span>
              <div><h3>Ingeniería de Sistemas · MBA</h3><p>Formación en ingeniería de sistemas, análisis y desarrollo de software, administración empresarial y aplicación de IA en la empresa.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact wrap" id="contacto">
        <div>
          <span className="section-label">04 / CONTACTO</span>
          <h2>Conectemos para crear algo útil.</h2>
          <p>Abierto a conversar sobre analítica, automatización, ingeniería y proyectos de innovación tecnológica.</p>
        </div>
        <div className="contact-links">
          <a href="https://github.com/raaulalonso/LandAndStand" target="_blank" rel="noopener noreferrer">
            <Github size={19} /> Proyecto LAND &amp; STAND <ArrowUpRight size={16} />
          </a>
          <span><MapPin size={19} /> Madrid, España</span>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Walter Palacín</span>
          <span>Next.js · TypeScript</span>
        </div>
      </footer>
    </main>
  );
}
