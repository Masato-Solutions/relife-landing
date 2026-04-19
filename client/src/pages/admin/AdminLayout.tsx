import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { verifyAdminPassword } from "@/lib/api";
import { toast } from "sonner";
import {
  LayoutDashboard,
  Package,
  Calendar,
  Home,
  Users,
  Leaf,
  Phone,
  Inbox,
  LogOut,
  Menu,
  X,
} from "lucide-react";

interface AdminAuthData {
  authenticated: boolean;
  password: string;
}

function getAdminAuth(): AdminAuthData | null {
  try {
    const raw = localStorage.getItem("relife_admin");
    if (raw) return JSON.parse(raw) as AdminAuthData;
  } catch {
    // ignore
  }
  return null;
}

function setAdminAuth(data: AdminAuthData | null) {
  if (data) {
    localStorage.setItem("relife_admin", JSON.stringify(data));
  } else {
    localStorage.removeItem("relife_admin");
  }
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const ok = await verifyAdminPassword(password);
    setLoading(false);
    if (ok) {
      setAdminAuth({ authenticated: true, password });
      onLogin();
    } else {
      toast.error("Invalid password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
            style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
          >
            RL
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Re:Life Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Enter your admin password to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="password" className="text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="mt-1"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full text-white font-semibold"
            style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
          >
            {loading ? "Verifying..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/services", label: "Services & Events", icon: Calendar },
  { href: "/admin/home", label: "Home Page", icon: Home },
  { href: "/admin/about", label: "About Us", icon: Users },
  { href: "/admin/wellness", label: "Wellness Center", icon: Leaf },
  { href: "/admin/contact", label: "Contact Info", icon: Phone },
  { href: "/admin/submissions", label: "Form Submissions", icon: Inbox },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AdminAuthData | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setAuth(getAdminAuth());
  }, []);

  const handleLogin = () => setAuth(getAdminAuth());

  const handleLogout = () => {
    setAdminAuth(null);
    setAuth(null);
    toast.success("Logged out successfully.");
  };

  if (!auth?.authenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #33b7fa, #4cd7ef)" }}
          >
            RL
          </div>
          <span className="font-bold text-gray-900 text-lg">Re:Life Admin</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const isActive = href === "/admin" ? location === "/admin" : location.startsWith(href);
            return (
              <Link key={href} href={href}>
                <a
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon size={18} />
                  {label}
                </a>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-gray-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 w-full transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center gap-4">
          <button
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-gray-900 font-semibold flex-1">
            {NAV_ITEMS.find((n) => (n.href === "/admin" ? location === "/admin" : location.startsWith(n.href)))?.label ?? "Admin"}
          </h1>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            View Site →
          </a>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
