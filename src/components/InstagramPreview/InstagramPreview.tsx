import InstagramPreviewImage from "./InstagramPreviewImage";
import {IG_DATA} from "../../constants";

function InstagramPreview() {
  return (
    <div className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-2 gap-1">
      {
        IG_DATA.map(({imgUrl, instagramUrl}, index) => (<InstagramPreviewImage imgUrl={imgUrl} instagramUrl={instagramUrl} key={index} indexNum={index + 1} />)
      )
      }
    </div>
  )
}

export default InstagramPreview;
