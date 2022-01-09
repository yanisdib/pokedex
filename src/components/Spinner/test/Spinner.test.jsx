import { shallow } from 'enzyme';

import Spinner from '../Spinner';


describe('Spinner component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Spinner />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})