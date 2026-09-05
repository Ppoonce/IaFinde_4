import type { Metadata } from "next";
import { getLongtailPage } from "@/data/longtail";
import LongtailPage from "@/components/LongtailPage";

const page = getLongtailPage("editar-fotos")!;

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.metaDescription,
  alternates: { canonical: "/ia-para-editar-fotos" },
};

export default function Page() {
  return <LongtailPage page={page} path="/ia-para-editar-fotos" />;
}
