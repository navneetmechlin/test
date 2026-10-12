import styles from "./page.module.css";
import DiagnosticsClient from "./components/DiagnosticsClient";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Staging Announcement Banner */}
      <div className={styles.stagingBanner} role="alert">
        <div className={styles.stagingBannerContent}>
          <span className={styles.stagingIcon} aria-hidden="true">🧪</span>
          <div>
            <div className={styles.stagingBannerTitle}>Staging Preview Environment Active</div>
            <div className={styles.stagingBannerText}>
              You are viewing the pre-release deployment branch for smoke testing and feature verification.
            </div>
          </div>
        </div>
        <div className={styles.stagingBranchPill}>
          <span>branch:</span>
          <strong>staging</strong>
        </div>
      </div>

      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.brandIcon} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L24 22H0L12 1Z" />
            </svg>
          </div>
          <span className={styles.brandText}>Vercel Testbed</span>
        </div>

        <div className={styles.stagingBadge} id="status-badge">
          <span className={styles.stagingStatusDot} aria-hidden="true" />
          <span>Staging Preview Release</span>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.tagline}>Staging Environment • Branch: staging</div>
          <h1 id="hero-title" className={styles.title}>
            Staging Deployment Verification
          </h1>
          <p className={styles.description}>
            This build was triggered from the <code>staging</code> branch. Verify feature flags, API route latency, and edge preview caching before promoting changes to production.
          </p>

          <div className={styles.specBar}>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Environment</span>
              <span className={styles.specValue} style={{ color: "#fbbf24" }}>STAGING / PREVIEW</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Active Branch</span>
              <span className={styles.specValue}>staging</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Framework</span>
              <span className={styles.specValue}>Next.js 16</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Bundler</span>
              <span className={styles.specValue}>Turbopack</span>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specLabel}>Target</span>
              <span className={styles.specValue}>Vercel Preview URL</span>
            </div>
          </div>
        </section>

        {/* Staging Feature Showcase */}
        <section className={styles.stagingCard} aria-labelledby="staging-features-title">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <h2 id="staging-features-title" style={{ fontSize: "1.25rem", color: "#fbbf24", fontWeight: 700 }}>
              🧪 Staging Test Verification Points
            </h2>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
              commit: staging-preview-v1
            </span>
          </div>
          <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
            Items verified in this staging branch before merging to <code>main</code>:
          </p>
          <div className={styles.stagingFeatureList}>
            <div className={styles.stagingFeatureItem}>
              <div className={styles.stagingFeatureLabel}>Feature 01</div>
              <div className={styles.stagingFeatureValue}>Preview Branch Routing</div>
            </div>
            <div className={styles.stagingFeatureItem}>
              <div className={styles.stagingFeatureLabel}>Feature 02</div>
              <div className={styles.stagingFeatureValue}>Serverless Route Check</div>
            </div>
            <div className={styles.stagingFeatureItem}>
              <div className={styles.stagingFeatureLabel}>Feature 03</div>
              <div className={styles.stagingFeatureValue}>Vercel Auto-Comments</div>
            </div>
            <div className={styles.stagingFeatureItem}>
              <div className={styles.stagingFeatureLabel}>Feature 04</div>
              <div className={styles.stagingFeatureValue}>Zero Downtime Promotion</div>
            </div>
          </div>
        </section>

        {/* Live Diagnostics Card & Guide */}
        <DiagnosticsClient />

        {/* Deployment Features Grid */}
        <section className={styles.grid} aria-label="Deployment Verification Features">
          <article className={styles.card}>
            <div className={styles.cardIcon}>⚡</div>
            <h3 className={styles.cardTitle}>Global Edge Network</h3>
            <p className={styles.cardDescription}>
              Static assets and prerendered HTML are served immediately from Vercel’s global Edge network with ultra-low latency.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardIcon}>λ</div>
            <h3 className={styles.cardTitle}>Serverless Functions</h3>
            <p className={styles.cardDescription}>
              Next.js API route handlers dynamically scale on demand without server configuration or cold start delays.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardIcon}>🛡️</div>
            <h3 className={styles.cardTitle}>Zero-Config CI/CD</h3>
            <p className={styles.cardDescription}>
              Git branches get preview URLs automatically on every commit, and merges to main trigger instant zero-downtime production builds.
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.cardIcon}>🔍</div>
            <h3 className={styles.cardTitle}>Telemetry & Analytics</h3>
            <p className={styles.cardDescription}>
              Instant integration with Vercel Web Analytics, Speed Insights, and real-time runtime log streaming.
            </p>
          </article>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>Next.js + Vercel Deployment Testbed &bull; Branch: staging</div>
        <nav className={styles.footerLinks} aria-label="Quick documentation links">
          <a
            href="https://vercel.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Vercel Docs
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Next.js Docs
          </a>
          <a
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Vercel Dashboard
          </a>
        </nav>
      </footer>
    </div>
  );
}
