import { useEffect, useState } from "react";
import { X } from "lucide-react";

type PathKey = "autofill" | "manual" | "lastApp";

const stepLabels: Record<PathKey, string[]> = {
  autofill: ["Upload Resume", "My Information", "My Experience", "Application Questions", "Voluntary Disclosures", "Self Identify", "Take Assessment", "Review"],
  manual: ["Create Account / Sign In", "My Information", "My Experience", "Application Questions", "Voluntary Disclosures", "Self Identify", "Take Assessment", "Review"],
  lastApp: ["Use My Last Application", "My Information", "My Experience", "Application Questions", "Voluntary Disclosures", "Self Identify", "Take Assessment", "Review"],
};

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  resumeFileName: string;
  experience: string;
  workAuthorized: string;
  sponsorship: string;
  startDate: string;
  gender: string;
  ethnicity: string;
  veteranStatus: string;
  disabilityStatus: string;
};

const emptyForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  resumeFileName: "",
  experience: "",
  workAuthorized: "",
  sponsorship: "",
  startDate: "",
  gender: "",
  ethnicity: "",
  veteranStatus: "",
  disabilityStatus: "",
};

const inputCls = "mt-1 w-full px-4 py-3 bg-[color:var(--paper)] border border-[color:var(--line)] text-sm";
const labelCls = "mono text-[10px] uppercase tracking-[0.14em] text-[color:var(--steel)]";
const fieldCls = "block";

