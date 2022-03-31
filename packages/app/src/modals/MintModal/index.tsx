import React from "react";
import { Close } from "@mui/icons-material";
import Modal from "../../components/Modal/MintModal";
import { ApplicationModal } from "../../state/application/actions";
import {
  useMintModalToggle,
  useModalOpen,
} from "../../state/application/hooks";

interface MintModalProps {
  numOfNft: number;
}

const MintModal: React.FC<MintModalProps> = ({ numOfNft }) => {
  const mintModal = useModalOpen(ApplicationModal.MINT);
  const toggleMintModal = useMintModalToggle();

  return (
    <Modal
      backgroundColor="black"
      isOpen={mintModal}
      onDismiss={() => null}
      maxWidth={800}
    >
      <div className="flex justify-end w-full mb-8">
        <div
          className="flex items-center justify-center w-12 h-12 text-gray-500 bg-blue-400 rounded-full cursor-pointer primary"
          onClick={toggleMintModal}
        >
          <Close />
        </div>
      </div>
      <div className="h-full h-[35rem] flex flex-col lg:flex-row overflow-y-auto">
        <div className="w-full lg:w-1/2">
          <div className="mt-16 h-96">
            <video
              controls
              autoPlay
              loop
              className="w-full h-full min-h-0 mt-8 mb-8 "
              poster="/img/logo.png"
            >
              <source src="/video/success.mp4" type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          {numOfNft && (
            <p className="mt-4 text-center text-blue-400">
              Bravo! You just minted {numOfNft}NFTs and joined the amazing
              league of Pumps. Your NFTs will be live on Feb. 11
            </p>
          )}

          <div className="flex justify-center w-full mb-8">
            <img src="/icons/coming1.svg" className="w-56 h-56" alt="" />
          </div>

          <p className="mt-4 text-2xl text-center ">
            You can view your nft on{" "}
            <a
              target="_blank"
              href="https://opensea.io/"
              className="text-2xl text-green-300 underline"
            >
              opensea.io
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default MintModal;
