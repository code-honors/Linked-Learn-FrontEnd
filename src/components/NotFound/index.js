import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

export default function NotFound() {
  return (
    <>
    <Navbar/>
      <Card
        style={{ border: '1px solid black', width: '100%',height:'800px',  textAlign: 'center' }}
      >
        <Card.Img
          src="http://placehold.jp/670x150.png?text=404"
          alt="Card image"
        />
        <Card.Title as="h2">There's nothing here.</Card.Title>
        <Card.Text>
          Whatever you were looking for doesn't currently exist at this address.
          Unless you were looking for this error page, in which case: Congrats!
          You totally found it.
        </Card.Text>
        <Card.Text>
          <Link to={{ pathname: '/' }}>
            <h3>Go back home</h3>
          </Link>
        </Card.Text>
      </Card>
      <Footer/>
    </>
  );
}
