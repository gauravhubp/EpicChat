import { collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from 'src/utils/firebase';

export default function useUsers(user){
 const [snapshot] = useCollection(collection(db,"users"))

const users=[]

snapshot?.docs.forEach(doc => {
    const id= doc.id > user.id ? `${doc.id}${user.uid}` : `${user.uid}${doc.id}`

    if(doc.id !== user.uid) {
        users.push({id, ...doc.data()})
    }
})

return users;
}