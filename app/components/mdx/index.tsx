import { MDXComponents } from "mdx/types";
import NextImage from "next/image";
// import Link from '@components/link'

export const mdxComponents: MDXComponents = {
  // TODO: re-enable once anchor tags are fixed in the app router
  // a: ({ children, ...props }) => {
  //   // check if external
  //   let te = false
  //   if (props.href?.startsWith('http')) {
  //     isExternal = true
  //   }

  //   return (
  //     // @ts-expect-error legacy refs
  //     <Link
  //       {...props}
  //       href={props.href || ''}
  //       target={isExternal ? '_blank' : undefined}
  //       rel={isExternal ? 'noopener noreferrer' : undefined}
  //     >
  //       {children}
  //     </Link>
  //   )
  // },
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => {
    // TODO: extract title from children
    return (
      // @ts-expect-error RSC
      <Code {...props} theme="material-default">
        {children as any}
      </Code>
    );
  },
  // @ts-expect-error types
  img: MDXImage,
  Image: NextImage,
  Details: ({
    children,
    summary,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLDetailsElement
  > & {
    summary: string;
  }) => (
    // Necessary due to a hydration error I can't quite figure out
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
  Note: MDXNote,
  //   icons
  InfoIcon: Info,
  HomeIcon: Home,

  // file tree
  FileTree,
  File,
  Folder,

  Tweet: (props) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tweet {...props} />
    </div>
  ),
};
