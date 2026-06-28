import { getChangelogs } from "@/lib/changelog";
import ChangelogView from "../changelog-view";

export const metadata = {
  title: "mProjects | Changelog mAI",
  description: "Notes de version du projet mAI.",
};

export default async function MaiChangelogPage() {
  const changelogs = getChangelogs();

  return <ChangelogView changelogs={changelogs} filterProject="mai" />;
}
