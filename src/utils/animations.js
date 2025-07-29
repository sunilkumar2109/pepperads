// WetaFX-inspired animation utilities and presets

// Professional easing curves used in film production
export const easingCurves = {
  // Cinematic ease - smooth and dramatic
  cinematic: [0.25, 0.46, 0.45, 0.94],

  // Sharp and snappy - for UI elements
  snappy: [0.68, -0.55, 0.265, 1.55],

  // Smooth and flowing - for continuous animations
  smooth: [0.23, 1, 0.32, 1],

  // Bounce effect - for playful elements
  bounce: [0.68, -0.6, 0.32, 1.6],

  // Elastic - for attention-grabbing elements
  elastic: [0.175, 0.885, 0.32, 1.275]
};

// Stagger timing configurations
export const staggerConfig = {
  // Quick succession
  rapid: {
    staggerChildren: 0.1,
    delayChildren: 0.2
  },

  // Standard pace
  normal: {
    staggerChildren: 0.3,
    delayChildren: 0.1
  },

  // Slow and dramatic
  dramatic: {
    staggerChildren: 0.5,
    delayChildren: 0.3
  },

  // Very slow for hero sections
  hero: {
    staggerChildren: 0.8,
    delayChildren: 0.5
  }
};

// Pre-built animation variants
export const animationVariants = {
  // Fade animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: easingCurves.cinematic }
    }
  },

  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 60,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: easingCurves.cinematic
      }
    }
  },

  fadeInDown: {
    hidden: {
      opacity: 0,
      y: -60,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: easingCurves.cinematic
      }
    }
  },

  // Scale animations
  scaleIn: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(8px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: easingCurves.cinematic
      }
    }
  },

  scaleInBounce: {
    hidden: {
      opacity: 0,
      scale: 0.3
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: easingCurves.bounce
      }
    }
  },

  // Slide animations
  slideInLeft: {
    hidden: {
      opacity: 0,
      x: -100,
      filter: "blur(6px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: easingCurves.cinematic
      }
    }
  },

  slideInRight: {
    hidden: {
      opacity: 0,
      x: 100,
      filter: "blur(6px)"
    },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: easingCurves.cinematic
      }
    }
  },

  // Complex cinematic entrance
  cinematicEntrance: {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
      filter: "blur(10px)",
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      rotateX: 0,
      transition: {
        duration: 1.5,
        ease: easingCurves.cinematic,
        ...staggerConfig.normal
      }
    }
  },

  // Hero section entrance
  heroEntrance: {
    hidden: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 2,
        ease: easingCurves.cinematic,
        ...staggerConfig.hero
      }
    }
  },

  // Text reveal animation
  textReveal: {
    hidden: {
      opacity: 0,
      y: 100,
      skewY: 7
    },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 1,
        ease: easingCurves.cinematic
      }
    }
  },

  // Container with staggered children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ...staggerConfig.normal,
        when: "beforeChildren"
      }
    }
  }
};

// Hover effects for interactive elements
export const hoverEffects = {
  // Subtle scale effect
  subtleScale: {
    scale: 1.05,
    transition: { duration: 0.3, ease: easingCurves.smooth }
  },

  // Dramatic scale with glow
  dramaticScale: {
    scale: 1.1,
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
    transition: { duration: 0.4, ease: easingCurves.elastic }
  },

  // Lift effect
  lift: {
    y: -10,
    scale: 1.02,
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)",
    transition: { duration: 0.3, ease: easingCurves.smooth }
  },

  // Rotate and scale
  rotateScale: {
    rotate: 5,
    scale: 1.05,
    transition: { duration: 0.3, ease: easingCurves.smooth }
  },

  // Glow effect
  glow: {
    boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
    transition: { duration: 0.3 }
  }
};

// Page transition variants
export const pageTransitions = {
  fadeSlide: {
    initial: { opacity: 0, x: 50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -50 }
  },

  scaleRotate: {
    initial: { opacity: 0, scale: 0.8, rotate: -10 },
    in: { opacity: 1, scale: 1, rotate: 0 },
    out: { opacity: 0, scale: 1.2, rotate: 10 }
  }
};

// Utility function to create scroll-triggered animations
export const createScrollAnimation = (variant = 'fadeInUp', options = {}) => {
  return {
    variants: animationVariants[variant],
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px", ...options.viewport },
    ...options
  };
};
