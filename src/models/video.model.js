import mongoose, {Schema} from "mongoose";
// here iam using mongoose-aggregate-paginate-v2 from npm
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchmea = new Schema(
    {
        videoFile: {
            type: String, //! from cloudinary url
            required: true
        },
        thumbnail: {
            type: String, 
            required: true
        },
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
        duration: {
            type: String, //! from cloudinary url
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {timestamps: true}
)

videoSchmea.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchmea)