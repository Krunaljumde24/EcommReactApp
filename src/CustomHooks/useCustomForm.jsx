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
    };

    const [userDetails, setUserDetails] = useState(initialValues)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
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