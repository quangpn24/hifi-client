import React, { useCallback } from 'react';
import MarkdownIt from 'markdown-it';
import 'react-markdown-editor-lite/lib/index.css';
import dynamic from 'next/dynamic';

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false,
});

const mdParser = new MarkdownIt();

const MarkDownField = ({ setValue, defaultValue }: any) => {
  const handleEditorChange = useCallback(
    ({ text }) => {
      setValue(text);
    },
    [setValue]
  );

  return (
    <MdEditor
      style={{ height: '240px', borderRadius: '4px' }}
      view={{ menu: true, md: true, html: false }}
      plugins={[
        'font-bold',
        'font-italic',
        'link',
        'full-screen',
        'list-ordered',
        'list-unordered',
        'logger',
      ]}
      defaultValue={defaultValue}
      renderHTML={(text) => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
};

export default MarkDownField;
