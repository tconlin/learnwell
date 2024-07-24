import { DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { drawerOpenAtom } from "@/store/app";
import { useSetAtom } from "jotai";
import { Button } from "@/components/elements/buttons/action";
import { ButtonTypes } from "@/types";
import { useState } from "react";
import { createVideo } from "@/lib/api/video";
import { USER_ID } from "@/utils/globals";
import Input from "@/components/elements/input/simple";

export const CreateVideoForm = () => {
  const setDrawerOpen = useSetAtom(drawerOpenAtom);
  const [videoName, setVideoName] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [videoDesc, setVideoDesc] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [videoNameEmpty, setVideoNameEmpty] = useState<boolean>(false);
  const [videoUrlEmpty, setVideoUrlEmpty] = useState<boolean>(false);

  async function addVideo() {
    try {
      setIsLoading(true);

      if (videoName === "") {
        setVideoNameEmpty(true);
        return;
      } else {
        setVideoNameEmpty(false);
      }
      if (videoUrl === "") {
        setVideoUrlEmpty(true);
        return;
      } else {
        setVideoUrlEmpty(false);
      }

      await createVideo({
        userId: USER_ID,
        url: videoUrl,
        description: videoDesc,
        title: videoName,
      });
      setDrawerOpen(false);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
      <div className="flex-1">
        <div className="bg-gray-50 px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between space-x-3">
            <div className="space-y-1">
              <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                New video
              </DialogTitle>
              <p className="text-sm text-gray-500">
                Fill in the information below to create your new video.
              </p>
            </div>
            <div className="flex h-7 items-center">
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="relative text-gray-400 hover:text-gray-500"
              >
                <span className="absolute -inset-2.5" />
                <span className="sr-only">Close panel</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
          <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
            <div>
              <label
                htmlFor="video-name"
                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
              >
                Video name
              </label>
            </div>
            <div className="sm:col-span-2">
              <Input
                value={videoName}
                onChange={setVideoName}
                placeholder="Best Video Ever"
                maxLength={72}
                error={videoNameEmpty}
                errorText="Video name cannot be blank"
              />
            </div>
          </div>

          <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
            <div>
              <label
                htmlFor="video-url"
                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
              >
                Video url
              </label>
            </div>
            <div className="sm:col-span-2">
              <Input
                value={videoUrl}
                onChange={setVideoUrl}
                placeholder="https://www.youtube.com/watch?v=g_iVpyypBcY"
                error={videoUrlEmpty}
                errorText="Video url cannot be blank"
              />
            </div>
          </div>

          <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
            <div>
              <label
                htmlFor="video-description"
                className="block text-sm font-medium leading-6 text-gray-900 sm:mt-1.5"
              >
                Description
              </label>
            </div>
            <div className="sm:col-span-2">
              <textarea
                id="video-description"
                name="video-description"
                value={videoDesc}
                onChange={(e) => setVideoDesc(e.target.value)}
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="flex justify-end space-x-3">
          <Button
            text="Cancel"
            buttonType={ButtonTypes.SECONDARY}
            onClick={() => setDrawerOpen(false)}
          />

          <Button
            text="Create"
            buttonType={ButtonTypes.PRIMARY}
            isLoading={isLoading}
            disabled={isLoading}
            onClick={addVideo}
          />
        </div>
      </div>
    </div>
  );
};
