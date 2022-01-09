import { shallow } from 'enzyme';

import Tag from '../Tag';


describe('Tag component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Tag />));

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})