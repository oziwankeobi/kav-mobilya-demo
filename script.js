document.getElementById("year")?.append(new Date().getFullYear());

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("quote-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    "Merhaba, Luna Çıtalı Dolap Kapağı (KA-101) için teklif almak istiyorum.",
    `Ölçü: ${data.get("width")} × ${data.get("height")} mm`,
    `Adet: ${data.get("quantity")}`
  ].join("\n");
  const phone = window.WHATSAPP_NUMBER || "";
  if (!phone) {
    alert(`WhatsApp numarası geldiğinde açılacak mesaj:\n\n${message}`);
    return;
  }
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});

document.querySelectorAll(".swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    document.querySelectorAll(".swatch").forEach((item) => {
      item.classList.remove("is-selected");
      item.setAttribute("aria-pressed", "false");
    });
    swatch.classList.add("is-selected");
    swatch.setAttribute("aria-pressed", "true");
  });
});
