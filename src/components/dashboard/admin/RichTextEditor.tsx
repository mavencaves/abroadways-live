import { useEffect, useRef, useState } from "react";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  ImageUp,
  Italic,
  Link2,
  List,
  ListOrdered,
  Pilcrow,
  Quote,
  Redo2,
  Underline,
  Undo2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onImageUpload?: (file: File) => Promise<string>;
};

const toolbarButtonClass = "h-9 px-3";

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Start writing...",
  onImageUpload,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    if (!editorRef.current) return;

    const incoming = value?.trim() ? value : "<p></p>";
    if (editorRef.current.innerHTML !== incoming) {
      editorRef.current.innerHTML = incoming;
    }
  }, [value]);

  const syncContent = () => {
    onChange(editorRef.current?.innerHTML || "");
  };

  const runCommand = (command: string, commandValue?: string) => {
    editorRef.current?.focus();
    document.execCommand(command, false, commandValue);
    syncContent();
  };

  const applyBlock = (blockTag: "P" | "H1" | "H2" | "H3" | "BLOCKQUOTE") => {
    runCommand("formatBlock", blockTag);
  };

  const createLink = () => {
    const url = window.prompt("Enter the link URL");
    if (!url) return;
    runCommand("createLink", url);
  };

  const insertImage = async (file?: File) => {
    if (!file || !onImageUpload) return;

    try {
      setUploadingImage(true);
      const imageUrl = await onImageUpload(file);
      runCommand("insertImage", imageUrl);
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => insertImage(event.target.files?.[0])}
      />
      <div className="flex flex-wrap gap-2 border-b border-slate-200 bg-slate-50 p-3">
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => applyBlock("P")}>
          <Pilcrow className="mr-2 h-4 w-4" />
          Paragraph
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => applyBlock("H1")}>
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => applyBlock("H2")}>
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => applyBlock("H3")}>
          <Heading3 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => runCommand("bold")}>
          <Bold className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => runCommand("italic")}>
          <Italic className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => runCommand("underline")}>
          <Underline className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => runCommand("insertUnorderedList")}>
          <List className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => runCommand("insertOrderedList")}>
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => applyBlock("BLOCKQUOTE")}>
          <Quote className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={createLink}>
          <Link2 className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={toolbarButtonClass}
          onClick={() => fileInputRef.current?.click()}
          disabled={!onImageUpload || uploadingImage}
        >
          <ImageUp className="mr-2 h-4 w-4" />
          {uploadingImage ? "Uploading..." : "Image"}
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => runCommand("undo")}>
          <Undo2 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="outline" size="sm" className={toolbarButtonClass} onClick={() => runCommand("redo")}>
          <Redo2 className="h-4 w-4" />
        </Button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        onInput={syncContent}
        className="prose prose-slate min-h-[340px] max-w-none px-5 py-4 text-sm leading-7 text-slate-700 outline-none"
        data-placeholder={placeholder}
      />

      <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
        Rich text content is saved as editor HTML plus a plain-text fallback for existing public rendering.
      </div>
    </div>
  );
}
