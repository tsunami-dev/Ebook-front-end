// import React, { useState } from "react";

// const CheckoutForm = ({ handleSubmit }) => {
//   const [email, setEmail] = useState("");

//   const onSubmit = (e) => {
//     e.preventDefault();
//     handleSubmit(email);
//   };

//   return (
//     <form onSubmit={onSubmit} style={styles.form}>
//       <label style={styles.label} htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//         required
//         style={styles.input}
//       />
//       <button type="submit" style={styles.button}>Proceed to Payment</button>
//     </form>
//   );
// };

// const styles = {
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "10px",
//   },
//   label: {
//     fontSize: "18px",
//     fontWeight: "bold",
//   },
//   input: {
//     padding: "10px",
//     fontSize: "16px",
//     width: "300px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };

// export default CheckoutForm;
import React, { useState } from "react";
import { Elements, useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Load your Stripe publishable key
const stripePromise = loadStripe("your-publishable-key"); // Replace with your actual Stripe publishable key

const CheckoutForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    try {
      // Create a payment intent on the backend
      const { data: clientSecret } = await handlePayment(email);

      // Confirm the payment with Stripe
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { email },
        },
      });

      if (error) {
        setErrorMessage(error.message);
        setIsLoading(false);
      } else {
        // Success - Redirect to thank you page
        window.location.href = "/thank-you";
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Complete Your Purchase</h2>

      <label style={styles.label} htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={styles.input}
      />

      <label style={styles.label} htmlFor="card">Card Information</label>
      <div style={styles.cardElementContainer}>
        <CardElement id="card" options={styles.cardOptions} />
      </div>

      {errorMessage && <p style={styles.error}>{errorMessage}</p>}

      <button
        type="submit"
        disabled={!stripe || isLoading}
        style={{ ...styles.button, opacity: isLoading ? 0.7 : 1 }}
      >
        {isLoading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

// Styles
const styles = {
  form: {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    padding: "20px",
    maxWidth: "400px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#1a1a2e",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  },
  label: {
    fontSize: "16px",
    color: "#1a1a2e",
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  input: {
    padding: "12px",
    width: "100%",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontFamily: "'Poppins', sans-serif",
  },
  cardElementContainer: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "100%",
  },
  cardOptions: {
    style: {
      base: {
        fontSize: "16px",
        color: "#1a1a2e",
        "::placeholder": {
          color: "#a0a0a0",
        },
      },
    },
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    backgroundColor: "#e94560",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    transition: "background-color 0.3s",
  },
  error: {
    color: "red",
    fontSize: "14px",
    textAlign: "center",
  },
};

export default function CheckoutFormWrapper({ handlePayment }) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm handlePayment={handlePayment} />
    </Elements>
  );
}
