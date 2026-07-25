
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface ProductCardProps {
  title:string;
  description:string;
  features:string[];
  icon:LucideIcon;
  image:string;
}

export default function ProductCard({
  title,
  description,
  features,
  image,
}:ProductCardProps){
  return(
    <Card
      hover
      className="
        group
        relative
        overflow-hidden
        rounded-[30px]
        border
        border-[#E5E7EB]
        bg-[#FCFCFD]
        p-0
        shadow-[0_20px_50px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#10B981]
        hover:shadow-[0_28px_70px_rgba(16,185,129,0.18)]
    "
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#D1FAE5] opacity-60 blur-3xl transition duration-700 group-hover:scale-125" />
      </div>
      <div className="aspect-16/10 overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white">
        <div className="bg-gradient-to-b from-[#F8FAFC] to-white p-6">
  <div className="overflow-hidden rounded-[24px] bg-[#F3F6F8] shadow-md">
    <img
      src={image}
      alt={title}
      className="
        h-full
        w-full
        object-cover
        transition-all
        duration-700
        group-hover:scale-105
      "
    />
  </div>
</div>
      </div>

      <div className="p-7">
        <h3 className="text-[30px] font-bold tracking-tight text-[#0F172A]">
          {title}
        </h3>

        <p className="mt-4 text-[16px] leading-8 text-[#64748B]">
          {description}
        </p>

        <ul className="mt-6 space-y-3 border-t border-[#E5E7EB] pt-5">
          {features.map((feature)=>(
            <li key={feature} className="flex items-center gap-3">
              <CheckCircle2 size={18} className="text-[#10B981]"/>
              <span className="font-medium text-[#334155]">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant="ghost"
          className="
            mt-8
            h-auto
            px-0
            font-semibold
            text-[#059669]
            hover:bg-transparent
            hover:text-[#047857]
            "
        >
          Learn More
          <ArrowRight
            size={18}
            className="ml-2 transition group-hover:translate-x-1"
          />
        </Button>
      </div>
    </Card>
  )
}






// import type { LucideIcon } from "lucide-react";
// import { ArrowRight, CheckCircle2 } from "lucide-react";

// import Button from "@/components/ui/Button";
// import Card from "@/components/ui/Card";

// interface ProductCardProps {
//   title: string;
//   description: string;
//   features: string[];
//   icon: LucideIcon;
// }

// export default function ProductCard({
//   title,
//   description,
//   features,
//   icon: Icon,
// }: ProductCardProps) {
//   return (
//     <Card
//       hover
//       className="group relative h-full min-h-[26rem] overflow-hidden border-border-subtle bg-surface-card p-0 shadow-[0_20px_50px_rgb(0_0_0/0.18)] transition-all duration-500 hover:-translate-y-3 hover:border-accent/60 hover:shadow-[0_30px_70px_rgb(0_229_255/0.14)]"
//     >
//       <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition duration-700 group-hover:scale-150 group-hover:bg-brand/30" />
//       <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

//       <div className="relative flex h-full flex-col p-7 sm:p-9">
//         <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand-light shadow-inner shadow-brand/10 transition duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-accent/60 group-hover:bg-accent group-hover:text-surface">
//           <Icon size={32} />
//         </div>

//         <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Product</p>

//         <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary sm:text-[1.75rem]">{title}</h3>

//         <p className="mt-4 leading-7 text-text-secondary">{description}</p>

//         <ul className="mt-7 space-y-3 border-t border-border/80 pt-6">
//           {features.map((feature) => (
//             <li key={feature} className="flex items-center gap-3">
//               <CheckCircle2 size={18} className="text-brand-light" />
//               <span className="text-text-secondary">{feature}</span>
//             </li>
//           ))}
//         </ul>

//         <Button className="mt-auto h-auto justify-start self-start px-0 pt-9 text-text-primary hover:bg-transparent hover:text-accent" variant="ghost">
//           Learn more

//           <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
//         </Button>
//       </div>
//     </Card>
//   );
// }
