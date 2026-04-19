import { useState, useEffect } from "react";
import { useHomeContent } from "@/hooks/useContent";
import { saveHome } from "@/lib/api";
import type { HomeContent, HomeStat } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";

export default function AdminHome() {
  const { data, loading } = useHomeContent();
  const [form, setForm] = useState<HomeContent | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data) setForm(structuredClone(data));
  }, [data]);

  const handleSave = async () => {
    if (!form) return;
    setSaving(true);
    try {
      await saveHome(form);
      toast.success("Home page content saved!");
    } catch (e) {
      toast.error(String(e));
    } finally {
      setSaving(false);
    }
  };

  if (loading || !form) return <div className="text-gray-500">Loading...</div>;

  const updateHero = (key: keyof typeof form.hero, val: string) =>
    setForm({ ...form, hero: { ...form.hero, [key]: val } });

  const updateStat = (idx: number, key: keyof HomeStat, val: string) => {
    const stats = [...form.hero.stats];
    stats[idx] = { ...stats[idx], [key]: val };
    setForm({ ...form, hero: { ...form.hero, stats } });
  };

  const addStat = () =>
    setForm({ ...form, hero: { ...form.hero, stats: [...form.hero.stats, { number: "", label: "" }] } });

  const removeStat = (idx: number) => {
    const stats = [...form.hero.stats];
    stats.splice(idx, 1);
    setForm({ ...form, hero: { ...form.hero, stats } });
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Home Page Editor</h2>
        <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : "Save Changes"}</Button>
      </div>

      {/* Hero */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">Hero Section</h3>
        <div>
          <Label className="text-gray-700">Badge Text</Label>
          <Input value={form.hero.badge} onChange={(e) => updateHero("badge", e.target.value)} className="mt-1" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-700">Title Line 1</Label>
            <Input value={form.hero.titleLine1} onChange={(e) => updateHero("titleLine1", e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label className="text-gray-700">Title Highlight</Label>
            <Input value={form.hero.titleHighlight} onChange={(e) => updateHero("titleHighlight", e.target.value)} className="mt-1" />
          </div>
        </div>
        <div>
          <Label className="text-gray-700">Title Line 2</Label>
          <Input value={form.hero.titleLine2} onChange={(e) => updateHero("titleLine2", e.target.value)} className="mt-1" />
        </div>
        <div>
          <Label className="text-gray-700">Subtitle</Label>
          <textarea value={form.hero.subtitle} onChange={(e) => updateHero("subtitle", e.target.value)} rows={3} className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-700">Primary Button</Label>
            <Input value={form.hero.primaryButton} onChange={(e) => updateHero("primaryButton", e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label className="text-gray-700">Secondary Button</Label>
            <Input value={form.hero.secondaryButton} onChange={(e) => updateHero("secondaryButton", e.target.value)} className="mt-1" />
          </div>
        </div>
        <div>
          <Label className="text-gray-700">Stats</Label>
          <div className="space-y-2 mt-1">
            {form.hero.stats.map((s, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                <Input value={s.number} onChange={(e) => updateStat(idx, "number", e.target.value)} placeholder="50K+" className="w-28" />
                <Input value={s.label} onChange={(e) => updateStat(idx, "label", e.target.value)} placeholder="Active Users" className="flex-1" />
                <button onClick={() => removeStat(idx)} className="text-red-400 hover:text-red-600 p-1"><Trash2 size={15} /></button>
              </div>
            ))}
            <button onClick={addStat} className="flex items-center gap-1 text-sm text-blue-500 hover:underline mt-1"><Plus size={14} />Add Stat</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">Features Section</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-700">Heading</Label>
            <Input value={form.features.heading} onChange={(e) => setForm({ ...form, features: { ...form.features, heading: e.target.value } })} className="mt-1" />
          </div>
          <div>
            <Label className="text-gray-700">Heading Highlight</Label>
            <Input value={form.features.headingHighlight} onChange={(e) => setForm({ ...form, features: { ...form.features, headingHighlight: e.target.value } })} className="mt-1" />
          </div>
        </div>
        <div>
          <Label className="text-gray-700">Subheading</Label>
          <Input value={form.features.subheading} onChange={(e) => setForm({ ...form, features: { ...form.features, subheading: e.target.value } })} className="mt-1" />
        </div>
        <div className="space-y-3">
          {form.features.items.map((item, idx) => (
            <div key={idx} className="p-3 bg-gray-50 rounded-lg space-y-2">
              <p className="text-xs font-semibold text-gray-500 uppercase">Feature {idx + 1}</p>
              <div className="grid grid-cols-2 gap-2">
                <Input value={item.title} onChange={(e) => {
                  const items = [...form.features.items];
                  items[idx] = { ...items[idx], title: e.target.value };
                  setForm({ ...form, features: { ...form.features, items } });
                }} placeholder="Title" />
                <Input value={item.href} onChange={(e) => {
                  const items = [...form.features.items];
                  items[idx] = { ...items[idx], href: e.target.value };
                  setForm({ ...form, features: { ...form.features, items } });
                }} placeholder="/link" />
              </div>
              <textarea value={item.description} onChange={(e) => {
                const items = [...form.features.items];
                items[idx] = { ...items[idx], description: e.target.value };
                setForm({ ...form, features: { ...form.features, items } });
              }} rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Description" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">CTA Section</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-700">Heading</Label>
            <Input value={form.cta.heading} onChange={(e) => setForm({ ...form, cta: { ...form.cta, heading: e.target.value } })} className="mt-1" />
          </div>
          <div>
            <Label className="text-gray-700">Heading Highlight</Label>
            <Input value={form.cta.headingHighlight} onChange={(e) => setForm({ ...form, cta: { ...form.cta, headingHighlight: e.target.value } })} className="mt-1" />
          </div>
        </div>
        <div>
          <Label className="text-gray-700">Subtext</Label>
          <textarea value={form.cta.subtext} onChange={(e) => setForm({ ...form, cta: { ...form.cta, subtext: e.target.value } })} rows={2} className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
        </div>
      </section>

      <Button onClick={handleSave} disabled={saving} className="w-full">{saving ? "Saving..." : "Save All Changes"}</Button>
    </div>
  );
}
