import styles from "./page.module.css";
import DiagnosticsClient from "./components/DiagnosticsClient";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.brandIcon} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L24 22H0L12 1Z" />
            </svg>
          </div>
          <span className={styles.brandText}>Vercel Testbed</span>
        </div>

        <div className={styles.badge} id="status-badge">
          <span className={styles.statusDot} aria-hidden="true" />
          <span>Ready for Deployment</span>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.tagline}>Next.js 16 • App Router • Turbopack</div>
          <h1 id="hero-title" className={styles.title}>
            Next.js Deployment Verification Suite
          </h1>
          <p className={styles.description}>
            A pre-configured, production-optimized Next.js project designed to test and validate Vercel cloud deployment, edge networks, and serverless route functions.
          </p>

          <div className={styles.specBar}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Framework</span>
              <span className={styles.specValue}>Next.js 16</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>React Engine</span>
              <span className={styles.specValue}>React 19</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Architecture</span>
              <span className={styles.specValue}>App Router</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Bundler</span>
              <span className={styles.specValue}>Turbopack</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Target Platform</span>
              <span className={styles.specValue}>Vercel Edge & Cloud</span>
            </div>
          </div>
        </section>

        {/* Live Diagnostics Card & Guide */}



      </main>

    </div>
  );
}
