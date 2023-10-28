import React, { useState } from 'react'
import { ReactReader } from 'react-reader'

function Reader()  {
  const [location, setLocation] = useState(0)
  return (
    <div style={{ height: '100vh' }}>
      <p>Hello</p>
      <ReactReader
        url="https://react-reader.metabits.no/files/alice.epub"
        location={location}
        locationChanged={(epubcfi) => setLocation(epubcfi)}
      />
    </div>
  )
}

export default Reader


//https://www.gutenberg.org/cache/epub/1513/pg1513-images.html