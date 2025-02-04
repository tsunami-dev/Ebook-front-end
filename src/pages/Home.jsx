// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the eBook Store</h1>
//       <p>Buy our exclusive eBook now!</p>
//       <Link to="/checkout">
//         <button>Buy Now</button>
//       </Link>
//     </div>
//   );
// };

// export default Home;
// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Welcome to my page</h1>

//       {/* New paragraph added between h1 and p */}
//       <p style={styles.paragraph}>
//         This is the place where you take your goals and add discipline to them so you can see outstanding growth! But before I go into that, let me just give you all an understanding of who I am and my journey to get to where I am now.
//       </p>

//       <p style={styles.subtitle}>
//         Get access to exclusive knowledge for just $10!
//       </p>

//       <Link to="/checkout">
//         <button style={styles.button}>Buy Now</button>
//       </Link>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "30px 20px",
//     fontFamily: "'Poppins', sans-serif",
//   },
//   title: {
//     fontSize: "28px",
//     fontWeight: "700",
//     color: "#1a1a2e",
//     marginBottom: "10px",
//     lineHeight: "1.4",
//   },
//   paragraph: {
//     fontSize: "18px",
//     fontWeight: "400",
//     color: "#333",
//     lineHeight: "1.6",
//     marginBottom: "20px",
//     maxWidth: "800px",
//     margin: "20px auto",
//     padding: "0 15px",
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: "18px",
//     fontWeight: "400",
//     color: "#555",
//     marginBottom: "20px",
//   },
//   button: {
//     padding: "12px 25px",
//     fontSize: "18px",
//     fontWeight: "600",
//     color: "#fff",
//     backgroundColor: "#e94560",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaEnvelope, FaYoutube, FaSnapchat } from "react-icons/fa";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Profile Section */}
      <div style={styles.profile}>
        <img
          src="https://via.placeholder.com/80" // Replace with actual profile image
          alt="Profile"
          style={styles.profileImage}
        />
        <h2 style={styles.username}>Trim </h2>
        <div style={styles.socialIcons}>
          <FaInstagram style={styles.icon} />
          <FaTiktok style={styles.icon} />
          <FaEnvelope style={styles.icon} />
          <FaYoutube style={styles.icon} />
          <FaSnapchat style={styles.icon} />
        </div>
      </div>

      {/* Introduction Paragraph */}
      <p style={styles.paragraph}>
        This is the place where you take your goals and add discipline to them so you can see outstanding growth! But before I go into that, let me just give you all an understanding of who I am and my journey to get to where I am now.
      </p>

      {/* Products Section */}
      <div style={styles.productsContainer}>
        <ProductCard
          image="https://via.placeholder.com/100" // Replace with actual image
          title="The guide to sucplting your new body"
          description="A product that puts acheving your body goals in lets than 10 steps."
          price="$46.88"
          rating="4.3"
        />
        <ProductCard
          image="https://via.placeholder.com/100" // Replace with actual image
          title="more coming soon"
          description=""
          price=""
          rating="N/A"
        />
      </div>
    </div>
  );
};

// Reusable Product Card Component
const ProductCard = ({ image, title, description, price, rating }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.cardImage} />
      <div style={styles.cardContent}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardDescription}>{description}</p>
        <p style={styles.cardPrice}>
          {price} <span style={styles.rating}>⭐ {rating}</span>
        </p>
        <Link to="/checkout">
          <button style={styles.button}>Get My Program Now</button>
        </Link>
      </div>
    </div>
  );
};

// Styles Object
const styles = {
  container: {
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
    padding: "20px",
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  profileImage: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  username: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  socialIcons: {
    display: "flex",
    gap: "12px",
    marginTop: "10px",
  },
  icon: {
    fontSize: "22px",
    color: "#333",
    cursor: "pointer",
  },
  paragraph: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#333",
    lineHeight: "1.6",
    maxWidth: "800px",
    margin: "20px auto",
    padding: "0 15px",
    textAlign: "center",
  },
  productsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  },
  card: {
    display: "flex",
    width: "90%",
    maxWidth: "400px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    textAlign: "left",
  },
  cardImage: {
    width: "100px",
    height: "100px",
    borderRadius: "8px",
    objectFit: "cover",
    marginRight: "15px",
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: "14px",
    color: "#555",
    marginTop: "5px",
  },
  cardPrice: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "8px",
  },
  rating: {
    fontSize: "14px",
    color: "#FFA500",
    marginLeft: "5px",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "opacity 0.3s",
  },
};

export default Home;
