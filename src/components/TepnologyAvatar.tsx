import {
  Avatar,
  AvatarBadge,
  AvatarProps,
  ThemeTypings,
} from '@chakra-ui/react';
import { useState } from 'react';
import { User } from 'types/User';
import { TepnologyAvatarModal } from './TepnologyAvatarModal';

export interface TepnologyAvatarProps extends AvatarProps {
  user: User;
  size?: ThemeTypings['components']['Avatar']['sizes'];
  type: 'default' | 'withOnlineStatus';
}

export const TepnologyAvatar: React.FC<TepnologyAvatarProps> = ({
  user,
  type,
  ...rest
}) => {
  const [openModal, setOpenModal] = useState(null);

  const handleAvatarClick = () => {
    if (openModal) {
      openModal();
    }
  };
  return (
    <>
      <TepnologyAvatarModal userData={user} setOpenModal={setOpenModal} />
      {/* Type - Default */}
      {type === 'default' && (
        <Avatar name={user.name} src={user.photoUrl} bg="blackAlpha.500" />
      )}

      {/* Type - With Online Status */}
      {type === 'withOnlineStatus' && (
        <Avatar
          name={user.name}
          src={user.photoUrl}
          bg="blackAlpha.500"
          size={rest.size}
          onClick={handleAvatarClick}
        >
          <AvatarBadge
            bottom={rest.size === 'lg' ? 1 : 2}
            right={rest.size === 'lg' ? 1 : 2}
            position="absolute"
            boxSize={(rest.size === 'lg' && 6) || (rest.size === 'xl' && 8)}
            borderWidth={4}
            bg={user.isOnline ? 'green.500' : 'gray.100'}
          />
        </Avatar>
      )}
    </>
  );
};
