import { Textarea } from '@headlessui/react';
import { UseMutateFunction } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

interface postFormFields {
  title: string;
  body: string;
  tags: string;
  reactions: reactionType;
  views: number;
  userId: number;
}

interface postDat {
  title: string;
  body: string;
  tags: string[];
  reactions: reactionType;
  views: number;
  userId: number;
}

interface reactionType {
  likes: number,
  dislikes: number
}

interface PostFormElementProps {
  isEdit: boolean;
  mutateFn: UseMutateFunction<any, Error, postDat, unknown>;
  defaultInputData?: postDat;
}


const ArrStringToTextLine = (arrString: string[]) => {
  let formattedString: string = "";
  for (let i = 0; i < arrString.length; i++) {
    formattedString += arrString[i];
    if (i < arrString.length - 1) {
      formattedString += "\n";
    }
  }
  return formattedString;
}

const TextLineToArrString = (TextLine: string) => {
  const arrStrings: string[] = [];
  let temp: string = "";
  for (let i = 0; i < TextLine.length; i++) {
    if (TextLine[i] === "\n" || i == TextLine.length - 1) {
      if(i == TextLine.length - 1) temp += TextLine[i];
      arrStrings.push(temp);
      temp = "";
    } else {
      temp += TextLine[i];
    }
  }
  return arrStrings;
}

const reformatPostFormFields = (postFieldsData: postFormFields) => {
  console.log(postFieldsData.tags);
  const reformatedPostDat: postDat = {
    title: postFieldsData.title,
    body: postFieldsData.body,
    tags: TextLineToArrString(postFieldsData.tags),
    reactions: postFieldsData.reactions,
    views: postFieldsData.views,
    userId: postFieldsData.userId

  }

  return reformatedPostDat;
}

const PostForm: React.FC<PostFormElementProps> = (props) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<postFormFields>();

  useEffect(() => {
    if (props.defaultInputData) {
      setValue("title", props.defaultInputData.title);
      setValue("body", props.defaultInputData.body);
      setValue("tags", ArrStringToTextLine(props.defaultInputData.tags));
      setValue("userId", props.defaultInputData.userId);
    }
  }, [props.defaultInputData]);


  const submitHandler = (data: postFormFields) => {
    if (props.isEdit) {
      if (!confirm("Are you sure want to update post data ? ")) return;
      
      if(typeof props.defaultInputData?.reactions !== "undefined"){
        data.reactions = {
          likes : props.defaultInputData.reactions.likes,
          dislikes : props.defaultInputData.reactions.dislikes
        }
      }

      if(typeof props.defaultInputData?.views !== "undefined"){
        data.views = props.defaultInputData.views;
      }

    } else {
      data.reactions = {
        likes : 0,
        dislikes: 0
      }
      data.views = 1;
    }


    const reformatedPostDat = reformatPostFormFields(data);
    console.log(reformatedPostDat);
    props.mutateFn(reformatedPostDat);
  }


  return (
    <form onSubmit={handleSubmit(submitHandler)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-2xl mx-auto">
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userId">
          User ID
        </label>
        <input
          type="number"
          id="userId"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('userId', { required: "User ID is required." })}
        />
        {errors.userId && (
          <p className="text-red-500 text-xs italic mt-1">{errors.userId.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Post Title
        </label>
        <input
          type="text"
          id="title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...register('title', { required: "Post title is required." })}
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic mt-1">{errors.title.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
          Post Body
        </label>
        <Textarea
          id="body"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          {...register('body', { required: "Post body is required." })}
        />
        {errors.body && (
          <p className="text-red-500 text-xs italic mt-1">{errors.body.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tags">
          Post Tags
        </label>
        <Textarea
          id="tags"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
          {...register('tags', { required: "Post tags is required." })}
        />
        {errors.tags && (
          <p className="text-red-500 text-xs italic mt-1">{errors.tags.message}</p>
        )}
      </div>

      <div className="flex justify-end">
        {props.isEdit ? (
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
          >
            Save Post
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
          >
            Add Post
          </button>
        )}
      </div>
    </form>
  )
}

export default PostForm