import React, { useState } from 'react';
import { RowsPhotoAlbum } from 'react-photo-album';
import "react-photo-album/rows.css";

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { photos } from './GalleryData';

const Gallerypage = () => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <h1 className="text-center m-5">Gallery</h1>

      {/* Photo Album */}
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      {/* Lightbox */}
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default Gallerypage;
