import { Link } from "wouter";
import { Package, Calendar, Home, Users, Leaf, Phone, Inbox, ArrowRight } from "lucide-react";

const SECTIONS = [
  { href: "/admin/products", label: "Products", icon: Package, desc: "Manage your wellness product catalog" },
  { href: "/admin/services", label: "Services & Events", icon: Calendar, desc: "Edit services and upcoming events" },
  { href: "/admin/home", label: "Home Page", icon: Home, desc: "Edit hero, features, and CTA content" },
  { href: "/admin/about", label: "About Us", icon: Users, desc: "Update mission, team, and values" },
  { href: "/admin/wellness", label: "Wellness Center", icon: Leaf, desc: "Manage resources, articles, and tips" },
  { href: "/admin/contact", label: "Contact Info", icon: Phone, desc: "Update contact details and FAQs" },
  { href: "/admin/submissions", label: "Form Submissions", icon: Inbox, desc: "View contact form submissions" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back 👋</h2>
        <p className="text-gray-500 text-sm mt-1">Manage your Re:Life website content from here.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SECTIONS.map(({ href, label, icon: Icon, desc }) => (
          <Link key={href} href={href}>
            <a className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-200 transition-all group">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <Icon size={20} className="text-blue-500" />
                </div>
                <ArrowRight size={16} className="text-gray-300 group-hover:text-blue-400 transition-colors mt-1" />
              </div>
              <h3 className="font-semibold text-gray-900 mt-3">{label}</h3>
              <p className="text-sm text-gray-500 mt-1">{desc}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
