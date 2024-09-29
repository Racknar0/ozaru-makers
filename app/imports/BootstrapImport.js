'use client'
import { useEffect } from "react";

export default function BootstrapImport() {
  useEffect(() => {
    console.log("BootstrapImport");
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}