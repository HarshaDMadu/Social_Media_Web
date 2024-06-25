import { getDocs, collection } from "firebase/firestore";
import {useEffect, useState} from "react";
import { db } from "../Config/Firebase";
import{ Post } from "./Main/post"

interface Post{
    id:string;
    title:string;
    description:string;
    username : string;
    userId:string;
}

export const Main = () =>{
    const [postList, setPostLists] = useState <Post [] | null> (null);
    const postsRef = collection(db,"posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostLists(
            (data.docs.map((doc)=>({...doc.data(),id: doc.id})) )as Post[]
        );
    };  

    
useEffect(()=>{
    getPosts();
    
},[])
   
    return(
        <div> {postList?.map((Post) => )} </div>
    );
}