import { Card, Image} from 'react-bootstrap'

function Background() {
    return (
        <Card className="text-black" style={{alignItems:"flex-end", backgroundColor:"#deedd6", textAlign:"left"}}>
            <Card.Img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" 
            alt="Card image" style={{ height: "308px", width:"250px"}} fluid={true} />
            <Card.ImgOverlay>
                <Card.Text style={{fontSize:"41px", color:"#343538", fontWeight:"600", width:"578px", marginTop:"1em", marginLeft:"50px"}}>
                Order groceries for delivery or pickup today
                </Card.Text>
                <Card.Text style={{fontSize:"15px", color:"#343538", fontWeight:"normal", marginLeft:"2.5em"}}>
                    Whatever you want from local stores, brought right to your door.</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Background