import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimateIntoView = props => {
  const [ref, inView] = useInView({
    // https://github.com/thebuilder/react-intersection-observer#options
    threshold: 0,
    triggerOnce: true,
  });

  const variants = {
    hide: {
      opacity: 0,
      translateY: '100px',
    },
    show: {
      opacity: 1,
      translateY: '0px',
    },
  };

  return (
    <motion.div
      {...props}
      ref={ref}
      variants={variants}
      animate={inView ? 'show' : 'hide'}
      transition={{
        duration: 2,
      }}
    />
  );
};

export default AnimateIntoView;