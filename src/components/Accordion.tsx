import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import * as React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

import clsxm from '@/lib/clsxm';
import { ExtractProps } from '@/types/helper';

type AccordionProps = {
  title: string;
  className?: string;
} & ExtractProps<typeof Disclosure>;

export default function Accordion({
  title,
  className,
  children,
  ...rest
}: AccordionProps) {
  return (
    <Disclosure as={React.Fragment} {...rest}>
      {({ open }) => (
        <div className={clsxm('py-3 my-3 space-y-3 [&:not(:last-child)]:border-b-2 border-gray-100 bg-transparent', className)}>
          <DisclosureButton className='w-full flex justify-between items-center'>
            <h6
              className={clsxm(
                'transition-all duration-150 text-left font-medium',
                open ? 'text-primary-700' : 'text-black',
              )}
            >
              {title}
            </h6>
            <div className='relative ml-1.5'>
              <IoMdArrowDropdown className={clsxm('transition-all duration-150 w-6 h-6 text-base-primary', !open ? "-rotate-90" : 'rotate-0')} />
            </div>
          </DisclosureButton>

          <Transition
            enterFrom='opacity-0 max-h-0'
            enterTo='opacity-100 max-h-96'
            leaveFrom='opacity-100 max-h-96'
            leaveTo='opacity-0 max-h-0'
          >
            <DisclosurePanel className="transition-all duration-300 overflow-hidden">{children}</DisclosurePanel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}
