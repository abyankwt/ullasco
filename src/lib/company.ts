export const companyAddress =
  "Complex 6659, 2nd Floor, Office 11, Block 11, Mekkah Street, Fahaheel, Ahmadi Gov. 63011, KW";

export const companyMapUrl =
  "https://www.bing.com/maps/search?q=Complex+6659%2C+2nd+Floor%2C+Office+11%2C+Block+11%2C+Mekkah+Street%2C+Fahaheel%2C+Ahmadi+Gov.+63011%2C+KW&cp=29.08424%7E48.13324&lvl=16&style=r";

export const companyMapEmbedUrl =
  "https://www.bing.com/maps/embed?h=420&w=1200&cp=29.08424~48.13324&lvl=17&typ=d&sty=r&src=SHELL&FORM=MBEDV8";

export const companyPhone = "41003264";
export const companyPhoneDisplay = "4100 3264";
export const companyPhoneHref = `tel:${companyPhone}`;
export const companyWhatsAppHref = `https://wa.me/965${companyPhone}`;

export const socialLinks = [
  { label: "Facebook", href: "#", brandClass: "bg-[#1877F2]" },
  {
    label: "Instagram",
    href: "#",
    brandClass:
      "bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_18%,#fd5949_45%,#d6249f_68%,#285AEB_100%)]",
  },
  { label: "LinkedIn", href: "#", brandClass: "bg-[#0A66C2]" },
  { label: "X", href: "#", brandClass: "bg-black" },
] as const;
