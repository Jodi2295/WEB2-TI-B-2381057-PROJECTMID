import { UseMutateFunction } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface Comment {
    body : string,
    postId : number,
    user : {
      id : number
    }
  }

interface CommentFormFields{
    body : string,
    postId : number,
    userId : number
}

interface CommentFormProps{
    isEdit: boolean;
    mutateFn: UseMutateFunction<any, Error, Comment, unknown>;
    defaultInputData?: Comment;
}

const CommentFrom : React.FC<CommentFormProps> = (props) => {
    const {register, handleSubmit, setValue ,formState : {errors}} = useForm<CommentFormFields>()

    useEffect(() => {
      if (props.defaultInputData) {
        setValue("userId", props.defaultInputData.user.id);
        setValue("postId", props.defaultInputData.postId);
        setValue("body", props.defaultInputData.body);
      }
    }, [props.defaultInputData]);

    const submitHandler = (data : CommentFormFields) => {
        if (props.isEdit) {
            if (!confirm("Are you sure want to update comment data ? ")) return;
        }
        
        const newComment : Comment = {
            body : data.body,
            postId : data.postId,
            user : {
                id : data.userId
            }
        }
        props.mutateFn(newComment);
    }

  return (
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">User ID</label>
            <input 
              type="number" 
              id="userId" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("userId",{required: "UserId is required."})} 
            />
            {errors.userId && (
              <p className="text-red-500 text-xs italic mt-1">{errors.userId.message}</p>
            )}
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postId">Post ID</label>
            <input 
              type="number" 
              id="postId" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("postId",{required: "Post ID is required."})} 
            />
            {errors.postId && (
              <p className="text-red-500 text-xs italic mt-1">{errors.postId.message}</p>
            )}
        </div>
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">Comment Body</label>
            <textarea 
              id="body" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              {...register("body",{required: "Comments body is required."})} 
            />
            {errors.body && (
              <p className="text-red-500 text-xs italic mt-1">{errors.body.message}</p>
            )}
        </div>
        <div className="flex justify-end">
          {props.isEdit ? (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            >
              Save Comment
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            >
              Add Comment
            </button>
          )}
        </div>
    </form>
  )
}

export default CommentFrom