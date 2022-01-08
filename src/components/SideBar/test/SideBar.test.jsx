import { shallow } from 'enzyme';
import SideBar from '../SideBar';

describe('SideBar component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<SideBar />))

    it('renders properly without crashing', () => expect(wrapper).toMatchSnapshot())
})