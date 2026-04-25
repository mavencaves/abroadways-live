import CmsPublicPage from "@/components/public/CmsPublicPage";
import { PUBLIC_PAGE_DEFAULTS } from "@/data/public-page-defaults";

export default function MavencaveAdvantage() {
  return <CmsPublicPage slug="facilities" fallback={PUBLIC_PAGE_DEFAULTS.facilities} />;
}
