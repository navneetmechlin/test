"use client";

import { useState } from "react";
import styles from "../page.module.css";

interface ApiData {
  status: string;
  deploymentReady: boolean;
  message: string;
  serverTimestamp: string;
  environment: string;
  region: string;
  nodeVersion: string;
  headers: {
    framework: string;
    runtime: string;
  };
}

export default function DiagnosticsClient() {
  const [loading, setLoading] = useState(false);
  const [latency, setLatency] = useState<number | null>(null);
  const [data, setData] = useState<ApiData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const runDiagnostic = async () => {
    setLoading(true);
    setError(null);
    const start = performance.now();
    try {
      const res = await fetch("/api/status");
      if (!res.ok) {
        throw new Error(`Server returned HTTP ${res.status}`);
      }
      const json: ApiData = await res.json();
      const end = performance.now();
      setLatency(Math.round(end - start));
      setData(json);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Diagnostic failed");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <>
      <div className={styles.diagnosticsHeader}>
        <div>
          <h2 id="diagnostics-title" className={styles.diagnosticsTitle}>
            Real-Time Serverless & Edge Diagnostics
          </h2>
          <p className={styles.diagnosticsSubtitle}>
            Test route handlers and measure serverless execution response times.
          </p>
        </div>

      </div>
    </>
  );
}
