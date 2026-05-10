import { useState } from "react";
import { useProducts } from "@/hooks/useContent";
import { saveProduct, deleteProduct, uploadImage } from "@/lib/api";
import type { Product } from "@/types/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, X, ImageIcon } from "lucide-react";

const EMPTY: Omit<Product, "id"> = {
  name: "",
  category: "",
  price: "",
  rating: 5,
  reviews: 0,
  description: "",
  features: [],
  accent: "#33b7fa",
  imageUrl: "",
};

export default function AdminProducts() {
  const { data: products, loading, refetch } = useProducts();
  const [editing, setEditing] = useState<Partial<Product> | null>(null);
  const [saving, setSaving] = useState(false);
  const [newFeature, setNewFeature] = useState("");
  const [uploading, setUploading] = useState(false);

  const openNew = () => setEditing({ ...EMPTY });
  const openEdit = (p: Product) => setEditing({ ...p });
  const closeForm = () => setEditing(null);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      await saveProduct(editing as Product);
      toast.success(editing.id ? "Product updated!" : "Product created!");
      refetch();
      closeForm();
    } catch (e) {
      toast.error(String(e));
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this product?")) return;
    try {
      await deleteProduct(id);
      toast.success("Product deleted.");
      refetch();
    } catch (e) {
      toast.error(String(e));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editing) return;
    setUploading(true);
    try {
      const url = await uploadImage(file);
      setEditing({ ...editing, imageUrl: url });
      toast.success("Image uploaded!");
    } catch (err) {
      toast.error("Image upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const addFeature = () => {
    if (!newFeature.trim() || !editing) return;
    setEditing({ ...editing, features: [...(editing.features ?? []), newFeature.trim()] });
    setNewFeature("");
  };

  const removeFeature = (idx: number) => {
    if (!editing) return;
    const features = [...(editing.features ?? [])];
    features.splice(idx, 1);
    setEditing({ ...editing, features });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Products ({products?.length ?? 0})</h2>
        <Button onClick={openNew} size="sm" className="gap-2">
          <Plus size={16} /> Add Product
        </Button>
      </div>

      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Name</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">Category</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600 hidden md:table-cell">Price</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(products ?? []).map((p) => (
                <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                  <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{p.category}</td>
                  <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{p.price}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => openEdit(p)} className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors">
                        <Pencil size={15} />
                      </button>
                      <button onClick={() => handleDelete(p.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {(products ?? []).length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-8 text-center text-gray-400">No products yet. Add your first product!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Form Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="font-bold text-gray-900">{editing.id ? "Edit Product" : "Add Product"}</h3>
              <button onClick={closeForm} className="text-gray-400 hover:text-gray-700"><X size={20} /></button>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-gray-700">Name</Label>
                  <Input value={editing.name ?? ""} onChange={(e) => setEditing({ ...editing, name: e.target.value })} placeholder="Product name" className="mt-1" />
                </div>
                <div>
                  <Label className="text-gray-700">Category</Label>
                  <Input value={editing.category ?? ""} onChange={(e) => setEditing({ ...editing, category: e.target.value })} placeholder="e.g. Sleep Wellness" className="mt-1" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-gray-700">Price</Label>
                  <Input value={editing.price ?? ""} onChange={(e) => setEditing({ ...editing, price: e.target.value })} placeholder="$99.99" className="mt-1" />
                </div>
                <div>
                  <Label className="text-gray-700">Rating</Label>
                  <Input type="number" min="0" max="5" step="0.1" value={editing.rating ?? 5} onChange={(e) => setEditing({ ...editing, rating: parseFloat(e.target.value) })} className="mt-1" />
                </div>
                <div>
                  <Label className="text-gray-700">Reviews</Label>
                  <Input type="number" min="0" value={editing.reviews ?? 0} onChange={(e) => setEditing({ ...editing, reviews: parseInt(e.target.value) })} className="mt-1" />
                </div>
              </div>
              <div>
                <Label className="text-gray-700">Description</Label>
                <textarea
                  value={editing.description ?? ""}
                  onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                  placeholder="Product description..."
                  rows={3}
                  className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div>
                <Label className="text-gray-700">Accent Color</Label>
                <div className="flex items-center gap-2 mt-1">
                  <input type="color" value={editing.accent ?? "#33b7fa"} onChange={(e) => setEditing({ ...editing, accent: e.target.value })} className="w-10 h-10 rounded cursor-pointer border-0" />
                  <Input value={editing.accent ?? ""} onChange={(e) => setEditing({ ...editing, accent: e.target.value })} className="flex-1" />
                </div>
              </div>
              <div>
                <Label className="text-gray-700">Features</Label>
                <div className="space-y-2 mt-1">
                  {(editing.features ?? []).map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="flex-1 text-sm text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg">{f}</span>
                      <button onClick={() => removeFeature(i)} className="text-red-400 hover:text-red-600"><X size={14} /></button>
                    </div>
                  ))}
                  <div className="flex gap-2">
                    <Input value={newFeature} onChange={(e) => setNewFeature(e.target.value)} placeholder="Add a feature..." onKeyDown={(e) => e.key === "Enter" && addFeature()} className="text-sm" />
                    <Button type="button" onClick={addFeature} size="sm" variant="outline">Add</Button>
                  </div>
                </div>
              </div>
              <div>
                <Label className="text-gray-700">Product Image</Label>
                <div className="mt-1 flex items-center gap-3">
                  {editing.imageUrl && <img src={editing.imageUrl} alt="" className="w-16 h-16 rounded-lg object-cover border border-gray-200" />}
                  <label className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 text-sm text-gray-600">
                    <ImageIcon size={16} />
                    {uploading ? "Uploading..." : "Upload Image"}
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex gap-3 px-6 py-4 border-t border-gray-100">
              <Button onClick={handleSave} disabled={saving} className="flex-1">
                {saving ? "Saving..." : "Save Product"}
              </Button>
              <Button variant="outline" onClick={closeForm}>Cancel</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
