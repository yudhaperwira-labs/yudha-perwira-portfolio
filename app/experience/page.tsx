import ExperienceTimeline from "@/components/ui/ExperienceTimeline";

type JobProps = {
  role: string;
  company: string;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
};

function Job({
  role,
  company,
  location,
  summary,
  responsibilities,
  achievements,
}: JobProps) {
  return (
    <article className="max-w-[900px] pb-10">
      <div className="text-[8px] uppercase tracking-[0.16em] text-white/24">
        {role}
      </div>

      <h2
        className="
          mt-4 font-heading
          text-[clamp(2rem,4vw,4rem)]
          font-semibold leading-[0.94]
          tracking-[-0.055em]
          text-white
        "
      >
        {company}
      </h2>

      <div className="mt-4 text-[9px] uppercase tracking-[0.13em] text-white/25">
        {location}
      </div>

      <p className="mt-7 max-w-[780px] text-[14px] leading-7 text-white/42">
        {summary}
      </p>

      <div className="mt-9 grid gap-8 lg:grid-cols-2">
        <div>
          <div className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/26">
            Selected Responsibilities
          </div>

          <ul className="mt-5 space-y-4">
            {responsibilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[12px] leading-6 text-white/38"
              >
                <span className="mt-[10px] h-px w-4 shrink-0 bg-white/25" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[8px] font-semibold uppercase tracking-[0.15em] text-white/26">
            Key Achievements
          </div>

          <ul className="mt-5 space-y-4">
            {achievements.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[12px] leading-6 text-white/55"
              >
                <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-white/50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function ExperiencePage() {
  const data = [
    {
      title: "2023 — Present",
      content: (
        <Job
          role="QC & IT Support Specialist"
          company="PT Bi-Chain Science & Technology"
          location="Surabaya · Multi-Site Warehouse Operations"
          summary="Supporting WMS, SCM, infrastructure and warehouse operational technology across multi-site environments."
          responsibilities={[
            "Monitor WMS operations across three operational sites supporting approximately 700 users.",
            "Handle application, hardware, LAN/WAN and ISP incidents in accordance with SLA requirements.",
            "Coordinate with the IT team in China for system bugs, integration issues and infrastructure requirements.",
            "Maintain printers, switches, access points, computers and supporting network infrastructure across three warehouses.",
          ]}
          achievements={[
            "Maintained uninterrupted WMS operations across three warehouse sites for 700 users through proactive monitoring.",
            "Supported same-day resolution for approximately 70 incidents per month with SLA documentation.",
            "Supported consistent QC reporting across three warehouse back-office operations.",
          ]}
        />
      ),
    },

    {
      title: "2023",
      content: (
        <Job
          role="IT Support Specialist"
          company="CV Bina Karya Solusindo"
          location="Surabaya"
          summary="Technical implementation and support work across client IT and IoT environments."
          responsibilities={[
            "Performed installation and deployment of IT and IoT equipment for client environments.",
            "Handled troubleshooting, maintenance and technical support for deployed devices.",
            "Prepared structured technical documentation for implementation and failure handling.",
          ]}
          achievements={[
            "Supported deployment of more than ten types of IT and IoT devices.",
            "Contributed to implementations across approximately twenty client environments.",
          ]}
        />
      ),
    },

    {
      title: "2019 — 2023",
      content: (
        <Job
          role="IT & Technology Analyst · Assistant Manager"
          company="PT Bank Negara Indonesia (Persero) Tbk."
          location="Regional Surabaya"
          summary="Regional enterprise IT operations and implementation across branch infrastructure, banking technology and strategic transformation initiatives."
          responsibilities={[
            "Supported enterprise IT infrastructure across 144 BNI branch offices.",
            "Handled Active Directory, Windows Server, branch infrastructure and multi-layer troubleshooting.",
            "Coordinated preventive maintenance and technology operations with multiple vendors.",
            "Implemented corrective action for IT audit findings across the regional environment.",
          ]}
          achievements={[
            "Served as implementation coordinator and technical support for Biometric Verification across 144 branch offices.",
            "Contributed to installation and configuration of SONIC self-service banking technology.",
            "Collaborated on deployment of the BNI Online Queue System across Regional Surabaya.",
            "Supported technology operations for corporate events including Garuda Indonesia, Rans Entertainment and strategic BNI partners.",
          ]}
        />
      ),
    },

    {
      title: "2016 — 2019",
      content: (
        <Job
          role="Teller & Customer Service"
          company="PT Bank Negara Indonesia (Persero) Tbk."
          location="Surabaya"
          summary="Dual-function frontliner responsibilities covering banking transactions, cash operations, account administration and customer service."
          responsibilities={[
            "Managed daily cash vault operations, cash counting, restocking and general ledger recording.",
            "Prepared daily cash position and cash-count reporting according to internal audit standards.",
            "Handled Teller and Customer Service responsibilities including account administration and product consultation.",
          ]}
          achievements={[
            "Maintained 100% cash-balancing accuracy with zero discrepancies throughout 3 years and 7 months of operations.",
            "Entrusted with dual Teller and Customer Service responsibilities.",
          ]}
        />
      ),
    },

    {
      title: "2014 — 2016",
      content: (
        <Job
          role="Teller & Customer Service"
          company="PT Bank Maybank Indonesia Tbk."
          location="Surabaya"
          summary="High-volume frontliner banking operations with an emphasis on transaction accuracy and regulatory compliance."
          responsibilities={[
            "Processed deposits, withdrawals and transfers in accordance with SOP and OJK requirements.",
            "Verified customer identities and transaction documentation.",
            "Maintained daily cash balancing and transaction reconciliation.",
          ]}
          achievements={[
            "Maintained zero major discrepancies throughout approximately 1.5 years of operations.",
            "Entrusted with cross-functional customer service responsibilities.",
          ]}
        />
      ),
    },

    {
      title: "2014",
      content: (
        <Job
          role="IT Support Specialist"
          company="PT Suksesindo"
          location="Surabaya"
          summary="Early-career hands-on IT support across office endpoints, networks and user operations."
          responsibilities={[
            "Supported routers, switches, Wi-Fi and ISP connectivity.",
            "Performed preventive and corrective maintenance on desktops, laptops and printers.",
            "Resolved hardware, software, operating-system and basic network incidents.",
          ]}
          achievements={[
            "Supported 24 employees and maintained 24 desktop computers.",
            "Maintained stable office connectivity through routine network monitoring and troubleshooting.",
            "Managed corporate bulk-email activities for hundreds to thousands of recipients.",
          ]}
        />
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#0f1012] text-white">
      <section className="mx-auto max-w-[1500px] px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pt-36">
        <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
          Experience
        </div>

        <h1
          className="
            mt-7 max-w-[900px]
            font-heading
            text-[clamp(3.6rem,7vw,7rem)]
            font-semibold leading-[0.86]
            tracking-[-0.07em]
          "
        >
          Career built through
          <span className="block text-white/27">real operations.</span>
        </h1>

        <p className="mt-8 max-w-[650px] text-[14px] leading-7 text-white/38">
          A career path spanning enterprise IT, banking technology,
          customer-facing operations and multi-site warehouse infrastructure.
        </p>
      </section>

      <section className="px-5 pb-32 sm:px-8 lg:px-12">
        <ExperienceTimeline data={data} />
      </section>
    </main>
  );
}
