import { GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import notfound from '../../images/notfound.jpg';
const Notfound = () => {
  const history = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen">
        <div
          onClick={() => history('/')}
          className="absolute top-10 md:top-20 left-50 btn px-4 animate-bounce z-10 cursor-pointer max-w-4xl h-auto">
          <GrClose size="1.5em" />
        </div>
        <img src={notfound} className="w-72 md:w-96" alt="Page Not Found" />
      </div>
    </>
  );
};

export default Notfound;
