import * as React from 'react';
import { toast, Toaster, ToastOptions } from 'react-hot-toast';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function Toast() {
  return (
    <div>
      <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
          style: {
            borderRadius: '8px',
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}

const DEFAULT_TOAST: ToastOptions = {
  style: {
    background: '#F0F2F5',
    color: '#9AA2B1',
  },
  icon: <RiErrorWarningLine />,
  className: 'w-[375px] [&>div]:justify-start',
  position: 'top-center',
  duration: 5000,
};

const createCustomToast = (options: ToastOptions) => {
  return { ...DEFAULT_TOAST, ...options };
};

const showToast = (message: string, options?: ToastOptions) => {
  toast(message, options || DEFAULT_TOAST);
};

export { createCustomToast, showToast };

const SUCCESS_TOAST = createCustomToast({
  style: {
    background: '#E8F0E0',
    color: '#8AB364',
  },
  icon: <RiErrorWarningLine size={30} />,
  className: 'w-[375px] [&>div]:justify-start',
  position: 'top-center',
  duration: 5000,
});
const DANGER_TOAST = createCustomToast({
  style: {
    background: '#F7DBDB',
    color: '#D84A4D',
  },
  icon: <RiErrorWarningLine size={30} />,
  className: 'w-[375px] [&>div]:justify-start',
  position: 'top-center',
  duration: 5000,
});

const WARNING_TOAST = createCustomToast({
  style: {
    background: '#FFEFCC',
    color: '#FEB100',
  },
  icon: <RiErrorWarningLine size={30} />,
  className: 'w-[375px] [&>div]:justify-start',
  position: 'top-center',
  duration: 5000,
});

export { DANGER_TOAST, SUCCESS_TOAST, WARNING_TOAST };
