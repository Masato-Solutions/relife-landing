import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { useAboutContent } from "@/hooks/useContent";
import { saveAbout, uploadImage } from "@/lib/api";
import type { AboutContent, TeamMember } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Trash2, ImageIcon } from "lucide-react";

export default function AdminAbout() {
  const { data, loading } = useAboutContent();
  const [form, setForm] = useState<AboutContent | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploadingFor, setUploadingFor] = useState<string | null>(null);

  useEffect(() => {
    if (data) setForm(structuredClone(data));
  }, [data]);

  const handleSave = async () => {
    if (!form) return;
    setSaving(true);
    try {
      await saveAbout(form);
      toast.success("About page saved!");
    } catch (e) {
      toast.error(String(e));
    } finally {
      setSaving(false);
    }
  };

  if (loading || !form) return <div className="text-gray-500">Loading...</div>;

  const updateTeamMember = (idx: number, key: keyof TeamMember, val: string) => {
    const team = [...form.team];
    team[idx] = { ...team[idx], [key]: val };
    setForm({ ...form, team });
  };

  const addTeamMember = () => {
    const newMember: TeamMember = { id: nanoid(), name: "", role: "", bio: "", accent: "#33b7fa", imageUrl: "" };
    setForm({ ...form, team: [...form.team, newMember] });
  };

  const removeTeamMember = (idx: number) => {
    const team = [...form.team];
    team.splice(idx, 1);
    setForm({ ...form, team });
  };

  const handleTeamImageUpload = async (idx: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const memberId = form.team[idx].id;
    setUploadingFor(memberId);
    try {
      const url = await uploadImage(file);
      updateTeamMember(idx, "imageUrl", url);
      toast.success("Image uploaded!");
    } catch {
      toast.error("Image upload failed.");
    } finally {
      setUploadingFor(null);
    }
  };

  return (
    <div className="space-y-8 max-w-2xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">About Page Editor</h2>
        <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : "Save Changes"}</Button>
      </div>

      {/* Mission */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">Mission</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-gray-700">Heading</Label>
            <Input value={form.mission.heading} onChange={(e) => setForm({ ...form, mission: { ...form.mission, heading: e.target.value } })} className="mt-1" />
          </div>
          <div>
            <Label className="text-gray-700">Heading Highlight</Label>
            <Input value={form.mission.headingHighlight} onChange={(e) => setForm({ ...form, mission: { ...form.mission, headingHighlight: e.target.value } })} className="mt-1" />
          </div>
        </div>
        {form.mission.paragraphs.map((p, idx) => (
          <div key={idx}>
            <Label className="text-gray-700">Paragraph {idx + 1}</Label>
            <textarea value={p} onChange={(e) => {
              const paragraphs = [...form.mission.paragraphs];
              paragraphs[idx] = e.target.value;
              setForm({ ...form, mission: { ...form.mission, paragraphs } });
            }} rows={3} className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">Stats</h3>
        {form.stats.map((stat, idx) => (
          <div key={idx} className="flex gap-2 items-center">
            <Input value={stat.number} onChange={(e) => {
              const stats = [...form.stats];
              stats[idx] = { ...stats[idx], number: e.target.value };
              setForm({ ...form, stats });
            }} placeholder="50K+" className="w-28" />
            <Input value={stat.label} onChange={(e) => {
              const stats = [...form.stats];
              stats[idx] = { ...stats[idx], label: e.target.value };
              setForm({ ...form, stats });
            }} placeholder="Active Users" className="flex-1" />
            <button onClick={() => {
              const stats = [...form.stats];
              stats.splice(idx, 1);
              setForm({ ...form, stats });
            }} className="text-red-400 hover:text-red-600 p-1"><Trash2 size={15} /></button>
          </div>
        ))}
        <button onClick={() => setForm({ ...form, stats: [...form.stats, { number: "", label: "", accent: "#33b7fa" }] })} className="flex items-center gap-1 text-sm text-blue-500 hover:underline"><Plus size={14} />Add Stat</button>
      </section>

      {/* Team */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 text-lg">Team Members</h3>
          <button onClick={addTeamMember} className="flex items-center gap-1 text-sm text-blue-500 hover:underline"><Plus size={14} />Add Member</button>
        </div>
        {form.team.map((member, idx) => (
          <div key={member.id} className="p-4 bg-gray-50 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-gray-600">Member {idx + 1}</p>
              <button onClick={() => removeTeamMember(idx)} className="text-red-400 hover:text-red-600"><Trash2 size={15} /></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label className="text-gray-700 text-xs">Name</Label>
                <Input value={member.name} onChange={(e) => updateTeamMember(idx, "name", e.target.value)} className="mt-1 text-sm" />
              </div>
              <div>
                <Label className="text-gray-700 text-xs">Role</Label>
                <Input value={member.role} onChange={(e) => updateTeamMember(idx, "role", e.target.value)} className="mt-1 text-sm" />
              </div>
            </div>
            <div>
              <Label className="text-gray-700 text-xs">Bio</Label>
              <textarea value={member.bio} onChange={(e) => updateTeamMember(idx, "bio", e.target.value)} rows={2} className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
            </div>
            <div className="flex items-center gap-3">
              {member.imageUrl && <img src={member.imageUrl} alt={member.name} className="w-12 h-12 rounded-full object-cover border border-gray-200" />}
              <label className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg cursor-pointer hover:bg-white text-xs text-gray-600">
                <ImageIcon size={14} />
                {uploadingFor === member.id ? "Uploading..." : "Upload Photo"}
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleTeamImageUpload(idx, e)} disabled={uploadingFor === member.id} />
              </label>
            </div>
          </div>
        ))}
      </section>

      {/* Offerings */}
      <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <h3 className="font-semibold text-gray-900 text-lg">What We Offer</h3>
        {form.offerings.map((offering, oIdx) => (
          <div key={oIdx} className="p-4 bg-gray-50 rounded-xl space-y-3">
            <Input value={offering.title} onChange={(e) => {
              const offerings = [...form.offerings];
              offerings[oIdx] = { ...offerings[oIdx], title: e.target.value };
              setForm({ ...form, offerings });
            }} placeholder="Section title" className="font-medium" />
            <div className="space-y-2">
              {offering.items.map((item, iIdx) => (
                <div key={iIdx} className="flex gap-2">
                  <Input value={item} onChange={(e) => {
                    const offerings = [...form.offerings];
                    const items = [...offerings[oIdx].items];
                    items[iIdx] = e.target.value;
                    offerings[oIdx] = { ...offerings[oIdx], items };
                    setForm({ ...form, offerings });
                  }} className="text-sm" />
                  <button onClick={() => {
                    const offerings = [...form.offerings];
                    const items = [...offerings[oIdx].items];
                    items.splice(iIdx, 1);
                    offerings[oIdx] = { ...offerings[oIdx], items };
                    setForm({ ...form, offerings });
                  }} className="text-red-400 hover:text-red-600 p-1"><Trash2 size={14} /></button>
                </div>
              ))}
              <button onClick={() => {
                const offerings = [...form.offerings];
                offerings[oIdx] = { ...offerings[oIdx], items: [...offerings[oIdx].items, ""] };
                setForm({ ...form, offerings });
              }} className="text-xs text-blue-500 hover:underline flex items-center gap-1"><Plus size={12} />Add Item</button>
            </div>
          </div>
        ))}
      </section>

      <Button onClick={handleSave} disabled={saving} className="w-full">{saving ? "Saving..." : "Save All Changes"}</Button>
    </div>
  );
}
