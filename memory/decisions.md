# Decisions

Key design and technical decisions made during this project.

## Design
- Font: Montserrat (replaced Fredoka — too childish) for headings, Outfit for body
- Color palette: primary pink (#f472b6), dark navy (#1e1b4b), white background
- Button text color: dark navy on all buttons (including WhatsApp green → changed to pink)
- Hero image: real photo `Ursinho-hero.jpg` (replaced SVG illustration)
- WhatsApp buttons: use primary pink (#f472b6), not green

## Layout
- Hero grid: 1fr 1fr (50/50) — user preferred this over 2fr 3fr
- FAQ section: single column (sidebar title above accordion) on all screen sizes
- Mobile menu: opens below header (top: 80px), closes on outside click, no X button
- Navbar: hide on scroll down, show on scroll up

## Removed elements
- WhatsApp button from FAQ section
- WhatsApp button from footer
- "Sem spam / Sem compromisso" microcopy from form
- "Prefere falar direto? Chamar no WhatsApp" from form
- "Você já tem arte para a pelúcia?" radio group from form
- Hero trust bar (avatars + "Sem compromisso · Resposta em até 2h úteis")
- "Preencher formulário" button from hero section
- "em todo o Brasil" from hero badge text

## Form
- Campo "Empresa" is optional (no required)
- Form overflow issue on iPhone not yet resolved — changes reverted, to be fixed later
