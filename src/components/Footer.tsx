import { Mail, MapPin, Phone } from "lucide-react"

import logo from "@/assets/6efd2636-210b-451c-95ab-10932473dd6e.jfif"

const contactItems = [
  {
    label: "Private Desk",
    value: "+1 (407) 555-0188",
    icon: Phone,
  },
  {
    label: "Email",
    value: "advisory@floridaland.co",
    icon: Mail,
  },
  {
    label: "Market Focus",
    value: "Central Florida Growth Corridor",
    icon: MapPin,
  },
]

const socialLinks = [
  {
    label: "Instagram",
    path: "M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v10.75H3V9.75Zm6.25 0h3.82v1.47h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.1v5.13h-4v-4.55c0-1.09-.02-2.48-1.51-2.48-1.52 0-1.75 1.18-1.75 2.4v4.63h-4V9.75Z",
  },
  {
    label: "Facebook",
    path: "M14.25 8.1V6.45c0-.79.52-.98.89-.98h2.26V2.1L14.29 2.09c-3.45 0-4.23 2.58-4.23 4.23V8.1H7.4v3.47h2.66V22h4.19V11.57h2.83l.38-3.47h-3.21Z",
  },
]

export function Footer() {
  return (
    <footer className="w-full bg-[#100c08] px-6 py-16 text-left text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.05fr_1.25fr_0.7fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#d9b16e]/40 bg-white">
                <img
                  src={logo}
                  alt="Florida Land Advisory logo"
                  className="h-full w-full object-cover"
                />
              </span>
              <div>
                <p className="font-[var(--heading)] text-2xl font-semibold tracking-[-0.04em] text-white">
                  Florida Land
                </p>
                <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#d9b16e]">
                  Private Advisory
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/58">
              Editorial land advisory for buyers seeking privacy, long-view
              value, and credible Florida growth opportunities.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {contactItems.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.label} className="border border-white/10 bg-white/[0.04] p-5">
                  <Icon className="mb-5 h-5 w-5 text-[#d9b16e]" aria-hidden="true" />
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.24em] text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-white/78">
                    {item.value}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="lg:text-right">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#d9b16e]">
              Social
            </p>
            <div className="mt-5 flex gap-3 lg:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/72 transition-colors hover:border-[#d9b16e]/60 hover:text-[#d9b16e]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs font-semibold uppercase tracking-[0.22em] text-white/36 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Florida Land Advisory. All rights reserved.</p>
          <p>Secure private land acquisition guidance.</p>
        </div>
      </div>
    </footer>
  )
}
