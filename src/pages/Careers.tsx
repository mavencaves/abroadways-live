import CmsPublicPage from "@/components/public/CmsPublicPage";
import { PUBLIC_PAGE_DEFAULTS } from "@/data/public-page-defaults";

export default function Careers() {
  return <CmsPublicPage slug="careers" fallback={PUBLIC_PAGE_DEFAULTS.careers} />;
}
