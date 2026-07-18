import { AnimatePresence, motion } from "framer-motion";
import SmartNavLink from "@/components/navigation/SmartNavLink";
import Button from "@/components/ui/Button";
import { navigation } from "@/constants/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute left-0 top-full w-full border-t border-slate-200 bg-white shadow-xl md:hidden"
        >
          <div className="flex flex-col gap-6 p-6">
            {navigation.map((item) => (
              <SmartNavLink
                key={item.label}
                label={item.label}
                href={item.href}
                onClick={onClose}
              />
            ))}

            <Button className="w-full">
              Book Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}