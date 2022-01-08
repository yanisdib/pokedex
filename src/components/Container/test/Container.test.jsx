import { shallow } from 'enzyme';
import Container from '../Container';

describe('Container component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Container />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})