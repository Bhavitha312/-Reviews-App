import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  reviewsItem = () => {
    const {reviewsList} = this.props
    return (
      <li className="list-container">
        <div className="profile">
          <img src={reviewsList.imgUrl} alt="username" className="image" />
          <h1 className="sub">{reviewsList.username}</h1>
          <p className="para">{reviewsList.companyName}</p>
          <p className="para">{reviewsList.description}</p>
        </div>
      </li>
    )
  }

  render() {
    const {reviewsList} = this.props
    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="row-container">
          <button
            type="button"
            testid="leftArrow"
            className="arrow-button"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <ul className="profile-list">
            {reviewsList.map(each => (
              <this.reviewsItem key={each.id} reviewDetails={each} />
            ))}
          </ul>

          <button
            testid="rightArrow"
            type="button"
            className="arrow-button"
            onClick={this.onRightClickArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
