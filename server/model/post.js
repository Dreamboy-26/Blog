import mongoose from 'mongoose'

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    // required: true,
 
  },
  description: {
    type: String,
    // required: true
  },
  picture: {
    type: String,
    // required: false
  },
  username: {
    type: String,
    // required: true
  },
  categories: {
    type: Array,
    // required: false
  },
  createdDate: {
    type: Date,
  },
})

export default mongoose.model('post', PostSchema)
