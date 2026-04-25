import CmsPublicPage from "@/components/public/CmsPublicPage";
import { PUBLIC_PAGE_DEFAULTS } from "@/data/public-page-defaults";

export default function IeltsMasterClass() {
  return <CmsPublicPage slug="ielts-masterclass" fallback={PUBLIC_PAGE_DEFAULTS["ielts-masterclass"]} />;
}
