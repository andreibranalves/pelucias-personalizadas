# CLAUDE.md — Pelúcias Personalizadas

## Session Start
At the beginning of every session, read these files:
- `memory/user.md` — who Andrei is and how he works
- `memory/preferences.md` — communication and design preferences
- `memory/decisions.md` — key decisions already made (don't reintroduce removed elements)
- `memory/people.md` — project context and deployment info

## Session End
After significant changes, update the relevant memory files to reflect:
- New decisions made
- Elements removed or added
- Preferences expressed
- Any issues pending resolution

## Key rules
- **Never deploy to Vercel unless explicitly asked**
- Edit only what is requested — no unsolicited cleanup or refactoring
- The project is a single `index.html` file — keep it that way
- Test environment: iPhone Safari — mobile issues take priority
- Live URL: https://www.peluciaspersonalizadas.com.br
- Deploy command: `vercel --prod --yes` from the project root
