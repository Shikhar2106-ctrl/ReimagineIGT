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
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-full w-full border-t border-border bg-surface/95 shadow-xl backdrop-blur-xl lg:hidden"
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

            <Button className="w-full">Book Consultation</Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
