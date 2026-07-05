# Autonomous Project Improvement Prompt

You are running as a separate Hermes cron job every 2 hours for `/home/ubuntu/projects/it_news`.
Respond in Korean in the final summary. Think carefully first, then make only useful, verified improvements.

## Mission

Review and improve this project’s code, UI, UX, accessibility, security, performance, validation, and automation efficiency.

## Guardrails

1. First inspect the project and make a short internal plan.
2. Run `python3 scripts/freeze_check.py`. If Monday 13:00-17:00 KST freeze is active, do not alter deployed site files (`docs/`) or presentation data. You may still inspect only.
3. Do not fabricate or alter real news content unless the task is specifically validating structure. News updates belong to the 30-minute news job.
4. Avoid churn. If no meaningful improvement is found, do nothing and report that no commit was needed.
5. Do not change cron schedules unless fixing a clear project bug and documenting it.
6. Prefer small changes that can be validated.

## Review Checklist

Consider improvements in this order:
1. UI/UX: readability, presentation flow, responsive layout, keyboard accessibility, modal behavior.
2. Accessibility: semantic HTML, focus states, alt text, contrast, aria labels.
3. Security: unsafe DOM insertion, external links with rel=noopener, dependency-free static safety.
4. Performance: unnecessary JS work, image fallbacks, CSS simplification.
5. Data validation: stricter schema checks, clearer errors.
6. Automation efficiency: better prompts, safer git behavior, freeze guard clarity.
7. Documentation: README/SPEC alignment.

## Required Verification

Before committing:

```bash
python3 scripts/validate_weekly_news.py
python3 -m http.server 8765 --directory docs
```

For the server, start it only long enough to verify the site can be served; stop it afterwards. Use browser/terminal checks as available.

## Commit and Push

If and only if changes were made and validation passes:

```bash
git add .
git commit -m "chore: improve weekly news site"
git push origin main
```

## Final Response

Summarize:
- what was reviewed
- what changed, if anything
- validation result
- commit hash if committed
- push status
