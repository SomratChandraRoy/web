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

    // Copy build to dist
    copyDirRecursive(buildDir, distDir);
    console.log("✓ Build output copied to dist/ for Appwrite deployment");
  } else {
    console.warn("⚠ Build directory not found");
  }
} catch (error) {
  console.error("✗ Error setting up dist directory:", error.message);
  process.exit(1);
}
