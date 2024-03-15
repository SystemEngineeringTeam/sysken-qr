import { Button, Input, QRCode } from "antd";
import { ChangeEvent, ReactElement, useRef, useState } from "react";
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

const ButtonWrapper = styled.div`
  margin: 10px 0 30px;
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUrl(value);
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector<HTMLCanvasElement>("canvas");
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement("a");
      a.download = "QRCode.png";
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
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
        />
      </QRCodeWrapper>

      <ButtonWrapper>
        <Button type="primary" onClick={downloadQRCode}>
          Download
        </Button>
      </ButtonWrapper>

      <ImageWrapper>
        {images.map((image) => (
          <CutomImage
            key={image.src}
            width={200}
            src={image.src}
            preview={false}
            $selected={selectedImage?.id === image.id}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </ImageWrapper>
    </Main>
  );
};

export default App;
