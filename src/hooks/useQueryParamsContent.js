import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useQueryParamsContent() {
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const titleParam = params.get("title");
    const imageParam = params.get("image");
    const paragraphParam = params.get("paragraph");

    const isEditing = location.pathname.startsWith("/edit");
    setCanEdit(isEditing);

    if (isEditing) {
      if (titleParam) setTitle(decodeURIComponent(titleParam));
      if (imageParam) setImage(decodeURIComponent(imageParam));
      if (paragraphParam) setParagraph(decodeURIComponent(paragraphParam));
    }
  }, [location.search, location.pathname]);

  const getContent = (key, fallback = "") => {
    const param = new URLSearchParams(location.search).get(key);
    return canEdit && param ? decodeURIComponent(param) : fallback;
  };

  return { title, image, paragraph, getContent, canEdit };
}
