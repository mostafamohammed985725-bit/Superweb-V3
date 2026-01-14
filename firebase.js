import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAgyVC2WF8k9dbxC5INYevCX10IGbEptJM",
  authDomain: "superweb-v2.firebaseapp.com",
  projectId: "superweb-v2",
  storageBucket: "superweb-v2.firebasestorage.app",
  messagingSenderId: "277693607040",
  appId: "1:277693607040:web:c8ff068c50006b2f8b8a65"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function listenProjects(callback) {
  const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
  onSnapshot(q, snap => {
    const data = [];
    snap.forEach(doc => data.push(doc.data()));
    callback(data);
  });
}

export async function addProject(name, type, description, link) {
  await addDoc(collection(db, "projects"), {
    name,
    type,
    description,
    link,
    createdAt: Date.now()
  });
}