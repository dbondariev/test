import React from 'react';
import { Card, Image, Button, Modal, Header } from 'semantic-ui-react';

const BookCard = book => {
  const { title, author, price, image, information, addToCart, addedCount } = book;
  const [open, setOpen] = React.useState(false);

  return (
    <Card>
      <div className="card-image">
        <Image src={image} />
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          {price} грн.
        </a>
      </Card.Content>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button className='first_btn' color='blue'>Информация о книге</Button>}
      >
        <Modal.Content image>
          <Modal.Description>
            <Header>{title}</Header>
            <p>{author}</p>
            <p>{price} грн.</p>
            <p><em>{information}</em></p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            Закрыть
          </Button>
        </Modal.Actions>
      </Modal>
      <Button onClick={addToCart.bind(this, book)}>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default BookCard;
