const features = [
  "Unlimited cards",
  "Automated management",
  "SOX compliance",
  "Enterprise ERP integrations",
  "Limited tools",
  "Local video issuance",
];

const plans = [
  { name: "Basic", price: "$9.00" },
  { name: "Standard", price: "$29.00" },
  { name: "Premium", price: "$69.00" },
];

export default function ContactPricing() {
  return (
    <section className="w-full bg-white py-20 px-8">
      {/* Heading */}
      <h2 className="text-center text-4xl font-black text-black leading-tight mb-14">
        Special offer! choose<br />your pack today
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border border-gray-200 bg-[#f9f9f7] p-8 flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col gap-6">
              {/* Plan name + price */}
              <div>
                <p className="text-sm text-gray-500 mb-1">{plan.name}</p>
                <p className="text-4xl font-black text-black">{plan.price}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                      <path d="M2 6l3 3 5-5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button className="border border-black text-black text-xs font-semibold tracking-widest uppercase px-6 py-3 w-fit hover:bg-black hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
