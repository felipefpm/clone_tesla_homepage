import React, { useCallback, useLayoutEffect, useState } from 'react';

import useWrapperScroll from '../useWrapperScroll';
import { CarModel } from '../ContextModels';

import { Container } from './styles';
import { useTransform } from 'framer-motion';

interface Props {
  model: CarModel
}

type SectionDimesions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  
  const getSectionDimesions = useCallback(
    () => {
      return {
        offsetTop: model.sectionRef.current?.offsetTop,
        offsetHeight: model.sectionRef.current?.offsetHeight
      } as SectionDimesions
    }, [model.sectionRef])

  const [dimensions, setDimensions] = useState<SectionDimesions>(
    getSectionDimesions()
  )

  useLayoutEffect(() => {
    
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimesions()))
    };

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)

  }, [getSectionDimesions])

  const { scrollY } = useWrapperScroll()

  const sectionScrollProgress = useTransform(scrollY, y => (y - dimensions.offsetTop) / dimensions.offsetHeight)

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  )

  const pointerEvents = useTransform(opacity, value => 
    value > 0 ? 'auto' : 'none'
    )

  return (
    <Container style={{ opacity, pointerEvents }}>
      { children }
    </Container>
  );
};

export default ModelOverlay;
