import { useState } from "react";
import {
  Page,
  Layout,
  Card,
  Text,
  Button,
  TextField,
  MediaCard,  
  Select,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import WhatsAppWidget from "./app.WhatsAppWidget";

export default function Admin() {
  const [phoneNumber, setPhoneNumber] = useState("+2348123456789");
  const [greetingText, setGreetingText] = useState("Hey there! Need help with your order?");
  const [buttonColor, setButtonColor] = useState("#5B3CC4");
  const [position, setPosition] = useState("right");
  const [previewMode, setPreviewMode] = useState("desktop");
  const [displayMode, setDisplayMode] = useState("text");
  const [buttonText, setButtonText] = useState("Chat with us");
  const [buttonIcon, setButtonIcon] = useState("whatsapp-icon"); // Use icon name without extension

  const positionOptions = [
    { label: "Bottom Right", value: "right" },
    { label: "Bottom Left", value: "left" },
  ];

  const displayModeOptions = [
    { label: "Text only", value: "text" },
    { label: "Icon only", value: "icon" },
    { label: "Text + Icon", value: "both" },
  ];

  const iconOptions = [
    { label: "💬 WhatsApp", value: "whatsapp-icon" },
    { label: "💭 Chat Bubble", value: "comment" },
    { label: "✉️ Envelope", value: "envelope" },
    { label: "🎧 Headset", value: "headset" },
  ];

  return (
    <Page>
      <TitleBar title="Widget Settings" />

      <Layout>

        <Layout.Section>
          <Card sectioned>
            <Text variant="headingLg" as="h1">Customize WhatsApp Widget</Text>
            <Text as="p" variant="bodyMd" tone="subdued">
              Personalize your floating chat button and see real-time updates.
            </Text>
          </Card>
        </Layout.Section>

        <Layout.Section oneHalf>
          <Card sectioned title="Configuration">
            <TextField
              label="WhatsApp Number"
              value={phoneNumber}
              onChange={setPhoneNumber}
              autoComplete="off"
            />

            <TextField
              label="Greeting Text"
              value={greetingText}
              onChange={setGreetingText}
              autoComplete="off"
            />

            <div style={{ margin: "16px 0" }}>
              <label style={{ display: "block", marginBottom: 4 }}>Button Color</label>
              <input
                type="color"
                value={buttonColor}
                onChange={(e) => setButtonColor(e.target.value)}
                style={{ width: "100%", height: 40, border: "1px solid #ccc", borderRadius: 4 }}
              />
            </div>

            <Select
              label="Button Position"
              options={positionOptions}
              value={position}
              onChange={setPosition}
            />

            <Select
              label="Button Display"
              options={displayModeOptions}
              value={displayMode}
              onChange={setDisplayMode}
            />

            {(displayMode === "text" || displayMode === "both") && (
              <TextField
                label="Button Text"
                value={buttonText}
                onChange={setButtonText}
                autoComplete="off"
              />
            )}

            {(displayMode === "icon" || displayMode === "both") && (
              <Select
                label="Button Icon"
                options={iconOptions}
                value={buttonIcon}
                onChange={setButtonIcon}
              />
            )}
          </Card>
        </Layout.Section>

        <Layout.Section oneHalf>
          <Card sectioned title="Live Preview">
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 16 }}>
              <Button
                onClick={() => setPreviewMode("desktop")}
                pressed={previewMode === "desktop"}
              >
                Desktop
              </Button>
              <Button
                onClick={() => setPreviewMode("mobile")}
                pressed={previewMode === "mobile"}
              >
                Mobile
              </Button>
            </div>

            <div
              style={{
                position: "relative",
                border: "1px solid #ddd",
                borderRadius: 8,
                background: "#f9fafb",
                margin: "0 auto",
                overflow: "hidden",
                height: previewMode === "desktop" ? 400 : 667,
                width: previewMode === "desktop" ? "100%" : 375,
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    [position]: 16,
                  }}
                >
                  <WhatsAppWidget
                    phoneNumber={phoneNumber}
                    greetingText={greetingText}
                    buttonColor={buttonColor}
                    position={position}
                    buttonText={["text", "both"].includes(displayMode) ? buttonText : ""}
                    buttonIcon={["icon", "both"].includes(displayMode) ? buttonIcon : ""}
                    displayText={displayMode}
                  />
                </div>
              </div>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}