import React from 'react'
import { useState } from 'react'

const Cloudinary = () => {

  /* const onFileInputChange = ({ target })=>{
      if (target.files === 0) return;

      console.log("Uploading images")
  } */
  const [image, setImage] = useState("")
  const [loading, setLoading] = useState(false)

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "booky-images")
    setLoading(true)
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkeduwift/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <input
      type="file"
      className='btn btn-outline border-primary'
      name='file'
      placeholder="Upload your image here"
      onChange={uploadImage}
    />
  )
}

export default Cloudinary