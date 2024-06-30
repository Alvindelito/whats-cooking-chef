type InstagramPreviewImageProps = {
  imgUrl: string;
  instagramUrl: string;
  indexNum: number;
}

function InstagramPreviewImage({imgUrl, instagramUrl, indexNum}: InstagramPreviewImageProps) {
  return (
    <a href={instagramUrl} target="_blank">
      <img src={imgUrl} alt={`sample display meal #${indexNum}`} width={250} height={250} />
    </a>
  )
}

export default InstagramPreviewImage;