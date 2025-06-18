"use client"

import { useEffect } from "react"
import "./App.css"

export default function App() {
  useEffect(() => {
    // AOS animation library would be imported here
    // For this example, we'll use CSS animations instead
  }, [])

  return (
    <div className="background">
      <div className="content">
        {/* Eslogan */}
        <h2 className="slogan animate-fade-down">🧺 Conecta tu finca con el mundo. ¡Vende y compra fácil!</h2>

        {/* Logo */}
        <div className="logo-container animate-zoom-in">
          <img src="/logo-mifincaapp.png" alt="Logo MiFincaApp" className="logo" />
        </div>

        {/* Título y subtítulo */}
        <h1 className="animate-fade-up">Bienvenido a MiFincaApp</h1>
        <p className="subtext animate-fade-up">
          Gestiona tu finca, vende tus productos y lleva el control desde tu celular.
        </p>

        {/* Botones */}
        <div className="buttons animate-fade-up">
          <a href="/MiFincaApp.apk" download className="btn apk">
            <span className="btn-icon">📦</span>
            <span>Descargar APK</span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.tuappid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn playstore"
          >
            <img src="/playstore-icon.webp" alt="Google Play" className="icon animate-fade-up" />
            <span>Ir a Google Play</span>
          </a>
        </div>

        {/* Principios */}
        <div className="principios animate-fade-up">
          <h2>Nuestros Principios</h2>
          <p className="intro-text">
            En MiFincaApp, creemos en la transparencia, la confianza y la calidad. Por eso, nuestra aplicación está
            guiada por estándares internacionales que aseguran productos frescos, seguros y relaciones justas entre
            compradores y productores.
          </p>
          <div className="principios-grid">
            <div className="principio-item">
              <span className="principio-icon">🥕</span>
              <div>
                <strong>Calidad:</strong> frutas y verduras limpias, sanas y bien presentadas.
              </div>
            </div>
            <div className="principio-item">
              <span className="principio-icon">🌾</span>
              <div>
                <strong>Sostenibilidad:</strong> producción responsable que protege la tierra.
              </div>
            </div>
            <div className="principio-item">
              <span className="principio-icon">👀</span>
              <div>
                <strong>Transparencia:</strong> precios y datos claros y confiables.
              </div>
            </div>
            <div className="principio-item">
              <span className="principio-icon">💬</span>
              <div>
                <strong>Buen trato:</strong> respeto entre productores y consumidores.
              </div>
            </div>
            <div className="principio-item">
              <span className="principio-icon">✅</span>
              <div>
                <strong>Seguridad:</strong> alimentos que llegan en buenas condiciones.
              </div>
            </div>
          </div>
          <p className="note">
            Aunque no usamos certificaciones, seguimos principios basados en normas internacionales como ISO.
          </p>
        </div>

        {/* Footer */}
        <footer className="animate-fade-up">
          <p>© {new Date().getFullYear()} Desarrollado por el equipo de MiFincaApp</p>
        </footer>
      </div>
    </div>
  )
}
