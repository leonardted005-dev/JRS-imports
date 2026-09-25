import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { categories, products, productsInCategory } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Catalog() {
  const { slug } = useParams();
  const category = categories.find((item) => item.slug === slug);
  const [sort, setSort] = useState("featured");

  const list = useMemo(() => {
    const base = category ? productsInCategory(category.slug) : products;
    const next = [...base];
    if (sort === "price-asc") next.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") next.sort((a, b) => b.price - a.price);
    if (sort === "name") next.sort((a, b) => a.name.localeCompare(b.name));
    return next;
  }, [category, sort]);

  if (slug && !category) {
    return (
      <section className="page wrap">
        <h1>Collection not found</h1>
        <p>That category is not in the shop.</p>
        <Link to="/shop" className="btn btn-gold">
          Browse everything
        </Link>
      </section>
    );
  }

  return (
    <section className="page wrap">
      <header className="page-head">
        <div>
          <p className="eyebrow">{category ? "Collection" : "The shop"}</p>
          <h1>{category ? category.name : "All products"}</h1>
          <p className="lede">
            {category
              ? category.blurb
              : "Handicrafts, jewelry, and small tech, packed in Windhoek for delivery across Namibia."}
          </p>
        </div>
        <label className="sort">
          Sort
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
            <option value="name">Name</option>
          </select>
        </label>
      </header>
      <div className="grid grid-3">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
