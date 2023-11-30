import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 4,
  }
  return (
    <>
      <Slider {...settings}>
        {moviesList.map(each => (
          <MovieItem each={each} key={each.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
