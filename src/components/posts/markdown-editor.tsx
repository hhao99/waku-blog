import { useEffect, useState} from 'react';
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import { useEditor, EditorContent} from '@tiptap/react';

export default function Editor({content,onChange}: {content: string, onChange: (content:string)=> void}) {
    const [isSSR,setISSR] = useState(true)
    useEffect(()=>{ 
        setISSR(false)
    },[])
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text
        ],
        content,
        immediatelyRender: !isSSR,
        shouldRerenderOnTransaction: true,
    })
    editor?.on('update',()=> onChange(editor?.getText()))

    return(
        <>
            <EditorContent editor={editor} />
        </>
    )
}