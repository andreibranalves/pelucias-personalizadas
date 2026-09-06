import React, { useState } from "react";
import { Check, Loader2 } from "lucide-react";

const quantities = ["300", "500", "1.000", "2.000", "3.000+"];

export default function InquiryForm() {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "", quantidade: "", observacoes: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const canSubmit = form.nome && form.telefone && form.email && form.quantidade;

  const submit = async (e) => {
    e.preventDefault();
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    setError("");
    try {
      // Mesmo endpoint Formspree do site de produção (f/mqeygoja).
      const body = new FormData();
      body.append("nome", form.nome);
      body.append("telefone", form.telefone);
      body.append("email", form.email);
      body.append("quantidade", form.quantidade);
      body.append("observacoes", form.observacoes);
      const res = await fetch("https://formspree.io/f/mqeygoja", {
        method: "POST",
        body,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      setDone(true);
    } catch {
      setError("Erro ao enviar. Tente novamente ou chame no WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="orcamento" className="bg-cream py-24 lg:py-32">
      <div className="max-w-[880px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-semibold text-wine text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.01em]">
            Solicitar orçamento
          </h2>
          <p className="text-[#1A1A1A]/70 text-lg mt-4 max-w-md mx-auto leading-relaxed">
            Preencha os dados abaixo e receba nossa proposta.
          </p>
        </div>

        {done ? (
          <div className="bg-white rounded-[2rem] border border-black/5 p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-wine mx-auto flex items-center justify-center mb-6">
              <Check size={26} className="text-beige" />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-[#1A1A1A] mb-3">Orçamento solicitado.</h3>
            <p className="text-[#1A1A1A]/70 max-w-md mx-auto">
              Recebemos sua solicitação, {form.nome.split(" ")[0]}. Nossa equipe entra em contato em até 2 horas úteis.
            </p>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="bg-white rounded-[2rem] border border-black/5 p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field label="Nome *" value={form.nome} onChange={(v) => set("nome", v)} />
              <Field label="Telefone *" value={form.telefone} onChange={(v) => set("telefone", v)} />
              <Field label="E-mail *" value={form.email} onChange={(v) => set("email", v)} type="email" />

              <div className="sm:col-span-2">
                <label className="font-body text-[10px] uppercase tracking-[0.18em] text-[#1A1A1A] block mb-3">
                  Quantidade *
                </label>
                <div className="flex flex-wrap gap-2">
                  {quantities.map((q) => (
                    <button
                      type="button"
                      key={q}
                      onClick={() => set("quantidade", q)}
                      className={`font-body text-[11px] uppercase tracking-[0.12em] px-5 py-2.5 rounded-full border transition-all ${
                        form.quantidade === q
                          ? "border-wine bg-wine text-white"
                          : "border-black/10 bg-cream text-[#1A1A1A]/70 hover:border-wine/40"
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="font-body text-[10px] uppercase tracking-[0.18em] text-[#1A1A1A] block mb-3">
                  Observações <span className="text-[#1A1A1A]">(opcional)</span>
                </label>
                <textarea
                  rows={4}
                  value={form.observacoes}
                  onChange={(e) => set("observacoes", e.target.value)}
                  className="w-full bg-cream border border-black/10 focus:border-wine focus:ring-4 focus:ring-wine/10 focus:bg-white outline-none rounded-xl px-4 py-3.5 text-[#1A1A1A] transition-all resize-none"
                />
              </div>
            </div>

            {error && (
              <div className="mt-6 p-4 rounded-xl bg-wine/10 text-wine text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={!canSubmit || submitting}
              className="btn-plush mt-8 w-full inline-flex items-center justify-center gap-2 bg-wine text-white px-6 py-4 rounded-full font-body text-[11px] uppercase tracking-[0.18em] hover:bg-wine-dark disabled:opacity-30"
            >
              {submitting ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
              {submitting ? "Enviando" : "Solicitar orçamento"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="font-body text-[10px] uppercase tracking-[0.18em] text-[#1A1A1A] block mb-3">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-cream border border-black/10 focus:border-wine focus:ring-4 focus:ring-wine/10 focus:bg-white outline-none rounded-xl px-4 py-3.5 text-[#1A1A1A] transition-all"
      />
    </div>
  );
}
