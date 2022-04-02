import { Card, Image} from 'react-bootstrap'

function Background() {
    return (
        <Card className="text-black" style={{alignItems:"flex-end", backgroundColor:"#deedd6"}}>
            <Card.Img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" 
            alt="Card image" style={{ height: "428px", width:"347px"}} fluid={true} />
            <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default Background