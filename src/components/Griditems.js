import {Button, Card} from 'react-bootstrap';

const Griditems = (props) => {
    return ( 
        <>
        <div className="col-4">
            <Card>
              <Card.Img variant="top" src={props.imageFile}/>
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                 {props.desc}
                </Card.Text>
                <Button className="btn-danger">Add To Cart</Button>
            </Card.Body>
            </Card>
        </div>  
        </>
     );
}
 
export default Griditems;