import React from 'react';

import './styles.css';

type PropsT = { children: React.ReactNode; style?: React.CSSProperties };

const Surface = React.forwardRef((props: PropsT) => {
  const { children, style = {} } = props;
  return (
    <div className="surface" style={{ ...style }}>
      {children}
    </div>
  );
});

export default Surface;
