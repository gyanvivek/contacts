import React from "react";
import ContactImage from "../../common/ContactImage";
import useHover from "../../hooks/useHover";

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
      className={isHover ? "contact-item-active" : "contact-item-deactive"}
      ref={hoverRef}
    >
      <span>
        <ContactImage />
        <span> {name}</span>
      </span>
      <span>{email}</span>
      <span>{phoneNumber}</span>
    </div>
  );
};

export default ContactItem;
