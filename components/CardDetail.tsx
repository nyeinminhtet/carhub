"use client";

import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";
import { Fragment } from "react";
import { generateCarImages } from "@/utils";

interface CarDetailProps {
  car: CarProps;
  isOpen: boolean;
  close: () => void;
}

const CardDetail = ({ car, isOpen, close }: CarDetailProps) => {
  return (
    <>
      <Transition as={Fragment} appear show={isOpen}>
        <Dialog as="div" className=" relative z-10" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className=" fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className=" fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full justify-center items-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg max-h-[90vh]
                 overflow-y-auto transform rounded-2xl bg-white
                 text-left shadow-xl translate-all flex flex-col gap-5"
                >
                  <button
                    type="button"
                    onClick={close}
                    className=" absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className=" object-contain"
                    />
                  </button>

                  <div className="flex flex-1 flex-col gap-3">
                    <div className=" relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src={generateCarImages(car)}
                        fill
                        priority
                        alt="car model"
                        className=" object-contain"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImages(car, "29")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImages(car, "33")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                          src={generateCarImages(car, "13")}
                          alt="car model"
                          fill
                          priority
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CardDetail;
