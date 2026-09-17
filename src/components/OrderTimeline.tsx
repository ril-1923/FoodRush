const STEPS = ["Order Placed", "Restaurant Accepted", "Food Being Prepared", "Out for Delivery", "Delivered"];

export default function OrderTimeline({ activeStep }: { activeStep: number }) {
  return (
    <div className="fr-timeline">
      {STEPS.map((step, i) => {
        const state = i < activeStep ? "done" : i === activeStep ? "active" : "";
        return (
          <div key={step} className={`fr-timeline-step ${state}`}>
            <strong className={state ? "" : "text-muted"}>{step}</strong>
            {state === "active" && (
              <p className="small mb-0" style={{ color: "var(--fr-accent)" }}>
                In progress…
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
