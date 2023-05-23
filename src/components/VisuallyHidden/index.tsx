'use client';

import { useEffect, useState } from 'react';

type Props = {
  children: JSX.Element | string;
};

const VisuallyHidden = ({ children }: Props) => {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Alt') {
          setForceShow(true);
        }
      };

      const handleKeyUp = () => {
        setForceShow(false);
      };

      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keydown', handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return <>{children}</>;
  }

  return (
    <span className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden border-0 p-0 [clip:rect(0,0,0,0)]">
      {children}
    </span>
  );
};

export default VisuallyHidden;
