import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useRef, FC } from 'react';
import { User } from 'types/User';
import { TepnologyAvatar } from './TepnologyAvatar';

export interface TepnologyAvatarModalProps {
  userData: User;
  setOpenModal: (arg) => void;
}

export const TepnologyAvatarModal: FC<TepnologyAvatarModalProps> = ({
  userData,
  setOpenModal,
}) => {
  const initalRefForModal = useRef();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setOpenModal(() => onOpen);
  });

  return (
    <Modal
      initialFocusRef={initalRefForModal}
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{userData.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Box align="center">
            <TepnologyAvatar
              user={userData}
              type="withOnlineStatus"
              size="xl"
            />
          </Box>
          <Heading>About</Heading>
          <Box ref={initalRefForModal}>{userData.description}</Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
