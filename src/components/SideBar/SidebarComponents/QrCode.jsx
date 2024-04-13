import React, { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import useStore from "../../../lib/ZustStore";


function QrCode() {
  const { pageInfo } = useStore((state) => state);


  return (
    <>
      <div className="w-fit h-fit" id="qr-code">
      <QRCodeSVG
        value={`${process.env.VITE_APP_VIEW}${pageInfo.link}`}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
      />
      </div>
    </>
  );
}

export default QrCode;
