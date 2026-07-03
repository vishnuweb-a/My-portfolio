import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FileText } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (href: string) => void;
}

export function MobileMenu({ isOpen, onClose, onNavClick }: MobileMenuProps) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-[var(--nav-height)] right-0 bottom-0 z-40 w-72 bg-white border-l border-[var(--color-border)] shadow-[var(--shadow-elevated)] lg:hidden overflow-y-auto"
            initial={reduce ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="p-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => onNavClick(item.href)}
                  className="w-full text-left px-4 py-3 text-base text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] rounded-[var(--radius-sm)] transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                <Button variant="primary" size="md" href="#" className="w-full gap-1.5">
                  <FileText size={16} strokeWidth={2} />
                  Resume
                </Button>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
