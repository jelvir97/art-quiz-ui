
const ArtImage= ({image_id})=>{
    return (
        <img src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} className=" object-scale-down max-h-full m-auto"/>
    )
}

export default ArtImage;