import { useState } from "react"


const useFormInput = (InitialState='') => {
    const [value, setValue] = useState(InitialState)

    const handleChange = (text: string) => {
        setValue(text)
    }

    return {
        value,
        onChange: handleChange,
    }
}

export default useFormInput