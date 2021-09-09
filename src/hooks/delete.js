import { useState } from 'react';

function useRemove(props){
    const [ list, setList ] = useState(props)
    
    const removeItemList = (element) => {
        const newList = list.filter((item) => item !== element)
        setList(newList)
    }

    return [list, removeItemList]
}

export default useRemove;
