import { createPortal } from "react-dom";

interface DialogProps {
  message: string;
  onClose: () => void;
}

const Dialog = ({ message, onClose }: DialogProps) => {
  return createPortal(
    <>
      <div className="w-screen h-screen fixed left-0 top-0 bg-black opacity-40 z-10" />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-none rounded-none min-w-[320px] max-w-[calc(100%-var(--side-padding)*2)] max-h-[calc(100%-var(--side-padding)*2)] z-20">
        <div className="px-[74px] pt-[8px] pb-[40px] mt-[35px]">
          <p className="leading-[var(--line-height-md)] text-center break-keep">
            {message}
          </p>
          <div className="mt-[var(--px-md)] items-center flex justify-center">
            <button
              onClick={onClose}
              className="text-[18px] h-[52px] min-w-[7.5em] bg-white border border-[var(--midnight-900)] cursor-pointer"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal")!
  );
};

export default Dialog;
