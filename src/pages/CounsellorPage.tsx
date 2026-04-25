import CmsPublicPage from "@/components/public/CmsPublicPage";
import { PUBLIC_PAGE_DEFAULTS } from "@/data/public-page-defaults";

export default function CounsellorPage() {
  return <CmsPublicPage slug="counseling" fallback={PUBLIC_PAGE_DEFAULTS.counseling} />;
}
