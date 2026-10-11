import { Fragment } from 'react';
import Image from 'next/image';
import ReplyComparison from './ReplyComparison';

export type ContentBlock =
  | { type: 'paragraph' | 'quote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'comparison' }
  | { type: 'image'; src: string; alt: string; width: number; height: number; caption?: string };

// Accept only the emphasis used by the editorial copy; React escapes all text.
function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={index}>{part.slice(2, -2)}</strong>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
}

export default function ArticleContent({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === 'comparison') return <ReplyComparison key={index} />;
        if (block.type === 'image') {
          return (
            <figure key={index} className="my-8">
              <Image src={block.src} alt={block.alt} width={block.width} height={block.height} sizes="(max-width: 896px) 100vw, 848px" className="w-full h-auto rounded-2xl" loading="lazy" />
              {block.caption && <figcaption className="mt-3 text-sm text-gray-600">{block.caption}</figcaption>}
            </figure>
          );
        }
        if (block.type === 'list') {
          return (
            <ul key={index} className="list-disc pl-6 my-6 space-y-3">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}><Emphasis text={item} /></li>
              ))}
            </ul>
          );
        }

        if (block.type === 'quote') {
          return (
            <blockquote key={index} className="border-l-4 border-blue-600 pl-5 my-6 text-gray-700">
              <p><Emphasis text={block.text} /></p>
            </blockquote>
          );
        }

        return <p key={index} className="mb-5"><Emphasis text={block.text} /></p>;
      })}
    </>
  );
}
