import { Image, Container, Row, Col} from 'react-bootstrap'

function Listings() {
    return (
        <div>
        <h2>Browse stores in Manhattan, KS</h2>
        <Container style={{ marginTop: "40px", textAlign: "center", margin:"32px auto", maxWidth:"1152px" }}>
            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                <Col style={{display: "flex", justifyContent: "space-evenly", margin:"auto"}}>
                    <Col xs=".5" >
                        <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Col>
                <Col sm="1"></Col>
                <Col style={{display: "flex", justifyContent: "space-evenly", margin:"auto"}}>
                    <Col xs=".5">
                        <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/287/3487908a-9bac-4272-a59a-255e4f90c9bd.png" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Dillons</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Col>
                <Col sm="1"></Col>
                <Col style={{display: "flex", justifyContent: "space-evenly", margin:"auto"}}>
                    <Col xs=".5" >
                        <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/457/87419e93-2e92-4c73-8d48-2fc0c2cd390c.png" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Hy-Vee</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Col>
            </Row>

            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly", marginTop:"14px"}} >
                <Col style={{display: "flex", justifyContent: "space-evenly", margin:"auto"}}>
                    <Col xs=".5" >
                        <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Col>
                <Col sm="1"></Col>
                <Col style={{display: "flex", justifyContent: "space-evenly", margin:"auto"}}>
                    <Col xs=".5">
                        <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/287/3487908a-9bac-4272-a59a-255e4f90c9bd.png" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Dillons</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Col>
                <Col sm="1"></Col>
                <Col style={{display: "flex", justifyContent: "space-evenly", margin:"auto"}}>
                    <Col xs=".5" >
                        <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/457/87419e93-2e92-4c73-8d48-2fc0c2cd390c.png" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Hy-Vee</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Listings