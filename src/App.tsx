import { Button, ColorPicker, Flex, Input, QRCode } from "antd";
import { ChangeEvent, ReactElement, useState } from "react";
import styled from "styled-components";
import { Image } from "antd";
import images, { Image as ImageT } from "./images";

const Main = styled.main`
  padding: 50px 30px;
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

const CustomInput = styled(Input)`
  max-width: 400px;
`;

const QRCodeWrapper = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomQRCode = styled(QRCode)`
  margin: 20px auto;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const CutomImage = styled(Image)<{ $selected: boolean }>`
  outline: 1px solid ${({ $selected }) => ($selected ? "blue" : "transparent")};
  cursor: pointer;
`;

const App = (): ReactElement => {
  const [url, setUrl] = useState("");
  const [selectedImage, setSelectedImage] = useState<ImageT>();
  const [qrColor, setQrColor] = useState("#000000");
  const [qrBackgroundColor, setQrBackgroundColor] = useState("#ffffff00");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUrl(value);
  };

  const handleSelectImage = (image: ImageT) => {
    if (image.id === selectedImage?.id) {
      setSelectedImage(undefined);
    } else {
      setSelectedImage(image);
    }
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector<HTMLCanvasElement>("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      a.click();
    }
  };

  return (
    <Main>
      <CustomInput
        defaultValue={url}
        placeholder="https://sysken.net/"
        onChange={handleChange}
      />

      <QRCodeWrapper>
        <CustomQRCode
          errorLevel="H"
          value={url === "" ? "https://sysken.net/" : url}
          status={url === "" ? "loading" : "active"}
          icon={selectedImage?.src ?? ""}
          color={qrColor}
          bgColor={qrBackgroundColor}
        />
      </QRCodeWrapper>

      <Flex justify="center" align="center" gap={10}>
        <ColorPicker
          defaultValue={qrColor}
          size="small"
          showText
          onChange={(c) => setQrColor(c.toHexString())}
        />
        <ColorPicker
          defaultValue={qrBackgroundColor}
          size="small"
          showText
          onChange={(c) => setQrBackgroundColor(c.toHexString())}
        />

        <Button type="primary" onClick={downloadQRCode}>
          Download
        </Button>
      </Flex>

      <ImageWrapper>
        {images.map((image) => (
          <CutomImage
            key={image.src}
            width={200}
            src={image.src}
            preview={false}
            $selected={selectedImage?.id === image.id}
            onClick={() => handleSelectImage(image)}
          />
        ))}
      </ImageWrapper>
    </Main>
  );
};

export default App;
