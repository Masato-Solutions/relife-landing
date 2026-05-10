import type {
  Product,
  ServicesData,
  HomeContent,
  AboutContent,
  WellnessContent,
  ContactContent,
  SiteContent,
  ContactSubmission,
} from "@/types/content";

const BASE = "/api";

// Password is kept in memory only — never written to storage.
// Cleared automatically on page refresh, requiring re-login.
let _adminPassword = "";

export function setAdminCredential(password: string): void {
  _adminPassword = password;
}

export function clearAdminCredential(): void {
  _adminPassword = "";
}

function getAuth(): string {
  return _adminPassword ? `Bearer ${_adminPassword}` : "";
}

async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: getAuth(),
      ...(options?.headers ?? {}),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json() as Promise<T>;
}

// ─── Products ────────────────────────────────────────────────────────────────

export async function fetchProducts(): Promise<Product[]> {
  return apiFetch<Product[]>(`${BASE}/products`);
}

export async function saveProduct(product: Partial<Product> & { id?: string }): Promise<Product> {
  if (product.id) {
    return apiFetch<Product>(`${BASE}/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    });
  }
  return apiFetch<Product>(`${BASE}/products`, {
    method: "POST",
    body: JSON.stringify(product),
  });
}

export async function deleteProduct(id: string): Promise<void> {
  await apiFetch(`${BASE}/products/${id}`, { method: "DELETE" });
}

// ─── Services & Events ────────────────────────────────────────────────────────

export async function fetchServices(): Promise<ServicesData> {
  return apiFetch<ServicesData>(`${BASE}/services`);
}

export async function saveService(service: Record<string, unknown> & { id?: string }): Promise<unknown> {
  if (service.id) {
    return apiFetch(`${BASE}/services/${service.id}`, { method: "PUT", body: JSON.stringify(service) });
  }
  return apiFetch(`${BASE}/services`, { method: "POST", body: JSON.stringify(service) });
}

export async function deleteService(id: string): Promise<void> {
  await apiFetch(`${BASE}/services/${id}`, { method: "DELETE" });
}

export async function saveEvent(event: Record<string, unknown> & { id?: string }): Promise<unknown> {
  if (event.id) {
    return apiFetch(`${BASE}/events/${event.id}`, { method: "PUT", body: JSON.stringify(event) });
  }
  return apiFetch(`${BASE}/events`, { method: "POST", body: JSON.stringify(event) });
}

export async function deleteEvent(id: string): Promise<void> {
  await apiFetch(`${BASE}/events/${id}`, { method: "DELETE" });
}

// ─── Single-document pages ───────────────────────────────────────────────────

export async function fetchHome(): Promise<HomeContent> {
  return apiFetch<HomeContent>(`${BASE}/home`);
}
export async function saveHome(data: HomeContent): Promise<HomeContent> {
  return apiFetch<HomeContent>(`${BASE}/home`, { method: "PUT", body: JSON.stringify(data) });
}

export async function fetchAbout(): Promise<AboutContent> {
  return apiFetch<AboutContent>(`${BASE}/about`);
}
export async function saveAbout(data: AboutContent): Promise<AboutContent> {
  return apiFetch<AboutContent>(`${BASE}/about`, { method: "PUT", body: JSON.stringify(data) });
}

export async function fetchWellness(): Promise<WellnessContent> {
  return apiFetch<WellnessContent>(`${BASE}/wellness`);
}
export async function saveWellness(data: WellnessContent): Promise<WellnessContent> {
  return apiFetch<WellnessContent>(`${BASE}/wellness`, { method: "PUT", body: JSON.stringify(data) });
}

export async function fetchContact(): Promise<ContactContent> {
  return apiFetch<ContactContent>(`${BASE}/contact`);
}
export async function saveContact(data: ContactContent): Promise<ContactContent> {
  return apiFetch<ContactContent>(`${BASE}/contact`, { method: "PUT", body: JSON.stringify(data) });
}

export async function fetchSite(): Promise<SiteContent> {
  return apiFetch<SiteContent>(`${BASE}/site`);
}
export async function saveSite(data: SiteContent): Promise<SiteContent> {
  return apiFetch<SiteContent>(`${BASE}/site`, { method: "PUT", body: JSON.stringify(data) });
}

// ─── Contact form submission ──────────────────────────────────────────────────

export async function submitContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean }> {
  return apiFetch<{ success: boolean }>(`${BASE}/contact/submit`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// ─── Admin submissions ────────────────────────────────────────────────────────

export async function fetchSubmissions(): Promise<ContactSubmission[]> {
  return apiFetch<ContactSubmission[]>(`${BASE}/admin/submissions`);
}

// ─── Image upload ─────────────────────────────────────────────────────────────

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("image", file);

  const auth = getAuth();
  const res = await fetch(`${BASE}/upload/image`, {
    method: "POST",
    headers: auth ? { Authorization: auth } : {},
    body: formData,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(text || `HTTP ${res.status}`);
  }

  const json = await res.json();
  return json.url as string;
}

// ─── Admin auth ───────────────────────────────────────────────────────────────

export async function verifyAdminPassword(password: string): Promise<boolean> {
  try {
    const res = await fetch(`${BASE}/admin/submissions`, {
      headers: { Authorization: `Bearer ${password}` },
    });
    return res.ok;
  } catch {
    return false;
  }
}
