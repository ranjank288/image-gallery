import React from 'react';

const ImageList = (props)=>{
    const imageUrls = props.data.images.map((image)=>{
        return <img src={image.urls.regular} alt={image.alt_description}/>
    });
    return (
        <div>
            Founds: {props.data.totalImage} Images
            <br/>
            {imageUrls}
        </div>
    );
}

export default ImageList;