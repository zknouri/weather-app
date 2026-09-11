import { useEffect, useState } from "react";

export default function WeatherIcon({
  slug,
  style = "fill",
  className = "size-28",
}) {
  const [src, setSrc] = useState("");

  useEffect(() => {
    import(`../../node_modules/@meteocons/svg/${style}/${slug}.svg`).then(
      (mod) => setSrc(mod.default),
    );
  }, [style, slug]);

  if (!src) {
    return "No icon source found!";
  }

  return <img src={src} alt={slug} className={className} />;
}
