import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastContainerProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto bg-[#1F1F1F] text-white p-4 rounded-xl shadow-2xl border border-[#D4A373]/30 flex items-start gap-3 relative overflow-hidden backdrop-blur-md"
          >
            {/* Ambient accent strip */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C87E32]" />

            <div className="mt-0.5 text-[#D4A373] shrink-0">
              {toast.type === 'warning' ? (
                <AlertTriangle className="w-5 h-5 text-amber-400" />
              ) : toast.type === 'info' ? (
                <Info className="w-5 h-5 text-sky-400" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-[#D4A373]" />
              )}
            </div>

            <div className="flex-1 pr-6">
              <h4 className="font-heading font-semibold text-sm text-[#FFF8F2]">{toast.title}</h4>
              <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">{toast.message}</p>
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
