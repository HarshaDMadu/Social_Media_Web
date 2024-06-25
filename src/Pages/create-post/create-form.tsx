
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
import { addDoc, collection } from "firebase/firestore";
import {db,auth} from "../../Config/Firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom"


interface createFormData{
    title:string,
    description:string,
}

export const CreateForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add title"),
        description : yup.string().required("You must add description"),
    });

    const {register,handleSubmit,formState:{errors}} = useForm <createFormData>({
        resolver : yupResolver(schema),

    });

    const postsRef = collection(db, "posts");

    const onCreatePost = async (data:createFormData) =>{
        await addDoc(postsRef, {
            title:data.title,
            description:data.description,
            username : user?.displayName,
            userId:user?.uid,

        });
        navigate("/");

    }

    return(
       <form onSubmit = {handleSubmit( onCreatePost)}>
        <input placeholder = "Enter Ttitle" {...register("title")} />
        <p style = {{color:"red"}}> {errors.title?.message} </p>
        <textarea placeholder = "Description" {...register("description")} />
        <p style = {{color:"red"}}> {errors.description?.message} </p>
        <input type = "submit" className="submitForm"/>
       </form>
    )
}

