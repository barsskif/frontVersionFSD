import { memo, useEffect, useRef } from 'react';
import { Code, rem, Text } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import { clsx } from 'clsx';
import Prism from 'prismjs';

import { CustomHeading } from '@src/shared/components/CustomHeading';

// import 'prism-themes/themes/prism-darcula.css';
import 'prism-themes/themes/prism-hopscotch.css';
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

import classes from './styles.module.css';

type CustomMarkdownProps = {
  message: string;
};

export const CustomMarkdown = memo(({ message }: CustomMarkdownProps) => {
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
              <div className={classes.codeBlock}>
                {match && (
                  <div className={classes.languageLabel}>{match[1]}</div>
                )}

                <Code
                  className={clsx(className, classes.codeContent)}
                  style={{ fontSize: rem('1.2em') }}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </Code>
              </div>
            ) : (
              <Code className={classes.inlineCode} {...props}>
                {children}
              </Code>
            );
          },
          p: ({ children }) => (
            <Text component="p" className={classes.paragraph}>
              {children}
            </Text>
          ),
          h1: ({ children }) => (
            <CustomHeading
              children={children}
              level="h1"
              className={classes.heading}
            />
          ),
          h2: ({ children }) => (
            <CustomHeading
              children={children}
              level="h2"
              className={classes.heading}
            />
          ),
          h3: ({ children }) => (
            <CustomHeading
              children={children}
              level="h3"
              className={classes.heading}
            />
          ),
          ul: ({ children }) => <ul className={classes.list}>{children}</ul>,
          ol: ({ children }) => <ol className={classes.list}>{children}</ol>,
          li: ({ children }) => (
            <li className={classes.listItem}>{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className={classes.blockquote}>{children}</blockquote>
          ),
        }}
      >
        {message}
      </ReactMarkdown>
    </div>
  );
});
