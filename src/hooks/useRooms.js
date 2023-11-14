import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from 'src/utils/firebase';

export default function useRooms(){
 const [snapshot] = useCollection(collection(db,"rooms"))

 const rooms = snapshot?.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
 }))
 
return rooms
}