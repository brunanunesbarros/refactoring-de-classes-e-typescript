import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import {Modal} from '../Modal';
import Input from '../Input';

interface Foods {
  id: number;
  name: string,
  description: string,
  price: string,
  image: string,
  available: boolean
}

interface ModalAppFoodProps {
  isOpen: boolean,
  setIsOpen: () => void,
  handleAddFood: (food: Foods) => Promise<void>,
}

export function ModalAddFood(props: ModalAppFoodProps) {

  async function handleSubmit(data: Foods) {
    props.handleAddFood(data);
    props.setIsOpen();
  }

  return (
    <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
