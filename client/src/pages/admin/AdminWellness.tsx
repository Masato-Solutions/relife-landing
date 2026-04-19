import { useState, useEffect } from "react";
import { useWellnessContent } from "@/hooks/useContent";
import { saveWellness } from "@/lib/api";
import type { WellnessContent } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";

const ICON_OPTIONS = ["BookOpen", "Lightbulb", "Users", "TrendingUp", "Heart", "Star", "Award", "Zap"];

export default function AdminWellness() {
  const { data, loading } = useWellnessContent();
  const [form, setForm] = useState<WellnessContent | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data) setForm(structuredClone(data));
  }, [data]);

  const handleSave = async () => {
    if (!form) return;
    setSaving(true);
    try {
      await saveWellness(form);
      toast.success("Wellness content saved!");
    } catch (e) {
      toast.error(String(e));
    } finally {
      setSaving(false);
    }
  };

  if (loading || !form) return <div className="text-gray-500">Loading...</div>;

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Wellness Center Editor</h2>
        <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : "Save Changes"}</Button>
      </div>

      {/* Resources */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 text-lg">Resources</h3>
          <button onClick={() => setForm({ ...form, resources: [...form.resources, { id: Date.now().toString(), iconName: "BookOpen", title: "", description: "", count: "", accent: "#33b7fa" }] })} className="flex items-center gap-1 text-sm text-blue-500 hover:underline"><Plus size={14} />Add</button>
        </div>
        {form.resources.map((r, idx) => (
          <div key={r.id} className="p-4 bg-gray-50 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-500 uppercase">Resource {idx + 1}</p>
              <button onClick={() => {
                const resources = [...form.resources];
                resources.splice(idx, 1);
                setForm({ ...form, resources });
              }} className="text-red-400 hover:text-red-600"><Trash2 size={15} /></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-gray-700 text-xs">Icon</Label>
                <select value={r.iconName} onChange={(e) => {
                  const resources = [...form.resources];
                  resources[idx] = { ...resources[idx], iconName: e.target.value };
                  setForm({ ...form, resources });
                }} className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none">
                  {ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div>
                <Label className="text-gray-700 text-xs">Count Label</Label>
                <Input value={r.count} onChange={(e) => {
                  const resources = [...form.resources];
                  resources[idx] = { ...resources[idx], count: e.target.value };
                  setForm({ ...form, resources });
                }} placeholder="24 guides" className="mt-1 text-sm" />
              </div>
            </div>
            <Input value={r.title} onChange={(e) => {
              const resources = [...form.resources];
              resources[idx] = { ...resources[idx], title: e.target.value };
              setForm({ ...form, resources });
            }} placeholder="Resource title" />
            <textarea value={r.description} onChange={(e) => {
              const resources = [...form.resources];
              resources[idx] = { ...resources[idx], description: e.target.value };
              setForm({ ...form, resources });
            }} rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none resize-none" placeholder="Description" />
          </div>
        ))}
      </section>

      {/* Articles */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 text-lg">Articles</h3>
          <button onClick={() => setForm({ ...form, articles: [...form.articles, { id: Date.now().toString(), title: "", category: "", readTime: "", date: "", accent: "#33b7fa" }] })} className="flex items-center gap-1 text-sm text-blue-500 hover:underline"><Plus size={14} />Add</button>
        </div>
        {form.articles.map((a, idx) => (
          <div key={a.id} className="p-4 bg-gray-50 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <Input value={a.title} onChange={(e) => {
                const articles = [...form.articles];
                articles[idx] = { ...articles[idx], title: e.target.value };
                setForm({ ...form, articles });
              }} placeholder="Article title" className="flex-1 mr-2" />
              <button onClick={() => {
                const articles = [...form.articles];
                articles.splice(idx, 1);
                setForm({ ...form, articles });
              }} className="text-red-400 hover:text-red-600"><Trash2 size={15} /></button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Input value={a.category} onChange={(e) => {
                const articles = [...form.articles];
                articles[idx] = { ...articles[idx], category: e.target.value };
                setForm({ ...form, articles });
              }} placeholder="Category" className="text-sm" />
              <Input value={a.readTime} onChange={(e) => {
                const articles = [...form.articles];
                articles[idx] = { ...articles[idx], readTime: e.target.value };
                setForm({ ...form, articles });
              }} placeholder="8 min read" className="text-sm" />
              <Input value={a.date} onChange={(e) => {
                const articles = [...form.articles];
                articles[idx] = { ...articles[idx], date: e.target.value };
                setForm({ ...form, articles });
              }} placeholder="April 10, 2026" className="text-sm" />
            </div>
          </div>
        ))}
      </section>

      {/* Daily Tips */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 text-lg">Daily Tips</h3>
          <button onClick={() => setForm({ ...form, dailyTips: [...form.dailyTips, { id: Date.now().toString(), title: "", accent: "#33b7fa", tips: [] }] })} className="flex items-center gap-1 text-sm text-blue-500 hover:underline"><Plus size={14} />Add Section</button>
        </div>
        {form.dailyTips.map((section, sIdx) => (
          <div key={section.id} className="p-4 bg-gray-50 rounded-xl space-y-3">
            <div className="flex gap-2 items-center">
              <Input value={section.title} onChange={(e) => {
                const tips = [...form.dailyTips];
                tips[sIdx] = { ...tips[sIdx], title: e.target.value };
                setForm({ ...form, dailyTips: tips });
              }} placeholder="Section title (e.g. Morning Routine)" className="flex-1" />
              <button onClick={() => {
                const tips = [...form.dailyTips];
                tips.splice(sIdx, 1);
                setForm({ ...form, dailyTips: tips });
              }} className="text-red-400 hover:text-red-600"><Trash2 size={15} /></button>
            </div>
            <div className="space-y-2 pl-2">
              {section.tips.map((tip, tIdx) => (
                <div key={tIdx} className="flex gap-2">
                  <Input value={tip} onChange={(e) => {
                    const dailyTips = [...form.dailyTips];
                    const tips = [...dailyTips[sIdx].tips];
                    tips[tIdx] = e.target.value;
                    dailyTips[sIdx] = { ...dailyTips[sIdx], tips };
                    setForm({ ...form, dailyTips });
                  }} className="text-sm" />
                  <button onClick={() => {
                    const dailyTips = [...form.dailyTips];
                    const tips = [...dailyTips[sIdx].tips];
                    tips.splice(tIdx, 1);
                    dailyTips[sIdx] = { ...dailyTips[sIdx], tips };
                    setForm({ ...form, dailyTips });
                  }} className="text-red-400 hover:text-red-600"><Trash2 size={14} /></button>
                </div>
              ))}
              <button onClick={() => {
                const dailyTips = [...form.dailyTips];
                dailyTips[sIdx] = { ...dailyTips[sIdx], tips: [...dailyTips[sIdx].tips, ""] };
                setForm({ ...form, dailyTips });
              }} className="text-xs text-blue-500 hover:underline flex items-center gap-1"><Plus size={12} />Add Tip</button>
            </div>
          </div>
        ))}
      </section>

      <Button onClick={handleSave} disabled={saving} className="w-full">{saving ? "Saving..." : "Save All Changes"}</Button>
    </div>
  );
}
