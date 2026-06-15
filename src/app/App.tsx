import { useState } from "react";
import logoKM from "../imports/logoo.png";
import headerPhoto from "../imports/Sni_mek_obrazovky_2026-06-15_v_15.09.03.png";
import barnNightPhoto from "../imports/Sni_mek_obrazovky_2026-06-15_v_12.08.39.png";
import couplePhoto from "../imports/IMG_0234_1.png";
import { MapPin, Clock, Calendar, ChevronRight, Heart, Users, Utensils, Music, Camera, Phone, ChevronDown, ArrowLeft, Shirt } from "lucide-react";



const schedule = [
  { time: "12:00", event: "Příjezd hostů", icon: Users },
  { time: "13:00", event: "Obřad", icon: Heart },
  { time: "14:50", event: "Slavnostní oběd", icon: Utensils },
  { time: "16:00", event: "Krájení dortu", icon: Utensils },
  { time: "16:30", event: "Grilovačka", icon: Utensils },
  { time: "18:00", event: "První tanec", icon: Heart },
  { time: "21:00", event: "Tanec s prskavkami", icon: Music },
];


const faqs = [
  {
    q: "Kde se mohu ubytovat?",
    a: "Doporučujeme Pension Borohrádek (2 km) nebo Hotel Orlice v Týništi nad Orlicí (8 km). Rezervujte prosím s dostatečným předstihem.",
  },
  {
    q: "Je na místě parkování?",
    a: "Ano, přímo u areálu Stodoly Borohrádek je parkoviště s kapacitou cca 80 míst. Někam to narveme :-)",
  },
  {
    q: "Mohu přivést děti?",
    a: "S cílem umožnit všem hostům, včetně rodičů, relaxační večer, rozhodli jsme uspořádat náš svatební den pouze pro dospělé. Doufáme, že toto předběžné oznámení nebude překážkou a i nadále se k nám připojíte oslavit tento jedinečný den. V případě dotazů nás určitě neváhejte kontaktovat.",
  },
  {
    q: "Svatební dary?",
    a: "Střechu nad hlavou už máme, ale to nejkrásnější teprve začíná. Místo tradičních darů nám můžete přispět na společné zážitky, cesty a sny, které nás čekají.",
  },
  {
    q: "Kdy začíná program?",
    a: "Sraz hostů je od 12:00. Obřad začíná v 13:00. Moc prosíme o dochvilnost.",
  },
];


const contacts = [
  { role: "Ženich", name: "Marek Čehovský", tel: "721 573 785" },
  { role: "Nevěsta", name: "Kateřina Karpíšková", tel: "345 543 345" },
  { role: "Koordinátorka", name: "", tel: "876 543 543" },
];

type Tab = "prehled" | "program";

