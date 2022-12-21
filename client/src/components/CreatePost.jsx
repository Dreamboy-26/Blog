import React from 'react'
import { useState } from 'react'

const CreatePost = () => {
    const [postData,setPostData]=useState({
        title:"",
        description:"",
        categories:"",
        picture:""
    })


    const handlePostData=(e)=>{

        const name=e.target.name;
        setPostData({...postData,[name]:e.target.value})
    }

    const handlePostSubmit=(e)=>{
        e.preventDefault()

    }
  return (
    <div>
        <form action="" onSubmit={handlePostSubmit}>
            <div>
                <input type="text" placeholder='Enter Title' name='title' onChange={(e)=>handlePostData(e)} />
            </div>
            <div>
                <input type="text" placeholder='Enter Description' name="description" onChange={(e)=>handlePostData(e)}/>
            </div>
            <div>
                <input type="text" placeholder='Enter Category' name='categories'  onChange={(e)=>handlePostData(e)}/>
            </div>
            <div>
                <input type="text" placeholder='Url for Picture ' name='picture' onChange={(e)=>handlePostData(e)}/>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>

    </div>
  )
}

export default CreatePost