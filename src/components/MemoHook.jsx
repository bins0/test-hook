import { useCallback, useMemo, useState } from "react"

const MemeHook =() => {
    const [inputnum, setInputnum] = useState(0)
    const [number,setNumber] = useState([1,5,10,4])

    const onChange = useCallback((e) =>{
        console.log('onchange실행')
        setInputnum(e.target.value)
    },[])

    const addNum = useCallback(() =>{
        setNumber([...number,parseInt(inputnum)])
        setInputnum(0)
    },[inputnum,number])

    const allSum = (list) => {
        return list.reduce((a,b) => Math.floor(a+b/list.length))
    }

    const sum = useMemo(() => allSum(number),[number])


    return(
        <div>
            <input type="number" onChange={onChange} value={inputnum} />
            <button onClick={addNum}>추가</button>
         
            <h3>모든 수의 평균 : {sum}</h3>
            <ul>
               {
                   number.map((v,i) =>(
                       <li key={i}>{v}</li>
                   ))
               }
            </ul>
        </div>
    )
}

export default MemeHook