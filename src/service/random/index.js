import randomUser from '..';

export const randomApi = {
  async getUsers() {
    try {
      const result = await randomUser.get('/?results=24');

      const users = result.data.results.map((user) => ({
        picture: `${user.picture.medium}`,
        name: `${user.name.first} ${user.name.last}`,
        gender: `${user.gender}`,
        email: `${user.email}`,
        phone: `${user.phone}`
      }));

      return users;
    } catch (error) {
      console.log(error);
    }
  }
};
