import CmsPublicPage from "@/components/public/CmsPublicPage";
import { PUBLIC_PAGE_DEFAULTS } from "@/data/public-page-defaults";

export default function FinancePage() {
  return <CmsPublicPage slug="finance" fallback={PUBLIC_PAGE_DEFAULTS.finance} />;
}
