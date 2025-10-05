import { useState, useEffect, lazy, Suspense } from 'react'

const MDEditor = lazy(()=> import('@uiw/react-md-editor'))
export default function Editor({value,setValue}: {value: string, setValue: (value:string)=> void}) {
    return(
        <>
        <Suspense fallback={<h3>loading...</h3>}>
            <div className='container'>
                <MDEditor value={value} onChange={setValue}/> 
            </div>
        </Suspense>   
        </>
    )

}