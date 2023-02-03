import Button from '../components/Button';
import { FaBeer } from 'react-icons/fa';

function ButtonPage() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick}>
          <FaBeer />
          Click Me
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Click Me
        </Button>
      </div>
      <div>
        <Button warning>Click Me</Button>
      </div>
      <div>
        <Button success>Click Me</Button>
      </div>
      <div>
        <Button danger outline>
          Click Me
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
