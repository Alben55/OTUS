describe('API tests', () => {
  it('Create registered user', async () => {
    const response = await fetch(
      'https://bookstore.demoqa.com/Account/v1/User',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: 'Alben',
          password: 'Qwerty123!',
        }),
      },
    );

    expect(response.status).toEqual(406);

    const data = await response.json();
    console.log(data);
  });

  it('Create user with unsuitable passord', async () => {
    const response = await fetch(
      'https://bookstore.demoqa.com/Account/v1/User',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: 'Alben55',
          password: 'Qwerty123',
        }),
      },
    );

    expect(response.status).toEqual(400);

    const data = await response.json();
    console.log(data);
  });

  it('Create user', async () => {
    const response = await fetch(
      'https://bookstore.demoqa.com/Account/v1/User',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: 'Alben002',
          password: 'Qwerty123!',
        }),
      },
    );

    expect(response.status).toEqual(201);

    const data = await response.json();
    console.log(data);
  });

  it('Success generate token', async () => {
    const response = await fetch(
      'https://bookstore.demoqa.com/Account/v1/GenerateToken',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: 'Alben',
          password: 'Qwerty123!',
        }),
      },
    );

    expect(response.status).toEqual(200);

    const data = await response.json();
    console.log(data);
  });

  it('Failed generate token', async () => {
    const response = await fetch(
      'https://bookstore.demoqa.com/Account/v1/GenerateToken',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: '',
          password: '',
        }),
      },
    );

    expect(response.status).toEqual(400);

    const data = await response.json();
    console.log(data);
  });
});
