import { getChangelogs } from "@/lib/changelog";
import ChangelogView from "./changelog-view";

export const metadata = {
  title: "mProjects | Changelogs",
  description: "Notes de version des projets mDevsLabs.",
};

export default async function ChangelogPage() {
  const changelogs = getChangelogs();

  return <ChangelogView changelogs={changelogs} />;
}
