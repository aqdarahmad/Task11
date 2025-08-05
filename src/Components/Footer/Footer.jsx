
import './footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>We provide the best products at the best prices with fast delivery and excellent support.</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/cart">Cart</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: support@reactshop.com</p>
        <p>Phone: +123 456 7890</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ReactShop. All rights reserved.</p>
      </div>
    </footer>
  );
}
