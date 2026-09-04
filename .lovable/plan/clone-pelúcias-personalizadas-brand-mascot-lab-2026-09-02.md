# Clone: Pelúcias Personalizadas (brand-mascot-lab)

Landing page B2B de fabricação de mascotes de pelúcia, em português, replicando estrutura, conteúdo e estética do site original: editorial suíço, tipografia mono em labels/caixa alta, fundo claro, blocos escuros de contraste, acento azul, numeração de seções (01, 02, 03...).

## Página única (rota `/`) com as seções

1. **Header fixo** — marca "Pelúcias Personalizadas", navegação âncora (Manifesto, Especificações, Portfólio, Processo, Diferenciais) e botão "Iniciar Pedido".
2. **Hero split** — imagem macro de pelúcia à esquerda em altura total com legendas técnicas nos cantos ("[ MACRO · 1:1 · STUDIO ]", "REF. 001 — VELBOA PREMIUM", coordenadas); à direita eyebrow, título "Sua identidade, tangível." (segunda linha em itálico), parágrafo, dois CTAs e a régua de métricas 1.000+ / 300 / 20–30.
3. **Manifesto / Especificações** — três blocos numerados: 300 unidades (pedido mínimo), inclusão end-to-end (design gratuito), 20–30 dias úteis.
4. **Portfólio** — grade de 4 cards com imagem, tags (Eventos/Campanhas/Branding etc.), título e linha "Spec": Mascote Corporativo, Sketch → Plush, Sublimação Total, Almofada Personalizada.
5. **Processo** — "Do briefing ao brinde em 5 passos" com os 5 passos numerados e descrições do original.
6. **Diferenciais** — três destaques (300, R$ 0, 100%) mais tabela comparativa "Pelúcias Personalizadas × Concorrentes" com as 6 linhas do original.
7. **Iniciação de pedido** — formulário em 3 etapas (01 Arquivo, 02 Escala, 03 Contato) com indicador de progresso, área de upload arrastar-e-soltar (opcional, PNG/JPG/PDF/AI/EPS), campos de escala/quantidade e contato, botões Voltar/Continuar/Enviar.
8. **Rodapé** — marca, links de âncora, contato/WhatsApp e nota legal.

## Imagens

Gerar 5 imagens próprias no mesmo espírito do original (macro de pelúcia com fio azul, mascote corporativo, sketch→plush, sublimação, almofada) — as imagens originais são hospedadas no domínio deles e não serão copiadas.

## Detalhes técnicos

- Rota única `src/routes/index.tsx` (substituindo o placeholder), seções em componentes sob `src/components/`.
- Design system em `src/styles.css`: tokens semânticos (off-white, quase-preto, azul de acento), fontes via `<link>` no `__root.tsx` — sans geométrica para títulos + mono para labels.
- Envio do formulário: apenas estado local com validação e tela de sucesso (sem backend). Se você quiser receber os pedidos por e-mail/banco, ativo o Lovable Cloud depois.
- Animações leves de entrada por scroll; responsivo mobile-first; SEO com `head()` próprio (título, descrição, og/twitter).