export function ApplyModal({ role, open, onClose }: { role: string; open: boolean; onClose: () => void }) {
  const [path, setPath] = useState<PathKey | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>(emptyForm);

  useEffect(() => {
    if (open) {
      setPath(null);
      setStepIndex(0);
      setSubmitted(false);
      setForm(emptyForm);
    }
  }, [open]);

  if (!open) return null;

  const set = (patch: Partial<FormData>) => setForm((f) => ({ ...f, ...patch }));
  const steps = path ? stepLabels[path] : [];
  const isLastStep = stepIndex === steps.length - 1;

  function goBack() {
    if (stepIndex === 0) {
      setPath(null);
    } else {
      setStepIndex((i) => i - 1);
    }
  }

  function goNext() {
    if (isLastStep) {
      setSubmitted(true);
    } else {
      setStepIndex((i) => i + 1);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[color:var(--paper)] text-[color:var(--ink)] border border-[color:var(--line)] shadow-2xl">
        <button aria-label="Close" onClick={onClose} className="absolute top-5 right-5 opacity-60 hover:opacity-100">
          <X size={20} />
        </button>

        <div className="p-8 md:p-10">
          {submitted ? (
            <>
              <div className="mono eyebrow eyebrow-rule">Application</div>
              <h2 className="font-serif text-2xl mt-4">Preview complete.</h2>
              <p className="mt-4 text-sm text-[color:var(--ink-soft)]">
                This apply flow is a preview of the experience — it isn't yet connected to a live application system, so nothing has been submitted or stored. Once our applicant system is wired up, this same flow will send your application through.
              </p>
              <button onClick={onClose} className="mt-8 btn-solid">Close</button>
            </>
          ) : !path ? (
            <>
              <h2 className="font-serif text-2xl">Start Your Application</h2>
              <p className="mt-2 text-sm text-[color:var(--ink-soft)]">{role}</p>
              <div className="mt-8 flex flex-col gap-3">
                <button onClick={() => setPath("autofill")} className="btn-solid w-full justify-center">
                  Autofill with Resume
                </button>
                <button onClick={() => setPath("manual")} className="btn-ghost w-full justify-center">
                  Apply Manually
                </button>
                <button onClick={() => setPath("lastApp")} className="btn-ghost w-full justify-center">
                  Use My Last Application
                </button>
              </div>
            </>
          ) : (
            <>
              <div className={labelCls}>Step {stepIndex + 1} of {steps.length} · {steps[stepIndex]}</div>
              <div className="mt-3 h-1 bg-[color:var(--line)]">
                <div
                  className="h-full bg-[color:var(--bronze)] transition-[width] duration-300"
                  style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
                />
              </div>
              <h2 className="font-serif text-2xl mt-6">{steps[stepIndex]}</h2>
              <p className="mt-1 text-sm text-[color:var(--ink-soft)]">{role}</p>

              <div className="mt-8">
                {stepIndex === 0 && path === "autofill" && (
                  <div className="space-y-4">
                    <p className="text-sm text-[color:var(--ink-soft)]">
                      Upload your resume and we'll carry your details into the fields below for you to review.
                    </p>
                    <label className={fieldCls}>
                      <span className={labelCls}>Resume (PDF or Word)</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => set({ resumeFileName: e.target.files?.[0]?.name ?? "" })}
                        className={inputCls}
                      />
                    </label>
                    {form.resumeFileName && (
                      <p className="text-sm text-[color:var(--ink-soft)]">Received: {form.resumeFileName}</p>
                    )}
                  </div>
                )}

                {stepIndex === 0 && path === "manual" && (
                  <div className="space-y-4">
                    <label className={fieldCls}>
                      <span className={labelCls}>Full Name</span>
                      <input value={form.fullName} onChange={(e) => set({ fullName: e.target.value })} className={inputCls} />
                    </label>
                    <label className={fieldCls}>
                      <span className={labelCls}>Email</span>
                      <input type="email" value={form.email} onChange={(e) => set({ email: e.target.value })} className={inputCls} />
                    </label>
                  </div>
                )}

                {stepIndex === 0 && path === "lastApp" && (
                  <div className="space-y-4">
                    <p className="text-sm text-[color:var(--ink-soft)]">
                      No previous application was found on this device. Let's start a new one — your details below will only be used for this application.
                    </p>
                  </div>
                )}

                {stepIndex === 1 && (
                  <div className="space-y-4">
                    <label className={fieldCls}>
                      <span className={labelCls}>Full Name</span>
                      <input value={form.fullName} onChange={(e) => set({ fullName: e.target.value })} className={inputCls} />
                    </label>
                    <label className={fieldCls}>
                      <span className={labelCls}>Email</span>
                      <input type="email" value={form.email} onChange={(e) => set({ email: e.target.value })} className={inputCls} />
                    </label>
                    <label className={fieldCls}>
                      <span className={labelCls}>Phone</span>
                      <input type="tel" value={form.phone} onChange={(e) => set({ phone: e.target.value })} className={inputCls} />
                    </label>
                  </div>
                )}

                {stepIndex === 2 && (
                  <div className="space-y-4">
                    {path !== "autofill" && (
                      <label className={fieldCls}>
                        <span className={labelCls}>Resume (PDF or Word)</span>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => set({ resumeFileName: e.target.files?.[0]?.name ?? "" })}
                          className={inputCls}
                        />
                      </label>
                    )}
                    <label className={fieldCls}>
                      <span className={labelCls}>Relevant Experience</span>
                      <textarea
                        value={form.experience}
                        onChange={(e) => set({ experience: e.target.value })}
                        rows={4}
                        className={inputCls}
                      />
                    </label>
                  </div>
                )}

                {stepIndex === 3 && (
                  <div className="space-y-4">
                    <label className={fieldCls}>
                      <span className={labelCls}>Are you legally authorized to work in this country?</span>
                      <select value={form.workAuthorized} onChange={(e) => set({ workAuthorized: e.target.value })} className={inputCls}>
                        <option value="">Select an answer</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                    <label className={fieldCls}>
                      <span className={labelCls}>Will you now or in the future require sponsorship?</span>
                      <select value={form.sponsorship} onChange={(e) => set({ sponsorship: e.target.value })} className={inputCls}>
                        <option value="">Select an answer</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                    <label className={fieldCls}>
                      <span className={labelCls}>Desired Start Date</span>
                      <input type="date" value={form.startDate} onChange={(e) => set({ startDate: e.target.value })} className={inputCls} />
                    </label>
                  </div>
                )}

                {stepIndex === 4 && (
                  <div className="space-y-4">
                    <p className="text-sm text-[color:var(--ink-soft)]">
                      These questions are voluntary and used only for equal-opportunity reporting. Your answers do not affect hiring decisions.
                    </p>
                    <label className={fieldCls}>
                      <span className={labelCls}>Gender</span>
                      <select value={form.gender} onChange={(e) => set({ gender: e.target.value })} className={inputCls}>
                        <option value="">Prefer not to say</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                    <label className={fieldCls}>
                      <span className={labelCls}>Ethnicity</span>
                      <select value={form.ethnicity} onChange={(e) => set({ ethnicity: e.target.value })} className={inputCls}>
                        <option value="">Prefer not to say</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </label>
                  </div>
                )}

                {stepIndex === 5 && (
                  <div className="space-y-4">
                    <p className="text-sm text-[color:var(--ink-soft)]">
                      This voluntary self-identification is used only for equal-opportunity reporting.
                    </p>
                    <label className={fieldCls}>
                      <span className={labelCls}>Veteran Status</span>
                      <select value={form.veteranStatus} onChange={(e) => set({ veteranStatus: e.target.value })} className={inputCls}>
                        <option value="">Prefer not to say</option>
                        <option value="veteran">I am a protected veteran</option>
                        <option value="not-veteran">I am not a protected veteran</option>
                      </select>
                    </label>
                    <label className={fieldCls}>
                      <span className={labelCls}>Disability Status</span>
                      <select value={form.disabilityStatus} onChange={(e) => set({ disabilityStatus: e.target.value })} className={inputCls}>
                        <option value="">Prefer not to say</option>
                        <option value="yes">Yes, I have a disability</option>
                        <option value="no">No, I do not have a disability</option>
                      </select>
                    </label>
                  </div>
                )}

                {stepIndex === 6 && (
                  <p className="text-sm text-[color:var(--ink-soft)]">
                    This role does not currently require an assessment. Select Continue to proceed to review.
                  </p>
                )}

                {stepIndex === 7 && (
                  <dl className="text-sm divide-y divide-[color:var(--line)] border border-[color:var(--line)]">
                    {[
                      ["Name", form.fullName || "—"],
                      ["Email", form.email || "—"],
                      ["Phone", form.phone || "—"],
                      ["Resume", form.resumeFileName || "—"],
                      ["Start Date", form.startDate || "—"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-4 p-4">
                        <dt className={labelCls}>{k}</dt>
                        <dd className="text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>

              <div className="mt-10 flex items-center justify-between">
                <button onClick={goBack} className="btn-ghost">Back</button>
                <button onClick={goNext} className="btn-solid">{isLastStep ? "Submit Application" : "Continue"}</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
