import React from "react";

function AccountInput({ id, name, label, type, value, handleChange, disabled }) {

  return (
    <div className="col-span-4 sm:col-span-2">
      <label htmlFor={id} className="block text-xs">
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          id={id}
          disabled={disabled}
          name={name}
          className="block w-3/4 rounded-full border-1 px-3 py-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
          value={value}
          onChange={(event) => handleChange(event)}
        />
      </div>
    </div>
  );
}

export default AccountInput;
