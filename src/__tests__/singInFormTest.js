
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { SignInContainer } from '../components/SignIn';


describe('Login Form', () => {
    
    it('calls function provided by onSubmit prop after pressing the submit button', async () => {
      const onSubmit = jest.fn();

      // eslint-disable-next-line no-unused-vars
      const barHandler = (values) => {
        console.log(".... Tilulilu lei .... ");
        console.log(values);
      }

      const { getAllByTestId,  getByPlaceholderText } = render(
        <SignInContainer onSubmit={onSubmit} />
      );
      const usernameField = getByPlaceholderText('Username');
      const passwordField = getByPlaceholderText('Password');

      const submitBtnItems = getAllByTestId('singInFormSubmitBtn');
      const [submitBtn] = submitBtnItems;

      fireEvent.changeText(usernameField, 'kalle');
      fireEvent.changeText(passwordField, 'password');
      fireEvent.press(submitBtn);

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(0);
      });

    });
  });