import { FC, useRef } from 'react';
import { User } from 'types/User';
import Slider from 'react-slick';
import { Box } from '@chakra-ui/layout';
import { TepnologyAvatar } from './TepnologyAvatar';
import { CarouselLeft } from './Icons/CarouselLeft';
import { CarouselRight } from './Icons/CarouselRight';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface AvatarCarouselProps {
  usersData: User[];
}

export const AvatarCarousel: FC<AvatarCarouselProps> = ({ usersData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  const slider = useRef<Slider | undefined>();

  const onPrevious = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };
  const onNext = () => {
    if (slider && slider.current) {
      slider.current.slickNext();
    }
  };

  return (
    <Box px={5} position="relative">
      {
        <Box
          top="5px"
          left="-20px"
          position="absolute"
          h="full"
          w="calc(100% + 40px)"
        >
          <CarouselLeft
            float="left"
            w={8}
            h={10}
            color="blackAlpha.500"
            onClick={onPrevious}
            cursor="pointer"
          />
          <CarouselRight
            onClick={onNext}
            w={8}
            h={10}
            color="blackAlpha.500"
            float="right"
            cursor="pointer"
          />
        </Box>
      }
      <Slider ref={slider} {...settings}>
        {usersData.map((userData, i) => {
          return (
            <Box mb={4} key={i} cursor="pointer" align="center">
              <TepnologyAvatar
                w={12}
                borderWidth="3px"
                borderColor="gray.50"
                h={12}
                user={userData}
                type="withOnlineStatus"
                size="lg"
              />
              <Box>{userData.isOnline}</Box>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};
