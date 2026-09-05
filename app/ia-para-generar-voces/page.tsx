import type { Metadata } from "next";
import { getLongtailPage } from "@/data/longtail";
import LongtailPage from "@/components/LongtailPage";

const page = getLongtailPage("generar-voces")!;

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.metaDescription,
  alternates: { canonical: "/ia-para-generar-voces" },
};

export default function Page() {
  return <LongtailPage page={page} path="/ia-para-generar-voces" />;
}
