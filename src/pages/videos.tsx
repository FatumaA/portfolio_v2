import React from 'react'

const Videos = () => {
    return (
        <div className="bg-white">
            <h1>Hello videos</h1>
        </div>
    )
}
Videos.getInitialProps= ({res}) => {
        if (res) {
          res.writeHead(307, {
            Location: 'https://www.youtube.com/c/HijabiCoder/videos'
          });
          res.end();
        }
      
        return {};
}

export default Videos