"use client";
import Image from "next/image";
import React, { useActionState, useEffect, useState } from "react";
import GoBack from "../Buttons/GoBack";
import { addFeedback } from "@/app/_actions/addFeedback";
import { useFormState } from "react-dom";

const intialState = {
  zodErrors: {},
  title: "",
  description: "",
  category: "",
};
const CreateFeedback = () => {
  const [categorySelected, setCategory] = useState("Feature");
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);

  const [formState, formAction] = useActionState(addFeedback, intialState);

  const { title, description, category } = formState?.data || {};

  return (
    <div className="max-w-[540px] w-[100vw] mt-10 md:mt-0">
      <GoBack />
      <div className="mt-16 flex flex-col gap-8 relative rounded-lg bg-white p-8">
        <Image
          src={"/images/shared/icon-new-feedback.svg"}
          width={56}
          height={56}
          alt="icon-new-feedback"
          className="absolute top-[-30px] left-[40px]"
        />
        <h1 className="font-bold text-xl">Create New Feedback</h1>
        <form className="flex flex-col gap-4 text-sm" action={formAction}>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Feedback Title</h4>
            <label className="text-[#647196]" htmlFor={"description"}>
              Add a short, descriptive headline
            </label>

            <input
              type="text"
              className="w-full rounded-md bg-[#f7f8fd] p-2"
              name="title"
              id="title"
              defaultValue={title}
            />
            <span className="text-red-500 text-sm">
              {formState.zodErrors?.title ? formState.zodErrors?.title : null}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Category</h4>
            <label className="text-[#647196]" htmlFor={"description"}>
              Choose a category for your feedback
            </label>
            <select name="category" id="category" className="hidden">
              <option value={categorySelected} defaultValue={category}>
                {categorySelected}
              </option>
            </select>
            <button
              className={`flex place-items-center p-2 px-4 w-full text-left rounded-md ${
                showCategoryOptions ? "border-2 border-[#4661e6]" : ""
              }`}
              onClick={(e) => {
                e.preventDefault(),
                  setShowCategoryOptions(!showCategoryOptions);
              }}
            >
              <span>{categorySelected}</span>
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d={showCategoryOptions ? "M1 6l4-4 4 4" : "M1 1l4 4 4-4"}
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            {showCategoryOptions && (
              <div className="w-full left-0 top-[70px] rounded-lg bg-white shadow-lg drop-shadow-lg ">
                <div className="flex flex-col gap-[1px] bg-[#979797] bg-opacity-15 shadow-lg drop-shadow  rounded-lg">
                  <button
                    className={`flex justify-between place-items-center w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea] rounded-t-lg`}
                    onClick={() => {
                      setCategory("Feature"), setShowCategoryOptions(false);
                    }}
                  >
                    <span>Feature</span>
                    {categorySelected === "Feature" && (
                      <Image
                        src={"/images/shared/icon-check.svg"}
                        width={11.03}
                        height={7.5}
                        alt="icon-check"
                      />
                    )}
                  </button>
                  <button
                    className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                    onClick={() => {
                      setCategory("UI"), setShowCategoryOptions(false);
                    }}
                  >
                    <span>UI</span>
                    {category === "UI" && (
                      <Image
                        src={"/images/shared/icon-check.svg"}
                        width={11.03}
                        height={7.5}
                        alt="icon-check"
                      />
                    )}
                  </button>
                  <button
                    className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                    onClick={() => {
                      setCategory("UX"), setShowCategoryOptions(false);
                    }}
                  >
                    <span>UX</span>
                    {category === "UX" && (
                      <Image
                        src={"/images/shared/icon-check.svg"}
                        width={11.03}
                        height={7.5}
                        alt="icon-check"
                      />
                    )}
                  </button>
                  <button
                    className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea]`}
                    onClick={() => {
                      setCategory("Enhancement"), setShowCategoryOptions(false);
                    }}
                  >
                    <span>Enhancement</span>
                    {categorySelected === "Enhancement" && (
                      <Image
                        src={"/images/shared/icon-check.svg"}
                        width={11.03}
                        height={7.5}
                        alt="icon-check"
                      />
                    )}
                  </button>
                  <button
                    className={`flex justify-between place-items-center text-left w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea] rounded-b-lg`}
                    onClick={() => {
                      setCategory("Bug"), setShowCategoryOptions(false);
                    }}
                  >
                    <span>Bug</span>
                    {categorySelected === "Bug" && (
                      <Image
                        src={"/images/shared/icon-check.svg"}
                        width={11.03}
                        height={7.5}
                        alt="icon-check"
                      />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Feedback Detail</h4>
            <label className="text-[#647196]" htmlFor={"description"}>
              Include any specific comments on what should be improved, added,
              etc.
            </label>
            <textarea
              defaultValue={description}
              name="description"
              id="description"
              className="w-full rounded-md bg-[#f7f8fd] p-2"
            />
            {formState.zodErrors?.description && (
              <span className="text-red-500 text-sm">
                {formState.zodErrors?.description}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#ad1fea] p-4 px-8 rounded-xl font-bold text-white"
          >
            Add Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateFeedback;
