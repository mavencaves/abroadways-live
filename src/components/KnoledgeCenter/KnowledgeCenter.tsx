import CmsPublicPage from "@/components/public/CmsPublicPage";
import { PUBLIC_PAGE_DEFAULTS } from "@/data/public-page-defaults";

export default function KnowledgeCenter() {
  return <CmsPublicPage slug="knowledge-center" fallback={PUBLIC_PAGE_DEFAULTS["knowledge-center"]} />;
}
