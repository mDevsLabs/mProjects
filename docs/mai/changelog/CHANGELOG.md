<a name="readme-top"></a>

# Changelog

## [Version 1.0.0](https://github.com/mDevsLabs/mAI/compare/v0.9.0...v1.0.0)

<sup>Released on **2026-06-28**</sup>

#### 🏆 Rewards & Gamification
- **Quêtes** : Création de 700 quêtes quotidiennes à difficulté allégée (10-30 MP) et 700 quêtes hebdomadaires standards (100-150 MP) entièrement rédigées en français sans aucun numéro générique.
- **Badges** : Création de 100 badges uniques associés à 100 emojis différents, classés par rareté (50 Rare, 30 Épique, 10 Légendaire, 7 Mythique, 3 Ultra) avec tags colorés d'Ant Design.
- **Niveau** : Courbe de progression réajustée pour demander exactement 200 MP par niveau.
- **Bonus** : Limitation à 3 quêtes quotidiennes bonus par jour maximum avec message d'erreur d'Ant Design en cas de dépassement.
- **FAQ & Paramètres** : Intégration d'une FAQ en Markdown de 10 guides, contours de l'accordéon polis, suppression des emojis superflus dans les titres, et réorganisation de l'onglet Paramètres en 4ème position dans le menu déroulant.

#### 🦊 Virtual Companions (Pets)
- **Orientation des pattes** : Correction du bug d'orientation des jambes/pattes du compagnon lors de son déplacement vers la droite (la jambe va maintenant dans le sens naturel de la marche).

#### 🌍 Localization (i18n)
- **Langues** : Traduction intégrale et manuelle de toutes les clés de gamification (`gamification.*`), de compagnons (`settingPets.*`), et de navigation (`tab.rewards*`, `tab.pets`) dans les 18 langues de l'application.

#### ⚡ Performance & UI
- **Performances** : Mémoïsation du composant `BadgeCard` pour un chargement instantané et une recherche fluide sans aucun lag de rendu.
- **Colonnes de badges** : Correction du bug d'affichage en colonnes multiples (interpolation de la variable `${columns}`).
- **Page Niveau** : Effets de fondu de page (`fadeIn`), pulsation lumineuse (`pulseGlow`) sur le cercle, et survol interactif sur les cartes de statistiques.

## [Version 0.9.0](https://github.com/mDevsLabs/mAI/compare/v2.2.6...v0.4.0)

<sup>Released on **2026-06-23**</sup>

#### 🎨 Rebranding & Customization
- **Desktop**: Rebranding complet et améliorations importantes de l'expérience ainsi qu'introduction de la connexion via l'application Web mAI
- **Pets**: Intégration de **dix nouveaux pets** pour vous accompagner et ajouts de leurs effets sonores.
- **CLI**: Lancement amélioré avec mai et pas lh ou lobehub. Installation via **npm install -g @mdevs/mai-cli**.
- **Fix**: Corrections de divers bugs et problèmes
- **Improve**: Améliorations importantes de l'interface et divers autres
- **Version**: Mise à jour de la version du projet vers la version supérieure `0.9.0` sous l'auteur `mDevlopers`.

## [Version 0.4.0](https://github.com/mDevsLabs/mAI/compare/v2.2.6...v0.4.0)

<sup>Released on **2026-06-20**</sup>

#### 🎨 Rebranding & Customization
- **mAI**: Rebranding complet de l'application LobeHub vers la marque **mAI** et l'assistant **May**.
- **Auth**: Configuration et intégration exclusive des fournisseurs SSO Canva, Google, Github, Notion, Railway, Slack, Spotify, Telegram, Twitch et X.
- **Branding**: Remplacement des logos de marque et de l'avatar par `/avatars/may.PNG`.
- **Fix**: Corrections de divers bugs et problèmes
- **Improve**: Améliorations importantes de l'interface, connexion, bases de données et performances
- **Version**: Mise à jour de la version du projet vers la version supérieure `0.4.0` sous l'auteur `mDevlopers`.

