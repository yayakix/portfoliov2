import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { motion } from "framer-motion";

export default function ColorScheme() {
  const [dark, setDark] = useState(false);

  const handleOnClick = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <motion.div whileTap={{ scale: 0.5 }} onClick={handleOnClick}>
        <WbSunnyIcon />{" "}
      </motion.div>
    </>
  );
}
