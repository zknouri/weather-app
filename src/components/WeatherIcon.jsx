import { useEffect, useState } from "react"


export default function WeatherIcon({slug, style = 'fill'}){
    const [src, setSrc] = useState("");

    useEffect(() =>{
        // const iconURL = new URL(`../../node_modules/@meteocons/svg/${style}/${slug}.svg`, import.meta.url).href;

        // setSrc(iconURL);

        import(`../../node_modules/@meteocons/svg/${style}/${slug}.svg`).then(mod => setSrc(mod.default));

    }, [style, slug])

    if(!src){
        return 'No icon source found!';
    }

    return <img src={src} alt={slug} className="size-28"/>
}