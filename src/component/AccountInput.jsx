import React from "react";

function AccountInput({ id, name, label, type, register }) {


  let validateInput = (name) => {
    switch (name) {
      case "phone":
        return {
          required: true, minLength: {
            value: 10,
            message: 'Phone number should be at least 10 digit'
          }
        }
      default:
        break;
    }
  }

  return (
    <div className="col-span-4 sm:col-span-2">
      <label htmlFor={id} className="block text-xs">
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          id={id}
          name={name}
          {...register(name, {
            required: true, minLength: {
              value: 10,
              message: 'Phone number should be at least 10 digit'
            }
          })}
          className="block w-3/4 rounded-full border-1 px-3 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
        />
      </div>
    </div>
  );
}

export default AccountInput;
