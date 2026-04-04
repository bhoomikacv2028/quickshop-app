import { useState } from "react";
import { products, type Category } from "@/data/mockData";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import AuthModal from "@/components/AuthModal";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const filtered = products.filter((p) => {
    const matchesCat = !selectedCategory || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar onCartOpen={() => setCartOpen(true)} onAuthOpen={() => setAuthOpen(true)} />

      {/* Hero */}
      <section className="hero-gradient py-16 text-primary-foreground">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Fresh Groceries,<br />Delivered Fast 🚀
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg opacity-90">
            Shop farm-fresh produce, dairy, snacks and more — right from your couch.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-8">
        {/* Search + Filter */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <p className="text-lg font-medium">No products found</p>
            <p className="text-sm">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
};

export default Index;
