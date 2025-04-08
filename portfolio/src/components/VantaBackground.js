import React, { useEffect, useRef, useState } from 'react';

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(window.VANTA.NET({
        el: vantaRef.current,
        color: 0xffffff,
        backgroundColor: 0x0f172a,
        points: 12.0,
        maxDistance: 20.0,
        spacing: 15.0,
      }));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }} />;
};

export default VantaBackground;
