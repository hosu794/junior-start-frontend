import { render } from '@testing-library/react'
import renderer from 'react-test-renderer';
import React from 'react'
import AuthModal from '../../components/auth/AuthModal'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const mockStore = configureStore([]);

let store = mockStore({
    authentication: {
        loading: false,
        error: true,
    },
});

const TestingComponent = () => (
    <MemoryRouter>
        <Provider store={store}>
            <AuthModal />
        </Provider>
    </MemoryRouter>
);

it('should render correctly', async () => {

    const tree = renderer.create(<TestingComponent />).toJSON();
    expect(tree).toMatchSnapshot();

})

it('should render SignIn component', () => {
    const { getByText } = render(<TestingComponent />)
    expect(getByText('Zaloguj się')).toBeInTheDocument()
})

it('should render SignUp component', () => {
    const { getByText } = render(<TestingComponent />)
    expect(getByText('Zarejestruj się')).toBeInTheDocument()
})



