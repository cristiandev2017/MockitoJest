import axios from 'axios';
import Users from 'C:/Users/deixy/OneDrive/Escritorio/Trainig_SOFKA/TallerJest/my-app/src/users/user.js';
jest.mock('axios');
test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);
  return Users.all().then(data => expect(data).toEqual(users));
});