## [Version 2.2.6](https://github.com/lobehub/lobe-chat/compare/v2.2.6-canary.8...v2.2.6)

<sup>Released on **2026-06-17**</sup>

#### ✨ Features

- **agent**: improve connector, document, and fleet workflows.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **agent**: improve connector, document, and fleet workflows, closes [#15936](https://github.com/lobehub/lobe-chat/issues/15936) ([3f82033](https://github.com/lobehub/lobe-chat/commit/3f82033))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version 2.2.1](https://github.com/lobehub/lobe-chat/compare/v0.0.0-nightly.pr15228.13999...v2.2.1)

<sup>Released on **2026-05-29**</sup>

#### ✨ Features

- **device**: device registry TRPC (register / list / update / remove).
- **bot**: add iMessage Desktop setup and bridge.
- **desktop**: show zoom level HUD on Cmd+/- and Cmd+0.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **device**: device registry TRPC (register / list / update / remove), closes [#15299](https://github.com/lobehub/lobe-chat/issues/15299) ([671b252](https://github.com/lobehub/lobe-chat/commit/671b252))
- **bot**: add iMessage Desktop setup and bridge, closes [#15228](https://github.com/lobehub/lobe-chat/issues/15228) ([6d94635](https://github.com/lobehub/lobe-chat/commit/6d94635))
- **desktop**: show zoom level HUD on Cmd+/- and Cmd+0, closes [#15294](https://github.com/lobehub/lobe-chat/issues/15294) ([109545c](https://github.com/lobehub/lobe-chat/commit/109545c))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

### [Version 2.2.0](https://github.com/lobehub/lobe-chat/compare/v2.1.59-canary.27...v2.2.0)

<sup>Released on **2026-05-18**</sup>

#### 💄 Styles

- **pricing**: restore DeepSeek models to official pricing.

#### 🐛 Bug Fixes

- **conversation**: animate only the last markdown block + drop clearMessages hotkey.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### Styles

- **pricing**: restore DeepSeek models to official pricing, closes [#14911](https://github.com/lobehub/lobe-chat/issues/14911) ([e566688](https://github.com/lobehub/lobe-chat/commit/e566688))

#### What's fixed

- **conversation**: animate only the last markdown block + drop clearMessages hotkey, closes [#14906](https://github.com/lobehub/lobe-chat/issues/14906) ([469a8e6](https://github.com/lobehub/lobe-chat/commit/469a8e6))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

## [Version 2.1.58](https://github.com/lobehub/lobe-chat/compare/v2.1.57...v2.1.58)

<sup>Released on **2026-05-13**</sup>

#### ✨ Features

- **agent-runtime**: persist agent operations to `agent_operations` table.
- **misc**: support slack mpim and fix discord dm problem.
- **database**: add `agent_operations` table.
- **markdown**: user_feedback card + task card polish + Run now context menu.
- **documents**: add optimistic create/delete and inline rename for document tree.
- **devtools**: add dev-only feature flag override panel.
- **misc**: add service model assignments settings.
- **misc**: inline skill auth in recommended task templates.
- **activator**: require activation reason.
- **agent-signal,server,prompts**: consolidate in self-review implemented.
- **hetero-agent**: support AskUserQuestion tools for claude code.
- **bot**: gate device tools by sender identity.
- **misc**: add user activity business hook.
- **misc**: add Gemini 3.1 Flash-Lite provider cards.
- **misc**: home daily brief with linkable welcome + paired input hint.
- **agent-signal,prompts,database**: self-review now proposal actions to briefs, and automatically execute actions.
- **misc**: add signOperationJwt with 4h expiry for hetero-agent operations.
- **misc**: migrate Notion to LobeHub Market.
- **misc**: Cloud Claude Code V3 — repo picker, GitHub token, sandbox context.

#### 🐛 Bug Fixes

- **hetero-agent**: wire AskUserBridge response events to renderer.
- **home**: blank user bubble when sending the placeholder hint.
- **conversation**: prevent synthetic scroll from shrinking spacer.
- **task-card**: localize task card date independent of dayjs global locale.
- **web-crawler**: cap response body size to prevent serverless OOM.
- **desktop**: focus onboarding auth success state.
- **misc**: Docs image.
- **desktop**: detect Windows npm .cmd shims for CLI agents (claude/codex/…).
- **misc**: update Task page placeholder copy.
- **builtin-tool-task**: expose `lobe-task` and add `setTaskSchedule`.
- **desktop**: reset pendingLoginMethod on auth failure/cancel paths.
- **utils**: cap image binary at 3.75MB so base64 payload stays under Anthropic 5MB limit.
- **tasks**: scheduler, hotkey, comment & TodoList polish.
- **cli**: remove stale cron entry from generated man page.
- **misc**: sidebar add agent.
- **misc**: replace ScrollShadow with ScrollArea to fix React #185 infinite render loop.
- **heteroFinish**: trigger task lifecycle on cloud sandbox agent completion.
- **hotkey**: remove redundant onClear to prevent double updateHotkey calls.
- **misc**: reject inactive OIDC access.
- **misc**: drop unreachable aihubmix empty-apiKey test.
- **aihubmix**: use full models endpoint to return complete model list.
- **onboarding**: skip marketplace on early exit, drop CJK in prompts.
- **model-runtime**: enrich stream parse errors with provider/model context.
- **home**: strip markdown links from daily-brief input placeholder.
- **misc**: consume visual content parts in server runtime.
- **misc**: store onboarding interests as keys.
- **hetero-agent**: sync new-step assistant across replicas.
- **misc**: remove the old cron job from lobehub.
- **misc**: refresh content baseline from DB on every ingest call.
- **hetero-agent**: disable Claude Code AskUserQuestion to avoid auto-decline.
- **local-system**: guard readFile against binary blobs and oversized output.
- **database,utils,userMemories**: should perfer to use `paradedb.match(...)` instead of hardcoded normalizer.
- **database**: attach error listeners to Neon/Node pools to prevent Lambda crash.
- **misc**: gateway client-tool pluginState + drop redundant `Exit code: 0` tail.
- **gemini**: handle zero cachedContentTokenCount in usage conversion.
- **misc**: first inject the cloudecc runtime session should use the existingStatus.
- **misc**: slack connect error & slash commands.
- **misc**: polish task agent manager.
- **agent-runtime**: recover malformed tool_call names instead of finishing silently.
- **misc**: remove signin captcha flow.
- **misc**: add temporary email auth error locale.
- **misc**: add bot callback service.
- **misc**: sanitize sensitive comments and examples from production JS bundle.
- **misc**: multiple account link.

#### 💄 Styles

- **misc**: use @lobehub/ui built-in HtmlPreview instead of custom component.
- **misc**: polish desktop header icons, sidebar density, and task menus.
- **review-panel**: hover revert button to discard per-file working-tree changes.
- **misc**: standardize header action icon sizes.
- **tool**: add word wrap toggle to tool arguments display.
- **nav**: unify ActionIcon sizing and improve TodoList encapsulation.
- **web-onboarding**: add Render for saveUserQuestion & showAgentMarketplace.
- **misc**: add `reasoning_effort` support for Grok 4.3.
- **misc**: increase chat topic title length.
- **hetero-agent**: read-only SubAgent threads with breadcrumb header and thread switcher.
- **chat-input**: show skeleton in action bar while config is loading.
- **home**: add Recommendations module with hetero agent action library.
- **copyable-label**: wrap long tool-call params instead of truncating.
- **misc**: format tool execution time as Xmin Ys instead of X.Y min.
- **misc**: Add new DeepSeek-V4 models.
- **topic**: add copy session ID to topic dropdown menu.
- **misc**: use visible divider between queued messages.
- **intervention**: polish confirmation bar layout.
- **settings**: remove image avatar from lab input markdown rendering item.
- **task**: activity card stop run + register /tasks in SPA proxy.
- **misc**: update auth captcha retry copy.

<br/>

<details>
<summary><kbd>Improvements and Fixes</kbd></summary>

#### What's improved

- **agent-runtime**: persist agent operations to `agent_operations` table, closes [#14736](https://github.com/lobehub/lobe-chat/issues/14736) ([a772341](https://github.com/lobehub/lobe-chat/commit/a772341))
- **misc**: support slack mpim and fix discord dm problem, closes [#14733](https://github.com/lobehub/lobe-chat/issues/14733) ([729265a](https://github.com/lobehub/lobe-chat/commit/729265a))
- **database**: add `agent_operations` table, closes [#14416](https://github.com/lobehub/lobe-chat/issues/14416) ([cb8b616](https://github.com/lobehub/lobe-chat/commit/cb8b616))
- **markdown**: user_feedback card + task card polish + Run now context menu, closes [#14727](https://github.com/lobehub/lobe-chat/issues/14727) ([79152fa](https://github.com/lobehub/lobe-chat/commit/79152fa))
- **documents**: add optimistic create/delete and inline rename for document tree, closes [#14714](https://github.com/lobehub/lobe-chat/issues/14714) ([0007984](https://github.com/lobehub/lobe-chat/commit/0007984))
- **devtools**: add dev-only feature flag override panel, closes [#14565](https://github.com/lobehub/lobe-chat/issues/14565) ([18b1c25](https://github.com/lobehub/lobe-chat/commit/18b1c25))
- **misc**: add service model assignments settings, closes [#14712](https://github.com/lobehub/lobe-chat/issues/14712) ([eb924ec](https://github.com/lobehub/lobe-chat/commit/eb924ec))
- **misc**: inline skill auth in recommended task templates, closes [#14676](https://github.com/lobehub/lobe-chat/issues/14676) ([4490e3e](https://github.com/lobehub/lobe-chat/commit/4490e3e))
- **activator**: require activation reason, closes [#14597](https://github.com/lobehub/lobe-chat/issues/14597) ([5f14b7e](https://github.com/lobehub/lobe-chat/commit/5f14b7e))
- **agent-signal,server,prompts**: consolidate in self-review implemented, closes [#14657](https://github.com/lobehub/lobe-chat/issues/14657) ([1374fd2](https://github.com/lobehub/lobe-chat/commit/1374fd2))
- **hetero-agent**: support AskUserQuestion tools for claude code, closes [#14639](https://github.com/lobehub/lobe-chat/issues/14639) ([49c3d7e](https://github.com/lobehub/lobe-chat/commit/49c3d7e))
- **bot**: gate device tools by sender identity, closes [#14634](https://github.com/lobehub/lobe-chat/issues/14634) ([3c81011](https://github.com/lobehub/lobe-chat/commit/3c81011))
- **misc**: add user activity business hook, closes [#14601](https://github.com/lobehub/lobe-chat/issues/14601) ([521566b](https://github.com/lobehub/lobe-chat/commit/521566b))
- **misc**: add Gemini 3.1 Flash-Lite provider cards, closes [#14604](https://github.com/lobehub/lobe-chat/issues/14604) ([9b032f0](https://github.com/lobehub/lobe-chat/commit/9b032f0))
- **misc**: home daily brief with linkable welcome + paired input hint, closes [#14589](https://github.com/lobehub/lobe-chat/issues/14589) ([12e37f1](https://github.com/lobehub/lobe-chat/commit/12e37f1))
- **agent-signal,prompts,database**: self-review now proposal actions to briefs, and automatically execute actions, closes [#14583](https://github.com/lobehub/lobe-chat/issues/14583) ([b7a5020](https://github.com/lobehub/lobe-chat/commit/b7a5020))
- **misc**: add signOperationJwt with 4h expiry for hetero-agent operations, closes [#14586](https://github.com/lobehub/lobe-chat/issues/14586) ([d2c379c](https://github.com/lobehub/lobe-chat/commit/d2c379c))
- **misc**: migrate Notion to LobeHub Market, closes [#14578](https://github.com/lobehub/lobe-chat/issues/14578) ([f1f2e58](https://github.com/lobehub/lobe-chat/commit/f1f2e58))
- **misc**: Cloud Claude Code V3 — repo picker, GitHub token, sandbox context, closes [#14568](https://github.com/lobehub/lobe-chat/issues/14568) ([7792f63](https://github.com/lobehub/lobe-chat/commit/7792f63))

#### What's fixed

- **hetero-agent**: wire AskUserBridge response events to renderer, closes [#14732](https://github.com/lobehub/lobe-chat/issues/14732) ([5174c13](https://github.com/lobehub/lobe-chat/commit/5174c13))
- **home**: blank user bubble when sending the placeholder hint, closes [#14678](https://github.com/lobehub/lobe-chat/issues/14678) ([fc275ca](https://github.com/lobehub/lobe-chat/commit/fc275ca))
- **conversation**: prevent synthetic scroll from shrinking spacer, closes [#14584](https://github.com/lobehub/lobe-chat/issues/14584) ([217afcf](https://github.com/lobehub/lobe-chat/commit/217afcf))
- **task-card**: localize task card date independent of dayjs global locale, closes [#14730](https://github.com/lobehub/lobe-chat/issues/14730) ([df0e635](https://github.com/lobehub/lobe-chat/commit/df0e635))
- **web-crawler**: cap response body size to prevent serverless OOM, closes [#14660](https://github.com/lobehub/lobe-chat/issues/14660) ([2202189](https://github.com/lobehub/lobe-chat/commit/2202189))
- **desktop**: focus onboarding auth success state, closes [#14694](https://github.com/lobehub/lobe-chat/issues/14694) ([4e4294f](https://github.com/lobehub/lobe-chat/commit/4e4294f))
- **misc**: Docs image, closes [#14726](https://github.com/lobehub/lobe-chat/issues/14726) ([3a4bd4a](https://github.com/lobehub/lobe-chat/commit/3a4bd4a))
- **desktop**: detect Windows npm .cmd shims for CLI agents (claude/codex/…), closes [#14720](https://github.com/lobehub/lobe-chat/issues/14720) ([a40fe91](https://github.com/lobehub/lobe-chat/commit/a40fe91))
- **misc**: update Task page placeholder copy, closes [#14704](https://github.com/lobehub/lobe-chat/issues/14704) ([eea742f](https://github.com/lobehub/lobe-chat/commit/eea742f))
- **builtin-tool-task**: expose `lobe-task` and add `setTaskSchedule`, closes [#14713](https://github.com/lobehub/lobe-chat/issues/14713) ([5ff4590](https://github.com/lobehub/lobe-chat/commit/5ff4590))
- **desktop**: reset pendingLoginMethod on auth failure/cancel paths, closes [#14695](https://github.com/lobehub/lobe-chat/issues/14695) ([51cefe0](https://github.com/lobehub/lobe-chat/commit/51cefe0))
- **utils**: cap image binary at 3.75MB so base64 payload stays under Anthropic 5MB limit, closes [#14711](https://github.com/lobehub/lobe-chat/issues/14711) ([948e48b](https://github.com/lobehub/lobe-chat/commit/948e48b))
- **tasks**: scheduler, hotkey, comment & TodoList polish, closes [#14707](https://github.com/lobehub/lobe-chat/issues/14707) ([1ae774d](https://github.com/lobehub/lobe-chat/commit/1ae774d))
- **cli**: remove stale cron entry from generated man page, closes [#14709](https://github.com/lobehub/lobe-chat/issues/14709) ([94e4ea6](https://github.com/lobehub/lobe-chat/commit/94e4ea6))
- **misc**: sidebar add agent, closes [#14693](https://github.com/lobehub/lobe-chat/issues/14693) ([fdedc96](https://github.com/lobehub/lobe-chat/commit/fdedc96))
- **misc**: replace ScrollShadow with ScrollArea to fix React #185 infinite render loop, closes [#185](https://github.com/lobehub/lobe-chat/issues/185), closes [#14689](https://github.com/lobehub/lobe-chat/issues/14689) ([7349ad0](https://github.com/lobehub/lobe-chat/commit/7349ad0))
- **heteroFinish**: trigger task lifecycle on cloud sandbox agent completion, closes [#14681](https://github.com/lobehub/lobe-chat/issues/14681) ([744059c](https://github.com/lobehub/lobe-chat/commit/744059c))
- **hotkey**: remove redundant onClear to prevent double updateHotkey calls, closes [#14663](https://github.com/lobehub/lobe-chat/issues/14663) ([dfe1932](https://github.com/lobehub/lobe-chat/commit/dfe1932))
- **misc**: reject inactive OIDC access, closes [#14674](https://github.com/lobehub/lobe-chat/issues/14674) ([b79c5d8](https://github.com/lobehub/lobe-chat/commit/b79c5d8))
- **misc**: drop unreachable aihubmix empty-apiKey test, closes [#14669](https://github.com/lobehub/lobe-chat/issues/14669) ([b0ee35d](https://github.com/lobehub/lobe-chat/commit/b0ee35d))
- **aihubmix**: use full models endpoint to return complete model list, closes [#14511](https://github.com/lobehub/lobe-chat/issues/14511) ([f4de472](https://github.com/lobehub/lobe-chat/commit/f4de472))
- **onboarding**: skip marketplace on early exit, drop CJK in prompts, closes [#14598](https://github.com/lobehub/lobe-chat/issues/14598) ([a9eb904](https://github.com/lobehub/lobe-chat/commit/a9eb904))
- **model-runtime**: enrich stream parse errors with provider/model context, closes [#14636](https://github.com/lobehub/lobe-chat/issues/14636) ([7daed90](https://github.com/lobehub/lobe-chat/commit/7daed90))
- **home**: strip markdown links from daily-brief input placeholder, closes [#14635](https://github.com/lobehub/lobe-chat/issues/14635) ([0babdcf](https://github.com/lobehub/lobe-chat/commit/0babdcf))
- **misc**: consume visual content parts in server runtime, closes [#14637](https://github.com/lobehub/lobe-chat/issues/14637) ([d445a89](https://github.com/lobehub/lobe-chat/commit/d445a89))
- **misc**: store onboarding interests as keys, closes [#14624](https://github.com/lobehub/lobe-chat/issues/14624) ([9982de3](https://github.com/lobehub/lobe-chat/commit/9982de3))
- **hetero-agent**: sync new-step assistant across replicas, closes [#14631](https://github.com/lobehub/lobe-chat/issues/14631) ([7675bd9](https://github.com/lobehub/lobe-chat/commit/7675bd9))
- **misc**: remove the old cron job from lobehub, closes [#14630](https://github.com/lobehub/lobe-chat/issues/14630) ([457d112](https://github.com/lobehub/lobe-chat/commit/457d112))
- **misc**: refresh content baseline from DB on every ingest call, closes [#14603](https://github.com/lobehub/lobe-chat/issues/14603) ([6595961](https://github.com/lobehub/lobe-chat/commit/6595961))
- **hetero-agent**: disable Claude Code AskUserQuestion to avoid auto-decline, closes [#14629](https://github.com/lobehub/lobe-chat/issues/14629) ([ae8f9cf](https://github.com/lobehub/lobe-chat/commit/ae8f9cf))
- **local-system**: guard readFile against binary blobs and oversized output, closes [#14602](https://github.com/lobehub/lobe-chat/issues/14602) ([96165e4](https://github.com/lobehub/lobe-chat/commit/96165e4))
- **database,utils,userMemories**: should perfer to use `paradedb.match(...)` instead of hardcoded normalizer, closes [#14590](https://github.com/lobehub/lobe-chat/issues/14590) ([38b793f](https://github.com/lobehub/lobe-chat/commit/38b793f))
- **database**: attach error listeners to Neon/Node pools to prevent Lambda crash, closes [#14606](https://github.com/lobehub/lobe-chat/issues/14606) ([11ec59b](https://github.com/lobehub/lobe-chat/commit/11ec59b))
- **misc**: gateway client-tool pluginState + drop redundant `Exit code: 0` tail, closes [#14596](https://github.com/lobehub/lobe-chat/issues/14596) ([4bfd434](https://github.com/lobehub/lobe-chat/commit/4bfd434))
- **gemini**: handle zero cachedContentTokenCount in usage conversion, closes [#14567](https://github.com/lobehub/lobe-chat/issues/14567) ([307cd8e](https://github.com/lobehub/lobe-chat/commit/307cd8e))
- **misc**: first inject the cloudecc runtime session should use the existingStatus, closes [#14592](https://github.com/lobehub/lobe-chat/issues/14592) ([09c66ff](https://github.com/lobehub/lobe-chat/commit/09c66ff))
- **misc**: slack connect error & slash commands, closes [#14591](https://github.com/lobehub/lobe-chat/issues/14591) ([8274be0](https://github.com/lobehub/lobe-chat/commit/8274be0))
- **misc**: polish task agent manager, closes [#14569](https://github.com/lobehub/lobe-chat/issues/14569) ([a02ecbc](https://github.com/lobehub/lobe-chat/commit/a02ecbc))
- **agent-runtime**: recover malformed tool_call names instead of finishing silently, closes [#14577](https://github.com/lobehub/lobe-chat/issues/14577) ([5f8ec8b](https://github.com/lobehub/lobe-chat/commit/5f8ec8b))
- **misc**: remove signin captcha flow, closes [#14573](https://github.com/lobehub/lobe-chat/issues/14573) ([181b7eb](https://github.com/lobehub/lobe-chat/commit/181b7eb))
- **misc**: add temporary email auth error locale, closes [#14564](https://github.com/lobehub/lobe-chat/issues/14564) ([2bdd901](https://github.com/lobehub/lobe-chat/commit/2bdd901))
- **misc**: add bot callback service, closes [#14570](https://github.com/lobehub/lobe-chat/issues/14570) ([e4b5e52](https://github.com/lobehub/lobe-chat/commit/e4b5e52))
- **misc**: sanitize sensitive comments and examples from production JS bundle, closes [#14557](https://github.com/lobehub/lobe-chat/issues/14557) ([1a6e07b](https://github.com/lobehub/lobe-chat/commit/1a6e07b))
- **misc**: multiple account link, closes [#14562](https://github.com/lobehub/lobe-chat/issues/14562) ([760a342](https://github.com/lobehub/lobe-chat/commit/760a342))

#### Styles

- **misc**: use @lobehub/ui built-in HtmlPreview instead of custom component, closes [#14703](https://github.com/lobehub/lobe-chat/issues/14703) ([266d102](https://github.com/lobehub/lobe-chat/commit/266d102))
- **misc**: polish desktop header icons, sidebar density, and task menus, closes [#14724](https://github.com/lobehub/lobe-chat/issues/14724) ([e56edab](https://github.com/lobehub/lobe-chat/commit/e56edab))
- **review-panel**: hover revert button to discard per-file working-tree changes, closes [#14716](https://github.com/lobehub/lobe-chat/issues/14716) ([846e648](https://github.com/lobehub/lobe-chat/commit/846e648))
- **misc**: standardize header action icon sizes, closes [#14717](https://github.com/lobehub/lobe-chat/issues/14717) ([ca9a781](https://github.com/lobehub/lobe-chat/commit/ca9a781))
- **tool**: add word wrap toggle to tool arguments display, closes [#14706](https://github.com/lobehub/lobe-chat/issues/14706) ([bfa2850](https://github.com/lobehub/lobe-chat/commit/bfa2850))
- **nav**: unify ActionIcon sizing and improve TodoList encapsulation, closes [#14692](https://github.com/lobehub/lobe-chat/issues/14692) ([877052f](https://github.com/lobehub/lobe-chat/commit/877052f))
- **web-onboarding**: add Render for saveUserQuestion & showAgentMarketplace, closes [#14667](https://github.com/lobehub/lobe-chat/issues/14667) ([f591f7a](https://github.com/lobehub/lobe-chat/commit/f591f7a))
- **misc**: add `reasoning_effort` support for Grok 4.3, closes [#14642](https://github.com/lobehub/lobe-chat/issues/14642) ([a1fac45](https://github.com/lobehub/lobe-chat/commit/a1fac45))
- **misc**: increase chat topic title length, closes [#14659](https://github.com/lobehub/lobe-chat/issues/14659) ([e0ead0c](https://github.com/lobehub/lobe-chat/commit/e0ead0c))
- **hetero-agent**: read-only SubAgent threads with breadcrumb header and thread switcher, closes [#14658](https://github.com/lobehub/lobe-chat/issues/14658) ([31e9130](https://github.com/lobehub/lobe-chat/commit/31e9130))
- **chat-input**: show skeleton in action bar while config is loading, closes [#14656](https://github.com/lobehub/lobe-chat/issues/14656) ([84b802c](https://github.com/lobehub/lobe-chat/commit/84b802c))
- **home**: add Recommendations module with hetero agent action library, closes [#14645](https://github.com/lobehub/lobe-chat/issues/14645) ([e261a6f](https://github.com/lobehub/lobe-chat/commit/e261a6f))
- **copyable-label**: wrap long tool-call params instead of truncating, closes [#14640](https://github.com/lobehub/lobe-chat/issues/14640) ([60a127b](https://github.com/lobehub/lobe-chat/commit/60a127b))
- **misc**: format tool execution time as Xmin Ys instead of X.Y min, closes [#14641](https://github.com/lobehub/lobe-chat/issues/14641) ([b85a1ad](https://github.com/lobehub/lobe-chat/commit/b85a1ad))
- **misc**: Add new DeepSeek-V4 models, closes [#14110](https://github.com/lobehub/lobe-chat/issues/14110) ([867e22a](https://github.com/lobehub/lobe-chat/commit/867e22a))
- **topic**: add copy session ID to topic dropdown menu, closes [#14595](https://github.com/lobehub/lobe-chat/issues/14595) ([a275009](https://github.com/lobehub/lobe-chat/commit/a275009))
- **misc**: use visible divider between queued messages, closes [#14593](https://github.com/lobehub/lobe-chat/issues/14593) ([909b1ec](https://github.com/lobehub/lobe-chat/commit/909b1ec))
- **intervention**: polish confirmation bar layout, closes [#14587](https://github.com/lobehub/lobe-chat/issues/14587) ([5c11130](https://github.com/lobehub/lobe-chat/commit/5c11130))
- **settings**: remove image avatar from lab input markdown rendering item, closes [#14582](https://github.com/lobehub/lobe-chat/issues/14582) ([d73de25](https://github.com/lobehub/lobe-chat/commit/d73de25))
- **task**: activity card stop run + register /tasks in SPA proxy, closes [#14559](https://github.com/lobehub/lobe-chat/issues/14559) ([a7cc553](https://github.com/lobehub/lobe-chat/commit/a7cc553))
- **misc**: update auth captcha retry copy, closes [#14561](https://github.com/lobehub/lobe-chat/issues/14561) ([c208723](https://github.com/lobehub/lobe-chat/commit/c208723))

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>
