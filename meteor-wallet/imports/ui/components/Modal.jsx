import React, { Fragment, useRef } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from "@headlessui/react";

export const Modal = ({ open, setOpen, title, body, footer, errorMessage }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={setOpen}
        initialFocus={cancelButtonRef}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out">
            <DialogTitle
              as="h3"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              {title}
            </DialogTitle>
            <div className="mt-2">
              {errorMessage && (
                <h3 className="text-sm font-medium text-red-800">
                  {errorMessage}
                </h3>
              )}
              {body}
            </div>
            <div className="flex  justify-end mt-4">{footer}</div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};
