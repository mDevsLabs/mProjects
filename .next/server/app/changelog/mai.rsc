1:"$Sreact.fragment"
3:I[9766,[],""]
4:I[8924,[],""]
6:I[4431,[],"OutletBoundary"]
8:I[5278,[],"AsyncMetadataOutlet"]
a:I[4431,[],"ViewportBoundary"]
c:I[4431,[],"MetadataBoundary"]
d:"$Sreact.suspense"
f:I[7150,[],""]
:HL["/_next/static/css/638567588eb0b9b5.css","style"]
0:{"P":null,"b":"3Fup6Jav0n2C5jfTPvh_g","p":"","c":["","changelog","mai"],"i":false,"f":[[["",{"children":["changelog",{"children":["mai",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/638567588eb0b9b5.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],"$L2"]}],{"children":["changelog",["$","$1","c",{"children":[null,["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["mai",["$","$1","c",{"children":[null,["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":["$L5",null,["$","$L6",null,{"children":["$L7",["$","$L8",null,{"promise":"$@9"}]]}]]}],{},null,false]},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,[["$","$La",null,{"children":"$Lb"}],null],["$","$Lc",null,{"children":["$","div",null,{"hidden":true,"children":["$","$d",null,{"fallback":null,"children":"$Le"}]}]}]]}],false]],"m":"$undefined","G":["$f",[]],"s":false,"S":true}
10:I[5379,["210","static/chunks/210-2bcb72977a2d980c.js","619","static/chunks/619-ba102abea3e3d0e4.js","239","static/chunks/239-0efcf3b33fe933aa.js","663","static/chunks/663-641a85383255f1d4.js","906","static/chunks/906-f35e0800ac8bd5a2.js","177","static/chunks/app/layout-3cf102c1d4f66f47.js"],"ThemeProvider"]
11:I[1839,["210","static/chunks/210-2bcb72977a2d980c.js","619","static/chunks/619-ba102abea3e3d0e4.js","239","static/chunks/239-0efcf3b33fe933aa.js","663","static/chunks/663-641a85383255f1d4.js","906","static/chunks/906-f35e0800ac8bd5a2.js","177","static/chunks/app/layout-3cf102c1d4f66f47.js"],"ToastProvider"]
12:I[1374,["210","static/chunks/210-2bcb72977a2d980c.js","619","static/chunks/619-ba102abea3e3d0e4.js","239","static/chunks/239-0efcf3b33fe933aa.js","663","static/chunks/663-641a85383255f1d4.js","906","static/chunks/906-f35e0800ac8bd5a2.js","177","static/chunks/app/layout-3cf102c1d4f66f47.js"],"Navbar"]
26:I[3802,["210","static/chunks/210-2bcb72977a2d980c.js","462","static/chunks/462-f9da4742dbbe7bfb.js","335","static/chunks/335-864718e0744815b6.js","565","static/chunks/app/changelog/mai/page-cdce71913ba22bb8.js"],"default"]
13:T4d5,- **agent-runtime**: persist agent operations to `agent_operations` table.
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
- **misc**: Cloud Claude Code V3 — repo picker, GitHub token, sandbox context.14:Tb28,- **hetero-agent**: wire AskUserBridge response events to renderer.
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
- **misc**: multiple account link.15:T59c,- **misc**: use @lobehub/ui built-in HtmlPreview instead of custom component.
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
<summary><kbd>Improvements and Fixes</kbd></summary>16:Tea1,- **agent-runtime**: persist agent operations to `agent_operations` table, closes [#14736](https://github.com/lobehub/lobe-chat/issues/14736) ([a772341](https://github.com/lobehub/lobe-chat/commit/a772341))
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
- **misc**: Cloud Claude Code V3 — repo picker, GitHub token, sandbox context, closes [#14568](https://github.com/lobehub/lobe-chat/issues/14568) ([7792f63](https://github.com/lobehub/lobe-chat/commit/7792f63))17:T2218,- **hetero-agent**: wire AskUserBridge response events to renderer, closes [#14732](https://github.com/lobehub/lobe-chat/issues/14732) ([5174c13](https://github.com/lobehub/lobe-chat/commit/5174c13))
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
- **misc**: multiple account link, closes [#14562](https://github.com/lobehub/lobe-chat/issues/14562) ([760a342](https://github.com/lobehub/lobe-chat/commit/760a342))18:T10aa,- **misc**: use @lobehub/ui built-in HtmlPreview instead of custom component, closes [#14703](https://github.com/lobehub/lobe-chat/issues/14703) ([266d102](https://github.com/lobehub/lobe-chat/commit/266d102))
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

</div>19:T706e,<a name="readme-top"></a>

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
1a:T9d7,## I - Introduction

Tout a commencé en 2022. Le défi de départ ? Partir de zéro, avec un budget absolument inexistant, et réussir l'exploit de publier une interface d'intelligence artificielle plus performante et mieux optimisée que ce qui existait déjà.

Ce long voyage a suivi une évolution naturelle : d'abord une simple idée, puis un premier croquis, suivis d'un prototype fonctionnel. Aujourd'hui, quatre ans de travail plus tard, le produit final est enfin une réalité.

## II - Les premiers tests et débuts

Pour tester les premières idées, la première étape a été d'explorer le no-code via la plateforme **Base 44**.

Cependant, la complexité technique pour obtenir un résultat vraiment poussé sans budget s'est vite fait ressentir. Un second test a été lancé sur **Google AI Studio**, mais l'obligation de passer par une interface purement web est rapidement devenue une limite.

C'est à la mi-2025 que la transition s'est faite vers le modèle de chatbot **Next.js** de **Vercel** — un environnement puissant, mais dont la prise en main s'est avérée particulièrement difficile au départ.

## III - Période d'apprentissage

Face à ces obstacles, une pause s'imposait : un bloc d'environ six mois a été dédié exclusivement à la montée en compétences, à l'apprentissage du développement approfondi et à une meilleure organisation.

Ce temps a été mis à profit pour analyser minutieusement l'architecture de projets existants. L'objectif était clair : dénicher le projet open-source le plus actif, complet et robuste possible.

C’est au bout de cette recherche intense, en avril 2026, que la solution idéale s'est présentée : **LobeHub**.

## IV - LobeHub : Le déclic

Pendant une à deux semaines, une observation attentive de l'activité du dépôt a été nécessaire avant de poser le diagnostic :

> "C'est le bon."

C'était de loin la base la plus solide, la plus moderne et la plus complète trouvée sur le marché.

Le clonage de ce projet a marqué le top départ du défi technique le plus complexe et le plus stimulant jamais réalisé jusqu'ici.

## V - Conclusion & Lancement

Après d'innombrables sessions de tests, des phases d'incertitude et un apprentissage constant au fur et à mesure du temps, le travail a enfin payé : l'objectif est pleinement atteint.

Le résultat de toute cette persévérance est désormais accessible.

Découvrez **mAI** dès aujourd'hui et plongez dans le futur de l'interface IA.

---

**Mathias Tusseau**
1b:T1c39,# Introduction

La conception d'une interface d'intelligence artificielle performante est un parcours jalonné d'apprentissages et d'itérations. Après avoir conçu, développé et éprouvé cinq projets majeurs — parmi lesquels un chatbot sur mesure développé sous Next.js, des expérimentations poussées sur Base44 et Lovable, ainsi que deux autres plateformes d'IA d'envergure —, un constat technique et ergonomique s'est imposé : aucune base existante n'égalait la robustesse, la modularité et l'élégance architecturale de LobeHub.

C'est sur ce socle technologique particulièrement solide qu'est né mAI. Conçue pour unifier et maximiser la puissance des plus grands modèles d'intelligence artificielle du marché, cette interface ne se contente pas d'être une énième tentative d'intégration. Elle représente l'aboutissement d'un long processus d'ingénierie, la synthèse de plusieurs mois de tests, et apporte enfin l'outil complet, stable et fluide qui manquait à notre écosystème. Cet article détaille la genèse de mAI, ses capacités avancées, et les raisons pour lesquelles LobeHub s'est imposé comme sa fondation technique idéale.

---

# Qu'est-ce que mAI ?

mAI est une interface d'intelligence artificielle centralisée, conçue pour orchestrer et unifier les principales interfaces de programmation (API) d'IA du marché au sein d'une expérience utilisateur unique, homogène et hautement optimisée.

L'ambition première du projet réside dans la simplification : plutôt que de contraindre l'utilisateur à naviguer constamment entre l'application d'OpenAI pour ChatGPT, celle d'Anthropic pour Claude, et celle de Google pour Gemini, mAI propose un point d'accès universel et standardisé.

---

## Une approche agnostique et polyvalente

Cette architecture agnostique vis-à-vis des différents fournisseurs de modèles se traduit par plusieurs avantages techniques majeurs :

- **Interopérabilité multi-fournisseurs :** mAI se connecte nativement aux services d'OpenAI, d'Anthropic, de Google Gemini, mais aussi à des solutions d'hébergement local comme Ollama, ainsi qu'à des dizaines d'autres fournisseurs d'API tiers.

- **Flexibilité dynamique :** L'utilisateur a la possibilité de basculer d'un modèle à un autre au cours d'une même session ou au sein d'un même fil de discussion. Cela permet de comparer instantanément la pertinence des réponses et de s'affranchir de la dépendance à un fournisseur unique (vendor lock-in).

- **Confort et ergonomie d'usage :** Chaque interaction a été pensée pour minimiser la friction cognitive. L'affichage bénéficie d'une navigation fluide, d'un rendu Markdown impeccable, d'une coloration syntaxique avancée pour le code, et d'un gestionnaire de fichiers intégré particulièrement intuitif.

---

## Fonctionnalités de pointe et personnalisation

Au-delà de la simple mise en relation textuelle, mAI intègre des capacités avancées indispensables aux usages professionnels modernes :

- **Multimodalité native :** L'interface traite avec la même fluidité les entrées textuelles, visuelles (images, schémas), sonores (fichiers audio, transcriptions) et vidéos.

- **Génération augmentée par la récupération (RAG) :** Grâce à un système performant d'indexation de fichiers, mAI permet d'associer des bases de connaissances spécifiques à chaque conversation. Vos documents d'entreprise, rapports techniques ou notes de recherche servent ainsi de contexte direct pour générer des réponses hautement personnalisées et rigoureuses.

Bien que la colonne vertébrale technique de mAI repose sur LobeHub, le projet a fait l'objet d'un profond travail de restructuration. L'identité de marque (branding), l'arborescence des paramètres, l'optimisation des requêtes et l'ergonomie globale ont été repensées. mAI en ressort transformé : un produit fini, accessible immédiatement au grand public comme aux professionnels exigeants, éliminant la complexité d'installation d'outils d'IA avancés tout en garantissant un contrôle strict des flux de données.

---

# LobeHub : La fondation technique d'excellence

Le choix de LobeHub pour structurer mAI découle d'une analyse rigoureuse des solutions open source disponibles. LobeChat s'est imposé comme le framework de référence grâce à sa conception moderne, sa réactivité et la richesse de ses fonctionnalités de gestion de conversations. Sa trajectoire impressionnante, illustrée par plus de 70 000 étoiles sur GitHub en janvier 2026, atteste de sa fiabilité et de son adoption massive par une communauté d'ingénieurs et de professionnels de l'IA.

La supériorité technique de LobeHub repose sur trois piliers fondamentaux :

---

## 1. Une connectivité étendue

Le framework prend en charge de manière native plus de 42 fournisseurs de modèles. Cette compatibilité s'étend des leaders historiques du marché de l'IA propriétaire aux architectures d'inférence ultra-rapides comme Groq, sans oublier l'exécution de modèles locaux en open source via Ollama. Cette flexibilité assure la pérennité de mAI face aux futures évolutions technologiques.

---

## 2. Un écosystème extensible via le Function Calling et le MCP

LobeHub dispose d'un système de plugins robuste s'appuyant sur le function calling ainsi que d'un catalogue d'outils via le Model Context Protocol (MCP) Marketplace, installable en un clic. Grâce à cet écosystème, l'interface de mAI peut étendre ses compétences à la volée : recherche d'informations en temps réel sur le web, génération d'images à partir de prompts complexes, exécution de scripts de code dans un environnement sécurisé, ou encore requêtes avancées dans des bases documentaires complexes.

---

## 3. Souveraineté et protection des données

L'architecture de LobeHub place la confidentialité au centre de sa philosophie de conception. En permettant un cloisonnement des données, l'utilisation de clés d'API personnelles et, si nécessaire, l'hébergement de modèles d'inférence en local, elle permet aux utilisateurs de mAI de conserver la pleine propriété de leurs flux de données. Cette approche élimine le besoin d'abonnements tiers captifs et offre une alternative sécurisée conforme aux exigences professionnelles de confidentialité.

---

# Conclusion

mAI est né d'une réflexion stratégique : après avoir exploré et développé cinq projets d'IA différents, la démarche la plus cohérente n'était pas de réinventer l'intégralité de la couche applicative, mais de s'appuyer sur la base open source la plus performante existante pour y injecter notre vision, notre design et nos optimisations.

LobeHub a fourni la robustesse structurelle, la flexibilité d'intégration et la fluidité d'affichage indispensables. mAI y apporte une identité épurée, des configurations affinées, une expérience utilisateur simplifiée et des fonctionnalités enrichies. Le résultat est une plateforme unifiée, performante et souveraine, conçue pour mettre le meilleur de l'intelligence artificielle au service de vos ambitions professionnelles et personnelles.

**Avec mAI, passez à la vitesse supérieure !**

Mathias Tusseau
1c:T482e,## Introduction

Après la conception de mAI, interface pensée pour unifier les plus grands modèles d’intelligence artificielle au sein d’un environnement clair, puissant et accessible, une nouvelle évidence s’est imposée : l’expérience numérique ne se limite pas à l’IA conversationnelle. Elle commence bien souvent par le navigateur.

Chaque jour, l’utilisateur navigue entre moteurs de recherche, sites d’information, plateformes professionnelles, espaces personnels, outils de productivité et services en ligne. Pourtant, cette navigation quotidienne reste trop souvent exposée à des publicités intrusives, des traqueurs invisibles, des contenus potentiellement malveillants et une surcharge d’informations qui nuit autant à la concentration qu’à la sécurité.

C’est dans ce contexte qu’est né **mSearch**, un navigateur sécurisé, rapide et efficace, conçu pour offrir au grand public une expérience de navigation plus propre, plus maîtrisée et plus intelligente. Propulsé par la base technique de **Min Browser**, mSearch reprend les fondations d’un navigateur minimaliste, open source et orienté confidentialité, tout en y ajoutant une identité propre, une approche renforcée de la sécurité et une intégration directe de **mAI en barre latérale**.

L’objectif est simple : permettre à chacun de rechercher, consulter, lire et comprendre le web dans un environnement plus sûr, sans complexité inutile.

Avec mSearch, la navigation devient plus fluide, plus lisible et plus protectrice.

## Qu’est-ce que mSearch ?

**mSearch** est un navigateur web sécurisé destiné au grand public, conçu pour combiner trois priorités essentielles : la sécurité, l’efficacité et la simplicité d’utilisation.

Là où de nombreux navigateurs imposent à l’utilisateur d’installer manuellement des extensions pour bloquer les publicités, limiter le pistage ou améliorer la lisibilité des pages web, mSearch adopte une approche différente : les protections essentielles sont présentes par défaut.

Le navigateur intègre ainsi un bloqueur de publicités et de traqueurs, un mode privé, des mécanismes de filtrage intelligent, une navigation plus épurée, ainsi qu’une attention particulière portée à la protection des données.

mSearch ne cherche pas à être un navigateur complexe réservé aux experts. Il vise au contraire à rendre la navigation sécurisée accessible à tous. L’utilisateur n’a pas besoin de comprendre les mécanismes techniques du tracking publicitaire, des scripts tiers ou des cookies de suivi pour bénéficier d’un environnement plus protecteur.

Il ouvre mSearch, effectue sa recherche, consulte ses pages, et profite directement d’une expérience plus claire et plus sûre.

## Une approche centrée sur la sécurité et l’efficacité

Le positionnement de mSearch repose sur une conviction forte : un bon navigateur moderne doit protéger l’utilisateur sans ralentir son quotidien.

La sécurité ne doit pas devenir une contrainte. Elle doit être intégrée naturellement à l’expérience.

### Sécurité par défaut

mSearch est conçu pour limiter l’exposition de l’utilisateur aux risques les plus courants de la navigation moderne. Cela passe notamment par le blocage des publicités intrusives, la réduction du pistage en ligne, le filtrage de contenus suspects et la mise en avant d’une navigation plus confidentielle.

Le navigateur protège contre une partie importante des mécanismes invisibles utilisés pour suivre les comportements en ligne : scripts tiers, traceurs publicitaires, éléments de mesure comportementale ou contenus chargés depuis des domaines externes.

Cette approche permet de réduire la quantité de données collectées par des acteurs tiers et d’améliorer la confidentialité générale de la navigation.

### Efficacité au quotidien

La sécurité ne serait pas suffisante si elle se faisait au détriment de la fluidité. mSearch met donc également l’accent sur la rapidité, la clarté et la sobriété de l’interface.

En bloquant par défaut de nombreux éléments inutiles ou intrusifs, le navigateur permet d’alléger les pages web, de réduire les distractions et d’améliorer le confort de lecture. L’expérience devient plus directe : moins de publicités, moins d’interruptions, moins de bruit visuel.

L’utilisateur peut se concentrer sur l’essentiel : rechercher une information, lire un article, accéder à un service ou travailler efficacement.

## Les fonctionnalités clés de mSearch

mSearch a été pensé comme un navigateur complet, mais volontairement épuré. Chaque fonctionnalité répond à un objectif précis : protéger, simplifier ou accélérer la navigation.

### 1. Recherche web sécurisée

La recherche web est au cœur de l’expérience mSearch. L’utilisateur peut accéder rapidement à l’information tout en bénéficiant d’un environnement conçu pour limiter le pistage et améliorer la confidentialité.

L’objectif n’est pas seulement de trouver des résultats, mais de les consulter dans un cadre plus sûr. La recherche devient ainsi le point d’entrée d’une navigation plus maîtrisée.

mSearch s’adresse aux utilisateurs qui veulent aller vite, mais sans sacrifier leur sécurité numérique.

### 2. Blocage des publicités par défaut

Les publicités intrusives constituent l’une des principales sources de friction sur le web moderne. Elles ralentissent les pages, perturbent la lecture, consomment des ressources et peuvent parfois servir de vecteurs à des contenus douteux.

mSearch intègre donc un bloqueur de publicités activé par défaut. Cette protection permet d’obtenir des pages plus propres, plus rapides et plus agréables à consulter.

L’utilisateur n’a pas besoin d’installer une extension supplémentaire ou de configurer manuellement des listes de blocage. L’expérience est prête dès le premier lancement.

### 3. Protection anti-tracking

Le pistage en ligne est devenu l’un des grands enjeux de la navigation web. De nombreux sites s’appuient sur des services tiers capables de suivre l’utilisateur d’une page à l’autre, de construire des profils comportementaux et d’alimenter des systèmes publicitaires personnalisés.

mSearch réduit cette exposition grâce à une protection anti-tracking intégrée. Les traqueurs connus sont bloqués ou limités afin de diminuer la quantité d’informations partagées avec des tiers.

Cette logique s’inscrit dans une philosophie simple : l’activité de navigation appartient à l’utilisateur, pas aux plateformes publicitaires.

### 4. Blocage des contenus potentiellement malveillants

mSearch est également pensé pour limiter l’accès aux contenus dangereux ou suspects. Les sites malveillants, les scripts douteux, les redirections agressives ou certains comportements anormaux peuvent représenter une menace pour l’utilisateur.

Le navigateur met donc en place un filtrage intelligent destiné à améliorer la sécurité globale de l’expérience. Cette approche ne remplace pas un antivirus ni les bonnes pratiques de cybersécurité, mais elle constitue une couche de protection supplémentaire directement intégrée au navigateur.

Pour le grand public, cette couche de sécurité invisible est essentielle : elle réduit les risques sans complexifier l’usage.

### 5. Filtrage intelligent

La navigation moderne nécessite plus qu’un simple blocage binaire. Tous les contenus externes ne sont pas nécessairement dangereux, mais certains peuvent être intrusifs, inutiles ou nuire à l’expérience.

mSearch adopte donc une logique de filtrage intelligent. Le navigateur vise à distinguer ce qui améliore réellement l’expérience utilisateur de ce qui l’alourdit ou la fragilise.

Ce filtrage permet de rendre les pages plus lisibles, plus rapides et plus cohérentes, tout en conservant l’accès aux fonctionnalités essentielles des sites consultés.

### 6. Mode privé

mSearch intègre un mode privé destiné aux sessions de navigation qui nécessitent davantage de discrétion locale.

Ce mode permet de réduire les traces conservées sur l’appareil après la session. Il est utile pour effectuer des recherches ponctuelles, consulter des informations sensibles ou utiliser un ordinateur partagé.

Comme tout mode privé classique, il ne doit pas être confondu avec un anonymat complet sur Internet. Il ne remplace pas un VPN, ni des pratiques avancées de protection réseau. En revanche, il apporte une protection locale simple, compréhensible et directement accessible.

### 7. Chiffrement et navigation plus sûre

mSearch s’inscrit dans les standards modernes de sécurité du web en privilégiant les connexions chiffrées lorsque celles-ci sont disponibles. Le chiffrement des échanges, notamment via HTTPS, joue un rôle essentiel dans la protection des données transmises entre l’utilisateur et les services consultés.

Cette approche contribue à renforcer la confidentialité des communications et à réduire les risques d’interception sur les réseaux non fiables.

L’ambition de mSearch est de rendre cette sécurité plus naturelle pour l’utilisateur : moins de réglages, moins de jargon, plus de protection au quotidien.

### 8. Aucune revente des données

La confiance est un élément central du projet mSearch.

Le navigateur repose sur un principe clair : les données de navigation ne doivent pas devenir un produit commercial. mSearch adopte donc une politique de confidentialité alignée avec cette vision : aucune revente des données utilisateur.

Cette promesse est fondamentale. Elle distingue mSearch des modèles économiques fondés sur l’exploitation comportementale et la publicité ciblée.

L’utilisateur doit pouvoir naviguer sans avoir le sentiment que chaque recherche, chaque clic ou chaque consultation alimente un profil publicitaire.

## mAI en barre latérale : l’intelligence artificielle au service de la navigation

mSearch n’est pas seulement un navigateur sécurisé. Il s’inscrit aussi dans l’écosystème plus large initié avec mAI.

L’intégration de **mAI en barre latérale** permet d’ajouter une couche d’intelligence directement au sein de l’expérience de navigation. L’utilisateur peut consulter une page web tout en interagissant avec mAI sans changer d’application.

Cette intégration ouvre plusieurs usages concrets :

- résumer un article long ;
- expliquer un passage complexe ;
- traduire un contenu ;
- comparer plusieurs informations ;
- générer une synthèse ;
- reformuler un texte ;
- préparer une réponse ou un document à partir d’une page consultée.

L’intérêt est évident : mSearch devient un espace de navigation augmenté, où l’intelligence artificielle accompagne l’utilisateur sans interrompre son flux de travail.

L’IA n’est pas imposée. Elle reste disponible, à portée de main, lorsque l’utilisateur en a besoin.

Cette approche crée une complémentarité naturelle entre mSearch et mAI. mSearch permet d’explorer le web plus sereinement, tandis que mAI aide à comprendre, analyser et exploiter l’information trouvée.

## Min Browser : une fondation technique minimaliste et robuste

Le choix de s’appuyer sur **Min Browser** comme base technique de mSearch répond à une logique claire : partir d’un navigateur déjà reconnu pour sa sobriété, sa rapidité et son orientation vers la confidentialité.

Min Browser est un navigateur open source conçu pour offrir une expérience épurée, avec une interface minimaliste et des fonctionnalités centrées sur la concentration. Il intègre notamment le blocage des publicités et des traqueurs, la gestion des onglets par groupes, un mode lecteur, la recherche dans les pages visitées et une interface pensée pour limiter les distractions.

Cette philosophie correspond parfaitement à l’ambition de mSearch.

Plutôt que de construire un navigateur lourd, saturé de fonctionnalités secondaires, mSearch s’appuie sur une base légère et efficace pour proposer une expérience recentrée sur l’essentiel : rechercher, consulter, comprendre et naviguer en sécurité.

## Pourquoi Min Browser est une base pertinente pour mSearch

### 1. Une interface sobre et concentrée

Min Browser se distingue par une interface volontairement discrète. Les onglets prennent peu de place, les éléments inutiles sont limités et l’attention reste portée sur le contenu.

Pour mSearch, cette sobriété est un avantage majeur. Elle permet de construire une expérience accessible au grand public, sans surcharge visuelle ni complexité excessive.

Le navigateur devient un outil, pas une distraction.

### 2. Un blocage natif des publicités et traqueurs

L’un des points forts de Min Browser est la présence d’un blocage intégré des publicités et des traqueurs. mSearch reprend cette logique pour en faire un pilier de son expérience utilisateur.

Cette protection native évite de dépendre d’extensions tierces et garantit une expérience plus cohérente dès l’installation.

Pour l’utilisateur final, le bénéfice est immédiat : une navigation plus propre, plus rapide et moins exposée au pistage.

### 3. Une architecture open source

Le caractère open source de Min Browser représente un atout important. Il permet une meilleure transparence technique et offre une base plus saine pour construire un produit orienté sécurité et confidentialité.

mSearch peut ainsi s’appuyer sur une fondation existante, tout en y ajoutant sa propre identité, ses choix de configuration, son expérience utilisateur et son intégration avec mAI.

Cette approche évite de réinventer inutilement l’ensemble de la couche navigateur, tout en permettant de concentrer les efforts sur ce qui fait la valeur du produit : la sécurité, la simplicité et l’efficacité.

### 4. Une expérience pensée pour la productivité

Min Browser propose des fonctionnalités utiles pour organiser la navigation, comme les groupes d’onglets, la recherche dans l’historique local ou encore le mode lecteur.

mSearch prolonge cette orientation en mettant l’accent sur une navigation plus productive. Le navigateur ne se contente pas d’afficher des pages : il aide l’utilisateur à mieux gérer son attention.

Dans un web saturé de notifications, de publicités et de sollicitations permanentes, cette approche est devenue essentielle.

## mSearch : une navigation plus propre pour le grand public

mSearch a été pensé pour un public large. Il ne s’adresse pas uniquement aux experts en cybersécurité, aux développeurs ou aux utilisateurs déjà sensibilisés aux enjeux de confidentialité.

Son ambition est au contraire de démocratiser les bonnes pratiques de navigation.

Un utilisateur grand public ne devrait pas avoir à connaître le fonctionnement des scripts tiers, des cookies publicitaires ou des empreintes numériques pour être mieux protégé. Il devrait pouvoir utiliser un navigateur qui applique automatiquement des choix raisonnables en matière de sécurité.

C’est exactement ce que propose mSearch : une protection intégrée, une interface claire, une navigation fluide et une IA disponible en soutien.

Le produit répond à un besoin simple mais fondamental : rendre le web plus sûr sans le rendre plus compliqué.

## Une sécurité sans fausse promesse

La sécurité numérique exige de la rigueur. mSearch ne prétend pas rendre l’utilisateur invisible, invulnérable ou totalement anonyme.

Aucun navigateur ne peut garantir à lui seul une protection absolue contre toutes les menaces du web.

En revanche, mSearch apporte une amélioration concrète de l’expérience quotidienne grâce à plusieurs couches de protection : blocage des publicités, réduction du tracking, filtrage des contenus suspects, mode privé, chiffrement des connexions lorsque disponible et politique de non-revente des données.

Cette approche pragmatique est essentielle. Elle évite les promesses excessives tout en apportant une réelle valeur à l’utilisateur.

mSearch ne remplace pas la vigilance, mais il réduit les risques et simplifie l’adoption de comportements plus sûrs.

## Un produit complémentaire à mAI

mAI et mSearch répondent à deux besoins différents, mais profondément liés.

mAI permet d’exploiter la puissance des modèles d’intelligence artificielle dans une interface unifiée. mSearch, lui, permet d’explorer le web dans un environnement plus sécurisé, plus rapide et plus lisible.

En intégrant mAI en barre latérale, mSearch crée un pont naturel entre recherche web et intelligence artificielle.

L’utilisateur peut trouver une information, la comprendre, la résumer, l’analyser et la transformer sans quitter son navigateur.

Cette continuité d’expérience est au cœur de la vision du projet : construire un écosystème d’outils simples, puissants et accessibles, capables d’améliorer concrètement les usages numériques du quotidien.

## Conclusion

mSearch est né d’un constat simple : la navigation web moderne a besoin de redevenir plus sûre, plus claire et plus efficace.

Entre les publicités intrusives, les traqueurs invisibles, les contenus malveillants et la surcharge informationnelle, l’utilisateur grand public se retrouve souvent exposé sans même en avoir conscience.

En s’appuyant sur la base technique de Min Browser, mSearch bénéficie d’un socle minimaliste, open source et orienté confidentialité. En y ajoutant une identité propre, des choix de sécurité renforcés, une politique de non-revente des données, une navigation chiffrée lorsque disponible et l’intégration de mAI en barre latérale, le navigateur devient bien plus qu’un simple outil d’accès au web.

Il devient un espace de navigation sécurisé, intelligent et accessible.

mSearch ne cherche pas à complexifier l’expérience. Il cherche au contraire à la simplifier, à la protéger et à la rendre plus productive.

Avec mSearch, naviguez en toute sécurité !

**Mathias Tusseau**

---

## Sources techniques consultées

- Min Browser — site officiel : https://minbrowser.org/
- Min Browser — tour des fonctionnalités : https://minbrowser.org/tour/
- Min Browser — dépôt GitHub : https://github.com/minbrowser/min
1d:T65f,# Bienvenue !

Nous sommes fiers de vous présenter le tout nouveau portail **mProjects**. 

Ce portail réunit désormais toutes nos créations, avec un suivi clair et centralisé des mises à jour (onglet Notes de version) et des annonces importantes (Actualités).

### Pourquoi cette plateforme ?

Nous voulions offrir une expérience *Liquid Glass* moderne, claire, et surtout accessible. Restez connectés pour de nouvelles fonctionnalités prochainement !

### Mises à jour

Nous mettrons à jour l'application tous les mois ou plus régulièrement pour ajouter de nouveaux articles dans Actualités

### Application conçue sur Google

Nous vous informons également que le nouveau site mProjects à été conçu en **moins de 2 heures via Google AI Studio** en utilisant Google Gemini 3.1 Pro Preview en mode de réflexion _High_. Nous avons peaufiné l'architecture et les performances via l'outil CLI de **Google Antigravity**.

### Présentation des onglets

- **Accueil** : Dans l'onglet de l'accueil, découvrez nos réseaux sociaux de communication
- **Equipe** : Présentation de nos valeurs
- **Projets** : Dans chaque page de nos projets, découvrez les fonctionnalités principales, les derniers commits/release sur chaque dépôt GitHub distant et plus encore
- **Actualités** : Dans les Actualités, lisez nos dernières nouveautés et annonces
- **Notes de version** : Les Notes de version vous permettent de suivre l'évolution des nouveautés dans nos projets mais sachez que les _notes de version sont plus fiables et peut être plus précises dans nos dépôts GitHub_.

Merci pour votre compréhension
2:["$","html",null,{"lang":"fr","className":"__variable_f367f3 __variable_dd5b2f","suppressHydrationWarning":true,"children":["$","body",null,{"className":"antialiased font-sans min-h-screen flex flex-col pt-24 overflow-x-hidden relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300 text-slate-900 dark:text-slate-100","children":[["$","$L10",null,{"enableSystem":false,"attribute":"class","defaultTheme":"light","children":[["$","$L11",null,{"children":[["$","$L12",null,{"changelogs":{"mAI":[{"version":"<a","date":"Inconnu","title":"Mise à jour <a","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"# Changelog"},{"version":"1.0.0","date":"2026-06-28","title":"Mise à jour 1.0.0","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"🏆","date":"Inconnu","title":"Mise à jour 🏆","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **Quêtes** : Création de 700 quêtes quotidiennes à difficulté allégée (10-30 MP) et 700 quêtes hebdomadaires standards (100-150 MP) entièrement rédigées en français sans aucun numéro générique.\n- **Badges** : Création de 100 badges uniques associés à 100 emojis différents, classés par rareté (50 Rare, 30 Épique, 10 Légendaire, 7 Mythique, 3 Ultra) avec tags colorés d'Ant Design.\n- **Niveau** : Courbe de progression réajustée pour demander exactement 200 MP par niveau.\n- **Bonus** : Limitation à 3 quêtes quotidiennes bonus par jour maximum avec message d'erreur d'Ant Design en cas de dépassement.\n- **FAQ & Paramètres** : Intégration d'une FAQ en Markdown de 10 guides, contours de l'accordéon polis, suppression des emojis superflus dans les titres, et réorganisation de l'onglet Paramètres en 4ème position dans le menu déroulant."},{"version":"🦊","date":"Inconnu","title":"Mise à jour 🦊","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **Orientation des pattes** : Correction du bug d'orientation des jambes/pattes du compagnon lors de son déplacement vers la droite (la jambe va maintenant dans le sens naturel de la marche)."},{"version":"🌍","date":"Inconnu","title":"Mise à jour 🌍","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **Langues** : Traduction intégrale et manuelle de toutes les clés de gamification (`gamification.*`), de compagnons (`settingPets.*`), et de navigation (`tab.rewards*`, `tab.pets`) dans les 18 langues de l'application."},{"version":"⚡","date":"Inconnu","title":"Mise à jour ⚡","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **Performances** : Mémoïsation du composant `BadgeCard` pour un chargement instantané et une recherche fluide sans aucun lag de rendu.\n- **Colonnes de badges** : Correction du bug d'affichage en colonnes multiples (interpolation de la variable `${columns}`).\n- **Page Niveau** : Effets de fondu de page (`fadeIn`), pulsation lumineuse (`pulseGlow`) sur le cercle, et survol interactif sur les cartes de statistiques."},{"version":"0.9.0","date":"2026-06-23","title":"Mise à jour 0.9.0","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"🎨","date":"Inconnu","title":"Mise à jour 🎨","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **Desktop**: Rebranding complet et améliorations importantes de l'expérience ainsi qu'introduction de la connexion via l'application Web mAI\n- **Pets**: Intégration de **dix nouveaux pets** pour vous accompagner et ajouts de leurs effets sonores.\n- **CLI**: Lancement amélioré avec mai et pas lh ou lobehub. Installation via **npm install -g @mdevs/mai-cli**.\n- **Fix**: Corrections de divers bugs et problèmes\n- **Improve**: Améliorations importantes de l'interface et divers autres\n- **Version**: Mise à jour de la version du projet vers la version supérieure `0.9.0` sous l'auteur `mDevlopers`."},{"version":"0.4.0","date":"2026-06-20","title":"Mise à jour 0.4.0","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"🎨","date":"Inconnu","title":"Mise à jour 🎨","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **mAI**: Rebranding complet de l'application LobeHub vers la marque **mAI** et l'assistant **May**.\n- **Auth**: Configuration et intégration exclusive des fournisseurs SSO Canva, Google, Github, Notion, Railway, Slack, Spotify, Telegram, Twitch et X.\n- **Branding**: Remplacement des logos de marque et de l'avatar par `/avatars/may.PNG`.\n- **Fix**: Corrections de divers bugs et problèmes\n- **Improve**: Améliorations importantes de l'interface, connexion, bases de données et performances\n- **Version**: Mise à jour de la version du projet vers la version supérieure `0.4.0` sous l'auteur `mDevlopers`."},{"version":"2.2.6","date":"2026-06-17","title":"Mise à jour 2.2.6","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"✨","date":"Inconnu","title":"Mise à jour ✨","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **agent**: improve connector, document, and fleet workflows.\n\n<br/>\n\n<details>\n<summary><kbd>Improvements and Fixes</kbd></summary>"},{"version":"What's","date":"Inconnu","title":"Mise à jour What's","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **agent**: improve connector, document, and fleet workflows, closes [#15936](https://github.com/lobehub/lobe-chat/issues/15936) ([3f82033](https://github.com/lobehub/lobe-chat/commit/3f82033))\n\n</details>\n\n<div align=\"right\">\n\n[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)\n\n</div>"},{"version":"2.2.1","date":"2026-05-29","title":"Mise à jour 2.2.1","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"✨","date":"Inconnu","title":"Mise à jour ✨","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **device**: device registry TRPC (register / list / update / remove).\n- **bot**: add iMessage Desktop setup and bridge.\n- **desktop**: show zoom level HUD on Cmd+/- and Cmd+0.\n\n<br/>\n\n<details>\n<summary><kbd>Improvements and Fixes</kbd></summary>"},{"version":"What's","date":"Inconnu","title":"Mise à jour What's","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **device**: device registry TRPC (register / list / update / remove), closes [#15299](https://github.com/lobehub/lobe-chat/issues/15299) ([671b252](https://github.com/lobehub/lobe-chat/commit/671b252))\n- **bot**: add iMessage Desktop setup and bridge, closes [#15228](https://github.com/lobehub/lobe-chat/issues/15228) ([6d94635](https://github.com/lobehub/lobe-chat/commit/6d94635))\n- **desktop**: show zoom level HUD on Cmd+/- and Cmd+0, closes [#15294](https://github.com/lobehub/lobe-chat/issues/15294) ([109545c](https://github.com/lobehub/lobe-chat/commit/109545c))\n\n</details>\n\n<div align=\"right\">\n\n[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)\n\n</div>"},{"version":"2.2.0","date":"2026-05-18","title":"Mise à jour 2.2.0","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"💄","date":"Inconnu","title":"Mise à jour 💄","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **pricing**: restore DeepSeek models to official pricing."},{"version":"🐛","date":"Inconnu","title":"Mise à jour 🐛","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **conversation**: animate only the last markdown block + drop clearMessages hotkey.\n\n<br/>\n\n<details>\n<summary><kbd>Improvements and Fixes</kbd></summary>"},{"version":"Styles","date":"Inconnu","title":"Mise à jour Styles","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **pricing**: restore DeepSeek models to official pricing, closes [#14911](https://github.com/lobehub/lobe-chat/issues/14911) ([e566688](https://github.com/lobehub/lobe-chat/commit/e566688))"},{"version":"What's","date":"Inconnu","title":"Mise à jour What's","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **conversation**: animate only the last markdown block + drop clearMessages hotkey, closes [#14906](https://github.com/lobehub/lobe-chat/issues/14906) ([469a8e6](https://github.com/lobehub/lobe-chat/commit/469a8e6))\n\n</details>\n\n<div align=\"right\">\n\n[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)\n\n</div>"},{"version":"2.1.58","date":"2026-05-13","title":"Mise à jour 2.1.58","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"✨","date":"Inconnu","title":"Mise à jour ✨","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$13"},{"version":"🐛","date":"Inconnu","title":"Mise à jour 🐛","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$14"},{"version":"💄","date":"Inconnu","title":"Mise à jour 💄","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$15"},{"version":"What's","date":"Inconnu","title":"Mise à jour What's","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$16"},{"version":"What's","date":"Inconnu","title":"Mise à jour What's","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$17"},{"version":"Styles","date":"Inconnu","title":"Mise à jour Styles","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$18"}],"mSearch":[{"version":"<a","date":"Inconnu","title":"Mise à jour <a","type":"feature","icon":"Star","color":"text-blue-600","bgColor":"bg-blue-50","project":"mSearch","description":"# Changelog"},{"version":"0.9.0-beta","date":"2026-06-22","title":"Mise à jour 0.9.0-beta","type":"feature","icon":"Star","color":"text-blue-600","bgColor":"bg-blue-50","project":"mSearch","description":""},{"version":"🎨","date":"Inconnu","title":"Mise à jour 🎨","type":"feature","icon":"Star","color":"text-blue-600","bgColor":"bg-blue-50","project":"mSearch","description":"- **Interface** : Préparation de la page de présentation pour l'outil natif multi-plateforme mSearch.\n- **Plateformes** : Disponible sur Windows, macOS et Linux !"}],"mAIRaw":"$19","mSearchRaw":"<a name=\"readme-top\"></a>\n\n# Changelog\n\n## [Version 0.9.0-beta](https://github.com/mDevsLabs/mSearch/compare/v0.8.0-beta...v0.9.0-beta)\n\n<sup>Released on **2026-06-22**</sup>\n\n#### 🎨 Refonte de l'interface mSearch\n- **Interface** : Préparation de la page de présentation pour l'outil natif multi-plateforme mSearch.\n- **Plateformes** : Disponible sur Windows, macOS et Linux !\n"},"news":[{"slug":"avenir","title":"Avenir.","description":"L'avenir à travers cinq tests.","author":"mDevsLabs","date":"2026-07-11","label":"Valeur","content":"$1a"},{"slug":"introducing-mai","title":"Introducing mAI","description":"Avec mAI, passez à la vitesse supérieure !","author":"mAI","date":"2026-07-11","label":"Produit","content":"$1b"},{"slug":"introducing-msearch","title":"Introducing mSearch","description":"Avec mSearch, naviguez en toute sécurité !","author":"mSearch","date":"2026-07-11","label":"Produit","content":"$1c"},{"slug":"bienvenue","title":"Bienvenue sur notre nouveau portail","description":"Découvrez notre nouveau site web unifié avec les actualités et les notes de version.","author":"L'équipe mDevsLabs","date":"2026-06-28","label":"Nouveau","content":"$1d"}]}],"$L1e","$L1f","$L20","$L21","$L22","$L23"]}],"$L24"]}],"$L25"]}]}]
27:T4d5,- **agent-runtime**: persist agent operations to `agent_operations` table.
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
- **misc**: Cloud Claude Code V3 — repo picker, GitHub token, sandbox context.28:Tb28,- **hetero-agent**: wire AskUserBridge response events to renderer.
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
- **misc**: multiple account link.29:T59c,- **misc**: use @lobehub/ui built-in HtmlPreview instead of custom component.
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
<summary><kbd>Improvements and Fixes</kbd></summary>2a:Tea1,- **agent-runtime**: persist agent operations to `agent_operations` table, closes [#14736](https://github.com/lobehub/lobe-chat/issues/14736) ([a772341](https://github.com/lobehub/lobe-chat/commit/a772341))
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
- **misc**: Cloud Claude Code V3 — repo picker, GitHub token, sandbox context, closes [#14568](https://github.com/lobehub/lobe-chat/issues/14568) ([7792f63](https://github.com/lobehub/lobe-chat/commit/7792f63))2b:T2218,- **hetero-agent**: wire AskUserBridge response events to renderer, closes [#14732](https://github.com/lobehub/lobe-chat/issues/14732) ([5174c13](https://github.com/lobehub/lobe-chat/commit/5174c13))
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
- **misc**: multiple account link, closes [#14562](https://github.com/lobehub/lobe-chat/issues/14562) ([760a342](https://github.com/lobehub/lobe-chat/commit/760a342))2c:T10aa,- **misc**: use @lobehub/ui built-in HtmlPreview instead of custom component, closes [#14703](https://github.com/lobehub/lobe-chat/issues/14703) ([266d102](https://github.com/lobehub/lobe-chat/commit/266d102))
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

</div>2d:T706e,<a name="readme-top"></a>

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
5:["$","$L26",null,{"changelogs":{"mAI":[{"version":"<a","date":"Inconnu","title":"Mise à jour <a","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"# Changelog"},{"version":"1.0.0","date":"2026-06-28","title":"Mise à jour 1.0.0","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"🏆","date":"Inconnu","title":"Mise à jour 🏆","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **Quêtes** : Création de 700 quêtes quotidiennes à difficulté allégée (10-30 MP) et 700 quêtes hebdomadaires standards (100-150 MP) entièrement rédigées en français sans aucun numéro générique.\n- **Badges** : Création de 100 badges uniques associés à 100 emojis différents, classés par rareté (50 Rare, 30 Épique, 10 Légendaire, 7 Mythique, 3 Ultra) avec tags colorés d'Ant Design.\n- **Niveau** : Courbe de progression réajustée pour demander exactement 200 MP par niveau.\n- **Bonus** : Limitation à 3 quêtes quotidiennes bonus par jour maximum avec message d'erreur d'Ant Design en cas de dépassement.\n- **FAQ & Paramètres** : Intégration d'une FAQ en Markdown de 10 guides, contours de l'accordéon polis, suppression des emojis superflus dans les titres, et réorganisation de l'onglet Paramètres en 4ème position dans le menu déroulant."},{"version":"🦊","date":"Inconnu","title":"Mise à jour 🦊","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **Orientation des pattes** : Correction du bug d'orientation des jambes/pattes du compagnon lors de son déplacement vers la droite (la jambe va maintenant dans le sens naturel de la marche)."},{"version":"🌍","date":"Inconnu","title":"Mise à jour 🌍","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **Langues** : Traduction intégrale et manuelle de toutes les clés de gamification (`gamification.*`), de compagnons (`settingPets.*`), et de navigation (`tab.rewards*`, `tab.pets`) dans les 18 langues de l'application."},{"version":"⚡","date":"Inconnu","title":"Mise à jour ⚡","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **Performances** : Mémoïsation du composant `BadgeCard` pour un chargement instantané et une recherche fluide sans aucun lag de rendu.\n- **Colonnes de badges** : Correction du bug d'affichage en colonnes multiples (interpolation de la variable `${columns}`).\n- **Page Niveau** : Effets de fondu de page (`fadeIn`), pulsation lumineuse (`pulseGlow`) sur le cercle, et survol interactif sur les cartes de statistiques."},{"version":"0.9.0","date":"2026-06-23","title":"Mise à jour 0.9.0","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"🎨","date":"Inconnu","title":"Mise à jour 🎨","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **Desktop**: Rebranding complet et améliorations importantes de l'expérience ainsi qu'introduction de la connexion via l'application Web mAI\n- **Pets**: Intégration de **dix nouveaux pets** pour vous accompagner et ajouts de leurs effets sonores.\n- **CLI**: Lancement amélioré avec mai et pas lh ou lobehub. Installation via **npm install -g @mdevs/mai-cli**.\n- **Fix**: Corrections de divers bugs et problèmes\n- **Improve**: Améliorations importantes de l'interface et divers autres\n- **Version**: Mise à jour de la version du projet vers la version supérieure `0.9.0` sous l'auteur `mDevlopers`."},{"version":"0.4.0","date":"2026-06-20","title":"Mise à jour 0.4.0","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"🎨","date":"Inconnu","title":"Mise à jour 🎨","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **mAI**: Rebranding complet de l'application LobeHub vers la marque **mAI** et l'assistant **May**.\n- **Auth**: Configuration et intégration exclusive des fournisseurs SSO Canva, Google, Github, Notion, Railway, Slack, Spotify, Telegram, Twitch et X.\n- **Branding**: Remplacement des logos de marque et de l'avatar par `/avatars/may.PNG`.\n- **Fix**: Corrections de divers bugs et problèmes\n- **Improve**: Améliorations importantes de l'interface, connexion, bases de données et performances\n- **Version**: Mise à jour de la version du projet vers la version supérieure `0.4.0` sous l'auteur `mDevlopers`."},{"version":"2.2.6","date":"2026-06-17","title":"Mise à jour 2.2.6","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"✨","date":"Inconnu","title":"Mise à jour ✨","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **agent**: improve connector, document, and fleet workflows.\n\n<br/>\n\n<details>\n<summary><kbd>Improvements and Fixes</kbd></summary>"},{"version":"What's","date":"Inconnu","title":"Mise à jour What's","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **agent**: improve connector, document, and fleet workflows, closes [#15936](https://github.com/lobehub/lobe-chat/issues/15936) ([3f82033](https://github.com/lobehub/lobe-chat/commit/3f82033))\n\n</details>\n\n<div align=\"right\">\n\n[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)\n\n</div>"},{"version":"2.2.1","date":"2026-05-29","title":"Mise à jour 2.2.1","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"✨","date":"Inconnu","title":"Mise à jour ✨","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **device**: device registry TRPC (register / list / update / remove).\n- **bot**: add iMessage Desktop setup and bridge.\n- **desktop**: show zoom level HUD on Cmd+/- and Cmd+0.\n\n<br/>\n\n<details>\n<summary><kbd>Improvements and Fixes</kbd></summary>"},{"version":"What's","date":"Inconnu","title":"Mise à jour What's","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **device**: device registry TRPC (register / list / update / remove), closes [#15299](https://github.com/lobehub/lobe-chat/issues/15299) ([671b252](https://github.com/lobehub/lobe-chat/commit/671b252))\n- **bot**: add iMessage Desktop setup and bridge, closes [#15228](https://github.com/lobehub/lobe-chat/issues/15228) ([6d94635](https://github.com/lobehub/lobe-chat/commit/6d94635))\n- **desktop**: show zoom level HUD on Cmd+/- and Cmd+0, closes [#15294](https://github.com/lobehub/lobe-chat/issues/15294) ([109545c](https://github.com/lobehub/lobe-chat/commit/109545c))\n\n</details>\n\n<div align=\"right\">\n\n[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)\n\n</div>"},{"version":"2.2.0","date":"2026-05-18","title":"Mise à jour 2.2.0","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"💄","date":"Inconnu","title":"Mise à jour 💄","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **pricing**: restore DeepSeek models to official pricing."},{"version":"🐛","date":"Inconnu","title":"Mise à jour 🐛","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **conversation**: animate only the last markdown block + drop clearMessages hotkey.\n\n<br/>\n\n<details>\n<summary><kbd>Improvements and Fixes</kbd></summary>"},{"version":"Styles","date":"Inconnu","title":"Mise à jour Styles","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **pricing**: restore DeepSeek models to official pricing, closes [#14911](https://github.com/lobehub/lobe-chat/issues/14911) ([e566688](https://github.com/lobehub/lobe-chat/commit/e566688))"},{"version":"What's","date":"Inconnu","title":"Mise à jour What's","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"- **conversation**: animate only the last markdown block + drop clearMessages hotkey, closes [#14906](https://github.com/lobehub/lobe-chat/issues/14906) ([469a8e6](https://github.com/lobehub/lobe-chat/commit/469a8e6))\n\n</details>\n\n<div align=\"right\">\n\n[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)\n\n</div>"},{"version":"2.1.58","date":"2026-05-13","title":"Mise à jour 2.1.58","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":""},{"version":"✨","date":"Inconnu","title":"Mise à jour ✨","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$27"},{"version":"🐛","date":"Inconnu","title":"Mise à jour 🐛","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$28"},{"version":"💄","date":"Inconnu","title":"Mise à jour 💄","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$29"},{"version":"What's","date":"Inconnu","title":"Mise à jour What's","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$2a"},{"version":"What's","date":"Inconnu","title":"Mise à jour What's","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$2b"},{"version":"Styles","date":"Inconnu","title":"Mise à jour Styles","type":"feature","icon":"Star","color":"text-purple-600","bgColor":"bg-purple-50","project":"mAI","description":"$2c"}],"mSearch":[{"version":"<a","date":"Inconnu","title":"Mise à jour <a","type":"feature","icon":"Star","color":"text-blue-600","bgColor":"bg-blue-50","project":"mSearch","description":"# Changelog"},{"version":"0.9.0-beta","date":"2026-06-22","title":"Mise à jour 0.9.0-beta","type":"feature","icon":"Star","color":"text-blue-600","bgColor":"bg-blue-50","project":"mSearch","description":""},{"version":"🎨","date":"Inconnu","title":"Mise à jour 🎨","type":"feature","icon":"Star","color":"text-blue-600","bgColor":"bg-blue-50","project":"mSearch","description":"- **Interface** : Préparation de la page de présentation pour l'outil natif multi-plateforme mSearch.\n- **Plateformes** : Disponible sur Windows, macOS et Linux !"}],"mAIRaw":"$2d","mSearchRaw":"<a name=\"readme-top\"></a>\n\n# Changelog\n\n## [Version 0.9.0-beta](https://github.com/mDevsLabs/mSearch/compare/v0.8.0-beta...v0.9.0-beta)\n\n<sup>Released on **2026-06-22**</sup>\n\n#### 🎨 Refonte de l'interface mSearch\n- **Interface** : Préparation de la page de présentation pour l'outil natif multi-plateforme mSearch.\n- **Plateformes** : Disponible sur Windows, macOS et Linux !\n"},"filterProject":"mai"}]
2e:I[1839,["210","static/chunks/210-2bcb72977a2d980c.js","619","static/chunks/619-ba102abea3e3d0e4.js","239","static/chunks/239-0efcf3b33fe933aa.js","663","static/chunks/663-641a85383255f1d4.js","906","static/chunks/906-f35e0800ac8bd5a2.js","177","static/chunks/app/layout-3cf102c1d4f66f47.js"],"CookieBanner"]
2f:I[2619,["210","static/chunks/210-2bcb72977a2d980c.js","619","static/chunks/619-ba102abea3e3d0e4.js","239","static/chunks/239-0efcf3b33fe933aa.js","663","static/chunks/663-641a85383255f1d4.js","906","static/chunks/906-f35e0800ac8bd5a2.js","177","static/chunks/app/layout-3cf102c1d4f66f47.js"],""]
30:I[2089,["210","static/chunks/210-2bcb72977a2d980c.js","619","static/chunks/619-ba102abea3e3d0e4.js","239","static/chunks/239-0efcf3b33fe933aa.js","663","static/chunks/663-641a85383255f1d4.js","906","static/chunks/906-f35e0800ac8bd5a2.js","177","static/chunks/app/layout-3cf102c1d4f66f47.js"],"BackToTop"]
31:I[1402,["210","static/chunks/210-2bcb72977a2d980c.js","619","static/chunks/619-ba102abea3e3d0e4.js","239","static/chunks/239-0efcf3b33fe933aa.js","663","static/chunks/663-641a85383255f1d4.js","906","static/chunks/906-f35e0800ac8bd5a2.js","177","static/chunks/app/layout-3cf102c1d4f66f47.js"],""]
1e:["$","$L2e",null,{}]
1f:["$","div",null,{"className":"absolute -top-24 -left-24 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"}]
20:["$","div",null,{"className":"absolute top-1/2 -right-24 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"}]
21:["$","main",null,{"className":"flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-12 md:pb-32 pt-6 z-10","children":["$","$L3",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L4",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]
22:["$","footer",null,{"className":"relative mt-auto mb-4 w-[95%] max-w-5xl mx-auto md:fixed md:bottom-4 md:left-1/2 md:-translate-x-1/2 z-50 rounded-3xl md:rounded-full border border-black/10 dark:border-white/10 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md shadow-sm px-4 md:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0 transition-all duration-300","children":[["$","p",null,{"className":"text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium","children":[2026," © All rights reserved | mProjects | Official Website"]}],["$","div",null,{"className":"relative group text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium cursor-pointer","children":[["$","span",null,{"className":"hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1","children":["Légal",["$","svg",null,{"ref":"$undefined","xmlns":"http://www.w3.org/2000/svg","width":24,"height":24,"viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","strokeWidth":2,"strokeLinecap":"round","strokeLinejoin":"round","className":"lucide lucide-chevron-down w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180","children":[["$","path","qrunsl",{"d":"m6 9 6 6 6-6"}],"$undefined"]}]]}],["$","div",null,{"className":"absolute bottom-full left-1/2 -translate-x-1/2 pb-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50","children":["$","div",null,{"className":"bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl rounded-2xl p-1.5 min-w-[140px] flex flex-col gap-0.5","children":[["$","$L2f",null,{"href":"/legal/privacy","className":"px-3 py-2 rounded-xl text-xs font-medium transition-colors text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white text-center","children":"Confidentialité"}],["$","$L2f",null,{"href":"/legal/terms","className":"px-3 py-2 rounded-xl text-xs font-medium transition-colors text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white text-center","children":"CGU"}]]}]}]]}]]}]
23:["$","footer",null,{"className":"fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-400 z-50"}]
24:["$","$L30",null,{}]
25:["$","$L31",null,{"src":"https://api.dashboard.instatus.com/widget?host=mprojects.instatus.com&code=1ac64775&locale=fr","strategy":"afterInteractive"}]
b:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
7:null
32:I[622,[],"IconMark"]
9:{"metadata":[["$","title","0",{"children":"mProjects | Changelog mAI | mProjects - Just build"}],["$","meta","1",{"name":"description","content":"Notes de version du projet mAI."}],["$","link","2",{"rel":"shortcut icon","href":"/favicon.ico"}],["$","link","3",{"rel":"icon","href":"/favicon.ico"}],["$","link","4",{"rel":"apple-touch-icon","href":"/mprojects.png"}],["$","$L32","5",{}]],"error":null,"digest":"$undefined"}
e:"$9:metadata"
