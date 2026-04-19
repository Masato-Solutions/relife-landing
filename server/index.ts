import express, { Request, Response, NextFunction } from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Backend data directory (repo root / backend / data)
const DATA_DIR = path.resolve(__dirname, "..", "backend", "data");
const UPLOADS_DIR = path.resolve(__dirname, "..", "backend", "uploads");

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

function readJson<T>(filename: string, fallback: T): T {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
  } catch {
    return fallback;
  }
}

function writeJson(filename: string, data: unknown): void {
  fs.writeFileSync(path.join(DATA_DIR, filename), JSON.stringify(data, null, 2), "utf-8");
}

// Multer config for image uploads
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

// Admin auth middleware
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "relife-admin-2026";

function adminAuth(req: Request, res: Response, next: NextFunction): void {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith("Bearer ") && auth.slice(7) === ADMIN_PASSWORD) {
    next();
    return;
  }
  res.status(401).json({ error: "Unauthorized" });
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // Serve uploaded files
  app.use("/uploads", express.static(UPLOADS_DIR));

  // ─── Products ───────────────────────────────────────────────────────────────
  app.get("/api/products", (_req, res) => {
    res.json(readJson("products.json", []));
  });

  app.post("/api/products", adminAuth, (req, res) => {
    const products: unknown[] = readJson("products.json", []);
    const newProduct = { id: Date.now().toString(), ...req.body };
    products.push(newProduct);
    writeJson("products.json", products);
    res.json(newProduct);
  });

  app.put("/api/products/:id", adminAuth, (req, res) => {
    const products: Record<string, unknown>[] = readJson("products.json", []);
    const idx = products.findIndex((p) => p.id === req.params.id);
    if (idx === -1) { res.status(404).json({ error: "Not found" }); return; }
    products[idx] = { ...products[idx], ...req.body };
    writeJson("products.json", products);
    res.json(products[idx]);
  });

  app.delete("/api/products/:id", adminAuth, (req, res) => {
    const products: Record<string, unknown>[] = readJson("products.json", []);
    const filtered = products.filter((p) => p.id !== req.params.id);
    writeJson("products.json", filtered);
    res.json({ success: true });
  });

  // ─── Services & Events ──────────────────────────────────────────────────────
  const defaultServicesData = { services: [], events: [] };
  app.get("/api/services", (_req, res) => {
    res.json(readJson("services.json", defaultServicesData));
  });

  app.post("/api/services", adminAuth, (req, res) => {
    const data = readJson<{ services: Record<string, unknown>[]; events: Record<string, unknown>[] }>("services.json", defaultServicesData);
    const newService = { id: Date.now().toString(), ...req.body };
    data.services.push(newService);
    writeJson("services.json", data);
    res.json(newService);
  });

  app.put("/api/services/:id", adminAuth, (req, res) => {
    const data = readJson<{ services: Record<string, unknown>[]; events: Record<string, unknown>[] }>("services.json", defaultServicesData);
    const idx = data.services.findIndex((s) => s.id === req.params.id);
    if (idx === -1) { res.status(404).json({ error: "Not found" }); return; }
    data.services[idx] = { ...data.services[idx], ...req.body };
    writeJson("services.json", data);
    res.json(data.services[idx]);
  });

  app.delete("/api/services/:id", adminAuth, (req, res) => {
    const data = readJson<{ services: Record<string, unknown>[]; events: Record<string, unknown>[] }>("services.json", defaultServicesData);
    data.services = data.services.filter((s) => s.id !== req.params.id);
    writeJson("services.json", data);
    res.json({ success: true });
  });

  app.post("/api/events", adminAuth, (req, res) => {
    const data = readJson<{ services: Record<string, unknown>[]; events: Record<string, unknown>[] }>("services.json", defaultServicesData);
    const newEvent = { id: Date.now().toString(), ...req.body };
    data.events.push(newEvent);
    writeJson("services.json", data);
    res.json(newEvent);
  });

  app.put("/api/events/:id", adminAuth, (req, res) => {
    const data = readJson<{ services: Record<string, unknown>[]; events: Record<string, unknown>[] }>("services.json", defaultServicesData);
    const idx = data.events.findIndex((e) => e.id === req.params.id);
    if (idx === -1) { res.status(404).json({ error: "Not found" }); return; }
    data.events[idx] = { ...data.events[idx], ...req.body };
    writeJson("services.json", data);
    res.json(data.events[idx]);
  });

  app.delete("/api/events/:id", adminAuth, (req, res) => {
    const data = readJson<{ services: Record<string, unknown>[]; events: Record<string, unknown>[] }>("services.json", defaultServicesData);
    data.events = data.events.filter((e) => e.id !== req.params.id);
    writeJson("services.json", data);
    res.json({ success: true });
  });

  // ─── Single-document endpoints ───────────────────────────────────────────────
  const singleDocs = ["home", "about", "wellness", "contact", "site"] as const;
  for (const name of singleDocs) {
    app.get(`/api/${name}`, (_req, res) => res.json(readJson(`${name}.json`, {})));
    app.put(`/api/${name}`, adminAuth, (req, res) => {
      writeJson(`${name}.json`, req.body);
      res.json(req.body);
    });
  }

  // ─── Contact form submission ─────────────────────────────────────────────────
  app.post("/api/contact/submit", (req, res) => {
    const submissions: unknown[] = readJson("contact-submissions.json", []);
    const entry = { id: Date.now().toString(), submittedAt: new Date().toISOString(), ...req.body };
    submissions.push(entry);
    writeJson("contact-submissions.json", submissions);
    res.json({ success: true });
  });

  // ─── Admin: view submissions ─────────────────────────────────────────────────
  app.get("/api/admin/submissions", adminAuth, (_req, res) => {
    res.json(readJson("contact-submissions.json", []));
  });

  // ─── Image upload ────────────────────────────────────────────────────────────
  app.post("/api/upload/image", adminAuth, upload.single("image"), (req, res) => {
    if (!req.file) { res.status(400).json({ error: "No file uploaded" }); return; }
    res.json({ url: `/uploads/${req.file.filename}` });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
