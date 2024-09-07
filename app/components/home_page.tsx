import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default async function HomePage() {
  // Read the README.md file
  const filePath = path.join(process.cwd(), 'README.md');
  //const fileContents = fs.readFileSync('README.md', 'utf8');
  //console.log(fileContents)

  return (
    <div className="prose max-w-none mx-auto p-8">
      {/* Render the markdown content using react-markdown */}
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{fileContents}</ReactMarkdown> */}
    </div>
  );
}