import React from 'react';
import ContactImage from '../../common/ContactImage';
import useHover from '../../hooks/useHover';
import CheckBox from '../../common/CheckBox';
import DeleteIcon from '../../assets/delete.svg';

export type ContactItemProps = {
  imageUrl?: string;
  name: string;
  email: string;
  phoneNumber: string;
  id: string;
};
const ContactItem = ({
  name,
  email,
  phoneNumber,
  imageUrl,
  id,
}: ContactItemProps) => {
  const [hoverRef, isHover] = useHover<HTMLDivElement>();
  console.log(id);
  return (
    <div ref={hoverRef} className="contact-item">
      {/* <div> {isHover ? <CheckBox /> : null}</div> */}
      <div className="contact-item-body">
        <span
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <ContactImage />
          <span style={{ marginLeft: 8 }} className="contact-item-name">
            {' '}
            {name}
          </span>
        </span>
        <span className="contact-item-email">{email}</span>
        <span className="contact-item-number">{phoneNumber}</span>
      </div>
      <div className="contact-item-icon">
        {' '}
        {isHover ? <img src={DeleteIcon} alt="" /> : null}
      </div>
    </div>
  );
};

export default ContactItem;
