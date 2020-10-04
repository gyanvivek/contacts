import React from 'react';
import ContactImage from '../../common/ContactImage';
import Surface from '../../common/Surface';
import useHover from '../../hooks/useHover';

export type ContactItemProps = {
  imageUrl?: string;
  name: string;
  email: string;
  phoneNumber: string;
};
const ContactItem = ({
  name,
  email,
  phoneNumber,
  imageUrl,
}: ContactItemProps) => {
  const [hoverRef, isHover] = useHover<HTMLDivElement>();

  return (
    <Surface
      ref={hoverRef}
      style={{ padding: '8px 64px', marginBottom: '8px' }}
    >
      <div style={{ display: 'flex' }}>
        <span>
          <ContactImage />
          <span> {name}</span>
        </span>
        <span>{email}</span>
        <span>{phoneNumber}</span>
      </div>
    </Surface>
  );
};

export default ContactItem;
