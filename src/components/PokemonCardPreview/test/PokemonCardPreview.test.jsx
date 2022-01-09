import { shallow } from 'enzyme';

import PokemonCardPreview from '../PokemonCardPreview';


describe('PokemonCardPreview component', () => {
    let wrapper;

    const pokemonFixture = {
        name: 'Bulbasaur',
        id: 1,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
        types: [{
            slot: 1,
            type: { name: 'grass' }
        }]
    }

    const { name, id, sprite, types } = pokemonFixture;

    beforeAll(() => wrapper = shallow(
        <PokemonCardPreview
            name={name}
            number={id}
            sprite={sprite}
            types={types}
        />
    ))

    it('renders correctly without crashing', () => expect(wrapper).toMatchSnapshot())
})