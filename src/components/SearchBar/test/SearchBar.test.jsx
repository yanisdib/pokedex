import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';

describe('SearchBar component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<SearchBar />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})