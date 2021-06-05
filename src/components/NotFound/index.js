import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Card
        style={{ border: '1px solid black', width: '50%', textAlign: 'center' }}
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
    </>
  );
}
