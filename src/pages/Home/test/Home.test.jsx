import { shallow } from 'enzyme';

import Home from '../Home';


describe('Home page', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Home />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})