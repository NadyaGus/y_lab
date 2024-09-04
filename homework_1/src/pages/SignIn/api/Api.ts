interface ResponseSignIn {
  email: string;
  ok: boolean;
  password: string;
  status: number;
}

export const signIn = ({ email, password }: { email: string; password: string }): Promise<ResponseSignIn> => {
  const response = new Promise((resolve, reject) =>
    setTimeout(() => {
      if (email === 'ylab@example.com' && password === 'test') {
        resolve({
          email,
          ok: true,
          password,
          status: 200,
        });
      } else {
        reject(new Error('Wrong email or password'));
      }
    }, 1000),
  );

  return response as Promise<ResponseSignIn>;
};
