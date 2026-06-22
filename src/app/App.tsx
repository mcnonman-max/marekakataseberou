import { useState, useEffect } from "react";
import logoKM from "../imports/logo_km-1.png";
import headerPhoto from "../imports/Sni_mek_obrazovky_2026-06-15_v_15.09.03.png";
import barnNightPhoto from "../imports/Sni_mek_obrazovky_2026-06-15_v_12.08.39.png";
import couplePhoto from "../imports/IMG_0234_1.png";
import ringsIcon from "../imports/rings.svg";
import { MapPin, Clock, Calendar, ChevronRight, Heart, Utensils, Music, Phone, ChevronDown, ArrowLeft, Shirt, Users, BookOpen } from "lucide-react";

const RingIcon = ({ size = 13 }: { size?: number; color?: string }) => (
  <img src={ringsIcon} width={size} height={size} alt="" />
);

const schedule = [
  { time: "12:00", event: "Příjezd hostů", icon: Users },
  { time: "13:00", event: "Obřad", icon: RingIcon },
  { time: "14:50", event: "Slavnostní oběd", icon: Utensils },
  { time: "16:00", event: "Krájení dortu", icon: Utensils },
  { time: "16:30", event: "Grilovačka", icon: Utensils },
  { time: "18:00", event: "První tanec", icon: Heart },
  { time: "21:00", event: "Tanec s prskavkami", icon: Music },
];

