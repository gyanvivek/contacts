import React from 'react';
import ContactImage from '../../common/ContactImage';
import Surface from '../../common/Surface';
import useHover from '../../hooks/useHover';
import CheckBox from '../../common/CheckBox';
import DeleteIcon from '../../assets/delete.svg';

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
    <div
      ref={hoverRef}
      className={isHover ? 'contact-item-active' : 'contact-item-deactive'}
      style={{ padding: '8px 64px', marginBottom: '8px' }}
    >
      {/* <div> {isHover ? <CheckBox /> : null}</div> */}
      <div>
        <span>
          <ContactImage />
          <span> {name}</span>
        </span>
        <span>{email}</span>
        <span>{phoneNumber}</span>
      </div>
      <div style={{ height: 48, width: 48 }}>
        {' '}
        {isHover ? <img src={DeleteIcon} alt="" /> : null}
      </div>
    </div>
  );
};

export default ContactItem;
