import { useState } from "react";

const NumberCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);
  const [error, setError] = useState("");

  // Generate Prime Numbers
  const generatePrimes = () => {
    setError("");
    let primes = [];
    for (let num = 2; num < 50; num++) {
      if (isPrime(num)) primes.push(num);
    }
    setNumbers(primes);
  };

  // Generate Even Numbers
  const generateEvens = () => {
    setError("");
    let evens = Array.from({ length: 25 }, (_, i) => i * 2);
    setNumbers(evens);
  };

  // Generate Fibonacci Numbers
  const generateFibonacci = () => {
    setError("");
    let fib = [0, 1];
    for (let i = 2; i < 15; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    setNumbers(fib);
  };

  // Calculate Average
  const calculateAverage = () => {
    if (numbers.length === 0) {
      setError("No numbers available for average calculation.");
      return;
    }
    setError("");
    const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    setAverage(avg.toFixed(2));
  };

  // Helper function: Check if a number is prime
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  return (
    <div style={styles.container}>
      <h2>Number Generator & Average Calculator</h2>
      
      <div style={styles.buttonContainer}>
        <button onClick={generatePrimes} style={styles.button}>Fetch Prime Numbers</button>
        <button onClick={generateEvens} style={styles.button}>Fetch Even Numbers</button>
        <button onClick={generateFibonacci} style={styles.button}>Fetch Fibonacci Numbers</button>
      </div>
      
      <button onClick={calculateAverage} style={styles.button}>Calculate Average</button>

      {numbers.length > 0 && <p>Numbers: {numbers.join(", ")}</p>}
      {average !== null && <h3>Average: {average}</h3>}
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    textAlign: "center",
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    background: "#f4f4f4",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
};

export default NumberCalculator;