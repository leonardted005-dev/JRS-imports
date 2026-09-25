import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchProducts } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const results = useMemo(() => searchProducts(initial), [initial]);

  function submit(event) {
    event.preventDefault();
    setParams(query.trim() ? { q: query.trim() } : {});
  }

  return (
    <section className="page wrap">
      <h1>Search</h1>
      <form className="search search-page" onSubmit={submit} role="search">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Kurta, jhumka, speaker…"
          aria-label="Search products"
        />
        <button type="submit">Search</button>
      </form>
      {initial && (
        <p className="lede">
          {results.length} result{results.length === 1 ? "" : "s"} for “{initial}”
        </p>
      )}
      <div className="grid grid-3">
        {results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
