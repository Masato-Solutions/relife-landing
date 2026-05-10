import { useEffect, useState } from "react";
import { usePrivacyPolicyContent } from "@/hooks/useContent";
import { savePrivacyPolicy } from "@/lib/api";
import type { PrivacyPolicyContent } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function AdminPrivacyPolicy() {
  const { data, loading } = usePrivacyPolicyContent();
  const [form, setForm] = useState<PrivacyPolicyContent | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data) setForm(structuredClone(data));
  }, [data]);

  const handleSave = async () => {
    if (!form) return;
    setSaving(true);
    try {
      await savePrivacyPolicy(form);
      toast.success("Privacy policy saved!");
    } catch (e) {
      toast.error(String(e));
    } finally {
      setSaving(false);
    }
  };

  if (loading || !form) return <div className="text-gray-500">Loading...</div>;

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Privacy Policy Editor</h2>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div>
          <Label className="text-gray-700 text-xs">Title</Label>
          <Input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="mt-1 text-sm"
          />
        </div>
        <div>
          <Label className="text-gray-700 text-xs">Last Updated</Label>
          <Input
            type="date"
            value={form.lastUpdated}
            onChange={(e) => setForm({ ...form, lastUpdated: e.target.value })}
            className="mt-1 text-sm"
          />
        </div>
        <div>
          <Label className="text-gray-700 text-xs">Policy Content</Label>
          <div className="mt-2 rounded-lg border border-gray-200 overflow-hidden">
            <CKEditor
              editor={ClassicEditor}
              data={form.content}
              onChange={(_, editor) => {
                setForm({ ...form, content: editor.getData() });
              }}
            />
          </div>
        </div>
      </section>

      <Button onClick={handleSave} disabled={saving} className="w-full">
        {saving ? "Saving..." : "Save All Changes"}
      </Button>
    </div>
  );
}
