#!/usr/bin/env node
/**
 * Post-build script to prepare the application for Appwrite deployment.
 * Copies the build output to dist/ for Appwrite compatibility.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const buildDir = path.join(__dirname, "..", "build");
const distDir = path.join(__dirname, "..", "dist");

function copyDirRecursive(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);

  files.forEach((file) => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    const stat = fs.statSync(srcFile);

    if (stat.isDirectory()) {
      copyDirRecursive(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

try {
  if (fs.existsSync(buildDir)) {
    // Remove existing dist if it exists
    if (fs.existsSync(distDir)) {
      fs.rmSync(distDir, { recursive: true });
    }

    // For Appwrite Static Hosting (Web App), it expects index.html at root,
    // so we copy build/client contents to dist root.
    // For Appwrite Functions, we copy build/server to dist/server.
    const buildClientDir = path.join(buildDir, "client");
    const buildServerDir = path.join(buildDir, "server");
    
    if (fs.existsSync(buildClientDir)) {
      copyDirRecursive(buildClientDir, distDir);
      
      // Create 404.html and 200.html for SPA fallback routing on static hosts (like Appwrite)
      const indexFile = path.join(distDir, "index.html");
      if (fs.existsSync(indexFile)) {
        fs.copyFileSync(indexFile, path.join(distDir, "404.html"));
        fs.copyFileSync(indexFile, path.join(distDir, "200.html"));
      }
    }
    
    if (fs.existsSync(buildServerDir)) {
      const distServerDir = path.join(distDir, "server");
      copyDirRecursive(buildServerDir, distServerDir);
    }
    
    console.log("✓ Build output copied to dist/ for Appwrite deployment (Static & Functions ready)");
  } else {
    console.warn("⚠ Build directory not found");
  }
} catch (error) {
  console.error("✗ Error setting up dist directory:", error.message);
  process.exit(1);
}
