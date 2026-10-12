import { NextResponse } from "next/server";

export async function GET() {
  const timestamp = new Date().toISOString();
  const nodeVersion = process.version;
  const vercelEnv = process.env.VERCEL_ENV || "local-development";
  const vercelRegion = process.env.VERCEL_REGION || "dev-localhost";

  return NextResponse.json({
    status: "healthy",
    deploymentReady: true,
    message: "Next.js App Router on Vercel is operational",
    serverTimestamp: timestamp,
    environment: vercelEnv,
    region: vercelRegion,
    nodeVersion,
    headers: {
      framework: "Next.js 16",
      runtime: "Node.js Serverless Function",
    },
  });
}
