import React from "react";
import { Menu, Popup, List, Button, Image, Modal } from "semantic-ui-react";

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided>
    <List.Item>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
    <Button onClick={removeFromCart.bind(this, id)} color="blue">
          Удалить
    </Button>
    <Modal
      trigger={<Button color="yellow">Купить</Button>}
    >
      <Modal.Header>Поздравляем!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Покупка совершена успешно.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={removeFromCart.bind(this, id)} color="yellow">OK</Button>
      </Modal.Actions>
    </Modal>
    <hr/>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name="browse">Магазин книг</Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup">
        Итого: &nbsp; <b>{totalPrice}</b>&nbsp;грн.
      </Menu.Item>

      <Popup
        trigger={
          <Menu.Item name="help">
            Корзина (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map(book => (
          <CartComponent {...book} />
        ))}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
