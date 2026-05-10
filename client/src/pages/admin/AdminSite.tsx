import { useEffect, useState } from "react";
import { useSiteContent } from "@/hooks/useContent";
import { saveSite, uploadImage } from "@/lib/api";
import type { SiteContent } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_LOGO_TEXT, isSafeLogoImageUrl } from "@/lib/siteBranding";
import { toast } from "sonner";
import { ImageIcon } from "lucide-react";

export default function AdminSite() {
  const { data, loading } = useSiteContent();
  const [form, setForm] = useState<SiteContent | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (data) setForm(structuredClone(data));
  }, [data]);

  const handleSave = async () => {
    if (!form) return;
    setSaving(true);
    try {
      await saveSite(form);
      toast.success("Site settings saved!");
    } catch (e) {
      toast.error(String(e));
    } finally {
      setSaving(false);
    }
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !form) return;
    setUploading(true);
    try {
      const url = await uploadImage(file);
      setForm({ ...form, logo: url });
      toast.success("Logo uploaded!");
    } catch {
      toast.error("Logo upload failed.");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  if (loading || !form) return <div className="text-gray-500">Loading...</div>;

  const logoValue = (form.logo ?? "").trim();
  const hasImageLogo = isSafeLogoImageUrl(logoValue);

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Site Settings</h2>
        <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : "Save Changes"}</Button>
      </div>

      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">Branding</h3>
        <div>
          <Label className="text-gray-700">Site Name</Label>
          <Input
            value={form.siteName}
            onChange={(e) => setForm({ ...form, siteName: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-gray-700">Tagline</Label>
          <Input
            value={form.tagline}
            onChange={(e) => setForm({ ...form, tagline: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <Label className="text-gray-700">Footer Text</Label>
          <Input
            value={form.footerText}
            onChange={(e) => setForm({ ...form, footerText: e.target.value })}
            className="mt-1"
          />
        </div>
      </section>

      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">Main Site Logo</h3>
        <p className="text-sm text-gray-500">
          Required display size: 32×32 px in the navbar. Recommended upload: square PNG/SVG at 256×256 px or larger. Max file size: 10 MB.
        </p>
        <div>
          <Label className="text-gray-700">Logo URL</Label>
          <Input
            value={form.logo ?? ""}
            onChange={(e) => setForm({ ...form, logo: e.target.value })}
            placeholder="/uploads/your-logo.png"
            className="mt-1"
          />
          <p className="text-xs text-gray-500 mt-1">When you upload, this URL is filled automatically.</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 text-sm text-gray-600">
            <ImageIcon size={16} />
            {uploading ? "Uploading..." : "Upload Logo"}
            <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} disabled={uploading} />
          </label>
        </div>
        <div>
          <Label className="text-gray-700">Preview (navbar look)</Label>
          <div className="mt-2 rounded-lg border border-gray-200 px-3 py-2 inline-flex items-center gap-2 bg-white">
            {hasImageLogo ? (
              <img src={logoValue} alt="Site logo preview" className="w-8 h-8 rounded-lg object-cover border border-gray-100" />
            ) : (
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #ab92f1, #c4aef5)" }}
              >
                {(logoValue || DEFAULT_LOGO_TEXT).slice(0, 3)}
              </div>
            )}
            <span className="font-bold text-gray-900">{form.siteName || "Re:Life"}</span>
          </div>
        </div>
      </section>

      <Button onClick={handleSave} disabled={saving} className="w-full">{saving ? "Saving..." : "Save All Changes"}</Button>
    </div>
  );
}
