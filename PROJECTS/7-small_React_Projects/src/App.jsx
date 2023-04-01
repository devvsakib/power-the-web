import QuoteGenerator from './components/quoteGenerator/quoteGenerator'
import ShoppingList from './components/shoppingList/shoppingList'
import Accordion from './components/accordion/accordion'
import ImageCarousel from './components/imageCarousel/ImageCarousel'
import GithubUserSearch from './components/gihubUserSearch/githubUserSearch'
import VideoPlayer from './components/videoplayer/videoPlayer'
import BMIcalculator from './components/bmiCalculator/bmiCalculator'



function App() {


  return (
    <div >

      <ImageCarousel />
      <Accordion />
      <QuoteGenerator />
      <ShoppingList />
      <GithubUserSearch />
      <VideoPlayer />
      <BMIcalculator />

    </div>
  )
}

export default App
