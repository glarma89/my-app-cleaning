import { useState } from 'react'; 

const useInput = (initial) => {     
    const [value, setValue] = useState(initial) 

    return {
        value,
        onChange: e => setValue(e.target.value),
        required: true
    }
};

export default useInput