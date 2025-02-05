import { AiFillAmazonCircle } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";

function NavBar() {
  return (
    <header>
      <div className="nav-logo">
        <AiFillAmazonCircle className="amzn-icon" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li>Home</li>
          <li>Contacts</li>
          <li>Products</li>
          <li>Offers</li>
        </ul>
      </nav>
      <div className="cart">
        <IoMdCart className="cart-icon" />
      </div>
    </header>
  );
}

export default NavBar;
