// import { useEffect, useState } from "react";
// import "./App.css";
// import { Auth } from "./components/auth";
// import { db, auth, storage } from "./config/firebase";
// import {
//   getDocs,    // to get data from database
//   collection, // from which collections of data base
//   addDoc,
//   deleteDoc,
//   updateDoc,
//   doc,
// } from "firebase/firestore";
// import { ref, uploadBytes } from "firebase/storage";

// function App() {
//   const [movieList, setMovieList] = useState([]);

//   // New Movie States
//   const [newMovieTitle, setNewMovieTitle] = useState("");
//   const [newReleaseDate, setNewReleaseDate] = useState(0);  // 0 because its type is number
//   const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

//   // Update Title State
//   const [updatedTitle, setUpdatedTitle] = useState("");

//   // File Upload State
//   const [fileUpload, setFileUpload] = useState(null);

//   const moviesCollectionRef = collection(db, "movies");   //movies is the name of the collection

//   // to get movies list from database
//   const getMovieList = async () => {
//     try {
//       const data = await getDocs(moviesCollectionRef);  // getDocs imported above
//       const filteredData = data.docs.map((doc) => ({    // is collection ma jitne fields thay sb aagaye hamaray pas
//         ...doc.data(),
//         id: doc.id,                                     // collection ki fields ma Id nhi hoti isi liye usko alad se get krte like this
//       }));
//       setMovieList(filteredData);    //useState  // showing movies documents/lists
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // we are using useEffect bcz we will be wanting that on rendering page our database bata shoul be available on our site
//   useEffect(() => {
//     getMovieList();
//   }, []);

//   const onSubmitMovie = async () => {
//     try {
//       await addDoc(moviesCollectionRef, {
//         title: newMovieTitle,
//         releaseDate: newReleaseDate,
//         receivedAnOscar: isNewMovieOscar,
//         userId: auth?.currentUser?.uid,
//       });
//       getMovieList();    // we called this fn() here because hum chahtay k user na jo naye movie add ki wo bhi movies collection ma add hojaye ta k updated movie list ma ye bhi shamil ho kr screen pr aajaye
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const deleteMovie = async (id) => {
//     const movieDoc = doc(db, "movies", id);
//     await deleteDoc(movieDoc);     // movies collection k is Id walay doc ko delete krdo
//   };

//   const updateMovieTitle = async (id) => {
//     const movieDoc = doc(db, "movies", id);
//     await updateDoc(movieDoc, { title: updatedTitle });  // is id walay document ma updated state yani new title daal do update btn click krne pr
//   };

//   const uploadFile = async () => {
//     if (!fileUpload) return;
//     const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
//     try {
//       await uploadBytes(filesFolderRef, fileUpload);  //uploadBytes() is gonna send the file to the path specified in above line
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="App">
//       <Auth />

//       <div>
//         <input
//           placeholder="Movie title..."
//           onChange={(e) => setNewMovieTitle(e.target.value)}
//         />
//         <input
//           placeholder="Release Date..."
//           type="number"
//           onChange={(e) => setNewReleaseDate(Number(e.target.value))}   //for converting string to Number
//         />
//         <input
//           type="checkbox"
//           checked={isNewMovieOscar}
//           onChange={(e) => setIsNewMovieOscar(e.target.checked)}   // this just making checkbox unchecked to checked
//         />
//         <label> Received an Oscar</label>
//         <button onClick={onSubmitMovie}> Submit Movie</button>
//       </div>
//       <div>
//         {movieList.map((movie) => (
//           <div>     {/*for each movie we are going to return this div  */}
//             <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
//               {movie.title}
//             </h1>
//             <p> Date: {movie.releaseDate} </p>

//             <button onClick={() => deleteMovie(movie.id)}> Delete Movie</button>

//             <input
//               placeholder="new title..."
//               onChange={(e) => setUpdatedTitle(e.target.value)}
//             />
//             <button onClick={() => updateMovieTitle(movie.id)}>  {/* is id wali movie k liye naya title jo likha wo update krdo*/}
//               Update Title
//             </button>
//           </div>
//         ))}
//       </div>

//       <div>
//         <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
//         <button onClick={uploadFile}> Upload File </button>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { db, auth, storage } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

function App() {
  const [movieList, setMovieList] = useState([]);

  // New Movie States
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);

  // Update Title State
  const [updatedTitle, setUpdatedTitle] = useState("");

  // File Upload State
  const [fileUpload, setFileUpload] = useState(null);

  const moviesCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieOscar,
        userId: auth?.currentUser?.uid,
      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
    getMovieList();
    alert("Movie Deleted successfully!");

  };

  const updateMovieTitle = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await updateDoc(movieDoc, { title: updatedTitle });
    getMovieList();
    alert("Title Updated successfully!");

  };

  const uploadFile = async () => {
    if (!fileUpload) return;
    const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      alert("file Uploaded successfully!");
      await uploadBytes(filesFolderRef, fileUpload);

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <Auth />

      <div>
        <input
          style={{
            padding: "10px",
            margin: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          placeholder="Movie title..."
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          style={{
            padding: "10px",
            margin: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          placeholder="Release Date..."
          type="number"
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />
        <input
          style={{ margin: "5px" }}
          type="checkbox"
          checked={isNewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <label> Received an Oscar</label> <br />
        <button
          style={{
            display: "flex",
            position: "relative",
            left: "29.4rem",
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            margin: "5px",
            marginBottom: "5%",
            cursor: "pointer",
          }}
          onClick={onSubmitMovie}
        >
          Submit Movie
        </button>
        <div
          style={{
            fontSize:"200%",
            color:"grey",
            display: "flex",
            flexDirection: "column",
            justifyItems: "centre",
            alignItems: "centre",
            position: "relative",
            left: "23rem",
            overflow: "hidden",
            border: "3px solid #ccc",
            width: "50%",
            height: "30%",
          }}
        >
          <h1> Your List of Movies is Below </h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "centre",
          alignItems: "centre",
          position: "relative",
          left: "23rem",
          border: "3px solid cyan",
          width: "50%",
          height: "30%",
        }}
      >
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p> Date: {movie.releaseDate} </p>

            <button
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                margin: "5px",
                cursor: "pointer",
              }}
              onClick={() => deleteMovie(movie.id)}
            >
              Delete Movie
            </button>

            <input
              style={{
                padding: "10px",
                margin: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              placeholder="new title..."
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                margin: "5px",
                cursor: "pointer",
              }}
              onClick={() => updateMovieTitle(movie.id)}
            >
              Update Title
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          left: "22.2rem",
          width: "51.1%",
          marginBottom:"70px",
          // border:"3px solid black",
        }}
      >
        <input
          style={{ margin: "10px" }}
          type="file"
          onChange={(e) => setFileUpload(e.target.files[0])}
        />
        <button
          style={{
            backgroundColor: "#ffc107",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            margin: "5px",
            cursor: "pointer",
          }}
          onClick={uploadFile}
        >
          Upload File
        </button>
      </div>
    </div>
  );
}

export default App;
