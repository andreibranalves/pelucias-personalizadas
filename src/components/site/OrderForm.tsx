import { useRef, useState, type DragEvent } from "react";

const STEPS = ["01 · Arquivo", "02 · Escala", "03 · Contato"];

const QUANTITIES = ["300 – 500", "500 – 1.000", "1.000 – 3.000", "3.000+"];

type Form = {
  quantity: string;
  deadline: string;
  briefing: string;
  name: string;
  company: string;
  email: string;
  phone: string;
};

export function OrderForm() {
  const [step, setStep] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<Form>({
    quantity: "",
    deadline: "",
    briefing: "",
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  const set = (key: keyof Form, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) setFile(dropped);
  };

  const next = () => {
    setError(null);
    if (step === 1 && !form.quantity) {
      setError("Selecione a quantidade estimada.");
      return;
    }
    setStep((s) => Math.min(s + 1, 2));
  };

  const submit = () => {
    if (!form.name || !form.email) {
      setError("Preencha nome e e-mail para enviarmos o orçamento.");
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <section
      id="orcamento"
      className="scroll-mt-16 border-t border-border bg-foreground px-5 py-24 text-background md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-background/50">
            [ 05 · Iniciação de Pedido ]
          </span>
          <h2 className="mt-6 max-w-xl text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            Dê forma à identidade
            <br />
            <em className="font-normal italic">da sua marca.</em>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-background/60">
            Inicie seu pedido em três etapas. Nossa equipe responde em até 2 horas úteis — sem
            compromisso.
          </p>
        </div>

        <div className="border border-background/15 p-6 md:p-10">
          {sent ? (
            <div className="py-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Pedido recebido
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                Obrigado, {form.name.split(" ")[0]}.
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/60">
                Nossa equipe entra em contato em até 2 horas úteis com o orçamento e os próximos
                passos do seu mascote.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-6 border-b border-background/15 pb-5">
                {STEPS.map((label, i) => (
                  <span
                    key={label}
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                      i === step ? "text-accent" : "text-background/35"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="pt-8">
                {step === 0 && (
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-background/40">
                      01
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      Envie seu mascote ou logo
                    </h3>
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragging(true);
                      }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={onDrop}
                      onClick={() => inputRef.current?.click()}
                      className={`mt-6 cursor-pointer border border-dashed px-6 py-14 text-center transition-colors ${
                        dragging ? "border-accent bg-accent/10" : "border-background/25"
                      }`}
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/70">
                        {file ? file.name : "Arraste o arquivo ou clique para enviar"}
                      </p>
                      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-background/35">
                        PNG · JPG · PDF · AI · EPS — opcional
                      </p>
                      <input
                        ref={inputRef}
                        type="file"
                        className="hidden"
                        accept=".png,.jpg,.jpeg,.pdf,.ai,.eps"
                        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                      />
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-background/50">
                      Não tem arte vetorizada? Sem problema — criamos o design gratuitamente. Você
                      pode pular esta etapa.
                    </p>
                  </div>
                )}

                {step === 1 && (
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-background/40">
                      02
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">
                      Escala do pedido
                    </h3>
                    <div className="mt-6 grid grid-cols-2 gap-px bg-background/15">
                      {QUANTITIES.map((q) => (
                        <button
                          key={q}
                          type="button"
                          onClick={() => set("quantity", q)}
                          className={`bg-foreground px-4 py-5 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                            form.quantity === q
                              ? "bg-accent text-accent-foreground"
                              : "text-background/70 hover:text-background"
                          }`}
                        >
                          {q} un.
                        </button>
                      ))}
                    </div>
                    <Field
                      label="Prazo desejado"
                      value={form.deadline}
                      onChange={(v) => set("deadline", v)}
                      placeholder="Ex.: evento em novembro"
                    />
                    <Field
                      label="Briefing (opcional)"
                      value={form.briefing}
                      onChange={(v) => set("briefing", v)}
                      placeholder="Conte sobre o personagem, tamanho, acabamento…"
                      textarea
                    />
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.25em] text-background/40">
                      03
                    </span>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight">Seus contatos</h3>
                    <Field label="Nome" value={form.name} onChange={(v) => set("name", v)} />
                    <Field
                      label="Empresa"
                      value={form.company}
                      onChange={(v) => set("company", v)}
                    />
                    <Field
                      label="E-mail"
                      type="email"
                      value={form.email}
                      onChange={(v) => set("email", v)}
                    />
                    <Field
                      label="WhatsApp"
                      value={form.phone}
                      onChange={(v) => set("phone", v)}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                )}

                {error && (
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {error}
                  </p>
                )}

                <div className="mt-10 flex items-center justify-between border-t border-background/15 pt-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40">
                    Passo {step + 1} de 3
                  </span>
                  <div className="flex gap-3">
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="border border-background/25 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-background/70"
                      >
                        Voltar
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={step === 2 ? submit : next}
                      className="bg-background px-6 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground transition-opacity hover:opacity-85"
                    >
                      {step === 2 ? "Enviar pedido" : "Continuar"}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "mt-2 w-full border-b border-background/25 bg-transparent py-3 text-sm text-background placeholder:text-background/30 focus:border-accent focus:outline-none";
  return (
    <label className="mt-6 block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40">
        {label}
      </span>
      {textarea ? (
        <textarea
          rows={3}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={cls}
        />
      )}
    </label>
  );
}
