// import React from "react";
// import axios from "axios";
// import CheckoutForm from "../components/CheckoutForm";

// const Checkout = () => {
//   const handlePayment = async (email) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/payment", { email });
//       if (response.data.url) {
//         window.location.href = response.data.url;
//       }
//     } catch (error) {
//       console.error("Error processing payment:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Checkout</h1>
//       <CheckoutForm handleSubmit={handlePayment} />
//     </div>
//   );
// };

// export default Checkout;
import React from "react";
import axios from "axios";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const handlePayment = async (email) => {
    try {
      const response = await axios.post("http://localhost:5000/api/payment", { email });
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>
      <CheckoutForm handleSubmit={handlePayment} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a1a2e",
    marginBottom: "20px",
  },
};

export default Checkout;
