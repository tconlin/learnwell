import { Dialog, DialogPanel } from "@headlessui/react";
import { drawerOpenAtom } from "@/store/app";
import { useAtom } from "jotai";
import { FormTypes } from "@/types";
import { CreateVideoForm } from "@/components/video/forms/createVideo";

export const Drawer = ({ formType }: { formType: FormTypes }) => {
  const [drawerOpen, setDrawerOpen] = useAtom(drawerOpenAtom);

  return (
    <Dialog open={drawerOpen} onClose={setDrawerOpen} className="relative z-10">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden bg-black/50">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-2xl transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              {formType == FormTypes.ADD_VIDEO ? <CreateVideoForm /> : null}
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
