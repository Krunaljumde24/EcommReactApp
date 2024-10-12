import { useState } from "react";

const useCustomForm = () => {

    let initialValues = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
        zipcode: "",
        city: "",
        state: "",
        country: "",
        password: "",
        cpassword: "",
        secQue1: "",
        secQue1Ans: "",
        secQue2: "",
        secQue2Ans: "",
    };

    const [userDetails, setUserDetails] = useState(initialValues)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name + " | " + value);

        setUserDetails({ ...userDetails, [name]: value })
    }

    const resetForm = () => {
        setUserDetails(initialValues);
    }

    return {
        userDetails,
        handleInputChange,
        resetForm,
        setUserDetails
    }
}

export default useCustomForm;