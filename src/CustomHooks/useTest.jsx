import { useEffect, useState } from "react"

function useTest() {


    const [testData, setTestData] = useState({})

    let addDataToTest = (data) => {
        setTestData(data);
    }

    return {
        testData,
        addDataToTest
    }
}

export default useTest