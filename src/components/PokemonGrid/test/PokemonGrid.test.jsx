import { shallow } from 'enzyme';

import PokemonGrid from '../PokemonGrid';


describe('PokemonGrid component', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<PokemonGrid />))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})