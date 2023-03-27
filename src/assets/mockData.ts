export const mockTweets = new Array(55).fill(1).map((item, index) => ({
  id: index,
  owner: Math.random() > 0.5 ? 'admin' : 'hhh',
  createdTime: new Date().toLocaleString(),
  content: `Hello World ${index}`,
  icon: 'https://pbs.twimg.com/profile_images/1342086006149791750/Ar0drcXS_x96.jpg',
}))
export const mockUsers = [
  {
    username: 'admin',
    password: 'admin',
  },
  {
    username: 'hhh',
    password: '123',
  },
]
