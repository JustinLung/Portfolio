export const getVideosQuery = (skip = 0) => `
	query video {
		allUploads(first: 100, skip: ${skip * 100}, filter: {type: {eq: video}}) {
      id
      filename
			url
      size
      video {
        duration
        width
        height
      }
		}
	}
`;

export const getImagesQuery = (skip = 0) => `
    query VideoOrAudio {
        allUploads(first: 100, skip: ${skip * 100}, filter: {type: {eq: image}}) {
          id
          filename
					url
        }
    }
`;

export const getCount = (type) => `
query countUploads {
  _allUploadsMeta(filter: {type: {eq: ${type}}}) {
    count
  }
}
`;
