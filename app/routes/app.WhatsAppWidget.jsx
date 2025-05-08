import React from "react";

export default function WhatsAppWidget({
  phoneNumber,
  greetingText,
  buttonColor,
  position,
  buttonText,
  buttonIcon,
  displayText = "text", // "text", "icon", or "both"
}) {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
      greetingText
    )}`;
    window.open(url, "_blank");
  };

  // Updated path to point to public/icons/
  const iconPath = {
    "whatsapp-icon": "/icons/whatsapp-icon.svg",
    "comment": "/icons/comment.png",
    "envelope": "/icons/envelope.png",
    "headset": "/icons/headset.png",
  };

  const iconSrc = iconPath[buttonIcon];

  return (
    <button
      onClick={handleClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: displayText === "icon" ? "center" : "flex-start",
        backgroundColor: buttonColor,
        border: "none",
        borderRadius: displayText === "icon" ? "50%" : "8px",
        padding: displayText === "icon" ? "12px" : "8px 16px",
        cursor: "pointer",
        gap: displayText === "both" ? "8px" : "0",
        color: "#fff",
        minWidth: displayText === "icon" ? "60px" : "auto",
        minHeight: displayText === "icon" ? "60px" : "auto",
      }}
    >
      {(displayText === "icon" || displayText === "both") && iconSrc && (
        <img
          src={iconSrc}
          alt="icon"
          style={{
            width: displayText === "icon" ? "36px" : "20px",
            height: displayText === "icon" ? "36px" : "20px",
            objectFit: "contain",
            filter: "brightness(0) invert(1)", // Make icon appear white
          }}
        />
      )}

      {(displayText === "text" || displayText === "both") && (
        <span style={{ fontWeight: 500 }}>{buttonText}</span>
      )}
    </button>
  );
}
