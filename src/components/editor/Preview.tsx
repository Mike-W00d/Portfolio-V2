import { Code } from "bright";
import { MDXRemote } from "next-mdx-remote/rsc";

export const Preview = ({ content }: { content: string }) => {
  const formattedContent = content.replace(/\\/g, "").replace(/&#x20;/g, "");

  return (
    <section className="markdown prose grid break-words">
      <MDXRemote
        source={formattedContent}
        components={{
          pre: (props) => (
            <Code {...props} lineNumbers className="shadow-slate-200" />
          ),
        }}
      />
    </section>
  );
};
