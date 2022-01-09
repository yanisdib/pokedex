import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import usePokemonTypes from '../../../hooks/usePokemonTypes';

import configureStore from '../../../services/redux/store/configureStore';

import SideBar from '../SideBar';


describe('SideBar component', () => {
    let wrapper;
    const store = configureStore();
    const ReduxProvider = ({ store, children }) => <Provider store={store}>{children}</Provider>;

    beforeAll(() => wrapper = shallow(<ReduxProvider store={store}><SideBar /></ReduxProvider>))

    it('renders properly without crashing', () => expect(wrapper).toMatchSnapshot())
})