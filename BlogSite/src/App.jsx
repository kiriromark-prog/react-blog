import Header from "./header.jsx"
import Footer from "./footer.jsx"
import Food   from "./Article.jsx";



function App() {
   return(
    <>
      <Header links={[<a href="#">Services</a>]} />
      <Food name="Orange" description="Each orange is heavy with juice, offering a perfect balance of zesty brightness and natural sweetness. 
                Because they come directly from the farm, they retain their high Vitamin C content and that refreshing, 
                just-plucked flavor that only comes from tree-ripened fruit." price={2.99} image="./oranges.jpg"/>
      <Food name="Apple" description="Our farm-to-table apples are harvested at the peak of ripeness and delivered directly from our orchards to the shop within 24 hours.
                 Each fruit is hand-picked to ensure it retains its natural crunch and vibrant, sun-kissed color" price={1.99} image="./apples.jpg"/>    
      <Food name="Banana" description="Our orchard-fresh bananas are harvested from our sun-drenched groves and brought straight to our shelves,
                 skipping the long-haul shipping and chemical ripening rooms.
                 These are bananas as nature intended: incredibly fragrant,
                  naturally sweet, and packed with farm-fresh nutrients." price={0.99} image="./bananas.jpg"/>                
      <Footer/>


    </>
   );
}

export default App