import moment from 'moment';
import logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <div className='text-center space-y-3 mb-6'>
            <img className='mx-auto' src={logo} alt="" />
            <p className="text-lg">Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;