import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./test.css"
import { BounceLoader } from "react-spinners";

function Test() {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

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

      <button onClick={(event) => handleSubmit(event)}>Submit</button>
      <button onClick={handleSubmit()}>Submit</button>


    </div>
  );
}

export default Test;
