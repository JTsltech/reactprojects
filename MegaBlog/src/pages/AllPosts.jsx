import React,{useState,useEffect} from "react";
import { Container,PostCard } from "../components";
import appwriteService from "../appwrite/config"
import { useDispatch,useSelector } from "react-redux";
import { fetchPosts} from '../store/postSlice';


function AllPosts(){
    // useEffect(()=>{
    //     appwriteService.getPosts([]).then((posts)=>{
    //         if(posts){
    //             setPosts(posts.documents)
    //         }
    //     })
    // },[])
    const dispatch = useDispatch();

    const postsLst = useSelector(state => state.post.posts);
       
    const postStatus = useSelector(state => state.post.status)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
        
    }, [postStatus, dispatch])

    console.log(postsLst);

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {postsLst.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts