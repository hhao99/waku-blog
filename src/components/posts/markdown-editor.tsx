import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import { useEditor, EditorContent} from '@tiptap/react';

export default function Editor({content,onChange}: {content: string}) {
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text
        ],
        content,
        immediatelyRender: false,
    })
    editor?.on('update',()=> onChange(editor?.getText()))

    return(
        <>
            <EditorContent editor={editor} />
        </>
    )
}