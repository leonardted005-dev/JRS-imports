import { Link } from "react-router-dom";
import { categories, products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const trending = products.filter((product) => product.trending);

  return (
    <>
      <section className="hero">
        <img
          className="hero-photo"
          src="/images/hero-desert.png"
          alt="A woman in a teal kurta holding a basket of textiles and a speaker, standing among desert acacia trees"
        />
        <div className="hero-copy">
          <h1>
            Curated finds from India,
            <br />
            delivered to Namibia.
          </h1>
          <p>
            Authentic handicrafts, fashion, and tech accessories sourced directly
            from Indian artisans.
          </p>
          <Link to="/shop" className="btn btn-gold btn-lg">
            Shop the collection
          </Link>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <h2 className="section-title">Trending Now</h2>
          <div className="grid grid-3">
            {trending.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="band band-tight">
        <div className="wrap">
          <h2 className="section-title">Shop by category</h2>
          <div className="category-row">
            {categories.map((category) => (
              <Link key={category.slug} to={`/category/${category.slug}`} className="category-tile">
                <span>{category.name}</span>
                <small>{category.blurb}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
