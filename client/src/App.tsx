import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Application from "./pages/Application";
import WellnessCenter from "./pages/WellnessCenter";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminServices from "./pages/admin/AdminServices";
import AdminHome from "./pages/admin/AdminHome";
import AdminAbout from "./pages/admin/AdminAbout";
import AdminWellness from "./pages/admin/AdminWellness";
import AdminContact from "./pages/admin/AdminContact";
import AdminSubmissions from "./pages/admin/AdminSubmissions";

function AdminRouter() {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/admin/products" component={AdminProducts} />
        <Route path="/admin/services" component={AdminServices} />
        <Route path="/admin/home" component={AdminHome} />
        <Route path="/admin/about" component={AdminAbout} />
        <Route path="/admin/wellness" component={AdminWellness} />
        <Route path="/admin/contact" component={AdminContact} />
        <Route path="/admin/submissions" component={AdminSubmissions} />
      </Switch>
    </AdminLayout>
  );
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/products"} component={Products} />
      <Route path={"/services"} component={Services} />
      <Route path={"/application"} component={Application} />
      <Route path={"/wellness-center"} component={WellnessCenter} />
      <Route path={"/about-us"} component={AboutUs} />
      <Route path={"/contact-us"} component={ContactUs} />
      <Route path={"/admin"} component={AdminRouter} />
      <Route path={"/admin/:rest*"} component={AdminRouter} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
