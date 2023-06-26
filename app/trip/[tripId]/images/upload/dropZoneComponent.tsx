"use client";
import { faUpload } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "80vw",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#3F3D56",
  height: "300px",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  gap: "10px",
};

const focusedStyle = {
  borderColor: "black",
};

const acceptStyle = {
  backgroundColor: "#117151",
};

const rejectStyle = {
  backgroundColor: "#711111",
};

export default function DropzoneComponent({ setFiles }: { setFiles: any }) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
        "image/jpg": [],
      },
      onDrop: (files) => setFiles(files[0]),
      maxFiles: 1,
    });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  ) as React.CSSProperties;

  return (
    <div className="container text-center">
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <FontAwesomeIcon
          icon={faCloudUpload as IconProp}
          className="text-headingBlue w-[60px] h-[60px] object-cover"
        />
        <p className="text-white text-[20px] md:text-[35px] font-bold">
          Drop your files here, or{" "}
          <span className="text-headingBlue">browse</span>
        </p>
        <p className="text-[#A09E9E] font-bold text-[15px] md:text-[20px]">
          (PNG, JPG and JPEG files are allowed)
        </p>
      </div>
    </div>
  );
}
