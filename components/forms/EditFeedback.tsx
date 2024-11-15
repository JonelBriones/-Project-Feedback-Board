"use client";
import Image from "next/image";
import React, { useState } from "react";
import GoBack from "../Buttons/GoBack";
import { editSuggestion } from "@/app/_actions/editSuggestion";
import { deleteSuggestion } from "@/app/_actions/deleteSuggestion";
import Link from "next/link";

const EditFeedback = ({ feedback }: any) => {
  const [category, setCategory] = useState(feedback.category);
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);
  const [status, setStatus] = useState(feedback.status);
  const [showStatusOptions, setShowStatusOptions] = useState(false);

  const updateSuggestionById = editSuggestion.bind(null, feedback._id);

  return (
    <div className="max-w-[540px] w-[100vw]">
      <GoBack />
      <div className="mt-16 flex flex-col gap-8 relative rounded-lg bg-white p-8">
        <Image
          src={"/images/shared/icon-new-feedback.svg"}
          width={56}
          height={56}
          alt="icon-new-feedback"
          className="absolute top-[-30px] left-[40px]"
        />
        <h1 className="font-bold text-xl">Editing '{feedback.title}'</h1>
        <form
          className="flex flex-col gap-4 text-sm"
          action={updateSuggestionById}
        >
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Feedback Title</h4>
            <label className="text-[#647196]" htmlFor={"title"}>
              Add a short, descriptive headline
            </label>
            <textarea
              name="title"
              id="title"
              className="w-full rounded-md bg-[#f7f8fd] p-2"
              placeholder="Add a descriptive title"
              defaultValue={feedback.title}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Category</h4>
            <label className="text-[#647196]" htmlFor={"category"}>
              Choose a category for your feedback
            </label>
            <select name="category" id="category" className="hidden">
              <option value={category}>{category}</option>
            </select>
            <div className="relative">
              <button
                className={`flex place-items-center justify-between p-2 px-4 w-full text-left rounded-md bg-[#f7f8fd] ${
                  showCategoryOptions ? "border-2 border-[#4661e6]" : ""
                }`}
                onClick={() => {
                  setShowCategoryOptions(!showCategoryOptions),
                    setShowStatusOptions(false);
                }}
                type="button"
              >
                <span>{category}</span>
                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d={showCategoryOptions ? "M1 6l4-4 4 4" : "M1 1l4 4 4-4"}
                    stroke="#4661E6"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              {showCategoryOptions && (
                <div className="absolute w-full top-[50px] rounded-lg bg-white shadow-lg drop-shadow-lg z-10">
                  <div className="flex flex-col gap-[1px] bg-[#979797] bg-opacity-15 shadow-lg drop-shadow rounded-lg">
                    <button
                      className={`flex justify-between place-items-center w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea] rounded-t-lg`}
                      onClick={() => {
                        setCategory("Feature"), setShowCategoryOptions(false);
                      }}
                    >
                      <span>Feature</span>
                      {category === "Feature" && (
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
                        setCategory("Enhancement"),
                          setShowCategoryOptions(false);
                      }}
                    >
                      <span>Enhancement</span>
                      {category === "Enhancement" && (
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
                      {category === "Bug" && (
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
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">Update Status</h4>
            <label className="text-[#647196]" htmlFor={"status"}>
              Change feature state
            </label>
            <select name="status" id="status" className="hidden">
              <option value={status}>{status}</option>
            </select>
            <div className="relative">
              <button
                className={`flex place-items-center justify-between p-2 px-4 w-full text-left rounded-md bg-[#f7f8fd] ${
                  showStatusOptions ? "border-2 border-[#4661e6]" : ""
                }`}
                onClick={() => {
                  setShowStatusOptions(!showStatusOptions),
                    setShowCategoryOptions(false);
                }}
                type="button"
              >
                <span>{status}</span>
                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d={showStatusOptions ? "M1 6l4-4 4 4" : "M1 1l4 4 4-4"}
                    stroke="#4661E6"
                    strokeWidth="2"
                    fill="none"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
              {showStatusOptions && (
                <div className="absolute w-full top-[50px] rounded-lg bg-white shadow-lg drop-shadow-lg z-10">
                  <div className="flex flex-col gap-[1px] bg-[#979797] bg-opacity-15 shadow-lg drop-shadow rounded-lg">
                    <button
                      className={`flex justify-between place-items-center w-full bg-white text-[#647196] p-4 font-normal hover:text-[#ad1fea] rounded-t-lg`}
                      onClick={() => {
                        setStatus("Suggestion"), setShowStatusOptions(false);
                      }}
                    >
                      <span>Suggestion</span>
                      {status === "Suggestion" && (
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
                        setStatus("Planned"), setShowStatusOptions(false);
                      }}
                    >
                      <span>Planned</span>
                      {status === "Planned" && (
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
                        setStatus("In-Progress"), setShowStatusOptions(false);
                      }}
                    >
                      <span>In-Progress</span>
                      {status === "In-Progress" && (
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
                        setStatus("Live"), setShowStatusOptions(false);
                      }}
                    >
                      <span>Live</span>
                      {status === "Live" && (
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
          </div>
          <div className="flex justify-between font-bold text-[#f2fefe] text-sm">
            <button
              className="bg-[#e98888] rounded-xl p-3 px-5"
              onClick={() => deleteSuggestion(feedback._id)}
              type="button"
            >
              Delete
            </button>
            <div className="flex gap-4">
              <Link
                href={`/suggestion/${feedback._id}`}
                className="bg-[#3a4374] rounded-xl p-3 px-6"
              >
                Cancel
              </Link>
              <button
                className="bg-[#ad1fea] rounded-xl p-3 px-6"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFeedback;
