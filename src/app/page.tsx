import Image from "next/image";
import "./styles.css";

export default function Home() {
  return (
    <main className="styles.main">
      <header className="header">
        <h1>Welcome to My Batch E-Commerce</h1>
        <p>Your one-stop shop for everything!</p>
      </header>

      <section className="banner">
        <Image
          src="https://picsum.photos/id/250/200/300"
          alt="Banner Image"
          layout="responsive"
          width={200}
          height={200}
        />
      </section>

      <section className="products">
        <h2>Featured Products</h2>
        <div className="productGrid">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="productCard" key={index}>
              <Image
                src={`https://picsum.photos/id/${230 + index}/200/300`}
                alt={`Product ${index + 1}`}
                width={200}
                height={200}
              />
              <h3>Product Title {index + 1}</h3>
              <p>$49.99</p>
              <button className="addToCart">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Don't Miss Out!</h2>
        <p>
          Subscribe to our newsletter for the latest updates and special offers!
        </p>
        <button className="subscribeButton">Subscribe Now</button>
      </section>
    </main>
  );
}
