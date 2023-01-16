const Cloudinary = ({ handleChange }) => {

  /* const onFileInputChange = ({ target })=>{
      if (target.files === 0) return;

      console.log("Uploading images")
  } */

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "booky-images")
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dkeduwift/upload",
      {
        method: "POST",
        body: data,
      }
    )
    const file = await res.json()
    handleChange(e, file.secure_url)
  }

  return (
    <input
      type="file"
      className='file-input file-input-bordered border-primary w-full max-w-xs'
      name='imagelink'
      placeholder="Upload your image here"
      onChange={uploadImage}
    />
  )
}

export default Cloudinary