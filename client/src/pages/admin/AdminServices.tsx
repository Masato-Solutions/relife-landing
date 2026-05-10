import { useState } from "react";
import { useServices } from "@/hooks/useContent";
import { saveService, deleteService, saveEvent, deleteEvent } from "@/lib/api";
import type { Service, Event } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, X } from "lucide-react";

const ICON_OPTIONS = ["Calendar", "Users", "Zap", "Award", "Heart", "Star", "BookOpen", "Lightbulb"];

const EMPTY_SERVICE: Omit<Service, "id"> = {
  iconName: "Calendar",
  title: "",
  description: "",
  schedule: "",
  participants: "",
  duration: "",
  accent: "#33b7fa",
};

const EMPTY_EVENT: Omit<Event, "id"> = {
  title: "",
  date: "",
  time: "",
  location: "",
  spots: 30,
  accent: "#33b7fa",
};

export default function AdminServices() {
  const { data, loading, refetch } = useServices();
  const services = data?.services ?? [];
  const events = data?.events ?? [];

  const [tab, setTab] = useState<"services" | "events">("services");
  const [editingService, setEditingService] = useState<Partial<Service> | null>(null);
  const [editingEvent, setEditingEvent] = useState<Partial<Event> | null>(null);
  const [saving, setSaving] = useState(false);

  const handleSaveService = async () => {
    if (!editingService) return;
    setSaving(true);
    try {
      await saveService(editingService as unknown as Record<string, unknown> & { id?: string });
      toast.success(editingService.id ? "Service updated!" : "Service created!");
      refetch();
      setEditingService(null);
    } catch (e) {
      toast.error(String(e));
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm("Delete this service?")) return;
    try {
      await deleteService(id);
      toast.success("Service deleted.");
      refetch();
    } catch (e) {
      toast.error(String(e));
    }
  };

  const handleSaveEvent = async () => {
    if (!editingEvent) return;
    setSaving(true);
    try {
      await saveEvent(editingEvent as unknown as Record<string, unknown> & { id?: string });
      toast.success(editingEvent.id ? "Event updated!" : "Event created!");
      refetch();
      setEditingEvent(null);
    } catch (e) {
      toast.error(String(e));
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (!confirm("Delete this event?")) return;
    try {
      await deleteEvent(id);
      toast.success("Event deleted.");
      refetch();
    } catch (e) {
      toast.error(String(e));
    }
  };

  return (
    <div>
      {/* Tab switcher */}
      <div className="flex gap-2 mb-6">
        {(["services", "events"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
              tab === t ? "bg-blue-500 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {t === "services" ? "Services" : "Upcoming Events"}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : tab === "services" ? (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Services ({services.length})</h2>
            <Button onClick={() => setEditingService({ ...EMPTY_SERVICE })} size="sm" className="gap-2">
              <Plus size={16} /> Add Service
            </Button>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Title</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">Schedule</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900">{s.title}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{s.schedule}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => setEditingService({ ...s })} className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500"><Pencil size={15} /></button>
                        <button onClick={() => handleDeleteService(s.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500"><Trash2 size={15} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {services.length === 0 && (
                  <tr><td colSpan={3} className="px-4 py-8 text-center text-gray-400">No services yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Events ({events.length})</h2>
            <Button onClick={() => setEditingEvent({ ...EMPTY_EVENT })} size="sm" className="gap-2">
              <Plus size={16} /> Add Event
            </Button>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-600">Title</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">Date</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">Location</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((ev) => (
                  <tr key={ev.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900">{ev.title}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{ev.date}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{ev.location}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => setEditingEvent({ ...ev })} className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500"><Pencil size={15} /></button>
                        <button onClick={() => handleDeleteEvent(ev.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500"><Trash2 size={15} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
                {events.length === 0 && (
                  <tr><td colSpan={4} className="px-4 py-8 text-center text-gray-400">No events yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {/* Service Form Modal */}
      {editingService && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">{editingService.id ? "Edit Service" : "Add Service"}</h3>
              <button onClick={() => setEditingService(null)} className="text-gray-400 hover:text-gray-700"><X size={20} /></button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div>
                <Label className="text-gray-700">Icon</Label>
                <select
                  value={editingService.iconName ?? "Calendar"}
                  onChange={(e) => setEditingService({ ...editingService, iconName: e.target.value })}
                  className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {ICON_OPTIONS.map((icon) => <option key={icon} value={icon}>{icon}</option>)}
                </select>
              </div>
              <div>
                <Label className="text-gray-700">Title</Label>
                <Input value={editingService.title ?? ""} onChange={(e) => setEditingService({ ...editingService, title: e.target.value })} className="mt-1" />
              </div>
              <div>
                <Label className="text-gray-700">Description</Label>
                <textarea value={editingService.description ?? ""} onChange={(e) => setEditingService({ ...editingService, description: e.target.value })} rows={3} className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-700">Schedule</Label>
                  <Input value={editingService.schedule ?? ""} onChange={(e) => setEditingService({ ...editingService, schedule: e.target.value })} placeholder="Weekly on Thursdays" className="mt-1" />
                </div>
                <div>
                  <Label className="text-gray-700">Participants</Label>
                  <Input value={editingService.participants ?? ""} onChange={(e) => setEditingService({ ...editingService, participants: e.target.value })} placeholder="50-100" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-700">Duration</Label>
                  <Input value={editingService.duration ?? ""} onChange={(e) => setEditingService({ ...editingService, duration: e.target.value })} placeholder="2 hours" className="mt-1" />
                </div>
                <div>
                  <Label className="text-gray-700">Accent Color</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <input type="color" value={editingService.accent ?? "#33b7fa"} onChange={(e) => setEditingService({ ...editingService, accent: e.target.value })} className="w-10 h-10 rounded border-0 cursor-pointer" />
                    <Input value={editingService.accent ?? ""} onChange={(e) => setEditingService({ ...editingService, accent: e.target.value })} className="flex-1 text-xs" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t border-gray-100">
              <Button onClick={handleSaveService} disabled={saving} className="flex-1">{saving ? "Saving..." : "Save Service"}</Button>
              <Button variant="outline" onClick={() => setEditingService(null)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}

      {/* Event Form Modal */}
      {editingEvent && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">{editingEvent.id ? "Edit Event" : "Add Event"}</h3>
              <button onClick={() => setEditingEvent(null)} className="text-gray-400 hover:text-gray-700"><X size={20} /></button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div>
                <Label className="text-gray-700">Title</Label>
                <Input value={editingEvent.title ?? ""} onChange={(e) => setEditingEvent({ ...editingEvent, title: e.target.value })} className="mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-700">Date</Label>
                  <Input value={editingEvent.date ?? ""} onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })} placeholder="April 25, 2026" className="mt-1" />
                </div>
                <div>
                  <Label className="text-gray-700">Time</Label>
                  <Input value={editingEvent.time ?? ""} onChange={(e) => setEditingEvent({ ...editingEvent, time: e.target.value })} placeholder="6:00 PM - 8:00 PM" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-700">Location</Label>
                  <Input value={editingEvent.location ?? ""} onChange={(e) => setEditingEvent({ ...editingEvent, location: e.target.value })} placeholder="Virtual" className="mt-1" />
                </div>
                <div>
                  <Label className="text-gray-700">Spots Available</Label>
                  <Input type="number" min="0" value={editingEvent.spots ?? 30} onChange={(e) => setEditingEvent({ ...editingEvent, spots: parseInt(e.target.value) })} className="mt-1" />
                </div>
              </div>
              <div>
                <Label className="text-gray-700">Accent Color</Label>
                <div className="flex items-center gap-2 mt-1">
                  <input type="color" value={editingEvent.accent ?? "#33b7fa"} onChange={(e) => setEditingEvent({ ...editingEvent, accent: e.target.value })} className="w-10 h-10 rounded border-0 cursor-pointer" />
                  <Input value={editingEvent.accent ?? ""} onChange={(e) => setEditingEvent({ ...editingEvent, accent: e.target.value })} className="flex-1 text-xs" />
                </div>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t border-gray-100">
              <Button onClick={handleSaveEvent} disabled={saving} className="flex-1">{saving ? "Saving..." : "Save Event"}</Button>
              <Button variant="outline" onClick={() => setEditingEvent(null)}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
