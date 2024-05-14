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
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
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
      <br />
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
      <br />
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
          backgroundColor: "#dc3545",
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
          backgroundColor: "#28a745",
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
