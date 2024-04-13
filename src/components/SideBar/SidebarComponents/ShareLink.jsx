import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useStore from "../../../lib/ZustStore";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  PinterestShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  MailruShareButton,
  EmailShareButton,
  FacebookIcon,
  EmailIcon,
  WhatsappIcon,
  TelegramIcon,
  PinterestIcon,
  TwitterIcon,
  LinkedinIcon,
  MailruIcon,
} from "react-share";

function ShareLink({ linkValue }) {
  const { pageInfo, setPageInfo } = useStore((state) => state);
  const [shareData, setShareData] = React.useState(`${process.env.VITE_APP_VIEW}${pageInfo.link}`); // Set your share data here
  useEffect(() => {
    setShareData(`${process.env.VITE_APP_VIEW}${pageInfo.link}`);
    console.log(shareData);
  }, [pageInfo]);

  const share = [
    {
      outlet: "Whatsapp",
      icon: (
        <WhatsappShareButton url={shareData}>
          <WhatsappIcon size={32} round={true} />{" "}
        </WhatsappShareButton>
      ),
    },
    {
      outlet: "Linkedin",
      icon: (
        <LinkedinShareButton url={shareData}>
          <LinkedinIcon size={32} round={true} />{" "}
        </LinkedinShareButton>
      ),
    },
    {
      outlet: "Twitter",
      icon: (
        <TwitterShareButton url={shareData}>
          <TwitterIcon size={32} round={true} />{" "}
        </TwitterShareButton>
      ),
    },
    {
      outlet: "Email",
      icon: (
        <EmailShareButton url={shareData}>
          <EmailIcon size={32} round={true} />{" "}
        </EmailShareButton>
      ),
    },
    {
      outlet: "Telegram",
      icon: (
        <TelegramShareButton url={shareData}>
          <TelegramIcon size={32} round={true} />{" "}
        </TelegramShareButton>
      ),
    },
    {
      outlet: "Facebook",
      icon: (
        <FacebookShareButton url={shareData}>
          <FacebookIcon size={32} round={true} />{" "}
        </FacebookShareButton>
      ),
    },
  ];

  return (
    <div className="flex gap-2 relative items-center justify-center px-8 py-1 pt-2  border border-solid border-accent rounded-full">
      {share.map((item, index) => (
        <span className="w-fit h-fil cursor-pointer hover:scale-105 " key={index}>{item.icon}</span>
      ))}
     
    </div>
  );
}

export default ShareLink;
