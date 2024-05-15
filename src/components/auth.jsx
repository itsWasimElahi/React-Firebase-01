// import { auth, googleProvider } from "../config/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import { useState } from "react";

// export const Auth = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

// //   console.log(auth?.currentUser?.email);

//   const signIn = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);  // simple email/password type authentication walay ka  meethod
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);     // google type walay ka method
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <input
//         placeholder="Email..."
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         placeholder="Password..."
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={signIn}> Sign In</button>

//       <button onClick={signInWithGoogle}> Sign In With Google</button>

//       <button onClick={logout}> Logout </button>
//     </div>
//   );
// };

import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signed in successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in successfully!");

    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      alert("Logged Out successfully!");

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        marginBottom:"5%",
        display: "flex",
        position: "relative",
        left: "18rem",
        overflow: "hidden",
        border: "3px solid black",
        width: "65%",
        height: "10%",
      }}
    >
      <input
        style={{
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "250px",
        }}
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={{
          padding: "10px",
          margin: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "250px",
        }}
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        style={{
          margin: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
        onClick={signIn}
      >
        Sign In
      </button>
      <button
        style={{
          margin: "10px",
          backgroundColor: "green",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </button>
      <button
        style={{
          margin: "10px",
          backgroundColor: "#dc3545",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};
