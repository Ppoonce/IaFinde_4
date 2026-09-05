import type { Metadata } from "next";
import { getLongtailPage } from "@/data/longtail";
import LongtailPage from "@/components/LongtailPage";

const page = getLongtailPage("crear-videos")!;

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.metaDescription,
  alternates: { canonical: "/ia-para-crear-videos" },
};

export default function Page() {
  return <LongtailPage page={page} path="/ia-para-crear-videos" />;
}
