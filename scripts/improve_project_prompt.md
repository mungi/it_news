# Autonomous Project Improvement Prompt

You are running as a separate Hermes cron job every 2 hours for `/home/ubuntu/projects/it_news`.
Respond in Korean in the final summary. Think carefully first, then make only useful, verified improvements.

## Mission

Review and improve this project’s code, UI, UX, accessibility, security, performance, validation, and automation efficiency.

## Guardrails

1. First inspect the project and make a short internal plan.
2. Do not fabricate or alter real news content unless the task is specifically validating structure. News updates belong to the recurring news job.
3. Avoid churn. If no meaningful improvement is found, do nothing and report that no commit was needed.
4. Do not run any presentation/freeze-window guard. The project no longer uses the Monday 13:00-17:00 KST update freeze.
5. Do not change cron schedules unless fixing a clear project bug and documenting it.
6. Prefer small changes that can be validated.

## Review Checklist

Consider improvements in this order:
1. UI/UX: readability, presentation flow, responsive layout, keyboard accessibility, modal behavior.
2. Accessibility: semantic HTML, focus states, alt text, contrast, aria labels.
3. Security: unsafe DOM insertion, external links with rel=noopener, dependency-free static safety.
4. Performance: unnecessary JS work, image fallbacks, CSS simplification.
5. Data validation: stricter schema checks, clearer errors.
6. Automation efficiency: better prompts and safer git behavior.
7. Documentation: README/SPEC alignment.

## Required Verification

Before committing:

```bash
node --check docs/app.js
python3 scripts/validate_weekly_news.py
python3 -m py_compile scripts/validate_weekly_news.py
python3 -m http.server 8765 --directory docs
```

For the server, start it only long enough to verify the site can be served; stop it afterwards. Use browser/terminal checks as available.
Remove generated `__pycache__` files before committing, and inspect `git status --short` / `git diff --stat` so unrelated local artifacts are not committed accidentally.

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