const faqs = [
  { q: "Kde se mohu ubytovat?", a: "Ubytování v první řadě zajišťujeme pro rodinu. Ostatním hostům budou k dispozici dvě možnosti – přespání ve stanu přímo v areálu, případně ubytování v nedalekém penzionu vzdáleném přibližně 15 minut jízdy.\n\nUbytování v penzionu je na vlastní náklady. Přesné informace a adresu doplníme později." },
  { q: "Je na místě parkování?", a: "Ano, přímo u areálu Stodoly Borohrádek je parkoviště s kapacitou cca 80 míst. Někam to narveme :-)" },
  { q: "Jak se dostat na místo?", a: "Přímé spojení veřejnou dopravou bohužel není k dispozici, proto doporučujeme přijet autem. Parkování je zajištěno přímo u areálu." },
  { q: "Mohu přivést děti?", a: "I když děti máme moc rádi, z kapacitních důvodů jsme se rozhodli oslavit tento den v dospělé společnosti. Budeme rádi, pokud si na tuto příležitost zajistíte hlídání a užijete si den bez rodičovských povinností.\n\nU nejmenších dětí však chápeme, že situace může být jiná. Pokud máte miminko do dvou let, které s vámi běžně cestuje nebo je ještě kojené, je možné jej po předchozí domluvě vzít s sebou. Prosíme jen o informaci předem. Dětské menu ani židličky bohužel nebudou k dispozici." },
  { q: "Svatební dary?", a: "Vaše přítomnost je pro nás tím největším darem. Pokud byste nám přesto chtěli něco věnovat, budeme velmi rádi za příspěvek na naši svatební cestu. Náš domov už je vybavený, ale společných zážitků není nikdy dost. 🌍" },
  { q: "Kdy začíná program?", a: "Prosíme, dorazte mezi 11:30 a 12:00. Obřad začíná přesně ve 13:00 a budeme rádi, pokud budete mít dostatek času na pohodlný příchod, přivítání a usazení." },
  { q: "Jaké boty si mám vzít?", a: "Výběr obuvi necháme na vás, ale doporučujeme počítat s tím, že část dne strávíme venku.\n\nK obřadnímu místu vede zpevněná cesta, uvnitř stodoly je dlažba a před stodolou betonová plocha. Samotný obřad však proběhne v zeleni a v areálu je také dost travnatých ploch.\n\nPokud tedy přemýšlíte nad jehlovými podpatky, možná se bude hodit náhradní plán. 😊" },
  { q: "Mohu si přivést doprovod?", a: "Jsme šťastní, že máme kolem sebe tolik skvělých lidí. Kapacita místa je však omezená, a proto vás prosíme, abyste respektovali osoby uvedené na pozvánce.\n\nPozvánka platí pouze pro ty, kterým byla adresována. Děkujeme za pochopení. ❤️" },
  { q: "Mohu přivézt zvíře?", a: "Bohužel ne. Místo konání přítomnost zvířat neumožňuje, proto prosíme, nechte své chlupaté parťáky tentokrát doma. 🐾" },
  { q: "Jak to bude s jídlem a pitím?", a: "Pohoštění i nápoje budou po celý den zajištěny pro všechny hosty.\n\nSpolečně zasedneme ke svatební tabuli, ale protože víme, že každý má rád něco jiného, rozhodli jsme se pro formu rautu. Díky tomu si každý bude moci vybrat přesně to, na co má chuť.\n\nAž se den přehoupne do večerních hodin, rozpálíme gril a přidáme další dobroty. Co přesně vás čeká, si zatím necháme jako malé překvapení. 🥂\n\nHlad ani žízeň rozhodně nehrozí." },
  { q: "Jak dlouho bude oslava trvat?", a: "Po obřadu nás čeká společné odpoledne, večerní program i pořádná oslava.\n\nKonec necháváme otevřený – budeme rádi, když s námi vydržíte co nejdéle a pomůžete nám vytvořit vzpomínky, na které budeme ještě dlouho vzpomínat. 🥂" },
  { q: "Dress code – Toskánská elegance", a: "Představte si pozdní léto v Toskánsku. Teplé barvy, dlouhé stoly, sklenku vína v ruce a atmosféru, která si na nic nehraje, a přesto je výjimečná.\n\nNaše svatba se ponese právě v tomto duchu – elegantně, uvolněně a s radostí. Budeme moc rádi, pokud se při výběru svého outfitu necháte inspirovat barevnou paletou svatby: Ganache, Mulberry, Bordeaux a Taupe. 🎨\n\nDámy, prosíme, ponechte odstíny bílé, ivory, champagne a krémové nevěstě.\n\nPánové, budeme rádi za oblek nebo kombinaci saka a společenských kalhot. Představte si spíše elegantní italskou oslavu než běžnou letní zahradní párty. 🍷\n\nNejdůležitější ale je, abyste se cítili dobře. Krásně oblečené hosty máme rádi, ale usměvavé ještě o něco víc." },
];

const contacts = [
  { role: "Ženich", name: "Marek Čehovský", tel: "+420 721 573 785" },
  { role: "Nevěsta", name: "Kateřina Karpíšková", tel: "+420 608 916 651" },
  { role: "Koordinátorka", name: "", tel: "+420 725 855 172", note: "V den svatby se prosím obracejte na naši koordinátorku" },
];

type Tab = "prehled" | "program";

// Liquid glass card style
const glass = {
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 4px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
} as React.CSSProperties;

const glassStrong = {
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(30px)",
  WebkitBackdropFilter: "blur(30px)",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
} as React.CSSProperties;

