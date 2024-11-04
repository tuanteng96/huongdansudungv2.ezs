import { useState } from "react";
import Viewer from "react-viewer";

function PickerQuick({ children, Image }) {
  const [visible, setVisible] = useState(false);
  console.log(document.getElementById("#container-slider"));
  return (
    <>
      {children({
        open: () => setVisible(true),
      })}
      {visible && (
        <Viewer
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
          images={[{ src: Image, alt: "" }]}
          noNavbar
          container={document.getElementById("container-slider")}
        />
      )}
    </>
  );
}

export default PickerQuick;
