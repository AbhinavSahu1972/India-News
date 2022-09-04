import React from 'react'
import './experimentalStyle.css'
function News(props) {

    const {newsData} = props;

  return (
    <div className='container'>
        {
            newsData.map((newsItem , index) =>{

                const {author , title , description , url , urlToImage , content } =newsItem;

                return(
                    <div className='news-card' key={index}>
                    
                    <div className='new-card-items title'>
                        {title}
                    </div>

                    <div className='new-card-items image-container'>
                        <img src={urlToImage} alt='some Image'/>
                    </div>

                    <div className='new-card-items description'>
                        {description}
                    </div>
                    <div className='new-card-items author'>
                    - {author ? author:'unknown'}
                    </div>
                    <div className="new-card-items custom-button">
                        <a href={url} target = '_blank'>
                            <div>
                                Read More
                            </div>
                        </a>
                    </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default News