export default function App() {
  useEffect(() => {
    document.title = "Svatba Mára & Kačka";

    const img = new Image();
    img.src = logoKM;
    img.onload = () => {
      // Standardní ikona — tmavé pozadí appky + logo (pro iOS a Android any)
      const generateStandard = (size: number, radius: number, pad: number) => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = "#1a0e12";
        ctx.beginPath();
        ctx.roundRect(0, 0, size, size, radius);
        ctx.fill();
        ctx.drawImage(img, pad, pad, size - pad * 2, size - pad * 2);
        return canvas.toDataURL("image/png");
      };

      // Maskable ikona pro Android — bez zaoblení, logo v bezpečné zóně (80%)
      const generateMaskable = (size: number) => {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d")!;
        ctx.fillStyle = "#1a0e12";
        ctx.fillRect(0, 0, size, size);
        // Bezpečná zóna = vnitřních 80% → padding = 10%
        const pad = size * 0.18;
        ctx.drawImage(img, pad, pad, size - pad * 2, size - pad * 2);
        return canvas.toDataURL("image/png");
      };

      // iOS velikosti
      const icon120 = generateStandard(120, 26, 14);
      const icon152 = generateStandard(152, 32, 18);
      const icon167 = generateStandard(167, 36, 20);
      const icon180 = generateStandard(180, 38, 22);

      // Android velikosti
      const icon192 = generateStandard(192, 40, 23);
      const icon512 = generateStandard(512, 100, 60);
      const icon512m = generateMaskable(512);

      // Favicon
      const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement
        || Object.assign(document.createElement("link"), { rel: "icon" });
      favicon.type = "image/png";
      favicon.href = icon192;
      document.head.appendChild(favicon);

      // iOS Apple Touch ikony
      [
        { href: icon180, sizes: "180x180" },
        { href: icon167, sizes: "167x167" },
        { href: icon152, sizes: "152x152" },
        { href: icon120, sizes: "120x120" },
      ].forEach(({ href, sizes }) => {
        const link = Object.assign(document.createElement("link"), {
          rel: "apple-touch-icon",
          href,
        });
        link.setAttribute("sizes", sizes);
        document.head.appendChild(link);
      });

      // iOS status bar
      const metaStatusBar = Object.assign(document.createElement("meta"), {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      });
      const metaCapable = Object.assign(document.createElement("meta"), {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      });
      const metaTitle = Object.assign(document.createElement("meta"), {
        name: "apple-mobile-web-app-title",
        content: "Svatba M&K",
      });
      document.head.append(metaStatusBar, metaCapable, metaTitle);

      // PWA Manifest (Android + Chrome)
      const manifest = {
        name: "Svatba Mára & Kačka",
        short_name: "Svatba M&K",
        start_url: "/",
        display: "standalone",
        background_color: "#1a0e12",
        theme_color: "#1a0e12",
        icons: [
          { src: icon192, sizes: "192x192", type: "image/png", purpose: "any" },
          { src: icon512, sizes: "512x512", type: "image/png", purpose: "any" },
          { src: icon512m, sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
      };
      const blob = new Blob([JSON.stringify(manifest)], { type: "application/json" });
      const manifestLink = Object.assign(document.createElement("link"), {
        rel: "manifest",
        href: URL.createObjectURL(blob),
      });
      document.head.appendChild(manifestLink);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [activeTab, setActiveTab] = useState<Tab>("prehled");
  const [expandedColor, setExpandedColor] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showContacts, setShowContacts] = useState(false);

  const days = Math.ceil((new Date("2026-09-15").getTime() - Date.now()) / 86400000);
  const [showCalPicker, setShowCalPicker] = useState(false);

  const downloadICS = () => {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Svatba MK//CS",
      "BEGIN:VEVENT",
      "DTSTART:20260915T120000",
      "DTEND:20260915T230000",
      "SUMMARY:Svatba Mára & Kačka",
      "LOCATION:Stodola Borohrádek\\, Husova 225\\, 517 24 Borohrádek",
      "DESCRIPTION:Svatba Mára & Kateřiny",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "svatba-mara-kacka.ics";
    a.click();
    URL.revokeObjectURL(url);
    setShowCalPicker(false);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ fontFamily: "'Nunito', sans-serif", background: "#1a0e12" }}>

      {/* Background — foto stodoly jako ambient backdrop */}
      <div className="fixed inset-0 z-0">
        <img src={headerPhoto} alt="" aria-hidden className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(107,58,58,0.35) 0%, rgba(26,14,18,0.55) 50%, rgba(110,45,58,0.3) 100%)" }} />
        {/* Ambient blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #6B3A3A, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-15" style={{ background: "radial-gradient(circle, #C4A882, transparent 70%)" }} />
      </div>

      {/* Contacts overlay */}
      {showContacts && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ background: "rgba(26,14,18,0.97)", backdropFilter: "blur(30px)" }}>
          <div className="px-5 pt-12 pb-6">
            <button onClick={() => setShowContacts(false)} className="flex items-center gap-2 text-white/60 hover:text-white mb-5 transition-colors">
              <ArrowLeft size={18} />
              <span className="text-sm">Zpět</span>
            </button>
            <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 400, fontSize: "1.7rem", color: "#f5ede8" }}>
              Důležité kontakty
            </h1>
            <h3 className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(245,237,232,0.55)", fontWeight: 400 }}>
              Máte otázku nebo potřebujete něco vyřešit? Jsme vám k dispozici.
            </h3>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 max-w-lg mx-auto w-full pb-10">
            {contacts.map((c) => (
              <div key={c.role} className="rounded-2xl p-4 flex items-center justify-between gap-4" style={glassStrong}>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(196,168,130,0.7)" }}>{c.role}</p>
                  {c.note && (
                    <p className="text-xs mb-1 leading-snug" style={{ color: "rgba(245,237,232,0.5)" }}>{c.note}</p>
                  )}
                  {c.name && (
                    <p className="mb-0.5" style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "1rem", color: "#f5ede8" }}>{c.name}</p>
                  )}
                  <a href={`tel:${c.tel.replace(/\s/g, "")}`} className="text-sm tabular-nums transition-colors" style={{ color: "#C4A882" }}>
                    {c.tel}
                  </a>
                </div>
                <a
                  href={`tel:${c.tel.replace(/\s/g, "")}`}
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ background: "rgba(196,168,130,0.2)", border: "1px solid rgba(196,168,130,0.3)" }}
                >
                  <Phone size={16} style={{ color: "#C4A882" }} />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 text-center px-6 pt-14 pb-10">
        <img
          src={logoKM}
          alt="Káta & Marek"
          className="mx-auto mb-5"
          style={{
            width: "200px",
            height: "auto",
            filter: "brightness(2.5) contrast(1.1) drop-shadow(0 0 12px rgba(255,240,210,0.9)) drop-shadow(0 0 30px rgba(196,168,130,0.8)) drop-shadow(0 0 60px rgba(196,168,130,0.4))",
          }}
        />
        <p className="text-xs mb-5" style={{ color: "rgba(245,237,232,0.45)", letterSpacing: "0.28em", textTransform: "uppercase" }}>
          15. 09. 2026
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(10px)" }}>
          <Calendar size={11} style={{ color: "#C4A882" }} />
          <span className="text-xs font-light tracking-widest" style={{ color: "rgba(245,237,232,0.6)" }}>
            {days > 0 ? `${days} dní do svatby` : days === 0 ? "Dnes je ten den!" : "Právě jsme oddáni ♥"}
          </span>
        </div>
      </header>

      {/* Scroll header — zobrazí se až při scrollu */}
      <header
        className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 py-2 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(26,14,18,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(26,14,18,0.25)" : "none",
          pointerEvents: scrolled ? "auto" : "none",
          opacity: scrolled ? 1 : 0,
        }}
      >
        {/* Logo */}
        <img
          src={logoKM}
          alt="Káta & Marek"
          style={{
            height: "36px",
            width: "auto",
            filter: "brightness(2.5) contrast(1.1) drop-shadow(0 0 8px rgba(196,168,130,0.6))",
          }}
        />
      </header>

      {/* Přepínač nad obsahem */}
      <div className="relative z-10 flex justify-center px-4 pt-2 pb-1">
        <div className="flex rounded-full p-1 relative" style={{ background: "rgba(46,20,20,0.45)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
          {(["prehled", "program"] as Tab[]).map((tab) => {
            const labels: Record<Tab, string> = { prehled: "Přehled", program: "Harmonogram" };
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 z-10"
                style={{
                  background: active ? "rgba(255,255,255,0.22)" : "transparent",
                  color: active ? "#ffffff" : "rgba(255,255,255,0.55)",
                  boxShadow: active ? "0 2px 16px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.35)" : "none",
                  backdropFilter: active ? "blur(16px)" : "none",
                  WebkitBackdropFilter: active ? "blur(16px)" : "none",
                  border: active ? "1px solid rgba(255,255,255,0.3)" : "1px solid transparent",
                }}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <main className="relative z-10 max-w-lg md:max-w-4xl mx-auto px-4 py-4 space-y-4 pb-16">

        {/* ── PŘEHLED ── */}
        {activeTab === "prehled" && (
          <>
            <div className="md:grid md:grid-cols-2 md:gap-4 space-y-4 md:space-y-0">
              {/* Levý sloupec: Uvítací karta */}
              <div>
            {/* Uvítací karta */}
            <section className="rounded-3xl overflow-hidden" style={glassStrong}>
              <div className="relative h-60">
                <img src={couplePhoto} alt="Kačka a Marek" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,14,18,0.95) 0%, rgba(26,14,18,0.1) 50%, transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-8" style={{ background: "rgba(196,168,130,0.4)" }} />
                    <Heart size={10} style={{ color: "#C4A882", fill: "#C4A882" }} />
                    <div className="h-px w-8" style={{ background: "rgba(196,168,130,0.4)" }} />
                  </div>
                </div>
              </div>
              <div className="px-5 pt-3 pb-6 text-center">

                <p className="mb-4 leading-snug" style={{ fontFamily: "'Lora', serif", fontStyle: "italic", fontSize: "1rem", color: "#f5ede8" }}>
                  „Někteří lidé jsou pro sebe stvořeni. Jen jim to chvíli trvá, než na to přijdou."
                </p>
                <div className="text-sm leading-relaxed space-y-3 text-left" style={{ color: "rgba(245,237,232,0.7)" }}>
                  <p>Poznali jsme se jako puberťáci. Potom nás život na čas zavedl každého jiným směrem, aby nás po letech znovu přivedl k sobě. A právě teď jsme tady – připraveni říct si své ANO.</p>
                  <p>Moc si vážíme toho, že tento výjimečný den budete sdílet právě s námi.</p>
                  <p>Otevíráme novou kapitolu našeho příběhu a nemohli bychom si přát lepší společnost než lidi, které máme rádi. Připravili jsme pro vás tento web, abyste zde našli všechny důležité informace na jednom místě a v den svatby se mohli soustředit jen na jediné – užít si ho společně s námi.</p>
                  <p>Těšíme se na vás. ❤️</p>
                </div>
                <p className="mt-4 font-medium" style={{ fontFamily: "'Lora', serif", fontStyle: "italic", color: "#f5ede8" }}>Káťa & Marek</p>
              </div>
            </section>
              </div>{/* end left col */}

              {/* Pravý sloupec: Kdy a kde */}
              <div className="md:flex md:flex-col md:h-full">
            {/* Kdy a kde */}
            <section className="md:flex md:flex-col md:flex-1">
              <div className="rounded-3xl overflow-hidden md:flex md:flex-col md:h-full" style={glassStrong}>
                <div className="relative md:flex-1" style={{ minHeight: "11rem" }}>
                  <img src={barnNightPhoto} alt="Stodola Borohrádek" className="w-full h-full object-cover absolute inset-0" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,14,18,0.8) 0%, transparent 60%)" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,14,18,0.92) 0%, transparent 50%)" }} />
                  <div className="absolute top-0 left-0 p-4">
                    <p className="text-base uppercase tracking-widest font-bold" style={{ color: "#ffffff", letterSpacing: "0.18em", textShadow: "0 1px 8px rgba(0,0,0,0.6)", fontSize: "0.875rem" }}>Kdy a kde</p>
                  </div>
                  <div className="absolute bottom-0 left-0 p-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", color: "#f5ede8" }}>
                      <MapPin size={11} style={{ color: "#C4A882" }} />
                      Borohrádek
                    </span>
                  </div>
                </div>

                <div className="px-4 pt-4 pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <h2 className="mb-0.5" style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "1.15rem", color: "#f5ede8" }}>Stodola Borohrádek</h2>
                  <p className="text-sm mb-3" style={{ color: "rgba(245,237,232,0.5)" }}>Husova 225, 517 24 Borohrádek · Královéhradecký kraj</p>
                  <a
                    href="https://www.google.com/maps/place/Stodola+Borohr%C3%A1dek/@50.0963618,16.0760467,17z/data=!3m1!4b1!4m6!3m5!1s0x470ddb4fc8d70855:0x6786c639ae2150b!8m2!3d50.0963618!4d16.078627!16s%2Fg%2F11s69szkw7?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: "#C4A882" }}
                  >
                    Zobrazit na mapě <ChevronRight size={14} />
                  </a>
                </div>

                <div className="grid grid-cols-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="px-4 py-3 flex items-center gap-3" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                    <Calendar size={18} style={{ color: "#C4A882", flexShrink: 0 }} />
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(245,237,232,0.4)" }}>Datum</p>
                      <p className="text-sm font-medium" style={{ color: "#f5ede8" }}>15. září 2026</p>
                    </div>
                  </div>
                  <div className="px-4 py-3 flex items-center gap-3">
                    <Clock size={18} style={{ color: "#C4A882", flexShrink: 0 }} />
                    <div>
                      <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(245,237,232,0.4)" }}>Začátek</p>
                      <p className="text-sm font-medium" style={{ color: "#f5ede8" }}>12:00 hod.</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <button
                    onClick={() => setShowCalPicker(!showCalPicker)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 transition-opacity hover:opacity-70"
                  >
                    <Calendar size={14} style={{ color: "#C4A882" }} />
                    <span className="text-sm font-medium" style={{ color: "#C4A882" }}>Přidat do kalendáře</span>
                    <ChevronDown size={13} style={{ color: "#C4A882", transform: showCalPicker ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                  </button>
                  {showCalPicker && (
                    <div className="mx-3 mb-3 rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <a
                        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Svatba+M%C3%A1ra+%26+Ka%C4%8Dka&dates=20260915T100000Z%2F20260915T210000Z&location=Stodola+Borohr%C3%A1dek%2C+Husova+225%2C+517+24+Borohr%C3%A1dek&details=Svatba+M%C3%A1ra+%26+Ka%C4%8Dky"
                        target="_blank" rel="noopener noreferrer"
                        onClick={() => setShowCalPicker(false)}
                        className="flex items-center gap-3 px-4 py-3 transition-opacity hover:opacity-70"
                        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
                      >
                        <span className="text-lg">📅</span>
                        <span className="text-sm font-medium" style={{ color: "#f5ede8" }}>Google Kalendář</span>
                      </a>
                      <button
                        onClick={downloadICS}
                        className="w-full flex items-center gap-3 px-4 py-3 transition-opacity hover:opacity-70"
                      >
                        <span className="text-lg">🍎</span>
                        <span className="text-sm font-medium" style={{ color: "#f5ede8" }}>Apple Kalendář (.ics)</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
              </div>{/* end right col */}
            </div>{/* end top 2-col grid */}

            {/* Dress code */}
            <section className="rounded-3xl p-5" style={glass}>
              <div className="flex items-center gap-2 mb-3">
                <Shirt size={20} style={{ color: "#C4A882" }} />
              </div>
              <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(196,168,130,0.6)" }}>Dress code</p>
              <h3 className="mb-1" style={{ fontFamily: "'Lora', serif", fontWeight: 500, fontSize: "1.1rem", color: "#f5ede8" }}>
                Formální & semi-formální
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(245,237,232,0.55)" }}>
                Prosíme hosty o elegantní oblečení. Bílá a jí podobné barvy jsou rezervovány pro nevěstu.
              </p>
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "rgba(196,168,130,0.5)" }}>Inspirace barvami</p>
              <div className="flex items-end gap-3 flex-nowrap">
                {[
                  { hex: "#4B3328", name: "Ganache" },
                  { hex: "#733D43", name: "Mulberry" },
                  { hex: "#7B1E0A", name: "Bordeaux" },
                  { hex: "#C0A79A", name: "Taupe" },
                ].map((c) => (
                  <div key={c.hex} className="flex flex-col items-center gap-1.5" style={{ position: "relative", zIndex: expandedColor === c.hex ? 10 : 1 }}>
                    <div
                      onClick={() => setExpandedColor(expandedColor === c.hex ? null : c.hex)}
                      className="rounded-full cursor-pointer"
                      style={{
                        backgroundColor: c.hex,
                        boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                        width: expandedColor === c.hex ? "120px" : "40px",
                        height: expandedColor === c.hex ? "120px" : "40px",
                        transition: "width 0.3s ease, height 0.3s ease",
                      }}
                    />
                    <span className="text-xs" style={{ color: "rgba(245,237,232,0.45)" }}>{c.name}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  const idx = faqs.findIndex(f => f.q.includes("Toskánská elegance"));
                  setOpenFaq(idx);
                  setTimeout(() => document.getElementById("faq-item-" + idx)?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
                }}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "#C4A882" }}
              >
                Více informací <ChevronRight size={14} />
              </button>
            </section>

            {/* Info karty */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl p-4" style={glass}>
                <Utensils size={20} className="mb-2" style={{ color: "#C4A882" }} />
                <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(245,237,232,0.4)" }}>Pohoštění</p>
                <p className="text-sm font-medium" style={{ color: "#f5ede8" }}>Formou rautu</p>
              </div>
              <div className="rounded-2xl p-4 cursor-pointer transition-opacity hover:opacity-80" style={glass} onClick={() => setShowContacts(true)}>
                <Phone size={20} className="mb-2" style={{ color: "#C4A882" }} />
                <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: "rgba(245,237,232,0.4)" }}>Důležité kontakty</p>
                <p className="text-sm font-medium flex items-center gap-1" style={{ color: "#C4A882" }}>
                  Zobrazit <ChevronRight size={13} />
                </p>
              </div>
            </div>

            {/* Facebook */}
            <section className="rounded-3xl p-5" style={glass}>
              <div className="flex items-center gap-2 mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#C4A882" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                <p className="text-xs uppercase tracking-widest" style={{ color: "#ffffff", letterSpacing: "0.18em" }}>Sledujte novinky</p>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(245,237,232,0.7)" }}>
                Přidejte se k naší události na Facebooku, kde budeme průběžně sdílet novinky, důležité informace a případné aktualizace. 📲
              </p>
              <p className="text-sm" style={{ color: "rgba(196,168,130,0.7)" }}>👉 Odkaz doplníme brzy.</p>
            </section>

            {/* Náš příběh */}
            <section className="rounded-3xl p-5" style={glass}>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={18} style={{ color: "#C4A882" }} />
                <p className="text-xs uppercase tracking-widest" style={{ color: "#ffffff", letterSpacing: "0.18em" }}>Náš příběh</p>
              </div>
              <div className="text-sm leading-relaxed space-y-3" style={{ color: "rgba(245,237,232,0.7)" }}>
                <p>Někdy máme pocit, že jsme spolu teprve chvíli, a přitom už za námi stojí téměř sedm společných let. Sedmička je přece šťastné číslo – a každý další rok byl pro nás krásnější než ten předchozí.</p>
                <p>Rádi cestujeme a objevujeme svět – v letadle, pod vodou i na pevnině. Káťa má občas hlavu v oblacích a Marek je ten, kdo ji s láskou vrací zpátky na zem. Oba máme na věci své názory a málokdy se jich vzdáváme, takže o zajímavé debaty ani zábavu u nás nikdy není nouze.</p>
                <p>Důležitou součástí našeho života je také naše chlupatá parťačka Lilly. Ta už dávno rozhodla, že nám to spolu funguje – a její verdikt bereme velmi vážně. 🐾</p>
                <p>Zasnoubili jsme se v srpnu 2024 v Miláně a o něco více než rok později si řekneme své ANO. Káťa by vám řekla, že na ty nejlepší věci se vyplatí počkat. A my jsme moc rádi, že tento okamžik budete prožívat s námi. ❤️</p>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <p className="text-xs uppercase tracking-widest mb-3 px-1" style={{ color: "#ffffff", letterSpacing: "0.18em" }}>Časté dotazy</p>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} id={"faq-item-" + i} className="rounded-2xl overflow-hidden" style={glass}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-left gap-3"
                    >
                      <span className="text-sm font-medium" style={{ color: "#f5ede8" }}>{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className="flex-shrink-0 transition-transform duration-200"
                        style={{ color: "#C4A882", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4">
                        <div className="h-px mb-3" style={{ background: "rgba(255,255,255,0.08)" }} />
                        <div className="text-sm leading-relaxed space-y-2" style={{ color: "rgba(245,237,232,0.55)" }}>
                          {faq.a.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ── HARMONOGRAM ── */}
        {activeTab === "program" && (
          <section>
            <p className="text-xs uppercase tracking-widest mb-5 px-1" style={{ color: "#ffffff", letterSpacing: "0.18em" }}>Harmonogram dne</p>
            <div className="relative">
              <div className="absolute left-[3.3rem] top-5 bottom-5 w-px" style={{ background: "rgba(196,168,130,0.15)" }} />
              <div className="space-y-2">
                {schedule.map((item, i) => {
                  const Icon = item.icon;
                  const obradIdx = schedule.findIndex(s => s.event === "Obřad");
                  const blurred = i > obradIdx;
                  return (
                    <div key={i}>
                      {i === obradIdx + 1 && (
                        <p className="text-base mb-3 mt-1 px-1 font-medium" style={{ color: "#ffffff", fontStyle: "italic" }}>Brzy bude doplněno</p>
                      )}
                      <div className="flex items-center gap-3 py-1" style={blurred ? { filter: "blur(4px)", userSelect: "none", pointerEvents: "none" } : {}}>
                        <div className="w-12 flex-shrink-0 text-right">
                          <span className="text-xs font-medium tabular-nums" style={{ color: "#ffffff" }}>{item.time}</span>
                        </div>
                        <div className="relative z-10 w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(196,168,130,0.15)", border: "1px solid rgba(196,168,130,0.3)", backdropFilter: "blur(10px)" }}>
                          <Icon size={13} style={{ color: "#C4A882" }} />
                        </div>
                        <div className="flex-1 rounded-xl px-4 py-3" style={glass}>
                          <p className="text-sm font-medium" style={{ color: "#f5ede8" }}>{item.event}</p>
                        </div>
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
      <footer className="relative z-10 text-center py-6 px-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-px w-6" style={{ background: "rgba(196,168,130,0.25)" }} />
          <Heart size={9} style={{ color: "#C4A882", fill: "#C4A882" }} />
          <div className="h-px w-6" style={{ background: "rgba(196,168,130,0.25)" }} />
        </div>
        <p className="text-xs" style={{ fontStyle: "italic", color: "rgba(245,237,232,0.35)" }}>
          Děkujeme, že budete u toho!
        </p>
      </footer>
    </div>
  );
}
