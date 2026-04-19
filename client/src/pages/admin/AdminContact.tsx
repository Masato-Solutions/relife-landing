import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useContactContent } from "@/hooks/useContent";
import { saveContact } from "@/lib/api";
import type { ContactContent } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";

const ICON_OPTIONS = ["Mail", "Phone", "MapPin", "Clock", "Globe", "MessageSquare"];

export default function AdminContact() {
  const { data, loading } = useContactContent();
  const [form, setForm] = useState<ContactContent | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data) setForm(structuredClone(data));
  }, [data]);

  const handleSave = async () => {
    if (!form) return;
    setSaving(true);
    try {
      await saveContact(form);
      toast.success("Contact info saved!");
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
        <h2 className="text-xl font-bold text-gray-900">Contact Page Editor</h2>
        <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : "Save Changes"}</Button>
      </div>

      {/* Contact Cards */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">Contact Cards</h3>
        {form.cards.map((card, idx) => (
          <div key={idx} className="p-4 bg-gray-50 rounded-xl space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-gray-700 text-xs">Icon</Label>
                <select value={card.iconName} onChange={(e) => {
                  const cards = [...form.cards];
                  cards[idx] = { ...cards[idx], iconName: e.target.value };
                  setForm({ ...form, cards });
                }} className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none">
                  {ICON_OPTIONS.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div>
                <Label className="text-gray-700 text-xs">Title</Label>
                <Input value={card.title} onChange={(e) => {
                  const cards = [...form.cards];
                  cards[idx] = { ...cards[idx], title: e.target.value };
                  setForm({ ...form, cards });
                }} className="mt-1 text-sm" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-gray-700 text-xs">Content</Label>
                <Input value={card.content} onChange={(e) => {
                  const cards = [...form.cards];
                  cards[idx] = { ...cards[idx], content: e.target.value };
                  setForm({ ...form, cards });
                }} className="mt-1 text-sm" />
              </div>
              <div>
                <Label className="text-gray-700 text-xs">Subtext</Label>
                <Input value={card.subtext} onChange={(e) => {
                  const cards = [...form.cards];
                  cards[idx] = { ...cards[idx], subtext: e.target.value };
                  setForm({ ...form, cards });
                }} className="mt-1 text-sm" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Why Contact Us */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 text-lg">Why Contact Us? (Reasons)</h3>
          <button onClick={() => setForm({ ...form, whyContactUs: [...form.whyContactUs, ""] })} className="flex items-center gap-1 text-sm text-blue-500 hover:underline"><Plus size={14} />Add</button>
        </div>
        {form.whyContactUs.map((reason, idx) => (
          <div key={idx} className="flex gap-2">
            <Input value={reason} onChange={(e) => {
              const whyContactUs = [...form.whyContactUs];
              whyContactUs[idx] = e.target.value;
              setForm({ ...form, whyContactUs });
            }} className="text-sm" />
            <button onClick={() => {
              const whyContactUs = [...form.whyContactUs];
              whyContactUs.splice(idx, 1);
              setForm({ ...form, whyContactUs });
            }} className="text-red-400 hover:text-red-600 p-1"><Trash2 size={14} /></button>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 text-lg">FAQ Items</h3>
          <button onClick={() => setForm({ ...form, faq: [...form.faq, { id: nanoid(), q: "", a: "" }] })} className="flex items-center gap-1 text-sm text-blue-500 hover:underline"><Plus size={14} />Add FAQ</button>
        </div>
        {form.faq.map((item, idx) => (
          <div key={item.id} className="p-4 bg-gray-50 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-500">FAQ {idx + 1}</p>
              <button onClick={() => {
                const faq = [...form.faq];
                faq.splice(idx, 1);
                setForm({ ...form, faq });
              }} className="text-red-400 hover:text-red-600"><Trash2 size={15} /></button>
            </div>
            <div>
              <Label className="text-gray-700 text-xs">Question</Label>
              <Input value={item.q} onChange={(e) => {
                const faq = [...form.faq];
                faq[idx] = { ...faq[idx], q: e.target.value };
                setForm({ ...form, faq });
              }} className="mt-1 text-sm" />
            </div>
            <div>
              <Label className="text-gray-700 text-xs">Answer</Label>
              <textarea value={item.a} onChange={(e) => {
                const faq = [...form.faq];
                faq[idx] = { ...faq[idx], a: e.target.value };
                setForm({ ...form, faq });
              }} rows={2} className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none resize-none" />
            </div>
          </div>
        ))}
      </section>

      <Button onClick={handleSave} disabled={saving} className="w-full">{saving ? "Saving..." : "Save All Changes"}</Button>
    </div>
  );
}
