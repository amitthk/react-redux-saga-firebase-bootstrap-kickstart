import { deleteDoc, doc, getDoc, where, writeBatch } from 'firebase/firestore';
import { db } from './firebase/app'; // Adjust the import path based on where you initialize Firebase
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';
import { ToDo } from '../types'; // Adjust import path as necessary

const TODOS = 'todos';


// Fetch todos from Firestore
const getToDos = async () => {
  try {
    const todosQuery = query(collection(db, TODOS), orderBy('id')); // Assuming there's a 'created' field for ordering
    const querySnapshot = await getDocs(todosQuery);
    const todos: ToDo[] = [];
    querySnapshot.forEach((doc) => {
      todos.push({ id: doc.id, ...doc.data() } as unknown as ToDo);
    });
    //console.log("fetched todos from firestore...", JSON.stringify(todos));
    return todos;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

// Function to save a single todo to Firestore
const saveToDo = async (todo: ToDo) => {
  try {
    await addDoc(collection(db, TODOS), todo);
  } catch (error) {
    throw new Error('Something went wrong while saving the todo');
  }
};

const addToDo = async (todo: ToDo) => {
  try {
    const newItm = await addDoc(collection(db, TODOS), todo);
    return newItm;
  } catch (error) {
    throw new Error('Something went wrong while saving the todo');
  }
};

const deleteToDo = async (id: string) => {
  try {
    const d = query(collection(db, TODOS), where('id', '==', id));
    const docSnap = await getDocs(d);
    let delItm = null;
    docSnap.forEach((doc) => {
      delItm = doc.data().id;
      deleteDoc(doc.ref);
    });
    return delItm;
  } catch (error) {
    throw new Error('Something went wrong while deleting the todo');
  }
}


const apis = { loadToDos: getToDos, saveToDo, deleteToDo, addToDo};
export default apis;
