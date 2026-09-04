import React, { useState } from "react";
import { Upload, ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";

const segments = ["RH / Benefícios", "Agência de Marketing", "Varejo / Private Label", "Indústria / Grandes Marcas"];
const scales = [
  { v: "300", label: "unidades", note: "Pedido mínimo" },
  { v: "500", label: "unidades", note: "Campanhas médias" },
  { v: "1.000+", label: "unidades", note: "Escala industrial" },
];

export default function InquiryForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ fileName: "", scale: "", nome: "", empresa: "", whatsapp: "", email: "", segmento: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const canNext = step === 1 ? true : step === 2 ? !!form.scale : step === 3 ? form.nome && form.whatsapp && form.email && form.segmento : false;

  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 1400);
  };

  const progress = (step / 3) * 100;

  return (
    <section id="orcamento" className="bg-[#FDFDFD] py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2D5BFF] mb-4">
          [ 05 · Iniciação de Pedido ]
        </div>
        <h2 className="font-heading font-bold text-[#1A1A1A] text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-[-0.02em] max-w-xl mb-4">
          Dê forma à identidade<br />da sua marca.
        </h2>
        <p className="text-[#1A1A1A]/60 text-lg leading-[1.6] max-w-lg mb-12">
          Inicie seu pedido em três etapas. Nossa equipe responde em até 2 horas úteis — sem compromisso.
        </p>

        {/* Measuring-tape progress */}
        <div className="relative mb-10">
          <div className="h-2 bg-[#F2F2F2] rounded-sm overflow-hidden">
            <div className="h-full bg-[#2D5BFF] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
          <div className="absolute inset-x-0 top-0 h-2 flex">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div key={i} className="flex-1 border-r border-[#1A1A1A]/15 last:border-r-0" />
            ))}
          </div>
          <div className="flex justify-between mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#1A1A1A]/50">
            <span className={step >= 1 ? "text-[#2D5BFF]" : ""}>01 · Arquivo</span>
            <span className={step >= 2 ? "text-[#2D5BFF]" : ""}>02 · Escala</span>
            <span className={step >= 3 ? "text-[#2D5BFF]" : ""}>03 · Contato</span>
          </div>
        </div>

        {done ? (
          <div className="border border-[#1A1A1A]/10 bg-[#F2F2F2] p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-[#2D5BFF] mx-auto flex items-center justify-center mb-6">
              <Check size={26} className="text-white" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#1A1A1A] mb-3">Pedido iniciado.</h3>
            <p className="text-[#1A1A1A]/60 max-w-md mx-auto">
              Recebemos sua solicitação, {form.nome.split(" ")[0]}. Nossa equipe entra em contato em até 2 horas úteis.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="border border-[#1A1A1A]/10 bg-white p-6 lg:p-10">
            {step === 1 && (
              <div>
                <StepLabel n="01" title="Envie seu mascote ou logo" />
                <label className="block mt-6 border-2 border-dashed border-[#1A1A1A]/15 rounded-sm p-10 text-center cursor-pointer hover:border-[#2D5BFF] transition-colors">
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => set("fileName", e.target.files?.[0]?.name || "arquivo selecionado")}
                  />
                  <Upload size={28} className="mx-auto text-[#2D5BFF] mb-4" />
                  <div className="font-heading font-semibold text-[#1A1A1A]">
                    {form.fileName || "Arraste o arquivo ou clique para enviar"}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#1A1A1A]/40 mt-2">
                    PNG · JPG · PDF · AI · EPS — opcional
                  </div>
                </label>
                <p className="text-[#1A1A1A]/50 text-sm mt-4">
                  Não tem arte vetorizada? Sem problema — criamos o design gratuitamente. Você pode pular esta etapa.
                </p>
              </div>
            )}

            {step === 2 && (
              <div>
                <StepLabel n="02" title="Escala do projeto" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                  {scales.map((s) => (
                    <button
                      type="button"
                      key={s.v}
                      onClick={() => set("scale", s.v)}
                      className={`text-left p-6 border rounded-sm transition-all ${
                        form.scale === s.v ? "border-[#2D5BFF] bg-[#2D5BFF]/5" : "border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40"
                      }`}
                    >
                      <div className="font-heading font-bold text-3xl text-[#1A1A1A]">{s.v}</div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#1A1A1A]/50 mt-1">{s.label}</div>
                      <div className="text-sm text-[#1A1A1A]/60 mt-3">{s.note}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <StepLabel n="03" title="Dados de contato" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <Field label="Nome *" value={form.nome} onChange={(v) => set("nome", v)} />
                  <Field label="Empresa" value={form.empresa} onChange={(v) => set("empresa", v)} optional />
                  <Field label="WhatsApp *" value={form.whatsapp} onChange={(v) => set("whatsapp", v)} />
                  <Field label="E-mail *" value={form.email} onChange={(v) => set("email", v)} />
                  <div className="sm:col-span-2">
                    <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#1A1A1A]/50 block mb-2">Segmento *</label>
                    <div className="flex flex-wrap gap-2">
                      {segments.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => set("segmento", s)}
                          className={`font-mono text-[11px] uppercase tracking-[0.1em] px-4 py-2.5 rounded-sm border transition-all ${
                            form.segmento === s ? "border-[#2D5BFF] bg-[#2D5BFF] text-white" : "border-[#1A1A1A]/15 text-[#1A1A1A]/70 hover:border-[#1A1A1A]/40"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#1A1A1A]/10">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                >
                  <ArrowLeft size={14} /> Voltar
                </button>
              ) : (
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#1A1A1A]/40">
                  Passo {step} de 3
                </span>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  disabled={!canNext}
                  onClick={() => setStep(step + 1)}
                  className="btn-plush inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FDFDFD] px-6 py-3.5 rounded-sm font-mono text-[11px] uppercase tracking-[0.14em] hover:bg-[#2D5BFF] disabled:opacity-30"
                >
                  Continuar <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!canNext || submitting}
                  className="btn-plush inline-flex items-center gap-2 bg-[#2D5BFF] text-white px-6 py-3.5 rounded-sm font-mono text-[11px] uppercase tracking-[0.14em] hover:bg-[#1A1A1A] disabled:opacity-30"
                >
                  {submitting ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                  {submitting ? "Enviando" : "Iniciar Pedido"}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function StepLabel({ n, title }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[11px] text-[#2D5BFF]">{n}</span>
      <h3 className="font-heading font-semibold text-xl text-[#1A1A1A]">{title}</h3>
    </div>
  );
}

function Field({ label, value, onChange, optional }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#1A1A1A]/50 block mb-2">
        {label}{optional && <span className="text-[#1A1A1A]/30"> (opcional)</span>}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#F2F2F2] border border-transparent focus:border-[#2D5BFF] focus:bg-white outline-none px-4 py-3 rounded-sm text-[#1A1A1A] transition-colors"
      />
    </div>
  );
}