export const signIn = ({ email, password }: { email: string; password: string }): void => {
  try {
    fetch('https://reqres.in/api/login', {
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }).catch((error) => console.error(error));
  } catch (error) {
    console.error(error);
  }
};
