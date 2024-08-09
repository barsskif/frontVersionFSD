import { Code, Text } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import { clsx } from 'clsx';
import Prism from 'prismjs';

import 'prism-themes/themes/prism-darcula.css';

import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-less';
import 'prismjs/components/prism-json';

import styles from './styles.module.css';
import { useEffect, useRef } from 'react';

type TypeCustomMarkdownProps = {
  message: string;
};

export const CustomMarkdown = (props: TypeCustomMarkdownProps) => {
  const { message } = props;
  const codeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightAllUnder(codeRef.current);
    }
  }, [message]);

  return (
    <div ref={codeRef}>
      <ReactMarkdown
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <div className={styles.codeBlock}>
                {match && (
                  <div className={styles.languageLabel}>{match[1]}</div>
                )}

                <Code
                  className={clsx(className, styles.codeContent)}
                  style={{ fontSize: '1.2em' }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </Code>
              </div>
            ) : (
              <Code className={styles.inlineCode} {...props}>
                {children}
              </Code>
            );
          },
          p: ({ children }) => (
            <Text component="p" className={styles.paragraph}>
              {children}
            </Text>
          ),
          h1: ({ children }) => (
            <Text component="h1" size="xl" className={styles.heading}>
              {children}
            </Text>
          ),
          h2: ({ children }) => (
            <Text component="h2" size="lg" className={styles.heading}>
              {children}
            </Text>
          ),
          h3: ({ children }) => (
            <Text component="h3" size="md" className={styles.heading}>
              {children}
            </Text>
          ),
          ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
          ol: ({ children }) => <ol className={styles.list}>{children}</ol>,
          li: ({ children }) => <li className={styles.listItem}>{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className={styles.blockquote}>{children}</blockquote>
          ),
        }}
      >
        {message}
      </ReactMarkdown>
    </div>
  );
};
