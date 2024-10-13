import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./test.css"
import { BounceLoader } from "react-spinners";
import toast from "react-hot-toast";
import useTest from "../CustomHooks/useTest";
import useAuthentication from "../CustomHooks/useAuthentication";

function Test() {


  const { testData, addDataToTest } = useTest();
  // const { data, setData } = useAuthentication();

  const handleSubmit = () => {
    toast('Hello World', {
      duration: 3000,
      position: 'top-center',
      icon: '⚠️',
      iconTheme: {
        primary: '#000',
        secondary: '#fff',
      },
    });
    addDataToTest({
      name: 'krunal',
      age: 24,
      email: 'krunaljumde24@gmail.com'
    })
    setData({ test: 'test' })


  }

  useEffect(() => {
    // console.log(testData);
    // console.log(data);

  }, [])

  return (
    <div className="mx-20 border">
      <dir className="flex flex-row gap-4">
        <div className="min-h-96 basis-2/12 rounded-sm flex flex-col gap-4">
          <div className="p-1 basis-1/3 bg-purple-400">A</div>
          <div className="p-1 basis-1/3 bg-purple-400">A</div>
          <div className="p-1 basis-1/3 bg-purple-400">A</div>
        </div>
        <div className="p-1 min-h-96 bg-slate-400 basis-5/12 rounded-sm">
          A
        </div>
        <div className="p-1 min-h-96 bg-slate-400 basis-5/12 rounded-sm">
          A
        </div>
      </dir>

      <button
        onClick={() => handleSubmit()}
        className="bg-pink-400 p-2 rounded-lg">
        Submit
      </button>
      {/* <button onClick={handleSubmit()}>Submit</button> */}


    </div>
  );
}

export default Test;
