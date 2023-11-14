import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from 'src/utils/firebase';

export default function useRooms(user){
 const [snapshot] = useCollection(collection(db,`users/${user.uid}/chats`))

 const chats = snapshot?.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
 }))
 
return chats
}