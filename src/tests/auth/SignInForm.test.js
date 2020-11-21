
import { render, fireEvent, act, wait } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'

import SignInForm from '../../components/auth/SignInForm'

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
            <SignInForm />
        </Provider>
    </MemoryRouter>
);


store.dispatch = jest.fn();

it('submits correct values', async () => {
    const { container, getByRole } = render(<TestingComponent />)

    const email = container.querySelector('input[name="email"]');
    const password = container.querySelector('input[name="password"]')
    const staySignedIn = container.querySelector('input[name="staySignedIn"]')
    const submit = container.querySelector('button[type="submit"]')

    await wait(() => {

        fireEvent.change(email, {
            target: {
                value: 'mock@email.com'
            }
        })

        fireEvent.change(password, {
            target: {
                value: 'mockpassword'
            }
        })

        fireEvent.change(staySignedIn, {
            target: {
                value: true
            }
        })

    });

    await wait(() => {
        fireEvent.click(submit)
    })

    expect(store.dispatch).toHaveBeenCalledTimes(1);

})