const cardShadow = { boxShadow: "0 2px 16px rgba(107, 58, 58, 0.08), 0 1px 4px rgba(107, 58, 58, 0.05)" };
const cardShadowHover = { boxShadow: "0 6px 28px rgba(107, 58, 58, 0.14), 0 2px 8px rgba(107, 58, 58, 0.08)" };

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("prehled");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Contacts page overlay */}
      {showContacts && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col">
          <div className="bg-primary px-4 pt-10 pb-6">
            <button
              onClick={() => setShowContacts(false)}
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm">Zpět</span>
            </button>
            <h1
              className="text-primary-foreground"
              style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: "1.6rem" }}
            >
              Důležité kontakty
            </h1>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3 max-w-lg mx-auto w-full">
            {contacts.map((c) => (
              <div
                key={c.role}
                className="bg-card rounded-2xl p-4 flex items-center justify-between gap-4"
                style={cardShadow}
              >
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{c.role}</p>
                  {c.name && (
                    <p
                      className="text-foreground mb-0.5"
                      style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "1rem" }}
                    >
                      {c.name}
                    </p>
                  )}
                  <a
                    href={`tel:${c.tel.replace(/\s/g, "")}`}
                    className="text-sm text-primary tabular-nums hover:text-accent transition-colors"
                  >
                    {c.tel}
                  </a>
                </div>
                <a
                  href={`tel:${c.tel.replace(/\s/g, "")}`}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Phone size={16} className="text-primary-foreground" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Header */}
      <header className="relative overflow-hidden bg-primary">
        {/* Barn photo */}
        <img
          src={headerPhoto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay — tmavší dole pro čitelnost, průhledný nahoře */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/70" />

        <div className="relative px-6 pt-12 pb-10 text-center">
          {/* Logo */}
          <img
            src={logoKM}
            alt="Káta & Marek"
            className="mx-auto mb-4"
            style={{ width: "220px", height: "auto" }}
          />

          {/* Datum */}
          <p
            className="text-white/60 text-xs mb-5"
            style={{ letterSpacing: "0.28em", textTransform: "uppercase" }}
          >
            15. 09. 2026
          </p>

          {/* Odpočet */}
          {(() => {
            const days = Math.ceil((new Date("2026-09-15").getTime() - Date.now()) / 86400000);
            return (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm">
                <Calendar size={11} className="text-accent" />
                <span className="text-white/70 text-xs font-light tracking-widest">
                  {days > 0 ? `${days} dní do svatby` : days === 0 ? "Dnes je ten den! 🎉" : "Právě jsme oddáni ♥"}
                </span>
              </div>
            );
          })()}
        </div>
      </header>

      {/* Tab Nav */}
      <nav
        className="sticky top-0 z-20 bg-card"
        style={{ boxShadow: "0 2px 12px rgba(125, 34, 53, 0.08)" }}
      >
        <div className="flex">
          {(["prehled", "program"] as Tab[]).map((tab) => {
            const labels: Record<Tab, string> = {
              prehled: "Přehled",
              program: "Harmonogram",
            };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3.5 text-sm font-medium transition-all relative ${
                  activeTab === tab
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {labels[tab]}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-accent rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-lg mx-auto px-4 py-6 space-y-5 pb-16">

        {/* ── PŘEHLED ── */}
        {activeTab === "prehled" && (
          <>
            {/* Uvítací sekce */}
            <section className="rounded-2xl overflow-hidden bg-card" style={cardShadow}>
              {/* Fotka */}
              <div className="relative h-64">
                <img
                  src={couplePhoto}
                  alt="Kačka a Marek"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient dole — plynulý přechod do karty */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                {/* Jméno přes foto */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-8 bg-accent/50" />
                    <Heart size={10} className="text-accent fill-accent" />
                    <div className="h-px w-8 bg-accent/50" />
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="px-5 pt-2 pb-5">
                <h2
                  className="text-foreground mb-2 text-center"
                  style={{ fontFamily: "'Lora', serif", fontWeight: 500, letterSpacing: "0.18em", fontSize: "0.7rem", textTransform: "uppercase" }}
                >
                  Vítejte
                </h2>
                <p
                  className="text-foreground mb-3 leading-snug text-center"
                  style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "1.1rem", fontWeight: 400 }}
                >
                  Dnes společně otevíráme novou kapitolu našeho příběhu.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed text-center">
                  Máme radost, že právě vy jste součástí tohoto výjimečného dne a můžete ho prožít spolu s námi. Připravili jsme pro vás několik důležitých informací, aby pro vás byl tento den co nejpříjemnější, cítili jste se vítaní a mohli si naplno užít každý okamžik.
                </p>
              </div>
            </section>


            {/* KDY a KDE */}
            <section>
              <h3
                className="text-foreground mb-3"
                style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "1.1rem" }}
              >
                Kdy a kde
              </h3>
              <div
                className="rounded-2xl overflow-hidden bg-card"
                style={cardShadow}
              >
                {/* Foto */}
                <div className="relative h-44 bg-muted">
                  <img
                    src={barnNightPhoto}
                    alt="Stodola Borohrádek — svatební sál"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-3">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/92 text-xs font-medium text-foreground"
                      style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.12)" }}
                    >
                      <MapPin size={11} className="text-accent" />
                      Borohrádek
                    </span>
                  </div>
                </div>

                {/* Název místa */}
                <div className="px-4 pt-4 pb-3 border-b border-border/40">
                  <h2
                    className="text-foreground mb-0.5"
                    style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "1.15rem" }}
                  >
                    Stodola Borohrádek
                  </h2>
                  <p className="text-muted-foreground text-sm mb-3">
                    Husova 225, 517 24 Borohrádek · Královéhradecký kraj
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Stodola+Borohr%C3%A1dek/@50.0963618,16.0760467,17z/data=!3m1!4b1!4m6!3m5!1s0x470ddb4fc8d70855:0x6786c639ae2150b!8m2!3d50.0963618!4d16.078627!16s%2Fg%2F11s69szkw7?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:text-accent transition-colors"
                  >
                    Zobrazit na mapě
                    <ChevronRight size={14} />
                  </a>
                </div>

                {/* Datum + čas vedle sebe */}
                <div className="grid grid-cols-2 divide-x divide-border/40">
                  <div className="px-4 py-3 flex items-center gap-3">
                    <Calendar size={18} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Datum</p>
                      <p className="text-sm font-medium text-foreground">15. září 2026</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-center gap-3">
                    <Clock size={18} className="text-accent flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Začátek</p>
                      <p className="text-sm font-medium text-foreground">12:00 hod.</p>
                    </div>
                  </div>
                </div>
                {/* Přidat do kalendáře */}
                <div className="border-t border-border/40">
                  <a
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Svatba+M%C3%A1ra+%26+Ka%C4%8Dka&dates=20260915T100000Z%2F20260915T210000Z&location=Stodola+Borohr%C3%A1dek%2C+Husova+225%2C+517+24+Borohr%C3%A1dek&details=Svatba+M%C3%A1ra+%26+Ka%C4%8Dky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 hover:bg-muted/30 transition-colors"
                  >
                    <Calendar size={14} className="text-accent" />
                    <span className="text-sm font-medium text-primary">Přidat do kalendáře</span>
                    <ChevronRight size={13} className="text-primary" />
                  </a>
                </div>
              </div>
            </section>

            {/* Dress code karta */}
            <section className="bg-card rounded-2xl p-5" style={cardShadow}>
              <div className="flex items-center gap-2 mb-3">
                <Shirt size={20} className="text-accent" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Dress code</p>
              <h3
                className="text-foreground mb-1"
                style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "1.1rem" }}
              >
                Formální & semi-formální
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Prosíme hosty o elegantní oblečení. Bílá je rezervována pro nevěstu, černá pro ženicha.
              </p>

              {/* Barevná paleta */}
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Inspirace barvami</p>
              <div className="flex items-center gap-3 flex-wrap">
                {[
                  { hex: "#6B3A3A", name: "Ganache" },
                  { hex: "#6E2D3A", name: "Mulberry" },
                  { hex: "#800020", name: "Bordeaux" },
                  { hex: "#C4A882", name: "Taupe" },
                  { hex: "#F0E6D0", name: "Champagne" },
                ].map((c) => (
                  <div key={c.hex} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-10 h-10 rounded-full"
                      style={{
                        backgroundColor: c.hex,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)",
                        border: c.hex === "#F5F0E8" || c.hex === "#F0E6D0" ? "1px solid rgba(107,58,58,0.15)" : "none",
                      }}
                    />
                    <span className="text-xs text-muted-foreground">{c.name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Info Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card rounded-xl p-4" style={cardShadow}>
                <Utensils size={20} className="text-accent mb-2" />
                <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">Pohoštění</p>
                <p className="text-sm font-medium text-foreground">Formou rautu</p>
              </div>
              <div
                className="bg-card rounded-xl p-4 cursor-pointer hover:opacity-90 transition-opacity"
                style={cardShadow}
                onClick={() => setShowContacts(true)}
              >
                <Phone size={20} className="text-accent mb-2" />
                <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">Důležité kontakty</p>
                <p className="text-sm font-medium text-primary flex items-center gap-1">
                  Zobrazit <ChevronRight size={13} />
                </p>
              </div>
            </div>

            {/* FAQ sekce */}
            <section>
              <h3
                className="text-foreground mb-3"
                style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "1.1rem" }}
              >
                Časté dotazy
              </h3>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl overflow-hidden"
                    style={cardShadow}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-left gap-3"
                    >
                      <span className="text-sm font-medium text-foreground">{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className="text-accent flex-shrink-0 transition-transform duration-200"
                        style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4">
                        <div className="h-px bg-border/50 mb-3" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ── PROGRAM ── */}
        {activeTab === "program" && (
          <section>
            <h2
              className="text-foreground mb-5"
              style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "1.3rem" }}
            >
              Harmonogram dne
            </h2>
            <div className="relative">
              <div className="absolute left-[3.3rem] top-5 bottom-5 w-px bg-primary/10" />
              <div className="space-y-2">
                {schedule.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 py-1">
                      <div className="w-12 flex-shrink-0 text-right">
                        <span className="text-xs font-medium text-muted-foreground tabular-nums">
                          {item.time}
                        </span>
                      </div>
                      <div
                        className="relative z-10 w-7 h-7 rounded-full bg-card flex items-center justify-center flex-shrink-0"
                        style={{ boxShadow: "0 0 0 2px rgba(196,168,130,0.35), 0 2px 8px rgba(107,58,58,0.1)" }}
                      >
                        <Icon size={13} className="text-accent" />
                      </div>
                      <div
                        className="flex-1 bg-card rounded-xl px-4 py-3"
                        style={cardShadow}
                      >
                        <p className="text-sm font-medium text-foreground">{item.event}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="text-center py-6 px-4">
        <div className="flex items-center justify-center gap-2 mb-1">
          <div className="h-px w-6 bg-accent/30" />
          <Heart size={9} className="text-accent fill-accent" />
          <div className="h-px w-6 bg-accent/30" />
        </div>
        <p className="text-xs text-muted-foreground" style={{ fontStyle: "italic" }}>
          Děkujeme, že budete u toho!
        </p>
      </footer>
    </div>
  );
}
