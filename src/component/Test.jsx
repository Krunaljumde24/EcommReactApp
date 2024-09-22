import React from "react";
import { useForm } from "react-hook-form";
import "./test.css"
import { BounceLoader } from "react-spinners";

function Test() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // const watch()
  const phone = watch('phone')
  let submit = (data) => {
    console.log(data);
    console.log(phone);

    console.log(errors);
  }


  let valiateInput = (name, value) => {
    switch (name) {
      case "phone":

        break;

      default:
        break;
    }
  }

  let errorMessageHandle = (err, age) => {
    if (age < 18) {
      return <p>Age is less than 18</p>;
    } else if (age > 27) {
      return <p>Age is greater than 27</p>;
    }
  };

  let validateInput = (name) => {
    switch (name) {
      case "age":
        return {
          required: true, min: 18, max: 27
        }
        break;

      default:
        break;
    }
  }

  return (
    <>
      <BounceLoader />
      <div className="min-h-80 bg-slate-400">
        <form onSubmit={handleSubmit(submit)}>
          <label>FIRST NAME:</label>
          <input
            type="text"
            name="fname "
            {...register('fname', { required: true })}
          />
          {errors.fname && <p>required</p>}
          <br />
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register('email', { required: true })}
          />
          {errors.email && <p>required</p>}

          <br />
          <label>Age</label>
          <input
            type="text"
            name="age"
            {...register('age', valiateInput(name))}
          />
          {errorMessageHandle(errors.age, watch('age'))}

          <button className="submitBtn">Submit</button>
        </form>
        <h2>{watch('fname')}</h2>
      </div>
    </>

  );
}

export default Test;
