import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';
import remark from 'remark';
import html from 'remark-html';


interface HomePageProps {
    content: string;
  }

export default function HomePage({ content }: HomePageProps) {
    return (
        <div className="prose max-w-none mx-auto p-8">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'README.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');

    const processedContent = await remark().use(html).process(fileContents);
    const content = processedContent.toString();

    return {
        props: {
            content,
        },
    };
}