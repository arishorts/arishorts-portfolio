import React from "react";

const DownloadLink = ({ fileUrl }) => {
  return (
    <a className="downloadLink" href={fileUrl}>
      Download PDF
    </a>
  );
};

export default DownloadLink;
