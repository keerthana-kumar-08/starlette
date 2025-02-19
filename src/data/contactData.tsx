import { MapPin, Phone, Mail } from "lucide-react";

export const handleWhatsAppRedirect = () => {
  const whatsappNumber = "9488836594";
  window.open(`https://wa.me/${whatsappNumber}`, "_blank");
};

export const contactData = [
  {
    icon: Phone,
    title: "Call Us",
    content: "91 948-883-6594",
    action: handleWhatsAppRedirect,
    actionText: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "contact@example.com",
    action: () => (window.location.href = "mailto:starlettevaluers@gmail.com"),
    actionText: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content:
      "Office No.D, First Floor, SVP Complex, Siddhapudur, Coimbatore, Tamil Nadu 641044",
    action: () =>
      window.open(
        "https://www.google.com/maps?q=11.020191100000002,76.9783619",
        "_blank"
      ),
    actionText: "Get Directions",
  },
];
