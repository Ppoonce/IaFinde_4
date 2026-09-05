import type { Metadata } from "next";
import { getLongtailPage } from "@/data/longtail";
import LongtailPage from "@/components/LongtailPage";

const page = getLongtailPage("hacer-presentaciones")!;

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.metaDescription,
  alternates: { canonical: "/ia-para-hacer-presentaciones" },
};

export default function Page() {
  return <LongtailPage page={page} path="/ia-para-hacer-presentaciones" />;
}
