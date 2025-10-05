import { useState, useEffect, lazy, Suspense } from 'react'
import MarkdownPreview from '@uiw/react-markdown-preview'

const MDEditor = lazy(()=> import('@uiw/react-md-editor'))
export default function Editor({value,setValue}: {value: string, setValue: (value:string)=> void}) {
    return(
        <>
        <Suspense fallback={<h3>loading...</h3>}>
            <div className='container'>
                <MDEditor value={value} preview='edit' onChange={setValue}/> 
            </div>
            <div>
                <h3>Preview</h3>
                <MarkdownPreview value={value} />
            </div>
        </Suspense>   
        </>
    )

}