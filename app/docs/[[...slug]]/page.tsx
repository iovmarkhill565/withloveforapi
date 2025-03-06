import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage(props: PageProps) {
  const params = await props.params;

  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] py-10">
        <DocsBreadcrumb paths={slug} />
        <Typography>
          <div className=" flex items-center gap-2 !-mt-0.5">
            <h1 className="sm:text-3xl text-2xl !mb-0">
              {res.frontmatter.title}
            </h1>
            {Array.isArray(res.frontmatter.tag) ? (
              res.frontmatter.tag.map((tag, index) => (
                <span
                  key={index}
                  className="dark:bg-blue-700 bg-blue-500 rounded-md px-1.5 py-0.5 mx-2 text-xs text-white !font-normal"
                >
                  {tag}
                </span>
              ))
            ) : (
              res.frontmatter.tag && (
                <span className="dark:bg-blue-700 bg-blue-500 rounded-md px-1.5 py-0.5 mx-2 text-xs text-white !font-normal">
                  {res.frontmatter.tag}
                </span>
              )
            )}
          </div>
          <p className="-mt-4 text-muted-foreground sm:text-[16.5px] text-[14.5px]">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <Toc path={pathName} />
    </div>
  );
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;

  const { slug = [] } = params;

  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);
  if (!res) return {};
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    tag: frontmatter.tag,
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
