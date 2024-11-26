import { useSearchParams } from "react-router-dom";

const QueryPrint = ()=>{
    const [searchParams , setSearchParams] = useSearchParams();
    console.log(searchParams.get("name"));
    const searchParamsObj = Object.fromEntries(searchParams.entries())
    console.log(searchParamsObj);
    

    
    return(
        <>
        QueryPrint

        </>
    )
}

export default QueryPrint;